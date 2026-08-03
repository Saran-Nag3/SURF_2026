---
name: walmart-app-design-community
source: 🛍 Walmart App Design (Community), Page 1
kind: design-system-context
---

# walmart - Design System

## Overview

- Source: Figma file `🛍 Walmart App Design (Community)`, Page 1.
- No local variable collections found.
- Primary observed viewport: `390px` wide mobile screens.
- Core UI areas include splash, home/catalog browsing, product cards, filters, offers, order tracking, cart, and payment flows.
- Component families are named Figma families; preserve these names when mapping implementations.

## Design language

- Mobile-first commerce interface with strong blue primary actions, yellow brand accent, white surfaces, black text, and neutral gray supporting text.
- Rounded controls use pill-shaped `200px` radii.
- Product and advertising cards use white surfaces, `8px` corners, and subtle drop shadows.
- Category browsing uses horizontal rows for brands, offers, filters, and products.
- Primary actions use `#0B59D5` with white text.
- Supporting labels and secondary text use neutral grays.
- Typography uses Ambit for most UI and Aeonik for small body text.

## Color palette

Ranked by reported usage where available:

| Color | Usage | Source roles |
|---|---:|---|
| `#FFFFFF` | 279 most-used styles; 95 raw uses | Tech / White |
| `#000000` | 206 most-used styles; 82 raw uses | Tech / Black |
| `#EEEEEE` | 118 raw uses | Neutral border/surface |
| `#0B59D5` | 57 raw uses | Primary blue |
| `#DADADA` | 56 raw uses | Neutral |
| `#FCB61A` | 46 raw uses | Splash/logo yellow |
| `#DCDCDC` | 59 most-used styles | Tech / Non Accent 2 |
| `#999999` | 59 most-used styles | Tech/Non Accent |
| `#000000D9` | 45 most-used styles | Character / Primary .85; Character / Title .85 |
| `#C4C4C4` | 15 raw uses | Image placeholder gray |
| `#144056` | 76 most-used styles | Brand/Cornflower Blue; Routing / 1 |
| `#E9F2F9` | 15 most-used styles | Tones / Curious Blue / E9F2F9 |
| `#494E51` | 8 raw uses | About-me background |
| `#D6D9DD` | 8 most-used styles | Carbon Neutral/300 |
| `#5B6062` | 7 raw uses | Neutral |
| `#231F20` | 7 raw uses | Dark neutral |
| `#696E70` | 6 raw uses | Neutral secondary text |
| `#F5D54F` | 4 raw uses; 238 most-used styles | Old / Yellow |
| `#001C4E` | 3 raw uses | Dark blue |
| `#0094FF` | 3 raw uses | Bright blue |
| `#0A0B09` | 3 raw uses | Dark neutral |
| `#D11325` | 3 raw uses | Red accent |
| `#E0EDFB` | 3 raw uses | Pale blue |
| `#FF90EA` | 3 raw uses | Pink accent |
| `#FFDEDA` | 3 raw uses | Pale red |
| `#CC0000` | 9 raw uses | Red accent |
| `#F24620` | 2 most-used styles | Tech / Notifications |
| `#B1FDE3` | 3 most-used styles | BNPL / Afterpay |
| `#4A4AF4` | 3 most-used styles | BNPL / Affirm |
| `#FFB3C7` | 3 most-used styles | BNPL / Klarna |
| `#24262B` | — | Carbon / Darkest |
| `#38393A` | 9 most-used styles | Brand / Cape Cod |
| `#1A1B1D` | 3 most-used styles | NightBlack |
| `#D11325` | 3 raw uses | Red accent |

## Type scale

Use the following named typography tokens:

| Token | Font | Weight | Size | Line height | Letter spacing |
|---|---|---:|---:|---:|---:|
| Title / H2 | Ambit | Bold 700 | `36px` | `100.87%` | `-0.36px` |
| Title / H3 | Ambit | Bold 700 | `32px` | `95.65%` | `-0.32px` |
| Title / H5 | Ambit | SemiBold 600 | `24px` | `113.04%` | `-0.17px` |
| Subtitle / Max | Ambit | SemiBold 600 | `20px` | `121.74%` | `0px` |
| Subtitle / Middle | Ambit | SemiBold 600 | `18px` | `139.13%` | `0px` |
| Subtitle / Small | Ambit | SemiBold 600 | `16px` | `139.13%` | `0px` |
| Body/Max | Ambit | Regular 400 | `16px` | `130.43%` | `0px` |
| Body / Middle | Ambit | Regular 400 | `14px` | `125.22%` | `0px` |
| Tech/Button | Ambit | Bold 700 | `14px` | `40px` | `-0.06px` |
| Tech/Middle Link | Ambit | Regular 400 | `14px` | `139.13%` | `0px` |
| Body / Small | Aeonik | Regular 400 | `12px` | `128.33%` | `0px` |

Raw unstyled typography also contains Ambit Bold at `240px` and Ambit Regular/Bold at `4.39px`; these are not named UI scale tokens.

## Spacing scale

_None found in source._

Observed component spacing values:

- `6px`, `8px`, `12px`, `16px` padding and gaps.
- `4px` and `2px` gaps in compact content groups.
- `0px` padding in horizontal fixed-width rows such as `topOffers`, `Frame 119`, and `catalogTitle`.

