"""Stage 0: final23.csv (Figma files) -> DESIGN.md per company (REST port).

Port of the "GenUI + DESIGN.md" plugin's extractor.ts + generator.ts to the Figma
REST API, so its whole-document DESIGN.md can be produced in batch from a CSV. Per
company it writes:

    <DESIGN_DIR>/<company>/raw_value_dump.md  # generateDesignMarkdown() output (raw dump)
    <DESIGN_DIR>/<company>/guidelines.json    # structured guidelines for design_synth.py

after which  python design_synth.py  distils guidelines.json into a curated
DESIGN.md, and  python main.py  runs unchanged.

Sources & parity (vs the in-Figma plugin):
  * Variables  -> GET /v1/files/{key}/variables/local  (ENTERPRISE). Drives Variable
    Collections + Color/Spacing/Radius/Motion tokens. If a file returns 403/no data,
    those sections degrade to the plugin's own "No ... found" fallbacks.
  * Local style VALUES -> REST's file `styles` map gives names+types only, so each
    style's value is recovered by sampling the first node that references it.
  * Everything node-derived (raw colors/type, hierarchy, component families/specs,
    style usage, structure) is read straight from the document tree.
  * Field renames vs the plugin API are flagged inline with `# REST:`. Two gaps:
    variant axes come from child-name parsing (REST omits componentPropertyDefinitions),
    and text-style face is derived from fontPostScriptName/fontWeight (REST has no
    fontName.style string).

HTTP, caching, and rate-limit handling now live in figma_client.py (FigmaClient).

Usage:
    export FIGMA_TOKEN=figd_xxx
    python figma_ingest.py --csv final23.csv   # writes Design.md + guidelines.json
    python design_synth.py                      # curated DESIGN.md from guidelines.json
    python main.py
"""
from __future__ import annotations

import argparse
import csv
import json
import os
import re
import logging
from datetime import datetime, timezone
from pathlib import Path

from dotenv import load_dotenv

from figma_client import FigmaClient, RateLimited

load_dotenv()
log = logging.getLogger("ingest")

# --- config -----------------------------------------------------------------
FIGMA_TOKEN = os.getenv("FIGMA_TOKEN", "")
DESIGN_DIR = Path(os.getenv("DESIGN_DIR", "./designs"))
FILE_CACHE_DIR = Path(os.getenv("FIGMA_FILE_CACHE", "./assets/figma_files"))
COL_COMPANY, COL_FILE_KEY = "company", "file_key"
FIGMA_API = "https://api.figma.com/v1"

# constants mirrored from extractor.ts
MAX_ITEMS_PER_SECTION = 1000
MIN_RAW_FREQUENCY = 3
MIN_RAW_FRACTION = 0.005
MAX_TREE_DEPTH = 6
MAX_CHILDREN_PER_NODE = 25
MAX_NODES_PER_SCREEN = 300
MAX_TREE_NODES = 8000
HEADING_FONT_MIN = 24
INCLUDE_ABSOLUTE_COORDINATES = False
DEVICE_MOCKUP_MARKERS = ["Device Surround", "Antenna Bands", "Highlight Band (Stroke)", "Antenna"]
DECORATION_MIN_SHAPES = 4


# --- small helpers (unique/limit/number) ------------------------------------
def unique(items):
    seen, out = set(), []
    for raw in items:
        it = (raw or "").strip()
        if it and it not in seen:
            seen.add(it)
            out.append(it)
    return out


def limit(items, mx=MAX_ITEMS_PER_SECTION):
    return items[:mx]


def format_number(v) -> str:
    if isinstance(v, bool) or v is None:
        return str(v)
    f = float(v)
    if f.is_integer():
        return str(int(f))
    return re.sub(r"\.?0+$", "", f"{f:.2f}")


# --- color / paint / effect / grid formatters -------------------------------
def _hex_ch(v):
    return format(max(0, min(255, round(v * 255))), "02X")


def format_rgb(color: dict, opacity_override=None) -> str:
    base = "#" + _hex_ch(color.get("r", 0)) + _hex_ch(color.get("g", 0)) + _hex_ch(color.get("b", 0))
    alpha = opacity_override if opacity_override is not None else color.get("a", 1)
    if alpha is None or alpha >= 0.999:
        return base
    return base + _hex_ch(alpha)


def format_paint(p: dict) -> str:
    t = p.get("type", "")
    if t == "SOLID":
        return format_rgb(p.get("color", {}), p.get("opacity"))
    if t.startswith("GRADIENT"):
        stops = [f"{format_rgb(s.get('color', {}))} {round(s.get('position', 0) * 100)}%"
                 for s in p.get("gradientStops", [])]
        return f"{t.lower()}(" + " | ".join(stops) + ")"
    if t == "IMAGE":
        ref = p.get("imageRef")  # REST: imageRef (plugin: imageHash)
        return f"image(hash: {ref})" if ref else "image(empty)"
    if t == "VIDEO":
        return "video"
    return t.lower() or "paint"


