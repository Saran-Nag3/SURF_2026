---
name: prada-ecommerce-website-and-mobile-app-community
source: Prada-Ecommerce website and mobile app (Community)
kind: design-system-context
---

# prada - Design System

## Overview

Prada ecommerce design context for a mobile application and website. The extracted mobile home screen is 414×2670px with a white page background and sections for category navigation, promotional content, trending offers, daily deals, collections, product cards, and bottom navigation.

## Design language

- Fashion-commerce visual language with editorial serif headings and clean sans-serif interface text.
- Primary page background: #FFFFFF.
- Dark text and promotional surfaces commonly use #272727.
- Brand and action emphasis uses deep blue #002482.
- Product discounts use green #0EB000.
- Cards and promotional modules use rounded 10px corners.
- Mobile navigation uses large icon buttons and a white bottom bar.
- Promotional hero content uses white text over a #272727 background.
- Typography combines Libre Baskerville, Playfair Display, SF Pro Display, and Poppins.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role |
|---|---:|---|
| #272727 | 1843 | Primary dark text and dark promotional surfaces |
| #FFFFFF | 1234 | Page, card, button, and navigation backgrounds |
| #848484 | 819 | Secondary text and inactive navigation icons |
| #002482 | 375 | Primary blue actions and selected navigation state |
| #000000 | 334 | Black text and system-interface details |
| #C4C4C4 | 292 | Image and avatar placeholders |
| #0A8200 | 132 | Green semantic accent |
| #223263 | 67 | Dark blue accent |
| #EAEAEA | 60 | Neutral light surface |
| #EBF0FF | 60 | Pale blue surface |
| #0EB000 | 56 | Discount text |
| #9098B1 | 47 | Neutral grey token |
| #F2C94C | 44 | Yellow accent |
| #F0F0F0 | 38 | Light neutral surface |
| #444E66 | 30 | Dark neutral accent |
| #004E49 | — | Component stroke accent |
| #FB7181 | — | Primary red token |
| #40BFFF3D | — | Button shadow color |

Named color tokens:

- Neutral/Grey: #9098B1.
- Background/White: #FFFFFF.
- Primary/Red: #FB7181.

## Type scale

Use the following extracted type styles:

- 48px: Libre Baskerville Bold.
- 36px: Libre Baskerville Bold; SF Pro Display Bold.
- 24px: Libre Baskerville Bold; Libre Baskerville Regular; Playfair Display Bold.
- 20px: SF Pro Display Medium; SF Pro Display Regular.
- 18px: Libre Baskerville Bold; Libre Baskerville Regular; Playfair Display Regular; Poppins Regular; SF Pro Display Bold; SF Pro Display Medium; SF Pro Display Regular.
- 14px: Poppins Bold; SF Pro Display Bold; SF Pro Display Medium; SF Pro Display Regular.
- 12px: Poppins Regular; SF Pro Display Bold; SF Pro Display Regular.

Defined text tokens:

- Button Text: Poppins Bold, 700, 14px, 120% line height, 0.5px tracking.
- form text/normal: Poppins Regular, 400, 12px, 120% line height, 0.5px tracking.

Usage ranking from raw typography:

- Libre Baskerville Regular, 18px: 1000 uses.
- SF Pro Display Regular, 14px: 493 uses.
- Libre Baskerville Bold, 24px: 376 uses.
- SF Pro Display Regular, 12px: 234 uses.
- Libre Baskerville Bold, 18px: 145 uses.
- Playfair Display Regular, 18px: 101 uses.
- SF Pro Display Medium, 20px: 79 uses.
- SF Pro Display Medium, 18px: 78 uses.
- Libre Baskerville Bold, 36px: 63 uses.
- SF Pro Display Regular, 18px: 56 uses.
- SF Pro Display Medium, 14px: 55 uses.
- SF Pro Display Bold, 14px: 53 uses.
- Libre Baskerville Regular, 24px: 50 uses.
- SF Pro Display Regular, 20px: 39 uses.
- SF Pro Display Bold, 18px: 28 uses.
- Playfair Display Bold, 24px: 26 uses.
- Libre Baskerville Bold, 48px: 23 uses.
- Poppins Regular, 18px: 23 uses.
- SF Pro Display Bold, 12px: 22 uses.
- SF Pro Display Bold, 36px: 22 uses.

