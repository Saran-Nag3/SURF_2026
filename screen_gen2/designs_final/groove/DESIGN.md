---
name: green-groove-e-commerce-website-community
source: Green Groove E-Commerce Website (Community)
kind: design-system-context
---

# groove - Design System

## Overview

Green Groove is a desktop e-commerce page shown at 1628px × 4371px. The screen includes:

- A header with category navigation and search-oriented controls.
- A large rounded promotional image carousel.
- Repeated product category sections for Fruits & Vegetables, Dairy Products, Snacks, and Beauty.
- Product cards with imagery, product names, pack sizes, ratings, current prices, crossed-out previous prices, and carousel controls.
- A dark footer with support, company, delivery, contact, subscription, social, and policy links.

## Design language

- Bright, retail-focused visual language using high-contrast blue, yellow, white, and black.
- Poppins is used throughout product merchandising and category content.
- Lato is used prominently for footer navigation and support content.
- Product sections use large white cards with rounded corners and drop shadows.
- Product names are bold blue; product metadata is medium blue.
- Current prices are large black Poppins Medium text.
- Previous prices are lighter, smaller black text with a black strike-through line.
- Category headings are bold black text separated from product content by a black horizontal rule.
- Product groups present four products in a horizontal carousel layout with left and right chevron controls.
- Promotional imagery uses large rounded corners.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role |
|---|---:|---|
| #00000059 | 80 | Translucent black usage |
| #FFD900 | 80 | Yellow accent |
| #000000 | 73 | Primary text, borders, and lines |
| #FFFFFF | 41 | Card, control, and footer text color |
| #0561EB | 16 | Product names and primary blue emphasis |
| #4186EF | 16 | Product metadata and quantity labels |
| #332F2F | 13 | Dark neutral |
| #627CD7 | 4 | “see more >” link color |

## Type scale

Typography uses Poppins and Lato. No local text styles were found.

| Size | Family and weight | Observed usage |
|---:|---|---:|
| 40px | Poppins Medium | Current product prices |
| 36px | Poppins Medium | Raw typography token |
| 35px | Poppins Bold | Category headings |
| 32px | Poppins Light | Previous product prices |
| 25px | Poppins Bold | Product names |
| 25px | Poppins Medium | Product metadata |
| 25px | Poppins Regular | “see more >” |
| 24px | Lato ExtraBold | Footer headings; 3 uses |
| 24px | Lato Medium | Footer policy text; 3 uses |
| 24px | Lato SemiBold | Footer navigation headings; 7 uses |
| 24px | Poppins Medium | Raw typography token |
| 20px | Poppins Medium | Raw typography token |
| 48px | Lato ExtraBold | “Green Groove” footer branding |
| 24px | Poppins SemiBold | “Subscribe” label |

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- 10px: carousel navigation buttons.
- 15px: header controls.
- 30px: product category cards.
- 55px: promotional hero image.
- 71px: one product image.
- 0px: groups and containers with explicitly square corners.

## Elevation & effects

- Product category cards use a drop shadow with 4px offset and a vertical offset of 4px.
- The promotional hero image uses a drop shadow with 4px offset and a vertical offset of 4px.
- The Fruits & Vegetables group also has the same drop-shadow treatment.
- Product images are generally rectangular; individual images may use rounded corners.

## Components

_None found in source._

## Screen patterns

### Header

A wide desktop header spans approximately 1640px in width and includes a prominent top region, a white rounded control measuring 749px × 59px, a secondary light control measuring 217px × 59px, and “All categories” navigation text at 24px Poppins Medium.

### Promotional carousel

A large promotional image area measures approximately 1517px × 561px within a 1521px × 561px group. It uses 55px rounded corners, a drop shadow with 4px offset and a vertical offset of 4px, and left/right chevron controls measuring 70px × 80px.

### Product category carousel

Each category section is approximately 1551px × 642px and uses a white card with 30px rounded corners and a drop shadow. The pattern includes:

- A bold black category title at 35px Poppins Bold.
- A black horizontal divider.
- Four horizontally arranged product cards.
- Product imagery.
- Decorative star ratings.
- Blue product names and metadata.
- Large black current prices at 40px Poppins Medium.
- Smaller black previous prices at 32px Poppins Light with strike-through lines.
- Left and right navigation buttons measuring 50px × 54.59px, with 10px rounded corners and 2px black strokes.
- A “see more >” link in #627CD7 at 25px Poppins Regular.

Observed category titles are:

- Fruits & Vegetables
- Dairy Products
- Snacks
- Beauty

### Product card

Product cards combine an image, product name, quantity or pack-size label, decorative star rating, current price, previous price, and a strike-through line. Product names use #0561EB; metadata uses #4186EF; prices use #000000.

### Footer

The footer is a dark section approximately 1588px × 642px. It contains white support and navigation text, footer branding, social imagery, subscription content, contact links, and policy navigation. Footer headings use Lato at 24px, while supporting content uses Poppins Medium at 24px.

## Notes for implementers

- Treat the page as a desktop-first e-commerce layout.
- Preserve the strong blue product-name and metadata hierarchy.
- Use Poppins for product merchandising and category sections; use Lato for footer navigation and support content.
- Keep current prices visually dominant over previous prices.
- Render previous prices with a black strike-through line.
- Use 30px rounded white cards for product category sections.
- Use 50px × 54.59px navigation buttons with 10px radius and 2px black strokes inside category carousels.
- Use 70px × 80px chevron controls for the promotional carousel.
- No local variables, text styles, spacing styles, radius styles, effect styles, grid styles, component families, or component geometry were found.
