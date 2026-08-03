---
name: ralph-lauren-web-design-by-me-community
source: Ralph Lauren web design by me. (Community)
kind: design-system-context
---

# ralph-lauren - Design System

## Overview

A minimal Ralph Lauren web layout centered on editorial typography, monochrome black styling, image-led content, and sparse navigation. The source contains two screens: a primary promotional frame and a utility icon frame.

## Design language

- Monochrome visual system using black text and strokes.
- Serif-led brand typography using Jacques Francois Regular.
- Large editorial display treatments for “Ralph Lauren” and “POLO”.
- Navigation is compact and text-based: “Men”, “Women”, “Kids”, “Home”, and “Discover”.
- Promotional actions use uppercase labels with underlines: “SHOP NOW” and “EXPLORE NOW”.
- Image assets are prominent, including a 500x700px image and a 440x600px image.
- The layout uses generous whitespace, fixed-size frames, and thin 1px rules.

## Color palette

| Color | Usage |
|---|---:|
| #000000 | 19 uses; text, icons, and strokes |

No local paint styles or color variables were found.

## Type scale

| Font | Size | Observed usage |
|---|---:|---|
| Jacques Francois Regular | 10px | Promotional action labels |
| Jacques Francois Regular | 15px | Navigation and raw typography token; 5 uses |
| Jacques Francois Regular | 38px | “Ralph Lauren” heading |
| Jacques Francois Regular | 50px | “Ralph Lauren” promotional heading |
| Inter Bold | 50px | “ACTIVE CLUB” promotional heading |
| Jacques Francois Regular | 76px | “POLO” heading |

## Spacing scale

Observed spacing values:

- 0px padding in extracted frames.
- 10px gap in the navigation frame.
- 22px gap between utility icon groups.
- 30px gap between promotional actions.
- 43px gap in the “POLO” content frame.
- 60px gap in the promotional heading frame.

## Radius scale

_None found in source._

## Elevation & effects

_No local effect styles, motion tokens, or elevation values found in source._

Observed rules use a 1px black stroke.

## Components

_No component families or component geometry found in source._

## Screen patterns

- **Primary promotional frame:** A 1961x1000px frame containing the “Ralph Lauren” brand heading, category navigation, a 500x700px image, a “POLO” heading paired with a 440x600px image, an “Ralph Lauren” / “ACTIVE CLUB” promotional heading pair, two underlined action labels, and a full-width 1px rule.
- **Utility icon frame:** A 191x35px horizontal frame containing search, person outline, favorite border, and shopping bag icons. The gap between icon groups is 22px.

## Notes for implementers

- Use #000000 for all extracted text, icon, and rule styling.
- Preserve the serif character of Jacques Francois Regular for brand, navigation, and action text.
- Use the observed display sizes explicitly: 38px, 50px, and 76px.
- Keep promotional actions uppercase and underlined.
- Keep utility controls as separate icon groups with 22px spacing.
- Treat the two image areas as fixed observed dimensions: 500x700px and 440x600px.
- No component family, radius, local effect, motion, or spacing token definitions were extracted; do not assume additional values.
