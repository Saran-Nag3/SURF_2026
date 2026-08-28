#!/usr/bin/env python3
"""
STAGE 2 — Enrich & select
=========================
Takes the candidate pool from Stage 1, DUPLICATES each community file into your
own workspace as an EDITABLE copy, (optionally) moves the copy into a Pro TEAM
PROJECT so it gets the high REST tier, then opens the copy to count screens and
makes the final pick.

THE BUG THIS VERSION FIXES
--------------------------
Clicking "Open in Figma" on a community file often just opens the publisher's
ORIGINAL in VIEW-ONLY mode — no copy is created. The old code recorded that
original's key as if it were a copy. Because the original lives in the
publisher's free workspace, every REST read of it is 'low' tier: a small burst
succeeds, then it locks out for days. That looked like "my account drops tiers",
but really you were reading view-only originals the whole time.

This version DUPLICATES properly and VERIFIES it has an editable copy you own
before recording anything. If it can only get a view-only original, it prints
"view-only; no editable copy" and skips — it will NOT cache a non-copy.

TIER NOTE
---------
A file's REST tier depends on WHERE IT LIVES:
  - community original (publisher's space) -> low
  - your personal Drafts copy              -> starter (still limited)
  - copy inside a Pro TEAM PROJECT         -> high  (confirmed: 15 rapid calls,
                                                     zero 429s)
So for reliable high-tier reads the copy should end up in a team project. Set
DUPLICATE_INTO_TEAM=True and TEAM_PROJECT_URL. (If you confirm a real Drafts
copy is already high-tier on your plan, you can leave it False — see TEST below.)

Requires both env vars (SAME Pro account) before the run begins:
  export FIGMA_COOKIE='<your __Host-figma.authn cookie value>'
  export FIGMA_TOKEN='<your figd_... personal access token>'

OPTIONAL FOR FIRST RUNS: HEADLESS=False so you can VERIFY the duplication actually happen.
"""

import asyncio
import csv
import json
import os
import re
import sys
import time
import urllib.request
import urllib.error

from playwright.async_api import async_playwright

# --------------------------------------------------------------------------
# Config
# --------------------------------------------------------------------------
INPUT_FILE      = '''candidates.csv or output of phase1'''
OUTPUT_FILE     = '''output.csv'''
MIN_FRAMES      = 1      # Base floor requirements
TOTAL_LINKS     = 0      # 0 = no ceiling
MAX_PER_COMPANY = 20
HEADLESS        = True  # keep False until duplication is confirmed working

# Copies must live in a Pro team project for the high REST tier. Set this to the
# project's URL (open the project in Figma, copy the address bar), e.g.
#   https://www.figma.com/files/project/123456789/Team-project
DUPLICATE_INTO_TEAM = True
TEAM_PROJECT_URL = '''https://www.figma.com/files/project/123456789/Team-project''' # <-- REQUIRED when DUPLICATE_INTO_TEAM is True
# The project's DISPLAY NAME exactly as it appears in Figma's sidebar (used to
# pick it in the 'Move to project' dialog). Can't be derived from the URL above
# when the URL ends in a numeric project id, so set it explicitly.

TEAM_PROJECT_NAME   = "Team project"

PRETRIM_PER_COMPANY = 10

USE_CACHE  = True
CACHE_FILE = "enrich_cache.json"

MIN_USER_COUNT = 20     # Base floor requirements
MIN_LIKE_COUNT = 1      # Base floor requirements

PER_CALL_DELAY     = 3
FETCH_DEPTH        = 2
BATCH_SIZE         = 15
BATCH_PAUSE        = 30
RATE_LIMIT_PAUSE   = 60
RETRY_AFTER_BUFFER = 12
DUPLICATE_DELAY    = 4    # seconds between duplications (avoid silent throttling)

FIGMA_COOKIE = os.environ.get("FIGMA_COOKIE", "")
FIGMA_TOKEN  = os.environ.get("FIGMA_TOKEN", "")
if not FIGMA_COOKIE or not FIGMA_TOKEN:
    sys.exit("ERROR: set both FIGMA_COOKIE and FIGMA_TOKEN env vars.")
