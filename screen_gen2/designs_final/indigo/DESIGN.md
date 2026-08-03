---
name: indigo-app-community
source: Indigo app (Community), Page 1
kind: design-system-context
---

# indigo - Design System

## Overview

- Mobile-oriented Indigo airline app design for 360x640px screens.
- Primary flows: landing, home, airport guide, booking, and check-in.
- Visual system uses white surfaces, Indigo blue accents, dark gray text, rounded controls, and image-led promotional areas.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion tokens, grid styles, or effect styles were found.

## Design language

- Use a clean airline interface with white backgrounds and Indigo blue emphasis.
- Use Anderson Grotesk Ultrabold for nearly all interface text and headings.
- Use Inter Black for the profile initial.
- Headings are 24px and dark gray.
- Labels and navigation text are compact, primarily 10px or 12px.
- Use rounded controls with 20px radius where specified.
- Active navigation and primary actions use #001B94.
- Secondary or inactive states use #C2C2C2 or #D9D9D9.
- Promotional and contextual highlight areas use #E2EEF5.
- Use thin gray strokes for icons, dividers, and outlined fields.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| #5E5E5E | 193 | Primary text, icon strokes, dividers |
| #D9D9D9 | 80 | Secondary fills and inactive controls |
| #001B94 | 66 | Indigo brand color, active states, primary actions |
| #FFFFFF | 34 | App and component backgrounds, light text on blue |
| #1A1A1A | 17 | Dark form and booking text |
| #E2EEF5 | 12 | Highlight fills and soft background areas |
| #C2C2C2 | 9 | Disabled text and inactive radio strokes |
| #A5A5A5 | 4 | Muted icon strokes |
| #000000 | 3 | Search or utility icon strokes |

## Type scale

- **24px** — Anderson Grotesk AndersonGroteskUltrabold; headings such as “Airport Guide,” “Map,” “Check-in,” and “Book Tickets.”
- **24px** — Inter Black; profile initial “P.”
- **15px** — Anderson Grotesk AndersonGroteskUltrabold; section labels such as “Exclusive Offers” and “Airport Guide.”
- **12px** — Anderson Grotesk AndersonGroteskUltrabold; navigation labels, form labels, button labels, and body UI text.
- **10px** — Anderson Grotesk AndersonGroteskUltrabold; compact labels and notes.

Usage counts:

- Anderson Grotesk AndersonGroteskUltrabold, 12px: 76
- Anderson Grotesk AndersonGroteskUltrabold, 24px: 9
- Anderson Grotesk AndersonGroteskUltrabold, 10px: 8
- Inter Black, 24px: 7
- Anderson Grotesk AndersonGroteskUltrabold, 15px: 4

## Spacing scale

_None found in source._

## Radius scale

- 20px: standard rounded cards, fields, buttons, and content containers.
- 15px: left-side radius of the Check-In segmented control.
- 80px: top-left and top-right radius of the Book Tickets white content panel.
- 0px: square corners where no radius is specified.
- Asymmetric radii are used for segmented controls: `15/0/0/15px` and `0/15/15/0px`.

## Elevation & effects

- Airport Guide image card: drop shadow with 10px blur and offset `2px 4px`.
- Book Tickets background: two #E2EEF5 ellipse layers with 71px layer blur.
- No local effect styles were found.

## Components

### navbar

- Size: 360x89px.
- White background: #FFFFFF.
- Divider: 270px wide, 2px stroke, #5E5E5E.
- Contains four navigation items:
  - Home: 32x54px; icon 28.42x30px; label 32x15px.
  - Book: 34x54px; icon 34x30px; label 28x15px.
  - Flight Status: 72x53px; icon group includes a 29x29px ellipse; label 72x15px.
  - Check-in: 50x55px; icon group 31.88x29px; label 50x15px.
- Navigation labels use Anderson Grotesk AndersonGroteskUltrabold, 12px, #5E5E5E.
- The active navigation icon uses #001B94.

### Profile and options

- Size: 47x41px.
- Profile circle: 41x41px, fill #001B94.
- Initial: “P”, Inter Black, 24px, #FFFFFF.
- Options control: 18x18px ellipse filled #D9D9D9.
- Options icon uses three 10px lines with 1px #5E5E5E strokes.

### Notifications button

- Size: 25.5x30px.
- Bell icon: 25.5x23px with 2px #5E5E5E stroke.
- Lower bell detail: 14x7px with 2px #5E5E5E stroke.
- Notification indicator: 10x10px ellipse filled #001B94.

## Screen patterns

- **Landing page:** 360x640px white screen with a centered Indigo logo treatment sized 201x201px. The logo uses #001B94.
- **Home screen:** white 360x640px screen with logo, notification and profile controls, a 320x120px rounded notice board, a 320x141px exclusive-offers area, a 320x197px rounded Airport Guide card, and the navbar.
- **Airport Guide:** 360x640px screen with a 24px “Airport Guide” heading, notification control, 300x295px image card with 20px radius, search-nearby affordance, map heading, “You are here” pill using #E2EEF5, and navbar.
- **Check-In:** 360x640px screen with navbar, 24px “Check-in” heading, profile and notification controls, a two-part 140x30px segmented control, outlined booking fields, a 115x32px #E2EEF5 search action, and compact instructional text.
- **Book Tickets:** 360x640px screen with a promotional image/background area, soft #E2EEF5 blurred ellipses, a white panel with 80px top corners, booking detail fields with 20px radius and 2px #001B94 strokes, radio controls, and navbar.
- **Thumbnail:** composite presentation frame containing scaled landing and booking screens. Use the same colors, typography, rounded panels, and component patterns as the mobile screens.

## Notes for implementers

- Preserve the 360x640px mobile viewport for the primary screens.
- Use only the listed palette colors.
- Prefer #5E5E5E for default text, icon strokes, and dividers.
- Use #001B94 for active navigation, profile circles, brand marks, selected controls, and primary search actions.
- Use #E2EEF5 for soft highlighted controls and blurred background shapes.
- Use #C2C2C2 for disabled or inactive options.
- Keep navigation labels at 12px and compact supporting notes at 10px.
- Use Anderson Grotesk AndersonGroteskUltrabold unless the profile initial requires Inter Black.
- Reuse the three extracted component families exactly: navbar, Profile and options, and Notifications button.
- Image fills appear in promotional and Airport Guide areas; preserve their image-led role without replacing them with invented colors.
- No spacing, motion, grid, or reusable elevation tokens were defined in the source.
