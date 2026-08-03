---
name: twitch-app-concept-community
source: Twitch App Concept (Community)
kind: design-system-context
---

# twitch - Design System

## Overview

A Twitch mobile app concept centered on a purple-and-black interface with white typography, Twitch branding, authentication flows, and a live-stream discovery home screen.

- Source page: All pages (2): Cover, Twitch App Concept
- Primary mobile canvas: 375x812px
- Cover canvas: 1920x960px
- Component families: `Logo`, `basic`

## Design language

- Use a Twitch-inspired visual system with a dominant purple background and dark near-black content surfaces.
- Use white text and controls for high contrast.
- Use purple borders and accents for selected or highlighted content.
- Use red `LIVE` badges and red live-ring strokes to communicate active broadcasts.
- Use compact pill-shaped metadata badges for live status and viewer counts.
- Authentication screens use centered, vertically stacked controls with white inputs and buttons.
- Home content uses rounded stream cards, circular avatars, category pills, and live indicators.
- The source includes both SF Pro Text and Manrope typography. SF Pro Text is the documented mobile type family; Manrope appears in the cover artwork.

## Color palette

| Color | Usage |
|---|---|
| `#FFFFFF` | Primary text, icons, inputs, buttons, status-bar controls; 71 uses |
| `#6441A5` | Primary purple background, selected category, logo accents, borders; 13 uses |
| `#000000` | Logo artwork and dark graphical elements; 7 uses |
| `#B20C0C` | Live badges and live-ring strokes; 6 uses |
| `#FFFFFF80` | Secondary text and muted battery elements; 6 uses |
| `#08050D` | Dark home-screen background and dark circular surfaces; 5 uses |
| `#211E26` | Unselected category pills; 4 uses |

No local paint styles or color variables were found.

## Type scale

Typography uses SF Pro Text for mobile UI:

| Size | Family | Weight | Usage |
|---:|---|---|---|
| 16px | SF Pro Text | Regular | Body labels and input text; 12 uses |
| 15px | SF Pro Text | Medium | Status-bar clock and version text; 5 uses |
| 14px | SF Pro Text | Regular | Category labels; 5 uses |
| 10px | SF Pro Text | Bold | `LIVE` labels; 4 uses |
| 16px | SF Pro Text | Bold | Strong actions and navigation labels; 4 uses |
| 10px | SF Pro Text | Medium | Secondary stream metadata; 3 uses |
| 16px | SF Pro Text | Semibold | Stream titles; 3 uses |

Additional typography observed in the cover artwork:

- Manrope ExtraBold, 96px
- Manrope Regular, 39px

No local text styles were found.

## Spacing scale

_No spacing tokens or spacing variables found in source._

Observed layout values include:

- 8px gaps and padding
- 10px gaps
- 11px gap
- 16px input padding
- 18px button horizontal padding
- 20px gaps
- 24px page side padding
- 40px gaps
- 44px and 48px values in source layout dimensions

## Radius scale

_No radius variables found in source._

Observed corner radii:

- 4px: viewer-count metadata badge
- 8px: inputs, login button, category pills, stream-card image
- 16px: `LIVE` badge
- 30px: cover sign-up artwork rectangles
- 100px: mobile progress indicator
- 330px: cover avatar instance

Circular avatars and status elements use ellipse geometry rather than a named radius token.

## Elevation & effects

No local effect styles were found.

Observed effects:

- Stream-card images use a purple drop shadow with a 24px blur, 0px horizontal offset, and 4px vertical offset.
- Cover sign-up artwork uses drop shadows with 84px blur.
- Cover artwork includes a second drop shadow with 84px blur, 30px horizontal offset, and 44px vertical offset.
- Viewer-count metadata uses a 10px background blur.
- The login button uses a drop shadow with 24px blur, 0px horizontal offset, and 4px vertical offset.
- Stream-card images use a 3px purple stroke.

## Components

### Logo

- Size: 100x116.67px
- Used on the splash screen.
- Login-screen instance size: 64x74.51px.
- Logo artwork uses white and black fills.
- Preserve the logo proportions when scaling.

### basic / checkbox_checked

- Size: 24x24px
- Inner checkbox vector: 14x14px
- Used beside the `Remember me` label.
- The checked vector uses white.

## Screen patterns

### Cover

- 1920x960px purple cover frame.
- Large white title treatment centered in the composition.
- Author identity row with circular avatar and handle.
- Two tall rounded sign-up artwork panels with drop shadows.
- Includes a low-opacity Figma logo graphic.

### Splash

- 375x812px purple mobile screen.
- Large centered Twitch logo.
- White status bar, version label, and progress indicator.
- Login form elements exist in the source but are set to 0% opacity on this screen.

### Login

- 375x812px purple mobile authentication screen.
- Top status bar and compact Twitch logo.
- White `Welcome 🎉` heading.
- Two stacked fields: `Email` and `Password`.
- Fields are 327x56px with 16px horizontal padding and 8px radius.
- White 327x57px `Login` button with 8px radius.
- `Remember me` and `Forgot password` row.
- Bottom account prompt with `Don’t have an account?` and `Sign up`.
- Version label near the bottom.

### Home Classica

- 375x812px dark home screen using `#08050D`.
- Header with circular profile image, greeting, and 24px bold heading.
- Horizontal category row with 24px side padding.
- Selected category uses `#6441A5`; unselected categories use `#211E26`.
- Live-channel avatar row with circular avatars and red live rings.
- Stream cards are 327px wide with 203px image areas, 8px radius, 3px purple stroke, and purple shadow.
- Cards include a 36px avatar, 16px semibold stream title, 10px medium channel name, red `LIVE` badge, and viewer-count badge.
- Repeated stream-card pattern supports multiple live broadcasts.

## Notes for implementers

- Use only the documented palette values; prioritize `#FFFFFF`, `#6441A5`, and `#08050D`.
- Keep mobile screens at 375x812px unless the target context requires another size.
- Use 327px-wide form controls and stream-card content areas on the mobile layout.
- Use 24px horizontal page padding for home-screen rows.
- Use SF Pro Text for mobile UI text and preserve the documented weights and sizes.
- Treat stream titles as semibold 16px text and secondary channel metadata as medium 10px text in `#FFFFFF80`.
- Use red only for live-state communication.
- Preserve the distinction between selected purple category pills and dark unselected pills.
- Keep inputs and primary buttons white with 8px corners.
- Avoid introducing undocumented tokens, components, effects, spacing values, or colors.
