#!/usr/bin/env python3
"""
main.py

Takes:
  1. A CSV of screens to generate (Company Name, Screen Type, Description, Additional Info)
  2. A zip file of company folders, each containing a design.md style guide

Outputs:
  - A zip file containing CompanyName/screen_type.svg for every generated screen,
    plus a _stats/ folder with a per-screen CSV log and a summary JSON.
"""

import argparse
import csv
import difflib
import hashlib
import json
import os
import re
import shutil
import sys
import tempfile
import time
import zipfile
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import quote_plus
from urllib.error import URLError

# Automatically look for and load a local .env file
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    # Fallback if python-dotenv isn't installed yet, it will look at system envs
    pass


# ---------------------------------------------------------------------------
# Pexels image fetching (optional)
# ---------------------------------------------------------------------------
SCREEN_TYPE_SEARCH_HINTS = {
    "home feed": "lifestyle app content",
    "onboarding": "welcome greeting technology",
    "search": "explore discover travel",
    "browse": "explore discover products",
    "notifications": "messages alerts mobile",
    "empty state": "minimal clean workspace",
    "profile": "person portrait professional",
    "settings": "technology preferences workspace",
    "create form": "writing notes workspace",
    "item detail": "product detail closeup",
    "library": "collection gallery organized",
    "list": "collection items organized",
    "checkout": "shopping payment purchase",
    "login": "secure access technology",
    "signup": "join community welcome",
    "dashboard": "analytics data business",
    "chat": "conversation messaging communication",
    "message": "conversation messaging communication",
    "payment": "credit card finance transaction",
    "cart": "shopping bag items purchase",
}


def _get_pexels_search_query(company_name: str, screen_type: str) -> str:
    screen_lower = screen_type.lower()
    cleaned = re.sub(r"^screen\s*\d+\s*", "", screen_lower).strip()

    for keyword, hint in SCREEN_TYPE_SEARCH_HINTS.items():
        if keyword in cleaned:
            return hint

    return cleaned if cleaned else "technology app"


def fetch_pexels_images(
    api_key: str, company_name: str, screen_type: str, count: int = 4
) -> list[dict]:
    query = _get_pexels_search_query(company_name, screen_type)
    url = f"https://api.pexels.com/v1/search?query={quote_plus(query)}&per_page={count}&size=medium"

    req = Request(url)
    req.add_header("Authorization", api_key)

    try:
        with urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except (URLError, OSError, json.JSONDecodeError) as e:
        print(f"    Pexels fetch warning: {e}")
        return []

    images = []
    for photo in data.get("photos", [])[:count]:
        src = photo.get("src", {})
        img_url = src.get("medium") or src.get("large") or src.get("original", "")
        if img_url:
            images.append({
                "url": img_url,
                "width": photo.get("width", 400),
                "height": photo.get("height", 300),
                "alt": photo.get("alt", "").strip() or query,
                "photographer": photo.get("photographer", ""),
            })
    return images


