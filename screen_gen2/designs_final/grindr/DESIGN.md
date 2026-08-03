---
name: grindr-app-enhancement-community
source: GRINDR APP ENHANCEMENT (Community)
kind: design-system-context
---

# grindr - Design System

## Overview

- Source: `GRINDR APP ENHANCEMENT (Community)`, Page 1.
- Primary extracted screen: a 375 × 667 px login/remake screen.
- The interface combines a dark neutral background, yellow login action, white supporting text, social sign-in options, identity/password fields, and decorative imagery.
- No local variables, text styles, spacing variables, motion tokens, grid styles, or component families were found.

## Design language

- Login-focused mobile composition with centered and stacked content.
- High contrast between dark surfaces, white text, and a yellow primary action.
- Typography uses M PLUS 2, Istok Web, and Gotu.
- Social authentication is represented through Facebook, Google, and Telegram icon instances.
- Decorative and photographic imagery is present on the login screen.
- Thin horizontal rules separate or support form and social-login content.

## Color palette

Ranked by reported usage:

| Token | Value | Usage |
|---|---|---:|
| White | `#FFFFFF` | 4 uses |
| Black | `#000000` | 3 uses |
| Preto 54% | `#0000008A` | 2 uses |

## Type scale

| Font family | Weight/style | Size |
|---|---|---:|
| M PLUS 2 | Bold | 17px |
| Gotu | Regular | 14px |
| M PLUS 2 | Regular | 16px |
| M PLUS 2 | Regular | 13px |
| M PLUS 2 | Bold | 11px |
| Istok Web | Regular | 12px |

Observed text roles:

- `LOGIN`: M PLUS 2 Bold, 17px.
- `FORGOT PASSWORD?`: M PLUS 2 Regular, 13px.
- Social-post disclaimer: M PLUS 2 Bold, 11px.
- `USER NAME` and `USER PASSWORD`: Istok Web Regular, 12px.
- `Continue with`: Gotu Regular, 14px.
- `Unique ID` and `ORIGINAL`: M PLUS 2 Regular, 16px.

## Spacing scale

_None found in source._

## Radius scale

- 5px: outlined rectangle.
- 10px: social/person icon instance and visibility-off icon instance.

## Elevation & effects

- One drop shadow is present on the 301 × 34 px login action frame.
- Shadow offset: 0px horizontal, 4px vertical.
- No local effect styles were found.

## Components

_None found in source._

## Screen patterns

### Login / REMAKE

- Canvas: 375 × 667 px.
- Dark background with decorative frame content.
- Yellow 301 × 34 px login action near the top.
- Password-recovery text and a social-media disclaimer.
- Brand and decorative image assets.
- Username and password labels with supporting input-related icons.
- Social sign-in row containing Facebook, Google, and Telegram instances, each 48 × 48 px.
- Horizontal rules with widths of 142 px, 298 px, and 344 px.
- `Unique ID` label paired with a 24 × 24 px person icon and a 24 × 24 px visibility-off icon.

### Outlined rectangle

- 218 × 36 px rectangle.
- 5px radius.
- 1px stroke.

### Image screen

- 397 × 667 px image filling the screen area.

### Original label

- `ORIGINAL` displayed as M PLUS 2 Regular at 16px.

## Notes for implementers

- Preserve the 375 × 667 px mobile login composition as the primary layout reference.
- Use only the extracted palette tokens: `#0000008A`, `#FFFFFF`, and `#000000`.
- Keep the login action compact at 301 × 34 px and retain its observed drop-shadow offset of 0px by 4px.
- Preserve the distinct type roles: M PLUS 2 for primary labels and supporting copy, Istok Web for username/password labels, and Gotu for the social continuation prompt.
- Treat Facebook, Google, and Telegram as visual social sign-in options; no reusable component family specifications were extracted.
- Use the supplied image assets rather than recreating them as colors or geometric substitutes.
- No spacing, motion, grid, or reusable component tokens are available; avoid assuming additional system-level values.
