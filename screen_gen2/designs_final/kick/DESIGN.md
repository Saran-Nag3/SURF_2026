---
name: kick-coffee-website-community
source: Kick Coffee Website (Community)
kind: design-system-context
---

# kick - Design System

## Overview

Kick is a high-energy coffee brand system using Montserrat typography, warm accent colors, bold editorial headings, coffee imagery, and modular card and image components.

Source: Figma file “Kick Coffee Website (Community)”, covering Creative_brief, Styles and colors, components, and Final Design.

Primary desktop reference dimensions include 1280px-wide layouts. The Home page desktop frame is 1280x2500px.

## Design language

- Use Montserrat throughout.
- Headings use Montserrat SemiBold, weight 600.
- Body copy and captions use Montserrat Regular, weight 400.
- Use large, strongly hierarchical headings from 24px to 60px.
- Use warm yellow, orange, red, maroon, and purple accents against black and white.
- Use imagery prominently through hero, square, horizontal, and customer image components.
- CTA buttons use a yellow fill, black 1px stroke, 8px radius, and centered content.
- Text cards use white fills and fixed layouts with explicit padding and gaps.
- Text alignment is generally left-aligned, except `text_card_4`, which centers its content horizontally.

## Color palette

Named color tokens:

| Token | Value | Source usage |
|---|---|---:|
| `yellow` | `#FFFDD3` | 3 uses |
| `red` | `#E03E36` | 2 uses |
| `maroon` | `#B80D57` | 2 uses |
| `purple` | `#700961` | 1 use |
| `orange` | `#FF7C38` | 1 use |
| `black` | `#FFFDD3` | Named token; source value is the same as `yellow` |

Raw unstyled colors:

| Value | Uses |
|---|---:|
| `#000000` | 33 |
| `#D9D9D9` | 28 |
| `#FFFFFF` | 8 |
| `#9747FF` | 4 |

Implementation notes:

- Text and strokes are frequently shown as raw `#000000`.
- The named `black` token resolves to `#FFFDD3` in the extraction, creating a conflict with raw black usage. Preserve the named token and raw color as separate source values unless the design source is clarified.
- `#D9D9D9` is used as an image placeholder fill in extracted component previews.
- `#9747FF` is used for 1px component-set strokes.

## Type scale

Font family: `Montserrat`.

### Desktop

| Style | Weight | Size | Line height | Tracking | Usage |
|---|---:|---:|---|---:|---:|
| Desktop H1 | SemiBold 600 | 60px | auto | 0px | 2 uses |
| Desktop H2 | SemiBold 600 | 50px | auto | 0px | 2 uses |
| desktop H3 | SemiBold 600 | 40px | auto | 0px | 4 uses |
| Desktop H4 | SemiBold 600 | 30px | auto | 0px | 3 uses |
| desktop paragraph | Regular 400 | 20px | auto | 0px | 7 uses |
| Desktop Caption | Regular 400 | 15px | auto | 0px | 7 uses |

### Mobile

| Style | Weight | Size | Line height | Tracking | Usage |
|---|---:|---:|---|---:|---:|
| Mobile H1 | SemiBold 600 | 48px | auto | 0px | 1 use |
| Mobile H2 | SemiBold 600 | 40px | auto | 0px | 1 use |
| Mobile H3 | SemiBold 600 | 32px | auto | 0px | 1 use |
| Mobile H4 | SemiBold 600 | 24px | auto | 0px | 1 use |
| Mobile Paragraph | Regular 400 | 16px | auto | 0px | 1 use |
| Mobile Caption | Regular 400 | 12px | auto | 0px | 1 use |

Additional extracted text styles:

- Montserrat SemiBold, 16px: 3 raw unstyled uses.
- Montserrat Bold, 14px: used for the `CATEGORY` label in `text_card_2`.

## Spacing scale

_No spacing variables found in source._

Component spacing values:

- `cta_button`: padding `8px 28px 8px 28px`; gap `8px`.
- `text_card_4`: padding `23px 16px 23px 16px`; gap `14px`.
- `text_card_3`: padding `24px 16px 24px 16px`; gap `28px`.
- `text_card_2`: padding `24px 16px 24px 16px`; gap `19px`.
- `Text_card_1`: padding `24px 16px 24px 16px`; gap `27px`.

## Radius scale

No radius variables found.

Extracted radius values:

- `cta_button`: `8px`.
- Component-set containers: `5px`.
- Customer image rectangles: `316px`.

## Elevation & effects

_No local effect styles found in source._

No shadows or other elevation values were extracted.

## Components

Only use the following component families.

### `hero_master`

- Size: `1280x600px`.
- Fill: `#FFFFFF`.
- Variants:
  - `hero_beans`
  - `hero_bedroom`
  - `hero_campfire`
  - `hero_coffeeeshop`
  - `hero_many_lattes`
  - `hero_sunrise`
  - `hero_woman`

