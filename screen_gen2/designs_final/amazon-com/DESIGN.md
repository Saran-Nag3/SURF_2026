---
name: amazon-com
source: amazon mobile mockup (e-commerce) (Community)
kind: design-system-context
---

# amazon-com - Design System

## Overview

Mobile Amazon e-commerce mockup covering:
- Home/search results screen.
- iPhone product detail screen.
- Promotional cards, product imagery, offers, purchase actions, and persistent bottom navigation.
- Source page: All pages (3): Page 1, Page 3, comps.

No local variable collections or local text styles were found.

## Design language

- Mobile-first commerce interface using white surfaces, black primary text, teal/green utility text, yellow/orange purchase actions, and red promotional accents.
- Inter is used throughout the extracted screens.
- Product screens use prominent product imagery, price hierarchy, offer modules, selector controls, and persistent bottom navigation.
- Search headers use a 390x89px header with a white 243x41px search field and a 5px radius.
- Primary purchase buttons use 30px radius and yellow/orange fills.
- Repeated utility icons use 24x24px sizing; the basket icon uses 30x25.26px.

## Color palette

Ranked by extracted usage:

| Color | Uses | Observed role |
|---|---:|---|
| #000000 | 286 | Primary text, icon strokes, borders |
| #FFFFFF | 75 | Main surfaces, controls, icon fills |
| #FFFCFC | 70 | Promotional card surfaces |
| #D9D9D9 | 40 | Neutral surfaces or dividers |
| #817F7F | 24 | Secondary text and borders |
| #1C635E | 20 | Teal utility links and secure transaction text |
| #EFEFEF85 | 16 | Translucent circular controls |
| #363538 | 12 | Search icon stroke |
| #3E4651 | 12 | Fulfilled badge background |
| #FED813 | 10 | Buy Now button |
| #242424 | 8 | Neutral dark UI color |
| #524F4F | 8 | Secondary product and offer text |
| #9CAEC2 | 8 | Neutral blue-gray accent |
| #B52502 | 8 | Promotional discount badge |
| #D5B7F2 | 8 | Promotional accent |
| #ED0827 | 8 | Red accent |
| #FCF1F1 | 8 | Pale red surface |
| #878484 | 6 | Footer border |
| #DDD3D3 | 6 | Circular control border |
| #DFDFDF | 6 | Product card border |
| #CAD8E7 | 5 | Pale blue-gray accent |
| #010101 | 4 | Near-black text |
| #050505 | 4 | Near-black text |
| #0A0909 | 4 | Near-black text |
| #257527 | 4 | In-stock status |
| #26818F | 4 | Brand link text |
| #AF1C41 | 4 | Discount percentage text |
| #DCE3EB | 4 | Pale blue-gray accent |
| #FFA51D | 4 | Add to Cart button |

The extraction also references `fill_icon` and `Line_icon`, but no concrete color values were provided for these tokens.

## Type scale

Font family: Inter.

Observed styles, ranked by usage:

- 12px Regular — 52 uses
- 15px Regular — 42 uses
- 15px Bold — 24 uses
- 15px Medium — 22 uses
- 12px SemiBold — 22 uses
- 14px Medium — 16 uses
- 20px SemiBold — 15 uses
- 13px Regular — 10 uses
- 17px Regular — 10 uses
- 13px Bold — 8 uses
- 12px Light — 8 uses
- 15px Light — 8 uses
- 11px Regular — 8 uses
- 10px Medium — 6 uses
- 10px Regular — 6 uses
- 15px SemiBold — 6 uses
- 40px Medium — 5 uses
- 10px Light — 4 uses
- 35px Light — 4 uses
- 12px Medium — 4 uses
- 20px Medium — 4 uses
- 35px Medium — 4 uses
- 20px Regular — 4 uses
- 30px Regular — 4 uses
- 27px ExtraBold — 3 uses

Observed hierarchy:
- 40px Medium
- 35px Light or Medium
- 30px Regular
- 27px ExtraBold
- 20px Regular, Medium, or SemiBold
- 17px Regular
- 15px Regular, Light, Medium, SemiBold, or Bold
- 14px Medium
- 13px Regular or Bold
- 12px Light, Regular, Medium, or SemiBold
- 11px Regular
- 10px Light, Regular, or Medium

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found.

Observed corner radii:
- 1px
- 2px
- 3px
- 4px
- 5px
- 10px
- 20px
- 30px
- 1000px
- 10000px

## Elevation & effects

No local effect styles were found.

Observed effects:
- Drop shadow with 5px blur and offset 2px horizontal, 6px vertical.
- Drop shadow with 4px blur and offset 0px horizontal, 4px vertical.
- Layer blur: 9px.
- Layer blur: 41px.

## Components

Allowed component families:

### Arrow_left
- Size: 24x24px.
- Used in the product/search header.
- Stroke width: 2px.

### Bookmark
- Size: 24x24px.
- Stroke width: 2px.

### Favorite
- Size: 24x24px.
- Stroke width: 2px.

### iphone 14 color change
- Size: 688x973px.
- Variant: `Property 1: Default`.

Additional repeated interface elements observed:
- Mic icon: 24x20.21px.
- Search icon: 24x24px.
- Footer menu, home, user, basket, and dashboard icons.
- Footer menu, home, user, and dashboard icons use 24x20.21px sizing.
- Basket icon uses 30x25.26px sizing.
- Circular microphone controls use 40x40px containers.
- Promotional offer cards use 118x115px containers with 10px radius.
- Primary action buttons use 324x46px rectangles with 30px radius.

## Screen patterns

### Home/search results

- 390x1190px white mobile frame.
- Header: 390x89px.
- Search field: 243x41px with 5px radius.
- Search context label: “iPhone”.
- Delivery/location row and sponsored product area.
- Product recommendations shown as bordered white cards.
- Results section uses a 20px SemiBold heading and large price values.
- Persistent footer contains menu, home, user, basket, and dashboard navigation icons.

### Product detail

- 390x2037px white mobile frame.
- Product image/sticker area with discount badge, image carousel indicators, and circular controls.
- Product price uses 35px Medium.
- Product metadata includes title, brand, fulfillment badge, size, color, offers, exchange information, delivery/payment copy, seller information, and stock status.
- Purchase actions are stacked yellow/orange buttons:
  - Buy Now: #FED813.
  - Add to Cart: #FFA51D.
- Bookmark and Favorite controls appear near the product content.
- Persistent header and footer match the home/search screen patterns.

### Promotional offers

- Horizontal offer cards use 118x115px containers.
- Cards use #FFFCFC surfaces, #000000 borders, and 10px radius.
- Offer copy uses Inter Regular, 12px.

## Notes for implementers

- Use only the listed palette values; do not substitute unlisted colors.
- Preserve the observed usage ranking when selecting defaults: #000000 for primary text and #FFFFFF for primary surfaces.
- Use Inter and select weight/size combinations from the observed type scale rather than introducing new typography tokens.
- Keep mobile frames at the extracted widths: 390px for the primary home and product screens.
- Use 24x24px for Arrow_left, Bookmark, and Favorite.
- Keep purchase buttons at 30px radius with separate #FED813 and #FFA51D fills.
- Treat image fills as source artwork; no image asset content or additional color token was specified.
- `fill_icon` and `Line_icon` are referenced symbolic tokens without extracted concrete color values.
