---
name: pinterest-ui-kit-community
source: Pinterest UI Kit (Community)
kind: design-system-context
---

# pinterest - Design System

## Overview

Pinterest UI kit covering:
- Cover image presentation.
- iOS Pinterest Feed, Personal Boards, and Updates screens.
- Category tabs, avatars, square image cards, and portrait image cards.
- Mobile layouts use a 375x812px frame.
- The system is image-led, monochrome, rounded, and editorial, with red notification accents.

## Design language

- Primary surfaces are white.
- Primary text and selected controls use black.
- Supporting text uses gray tones.
- Image cards use rounded corners, predominantly 25px.
- Pinterest content is presented through masonry-style grids and modular image tiles.
- Navigation uses horizontally arranged category tabs with a black selected pill and white selected text.
- Mobile screens include persistent bottom navigation and floating navigation controls.
- Red is reserved for update indicators and notification dots.

## Color palette

Ranked by raw usage:

| Color | Usage | Application |
|---|---:|---|
| `#000000` | 185 | Primary text, selected controls, icons |
| `#FFFFFF` | 79 | Backgrounds, cards, selected text |
| `#262626` | 51 | Small indicators and dark secondary details |
| `#C4C4C4` | 50 | Image placeholders and avatar placeholders |
| `#8E8E8E` | 32 | Secondary text and muted icons |
| `#4F4F4F` | 20 | Image tile placeholders |
| `#D32D2F` | 11 | Notification indicators |
| `#828282` | 4 | Gray image tile placeholders |
| `#9D1A1A` | 4 | Dark red accent |
| `#EFEFEF` | 4 | Light avatar placeholder |
| `#0F0F0F` | 3 | Near-black details |
| `#222222` | 3 | Dark secondary details |
| `#FFFFFF80` | 3 | Translucent white treatment |

Named token aliases:
- White → `#FFFFFF`
- Label / Light / Primary → `#000000`
- Black → `#000000`

## Type scale

Fonts and sizes ranked by raw usage:

| Font | Size | Weight/style | Usage |
|---|---:|---|---:|
| SF UI Display | 14.5px | Medium | 13 |
| SF UI Display | 14.5px | Bold | 7 |
| SF UI Display | 66.5px | Medium | 7 |
| SF UI Display | 80px | Bold | 6 |
| SF UI Display | 11.5px | Regular | 5 |
| SF UI Display | 160px | Bold | 4 |
| SF UI Display | 14.5px | Regular | 4 |
| SF UI Display | 73.6px | Regular | 4 |
| IBM Plex Mono | 60px | Bold | 3 |
| IBM Plex Mono | 60px | IBMPlexMono | 3 |
| SF UI Display | 55px | Regular | 3 |
| SF UI Display | 60px | Regular | 3 |

Additional component text sizes:
- SF UI Display Regular, 15.5px.
- SF UI Display Regular, 11px.
- SF UI Display Regular, 10px.
- SF UI Display Medium, 10.8px.
- SF UI Display Regular, 10.8px.
- SF UI Display Bold, 18px.

Hierarchy from largest to smallest:
`160px`, `80px`, `73.6px`, `66.5px`, `60px`, `55px`, `14.5px`, `11.5px`.

## Spacing scale

_None found in source._

## Radius scale

Observed radius values:
- `0px`
- `6px`
- `15px`
- `16px`
- `25px`
- `30px`
- `100px`

Usage:
- Image cards: predominantly `25px`.
- Feed image instances: `15px`.
- Mobile home indicator: `6px`.
- Floating navigation container: `100px`.
- Selected category pill: `25px`.
- Cover image frame: `16px`.

## Elevation & effects

Observed effects:
- Drop shadow with `15px` blur and offset `0 3`.
- Drop shadow with `2px` blur and offset `0 1`.
- Floating navigation uses the larger drop shadow.
- Category tab navigation uses the smaller drop shadow.
- No local effect styles or motion variables were found.

## Components

### Avatar 1, Avatar 2, Avatar 3

- Size: `191x191px`.
- Fill: `#FFFFFF`.
- Used for profile imagery and avatar presentation.

### Category Tab 1

- Size: `375x85px`.
- Fill: `#FFFFFF`.
- Text: SF UI Display Medium, `14.5px`.
- Includes a `375x44px` status bar region and a `375x50px` category navigation region.
- Selected tab: `74x39px`, `25px` radius, `#000000` fill, `#FFFFFF` text.
- Unselected labels use `#000000`.

