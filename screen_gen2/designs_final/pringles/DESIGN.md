---
name: pringles
source: PRINGLES CHIPS UI DESIGN (Community)
kind: design-system-context
---

# pringles - Design System

## Overview

A desktop Pringles chips product interface featuring a green branded backdrop, centered navigation, product imagery, flavor-specific hero content, ingredient copy, and an “Order NOW” call-to-action.

The source contains four 1440×1024 desktop screens within a 3396×2594 parent frame.

## Design language

- Bold, high-contrast food-brand presentation.
- Primary screen background: #25892E.
- Navigation and body copy use white text on the green background.
- Flavor names use large Poppins Black display typography.
- Product imagery and decorative blob visuals are prominent hero elements.
- Calls to action use black rounded rectangles with white text.
- Navigation is horizontal and evenly distributed around a centered logo.

## Color palette

| Color | Usage count | Usage |
|---|---:|---|
| #FFFFFF | 40 | Navigation labels, product copy, headings, button labels, divider lines |
| #000000 | 5 | Call-to-action button backgrounds and parent frame fill |
| #25892E | 4 | Desktop screen backgrounds |

## Type scale

| Font family | Weight | Size | Usage |
|---|---|---:|---|
| Poppins | Black | 48px | Flavor headings such as “ORIGINAL”, “SOUR CREAM”, “HOT & SPICY”, and “SAUCY BBQ” |
| Inter | Regular | 20px | Navigation labels |
| Poppins | Regular | 20px | “Order NOW” button label |
| Inter | Regular | 16px | Ingredient and product description copy |

## Spacing scale

No spacing tokens or variables were found. Observed component spacing:

- Navigation padding: 10px on all sides.
- Navigation gap: 59px.
- Logo frame padding: 10px on all sides.
- Logo frame gap: 10px.
- SAUCY BBQ button padding: 12px vertical and 23px horizontal.

## Radius scale

- 8px: call-to-action buttons.
- 8px: SAUCY BBQ button frame.

## Elevation & effects

_None found in source._

## Components

### NAVIGATION

- Family: NAVIGATION.
- Size: 1319×112px.
- Layout: horizontal.
- Padding: 10px on all sides.
- Gap: 59px.
- Alignment: space-between and center.
- Sizing: fixed width and fixed height.
- Text style: Inter Regular, 20px, #FFFFFF.
- Items, in sequence around the logo:
  - PRODUCTS
  - FLAVOURS
  - STORE
  - LOGO
  - ABOUT
  - FOUNDERS
  - CONTACT
- Logo frame: 87×92px, with a 67×82px logo image inside.
- The logo image is the extracted asset with hash `c238962e92482b3898ff5737f1a55fc20deeb3f4`.
- Navigation appears as an instance on three screens and as a component on one screen.

## Screen patterns

- All screens use a 1440×1024px desktop frame with #25892E as the screen background.
- Each screen includes the 1319×112px NAVIGATION component at the top.
- Each product hero uses a large extracted product image, a flavor heading in Poppins Black 48px, a 16px Inter Regular ingredient description, a black rounded order button, and a decorative blob asset.
- Product variants:
  - ORIGINAL
  - SOUR CREAM
  - HOT & SPICY
  - SAUCY BBQ
- Flavor-specific decorative ellipse and blob visuals are used behind or alongside the hero content.
- Product imagery uses the extracted asset with hash `61c5b259b98e8c7e95190aba4ba0af253ca7f7ac`.
- The order button is generally 161×54px with an 8px radius. The SAUCY BBQ variant uses a 158×54px frame with 12px vertical and 23px horizontal padding.
- Some screens include a white 1px divider line.

## Notes for implementers

- Preserve the fixed desktop dimensions where the source specifies them: 1440×1024px screens and a 1319×112px navigation.
- Use only the documented palette: #25892E, #FFFFFF, and #000000.
- Keep navigation labels in Inter Regular 20px and flavor headings in Poppins Black 48px.
- Use Poppins Regular 20px for the “Order NOW” label.
- Use 8px corner radii for order buttons.
- Keep the logo centered within the navigation sequence and use the extracted logo asset rather than recreating it.
- Treat product imagery and blob graphics as image assets; do not replace them with invented colors or shapes.
- Ingredient copy is flavor-specific and should remain separate from the flavor heading.
- No responsive, motion, elevation, grid, or local variable specifications were found.
