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
INPUT_FILE   = "final23.csv"
OUTPUT_DIR   = "main_output1"
MANIFEST     = "export_manifest.csv"
PNG_SCALE    = 2          # PNG @2x
IDS_PER_CALL = 5          # node ids per /v1/images request (server-side render)
REQUEST_PAUSE = 0.5
RATE_LIMIT_PAUSE = 60     # seconds on a *short* 429
RETRY_AFTER_BUFFER = 5   # extra seconds added on top of Figma's Retry-After
FILE_TIMEOUT  = 30        # seconds for /v1/files (fast metadata)
IMAGE_TIMEOUT = 180       # seconds for /v1/images (slow server-side render)

# Cache: file_keys that fully exported, so re-runs skip them (no renders).
USE_CACHE  = True
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
    """Return [(node_id, frame_name), ...] for top-level frames across pages."""
    out = []
    doc = file_data.get("document", {})
    for page in doc.get("children", []):
        for node in page.get("children", []):
            t = node.get("type")
            if t == "FRAME":
                out.append((node["id"], node.get("name", "frame")))
            elif t == "SECTION":
                for inner in node.get("children", []):
                    if inner.get("type") == "FRAME":
                        out.append((inner["id"], inner.get("name", "frame")))
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
            file_data = api_get(f"https://api.figma.com/v1/files/{key}?depth=2")
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
        print(f"    {len(frames)} top-level frames")
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
    print(f"Manifest -> {MANIFEST}")


if __name__ == "__main__":
    main()
