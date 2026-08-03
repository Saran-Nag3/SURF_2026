"""System prompt + user message construction.

This adapts the original iOS-only translation spec into the agreed direction:
target platform is assigned per company (iOS *or* Android), realism is "light but
tidy", and the OS chrome is NOT the model's job (the harness renders it).
"""
from __future__ import annotations

from config import CompanyPlan

SYSTEM = """You convert an extracted product design spec (a Design.md, typically a Figma
token/component dump) into realistic {platform_label} phone app screens. The source's
original form factor is unknown -- infer it, then TRANSLATE each pattern to its native
{platform_label} equivalent. Translate, don't shrink or restyle.

GOAL: the output must read as an ORDINARY, REAL app screen that a user happened to
screenshot mid-use. This feeds a real-vs-generated study, so convincing mundanity beats
striking design. Do NOT art-direct. No bold/maximalist/"award-winning" layouts -- those
are tells. Look like a normal, shipped, slightly-boring production app.

SOURCING (strict): Build ONLY from the design spec provided below. Do NOT use any outside
or prior knowledge of the company, its real app, website, branding, products, or content --
even if you recognize the brand from the spec. Every color, font, radius, component, label,
and layout choice must trace to something in the spec. Where the spec is silent (item names,
copy, prices, dates, user content), INVENT neutral, generic, made-up placeholder content --
do not recall or reproduce the real product's actual screens, wording, or data. The only
naming you may use is a product name that literally appears in the spec; otherwise keep it
generic.

STEP 1 - Parse the spec. Read whatever sections exist (any may be absent):
  Color/Raw Colors -> brand + semantic palette.  Typography -> type ramp + font family.
  Spacing/Radius/Motion -> if absent, INFER from padding/gap/radius in Component Specs.
  Effect Styles, Grid Styles, Component Specs, Layout & Structure.
  WARNING: top-level frame widths are often ARTBOARD CANVASES (e.g. 8784px sheets) or
  narrow component cells -- never treat a max frame width as a layout width. Identify
  real pages vs component galleries.

STEP 2 - Classify the source paradigm (sets translation rules):
  marketing site | web dashboard/app | component library/design system |
  spatial/visionOS | already-mobile. State which you picked and why.

STEP 3 - Translate to {platform_label}:
{platform_rules}
  Single column, full-bleed with ~16{unit} side margins, nothing wider than the viewport.
  All tap targets >= {min_target}{unit}. Touch states only (normal/pressed/selected/disabled);
  no hover/focus/dwell/pinch, no tooltips.
  Data tables -> stacked cards or grouped rows. Multi-column grids -> one column (2-up only
  for genuine tiles). Sidebars/desktop menus -> {nav}.

STEP 4 - Preserve brand identity: color tokens + semantic roles, the type ramp AND its font
  family (use the named brand font for branded/heading text; fall back to the platform system
  font for chrome and body if no font is named), corner-radius intent, component semantics.

STEP 5 - Strip source-form-factor residue: glass/heavy-blur/specular + window controls
  (spatial); hover-only affordances, mega-menus, footer-sitemaps (web); fixed multi-column
  grids (dashboard). If it has no reason to exist on a handheld touchscreen, delete it.

STEP 6 - Light realism (tidy, believable, not messy):
  Use plausible placeholder data -- real-sounding names, dates, counts, prices -- never
  "Lorem ipsum", never the literal "9:41". Let the LAST item run slightly past the bottom so
  the screen feels mid-scroll. At most ONE subtle promoted/sponsored row, and only if it would
  naturally appear; otherwise none. No banner-ad clutter.

CHROME: Do NOT draw a status bar, clock, signal/battery, notch, or home indicator -- the
harness adds those. Your content starts at the very top of the app's own UI (its nav/app bar,
if any) and fills the width.

OUTPUT: a {platform_label} content fragment per screen. Each fragment is a single root
<div class="app"> with one <style> block scoped under .app (so screens don't collide), inline
SVG for icons, width:100%, no fixed pixel page widths. Target viewport is ~{vw}x{vh} logical px
(content area, chrome excluded).

IMAGES: wherever a PHOTO, IMAGE, AVATAR, COVER, or THUMBNAIL belongs, output an EMPTY
<div class="ph-img" data-q="..."></div> and size/shape it with your own CSS (give it a height
or aspect-ratio; use border-radius:50% for round avatars, rounded corners for cards). The
data-q attribute is a 2-5 word GENERIC search phrase for the photo that slot should show
(e.g. data-q="modern apartment interior", data-q="person portrait headshot" for an avatar,
data-q="plated restaurant dish"). Keep queries generic and on-theme; NEVER put the real brand
name in a query. Do NOT use <img>, background-image, external URLs, or base64 -- the harness
fills every .ph-img from its image source. Keep icons as inline SVG. No external links/fonts/scripts.

Produce EXACTLY {n} screens, each a genuinely DIFFERENT part of the app. They share nav,
color, and type (it's one app) but must NOT repeat a layout or content type -- they should
look like distinct stops a user navigated between. Build these specific screens, in order:
{assignment}
Adapt each to THIS product using its real features and terminology from the spec. If an
archetype truly cannot fit the product, substitute the closest equivalent that does -- but
all {n} must be visibly different from one another in layout and purpose.

Return ONLY valid JSON, no markdown, no prose, exactly this shape:
{{"company":"<name>","platform":"{platform}","paradigm_detected":"<which + why, one sentence>",
"self_check":"<one sentence confirming: single column, no chrome drawn, touch states only,
no source residue, brand tokens preserved>",
"screens":[{{"name":"<short>","kind":"<the assigned archetype for this screen>",
"content_html":"<self-contained fragment>"}}]}}"""


