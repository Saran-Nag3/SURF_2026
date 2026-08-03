---
name: capitan-app-s-design-community
source: Capitan App's design (Community)
kind: design-system-context
---

# lincoln - Design System

## Overview

- Source: Capitan App's design (Community)
- Figma page: All pages (4): desing app, post, guia, splashes
- Primary extracted context: mobile login and venue-discovery screens.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- No component families or component geometry were found.

## Design language

- Mobile-first layouts use a 375x812px screen frame.
- Primary visual language combines green actions, pale gray backgrounds, white surfaces, rounded controls, and gray secondary text.
- Login screens use large pill-shaped actions with 50px radius.
- Venue discovery uses stacked image cards with rounded 8px corners, search, segmented filtering, and bottom navigation.
- Typography is primarily Poppins. Montserrat is used for 10px labels and 20px headings.
- Icons are used for users, locks, visibility, search, notifications, map pins, clocks, venues, tournaments, matches, and promotions.

## Color palette

### Usage-ranked raw colors

| Color | Uses |
|---|---:|
| #C4C4C4 | 3568 |
| #5A5A5A | 3553 |
| #808080 | 2232 |
| #E5E5E5 | 1092 |
| #FFFFFF | 931 |
| #21294F | 864 |
| #9E00FF | 732 |
| #FF0000 | 481 |
| #9C9B9B | 405 |
| #F7F7F7 | 343 |
| #A5A5A5 | 231 |
| #000000 | 221 |
| #4CB050 | 200 |
| #3E4347 | 130 |
| #7F7F7F | 95 |
| #F6F6F6 | 90 |

### Semantic color tokens

- `primary color`: #FF9700
- `fondos`: #F7F7F7
- `iconos color`: #4CB050
- `secondary color`: #343434
- `icons_desactive`: #8D9597
- `guardado`: #F33939
- `color_text_5a`: #5A5A5A
- `color_tournament`: #2186D0
- `verde_change`: #00BB59

### Observed usage

- `fondos`: 1234 uses
- `iconos color`: 835 uses
- `icons_desactive`: 835 uses
- `primary color`: 618 uses
- `color_tournament`: 609 uses
- `color_text_5a`: 374 uses
- `guardado`: 345 uses
- `secondary color`: 154 uses
- `verde_change`: 15 uses

## Type scale

### Usage-ranked styles

- Poppins Regular, 12px — 892 uses
- Poppins Medium, 16px — 700 uses
- Poppins Regular, 14px — 683 uses
- Montserrat Regular, 10px — 640 uses
- Poppins SemiBold, 16px — 569 uses
- Poppins SemiBold, 12px — 362 uses
- Poppins Medium, 14px — 322 uses
- Montserrat SemiBold, 20px — 320 uses
- Poppins Medium, 12px — 262 uses
- Poppins SemiBold, 14px — 222 uses
- Poppins Regular, 16px — 213 uses
- Poppins Medium, 18px — 162 uses
- Poppins Bold, 18px — 155 uses
- Poppins SemiBold, 18px — 151 uses
- Poppins Bold, 24px — 86 uses
- Poppins Regular, 18px — 72 uses
- Poppins Light, 14px — 65 uses
- Poppins Light, 12px — 50 uses

### Hierarchy

- 24px: Poppins Bold
- 20px: Montserrat SemiBold
- 18px: Poppins Bold, Medium, Regular, or SemiBold
- 16px: Poppins Medium, Regular, or SemiBold
- 14px: Poppins Light, Medium, Regular, or SemiBold
- 12px: Poppins Light, Medium, Regular, or SemiBold
- 10px: Montserrat Regular

## Spacing scale

_None found in source._

## Radius scale

- 0px: square containers and bottom-navigation container
- 8px: venue cards, search field, and segmented controls
- 35px: mobile screen frame
- 50px: primary and secondary login buttons

## Elevation & effects

- Venue cards use a dark gradient overlay over their image area.
- Bottom navigation uses a drop shadow with 2px offset on the vertical axis.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

### Login

- Frame: 375x812px, white fill, 35px radius.
- Header imagery includes a 508x200px masked area and a 270x83px logo image.
- Heading: “Inicia Sesión”, Poppins Bold, 24px, #5A5A5A.
- Form fields span 327px and use 2px green underline strokes.
- Field labels use Poppins Medium, 18px, #C4C4C4.
- Supporting links use Poppins Regular or SemiBold, 14px, #5A5A5A.
- Primary button: 327x60px, 50px radius, filled #4CB050, with Poppins SemiBold, 18px, #F7F7F7 text.
- Secondary button: 327x60px, 50px radius, 3px #4CB050 stroke, with Poppins SemiBold, 18px, #4CB050 text.
- Login icons use 24px frames and #808080 strokes.
- The `login_sin_data` state adds 12px Poppins Regular helper labels in #FF9700.

### Venue discovery: “Ver todos”

- Frame: 375x812px with #F7F7F7 background and 35px radius.
- Header area: 375x100px.
- Search field: 327x38px, 8px radius, 1px #C4C4C4 stroke.
- Search placeholder: Poppins Regular, 16px, #C4C4C4.
- Segmented controls use two approximately 143–144px wide options, 30px high, and 8px radius.
- Active segment is filled #4CB050 with #F7F7F7 text.
- Inactive segment uses a #4CB050 stroke with #4CB050 text.
- Venue list surface: 327px wide, #FFFFFF fill.
- Venue cards: 327x180px, 8px radius, stacked with a 16px gap.
- Card title: Poppins SemiBold, 18px, #F7F7F7.
- Card address: Poppins Regular, 16px, #C4C4C4.
- Card distance: Poppins Light, 14px, #A5A5A5.
- Card metadata uses map-pin and clock icons.
- “Ver mapa” uses Poppins Regular, 14px, #8D9597.
- Bottom navigation: 375x80px with #F7F7F7 fill.
- Active navigation label uses Poppins SemiBold, 12px, #4CB050.
- Inactive navigation labels use Poppins SemiBold, 12px, #8D9597.
- Navigation categories: Canchas, Torneos, Partidos, Promociones.

## Notes for implementers

- Use only the extracted colors listed in the palette; do not substitute unlisted colors.
- Preserve the 375px mobile canvas and 327px primary content width where the screen patterns specify them.
- Use Poppins for the main interface and Montserrat only where the type scale specifies it.
- Use 50px radius for the two login actions and 8px radius for cards, search, and segmented controls.
- Keep login actions at 327x60px.
- Keep venue cards at 327x180px with 16px vertical spacing.
- Treat the two “Ver todos” extraction entries as the same repeated screen pattern.
- No reusable component definitions were extracted; implement repeated UI patterns from the screen specifications rather than assuming an existing component library.
