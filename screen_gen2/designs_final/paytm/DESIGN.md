---
name: paytm-app-destop-view-community
source: Paytm APP ( Destop view) (Community) — Page 1
kind: design-system-context
---

# paytm - Design System

## Overview

- Source: Paytm APP ( Destop view) (Community), Page 1.
- Primary screen: `paytm`, 1360px wide and 10818px high.
- The page is a long-form Paytm desktop marketing experience.
- Visual structure combines a white navigation header, cyan and dark-blue service bands, alternating white and light-gray promotional sections, image-led content, rounded cards, and pill-shaped calls to action.
- No local variables, styles, component sets, spacing tokens, radius tokens, grid styles, motion tokens, or effect styles were found.

## Design language

- Brand-led fintech marketing aesthetic using cyan, dark blue, white, black, and light gray.
- Use Inter throughout.
- Primary service navigation uses white text on cyan or dark-blue backgrounds.
- Marketing sections use large black headings with supporting black body copy.
- Calls to action are dark-blue or black pill buttons with white text.
- Service tiles use rounded corners, centered imagery, white labels, and trailing `>` indicators.
- Promotional cards use white surfaces with large corner radii and image content.
- Layouts alternate between text-and-image compositions and full-width service bands.
- Decorative imagery and logos are used extensively; image assets are present in the source but are represented as image fills rather than reusable component definitions.

## Color palette

Colors are ranked by recorded usage. Near-identical cyan values are consolidated into one cyan role.

| Role | Color | Recorded usage |
|---|---|---:|
| Primary surface | `#FFFFFF` | 103 |
| Primary text / dark surface | `#000000` | 66 |
| Cyan brand accent | `#01BBF5` | 12 |
| Secondary text | `#939090` | 12 |
| Light neutral surface | `#F5F7FA` | 10 |
| Deep blue brand surface | `#0044AA` | 8 |
| Navy CTA / accent | `#203569` | 7 |

- White is used for the page background, card surfaces, navigation surfaces, and text on colored backgrounds.
- Black is used primarily for headings and body copy, and also appears as a dark download CTA surface.
- Cyan is used for the recharge and bill-payment service band and related service tiles.
- Deep blue is used for the book-and-buy service band and tiles.
- Navy is used for `Learn more >` pill buttons.
- Light neutral gray is used for alternating promotional backgrounds.

## Type scale

All extracted typography uses Inter.

| Size | Weights / styles | Recorded usage |
|---:|---|---:|
| 12px | Medium | 3 |
| 15px | Medium, SemiBold | 28 |
| 17px | Medium, SemiBold, Bold | 40 |
| 18px | Medium, Bold | 22 |
| 20px | Medium, SemiBold | 15 |
| 26px | Medium | 4 |
| 36px | SemiBold | 6 |
| 40px | Medium, SemiBold | 8 |
| 48px | Bold | usage not recorded |
| 54px | Bold | usage not recorded |

Text hierarchy:

- `54px Inter Bold`: largest hero heading, such as `India's Most-loved Payments App`.
- `48px Inter Bold`: major section heading, such as `Financial Services by Paytm` and `Paytm Payment Instruments`.
- `40px Inter SemiBold`: large promotional headings.
- `40px Inter Medium`: large supporting headings.
- `36px Inter SemiBold`: service and promotional headings.
- `36px Inter Bold`: service-band headings.
- `26px Inter Medium`: medium display text.
- `20px Inter Medium` or `SemiBold`: supporting promotional copy.
- `18px Inter Bold` and `Medium`: book-and-buy tile labels.
- `17px Inter Medium`, `SemiBold`, or `Bold`: navigation, supporting copy, and CTA labels.
- `15px Inter Medium` or `SemiBold`: service tile labels and supporting copy.
- `12px Inter Medium`: small sign-in text.

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- `17px`: cyan service tiles and one blue tile.
- `32px`: pill-shaped CTA buttons.
- `33px`: white promotional cards.
- `41px`: large payment-instrument card.
- `0px`: square section containers and unrounded structural groups.

## Elevation & effects

- One extracted image uses a drop shadow with `4px` blur and offset `0 4px`.
- No local effect styles were found.
- No other elevation, opacity, blur, or motion tokens were defined.
- CTA rectangles use `90%` opacity in several promotional sections.

## Components

_None found in source._

## Screen patterns

- **Global navigation:** white desktop header with Paytm logo, horizontal navigation links, and a `Sign In` action.
- **Recharge and bill-payment band:** full-width cyan section with a white heading and six compact rounded service tiles. Tiles use 64px imagery and 15px white labels.
- **Book and buy band:** full-width deep-blue section with a white heading and rounded service tiles. Tiles use 64px imagery and 18px labels.
- **Hero section:** white background, oversized black heading, supporting copy, Paytm imagery, and a dark download-app CTA.
- **Promotional feature sections:** alternating white and `#F5F7FA` backgrounds with text-and-image layouts, brand imagery, large headings, body copy, and `Learn more >` pill buttons.
- **Payment instruments section:** light-gray background with a large heading and white rounded cards. Cards combine promotional copy, logos, and product imagery.
- **Download CTA:** dark rounded rectangle with white `Download Paytm App` text and Apple / Google Play iconography.
- **Service tiles:** cyan or deep-blue fills, `17px` or `32px` corner radii depending on context, centered image assets, white text, and trailing `>` labels.
- **Promotional CTA:** `155px × 44px` rounded button with `32px` radius, navy fill, white `Inter SemiBold` text at `17px`.

## Notes for implementers

- Treat the source as a desktop-first, 1360px-wide composition.
- Use only the extracted palette; consolidate the cyan family into `#01BBF5` for a consistent brand-accent role.
- Use Inter and preserve the available weight and size combinations rather than introducing additional type styles.
- Keep major sections full-width and alternate white with `#F5F7FA` to create vertical rhythm.
- Use `17px` to `41px` corner radii only where the source pattern supports them; use `32px` for pill CTAs.
- Preserve high contrast: white text on cyan, deep blue, navy, or black surfaces; black text on white and light-gray surfaces.
- Do not assume reusable component APIs or local design tokens: none were extracted.
- Image fills and logos are part of the visual composition, but their source asset hashes are not component specifications.
