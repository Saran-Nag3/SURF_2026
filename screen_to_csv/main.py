#!/usr/bin/env python3
"""
screens_to_csv.py

Reads a zip file containing per-company folders of screenshots (PNG + matching HTML/SVG)
and produces a CSV with:
    Company Name | Screen Type | Description | Additional Info

Expected zip structure:
    CompanyName/
        login.png
        login.html
        login.svg
        checkout_dark.png
        checkout_dark.html
        ...
    AnotherCompany/
        ...

Usage:
    # Heuristic mode (no API key needed, uses filenames + HTML/SVG/image analysis)
    python3 screens_to_csv.py screens.zip output.csv

    # AI-assisted mode (more accurate, needs ANTHROPIC_API_KEY env var set)
    export ANTHROPIC_API_KEY=sk-ant-...
    python3 screens_to_csv.py screens.zip output.csv --use-ai
"""

import argparse
import base64
import csv
import os
import re
import sys
import tempfile
import zipfile
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("This script requires Pillow. Install it with: pip install Pillow")
    sys.exit(1)


# ---------------------------------------------------------------------------
# Screen type descriptions (heuristic mode)
# ---------------------------------------------------------------------------
SCREEN_TYPE_DESCRIPTIONS = {
    "login": "A screen where users enter credentials to authenticate into the product.",
    "signup": "A screen where new users create an account, typically capturing email, password, or SSO info.",
    "sign up": "A screen where new users create an account, typically capturing email, password, or SSO info.",
    "register": "A screen where new users create an account, typically capturing email, password, or SSO info.",
    "onboarding": "A guided introductory screen that walks new users through key features or setup steps.",
    "welcome": "An initial landing screen that greets users and orients them before they proceed further.",
    "dashboard": "A central hub screen summarizing key metrics, activity, or navigation for the user.",
    "home": "The primary landing screen users see after logging in, surfacing key content or navigation.",
    "checkout": "A screen where users review their order and complete payment for a purchase.",
    "payment": "A screen where users enter or confirm payment details to complete a transaction.",
    "cart": "A screen listing items a user has selected for purchase before checkout.",
    "settings": "A screen where users view and adjust account, app, or preference configurations.",
    "profile": "A screen displaying or allowing edits to a user's personal account information.",
    "account": "A screen displaying or allowing edits to a user's personal account information.",
    "search": "A screen allowing users to look up content, products, or information via a query.",
    "results": "A screen displaying a list of results returned from a search or filter action.",
    "empty": "A screen shown when there is no content yet, typically guiding the user on next steps.",
    "error": "A screen shown when something has gone wrong, communicating the issue to the user.",
    "404": "An error screen shown when a requested page or resource cannot be found.",
    "notification": "A screen or panel displaying alerts, updates, or messages relevant to the user.",
    "notifications": "A screen or panel displaying alerts, updates, or messages relevant to the user.",
    "pricing": "A screen comparing plan tiers and pricing options available to the user.",
    "billing": "A screen where users manage payment methods, invoices, or subscription billing.",
    "subscription": "A screen where users manage or upgrade their subscription plan.",
    "confirmation": "A screen confirming that an action (purchase, submission, etc.) completed successfully.",
    "success": "A screen confirming that an action (purchase, submission, etc.) completed successfully.",
    "form": "A screen where users input structured information via one or more fields.",
    "modal": "A focused overlay screen prompting the user to take a specific action or confirm a choice.",
    "menu": "A navigational screen or panel listing available sections or actions.",
    "navigation": "A navigational screen or panel listing available sections or actions.",
    "list": "A screen displaying a scrollable collection of items, records, or entries.",
    "detail": "A screen showing in-depth information about a single selected item or record.",
    "chat": "A screen supporting real-time messaging between users or with support/AI.",
    "message": "A screen supporting real-time messaging between users or with support/AI.",
    "feed": "A screen displaying a stream of updates, posts, or activity.",
    "upload": "A screen allowing users to add files, images, or media to the product.",
    "loading": "A transitional screen shown while content or an action is being processed.",
    "splash": "An initial branding screen shown briefly while the app loads.",
}

DEFAULT_DESCRIPTION = "A product screen whose specific purpose should be verified against the source file."


def guess_description(screen_type: str) -> str:
    """Match a screen type string against known keywords to find a description."""
    lowered = screen_type.lower()
    for keyword, desc in SCREEN_TYPE_DESCRIPTIONS.items():
        if keyword in lowered:
            return desc
    return DEFAULT_DESCRIPTION


def clean_screen_type(filename_stem: str) -> str:
    """Turn a filename stem like 'checkout_dark_v2' into 'Checkout Dark V2' -> then trimmed."""
    # Strip common version/suffix noise
    stem = re.sub(r"(_v\d+|_final|_copy|-\d+)$", "", filename_stem, flags=re.IGNORECASE)
    stem = stem.replace("_", " ").replace("-", " ")
    stem = re.sub(r"\s+", " ", stem).strip()
    return stem.title() if stem else "Unknown Screen"


