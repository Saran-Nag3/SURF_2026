#!/usr/bin/env python3
"""
figma_phone_extractor.py
========================
Extract and isolate real phone screenshots from a folder/zip of Figma SVG exports.

What it does (the pipeline we worked out, automated):
  1. Reads every .svg from a zip or directory.
  2. Classifies each by canvas dimensions:
        - SINGLE   : phone-shaped canvas  -> one candidate screen
        - MULTI    : large canvas containing >=2 phone-sized frame rects -> split
        - REJECT   : everything else (covers, desktop, design-system sheets, ...)
  3. Splits MULTI grids into individual screens by reading Figma's frame
     structure (top-level <g> groups, each with a phone-sized background rect),
     rebuilding each as a standalone SVG that carries ONLY the gradients /
     patterns / embedded images it actually references (small, clean files).
  4. Vision check (optional, recommended): renders each candidate to PNG and asks
     an Azure OpenAI vision deployment "is this a single phone screenshot with a
     status bar?" to weed out design-system doc pages, type specimens, marketing
     covers, device mockups, asset grids, etc.  Results are cached on disk.
  5. Writes the kept screens to an output folder organized by company, plus a
     manifest and (optionally) a zip and a QA contact sheet.

Usage
-----
    pip install cairosvg pillow openai

    # Edit the AZURE_OPENAI_* values in the credentials block near the top of
    # this file (endpoint, key, and your vision-capable deployment name, e.g. gpt-4o).

    python figma_phone_extractor.py input.zip -o Real_Screens --zip --sheet

    # heuristics only, no API calls (keeps a few false positives):
    python figma_phone_extractor.py input.zip --no-vision

Notes
-----
- Vision is what makes the filtering precise. Without it the script keeps anything
  phone-shaped, which includes the occasional design-system page that merely has
  phone-like proportions.
- Tunable thresholds live in the CONFIG block below.
"""

import argparse
import base64
import hashlib
import io
import json
import os
import re
import shutil
import sys
import tempfile
import zipfile
import xml.etree.ElementTree as ET
from collections import defaultdict
from pathlib import Path

# --- Load .env (optional dependency) --------------------------------------
# Keeps API keys out of the source. `pip install python-dotenv` to use a .env;
# if it's not installed we silently fall back to real environment variables.
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

# ----------------------------------------------------------------------------
# CONFIG  (tune these if your exports use different device sizes)
# ----------------------------------------------------------------------------
SINGLE_MIN_W, SINGLE_MAX_W = 320, 445      # canvas width range for a single phone
SINGLE_MIN_H, SINGLE_MAX_H = 740, 1300     # canvas height range (allow tall scroll screens)
SINGLE_MIN_ASPECT          = 1.7           # height / width must be at least this (phones are tall)

FRAME_MIN_W, FRAME_MAX_W   = 330, 460      # a phone-screen FRAME background rect inside a grid
FRAME_MIN_H, FRAME_MAX_H   = 740, 1050

MULTI_MIN_CANVAS           = 600           # canvas must be at least this big on both sides to "contain" screens

RENDER_WIDTH_VERIFY        = 360           # px width used when rendering for the vision check
ROW_BUCKET                 = 50            # y-rounding (px) used to sort split screens into reading order

# ----------------------------------------------------------------------------
# AZURE OPENAI CREDENTIALS  <-- EDIT THESE
# ----------------------------------------------------------------------------
# Fill these in directly. (Heads up: don't commit real keys to a shared/public
# repo. If you leave a value as "" it will fall back to the matching env var.)
AZURE_OPENAI_ENDPOINT    = os.environ.get("AZURE_OPENAI_ENDPOINT", "")
AZURE_OPENAI_API_KEY     = os.environ.get("AZURE_OPENAI_API_KEY", "")
AZURE_OPENAI_DEPLOYMENT  = "gpt-5.4-mini"      # your deployment name (as named in Azure)
AZURE_OPENAI_API_VERSION = "2025-04-01-preview"  # recent version; GPT-5 models need a recent one

