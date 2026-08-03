---
name: domino-s-apple-watch-app-concept-community
source: Domino's Apple Watch App Concept (Community)
kind: design-system-context
---

# domino-s - Design System

## Overview

Domino’s Apple Watch ordering concept across Cover Page, Prototype, and Support pages. The prototype uses compact 198px-wide watch screens with black backgrounds, white SF Pro text, blue action accents, dark cards, rounded controls, pizza imagery, and a Domino’s logo loading/start sequence.

## Design language

- Compact Apple Watch UI optimized for 198px-wide screens.
- Predominantly black backgrounds with white primary text.
- Domino’s blue is used for navigation labels, links, selected states, and primary actions.
- Dark gray cards use rounded corners and compact stacked layouts.
- Pizza category cards use distinct saturated colors.
- Use circular food imagery with drop shadows.
- Use high-contrast, short labels and large touch targets relative to the watch viewport.
- Headers contain a blue screen title, circular blue back button, and white `09:41` time.
- Primary actions are blue rounded rectangles with white text.
- Product selection flows use stacked cards for pizza, size, crust, address, and checkout choices.

## Color palette

Ranked by source usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 296 | Primary text, light surfaces, logo, controls |
| `#000000` | 60 | Watch-screen backgrounds, headers, dark surfaces |
| `#2094FA` | 56 | Primary actions, links, selected states, navigation labels |
| `#232323` | 38 | Product and content cards |
| `#303030` | 21 | Unselected option cards |
| `#0177A8` | 16 | Past Orders category card |
| `#0A9C0A` | 16 | Veg Pizza category card |
| `#0B31B8` | 16 | Pizza category card |
| `#B9B9B9` | 16 | Secondary text and metadata |
| `#ABABAB` | 15 | Secondary option text |
| `#BEBEBE` | 15 | Neutral UI detail |
| `#FBBC05` | 15 | Pizza category card |
| `#FF0000` | 9 | Add controls |
| `#69696980` | 8 | Translucent neutral detail |
| `#696969` | 7 | Dividers and secondary strokes |
| `#FFAB2C` | 6 | Accent category color |
| `#EBEBEB` | 5 | Light neutral detail |
| `#DFDFDF` | 4 | Light neutral detail |

Use `#0177A8` as the primary teal rather than the near-identical lower-usage `#0176A6`.

## Type scale

### SF Pro

- `20px`, Medium — app branding/title text.
- `19.55px`, Medium — plus control.
- `18.44px`, Bold or Regular — large text.
- `18.14px`, Semibold — primary option labels and actions.
- `17.37px`, Medium — medium-large text.
- `16.38px`, Medium — prices.
- `15.85px`, Bold — product names.
- `15px`, Medium — headers and time.
- `14.38px`, Bold — category labels.
- `14.07px`, Bold — category labels.
- `13.36px`, Light — small supporting text.
- `12.5px`, Light or Regular — supporting text and Calling component text.
- `10.65px`, Regular — small metadata.
- `9.92px`, Regular — small metadata.
- `8.91px`, Medium — compact labels.
- `8.64px`, Medium — `More Info` and pricing metadata.
- `8.51px`, Medium — product descriptions and ratings.
- `7.5px`, Medium — micro labels.
- `6.64px`, Medium — compact descriptions and ratings.

### Other source fonts

- Lato Medium, `40px` — large cover-page title.
- Satoshi Regular, `35.93px` — cover-page supporting heading.
- Satoshi Black, `91.15px` — cover-page display heading.
- Satoshi Bold, `3.95px` — trademark text.
- Inter Bold, `14.57px` — start button label.

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- `0px` — unrounded groups and containers.
- `5.74px` — compact add control.
- `8.61px` — expanded add control.
- `10px` — size/crust/address option cards.
- `14.07px` — home category cards.
- `14.54px` — product and selection cards.
- `30px` — cover logo tile.
- `38px` — start button.
- `40px` — primary action button.
- `100.31px` — cover-page image.

