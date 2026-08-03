"""Render a full device page to a PNG with Playwright (headless Chromium)."""
from __future__ import annotations

from pathlib import Path

from playwright.sync_api import sync_playwright

import images
from config import CompanyPlan
from device_shell import build_page


class Renderer:
    """Reuse one browser across many screenshots."""

    def __init__(self) -> None:
        self._pw = None
        self._browser = None

    def __enter__(self) -> "Renderer":
        self._pw = sync_playwright().start()
        self._browser = self._pw.chromium.launch(args=["--force-color-profile=srgb"])
        return self

    def __exit__(self, *exc) -> None:
        if self._browser:
            self._browser.close()
        if self._pw:
            self._pw.stop()

    def _fill_photos(self, page, plan: CompanyPlan) -> None:
        """Fill each <div class="ph-img"> using its data-q search query."""
        queries = page.eval_on_selector_all(
            ".ph-img", "els => els.map(e => e.getAttribute('data-q') || '')"
        )
        if not queries:
            return
        uris = images.data_uris_for(queries, plan.company)
        page.eval_on_selector_all(
            ".ph-img",
            """(els, uris) => els.forEach((el, i) => {
                const u = uris[i];
                if (!u) return;  // leave gray default
                el.style.backgroundImage = `url(${u})`;
                el.style.backgroundSize = 'cover';
                el.style.backgroundPosition = 'center';
                el.style.backgroundRepeat = 'no-repeat';
            })""",
            uris,
        )

    def render(self, plan: CompanyPlan, content_html: str, out_png: Path) -> Path:
        d = plan.device
        page_html = build_page(plan, content_html)
        ctx = self._browser.new_context(
            viewport={"width": d.width, "height": d.height},
            device_scale_factor=d.dpr,
        )
        page = ctx.new_page()
        page.set_content(page_html, wait_until="networkidle")
        self._fill_photos(page, plan)
        page.wait_for_timeout(150)  # let fonts/images settle
        out_png.parent.mkdir(parents=True, exist_ok=True)
        page.screenshot(
            path=str(out_png),
            clip={"x": 0, "y": 0, "width": d.width, "height": d.height},
        )
        ctx.close()
        return out_png