# --- Model request settings ---------------------------------------------------
# GPT-5 / reasoning models require max_completion_tokens (NOT max_tokens) and do
# NOT accept a temperature, so we omit temperature entirely. Keep this budget
# generous: reasoning models spend hidden "thinking" tokens out of this same
# budget before writing the JSON answer, so a small value can return an EMPTY
# reply. 2000 is plenty for a one-line JSON verdict.
VISION_MAX_TOKENS = 2000
# Reasoning effort for GPT-5 family: "minimal" | "low" | "medium" | "high".
# "minimal" keeps this fast and cheap for simple image classification.
# If your deployment is a NON-reasoning model (e.g. gpt-4o) and you get an
# "unsupported parameter: reasoning_effort" error, set this to "".
REASONING_EFFORT  = "minimal"

SVG_NS   = "http://www.w3.org/2000/svg"
XLINK_NS = "http://www.w3.org/1999/xlink"
S        = "{" + SVG_NS + "}"
ET.register_namespace("", SVG_NS)
ET.register_namespace("xlink", XLINK_NS)


# ----------------------------------------------------------------------------
# Rendering
# ----------------------------------------------------------------------------
def render_png_bytes(svg_path, width=RENDER_WIDTH_VERIFY):
    """Render an SVG file to PNG bytes. Returns None on failure."""
    import cairosvg
    try:
        return cairosvg.svg2png(url=str(svg_path), output_width=width)
    except Exception as e:
        print(f"    [render-fail] {Path(svg_path).name}: {str(e)[:80]}", file=sys.stderr)
        return None


def render_svg_string(svg_text, width=RENDER_WIDTH_VERIFY):
    import cairosvg
    try:
        return cairosvg.svg2png(bytestring=svg_text.encode("utf-8"), output_width=width)
    except Exception as e:
        print(f"    [render-fail-str]: {str(e)[:80]}", file=sys.stderr)
        return None


# ----------------------------------------------------------------------------
# Dimension parsing & classification
# ----------------------------------------------------------------------------
def svg_canvas(data):
    """Return (width, height) floats from an SVG header, or (None, None)."""
    m = re.search(r'<svg[^>]*?width="([0-9.]+)"[^>]*?height="([0-9.]+)"', data)
    if m:
        return float(m.group(1)), float(m.group(2))
    m = re.search(r'viewBox="[\d.]+ [\d.]+ ([\d.]+) ([\d.]+)"', data)
    if m:
        return float(m.group(1)), float(m.group(2))
    return None, None


def find_frame_rects(root):
    """All rects whose size looks like a phone-screen frame background."""
    out = []
    for r in root.iter(S + "rect"):
        w, h = r.get("width"), r.get("height")
        if not w or not h:
            continue
        try:
            w, h = float(w), float(h)
        except ValueError:
            continue
        if FRAME_MIN_W <= w <= FRAME_MAX_W and FRAME_MIN_H <= h <= FRAME_MAX_H:
            out.append(r)
    return out


def classify(W, H, n_frames):
    if W is None:
        return "REJECT"
    aspect = H / W if W else 0
    if SINGLE_MIN_W <= W <= SINGLE_MAX_W and SINGLE_MIN_H <= H <= SINGLE_MAX_H and aspect >= SINGLE_MIN_ASPECT:
        return "SINGLE"
    if W >= MULTI_MIN_CANVAS and H >= MULTI_MIN_CANVAS and n_frames >= 2:
        return "MULTI"
    if W >= MULTI_MIN_CANVAS and H >= MULTI_MIN_CANVAS and n_frames == 1:
        return "SINGLE_IN_CANVAS"   # treat like a single, but crop the one frame
    return "REJECT"


# ----------------------------------------------------------------------------
# Splitting a multi-screen grid into clean per-screen SVGs
# ----------------------------------------------------------------------------
def _fmt(v):
    return str(int(v)) if float(v) == int(v) else str(v)


def parse_translate(t):
    if not t:
        return 0.0, 0.0
    m = re.search(r"translate\(\s*([-\d.]+)[ ,]*([-\d.]*)", t)
    if not m:
        m = re.search(r"matrix\(\s*[-\d.]+[ ,]+[-\d.]+[ ,]+[-\d.]+[ ,]+[-\d.]+[ ,]+([-\d.]+)[ ,]+([-\d.]+)", t)
        if not m:
            return 0.0, 0.0
    x = float(m.group(1))
    y = float(m.group(2)) if m.group(2) else 0.0
    return x, y


