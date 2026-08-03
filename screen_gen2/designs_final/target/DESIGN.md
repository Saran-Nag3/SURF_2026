---
name: target-wireframe-community
source: Target wireframe (Community)
kind: design-system-context
---

# target - Design System

## Overview

A Target wireframe design for a 1440x900px MacBook Pro screen. The interface uses a red header, grayscale wireframe surfaces, black outlines, and white content areas.

- Source page: Page 1
- Primary component family: MacBook Pro - 1
- Component size: 1440x900px
- No local variables, paint styles, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Wireframe-oriented layout with grayscale placeholders and high-contrast red branding.
- Use #CC0200 for the primary 1440x89px header region.
- Use #FFFFFF for the main screen background, search field, circular control, square control, and content cards.
- Use #C4C4C4 for navigation blocks, utility controls, image or content placeholders, and other neutral surfaces.
- Use #000000 for text and 1px outlines.
- Typography uses Roboto with regular, bold, and light weights represented in the source.

## Color palette

Ranked by raw usage count:

| Color | Usage | Source roles |
|---|---:|---|
| #000000 | 25 uses | Text and 1px strokes |
| #C4C4C4 | 15 uses | Neutral placeholder and control surfaces |
| #FFFFFF | 10 uses | Screen background, fields, controls, and cards |
| #CC0200 | 6 uses | Primary header fill |

## Type scale

| Size | Family | Weight | Usage |
|---:|---|---|---:|
| 24px | Roboto | Bold | Navigation text and “Join Target Membership” heading |
| 18px | Roboto | Regular | Raw typography token |
| 24px | Roboto | Light | “Search” text in the component specification |
| 12px | Roboto | Regular | “You’re shopping (Closing Time) Location” text |

Typography hierarchy identified in the source:

1. 24px Roboto Bold
2. 18px Roboto Regular

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

_None found in source._

## Components

### MacBook Pro - 1

- Family: MacBook Pro - 1
- Size: 1440x900px
- Fill: #FFFFFF
- Text styles represented: Roboto Regular 18px, Roboto Bold 24px, Roboto Regular 12px, Roboto Light 24px
- Constraints: left/top

Key component regions:

- Header: 1440x89px, fill #CC0200.
- Secondary bar: 1440x44px, fill #FFFFFF, with a 1px #000000 stroke.
- Navigation text: “Categories Deals What’s New Pickup & Delivery”, Roboto Bold 24px, fill #FFFFFF.
- Search field: 544x31px, fill #FFFFFF.
- Search label: “Search”, Roboto Light 24px.
- Utility controls: 31x31px and 34x34px controls, using #C4C4C4 and #FFFFFF.
- Shopping-location text: “You’re shopping (Closing Time) Location”, Roboto Regular 12px, fill #000000.
- Membership heading: “Join Target Membership”, Roboto Bold 24px, fill #000000.
- Content cards: 168x248px and 123x248px cards, fill #FFFFFF.
- Primary outlined regions include 1px #000000 strokes.

## Screen patterns

### Page 1 / MacBook Pro - 1

- Desktop frame: 1440x900px.
- Red primary header across the full 1440px width.
- White secondary bar below the header.
- Navigation content appears within the red header.
- Search and utility controls appear in the upper navigation area.
- A large grayscale content region uses a 1013x455px area and a 1013x275px area.
- A membership section includes a 409x109px neutral region and a “Join Target Membership” heading.
- Lower content includes multiple white cards with 248px height.
- Black 1px lines define major regions.

## Notes for implementers

- Treat the extraction as a wireframe specification; no local Figma style or variable names are available.
- Preserve the 1440x900px MacBook Pro - 1 frame size.
- Use only the extracted palette: #000000, #C4C4C4, #CC0200, and #FFFFFF.
- Preserve the visual priority of the #CC0200 header, white secondary navigation, grayscale placeholders, and black outlines.
- Use the listed Roboto sizes and weights without introducing additional typography values.
- No spacing, radius, elevation, motion, or effect tokens were defined; do not infer them as system tokens.
