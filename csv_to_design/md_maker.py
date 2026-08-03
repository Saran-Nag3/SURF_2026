"""Stage 1: guidelines.json (raw extraction) -> DESIGN.md (curated context).

figma_ingest.py produces an exhaustive dump: every token, every raw color with a
usage count, every component spec, and a full node-by-node structure tree. That is
great for *auditing* a file but poor as LLM *context* - it is long, unranked, and
full of near-duplicates and noise. This stage distills that dump into a tight,
opinionated DESIGN.md organized around how a design system is actually used:

    designs/<company>/guidelines.json   ->   designs/<company>/DESIGN.md

What it does (all deterministic - it never invents color values or specs):
  * Clusters near-duplicate colors, merges tokens + raw colors, infers a role
    (surface / text / border / accent / semantic) per swatch, and caps the palette.
  * Collapses type styles + raw fonts into one ranked type scale with role labels.
  * Turns spacing / radius variables into clean numeric scales.
  * Groups components by family, keeps the most informative spec per family, ranks
    by real usage counts, and caps the list.
  * Replaces the giant node tree with a short "screen patterns" summary.
  * Caps every section to a token budget and notes what was trimmed.

An optional, off-by-default LLM pass (--llm) writes only the prose overview, and is
handed *only* the already-extracted facts with an explicit "do not invent values"
instruction - the numbers still come from code, not the model.

Usage:
    python design_synth.py                 # all companies under DESIGN_DIR
    python design_synth.py --company acme  # just one
    python design_synth.py --max-colors 20 --max-components 24
"""
from __future__ import annotations

import argparse
import json
import logging
import os
import re
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

log = logging.getLogger("synth")

DESIGN_DIR = Path(os.getenv("DESIGN_DIR", "./designs"))

# section caps (rough token budget control)
MAX_COLORS = 24
MAX_TYPE = 14
MAX_SPACING = 16
MAX_COMPONENTS = 28
MAX_SCREENS_LISTED = 20

HEX_RE = re.compile(r"#[0-9a-fA-F]{6}(?:[0-9a-fA-F]{2})?")
NUM_RE = re.compile(r"-?\d+(?:\.\d+)?")


# --- tiny color utilities ---------------------------------------------------
def _rgb(hex6: str) -> tuple[int, int, int]:
    h = hex6.lstrip("#")[:6]
    return int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)


def _luminance(hex6: str) -> float:
    r, g, b = _rgb(hex6)
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255.0


def _saturation(hex6: str) -> float:
    r, g, b = (c / 255 for c in _rgb(hex6))
    mx, mn = max(r, g, b), min(r, g, b)
    if mx == 0:
        return 0.0
    return (mx - mn) / mx


def _dist(a: str, b: str) -> float:
    ar, ag, ab = _rgb(a)
    br, bg, bb = _rgb(b)
    return ((ar - br) ** 2 + (ag - bg) ** 2 + (ab - bb) ** 2) ** 0.5


# --- role inference ---------------------------------------------------------
ROLE_KEYWORDS = [
    ("surface", ("bg", "background", "surface", "canvas", "fill", "base", "paper", "card")),
    ("text", ("text", "label", "ink", "content", "foreground", "fg", "type", "heading", "body")),
    ("border", ("border", "stroke", "divider", "outline", "separator", "line")),
    ("brand/accent", ("primary", "brand", "accent", "action", "cta", "interactive", "link", "focus")),
    ("success", ("success", "positive", "confirm", "valid", "ok")),
    ("danger", ("error", "danger", "destructive", "negative", "critical", "alert")),
    ("warning", ("warning", "warn", "caution", "attention")),
    ("info", ("info", "informational", "note")),
]
ROLE_ORDER = ["brand/accent", "surface", "text", "border",
              "success", "warning", "danger", "info", "other"]


def _role_from_name(name: str) -> Optional[str]:
    n = (name or "").lower()
    for role, keys in ROLE_KEYWORDS:
        if any(re.search(rf"(^|[/_\-\s]){k}([/_\-\s]|$)", n) for k in keys):
            return role
    return None