## Elevation & effects

- Circular food imagery uses drop shadows with `9.38px` or `9.69px` blur/size and offsets of `2.93px 4.69px` or `3.03px 4.85px`.
- Expanded product imagery uses a drop shadow with `10.91px` and offsets of `3.41px 5.45px`.
- Cover logo tile uses a drop shadow with `52.8px` and vertical offset `7.2px`.
- Pizza Mania text uses a drop shadow with `8px` and vertical offset `2px`.
- Logo loading states use opacity values of `50%`, `25%`, `12%`, and `0%`.

## Components

### Calling

- Family: `Calling`
- Size: `40x15px`
- Fill: `#FFFFFF`
- Text: SF Pro Light, `12.5px`
- Variants: `Default`, `Variant2`, `Variant3`, `Variant4`

### Processing

- Family: `Processing`
- Size: `83x83px`
- Variants: `Default`, `Variant2`, `Variant3`, `Variant4`, `Variant5`

### Reusable observed UI patterns

- **Watch header:** black header, blue title in SF Pro Medium `15px`, blue circular back button `18x18px`, white `09:41` in SF Pro Medium `15px`.
- **Category card:** approximately `177x67.99px`; colored rounded rectangle approximately `177x49.23px` with `14.07px` radius; circular image approximately `63.3x63.3px`; white SF Pro Bold `14.07px` label.
- **Product card:** approximately `184x129.21px`; dark `#232323` body approximately `184x102.34px` with `14.54px` radius; circular image approximately `65.43x65.43px`; red add control approximately `20.67x20.67px` with `5.74px` radius.
- **Option card:** `165x53px`, `10px` radius, usually `#303030`; selected option uses `#2094FA`.
- **Primary action:** blue `#2094FA` rounded rectangle with white text.
- **Back button:** blue `18x18px` circle with a black arrow.
- **Add/remove control:** red rounded rectangle with white plus or delete icon.

## Screen patterns

- **Cover Page / Thumbnail:** Large white `1920x1135.2px` composition with Domino’s logo, large cover title, supporting heading, blue accent bar, and large watch imagery.
- **Prototype / Logo Screen:** `198x242px` black screen with centered Domino’s logo animation using decreasing opacity, followed by a blue `165x44px` start button with `38px` radius.
- **Prototype / Home Screen:** `198x512px` black home screen with Domino’s title, `09:41` header, and vertically stacked colored category cards.
- **Prototype / Veg Pizza:** `198x595px` black product-list screen with a `Veg` header and stacked pizza product cards.
- **Prototype / Margherita:** `198x242px` product-detail screen with dark product card, pizza image, quantity control, description, and blue `Choose Size` action.
- **Prototype / Size and Size 2:** `198x242px` selection screen with dark rounded base and three stacked size cards; selected state changes the card to `#2094FA`.
- **Prototype / Crust:** `198x242px` selection screen with three stacked crust options.
- **Prototype / Address:** `198x242px` selection screen using the same dark rounded base and stacked option-card pattern.
- **Support:** A separate source page exists, but no additional summarized screen structure is provided in the extraction.

## Notes for implementers

- Prefer the listed source colors only; do not introduce additional palette values.
- Use SF Pro for the watch prototype unless a specific source pattern calls for Lato, Satoshi, or Inter.
- Preserve the compact `198px` watch viewport proportions for prototype screens.
- Keep screen backgrounds and headers black.
- Use `#2094FA` consistently for primary interaction, selected options, navigation titles, and links.
- Use `#232323` for product surfaces and `#303030` for unselected choices.
- Keep product imagery circular and elevated with the observed drop-shadow treatment.
- Use the observed rounded radii rather than introducing new values.
- Treat image fills and logo artwork as decorative assets; their source extraction provides hashes but not reusable image content.
- Do not infer local variables, named text styles, spacing tokens, radius tokens, motion tokens, grid styles, or effect styles; none were found in source.
