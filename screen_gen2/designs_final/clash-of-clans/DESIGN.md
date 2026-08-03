---
name: clash-of-clans-ui-components-design-community
source: Clash of Clans - UI Components Design (Community)
kind: design-system-context
---

# clash-of-clans - Design System

## Overview

- Source pages: `thumbnail`, `components`.
- No local variable collections, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The source combines a Clash of Clans-themed thumbnail with a large components reference screen.
- Visual direction: game UI with bold display typography, high-contrast outlined text, warm gold/orange controls, dark framed status elements, gradients, highlights, and pronounced shadows.

## Design language

- Use bold, illustrated game-interface styling rather than minimal flat UI.
- Prefer high-contrast combinations: white or yellow text over dark or saturated surfaces.
- Display text uses heavy outlined lettering with black strokes and downward drop shadows.
- Controls commonly use a rounded outer surface, a lighter top highlight band, saturated fills, inner highlights, and dark shadows.
- Decorative groups and image assets are prominent and should remain visually layered behind or around interface elements.
- The thumbnail uses centered title composition with large stacked `CLASH OF CLANS` lettering and a smaller `COMPONENTS` heading.
- The components screen uses a screenshot-based background with overlaid HUD-like controls, counters, buttons, icons, badges, and decorative artwork.

## Color palette

Ranked by recorded usage:

| Color | Uses |
|---|---:|
| `#000000` | 153 |
| `#FFFFFF` | 97 |
| `#C88508` | 42 |
| `#BEA479` | 39 |
| `#D9D9D9` | 30 |
| `#FFF455` | 18 |
| `#C46A15CC` | 15 |
| `#D9923A` | 15 |
| `#0909095C` | 12 |
| `#DB6F4D` | 12 |
| `#FECB32` | 12 |
| `#FEFAEF` | 12 |
| `#E74D0E` | 9 |
| `#F5F6E459` | 9 |
| `#171609` | 6 |
| `#195C21` | 6 |
| `#291C02` | 6 |
| `#2A2C26` | 6 |
| `#54524B` | 6 |
| `#766B57` | 6 |
| `#B2AC9B` | 6 |
| `#D7D7D7` | 6 |
| `#ECFC12` | 6 |
| `#EDFF90` | 6 |
| `#FDDA46` | 6 |
| `#FFFFE0` | 6 |

- `#000000`: outlines, text strokes, shadows, and dark framing.
- `#FFFFFF`: primary text, highlights, and light icon surfaces.
- `#C88508`, `#BEA479`, `#D9923A`, `#C46A15CC`: warm metallic, gold, and orange interface accents.
- `#FECB32`, `#FFF455`, `#FDDA46`, `#EDFF90`, `#FFFFE0`: bright title and highlight tones.
- `#0909095C`, `#171609`, `#291C02`, `#2A2C26`, `#54524B`, `#766B57`: dark surfaces, outlines, and muted neutral tones.
- `#195C21`, `#E74D0E`, `#DB6F4D`, `#ECFC12`: saturated gameplay accents.
- `#D9D9D9`, `#D7D7D7`, `#B2AC9B`, `#FEFAEF`, `#F5F6E459`: neutral and translucent light surfaces.

## Type scale

### Cartel-Dem i Dem

- `30.16px`: 6 uses; used for the red numeric badge.
- `41.07px`: 3 uses; largest Cartel-Dem size observed.

### Supercell-Magic Magic

- `16.85px`: 3 uses; small labels such as player names.
- `24.83px`: 3 uses.
- `25.72px`: 3 uses.
- `26.48px`: 3 uses.
- `27.02px`: 3 uses.
- `27.56px`: 3 uses.
- `27.66px`: 3 uses.
- `29.75px`: 3 uses.
- `30.17px`: 3 uses; used for `Attack!`.
- `38.81px`: 3 uses; used for prominent badge numerals.
- `60.7px`: observed in the thumbnail `CLASH OF` and `CLANS` title.
- `32.89px`: observed in the thumbnail `COMPONENTS` heading.
- `58.29px`: observed in the larger thumbnail `COMPONENTS` heading.
- `107.59px`: observed in the larger thumbnail `CLASH OF` and `CLANS` title.
- `14px`: observed in thumbnail attribution labels.
- `24.81px`: observed in the larger thumbnail attribution labels.

