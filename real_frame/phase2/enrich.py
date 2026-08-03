#!/usr/bin/env python3
"""
STAGE 2 — Enrich & select
=========================
Takes the candidate pool from Stage 1 (candidates.csv), opens each file to
learn what search metadata can't tell us, then makes the final pick.

Adds:
  - frame_count : number of TOP-LEVEL frames (the real "screens" count).
                  Top-level frames are counted, not every nested FRAME, so a
                  one-screen file reads as ~1 even if it has many sub-frames.

Filters / selection:
  - DROP anything with fewer than MIN_FRAMES top-level frames (default 3).
  - Final ranking carries Stage 1's score (which already weights views/likes
    and the whole-app vs section title signals). Frame count breaks ties.
  - Output the top TOTAL_LINKS overall, with at most MAX_PER_COMPANY per company.
  - Date is never used here either.

Output: final20.csv  — the manifest your export stage consumes.

Community files need their real file key, which isn't the community id in the
URL. We reuse the proven "Open in Figma" browser trick to resolve it, then call
the REST API. Requires both:
  export FIGMA_COOKIE='<your __Host-figma.authn cookie value>'
  export FIGMA_TOKEN='<your figd_... personal access token>'
"""

import asyncio
import csv
import os
import re
import sys
import time
import urllib.request

from playwright.async_api import async_playwright

# --------------------------------------------------------------------------
# Config
# --------------------------------------------------------------------------
INPUT_FILE      = "candidates3.csv"
OUTPUT_FILE     = "final23.csv"
MIN_FRAMES      = 3      # hard floor: drop files with fewer top-level frames
TOTAL_LINKS     = 220     # final number of links
MAX_PER_COMPANY = 5      # max duplicates per company
HEADLESS        = True   # run the browser without a visible window. If key
                         # resolution starts failing in headless, set False.

# Pre-trim: only enrich the strongest candidates instead of the whole pool.
# Keep the top PRETRIM_PER_COMPANY by score per company (a buffer above
# MAX_PER_COMPANY so we still fill TOTAL_LINKS after <MIN_FRAMES drops).
# Set to 0 to disable and enrich every candidate.
PRETRIM_PER_COMPANY = 6

# Engagement floors applied during pre-trim: drop any candidate below these
# before it's ever opened. Set either to 0 to disable that floor.
MIN_USER_COUNT = 100    # minimum views/uses (user_count)
MIN_LIKE_COUNT = 5      # minimum likes

# Rate limiting. The reactive 429 backoff below is the real safety net; the
# proactive batch pause is light. Raise BATCH_PAUSE only if you see 429s.
BATCH_SIZE      = 15     # files between proactive pauses
BATCH_PAUSE     = 30     # seconds
RATE_LIMIT_PAUSE = 60    # seconds on a 429 (escalates per retry)

FIGMA_COOKIE = os.environ.get("FIGMA_COOKIE", "")
FIGMA_TOKEN  = os.environ.get("FIGMA_TOKEN", "")
if not FIGMA_COOKIE or not FIGMA_TOKEN:
    sys.exit("ERROR: set both FIGMA_COOKIE and FIGMA_TOKEN env vars.")

API_HEADERS = {"X-Figma-Token": FIGMA_TOKEN, "Accept": "application/json"}

# Title filters (mirror find_links.py so enrichment is self-contained).
TITLE_EXCLUDE = ["clone", "redesign", "tutorial", "exercise", "course",
                 "challenge", "study", "practice", "remake", "fan made",
                 "template", "templates", "figma", "dashboard", "free",
                 "s&p", "s&p 500", "fortune 500", "fortune 1000",
                 "logos", "logo pack", "logo collection", "logotypes",
                 "all logos", "company logos", "brand logos", "brands"]
UI_REQUIRED = ["ui kit", "ui kits", "ui screen", "ui screens", "ui design",
               "ui", "ux", "app ui", "mobile ui", "web ui", "screens",
               "app", "mobile app", "web app", "website", "mobile",
               "app design", "web design", "design system",
               "wireframe", "prototype", "interface", "ios", "android"]


def contains_word(text, word):
    t = (text or "").lower()
    w = re.escape((word or "").lower())
    return re.search(r"(?<![a-z0-9])" + w + r"(?![a-z0-9])", t) is not None


def title_has_company(title, company):
    c = (company or "").lower().strip()
    if not c:
        return False
    forms = {c}
    base = c.split(".")[0]
    if len(base) >= 3:
        forms.add(base)
    return any(contains_word(title, f) for f in forms)