def format_paint_style(name: str, paints: list) -> str:
    if not paints:
        return f"{name}: none"
    return f"{name}: [" + ", ".join(format_paint(p) for p in paints) + "]"


def _infer_font_weight(style_name: str) -> int:
    n = (style_name or "").lower()
    table = [("thin", 100), ("hairline", 100), ("extralight", 200), ("ultralight", 200),
             ("light", 300), ("medium", 500), ("semibold", 600), ("demibold", 600),
             ("extrabold", 800), ("ultrabold", 800), ("black", 900), ("heavy", 900), ("bold", 700)]
    for key, w in table:
        if key in n:
            return w
    return 400


def _rest_font_face(style: dict) -> tuple[str, str, int]:
    """Return (family, styleWord, weight) from a REST TypeStyle."""
    family = style.get("fontFamily", "")
    ps = style.get("fontPostScriptName") or ""
    weight = style.get("fontWeight")
    style_word = ps.split("-")[-1] if "-" in ps else (ps or "")
    if not style_word and isinstance(weight, (int, float)):
        style_word = {100: "Thin", 200: "ExtraLight", 300: "Light", 400: "Regular",
                      500: "Medium", 600: "SemiBold", 700: "Bold", 800: "ExtraBold",
                      900: "Black"}.get(int(weight), "Regular")
    w = int(weight) if isinstance(weight, (int, float)) else _infer_font_weight(style_word)
    return family, style_word or "Regular", w


def _rest_line_height(style: dict) -> str:
    unit = style.get("lineHeightUnit")
    if unit == "PIXELS" and isinstance(style.get("lineHeightPx"), (int, float)):
        return f"{format_number(style['lineHeightPx'])}px"
    if unit in ("FONT_SIZE_%", "PERCENT") and isinstance(style.get("lineHeightPercent"), (int, float)):
        return f"{format_number(style['lineHeightPercent'])}%"
    return "auto"


def format_text_style(name: str, style: dict) -> str:
    family, word, weight = _rest_font_face(style)
    ls = style.get("letterSpacing", 0) or 0
    return (f"{name}: {family} {word} ({weight}), "
            f"{format_number(style.get('fontSize', 0))}px / {_rest_line_height(style)}, "
            f"tracking {format_number(ls)}px")


def format_effect(e: dict) -> str:
    t = e.get("type", "")
    if t in ("DROP_SHADOW", "INNER_SHADOW"):
        off = e.get("offset", {}) or {}
        return (f"{t.lower()} {format_number(e.get('radius', 0))}px offset "
                f"{format_number(off.get('x', 0))} {format_number(off.get('y', 0))} "
                f"{format_rgb(e.get('color', {}))}")
    if t in ("LAYER_BLUR", "BACKGROUND_BLUR"):
        return f"{t.lower()} {format_number(e.get('radius', 0))}px"
    return t.lower() or "effect"


def format_effect_style(name: str, effects: list) -> str:
    if not effects:
        return f"{name}: none"
    return f"{name}: [" + ", ".join(format_effect(e) for e in effects) + "]"


def format_grid(g: dict) -> str:
    if g.get("pattern") == "GRID":
        return f"grid {format_number(g.get('sectionSize', 0))}px"
    count = format_number(g["count"]) if isinstance(g.get("count"), (int, float)) else "auto"
    section = f"{format_number(g['sectionSize'])}px" if isinstance(g.get("sectionSize"), (int, float)) else "auto"
    return (f"{str(g.get('pattern','')).lower()} count {count}, section {section}, "
            f"gutter {format_number(g.get('gutterSize', 0))}px, align {str(g.get('alignment','')).lower()}")


def format_grid_style(name: str, grids: list) -> str:
    if not grids:
        return f"{name}: none"
    label = " + ".join(format_grid(g) for g in grids[:2])
    return f"{name}: {label}" + (" + ..." if len(grids) > 2 else "")


# --- variables (Enterprise endpoint) ----------------------------------------
def _is_alias(v):
    return isinstance(v, dict) and v.get("type") == "VARIABLE_ALIAS"


def _is_color(v):
    return isinstance(v, dict) and all(k in v for k in ("r", "g", "b"))


def format_variable_value(v, name_by_id) -> str:
    if isinstance(v, bool):
        return "true" if v else "false"
    if isinstance(v, (int, float)):
        return format_number(v)
    if isinstance(v, str):
        return v
    if _is_alias(v):
        return f"alias({name_by_id.get(v['id'], v['id'])})"
    if _is_color(v):
        return format_rgb(v)
    return "unknown"


_SPACING_RE = re.compile(r"(^|[/_\-\s])(space|spacing|gap|padding|margin|inset|stack|grid)([/_\-\s]|$)", re.I)
_RADIUS_RE = re.compile(r"(^|[/_\-\s])(radius|corner|round)([/_\-\s]|$)", re.I)
_MOTION_RE = re.compile(r"(^|[/_\-\s])(motion|duration|timing|easing|ease|animation|transition)([/_\-\s]|$)", re.I)


