---
name: xbox-app-community
source: Xbox App (Community)
kind: design-system-context
---

# xbox - Design System

## Overview

- Source: Xbox App (Community), Page 1.
- Primary format: 375x812px mobile screens with rounded outer frames.
- The interface uses Xbox-oriented product discovery and purchase flows.
- No local variables, styles, components, grids, or motion tokens were found.

## Design language

- Dark, high-contrast mobile interface.
- Green is used for prices, purchase actions, and highlighted links.
- White is used for primary text and iconography.
- Product imagery is presented alongside concise product names, descriptions, and prices.
- Typography uses Ropa Sans Regular throughout the extracted screens.

## Color palette

Ranked by extracted usage:

| Color | Usage count | Observed usage |
|---|---:|---|
| `#FFFFFF` | 14 | Primary text, button labels, search icon, menu icon |
| `#08AD2C` | 7 | Prices, action buttons, and “Read Now...” link |
| `#171717` | 3 | Card-like rectangular surfaces |

## Type scale

Font family: Ropa Sans Regular.

| Size | Observed usage |
|---:|---|
| 35px | Large product title and price on Buy Now screen |
| 30px | Xbox Home headings |
| 25px | Buy Now button label |
| 24px | Xbox Home price heading |
| 20px | Product names, supporting Buy Now content, and link text; 5 raw uses |
| 15px | Supporting product description and compact prices; 3 raw uses |
| 11px | Xbox Home button label |

## Spacing scale

_None found in source._

## Radius scale

- 20px: outer screen frames.
- 15px: product/card rectangles.
- 10px: green action buttons.

## Elevation & effects

- One 300x200px rectangular surface uses a drop shadow with 10px effect size and offset `4px 4px`.
- No reusable effect styles were found.

## Components

_None found in source._

## Screen patterns

### Xbox Home

- 375x812px mobile screen with rounded outer frame.
- Heading: “Discover And Power Your Dreams”.
- Three dark product/card surfaces, including one 300x200px surface and two 180x180px surfaces.
- “Latest picks” section with product imagery, product names, supporting description, prices, and purchase action.
- Includes a 30x30px search icon and a 30x30px add/menu icon.
- Includes a 100x25px green action rectangle with an 11px “Buy Now” label.
- Product imagery uses three extracted image assets.

### Buy Now

- 375x812px purchase-detail screen.
- Large green `$389` price.
- Supporting product description and green “Read Now...” link.
- 220x52px green purchase button with 25px “Buy Now” label.
- Large white “Xbox Controller” product title.
- Includes a 20x17.13px white vector icon.

### Xbox Controller product image

- Standalone extracted product-image frame sized 425x399px.

## Notes for implementers

- Use Ropa Sans Regular for all extracted text.
- Preserve the mobile canvas size of 375x812px for the Xbox Home and Buy Now screens.
- Use the extracted color palette only: `#FFFFFF`, `#08AD2C`, and `#171717`.
- Apply green to prices and primary purchase actions; use white for primary text and icons.
- Preserve the radius hierarchy: 20px for screens, 15px for cards, and 10px for action buttons.
- No component families or reusable component specifications were extracted; implement repeated cards, buttons, and product rows consistently based on the screen patterns above.
