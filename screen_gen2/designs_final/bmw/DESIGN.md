---
name: bmw-car-app-community
source: BMW Car App (Community)
kind: design-system-context
---

# bmw - Design System

## Overview

Mobile BMW car-app community concept for 375×812px screens, plus a large promotional showcase canvas. The UI combines automotive imagery, blue-to-red gradient backgrounds, translucent glass-like panels, circular controls, white typography, and strong drop shadows.

## Design language

- Premium automotive and performance-oriented.
- Dark, high-contrast presentation with white text over saturated gradient backgrounds and imagery.
- Frequent use of translucent surfaces, blurred backgrounds, gradient borders, inner shadows, and large soft shadows.
- Rounded mobile frames use a 30px radius.
- Content patterns include:
  - Welcome and vehicle-selection prompts.
  - BMW M5 vehicle detail and configuration content.
  - Unlock-car interaction.
  - Editorial/community navigation.
- Typography mixes Poppins for most product and editorial content with SF Pro Text for system status-bar time.

## Color palette

Ranked by raw usage:

| Color | Raw uses | Role |
|---|---:|---|
| `#FFFFFF` | 36 | Primary text, icons, solid surfaces, status-bar details |
| `#DADADA` | 28 | Neutral raw color used in the source |
| `#FFFFFF99` | 8 | Secondary translucent white marks and icon details |
| `#3600004D` | 7 | Translucent dark glass-panel fill |
| `#014888` | 4 | Blue circular control and button fill |

Additional source usage:

- White is also used with opacity in translucent overlays.
- Linear gradients are used extensively for backgrounds, borders, text fills, and decorative elements.
- Image fills are central to vehicle, profile, and promotional content.

## Type scale

Fonts and sizes found in the source:

| Size | Font | Weight/style | Usage |
|---:|---|---|---|
| 38.91px | Poppins | Medium | Large user-name heading |
| 32.67px | Poppins | Regular | Vehicle model heading |
| 30px | Poppins | Medium | Welcome heading |
| 24px | Poppins | Medium | Performance heading |
| 22px | Poppins | Light | Introductory body copy |
| 20.75px | Poppins | Bold | Greeting |
| 20px | Poppins | Regular | Supporting vehicle specification |
| 17.43px | Poppins | Light | Primary action labels |
| 15px | SF Pro Text | SemiBold | Status-bar time |
| 14px | Poppins | Medium | Category and feature labels |
| 14px | Poppins | Light | Unlock instruction |
| 13px | Poppins | Light | Editorial description |
| 12px | Poppins | Light | Price information |
| 11.86px | Poppins | Light | Secondary vehicle-selection action |
| 11.4px | Poppins | Light | “Mehr lesen ...” link |
| 10px | Poppins | Medium | Navigation labels |
| 9.65px | Poppins | Medium | Compact vehicle specifications |

Typography hierarchy identified by the extraction: 22px Poppins Light, 15px SF Pro Text SemiBold, 10px Poppins Medium, and 9.65px Poppins Medium.

## Spacing scale

_None found in source._

## Radius scale

- 30px: primary mobile frames.
- 12.45px: translucent glass panels and bordered action surfaces.
- 5px: compact rectangular control.
- 2.67px: battery indicator border.
- 1.33px: battery capacity shape.

## Elevation & effects

- Drop shadows are used broadly on frames, images, text, buttons, controls, and mockups.
- Recorded drop-shadow dimensions include:
  - 2.16px offset.
  - 4px offset.
  - 5.04px offset.
  - 6.36px offset.
  - 7px offset.
  - 8.09px offset.
  - 9px offset.
  - 11px offset.
  - 14.45px offset.
  - 19px offset.
  - 30px offset.
  - 82.99px offset on the promotional mockup.
- Glass panels use:
  - 6.18px background blur.
  - 1.34px inner shadows.
  - 1.24px gradient strokes.
  - 12.45px radius.
- Circular controls use inner shadows and drop shadows.
- A 55px layer blur is used on a large decorative ellipse.
- Text commonly uses drop shadows between 2.16px and 6.36px offsets.
- Gradient fills are used for app backgrounds, panel borders, text, and decorative strokes.

## Components

_None found in source._

## Screen patterns

- **Welcome / vehicle selection — Frame 2**
  - 375×812px mobile frame with 30px radius.
  - Welcome heading, explanatory copy, alternate-vehicle action, and paired actions: “Fortfahren!” and “Nein, danke!”.
  - Uses a 140.67×61px translucent rounded action surface with 12.45px radius.
  - Includes a top status bar, image content, and white divider decoration.

- **Vehicle editorial detail — Frame 4**
  - 375×812px mobile frame with 30px radius.
  - Back affordance, large vehicle image, editorial copy, configured price, and “Mehr lesen ...”.
  - Includes category navigation labels such as “Magazin”, “Automobile”, “Community”, and “M Power”.
  - Uses a 159×110px translucent rounded panel, circular blue control, color-selection circles, and gradient text treatments.

- **Unlock and vehicle specification — Frame 5**
  - 375×812px mobile frame with nested 375×812px mobile content.
  - User greeting, profile image, unlock instruction, large vehicle imagery, circular unlock control, and BMW M5 specifications.
  - Uses large headings for “625 PS”, “BMW M5”, and “COMPETITION”.
  - Compact specification copy uses 9.65px Poppins Medium.
  - Includes multiple 82×61px translucent rounded controls and a 115×115px circular control.

- **Promotional showcase — unsplash:4Eh9DKBpeQk**
  - 2890×1736.26px canvas with a translucent white base and large gradient overlay.
  - Displays multiple phone mockups, BMW branding imagery, and decorative device groups.
  - Intended as a presentation or marketing composition rather than a primary app screen.

## Notes for implementers

- Target the extracted mobile viewport of 375×812px for app screens.
- Apply a 30px radius to primary mobile frames.
- Use white typography for high contrast over imagery and saturated backgrounds.
- Use Poppins for product, editorial, navigation, and vehicle content; use SF Pro Text SemiBold at 15px for status-bar time.
- Preserve the distinction between large display headings, 22px introductory copy, 14px instructional text, 10px navigation labels, and 9.65px compact specifications.
- Treat translucent dark panels as glass surfaces using `#3600004D`, 12.45px radius, 1.24px border treatment, 6.18px background blur, and inner shadows.
- Use `#014888` for circular primary controls and `#FFFFFF99` for translucent white icon details.
- Keep status bars at 375×37px where shown.
- Use imagery as a major structural layer; text and controls are overlaid rather than placed on plain surfaces.
- No spacing variables, local styles, motion tokens, or component families were extracted.
