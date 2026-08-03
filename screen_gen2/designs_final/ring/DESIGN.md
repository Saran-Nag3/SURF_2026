---
name: ring-runner-sport-app-community
source: Ring Runner - Sport App (Community)
kind: design-system-context
---

# ring - Design System

## Overview

A dark, mobile fitness app design for 390×844px screens. The experience uses large gradient hero headers, white Poppins typography, circular workout and progress visuals, and a fixed bottom navigation bar. Extracted screens: Fitness - Summary, Fitness - Profile, and Fitness - Workouts.

No local variables, paint styles, text styles, spacing styles, radius styles, effect styles, grid styles, or component families were found.

## Design language

- Dark, high-contrast fitness interface.
- Full-width hero headers with gradient imagery or decorative artwork.
- White primary typography over dark backgrounds.
- Bright blue active states and navigation accents.
- Purple and blue navigation surfaces vary by active screen.
- Rounded action rows and circular workout thumbnails.
- Bottom navigation uses four destinations: Summary, Profile, Nutrition, and Workouts.
- Use Poppins exclusively for the extracted type system.

## Color palette

Ranked by extracted usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 43 | Primary text, icons, and active or inactive navigation content |
| `#14B9FF` | 6 | Active navigation accent and selected icon color |
| `#3535358C` | 6 | Dark translucent circular thumbnail backgrounds |
| `#985CBB` | 5 | Purple navigation surface and action-row borders |
| `#2848BB` | 4 | Progress-ring and metric accent |
| `#6B3AA480` | 4 | Translucent purple action-row fill |
| `#ADADAD` | 3 | Extracted neutral color |
| `#FFFFFFBF` | 3 | Secondary italic link text |

## Type scale

| Size | Family and weight/style | Usage count |
|---:|---|---:|
| 30px | Poppins Bold | 3 |
| 15px | Poppins Medium | 7 |
| 10px | Poppins SemiBold | 8 |
| 8px | Poppins SemiBold | 12 |
| 7px | Poppins Italic | 3 |

Usage guidance:

- 30px Poppins Bold: screen headings and prominent greeting text.
- 15px Poppins Medium: supporting header copy and action-row labels.
- 10px Poppins SemiBold: workout titles, metrics, and navigation labels.
- 8px Poppins SemiBold: compact supporting labels.
- 7px Poppins Italic: secondary lesson links.

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found. Observed radii:

- 10px: action rows and their containing groups.
- 25px: top corners of the bottom navigation surface.
- 0px: hero header geometry and several full-width background layers.

## Elevation & effects

No local effect styles were found.

Observed effects:

- Drop shadows are used on workout artwork and progress-ring elements.
- Circular progress visuals use layered rings with strokes.
- Exact extracted shadow colors are not included in the allowed palette.

## Components

_None found in source._

## Screen patterns

### Fitness - Summary

- 390×844px mobile screen.
- Dark full-screen background with a large hero header.
- Hero content: “Good Afternoon, Riwa!” and “Let’s see today’s schedule”.
- Summary content includes a circular progress metric, steps, distance, a run prompt, and an award notification.
- Bottom navigation surface uses a blue treatment.
- Summary is the active destination and uses `#14B9FF` for its icon and label.

### Fitness - Profile

- 390×844px mobile screen.
- Hero content: “My Profile” and a three-part profile path.
- Four stacked 342×51px rounded action rows: Share Profile, BMI Settings, Medical Measurements, and Logout / Switch Account.
- Bottom navigation surface uses `#985CBB`.
- Profile is the active destination and uses `#14B9FF` for its icon and label.

### Fitness - Workouts

- 390×844px mobile screen.
- Hero content: “Workouts” and a motivational quote.
- Workout content uses 110×110px circular thumbnail areas with workout artwork.
- Includes warm-up, biceps, and shoulders/back workout entries with lesson links.
- Bottom navigation surface uses a blue-green treatment.
- Workouts is the active destination and uses `#14B9FF` for its icon and label.

## Notes for implementers

- Target a 390×844px mobile viewport for the extracted screen compositions.
- Preserve the dark visual foundation and strong contrast between white content and colored accents.
- Use 30px Poppins Bold for primary screen headings.
- Use 15px Poppins Medium for supporting copy and action rows.
- Use 10px and 8px Poppins SemiBold for compact labels and metrics.
- Use 7px Poppins Italic for secondary lesson links.
- Keep action rows at 342×51px with 10px corner radii when reproducing the Profile screen.
- Use 110×110px circular artwork containers for workout and activity cards.
- Keep the four-item bottom navigation consistent across screens; only the active destination changes color.
- Do not introduce component-family assumptions, local variables, or additional tokens not present in the extraction.