### Category Tab 2

- Size: `375x85px`.
- Fill: `#FFFFFF`.
- Text: SF UI Display Bold and Medium, `14.5px`.
- Uses the same `375x44px` status bar and `375x50px` category navigation structure.
- Selected tab: `74x39px`, `25px` radius, `#000000` fill, `#FFFFFF` text.

### Rectangle IMG 1

- Base component size: `444x516px`.
- Radius: `25px`.
- Fill: `#FFFFFF`.

### Rectangle IMG 2

- Base component size: `444x572px`.
- Radius: `25px`.
- Fill: `#FFFFFF`.

### Rectangle IMG 3

- Base component size: `444x612px`.
- Radius: `25px`.
- Fill: `#FFFFFF`.

### Rectangle IMG 4, Rectangle IMG 5, Rectangle IMG 6, Rectangle IMG 7

- Base component size: `443x636px`.
- Radius: `25px`.
- Fill: `#FFFFFF`.

### Square IMG 1 through Square IMG 9

- Base component size: `444x444px`.
- Radius: `25px`.
- Fill: `#FFFFFF`.

### iOS Pinterest Feed

- Size: `375x812px`.
- Fill: `#FFFFFF`.
- Uses SF UI Display Medium at `14.5px`, Medium and Regular at `10.8px`.
- Content uses mixed square and portrait image cards.
- Feed card instances commonly use `15px` radius.
- Includes category navigation, floating navigation, promotional copy, image grids, small dark indicators, and a bottom home indicator.
- Bottom home indicator: `134x5px`, `6px` radius.

### iOS Pinterest Personal Boards

- Size: `375x812px`.
- Fill: `#FFFFFF`.
- Text styles:
  - SF UI Display Regular, `15.5px`
  - SF UI Display Bold, `14.5px`
  - SF UI Display Medium, `14.5px`
  - SF UI Display Regular, `10px`
  - SF UI Display Regular, `11px`
  - SF UI Display Bold, `18px`

### iOS Pinterest Updates

- Size: `375x812px`.
- Fill: `#FFFFFF`.
- Text styles:
  - SF UI Display Bold, `14.5px`
  - SF UI Display Medium, `14.5px`
  - SF UI Display Regular, `14.5px`
  - SF UI Display Regular, `11.5px`
- Update rows use `#D32D2F` notification dots and `#8E8E8E` timestamps.
- Includes avatar groups, notification copy, multi-size image grids, floating navigation, category tabs, and a bottom home indicator.

## Screen patterns

### Cover Image

- Large `1600x960px` presentation frame.
- White outer surface with a rounded `16px` frame.
- Large display title and Pinterest logo artwork are presented as cover content.

### Page 2 design-system board

- Large white documentation canvas.
- Sections for header, image/post placeholders, avatars, component screens, and mocks.
- Components are shown as reusable mobile screens and image-card specimens.
- Large headings use SF UI Display Bold at `160px`.
- Documentation notes use IBM Plex Mono at `60px`.

### Mobile feed

- Fixed `375x812px` viewport.
- Category tabs occupy `375x85px`.
- Image content is arranged in Pinterest-style masonry grids.
- Cards combine square and portrait aspect ratios.
- Floating navigation is a `240x54px` white pill with `100px` radius.
- Bottom home indicator is centered near the bottom edge.

### Updates screen

- Notification copy appears above grouped avatars and image grids.
- Update items use black body text, gray timestamps, and red notification dots.
- Image content is organized into top, middle, and bottom grids.
- Top grid: approximately `362x182px`.
- Middle grid: approximately `362x183px`.
- Bottom grid: approximately `362x183px`.

## Notes for implementers

- Use only the named component families when mapping extracted components.
- Preserve the `375x812px` mobile viewport for the three iOS screen components.
- Use `#FFFFFF` for primary screen and card surfaces and `#000000` for primary text.
- Use `#C4C4C4` for neutral image and avatar placeholders.
- Use `#8E8E8E` for muted text and controls.
- Use `#D32D2F` for update indicators.
- Apply `25px` radius to standard image components unless the component specifies another radius.
- Keep category navigation at `375x85px`, with a `375x44px` status bar and `375x50px` tab region.
- Treat image cards as cropped media containers; preserve their component family and supplied aspect ratio.
- Use the floating `240x54px` navigation pill for feed and updates navigation patterns.
- No spacing, motion, local text-style, local effect-style, or grid-style variables were found.
