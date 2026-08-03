---
name: monkey-speak-app-community
source: Monkey Speak App (Community) — Pagina 2
kind: design-system-context
---

# monkey - Design System

## Overview

- Mobile app design for recording, translating, and replaying monkey sounds.
- Source page: `Pagina 2`.
- Screen size: `360x800px` Android Large frames.
- No local variables, styles, components, or component geometry were found.

## Design language

- Monochrome visual language using black, white, and light gray.
- Large, prominent text is used for instructions, status messages, translations, and headings.
- Inter is the only identified typeface.
- Interfaces use full-width gray surfaces, black borders, and image-based monkey, recording, loading, and navigation visuals.
- Text is predominantly left-aligned within full-width layouts.

## Color palette

| Color | Usage |
|---|---:|
| `#000000` | 20 uses |
| `#D9D9D9` | 15 uses |
| `#FFFFFF` | 7 uses |

- `#000000`: primary text, borders, and strokes.
- `#D9D9D9`: primary screen and content-surface fill.
- `#FFFFFF`: frame backgrounds and light text.

## Type scale

- Inter Black, `48px`: “MONKEY SPEAK APP”.
- Inter Black, `25px`: “ENJOY THE MONKEY SOUNDS”.
- Inter Light, `36px`: recording and instruction messages.
- Inter SemiBold, `36px`: translation wait message.
- Inter Bold, `36px`: translation heading and translated monkey speech.
- Inter Bold, `22px`: replay instruction.
- Identified typography hierarchy token: Inter Bold, `36px`.

## Spacing scale

_None found in source._

## Radius scale

- `36px`: rounded image rectangle used for the monkey image.

## Elevation & effects

- Drop shadow used on the app title: `4px` offset, `0 4`.
- Drop shadow used on the upper translation result rectangle: `4px` offset, `0 4`.
- No local effect styles found.

## Components

_None found in source._

## Screen patterns

- **Welcome screen — Android Large - 1**
  - `360x800px` frame.
  - Full-screen light gray background surface.
  - Large black “MONKEY SPEAK APP” title.
  - `191x191px` rounded monkey image with `36px` radius.
  - White “ENJOY THE MONKEY SOUNDS” message with `50%` opacity.

- **Recording prompt — Android Large - 2**
  - `360x800px` frame with full-screen light gray surface.
  - Black `36px` Inter Light instruction: “Press the button to record the sounds of the monekys”.
  - Gray `277x279px` rectangle and a recording image asset.

- **Recording state — Android Large - 3**
  - `360x800px` frame with full-screen light gray surface.
  - Recording image asset at `360x102px`.
  - Black `36px` Inter Light “Recording...” status.

- **Translation loading state — Android Large - 4**
  - `360x800px` frame with full-screen light gray surface.
  - Black `36px` Inter SemiBold message: “We are translating it please wait...”.
  - Loading image asset at `235x174px`.
  - Additional `100x100px` frame.

- **Translation result — Android Large - 5 and Android Large - 6**
  - `360x800px` frame with full-screen light gray surface.
  - Two stacked `360x400px` gray rectangles with `3px` black strokes; the upper rectangle has a drop shadow.
  - Two `360x55px` gray controls with `3px` black strokes.
  - “Traduction” heading in Inter Bold, `36px`.
  - “Listen again the monkey sound” label in Inter SemiBold, `22px`.
  - Translated speech in Inter Bold, `36px`, within a `317x202px` text area.
  - Screen 5 uses a `191x191px` rounded monkey image.
  - Screen 6 uses a `276x102px` image asset.
  - Both screens include a `39x43px` image asset resembling a back/navigation control.

## Notes for implementers

- Use only the extracted palette: `#000000`, `#D9D9D9`, and `#FFFFFF`.
- Preserve the `360x800px` Android Large screen proportions.
- Use Inter with the specified weights and sizes; do not substitute an unrecorded typeface.
- Keep the `36px` radius on the rounded monkey image.
- Treat the gray full-screen surface as the dominant page background pattern.
- Preserve the recorded border widths: `1px` title stroke and `3px` translation-panel strokes.
- Image assets are present in the source, but their visual content is represented only by source image hashes.
