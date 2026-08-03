---
name: nike-shoe-app-concept-community
source: Nike Shoe App Concept (Community)
kind: design-system-context
---

# nike - Design System

## Overview

- Nike shoe shopping app concept covering:
  - Cover presentation screen: 1280 × 720px.
  - Mobile Home screen: 430 × 932px.
  - Mobile Product page: 430 × 932px.
  - Images showcase: 1942 × 1476px.
  - Post showcase containing a scaled Product page presentation.
- Visual direction: monochrome product-commerce UI with green discount labels, blue links, red favorite states, rounded cards, product imagery, and soft shadows.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, grid styles, or component families were found.

## Design language

- Use a predominantly white canvas with near-black primary text and controls.
- Use rounded cards and controls, with pills for category filters.
- Product imagery is prominent and commonly paired with soft drop shadows.
- Primary actions are black circular buttons with white arrow icons.
- Use green for discount labels, blue for secondary links such as “See all” and color counts, and red for active heart states or cart badges.
- Product pages use oversized, low-contrast “NIKE” background typography.
- The mobile layout uses a 430px-wide viewport with 16px horizontal search padding and compact product cards.
- Typography uses Product Sans for the application UI. The Images showcase also uses Inter SemiBold at 56px for its “Images” heading.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role |
|---|---:|---|
| #0A0A0A | 72 | Primary dark text, selected filters, controls |
| #FFFFFF | 68 | Main canvas, cards, icon backgrounds |
| #000000 | 58 | Product text, headings, icon strokes |
| #444444 | 30 | Unselected category labels and borders |
| #797979 | 15 | Secondary product metadata |
| #858585 | 12 | Gray UI usage |
| #2D2D2D | 6 | Rating text |
| #555555 | 6 | 360-view label |
| #FA2A36 | 6 | Active heart stroke |
| #FFFFFF66 | 4 | Translucent white border |
| #FFFFFFB2 | 4 | Translucent white decorative background |
| #767676 | 3 | Gray UI usage |
| #F1F1F1 | 3 | Large low-contrast “NIKE” wordmark |
| #F3F3F3 | 3 | Search field background |

Named semantic colors:

| Token | Value | Observed usage |
|---|---|---|
| Green 1 | #219653 | Discount labels; 15 uses in most-used styles |
| Blue 1 | #2F80ED | “See all” and “+4 Colours”; 9 uses in most-used styles |
| Gray 3 | #828282 | Size options; 15 uses in most-used styles |
| Gray 4 | #BDBDBD | Price and quantity labels; 12 uses in most-used styles |
| Gray 5 | #D9D9D9 | Gray UI elements; 6 uses in most-used styles |
| Red | #EB5757 | Cart quantity badge |
| Orange | #F2994A | 30 uses in most-used styles |

## Type scale

Font families present:

- Product Sans Regular
- Product Sans Bold
- Inter SemiBold, used for the Images showcase heading

Observed Product Sans styles, ordered largest to smallest:

| Size | Weight | Usage count |
|---:|---|---:|
| 38.26px | Bold | 8 |
| 34.44px | Bold | 4 |
| 30.61px | Bold | 4 |
| 30.61px | Regular | 24 |
| 26.78px | Regular | 22 |
| 22.96px | Regular | 22 |
| 20px | Bold | 4 |
| 16px | Regular | 12 |
| 14px | Regular | 11 |
| 12px | Regular | 11 |

Additional observed styles:

- Product Sans Bold, 24px: product price on the Product page.
- Product Sans Bold, 18px: product price in product cards.
- Product Sans Bold, 16px: product price in compact cards.
- Product Sans Bold, 8px: cart badge number.
- Product Sans Regular, 18px: quantity value.
- Product Sans Regular, 4px: 360-view superscript marker.
- Product Sans Bold, 132.44px: mobile Product page “NIKE” background wordmark.
- Product Sans Bold, 253.38px: scaled Post Product page “NIKE” background wordmark.
- Inter SemiBold, 56px: Images showcase heading.

## Spacing scale

Observed spacing and padding values:

- 0px: no padding or gap in several layout frames.
- 2px: product title and metadata gap; product page title metadata gap.
- 6px: vertical padding in category pills.
- 10px: horizontal category-pill padding; category-pill internal gap.
- 12px: product-page thumbnail and control gap.
- 13px: search field internal gap.
- 16px: search field padding; common mobile horizontal inset.
- 18px: category filter gap.
- 36px: product-page size option gap.
- 50px: compact product card shadow blur.
- 70px: product image shadow blur.
- 247px: search field content gap.