if DUPLICATE_INTO_TEAM and not TEAM_PROJECT_URL:
    sys.exit("ERROR: DUPLICATE_INTO_TEAM is True but TEAM_PROJECT_URL is empty.")

API_HEADERS = {"X-Figma-Token": FIGMA_TOKEN, "Accept": "application/json"}

TITLE_EXCLUDE = ["clone", "redesign", "tutorial", "exercise", "course",
                 "challenge", "study", "practice", "remake", "fan made",
                 "game", "games", "gaming", "arcade", "puzzle",
                 "ar", "vr", "xr", "virtual reality", "augmented reality",
                 "metaverse",
                 "s&p", "s&p 500", "fortune 500", "fortune 1000",
                 "logos", "logo pack", "logo collection", "logotypes",
                 "all logos", "company logos", "brand logos", "brands"]
UI_REQUIRED = ["ui kit", "ui kits", "ui screen", "ui screens", "ui design",
               "ui", "ux", "app ui", "mobile ui", "web ui", "screens", "screen",
               "app", "mobile app", "web app", "website", "web", "mobile",
               "app design", "web design", "design system", "dashboard",
               "landing", "landing page", "page", "component", "components",
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


def is_supported_design_url(url):
    u = (url or "").lower()
    if not u:
        return False
    bad = ("/site/", "/board/", "/make/", "/deck/", "/slides/", "/whiteboard/")
    if any(b in u for b in bad):
        return False
    ok = ("/design/", "/file/", "/community/file/", "figma.com/community")
    return any(o in u for o in ok)


# --------------------------------------------------------------------------
# Cache
# --------------------------------------------------------------------------
def load_cache():
    if USE_CACHE and os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE) as f:
                return json.load(f)
        except Exception:
            print(f"    (cache unreadable, starting fresh: {CACHE_FILE})")
    return {}


def save_cache(cache):
    if not USE_CACHE:
        return
    try:
        tmp = CACHE_FILE + ".tmp"
        with open(tmp, "w") as f:
            json.dump(cache, f, indent=2)
        os.replace(tmp, CACHE_FILE)
    except Exception as e:
        print(f"    (cache save failed: {e})")


# --------------------------------------------------------------------------
# REST API
# --------------------------------------------------------------------------
def api_get(url):
    req = urllib.request.Request(url, headers=API_HEADERS)
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read())


class LowTierError(RuntimeError):
    """File is 'low' tier => not in your paid team project."""


class SkipFileError(RuntimeError):
    """400/404 => not a queryable design file."""


def get_file_meta(file_key):
    for attempt in range(5):
        try:
            time.sleep(PER_CALL_DELAY)
            return api_get(f"https://api.figma.com/v1/files/{file_key}"
                           f"?depth={FETCH_DEPTH}")
        except urllib.error.HTTPError as e:
            if e.code == 429:
                retry_after = e.headers.get("Retry-After")
                limit_type  = e.headers.get("X-Figma-Rate-Limit-Type")
                plan_tier   = e.headers.get("X-Figma-Plan-Tier")
                print(f"    429 | type={limit_type} | plan={plan_tier} | "
                      f"Retry-After={retry_after}")
                if (limit_type or "").lower() == "low":
                    raise LowTierError(
                        "low-tier: copy not in your paid team project")
                if retry_after and str(retry_after).isdigit() \
                        and int(retry_after) <= 300:
                    wait = int(retry_after) + RETRY_AFTER_BUFFER
                else:
                    wait = RATE_LIMIT_PAUSE * (attempt + 1)
                print(f"    waiting {wait}s ({attempt+1}/5)")
                time.sleep(wait)
            elif e.code in (400, 404):
                raise SkipFileError(f"HTTP {e.code}: not a queryable design file")
            else:
                raise
    raise RuntimeError("max retries exceeded")


