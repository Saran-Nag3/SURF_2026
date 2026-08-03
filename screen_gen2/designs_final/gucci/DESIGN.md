---
name: gucci-beauty-wishes-design-system-pixelenius-com-community
source: Gucci Beauty Wishes • Design System | Pixelenius.com (Community)
kind: design-system-context
---

# gucci - Design System

## Overview

Gucci Beauty Wishes is a dark, interactive beauty experience with image-led website screens, decorative SVG graphics, cyan navigation accents, and compact informational panels. The extracted source contains eight Figma pages covering website screens, colors, icons, components, typography, acknowledgements, and a thumbnail.

Primary website canvas: `1440×810px`.

## Design language

- Dark interface surfaces use near-black blue-gray tones.
- White is the dominant text and surface color.
- Cyan is used for interactive labels, chevrons, decorative lines, and gradients.
- Gold and blue are secondary accent colors.
- Website layouts are full-viewport and image-led.
- Navigation is centered within a three-part header structure.
- Footer navigation is compact, 24px high, with a dark navy background.
- Decorative SVGs and masked shapes are prominent in the website and component examples.
- Color and component documentation uses dark cards with 4px corners, 12px internal padding, and 8px content gaps.

## Color palette

Ranked by extracted usage:

| Color | Usage |
|---|---:|
| `#FFFFFF` | 115 |
| `#0A0F14` | 23 |
| `#BA9D44` | 20 |
| `#3CBBDE` | 15 |
| `#141B22` | 14 |
| `#202B35` | 14 |
| `#000000` | 9 |
| `#010614` | 4 |
| `#2242E9` | 4 |
| `#283EAE` | 4 |
| `#FFFFFF1A` | 4 |
| `#233FD0` | 3 |
| `#36495E` | 3 |
| `#BBBCC4` | 3 |

Observed usage:

- `#FFFFFF`: primary text, light surfaces, and decorative fills.
- `#0A0F14`: dark content panels, icon areas, and backgrounds.
- `#141B22`: documentation cards.
- `#202B35`: documentation card strokes.
- `#010614`: footer navigation background.
- `#3CBBDE`: interactive text, glow effects, lines, and decorative gradients.
- `#36495E`: muted typography labels.
- `#BA9D44`, `#2242E9`, `#283EAE`, `#233FD0`, `#BBBCC4`: secondary palette accents.

## Type scale

Extracted typefaces and sizes:

| Typeface | Weight/style | Size | Usage count |
|---|---|---:|---:|
| PP NeueBit | Bold | 54px | 3 |
| PP Mondwest | Regular | 40px | 4 |
| PP NeueBit | Bold | 18px | 4 |
| Helvetica Now Display | Regular | 16px | 22 |
| Inter | Regular | 14px | 5 |
| Inter | Regular | 12px | 4 |
| Inter | Regular | 11.62px | 3 |
| Inter | Regular | 11.25px | 6 |

Additional observed text:

- Inter Regular, `20px`, used for the preloader heading.
- `54px` PP NeueBit Bold is used for color-section headings.
- Helvetica Now Display Regular, `16px`, is used for documentation labels and card headings.
- Inter Regular, `14px`, is used for interactive labels such as “Start the experience” and “Details”.
- Inter Regular, `11.25px`, is used for footer links.

Documented font-scale examples:

- Titre 1: `20px`
- Titre 2: `14px`
- Titre 3: `12px`

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- `4px`: documentation cards, color swatches, icon panels, and typography panels.
- `77px`: circular decorative component frame.

No local radius variables were extracted.

## Elevation & effects

- No local effect styles were extracted.
- Drop-shadow effects are used on the preloader heading with `0px` offset.
- Interactive cyan labels use a drop-shadow with `2.1px` offset.
- A circular decorative component uses a `1px` gradient stroke.
- Decorative and interactive lines use linear gradients.
- Website product content uses masked overlays and top/bottom gradient fades.
- No elevation scale was extracted.

## Components

_None found in source._

## Screen patterns

- **Website / Home**
  - Full viewport at `1440×810px`.
  - Image-led canvas fills the page.
  - Header height: `76px`.
  - Main content height: `734px`.
  - Footer height: `24px`.
  - Header uses left, centered, and right navigation regions.
  - Footer contains centered Privacy Policy and Cookie Settings links.
  - Home content includes navigation controls and a centered preloader state.

- **Website / Products**
  - Full viewport at `1440×810px`.
  - Image-led canvas with a `1440×734px` main area.
  - Header and footer match the Home screen structure.
  - Right-aligned product overlay measures approximately `443.83×622.26px`.
  - Product overlay uses masking, decorative SVG shapes, a header region, and gradient fades.

- **Colors**
  - Color documentation is organized into Gray, Blue, and Green sections.
  - Section headings use PP NeueBit Bold at `54px`.
  - Standard color cards measure `324×256px`.
  - Cards use `12px` padding, `8px` internal gaps, `4px` radius, `#141B22` fill, and `#202B35` 1px stroke.
  - Swatches measure `300×200px` and use a `4px` radius.
  - Color cards are arranged horizontally with a `20px` gap.

- **Icons**
  - Icon documentation card measures `526×306px`.
  - Card uses `12px` padding, `8px` gap, `4px` radius, `#141B22` fill, and `#202B35` 1px stroke.
  - Icon preview area measures `502×250px`, uses a `4px` radius, and has a `#0A0F14` fill.

- **Typography**
  - Typography documentation uses the same dark card treatment.
  - Font scale panel measures `324×232px`.
  - Inner scale content uses `40px` horizontal padding and `10px` gaps.
  - Typography specimen panel measures `200×160px`; its inner area uses `40px` padding and a `20px` gap.

- **Thanks / Merci**
  - Acknowledgement screen uses a `602×377px` dark panel.
  - Panel uses `80px` padding and a `44px` vertical gap.

## Notes for implementers

- Use only the extracted palette listed above.
- Preserve the visual hierarchy of white primary text, dark blue-black surfaces, and cyan interactive accents.
- Build website screens around a `1440×810px` viewport model, with a `76px` header and `24px` footer where applicable.
- Keep documentation cards at `4px` radius with `#141B22` surfaces and `#202B35` strokes.
- Use `12px` card padding and `8px` internal content gaps for color, icon, typography, and component documentation layouts.
- Use image backgrounds and decorative SVG layers as structural parts of the website experience rather than treating them as optional decoration.
- Preserve centered navigation alignment and compact footer link treatment.
- No local variables, text styles, spacing styles, radius styles, effect styles, or component sets were extracted.
