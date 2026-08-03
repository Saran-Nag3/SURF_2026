---
name: alchemy-stars-website-concept-community
source: Alchemy Stars Website Concept (Community)
kind: design-system-context
---

# alchemy - Design System

## Overview

A dark, image-led website concept for Alchemy Stars, using full-screen artwork, luminous white typography, translucent black overlays, and editorial navigation. Extracted screens include Characters, World, World 2, News, and News 2.

## Design language

- Full-bleed image backgrounds are the primary visual surface.
- Navigation is horizontal, uppercase, and editorial.
- Typography is serif-led, with oversized display headings.
- White text is layered over imagery with translucent overlays and drop shadows.
- Content panels use dark translucent surfaces and occasional background blur.
- Active navigation items use solid white; inactive items use reduced-opacity white.

## Color palette

Ranked by observed usage:

| Color | Uses |
|---|---:|
| `#FFFFFF8A` | 42 |
| `#FFFFFF` | 39 |
| `#FFFFFF8C` | 13 |
| `#FFFFFF0D` | 7 |
| `#000000B2` | 6 |
| `#FFFFFFE5` | 6 |
| `#C4C4C4` | 5 |
| `#00000080` | 3 |
| `#000000A6` | 3 |

- Primary text and active navigation: `#FFFFFF`.
- Muted navigation and secondary labels: `#FFFFFF8A`, `#FFFFFF8C`.
- Textured or outlined text treatment: `#FFFFFF0D`.
- Dark translucent surfaces and overlays: `#00000080`, `#000000A6`, `#000000B2`.
- Neutral image-mask placeholder: `#C4C4C4`.
- High-opacity white text: `#FFFFFFE5`.

## Type scale

- `120px` — Cormorant Garamond Bold; large News category labels.
- `90px` — Cormorant Garamond Bold; large World 2 editorial heading.
- `80px` — Cormorant Garamond Bold; character names.
- `75px` — Cormorant Garamond Medium; World category labels.
- `50px` — Cormorant Garamond Bold, Spectral Bold, and Times New Roman TimesNewRomanPSMT.
- `32px` — Cormorant Garamond Medium.
- `30px` — Cormorant Garamond Bold and Regular; navigation, utility labels, and dates.
- `28px` — Cormorant Garamond Bold; small heading usage.
- `33px` — Spectral Bold; news article title.
- `30px` — Spectral Regular; news date.
- `28px` — Cormorant Garamond SemiBold; body editorial copy.

Typography usage is dominated by Cormorant Garamond Bold at `30px`, followed by display use at `120px`, `75px`, `80px`, `50px`, `90px`, `28px`, and `32px`.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- Drop shadows are used on logos, navigation groups, character cards, image banners, text, and controls.
- Observed drop-shadow offsets include `0 4px`, `4px 1px`, `4px 4px`, `4px 5px`, `5px 4px`, `1px 8px`, and `5px 0 4px`.
- Observed drop-shadow blur values include `4px`, `5px`, `6px`, `7px`, `8px`, `10px`, `15px`, `18px`, `20px`, and `32px`.
- Background blur is used at `20px` and `30px`.
- Character cards use strong shadowed elevation around image panels.
- News content groups use background blur and dark translucent surfaces.
- Text commonly uses large shadows, including `15px` and `20px` blur treatments.

## Components

_None found in source._

## Screen patterns

- **Characters:** Full-screen character artwork with a persistent top navigation, dark top gradient, and a horizontal series of approximately `306px` wide image cards. Character names use white Cormorant Garamond Bold at `80px`, with bottom gradients and pronounced shadows. A “More” control appears with a dropdown indicator.
- **World:** Full-screen artwork with persistent navigation and four horizontal image-led category tiles: STORY, FACTION, GLOSSARY, and DIAGRAM. Category labels use white Cormorant Garamond Medium at `75px`.
- **World 2:** World detail view with a large STORY banner, dark translucent blurred content panels, oversized editorial headings, and body copy over the image background.
- **News:** Full-screen banner artwork with persistent navigation, a bordered content region, large translucent news-category tiles, category filters, and a featured article banner. News labels use oversized outlined Cormorant Garamond Bold at `120px`.
- **News 2:** A second news detail state using the same banner and navigation treatment as News.

## Notes for implementers

- Use image assets as the dominant background and card surfaces; the extraction identifies image fills but does not provide reusable asset components.
- Preserve the persistent top-bar pattern: logo, uppercase navigation, dark top gradient, and text shadowing.
- Treat active navigation as `#FFFFFF`; use `#FFFFFF8A` or `#FFFFFF8C` for inactive states.
- Use translucent black overlays to maintain text contrast over artwork.
- Keep display typography serif-based and oversized, especially for character names, world categories, and news labels.
- No local variables, styles, component sets, spacing tokens, radius tokens, motion tokens, grid styles, or effect styles were found.