# --------------------------------------------------------------------------
# REST API
# --------------------------------------------------------------------------
def api_get(url):
    req = urllib.request.Request(url, headers=API_HEADERS)
    with urllib.request.urlopen(req, timeout=20) as r:
        import json
        return json.loads(r.read())


def get_file_meta(file_key):
    """depth=2 returns document -> pages -> top-level children, which is all
    we need to count top-level frames cheaply."""
    for attempt in range(5):
        try:
            return api_get(f"https://api.figma.com/v1/files/{file_key}?depth=2")
        except Exception as e:
            if "429" in str(e):
                wait = RATE_LIMIT_PAUSE * (attempt + 1)
                print(f"    rate limited; waiting {wait}s ({attempt+1}/5)")
                time.sleep(wait)
            else:
                raise
    raise RuntimeError("max retries exceeded")


def count_top_level_frames(file_data):
    """Count top-level FRAME nodes across all pages. Descends one level into
    SECTION nodes, since some files group their screens inside sections."""
    doc = file_data.get("document", {})
    count = 0
    for page in doc.get("children", []):          # CANVAS / page nodes
        for node in page.get("children", []):     # top-level nodes on the page
            t = node.get("type")
            if t == "FRAME":
                count += 1
            elif t == "SECTION":
                for inner in node.get("children", []):
                    if inner.get("type") == "FRAME":
                        count += 1
    return count


# --------------------------------------------------------------------------
# Community URL -> real file key (browser trick from the old extractor)
# --------------------------------------------------------------------------
async def resolve_file_key(context, community_url):
    page = await context.new_page()
    try:
        await page.goto(community_url, wait_until="domcontentloaded")
        await page.wait_for_timeout(2500)
        async with context.expect_page() as new_page_info:
            btn = await page.wait_for_selector("text=Open in Figma", timeout=8000)
            await btn.click()
        new_page = await new_page_info.value
        await new_page.wait_for_load_state("domcontentloaded")
        await new_page.wait_for_timeout(4000)
        url = new_page.url
        m = re.search(r"/design/([^/?]+)", url) or re.search(r"/file/([^/?]+)", url)
        await new_page.close()
        if m:
            return m.group(1)
    except Exception as e:
        print(f"    browser error: {e}")
    finally:
        try:
            await page.close()
        except Exception:
            pass
    return None


# --------------------------------------------------------------------------
# Selection
# --------------------------------------------------------------------------
def pick_final(enriched):
    """For each company, lock to a SINGLE publisher (preferring the official
    company account), keep up to MAX_PER_COMPANY of that publisher's files,
    then take the global top TOTAL_LINKS by score (frame_count breaks ties)."""

    def norm(s):
        return re.sub(r"[^a-z0-9]", "", (s or "").lower())

    by_company = {}
    for r in enriched:
        by_company.setdefault(r.get("company", ""), []).append(r)

    selected = []
    for company, rows in by_company.items():
        comp = norm(company)
        # "Official" = the publisher's name contains the company name.
        official = [r for r in rows if comp and comp in norm(r.get("author"))]
        pool = official if official else rows
        # Lock to the single best publisher in that pool (top-scoring one).
        pool.sort(key=lambda r: (-float(r["score"]), -r["frame_count"]))
        publisher = pool[0].get("author", "")
        # Keep that publisher's files only, best first, capped per company.
        keep = [r for r in rows if r.get("author", "") == publisher]
        keep.sort(key=lambda r: (-float(r["score"]), -r["frame_count"]))
        selected.extend(keep[:MAX_PER_COMPANY])

    # Global pick: top by score, but each document (file_key) maps to only one
    # company across the whole set (criterion 3: one company per document),
    # with the per-company cap honored (a company may hold up to MAX_PER_COMPANY).
    selected.sort(key=lambda r: (-float(r["score"]), -r["frame_count"]))
    final, used_keys, per_company = [], set(), {}
    for r in selected:
        k = r.get("file_key", "")
        c = r.get("company", "")
        if k and k in used_keys:
            continue
        if per_company.get(c, 0) >= MAX_PER_COMPANY:
            continue
        final.append(r)
        used_keys.add(k)
        per_company[c] = per_company.get(c, 0) + 1
        if len(final) >= TOTAL_LINKS:
            break
    return final