def count_top_level_frames(file_data):
    SCREEN = {"FRAME", "COMPONENT", "COMPONENT_SET", "INSTANCE"}
    CONTAINER = {"SECTION", "GROUP"}
    doc = file_data.get("document", {})
    count = 0
    for page in doc.get("children", []):
        for node in page.get("children", []):
            t = node.get("type")
            if t in SCREEN:
                count += 1
            elif t in CONTAINER:
                for inner in node.get("children", []):
                    if inner.get("type") in SCREEN:
                        count += 1
    return count


# --------------------------------------------------------------------------
# Duplication (the important part) -> editable copy key
# --------------------------------------------------------------------------
def _community_id(url):
    m = re.search(r"/community/file/(\d+)", url or "")
    return m.group(1) if m else None


def _key_of(url):
    m = re.search(r"/design/([^/?]+)", url) or re.search(r"/file/([^/?]+)", url)
    return m.group(1) if m else None


# Buttons that, when present IN AN OPEN FILE, mean it is VIEW-ONLY (an original
# you don't own). Their ABSENCE is how we confirm we're in an editable copy.
VIEWONLY_MARKERS = ["text=Get a copy", "text=Open in Figma", "text=Duplicate"]


async def _looks_viewonly(pg):
    for sel in VIEWONLY_MARKERS:
        try:
            el = await pg.query_selector(sel)
            if el and await el.is_visible():
                return el
        except Exception:
            continue
    return None


async def _duplicate_and_get_key(context, community_url):
    """Return (editable_copy_key, in_team) or (None, False).

    Two-stage and verified:
      1. Open the community page, click the copy/open action -> a tab opens.
      2. If that tab is VIEW-ONLY (a 'Get a copy' button is present in it),
         click that in-editor button to actually create the editable copy.
      3. Confirm the final tab is editable (no view-only markers) AND its key
         differs from the community id. Only then return the key.
    """
    comm_id = _community_id(community_url)
    page = await context.new_page()
    try:
        await page.goto(community_url, wait_until="domcontentloaded")
        await page.wait_for_timeout(2500)

        # Stage 1: click the community-page action (prefer copy-creating ones).
        btn = None
        for sel in ["text=Get a copy", "text=Duplicate", "text=Open in Figma"]:
            try:
                btn = await page.wait_for_selector(sel, timeout=4000)
                if btn:
                    print(f"    click (community page): {sel}")
                    break
            except Exception:
                continue
        if not btn:
            print("    no action button on community page")
            return None, False

        async with context.expect_page() as np_info:
            await btn.click()
        ed = await np_info.value
        await ed.wait_for_load_state("domcontentloaded")
        await ed.wait_for_timeout(4000)

        # Stage 2: if view-only, trigger the in-editor copy and follow it.
        for _ in range(2):
            marker = await _looks_viewonly(ed)
            key = _key_of(ed.url)
            is_copy = ("is-community-duplicate=1" in ed.url) or \
                      (key and comm_id and key != comm_id)
            if not marker and is_copy and key:
                break  # editable copy confirmed
            if marker:
                print("    view-only tab; clicking in-editor copy button")
                try:
                    async with context.expect_page(timeout=8000) as np2:
                        await marker.click()
                    ed2 = await np2.value
                    await ed2.wait_for_load_state("domcontentloaded")
                    await ed2.wait_for_timeout(4000)
                    ed = ed2
                except Exception:
                    # maybe it navigated the same tab instead of opening one
                    await ed.wait_for_timeout(4000)
                continue
            break

        # Final verification.
        key = _key_of(ed.url)
        marker = await _looks_viewonly(ed)
        is_copy = ("is-community-duplicate=1" in ed.url) or \
                  (key and comm_id and key != comm_id)
        if marker or not key or not is_copy:
            print(f"    view-only; no editable copy (url={ed.url[:80]}...)")
            try:
                await ed.close()
            except Exception:
                pass
            return None, False

        print(f"    editable copy: {key}")
        in_team = False
        if DUPLICATE_INTO_TEAM:
            in_team = await _move_copy_to_project(ed, key)
        try:
            await ed.close()
        except Exception:
            pass
        return key, in_team
    except Exception as e:
        print(f"    browser error: {e}")
        return None, False
    finally:
        try:
            await page.close()
        except Exception:
            pass


