#!/usr/bin/env python3
"""
screens_to_csv.py — SVG-optimized screen classifier

Reads a zip file of per-company folders containing SVG screen files and produces
a CSV with:  Company Name | Screen Type | Description | Additional Info

Since the screens are SVGs (text-based markup), the AI-assisted mode sends the
raw SVG text to the LLM — no vision API needed, no image conversion, lower cost
and faster than base64-encoding rasterized images.

Usage:
    # Heuristic mode (free, no API):
    python3 screens_to_csv.py screens.zip output.csv

    # AI-assisted mode with Azure OpenAI:
    export AZURE_OPENAI_API_KEY=your-key
    export AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com
    python3 screens_to_csv.py screens.zip output.csv --use-ai \\
        --provider azure --model your-deployment-name

    # AI-assisted mode with OpenAI directly:
    export OPENAI_API_KEY=sk-...
    python3 screens_to_csv.py screens.zip output.csv --use-ai \\
        --provider openai --model gpt-5.4-mini
"""

import argparse
import csv
import json
import os
import re
import sys
import tempfile
import time
import zipfile
from collections import Counter
from pathlib import Path

# Load a .env file if present so AZURE_OPENAI_* etc. are available without
# manually `export`-ing them. Requires: pip install python-dotenv
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass


# ---------------------------------------------------------------------------
# Screen type descriptions (heuristic mode keyword lookup)
# ---------------------------------------------------------------------------
SCREEN_TYPE_DESCRIPTIONS = {
    "login": "A screen where users enter credentials to authenticate into the product.",
    "signin": "A screen where users enter credentials to authenticate into the product.",
    "sign in": "A screen where users enter credentials to authenticate into the product.",
    "signup": "A screen where new users create an account.",
    "sign up": "A screen where new users create an account.",
    "register": "A screen where new users create an account.",
    "onboarding": "A guided introductory screen that walks new users through key features or setup steps.",
    "welcome": "An initial landing screen that greets users and orients them.",
    "splash": "An initial branding screen shown briefly while the app loads.",
    "dashboard": "A central hub screen summarizing key metrics, activity, or navigation.",
    "home": "The primary landing screen users see after logging in.",
    "main": "The primary landing screen users see after logging in.",
    "checkout": "A screen where users review their order and complete payment.",
    "payment": "A screen where users enter or confirm payment details.",
    "cart": "A screen listing items a user has selected for purchase.",
    "settings": "A screen where users view and adjust account or app configurations.",
    "profile": "A screen displaying or allowing edits to a user's personal information.",
    "account": "A screen displaying or allowing edits to a user's personal information.",
    "search": "A screen allowing users to look up content or information via a query.",
    "explore": "A screen for browsing and discovering content across categories.",
    "browse": "A screen for browsing and discovering content across categories.",
    "results": "A screen displaying a list of results returned from a search or filter.",
    "empty": "A screen shown when there is no content yet, guiding the user on next steps.",
    "error": "A screen shown when something has gone wrong.",
    "404": "An error screen shown when a requested page cannot be found.",
    "notification": "A screen displaying alerts, updates, or messages.",
    "notifications": "A screen displaying alerts, updates, or messages.",
    "pricing": "A screen comparing plan tiers and pricing options.",
    "billing": "A screen for managing payment methods, invoices, or billing.",
    "subscription": "A screen for managing or upgrading a subscription plan.",
    "confirmation": "A screen confirming that an action completed successfully.",
    "success": "A screen confirming that an action completed successfully.",
    "form": "A screen where users input structured information via fields.",
    "modal": "A focused overlay prompting the user to take an action or confirm a choice.",
    "menu": "A navigational screen listing available sections or actions.",
    "navigation": "A navigational screen listing available sections or actions.",
    "list": "A screen displaying a scrollable collection of items or entries.",
    "catalog": "A screen displaying a browsable collection of products or items.",
    "detail": "A screen showing in-depth information about a single item.",
    "product": "A screen showing detailed information about a specific product.",
    "chat": "A screen supporting real-time messaging.",
    "message": "A screen supporting real-time messaging.",
    "feed": "A screen displaying a stream of updates, posts, or activity.",
    "upload": "A screen allowing users to add files or media.",
    "loading": "A transitional screen shown while content is being processed.",
    "filter": "A screen or panel for refining search or browse results.",
    "sort": "A screen or panel for reordering listed content.",
    "map": "A screen displaying geographic or location-based information.",
    "tracking": "A screen showing the status or progress of an order or delivery.",
    "review": "A screen for viewing or writing reviews and ratings.",
    "comment": "A screen for viewing or posting comments.",
    "bookmark": "A screen displaying saved or bookmarked content.",
    "wishlist": "A screen displaying items saved for later.",
    "camera": "A screen providing camera or photo capture functionality.",
    "call": "A screen for voice or video calling.",
    "video": "A screen for viewing or managing video content.",
    "otp": "A screen for entering a one-time password or verification code.",
    "pin": "A screen for entering a PIN or security code.",
    "forgot": "A screen for recovering or resetting a forgotten password.",
    "terms": "A screen displaying terms and conditions or legal information.",
    "privacy": "A screen displaying the privacy policy.",
    "edit": "A screen for modifying existing content or profile information.",
    "zoom": "A screen showing an enlarged or zoomed view of content.",
    "intro": "An introductory screen presenting the app's value proposition.",
}

