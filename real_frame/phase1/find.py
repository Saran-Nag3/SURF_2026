#!/usr/bin/env python3
"""
STAGE 1 — Link finder
=====================
Searches the Figma Community for UI Screens / UI Kits of real companies.

What this stage decides (everything available from search metadata alone):
  - free only
  - hard-excludes clones / redesigns / tutorials etc.
  - ranks by views (user_count) + likes + a "whole app" title boost
    and a "specific section" title penalty
  - DATE IS NOT A FACTOR. We record the year for reference only; it never
    affects the score, so the pool is not skewed toward the newest files.

What it does NOT decide (needs the file opened -> Stage 2):
  - frame count (the >=3 floor)

Output: candidates.csv  — a generous pool (CANDIDATES_PER_COMPANY each) that
Stage 2 enriches with frame counts and trims to the final 20.

Auth:
  export FIGMA_COOKIE='<your __Host-figma.authn cookie value>'
"""

import csv
import json
import os
import random
import re
import sys
import time
import urllib.request
import urllib.parse
from rapidfuzz import fuzz

# --------------------------------------------------------------------------
# Config — tweak these freely
# --------------------------------------------------------------------------
COMPANIES_FILE = '''companies.txt'''
OUTPUT_FILE = '''candidates_real.csv'''
SAMPLE_SIZE = 0     # random companies to use per run from the big
                                # list. 0 = use ALL (slow: ~6 search calls each,
                                # so the full 1,278 list is thousands of calls).
SEED_BIAS = False    # always include the design-relevant seed
                                # companies first, then random-fill the rest.
                                # Hugely improves hit rate vs. pure random,
                                # since most of the big list has no Figma files.
SEED_FILE = "companies_seed.txt"
CANDIDATES_PER_COMPANY = 20      # how many to keep per company (productive
                                 # brands have more than 8 valid matches)
MAX_NUM_RESULTS = 50      # raw results requested per query (was 20) —
                                 # more raw means more survive the filters
REQUEST_PAUSE  = 0.5     # seconds between requests (politeness)

# Query expansion — more distinct queries surface more unique files (deduped).
QUERY_SUFFIXES = ["UI kit", "UI screens", "app", "mobile app", "ios app",
                  "android app", "website", "design system", "design", ""]

# Titles/descriptions containing any of these are DROPPED entirely.
EXCLUDE_WORDS = ["clone", "redesign", "tutorial", "exercise", "course",
                 "challenge", "study", "practice", "remake", "fan made",
                 "concept redesign", "template", "templates"]

# Checked against the TITLE ONLY (not description). Words here are too common
# in descriptions to match there ("figma", "free" appear in almost every one).
# Also catches multi-company / logo-pack files (the S&P-500-logos problem).
TITLE_EXCLUDE_WORDS = ["figma", "dashboard", "free",
                       "s&p", "s&p 500", "fortune 500", "fortune 1000",
                       "logos", "logo pack", "logo collection", "logotypes",
                       "all logos", "company logos", "brand logos", "brands"]

# Document-type allowlist (criterion 2): the title MUST contain at least one of
# these, so only UI screens / app / kit work gets through. Broadened to match
# how people actually title these files (not just the literal "ui kit").
UI_REQUIRED_WORDS = ["ui kit", "ui kits", "ui screen", "ui screens", "ui design",
                     "ui", "ux", "app ui", "mobile ui", "web ui", "screens",
                     "app", "mobile app", "web app", "website", "mobile",
                     "app design", "web design", "design system",
                     "wireframe", "prototype", "interface", "ios", "android"]

# Funnel diagnostics: how many candidates each gate rejects across the run.
STATS = {"raw": 0, "excluded_word": 0, "title_excluded": 0,
         "no_company_match": 0, "not_ui_type": 0, "not_free": 0, "kept": 0}


# Title signals it is scoped to a SPECIFIC SECTION -> soft penalty.
SECTION_WORDS = ["login", "sign in", "signin", "sign-up", "sign up", "signup",
                 "checkout", "settings screen", "profile screen", "onboarding screen",
                 "single screen", "one screen", "update", "splash", "paywall",
                 "404", "error screen"]

# Title signals it is a WHOLE app / kit -> soft bonus.
WHOLE_WORDS = ["ui kit", "design system", "app", "full app", "complete",
               "all screens", "screens", "mobile app", "web app",
               "application"]

FIGMA_COOKIE = os.environ.get("FIGMA_COOKIE", "")
if not FIGMA_COOKIE:
    sys.exit("ERROR: set FIGMA_COOKIE env var (your __Host-figma.authn cookie value).")

HEADERS = {
    "User-Agent": ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                   "AppleWebKit/537.36 (KHTML, like Gecko) "
                   "Chrome/124.0.0.0 Safari/537.36"),
    "Accept": "application/json",
    "Referer": "https://www.figma.com/community",
    "Cookie": f"__Host-figma.authn={FIGMA_COOKIE}",
}


