#!/usr/bin/env python3
"""
STAGE 3 — Export frames
=======================
Reads final20.csv and, for each file, renders every TOP-LEVEL frame (the
screens) to both PNG @2x and SVG, saved under output/<company>/<file>/.

IMPORTANT: the file_key column must point at COPIES IN YOUR OWN WORKSPACE, which
Stage 2 now produces by duplicating each community file. If you feed this stage
keys for files you don't own (e.g. raw community files), the image endpoint will
return 'low'-tier 429s and lock you out for days. This stage now detects that
and skips the file instead of grinding through useless retries.

Only needs the REST token (no browser):
  export FIGMA_TOKEN='<your figd_... personal access token>'

Layout produced:
  output/<company>/<file>/001_Home.png, 001_Home.svg, ...
  export_manifest.csv   (one row per exported frame)

Caching: files that fully export are recorded in export_cache.json (keyed by
file_key). Re-runs skip those entirely — no /v1/files call, no /v1/images
renders — and their rows are restored to the manifest from cache. Delete
export_cache.json (or set USE_CACHE=False) to force a clean re-export.

NOTE: this version fetches the FULL file tree (no depth cap) and walks it
recursively so screens nested inside Section/Group wrappers are found. A prior
version fetched ?depth=2, which returns only pages + their top-level nodes;
under that cap a top-level Section had NO children in the response, so files
whose screens live inside a Section exported only their loose frames (e.g. the
Cover) and missed the actual screen set.
"""

import csv
import json
import os
import re
import socket
import sys
import time
import urllib.error
import urllib.request

# --------------------------------------------------------------------------
# Config
# --------------------------------------------------------------------------
INPUT_FILE   = "links_real.csv"
OUTPUT_DIR   = "all_real_screens"
MANIFEST     = "export_manifest.csv"
PNG_SCALE    = 2          # PNG @2x
IDS_PER_CALL = 5          # node ids per /v1/images request (server-side render)
REQUEST_PAUSE = 0.5
RATE_LIMIT_PAUSE = 60     # seconds on a *short* 429
RETRY_AFTER_BUFFER = 12   # extra seconds added on top of Figma's Retry-After
FILE_TIMEOUT  = 30        # seconds for /v1/files (fast metadata)
IMAGE_TIMEOUT = 180       # seconds for /v1/images (slow server-side render)

# How deep to fetch the file tree. "" = full tree (most reliable: finds screens
# nested at any depth inside Section/Group wrappers). If a genuinely huge file
# times out on the metadata call, set a bounded depth like "?depth=6" instead —
# depth 6 still covers Section -> Group -> Frame nesting with room to spare.
FILE_DEPTH = ""           # e.g. "?depth=6" to bound it

# Cache: file_keys that fully exported, so re-runs skip them (no renders).
USE_CACHE  = False
CACHE_FILE = "export_cache.json"

FIGMA_TOKEN = os.environ.get("FIGMA_TOKEN", "")
if not FIGMA_TOKEN:
    sys.exit("ERROR: set FIGMA_TOKEN env var (your figd_... token).")

API_HEADERS = {"X-Figma-Token": FIGMA_TOKEN, "Accept": "application/json"}


class LowTierError(RuntimeError):
    """File is rate-limited at 'low' tier => it is NOT in your paid workspace.
    Waiting won't help; the file needs to be a copy you own."""


class SkipFileError(RuntimeError):
    """400/404 — key isn't a queryable Figma design file (Sites/FigJam/stale).
    Don't retry; skip it."""


# --------------------------------------------------------------------------
# Cache helpers
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
        os.replace(tmp, CACHE_FILE)   # atomic write so a crash can't corrupt it
    except Exception as e:
        print(f"    (cache save failed: {e})")


# --------------------------------------------------------------------------
# Helpers
# --------------------------------------------------------------------------
def api_get(url, timeout=FILE_TIMEOUT):
    """GET with retry. Separates a 'low'-tier lockout (bail immediately — the
    file isn't in your workspace) from a genuine short throttle or a transient
    network error (back off and retry)."""
    last = None
    for attempt in range(5):
        try:
            req = urllib.request.Request(url, headers=API_HEADERS)
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            last = e
            if e.code == 429:
                retry_after = e.headers.get("Retry-After")
                limit_type  = e.headers.get("X-Figma-Rate-Limit-Type")
                plan_tier   = e.headers.get("X-Figma-Plan-Tier")
                print(f"    429 | type={limit_type} | plan={plan_tier} | "
                      f"Retry-After={retry_after}")
                if (limit_type or "").lower() == "low":
                    raise LowTierError(
                        "low-tier: file not in your workspace; skip it")
                if retry_after and str(retry_after).isdigit() \
                        and int(retry_after) <= 300:
                    # Honor Figma's Retry-After, but wait a bit longer so we
                    # clear the burst window with margin instead of bumping
                    # straight back into it.
                    wait = int(retry_after) + RETRY_AFTER_BUFFER
                else:
                    wait = RATE_LIMIT_PAUSE * (attempt + 1)
                print(f"    rate limited; waiting {wait}s ({attempt+1}/5)")
                time.sleep(wait)
            elif e.code in (400, 404):
                raise SkipFileError(f"HTTP {e.code}: not a queryable design file")
            else:
                raise
        except (TimeoutError, socket.timeout, urllib.error.URLError) as e:
            last = e
            wait = 5 * (attempt + 1)
            print(f"    network/timeout ({e}); retrying in {wait}s "
                  f"({attempt+1}/5)")
            time.sleep(wait)
    raise RuntimeError(f"max retries exceeded: {last}")


