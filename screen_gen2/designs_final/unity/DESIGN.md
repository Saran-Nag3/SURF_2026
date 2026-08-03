---
name: unity-disability-services-app-community
source: Unity - Disability Services App (Community)
kind: design-system-context
---

# unity - Design System

## Overview

Mobile disability-services app for students and administrators, designed primarily for 375px-wide iPhone screens. The experience includes authentication, role selection, student and administrator navigation, student directories, accommodations, and user profiles.

## Design language

- Clean, high-contrast interface with black text on white or pale blue backgrounds.
- Large rounded white navigation controls.
- Blue is used for navigation strokes and accents.
- Primary screen backgrounds include white and pale blue fills, with pale blue-to-white gradients used on several screens.
- Profile screens use circular image avatars, prominent headings, and white biography cards.
- Typography is predominantly Heiti SC Medium, with Heiti SC Light for accommodation-list content and Roboto Regular for small text.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 361 | Primary text, borders, and linework |
| `#FFFFFF` | 134 | Screen backgrounds, cards, fields, and navigation controls |
| `#C4C4C400` | 39 | Transparent fills |
| `#3262A7` | 23 | Blue navigation strokes and accent linework |
| `#4A4A4A` | 18 | Secondary dark gray |
| `#C4C4C4` | 3 | Gray UI elements |
| `#C7D2F5` | 3 | Pale blue screen backgrounds |

## Type scale

- **48px** — Heiti SC Medium; major section and flow headings.
- **40px** — Heiti SC Medium.
- **36px** — Heiti SC Medium.
- **25px** — Heiti SC Medium; screen headings, menu labels, and alphabetic directory labels.
- **20px** — Heiti SC Medium; search placeholder.
- **18px** — Heiti SC Medium; profile contact information, directory names, and secondary headings.
- **18px** — Heiti SC Light.
- **16px** — Heiti SC Light; accommodation-list items.
- **16px** — Heiti SC Medium; utility labels.
- **14px** — Heiti SC Medium; form labels and profile body text.
- **14px** — Heiti SC Light.
- **13px** — Heiti SC Medium; authentication controls.
- **12px** — Heiti SC Medium; small supporting text.
- **12px** — Roboto Regular.

Usage counts from the source:

- Heiti SC Light, 16px: 38
- Heiti SC Medium, 18px: 29
- Heiti SC Medium, 25px: 28
- Heiti SC Medium, 20px: 26
- Heiti SC Medium, 40px: 17
- Roboto Regular, 12px: 14
- Heiti SC Medium, 14px: 11
- Heiti SC Medium, 16px: 11
- Heiti SC Medium, 12px: 9
- Heiti SC Light, 14px: 6
- Heiti SC Medium, 48px: 6
- Heiti SC Medium, 36px: 4
- Heiti SC Light, 18px: 3
- Heiti SC Medium, 13px: 3

## Spacing scale

_None found in source._

## Radius scale

- `15px` — profile biography card.
- `22px` — authentication buttons.
- `31px` — search field.
- `39.5px` — role-selection buttons and primary navigation buttons.
- `0px` — transparent utility groups with no rounding.

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

- **Authentication:** 375px-wide mobile screen with a pale blue background, welcome heading, two white 283x40px input fields, username and password labels, a 25x25px remember-me checkbox, and two white 115x27px rounded buttons for Log in and Sign Up.
- **Role selection:** Two stacked white 225x79px rounded buttons labeled “I am a student” and “I am an administrator.”
- **Student navigation:** Four stacked white 303x73px rounded buttons for Students, Accommodations, Meetings, and Inbox, with a blue line-based menu icon and an image area.
- **Student accommodations:** A pale blue 375px-wide screen containing repeated 30x26.14px outlined checkbox controls and 16px Heiti SC Light accommodation labels.
- **Administrator directory:** A 375px-wide screen with a 271x44px rounded search field, alphabetic section labels at 25px, student names at 18px, horizontal 1px dividers, and a create-new-student action.
- **Profile:** White mobile screen with a circular 90x90px avatar, blue 30x30px outline icon, 25px profile and person headings, 18px contact information, an 18px Bio label, and a white 317x208px card with a 15px radius.
- **Profile variants:** The profile pattern is reused for different people, including Lisa Wolfe and Kathrine Allen.
- **Flow divider screens:** Large 48px headings identify flows such as Opening Screen, When using as a student, When using as admin, and Students.

## Notes for implementers

- Target the documented 375px-wide mobile viewport; source screens are generally 812px high, with one directory screen at 1130px and accommodation screens at 820px.
- Use Heiti SC Medium as the dominant text face and Heiti SC Light for accommodation-list content. Use Roboto Regular only for the 12px small-text style.
- Use black text and linework, white surfaces, pale blue backgrounds, and blue accent strokes according to the palette above.
- Preserve the prominent rounded-button treatment, especially the 303x73px navigation buttons and 225x79px role-selection buttons.
- No local variables, text styles, spacing styles, radius styles, effect styles, grid styles, or component sets were found.
- Images appear in avatars and branded screen areas; image content is source-specific and is not represented as a reusable component family.