async def _move_copy_to_project(editor_page, key):
    """Move the just-created copy into TEAM_PROJECT_URL via the editor's
    'Move to project' menu. Returns True on apparent success. Selectors reflect
    the current editor; run HEADLESS=False to watch and adjust if needed."""
    try:
        menu_btn = None
        for sel in ['[aria-label="Main menu"]',
                    '[data-testid="editor-menu-toggle"]',
                    'button[aria-label="Menu"]']:
            try:
                menu_btn = await editor_page.wait_for_selector(sel, timeout=3000)
                if menu_btn:
                    break
            except Exception:
                continue
        if not menu_btn:
            print("    move: main menu button not found")
            return False
        await menu_btn.click()
        await editor_page.wait_for_timeout(800)

        for sel in ['text=File']:
            try:
                f = await editor_page.wait_for_selector(sel, timeout=1500)
                if f:
                    await f.click()
                    await editor_page.wait_for_timeout(500)
            except Exception:
                pass

        move_item = None
        for sel in ['text=Move to project', 'text=Move file to project',
                    'text=Move to…', 'text=Move to...']:
            try:
                move_item = await editor_page.wait_for_selector(sel, timeout=2500)
                if move_item:
                    break
            except Exception:
                continue
        if not move_item:
            print("    move: 'Move to project' not found")
            return False
        await move_item.click()
        await editor_page.wait_for_timeout(1200)

        proj_name = TEAM_PROJECT_NAME
        picked = False
        for sel in [f'text={proj_name}', 'text=Team project']:
            try:
                opt = await editor_page.wait_for_selector(sel, timeout=2500)
                if opt:
                    await opt.click()
                    picked = True
                    break
            except Exception:
                continue
        if not picked:
            print(f"    move: destination '{proj_name}'/'Team project' not found")
            return False
        await editor_page.wait_for_timeout(600)

        for sel in ['button:has-text("Move")', 'text=Move file', 'text=Move']:
            try:
                conf = await editor_page.wait_for_selector(sel, timeout=2000)
                if conf:
                    await conf.click()
                    break
            except Exception:
                continue
        await editor_page.wait_for_timeout(1500)
        print("    moved copy into team project")
        return True
    except Exception as e:
        print(f"    move-to-project error: {e}")
        return False


# --------------------------------------------------------------------------
# Selection
# --------------------------------------------------------------------------
def pick_final(enriched):
    # Group by company; each company contributes its top MAX_PER_COMPANY files
    # by score, regardless of which author published them.
    # (Publisher-lock removed: previously only one author per company survived,
    #  which dropped good third-party files for companies like Apple.)
    by_company = {}
    for r in enriched:
        by_company.setdefault(r.get("company", ""), []).append(r)

    selected = []
    for company, rows in by_company.items():
        rows.sort(key=lambda r: (-float(r["score"]), -r["frame_count"]))
        selected.extend(rows[:MAX_PER_COMPANY])

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
        if TOTAL_LINKS and len(final) >= TOTAL_LINKS:
            break
    return final


