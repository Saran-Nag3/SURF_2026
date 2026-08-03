---
name: android-12-material-you-community-community
source: Android 12 - Material You : Community (Community)
kind: design-system-context
---

# you-com - Design System

## Overview
- Source: Figma file “Android 12 - Material You : Community (Community)”.
- Pages: Thumbnail and Page 1.
- Visual reference for Android 12 / Material You interfaces.
- No local variable collections, text styles, spacing variables, radius variables, motion tokens, effect styles, grid styles, or component families were found.

## Design language
- Material You-inspired mobile UI.
- Dark interface surfaces paired with lime active controls and warm beige content surfaces.
- Use rounded pill-shaped controls and cards.
- Use white icons and text on dark or lime controls.
- Use black text on light surfaces.
- Typography is Roboto, with regular, medium, bold, and black italic weights observed.
- The thumbnail uses large italic display typography and a red “New” badge.

## Color palette
Ranked by observed usage:
- `#000000` — 32 uses. Primary dark text, icons, and progress details.
- `#FFFFFF` — 19 uses. Primary light text, icons, and light surfaces.
- `#00000080` — 8 uses. Secondary dark text.
- `#020202` — 6 uses.
- `#D6EC7F` — 6 uses. Active quick-setting tiles and controls.
- `#FFFFFF40` — 5 uses. Muted indicators and outlined control strokes.
- `#070707` — 3 uses.
- `#0B0B0B` — 3 uses.
- `#0C0C0C` — 3 uses.
- `#313232` — 3 uses.
- `#32312E` — 3 uses. Inactive quick-setting tiles.
- `#7F795B` — 3 uses. Media progress details.
- `#DBD5B3` — 3 uses. Warm beige backgrounds and media surfaces.
- `#FFFFFF66` — 3 uses.
- `#FFFFFFBF` — 3 uses.
- `#EB5757` — 1 use. Red accent token.

## Type scale
Observed Roboto styles:
- `12px` — Regular. Small metadata and media timestamps.
- `14px` — Regular. Status bar, secondary metadata, and labels.
- `14px` — Medium. Status bar and interface text.
- `16px` — Medium. Primary interface text.
- `17px` — Medium. Media title text.
- `32px` — Bold. Thumbnail badge text.
- `36px` — Black Italic. Thumbnail author handle.
- `48px` — Black Italic. Thumbnail author name.
- `72px` — Black Italic. Thumbnail subtitle.
- `120px` — Black Italic. Thumbnail title.

## Spacing scale
Observed layout spacing and padding values:
- `0px`
- `2px`
- `4px`
- `6px`
- `8px`
- `9.57px`
- `10px`
- `11px`
- `12px`
- `16px`
- `20px`
- `24px`
- `32px`
- `159px`

Observed control padding:
- Quick-setting tile: `24px` horizontal, `16px` vertical.
- Compact control: `12px` horizontal, `16px` vertical.
- Media surface: `16px` top and horizontal, `8px` bottom.
- Small media badge: `4px` vertical, `6px` horizontal.

## Radius scale
Observed corner radii:
- `2px` — Small media badge.
- `4.99px` — Thumbnail “New” badge.
- `16px` — Media artwork.
- `24px` — Quick-setting tiles, pills, progress bars, and bottom controls.
- `59px` — Pixel screen content.
- `66px` — Pixel screen bezel.

## Elevation & effects
_None found in source._

## Components
_None found in source._

## Screen patterns
- **Thumbnail / Plugin cover:** A `2216px × 1108px` warm beige cover using large black italic “Android 12” typography, a red “New” badge, black translucent subtitle text, and an author block with a `120px × 120px` circular image.
- **Google Pixel 2 XL quick settings:** A `411px × 922px` dark mobile screen with a white status bar, a lime brightness control, a `2 × 4` grid of `184px × 89px` rounded quick-setting tiles, pagination dots, three outlined bottom controls, and a warm beige media player card.
- **Media player card:** A `380px × 224px` rounded beige surface with `96px × 96px` artwork, title and artist metadata, a device badge, progress details, and pagination indicators.
- **Dribbble shot:** A `1805px × 1354px` warm beige presentation canvas containing two decorative Pixel phone mockups.
- **Pixel 5 mockup:** A `668px × 1362px` phone frame with a `622px × 1322px` screen group, `66px` screen bezel radius, `59px` content radius, side buttons, and a camera detail.

## Notes for implementers
- Use only the listed palette values; preserve opacity values where included in the color.
- Keep active and inactive quick-setting states distinct: active tiles use `#D6EC7F`, while inactive tiles use `#32312E`.
- Use `#00000080` and the available white opacity values for secondary or muted content.
- Apply `24px` radii consistently to large controls, tiles, and pills.
- Use Roboto with the exact observed weights and sizes; do not substitute a different typeface.
- Treat the thumbnail display typography as a separate, oversized editorial treatment from the compact mobile interface typography.
- No reusable component specifications were extracted; implement repeated controls from the observed dimensions and spacing patterns.