def _refs_of(el):
    """All ids referenced inside an element subtree via url(#id) or href=#id."""
    ids = set()
    for e in el.iter():
        for k, v in e.attrib.items():
            if not v:
                continue
            for m in re.findall(r"url\(#([^)]+)\)", v):
                ids.add(m)
            if k.split("}")[-1] == "href" and v.startswith("#"):
                ids.add(v[1:])
    return ids


def _ids_in(el):
    return {e.get("id") for e in el.iter() if e.get("id")}


def _frame_bbox(group):
    """Find this group's phone-frame rect and return (x, y, w, h) in absolute coords."""
    for r in group.iter(S + "rect"):
        try:
            w, h = float(r.get("width")), float(r.get("height"))
        except (TypeError, ValueError):
            continue
        if FRAME_MIN_W <= w <= FRAME_MAX_W and FRAME_MIN_H <= h <= FRAME_MAX_H:
            x, y = parse_translate(r.get("transform"))
            return x, y, w, h
    return None


def split_grid(svg_path, outdir, prefix):
    """
    Split a multi-screen Figma artboard into individual standalone SVGs.

    Primary method: each screen is a top-level <g> group containing one phone
    frame rect; rebuild each group + only the <defs> it references.
    Returns a list of (output_path, (x, y, w, h)).
    """
    root = ET.fromstring(open(svg_path).read())
    children = list(root)
    defs = next((c for c in children if c.tag == S + "defs"), None)
    groups = [c for c in children if c.tag == S + "g"]

    # index defs direct-children by the ids they own, and their outgoing refs
    dc_list = list(defs) if defs is not None else []
    owner, dc_refs = {}, {}
    for dc in dc_list:
        for i in _ids_in(dc):
            owner[i] = dc
        dc_refs[id(dc)] = _refs_of(dc)
    order = {id(dc): k for k, dc in enumerate(dc_list)}

    framed = []
    for g in groups:
        bb = _frame_bbox(g)
        if bb:
            framed.append((g, bb))

    if len(framed) < 2:
        return []  # caller will fall back to whole-file crop

    framed.sort(key=lambda gb: (round(gb[1][1] / ROW_BUCKET), gb[1][0]))  # reading order
    os.makedirs(outdir, exist_ok=True)
    made = []
    for idx, (g, (x, y, w, h)) in enumerate(framed, start=1):
        # transitively collect the defs this screen needs
        needed, seen, queue = [], set(), list(_refs_of(g))
        while queue:
            rid = queue.pop()
            dc = owner.get(rid)
            if dc is None or id(dc) in seen:
                continue
            seen.add(id(dc))
            needed.append(dc)
            queue.extend(dc_refs[id(dc)])

        svg = ET.Element(S + "svg", {
            "width": _fmt(w), "height": _fmt(h),
            "viewBox": f"{_fmt(x)} {_fmt(y)} {_fmt(w)} {_fmt(h)}", "fill": "none",
        })
        svg.append(g)
        if needed:
            nd = ET.SubElement(svg, S + "defs")
            for dc in sorted(needed, key=lambda d: order[id(d)]):
                nd.append(dc)

        out = os.path.join(outdir, f"{prefix}_{idx:02d}.svg")
        ET.ElementTree(svg).write(out, encoding="unicode", xml_declaration=False)
        _ensure_header(out)
        made.append((out, (x, y, w, h)))
    return made