DEFAULT_DESCRIPTION = "A product screen whose specific purpose should be verified against the source file."


def guess_description(screen_type: str) -> str:
    lowered = screen_type.lower()
    for keyword, desc in SCREEN_TYPE_DESCRIPTIONS.items():
        if keyword in lowered:
            return desc
    return DEFAULT_DESCRIPTION


def clean_screen_type(filename_stem: str) -> str:
    # Strip leading CompanyName_ prefix (e.g. "Amazon_010_Cart_Single" -> "Cart Single")
    # Pattern: Word_NNN_ at the start
    stem = re.sub(r"^[A-Za-z]+_\d+_", "", filename_stem)
    # Strip trailing version/copy noise
    stem = re.sub(r"(_v\d+|_final|_copy|-\d+)$", "", stem, flags=re.IGNORECASE)
    stem = stem.replace("_", " ").replace("-", " ")
    stem = re.sub(r"\s+", " ", stem).strip()
    return stem.title() if stem else "Unknown Screen"


# ---------------------------------------------------------------------------
# SVG analysis (heuristic mode)
# ---------------------------------------------------------------------------
def analyze_svg(svg_path: Path) -> dict:
    """Parse an SVG file and extract structural information."""
    info = {
        "mode": None,
        "title": None,
        "text_elements": 0,
        "rect_elements": 0,
        "circle_elements": 0,
        "line_elements": 0,
        "path_elements": 0,
        "image_elements": 0,
        "group_elements": 0,
        "total_elements": 0,
        "viewbox": None,
        "layout": None,
        "has_form_elements": False,
        "has_nav_bar": False,
        "text_samples": [],
        "extra": [],
    }

    try:
        content = svg_path.read_text(errors="ignore")
    except Exception:
        return info

    # Title
    title_match = re.search(r"<title[^>]*>(.*?)</title>", content, re.IGNORECASE | re.DOTALL)
    if title_match:
        info["title"] = title_match.group(1).strip()

    # ViewBox -> layout guess
    vb_match = re.search(r'viewBox\s*=\s*"([^"]+)"', content, re.IGNORECASE)
    if vb_match:
        info["viewbox"] = vb_match.group(1)
        parts = vb_match.group(1).split()
        if len(parts) == 4:
            try:
                w, h = float(parts[2]), float(parts[3])
                if h > w * 1.3:
                    info["layout"] = "Mobile layout"
                elif w > h * 1.3:
                    info["layout"] = "Desktop layout"
                else:
                    info["layout"] = "Square layout"
            except ValueError:
                pass

    # Element counts
    info["text_elements"] = len(re.findall(r"<text[\s>]", content, re.IGNORECASE))
    info["rect_elements"] = len(re.findall(r"<rect[\s>]", content, re.IGNORECASE))
    info["circle_elements"] = len(re.findall(r"<circle[\s>]", content, re.IGNORECASE))
    info["line_elements"] = len(re.findall(r"<line[\s>]", content, re.IGNORECASE))
    info["path_elements"] = len(re.findall(r"<path[\s>]", content, re.IGNORECASE))
    info["image_elements"] = len(re.findall(r"<image[\s>]", content, re.IGNORECASE))
    info["group_elements"] = len(re.findall(r"<g[\s>]", content, re.IGNORECASE))
    info["total_elements"] = sum([
        info["text_elements"], info["rect_elements"], info["circle_elements"],
        info["line_elements"], info["path_elements"], info["image_elements"],
        info["group_elements"],
    ])

    # Dark/light mode from background rect or fill
    mode_from_name = None
    fname = svg_path.stem.lower()
    if "dark" in fname:
        mode_from_name = "Dark mode"
    elif "light" in fname:
        mode_from_name = "Light mode"

    if not mode_from_name:
        # Check the first large rect (likely background)
        bg_match = re.search(
            r'<rect[^>]*width\s*=\s*"([\d.]+%?)"[^>]*height\s*=\s*"([\d.]+%?)"[^>]*fill\s*=\s*"([^"]+)"',
            content, re.IGNORECASE
        )
        if not bg_match:
            bg_match = re.search(
                r'<rect[^>]*fill\s*=\s*"([^"]+)"[^>]*width\s*=\s*"([\d.]+%?)"[^>]*height\s*=\s*"([\d.]+%?)"',
                content, re.IGNORECASE
            )
            if bg_match:
                fill_color = bg_match.group(1)
            else:
                fill_color = None
        else:
            fill_color = bg_match.group(3)

        if fill_color:
            fill_lower = fill_color.lower().strip()
            if fill_lower.startswith("#"):
                hex_val = fill_lower.lstrip("#")
                if len(hex_val) == 3:
                    hex_val = "".join(c * 2 for c in hex_val)
                try:
                    r, g, b = (int(hex_val[i:i+2], 16) for i in (0, 2, 4))
                    brightness = (r + g + b) / 3
                    info["mode"] = "Dark mode" if brightness < 110 else "Light mode"
                except (ValueError, IndexError):
                    pass
            elif fill_lower in ("black", "#000", "#000000"):
                info["mode"] = "Dark mode"
            elif fill_lower in ("white", "#fff", "#ffffff"):
                info["mode"] = "Light mode"

    if mode_from_name:
        info["mode"] = mode_from_name

    # Extract a few text samples for context
    text_contents = re.findall(r"<text[^>]*>(.*?)</text>", content, re.IGNORECASE | re.DOTALL)
    # Clean tags inside text elements
    cleaned = []
    for t in text_contents[:10]:
        t_clean = re.sub(r"<[^>]+>", "", t).strip()
        if t_clean and len(t_clean) > 1:
            cleaned.append(t_clean[:50])
    info["text_samples"] = cleaned[:5]

    # Structural hints
    if re.search(r"input|password|email|username|<form", content, re.IGNORECASE):
        info["has_form_elements"] = True
        info["extra"].append("Contains form elements")
    if re.search(r"nav|tabbar|tab-bar|bottom.?bar", content, re.IGNORECASE):
        info["has_nav_bar"] = True
        info["extra"].append("Contains navigation bar")

    return info