def _scopes(v):
    return v.get("scopes", []) or []


def extract_variables(var_json: dict) -> dict:
    """Mirror extractVariables() over the REST /variables/local payload."""
    empty = {"colorTokens": [], "spacingTokens": [], "radiusTokens": [],
             "motionTokens": [], "collections": []}
    if not var_json:
        return empty
    meta = var_json.get("meta", {})
    variables = list(meta.get("variables", {}).values())
    collections = meta.get("variableCollections", {})
    coll_name = {cid: c.get("name", "") for cid, c in collections.items()}
    name_by_id = {v["id"]: v.get("name", "") for v in variables}

    color, spacing, radius, motion = [], [], [], []
    for v in variables:
        modes = list((v.get("valuesByMode") or {}).keys())
        if not modes:
            continue
        raw = v["valuesByMode"][modes[0]]
        cname = coll_name.get(v.get("variableCollectionId"))
        full = f"{cname}/{v.get('name','')}" if cname else v.get("name", "")
        line = f"{full}: {format_variable_value(raw, name_by_id)}"
        rt = v.get("resolvedType")
        if rt == "COLOR":
            color.append(line)
        elif rt == "FLOAT":
            name = v.get("name", "")
            if "EFFECT_FLOAT" in _scopes(v) or _MOTION_RE.search(name):
                motion.append(line)
            elif "CORNER_RADIUS" in _scopes(v) or _RADIUS_RE.search(name):
                radius.append(line)
            elif "GAP" in _scopes(v) or _SPACING_RE.search(name):
                spacing.append(line)
        elif rt == "STRING" and _MOTION_RE.search(v.get("name", "")):
            motion.append(line)
    return {"colorTokens": limit(unique(color)), "spacingTokens": limit(unique(spacing)),
            "radiusTokens": limit(unique(radius)), "motionTokens": limit(unique(motion)),
            "collections": limit(unique([c.get("name", "") for c in collections.values()]))}


# --- REST node helpers ------------------------------------------------------
def _children(n):
    return n.get("children", []) or []


def _node_style_id(n, *roles):
    st = n.get("styles") or {}
    for r in roles:
        if st.get(r):
            return st[r]
    return None


def describe_radius(n):
    cr = n.get("cornerRadius")
    if isinstance(cr, (int, float)):
        return f"{format_number(cr)}px" if cr > 0 else None
    rc = n.get("rectangleCornerRadii")
    if isinstance(rc, list) and len(rc) == 4:
        return "/".join(format_number(x) for x in rc) + "px"
    return None


def describe_autolayout(n):
    if n.get("layoutMode", "NONE") in (None, "NONE"):
        return {}
    pad = " ".join(format_number(n.get(k, 0)) for k in
                   ("paddingTop", "paddingRight", "paddingBottom", "paddingLeft"))
    align = None
    if n.get("primaryAxisAlignItems", "MIN") != "MIN" or n.get("counterAxisAlignItems", "MIN") != "MIN":
        align = f"{str(n.get('primaryAxisAlignItems','MIN')).lower()}/{str(n.get('counterAxisAlignItems','MIN')).lower()}"
    sw = "fill" if n.get("layoutSizingHorizontal") == "FILL" else (
        "hug" if n.get("primaryAxisSizingMode") == "AUTO" and n.get("layoutMode") == "HORIZONTAL" else "fixed")
    sh = "fill" if n.get("layoutSizingVertical") == "FILL" else (
        "hug" if n.get("primaryAxisSizingMode") == "AUTO" and n.get("layoutMode") == "VERTICAL" else "fixed")
    return {"layout": str(n["layoutMode"]).lower(), "padding": f"{pad}px",
            "gap": f"{format_number(n.get('itemSpacing', 0))}px", "align": align,
            "sizing": f"W:{sw} H:{sh}"}


def describe_fill(n, paint_names):
    sid = _node_style_id(n, "fill", "fills")
    if sid and sid in paint_names:
        return paint_names[sid]
    fills = n.get("fills")
    if isinstance(fills, list) and fills:
        vis = [p for p in fills if p.get("visible") is not False]
        chosen = (vis or fills)[0]
        return format_paint(chosen)
    return None


def describe_stroke(n, paint_names):
    strokes = n.get("strokes")
    if not isinstance(strokes, list) or not strokes:
        return None
    sid = _node_style_id(n, "stroke", "strokes")
    label = paint_names.get(sid) if sid else None
    if not label:
        label = format_paint(strokes[0])
    w = n.get("strokeWeight")
    return label + (f" {format_number(w)}px" if isinstance(w, (int, float)) else "")


def _find_texts(n):
    out = []
    stack = [n]
    while stack:
        c = stack.pop()
        if c.get("type") == "TEXT":
            out.append(c)
        stack.extend(_children(c))
    return out