def build_pexels_prompt_section(images: list[dict]) -> str:
    if not images:
        return ""

    lines = [
        "\n\nPLACEHOLDER IMAGES -- use these real image URLs via <image> SVG tags instead of "
        "drawing placeholder rectangles with landscape icons. Embed them with:\n"
        '  <image href="URL" x="..." y="..." width="..." height="..." '
        'preserveAspectRatio="xMidYMid slice" />\n'
        "Crop/size them to fit cards, hero sections, thumbnails, or list item images as needed. "
        "Use as many as are appropriate for the screen layout (hero images, card thumbnails, "
        "avatar backgrounds, etc.). Available images:"
    ]
    for i, img in enumerate(images, 1):
        lines.append(
            f'  Image {i}: {img["url"]}\n'
            f'    Alt: {img["alt"]} | Original size: {img["width"]}x{img["height"]} | '
            f'Photo by: {img["photographer"]}'
        )
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Prompt construction
# ---------------------------------------------------------------------------
SYSTEM_PROMPT = (
    "You are an expert UI/frontend designer producing production-quality screen mockups as SVG. "
    "You will be given a screen type to design and a design system document (design.md) for a "
    "specific company. You must design the screen strictly following the visual language described "
    "in the design document -- colors, typography, spacing, components, tone -- and use ONLY "
    "information contained in that document plus the screen brief provided. Do not invent brand "
    "details, logos, or real company assets that aren't described in the document.\n\n"

    "OUTPUT FORMAT: a single, self-contained SVG file.\n\n"

    "DETAIL REQUIREMENTS -- the SVG must look like a real, fully populated app screen:\n"
    "- Fill EVERY region of the screen with realistic content. No blank/empty areas unless the "
    "  screen type explicitly calls for an empty state.\n"
    "- Include a STATUS BAR at the top (time, signal bars, battery icon, wifi icon) built from "
    "  <text> + <rect> + <circle> + <line>.\n"
    "- Include a NAVIGATION BAR at the bottom with 4-5 tab icons, each built from geometric "
    "  primitives (<rect>, <circle>, <line>, <polygon>, <polyline>) with a <text> label below.\n"
    "- Populate the screen with REALISTIC PLACEHOLDER DATA: real-looking usernames, dollar amounts, "
    "  dates, titles, descriptions, ratings (star icons = <polygon>), counts, timestamps. "
    "  For list/feed screens, render at least 4-6 distinct items with varied content.\n"
    "- Render COMPLETE FORM FIELDS when the screen has inputs: a <rect> for the field container, "
    "  a <text> label above it, a <text> placeholder value inside, and any helper text below.\n"
    "- For BUTTONS: always a <g> containing a rounded <rect> (with rx) plus a centered <text>. "
    "  Include primary, secondary, and ghost/text button variants where the design calls for them.\n"
    "- For CARDS: a <g> with a rounded <rect> background, a <text> title, a <text> subtitle or "
    "  body, and any relevant metadata (date, price, rating). Fill cards with specific, varied content.\n"
    "- For AVATARS: <circle> with a fill color and a <text> initial centered inside.\n"
    "- For TOGGLE SWITCHES: a rounded <rect> track + <circle> knob.\n"
    "- For CHECKBOXES: a small <rect> with optional <polyline> checkmark inside.\n"
    "- For PROGRESS BARS: two overlapping <rect> elements (track + fill).\n"
    "- For BADGES/CHIPS: a small rounded <rect> + <text>.\n"
    "- For SEARCH BARS: a rounded <rect> with a magnifying-glass icon (<circle> + <line>) and "
    "  <text> placeholder.\n"
    "- For IMAGES/THUMBNAILS: if real image URLs are provided in the user prompt, use "
    '  <image href="URL" x="..." y="..." width="..." height="..." '
    'preserveAspectRatio="xMidYMid slice" /> to embed them in hero areas, cards, and list items. '
    "If no image URLs are provided, fall back to a <rect> with a muted fill and a small "
    "landscape icon (<polygon> for mountain + <circle> for sun) centered inside.\n"
    "- Add DIVIDERS (<line>) between list items and sections.\n"
    "- Add SECTION HEADERS with a bold <text> and optional 'See All' link <text> on the right.\n"
    "- Include SHADOWS by using a duplicate <rect> offset by 1-2px with low-opacity dark fill "
    "  behind cards, or use filter-based drop shadows where appropriate.\n\n"

    "CRITICAL SVG ELEMENT RULES:\n"
    "- Use a viewBox of '0 0 390 844' (mobile) unless the brief says desktop, in which case "
    "  use '0 0 1440 900'.\n"
    "- Maximize the use of SEMANTIC SVG ELEMENTS: <text>, <rect>, <circle>, <ellipse>, <line>, "
    "  <polygon>, <polyline>, and <g> for grouping.\n"
    "- AVOID <path> as much as possible. Only use <path> for shapes that genuinely cannot be "
    "  represented by rect, circle, ellipse, line, polygon, or polyline. Never use <path> for "
    "  rectangles, circles, lines, or simple geometric shapes.\n"
    "- For ICONS, prefer geometric compositions:\n"
    "    magnifying glass = <circle> + angled <line>\n"
    "    hamburger menu = three horizontal <line> elements\n"
    "    back arrow = <polyline points='...'>\n"
    "    home = <polygon> (roof) + <rect> (body)\n"
    "    bell = <rect> (body) + <circle> (top) + small <circle> (notification dot)\n"
    "    heart = two arcs via <path> only if no simpler element works\n"
    "    star = <polygon points='...'> with 5 points\n"
    "    gear/settings = <circle> with small <circle> or <rect> teeth around it\n"
    "    plus/add = two crossed <line> elements\n"
    "    close/X = two crossed <line> elements\n"
    "    check = <polyline>\n"
    "    user/person = <circle> (head) + <ellipse> or wide <rect> (shoulders)\n"
    "    chat bubble = <rect rx=...> + small <polygon> for the tail\n"
    "- Include a full-width background <rect> filling the viewBox with the appropriate color.\n"
    "- Set font-family, font-size, font-weight, and fill on every <text> element to match "
    "  the design system's typography scale.\n"
    "- Use opacity, rx/ry for rounded corners, and stroke for borders as the design system requires.\n"
    "- Do NOT embed any HTML, <foreignObject>, or CSS stylesheets. Pure SVG only.\n\n"

    "Respond with ONLY the raw SVG, starting with <svg. "
    "Do not include markdown code fences, XML declarations, explanations, or any text outside the SVG."
)


JSX_SYSTEM_PROMPT = (
    "You are an expert React + Tailwind CSS frontend engineer producing production-quality screen "
    "mockups as JSX. You will be given a screen type to design and a design system document "
    "(design.md) for a specific company. You must design the screen strictly following the visual "
    "language described in the design document -- colors, typography, spacing, components, tone -- "
    "and use ONLY information contained in that document plus the screen brief provided. Do not "
    "invent brand details, logos, or real company assets that aren't described in the document.\n\n"

    "OUTPUT FORMAT: a single, self-contained .jsx file that exports one default React functional "
    "component (PascalCase name derived from the screen type, e.g. HomeFeedScreen). No external "
    "imports beyond React itself (`import { useState } from 'react'` is fine if the screen has a "
    "toggle/tab/interactive element worth demonstrating -- otherwise skip hooks entirely). Do NOT "
    "import icon libraries, UI kits, or CSS files; every icon must be built inline from small <svg> "
    "elements or simple <div> shapes so the component has zero external dependencies beyond React "
    "and Tailwind utility classes.\n\n"

    "DETAIL REQUIREMENTS -- the component must look like a real, fully populated app screen:\n"
    "- Wrap everything in an outer phone-frame <div> sized like a mobile screen (e.g. "
    "  `w-[390px] h-[844px] relative overflow-hidden`) unless the brief says desktop, in which case "
    "  use a wider frame (e.g. `w-[1440px] h-[900px]`).\n"
    "- Fill EVERY region of the screen with realistic content. No blank/empty areas unless the "
    "  screen type explicitly calls for an empty state.\n"
    "- Include a STATUS BAR at the top (time, signal/wifi/battery icons built from small inline "
    "  <svg> or <div> shapes).\n"
    "- Include a BOTTOM NAVIGATION bar with 4-5 tabs, each an icon + <span> label.\n"
    "- Populate the screen with REALISTIC PLACEHOLDER DATA: real-looking usernames, dollar amounts, "
    "  dates, titles, descriptions, star ratings, counts, timestamps. For list/feed screens, render "
    "  at least 4-6 distinct items with varied content (map over a small local array of objects "
    "  defined at the top of the component, don't hand-write six nearly-identical blocks).\n"
    "- Render COMPLETE FORM FIELDS when the screen has inputs: a <label>, an <input> or <textarea> "
    "  with a realistic placeholder/value, and any helper text below, all styled with Tailwind.\n"
    "- For BUTTONS: real <button> elements with Tailwind classes for background, padding, rounded "
    "  corners, and text. Include primary, secondary, and ghost/text variants where the design calls "
    "  for them.\n"
    "- For CARDS: a <div> with rounded corners, background, shadow, a title, a subtitle/body, and "
    "  any relevant metadata (date, price, rating). Fill cards with specific, varied content.\n"
    "- For AVATARS: a circular <div> (or <img> if a Pexels URL is supplied) with initials or a photo.\n"
    "- For TOGGLES, CHECKBOXES, PROGRESS BARS, BADGES/CHIPS, SEARCH BARS: build them from styled "
    "  <div>/<span>/<input> elements the same way a real product would.\n"
    "- For IMAGES/THUMBNAILS: if real image URLs are provided in the user prompt, use a plain "
    '  `<img src="URL" className="..." />` (with appropriate `object-cover` / rounded classes) in '
    "  hero areas, cards, and list items. If no image URLs are provided, fall back to a muted "
    "  background <div> with a tiny inline landscape icon centered inside.\n"
    "- Add DIVIDERS (`border-b` or a thin <div>) between list items and sections.\n"
    "- Add SECTION HEADERS with bold text and an optional 'See All' link on the right.\n\n"

    "STYLING RULES:\n"
    "- Use Tailwind utility classes for all styling (layout, color, spacing, typography, shadows, "
    "  rounded corners). Use arbitrary-value Tailwind classes (e.g. `bg-[#4A90D9]`, `text-[15px]`) "
    "  to hit exact colors/sizes from the design system when there's no standard Tailwind token for "
    "  them.\n"
    "- Do not use inline `style={{...}}` unless something genuinely cannot be expressed in Tailwind "
    "  (e.g. a very specific background-image URL).\n"
    "- Do not use any CSS-in-JS, styled-components, or external stylesheets.\n"
    "- Keep the component pure/presentational -- no data fetching, no routing, no global state.\n\n"

    "Respond with ONLY the raw JSX/TSX source code for the file, starting with either an `import` "
    "statement or the `export default function ComponentName() {` declaration. Do not include "
    "markdown code fences, explanations, or any text outside the code."
)


