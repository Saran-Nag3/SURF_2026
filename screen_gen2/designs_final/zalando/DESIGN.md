---
name: zalando-web-header-ui-kit-community
source: Zalando Web Header UI Kit (Community)
kind: design-system-context
---

# zalando - Design System

## Overview

Zalando Web Header UI Kit (Community), covering the Cover and Header Layout screens. The system includes Header, Main promotional carousel, Icon Combo, and Icons component families. No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- High-contrast editorial commerce interface.
- Primary UI surfaces use white, near-black, light gray, and colorful promotional backgrounds.
- Promotional Main variants use centered 1920px-wide layouts with a 536.23px height.
- Promotional content combines iconography, a short introductory label, and a large heading area.
- Header navigation uses compact bold category links, a centered logo, utility icons, a secondary category row, and a search field.
- Decorative geometric artwork appears in Main promotional variants.
- Dark Mode variants use #1A1A1A backgrounds with #FFFFFF text and icons.

## Color palette

Ranked by observed usage:

| Color | Uses | Usage |
|---|---:|---|
| #FFFFFF | 229 | Primary background, icon, text, and control color |
| #1A1A1A | 119 | Primary text and dark background |
| #6328E0 | 26 | Skip-link text |
| #D0D1D3 | 14 | Borders and dividers |
| #EFEFF0 | 8 | Light promotional and search backgrounds |
| #467AAD | 7 | Blue Main background |
| #C96240 | 7 | Red Main background |
| #CA6F2A | 7 | Orange Main background |
| #F2CA3C | 7 | Yellow Main background |
| #00000033 | 6 | Transparent black color |
| #B1548E | 6 | Purple Main background |
| #9747FF | 3 | Main component-set stroke |
| #FF6900 | 3 | Orange brand accent |

## Type scale

Raw typography:

| Font | Weight/style | Size | Uses |
|---|---|---:|---:|
| Helvetica | Bold | 13px | 39 |
| Helvetica | Bold | 15px | 39 |
| Helvetica | Bold | 27px | 13 |
| Times New Roman TimesNewRomanPSMT | Regular | 28px | 13 |
| Helvetica | Regular | 14px | 7 |

Hierarchy from largest to smallest:

- 28px: Times New Roman TimesNewRomanPSMT
- 27px: Helvetica Bold
- 15px: Helvetica Bold
- 14px: Helvetica Regular
- 13px: Helvetica Bold

Component text references also include Inter Regular 16px, Inter Bold 15px, and Inter Bold 14px in Header, plus Inter Regular 16px in the search input.

## Spacing scale

No spacing variables were found. Observed component spacing and padding:

- Icons: gap 8px; padding 0 0 0 0px.
- Icon Combo: gap 6px or 8px; padding 0 0 0 0px.
- Cover Icon Combo: gap 18.6px or 24px.
- Cover Icons: gap 24.8px; padding 0 0 0 0px.
- Main content block: vertical gap 16px; left padding 16px.
- Main Icon Combo: gap 4px, 6px, 8px, or 10px.
- Main Heading 2 frame: right padding 75.66px.
- Main carousel navigation Button: padding 9px on all sides.
- Header utility tools: padding 12px 12px 22px 12px; gap 22px.
- Header bottom row: gap 404.14px.
- Header wrapper and rows: gap 0px; padding 0 0 0 0px.

## Radius scale

Observed radii:

- 24px: Cover Frame 1.
- 5px: Main component set.

No radius variables were found.

## Elevation & effects

- No local effect styles were found.
- Main component-set stroke: #9747FF, 1px.
- Header category overlay divider: #D0D1D3, 1px.
- Carousel Button stroke: #D0D1D3, 1px.
- Carousel Button opacity: 90%.
- No shadows or elevation values were found.

## Components

### Header

- Family: Header.
- Size: 1920x96px.
- Primary fill: #FFFFFF.
- Inner wrapper: 1200x100px.
- Top row: 1200x60px.
- Bottom row: 1200x40px.
- Top navigation contains Women, Men, and Kids links.
- Centered logo frame: 120x24.23px.
- Utility navigation contains three 20x20px icon links.
- Bottom navigation contains Clothing, Shoes, Accessories, Sports, Designer, Brands, and Sale.
- Search field: 288x36px with #EFEFF0 fill.
- Search icon frame: 18x18px.
- Search input frame: 238x24px.
- Category overlay container: 1920x1px with #D0D1D3, 1px stroke.