def _role_from_color(hex6: str) -> str:
    lum, sat = _luminance(hex6), _saturation(hex6)
    if lum >= 0.85:
        return "surface"
    if lum <= 0.2:
        return "text"
    if sat >= 0.35:
        return "brand/accent"
    return "other"


# --- parsers over the raw guideline lists -----------------------------------
class Swatch:
    __slots__ = ("hex", "name", "role", "uses")

    def __init__(self, hex6, name, role, uses):
        self.hex = hex6.upper()
        self.name = name
        self.role = role
        self.uses = uses


def _usage_index(style_usage: list[str]) -> dict[str, int]:
    """styleUsage entries look like 'Color/Primary: 340 uses'."""
    idx = {}
    for line in style_usage:
        m = re.match(r"(.+?):\s*(\d+)\s+use", line)
        if m:
            idx[m.group(1).strip()] = int(m.group(2))
    return idx


def collect_colors(g: dict, usage: dict[str, int]) -> list[Swatch]:
    swatches: list[Swatch] = []
    # tokens: "<name>: [ ... #hex ... ]" or "coll/name: #hex"
    for line in g.get("colorTokens", []):
        name = line.split(":")[0].strip()
        hexes = HEX_RE.findall(line)
        if not hexes:
            continue
        role = _role_from_name(name) or _role_from_color(hexes[0])
        swatches.append(Swatch(hexes[0], name, role, usage.get(name, 0)))
    # raw: "#hex: N uses"
    for line in g.get("rawColors", []):
        hexes = HEX_RE.findall(line)
        if not hexes:
            continue
        m = re.search(r":\s*(\d+)\s+use", line)
        uses = int(m.group(1)) if m else 0
        swatches.append(Swatch(hexes[0], "", _role_from_color(hexes[0]), uses))
    return swatches


def cluster_colors(swatches: list[Swatch], threshold: float = 24.0,
                   cap: int = MAX_COLORS) -> tuple[list[Swatch], int]:
    """Greedy cluster by RGB distance. Named/most-used swatch wins as representative."""
    # named + popular first so representatives are meaningful
    ordered = sorted(swatches, key=lambda s: (s.name == "", -s.uses))
    reps: list[Swatch] = []
    for s in ordered:
        merged = False
        for r in reps:
            if _dist(s.hex, r.hex) <= threshold:
                r.uses += s.uses
                if not r.name and s.name:
                    r.name = s.name
                    r.role = _role_from_name(s.name) or r.role
                merged = True
                break
        if not merged:
            reps.append(s)
    reps.sort(key=lambda s: (ROLE_ORDER.index(s.role) if s.role in ROLE_ORDER else 99,
                             -s.uses, s.hex))
    return reps[:cap], max(0, len(reps) - cap)


# --- typography -------------------------------------------------------------
def _size_role(size: float) -> str:
    if size >= 40:
        return "Display"
    if size >= 28:
        return "Heading"
    if size >= 20:
        return "Title"
    if size >= 16:
        return "Body"
    if size >= 14:
        return "Body small"
    return "Caption"


def collect_type(g: dict) -> tuple[list[str], str]:
    entries = {}  # size -> label (prefer named/styled over raw)
    families = Counter()

    for line in g.get("typographyTokens", []):
        m = re.search(r",\s*([\d.]+)px\s*/", line)
        if not m:
            continue
        size = float(m.group(1))
        name = line.split(":")[0].strip()
        face = re.search(r":\s*(.+?)\s*\(", line)
        fam = face.group(1).strip() if face else ""
        if fam:
            families[fam.split()[0]] += 1
        entries.setdefault(size, f"{name} - {fam}".strip(" -"))

    for line in g.get("rawTypography", []):
        m = re.search(r",\s*([\d.]+)px:", line)
        if not m:
            continue
        size = float(m.group(1))
        fam = line.split(",")[0].strip()
        if fam:
            families[fam.split()[0]] += 1
        entries.setdefault(size, f"{_size_role(size)} - {fam} (unstyled)")

    scale = []
    for size in sorted(entries, reverse=True)[:MAX_TYPE]:
        scale.append(f"{_fmt(size)}px - {entries[size]}")
    dominant = families.most_common(1)[0][0] if families else "unknown"
    return scale, dominant