def build_pexels_instructions(fmt: str, has_images: bool) -> str:
    if not has_images:
        return ""
    if fmt == "jsx":
        return (
            " Use the provided Pexels image URLs via plain <img src=\"URL\" className=\"...\" /> "
            "tags for any hero images, card thumbnails, backgrounds, or visual content areas."
        )
    return (
        " Use the provided Pexels image URLs via <image href=...> tags for any hero images, "
        "card thumbnails, backgrounds, or visual content areas."
    )


def build_user_prompt(
    screen_type: str, description: str, additional_info: str,
    design_md: str, pexels_images: list[dict] | None = None,
    fmt: str = "svg",
) -> str:
    pexels_images = pexels_images or []
    pexels_section = build_pexels_prompt_section(pexels_images)

    if fmt == "jsx":
        body_instructions = (
            f"Generate the complete, highly detailed JSX component for this screen now. "
            f"The output should look like a real production app screen -- fully populated with "
            f"realistic content, proper spacing, status bar, bottom navigation, and as many distinct "
            f"UI elements (buttons, cards, text labels, icons, dividers, inputs, avatars, badges) "
            f"as the screen type calls for. Use semantic HTML elements (<div>, <span>, <p>, <button>, "
            f"<input>, <img>) styled entirely with Tailwind utility classes. "
            f"Do not leave large empty areas -- fill the screen."
        )
    else:
        body_instructions = (
            f"Generate the complete, highly detailed SVG for this screen now. "
            f"The output should look like a real production app screen -- fully populated with "
            f"realistic content, proper spacing, status bar, bottom navigation, and as many distinct "
            f"UI elements (buttons, cards, text labels, icons, dividers, inputs, avatars, badges) "
            f"as the screen type calls for. Use <text>, <rect>, <circle>, <line>, <g>, <polygon>, "
            f"<polyline> wherever possible. Minimize <path> usage. Every piece of visible text must "
            f"be a <text> element. Every button must be a <rect> + <text> inside a <g>. "
            f"Do not leave large empty areas -- fill the screen."
        )

    return (
        f"SCREEN TO DESIGN\n"
        f"Screen type: {screen_type}\n"
        f"Description: {description}\n"
        f"Specific requirements to incorporate: {additional_info}\n\n"
        f"--- DESIGN SYSTEM DOCUMENT (design.md) ---\n"
        f"{design_md}\n"
        f"--- END DESIGN SYSTEM DOCUMENT ---\n"
        f"{pexels_section}\n\n"
        f"{body_instructions}"
        f"{build_pexels_instructions(fmt, bool(pexels_images))}"
    )


def clean_svg_output(text: str) -> str:
    text = text.strip()
    text = re.sub(r"^```(svg|xml|SVG|XML)?\s*", "", text)
    text = re.sub(r"\s*```$", "", text)
    text = text.strip()
    text = re.sub(r"^<\?xml[^?]*\?>\s*", "", text)
    svg_start = text.find("<svg")
    if svg_start > 0:
        text = text[svg_start:]
    return text.strip()


def clean_jsx_output(text: str) -> str:
    text = text.strip()
    text = re.sub(r"^```(jsx|tsx|javascript|js|JSX|TSX)?\s*", "", text)
    text = re.sub(r"\s*```$", "", text)
    text = text.strip()
    # Drop any stray prose before the first real line of code, if the model
    # added a preamble despite instructions not to.
    match = re.search(r"^(import\s|export\s|function\s|const\s)", text, re.MULTILINE)
    if match and match.start() > 0:
        text = text[match.start():]
    return text.strip()


def clean_output(text: str, fmt: str) -> str:
    return clean_jsx_output(text) if fmt == "jsx" else clean_svg_output(text)


# ---------------------------------------------------------------------------
# Disk cache for generated screens
# ---------------------------------------------------------------------------
# Cache is keyed on everything that affects the generated output: which
# company/design doc was used, the screen brief, the Pexels images that were
# fetched, and the provider/model. If any of those change, the key changes
# and the screen is regenerated instead of served stale from cache.
CACHE_VERSION = "v1"


