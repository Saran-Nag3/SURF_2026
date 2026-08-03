---
name: tesla-app-neumorphism-community
source: Tesla App | Neumorphism (Community)
kind: design-system-context
---

# tesla - Design System

## Overview

- Dark Tesla vehicle-control app concept with neumorphic surfaces.
- Source page: Page 1.
- Three primary screen patterns: Welcome screen, Main screen, and A/C fast settings.
- No local variable collections, text styles, spacing variables, radius variables, motion tokens, grid styles, or component families were found.

## Design language

- Dark, dimensional, neumorphic interface with rounded panels and soft shadow treatment.
- Primary surfaces use dark linear gradients.
- White and off-white text provide hierarchy against dark surfaces.
- Blue accents indicate active controls, status indicators, and interactive emphasis.
- Large vehicle and range presentation is used on the Welcome screen.
- Information is organized into compact rounded cards and control groups.
- Typography uses Lato for interface content and Gilroy for selected display labels.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#7F8489` | 58 | Secondary text, labels, inactive icons, supporting information |
| `#FFFFFF` | 32 | Primary text, headings, active icon details |
| `#058DD9` | 4 | Blue accent |
| `#41BBFF` | 4 | Bright blue accent |
| `#FDFDFD` | 4 | High-emphasis display and vehicle text |
| `#1F2328` | Gradient stop | Dark gradient start |
| `#1A1C1F` | Gradient stop | Dark gradient end |

- Most-used style: `gradient`, 6 uses.
- Use the available dark gradient as `linear-gradient(#1F2328 0%, #1A1C1F 100%)`.
- Do not introduce additional colors outside this palette.

## Type scale

### Lato

| Size | Weight | Usage |
|---:|---|---|
| 24px | Black | Section headings and prominent control headings |
| 18px | Black | Strong labels and values |
| 18px | Regular | Body copy, navigation labels, metadata, control labels |
| 14px | Regular | Compact scale labels |

Raw usage counts:

- Lato Regular, 18px: 15 uses
- Lato Black, 18px: 9 uses
- Lato Black, 24px: 7 uses
- Lato Regular, 14px: 5 uses

### Gilroy

- Gilroy Medium, 18px: `giga`
- Gilroy Medium, 24px: `km`
- Gilroy UltraLight, 188px: Welcome screen range value

### Display examples

- Welcome screen range value: `297`, Gilroy UltraLight, 188px.
- Welcome screen unit: `km`, Gilroy Medium, 24px.
- Vehicle title: `Cybertruck`, Lato Black, 50px on the Welcome screen and 18px on compact screens.
- Secondary vehicle label: `Tesla`, Lato Regular, 24px on the Welcome screen and 18px on compact screens.

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- 1px
- 4px
- 8px
- 20px
- 50px
- 60px
- 100px

Additional observed corner configurations:

- `50/50/60/60px` on the Main screen fast-settings panel.
- `0/0/0/0px` on groups without rounded corners.

No radius variables were found.

## Elevation & effects

- Large screen-frame drop shadow: `100px` with offset `0 0`.
- Information-card drop shadows:
  - `30px` with offset `-7 -7`
  - `40px` with offset `14 14`
- Small active-control drop shadows: `8px`, `10px`, and `25px` offsets were observed.
- Drag handle inner shadow: `4px` with offset `0 1`.
- Small status-indicator inner shadow: `4px` with offset `0 0`.
- Text and icon glow/drop-shadow effects are used for selected high-emphasis elements.
- No local effect styles were found.

## Components

_None found in source._

The extraction contains repeated UI patterns, but no Figma component families or component geometry specifications.

## Screen patterns

### Welcome screen

- Frame size: `495x1078px`.
- Rounded dark gradient background with `60px` radius.
- Large range value: `297 km`.
- Large `Cybertruck` and `Tesla` title block.
- Vehicle imagery is used as a decorative visual.
- Includes vehicle settings, lock control, and the message `A/C is turned on`.
- Primary lock control uses a `128x128px` circular button background with supporting label text.

### Main screen

- Frame size: `495x1075px`.
- Rounded dark gradient background with `60px` radius.
- Compact top fast-settings panel: `494x144px`, with `50/50/60/60px` corner radii.
- Navigation labels: `Navigation` and `History`.
- Information areas include:
  - Engine card: `150x160px`
  - Tires information
  - Climate card: `150x160px`
  - Status values for battery, range, and temperature
- Repeated information cards use `8px` radius.
- Compact header includes `Cybertruck`, `Tesla`, profile, menu, and A/C status.

### A/C fast settings

- Frame size: `495x1076px`.
- Expanded fast-settings surface: `494x1074px`, with `60px` radius.
- Includes:
  - Drag handle: `60x4px`, `20px` radius
  - A/C control area
  - Fan-speed slider with values `1` through `5`
  - Mode controls: Dry, Auto, Cool, Program
  - Turn-off button
  - A/C status information
- Mode controls use `80x80px` visual button areas and `18px` Lato Regular labels.
- Main control and decorative circular elements use `20px` and `100px` radii.

## Notes for implementers

- Preserve the dark gradient-led neumorphic appearance across all screens.
- Use `#7F8489` for secondary information and inactive controls; use `#FFFFFF` or `#FDFDFD` for primary emphasis.
- Reserve `#058DD9` and `#41BBFF` for active states and blue interface accents.
- Use Lato Black at `24px` for major section headings.
- Use Lato Regular at `18px` for body copy, metadata, navigation, and mode labels.
- Use Gilroy only for the extracted display treatments: the `297` range value and `km` unit.
- Maintain the observed rounded geometry: `60px` screen shells, `8px` information cards, `20px` drag and control details, and `100px` circular controls.
- Treat decorative groups such as vehicle illustrations, profile icons, menu icons, and control icon artwork as visual assets rather than reusable component families; no component definitions were extracted.
- Keep the visible labels and values from the source, including `Cybertruck`, `Tesla`, `A/C is ON`, `Battery`, `54%`, `Range`, `297 km`, `Temperture`, and `27 C`.