### `square_master`

- Size: `500x500px`.
- Fill: `#FFFFFF`.
- Variants:
  - `high_five`
  - `man_sips`
  - `metal_mugs`
  - `pour_over`
  - `spilling_beans`
  - `splash`
  - `steaming_mug`
  - `woman_sips`

### `horizontal_master`

- Size: `500x333.33px`.
- Fill: `#FFFFFF`.
- Variants:
  - `coffee_sign_lights`
  - `floppy_hat`
  - `laptop`
  - `latte_art`
  - `mountain_mugs`
  - `wodden_board`
  - `wodden_spoon`
  - `zoe_slosh`

### `customer_master`

- Size: `250x250px`.
- Fill: `#FFFFFF`.
- Variants:
  - `Customer_5`
  - `customer_1`
  - `customer_2`
  - `customer_3`
  - `customer_4`
- Customer image rectangles use radius `316px`.

### `cta_button`

- Size: `206x36px`.
- Horizontal layout.
- Padding: `8px 28px 8px 28px`.
- Gap: `8px`.
- Alignment: center/center.
- Width and height: fixed.
- Fill: `yellow` / `#FFFDD3`.
- Stroke: raw black `#000000`, `1px`.
- Radius: `8px`.
- Text: Montserrat SemiBold, `16px`.
- Example label: `Call to Action`.

### `Text_card_1`

- Size: `500x371px`.
- Vertical layout.
- Padding: `24px 16px 24px 16px`.
- Gap: `27px`.
- Width and height: fixed.
- Fill: `#FFFFFF`.
- Supported text styles:
  - Montserrat SemiBold, `16px`
  - `desktop paragraph`
  - `Desktop H4`
  - `desktop H3`
- Typical structure: H3, H4, paragraph, then `cta_button`.

### `text_card_2`

- Size: `500x393px`.
- Vertical layout.
- Padding: `24px 16px 24px 16px`.
- Gap: `19px`.
- Width and height: fixed.
- Fill: `#FFFFFF`.
- Typical structure:
  - Category label: Montserrat Bold, `14px`, maroon `#B80D57`.
  - H3: `desktop H3`.
  - Body: `desktop paragraph`.

### `text_card_3`

- Size: `500x389px`.
- Vertical layout.
- Padding: `24px 16px 24px 16px`.
- Gap: `28px`.
- Width and height: fixed.
- Fill: `#FFFFFF`.
- Typical structure:
  - H2: `Desktop H2`.
  - H3: `desktop H3`.
  - Body: `desktop paragraph`.

### `text_card_4`

- Size: `284x203px`.
- Vertical layout.
- Padding: `23px 16px 23px 16px`.
- Gap: `14px`.
- Alignment: minimum vertical alignment and centered horizontal alignment.
- Width and height: fixed.
- Fill: `#FFFFFF`.
- Typical structure:
  - H4: `Desktop H4`.
  - Body: `desktop paragraph`.
  - CTA text: Montserrat SemiBold, `16px`, red `#E03E36`.
- The CTA is text rather than the `cta_button` component.

## Screen patterns

- `Creative_brief / MacBook Air - 1`: 1280x832px white frame with a large Desktop H1 title, paragraph text, and a large coffee image.
- `Creative_brief / MacBook Air - 2`: 1280x832px white frame dominated by extended desktop paragraph copy.
- `Styles and colors`: typography specimen screens for desktop and mobile headings, paragraphs, captions, and named color swatches.
- `components`: component showcase containing hero imagery, square imagery, horizontal imagery, circular customer imagery, CTA buttons, and four text-card patterns.
- `Final Design / Home_page_desktop`: 1280x2500px white desktop home-page frame.

## Notes for implementers

- Use the named typography styles exactly where available; do not substitute typefaces.
- Preserve the desktop/mobile size distinctions:
  - H1: `60px` desktop, `48px` mobile.
  - H2: `50px` desktop, `40px` mobile.
  - H3: `40px` desktop, `32px` mobile.
  - H4: `30px` desktop, `24px` mobile.
  - Paragraph: `20px` desktop, `16px` mobile.
  - Caption: `15px` desktop, `12px` mobile.
- Use fixed component dimensions when reproducing the documented component families.
- Use `hero_master` for wide `1280x600px` hero imagery.
- Use `square_master` for `500x500px` imagery.
- Use `horizontal_master` for `500x333.33px` imagery.
- Use `customer_master` for `250x250px` customer imagery with circular treatment.
- Use `cta_button` for primary yellow actions; use `text_card_4`’s red text CTA treatment where that card pattern is intended.
- Keep card fills white `#FFFFFF`.
- Do not introduce spacing, radius, shadow, motion, or grid values not listed in this document.
- The source contains a color-token conflict: named `black` is `#FFFDD3`, while raw black usage is `#000000`. Treat raw `#000000` as the concrete black used in extracted text and strokes unless the source is clarified.