### Typography treatment

- Headings and gameplay labels frequently use white or bright warm fills with black strokes.
- Numeric HUD text uses white fill, black outline, and a downward drop shadow.
- The thumbnail title uses large stacked display text with gradient fills, black outlines, and inner highlights.

## Spacing scale

_None found in source._

## Radius scale

Observed geometry radii:

- `0px`
- `0.78px`
- `1.69px`
- `1.77px`
- `2.39px`
- `3.55px`
- `3.87px`
- `8.62px`
- `9.94px`
- `10.99px`
- `11.36px`
- `11.44px`
- `11.51px`
- `11.53px`
- `12.66px`
- `12.93px`
- `13.3px`
- `13.83px`
- `15.22px`
- `15.84px`
- `15.96px`
- `17.09px`
- `19.4px`
- `19.96px`

No reusable radius variables were defined.

## Elevation & effects

- No local effect styles were defined.
- Observed effects include:
  - Black drop shadows with offsets ranging from `0px` to `144px` horizontally and `0px` to `283.59px` vertically.
  - `#000000` drop shadows for outlined text and gameplay controls.
  - `#0909095C` dark translucent framing.
  - `#F5F6E459` translucent light button surfaces.
  - Inner shadows for top highlights, bevels, and inset surfaces.
  - White inner highlights using `#FFFFFF`.
  - Layer blur is used on selected decorative highlights and icon elements.
- Use layered shadows and inner shadows to create raised, glossy, game-like surfaces. Do not flatten these surfaces into a single fill.

## Components

_None found in source._

## Screen patterns

### Thumbnail

- Two thumbnail frames were observed:
  - `808x632px`
  - `1920x1080px`
- Both use a title-focused composition with:
  - Large stacked `CLASH OF CLANS` display text.
  - A smaller `COMPONENTS` heading.
  - Decorative image assets and grouped artwork.
  - Small attribution labels.
- The larger frame scales the same composition proportionally.
- The title is centered near the top and uses outlined, highlighted display typography.

### Components reference screen

- Frame size: `2702.52x1216px`.
- A full-screen screenshot image acts as the background.
- Overlaid UI is arranged as separate HUD-like groups:
  - Compact square buttons with rounded corners and top highlight bands.
  - Dark framed numeric counters.
  - Horizontal resource/status bars with filled segments and gloss highlights.
  - Large orange action button with centered `Attack!` label.
  - Numeric badge with a red circular or rounded indicator.
  - Player or profile area with a small name label and prominent number badge.
  - Smaller `Join` action surface.
- Decorative artwork is frequently nested inside controls or positioned adjacent to them.
- Repeated square control geometry is approximately `110.87x110.87px`, with a `19.96px` outer radius and a `13.3px` highlight-band radius.
- The large orange action control is `215.53x215.53px` with a `19.4px` radius.
- Resource/status groups use dark outer frames, bright filled segments, white gloss strips, and large white numerals.

## Notes for implementers

- Treat the source as a visual reference, not a tokenized component library: reusable variables and component sets were not extracted.
- Preserve the bold Clash of Clans tone through heavy display fonts, black outlines, bright warm fills, bevel-like highlights, and layered shadows.
- Use the recorded font families exactly when available: `Supercell-Magic Magic` and `Cartel-Dem i Dem`.
- Use only the documented palette colors; translucent colors such as `#C46A15CC`, `#F5F6E459`, and `#0909095C` are intentional surface treatments.
- Keep UI text short and prominent. Numeric values should be large, white, outlined, and shadowed.
- Build controls as layered surfaces: outer body, top highlight band, icon or artwork layer, label layer, and shadow treatment.
- Decorative artwork is a major part of the visual identity; avoid replacing it with plain geometric placeholders when the source imagery is available.
- No spacing scale, component family, or local style reference was provided. Use the observed geometry only where matching the extracted screens.
