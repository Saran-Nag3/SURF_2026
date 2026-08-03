---
name: logitech-g502-app-design-community
source: Logitech G502 App Design (Community) / Page 1
kind: design-system-context
---

# logitech - Design System

## Overview

- Source: Logitech G502 App Design (Community), Page 1.
- Two mobile screen compositions are shown, each sized 428×926px.
- The visual direction combines gaming-product presentation, large display typography, rounded cards, bold calls to action, and blue accent treatments.
- No local variables, styles, components, grids, spacing tokens, radius tokens, motion tokens, or effect styles were extracted.

## Design language

- Product-focused gaming aesthetic with strong, oversized headlines.
- Use bold Poppins typography for primary branding and headings.
- Use Montserrat Medium for the primary purchase call to action.
- Pair black or white text with blue visual accents.
- Use rounded mobile frames and rounded call-to-action surfaces.
- Include decorative product visuals and image-based hero content where available.

## Color palette

| Color | Usage count | Usage |
|---|---:|---|
| `#000000` | 7 | Primary text, menu lines, and dark visual details |
| `#FFFFFF` | 5 | Mobile frame backgrounds and reversed text |

Additional blue accent colors are present in the source artwork, but are not included as palette tokens.

## Type scale

### Poppins

- Poppins Bold, 130px — `G502` display branding.
- Poppins Bold, 35px — `A REBORN HERO` heading.
- Poppins Bold, 25px — `G502 HERO HIGH PERFORMANCE` heading.
- Poppins Bold, 20px — feature labels.
- Poppins Medium, 23px — price symbol and amount.
- Poppins Medium, 20px — `GAMING MOUSE` supporting label.
- Poppins Medium, 15px — descriptive body copy.

### Montserrat

- Montserrat Medium, 18px — `Buy now` call to action.

## Spacing scale

_None found in source._

## Radius scale

Extracted geometry values:

- 0px — unrounded groups and lines.
- 32px — buy box and arrow surfaces.
- 45px — decorative outlined rectangle.
- 50px — mobile screen frames.

## Elevation & effects

- Background rectangles use repeated drop shadows with a 4px offset on the vertical axis and a 4px blur value.
- No local effect styles were extracted.
- Large decorative and image areas are used to create visual depth behind foreground text and controls.

## Components

_None found in source._

## Screen patterns

### Product landing screen

- 428×926px mobile frame with a 50px radius and white background.
- Large `G502` display wordmark.
- Hamburger menu positioned near the top.
- Decorative visual group beneath the branding.
- Hero heading: `A REBORN HERO`.
- Supporting paragraph copy below the heading.
- Two feature statements with adjacent circular indicators.
- Price display using a currency symbol and numeric amount.
- Rounded `Buy now` action surface.

### Product detail or promotional screen

- 428×926px mobile frame with layered dark and blue background rectangles.
- Product imagery occupies the central content area.
- White product heading: `G502 HERO HIGH PERFORMANCE`.
- Supporting label: `GAMING MOUSE`.
- Large rounded arrow control overlays the composition.
- Image assets are present in the source and should be retained when implementing the screen.

## Notes for implementers

- Treat the two extracted frames as separate mobile screen states.
- Preserve the 428×926px frame size and 50px outer radius.
- Use the listed font families, weights, and sizes exactly where corresponding text appears.
- Keep `G502` as the dominant display element at 130px Poppins Bold.
- Use rounded 32px surfaces for the purchase and arrow controls.
- The source contains image fills and decorative visual groups; do not replace these with invented component families.
- No reusable component specifications or spacing tokens are available in the source.
