---
name: freedom
source: App design of freedom details (Community)
kind: design-system-context
---

# freedom - Design System

## Overview

- Financial account app design from the Figma page `Financial account app design`.
- Primary frame size: `414x896px` (iPhone 11 Pro Max).
- Screens cover transaction history, payment details, summary, and a large texture background.
- No local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion variables, grid styles, or effect styles were found.
- Component families: `adult`, `total`.

## Design language

- Clean financial UI using white surfaces, black primary text, muted gray metadata, and blue-led visual accents.
- Transaction history uses compact typography, segmented period navigation, stat cards, payment-brand artwork, and elevated white cards.
- Payment details use a blue overlay/image backdrop with white text and stacked payment rows.
- Typography is exclusively Roboto in the extracted styles, with one additional observed `Inter Regular, 5px` text layer.
- Rounded cards use `10px` radius; a segmented indicator also uses a top-corner radius of `5px`.

## Color palette

Ranked by observed usage:

| Color | Uses | Primary use |
|---|---:|---|
| `#FFFFFF` | 84 | App backgrounds, cards, text on dark/image backgrounds, component fills |
| `#DCE5E5` | 48 | Light neutral UI elements |
| `#000000` | 40 | Primary text and dark iconography |
| `#139AD6` | 16 | Blue accent |
| `#263B80` | 16 | Deep blue accent |
| `#BCBCBC` | 16 | Metadata and secondary text |
| `#E5E5E5` | 11 | Inactive navigation and dividers |
| `#3C58BF` | 7 | Blue summary/payment backdrop |
| `#051244` | 4 | Deep blue |
| `#232C65` | 4 | Deep blue |
| `#293688` | 4 | Deep blue |
| `#F7981D` | 4 | Orange accent |
| `#009DDD` | 3 | Blue accent |
| `#0284CC` | 3 | Blue accent |
| `#0466B5` | 3 | Blue accent |
| `#07A9E2` | 3 | Light blue accent |
| `#323141` | 3 | Dark iconography |
| `#CB2026` | 3 | Red accent |
| `#D1094B` | 3 | Magenta-red accent |
| `#E52836` | 3 | Red accent |
| `#ED1C2E` | 3 | Red accent |
| `#FF2957` | 3 | Pink-red accent |
| `#FF5050` | 3 | Coral-red accent |
| `#FF8500` | 3 | Orange accent |
| `#FFB600` | 3 | Yellow-orange accent |

Image fills were also used, but their extracted colors are not available as palette tokens.

## Type scale

All sizes are in pixels.

| Size | Family | Weight | Uses |
|---:|---|---|---:|
| `20px` | Roboto | Bold | 5 |
| `16px` | Roboto | Bold | 11 |
| `16px` | Roboto | Regular | 6 |
| `15px` | Roboto | Bold | 5 |
| `15px` | Roboto | Light | 3 |
| `14px` | Roboto | Bold | 11 |
| `12px` | Roboto | Bold | 3 |
| `10px` | Roboto | Bold | 11 |
| `9px` | Roboto | Regular | 11 |
| `9px` | Roboto | Bold | 8 |
| `8px` | Roboto | Bold | 3 |

Additional observed text: `Inter Regular, 5px`.

Observed hierarchy:

- Page and section headings: `Roboto Bold, 20px`.
- Primary transaction titles: `Roboto Bold, 14px`.
- Main amounts and prominent numeric values: `Roboto Bold, 16px` or `Roboto Bold, 15px`.
- Body/payment labels: `Roboto Regular, 16px`.
- Supporting metadata: `Roboto Regular, 9px`, `Roboto Bold, 8px`, or `Roboto Bold, 10px`.
- Small period controls: `Roboto Bold, 12px`.

## Spacing scale

_None found in source._

## Radius scale

- `10px`: cards, payment rows, buttons, and elevated panels.
- `5/5/0/0px`: top corners of the active segmented indicator.
- `0/0/0/0px`: explicitly observed on grouped date labels.

## Elevation & effects

No local effect styles were found. Observed drop-shadow effects:

- Header surface: `6px` blur, offset `0 3px`.
- Transaction/stat cards: `15px` blur, offset `0 3px`.
- Payment-detail controls and rows: `20px` blur, offset `0 4px`.
- Payment-detail lower row: `20px` blur, offset `0 3px`.
- The payment backdrop includes a `90%` opacity blue overlay and a decorative image.
- A location vector was observed at `60%` opacity.
- A white vector/group on the payment backdrop uses a `20px` blur shadow with offset `0 4px`.

## Components

### `adult`

- Family: `adult`.
- Size: `34x18px`.
- Fill: `#FFFFFF`.
- Text: `Roboto Regular, 16px`.
- Used in payment quantity rows alongside quantity, multiplier, and price text.

### `total`

- Family: `total`.
- Size: `41x23px`.
- Fill: `#FFFFFF`.
- Used for the payment total label in the payment-detail layout.

## Screen patterns

### Transaction history

- Frame: `414x896px`, white background.
- Header surface: `414x134px`, white, with a drop shadow.
- Includes menu iconography, avatar/status elements, the heading `our transactions`, and a muted purchase/date subtitle.
- Period navigation uses `daily`, `weekly`, and `monthly`; `weekly` is active in black while inactive labels use `#E5E5E5`.
- Active period indicator is a blue bar with a rounded top edge.
- Includes a compact `view stats` button with adjacent chart iconography.
- Uses elevated white stat cards with `10px` radius.
- Transaction entries include compact date labels, transaction counts, and payment-brand artwork such as Maestro.

### Payment details

- Frame: `414x896px`.
- Top section uses a decorative image with a `#3C58BF` overlay at `90%` opacity.
- White navigation, location, address, quantity, price, and payment-summary content sits over the blue/image backdrop.
- Quantity rows combine a bold quantity, light `x`, `adult` component, and a price.
- A larger row includes an item total and the `total` component.
- Lower content uses stacked white rounded cards with drop shadows.
- Payment methods include Mastercard and PayPal decorative artwork.
- Transaction titles use `Roboto Bold, 14px`; secondary card details use `Roboto Regular, 9px`; amounts use `Roboto Bold, 16px`.

### Summary

- A summary screen includes the white heading `summery` in `Roboto Bold, 20px`.

### Texture background

- A standalone `Vectary texture` rectangle is `1769x1891px` and uses an image fill.

## Notes for implementers

- Use only the extracted palette colors listed above; image fills are assets rather than substitute color tokens.
- Preserve the `414x896px` mobile composition for the iPhone 11 Pro Max screens.
- Use Roboto with the listed weights and sizes; do not infer additional type sizes.
- Keep transaction and payment surfaces white with `10px` radius where the source shows rounded cards.
- Treat `adult` and `total` as the only extracted reusable component families.
- Reproduce shadows only where the source shows them, using the documented blur and offset values; no local effect token exists.
- Keep inactive period labels in `#E5E5E5` and primary transaction text in `#000000`.
- The source contains no extracted spacing scale, so do not introduce a named spacing-token system.