### Main

- Family: Main.
- Base size: 1920x536.23px.
- Main component set size: 3912x3529.38px.
- Component-set radius: 5px.
- Component-set stroke: #9747FF, 1px.
- Variants:
  - Combo: Fashion, Color: Yellow, Dark Mode: False — background #F2CA3C.
  - Combo: Free delivery, Color: Red, Dark Mode: False — background #C96240.
  - Combo: Brands, Color: Purple, Dark Mode: False — background #B1548E.
  - Combo: Own, Color: Blue, Dark Mode: False — background #467AAD.
  - Combo: Transparency, Color: White, Dark Mode: False — background #EFEFF0.
  - Combo: Pay, Color: Orange, Dark Mode: False — background #CA6F2A.
  - Dark Mode variants use #1A1A1A background for the documented Fashion and Free delivery combinations.
- Content area: 1216x536.23px, centered horizontally.
- Decorative artwork area: 709.33x500.23px.
- Intro label: Helvetica Bold, 13px.
- Content block uses 16px left padding and 16px vertical gap.
- Heading 2 frame uses a 64px height and 75.66px right padding.
- Carousel includes forward and backward skip links in #6328E0.
- Carousel Button: 42x42px, #FFFFFF fill, #D0D1D3 1px stroke, 90% opacity.
- Button icon frame: 24x24px.

### Icon Combo

- Family: Icon Combo.
- Base size: 179.24x40px.
- Horizontal layout.
- Fixed width and height.
- Padding: 0 0 0 0px.
- Gap: 6px.
- Variants:
  - Combo: Assortment
  - Combo: Brands
  - Combo: Delivery
  - Combo: Payment
  - Combo: Style Profile
  - Combo: Sustainability
  - Num: 3x
  - Num: 4x
- Fill: #FFFFFF.

### Icons

- Family: Icons.
- Base size: 41.28x39.94px.
- Vertical layout.
- Fixed width and height.
- Padding: 0 0 0 0px.
- Gap: 8px.
- Fill: #FFFFFF.
- Variants: Arrow, Check, Circular Economy, Coins, Double Swirl, Eye, Eye Lashes, Factory, Freight, Heart, Leaf, Mix, Shield, Shopping, Smile, Sparkle, Swirl, Wallet.

## Screen patterns

### Cover

- Canvas: 1600x960px.
- Background: #1A1A1A.
- Includes an orange decorative vector using #FF6900.
- Centered Zalando logo group includes white and orange brand elements.
- Multiple large white Icon Combo and Icons arrangements appear toward the top and right.
- Main promotional frame: 1216x536px with 24px radius.
- Cover promotional content uses the Main carousel pattern.

### Header Layout

- Header screen uses a 1920x96px Header component.
- Content is organized inside a 1200px-wide wrapper.
- Top row contains primary navigation, centered logo, and utility icons.
- Bottom row contains category navigation and search.
- Main screen presents six documented light-mode promotional combinations and documented dark-mode combinations.
- Each Main item is 1920x536.23px and uses a full-width color background, centered content, decorative artwork, Icon Combo, heading area, skip links, and carousel control.

## Notes for implementers

- Use only the documented component families: Header, Icon Combo, Icons, and Main.
- Preserve the exact Main height of 536.23px and Header height of 96px.
- Keep Main content centered in a 1216px-wide area within the 1920px-wide promotional surface.
- Use the specified background color for each Main `Combo` and `Color` variant.
- Treat #EFEFF0 as the light neutral promotional background for the White variant and as the Header search background.
- Use #FFFFFF for Main icons and for text on dark or saturated backgrounds.
- Use #1A1A1A for standard Header text and dark-mode Main backgrounds.
- Maintain the 42x42px carousel Button with 9px padding, 1px #D0D1D3 stroke, and 90% opacity.
- Do not introduce additional tokens, component families, colors, typography styles, spacing values, radii, shadows, or motion not listed in this document.