def crop_viewbox(svg_path, outdir, prefix, idx, bbox):
    """
    Fallback splitter: emit a standalone SVG that keeps the whole original file
    but sets viewBox to one screen's region. Always correct, but larger files.
    """
    x, y, w, h = bbox
    data = open(svg_path).read()
    new_head = (f'<svg xmlns="{SVG_NS}" xmlns:xlink="{XLINK_NS}" '
                f'width="{_fmt(w)}" height="{_fmt(h)}" '
                f'viewBox="{_fmt(x)} {_fmt(y)} {_fmt(w)} {_fmt(h)}" fill="none">')
    data = re.sub(r"<svg\b[^>]*>", new_head, data, count=1)
    os.makedirs(outdir, exist_ok=True)
    out = os.path.join(outdir, f"{prefix}_{idx:02d}.svg")
    with open(out, "w") as f:
        f.write('<?xml version="1.0" encoding="UTF-8"?>\n' + data)
    return out


def _ensure_header(path):
    data = open(path).read()
    head = data.split(">", 1)[0]
    if "xmlns" not in head:
        data = data.replace("<svg ", f'<svg xmlns="{SVG_NS}" xmlns:xlink="{XLINK_NS}" ', 1)
    if not data.lstrip().startswith("<?xml"):
        data = '<?xml version="1.0" encoding="UTF-8"?>\n' + data
    with open(path, "w") as f:
        f.write(data)


def absolute_frame_bboxes(root):
    """For the fallback path: frame rects with positions accumulated through ancestor translates."""
    parent = {c: p for p in root.iter() for c in p}
    boxes = []
    for r in find_frame_rects(root):
        x, y = parse_translate(r.get("transform"))
        cur = parent.get(r)
        while cur is not None:
            dx, dy = parse_translate(cur.get("transform"))
            x += dx
            y += dy
            cur = parent.get(cur)
        boxes.append((x, y, float(r.get("width")), float(r.get("height"))))
    boxes.sort(key=lambda b: (round(b[1] / ROW_BUCKET), b[0]))
    return boxes


# ----------------------------------------------------------------------------
# Vision verification via Azure OpenAI
# ----------------------------------------------------------------------------
VISION_SYSTEM = (
    "You are a strict visual classifier for mobile UI exports. You decide whether an "
    "image is a single phone screenshot, as if captured on a phone."
)
VISION_INSTRUCTIONS = (
    "Look at the image and answer: is this EXACTLY ONE phone screenshot, as if taken on a "
    "phone? A real phone screenshot has a status bar (clock plus signal/wifi/battery icons), "
    "a tall phone aspect ratio, and app UI content.\n\n"
    "Answer keep=false if the image is any of: a design-system or documentation page; a type/"
    "typography specimen (e.g. 'H1 H2 Body'); a marketing cover, banner, or title slide; a "
    "device mockup that shows the phone inside a visible bezel/frame on a background; a grid or "
    "sheet of icons, photos, or components; a desktop/web layout; or contains MORE THAN ONE "
    "screen. A splash screen (logo only) WITH a status bar still counts as a phone screenshot.\n\n"
    "Respond with JSON only: {\"keep\": true|false, \"kind\": \"<short label>\", \"reason\": \"<one sentence>\"}"
)


