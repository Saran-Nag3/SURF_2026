---
name: runway-fashion-slider-app-community
source: Runway Fashion Slider App (Community)
kind: design-system-context
---

# runway - Design System

## Overview

Mobile fashion slider interface designed for 430×932px iPhone 14 Plus screens. The experience combines a product-image slider, sorting and filtering controls, a category header, product information, pricing, favorites, and a bag indicator. Two primary slider states are shown: a compact product-price panel and a larger product-list panel.

## Design language

- Minimal monochrome interface dominated by #000000 text and controls on #FFFFFF surfaces.
- Use Inter throughout.
- Product imagery is arranged as overlapping vertical slides with radial shadow treatments.
- Navigation and utility controls use thin black strokes, compact iconography, and generous white space.
- Product titles use bold or semibold black typography.
- Borders use #ECECEC.
- The primary named gradient is a linear gradient from #303030 at 0% to #020202 at 100%.

## Color palette

| Color | Usage |
|---|---:|
| #000000 | 1041 uses; primary text, icons, strokes, and controls |
| #FFFFFF | 40 uses; main surfaces and backgrounds |
| #ECECEC | 24 uses; header and control borders |
| #D9D9D9 | 17 uses; slider indicator |
| #919191 | 16 uses |
| #041511 | 14 uses |
| #303030 → #020202 | Green Gradient; linear gradient, 4 uses |

## Type scale

Font family: Inter.

| Size | Weight/style | Usage |
|---:|---|---:|
| 20px | Bold | 11 uses; product price |
| 18px | Bold | 15 uses; category title |
| 16px | Bold | 80 uses |
| 16px | SemiBold | 74 uses; product price text token, 6 uses |
| 16px | Medium | 29 uses |
| 16px | Thin | 15 uses; status-bar time |
| 14px | Medium | 33 uses |
| 14px | SemiBold | 29 uses; sort and filter labels |
| 13.44px | SemiBold | 72 uses |
| 11.76px | Medium | 72 uses |
| 11.09px | SemiBold | 14 uses |
| 11px | SemiBold | 15 uses |
| 10.74px | Medium | 9 uses |
| 10.74px | Bold | 8 uses |
| 10.74px | SemiBold | 3 uses |
| 10.49px | Bold | 7 uses |
| 10.49px | SemiBold | 3 uses |
| 10px | SemiBold | 4 uses |
| 9.7px | Medium | 12 uses |
| 9.4px | Medium | 3 uses |
| 9.02px | SemiBold | 24 uses |
| 7.9px | Medium | 24 uses |

Product Price Text: Inter SemiBold, 16px, tracking 0px, line height auto.

## Spacing scale

_None found in source._

Observed layout spacing values include 5px, 7px, 10px, 12px, 15px, 16px, 20px, 23px, 34px, 36px, 67px, and 80px.

## Radius scale

No radius tokens were defined. Observed radii:

- 1.33px
- 2.67px
- 6px
- 20px
- 30px
- 50px

## Elevation & effects

- Product-price panels use a drop shadow with 30px blur and offset 0 4.
- Product image slides use radial gradient shadow treatments.
- The named Green Gradient is linear: #303030 at 0% to #020202 at 100%.
- No local effect styles were defined.

## Components

_None found in source._

No component families or component geometry were extracted. Repeated interface patterns include:

- Top navigation bar: 430×55px, horizontal padding 20px, 12px gap, white fill, and #ECECEC stroke.
- Sorting and filtering bar: 428×52px, horizontal padding 20px, white fill, and #ECECEC stroke.
- Product-price panel: 428×98px or 430×138px, white fill.
- Heart/favorite control: 18×18px or 20×20px heart icon.
- Bag icon: 24×24px with a quantity badge.
- Slider indicator: 42×6px with 6px radius.

## Screen patterns

- **Design / iPhone 14 Plus - 20:** 430×932px white screen with 20px outer radius. Includes a status bar, 55px category header, 52px sorting/filter bar, stacked fashion imagery, and a 98px bottom product-price panel.
- **Design / iPhone 14 Plus - 8:** 430×932px white screen with status bar, category header, sorting/filter bar, overlapping product imagery, and a 138px bottom product list panel with a 42×6px slider indicator.
- **Design / iPhone 14 Plus - 17:** 430×932px white screen with the same status bar, category header, sorting/filter bar, overlapping product imagery, and a bottom slider indicator.
- Product imagery uses vertical rectangles of varying sizes, centered within frames, with radial shadow ellipses layered near the top.
- The category header places a 24×24px back arrow at the left, “Men” centered, and a 24×24px bag icon at the right.
- The sorting/filter bar places “Sort by” on the left and “Filter,” grid, and users-group controls on the right.
- Product information uses bold or semibold Inter, black text, and white panels. Example product prices include £30 and £35.

## Notes for implementers

- Build for a 430×932px mobile viewport.
- Keep the interface monochrome using only the documented palette values.
- Use #000000 for primary text, icons, and strokes; use #FFFFFF for surfaces.
- Use #ECECEC for horizontal header and control-bar borders.
- Use Inter with the documented weights and sizes; avoid introducing additional typefaces or sizes.
- Preserve the 20px screen radius and the 20px radius on the expanded bottom panel.
- Maintain 20px horizontal padding in the top navigation and sorting/filter bars.
- Use white product-information panels with drop-shadow elevation.
- Treat the product imagery as layered vertical slides with radial shadow ellipses rather than flat cards.
- No spacing, radius, motion, grid, or component tokens were formally defined; use the observed values only.
