---
name: playstation-5-store-app-concept-design-community
source: Playstation 5 - Store app concept design (Community)
kind: design-system-context
---

# playstation - Design System

## Overview

PlayStation 5 store app concept for browsing products and viewing a DualSense controller detail page. The design uses compact product cards, rounded controls, blue accents, light product surfaces, and dark immersive detail surfaces.

## Design language

- High-contrast PlayStation-inspired interface combining dark backgrounds with light product panels.
- Primary accent color is blue `#4187FF`.
- Product cards use light surfaces, blue product names, dark supporting labels, rounded corners, outlined borders, and soft shadows.
- Detail presentation uses large rounded panels, dark surfaces, large display typography, product imagery, feature tiles, a slider, and a prominent purchase control.
- Use Druk Wide for prominent product and display headings; use Montserrat for supporting labels, prices, and actions.
- Icons use light or dark fills depending on the surface and include inner-shadow treatment.

## Color palette

Ranked by source usage:

| Token / role | Value | Usage |
|---|---:|---:|
| Light surface and text | `#EEF2FA` | 27 uses |
| Dark surface | `#21262E` | 18 uses |
| Primary blue accent | `#4187FF` | 12 uses |
| Secondary gray | `#6F737B` | 5 uses |
| Pale blue-gray detail | `#E4EBF8` | 4 uses |
| Black | `#000000` | 3 uses |
| Dark gradient start | `#1F2328` | Gradient token |
| Dark gradient end | `#1A1C1F` | Gradient token |
| Dark text / inner-shadow tone | `#1B2029` | Effect usage |
| White | `#FFFFFF` | Effect usage |
| White at 40% opacity | `#FFFFFF66` | Effect usage |
| White at 20% opacity | `#FFFFFF33` | Effect usage |
| Blue-gray shadow at 48% opacity | `#88A5BF7A` | Effect usage |
| Navy shadow at 16% opacity | `#122E6529` | Effect usage |
| Blue-gray shadow at 40% opacity | `#21446866` | Effect usage |

Gradient token:

- `gradient`: linear gradient from `#1F2328` at 0% to `#1A1C1F` at 100%.

## Type scale

| Size | Family and weight | Usage |
|---:|---|---|
| 80px | Druk Wide WideMedium | Large `DUAL SENSE` display heading |
| 24px | Montserrat Bold | Purchase action and price |
| 16px | Druk Wide WideMedium | Product names and prominent card titles |
| 14px | Montserrat Bold | Feature labels such as “Motion Sensor” |
| 10px | Montserrat Medium | Product category labels |

Observed text colors:

- Light surfaces: `#4187FF` for product names and `#21262E` for supporting labels.
- Dark surfaces: `#EEF2FA` for actions and light branding.
- Feature labels: `#000000`.

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- `16px`: compact settings and menu button boxes; product card boxes.
- `18px`: outer menu button border.
- `40px`: feature tiles.
- `60px`: large detail panels, feature containers, and purchase control.
- `0px`: groups and unrounded structural containers.

## Elevation & effects

Most-used effects:

- `icons`: inner shadow `0.5px`, offset `-0.5 -0.5`, color `#FFFFFF66`; inner shadow `0.5px`, offset `0.5 0.5`, color `#21446866`. Used 12 times.
- `shadow white`: drop shadow `16px`, offset `4 2`, color `#88A5BF7A`; drop shadow `22px`, offset `4 4`, color `#122E6529`; drop shadow `16px`, offset `-4 -2`, color `#FFFFFF`; inner shadow `14px`, offset `-2 -2`, color `#FFFFFF33`. Used 4 times.
- `inner shadow`: inner shadow `10px`, offset `10 10`, color `#1B2029`. Used 2 times.

Use the white shadow treatment on product cards and primary purchase surfaces. Use the icon inner shadow treatment on settings, menu, and product action icons.

## Components

_None found in source._

## Screen patterns

- **Products Page**: light rounded page surface with a menu block, PS5 branding, settings and menu controls, and a product grid. Product cards are approximately `190px` wide, with `16px` corner radii. Cards contain product name, category label, product imagery, and an action icon. The PlayStation 5 Digital Edition card uses the primary blue surface with light text.
- **Dual Sense Page**: dark rounded detail page with PS5 branding, settings and menu controls, a large `DUAL SENSE` heading, controller imagery, three feature tiles, a slider, and a `Buy Now` purchase control. Feature tiles are `150x160px` with `40px` radii. The purchase control is `414x80px` with a `60px` radius and combines a blue action area with a price area.

## Notes for implementers

- Preserve the contrast between dark detail surfaces and light product browsing surfaces.
- Use `#4187FF` as the primary interactive and product-title accent.
- Keep product cards compact and rounded: source geometry uses `190x360px` cards with `16px` radii.
- Use Druk Wide WideMedium only for prominent display and product-title text; use Montserrat for labels, actions, and prices.
- Use the extracted effect names and exact offsets rather than approximating shadows.
- The source contains no spacing tokens, component families, local text styles, local variables, or grid styles.
