---
name: hp-webiste-ui-community
source: hp webiste Ui (Community), Page 1
kind: design-system-context
---

# hp - Design System

## Overview

- Single-page HP product landing screen.
- Primary subject: HP Spectre AIR x360 laptop.
- Layout combines a full-screen product hero, navigation, product imagery, specifications, color selection, price, and add-to-cart action.
- No local variables, styles, component sets, grid styles, or motion tokens were found.

## Design language

- Dark, premium product presentation using full-screen imagery and dark overlays.
- White and translucent-white navigation and content typography.
- Product information is arranged as a hero composition with large product imagery and supporting details.
- Navigation labels: Home, Shop, Business, Support, Search, Login.
- Product controls include color swatches, rating marks, price, and an add-to-cart button.
- Typography uses Inter for navigation and product information, with Barlow for price and call-to-action text.

## Color palette

Ranked by usage in the source:

| Color | Usage |
|---|---:|
| `#FFFFFF` | 10 |
| `#FFFFFF73` | 6 |
| `#000000` | 5 |
| `#F8F8F873` | 3 |

- `#FFFFFF`: primary light text, icon backgrounds, and light graphic elements.
- `#FFFFFF73`: translucent navigation text.
- `#F8F8F873`: translucent icon and vector strokes.
- `#000000`: dark graphic fills and vector elements.
- The source also contains gradients, image fills, and additional unstyled colors that are not included in the approved palette above.

## Type scale

Observed text styles:

| Font | Weight | Size |
|---|---|---:|
| Inter | Regular | 28px |
| Inter | SemiBold | 27px |
| Inter | Bold | 56.58px |
| Barlow | Bold | 48px |
| Barlow | Bold | 24px |

Usage:

- Navigation labels use Inter Regular at 28px.
- Product title uses Inter Bold at 56.58px.
- Product specification text uses Inter SemiBold at 27px.
- Price uses Barlow Bold at 48px.
- Add-to-cart label uses Barlow Bold at 24px.

## Spacing scale

_None found in source._

## Radius scale

- `0px`: Group 1.
- `55px`: Add-to-cart button container.

## Elevation & effects

- Product imagery includes a drop shadow with a `0px` horizontal offset and `4px` vertical offset.
- A separate ellipse graphic includes a drop shadow with a `0px` horizontal offset and `4px` vertical offset.
- Hero backgrounds use radial gradient overlays.
- A button container uses a radial gradient stroke with a `1px` stroke width.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

### Full-screen product hero

- Screen size represented by a `2560x1440px` background rectangle.
- Uses full-screen product imagery with dark radial overlays.
- Includes a large laptop image, secondary product image, logo treatment, navigation, and product details.
- Main product title: “HP Spectre AIR x360”.
- Supporting specification text includes Windows 11 Home, 12th Generation Intel Core i7, Intel Iris Xe Graphics, 16 GB memory, 1 TB SSD storage, and a 13.3-inch diagonal 2.8K touch display.
- Price is displayed as “₹54,990”.
- Includes an “ADD TO CART” action.

### Navigation

- Six text links: Home, Shop, Business, Support, Search, Login.
- Navigation text uses translucent white.
- Search and login are represented by 50x50px icon frames.

### Product options

- Color selector is labeled “COLOR”.
- Three circular color swatches are shown with dimensions of 36x36px, 36x36px, and 50x50px.
- A row of five small rating-like vector marks appears beside the color selector.

### Product imagery

- Primary product image: `1996x1310px`.
- Secondary product image: `481x293.11px`.
- Additional image blocks: `313x234.89px` and `350.82x263.27px`.
- HP logo image is represented at `233x233px`.
- A star icon frame is represented at `50x50px`.

## Notes for implementers

- Preserve the premium, dark hero composition and prioritize product imagery.
- Use the approved palette only: `#FFFFFF`, `#FFFFFF73`, `#000000`, and `#F8F8F873`.
- Use Inter for navigation and product information; use Barlow for price and add-to-cart text.
- Keep the product title visually dominant at 56.58px.
- Treat the add-to-cart control as a rounded pill with a 55px radius and 74px height.
- Do not infer reusable component APIs or additional design tokens; no component families or local token collections were extracted.
- Image assets are source-specific and identified only by their extracted image references.
