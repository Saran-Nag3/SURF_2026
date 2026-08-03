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
     the vision model "is this a single mobile app screen?" (a status bar is NOT
     required) to weed out design-system doc pages, type specimens, marketing
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

# Load a .env file if present so AZURE_OPENAI_* / OPENROUTER_API_KEY etc. are
# available without manually `export`-ing them. Requires: pip install python-dotenv
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

# ----------------------------------------------------------------------------
# CONFIG  (tune these if your exports use different device sizes)
# ----------------------------------------------------------------------------
SINGLE_MIN_W, SINGLE_MAX_W = 280, 540      # canvas width range for a single phone (compact -> large)
SINGLE_MIN_H, SINGLE_MAX_H = 420, 6000     # short sheets/modals up to very long scrolling screens
SINGLE_MIN_ASPECT          = 1.3           # height / width must be at least this (phones are tall)

FRAME_MIN_W, FRAME_MAX_W   = 330, 460      # a phone-screen FRAME background rect inside a grid
FRAME_MIN_H, FRAME_MAX_H   = 740, 1050

MULTI_MIN_CANVAS           = 600           # canvas must be at least this big on both sides to "contain" screens

RENDER_WIDTH_VERIFY        = 360           # px width used when rendering for the vision check
ROW_BUCKET                 = 50            # y-rounding (px) used to sort split screens into reading order

# ----------------------------------------------------------------------------
# WHICH MODEL BACKEND TO USE  <-- pick one
# ----------------------------------------------------------------------------
#   "azure"             -> Azure OpenAI (GPT-4o / GPT-5 family). Uses the AZURE_* block.
#   "openai_compatible" -> any OpenAI-protocol server: Ollama, LM Studio, vLLM,
#                          Cerebras, Google AI Studio's OpenAI endpoint, etc.
#                          Use this for Gemma 4. Uses the OAI_COMPAT_* block.
BACKEND = "azure"   # switched from "openai_compatible" to use your Azure gpt-5.6-luna deployment

# ----------------------------------------------------------------------------
# AZURE OPENAI CREDENTIALS  (used when BACKEND == "azure")
# ----------------------------------------------------------------------------
# Fill these in directly. (Heads up: don't commit real keys to a shared/public
# repo. If you leave a value as "" it will fall back to the matching env var.)
AZURE_OPENAI_ENDPOINT    = "https://<your-resource>.openai.azure.com"
AZURE_OPENAI_API_KEY     = "<your-key>"
AZURE_OPENAI_DEPLOYMENT  = "gpt-5.6-luna"      # your deployment name (as named in Azure)
AZURE_OPENAI_API_VERSION = "2025-04-01-preview"  # recent version; GPT-5 models need a recent one

# ----------------------------------------------------------------------------
# OPENAI-COMPATIBLE  (used when BACKEND == "openai_compatible")
# Configured below for OpenRouter; other servers in comments.
# ----------------------------------------------------------------------------
# OpenRouter (hosted, just needs a key):
#   BASE_URL "https://openrouter.ai/api/v1", API_KEY your sk-or-... key,
#   MODEL "google/gemma-4-31b-it"  (vision-capable; also ":free", or "google/gemma-4-26b-a4b-it")
# Ollama (local):   BASE_URL "http://localhost:11434/v1", API_KEY "ollama", MODEL "gemma4:12b"
# LM Studio:        BASE_URL "http://localhost:1234/v1",  API_KEY "lm-studio"
# vLLM:             BASE_URL "http://localhost:8000/v1",  API_KEY "EMPTY"
OAI_COMPAT_BASE_URL = "https://openrouter.ai/api/v1"
OAI_COMPAT_API_KEY  = "<your-openrouter-key>"   # your sk-or-... key (or set OPENROUTER_API_KEY env var)
OAI_COMPAT_MODEL    = "openai/gpt-5-mini"   # GPT vision via OpenRouter; verify exact slug at openrouter.ai/models?q=gpt

# --- Model request settings ---------------------------------------------------
# GPT-5 / reasoning models require max_completion_tokens (NOT max_tokens) and do
# NOT accept a temperature, so we omit temperature entirely. Keep this budget
# generous: reasoning models spend hidden "thinking" tokens out of this same
# budget before writing the JSON answer, so a small value can return an EMPTY
# reply. 2000 is plenty for a one-line JSON verdict.
# (Gemma / openai_compatible uses plain max_tokens + temperature instead; see _call.)
VISION_MAX_TOKENS = 2000
# Reasoning effort for GPT-5 family: "minimal" | "low" | "medium" | "high".
# "minimal" keeps this fast and cheap for simple image classification.
# If your deployment is a NON-reasoning model (e.g. gpt-4o) and you get an
# "unsupported parameter: reasoning_effort" error, set this to "".
REASONING_EFFORT  = "medium"