def build_additional_info_from_svg(svg_info: dict) -> str:
    parts = []

    if svg_info.get("mode"):
        parts.append(svg_info["mode"])

    if svg_info.get("layout"):
        parts.append(svg_info["layout"])

    if svg_info.get("title"):
        parts.append(f"Title: {svg_info['title']}")

    parts.append(f"{svg_info.get('total_elements', 0)} SVG elements "
                 f"({svg_info.get('text_elements', 0)} text, "
                 f"{svg_info.get('rect_elements', 0)} rect, "
                 f"{svg_info.get('circle_elements', 0)} circle, "
                 f"{svg_info.get('path_elements', 0)} path)")

    if svg_info.get("image_elements", 0) > 0:
        parts.append(f"{svg_info['image_elements']} embedded image(s)")

    parts.extend(svg_info.get("extra", []))

    if svg_info.get("text_samples"):
        parts.append(f"Text samples: {', '.join(svg_info['text_samples'][:3])}")

    return "; ".join(parts) if parts else "No additional details detected"


# ---------------------------------------------------------------------------
# LLM-assisted classification (sends SVG text, not images)
# ---------------------------------------------------------------------------
LLM_SYSTEM_PROMPT = (
    "You are a UI screen classifier. You will receive the raw SVG markup of a mobile "
    "or desktop app screen. Analyze the SVG elements (text content, structure, layout) "
    "to determine what type of screen it is.\n\n"
    "Respond ONLY with a JSON object (no markdown, no code fences, no preamble) with "
    "exactly these keys:\n"
    '  "screen_type": a short 2-4 word label (e.g. "Login", "Home Feed", "Shopping Cart", '
    '"Onboarding", "Profile Settings", "Search Results", "Product Detail", "Empty State"),\n'
    '  "description": one sentence describing what this type of screen generally does,\n'
    '  "additional_info": a short phrase noting specifics visible in the SVG '
    '(e.g. "Dark mode, mobile layout, 3 product cards, bottom nav bar with 5 tabs" or '
    '"Light mode, contains login form with email and password fields, social login buttons").'
)

