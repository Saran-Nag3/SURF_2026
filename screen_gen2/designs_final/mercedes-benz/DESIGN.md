---
name: mercedes-benz-app-community
source: Mercedes-Benz App (Community)
kind: design-system-context
---

# mercedes-benz - Design System

## Overview

- Source: Mercedes-Benz App (Community), Page 1.
- Primary screen format: Android Large, 360×800px.
- Visual direction: dark automotive interface with black and muted teal backgrounds, white typography and icons, image-led vehicle content, rounded controls, and pronounced shadows.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, grid styles, or effect styles were found.

## Design language

- Use dark, high-contrast compositions with white foreground content.
- Use #728887 as the primary muted teal accent and #7EC0F6 as a highlight for promotional messaging.
- Use large photographic or image-filled vehicle surfaces and decorative imagery as backgrounds or cards.
- Use rounded controls and cards with strong shadows.
- Use white line and filled icons for vehicle controls, navigation, account, microphone, phone, lock, fuel, lights, parking, doors, and engine states.
- Use Inter for interface copy and Nobile or Aubrey for branded headings and promotional statements.
- Brand wordmarks use white text with a thin white stroke and drop shadow.

## Color palette

| Color | Usage count | Role |
|---|---:|---|
| #FFFFFF | 167 | Primary text, icons, strokes, and foreground UI |
| #46545469 | 12 | Raw translucent dark-teal color |
| #728887 | 7 | Muted teal backgrounds, buttons, and gradient stops |
| #000000 | 6 | Backgrounds, dark gradient stops, and shadows |
| #7EC0F6 | 3 | Promotional heading highlight |
| #D9D9D900 | 3 | Transparent or near-transparent decorative fill |

Documented color treatments:

- Background gradients use #728887 and #000000 stops.
- Buttons use #728887 with #FFFFFF text.
- Promotional copy uses #7EC0F6.
- Most interface content is #FFFFFF on #000000 or #728887-based surfaces.

## Type scale

| Size | Family | Style | Observed usage |
|---:|---|---|---:|
| 60px | Aubrey | Regular | 3 |
| 30px | Nobile | Regular | 14 |
| 30px | Inter | Regular | 7 |
| 26px | Aubrey | Regular | 3 |
| 26px | Nobile | Regular | 3 |
| 18px | Inter | Regular | 11 |
| 15px | Inter | Regular | 10 |
| 14px | Inter | Regular | 3 |

Observed hierarchy:

- 30px Inter or Nobile for primary Mercedes-Benz branding.
- 26px Aubrey or Nobile for headings such as “Welcome” and promotional copy.
- 18px Inter for prominent actions and voice prompts.
- 15px Inter for vehicle status information.
- 14px Inter for compact vehicle-control labels.
- 60px Aubrey for the large “We Call It Perfection” heading.

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- 5px: hamburger icon geometry.
- 13px: compact buttons and login/sign-in controls.
- 23px: vehicle status cards and image cards.
- 29px: large climate/control panel.

No radius variables or formal radius tokens were found.

## Elevation & effects

Observed effects:

- Screen drop shadow: 7px offset 0 10px.
- Brand wordmark drop shadow: 30px offset 0 10px.
- Voice prompt drop shadow: 10px offset 0 4px.
- Circular vehicle controls: inner shadow 15px offset 0 4px, drop shadow 13px offset 0 5px, and layer blur 1px.
- Connect control: inner shadow 15px offset 0 4px, drop shadow 13px offset 0 5px, and layer blur 1px.
- Login and sign-in controls: drop shadow 18px offset 0 6px and layer blur 2px.
- Large image panel: layer blur 1px and drop shadow 18px offset 0 6px.
- Decorative ellipse: drop shadow 21px offset 0 15px.
- “Welcome” heading: drop shadow 11px offset 0 4px.
- Large promotional composition: drop shadow 64px offset 0 10px.
- Some background and image surfaces use image fills rather than solid colors.

## Components

_None found in source._

## Screen patterns

- **Voice-enabled landing screen:** 360×800 Android screen with dark or image background, decorative top imagery, white Mercedes-Benz wordmark, login and sign-in buttons, microphone icon, “Say “Hello Mercedes !”” prompt, hamburger icon, and account icon.
- **Vehicle dashboard:** 360×800 screen with dark teal/black gradient, vehicle imagery, circular vehicle-state controls, a rounded status card, vehicle name, call and menu icons, and a rounded “Connect” action.
- **Vehicle controls panel:** Dark gradient screen containing a large rounded image-filled panel with circular controls for climate, lights, parking, doors, and engine state. Labels include “Ac”, “Lights”, “Parking”, and “Engine On”.
- **Welcome/content screen:** Black 360×800 screen with Mercedes-Benz branding, “Welcome” heading, hamburger navigation, rounded image cards, decorative imagery, and the highlighted heading “Your dream car is just a button away !”.
- **Brand presentation compositions:** Large black canvases with isolated typography, image-filled rectangles, blurred black ellipses, and iPhone mockups.

## Notes for implementers

- Target the documented 360×800 Android Large viewport for the primary app layouts.
- Preserve the dark visual hierarchy: use #000000 or documented gradients as the base and #FFFFFF for essential content.
- Use only the extracted font families and sizes: Inter, Nobile, and Aubrey at the listed sizes.
- Recreate the rounded controls and cards with the observed 13px, 23px, and 29px radii where applicable.
- Use image fills for vehicle photography, decorative artwork, and mockups; the extraction identifies these assets by image hashes rather than reusable design tokens.
- Treat the repeated decorative groups as visual background elements, not reusable component families.
- No component sets or component geometry were extracted; implement controls from the documented screen patterns and observed dimensions.
- Keep icons white and compact, with observed icon dimensions ranging from approximately 14×16px to 34×30px.
