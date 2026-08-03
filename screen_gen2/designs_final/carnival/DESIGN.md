---
name: carnival-app-design-for-ipad-mini-community
source: Carnival app design for iPad mini (Community)
kind: design-system-context
---

# carnival - Design System

## Overview

A carnival-themed iPad mini promotional experience presented across two visual screens:

- A 1133×744px iPad mini layout with split image regions, carnival branding, event details, ticket call-to-action, and location imagery.
- A 400×300px Dribbble shot layout combining two image regions.

No local Figma variables, styles, components, or component sets were found.

## Design language

- Playful, theatrical carnival presentation centered on large display typography and photographic imagery.
- Strong contrast between white and black text treatments.
- Use oversized headings for brand and promotional messaging.
- Combine Katibeh for expressive carnival headlines, Kodchasan for event information and ticket messaging, and Roboto Bold for the primary action.
- Use rounded containers and pronounced black shadows to create emphasis and depth.
- Layouts use large image areas as the primary visual backdrop.

## Color palette

| Color | Usage |
|---|---|
| #FFFFFF | Frame fill, brand title, primary action text |
| #000000 | Promotional text and event information |

Raw usage counts:

- #000000: 4 uses
- #FFFFFF: 4 uses

## Type scale

| Font family | Weight | Size | Usage |
|---|---|---:|---|
| Katibeh | Regular | 144px | “Carnival” brand title |
| Katibeh | Regular | 72px | “Fun, laugh & Magic” heading |
| Katibeh | Regular | 64px | “Carnival road” heading |
| Kodchasan | Regular | 48px | Event date |
| Kodchasan | Bold | 43px | Ticket prompt |
| Roboto | Bold | 49px | “Book Tickets” action |

## Spacing scale

_None found in source._

## Radius scale

| Radius | Usage |
|---:|---|
| 50px | iPad mini frame |
| 20px | Ticket/action rectangle |

## Elevation & effects

- “Carnival” uses a black drop shadow with 4px offset and a vertical offset of 4px.
- The ticket/action rectangle uses three black drop shadows, each with 4px offset and a vertical offset of 4px, plus an inner shadow with the same offset.
- “Book Tickets” uses two black drop shadows, each with 4px offset and a vertical offset of 4px.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

### iPad mini promotional screen

- Frame size: 1133×744px.
- Rounded frame with a 50px radius and white fill.
- Two adjacent full-height image regions: 530×744px and 603×744px.
- Promotional text includes:
  - “Carnival”
  - “Fun, laugh & Magic”
  - “Carnival road”
  - “16 - 23 March 2022”
  - “Get your tickets Now!!”
- Includes a 341×109px rounded rectangle with a 20px radius.
- Includes a 287×57px “Book Tickets” action label.
- Includes a 69×49px location image region.

### Dribbble shot

- Frame size: 400×300px with a white fill.
- Contains a 500×750px image region and a 400×300px image region.

## Notes for implementers

- Preserve the source dimensions when reproducing the extracted screens.
- Treat the two image regions in the iPad mini screen as full-height visual panels.
- Keep “Carnival” as the dominant brand element at 144px Katibeh Regular.
- Use the specified font family, weight, and size for each text role; do not substitute styles between roles.
- Maintain the 50px outer frame radius and 20px ticket/action rectangle radius.
- Reproduce the specified black shadow layering on the brand title, ticket/action rectangle, and “Book Tickets” label.
- No reusable component specifications, spacing tokens, motion tokens, grid styles, or local style names were provided.