# Truncate very large SVGs to stay within token limits
MAX_SVG_CHARS = 12000


def _strip_embedded_images(svg_text: str) -> str:
    """Remove base64-encoded image data from SVG to reduce size dramatically.
    A 4.4MB Figma export becomes ~10KB after this — the actual UI structure is preserved."""
    # Replace data:image/... base64 content with a placeholder
    stripped = re.sub(
        r'(xlink:href|href)\s*=\s*"data:image/[^"]*"',
        r'\1="[embedded-image-removed]"',
        svg_text,
    )
    return stripped


def classify_with_llm(svg_path: Path, company_name: str, client, model: str) -> tuple:
    """Send the SVG text (with embedded images stripped) to the LLM for classification."""
    try:
        svg_text = svg_path.read_text(errors="ignore")
    except Exception as e:
        raise RuntimeError(f"Could not read SVG: {e}")

    # Strip embedded base64 images first (can be 99%+ of file size)
    svg_text = _strip_embedded_images(svg_text)

    # Truncate if still too large after stripping
    if len(svg_text) > MAX_SVG_CHARS:
        svg_text = svg_text[:MAX_SVG_CHARS] + "\n<!-- ... SVG truncated for analysis ... -->\n</svg>"

    user_msg = (
        f"Company: {company_name}\n"
        f"Filename: {svg_path.name}\n\n"
        f"SVG content:\n{svg_text}"
    )

    resp = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": LLM_SYSTEM_PROMPT},
            {"role": "user", "content": user_msg},
        ],
        max_completion_tokens=2000,
    )

    text = (resp.choices[0].message.content or "").strip()
    text = re.sub(r"^```(json)?\s*", "", text)
    text = re.sub(r"\s*```$", "", text)
    text = text.strip()

    try:
        parsed = json.loads(text)
        return (
            parsed.get("screen_type", "Unknown"),
            parsed.get("description", DEFAULT_DESCRIPTION),
            parsed.get("additional_info", ""),
        )
    except json.JSONDecodeError:
        return ("Unknown", DEFAULT_DESCRIPTION, text[:200])


