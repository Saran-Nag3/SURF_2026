---
name: coinbase-cryptocurrency-mobile-app-kit-community
source: Coinbase CryptoCurrency Mobile App Kit (Community)
kind: design-system-context
---

# coinbase - Design System

## Overview

A cryptocurrency mobile app UI kit centered on dark surfaces, purple accents, white typography, and Poppins. The source contains a cover presentation and repeated iPhone mockup compositions. No local variables, text styles, spacing variables, radius variables, motion variables, effect styles, grid styles, or component families were found.

## Design language

- Dark, high-contrast visual foundation.
- Primary accent: purple `#6979F8`.
- Primary dark surface: `#121212`.
- White is used extensively for text and surfaces.
- Poppins is the only observed typeface.
- Presentation compositions use large display typography, centered or left-aligned layouts, and generous open space.
- Mockup screens are presented in paired left/right iPhone compositions on dark `#101010` backgrounds.

## Color palette

Ranked by observed raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 523 | Primary white, text, surfaces |
| `#FFFFFF80` | 422 | Translucent white |
| `#18191D` | 182 | Dark neutral |
| `#AA5555` | 182 | Muted red |
| `#55AA79` | 162 | Green |
| `#F8F8F8` | 109 | Light neutral |
| `#858487` | 98 | Gray |
| `#CDA92D` | 70 | Gold |
| `#0B0A0F` | 51 | Near-black |
| `#4671ED` | 41 | Blue |
| `#707A83` | 39 | Blue-gray |
| `#2D76F9` | 36 | Bright blue |
| `#32353C` | 32 | Dark gray |
| `#FFFFFFE8` | 31 | High-opacity white |
| `#000000` | 24 | Black |
| `#53565B` | 20 | Medium gray |
| `#DE6944` | 20 | Orange-red |
| `#D9D9D9` | 16 | Light gray |
| `#101010` | 13 | Mockup background |
| `#D9D9D933` | 12 | Translucent light gray |

Semantic tokens:

- `Primary/Brainstorming Black`: `#121212`
- `Primary/Brainstorming Purple`: `#6979F8`
- `Colors/Neutral/White`: `#FFFFFF`
- `white`: `#FFFFFF`

## Type scale

Typeface: Poppins.

Ranked observed styles:

| Family / weight | Size | Usage |
|---|---:|---:|
| Poppins SemiBold | 20px | 282 |
| Poppins Medium | 16px | 171 |
| Poppins Regular | 27px | 160 |
| Poppins Regular | 16px | 146 |
| Poppins Light | 11px | 90 |
| Poppins Regular | 20px | 63 |
| Poppins SemiBold | 16px | 63 |
| Poppins SemiBold | 11px | 55 |
| Poppins Regular | 14px | 30 |
| Poppins Medium | 20px | 26 |
| Poppins SemiBold | 19px | 26 |
| Poppins Medium | 12px | 20 |
| Poppins Medium | 14px | 14 |
| Poppins SemiBold | 28px | 14 |
| Poppins Bold | 12px | 10 |
| Poppins Medium | 24px | 8 |
| Poppins Regular | 13px | 8 |

Additional observed cover typography:

- Poppins Medium, 48px: cover heading.
- Poppins SemiBold, 90px: cover display mark.
- Poppins Medium, 21px: profile name.
- Poppins Medium, 15px: profile subtitle.
- Poppins SemiBold, 24px: cover accent text.

Hierarchy from largest to smallest:

`90px`, `48px`, `28px`, `27px`, `24px`, `21px`, `20px`, `19px`, `16px`, `15px`, `14px`, `13px`, `12px`, `11px`.

## Spacing scale

_None found in source._

Observed layout gaps and padding values are not defined as reusable spacing tokens. Extracted gaps include `70px`, `40px`, `10px`, `3px`, and `0px`.

## Radius scale

- `50px`: circular avatar treatment.

## Elevation & effects

Observed drop shadows:

- Mockup shadow: `100px` blur, offset `-40px 50px`.
- Cover decorative shadow: `41.65px` blur, offset `0 31.24px`.
- Cover decorative shadow: `20.83px` blur, offset `0 20.83px`.

No local effect styles were found.

## Components

_None found in source._

No component families or reusable component sets were extracted. Instances appear in mockup compositions, but they do not constitute a documented component library.

## Screen patterns

- **Cover / BM Cover**
  - Frame size: `1920x960px`.
  - Background: `#121212`.
  - Profile media block: `310x60px`, with a `60x60px` circular avatar, `10px` internal gap, and a `240x44px` content region.
  - Main headline group: `502px` wide.
  - Display mark: Poppins SemiBold, `90px`, purple `#6979F8`.
  - Main title: Poppins Medium, `48px`, white `#FFFFFF`.
  - Headline group gap: `40px`.
  - Decorative Figma and abstract shape artwork appears around the cover content.

- **Dribble shots / Mockup 3**
  - Each mockup frame: `6064x4048px`.
  - Background: `#101010`.
  - Two side-by-side mockups, each `1672x3298.22px`.
  - Each phone screen region: approximately `1414x3060.26px`.
  - Phone mockup shadow uses `100px` blur and offset `-40px 50px`.
  - Screen artwork is inserted as image content or vector content inside the phone frame.
  - Variants are labeled iPhone 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, and 22.

## Notes for implementers

- Use only the documented colors; prefer semantic tokens where available.
- Use Poppins for all text.
- Preserve the dark-first contrast strategy: dark backgrounds with white text and purple emphasis.
- Use the listed type sizes and weights exactly; do not infer line heights because none were provided.
- Do not invent a spacing system. Use observed gaps only where the composition requires them.
- Treat the `50px` radius as a circular avatar treatment, not as a general radius scale.
- No reusable components were documented. Build screen-specific structures rather than assuming undocumented component APIs.
- Mockup compositions are presentation layouts, not mobile screen dimensions. Keep the documented frame and mockup dimensions when reproducing those screens.
