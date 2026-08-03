---
name: puma-website-ui-community
source: Puma Website UI (Community)
kind: design-system-context
---

# puma - Design System

## Overview

A dark Puma footwear showcase interface for desktop at 1440×1024px, featuring a centered hero product, navigation, product information, and a three-item product rail. A separate cover screen uses a full-screen image.

## Design language

- Dark, high-contrast editorial sportswear presentation.
- White typography and interface marks against a dark canvas.
- Large centered product imagery with layered circular and blurred atmospheric decoration.
- Navigation is horizontally arranged across the top with generous spacing.
- Product cards use translucent white surfaces, thin white strokes, and compact product metadata.
- The hero headline uses an oversized thin weight; supporting product copy is lighter and smaller.
- Product imagery is a primary visual focus, supported by soft glow, shadow, and blur effects.

## Color palette

Ranked by usage:

| Color | Usage |
|---|---:|
| #FFFFFF | 32 |
| #D9D9D91A | 5 |
| #000000 | 3 |
| #FFFFFF0D | 3 |

## Type scale

Font family: Inter.

| Size | Weight | Observed usage |
|---:|---|---|
| 75px | Thin | Hero heading |
| 32px | Light | Hero product title |
| 20px | Regular | Primary navigation and supporting price |
| 20px | SemiBold | Hero price |
| 13.53px | Light | Product-card title |
| 10.52px | SemiBold | Product-card price |

## Spacing scale

Observed gaps and spacing values:

- 3px: compact stacked line-frame gap.
- 17.28px: product-card metadata gap.
- 30px: primary navigation item gap.
- 31px: hero product title-to-price gap.
- 78px: product rail item gap.
- 113px: utility/action area gap.
- 240px: header group gap.

## Radius scale

Observed corner radii:

- 9.02px: product-card surface.
- 40px: desktop frame.

## Elevation & effects

- Background blur: 176px on a large overlay rectangle.
- Layer blur: 20px on the hero shadow ellipse.
- Layer blur: 100px on a soft white glow ellipse.
- Layer blur: 67px on a dark glow ellipse.
- Product cards use a 0.38px white stroke.
- Hero decoration uses overlapping translucent ellipses and vector shapes.
- A large elliptical outline is used beneath the hero product area.
- Product imagery includes a soft elliptical grounding shadow.

## Components

_None found in source._

## Screen patterns

- **Page 1 / Desktop - 1:** 1440×1024px desktop hero screen. Includes a top navigation bar, centered Puma mark, category links, utility area, large hero product image, “FOREVER FAST” headline, product title and price, three repeated product cards, and decorative circular effects.
- **Cover / image 1:** 2880×2048px full-screen cover image.

## Notes for implementers

- Preserve the dark, minimal, high-contrast presentation.
- Use Inter and match the observed weights and sizes exactly.
- Keep the hero product centered and visually dominant.
- Use translucent white card surfaces and thin white borders for the product rail.
- Repeat the product-card pattern three times in a horizontally spaced row.
- Treat decorative ellipses, glows, and vectors as atmospheric background layers rather than content.
- No reusable component families or local design tokens were extracted; implement the documented values directly.