def compute_cache_key(
    matched_folder: str,
    screen_type: str,
    description: str,
    additional_info: str,
    design_doc: str,
    pexels_images: list[dict],
    provider: str,
    model: str,
    fmt: str = "svg",
) -> str:
    payload = {
        "cache_version": CACHE_VERSION,
        "format": fmt,
        "system_prompt": JSX_SYSTEM_PROMPT if fmt == "jsx" else SYSTEM_PROMPT,
        "matched_folder": matched_folder,
        "screen_type": screen_type,
        "description": description,
        "additional_info": additional_info,
        "design_doc": design_doc,
        "pexels_urls": sorted(img["url"] for img in pexels_images),
        "provider": provider,
        "model": model or "",
    }
    blob = json.dumps(payload, sort_keys=True, ensure_ascii=True).encode("utf-8")
    return hashlib.sha256(blob).hexdigest()


def cache_path_for(cache_dir: Path, key: str) -> Path:
    return cache_dir / f"{key}.json"


def load_from_cache(cache_dir: Path, key: str):
    path = cache_path_for(cache_dir, key)
    if not path.exists():
        return None
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data.get("svg", ""), data.get("usage", {})
    except (json.JSONDecodeError, OSError):
        # Corrupt cache entry -- ignore it and let it be regenerated/overwritten.
        return None


def save_to_cache(cache_dir: Path, key: str, svg: str, usage: dict):
    cache_dir.mkdir(parents=True, exist_ok=True)
    path = cache_path_for(cache_dir, key)
    tmp_path = path.with_suffix(".json.tmp")
    with open(tmp_path, "w", encoding="utf-8") as f:
        json.dump({"svg": svg, "usage": usage, "cached_at": datetime.now(timezone.utc).isoformat()}, f)
    tmp_path.replace(path)


# ---------------------------------------------------------------------------
# Model clients
# ---------------------------------------------------------------------------
class ModelClient:
    def generate(self, system_prompt: str, user_prompt: str):
        raise NotImplementedError


class OpenAIClient(ModelClient):
    def __init__(self, model: str, base_url: str = None, api_key_env: str = "OPENAI_API_KEY"):
        try:
            import openai
        except ImportError:
            print("Error: --provider openai requires the 'openai' package. Install it with: pip install openai")
            sys.exit(1)

        api_key = os.environ.get(api_key_env)
        if not api_key:
            print(f"Error: environment variable {api_key_env} is not set.")
            sys.exit(1)

        kwargs = {"api_key": api_key}
        if base_url:
            kwargs["base_url"] = base_url
        self.client = openai.OpenAI(**kwargs)
        self.model = model

    def generate(self, system_prompt: str, user_prompt: str):
        resp = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
        )
        text = resp.choices[0].message.content or ""
        usage = {}
        if getattr(resp, "usage", None):
            usage = {
                "prompt_tokens": getattr(resp.usage, "prompt_tokens", None),
                "completion_tokens": getattr(resp.usage, "completion_tokens", None),
                "total_tokens": getattr(resp.usage, "total_tokens", None),
            }
        return text, usage


class AzureOpenAIClient(ModelClient):
    def __init__(self, model: str, endpoint: str, api_version: str, api_key_env: str = "AZURE_OPENAI_API_KEY"):
        try:
            from openai import AzureOpenAI
        except ImportError:
            print("Error: --provider azure requires the 'openai' package. Install it with: pip install openai")
            sys.exit(1)

        api_key = os.environ.get(api_key_env)
        if not api_key:
            print(f"Error: environment variable {api_key_env} is not set.")
            sys.exit(1)

        self.client = AzureOpenAI(
            azure_endpoint=endpoint,
            api_key=api_key,
            api_version=api_version
        )
        self.model = model

    def generate(self, system_prompt: str, user_prompt: str):
        resp = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
        )
        text = resp.choices[0].message.content or ""
        usage = {}
        if getattr(resp, "usage", None):
            usage = {
                "prompt_tokens": getattr(resp.usage, "prompt_tokens", None),
                "completion_tokens": getattr(resp.usage, "completion_tokens", None),
                "total_tokens": getattr(resp.usage, "total_tokens", None),
            }
        return text, usage


class SecondaryClient(ModelClient):
    def __init__(self, model: str, api_key_env: str = "SECONDARY_API_KEY"):
        try:
            import anthropic
        except ImportError:
            print("Error: --provider secondary requires the 'anthropic' package. Install it with: pip install anthropic")
            sys.exit(1)

        api_key = os.environ.get(api_key_env)
        if not api_key:
            print(f"Error: environment variable {api_key_env} is not set.")
            sys.exit(1)

        self.client = anthropic.Anthropic(api_key=api_key)
        self.model = model

    def generate(self, system_prompt: str, user_prompt: str):
        resp = self.client.messages.create(
            model=self.model,
            max_tokens=8192,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}],
        )
        text = "".join(block.text for block in resp.content if block.type == "text")
        usage = {
            "prompt_tokens": resp.usage.input_tokens,
            "completion_tokens": resp.usage.output_tokens,
            "total_tokens": resp.usage.input_tokens + resp.usage.output_tokens,
        }
        return text, usage