# --------------------------------------------------------------------------
# Helpers
# --------------------------------------------------------------------------
def fetch_json(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read())


def is_free(model):
    """Defensive free check. The query already filters price=free, but the
    endpoint's field names vary, so we check whatever is present and only
    reject when we positively see a paid signal."""
    for key in ("price", "price_cents", "is_paid", "paid"):
        if key in model:
            v = model[key]
            if key == "price" and isinstance(v, str):
                return v.lower() in ("free", "0", "")
            if isinstance(v, (int, float)):
                return v == 0 if key in ("price_cents",) else not v
            if isinstance(v, bool):
                return not v
    return True  # no paid signal found -> assume free (query already scoped)


def extract_year(model):
    """Best-effort year for reference only — never used in scoring."""
    for key in ("created_at", "published_at", "created_timestamp",
                "publish_date", "created", "date"):
        v = model.get(key)
        if not v:
            continue
        s = str(v)
        # ISO-ish string -> first 4 digits that look like a year
        for token in (s[:4],):
            if token.isdigit() and 2010 <= int(token) <= 2100:
                return token
        # epoch seconds/ms
        try:
            ts = float(v)
            if ts > 1e12:
                ts /= 1000.0
            yr = time.gmtime(ts).tm_year
            if 2010 <= yr <= 2100:
                return str(yr)
        except (TypeError, ValueError):
            pass
    return ""


def has_word(text, words):
    t = text.lower()
    return any(w in t for w in words)


def contains_word(text, word):
    """Whole-word (boundary) match, case-insensitive. Prevents substring hits
    like 'apple' inside 'snapple' or 'ui' inside 'guide'."""
    t = (text or "").lower()
    w = re.escape((word or "").lower())
    return re.search(r"(?<![a-z0-9])" + w + r"(?![a-z0-9])", t) is not None


def title_has_company(title, company):
    """True only if the company appears in the title as a whole word/phrase.
    Also accepts the part before the first dot for domain-style names
    (e.g. 'linear.app' also matches a title containing 'linear')."""
    c = (company or "").lower().strip()
    if not c:
        return False
    forms = {c}
    base = c.split(".")[0]
    if len(base) >= 3:
        forms.add(base)
    return any(contains_word(title, f) for f in forms)


# --------------------------------------------------------------------------
# Scoring — NO date term anywhere
# --------------------------------------------------------------------------
def score_candidate(company, model):
    title = model.get("name", "") or ""
    publisher = model.get("publisher") or {}
    publisher_name = publisher.get("name", "") or publisher.get("profile_handle", "")
    creator = model.get("creator") or {}
    creator_handle = creator.get("handle", "") or ""
    like_count = model.get("like_count", 0) or 0
    user_count = model.get("user_count", 0) or 0  # views/uses proxy
    company_lower = company.lower()
    title_lower = title.lower()

    # Relevance of title to the company name
    title_score = fuzz.partial_ratio(company_lower, title_lower)

    # Leading-token exact match (e.g. "Stripe ..." for company "stripe")
    title_words = title_lower.split()
    exact_title_bonus = 25 if title_words and title_words[0] == company_lower \
        and len(title_words) <= 4 else 0

    # Official author bonus (an official company kit is usually the best result)
    publisher_score = fuzz.partial_ratio(company_lower, publisher_name.lower())
    official_bonus = 40 if publisher_score >= 90 else (20 if publisher_score >= 70 else 0)
    creator_score = fuzz.partial_ratio(company_lower, creator_handle.lower())
    creator_bonus = 20 if creator_score >= 80 else 0

    # VIEWS as an explicit contributing factor (weighted a touch above likes)
    views_score = min(user_count / 5000.0, 25)
    likes_score = min(like_count / 500.0, 15)

    # Whole-app vs specific-section title signals
    whole_bonus = 20 if has_word(title_lower, WHOLE_WORDS) else 0
    section_penalty = -25 if has_word(title_lower, SECTION_WORDS) else 0

    total = (title_score + exact_title_bonus + official_bonus + creator_bonus
             + views_score + likes_score + whole_bonus + section_penalty)
    return round(total, 2)