def describe_text_styles(n, text_names):
    texts = _find_texts(n)
    if not texts:
        return None
    labels, seen = [], set()
    for t in texts:
        sid = _node_style_id(t, "text")
        if sid and sid in text_names:
            label = text_names[sid]
        else:
            st = t.get("style", {})
            fam, word, _ = _rest_font_face(st)
            fs = st.get("fontSize")
            label = f"{fam} {word}, {format_number(fs)}px" if isinstance(fs, (int, float)) else None
        if label and label not in seen:
            seen.add(label)
            labels.append(label)
    return "[" + ", ".join(labels) + "]" if labels else None


def describe_effects(n, effect_names):
    sid = _node_style_id(n, "effect")
    if sid and sid in effect_names:
        return effect_names[sid]
    effects = n.get("effects")
    if isinstance(effects, list) and effects:
        vis = [e for e in effects if e.get("visible") is not False]
        if vis:
            return "[" + ", ".join(format_effect(e) for e in vis) + "]"
    return None


def family_of(name):
    return (name or "").split("/")[0].strip()


def describe_variant_axes(cset):
    """REST has no componentPropertyDefinitions here -> parse child variant names."""
    axes = {}
    for child in _children(cset):
        if child.get("type") != "COMPONENT":
            continue
        for part in (child.get("name", "") or "").split(","):
            if "=" in part:
                k, v = part.split("=", 1)
                axes.setdefault(k.strip(), set()).add(v.strip())
    out = [f"{k}: {'/'.join(sorted(v))}" for k, v in axes.items() if v]
    return "; ".join(out) if out else None


def pick_representative_variant(cset):
    variants = [c for c in _children(cset) if c.get("type") == "COMPONENT"]
    for v in variants:
        if re.search(r"(^|[,=\s])default([,=\s]|$)", v.get("name", ""), re.I):
            return v
    return variants[0] if variants else None


def _size(n):
    box = n.get("absoluteBoundingBox") or {}
    return box.get("width", 0), box.get("height", 0)


def build_component_details(n, paint_names, text_names, effect_names):
    w, h = _size(n)
    parts = [f"size {format_number(w)}x{format_number(h)}px"]
    r = describe_radius(n)
    if r:
        parts.append(f"radius {r}")
    lay = describe_autolayout(n)
    if lay.get("layout"):
        parts += [f"{lay['layout']} layout", f"padding {lay['padding']}", f"gap {lay['gap']}"]
        if lay.get("align"):
            parts.append(f"align {lay['align']}")
        if lay.get("sizing"):
            parts.append(f"sizing {lay['sizing']}")
    f = describe_fill(n, paint_names)
    if f:
        parts.append(f"fill {f}")
    s = describe_stroke(n, paint_names)
    if s:
        parts.append(f"stroke {s}")
    e = describe_effects(n, effect_names)
    if e:
        parts.append(f"effect {e}")
    tx = describe_text_styles(n, text_names)
    if tx:
        parts.append(f"text {tx}")
    return ", ".join(parts)


# --- raw harvesting ---------------------------------------------------------
def harvest_raw_paints(paints, counts):
    if not isinstance(paints, list):
        return
    for p in paints:
        if p.get("visible") is False or p.get("type") != "SOLID":
            continue
        if (p.get("boundVariables") or {}).get("color"):
            continue  # bound to a variable -> already a token
        h = format_paint(p)
        counts[h] = counts.get(h, 0) + 1


def harvest_raw_fonts(n, counts):
    if _node_style_id(n, "text"):
        return  # whole-node text style -> already a token
    st = n.get("style", {})
    fam, word, _ = _rest_font_face(st)
    fs = st.get("fontSize")
    if not isinstance(fs, (int, float)):
        return
    label = f"{fam} {word}, {format_number(fs)}px"
    counts[label] = counts.get(label, 0) + 1
    # segment overrides (REST styleOverrideTable) capture mixed runs
    for ov in (n.get("styleOverrideTable") or {}).values():
        f2, w2, _ = _rest_font_face({**st, **ov})
        s2 = ov.get("fontSize", fs)
        if isinstance(s2, (int, float)):
            lab = f"{f2} {w2}, {format_number(s2)}px"
            counts[lab] = counts.get(lab, 0) + 1


def filter_by_frequency(counts):
    import math
    total = sum(counts.values())
    if total == 0:
        return []
    threshold = max(MIN_RAW_FREQUENCY, math.ceil(MIN_RAW_FRACTION * total))
    kept = [(v, c) for v, c in counts.items() if c >= threshold]
    kept.sort(key=lambda kv: (-kv[1], kv[0]))
    return [f"{v}: {c} use{'' if c == 1 else 's'}" for v, c in kept]


# --- structure walk ---------------------------------------------------------
def is_vector_leaf(n):
    return n.get("type") in ("VECTOR", "BOOLEAN_OPERATION", "STAR", "POLYGON", "LINE", "ELLIPSE")


def is_device_mockup(n):
    names = [c.get("name", "") for c in _children(n)]
    return any(m in names for m in DEVICE_MOCKUP_MARKERS)