# --- numeric scales (spacing / radius) --------------------------------------
def numeric_scale(lines: list[str], cap: int = MAX_SPACING) -> list[float]:
    vals = set()
    for line in lines:
        rhs = line.split(":", 1)[-1]
        m = NUM_RE.search(rhs)
        if m:
            vals.add(float(m.group(0)))
    return sorted(vals)[:cap]


def _fmt(v: float) -> str:
    return str(int(v)) if float(v).is_integer() else f"{v:g}"


# --- components -------------------------------------------------------------
def collect_components(g: dict, usage: dict[str, int]) -> tuple[list[str], int]:
    families = g.get("componentFamilies", [])
    fam_use = {}
    for fam in families:
        fam_use[fam] = max((c for n, c in usage.items() if n.startswith(fam)), default=0)

    # one representative spec per family (first / most detailed)
    by_family: dict[str, str] = {}
    for spec in g.get("componentSpecs", []):
        name = spec.split(":")[0].strip()
        fam = next((f for f in families if name == f or name.startswith(f + "/")), name)
        # keep the longest spec seen for the family (more geometry captured)
        if fam not in by_family or len(spec) > len(by_family[fam]):
            by_family[fam] = _trim_spec(spec)

    ranked = sorted(by_family.items(),
                    key=lambda kv: (-fam_use.get(kv[0], 0), kv[0]))
    out = []
    for fam, spec in ranked[:MAX_COMPONENTS]:
        uses = fam_use.get(fam, 0)
        tag = f" ({uses} uses)" if uses else ""
        out.append(f"{spec}{tag}")
    return out, max(0, len(ranked) - MAX_COMPONENTS)


def _split_top(s: str) -> list[str]:
    """Split on commas that are NOT inside [...] or (...) brackets."""
    out, buf, depth = [], [], 0
    for ch in s:
        if ch in "[(":
            depth += 1
        elif ch in "])":
            depth = max(0, depth - 1)
        if ch == "," and depth == 0:
            out.append("".join(buf))
            buf = []
        else:
            buf.append(ch)
    if buf:
        out.append("".join(buf))
    return [p.strip() for p in out if p.strip()]


def _trim_spec(spec: str) -> str:
    """Keep the fields that matter for rebuilding a component; drop noise."""
    # variants / description live after ' | '; separate them before field splitting
    core = spec.split(" | ")[0]
    head, _, tail = core.partition(":")
    keep_keys = ("size", "radius", "layout", "padding", "gap", "fill", "stroke", "text", "variants")
    parts = _split_top(tail)
    kept = [p for p in parts if any(p.lower().startswith(k) for k in keep_keys)]
    # variants live after a ' | ' rather than a comma
    variants = re.search(r"variants:\s*([^|]+)", spec)
    body = ", ".join(kept[:8])
    if variants and "variants" not in body:
        body += f" | variants: {variants.group(1).strip()}"
    return f"{head.strip()}: {body}" if body else head.strip()


# --- screen patterns (replace the raw tree) ---------------------------------
def summarize_structure(structures: list[str]) -> tuple[int, list[str]]:
    screens = [ln for ln in structures if ln.startswith("Screen:")]
    names = []
    for ln in screens:
        after = ln.split("/", 1)[-1].strip() if "/" in ln else ln[len("Screen:"):].strip()
        names.append(after)
    return len(screens), names[:MAX_SCREENS_LISTED]


# --- merge multiple files for one company -----------------------------------
def merge_guidelines(files: list[dict]) -> dict:
    if len(files) == 1:
        return files[0]
    merged: dict = {}
    list_keys = ["colorTokens", "rawColors", "typographyTokens", "rawTypography",
                 "typographyHierarchy", "spacingTokens", "radiusTokens", "motionTokens",
                 "effectTokens", "gridTokens", "componentFamilies", "componentSpecs",
                 "styleUsage", "structure", "variableCollections"]
    for k in list_keys:
        seen, acc = set(), []
        for f in files:
            for item in f.get(k, []):
                if item not in seen:
                    seen.add(item)
                    acc.append(item)
        merged[k] = acc
    merged["fileName"] = " + ".join(f.get("fileName", "?") for f in files)
    merged["pageName"] = f"{len(files)} files"
    merged["extractedAt"] = max((f.get("extractedAt", "") for f in files), default="")
    return merged