def create_llm_client(args):
    """Create the appropriate OpenAI-compatible client."""
    try:
        import openai
    except ImportError:
        print("Error: --use-ai requires the 'openai' package. Install it with: pip install openai")
        sys.exit(1)

    provider = args.provider or "azure"

    if provider == "azure":
        api_key = os.environ.get(args.api_key_env or "AZURE_OPENAI_API_KEY")
        if not api_key:
            print("Error: AZURE_OPENAI_API_KEY environment variable is not set.")
            sys.exit(1)
        endpoint = args.azure_endpoint or os.environ.get("AZURE_OPENAI_ENDPOINT")
        if not endpoint:
            print("Error: Azure endpoint required. Use --azure-endpoint or AZURE_OPENAI_ENDPOINT env var.")
            sys.exit(1)
        api_version = (args.azure_api_version
                       or os.environ.get("AZURE_OPENAI_API_VERSION")
                       or "2024-12-01-preview")
        client = openai.AzureOpenAI(
            api_key=api_key, api_version=api_version, azure_endpoint=endpoint,
            timeout=60.0, max_retries=2,
        )
        print(f"LLM provider:   Azure OpenAI")
        print(f"  Endpoint:     {endpoint}")
        print(f"  Deployment:   {args.model}")
        print(f"  API version:  {api_version}")
        print(f"  Mode:         Text analysis (SVG markup sent as text, no vision API needed)")
        return client

    elif provider == "openai":
        api_key = os.environ.get(args.api_key_env or "OPENAI_API_KEY")
        if not api_key:
            print("Error: OPENAI_API_KEY environment variable is not set.")
            sys.exit(1)
        kwargs = {"api_key": api_key, "timeout": 60.0, "max_retries": 2}
        if args.base_url:
            kwargs["base_url"] = args.base_url
        client = openai.OpenAI(**kwargs)
        print(f"LLM provider:   OpenAI{' (' + args.base_url + ')' if args.base_url else ''}")
        print(f"  Model:        {args.model}")
        print(f"  Mode:         Text analysis (SVG markup sent as text, no vision API needed)")
        return client

    else:
        print(f"Error: unknown provider '{provider}'. Use 'azure' or 'openai'.")
        sys.exit(1)


