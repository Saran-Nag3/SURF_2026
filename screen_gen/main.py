"""Entry point: walk Design.md files, generate screens, render PNGs.

Usage:
  python main.py                # full run (needs Azure creds in .env)
  python main.py --dry-run      # render chrome with placeholder content, NO Azure calls
  python main.py --only Acme    # restrict to companies whose name contains "Acme"
  python main.py --reuse-html   # reuse saved HTML where it exists; only call the model
                                #   for companies missing it (re-renders PNGs for free)
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

import config
from config import plan_for_company, CompanyPlan
from render import Renderer


def slugify(name: str) -> str:
    s = re.sub(r"[^a-zA-Z0-9]+", "-", name).strip("-").lower()
    return s or "company"


def discover(design_dir: Path, glob: str) -> list[tuple[str, Path]]:
    """Return (company_name, path) pairs. Company = parent folder, or file stem."""
    found = []
    for p in sorted(design_dir.glob(glob)):
        if not p.is_file():
            continue
        parent = p.parent.name
        company = parent if (p.parent != design_dir and parent) else p.stem
        found.append((company, p))
    return found


def load_cached_screens(cdir: Path):
    """Reload a company's previously generated screens from disk.

    Returns (screens, meta) if a complete cache exists (manifest.json plus every
    referenced .html file), else None. Used by --reuse-html to skip the model call.
    """
    mf = cdir / "manifest.json"
    if not mf.exists():
        return None
    try:
        m = json.loads(mf.read_text(encoding="utf-8"))
    except Exception:
        return None
    entries = m.get("screens", [])
    if not entries:
        return None
    screens = []
    for s in entries:
        html_name = s.get("html", "")
        hp = cdir / html_name
        if not html_name or not hp.exists():
            return None  # incomplete cache -> regenerate rather than render blanks
        screens.append({
            "name": s.get("name", ""),
            "kind": s.get("kind", ""),
            "content_html": hp.read_text(encoding="utf-8", errors="replace"),
        })
    meta = {
        "paradigm_detected": m.get("paradigm_detected", ""),
        "self_check": m.get("self_check", ""),
    }
    return screens, meta


def _placeholder_fragment(plan: CompanyPlan) -> str:
    """Used by --dry-run so the shell can be eyeballed without spending tokens."""
    rows = "".join(
        f'<div style="padding:14px 16px;border-bottom:1px solid #ececec;">'
        f'<div style="font-weight:600;">Placeholder item {i}</div>'
        f'<div style="color:#777;font-size:13px;">{plan.device.name} &middot; '
        f'{plan.device.platform}</div></div>'
        for i in range(1, 26)
    )
    return (
        '<div class="app"><style>.app{font:15px/1.4 inherit;}</style>'
        f'<div style="padding:14px 16px;font-size:22px;font-weight:700;">{plan.company}</div>'
        f"{rows}</div>"
    )


def run(dry_run: bool = False, only: str | None = None, reuse_html: bool = False) -> None:
    design_dir = Path(config.DESIGN_DIR)
    out_dir = Path(config.OUTPUT_DIR)
    if not design_dir.exists():
        raise SystemExit(f"DESIGN_DIR not found: {design_dir.resolve()}")

    companies = discover(design_dir, config.DESIGN_GLOB)
    if only:
        companies = [c for c in companies if only.lower() in c[0].lower()]
    if not companies:
        raise SystemExit(
            f"No specs matched {config.DESIGN_GLOB!r} under {design_dir.resolve()}"
        )

    # generate_screens (and the Azure credential check) is loaded lazily, only when
    # a company actually needs generating. With --reuse-html on a fully cached run,
    # the model is never touched and no Azure creds are required.
    generate_fn = None

    print(f"Found {len(companies)} compan(ies). Output -> {out_dir.resolve()}\n")

    with Renderer() as renderer:
        for company, path in companies:
            plan = plan_for_company(company)
            print(
                f"* {company}: {plan.device.name} ({plan.device.platform}), "
                f"{plan.n_screens} screens"
            )
            cdir = out_dir / slugify(company)

            if dry_run:
                screens = [
                    {"name": f"screen {i+1}", "kind": "placeholder",
                     "content_html": _placeholder_fragment(plan)}
                    for i in range(plan.n_screens)
                ]
                meta = {"paradigm_detected": "(dry-run)", "self_check": "(dry-run)"}
            else:
                cached = load_cached_screens(cdir) if reuse_html else None
                if cached is not None:
                    screens, meta = cached
                    print(f"  (reusing saved HTML, {len(screens)} screen(s) — no model call)")
                else:
                    if generate_fn is None:  # first real generation -> load SDK + check creds
                        config.assert_azure_config()
                        from generate import generate_screens
                        generate_fn = generate_screens
                    design_md = path.read_text(encoding="utf-8", errors="replace")
                    try:
                        data = generate_fn(plan, design_md)
                    except Exception as e:  # keep the batch going
                        print(f"  ! generation failed: {e}")
                        continue
                    screens = data["screens"]
                    meta = {
                        "paradigm_detected": data.get("paradigm_detected", ""),
                        "self_check": data.get("self_check", ""),
                    }

            manifest = {
                "company": company,
                "source": str(path),
                "platform": plan.device.platform,
                "device": plan.device.name,
                "viewport_px": [plan.device.width, plan.device.height],
                "output_px": [
                    round(plan.device.width * plan.device.dpr),
                    round(plan.device.height * plan.device.dpr),
                ],
                **meta,
                "screens": [],
            }

            for i, scr in enumerate(screens, 1):
                kind = slugify(scr.get("kind", f"screen{i}"))
                stem = f"screen_{i}_{kind}"
                frag = scr.get("content_html", "")
                (cdir).mkdir(parents=True, exist_ok=True)
                (cdir / f"{stem}.html").write_text(frag, encoding="utf-8")
                png = cdir / f"{stem}.png"
                try:
                    renderer.render(plan, frag, png)
                    print(f"    - {png.name}")
                except Exception as e:
                    print(f"    ! render failed for {stem}: {e}")
                    continue
                manifest["screens"].append(
                    {"name": scr.get("name", stem), "kind": scr.get("kind", ""),
                     "png": png.name, "html": f"{stem}.html"}
                )

            (cdir / "manifest.json").write_text(
                json.dumps(manifest, indent=2), encoding="utf-8"
            )

    print("\nDone.")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true",
                    help="render chrome with placeholder content; no Azure calls")
    ap.add_argument("--only", default=None, help="substring filter on company name")
    ap.add_argument("--reuse-html", action="store_true",
                    help="reuse saved HTML where present; only call the model for "
                         "companies that don't have it yet")
    args = ap.parse_args()
    run(dry_run=args.dry_run, only=args.only, reuse_html=args.reuse_html)
