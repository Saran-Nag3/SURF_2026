---
name: opera-design-food-restaurant-website-community
source: opera design FOOD RESTAURANT  website (Community), Page 2
kind: design-system-context
---

# opera - Design System

## Overview

Mobile food-restaurant website design extracted from Page 2 of the Figma file. The primary screen is an iPhone 14 frame sized 390×1473px. The design includes a hero section, delicacy catalog, popular-food/about content, and client reviews.

No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, grid styles, or components were found.

## Design language

- Food-focused restaurant presentation with Nigerian delicacies including fried rice, jollof rice, pounded yam and egusi soup, spaghetti, vanilla ice cream, and soft drinks.
- Strong yellow-and-black visual identity.
- White backgrounds are used across the primary page sections.
- Hero content uses oversized bold display text, food imagery, decorative stars and circular outlines.
- Catalog content uses compact product cards with food images, product names, prices, and circular yellow action icons.
- Navigation labels and supporting copy use very small text sizes.
- Rounded controls and cards appear throughout the catalog and promotional content.
- Decorative yellow circular outlines, star shapes, and line details recur across sections.

## Color palette

| Color | Observed uses |
|---|---:|
| `#FEC80A` | 126 |
| `#000000` | 49 |
| `#0000001A` | 10 |
| `#00000040` | 6 |
| `#D9D9D9` | 6 |
| `#E5E5E5` | 6 |
| `#FFFFFF` | 6 |
| `#F8CA2ACC` | 5 |

Usage guidance:

- Use `#FEC80A` as the primary accent for highlights, outlined circles, review headings, action icons, and promotional controls.
- Use `#000000` for headings, labels, prices, navigation, and body text.
- Use `#FFFFFF` for primary page and section backgrounds.
- Use `#E5E5E5` for product-card surfaces.
- Use `#D9D9D9` for placeholder or muted pill surfaces.
- Use `#0000001A` for subtle section strokes.
- Use `#00000040` for decorative muted shapes and image drop shadows.
- Use `#F8CA2ACC` for translucent yellow decorative stars and outlined image borders.

## Type scale

Typeface usage:

- Inter is the primary typeface.
- Roboto Bold is used for the `OPERA` review-card label.

Observed type styles, ranked by usage where counts were available:

| Family | Weight | Size | Uses |
|---|---|---:|---:|
| Inter | SemiBold | 8.5px | 16 |
| Inter | SemiBold | 10px | 6 |
| Inter | SemiBold | 5px | 6 |
| Inter | SemiBold | 6.5px | 4 |
| Inter | Bold | 15px | 3 |
| Inter | Regular | 5px | 3 |
| Inter | SemiBold | 9.5px | 3 |

Additional observed text sizes:

- Inter Bold, 30px: hero heading `All Nigeria Delicacies`.
- Inter Medium, 10px: hero supporting text.
- Inter Medium, 7px: small numeric label.
- Roboto Bold, 6px: `OPERA` review label.

Hierarchy:

- 30px Inter Bold for the hero heading.
- 15px Inter Bold for prominent section headings.
- 10px Inter SemiBold or Medium for section titles and supporting headings.
- 9.5px Inter SemiBold for labels such as `Bestseller`.
- 8.5px Inter SemiBold for product names and prices.
- 6.5px Inter SemiBold for compact navigation and category labels.
- 5px Inter Regular or SemiBold for dense supporting copy and micro-labels.

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found. Observed geometry includes:

- 5px radius on a compact yellow promotional rectangle.
- 6px radius on small yellow feature labels.
- 10px radius on catalog category controls and product image/card elements.
- `10/0/10/0px` corner treatment on selected image blocks.
- `0/0/0/0px` on one decorative group.

## Elevation & effects

- Hero food image uses a drop shadow with:
  - Offset: `0 4px`
  - Color: `#00000040`
  - Blur/spread values were not provided.
- Review content uses a drop shadow with:
  - Offset: `1 1`
  - Blur: `20px`
  - Color: `#D9D9D9`
- No local effect styles were found.
- No motion tokens were found.

## Components

_None found in source._

## Screen patterns

- **Mobile landing page:** An iPhone 14 frame sized 390×1473px with a white background.
- **Hero section:** 390×262px section containing the `All Nigeria Delicacies` heading, supporting food description, navigation labels, food imagery, decorative shapes, a promotional control, and `ORDER NOW`.
- **Catalog section:** 390×529px white section with the `Catalog Section Delicacies` heading, category controls, small food thumbnails, `Bestseller` and `New Items` labels, and compact food-product cards.
- **Product cards:** Approximately 97px wide and 158–159px high, with 72px-high food imagery, muted `#E5E5E5` surfaces, product names, prices, and yellow circular action icons.
- **Popular/about section:** 390×401px white section combining food imagery, `Popular Delicacies`, `About Company`, `Chicken and Chips`, feature labels, descriptive copy, yellow outlined circles, and small line decorations.
- **Reviews section:** 390×180px white section with the yellow `Reviews of our Clients` heading, image content, review copy, an `OPERA` label, and a subtle shadowed review panel.

## Notes for implementers

- Build for a 390px-wide mobile layout based on the extracted iPhone 14 frame.
- Preserve the strong `#FEC80A` and `#000000` contrast throughout the page.
- Use Inter for all primary interface text unless implementing the `OPERA` review label, which uses Roboto Bold.
- Keep the hero heading visually dominant at 30px Inter Bold.
- Use compact typography for catalog labels, card metadata, and supporting copy.
- Product cards should retain their approximately 97×158–159px proportions and 72px image area when reproducing the catalog layout.
- Use `#E5E5E5` for product-card backgrounds and `#0000001A` for subtle section borders.
- Use yellow circular action icons with a black icon treatment in catalog cards.
- Use yellow outlined circles and decorative stars as visual motifs, not as primary content containers.
- Image assets are present in the source as Figma image fills; preserve image placement and cropping when implementing the corresponding food imagery.
- Do not rely on undocumented component families or variables; none were extracted from the source.