Observed layout paddings:

- Search field: 16px top, right, bottom, and left padding.
- Category pills: 6px vertical and 10px horizontal padding.
- Product card title/meta group: 2px vertical gap.
- Product page thumbnail rail: 12px vertical gap.

## Radius scale

Observed corner radii:

- 8px: category pills; product-page back-button container.
- 12px: search field.
- 16px: product cards; product image cards.
- 18px: mobile bottom navigation frame.
- 24px: Product page lower panel and outlined control.
- 45.91px: scaled Product page lower panel and outlined control.
- 86px: scaled Post Product page presentation container.
- 15.3px: scaled back-button container.
- 0px: square or explicitly unrounded groups.

Observed asymmetric radii:

- 18px top-left and top-right, 0px bottom corners: mobile bottom navigation frame.
- 24px top-left and top-right, 0px bottom corners: Product page lower panel.

## Elevation & effects

- Product cards use soft drop shadows with blur values of 50px.
- Product imagery uses drop shadows with blur values of 40px, 50px, 56.67px, and 70px.
- Circular arrow buttons use drop shadows with blur values of 22.14px and 25.71px.
- Product-page back buttons use a 50px drop-shadow blur.
- Product page outlined lower controls use a 50px drop-shadow blur with a negative 2px vertical offset.
- The scaled Post Product page uses a 219px drop-shadow blur with offset 127px horizontal and 145px vertical.
- Decorative Post background ellipses use a 797px layer blur.
- Product imagery can use a shadow offset with positive horizontal and vertical displacement, including 51px horizontal and 34px vertical on the main Product page image.
- No motion tokens or local effect styles were found.

## Components

_None found in source._

No component families or component sets were extracted. Reusable visual patterns observed in screens include:

- Search field: 390 × 56px, 12px radius, #F3F3F3 fill, search icon, “Search” label, and microphone icon.
- Category filter pills: 29px height, 8px radius, 14px Product Sans Regular labels; selected state uses #0A0A0A fill with #FFFFFF text, unselected state uses a #444444 stroke and #444444 text.
- Compact product card: 390 × 132px, 16px radius, #FFFFFF fill, product image, title, metadata, price, discount, rating, favorite, and arrow action.
- Large product card: 289 × 245px, 16px radius, #FFFFFF fill, product image, title, price, discount, metadata, color count, favorite, and arrow action.
- Product page header: oversized “NIKE” wordmark, back button, bag icon with quantity badge, product image, and favorite icon.
- Product page details panel: size selector, price, discount, price label, quantity label, quantity value, and circular 360-view control.

## Screen patterns

- **Cover:** Full 1280 × 720px white presentation canvas with a full-size cover image.
- **Home:** 430 × 932px shopping home screen. Header actions sit above a 390 × 56px search field, followed by horizontally spaced category pills, “New Arrivals” and “Best Sellers” headings, and stacked or horizontally arranged product cards. A white bottom navigation frame spans the viewport width.
- **Product page:** 430 × 932px product detail screen. A large low-contrast “NIKE” wordmark sits behind the header and product image. The lower white details panel has a 24px top radius and contains size choices, price, discount, quantity, and 360-view controls.
- **Images:** 1942 × 1476px white showcase canvas titled “Images” with Inter SemiBold 56px typography and a collage of product image assets at multiple sizes.
- **Post:** Large presentation canvas containing a scaled Product page inside a rounded white frame, translucent white blurred background shapes, and a large soft shadow.

## Notes for implementers

- Preserve the 430px mobile viewport proportions for Home and Product page screens.
- Use Product Sans for application UI text and Product Sans Bold for prices and prominent headings.
- Keep primary text near-black using #0A0A0A or #000000; use #797979, #828282, #BDBDBD, or #555555 for secondary information according to the observed role.
- Use #219653 for discounts, #2F80ED for links and color counts, #FA2A36 for active heart outlines, and #EB5757 for cart badges.
- Do not introduce component families or unsupported design tokens; the source contains no extracted component definitions or local variables.
- Use the observed radius and shadow values rather than substituting generic values.
- Product images are central to the visual hierarchy and should retain their prominent scale and soft shadow treatment.