SVG_NS   = "http://www.w3.org/2000/svg"
XLINK_NS = "http://www.w3.org/1999/xlink"
S        = "{" + SVG_NS + "}"
ET.register_namespace("", SVG_NS)
ET.register_namespace("xlink", XLINK_NS)


# ----------------------------------------------------------------------------
# Rendering
# ----------------------------------------------------------------------------
_CAIROSVG = None


def _get_cairosvg():
    """Import cairosvg once, with a clear message if the native Cairo lib is missing."""
    global _CAIROSVG
    if _CAIROSVG is not None:
        return _CAIROSVG
    try:
        import cairosvg
    except OSError as e:
        sys.exit(
            "Could not load the native Cairo library that cairosvg needs to render SVGs.\n"
            f"  ({str(e).splitlines()[0]})\n\n"
            "Install it:\n"
            "  conda:     conda install -c conda-forge cairosvg\n"
            "  Homebrew:  brew install cairo\n"
            "             (Apple Silicon may also need:\n"
            "              export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib:$DYLD_FALLBACK_LIBRARY_PATH )\n"
            "  Debian/Ubuntu: sudo apt-get install libcairo2\n"
        )
    except ImportError:
        sys.exit("cairosvg is not installed. Install it with:  pip install cairosvg\n"
                 "(or, recommended on conda/macOS:  conda install -c conda-forge cairosvg)")
    _CAIROSVG = cairosvg
    return cairosvg


def render_png_bytes(svg_path, width=RENDER_WIDTH_VERIFY):
    """Render an SVG file to PNG bytes. Returns None on failure."""
    cairosvg = _get_cairosvg()
    try:
        return cairosvg.svg2png(url=str(svg_path), output_width=width)
    except Exception as e:
        print(f"    [render-fail] {Path(svg_path).name}: {str(e)[:80]}", file=sys.stderr)
        return None


def render_svg_string(svg_text, width=RENDER_WIDTH_VERIFY):
    cairosvg = _get_cairosvg()
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
    "You classify images exported from mobile UI design files. You decide whether an image is "
    "a single mobile app screen (keep) or something that is not an app screen (drop). Lean "
    "toward keeping real screens; only drop when you are confident it is not one."
)
VISION_INSTRUCTIONS = (
    "Answer keep=true if the image is ONE mobile app screen — phone-like tall proportions with "
    "app UI content of any kind (navigation, lists, forms, cards, buttons, maps, media, chat, "
    "onboarding, splash, empty or loading states, etc.).\n\n"
    "IMPORTANT: a status bar is NOT required. Many real app screens are designed without a "
    "clock/wifi/battery bar, so do NOT drop a screen just because it has no status bar.\n\n"
    "Answer keep=false ONLY if you are confident it is NOT a single app screen — i.e. it is one "
    "of: a marketing cover / banner / title slide; a component, style, or typography sheet (rows "
    "of buttons/alerts/inputs, or 'H1 H2 Body' specimens); a grid or library of icons, avatars, "
    "photos, or illustrations; a redline / spec / measurement / grid frame; a desktop or web "
    "(wide) layout; a device mockup showing the phone inside a visible bezel on a background; a "
    "page that is essentially just paragraphs of text or credits (an About/documentation page); "
    "a blank or empty frame; or an image that clearly shows MORE THAN ONE screen side by side.\n\n"
    "When unsure, keep it. Respond with JSON only: "
    "{\"keep\": true|false, \"kind\": \"<short label>\", \"reason\": \"<one sentence>\"}"
)