# --- render -----------------------------------------------------------------
# Uniform placeholder for any empty section (keeps the format identical everywhere).
EMPTY = "_None found in source._"

# Canonical section order. Every DESIGN.md emits exactly these headers, in this
# order, always - empty sections show EMPTY instead of being dropped, so the
# document shape is identical across every company and safe to parse downstream.
SECTION_ORDER = [
    "Overview",
    "Design language",
    "Color palette",
    "Type scale",
    "Spacing scale",
    "Radius scale",
    "Elevation & effects",
    "Components",
    "Screen patterns",
    "Notes for implementers",
]


def _bullets(items):
    return "\n".join(f"- {i}" for i in items) if items else EMPTY


def _slug(name):
    return re.sub(r"[^a-z0-9]+", "-", (name or "").lower()).strip("-") or "design-system"


def synthesize(g: dict, company: str, overview: str = "") -> str:
    """Render one company's guidelines into the canonical DESIGN.md format.

    Always emits every section in SECTION_ORDER; `overview` (optional LLM prose)
    fills the Overview section, which otherwise carries a fixed deterministic line.
    """
    usage = _usage_index(g.get("styleUsage", []))

    swatches, colors_more = cluster_colors(collect_colors(g, usage))
    type_scale, dominant_font = collect_type(g)
    spacing = numeric_scale(g.get("spacingTokens", []))
    radius = numeric_scale(g.get("radiusTokens", []))
    effects = g.get("effectTokens", [])[:8]
    components, comp_more = collect_components(g, usage)
    n_screens, screen_names = summarize_structure(g.get("structure", []))

    # Design language: ALWAYS four bullets, fixed order, graceful when data missing.
    accent = next((s for s in swatches if s.role == "brand/accent"), None)
    max_radius = max(radius) if radius else 0
    radius_feel = ("sharp / squared" if max_radius <= 2
                   else "lightly rounded" if max_radius <= 6
                   else "rounded" if max_radius <= 16 else "soft / pill-like")
    lang = [
        f"Primary typeface: **{dominant_font}** across {len(type_scale)} sizes."
        if type_scale else "Primary typeface: _none detected_.",
        f"Corner treatment: **{radius_feel}** (up to {_fmt(max_radius)}px)."
        if radius else "Corner treatment: _no radius tokens; set per component_.",
        f"Accent color: **{accent.hex}**{f' ({accent.name})' if accent and accent.name else ''}."
        if accent else "Accent color: _none clearly identified_.",
        f"Scale: {len(g.get('componentFamilies', []))} component families, "
        f"{len(swatches)} curated swatches.",
    ]

    def swatch_line(s: Swatch):
        label = s.name if s.name else "(unnamed)"
        use = f", {s.uses} uses" if s.uses else ""
        return f"`{s.hex}` - {s.role}: {label}{use}"

    by_role = defaultdict(list)
    for s in swatches:
        by_role[s.role].append(s)
    color_lines = [swatch_line(s) for role in ROLE_ORDER for s in by_role.get(role, [])]
    if colors_more:
        color_lines.append(f"... +{colors_more} more swatches trimmed")
    if comp_more:
        components = components + [f"... +{comp_more} more families trimmed"]

    screen_body = [f"{n_screens} screen(s) extracted."] + [f"`{n}`" for n in screen_names]

    # One body per canonical section; empties collapse to EMPTY uniformly.
    bodies = {
        "Overview": overview.strip()
            or "Deterministic extraction. Run design_synth.py --llm for a written summary.",
        "Design language": _bullets(lang),
        "Color palette": _bullets(color_lines),
        "Type scale": _bullets(type_scale),
        "Spacing scale": _bullets([", ".join(f"{_fmt(v)}px" for v in spacing)] if spacing else []),
        "Radius scale": _bullets([", ".join(f"{_fmt(v)}px" for v in radius)] if radius else []),
        "Elevation & effects": _bullets(effects),
        "Components": _bullets(components),
        "Screen patterns": _bullets(screen_body),
        "Notes for implementers": _bullets([
            "Prefer palette swatches and the type scale above over one-off values.",
            "Roles (surface / text / border / accent) are inferred; verify against brand intent.",
            "Full node-by-node structure is omitted here; see guidelines.json for exact geometry.",
        ]),
    }

    front = "\n".join([
        "---",
        f"name: {_slug(company)}",
        f"source: {g.get('fileName', company)}",
        f"generated_at: {datetime.now(timezone.utc).isoformat()}",
        "kind: design-system-context",
        "---",
        "",
        f"# {company} - Design System",
        "",
        "> Curated from Figma extraction for use as build context. Values are verbatim "
        "from the source file; palette and type scale are de-duplicated and ranked by usage.",
    ])
    parts = [front] + [f"## {name}\n{bodies[name]}" for name in SECTION_ORDER]
    md = "\n\n".join(parts)
    return re.sub(r"\n{3,}", "\n\n", md).rstrip() + "\n"