def safe_name(s, fallback="untitled"):
    s = (s or "").strip()
    s = re.sub(r"[^\w\-. ]", "", s).strip().replace(" ", "_")
    return s[:80] or fallback


def top_level_frames(file_data):
    """Return [(node_id, name), ...] for the screens across all pages.

    Matches Stage 2's generous definition so files that PASSED enrichment don't
    export nothing here: FRAME / COMPONENT / COMPONENT_SET / INSTANCE count as
    screens, and we recurse THROUGH wrapper SECTION / GROUP nodes to find
    screens nested inside them (at any depth).

    Recursion rule: when we hit a screen node we take it and DO NOT descend into
    it (we want the screen, not the buttons/rows inside it). We only descend
    through container nodes. This requires the file to be fetched deep enough
    that container children are present (see FILE_DEPTH); with a shallow
    ?depth=2 fetch, Sections come back childless and their screens are missed.
    """
    SCREEN = {"FRAME", "COMPONENT", "COMPONENT_SET", "INSTANCE"}
    CONTAINER = {"SECTION", "GROUP"}
    out = []

    def walk(node):
        t = node.get("type")
        if t in SCREEN:
            out.append((node["id"], node.get("name", "frame")))  # take it; stop here
        elif t in CONTAINER:
            for child in node.get("children", []):
                walk(child)
        # any other node type (VECTOR, TEXT, etc.) is ignored

    doc = file_data.get("document", {})
    for page in doc.get("children", []):
        for node in page.get("children", []):
            walk(node)
    return out


def get_image_urls(file_key, node_ids, fmt):
    """Return {node_id: rendered_url} for one format. Chunks the ids and prints
    per-chunk progress so a slow server-side render is visible (not mistaken
    for a hang)."""
    urls = {}
    total = len(node_ids)
    n_chunks = (total + IDS_PER_CALL - 1) // IDS_PER_CALL
    for ci, i in enumerate(range(0, total, IDS_PER_CALL), 1):
        chunk = node_ids[i:i + IDS_PER_CALL]
        ids_param = ",".join(chunk)
        url = (f"https://api.figma.com/v1/images/{file_key}"
               f"?ids={ids_param}&format={fmt}")
        if fmt == "png":
            url += f"&scale={PNG_SCALE}"
        elif fmt == "svg":
            # Keep real text as <text> elements instead of outlining it to
            # <path>. svg_outline_text=false is the key flag. The others keep
            # node ids/names (handy for downstream processing) and preserve
            # strokes rather than simplifying them.
            url += "&svg_outline_text=false"
            url += "&svg_include_id=true"
            url += "&svg_include_node_id=true"
            url += "&svg_simplify_stroke=false"
        done = min(i + IDS_PER_CALL, total)
        print(f"      rendering {fmt} {ci}/{n_chunks} "
              f"(frames {i+1}-{done}/{total})...", flush=True)
        data = api_get(url, timeout=IMAGE_TIMEOUT)
        if data.get("err"):
            print(f"    image api err ({fmt}): {data['err']}")
        urls.update(data.get("images", {}) or {})
        time.sleep(REQUEST_PAUSE)
    return urls


def download(url, path):
    if not url:
        return False
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=60) as r:
            data = r.read()
        with open(path, "wb") as f:
            f.write(data)
        return True
    except Exception as e:
        print(f"    download failed {os.path.basename(path)}: {e}")
        return False