def analyze_subtree(n, budget=300):
    stack, scanned, shapes, has_content = [n], 0, 0, False
    while stack and scanned < budget:
        cur = stack.pop()
        scanned += 1
        if cur.get("type") == "TEXT" and (cur.get("characters") or "").strip():
            has_content = True
        if cur.get("type") in ("INSTANCE", "COMPONENT", "COMPONENT_SET"):
            has_content = True
        if cur.get("type") in ("VECTOR", "ELLIPSE", "STAR", "POLYGON", "LINE", "RECTANGLE", "BOOLEAN_OPERATION"):
            shapes += 1
        stack.extend(_children(cur))
    return has_content, shapes


def is_heading_text(n, text_names):
    sid = _node_style_id(n, "text")
    if sid and sid in text_names and re.search(r"head|title|display|\bh[1-6]\b", text_names[sid], re.I):
        return True
    fs = n.get("style", {}).get("fontSize")
    return isinstance(fs, (int, float)) and fs >= HEADING_FONT_MIN


def node_descriptor(n, paint_names, text_names, effect_names):
    parts = []
    head = n.get("type", "")
    if n.get("name"):
        head += f' "{n["name"].strip()[:60]}"'
    parts.append(head)
    w, h = _size(n)
    if w or h:
        parts.append(f"{format_number(w)}x{format_number(h)}px")
    lay = describe_autolayout(n)
    if lay.get("layout"):
        lp = f"{lay['layout']} pad {lay['padding']} gap {lay['gap']}"
        if lay.get("align"):
            lp += f" align {lay['align']}"
        if lay.get("sizing"):
            lp += f" sizing {lay['sizing']}"
        parts.append(lp)
    c = n.get("constraints")
    if c and (c.get("horizontal") != "MIN" or c.get("vertical") != "MIN"):
        parts.append(f"constraints {str(c.get('horizontal','')).lower()}/{str(c.get('vertical','')).lower()}")
    r = describe_radius(n)
    if r:
        parts.append(f"radius {r}")
    f = describe_fill(n, paint_names)
    if f:
        parts.append(f"fill {f}")
    s = describe_stroke(n, paint_names)
    if s:
        parts.append(f"stroke {s}")
    e = describe_effects(n, effect_names)
    if e:
        parts.append(f"effect {e}")
    if n.get("type") == "TEXT":
        tx = describe_text_styles(n, text_names)
        if tx:
            parts.append(f"text {tx}")
        if is_heading_text(n, text_names):
            parts.append("[heading]")
    op = n.get("opacity")
    if isinstance(op, (int, float)) and op < 1:
        parts.append(f"opacity {round(op * 100)}%")
    return ", ".join(parts)


def walk_node(n, depth, budget, lines, paint_names, text_names, effect_names):
    if budget["remaining"] <= 0:
        budget["truncated"] = True
        return
    budget["remaining"] -= 1
    indent = "  " * depth
    desc = node_descriptor(n, paint_names, text_names, effect_names)
    if depth > 0 and is_device_mockup(n):
        lines.append(f"{indent}- {desc} [device mockup, collapsed]")
        return
    if depth > 0 and _children(n) and not is_vector_leaf(n):
        has_content, shapes = analyze_subtree(n)
        if not has_content and shapes >= DECORATION_MIN_SHAPES:
            lines.append(f"{indent}- {desc} [decorative, ~{shapes} shapes]")
            return
    lines.append(f"{indent}- {desc}")
    if depth >= MAX_TREE_DEPTH or is_vector_leaf(n) or not _children(n):
        return
    kids = [c for c in _children(n) if c.get("visible") is not False]
    shown = kids[:MAX_CHILDREN_PER_NODE]
    for c in shown:
        walk_node(c, depth + 1, budget, lines, paint_names, text_names, effect_names)
        if budget["remaining"] <= 0:
            budget["truncated"] = True
            break
    if len(kids) > len(shown):
        lines.append(f"{'  ' * (depth + 1)}- ... +{len(kids) - len(shown)} more children")


# --- recover local-style VALUES by sampling referencing nodes ---------------
def sample_style_values(document, styles_map):
    """styles_map: id -> {name, styleType}. Returns dicts of id -> formatted value."""
    paint_val, text_val, effect_val, grid_val = {}, {}, {}, {}
    want = set(styles_map)
    stack = list(document.get("children", []))
    while stack and want:
        n = stack.pop()
        stack.extend(_children(n))
        st = n.get("styles") or {}
        for role, sid in st.items():
            if sid not in want:
                continue
            stype = styles_map[sid].get("styleType")
            name = styles_map[sid].get("name", "")
            if stype == "FILL" and isinstance(n.get("fills"), list) and sid not in paint_val:
                paint_val[sid] = format_paint_style(name, n["fills"])
                want.discard(sid)
            elif stype == "TEXT" and n.get("style") and sid not in text_val:
                text_val[sid] = format_text_style(name, n["style"])
                want.discard(sid)
            elif stype == "EFFECT" and isinstance(n.get("effects"), list) and sid not in effect_val:
                effect_val[sid] = format_effect_style(name, n["effects"])
                want.discard(sid)
            elif stype == "GRID" and isinstance(n.get("layoutGrids"), list) and sid not in grid_val:
                grid_val[sid] = format_grid_style(name, n["layoutGrids"])
                want.discard(sid)
    return paint_val, text_val, effect_val, grid_val


