---
name: binance-app-login-community
source: Binance-App-Login (Community), Page 1
kind: design-system-context
---

# binance - Design System

## Overview

Single Android login screen, 360×640px. The screen contains a white outer frame, a login panel, email and password fields, password visibility control, login action, password recovery link, and registration prompt.

## Design language

- Dark login-panel composition within a mobile Android viewport.
- Montserrat is the only identified typeface.
- Primary text and control surfaces use white and gray tones.
- Login-related actions use emphasized text treatment.
- Fields and action controls use rounded corners.

## Color palette

Ranked by raw usage:

| Color | Usage |
|---|---:|
| #FFFFFF | 7 uses |
| #585656 | 3 uses |

## Type scale

- Montserrat Regular, 16px — 4 uses; used for email, password, login, and password recovery text.
- Montserrat Regular, 14px — used for account prompt and registration text.

## Spacing scale

_None found in source._

## Radius scale

- 30px — outer Android frame.
- 5px — login fields, login action, and grouped controls.
- 0px — group containers where explicitly specified.

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

### Android login screen

- Viewport: 360×640px.
- Outer frame: 360×640px with 30px radius and white fill.
- Main content frame: 343×547px.
- Login form group: approximately 270×275px.
- Email field: approximately 260×30px with 5px radius.
- Password field: approximately 260×30px with 5px radius.
- Password visibility control: 24×24px.
- Login action: approximately 260×30px with 5px radius.
- Supporting text includes “Forget your password?”, “Don’t have an account yet?”, and “Register”.
- The screen includes a 177×113px image asset near the top of the main content frame.
- A clear control is sized 29×32px.

## Notes for implementers

- Use Montserrat Regular for all identified text.
- Preserve the 360×640px mobile composition and the 343×547px inner content frame.
- Use 30px radius for the outer frame and 5px radius for form and action controls.
- Keep email and password fields visually consistent at approximately 260×30px.
- Include a password visibility control sized 24×24px.
- No reusable component families or local design tokens were extracted; implement the screen pattern directly.
