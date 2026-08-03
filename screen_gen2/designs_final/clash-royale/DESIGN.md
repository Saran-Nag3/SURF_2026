---
name: clash-royale-ux-concept-community
source: Clash Royale UX-concept (Community)
kind: design-system-context
---

# clash-royale - Design System

## Overview

Mobile game UX-concept documentation presented across three MacBook Pro 16" frames:

- **Frame 1:** Introductory presentation with iPhone mockups, project title, tool list, app icons, and the “CLASH ROYALE” wordmark.
- **Frame 2:** Long-form documentation covering screen diagrams, user flows, wireframes, explanatory headings, and multiple iPhone screen mockups.
- **Frame 3:** Closing presentation with contact information, thank-you messaging, an app icon, and a large image.

The interface content is primarily shown inside iPhone mockups with iOS status bars, notches, signal, Wi-Fi, and battery indicators.

## Design language

- Playful mobile-game presentation style combining rounded Fredoka typography with display branding.
- Large, centered or prominently placed white headings on blue-toned presentation backgrounds.
- Screen mockups use iPhone frames with image-based UI content.
- Strong contrast between white presentation text and dark blue or black interface details.
- Rounded app-icon treatments use a `19px` radius.
- The “CLASH ROYALE” wordmark uses a black `1px` stroke and a drop shadow.
- Presentation frames use linear gradients and inner shadows.
- Artwork and screen content are image-based rather than represented by extracted UI components.

## Color palette

Colors are ranked by raw usage where counts are available.

| Color | Token / usage | Count |
|---|---|---:|
| `#DADADA` | Raw color | 360 |
| `#020202` | Grey / 900; most-used style | 216 |
| `#FFFFFF` | Raw color; presentation text and light status-bar fills | 27 |
| `#07285D` | Dark blue status-bar fill | 7 |
| `#FCBD7014` | Warm translucent status-bar fill | 5 |
| `#000000` | SystemBlack; wordmark stroke and dark effects | — |

## Type scale

Available type styles, ordered from largest to smallest:

| Size | Typeface | Usage |
|---:|---|---|
| `78px` | Fredoka Medium | Large documentation headings |
| `55px` | Supercell-Magic Magic | “CLASH ROYALE” wordmark and thank-you display text |
| `49px` | Fredoka Medium | Contact handle display |
| `46px` | Fredoka Medium | Documentation headings and explanatory copy |
| `42px` | Fredoka Medium | Introductory and closing headings |
| `36px` | Fredoka Bold | Tool-list heading |
| `27px` | Fredoka Medium | Secondary introductory heading |
| `15px` | SF Pro Text Semibold | iOS status-bar time |

Text is frequently white. Display branding may use a `1px` black stroke and a drop shadow.

## Spacing scale

_None found in source._

## Radius scale

- `19px`: Rounded app-icon and image rectangles.
- `2.67px`: iOS battery outline radius.
- `1.33px`: iOS battery charge radius.
- `0px`: iOS notch radius.

## Elevation & effects

- **Drop shadows:** Used on app icons, wordmark text, thank-you text, and iPhone mockup groups.
  - `24px` shadow size with `0 4px` offset on one app icon.
  - `10px` shadow size with `0 14px` offset on the wordmark and thank-you text.
  - `19px` shadow size with `0 4px` offset on the closing app icon.
  - `38px` shadow size with `31 23px` offset on multiple iPhone mockup groups.
- **Inner shadows:** Used on presentation frames and large image panels.
  - `76px` shadow size with `0 4px` offset.
  - `96px` shadow size with `-1 4px` offset.
- **Layer blur:** `6px` on a large closing image.
- **Opacity:** Battery outline uses `35%`; battery node uses `40%`.

## Components

_None found in source._

## Screen patterns

- **Presentation cover:** Large title and supporting headings over a blue-toned gradient presentation frame, paired with iPhone mockups and app icons.
- **Process documentation:** Long vertical presentation frame containing large white section headings, explanatory paragraphs, image-based diagrams, user-flow artwork, wireframe artwork, and repeated iPhone mockups.
- **Closing/contact screen:** Large white contact and thank-you messaging, an app icon, and a rounded image panel.
- **iPhone mockup:** Image-based phone frame containing image-based screen content and an iOS status bar. Status bars vary between `#FFFFFF`, `#07285D`, and `#FCBD7014`.
- **Status bar:** Centered notch, left-aligned time, and right-aligned mobile signal, Wi-Fi, and battery indicators. The time uses SF Pro Text Semibold at `15px`.

## Notes for implementers

- Treat the extracted screens as presentation boards and visual references, not as a reusable component library.
- Use only the listed color values; no local variable collections or formal color styles were found beyond the listed tokens.
- Preserve the hierarchy of Fredoka display headings, SF Pro Text status-bar text, and Supercell-Magic branding text.
- Keep major presentation headings white and visually prominent.
- Use image assets for the phone screens, diagrams, wireframes, and artwork where the source provides image-based content.
- Do not infer spacing, component geometry, motion behavior, or additional radius values; those systems were not extracted.
- Maintain rounded `19px` treatments for app icons and large image panels where shown.