def build_typography_hierarchy(text_style_lines, raw_typography):
    """text_style_lines: list of "name: Family Word (w), 24px / ..." already formatted."""
    entries = []
    for line in text_style_lines:
        m = re.search(r",\s*([\d.]+)px\s*/", line)
        size = float(m.group(1)) if m else 0
        name = line.split(":")[0]
        m2 = re.search(r":\s*(.+?)\s*\(", line)
        face = m2.group(1) if m2 else ""
        entries.append((size, f"{format_number(size)}px - {name}" + (f" ({face})" if face else "")))
    for raw in raw_typography:
        m = re.search(r",\s*([\d.]+)px:", raw)
        size = float(m.group(1)) if m else 0
        font_part = raw.split(":")[0]
        entries.append((size, f"{format_number(size)}px - {font_part} (raw)"))
    seen, out = set(), []
    for size, label in sorted(entries, key=lambda e: (-e[0], e[1])):
        if label not in seen:
            seen.add(label)
            out.append(label)
    return out


# --- assemble ExtractedStyleGuidelines from a fetched file ------------------
def extract_style_guidelines(file_json, var_json):
    doc = file_json.get("document", {})
    styles_map = file_json.get("styles", {})  # id -> {name, styleType, ...}
    paint_names = {sid: m.get("name", "") for sid, m in styles_map.items() if m.get("styleType") == "FILL"}
    text_names = {sid: m.get("name", "") for sid, m in styles_map.items() if m.get("styleType") == "TEXT"}
    effect_names = {sid: m.get("name", "") for sid, m in styles_map.items() if m.get("styleType") == "EFFECT"}
    grid_names = {sid: m.get("name", "") for sid, m in styles_map.items() if m.get("styleType") == "GRID"}

    paint_val, text_val, effect_val, grid_val = sample_style_values(doc, styles_map)
    variables = extract_variables(var_json)

    families, usage = [], {}
    raw_colors, raw_fonts = {}, {}
    structure, spec_entries = [], []
    tree_budget = {"remaining": MAX_TREE_NODES, "truncated": False}

    def tally(sid):
        if sid and sid in styles_map:
            nm = styles_map[sid].get("name", "")
            usage[nm] = usage.get(nm, 0) + 1

    pages = doc.get("children", [])
    for page in pages:
        page_name = page.get("name", "")
        all_nodes, stack = [], list(_children(page))
        while stack:
            n = stack.pop()
            all_nodes.append(n)
            stack.extend(_children(n))

        # component sets + components
        for n in all_nodes:
            if n.get("type") == "COMPONENT_SET":
                families.append(family_of(n.get("name", "")))
                v = pick_representative_variant(n)
                if v:
                    details = build_component_details(v, paint_names, text_names, effect_names)
                    axes = describe_variant_axes(n)
                    if axes:
                        details += f" | variants: {axes}"
                    if n.get("description"):
                        details += f' | desc: "{re.sub(chr(92)+"s+", " ", n["description"].strip())[:200]}"'
                    spec_entries.append((n.get("name", ""), page_name, details))
        # components not inside a set (a set's variants are already represented above)
        set_child_ids = set()
        for n in all_nodes:
            if n.get("type") == "COMPONENT_SET":
                for c in _children(n):
                    set_child_ids.add(c.get("id"))
        for n in all_nodes:
            if n.get("type") == "COMPONENT" and n.get("id") not in set_child_ids:
                families.append(family_of(n.get("name", "")))
                details = build_component_details(n, paint_names, text_names, effect_names)
                if n.get("description"):
                    details += f' | desc: "{re.sub(chr(92)+"s+", " ", n["description"].strip())[:200]}"'
                spec_entries.append((n.get("name", ""), page_name, details))

        # device-mockup ids to exclude from raw harvest
        mock_ids = set()
        for n in all_nodes:
            if is_device_mockup(n):
                mock_ids.add(n.get("id"))
                st = [n]
                while st:
                    c = st.pop()
                    mock_ids.add(c.get("id"))
                    st.extend(_children(c))

        # usage + raw harvest
        for n in all_nodes:
            if n.get("visible") is False or n.get("id") in mock_ids:
                continue
            fsid = _node_style_id(n, "fill", "fills")
            if "fills" in n or fsid:
                tally(fsid)
                if not fsid:
                    harvest_raw_paints(n.get("fills"), raw_colors)
            ssid = _node_style_id(n, "stroke", "strokes")
            if "strokes" in n or ssid:
                tally(ssid)
                if not ssid:
                    harvest_raw_paints(n.get("strokes"), raw_colors)
            tsid = _node_style_id(n, "text")
            if tsid:
                tally(tsid)
            esid = _node_style_id(n, "effect")
            if esid:
                tally(esid)
            if n.get("type") == "TEXT":
                harvest_raw_fonts(n, raw_fonts)

        # structure: each top-level frame is a screen
        for root in [c for c in _children(page) if c.get("visible") is not False]:
            if tree_budget["remaining"] <= 0:
                tree_budget["truncated"] = True
                break
            screen_budget = {"remaining": min(MAX_NODES_PER_SCREEN, tree_budget["remaining"]),
                             "truncated": False}
            start = screen_budget["remaining"]
            structure.append(f"Screen: {page_name} / {root.get('name', root.get('type', '')).strip()}")
            walk_node(root, 0, screen_budget, structure, paint_names, text_names, effect_names)
            tree_budget["remaining"] -= start - screen_budget["remaining"]
            if screen_budget["truncated"]:
                structure.append(f"  ... this screen truncated at the {MAX_NODES_PER_SCREEN}-node per-screen limit.")
            structure.append("")

    # dedupe spec entries, qualify shared names with page
    seen, deduped = set(), []
    for name, page, details in spec_entries:
        k = f"{name}\0{details}"
        if k not in seen:
            seen.add(k)
            deduped.append((name, page, details))
    name_counts = {}
    for name, _p, _d in deduped:
        name_counts[name] = name_counts.get(name, 0) + 1
    specs = [f"{(f'{name} ({page})' if name_counts[name] > 1 else name)}: {details}"
             for name, page, details in deduped]

    style_usage = [f"{nm}: {c} use{'' if c == 1 else 's'}"
                   for nm, c in sorted(usage.items(), key=lambda kv: (-kv[1], kv[0]))]

    if tree_budget["truncated"]:
        structure.append(f"... global structural ceiling of {MAX_TREE_NODES} nodes reached; remaining screens omitted.")

    typo_token_lines = limit(unique(list(text_val.values())))
    raw_typography = limit(filter_by_frequency(raw_fonts))
    color_token_lines = limit(unique(list(paint_val.values()) + variables["colorTokens"]))

    page_names = [p.get("name", "") for p in pages]
    page_label = (f"All pages ({len(page_names)}): " + ", ".join(page_names)) if len(page_names) > 1 else (page_names[0] if page_names else "")

    return {
        "fileName": file_json.get("name", ""),
        "pageName": page_label,
        "extractedAt": datetime.now(timezone.utc).isoformat(),
        "colorTokens": color_token_lines,
        "rawColors": limit(filter_by_frequency(raw_colors)),
        "typographyTokens": typo_token_lines,
        "rawTypography": raw_typography,
        "typographyHierarchy": limit(build_typography_hierarchy(typo_token_lines, raw_typography)),
        "spacingTokens": limit(unique(variables["spacingTokens"])),
        "radiusTokens": limit(unique(variables["radiusTokens"])),
        "motionTokens": limit(unique(variables["motionTokens"])),
        "effectTokens": limit(unique(list(effect_val.values()))),
        "gridTokens": limit(unique(list(grid_val.values()))),
        "componentFamilies": limit(unique([f for f in families if f])),
        "componentSpecs": limit(specs),
        "styleUsage": limit(style_usage),
        "structure": limit(structure),
        "variableCollections": variables["collections"],
    }


