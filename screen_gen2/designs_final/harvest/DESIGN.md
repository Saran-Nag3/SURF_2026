---
name: harvest-management-app-ui-community
source: Harvest Management App UI (Community)
kind: design-system-context
---

# harvest - Design System

## Overview

- Mobile agricultural management and commerce UI.
- Source page: Page 1.
- Three screens are represented: Home Page, Product Details Page, and Shop Page.
- Primary viewport: 360x800px.
- Main visual themes: green agricultural branding, white surfaces, rounded cards, outlined navigation icons, and compact Poppins typography.
- No local Figma variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Use Poppins throughout.
- Use green as the primary action and navigation color.
- Use white or near-white surfaces with dark charcoal text.
- Use rounded cards and controls, especially for product cards, banners, search, buttons, and category tiles.
- Product and category content is organized into compact card grids.
- Use outlined icons in the bottom navigation and status/header areas.
- Use muted gray text for supporting copy and placeholders.
- Use translucent green overlays for category labels on imagery.

## Color palette

Ranked by observed usage:

| Color | Usage | Role |
|---|---:|---|
| `#263238` | 88 | Primary dark neutral |
| `#E0E0E0` | 41 | Neutral surface or placeholder |
| `#1A1A1A` | 36 | Dark text and icon detail |
| `#1B1B1B` | 33 | Navigation icon detail |
| `#EBEBEB` | 28 | Light neutral |
| `#455A64` | 27 | Blue-gray neutral |
| `#000000` | 23 | Primary headings and status text |
| `#FFFFFF` | 20 | White surfaces and component fills |
| `#FF725E` | 18 | Coral accent |
| `#FAFAFA` | 14 | Off-white surface or button text |
| `#F5F5F5` | 12 | Light neutral surface |
| `#02B153` | 10 | Primary green, borders, and active navigation |
| `#FFC532` | 8 | Yellow accent |
| `#141414` | 7 | Product text |
| `#814842` | 7 | Brown accent |
| `#02B153BA` | 6 | Translucent green category overlay |
| `#0E0E0E` | 6 | Price and quantity text |
| `#191919` | 6 | Dark neutral |
| `#AB645B` | 6 | Muted red-brown accent |
| `#FDFDFD` | 6 | Category label text |
| `#FF9A6C` | 6 | Orange accent |
| `#D9D9D9` | 5 | Image placeholder |
| `#353535` | 4 | Button label text |
| `#8ADDB7` | 4 | Light green button fill |
| `#DCEBE4` | 3 | Bottom navigation background |
| `#FFBF9D` | 3 | Pale orange accent |

## Type scale

Font family: Poppins.

| Size | Weight | Observed usage |
|---:|---|---|
| 16px | Medium | Primary headings, product names, prices, button labels |
| 16px | Regular | Not found in source |
| 14px | Medium | Product labels, category labels, secondary headings |
| 14px | Regular | Product names, prices, button labels |
| 12px | Regular | Status text, helper text, search placeholder, descriptions |
| 12px | Medium | Status or compact metadata |

Observed text dimensions include 18px, 20px, 21px, and 24px line boxes, but no independent line-height tokens were defined.

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- `0px`: square corners or selectively squared card edges.
- `1px`: product card and quantity selector borders.
- `5px`: category label overlays.
- `10px`: buttons, quantity selector, and category/image cards.
- `16px`: mobile screens, banners, product cards, and image panels.
- `30px`: search bar.

## Elevation & effects

_None found in source._

## Components

### Component families

Use only these extracted component families:

- `bar-chart-2-outline`
- `battery-outline`
- `briefcase-outline`
- `chevron-left-outline`
- `chevron-right-outline`
- `gift-outline`
- `home-outline`
- `minimize-outline`
- `minus-circle-outline`
- `person-outline`
- `plus-circle-outline`
- `shopping-cart-outline`
- `star`
- `wifi-outline`

### Icon specifications