# --- optional LLM narrative (off by default, values still come from code) ---
def llm_overview(g: dict, model: str) -> Optional[str]:
    import urllib.request
    key = os.getenv("ANTHROPIC_API_KEY")
    if not key:
        log.info("--llm set but ANTHROPIC_API_KEY missing; skipping narrative")
        return None
    facts = {k: g.get(k, [])[:20] for k in
             ("colorTokens", "typographyTokens", "spacingTokens",
              "componentFamilies", "variableCollections")}
    prompt = (
        "You are documenting a design system for engineers who will rebuild UI from it. "
        "Using ONLY the extracted facts below, write 3-4 sentences describing the visual "
        "character (do not invent any hex values, sizes, or names not present):\n\n"
        + json.dumps(facts, indent=2)
    )
    body = json.dumps({
        "model": model,
        "max_tokens": 400,
        "messages": [{"role": "user", "content": prompt}],
    }).encode()
    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages", data=body,
        headers={"x-api-key": key, "anthropic-version": "2023-06-01",
                 "content-type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            data = json.loads(r.read().decode())
        return "".join(b.get("text", "") for b in data.get("content", []) if b.get("type") == "text").strip()
    except Exception as e:
        log.warning("LLM narrative failed: %s", e)
        return None


# --- orchestration ----------------------------------------------------------
def run(company_filter: Optional[str], use_llm: bool, model: str) -> None:
    if not DESIGN_DIR.exists():
        raise SystemExit(f"DESIGN_DIR not found: {DESIGN_DIR.resolve()} (run figma_ingest.py first)")
    dirs = [d for d in sorted(DESIGN_DIR.iterdir()) if d.is_dir()]
    if company_filter:
        dirs = [d for d in dirs if d.name == company_filter]
    if not dirs:
        raise SystemExit("No company folders to process.")

    for d in dirs:
        gj = d / "guidelines.json"
        if not gj.exists():
            log.warning("%s: no guidelines.json (re-run the patched figma_ingest.py); skipping", d.name)
            continue
        try:
            files = json.loads(gj.read_text())
        except Exception as e:
            log.error("%s: bad guidelines.json: %s", d.name, e)
            continue
        if isinstance(files, dict):
            files = [files]
        merged = merge_guidelines(files)
        overview = (llm_overview(merged, model) or "") if use_llm else ""
        md = synthesize(merged, d.name, overview=overview)

        (d / "DESIGN.md").write_text(md, encoding="utf-8")
        log.info("%s: DESIGN.md written (%d colors, %d type, %d components)",
                 d.name, md.count("` - "), len(collect_type(merged)[0]),
                 len(collect_components(merged, _usage_index(merged.get('styleUsage', [])))[0]))


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO, format="%(message)s")
    ap = argparse.ArgumentParser()
    ap.add_argument("--company", default=None, help="only this company folder")
    ap.add_argument("--llm", action="store_true", help="add an LLM-written prose overview")
    ap.add_argument("--model", default="claude-sonnet-5", help="model for --llm")
    ap.add_argument("--max-colors", type=int, default=MAX_COLORS)
    ap.add_argument("--max-components", type=int, default=MAX_COMPONENTS)
    args = ap.parse_args()
    MAX_COLORS = args.max_colors
    MAX_COMPONENTS = args.max_components
    run(args.company, args.llm, args.model)