# --- generateDesignMarkdown (port of generator.ts) --------------------------
def _bullets_or(values, fallback):
    if not values:
        return f"- {fallback}"
    return "\n".join(f"- {v}" for v in values)


def _norm_skill_name(name):
    s = re.sub(r"[^a-zA-Z0-9]+", "-", (name or "")).strip("-").lower()
    return s or "design-system"


def generate_design_markdown(g) -> str:
    lines = [
        "---",
        f"name: {_norm_skill_name(g['fileName'])}",
        f"source_file: {g['fileName']}",
        f"source_page: {g['pageName']}",
        f"generated_at: {g['extractedAt']}",
        "---",
        "",
        f"# {g['fileName']} Design Guidelines",
        "",
        "## Source",
        f"- Figma file: {g['fileName']}",
        f"- Figma page: {g['pageName']}",
        f"- Extracted at: {g['extractedAt']}",
        "",
        "## Variable Collections",
        _bullets_or(g["variableCollections"], "No local variable collections found."),
        "",
        "## Color Tokens",
        _bullets_or(g["colorTokens"], "No local paint styles or color variables found."),
        "",
        "## Raw Colors (unstyled)",
        _bullets_or(g["rawColors"], "No significant unstyled colors found (or all colors are already captured as styles/variables)."),
        "",
        "## Typography Tokens",
        _bullets_or(g["typographyTokens"], "No local text styles found."),
        "",
        "## Raw Typography (unstyled)",
        _bullets_or(g["rawTypography"], "No significant unstyled fonts found (or all text is already captured as styles)."),
        "",
        "## Typography Hierarchy",
        _bullets_or(g["typographyHierarchy"], "No text styles or fonts found to rank."),
        "",
        "## Spacing Tokens",
        _bullets_or(g["spacingTokens"], "No spacing variables found."),
        "",
        "## Radius Tokens",
        _bullets_or(g["radiusTokens"], "No radius variables found."),
        "",
        "## Motion Tokens",
        _bullets_or(g["motionTokens"], "No motion variables found."),
        "",
        "## Effect Styles",
        _bullets_or(g["effectTokens"], "No local effect styles found."),
        "",
        "## Grid Styles",
        _bullets_or(g["gridTokens"], "No local grid styles found."),
        "",
        "## Component Families",
        _bullets_or(g["componentFamilies"], "No components were found in any page of this file. Add component sets to improve guideline coverage."),
        "",
        "## Component Specs",
        _bullets_or(g["componentSpecs"], "No component geometry was extracted. Add components or component sets to populate this section."),
        "",
        "## Most-Used Styles",
        _bullets_or(g["styleUsage"], "No style references were counted. Apply local styles to layers to populate usage counts."),
        "",
        "## Layout & Structure",
        "\n".join(g["structure"]) if g["structure"] else "No frames found to outline.",
        "",
        "## Editing Notes",
        "- Refine this file after extraction to add brand context and rationale.",
        "- Keep token names synchronized with Figma styles and variables.",
        "- Add usage examples and anti-patterns for critical components.",
        "",
    ]
    # collapse consecutive blank lines like the TS filter
    collapsed = []
    for i, ln in enumerate(lines):
        if ln == "" and collapsed and collapsed[-1] == "":
            continue
        collapsed.append(ln)
    return "\n".join(collapsed).rstrip() + "\n"


