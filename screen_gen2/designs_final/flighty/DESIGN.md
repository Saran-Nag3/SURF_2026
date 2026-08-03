---
name: flighty-app-community
source: Flighty App (Community)
kind: design-system-context
---

# flighty - Design System

## Overview

Flighty is a flight-tracking interface centered on aircraft details, flight timelines, gates, schedules, and route summaries. The system uses smartphone-sized screens, white information cards, dark device shells, compact aviation metadata, and clear status coloring.

Source coverage:
- Figma page: All pages (2): Cover, Elements
- Screens: Cover, Elements / 1, Elements / 2, Elements / Frame 17
- No local variable collections, text styles, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Use a clean, information-dense aviation UI with strong alignment and compact metadata groups.
- Use white surfaces and black primary text for the main flight-information screen.
- Use muted gray text for labels and secondary information.
- Use green for estimated flight times and other positive status indicators.
- Use magenta as a limited accent color.
- Structure content in bordered, rounded cards with horizontal dividers and repeated two-column metadata rows.
- Treat the smartphone frame as a prominent presentation container: rounded corners, a dark variant, and a subtle shadow.
- Use Roboto throughout the extracted interface.
- Use uppercase or title-case aviation labels such as `WED, 20 OCT - SQ 705`, `Bangkok to Singapore`, `Depart`, `Schedule`, and `Estimated`.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 50 | Primary text, dark device shell, border token, home button token |
| `#9D9EAB` | 44 | Secondary labels and metadata |
| `#C51554` | 8 | Accent color |
| `#E7E7E7` | 6 | Card and panel outlines |
| `#FFFFFF00` | 6 | Transparent fill |
| `#15C546` | 5 | Positive or estimated status |
| `#FFFFFF` | 5 | Primary surface and light device shell |

Named color tokens:
- `Border normal`: `#000000`
- `Home Button`: `#000000`

## Type scale

Font family: Roboto.

Observed styles, ranked by usage:

| Weight | Size | Usage |
|---|---:|---:|
| Regular | 18px | 21 |
| Regular | 22.78px | 18 |
| Regular | 17px | 15 |
| Regular | 21.52px | 13 |
| Medium | 17px | 8 |
| Medium | 21.52px | 8 |
| Medium | 20px | 7 |
| Medium | 25.31px | 7 |

Additional observed sizes:
- Roboto Medium, `25px`
- Roboto Medium, `31.64px`
- Roboto Bold, `17px`

Hierarchy:
- Large heading: Roboto Medium, `31.64px`
- Primary heading: Roboto Medium, `25.31px` or `25px`
- Prominent metadata: Roboto Medium, `21.52px` or `20px`
- Body and timing values: Roboto Regular, `22.78px`, `21.52px`, `18px`, or `17px`
- Secondary labels: Roboto Medium or Regular, `17px`
- Pro badge text: Roboto Bold, `17px`

## Spacing scale

No spacing variables were found. Observed layout spacing values:

- `0px` padding
- `2px` padding
- `2.53px` padding
- `7px` vertical gap
- `8.86px` vertical gap
- `10px` gap
- `11px` vertical gap
- `12.66px` gap
- `13.92px` vertical gap
- `15px` gap
- `18.98px` gap
- `23px` gap
- `25px` gap
- `29px` gap
- `29.11px` gap
- `31.64px` gap
- `36.7px` gap
- `50px` gap
- `51px` gap
- `63.28px` gap
- `64.55px` gap
- `82px` gap
- `103.78px` gap

Use `space_between` for major horizontal groups and fixed gaps for metadata stacks and timeline rows.

## Radius scale

No radius variables were found. Observed radii:

- `5px`
- `6.33px`
- `15px`
- `18.98px`
- `31.7px`
- `37.97px`
- `40px`

Observed corner treatments:
- Smartphone containers: `40px` radius in the Elements screen and `31.7px` in the Cover instance.
- Card panels: `15px` radius at the Elements scale and `18.98px` at the Cover scale.
- Lower or upper card sections may use only the corresponding two corners.
- Home button: `15px` or `18.98px` radius.

## Elevation & effects

- `Smartphone Shadow`: drop shadow with `60px` offset and color `#0000000D`.
- Background blur effects are used at `66px` and `83.53px` on layered lower card panels.
- Smartphone containers use the `Smartphone Shadow` effect.
- Card borders use `#E7E7E7` with observed stroke widths of `1.4px`, `1.77px`, `2px`, and `2.53px`.

## Components

Only these component families are present:

### `1`

- Size: `428x926px`
- Fill: `#FFFFFF`
- Radius: `40px`
- Stroke: `Border normal`, `2px`
- Effect: `Smartphone Shadow`
- Represents the light smartphone screen containing aircraft details, timeline information, and flight summary content.

### `2`

- Size: `428x926px`
- Fill: `#000000`
- Radius: `40px`
- Stroke: `Border normal`, `2px`
- Effect: `Smartphone Shadow`
- Includes a black presentation shell, home button, and centered image content.

### `Frame 17`

- Size: `327x53px`
- Horizontal layout
- Padding: `0px`
- Gap: `50px`
- Alignment: space-between / center
- Sizing: fixed width and fixed height
- Contains a gate label on the left and schedule/estimated timing columns on the right.
- Text uses Roboto Regular at `18px` for values and `17px` for labels.
- Estimated values use `#15C546`.

## Screen patterns

- **Cover:** A presentation canvas containing light and dark smartphone variants. The light variant shows an aircraft image, aircraft title, flight metadata, timeline content, route summary, and home button. The dark variant presents a centered image on a black shell.
- **Elements / 1:** The primary light smartphone screen. It combines a top aircraft image, an aircraft information card, a detailed timeline card, a route summary footer, and a home button.
- **Elements / 2:** A dark smartphone variant with a centered image and home button.
- **Elements / Frame 17:** A reusable timeline row pattern. Place the location or gate label on the left, then pair schedule and estimated values on the right. Use green for the estimated value.
- **Aircraft information card:** Present label/value pairs in two horizontal rows. Labels use muted gray; values use black and medium weight.
- **Timeline card:** Use a heading, supporting subtitle, optional Pro badge, a `Depart` label, and repeated timeline rows.
- **Flight summary footer:** Use an airline mark area, a muted flight/date line, a bold route line, and a compact action/icon area.

## Notes for implementers

- Preserve the extracted component family names exactly: `1`, `2`, and `Frame 17`.
- Do not introduce additional component families without source evidence.
- Keep the main Elements screen at `428x926px` with a `40px` outer radius.
- Use the `327x53px` `Frame 17` row for repeated timeline entries rather than recreating its layout.
- Keep labels visually subordinate to values through muted `#9D9EAB`, smaller `17px` type, and regular or medium Roboto.
- Use `#15C546` specifically for positive estimated timing states.
- Maintain the card border treatment and layered lower-panel blur where the screen pattern calls for it.
- Keep the home button black and centered near the bottom of the smartphone container.
- Avoid adding unverified colors, spacing tokens, radius tokens, motion behavior, or text-style names.
