---
name: gusto-ui-ux-restaurant-menu-community
source: Gusto || UI\UX Restaurant Menu (Community), Page 1
kind: design-system-context
---

# gusto - Design System

## Overview

Mobile restaurant-menu experience for iPhone 13 & 14 layouts at 390×844px. The screens cover:
- Brand welcome screen with “Gusto” wordmark and “Get started” action.
- Featured content screen with “Original taste” and “Today’s Special” messaging.
- Recipe browsing screen with “All Recipes”, search, menu controls, recipe cards, and “Add Cart” actions.
- Editorial image-led screen with “Original taste” and supporting copy.

## Design language

- Warm, food-focused visual direction using bold yellow, orange, red, black, and white treatments in the source.
- Large expressive display typography for brand and heading copy.
- Rounded mobile containers and action elements.
- Food photography and image assets are prominent in recipe and editorial layouts.
- Gradient fills are used for welcome backgrounds, buttons, and recipe cards.
- Strong contrast between large headings, colorful surfaces, and black utility text.

## Color palette

Ranked by recorded raw usage:
- `#000000` — 8 uses; primary dark text and utility text.
- `#FF4B0C` — 3 uses; orange surface or accent.
- `#FFFFFF` — 3 uses; light surface and divider treatment.

## Type scale

- Jacques Francois Regular, 20px — 6 uses; hierarchy includes “Get started”, “Add Cart”, and utility text.
- Irish Grover Regular, 100px — “Gusto” wordmark.
- Irish Grover Regular, 24px — “Original taste”.
- Jacques Francois Regular, 48px — “Today’s Special” and editorial “Original taste”.
- Jacques Francois Regular, 32px — “All Recipes”.
- Jacques Francois Regular, 24px — “Best Choice” and supporting editorial copy.
- Grenze Gotisch Regular, 20px — time display.

## Spacing scale

_None found in source._

## Radius scale

- 10px — mobile screen frame radius.
- 20px — buttons and recipe-card rectangles.
- 40px — large decorative rounded rectangle.

## Elevation & effects

- Drop shadow: offset `0 4px`, blur/effect value `4px`, applied to the large image-led editorial element.
- No local effect styles found.

## Components

_None found in source._

## Screen patterns

- **Welcome:** 390×844px rounded frame, brand wordmark, decorative fire image, gradient action button, and “Get started” label.
- **Featured special:** yellow/orange composition with layered decorative vectors, multiple food images, large “Today’s Special” heading, and device-status elements.
- **Recipe listing:** orange screen with yellow rounded header panel, “All Recipes” heading, search and alignment controls, repeated 184×276px rounded recipe cards, food imagery, divider lines, and gradient “Add Cart” actions.
- **Editorial detail:** white frame with oversized image background, overlay vector, large yellow heading, cream supporting copy, and back-navigation asset.

## Notes for implementers

- Target the extracted mobile canvas size of 390×844px.
- Use only the documented palette values: `#000000`, `#FF4B0C`, and `#FFFFFF`.
- Preserve the source’s warm gradient treatment without introducing undocumented solid color tokens.
- Use Jacques Francois for the primary interface typography, Irish Grover for prominent brand/display text, and Grenze Gotisch for the time display.
- Keep recipe cards and action buttons rounded at 20px where the source specifies that radius.
- Treat food imagery as a core part of the composition rather than optional decoration.
- No reusable component families or local design tokens were found in the source.
