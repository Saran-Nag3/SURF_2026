"""Builds the full-page HTML for one screen.

The *harness* owns the OS chrome -- status bar (clock, signal, wifi, battery),
the iOS notch/Dynamic Island or Android punch-hole, and the home indicator /
gesture pill. These are exactly the elements that betray a generated screen when
a model improvises them, so we render them consistently here. The model only
supplies the app content that sits inside the content viewport.
"""
from __future__ import annotations

from config import CompanyPlan, Device


def _ios_status_bar(plan: CompanyPlan) -> str:
    island = ""
    if plan.device.notch == "island":
        island = '<div class="ios-island"></div>'
    elif plan.device.notch == "notch":
        island = '<div class="ios-notch"></div>'
    return f"""
    <div class="statusbar ios">
      <div class="sb-time">{plan.clock}</div>
      {island}
      <div class="sb-right">
        <svg width="18" height="12" viewBox="0 0 18 12"><g fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="6" width="3" height="6" rx="1"/>
          <rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/>
        </g></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 11 L1 4.2 A 9.5 9.5 0 0 1 15 4.2 Z"/>
        </svg>
        <div class="sb-batt"><div class="sb-batt-fill" style="width:{max(6, plan.battery)}%"></div></div>
      </div>
    </div>"""


def _android_status_bar(plan: CompanyPlan) -> str:
    # A couple of subtle notification glyphs on the left, like a real Android bar.
    return f"""
    <div class="statusbar android">
      <div class="sb-left">
        <span class="sb-time">{plan.clock}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7v4l-2 3v1h18v-1l-2-3V9a7 7 0 0 0-7-7z"/></svg>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>
      </div>
      <div class="sb-right">
        <svg width="15" height="11" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 11 L1 4.2 A 9.5 9.5 0 0 1 15 4.2 Z"/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><path d="M0 11 L15 11 L15 0 Z"/></svg>
        <div class="sb-batt android"><div class="sb-batt-fill" style="width:{max(6, plan.battery)}%"></div></div>
      </div>
    </div>"""


def _bottom(plan: CompanyPlan) -> str:
    if plan.device.bottom_inset <= 0:
        return ""
    cls = "home-pill ios" if plan.device.platform == "ios" else "home-pill android"
    return f'<div class="home-inset"><div class="{cls}"></div></div>'


def build_page(plan: CompanyPlan, content_html: str) -> str:
    """Wrap the model's content fragment in a full device-sized page."""
    d: Device = plan.device
    bar = _ios_status_bar(plan) if d.platform == "ios" else _android_status_bar(plan)
    sb_fg = "#000" if d.platform == "ios" else "#1b1b1b"  # most light app bars use dark fg
    return f"""<!doctype html>
<html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>
  * {{ box-sizing: border-box; -webkit-font-smoothing: antialiased; }}
  html, body {{ margin: 0; padding: 0; }}
  body {{
    width: {d.width}px; height: {d.height}px; overflow: hidden;
    font-family: {"-apple-system, 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif"
                  if d.platform == "ios" else "'Roboto', 'Noto Sans', system-ui, Arial, sans-serif"};
    background: #ffffff; color: #111;
  }}
  .device {{ width: {d.width}px; height: {d.height}px; display: flex; flex-direction: column; position: relative; }}

  /* status bar */
  .statusbar {{ height: {d.status_h}px; flex: 0 0 {d.status_h}px; display: flex; align-items: center;
                justify-content: space-between; padding: 0 {18 if d.platform=='ios' else 14}px;
                font-size: {15 if d.platform=='ios' else 14}px; font-weight: 600; color: {sb_fg};
                position: relative; z-index: 5; }}
  .statusbar .sb-time {{ font-variant-numeric: tabular-nums; }}
  .statusbar.ios .sb-time {{ font-weight: 600; }}
  .sb-left {{ display: flex; align-items: center; gap: 5px; }}
  .sb-right {{ display: flex; align-items: center; gap: 5px; }}
  .sb-batt {{ width: 24px; height: 12px; border: 1px solid currentColor; border-radius: 3px;
              position: relative; opacity: .9; }}
  .sb-batt::after {{ content:''; position:absolute; right:-3px; top:3px; width:2px; height:6px;
                     background: currentColor; border-radius: 1px; }}
  .sb-batt-fill {{ position:absolute; left:1px; top:1px; bottom:1px; background: currentColor; border-radius: 1px; }}
  .sb-batt.android {{ width: 20px; }}
  .ios-island {{ position: absolute; left: 50%; transform: translateX(-50%); top: {max(8,(d.status_h-26)//2)}px;
                 width: 110px; height: 26px; background: #000; border-radius: 16px; }}
  .ios-notch {{ position: absolute; left: 50%; transform: translateX(-50%); top: 0;
                width: 150px; height: 28px; background: #000; border-radius: 0 0 18px 18px; }}

  /* content viewport: the model's screen lives here. overflow hidden gives the
     "mid-scroll" crop where the last row bleeds off the bottom edge. */
  .content {{ flex: 1 1 auto; overflow: hidden; position: relative; background: #fff; }}
  .content > * {{ width: 100%; }}

  /* bottom inset */
  .home-inset {{ flex: 0 0 {d.bottom_inset}px; display:flex; align-items:flex-end; justify-content:center;
                 padding-bottom: 8px; background: transparent; position: relative; z-index: 5; pointer-events: none; }}
  .home-pill {{ width: 140px; height: 5px; border-radius: 3px; background: rgba(0,0,0,.85); }}
  .home-pill.android {{ width: 110px; background: rgba(0,0,0,.55); }}
</style></head>
<body>
  <div class="device">
    {bar}
    <div class="content">{content_html}</div>
    {_bottom(plan)}
  </div>
</body></html>"""
