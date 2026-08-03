---
name: starbucks-app-neumorphism-concept-community
source: Starbucks App Neumorphism Concept (Community), Page 1
kind: design-system-context
---

# starbucks - Design System

## Overview

- Mobile Starbucks app concept designed for a 375 × 812 px viewport.
- Visual direction: neumorphic interface on a light gray surface.
- Primary flows shown:
  - Main dashboard with favorites, cards, progress gauge, branding, and utility controls.
  - Siren Order detail screen with product customization and ordering actions.
- No local variable collections, component families, spacing variables, radius variables, motion tokens, grid styles, or local effect styles were found.

## Design language

- Use a soft, monochrome neumorphic surface based on `#F0F0F3`.
- Controls are generally circular or pill-shaped, with raised and inset depth treatments.
- Primary brand interaction color is Starbucks green `#00754A`.
- Text uses dark gray for headings and medium gray for supporting content.
- Layouts are compact, centered, and optimized for mobile screens.
- Repeated interaction patterns:
  - Raised circular utility buttons.
  - Raised cards with soft depth.
  - Inset pill controls for selectors and quantity fields.
  - Full-width rounded order actions.
  - Thin horizontal dividers with light and gray layers.

## Color palette

| Color | Usage |
|---|---|
| `#F0F0F3` | Primary app background and neumorphic surfaces; 30 raw uses |
| `#000000` | Primary light-label text and system-status iconography; 28 raw uses |
| `#231F20` | Raw dark neutral; 10 uses |
| `#C4C4C4` | Raw neutral; 8 uses |
| `#00754A` | Primary brand green, progress indicator, order action, and confirmation icon; 5 raw uses |
| `#FFFFFF80` | Light divider and highlight layer; 4 raw uses |
| `#677278` | Gray 60; supporting text and card labels; 10 most-used style uses |
| `#A3ADB2` | Gray 40; secondary icon and control details; 14 most-used style uses |
| `#292E30` | Gray 80; headings and prominent values; 7 most-used style uses |
| `#C3C9CD` | Gray 30; dividers and subtle strokes; 6 most-used style uses |
| `#7B868C` | Gray 50; medium emphasis text; 3 most-used style uses |
| `#485054` | Gray 70; selected quantity text; 2 most-used style uses |
| `#E3E6E8` | Gray 20; count badge surface; 1 most-used style use |

- The source also references named `Neu-active`, but no color value was provided.
- Use the listed gray roles consistently rather than introducing additional neutrals.

## Type scale

| Size | Family and weight | Usage |
|---:|---|---|
| 24px | Avenir Next DemiBold | Product headings and prominent monetary values |
| 17px | Avenir Next DemiBold | Screen title such as “Siren Order” |
| 16px | Avenir Next DemiBold | Section headings such as “Favorites” and “Cards” |
| 16px | Avenir Next Regular | Currency symbol and supporting values |
| 15px | SF Pro Text Semibold, weight 600, line-height 20px, tracking -0.24px | iPhone status-bar time |
| 14px | Avenir Next DemiBold | Primary and secondary order actions |
| 13px | Avenir Next DemiBold | Card labels, selectors, quantities, and compact labels |
| 13px | Avenir Next Regular | Descriptions and supporting text |
| 11px | Avenir Next Regular | “See more” helper link |

- Typography hierarchy is led by 24px Avenir Next DemiBold headings, followed by 16px and 13px interface text.
- The source contains a raw 24px, 16px, and 13px Avenir Next hierarchy plus the SF Pro Text status-bar style.

## Spacing scale

_None found in source._

- Extracted layouts use fixed dimensions and gaps, including a 15px vertical gap in one card content frame, 6px icon-to-label gaps in beverage selectors, and 8px gaps in order-action groups.

## Radius scale

- 10px: compact raised cards.
- 12px: count badge.
- 20px: circular controls and small circular icon buttons.
- 30px: full-width order action.
- 50px: quantity and selector pill containers.
- 110px: progress-gauge base circle.
- 250px: product image container.
- Radius values are applied to surfaces and controls; no reusable radius token collection was defined.

## Elevation & effects

- Neumorphic raised surfaces use paired light and dark drop-shadow treatments.
- Common raised surface geometry:
  - 20px blur with 5px/5px offset pairing for cards and large surfaces.
  - 10px blur with 5px/5px offset pairing for circular buttons.
  - 30px blur with 10px/10px offset pairing for the progress gauge.
- Inset controls use inner-shadow treatments with 4px blur and offsets of 2px or 5px.
- Circular buttons use a 2px gradient stroke treatment.
- Selector containers use a 1px gradient stroke treatment.
- Dividers are 1px layers stacked into a 2px total height.
- No local effect styles were defined; these values are extracted directly from screen artwork.

## Components

_None found in source._

- The extraction identifies no Figma component families or component sets.
- Repeated visual patterns are present in the screens but are not registered as reusable components.

## Screen patterns

- **Main dashboard, 375 × 812px**
  - Light gray neumorphic background.
  - Favorites section with three 120 × 100px raised menu cards.
  - Cards section with a 315 × 102px raised card, image area, balance value, and count badge.
  - Large circular progress gauge with green progress arc and `7 / 12` status.
  - Header utilities include logo, notification button, and hamburger button.
  - Thin divider separates dashboard content from lower content.

- **Siren Order, 375 × 812px**
  - Back and favorite circular controls surrounding the status-bar area.
  - Product image, product name, description, “See more” link, and price.
  - Quantity control uses a 157.5 × 50px pill with circular plus and minus controls.
  - Size selector uses a 315 × 50px pill divided into four 73.75px options: Short, Tall, Grande, and Venti.
  - Temperature selector uses a 315 × 50px pill divided into Hot and Iced options.
  - Bottom order action is a 333 × 56px rounded control with separate “Order now” and “Add to cart” regions.

- **Presentation board, 1600 × 1200px**
  - A large light gray canvas containing a rasterized Starbucks app concept image.

## Notes for implementers

- Target the primary mobile frame size of 375 × 812px.
- Preserve the light gray `#F0F0F3` surface as the base for neumorphic depth.
- Use `#00754A` for primary confirmation and ordering actions.
- Use Avenir Next for app content text and SF Pro Text Semibold for the iPhone status-bar time.
- Keep headings and key monetary values at 24px Avenir Next DemiBold where the source specifies them.
- Build raised controls with paired opposing shadows and inset controls with inner shadows; do not flatten the depth treatment.
- Use 40 × 40px circular utility buttons and 20px corner radii for their circular surfaces.
- Keep primary order actions at 333 × 56px with a 30px radius.
- Treat the extracted screen patterns as visual guidance rather than component specifications because no component families were found.
- Do not infer missing spacing, motion, grid, or component tokens beyond the concrete values listed above.
