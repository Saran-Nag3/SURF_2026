---
name: bereal-ui-community
source: BeReal UI (Community)
kind: design-system-context
---

# bereal - Design System

## Overview

Mobile BeReal social UI extracted from 390×844px screens. The interface is predominantly dark and image-led, with rounded photo cards, compact user metadata, reaction controls, tab navigation, camera/text-entry states, and iPhone-style system chrome.

No local variables, text styles, spacing variables, radius variables, motion tokens, grid styles, or component families were found.

## Design language

- Use a black-first visual foundation with white primary content.
- Prioritize large photographic content in rounded cards.
- Use compact, high-contrast metadata beneath or overlaid near media.
- Use translucent white treatments for secondary controls and navigation.
- Use rounded pills for segmented navigation and status controls.
- Use circular controls for reactions and camera options.
- Use restrained typography with SF Pro weights and small UI labels.
- Use orange as a system accent where required.

## Color palette

Ranked by raw usage where counts were provided:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 97 | Primary light ink, text, icons, system chrome |
| `#DADADA` | 70 | Neutral interface fill |
| `#000000` | 58 | Primary dark foundation and dark ink |
| `#FFFFFF99` | 40 | Muted white text, translucent strokes |
| `#FAFAFA` | 37 | Light button and control fill |
| `#39393B` | 12 | Dark neutral |
| `#FFFFFF33` | 7 | Translucent white control background |
| `#A2A2A3` | 6 | Secondary metadata text |
| `#D9D9D9` | 5 | Neutral icon/background fill |
| `#9F9F9F` | 4 | Muted icon detail |
| `#E70A0A54` | 4 | Translucent red accent |
| `#FBFBFB` | 4 | Near-white surface |

Named token colors:

- Dark Ink: `#FFFFFF`
- SystemOrange / Light: `#FF9500`
- Carbon / Darkest: `#24262B`
- Carbon Neutral/300: `#D6D9DD`
- Dark Secondary: `#3F3F3F`
- Dark Primary: `#646464`
- Dark Action: `#D3D3D3`
- Light Ink: `#000000`

Most-used named styles:

- Dark Ink: 36 uses
- Dark Primary: 27 uses
- Carbon Neutral/300: 10 uses
- SystemOrange / Light: 10 uses
- Dark Secondary: 3 uses
- Dark Action: 1 use
- Light Ink: 1 use

## Type scale

Font family: SF Pro.

| Size | Weight/style | Usage count |
|---:|---|---:|
| 24px | SF Pro Text Light | 26 |
| 20px | SF Pro Bold | 7 |
| 20px | SF Pro Semibold | 12 |
| 16px | SF Pro Text Regular | 3 |
| 13px | SF Pro Semibold | 6 |
| 12px | SF Pro Semibold | 36 |
| 12px | SF Pro Regular | 6 |

Observed hierarchy:

- 24px SF Pro Text Light for keyboard characters and large light text.
- 20px SF Pro Bold for time display.
- 20px SF Pro Semibold for prominent emoji reactions.
- 16px SF Pro Text Regular and SF Pro Semibold for tab labels.
- 13px SF Pro Semibold for usernames and compact labels.
- 12px SF Pro Semibold for buttons and navigation controls.
- 12px SF Pro Regular for secondary metadata.

## Spacing scale

No spacing tokens were defined. Observed layout values:

- 0px
- 6px
- 7px
- 8px
- 9px
- 10px
- 12px
- 14px
- 16px
- 18px
- 22px
- 32px

Notable patterns:

- Feed metadata uses 12px horizontal padding.
- Reaction controls use 10px gaps.
- Segmented controls use 7px gaps with 8px and 12px horizontal padding.
- Image grids use 8px horizontal gaps and 9px vertical gaps.
- Tab navigation uses 8px horizontal padding and 14px inter-item spacing.
- Primary empty-state button uses 12px and 22px padding.

## Radius scale

Observed radii:

- 3px: home indicator
- 5px: keyboard keys
- 12px: buttons, reaction groups, thumbnails
- 16px: large media cards
- 99px: circular and pill controls
- 99999px: fully circular controls

## Elevation & effects

- Keyboard keys use a drop shadow with 0px horizontal offset and 1px vertical offset.
- Keyboard surfaces use a 70px background blur.
- Feed and camera screens use linear gradient overlays for darkening.
- The text-entry screen uses a radial gradient background.
- Large media cards use rounded clipping at 16px.
- Reaction controls use translucent strokes and circular geometry.

## Components

_None found in source._

Component instances and repeated UI structures are present in the screen extraction, but no component families or component specifications were defined.

## Screen patterns

- **Friends empty state:** Black 390×844px screen with top navigation for “My Friends” and “Discovery”, an empty-state message, and a light “Take your BeReal” button.
- **Friends feed:** Full-width vertical photo cards at 390px width with 16px corner radius, 32px avatar, username/location metadata, overflow action, and circular emoji reactions.
- **Camera capture state:** Large rounded image area, timer text, a circular “2x” control, and a translucent segmented control.
- **Thumbnail discovery grid:** Four rows of three 117×157px rounded thumbnails with 8px gaps inside a 367px-wide grid.
- **Text capture state:** Rounded text canvas with large placeholder text and cursor above a blurred iPhone keyboard.
- **System chrome:** 390×844px viewport with a 133×6px home indicator and dark gradient overlays at screen edges.

## Notes for implementers

- Target a 390×844px mobile viewport for the extracted compositions.
- Use `#000000` as the primary application background.
- Use `#FFFFFF` for primary text and system indicators; use `#A2A2A3` for secondary metadata.
- Preserve the observed 16px media-card radius and 12px thumbnail/control radius.
- Keep feed media full width at 390px and use 12px horizontal metadata padding.
- Use 117×157px thumbnails in three-column rows with 8px gaps.
- Use SF Pro typography with the exact weights and sizes listed in the type scale.
- Treat gradients, image fills, emoji, and system keyboard elements as screen-specific effects rather than reusable component families.
- Do not assume unextracted spacing, radius, motion, grid, or component tokens.
