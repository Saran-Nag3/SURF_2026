---
name: website-prototypes-community
source: Website prototypes (Community)
kind: design-system-context
---

# huawei - Design System

## Overview

- Source: Figma file `Website prototypes (Community)`, Page 1.
- Visual system for a monochrome apparel-commerce website.
- Screens extracted: Add To Cart, Item Added, and Checkout.
- Canvas size across screens: 1280 × 832px.
- No local variables, paint styles, spacing styles, radius styles, motion styles, effect styles, grid styles, or component sets were found.

## Design language

- Minimal, monochrome, high-contrast interface.
- White page surfaces with black typography and thin gray borders.
- Montserrat is used throughout the interface.
- Product imagery is represented with light-gray placeholder rectangles.
- Controls use outlined white surfaces, rounded corners, and low-offset drop shadows.
- Navigation and footer use clearly separated horizontal regions.

## Color palette

Ranked by observed usage:

| Color | Usage | Typical role |
|---|---:|---|
| `#000000` | 110 | Primary text, borders, lines |
| `#FFFFFF` | 40 | Page, panel, and control surfaces |
| `#C4C4C4` | 27 | Structural borders and muted surfaces |
| `#E5E5E5` | 23 | Image placeholders and muted circular surfaces |
| `#0000004D` | 22 | Low-opacity image placeholder borders |
| `#D9D9D9` | 12 | Size-selector backgrounds |
| `#000000CC` | 3 | Secondary footer text |

## Type scale

- **15px**
  - Montserrat Regular: 3 uses.
  - Montserrat Bold: 18 uses.
  - Footer navigation and copyright text.
- **20px**
  - Montserrat Medium: 18 uses.
  - Primary navigation labels and account controls.
- **24px**
  - Montserrat Regular: 8 uses.
  - Montserrat Medium: 8 uses.
  - Montserrat Bold: 15 uses.
  - Body H4: Montserrat Bold, weight 700, 24px / 36px, tracking `-0.36px`.
  - Product, cart, summary, and size-related headings and text.
- **32px**
  - Montserrat Medium: 5 uses.
  - Montserrat SemiBold: 3 uses.
  - Large navigation and control labels.
- **36px**
  - Montserrat Regular.
  - Product title text in the Add To Cart screen.

## Spacing scale

_None found in source._

## Radius scale

- `0px`: square corners and zero-radius groups.
- `6px`: common button and outlined-control radius.
- `10px`: quantity-control outer radius.
- Mixed radius `0/10/10/0px`: right-side quantity-control segment.

## Elevation & effects

- Drop shadow used on controls:
  - Offset: `0 4px`
  - Blur/spread values were not provided.
- Borders are generally `1px`.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

- **Shared shell**
  - White 1280px-wide page.
  - 60px navigation bar at the top with category links and account controls.
  - 694px body region with a light-gray structural border.
  - 82px footer with navigation links and copyright text.
- **Add To Cart**
  - Product title and product price/name content.
  - Product-image placeholders.
  - “Choose size” heading with six size options: XS, S, M, XL, 2XL, and 3XL.
  - Large and medium outlined action controls.
- **Item Added**
  - Reuses the product-selection structure.
  - Adds an “Items added to cart” confirmation panel.
  - Confirmation content includes a product thumbnail, product name and price, divider line, and two outlined controls.
- **Checkout**
  - Cart table structure with item, price, quantity, subtotal, and total information.
  - Product thumbnail, product name, price, remove-item action, and quantity control.
  - Summary panel showing one item, subtotal, shipping, taxes, and total.
  - Horizontal divider lines separate cart and summary information.

## Notes for implementers

- Use only the documented monochrome palette; do not introduce additional colors.
- Use Montserrat with the listed weights and sizes.
- Preserve the strong black-on-white contrast and thin structural borders.
- Use `#E5E5E5` for product-image placeholders and `#D9D9D9` for size-selector backgrounds.
- Keep buttons and outlined controls white with a `1px` border, `6px` radius where specified, and the documented low-offset shadow.
- Preserve the shared navigation/body/footer shell across all three screens.
- Do not infer spacing tokens, grid rules, responsive behavior, motion, or component variants that are not present in the source.