# ---------------------------------------------------------------------------
# Main processing
# ---------------------------------------------------------------------------
def process_zip(args):
    zip_path_str = args.zip_path
    output_csv = args.output_csv

    zip_path = Path(zip_path_str)
    if not zip_path.exists():
        print(f"Error: zip file not found: {zip_path}")
        sys.exit(1)

    llm_client = None
    if args.use_ai:
        # Allow model to be set via env var so it doesn't need to be typed every time
        if not args.model:
            args.model = os.environ.get("AZURE_OPENAI_DEPLOYMENT") or os.environ.get("OPENAI_MODEL")
        if not args.model:
            print(
                "Error: model/deployment name is required with --use-ai.\n"
                "  Set it with --model your-deployment-name\n"
                "  or: export AZURE_OPENAI_DEPLOYMENT=your-deployment-name\n"
                "  or: export OPENAI_MODEL=your-model-name"
            )
            sys.exit(1)
        llm_client = create_llm_client(args)

    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = Path(tmpdir)
        with zipfile.ZipFile(zip_path, "r") as zf:
            zf.extractall(tmpdir)

        top_level = [p for p in tmpdir.iterdir() if not p.name.startswith("__MACOSX")]
        # Try both the raw extraction dir and any single subfolder.
        # Pick whichever actually contains company directories with SVGs.
        # This prevents a single-company zip (e.g. just Netflix/) from being
        # mistakenly "unwrapped" past the company folder.
        candidates = [tmpdir]
        if len(top_level) == 1 and top_level[0].is_dir():
            candidates.append(top_level[0])

        root = tmpdir
        best_svg_count = 0
        for candidate in candidates:
            subdirs = [d for d in candidate.iterdir() if d.is_dir() and not d.name.startswith("__MACOSX")]
            svg_count = sum(
                1 for d in subdirs for f in d.iterdir()
                if f.is_file() and f.suffix.lower() == ".svg"
            )
            if svg_count > best_svg_count:
                best_svg_count = svg_count
                root = candidate

        company_dirs = sorted([p for p in root.iterdir() if p.is_dir()])
        if not company_dirs:
            print("No company folders found in the zip.")
            sys.exit(1)

        # Pre-scan for file types
        all_extensions = Counter()
        svg_count = 0
        for cd in company_dirs:
            for f in cd.iterdir():
                if f.is_file():
                    ext = f.suffix.lower()
                    all_extensions[ext] += 1
                    if ext == ".svg":
                        svg_count += 1

        print(f"\nFile types in zip: {dict(all_extensions.most_common())}")
        print(f"SVG files found:   {svg_count}")
        non_svg = {k: v for k, v in all_extensions.items() if k != ".svg"}
        if non_svg:
            print(f"Ignored (non-SVG): {dict(non_svg)}")
        if svg_count == 0:
            print("Error: no .svg files found in the zip.")
            sys.exit(1)
        print()
        if llm_client:
            print(f"Classifying {svg_count} screens via LLM. The first call can take "
                  f"10-30s (model warm-up); this is normal, not a hang.\n", flush=True)

        rows = []
        stats = {
            "total_screens": 0,
            "ai_successes": 0,
            "ai_failures": 0,
            "heuristic_count": 0,
            "companies": Counter(),
            "screen_types": Counter(),
            "modes": Counter(),
            "layouts": Counter(),
            "svg_element_counts": [],
            "svg_text_element_counts": [],
            "svg_rect_element_counts": [],
            "svg_path_element_counts": [],
            "svg_file_sizes": [],
            "generation_times": [],
        }
        start_time = time.time()

        for company_dir in company_dirs:
            company_name = company_dir.name.replace("_", " ").replace("-", " ").strip()

            svg_files = sorted([
                f for f in company_dir.iterdir()
                if f.is_file() and f.suffix.lower() == ".svg"
            ])

            for svg_path in svg_files:
                stats["total_screens"] += 1
                screen_type = clean_screen_type(svg_path.stem)
                svg_info = analyze_svg(svg_path)
                svg_size = svg_path.stat().st_size

                stats["svg_file_sizes"].append(svg_size)
                stats["svg_element_counts"].append(svg_info.get("total_elements", 0))
                stats["svg_text_element_counts"].append(svg_info.get("text_elements", 0))
                stats["svg_rect_element_counts"].append(svg_info.get("rect_elements", 0))
                stats["svg_path_element_counts"].append(svg_info.get("path_elements", 0))

                used_ai = False
                screen_start = time.time()

                if llm_client:
                    try:
                        screen_type, description, additional_info = classify_with_llm(
                            svg_path, company_name, llm_client, args.model
                        )
                        stats["ai_successes"] += 1
                        used_ai = True

                        # Append SVG structural stats from heuristic analysis
                        element_summary = (
                            f"{svg_info.get('total_elements', 0)} SVG elements "
                            f"({svg_info.get('text_elements', 0)} text, "
                            f"{svg_info.get('rect_elements', 0)} rect, "
                            f"{svg_info.get('path_elements', 0)} path)"
                        )
                        additional_info = f"{additional_info}; {element_summary}" if additional_info else element_summary

                    except Exception as e:
                        stats["ai_failures"] += 1
                        print(f"  Warning: LLM failed for {company_name}/{svg_path.stem} ({e}); using heuristics.")
                        description = guess_description(screen_type)
                        additional_info = build_additional_info_from_svg(svg_info)
                else:
                    stats["heuristic_count"] += 1
                    description = guess_description(screen_type)
                    additional_info = build_additional_info_from_svg(svg_info)

                elapsed = time.time() - screen_start
                stats["generation_times"].append(elapsed)
                stats["companies"][company_name] += 1
                stats["screen_types"][screen_type] += 1
                if svg_info.get("mode"):
                    stats["modes"][svg_info["mode"]] += 1
                if svg_info.get("layout"):
                    stats["layouts"][svg_info["layout"]] += 1

                rows.append({
                    "Company Name": company_name,
                    "Screen Type": screen_type,
                    "Description": description,
                    "Additional Info": additional_info,
                })

                method = "LLM" if used_ai else "heuristic"
                print(f"[{stats['total_screens']:>3}] {method:>9}  {company_name} / {svg_path.stem} ({elapsed:.2f}s)")

                if used_ai and args.sleep > 0:
                    time.sleep(args.sleep)

        total_time = time.time() - start_time

        with open(output_csv, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=["Company Name", "Screen Type", "Description", "Additional Info"])
            writer.writeheader()
            writer.writerows(rows)

        # ---- Print research statistics ----
        def avg(vals):
            return round(sum(vals) / len(vals), 2) if vals else 0

        def median(vals):
            if not vals:
                return 0
            s = sorted(vals)
            n = len(s)
            return round((s[n // 2] + s[(n - 1) // 2]) / 2, 2)

        def stddev(vals):
            if len(vals) < 2:
                return 0
            m = sum(vals) / len(vals)
            return round((sum((x - m) ** 2 for x in vals) / (len(vals) - 1)) ** 0.5, 2)

        W = 62
        print(f"\n{'=' * W}")
        print("  CLASSIFICATION COMPLETE — RESEARCH STATISTICS")
        print(f"{'=' * W}")

        print(f"\n{'─' * W}")
        print("  DATASET OVERVIEW")
        print(f"{'─' * W}")
        print(f"  Total SVG screens processed:      {stats['total_screens']}")
        print(f"  Unique companies:                  {len(stats['companies'])}")
        print(f"  Unique screen types classified:    {len(stats['screen_types'])}")
        print(f"  Output CSV:                        {output_csv}")

        print(f"\n{'─' * W}")
        print("  COMPANY DISTRIBUTION")
        print(f"{'─' * W}")
        company_counts = list(stats["companies"].values())
        print(f"  Screens per company — avg: {avg(company_counts)}, "
              f"median: {median(company_counts)}, "
              f"min: {min(company_counts)}, max: {max(company_counts)}, "
              f"std: {stddev(company_counts)}")
        print(f"  Top 5 companies by screen count:")
        for name, count in stats["companies"].most_common(5):
            print(f"    {name:<30} {count:>4} screens")

        print(f"\n{'─' * W}")
        print("  SCREEN TYPE DISTRIBUTION")
        print(f"{'─' * W}")
        print(f"  Top 10 screen types:")
        for stype, count in stats["screen_types"].most_common(10):
            print(f"    {stype:<35} {count:>4}")

        print(f"\n{'─' * W}")
        print("  VISUAL CHARACTERISTICS")
        print(f"{'─' * W}")
        if stats["modes"]:
            print(f"  Color modes:  {dict(stats['modes'].most_common())}")
        if stats["layouts"]:
            print(f"  Layouts:      {dict(stats['layouts'].most_common())}")

        print(f"\n{'─' * W}")
        print("  SVG COMPLEXITY METRICS")
        print(f"{'─' * W}")
        sizes = stats["svg_file_sizes"]
        elems = stats["svg_element_counts"]
        texts = stats["svg_text_element_counts"]
        rects = stats["svg_rect_element_counts"]
        paths = stats["svg_path_element_counts"]
        print(f"  File size (bytes)    — avg: {avg(sizes):>10,.0f}   median: {median(sizes):>10,.0f}   "
              f"min: {min(sizes):>8,}   max: {max(sizes):>8,}   std: {stddev(sizes):>10,.0f}")
        print(f"  Total elements       — avg: {avg(elems):>10.1f}   median: {median(elems):>10.1f}   "
              f"min: {min(elems):>8}   max: {max(elems):>8}   std: {stddev(elems):>10.1f}")
        print(f"  <text> elements      — avg: {avg(texts):>10.1f}   median: {median(texts):>10.1f}   "
              f"min: {min(texts):>8}   max: {max(texts):>8}   std: {stddev(texts):>10.1f}")
        print(f"  <rect> elements      — avg: {avg(rects):>10.1f}   median: {median(rects):>10.1f}   "
              f"min: {min(rects):>8}   max: {max(rects):>8}   std: {stddev(rects):>10.1f}")
        print(f"  <path> elements      — avg: {avg(paths):>10.1f}   median: {median(paths):>10.1f}   "
              f"min: {min(paths):>8}   max: {max(paths):>8}   std: {stddev(paths):>10.1f}")

        print(f"\n{'─' * W}")
        print("  CLASSIFICATION METHOD")
        print(f"{'─' * W}")
        if llm_client:
            print(f"  Provider / Model:                  {args.provider} / {args.model}")
            print(f"  Approach:                          SVG-as-text (not vision API)")
            print(f"  LLM successes:                     {stats['ai_successes']}")
            print(f"  LLM failures (fell to heuristic):  {stats['ai_failures']}")
            if stats["ai_successes"] > 0:
                success_rate = stats["ai_successes"] / (stats["ai_successes"] + stats["ai_failures"])
                print(f"  LLM success rate:                  {success_rate:.1%}")
        else:
            print(f"  Mode:                              Heuristic only (no --use-ai)")

        print(f"\n{'─' * W}")
        print("  TIMING")
        print(f"{'─' * W}")
        times = stats["generation_times"]
        print(f"  Total wall-clock time:             {total_time:.1f}s")
        print(f"  Avg time per screen:               {avg(times):.3f}s")
        print(f"  Median time per screen:            {median(times):.3f}s")
        print(f"  Min / Max time:                    {min(times):.3f}s / {max(times):.3f}s")
        print(f"  Std dev:                           {stddev(times):.3f}s")
        if stats['total_screens'] > 0:
            print(f"  Throughput:                        {stats['total_screens'] / total_time:.1f} screens/sec")
        print(f"{'=' * W}")


def main():
    parser = argparse.ArgumentParser(
        description="Classify SVG screen files from a zip into a CSV.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument("zip_path", help="Path to the input zip file containing company/screen.svg folders")
    parser.add_argument("output_csv", help="Path to write the output CSV")
    parser.add_argument("--use-ai", action="store_true",
                         help="Use an LLM to classify screens (sends SVG text, not images)")
    parser.add_argument("--provider", choices=["azure", "openai"], default="azure",
                         help="LLM provider (default: azure)")
    parser.add_argument("--model", default=None,
                         help="Model name (openai) or deployment name (azure)")
    parser.add_argument("--azure-endpoint", default=None,
                         help="Azure OpenAI endpoint URL")
    parser.add_argument("--azure-api-version", default=None,
                         help="Azure OpenAI API version (default: 2024-12-01-preview)")
    parser.add_argument("--base-url", default=None,
                         help="Custom base URL for OpenAI-compatible endpoints")
    parser.add_argument("--api-key-env", default=None,
                         help="Env var name holding the API key")
    parser.add_argument("--sleep", type=float, default=0.0,
                         help="Seconds to sleep between API calls (rate limiting)")
    args = parser.parse_args()
    process_zip(args)


if __name__ == "__main__":
    main()