## Radius scale

- `0px`: image areas and divider-like geometry.
- `8px`: advertising card corners and product card corners.
- `200px`: pill controls, filter boxes, and compact primary action buttons.

## Elevation & effects

- Effect style: `drop_shadow`, offset `0 8`, blur/distance `120px`, color `#0000000F`.
- Advertising card usage: `drop_shadow`, offset `0 4`, blur/distance `36px`, color `#0000000F`.
- Product cards use a `#EEEEEE` stroke at `1.6px`.

## Components

Only use these component families from the source:

- `paymentMethods`: `358x527px`; variant `Property 1: Group 122/Variant2`. Uses Subtitle / Middle, Body / Middle, Ambit Bold, and raw `4.39px` styles.
- `productCard`: `164x252px`; variants `wihRaiting` and `withGEO`. Uses Body / Small, Body / Middle, and Ambit SemiBold `14px`.
- `adsCard`: `334x256px`; white card, `8px` radius, image area `334x190px`, heading and supporting text, and a right-arrow action.
- `topOffers`: `1034x256px`; horizontal layout, `16px` gap, containing advertising cards.
- `filterBox`: `146x34px`; `200px` radius; horizontal layout; padding `6px 12px 6px 8px`; `8px` gap; fill `#E9F2F9`; Ambit SemiBold `14px`.
- `filterLine`: `390x34px`; white container containing pill-shaped filters.
- `catalogTitle`: `147x29px`; horizontal layout; `6px` gap; category title plus count.
- `deviderLine`: `358x1px`; white fill.
- `electronicsLine`: `1922x292px`; white fill; product/category content.
- `foodLine`: `1649x292px`; white fill; product/category content.
- `cartItem`: `358x268px`; uses Body / Small, Subtitle / Middle, Tech/Middle Link, Subtitle / Small, and Body/Max.
- `buttonForCheckput`: `358x48px`; uses Subtitle / Small.
- `cartNumbers`: `358x173px`; uses Subtitle / Middle, Subtitle / Max, Body/Max, and Title / H5.
- `paymentMethod`: `358x80px`; uses Subtitle / Middle.
- `paymentMethods`: `358x527px`; payment-method collection with the listed variant.
- `Frame 119`: `196x24px`; horizontal layout; `8px` gap; Tech/Middle Link.
- `Group 108`: `358x242px`; mixed small, body, subtitle, and semibold text styles.
- `Group 129`: `390x316px`; uses Aeonik Medium `8.4px`, Body / Small, and Body / Middle.
- `yourOrderIsOnTheWay`: `390x128px`; order status content using Body / Small, Ambit SemiBold `14px`, and Subtitle / Middle.
- `about me`: `2600x1752px`; fill `#494E51`; uses Aeonik Regular and large Ambit styles.
- `Group 140`: `408x881px`; uses Ambit Bold, Tech/Button, Body / Middle, Tech/Middle Link, and Title / H2.
- `buttonForCheckput`: primary checkout button family at `358x48px`.
- `cartNumbers`: cart totals/quantity summary family at `358x173px`.
- `dribbble-ball-mark 1`: `184x184px`, fill `#FFFFFF`.
- `iconmonstr-instagram-11 1`: `184x184px`, fill `#FFFFFF`.

## Screen patterns

### Splash

- Frame size: `390x844px`.
- Background: `#0B59D5`.
- Centered logo group size: `88x96px`.
- Logo vector accents use `#FCB61A`.

### Home

- Frame size: `390x1570px`.
- Background: `#FFFFFF`.
- Brand section uses a horizontal row of `72x72px` circular brand items.
- Notification badge is `20x20px` and uses `#F24620` with white text.
- Offers section uses `topOffers` with `334x256px` cards and `16px` gaps.
- Offer cards use `8px` corners, white surfaces, image placeholders in `#C4C4C4`, and subtle shadow.
- Catalog headings use `catalogTitle`.
- Filter controls are `34px` high pill-shaped elements with `#E9F2F9` fill.
- Product rows use `foodLine`, `electronicsLine`, and `productCard`.
- Order tracking uses `yourOrderIsOnTheWay` with a blue progress state and a blue Add action.

### Commerce and checkout flows

- Product cards are compact `164x252px` units with product image, price, stock/location metadata, and Add action.
- Cart content uses `cartItem`, `cartNumbers`, and `buttonForCheckput`.
- Payment selection uses `paymentMethod` and `paymentMethods`.
- Fixed-width mobile content commonly uses `358px` within a `390px` viewport.

## Notes for implementers

- Do not add colors outside the palette listed here.
- Prefer named typography tokens over raw unstyled text values.
- Use `#0B59D5` for primary actions and active order-progress states.
- Use `#FFFFFF` for primary surfaces and primary-action text.
- Use `#E9F2F9` for filter pills and other pale-blue control surfaces.
- Preserve the distinction between `Body / Small` in Aeonik `12px` and Ambit body styles.
- Keep mobile content widths concrete: `358px` for most inner commerce sections and `390px` for full-width screen elements.
- Treat `240px` and `4.39px` raw typography values as exceptional source artifacts, not defaults.
- No spacing variables, radius variables, motion tokens, or local grid styles were found.