async def main():
    with open(INPUT_FILE, newline="") as f:
        candidates = [r for r in csv.DictReader(f) if r.get("url")]
    print(f"Loaded {len(candidates)} candidates")

    # Pre-trim: apply every criterion judgeable from search metadata, so the
    # enrichment step only opens files that already pass everything else.
    if PRETRIM_PER_COMPANY:
        def as_int(v):
            try:
                return int(float(v))
            except (TypeError, ValueError):
                return 0

        n0 = len(candidates)
        # Title excludes (word-boundary) incl. multi-company / logo packs.
        candidates = [r for r in candidates
                      if not any(contains_word(r.get("title", ""), w)
                                 for w in TITLE_EXCLUDE)]
        n1 = len(candidates)
        # Criterion 4: company as a whole word in the TITLE or the AUTHOR
        # (matches Stage 1 — official-account files name the brand in author).
        candidates = [r for r in candidates
                      if title_has_company(r.get("title", ""), r.get("company", ""))
                      or title_has_company(r.get("author", ""), r.get("company", ""))]
        n2 = len(candidates)
        # Criterion 2: must be a UI screen / UI kit.
        candidates = [r for r in candidates
                      if any(contains_word(r.get("title", ""), w)
                             for w in UI_REQUIRED)]
        n3 = len(candidates)
        # Engagement floors.
        candidates = [r for r in candidates
                      if as_int(r.get("user_count")) >= MIN_USER_COUNT
                      and as_int(r.get("like_count")) >= MIN_LIKE_COUNT]
        n4 = len(candidates)

        # Criterion 3: one company per document — a document can represent at
        # most one company. Globally dedupe by URL, keeping the highest-scoring
        # company's claim. (A company may still hold multiple distinct docs.)
        best_by_url = {}
        for r in sorted(candidates, key=lambda x: -float(x.get("score", 0) or 0)):
            u = r.get("url")
            if u and u not in best_by_url:
                best_by_url[u] = r
        candidates = list(best_by_url.values())
        n5 = len(candidates)

        print("Pre-trim funnel:")
        print(f"  loaded                 : {n0}")
        print(f"  after title-excludes   : {n1}  (-{n0 - n1})")
        print(f"  after company-in-title/author: {n2}  (-{n1 - n2})")
        print(f"  after UI-type          : {n3}  (-{n2 - n3})")
        print(f"  after engagement floors: {n4}  (-{n3 - n4})")
        print(f"  after 1-company/doc    : {n5}  (-{n4 - n5})")

        # Then keep the top PRETRIM_PER_COMPANY by score per company (a buffer
        # above MAX_PER_COMPANY to survive the <MIN_FRAMES drops in enrichment).
        by_company = {}
        for r in sorted(candidates, key=lambda x: -float(x.get("score", 0) or 0)):
            by_company.setdefault(r.get("company", ""), []).append(r)
        candidates = [r for rows in by_company.values()
                      for r in rows[:PRETRIM_PER_COMPANY]]
        print(f"Pre-trimmed to {len(candidates)} "
              f"(top {PRETRIM_PER_COMPANY}/company by score)")

    enriched = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=HEADLESS)
        context = await browser.new_context(
            user_agent=("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                        "AppleWebKit/537.36 (KHTML, like Gecko) "
                        "Chrome/124.0.0.0 Safari/537.36"))
        await context.add_cookies([{
            "name": "__Host-figma.authn", "value": FIGMA_COOKIE,
            "domain": "www.figma.com", "path": "/", "secure": True,
        }])

        for i, row in enumerate(candidates):
            print(f"\n[{i+1}/{len(candidates)}] {row['company']}: {row['title']}")
            if i > 0 and i % BATCH_SIZE == 0:
                print(f"--- batch pause {BATCH_PAUSE//60} min ---")
                await asyncio.sleep(BATCH_PAUSE)

            key = await resolve_file_key(context, row["url"])
            if not key:
                print("    could not resolve file key; skipping")
                continue
            try:
                meta = get_file_meta(key)
            except Exception as e:
                print(f"    api error: {e}; skipping")
                continue

            frames = count_top_level_frames(meta)
            print(f"    file key {key} | top-level frames: {frames}")
            if frames < MIN_FRAMES:
                print(f"    dropped (< {MIN_FRAMES} frames)")
                continue

            row["file_key"] = key
            row["frame_count"] = frames
            enriched.append(row)

        await browser.close()

    final = pick_final(enriched)

    fieldnames = ["company", "title", "author", "score", "user_count",
                  "like_count", "frame_count", "year", "file_key", "url"]
    with open(OUTPUT_FILE, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        w.writeheader()
        w.writerows(final)

    print(f"\nDone -> {OUTPUT_FILE}: {len(final)} links "
          f"(<= {MAX_PER_COMPANY}/company, >= {MIN_FRAMES} frames each)")
    print("Next: point your export stage at final20.csv (file_key column is ready).")


if __name__ == "__main__":
    asyncio.run(main())
