---
name: masterclass
source: Masterclass - Variables & Prototype avançado [Config 2023] By Lucas marte (Community)
kind: design-system-context
---

# masterclass - Design System

## Overview

A compact interface system demonstrating:
- Like interaction with a count.
- Shopping-cart quantity and purchase summary.
- Light/dark mode selection.
- Photo visibility control.
- Promotional course content.
- Product information with a primary action.

No local variable collections, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Primary visual direction: clean, high-contrast interfaces using white surfaces, black text, and vivid periwinkle accents.
- Typography: Inter across regular, medium, semibold, and bold weights.
- Layouts use fixed-size frames, horizontal and vertical auto-layout patterns, centered controls, and space-between summary rows.
- Repeated interaction patterns include pill-shaped toggles and actions, rounded cards, quantity controls, and promotional call-to-action blocks.

## Color palette

Ranked by raw usage where counts are available:

| Token / role | Color | Usage |
|---|---|---:|
| Black | `#000000` | 15 |
| White | `#FFFFFF` | 15 |
| Accent blue | `#7579FF` | 3 |
| Neutral gray | `#D9D9D9` | 3 |
| Background 2 | `#696CE0` | 1 |

## Type scale

Font family: Inter.

| Size | Weight/style | Usage |
|---:|---|---|
| 16px | Regular | Product description and action text |
| 16.97px | Medium | Promotional labels and action text |
| 18px | Regular / SemiBold | Like count and quantity label |
| 19.22px | Regular / Bold | Raw typography token; totals, prices, toggle labels, and quantity value |
| 20px | Bold | Product title |
| 20.57px | Regular | Photo-control label |
| 22.42px | SemiBold | Quantity decrement and increment controls |
| 24px | SemiBold / Bold | Purchase-summary heading and promotional heading |

Raw typography token: Inter Regular, 19.22px, 8 uses.

## Spacing scale

Values found in padding, gaps, and layout offsets:

`0px`, `4.81px`, `5px`, `6.41px`, `8px`, `10px`, `13px`, `16px`, `16.02px`, `18.86px`, `20px`, `35.24px`, `73.68px`.

Notable layout patterns:
- Quantity control gap: `13px`.
- Card content padding: `20px`.
- Quantity summary row padding: `16.02px` horizontal and `13px` vertical.
- Promotional control gap: `18.86px`.
- Summary rows use `73.68px` separation between label and value groups.

## Radius scale

Values found:

`5px`, `8.57px`, `10px`, `16.02px`, `100px`, `160.17px`.

Usage:
- `5px`: quantity value container.
- `8.57px`: photo-control square.
- `10px`: product card and top card image corners.
- `16.02px`: shopping-cart card and quantity summary surface.
- `100px`: rounded product action.
- `160.17px`: mode toggle track.

## Elevation & effects

_None found in source._

## Components

### Ellipse 2

- Size: `72px × 72px`.
- Fill: `#FFFFFF`.

### contador

- Size: `88px × 33px`.
- Horizontal layout.
- Gap: `13px`.
- Alignment: center / center.
- Padding: `0px`.
- Sizing: fixed width and fixed height.
- Content pattern:
  - Decrement control using Inter SemiBold, `22.42px`.
  - Quantity value inside a `35px × 33px` white container with `5px` padding and `5px` radius, using Inter Bold, `19.22px`.
  - Increment control using Inter SemiBold, `22.42px`.

## Screen patterns

### Like

- White `234px × 273px` surface.
- Horizontal like control: `49px × 24px`.
- Includes a `24px × 24px` icon and a black count displayed in Inter Regular, `18px`.

### Carrinho de compras

- White `395.63px × 370px` card with `16.02px` radius.
- Quantity summary surface: `288px × 65.03px`, with `16.02px` horizontal and `13px` vertical padding, `16.02px` radius, and `16.02px` spacing.
- Heading: “Resumo da compra”, Inter SemiBold, `24px`.
- Subtotal and total rows use space-between alignment.
- Currency values use Inter Regular, `19.22px`.
- Includes a `1.6px` divider line.

### Dark and Light

- `395.63px × 370px` blue mode-selection surface.
- Horizontal mode control: `213.94px × 30.43px`, with `35.24px` gap and centered alignment.
- “Light” and “Dark” labels use Inter Regular, `19.22px`.
- Toggle track: `54.46px × 30.43px`, with `4.81px` vertical and `6.41px` horizontal padding and `160.17px` radius.
- Toggle knob: `20.82px × 20.82px`, using `Background 2`.

### Show photo

- `395.63px × 370px` rounded display surface with `16.02px` radius.
- Photo-control row: `175.86px × 36px`, with `18.86px` gap.
- Includes a `36px × 36px` rounded square, “Mostrar foto” label in Inter Regular, `20.57px`, and a `17.5px × 14.5px` icon.
- Supporting circular image placeholder: `99px × 99px`.

### Dark mode product card

- `388px × 380px` card with `10px` radius.
- Image area: `388px × 221px`, with `10px` top corner radii.
- Content area: `388px × 159px`, with `20px` padding and `16px` vertical gap.
- Product title: Inter Bold, `20px`.
- Description: Inter Regular, `16px`.
- Primary action: `139px × 44px`, with `10px` vertical and `20px` horizontal padding, `10px` gap, and `100px` radius.
- Action label: Inter Regular, `16px`.

### Promotional course banner

- Composite promotional layout sized `1218px × 252px`.
- Includes an image region sized `891px × 184px` and a blue promotional region sized `321px × 184px`.
- Promotional labels use Inter Medium, `16.97px`.
- Promotional heading uses Inter Bold, `24px`.
- Course action block: `245px × 50px`, with a white surface and blue label/icon treatment.
- Action label uses Inter Medium, `16.97px`.

## Notes for implementers

- Use only the documented palette values for new UI: `#000000`, `#696CE0`, `#7579FF`, `#D9D9D9`, and `#FFFFFF`.
- Prefer Inter and select from the documented weights and sizes rather than introducing new typography tokens.
- Preserve the distinction between `#696CE0` as the named “Background 2” token and `#7579FF` as the recurring blue surface/accent.
- Use fixed dimensions only when reproducing the extracted examples; otherwise preserve their spacing, alignment, and radius relationships.
- Use `contador` for quantity adjustment patterns and keep its `13px` gap and `88px × 33px` dimensions.
- For cards and controls, apply the documented radius values according to their demonstrated role.
- Keep summary rows space-between aligned, with grouped currency values and consistent `8px` internal currency spacing.