## Spacing scale

_None found in source._

## Radius scale

- 10px is used for cards, promotional modules, buttons, and product imagery.
- 0px is used for the mobile promotional hero container.

## Elevation & effects

- Button Shadow: drop shadow with 30px offset, 0 10, color #40BFFF3D.
- Button Shadow usage: 9.
- No other elevation or motion tokens were extracted.

## Components

Only use the extracted component families:

- **Frame 266**: 414×38px, #FFFFFF fill, SF Pro Display Regular 14px text.
- **Frame 265**: 414×65px, #FFFFFF fill. Used as a mobile bottom navigation bar with 32px icon frames.
- **Frame 256**: 414×65px, #FFFFFF fill, SF Pro Display Regular 14px text.
- **Frame 254**: 374×599px, #FFFFFF fill. Text styles include SF Pro Display Regular 14px and 20px, and SF Pro Display Medium 20px.
- **Card Component**: 184×317.82px, #FFFFFF fill, 10px radius. Text styles include SF Pro Display Regular 12px and 14px, and SF Pro Display Medium 14px.
- **Frame 259**: 216×294px, #FFFFFF fill, 10px radius. Uses SF Pro Display Medium 20px.
- **Frame 251**: 373×366px, #FFFFFF fill. Uses SF Pro Display Regular 14px, 18px, and 20px; SF Pro Display Bold 36px; and SF Pro Display Medium 20px.
- **Deals of the day**: 179×251px, #FFFFFF fill, 10px radius. Uses SF Pro Display Medium 20px and SF Pro Display Regular 14px.
- **Frame 132**: 469×747px, #FFFFFF fill, 10px radius. Uses Libre Baskerville Bold 36px and 24px.
- **Frame 138**: 172×48px, 10px radius, #000000 2px stroke. Uses SF Pro Display Regular 18px.
- **Frame 125**: 321×455px, #FFFFFF fill, 10px radius. Uses SF Pro Display Regular 18px, SF Pro Display Bold 24px and 18px, and SF Pro Display Medium 24px.
- **Frame 98**: 168×48px, #002482 fill, #004E49 1px stroke, 10px radius. Uses Libre Baskerville Regular 18px.

## Screen patterns

### Mobile application — Home Page

- Canvas: 414×2670px with #FFFFFF fill.
- Top category row: circular 62×62px category placeholders with labels for Men, Women, Kids, Western wear, and Categories.
- Promotional hero: 414×344.67px, #272727 fill, white promotional copy, a white outlined Explore CTA, and a white brand logo.
- Profile/search header: white bar with a 35×35px circular avatar placeholder, user name, and search icon.
- Status area: white bar with time, Wi-Fi, and battery indicators.
- Trending Offers: horizontally arranged 216×294px cards using 10px radius, #FFFFFF fill, and 216×227px image placeholders.
- Deals Of The Day: section containing 179×251px cards with 10px radius, 179×194px image placeholders, category labels, and offer copy.
- Our Collection: section heading with a decorative 101×3px element.
- Product collection: 373×366px product cards with product title, brand, original price, current price, discount percentage, image collage, wishlist action, and Add to Bag action.
- Bottom navigation: 414×65px white bar with home, search, bag, user, and heart icons. Selected home icon uses #002482; inactive icons use #848484.
- Repeated home-screen extraction indicates the same mobile home pattern appears more than once in the source.

## Notes for implementers

- Prefer the ranked raw colors when a role is unspecified; use #272727 for primary dark content and #FFFFFF for backgrounds.
- Use #002482 for primary filled actions and selected navigation states.
- Use #0EB000 for discount messaging.
- Preserve the serif/sans-serif contrast: Libre Baskerville or Playfair Display for editorial emphasis, SF Pro Display for most interface and commerce content, and Poppins only for the defined button and form text tokens.
- Apply 10px radius to cards and buttons where the component specification defines it.
- Do not introduce spacing, radius, motion, grid, or variable tokens that are not listed in the source.
- Use only the listed component families when mapping extracted UI patterns.
