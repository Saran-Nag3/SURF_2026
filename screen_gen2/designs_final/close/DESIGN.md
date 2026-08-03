---
name: smooth-open-close-app-phone-os-animations-better-version-community
source: Smooth open/close app phone OS animations (Better version) (Community)
kind: design-system-context
---

# close - Design System

## Overview

A dark, phone-oriented prototype demonstrating smooth app open and close animations. Screens use 440×956px frames, a black background, large Lexend typography, app icon/rectangle states, and a persistent bottom indicator.

## Design language

- Dark, monochrome interface with sparse red accents.
- Phone screen frame: 440×956px.
- Primary typeface: Lexend Regular.
- Large display typography is used for time, instructional headings, and app content.
- App visuals use simple rectangles, rounded corners, and neutral gray fills.
- Bottom navigation indicator is a white pill over a transparent overlay.

## Color palette

Ranked by observed usage:

| Color | Usage | Observed use |
|---|---:|---|
| `#FFFFFF` | 28 | Primary text, borders, and bottom indicator |
| `#000000` | 4 | Phone screen backgrounds |
| `#D9D9D900` | 4 | Transparent overlay rectangle |
| `#959595` | 3 | App rectangle fill |
| `#C3C3C3` | 3 | App icon fill |
| `#FF4040` | 3 | Red accent in instructional diagrams |

## Type scale

Typeface: Lexend Regular.

| Size | Observed use |
|---:|---|
| 20px | Supporting labels such as “App icon” and “App rectangle” |
| 30px | Instructional heading text |
| 40px | Headings, labels, and instructional text |
| 70px | Large instructional headings |
| 120px | Large app-screen content text |
| 128px | Home-screen time display |

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- 0px: square screen and indicator containers.
- 20px: app rectangles, app icons, and the Home app group.
- 100000000px: bottom indicator pill.

## Elevation & effects

- No elevation or shadow styles were found.
- No local effect styles were found.
- A gradient fill appears in instructional diagrams, but its source colors are not included in the allowed palette.

## Components

_None found in source._

## Screen patterns

- **Home:** 440×956px black phone screen with a large white “05 30” display, background ellipse artwork, an 80×80px rounded app tile, an “App” label, and a bottom indicator.
- **App animation (Open):** Full-screen gray app rectangle with a centered horizontal gray icon shape and the bottom indicator.
- **App animation (Exit):** Same full-screen app composition as the open animation, used as the exit state.
- **App:** Black phone screen with large Lexend content text and the bottom indicator.
- **Instructional boards:** Large dark-background instructional layouts describing the prototype flow, plus repeated app-icon/app-rectangle diagrams with white outlined labels and red accent samples.

## Notes for implementers

- Use 440×956px as the phone screen size for the primary screen patterns.
- Use Lexend Regular for all observed text.
- Preserve the black background and white bottom indicator across phone screens.
- Keep app rectangles and icons visually simple, using `#959595` and `#C3C3C3`.
- Use `#FF4040` only as the observed instructional accent.
- Do not introduce component families or token names that are not present in the source.
- The source contains animation-oriented open and exit screens but does not define motion durations, easing, or transition tokens.