def detect_mode_keywords(text: str):
    """Look for explicit light/dark mode hints in a filename or HTML content."""
    lowered = text.lower()
    if "dark" in lowered:
        return "Dark mode"
    if "light" in lowered:
        return "Light mode"
    return None


def detect_mode_from_image(png_path: Path) -> str:
    """Fallback: estimate light vs dark mode from average pixel brightness."""
    try:
        with Image.open(png_path) as img:
            img = img.convert("L")  # grayscale
            # Downsample for speed
            img.thumbnail((100, 100))
            pixels = img.tobytes()
            avg_brightness = sum(pixels) / len(pixels)
            return "Dark mode (est. from image)" if avg_brightness < 110 else "Light mode (est. from image)"
    except Exception:
        return "Unknown mode"


def detect_platform_from_image(png_path: Path) -> str:
    """Rough guess at mobile vs desktop based on image aspect ratio."""
    try:
        with Image.open(png_path) as img:
            w, h = img.size
            if h > w * 1.3:
                return "Mobile layout"
            elif w > h * 1.3:
                return "Desktop/web layout"
            return "Square/unclear layout"
    except Exception:
        return ""


def extract_html_hints(html_path: Path) -> dict:
    """Pull light/dark mode hints and a page title out of the HTML file, if present."""
    hints = {"mode": None, "title": None, "extra": []}
    if not html_path or not html_path.exists():
        return hints

    try:
        content = html_path.read_text(errors="ignore")
    except Exception:
        return hints

    # Title tag
    title_match = re.search(r"<title[^>]*>(.*?)</title>", content, re.IGNORECASE | re.DOTALL)
    if title_match:
        hints["title"] = title_match.group(1).strip()

    # Mode from class names / css
    mode = detect_mode_keywords(content)
    if not mode:
        # crude background-color check on body/html
        bg_match = re.search(r"background(-color)?\s*:\s*#([0-9a-fA-F]{3,6})", content)
        if bg_match:
            hex_color = bg_match.group(2)
            if len(hex_color) == 3:
                hex_color = "".join(c * 2 for c in hex_color)
            try:
                r, g, b = (int(hex_color[i:i+2], 16) for i in (0, 2, 4))
                brightness = (r + g + b) / 3
                mode = "Dark mode (est. from CSS)" if brightness < 110 else "Light mode (est. from CSS)"
            except ValueError:
                pass
    hints["mode"] = mode

    # Extra structural hints
    if re.search(r"<form", content, re.IGNORECASE):
        hints["extra"].append("Contains a form")
    if re.search(r"modal|dialog", content, re.IGNORECASE):
        hints["extra"].append("Contains a modal/dialog")
    if re.search(r"<table", content, re.IGNORECASE):
        hints["extra"].append("Contains a data table")

    return hints


def build_additional_info(png_path: Path, html_path: Path, svg_path: Path, filename_stem: str) -> str:
    """Combine all signals into a single 'additional info' string."""
    info_parts = []

    # 1. Filename mode hint takes priority
    mode = detect_mode_keywords(filename_stem)

    # 2. HTML hints
    html_hints = extract_html_hints(html_path)
    if not mode:
        mode = html_hints.get("mode")

    # 3. Fallback to image brightness analysis
    if not mode and png_path and png_path.exists():
        mode = detect_mode_from_image(png_path)

    if mode:
        info_parts.append(mode)

    if png_path and png_path.exists():
        platform = detect_platform_from_image(png_path)
        if platform:
            info_parts.append(platform)

    info_parts.extend(html_hints.get("extra", []))

    # 4. Extract Title from SVG file if it exists
    if svg_path and svg_path.exists():
        try:
            svg_content = svg_path.read_text(errors="ignore")
            svg_title_match = re.search(r"<title[^>]*>(.*?)</title>", svg_content, re.IGNORECASE | re.DOTALL)
            if svg_title_match:
                info_parts.append(f"SVG Title: {svg_title_match.group(1).strip()}")
        except Exception:
            pass

    return "; ".join(info_parts) if info_parts else "No additional details detected"


# ---------------------------------------------------------------------------
# Optional AI-assisted classification
# ---------------------------------------------------------------------------
def classify_with_ai(png_path: Path, company_name: str, client, model="claude-sonnet-4-6"):
    """Use Claude's vision capability to classify a screenshot. Requires anthropic SDK + API key."""
    with open(png_path, "rb") as f:
        image_data = base64.standard_b64encode(f.read()).decode("utf-8")

    media_type = "image/png"

    prompt = (
        f"This is a product screenshot from the company '{company_name}'. "
        "Respond ONLY with a JSON object (no markdown, no preamble) with exactly these keys:\n"
        '  "screen_type": a short 2-4 word label for the type of screen (e.g. "Login", "Checkout", "Empty State"),\n'
        '  "description": one sentence describing what this type of screen generally does,\n'
        '  "additional_info": a short phrase noting crucial specifics visible in THIS screen '
        '(e.g. light vs dark mode, mobile vs desktop, error state, populated vs empty state).'
    )

    response = client.messages.create(
        model=model,
        max_tokens=300,
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "image", "source": {"type": "base64", "media_type": media_type, "data": image_data}},
                    {"type": "text", "text": prompt},
                ],
            }
        ],
    )

    text = "".join(block.text for block in response.content if block.type == "text").strip()
    text = re.sub(r"^```json|```$", "", text.strip(), flags=re.MULTILINE).strip()

    import json
    try:
        parsed = json.loads(text)
        return (
            parsed.get("screen_type", "Unknown"),
            parsed.get("description", DEFAULT_DESCRIPTION),
            parsed.get("additional_info", ""),
        )
    except json.JSONDecodeError:
        # Fall back gracefully if the model didn't return clean JSON
        return ("Unknown", DEFAULT_DESCRIPTION, text[:200])