class VisionVerifier:
    def __init__(self, cache_dir=".vision_cache"):
        from openai import AzureOpenAI  # imported lazily so --no-vision needs no install
        # Use the values from the config block above. If one is left blank or as a
        # placeholder, fall back to the matching environment variable as a convenience.
        def resolve(value, env_name):
            # treat unset / placeholder values (anything still containing "<") as missing,
            # and fall back to the matching environment variable
            return value if value and "<" not in value else os.environ.get(env_name)

        endpoint = resolve(AZURE_OPENAI_ENDPOINT, "AZURE_OPENAI_ENDPOINT")
        api_key = resolve(AZURE_OPENAI_API_KEY, "AZURE_OPENAI_API_KEY")
        self.deployment = resolve(AZURE_OPENAI_DEPLOYMENT, "AZURE_OPENAI_DEPLOYMENT")
        api_version = AZURE_OPENAI_API_VERSION or os.environ.get("AZURE_OPENAI_API_VERSION", "2024-10-21")
        missing = [n for n, v in [
            ("AZURE_OPENAI_ENDPOINT", endpoint),
            ("AZURE_OPENAI_API_KEY", api_key),
            ("AZURE_OPENAI_DEPLOYMENT", self.deployment),
        ] if not v]
        if missing:
            raise SystemExit("Azure credentials not set: " + ", ".join(missing) +
                             "\nEdit the AZURE_OPENAI_* values near the top of this script "
                             "(or run with --no-vision to skip the visual check).")
        self.client = AzureOpenAI(api_key=api_key, api_version=api_version, azure_endpoint=endpoint)
        self.cache_dir = Path(cache_dir)
        self.cache_dir.mkdir(exist_ok=True)

    def _call(self, png_bytes):
        """Send one vision request and return the raw text content of the reply."""
        b64 = base64.b64encode(png_bytes).decode()
        kwargs = dict(
            model=self.deployment,
            max_completion_tokens=VISION_MAX_TOKENS,   # NOT max_tokens (GPT-5 requirement)
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": VISION_SYSTEM},
                {"role": "user", "content": [
                    {"type": "text", "text": VISION_INSTRUCTIONS},
                    {"type": "image_url",
                     "image_url": {"url": f"data:image/png;base64,{b64}"}},
                ]},
            ],
        )
        if REASONING_EFFORT:
            kwargs["reasoning_effort"] = REASONING_EFFORT
        # NOTE: temperature is intentionally omitted (GPT-5/reasoning models reject it).
        resp = self.client.chat.completions.create(**kwargs)
        return resp.choices[0].message.content

    def verify(self, png_bytes):
        """Return dict {keep, kind, reason}. Cached by image content hash."""
        h = hashlib.sha256(png_bytes).hexdigest()[:16]
        cf = self.cache_dir / f"{h}.json"
        if cf.exists():
            return json.loads(cf.read_text())
        try:
            raw = self._call(png_bytes)
            if not raw or not raw.strip():
                result = {"keep": True, "kind": "empty_reply",
                          "reason": "model returned no text (try raising VISION_MAX_TOKENS)"}
            else:
                data = json.loads(raw)
                result = {"keep": bool(data.get("keep")),
                          "kind": data.get("kind", "?"),
                          "reason": data.get("reason", "")}
        except Exception as e:
            # fail open-ish but visible: keep, and flag it
            result = {"keep": True, "kind": "vision_error", "reason": str(e)[:160]}
        cf.write_text(json.dumps(result))
        return result


# ----------------------------------------------------------------------------
# Input handling & company detection
# ----------------------------------------------------------------------------
def gather_svgs(input_path, workdir):
    """Return (root_dir, [svg paths]). Accepts a .zip or a directory."""
    p = Path(input_path)
    if p.suffix.lower() == ".zip":
        dest = Path(workdir) / "unzipped"
        dest.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(p) as z:
            z.extractall(dest)
        root = dest
    else:
        root = p
    svgs = [f for f in root.rglob("*.svg") if "__MACOSX" not in str(f)]
    return root, sorted(svgs)


def common_top_dir(root, svgs):
    """If every svg lives under a single wrapper folder, return its name to strip."""
    tops = {f.relative_to(root).parts[0] for f in svgs if len(f.relative_to(root).parts) > 1}
    return tops.pop() if len(tops) == 1 else None


def company_of(svg, root, strip):
    parts = svg.relative_to(root).parts
    if strip and parts and parts[0] == strip:
        parts = parts[1:]
    return parts[0] if len(parts) > 1 else "Uncategorized"


def safe(name):
    return re.sub(r"[^A-Za-z0-9._-]+", "_", name).strip("_")


