---
name: neon-app-ui-community
source: Neon app UI (Community), Page 1
kind: design-system-context
---

# neon - Design System

## Overview

- Source: Figma file **Neon app UI (Community)**, Page 1.
- Primary format: 393×852px mobile screens presented within an iPhone display.
- Visual focus: dark analytics dashboards with bright status colors, circular KPI indicators, charts, and a top navigation bar.
- Component family available: **Device Bezels**.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Dark, data-dense mobile dashboard interface.
- Use near-black surfaces with white and muted-gray supporting text.
- Use saturated accent colors to distinguish active navigation, KPI states, and chart data.
- Favor compact labels, circular progress/KPI graphics, and large numeric readouts.
- Navigation is horizontal and centered near the top of the mobile viewport.
- Active navigation uses #F7B500; inactive navigation uses #6D7278.
- Decorative charts and bezel elements are prominent visual layers rather than standalone controls.

## Color palette

Ranked by observed usage:

| Color | Usage | Role |
|---|---:|---|
| #E02020 | 240 | Primary alert or negative status color |
| #6D7278 | 43 | Muted labels and inactive navigation |
| #FFFFFF | 39 | Text, foregrounds, and light surfaces |
| #D8D8D8 | 36 | Neutral background or placeholder surface |
| #6DD400 | 14 | Positive KPI/status color |
| #F7B500 | 14 | Active navigation and highlight color |
| #0D0D0D | 8 | Primary dark screen background |
| #979797 | 8 | Neutral stroke |
| #232323 | 7 | Dark supporting surface |
| #0091FF | 6 | Blue accent |
| #0C0C0C | 6 | Near-black supporting surface |
| #F3DF92 | 6 | Pale yellow accent |
| #000000 | 4 | Black detail or overlay |
| #0091FF1A | 4 | Translucent blue accent |
| #0000001A | 3 | Translucent black overlay |
| #242424 | 3 | Dark supporting surface |
| #6D727833 | 3 | Translucent muted-gray accent |
| #B620E0 | 3 | Purple KPI/status color |
| #5856D6 | — | Device display shape fill |

Additional observed KPI colors are present in the source extraction but are not included because they are outside the permitted palette.

## Type scale

Font family: **Inter**

| Size | Weight | Observed usage |
|---:|---|---:|
| 44px | Bold | Large KPI headings |
| 25px | Regular | Screen heading |
| 14px | Bold | KPI values and unit labels |
| 14px | Regular | Body text |
| 12px | Medium | Navigation and compact labels |
| 12px | Regular | Body/supporting text |
| 11px | Medium | KPI titles |
| 10px | Medium | Compact metadata |
| 4px | Bold | Small unit labels inside KPI indicators |

Typography hierarchy prioritizes 44px KPI numerals, followed by 14px headings and labels, then compact 12px, 11px, 10px, and 4px supporting text.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- No local effect styles were found.
- One screen uses a background blur effect of **21.75px**.
- Screen compositions include shadow and gradient layers as decorative visual treatments.
- No reusable elevation tokens were defined.
- Explicit layer corner radii are 0px where documented.

## Components

### Device Bezels

- Available component family: **Device Bezels**.
- Component: `Device Bezels/iPhone - Display Shape`.
- Size: **393×852px**.
- Fill: #5856D6.
- Used as a display/bezel overlay on the mobile screens.
- Preserve the 393×852px display proportion when placing dashboard content inside the device frame.

## Screen patterns

### iPhone 11

- 393×852px dark overview dashboard.
- Uses a translucent top navigation region with background blur.
- Top navigation items: Overview, Analytics, Reports, Performance, Insights.
- Overview is active in #F7B500; other items use #6D7278.
- Main content is organized into stacked dashboard sections with compact metric rows, status indicators, and chart-like decorative groups.

### iPhone 11 Copy

- 393×852px dark analytics dashboard.
- Analytics is active in #F7B500; other navigation items use #6D7278.
- Includes a large screen heading, graph areas, shadow treatment, and multiple circular KPI indicators.
- Compact KPI cards include Cost Analysis, Profit Margin, Started today, and Progress Rate.
- Large KPI displays include values such as 75 and 100 with 44px Inter Bold numerals and unit labels.

### iPhone 11 Copy 2

- 393×852px dashboard variant with Insights active in #F7B500.
- Other navigation items use #6D7278.
- Uses a light neutral underlying display layer and the Device Bezels display shape.
- Maintains the same horizontal five-item navigation pattern as the other screens.

## Notes for implementers

- Build for a 393×852px mobile viewport and keep the iPhone display shape aligned to the full viewport.
- Use Inter only, with the documented weights and sizes.
- Treat #0D0D0D and #0C0C0C as primary dark surfaces; use #FFFFFF for high-contrast foreground content.
- Use #6D7278 for inactive navigation and compact supporting labels.
- Use #F7B500 exclusively for the active navigation state shown in the source.
- Use #6DD400, #B620E0, #E02020, #0091FF, and #F3DF92 as distinct data/status accents rather than as general-purpose text colors.
- Keep KPI indicators compact and circular, with large numerals for primary metrics and tiny bold unit labels.
- Do not infer a spacing or radius system; none was extracted.
- Do not introduce additional component families beyond **Device Bezels**.
- Decorative chart layers may be treated as visual artwork; the source does not define reusable chart component specifications.
