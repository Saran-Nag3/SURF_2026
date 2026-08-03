---
name: i-drip-e-commerce-app-community
source: i drip e-commerce app (Community)
kind: design-system-context
---

# drip - Design System

## Overview

- Source: Figma file `i drip e-commerce app (Community)`.
- Source page: `All pages (3): cover, hi-fi UI, behance | dribble`.
- No local variable collections were found.
- The product UI is a mobile e-commerce app centered on consumer electronics, with product cards, wishlist items, top navigation, search, and bottom tab navigation.
- Primary extracted mobile width: `414px`.

## Design language

- Light, minimal commerce interface using dark text on white and pale blue-white surfaces.
- Product imagery is presented in rounded cards with soft shadows.
- Branding uses `iDrip` in bold typography.
- Navigation uses compact outlined icons paired with medium-weight labels.
- Active navigation states use yellow-orange.
- Headings use italic emphasis in several prominent screen titles.
- The cover presentation uses a green background and a large dark `iDRIP app` title.
- Product cards use a white outer surface and a pale `#F4FAFF` image area.

## Color palette

Ranked by raw usage where counts were provided:

| Color | Raw usage | Usage |
|---|---:|---|
| `#000000` | 72 | Darkest icon, vector, and structural color |
| `#FFFFFF` | 31 | White card and surface color |
| `#F4FAFF80` | 8 | Translucent pale surface |
| `#02040F` | 7 | Near-black brand and text color |
| `#344A5E` | 6 | Blue-gray raw color |
| `#F6AE2D99` | 6 | Translucent yellow-orange |
| `#212529CC` | 4 | Translucent dark |
| `#C4C4C4` | 4 | Neutral gray |
| `#D6D9E0` | 4 | Light gray |
| `#F4F6FA` | 4 | Very light neutral surface |
| `#F5FFEE` | 4 | Pale green surface |
| `#212529` | 3 | Dark semantic text color |
| `#A1C89B` | 3 | Cover background green |

Additional extracted semantic colors:

- Primary: `#5956E9`.
- Yellow: `#F6AE2D`.
- Gray: `#CBCBD4`.
- Dark secondary: `#C9A19C`.
- White: `#FAFBFC`.
- Text gray 60: `#A6A6AA`.
- Text gray 80: `#3A3A3A`.
- Secondary blue: `#5FA1D5`.
- Secondary blue 20: `#ECF6FF`.
- Dark primary: `#000000`.
- Dark white: `#F4FAFF`.

The extracted `orange` token has no color value.

## Type scale

### Extracted named styles

- `Text / Body Sm Alt`: Lato Bold, `12px`, line height `16px`, tracking `0px`.
- `Interactions / Pill Sm`: Lato ExtraBold, `12px`, line height `12px`, tracking `0px`.

### Raw styles ranked by usage

| Font | Size | Usage |
|---|---:|---:|
| Roboto Regular | `15px` | 39 |
| Roboto Medium | `14px` | 38 |
| Lato Bold | `14px` | 37 |
| Lato Bold | `20px` | 14 |
| Roboto Black | `14px` | 7 |
| Roboto Bold | `24px` | 7 |
| Roboto BoldItalic | `26px` | 7 |
| Lato ExtraBold | `14px` | 6 |
| Lato ExtraBold | `9px` | 6 |
| Roboto SemiBold | `17px` | 6 |
| Roboto BoldItalic | `14px` | 5 |
| Lato Medium | `48px` | 4 |
| Roboto Bold | `20px` | 4 |
| Roboto ExtraBold | `24px` | 4 |
| Roboto Regular | `17px` | 4 |
| Roboto BoldItalic | `18px` | 3 |

### Hierarchy

- `48px`: Lato Medium.
- `26px`: Roboto BoldItalic.
- `24px`: Roboto Bold or Roboto ExtraBold.
- `20px`: Lato Bold or Roboto Bold.
- `18px`: Roboto BoldItalic.
- `17px`: Roboto Regular or Roboto SemiBold.
- `15px`: Roboto Regular.
- `14px`: Lato Bold, Lato ExtraBold, Roboto Black, Roboto BoldItalic, or Roboto Medium.
- `12px`: Lato ExtraBold pill text or Lato Bold body text.
- `9px`: Lato ExtraBold.

## Spacing scale

_No spacing variables found in source._

Observed grid values:

- Grid columns: `8`.
- Section: `31.75px`.
- Gutter: `16px`.
- Alignment: stretch.

## Radius scale

_No radius variables found in source._

Observed radii:

- `10px`: product cards and upper product-image sections.
- `28px`: active navigation indicator.
- `0px`: square or unrounded grouped containers.
- `10/10/0/0px`: top-rounded product-image sections.
- `10/10/0/0px`: top-rounded bottom tab bar surface.

## Elevation & effects

- Product drop shadow: `drop_shadow 40px offset 0 20 #0000001A`.
- Product cards visibly use soft drop shadows.
- Product image areas use inner-shadow and drop-shadow treatments in the source.
- Top navigation and bottom tab bars use shadow treatments.
- The source contains additional shadow effects whose extracted colors are not included in the allowed palette.

## Components

_None found in source._

## Screen patterns

- **Cover / presentation slide**
  - Frame: `1920x1080px`.
  - Background: `#A1C89B`.
  - Large `iDRIP app` title in dark Roboto Black at `128px`.
  - Includes a mobile category screen showcase and an iPhone presentation mockup.

- **Category main screen**
  - Frame: `414x1604px`.
  - Top navigation with `iDrip`, search, and menu controls.
  - Promotional hero area with the message `find anything, buy anything`.
  - Repeated `165x223px` product cards.
  - Bottom tab bar with Category, Home, Cart, Account, and Wishlist.
  - Active navigation uses yellow-orange.

- **Home screen**
  - Frame: `414x2190px`.
  - Mobile e-commerce layout with top navigation, product content, and bottom tab navigation.
  - Product imagery uses pale `#F4FAFF` card areas and white outer cards.

- **Wishlist screen**
  - Frame: `414x1248px`.
  - Title: `My wishlist`.
  - Repeated `165x275px` product cards.
  - Cards include product image, rating, price, product name, star icon, and wishlist/action icon.
  - Wishlist navigation item and bookmark icon use yellow-orange as the active state.

- **Bottom tab navigation**
  - Frame: `414x110px`.
  - Surface: `#F4FAFF`.
  - Rounded top corners: `10/10/0/0px`.
  - Labels use Roboto Medium, `14px`.
  - Icons are approximately `20px` high.
  - Active state includes yellow-orange icon/text and a `32x2px` rounded indicator.

- **Product cards**
  - Category cards: `165x223px`.
  - Wishlist cards: `165x275px`.
  - Outer surface: white with `10px` radius.
  - Image region: pale `#F4FAFF`, top corners rounded.
  - Product prices use Lato Bold.
  - Wishlist product names use Roboto Regular, `15px`.
  - Ratings use the named Lato Bold `12px / 16px` style.

## Notes for implementers

- Use only the extracted colors listed in the palette; do not introduce additional colors.
- Preserve the distinction between opaque yellow-orange `#F6AE2D` and translucent `#F6AE2D99`.
- Use Roboto for most navigation, product, and heading text; use Lato for prices, compact body text, and pill interactions.
- Treat `414px` as the primary mobile layout width.
- Preserve the repeated product-card proportions: `165x223px` for category content and `165x275px` for wishlist content.
- Keep product imagery inside pale `#F4FAFF` image regions with top-only corner rounding.
- Use yellow-orange for active navigation, star icons, and active indicators.
- Do not infer reusable component families or missing spacing and radius variables; none were extracted.