# ----------------------------------------------------------------------------
# Main pipeline
# ----------------------------------------------------------------------------
def run_check():
    """Send a single vision request with a synthetic phone-like image to validate setup."""
    from PIL import Image, ImageDraw
    print("Azure OpenAI connection check")
    print(f"  endpoint   : {AZURE_OPENAI_ENDPOINT}")
    print(f"  deployment : {AZURE_OPENAI_DEPLOYMENT}")
    print(f"  api_version: {AZURE_OPENAI_API_VERSION}")
    print(f"  settings   : max_completion_tokens={VISION_MAX_TOKENS}, reasoning_effort='{REASONING_EFFORT}'\n")

    verifier = VisionVerifier()  # raises a clear error if creds are missing

    # build a tiny fake "phone screenshot": tall canvas + a status-bar strip with a clock
    img = Image.new("RGB", (180, 390), (255, 255, 255))
    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, 180, 22], fill=(245, 245, 245))
    d.text((8, 6), "9:41", fill=(0, 0, 0))
    d.ellipse([158, 7, 166, 15], fill=(0, 0, 0))   # a dot standing in for status icons
    d.rectangle([12, 60, 168, 120], outline=(180, 180, 180))
    d.text((20, 80), "test screen", fill=(40, 40, 40))
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    png = buf.getvalue()

    print("Sending one test image to the model ...")
    try:
        raw = verifier._call(png)
    except Exception as e:
        print("\nFAILED. The API call errored:\n  " + str(e))
        print("\nCommon fixes:")
        print("  - 'unsupported parameter: reasoning_effort' -> set REASONING_EFFORT = \"\"")
        print("  - 'max_tokens is not supported'             -> you're on an old copy; this build uses max_completion_tokens")
        print("  - 404 / DeploymentNotFound                  -> check AZURE_OPENAI_DEPLOYMENT matches your Azure deployment name")
        print("  - 401 / 403                                 -> check AZURE_OPENAI_API_KEY and endpoint")
        print("  - 'invalid api-version'                     -> try a different AZURE_OPENAI_API_VERSION")
        return
    print("Raw model reply:")
    print("  " + (raw if raw else "<empty>"))
    try:
        parsed = json.loads(raw)
        print("\nParsed JSON OK:", parsed)
        print("\nSUCCESS — credentials, model, vision input, and JSON output all work.")
        print("You can now run a real job, e.g.:")
        print("  python figma_phone_extractor.py input.zip -o Real_Screens --zip --sheet")
    except Exception:
        print("\nGot a reply but it wasn't valid JSON. The pipeline tolerates this, but if it")
        print("happens often, raise VISION_MAX_TOKENS or check that your model supports")
        print("response_format JSON mode.")


