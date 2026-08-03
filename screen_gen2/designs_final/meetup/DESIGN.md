---
name: meetup
source: Pride Month Meetup Web design (Community)
kind: design-system-context
---

# meetup - Design System

## Overview

A Pride Month meetup visual system centered on bold, playful color, heavy black outlines, rounded nested panels, decorative stars and arcs, and expressive display typography. The extracted file contains two Page 1 screens: `colors` and `Pride Month Meetup Web design`, both at 1600×1200px.

## Design language

- Use bright, high-contrast color fields with black outlines.
- Compose large nested rounded panels: a yellow outer field, a light-blue inset panel, and a white content panel.
- Use Rammetto One for expressive display headings and JetBrains Mono for technical labels, URLs, and color values.
- Treat decorative stars, hearts, arcs, rainbow marks, and abstract shapes as supporting visual motifs.
- Use white lettering with a 3px black stroke and colored drop shadows for prominent display text.
- Use pill-shaped swatches and typography labels with white fills, black outlines, and centered content.
- Keep layouts graphic and poster-like rather than minimal or utilitarian.

## Color palette

Ranked by raw usage count:

| Color | Usage |
|---|---:|
| `#000000` | 180 |
| `#FFBD11` | 69 |
| `#FFFFFF` | 40 |
| `#FF6CDF` | 20 |
| `#AA3ED8` | 12 |
| `#FFD22E` | 12 |
| `#0061E1` | 7 |
| `#00AED9` | 7 |
| `#2EBA00` | 7 |
| `#67027D` | 7 |
| `#F4003C` | 7 |
| `#FF8000` | 7 |
| `#FFD400` | 7 |
| `#8F0FC7` | 6 |
| `#FFD232` | 6 |
| `#0E6AFF` | 4 |
| `#0FAB3D` | 4 |
| `#7BCEF2` | 4 |
| `#F64E4E` | 4 |
| `#161A21` | 3 |
| `#212826` | 3 |
| `#3E73E1` | 3 |
| `#46BE4A` | 3 |
| `#9C2DAD` | 3 |
| `#F18028` | 3 |
| `#F2505F` | 3 |
| `#FD831F` | 3 |
| `#FFF34A` | 3 |
| `#FFFFFF03` | 3 |

Observed primary screen surfaces:

- Outer screen fill: `#FFD232`.
- Nested panel fill: `#7BCEF2`.
- Main content panel: `#FFFFFF`.
- Frequent outline and text color: `#000000`.
- Frequently used accent: `#FFBD11`.
- Additional accent colors include `#FF6CDF`, `#AA3ED8`, `#FFD22E`, `#0FAB3D`, `#0E6AFF`, and `#F64E4E`.

## Type scale

| Size | Family | Weight/style | Observed usage |
|---:|---|---|---:|
| 140px | Rammetto One | Regular | Display heading |
| 80px | Rammetto One | Regular | Display heading |
| 24px | Inter | Regular | Large supporting text |
| 24px | JetBrains Mono | Regular | URL and technical text |
| 20px | JetBrains Mono | Medium | Technical labels |
| 19px | JetBrains Mono | Medium | Color labels |
| 30px | Rammetto One | Regular | Font-name label |
| 30px | JetBrains Mono | Medium | Font-name label |

Typography usage counts from the extracted tokens:

- Inter Regular, 24px: 60 uses.
- Rammetto One Regular, 80px: 16 uses.
- Rammetto One Regular, 140px: 10 uses.
- JetBrains Mono Medium, 19px: 4 uses.
- JetBrains Mono Medium, 20px: 4 uses.
- JetBrains Mono Regular, 24px: 3 uses.

## Spacing scale

Observed gaps and padding values:

- `0px` padding.
- `9px` gap.
- `10px` gap.
- `24px` gap.
- `30px` gap.
- `31px` padding.
- `38px` gap.
- `67px` padding.
- `80px` gap.

Use the observed 30px gap for the color-swatch row and font-label grouping, 38px between font-label groups, and 80px between the primary swatch row and the typography row.

## Radius scale

Observed corner radii:

- `0px` for square decorative groups.
- `12px` for a small decorative group.
- `52.5px` for pill-shaped swatches and font labels.
- `60px` for the main white content panel.
- `76px` for the yellow inset panel.
- `88px` for the light-blue outer panel.

## Elevation & effects

- Display lettering uses a drop shadow with offset `0px 4px`.
- Display-letter shadow colors observed: `#F64E4E`, `#FFBD11`, `#FFF34A`, `#0FAB3D`, and `#0E6AFF`.
- Main panel outlines use `#000000` at `3px`.
- Swatch and font-label outlines use `#000000` at `2.25px`.
- Decorative arcs use `2px` strokes.
- The circular decorative mark uses a `1px` stroke.
- Decorative groups appear at `80%` and `59%` opacity.
- No reusable local effect styles or motion tokens were found.

## Components

_None found in source._

## Screen patterns

- **`colors` screen:** 1600×1200px poster layout with an outer `#FFD232` field, nested `#7BCEF2` and `#FFFFFF` rounded panels, a large outlined display title, decorative stars and rainbow arcs, color swatch pills, font-name pills, and supporting decorative marks.
- **`Pride Month Meetup Web design` screen:** 1600×1200px composition using the same nested yellow, light-blue, and white panel structure, with the `www.nickelfox.com` label, a circular heart-and-letter decorative mark, and additional abstract decoration.

## Notes for implementers

- Preserve the nested panel order: yellow outer background, light-blue inset, then white content panel.
- Use black outlines consistently around major panels, swatches, font labels, and display lettering.
- Use `Rammetto One` for expressive headings; use `JetBrains Mono` for URLs, color values, and font labels; use `Inter` for supporting text.
- Color swatches are pill-shaped groups sized `245.25×93px`, with a `129×93px` colored segment and a white remainder.
- The primary display title is assembled from individually styled letters, each using a colored `0px 4px` drop shadow.
- Keep decorative motifs secondary to the title, palette swatches, and typography labels.
- No component families, local variables, local paint styles, local text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were extracted.