IOS_RULES = (
    "  Primary navigation -> iOS bottom tab bar (<=5 items) and/or a top nav bar; never a\n"
    "  persistent sidebar. Use iOS conventions: large/inline titles, grouped inset lists,\n"
    "  SF-style system iconography, segmented controls where apt."
)
ANDROID_RULES = (
    "  Primary navigation -> Material bottom navigation (3-5) or a top app bar with overflow;\n"
    "  never a persistent sidebar. Use Material conventions: app bar, FAB where apt, ripple-less\n"
    "  flat touch states, Material list/card density and iconography."
)

# Maps the archetype keys chosen in config.plan_for_company to a one-line brief.
ARCHETYPE_DESC = {
    "home_feed": "the main landing/feed the app opens to -- its primary content stream or dashboard",
    "item_detail": "one item opened in full -- a detail view with its specifics and primary actions",
    "search_browse": "search or browse -- a query field with results, categories, or filters",
    "settings": "settings/preferences -- grouped rows of toggles, options, and account controls",
    "profile": "the user's profile or account screen",
    "library_list": "a saved/library/collection list of the user's own items",
    "create_form": "a create/compose/add flow with input fields and a primary submit action",
    "notifications": "a notifications or recent-activity list",
    "empty_state": "an empty state for a section the user hasn't filled yet, with a prompt to act",
    "onboarding": "an onboarding/welcome step that introduces the product",
}


def system_prompt(plan: CompanyPlan) -> str:
    ios = plan.device.platform == "ios"
    if plan.screen_kinds:
        assignment = "\n".join(
            f"  {i}. {k.replace('_', ' ').upper()} — {ARCHETYPE_DESC.get(k, k)}"
            for i, k in enumerate(plan.screen_kinds, 1)
        )
    else:
        assignment = "  (a feed, a detail view, settings, a profile, and an empty state — all different)"
    return SYSTEM.format(
        platform=plan.device.platform,
        platform_label="iPhone (iOS)" if ios else "Android",
        platform_rules=IOS_RULES if ios else ANDROID_RULES,
        unit="pt" if ios else "dp",
        min_target=44 if ios else 48,
        nav="an iOS bottom tab bar" if ios else "Material bottom navigation",
        vw=plan.device.width,
        vh=plan.device.height - plan.device.status_h - plan.device.bottom_inset,
        n=plan.n_screens,
        assignment=assignment,
    )


def user_message(company: str, design_md: str) -> str:
    # We deliberately do NOT pass the company name to the model -- naming the brand cues
    # its memorized knowledge of the real app. The model works only from the spec below.
    # (company is still accepted for call-compatibility and is used for foldering elsewhere.)
    return (
        "Build the screens using ONLY the design spec below. Do not draw on any outside "
        "knowledge of any real company or product; if you recognize the brand, ignore that "
        "knowledge and use only what the spec states.\n\n"
        f"=== Design spec START ===\n{design_md}\n=== Design spec END ==="
    )