def main():
    ap = argparse.ArgumentParser(description="Isolate real phone screenshots from Figma SVG exports.")
    ap.add_argument("input", nargs="?", help="input .zip or directory of SVGs")
    ap.add_argument("-o", "--output", default="Real_Screens", help="output folder name")
    ap.add_argument("--no-vision", action="store_true", help="skip the Azure OpenAI visual check (heuristics only)")
    ap.add_argument("--flat", action="store_true", help="do NOT organize into per-company subfolders")
    ap.add_argument("--zip", action="store_true", help="also produce <output>.zip")
    ap.add_argument("--sheet", action="store_true", help="also produce a QA contact sheet PNG of kept screens")
    ap.add_argument("--dry-run", action="store_true", help="classify and report only; write nothing")
    ap.add_argument("--check", action="store_true", help="send ONE test request to verify Azure creds/model/vision, then exit")
    args = ap.parse_args()

    if args.check:
        run_check()
        return
    if not args.input:
        ap.error("the 'input' argument is required (a .zip or directory), unless using --check")

    verifier = None
    if not args.no_vision and not args.dry_run:
        verifier = VisionVerifier()

    tmp = tempfile.mkdtemp(prefix="figx_")
    splits_dir = os.path.join(tmp, "splits")
    root, svgs = gather_svgs(args.input, tmp)
    strip = common_top_dir(root, svgs)
    print(f"Found {len(svgs)} SVG files under {root}\n")

    # candidates: list of dicts {svg, company, kind, bbox(optional), label}
    candidates = []
    counts = defaultdict(int)
    for svg in svgs:
        data = open(svg).read()
        W, H = svg_canvas(data)
        try:
            rootel = ET.fromstring(data)
            frames = find_frame_rects(rootel)
        except ET.ParseError:
            rootel, frames = None, []
        cls = classify(W, H, len(frames))
        counts[cls] += 1
        company = company_of(svg, root, strip)
        stem = safe(svg.stem)

        if cls == "SINGLE":
            candidates.append({"src": svg, "company": company, "out_name": f"{company}_{stem}.svg",
                               "split": None})
        elif cls in ("MULTI", "SINGLE_IN_CANVAS"):
            prefix = f"{company}_{stem}"
            made = split_grid(svg, splits_dir, prefix) if cls == "MULTI" else []
            if not made:  # fallback (single-in-canvas, or structure we couldn't group)
                boxes = absolute_frame_bboxes(rootel) if rootel is not None else []
                made = [(crop_viewbox(svg, splits_dir, prefix, i, b), b) for i, b in enumerate(boxes, 1)]
            for out, bbox in made:
                candidates.append({"src": Path(out), "company": company,
                                   "out_name": Path(out).name, "split": svg.name})

    print("Classification:", dict(counts))
    print(f"Raw screen candidates (after splitting): {len(candidates)}\n")

    if args.dry_run:
        for c in candidates:
            print(f"  {c['company']:14s} {c['out_name']}" + (f"  (split from {c['split']})" if c['split'] else ""))
        shutil.rmtree(tmp, ignore_errors=True)
        return

    # vision verification
    kept = []
    for c in candidates:
        if verifier is None:
            c["verdict"] = {"keep": True, "kind": "heuristic", "reason": "no-vision mode"}
        else:
            png = render_png_bytes(c["src"])
            c["verdict"] = verifier.verify(png) if png else {"keep": False, "kind": "render_fail", "reason": ""}
        status = "KEEP " if c["verdict"]["keep"] else "drop "
        print(f"  {status}{c['company']:12s} {c['out_name']:40s} [{c['verdict']['kind']}]")
        if c["verdict"]["keep"]:
            kept.append(c)

    print(f"\nKept {len(kept)} of {len(candidates)} candidates.")

    # write output
    outroot = Path(args.output)
    if outroot.exists():
        shutil.rmtree(outroot)
    outroot.mkdir(parents=True)
    by_company = defaultdict(list)
    for c in kept:
        dest_dir = outroot if args.flat else outroot / safe(c["company"])
        dest_dir.mkdir(parents=True, exist_ok=True)
        dest = dest_dir / c["out_name"]
        shutil.copy(c["src"], dest)
        by_company[c["company"]].append(c["out_name"])

    # manifest
    with open(outroot / "_MANIFEST.txt", "w") as o:
        o.write(f"Real phone screenshots extracted from: {args.input}\n")
        o.write(f"Total kept: {len(kept)} across {len(by_company)} companies\n\n")
        for comp in sorted(by_company):
            o.write(f"{comp}/  ({len(by_company[comp])})\n")
            for n in sorted(by_company[comp]):
                o.write("   " + n + "\n")
            o.write("\n")

    print("\nBy company:")
    for comp in sorted(by_company):
        print(f"  {comp+'/':16s} {len(by_company[comp])}")

    if args.sheet:
        make_contact_sheet(kept, str(outroot) + "_preview.png")
        print(f"\nContact sheet: {outroot}_preview.png")

    if args.zip:
        zpath = shutil.make_archive(str(outroot), "zip", root_dir=outroot)
        print(f"Zip: {zpath}")

    shutil.rmtree(tmp, ignore_errors=True)


def make_contact_sheet(kept, out_png, cols=12, thumb_w=95):
    from PIL import Image, ImageDraw, ImageFont
    thumbs = []
    for c in kept:
        png = render_png_bytes(c["src"], width=thumb_w)
        if not png:
            continue
        thumbs.append((Image.open(io.BytesIO(png)).convert("RGB"), c["out_name"].replace(".svg", "")))
    if not thumbs:
        return
    cell_w = thumb_w + 8
    cell_h = max(t.height for t, _ in thumbs) + 26
    rows = (len(thumbs) + cols - 1) // cols
    sheet = Image.new("RGB", (cell_w * cols, cell_h * rows), (245, 245, 247))
    d = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 8)
    except Exception:
        font = ImageFont.load_default()
    for i, (im, lab) in enumerate(thumbs):
        r, cc = divmod(i, cols)
        x, y = cc * cell_w + 4, r * cell_h + 4
        sheet.paste(im, (x, y))
        d.text((x, y + im.height + 2), lab[:18], fill=(20, 20, 30), font=font)
    sheet.save(out_png)


if __name__ == "__main__":
    main()
