---
name: marcus-burke-ui-ux-food-delivery-app-wireframe-community
source: Marcus Burke - UI/UX Food Delivery App Wireframe (Community)
kind: design-system-context
---

# marcus - Design System

## Overview

A compact food-delivery app wireframe with a strongly red visual treatment. Screens are primarily 170×366px frames with red backgrounds, decorative shape groups, white pill labels, red content cards, cart controls, and navigation buttons. Two image-based screens are also present at 393×387px and 690×708px.

No local variables, paint styles, text styles, spacing styles, radius styles, motion tokens, grid styles, or component families were found.

## Design language

- Use a bold red-and-white food-delivery interface.
- Use `#EA0101` as the primary screen background.
- Use `#CF0000` for prominent content cards and decorative emphasis.
- Use white rounded controls with black labels for primary actions.
- Use Jua Regular for prominent interface text.
- Use K2D Regular for very small cart quantity indicators.
- Use rounded pill-shaped labels and cards.
- Use black cart and chevron icons.
- Use inner shadows, drop shadows, and occasional blur to create depth.
- Decorative grouped shapes appear near the top of the repeated app screens.

## Color palette

| Color | Usage count | Role |
|---|---:|---|
| `#CF0000` | 686 | Dominant red; content cards, decorative shapes, and emphasis |
| `#000000` | 72 | Primary text, icons, and quantity indicators |
| `#FFFFFF` | 21 | Action buttons and pill labels |
| `#6F0D0D` | 13 | Dark red accent |
| `#960000` | 13 | Dark red accent |
| `#EA0101` | 11 | Repeated screen background |
| `#443F3F` | 10 | Secondary heading and label text |

## Type scale

| Font | Size | Usage count | Usage |
|---|---:|---:|---|
| Jua Regular | 15px | 21 | Interface labels and actions such as “Lets Eat!”, “Options”, “To Cart”, “Your Cart”, “Check Out”, and “Go Back” |
| K2D Regular | 5px | 5 | Small cart quantity indicators |

Text examples use black `#000000` for action labels and dark gray `#443F3F` for option and cart headings.

## Spacing scale

_None found in source._

Observed element dimensions include:

- 141×34px action buttons
- 118×27px pill labels
- 158×67px content cards
- 24×24px quantity indicator containers
- 12.59×12.6px cart icons
- 9×12.81px chevron icons

## Radius scale

Observed corner radii:

- 15px: white pill labels and red content cards
- 1538px: image-backed rounded rectangle

No radius tokens were defined.

## Elevation & effects

Observed effects:

- Inner shadow: 4px offset, positioned at 0 4
- Drop shadow: 4px offset, positioned at 0 4
- Layer blur: 4px
- Inner shadows and drop shadows are used on red cards, white action buttons, and headings.
- Shadows use black in the source.
- No local effect styles were defined.

## Components

_None found in source._

No component families or component geometry were extracted. Repeated visual patterns include:

- White 141×34px action button with a black Jua Regular label
- White 118×27px rounded heading pill with dark gray Jua Regular text
- Red 158×67px rounded content card
- Cart icon with a small K2D Regular quantity indicator
- Left chevron navigation icon

These are observed patterns, not extracted component definitions.

## Screen patterns

- **App screen:** Repeated 170×366px frames use `#EA0101` as the background, with decorative grouped shapes near the top and a lower content area.
- **Options flow:** Screens show an “Options” white pill, one or more red 158×67px cards, a cart icon with a quantity value, a left chevron, and a “To Cart” action.
- **Cart flow:** Screens show a “Your Cart” white pill, red content cards, a left chevron, and either “Check Out” or “Go Back”.
- **Quantity states:** Cart quantities include `0`, `1`, and `2`, rendered in K2D Regular at 5px with black text and a black 0.2px stroke.
- **Intro/action screen:** A 170×366px red frame includes a “Lets Eat!” white action button, layered circular red decoration, and image content.
- **Image screens:** Standalone image rectangles appear at 393×387px and 690×708px.

## Notes for implementers

- Preserve the narrow 170×366px mobile-screen proportion for the repeated app states.
- Prioritize the red background and white rounded controls as the dominant visual hierarchy.
- Use only the extracted palette values listed above.
- Use Jua Regular at 15px for interface labels; do not substitute the 5px K2D style for normal labels.
- Keep cart quantities visually subordinate using K2D Regular at 5px.
- Match the observed button sizes: 141×34px for actions and 118×27px for heading pills.
- Apply 15px rounding to the repeated white pills and red cards.
- Use black cart and chevron icons with the observed approximate dimensions.
- Treat decorative shape groups as visual ornamentation rather than reusable extracted components.