def search_company(company):
    seen = set()
    candidates = []

    for suffix in QUERY_SUFFIXES:
        query = f"{company} {suffix}".strip()
        encoded = urllib.parse.quote(query)
        url = (f"https://www.figma.com/api/search/resources?query={encoded}"
               f"&price=free&creators=all&sort_by=relevancy"
               f"&resource_type=design_template&session_id=scraper"
               f"&max_num_results={MAX_NUM_RESULTS}")
        try:
            data = fetch_json(url)
            items = data.get("meta", {}).get("results", [])
        except Exception as e:
            print(f"    error for '{query}': {e}")
            continue
        print(f"    query '{query}' -> {len(items)} hits")

        for item in items:
            model = item.get("model", item)
            file_url = model.get("community_rdp_url") or model.get("rdp_url", "")
            if not file_url or file_url in seen:
                continue
            STATS["raw"] += 1

            title = model.get("name", "") or ""
            description = (model.get("description", "") or "")[:300]
            publisher = model.get("publisher") or {}
            publisher_name = publisher.get("name", "") or publisher.get("profile_handle", "")
            creator = model.get("creator") or {}
            author_text = f"{publisher_name} {creator.get('handle', '') or ''}"

            # HARD excludes
            if has_word(title + " " + description, EXCLUDE_WORDS):
                STATS["excluded_word"] += 1
                continue
            if any(contains_word(title, w) for w in TITLE_EXCLUDE_WORDS):
                STATS["title_excluded"] += 1
                continue
            # Criterion 4: company as a whole word, in the TITLE or the AUTHOR
            # (an official account's file may not repeat the brand in the title).
            if not (title_has_company(title, company)
                    or title_has_company(author_text, company)):
                STATS["no_company_match"] += 1
                continue
            if not any(contains_word(title, w) for w in UI_REQUIRED_WORDS):
                STATS["not_ui_type"] += 1                    # criterion 2
                continue
            if not is_free(model):
                STATS["not_free"] += 1
                continue

            STATS["kept"] += 1
            seen.add(file_url)
            candidates.append({
                "title": title,
                "author": publisher_name,
                "description": description,
                "url": file_url,
                "like_count": model.get("like_count", 0) or 0,
                "user_count": model.get("user_count", 0) or 0,
                "year": extract_year(model),  # reference only
                "score": score_candidate(company, model),
            })
        time.sleep(REQUEST_PAUSE)

    return sorted(candidates, key=lambda x: -x["score"])[:CANDIDATES_PER_COMPANY]


def main():
    companies = [c for c in open(COMPANIES_FILE).read().splitlines() if c.strip()]

    if SAMPLE_SIZE and 0 < SAMPLE_SIZE < len(companies):
        chosen = []
        if SEED_BIAS and os.path.exists(SEED_FILE):
            seeds = [s for s in open(SEED_FILE).read().splitlines() if s.strip()]
            chosen = seeds[:SAMPLE_SIZE]
            seen_lower = {c.lower() for c in chosen}
            remaining = [c for c in companies if c.lower() not in seen_lower]
            fill = SAMPLE_SIZE - len(chosen)
            if fill > 0 and remaining:
                chosen += random.sample(remaining, min(fill, len(remaining)))
            print(f"Seed-biased sample: {len(seeds[:SAMPLE_SIZE])} seeds "
                  f"+ {len(chosen) - len(seeds[:SAMPLE_SIZE])} random "
                  f"= {len(chosen)} companies.")
        else:
            chosen = random.sample(companies, SAMPLE_SIZE)
            print(f"Sampled {len(chosen)} companies from the list for this run.")
        companies = chosen
    else:
        print(f"Using all {len(companies)} companies (this may be slow).")
    rows = []

    for company in companies:
        print(f"\nSearching: {company}")
        found = search_company(company)
        print(f"  -> {len(found)} candidates kept")
        for rank, c in enumerate(found, 1):
            rows.append({
                "company": company,
                "rank_in_company": rank,
                "title": c["title"],
                "author": c["author"],
                "score": c["score"],
                "like_count": c["like_count"],
                "user_count": c["user_count"],
                "year": c["year"],
                "url": c["url"],
            })

    fieldnames = ["company", "rank_in_company", "title", "author", "score",
                  "like_count", "user_count", "year", "url"]
    with open(OUTPUT_FILE, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        w.writerows(rows)

    print(f"\nDone -> {OUTPUT_FILE} ({len(rows)} rows across {len(companies)} companies)")
    print("\nFunnel (where candidates were dropped):")
    print(f"  raw results seen        : {STATS['raw']}")
    print(f"  dropped: excluded word  : {STATS['excluded_word']}")
    print(f"  dropped: title-exclude  : {STATS['title_excluded']}")
    print(f"  dropped: no company match: {STATS['no_company_match']}")
    print(f"  dropped: not UI type    : {STATS['not_ui_type']}")
    print(f"  dropped: not free       : {STATS['not_free']}")
    print(f"  KEPT                    : {STATS['kept']}")
    if STATS["raw"] == 0:
        print("  NOTE: 0 raw results — the sampled companies likely have no "
              "Community files. Try the seed list (see below).")
    print("\nNext: run enrich_links.py to add frame counts and pick the final 20.")


if __name__ == "__main__":
    main()