class DryRunClient(ModelClient):
    def __init__(self, fmt: str = "svg"):
        self.fmt = fmt

    def generate(self, system_prompt: str, user_prompt: str):
        if self.fmt == "jsx":
            return self._generate_jsx(user_prompt)
        return self._generate_svg(user_prompt)

    def _generate_jsx(self, user_prompt: str):
        time.sleep(0.02)
        type_match = re.search(r"Screen type:\s*(.+)", user_prompt)
        screen_label = type_match.group(1).strip() if type_match else "Screen"
        component_name = re.sub(r"[^A-Za-z0-9]", "", screen_label.title()) or "Screen"
        image_urls = re.findall(r"(https://images\.pexels\.com/photos/[^\s\"']+)", user_prompt)

        image_block = ""
        if image_urls:
            tiles = "\n        ".join(
                f'<img src="{url}" className="w-40 h-28 rounded-lg object-cover" alt="Pexels image {idx + 1}" />'
                for idx, url in enumerate(image_urls[:4])
            )
            image_block = f'''
      <div className="flex flex-wrap gap-2 px-5">
        {tiles}
      </div>'''
            pexels_status = f"{len(image_urls)} Pexels image(s) embedded below"
        else:
            pexels_status = "No Pexels images (key not set or fetch failed)"

        jsx = f'''export default function {component_name}() {{
  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#f5f5f5] font-sans">
      <div className="w-full h-11 bg-white flex items-center justify-center">
        <span className="text-[16px] font-bold text-[#111111]">DRY RUN</span>
      </div>
      <div className="mx-5 mt-4 h-24 rounded-xl bg-white border border-[#dddddd] flex flex-col items-center justify-center">
        <span className="text-[20px] text-[#333333]">{screen_label}</span>
        <span className="text-[12px] text-[#999999] mt-1">Placeholder — no LLM was called</span>
      </div>
      <div className="mx-5 mt-4 h-9 rounded-md bg-[#e8f4e8] border border-[#a3d9a3] flex items-center justify-center">
        <span className="text-[12px] text-[#2d7a2d]">{pexels_status}</span>
      </div>
      <div className="mx-10 mt-6">
        <button className="w-full h-12 rounded-lg bg-[#4A90D9] text-white text-[15px] font-bold">
          Sample Button
        </button>
      </div>
      <div className="border-b border-[#eeeeee] mx-5 mt-6" />{image_block}
      <div className="absolute bottom-0 w-full h-[50px] bg-white border-t border-[#eeeeee] flex items-center justify-around">
        <div className="w-6 h-6 rounded-full bg-[#cccccc]" />
        <div className="w-6 h-6 rounded-full bg-[#cccccc]" />
        <div className="w-6 h-6 rounded-full bg-[#cccccc]" />
        <div className="w-6 h-6 rounded-full bg-[#cccccc]" />
      </div>
    </div>
  );
}}'''
        return jsx, {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}

    def _generate_svg(self, user_prompt: str):
        time.sleep(0.02)
        type_match = re.search(r"Screen type:\s*(.+)", user_prompt)
        screen_label = type_match.group(1).strip() if type_match else "Screen"
        image_urls = re.findall(r"(https://images\.pexels\.com/photos/[^\s\"']+)", user_prompt)

        image_tags = []
        if image_urls:
            cols = 2
            tile_w = 165
            tile_h = 120
            gap = 10
            start_x = 20
            start_y = 310
            for idx, url in enumerate(image_urls[:4]):
                col = idx % cols
                row = idx // cols
                x = start_x + col * (tile_w + gap)
                y = start_y + row * (tile_h + gap)
                image_tags.append(
                    f'  <rect x="{x}" y="{y}" width="{tile_w}" height="{tile_h}" '
                    f'rx="8" fill="#eeeeee" stroke="#cccccc" stroke-width="1" />'
                    f'  <image href="{url}" x="{x}" y="{y}" width="{tile_w}" '
                    f'height="{tile_h}" preserveAspectRatio="xMidYMid slice" '
                    f'clip-path="inset(0 round 8px)" />'
                    f'  <text x="{x + tile_w // 2}" y="{y + tile_h + 14}" '
                    f'text-anchor="middle" font-family="sans-serif" font-size="9" '
                    f'fill="#999999">Pexels image {idx + 1}</text>'
                )
            pexels_status = f"{len(image_urls)} Pexels image(s) embedded below"
        else:
            pexels_status = "No Pexels images (key not set or fetch failed)"

        images_block = "\n".join(image_tags)

        svg = (
            '<svg viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg">\n'
            '  <rect width="390" height="844" fill="#f5f5f5" />\n'
            '  \n'
            '  <rect x="0" y="0" width="390" height="44" fill="#ffffff" />\n'
            '  <text x="195" y="28" text-anchor="middle" font-family="sans-serif" '
            'font-size="16" font-weight="bold" fill="#111111">DRY RUN</text>\n'
            '  \n'
            '  <rect x="20" y="60" width="350" height="100" rx="12" fill="#ffffff" '
            'stroke="#dddddd" stroke-width="1" />\n'
            f'  <text x="195" y="100" text-anchor="middle" font-family="sans-serif" '
            f'font-size="20" fill="#333333">{screen_label}</text>\n'
            '  <text x="195" y="125" text-anchor="middle" font-family="sans-serif" '
            'font-size="12" fill="#999999">Placeholder — no LLM was called</text>\n'
            '  \n'
            '  <rect x="20" y="175" width="350" height="36" rx="6" fill="#e8f4e8" '
            'stroke="#a3d9a3" stroke-width="1" />\n'
            f'  <text x="195" y="198" text-anchor="middle" font-family="sans-serif" '
            f'font-size="12" fill="#2d7a2d">{pexels_status}</text>\n'
            '  \n'
            '  <g>\n'
            '    <rect x="40" y="230" width="310" height="48" rx="8" fill="#4A90D9" />\n'
            '    <text x="195" y="260" text-anchor="middle" font-family="sans-serif" '
            'font-size="15" font-weight="bold" fill="#ffffff">Sample Button</text>\n'
            '  </g>\n'
            '  <line x1="20" y1="295" x2="370" y2="295" stroke="#eeeeee" stroke-width="1" />\n'
            f'{images_block}\n'
            '  \n'
            '  <rect x="0" y="794" width="390" height="50" fill="#ffffff" '
            'stroke="#eeeeee" stroke-width="1" />\n'
            '  <circle cx="78" cy="819" r="12" fill="#cccccc" />\n'
            '  <circle cx="156" cy="819" r="12" fill="#cccccc" />\n'
            '  <circle cx="234" cy="819" r="12" fill="#cccccc" />\n'
            '  <circle cx="312" cy="819" r="12" fill="#cccccc" />\n'
            '</svg>'
        )
        return svg, {"prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0}


def get_client(args) -> ModelClient:
    if args.provider == "dryrun":
        return DryRunClient(fmt=args.format)
    if args.provider == "openai":
        if not args.model:
            print("Error: --model is required for --provider openai")
            sys.exit(1)
        return OpenAIClient(model=args.model, base_url=args.base_url, api_key_env=args.api_key_env or "OPENAI_API_KEY")
    if args.provider == "azure":
        if not args.model:
            print("Error: --model (deployment name) is missing from your command or your .env file!")
            sys.exit(1)
        if not args.azure_endpoint:
            print("Error: --azure-endpoint is missing from your command or your .env file!")
            sys.exit(1)
        return AzureOpenAIClient(
            model=args.model, 
            endpoint=args.azure_endpoint, 
            api_version=args.api_version, 
            api_key_env=args.api_key_env or "AZURE_OPENAI_API_KEY"
        )
    if args.provider == "secondary":
        if not args.model:
            print("Error: --model is required for --provider secondary")
            sys.exit(1)
        return SecondaryClient(model=args.model, api_key_env=args.api_key_env or "SECONDARY_API_KEY")
    raise ValueError(f"Unknown provider: {args.provider}")


# ---------------------------------------------------------------------------
# CSV loading and File Matching
# ---------------------------------------------------------------------------
HEADER_ALIASES = {
    "company": ["company name", "company", "companyname"],
    "screen_type": ["screen type", "screentype", "type", "screen"],
    "description": ["description", "desc", "1 sentence description of screen type"],
    "additional_info": ["additional info", "additional information", "additionalinfo", "notes", "specifics"],
}


def _normalize_header(h: str) -> str:
    return re.sub(r"\s+", " ", (h or "").strip().lower())


def load_csv_rows(csv_path: str):
    import io
    with open(csv_path, "rb") as f:
        raw = f.read()
    if raw.startswith(b"\xef\xbb\xbf"):
        raw = raw[3:]
    text = raw.decode("utf-8", errors="ignore")

    first_line_end = text.find("\n")
    if first_line_end == -1:
        first_line_end = len(text)
    first_line = text[:first_line_end]
    if first_line.startswith('"') and first_line.count('"') % 2 == 1:
        text = text[1:]

    with io.StringIO(text) as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        raw_headers = reader.fieldnames or []

    normalized_to_raw = {_normalize_header(h): h for h in raw_headers}

    column_map = {}
    for field, aliases in HEADER_ALIASES.items():
        for alias in aliases:
            if alias in normalized_to_raw:
                column_map[field] = normalized_to_raw[alias]
                break

    return rows, column_map


def normalize_name(name: str) -> str:
    return re.sub(r"[^a-z0-9]", "", (name or "").lower())


def build_design_doc_index(root: Path) -> dict:
    index = {}
    for company_dir in root.iterdir():
        if not company_dir.is_dir():
            continue
        design_md = None
        for candidate in company_dir.rglob("*"):
            if candidate.is_file() and candidate.name.lower() == "design.md":
                design_md = candidate
                break
        if design_md:
            index[normalize_name(company_dir.name)] = (company_dir.name, design_md)
    return index


def match_company(csv_company_name: str, design_index: dict):
    norm = normalize_name(csv_company_name)
    if norm in design_index:
        return design_index[norm]
    close = difflib.get_close_matches(norm, list(design_index.keys()), n=1, cutoff=0.75)
    if close:
        return design_index[close[0]]
    return None


def extract_zip_and_build_index(zip_path: Path, dest: Path) -> dict:
    with zipfile.ZipFile(zip_path, "r") as zf:
        zf.extractall(dest)

    top_level = [p for p in dest.iterdir() if not p.name.startswith("__MACOSX")]

    candidates = [dest]
    if len(top_level) == 1 and top_level[0].is_dir():
        candidates.append(top_level[0])

    best_index = {}
    for candidate in candidates:
        idx = build_design_doc_index(candidate)
        if len(idx) > len(best_index):
            best_index = idx

    return best_index


# ---------------------------------------------------------------------------
# Main pipeline
# ---------------------------------------------------------------------------
def main():
    parser = argparse.ArgumentParser(description="Generate HTML screens from a screens CSV + design.md files via an LLM.")
    parser.add_argument("csv_path", help="Path to the screens CSV (from screens_to_csv.py)")
    parser.add_argument("design_zip", help="Path to the zip of company folders containing design.md files")
    parser.add_argument("output_zip", help="Path to write the output zip of generated screens + stats")
    parser.add_argument("--provider", choices=["openai", "azure", "secondary", "dryrun"], default="dryrun",
                        help="Which API to call. Default: dryrun (no cost, no network calls).")
    
    # Checking .env files automatically if command lines tags are left out
    parser.add_argument("--model", default=os.environ.get("AZURE_DEPLOYMENT_NAME"),
                        help="Model name or Azure Deployment name (Defaults to AZURE_DEPLOYMENT_NAME in env)")
    parser.add_argument("--azure-endpoint", default=os.environ.get("AZURE_OPENAI_ENDPOINT"),
                        help="Azure OpenAI endpoint URL (Defaults to AZURE_OPENAI_ENDPOINT in env)")
    parser.add_argument("--api-version", default=os.environ.get("AZURE_OPENAI_API_VERSION", "2024-02-15-preview"),
                        help="Azure OpenAI API Version")
    
    parser.add_argument("--api-key-env", default=None, help="Env var name holding the API key (defaults per provider)")
    parser.add_argument("--base-url", default=None,
                        help="Custom base URL for an OpenAI-compatible endpoint (used by --provider openai). "
                             "Leave unset to hit OpenAI's default API (api.openai.com).")
    parser.add_argument("--max-retries", type=int, default=2, help="Retries per screen on failure")
    parser.add_argument("--sleep", type=float, default=0.0, help="Seconds to sleep between requests (rate limiting)")
    parser.add_argument("--pexels-key", default=None, help="Pexels API key for embedding real placeholder photos.")
    parser.add_argument("--cache-dir", default=".screen_gen_cache",
                        help="Directory to cache generated screens in, keyed by their inputs. Default: .screen_gen_cache")
    parser.add_argument("--no-cache", action="store_true",
                        help="Disable the cache entirely: always regenerate, never read or write cache entries.")
    parser.add_argument("--format", choices=["svg", "jsx"], default="svg",
                        help="Output format for generated screens: raw SVG or a self-contained React/Tailwind JSX component. Default: svg")
    parser.add_argument("--sample-companies", type=int, default=None,
                        help="Only process rows for this many distinct companies (in CSV order), keeping all their rows. "
                             "Useful for a cheap test run before processing the full CSV.")
    args = parser.parse_args()

    client = get_client(args)

    pexels_key = args.pexels_key or os.environ.get("PEXELS_API_KEY")

    csv_rows, column_map = load_csv_rows(args.csv_path)

    if not csv_rows:
        print("Error: input CSV is empty.")
        sys.exit(1)

    if not column_map.get("company") or not column_map.get("screen_type"):
        print("Error: could not find a 'Company Name' and/or 'Screen Type' column in the CSV.")
        sys.exit(1)

    original_row_count = len(csv_rows)
    sampled_companies = []
    if args.sample_companies:
        company_col = column_map["company"]
        seen = []
        filtered_rows = []
        for row in csv_rows:
            c = (row.get(company_col, "") or "").strip()
            if c not in seen:
                if len(seen) >= args.sample_companies:
                    continue
                seen.append(c)
            filtered_rows.append(row)
        csv_rows = filtered_rows
        sampled_companies = seen

    cache_dir = Path(args.cache_dir).resolve()
    cache_enabled = not args.no_cache

    with tempfile.TemporaryDirectory() as tmp_str:
        tmp = Path(tmp_str)
        design_index = extract_zip_and_build_index(Path(args.design_zip), tmp / "designs")

        if not design_index:
            print("Error: no design.md files found anywhere in the design zip.")
            sys.exit(1)

        # -----------------------------------------------------------------
        # Upfront run summary: what's being read, what will be written,
        # and what settings (provider/model/cache/pexels) are in effect.
        # -----------------------------------------------------------------
        existing_cache_entries = 0
        if cache_enabled and cache_dir.exists():
            existing_cache_entries = sum(1 for _ in cache_dir.glob("*.json"))

        print("=" * 70)
        print("RUN CONFIGURATION")
        print("=" * 70)
        print("INPUTS:")
        print(f"  Screens CSV:      {Path(args.csv_path).resolve()}")
        print(f"    -> {original_row_count} screen row(s) in file")
        if args.sample_companies:
            print(f"    -> SAMPLED to {len(csv_rows)} row(s) across {len(sampled_companies)} "
                  f"compan{'y' if len(sampled_companies) == 1 else 'ies'}: {', '.join(sampled_companies)}")
        print(f"    -> Columns matched: {column_map}")
        print(f"  Design zip:       {Path(args.design_zip).resolve()}")
        print(f"    -> {len(design_index)} company design.md folder(s) found: "
              f"{', '.join(sorted(name for name, _ in design_index.values()))}")
        print("SETTINGS:")
        print(f"  Provider:         {args.provider}")
        print(f"  Model:            {args.model or '(n/a for dryrun)'}")
        print(f"  Output format:    {args.format}")
        if args.provider == "azure":
            print(f"  Azure endpoint:   {args.azure_endpoint or '(not set!)'}")
            print(f"  Azure API ver:    {args.api_version}")
        print(f"  Pexels images:    {'ENABLED' if pexels_key else 'disabled (no API key found)'}")
        print(f"  Cache:            {'ENABLED' if cache_enabled else 'DISABLED (--no-cache)'}")
        if cache_enabled:
            print(f"    -> Cache dir:   {cache_dir}")
            print(f"    -> Existing cached entries: {existing_cache_entries}")
        print("OUTPUT:")
        print(f"  Output zip:       {Path(args.output_zip).resolve()}")
        print(f"    -> Will contain CompanyName/screen_type.{args.format} per screen, plus "
              f"_stats/log.csv and _stats/summary.json")
        print("=" * 70)
        print()

        output_dir = tmp / "output"
        output_dir.mkdir()

        stats_rows = []
        unmatched_companies = set()
        run_start = time.time()
        cache_hits = 0

        for i, row in enumerate(csv_rows, 1):
            company = (row.get(column_map.get("company", ""), "") or "").strip()
            screen_type = (row.get(column_map.get("screen_type", ""), "") or "").strip()
            description = (row.get(column_map.get("description", ""), "") or "").strip()
            additional_info = (row.get(column_map.get("additional_info", ""), "") or "").strip()

            match = match_company(company, design_index)

            base_stat = {
                "Company (CSV)": company,
                "Company (Matched Folder)": None,
                "Screen Type": screen_type,
                "Success": False,
                "Cache Hit": False,
                "Error": "",
                "Generation Time (s)": None,
                "Prompt Tokens": None,
                "Completion Tokens": None,
                "Total Tokens": None,
                "Design Doc Word Count": None,
                "Design Doc Char Count": None,
                "Output SVG Size (bytes)": None,
                "Pexels Images Fetched": 0,
                "Pexels Fetch Time (s)": None,
                "Model": args.model or "dryrun",
                "Provider": args.provider,
                "Timestamp (UTC)": datetime.now(timezone.utc).isoformat()
            }

            if not match:
                unmatched_companies.add(company)
                base_stat["Error"] = "Company folder/design.md not found"
                stats_rows.append(base_stat)
                continue

            matched_folder, design_md_path = match
            base_stat["Company (Matched Folder)"] = matched_folder

            try:
                with open(design_md_path, "r", encoding="utf-8") as f:
                    design_doc = f.read()
            except Exception as e:
                base_stat["Error"] = f"Failed to read design.md: {e}"
                stats_rows.append(base_stat)
                continue

            base_stat["Design Doc Char Count"] = len(design_doc)
            base_stat["Design Doc Word Count"] = len(design_doc.split())

            pexels_images = []
            if pexels_key:
                fetch_start = time.time()
                pexels_images = fetch_pexels_images(pexels_key, company, screen_type)
                base_stat["Pexels Fetch Time (s)"] = round(time.time() - fetch_start, 2)
                base_stat["Pexels Images Fetched"] = len(pexels_images)

            system_prompt = JSX_SYSTEM_PROMPT if args.format == "jsx" else SYSTEM_PROMPT
            user_prompt = build_user_prompt(
                screen_type, description, additional_info, design_doc, pexels_images,
                fmt=args.format,
            )

            cache_key = compute_cache_key(
                matched_folder, screen_type, description, additional_info,
                design_doc, pexels_images, args.provider, args.model, args.format,
            )

            cached = load_from_cache(cache_dir, cache_key) if cache_enabled else None

            if cached is not None:
                svg_clean, usage = cached
                cache_hits += 1
                print(f"Using cache [{i}/{len(csv_rows)}] {company} - {screen_type} (key {cache_key[:10]}...)")

                out_company_dir = output_dir / matched_folder
                out_company_dir.mkdir(exist_ok=True)
                safe_screen_name = normalize_name(screen_type) or f"screen_{i}"
                out_file = out_company_dir / f"{safe_screen_name}.{args.format}"
                with open(out_file, "w", encoding="utf-8") as f:
                    f.write(svg_clean)

                base_stat.update({
                    "Success": True,
                    "Cache Hit": True,
                    "Generation Time (s)": 0.0,
                    "Output SVG Size (bytes)": len(svg_clean),
                    "Prompt Tokens": usage.get("prompt_tokens"),
                    "Completion Tokens": usage.get("completion_tokens"),
                    "Total Tokens": usage.get("total_tokens"),
                })
                stats_rows.append(base_stat)
                continue

            for attempt in range(args.max_retries):
                try:
                    if args.sleep > 0 and i > 1:
                        time.sleep(args.sleep)

                    print(f"Generating [{i}/{len(csv_rows)}] {company} - {screen_type}...")
                    gen_start = time.time()
                    raw_output, usage = client.generate(system_prompt, user_prompt)
                    gen_time = time.time() - gen_start

                    svg_clean = clean_output(raw_output, args.format)

                    out_company_dir = output_dir / matched_folder
                    out_company_dir.mkdir(exist_ok=True)
                    safe_screen_name = normalize_name(screen_type) or f"screen_{i}"
                    out_file = out_company_dir / f"{safe_screen_name}.{args.format}"

                    with open(out_file, "w", encoding="utf-8") as f:
                        f.write(svg_clean)

                    if cache_enabled:
                        save_to_cache(cache_dir, cache_key, svg_clean, usage)

                    base_stat.update({
                        "Success": True,
                        "Generation Time (s)": round(gen_time, 2),
                        "Output SVG Size (bytes)": len(svg_clean),
                        "Prompt Tokens": usage.get("prompt_tokens"),
                        "Completion Tokens": usage.get("completion_tokens"),
                        "Total Tokens": usage.get("total_tokens"),
                    })
                    break
                except Exception as e:
                    print(f"  Error (attempt {attempt+1}): {e}")
                    base_stat["Error"] = str(e)
                    time.sleep(2)

            stats_rows.append(base_stat)

        # Build stats folder metrics
        stats_dir = output_dir / "_stats"
        stats_dir.mkdir(exist_ok=True)
        
        # 1. Output log.csv
        with open(stats_dir / "log.csv", "w", encoding="utf-8", newline="") as f:
            if stats_rows:
                writer = csv.DictWriter(f, fieldnames=stats_rows[0].keys())
                writer.writeheader()
                writer.writerows(stats_rows)

        # 2. Output summary.json
        total_screens = len(stats_rows)
        successful_screens = sum(1 for r in stats_rows if r["Success"])
        total_prompt = sum(r["Prompt Tokens"] or 0 for r in stats_rows)
        total_completion = sum(r["Completion Tokens"] or 0 for r in stats_rows)
        total_tok = sum(r["Total Tokens"] or 0 for r in stats_rows)
        total_time = sum(r["Generation Time (s)"] or 0 for r in stats_rows)

        summary_data = {
            "total_screens": total_screens,
            "successful_screens": successful_screens,
            "failed_screens": total_screens - successful_screens,
            "cache_hits": cache_hits,
            "cache_dir": str(cache_dir) if cache_enabled else None,
            "total_prompt_tokens": total_prompt,
            "total_completion_tokens": total_completion,
            "total_tokens": total_tok,
            "total_generation_time_seconds": round(total_time, 2),
            "provider": args.provider,
            "model": args.model or "dryrun",
            "execution_time_seconds": round(time.time() - run_start, 2)
        }

        with open(stats_dir / "summary.json", "w", encoding="utf-8") as f:
            json.dump(summary_data, f, indent=4)

        # Final compression loop
        with zipfile.ZipFile(args.output_zip, "w", zipfile.ZIP_DEFLATED) as zf:
            for root_dir, _, files in os.walk(output_dir):
                for file in files:
                    file_path = Path(root_dir) / file
                    arcname = file_path.relative_to(output_dir)
                    zf.write(file_path, arcname)

        print(f"\nDone! Processed {len(csv_rows)} screens in {round(time.time() - run_start, 2)}s.")
        print(f"  -> Successfully generated: {successful_screens}/{total_screens}")
        print(f"  -> Served from cache: {cache_hits}/{total_screens}")
        print(f"  -> Stats logs saved inside zip under _stats/log.csv and _stats/summary.json")
        if unmatched_companies:
            print(f"Warning: {len(unmatched_companies)} companies could not be matched to folders.")


if __name__ == "__main__":
    main()
