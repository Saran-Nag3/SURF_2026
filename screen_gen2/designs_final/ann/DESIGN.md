---
name: magictunes-music-app-community
source: MagicTunes Music App (Community), Page 1
kind: design-system-context
---

# ann - Design System

## Overview
MagicTunes is a music-app interface with three screens: a start screen, a sign-in screen, and a login screen. The visual direction combines full-screen imagery, translucent purple panels, rounded controls, white typography, and strong text shadows.

## Design language
- Full-screen image backgrounds are used on every screen.
- Containers and controls use rounded geometry, commonly with 30px radii.
- Purple translucent overlays create frosted, layered form areas.
- Typography is primarily Mohave Regular, with large 40px headings and 20px supporting labels.
- White text is used over imagery and purple surfaces.
- Controls use outlined white borders, rounded pills, shadows, and gradient-filled action surfaces.
- The start screen includes a large branded title and a handwritten designer credit.

## Color palette
Ranked by observed usage:
1. `#FFFFFF` — 24 uses. Primary text, screen fills, panel headings, and outlined-control strokes.
2. `#FFFFFF4F` — 4 uses. Secondary or placeholder text such as “Email address,” “Username,” and “Password.”
3. `#9C59FF` — 3 uses. Primary purple accent and action-label text.

Additional source usage:
- `#9C59FF` appears with alpha variants on translucent overlays and the start-screen accent rectangle.
- White appears with alpha variants on a login-screen vector stroke.
- A linear gradient is used on action buttons; its source colors are not included in the normalized palette.

## Type scale
- 55px — MuseoModerno Regular; start-screen “MagicTunes” title.
- 40px — Mohave Regular; primary headings such as “SIGN IN,” “LOGIN,” and “Get Started.”
- 20px — Mohave Regular; field labels, “OR,” and social-login labels. 12 uses.
- 15px — Mohave Regular; compact “Login” action label.
- 15px — Marck Script Regular; “Design by- Ann” credit.

## Spacing scale
_None found in source._

## Radius scale
- 30px — screen frames, translucent form panels, and multiple pill controls.
- 32.5px — compact login action control.
- 40px — start-screen “Get Started” control.

## Elevation & effects
- Screen frames use a drop shadow with 30px blur and a 1px vertical offset.
- Translucent form panels use 4px background blur and a drop shadow with 4px blur and a 4px vertical offset.
- Outlined controls use drop shadows with 5px blur and a 2px vertical offset.
- Action controls use drop shadows with 4px blur, a 5px negative horizontal offset, and a 5px vertical offset.
- Login action text uses a 4px inner shadow with a 4px vertical offset.
- The start-screen accent rectangle uses 100px layer blur.
- Text treatments include a 5px drop shadow with a 2px horizontal and 5px vertical offset on the title, plus a 4px drop shadow with a 2px vertical offset on social-login labels.

## Components
_None found in source._

## Screen patterns
- **Start screen:** 430×932px rounded frame with a full-screen image, a blurred purple accent rectangle, a large 55px “MagicTunes” title, a gradient-filled rounded “Get Started” control, and a bottom designer credit.
- **Sign-in screen:** 430×932px rounded image-backed frame with a 344×516px translucent purple form panel, 40px “SIGN IN” heading, 20px field labels, an “OR” separator, outlined rounded controls, social-login labels, and a compact “Login” action.
- **Login screen:** Matches the sign-in composition and dimensions, replacing the heading and first field label with “LOGIN” and “Username.”

## Notes for implementers
- Preserve the 430×932px screen composition and 30px outer frame radius.
- Use full-screen imagery as the background layer on all three screens.
- Keep form panels approximately 344px wide, 516px tall, and 30px rounded, with translucent purple treatment and background blur.
- Use Mohave Regular at 40px for primary headings and 20px for form and social-login text.
- Use white for primary text and outlined control strokes; use the translucent white token for secondary field labels.
- Keep social and form controls rounded, with source geometries of 284px width and heights of 35px or 55px.
- Do not introduce component families or spacing tokens that are not present in the source.
