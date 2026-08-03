---
name: vans-website-community
source: Vans Website (Community) / Page 1
kind: design-system-context
---

# vans - Design System

## Overview

- Single extracted screen: `Main`.
- Canvas size: `1728 × 1117px`.
- The screen presents a Vans product hero with:
  - Vans logo.
  - Decorative “off the wall” artwork.
  - Product image.
  - Product name, colorway, and price.
  - Product description.
  - Two caret navigation controls.
- No local variables, styles, components, grids, or reusable component geometry were found.

## Design language

- Brand-led editorial commerce presentation.
- Product imagery is the dominant visual element.
- Typography combines:
  - Oversized decorative display lettering for “off the wall”.
  - Bold product identification and pricing.
  - Wide supporting product-description copy.
- Black is the primary extracted color, with a secondary near-black token used sparingly.
- Decorative artwork is positioned as a large, low-opacity background element.
- Navigation uses simple caret controls contained in `48 × 48px` frames.

## Color palette

| Color | Usage |
|---|---:|
| `#000000` | 944 uses; primary text, vectors, and dominant UI color |
| `#231F20` | 5 uses; secondary near-black |

- No local paint styles or color variables were found.
- Image fills and other source colors were not promoted to reusable palette tokens.

## Type scale

| Role | Family | Weight / style | Size |
|---|---|---|---:|
| Decorative display | Southam Demo / SouthamDemo | Not specified | `117.51px` |
| Product heading | Helvetica | Bold | `28px` |
| Product description | Helvetica | Regular | `20px` |

- Decorative display text: `off the wall`.
- Product heading content: `OLD SKOOL 'BLK/RED/TRUE WHITE' ₹ 5,499`.
- Product description begins: `The first to bear the iconic side stripe, the Vans Packing T`.
- No local text styles were found.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- The product image has a layered drop-shadow treatment.
- Recorded shadow entries use black and the following source measurements:
  - `2.73px`, offset `0 3.07`
  - `6.57px`, offset `0 7.39`
  - `12.36px`, offset `0 13.91`
  - `22.06px`, offset `0 24.81`
  - `41.25px`, offset `0 46.41`
  - `98.74px`, offset `0 111.08`
- No reusable effect styles were found.
- A decorative background group has `10%` opacity and contains approximately `262` shapes.

## Components

_None found in source._

## Screen patterns

### Main product hero

- Canvas: `1728 × 1117px`.
- Product image rectangle: `935.57 × 538.73px`.
- Vans logo frame: `110 × 44.48px`.
- Decorative background group: `2122.38 × 192.71px`, positioned at the top-left.
- Display brand statement: `227 × 137.82px`.
- Product heading and price block: `494 × 96px`.
- Product description: `1445 × 46px`.
- Two caret navigation frames, each `48 × 48px`.
- Each caret vector measures approximately `19.87 × 33px`.

## Notes for implementers

- Treat this extraction as a single-screen visual reference rather than a complete component library.
- Preserve the visual hierarchy: decorative brand statement, large product image, bold product title and price, then supporting description.
- Use `#000000` as the primary implementation color and `#231F20` only where a secondary near-black is required.
- Maintain the recorded typography sizes exactly when recreating the hero.
- Preserve the product image’s layered shadow treatment and the decorative group’s `10%` opacity.
- Do not infer spacing, radius, grid, motion, or reusable component tokens; none were extracted.
- The source contains no component families or component specifications, so implementation should remain screen-specific unless additional Figma source data becomes available.