| Component | Size | Extracted fill |
|---|---:|---|
| `minus-circle-outline` | 16x16px | `#FFFFFF` |
| `plus-circle-outline` | 16x16px | `#FFFFFF` |
| `star` | 16x16px | `#FFFFFF` |
| `minimize-outline` | 16x16px | `#FFFFFF` |
| `battery-outline` | 16x16px | `#FFFFFF` |
| `wifi-outline` | 16x16px | `#FFFFFF` |
| `bar-chart-2-outline` | 16x16px | `#FFFFFF` |
| `chevron-left-outline` | 24x24px | `#FFFFFF` |
| `chevron-right-outline` | 24x24px | `#FFFFFF` |
| `gift-outline` | 24x24px | `#FFFFFF` |
| `shopping-cart-outline` | 24x24px | `#FFFFFF` |
| `briefcase-outline` | 24x24px | `#FFFFFF` |
| `person-outline` | 24x24px | `#FFFFFF` |
| `home-outline` | 24x24px | `#FFFFFF` |

### Reusable UI patterns

- **Mobile screen shell:** 360x800px, white fill, 16px radius.
- **Status header:** 328x18px content area with 12px Poppins Regular time text and 16x16px status icons.
- **Search bar:** 328x32px, 30px radius, white fill, 1px border, 12px Poppins Regular placeholder, and a 16x16px minimize icon.
- **Support banner:** 328x142px, 16px radius, light green surface, 16px Poppins Medium title, 10px Poppins Regular support copy, and an 89x30px call-to-action button with 10px radius.
- **Product card:** 155x201px, 16px radius, 1px green border, 155x101px image area, 14px product name, 14px Medium price, and a 99x27px add-to-cart button with 10px radius.
- **Primary action button:** Green or light green fill, 10px radius, centered Poppins label.
- **Bottom navigation:** 360x65px, `#DCEBE4` background, five 24x24px icons. The active home or section icon uses `#02B153`; inactive icon details use `#1B1B1B`.
- **Product detail image panel:** 328x314px, 16px radius, 1px green border.
- **Quantity selector:** 327x30px container with 10px radius, 1px green border, 16x16px plus and minus icons, and a 12px Medium quantity label.
- **Shop category tile:** 154x192px, 10px radius. Category label overlays are 40px high, use 5px radius, translucent green fill, and 14px Medium white text. Overlay widths vary from 120px to 146px.
- **Rating row:** Four 16x16px `star` components grouped in a 79x16px area.

## Screen patterns

### Home Page

- 360x800px mobile screen with a status header, greeting, search bar, support banner, featured-product section, product cards, and bottom navigation.
- Greeting uses a 16px Medium heading and 12px Regular supporting line.
- Featured products use 155x201px cards arranged in a two-column-style product area.
- Product examples include Rice Seed, Lemon Tree, Weat Seed, and Cherry Tree.
- Product imagery may use the extracted image assets or neutral `#D9D9D9` placeholders where no image is available.

### Product Details Page

- 360x800px mobile screen with status header, large product image panel, price, full-width add-to-cart action, product navigation row, product name and stock state, rating, quantity selector, details copy, and bottom navigation.
- Product image panel is 328x314px.
- Product price is Poppins Medium at 16px.
- Add-to-cart action is 328x34px with 10px radius.
- Product navigation uses 24x24px left and right chevron components.
- Product information uses 16px Medium headings and 12px Regular supporting text.

### Shop Page

- 360x800px mobile screen with status header, title/navigation row, category tile grid, and bottom navigation.
- Category tiles are 154x192px with 10px radius.
- Categories shown: SEEDS, SEEDING, FERTILIZER, HIRE WORKER, DISEASE & SOLUTION, and PROTECTING CROP.
- Category labels use translucent green overlays and Poppins Medium at 14px.
- Imagery is used for several category tiles; neutral `#D9D9D9` is used where the extraction shows a placeholder.

## Notes for implementers

- Preserve the 360x800px mobile composition and the 360x65px bottom navigation height.
- Use only the extracted Poppins weights and sizes: Regular or Medium at 12px, 14px, and 16px.
- Prefer the ranked palette above; do not introduce additional colors.
- Use `#02B153` for primary green states and `#8ADDB7` for light green actions.
- Keep product and category corners rounded according to the observed radius scale.
- Treat the component family names as the available icon set; do not substitute unlisted icon families.
- Keep category overlays translucent using `#02B153BA`.
- Use `#D9D9D9` for extracted neutral image placeholders.
- No spacing, elevation, motion, grid, or effect tokens were defined; avoid implying values that are not present in the source.