# --- slug -------------------------------------------------------------------
def slugify(name):
    s = re.sub(r"[^a-zA-Z0-9]+", "-", name).strip("-").lower()
    return s or "company"


# --- orchestration ----------------------------------------------------------
def run(csv_path: Path, company_limit: int = 0, *, refresh: bool = False,
        check_version: bool = False) -> None:
    if not FIGMA_TOKEN:
        raise SystemExit("Set FIGMA_TOKEN (a Figma personal access token) in .env")
    if not csv_path.exists():
        raise SystemExit(f"CSV not found: {csv_path.resolve()}")

    client = FigmaClient(FIGMA_TOKEN, FILE_CACHE_DIR, check_version=check_version)

    by_company = {}
    with csv_path.open(newline="", encoding="utf-8-sig") as f:
        for row in csv.DictReader(f):
            company = (row.get(COL_COMPANY) or "").strip()
            fk = (row.get(COL_FILE_KEY) or "").strip()
            if company and fk:
                by_company.setdefault(company, []).append(fk)
    if not by_company:
        raise SystemExit(f"No rows with {COL_COMPANY!r}+{COL_FILE_KEY!r} in {csv_path.name}")

    if company_limit and company_limit > 0:
        kept = dict(list(by_company.items())[:company_limit])
        log.info("--limit %d: processing %d of %d companies", company_limit, len(kept), len(by_company))
        by_company = kept

    log.info("%d compan(ies). Writing into %s", len(by_company), DESIGN_DIR.resolve())
    for company, file_keys in by_company.items():
        docs, guides = [], []
        for fk in file_keys:
            try:
                fj = client.fetch_file(fk, refresh=refresh)
            except RateLimited as e:
                log.error("  ! %s: rate limited on %s (%s); skipping", company, fk, e)
                continue
            except Exception as e:
                log.error("  ! %s: fetch failed for %s: %s", company, fk, e)
                continue
            vj = client.fetch_variables(fk, refresh=refresh)
            g = extract_style_guidelines(fj, vj)
            guides.append(g)
            docs.append(generate_design_markdown(g))
            log.info("  - %s/%s: %d color, %d components, %d collections",
                     company, fk, len(g["colorTokens"]), len(g["componentSpecs"]),
                     len(g["variableCollections"]))
        if not docs:
            log.warning("* %s: nothing fetched, skipping", company)
            continue
        cdir = DESIGN_DIR / slugify(company)
        cdir.mkdir(parents=True, exist_ok=True)
        (cdir / "raw_value_dump.md").write_text("\n\n---\n\n".join(docs), encoding="utf-8")
        # structured output consumed by design_synth.py
        (cdir / "guidelines.json").write_text(json.dumps(guides, ensure_ascii=False), encoding="utf-8")
        log.info("* %s: raw_value_dump.md + guidelines.json written (%d file(s))", company, len(docs))

    log.info("Done. Now run:  python design_synth.py  then  python main.py")


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(message)s")
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", required=True, help="path to final23.csv")
    ap.add_argument("--limit", type=int, default=0,
                    help="only process the first N companies (0 = all)")
    ap.add_argument("--refresh", action="store_true",
                    help="ignore cached files and refetch")
    ap.add_argument("--check-version", action="store_true",
                    help="cheap ?depth=1 call to refetch only files whose version changed")
    args = ap.parse_args()
    run(Path(args.csv), args.limit, refresh=args.refresh, check_version=args.check_version)