class VisionVerifier:
    def __init__(self, cache_dir=".vision_cache_gpt"):
        self.backend = BACKEND
        if BACKEND == "azure":
            from openai import AzureOpenAI  # imported lazily so --no-vision needs no install

            def resolve(value, env_name):
                # treat unset / placeholder values (anything still containing "<") as missing,
                # and fall back to the matching environment variable
                return value if value and "<" not in value else os.environ.get(env_name)

            endpoint = resolve(AZURE_OPENAI_ENDPOINT, "AZURE_OPENAI_ENDPOINT")
            api_key = resolve(AZURE_OPENAI_API_KEY, "AZURE_OPENAI_API_KEY")
            self.model = resolve(AZURE_OPENAI_DEPLOYMENT, "AZURE_OPENAI_DEPLOYMENT")
            api_version = AZURE_OPENAI_API_VERSION or os.environ.get("AZURE_OPENAI_API_VERSION", "2024-10-21")
            missing = [n for n, v in [
                ("AZURE_OPENAI_ENDPOINT", endpoint),
                ("AZURE_OPENAI_API_KEY", api_key),
                ("AZURE_OPENAI_DEPLOYMENT", self.model),
            ] if not v]
            if missing:
                raise SystemExit("Azure credentials not set: " + ", ".join(missing) +
                                 "\nEdit the AZURE_OPENAI_* values near the top of this script "
                                 "(or run with --no-vision to skip the visual check).")
            self.client = AzureOpenAI(api_key=api_key, api_version=api_version, azure_endpoint=endpoint)

        elif BACKEND == "openai_compatible":
            from openai import OpenAI  # Ollama / LM Studio / vLLM / OpenRouter / Gemma, etc.
            base_url = OAI_COMPAT_BASE_URL or os.environ.get("OPENAI_BASE_URL")
            api_key = OAI_COMPAT_API_KEY
            if not api_key or "<" in api_key:   # placeholder -> look in env
                api_key = (os.environ.get("OPENROUTER_API_KEY")
                           or os.environ.get("OPENAI_API_KEY") or "not-needed")
            self.model = OAI_COMPAT_MODEL or os.environ.get("OPENAI_MODEL")
            if not base_url or not self.model:
                raise SystemExit("Set OAI_COMPAT_BASE_URL and OAI_COMPAT_MODEL near the top of this script "
                                 "(or run with --no-vision).")
            # OpenRouter likes (optional) attribution headers for app rankings; harmless elsewhere.
            headers = {"HTTP-Referer": "https://localhost", "X-Title": "figma-phone-extractor"} \
                if "openrouter.ai" in base_url else None
            self.client = OpenAI(base_url=base_url, api_key=api_key, default_headers=headers)

        else:
            raise SystemExit(f"Unknown BACKEND '{BACKEND}'. Use 'azure' or 'openai_compatible'.")

        self.cache_dir = Path(cache_dir)
        self.cache_dir.mkdir(exist_ok=True)

    def _call(self, png_bytes):
        """Send one vision request and return the raw text content of the reply."""
        b64 = base64.b64encode(png_bytes).decode()
        messages = [
            {"role": "system", "content": VISION_SYSTEM},
            {"role": "user", "content": [
                {"type": "text", "text": VISION_INSTRUCTIONS},
                {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{b64}"}},
            ]},
        ]
        if self.backend == "azure":
            # GPT-5 / reasoning models: max_completion_tokens, NO temperature.
            kwargs = dict(model=self.model, messages=messages,
                          max_completion_tokens=VISION_MAX_TOKENS,
                          response_format={"type": "json_object"})
            if REASONING_EFFORT:
                kwargs["reasoning_effort"] = REASONING_EFFORT
        else:
            # Gemma / OpenAI-compatible servers: plain max_tokens + temperature.
            kwargs = dict(model=self.model, messages=messages,
                          max_tokens=VISION_MAX_TOKENS, temperature=0,
                          response_format={"type": "json_object"})
        resp = self.client.chat.completions.create(**kwargs)
        return resp.choices[0].message.content

    @staticmethod
    def _parse_json(raw):
        """Lenient JSON parse — open models sometimes wrap the answer in ``` fences."""
        if not raw:
            return None
        t = raw.strip()
        if t.startswith("```"):
            t = re.sub(r"^```[a-zA-Z]*\s*", "", t)
            t = re.sub(r"\s*```$", "", t).strip()
        try:
            return json.loads(t)
        except Exception:
            m = re.search(r"\{.*\}", t, re.DOTALL)  # grab the first {...} block
            return json.loads(m.group(0)) if m else None

    @staticmethod
    def _write_cache(cf, result):
        """Write the cache entry ATOMICALLY (temp file + os.replace) so an
        interrupted run can't leave behind an empty/partial .json that crashes
        the next run when it tries to json.loads() it."""
        tmp = cf.with_suffix(cf.suffix + ".tmp")
        try:
            tmp.write_text(json.dumps(result))
            os.replace(tmp, cf)
        except OSError:
            try:
                if tmp.exists():
                    tmp.unlink()
            except OSError:
                pass

    def verify(self, png_bytes):
        """Return dict {keep, kind, reason}. Cached by image content hash."""
        h = hashlib.sha256(png_bytes).hexdigest()[:16]
        cf = self.cache_dir / f"{h}.json"
        if cf.exists():
            # Guard the cache read. A cache file can be empty (a previous run was
            # interrupted mid-write) or hold a transient failure (vision_error /
            # empty_reply) from a misconfigured backend. In any of those cases,
            # treat it as a MISS and re-verify instead of crashing or trusting a
            # bogus keep-everything verdict.
            try:
                txt = cf.read_text()
                if txt.strip():
                    cached = json.loads(txt)
                    if cached.get("kind") not in ("vision_error", "empty_reply"):
                        return cached
            except (json.JSONDecodeError, OSError):
                pass
            try:
                cf.unlink()  # drop the poisoned entry so it gets rewritten cleanly
            except OSError:
                pass
        try:
            raw = self._call(png_bytes)
            data = self._parse_json(raw)
            if not raw or not raw.strip():
                result = {"keep": True, "kind": "empty_reply",
                          "reason": "model returned no text (try raising VISION_MAX_TOKENS)"}
            elif data is None:
                result = {"keep": True, "kind": "unparsable",
                          "reason": "reply was not JSON: " + raw.strip()[:80]}
            else:
                result = {"keep": bool(data.get("keep")),
                          "kind": data.get("kind", "?"),
                          "reason": data.get("reason", "")}
        except Exception as e:
            # fail open-ish but visible: keep, and flag it
            result = {"keep": True, "kind": "vision_error", "reason": str(e)[:160]}
        # Only cache REAL verdicts. Never cache transient failures, or a broken
        # backend would poison the cache with keep-everything verdicts that
        # survive even after you fix the config.
        if result["kind"] not in ("vision_error", "empty_reply"):
            self._write_cache(cf, result)
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
    print(f"Connection check (BACKEND = {BACKEND})")
    if BACKEND == "azure":
        print(f"  endpoint   : {AZURE_OPENAI_ENDPOINT}")
        print(f"  deployment : {AZURE_OPENAI_DEPLOYMENT}")
        print(f"  api_version: {AZURE_OPENAI_API_VERSION}")
        print(f"  settings   : max_completion_tokens={VISION_MAX_TOKENS}, reasoning_effort='{REASONING_EFFORT}'\n")
    else:
        print(f"  base_url   : {OAI_COMPAT_BASE_URL}")
        print(f"  model      : {OAI_COMPAT_MODEL}")
        print(f"  settings   : max_tokens={VISION_MAX_TOKENS}, temperature=0\n")

    verifier = VisionVerifier()  # raises a clear error if config is missing

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
        if BACKEND == "azure":
            print("  - 'unsupported parameter: reasoning_effort' -> set REASONING_EFFORT = \"\"")
            print("  - 404 / DeploymentNotFound                  -> AZURE_OPENAI_DEPLOYMENT must match your Azure deployment name")
            print("  - 401 / 403                                 -> check AZURE_OPENAI_API_KEY and endpoint")
            print("  - 'invalid api-version'                     -> try a different AZURE_OPENAI_API_VERSION")
        else:
            print("  - 401 / no auth credentials     -> set your key in OAI_COMPAT_API_KEY (OpenRouter needs a real sk-or-... key)")
            print("  - Connection refused           -> for local servers, is it running? (`ollama serve`, LM Studio server on)")
            print("  - model not found / 400        -> check OAI_COMPAT_MODEL slug (e.g. OpenRouter 'google/gemma-4-31b-it')")
            print("  - 'does not support images'    -> use a VISION-capable model; Gemma 4 variants on OpenRouter accept images")
            print("  - 'response_format' error      -> some servers reject JSON mode; remove it in _call (parsing tolerates plain text)")
        return
    print("Raw model reply:")
    print("  " + (raw if raw else "<empty>"))
    parsed = VisionVerifier._parse_json(raw)
    if parsed is not None:
        print("\nParsed JSON OK:", parsed)
        print("\nSUCCESS — model, vision input, and JSON output all work.")
        print("You can now run a real job, e.g.:")
        print("  python figma_phone_extractor.py input.zip -o Real_Screens --zip --sheet")
    else:
        print("\nGot a reply but it wasn't valid JSON. The pipeline tolerates this (it extracts")
        print("the first {...} block), but if it happens often, raise VISION_MAX_TOKENS or")
        print("strengthen the 'JSON only' wording in VISION_INSTRUCTIONS.")


def main():
    ap = argparse.ArgumentParser(description="Isolate real phone screenshots from Figma SVG exports.")
    ap.add_argument("input", nargs="?", help="input .zip or directory of SVGs")
    ap.add_argument("-o", "--output", default="Real_Screens_gpt", help="output folder name")
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