# ---------------------------------------------------------------------------
# Main processing
# ---------------------------------------------------------------------------
def process_zip(zip_path: str, output_csv: str, use_ai: bool = False):
    zip_path = Path(zip_path)
    if not zip_path.exists():
        print(f"Error: zip file not found: {zip_path}")
        sys.exit(1)

    ai_client = None
    if use_ai:
        try:
            import anthropic
        except ImportError:
            print("Error: --use-ai requires the 'anthropic' package. Install it with: pip install anthropic")
            sys.exit(1)

        api_key = os.environ.get("ANTHROPIC_API_KEY")
        if not api_key:
            print("Error: --use-ai requires the ANTHROPIC_API_KEY environment variable to be set.")
            sys.exit(1)

        ai_client = anthropic.Anthropic(api_key=api_key)

    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = Path(tmpdir)
        with zipfile.ZipFile(zip_path, "r") as zf:
            zf.extractall(tmpdir)

        # Find the root: either the tmpdir itself contains company folders directly,
        # or there's a single wrapper folder (common with zip exports).
        top_level = [p for p in tmpdir.iterdir() if not p.name.startswith("__MACOSX")]
        if len(top_level) == 1 and top_level[0].is_dir():
            root = top_level[0]
        else:
            root = tmpdir

        rows = []
        company_dirs = sorted([p for p in root.iterdir() if p.is_dir()])

        if not company_dirs:
            print("No company folders found in the zip. Check the zip's internal structure.")
            sys.exit(1)

        for company_dir in company_dirs:
            company_name = company_dir.name.replace("_", " ").replace("-", " ").strip()

            # Group files by stem (filename without extension) so png+html+svg pairs match up
            files_by_stem = {}
            for f in company_dir.iterdir():
                if f.is_file() and f.suffix.lower() in (".png", ".html", ".htm", ".svg"):
                    files_by_stem.setdefault(f.stem, {})[f.suffix.lower()] = f

            for stem, files in sorted(files_by_stem.items()):
                png_path = files.get(".png")
                html_path = files.get(".html") or files.get(".htm")
                svg_path = files.get(".svg")
                screen_type = clean_screen_type(stem)

                if use_ai and png_path:
                    try:
                        screen_type, description, additional_info = classify_with_ai(
                            png_path, company_name, ai_client
                        )
                        # Extract and append SVG Title even if AI mode succeeds 
                        if svg_path and svg_path.exists():
                            try:
                                svg_content = svg_path.read_text(errors="ignore")
                                svg_title_match = re.search(r"<title[^>]*>(.*?)</title>", svg_content, re.IGNORECASE | re.DOTALL)
                                if svg_title_match:
                                    title_str = f"SVG Title: {svg_title_match.group(1).strip()}"
                                    additional_info = f"{additional_info}; {title_str}" if additional_info else title_str
                            except Exception:
                                pass
                    except Exception as e:
                        print(f"  Warning: AI classification failed for {png_path.name} ({e}); using heuristics.")
                        description = guess_description(screen_type)
                        additional_info = build_additional_info(png_path, html_path, svg_path, stem)
                else:
                    description = guess_description(screen_type)
                    additional_info = build_additional_info(png_path, html_path, svg_path, stem)

                rows.append({
                    "Company Name": company_name,
                    "Screen Type": screen_type,
                    "Description": description,
                    "Additional Info": additional_info,
                })
                print(f"Processed: {company_name} / {stem}")

        with open(output_csv, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=["Company Name", "Screen Type", "Description", "Additional Info"])
            writer.writeheader()
            writer.writerows(rows)

        print(f"\nDone. Wrote {len(rows)} rows to {output_csv}")


def main():
    parser = argparse.ArgumentParser(description="Convert a zip of company screenshots into a CSV summary.")
    parser.add_argument("zip_path", help="Path to the input zip file")
    parser.add_argument("output_csv", help="Path to write the output CSV")
    parser.add_argument(
        "--use-ai",
        action="store_true",
        help="Use Claude's vision API for more accurate classification (requires ANTHROPIC_API_KEY env var)",
    )
    args = parser.parse_args()
    process_zip(args.zip_path, args.output_csv, use_ai=args.use_ai)


if __name__ == "__main__":
    main()