# --------------------------------------------------------------------------
# Main
# --------------------------------------------------------------------------
def main():
    with open(INPUT_FILE, newline="") as f:
        rows = [r for r in csv.DictReader(f) if r.get("file_key")]

    seen, unique = set(), []
    for r in rows:
        k = r["file_key"]
        if k in seen:
            continue
        seen.add(k)
        unique.append(r)
    if len(unique) != len(rows):
        print(f"Deduped {len(rows)} -> {len(unique)} files by file_key")
    rows = unique

    print(f"Loaded {len(rows)} files to export")

    cache = load_cache()
    if cache:
        print(f"Loaded cache: {len(cache)} file(s) already exported")

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    manifest_rows = []
    n_lowtier = 0
    n_skip = 0
    n_cached = 0

    for idx, row in enumerate(rows, 1):
        company = row.get("company", "unknown")
        title   = row.get("title", row["file_key"])
        key     = row["file_key"]
        print(f"\n[{idx}/{len(rows)}] {company}: {title}  ({key})")

        # Fully-exported files are restored from cache (no renders, no API).
        cached = cache.get(key)
        if cached and cached.get("manifest_rows"):
            print(f"    cached: {len(cached['manifest_rows'])} frames "
                  f"(skipping render)")
            manifest_rows.extend(cached["manifest_rows"])
            n_cached += 1
            continue

        try:
            file_data = api_get(
                f"https://api.figma.com/v1/files/{key}{FILE_DEPTH}")
        except LowTierError as e:
            print(f"    {e}; skipping (this key isn't a copy you own)")
            n_lowtier += 1
            continue
        except SkipFileError as e:
            print(f"    {e}; skipping (not a design file)")
            n_skip += 1
            continue
        except Exception as e:
            print(f"    could not load file: {e}; skipping")
            continue

        frames = top_level_frames(file_data)
        print(f"    {len(frames)} screens found")
        if not frames:
            continue

        node_ids = [nid for nid, _ in frames]
        try:
            png_urls = get_image_urls(key, node_ids, "png")
            svg_urls = get_image_urls(key, node_ids, "svg")
        except LowTierError as e:
            print(f"    {e}; skipping this file")
            n_lowtier += 1
            continue
        except SkipFileError as e:
            print(f"    {e}; skipping this file")
            n_skip += 1
            continue
        except Exception as e:
            print(f"    image render failed: {e}; skipping this file")
            continue

        dest = os.path.join(OUTPUT_DIR, safe_name(company),
                            safe_name(title, key))
        os.makedirs(dest, exist_ok=True)

        file_rows = []
        all_ok = True
        for n, (nid, fname) in enumerate(frames, 1):
            base = f"{n:03d}_{safe_name(fname, 'frame')}"
            png_path = os.path.join(dest, base + ".png")
            svg_path = os.path.join(dest, base + ".svg")
            ok_png = download(png_urls.get(nid), png_path)
            ok_svg = download(svg_urls.get(nid), svg_path)
            if not (ok_png and ok_svg):
                all_ok = False
            file_rows.append({
                "company": company, "title": title, "file_key": key,
                "frame_name": fname, "node_id": nid,
                "png": png_path if ok_png else "",
                "svg": svg_path if ok_svg else "",
            })
        manifest_rows.extend(file_rows)
        print(f"    exported -> {dest}")

        # Only cache a file as done when every frame downloaded both formats,
        # so partially-failed files are retried on the next run.
        if all_ok:
            cache[key] = {"dest": dest, "manifest_rows": file_rows}
            save_cache(cache)
        else:
            print("    (not cached: some frames failed; will retry next run)")

    with open(MANIFEST, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["company", "title", "file_key",
                                          "frame_name", "node_id", "png", "svg"])
        w.writeheader()
        w.writerows(manifest_rows)

    print(f"\nDone. {len(manifest_rows)} frames exported under {OUTPUT_DIR}/")
    if n_cached:
        print(f"{n_cached} file(s) restored from cache (no re-render).")
    if n_lowtier:
        print(f"{n_lowtier} file(s) skipped as low-tier — their keys point at "
              f"files you don't own. Re-run Stage 2 so they're duplicated first.")
    if n_skip:
        print(f"{n_skip} file(s) skipped as non-design (Sites/FigJam/stale key).")

    # Company-drop report: which companies came in vs. actually exported, so a
    # drop between the input list and the output is visible (not silent).
    companies_in = {r.get("company", "unknown") for r in rows}
    companies_out = {m["company"] for m in manifest_rows}
    dropped = sorted(companies_in - companies_out)
    print(f"\nCompanies: {len(companies_in)} in final list -> "
          f"{len(companies_out)} exported at least one screen "
          f"({len(dropped)} dropped)")
    if dropped:
        print("  Dropped companies (no screens exported): "
              + ", ".join(dropped))
        print("  Reasons are the per-file skips above (low-tier / non-design / "
              "load or render failure / zero screens).")
    print(f"Manifest -> {MANIFEST}")


if __name__ == "__main__":
    main()