async def main():
    with open(INPUT_FILE, newline="") as f:
        candidates = [r for r in csv.DictReader(f) if r.get("url")]
    print(f"Loaded {len(candidates)} candidates")

    n_before = len(candidates)
    candidates = [r for r in candidates if is_supported_design_url(r.get("url"))]
    if n_before - len(candidates):
        print(f"Dropped {n_before - len(candidates)} non-design URLs")

    if PRETRIM_PER_COMPANY:
        def as_int(v):
            try:
                return int(float(v))
            except (TypeError, ValueError):
                return 0

        n0 = len(candidates)
        candidates = [r for r in candidates
                      if not any(contains_word(r.get("title", ""), w)
                                 for w in TITLE_EXCLUDE)]
        n1 = len(candidates)
        candidates = [r for r in candidates
                      if title_has_company(r.get("title", ""), r.get("company", ""))
                      or title_has_company(r.get("author", ""), r.get("company", ""))]
        n2 = len(candidates)
        candidates = [r for r in candidates
                      if any(contains_word(r.get("title", ""), w)
                             for w in UI_REQUIRED)]
        n3 = len(candidates)
        candidates = [r for r in candidates
                      if as_int(r.get("user_count")) >= MIN_USER_COUNT
                      and as_int(r.get("like_count")) >= MIN_LIKE_COUNT]
        n4 = len(candidates)

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

        by_company = {}
        for r in sorted(candidates, key=lambda x: -float(x.get("score", 0) or 0)):
            by_company.setdefault(r.get("company", ""), []).append(r)
        candidates = [r for rows in by_company.values()
                      for r in rows[:PRETRIM_PER_COMPANY]]
        print(f"Pre-trimmed to {len(candidates)} "
              f"(top {PRETRIM_PER_COMPANY}/company by score)")

    enriched = []
    n_unresolved = n_apierr = n_fewframes = n_cached = n_lowtier = n_skip = 0
    cache = load_cache()
    if cache:
        print(f"Loaded cache: {len(cache)} previously processed URLs")
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
            url = (row.get("url") or "").strip()
            entry = cache.get(url, {})
            key = entry.get("file_key")
            frames = entry.get("frame_count")

            if key and frames is not None:
                if frames == -1:
                    print(f"    cached skip (not a design file): {key}")
                    n_skip += 1
                    continue
                print(f"    cached: copy {key} | screens: {frames}")
                n_cached += 1
            else:
                if i > 0 and i % BATCH_SIZE == 0:
                    print(f"--- batch pause {BATCH_PAUSE//60} min ---")
                    await asyncio.sleep(BATCH_PAUSE)

                if not key:
                    key, in_team = await _duplicate_and_get_key(context, url)
                    await asyncio.sleep(DUPLICATE_DELAY)
                if not key:
                    print("    could not create editable copy; skipping")
                    n_unresolved += 1
                    continue
                try:
                    meta = get_file_meta(key)
                except LowTierError as e:
                    print(f"    {e}; skipping (NOT counted as done)")
                    n_lowtier += 1
                    cache[url] = {"file_key": key, "frame_count": None}
                    save_cache(cache)
                    continue
                except SkipFileError as e:
                    print(f"    {e}; skipping permanently")
                    n_skip += 1
                    cache[url] = {"file_key": key, "frame_count": -1}
                    save_cache(cache)
                    continue
                except Exception as e:
                    print(f"    api error: {e}; skipping")
                    n_apierr += 1
                    cache[url] = {"file_key": key, "frame_count": None}
                    save_cache(cache)
                    continue

                frames = count_top_level_frames(meta)
                cache[url] = {"file_key": key, "frame_count": frames}
                save_cache(cache)
                print(f"    copy key {key} | screens: {frames}")

            if frames < MIN_FRAMES:
                print(f"    dropped (< {MIN_FRAMES} frames)")
                n_fewframes += 1
                continue

            row["file_key"] = key
            row["frame_count"] = frames
            enriched.append(row)

        await browser.close()

    print(f"\nEnrichment summary: {len(candidates)} processed | "
          f"{n_cached} from cache | {n_unresolved} no-copy | "
          f"{n_lowtier} low-tier | {n_skip} skipped | "
          f"{n_apierr} api errors | "
          f"{n_fewframes} dropped <{MIN_FRAMES} frames | "
          f"{len(enriched)} passed")
    if n_lowtier:
        print(f"  NOTE: {n_lowtier} low-tier => copy not in team project. "
              f"Check the move step (HEADLESS=False) and TEAM_PROJECT_URL.")

    final = pick_final(enriched)
    fieldnames = ["company", "title", "author", "score", "user_count",
                  "like_count", "frame_count", "year", "file_key", "url"]
    with open(OUTPUT_FILE, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        w.writeheader()
        w.writerows(final)

    print(f"\nDone -> {OUTPUT_FILE}: {len(final)} links "
          f"(<= {MAX_PER_COMPANY}/company, >= {MIN_FRAMES} frames each)")


if __name__ == "__main__":
    asyncio.run(main())
