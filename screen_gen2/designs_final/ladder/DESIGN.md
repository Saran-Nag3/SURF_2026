---
name: ux-career-ladder-ux-playbook-community
source: UX Career Ladder | UX Playbook (Community)
kind: design-system-context
---

# ladder - Design System

## Overview

- Source: UX Career Ladder | UX Playbook (Community), Page 1.
- Primary visual: a UX career ladder diagram with four color-coded stages: Building, Supporting, Executing, and Strengthening.
- Additional screens include a PDF presentation, a “Find out more” information page, and a glass-style UX Career Ladder preview interface.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, grid styles, or component families were found.

## Design language

- Use a white base for the career ladder, PDF, and informational layouts.
- Use large, bold, uppercase Rubik typography for the career-stage labels.
- Use four accent colors to distinguish ladder stages:
  - Building: `#57DAA3`
  - Supporting: `#9A8DD9`
  - Executing: `#4D9AFF`
  - Strengthening: `#FF8F74`
- Use translucent white surfaces, white strokes, rounded controls, and background blur for the UX Career Ladder preview.
- Use dark text on white informational layouts and white text over translucent or image-backed surfaces.
- The preview interface uses a desktop canvas at `1920x1080px`, with a large rounded translucent workspace over a full-screen image.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 162 | Primary background and light content surfaces |
| `#EEEEEE` | 111 | Neutral ladder diagram shapes |
| `#FFFFFF1A` | 34 | Translucent fills, borders, and glass surfaces |
| `#898787` | 28 | Neutral unstyled color |
| `#EBEBF599` | 25 | Light translucent neutral |
| `#4D9AFF` | 24 | Executing stage accent |
| `#57DAA3` | 23 | Building stage accent |
| `#9A8DD9` | 22 | Supporting stage accent |
| `#FF8F74` | 20 | Strengthening stage accent |
| `#FFFFFF33` | 5 | Stronger translucent white fill |
| `#000000` | 4 | Primary dark text and dark marks |
| `#949292` | 4 | Neutral unstyled color |
| `#FFFFFFE5` | — | Primary light label color |
| `#0000001A` | — | Translucent dark fill or stroke |

Color token mappings:

- `Fills/Primary`: `#FFFFFF1A`, `#0000001A`
- `Stroke/Style-1`: `#FFFFFF1A`, `#0000001A`
- `Labels/Primary`: `#FFFFFFE5`
- `Separators/Primary`: no color value found

## Type scale

### Display and headings

- Rubik Bold, `60px`: career-stage headings; used for BUILDING, SUPPORTING, EXECUTING, and STRENGTHENING.
- Rubik Regular, `30px`: raw typography usage.
- Poppins Regular, `64px`: large informational heading.
- Poppins Regular, `48px`: informational heading.

### Interface text

- Inter SemiBold, `14px`
- SF Pro Text Semibold, `13px`
- SF Pro Text Semibold, `12px`
- Inter Medium, `12px`
- SF Pro Text Medium, `12px`
- SF Pro Text Regular, `12px`
- SF Pro Text Regular, `13px`
- SF Pro Text Regular, `15px`
- SF Pro Display Regular, `14px`

Typography hierarchy from the extraction:

1. Rubik Bold, `60px`
2. Rubik Regular, `30px`
3. Poppins Regular, `64px`
4. Poppins Regular, `48px`
5. Inter SemiBold, `14px`
6. SF Pro Text Semibold, `13px`
7. SF Pro Text Regular, `15px`
8. SF Pro Text Regular, `13px`
9. Inter Medium, `12px`
10. SF Pro Text Medium, `12px`
11. SF Pro Text Semibold, `12px`
12. SF Pro Text Regular, `12px`
13. SF Pro Display Regular, `14px`

## Spacing scale

No spacing variables were found. Observed layout values:

- `0px`: zero padding and gaps
- `4px`: menu-item gap
- `6px`: pill horizontal padding
- `8px`: compact vertical padding and control padding
- `10px`: icon and label gap; control padding
- `13px`: horizontal padding
- `14px`: vertical padding and horizontal padding
- `16px`: content gap
- `24px`: menu-item trailing padding
- `125px`: space-between gap in a 221px-wide row
- `153px`: space-between gap in a 217px-wide row

## Radius scale

Observed corner-radius values:

- `0px`: square groups
- `8px`: cards, panels, and compact controls
- `10px`: preview content frame
- `32px`: large preview workspace
- `60px`: menu items
- `72px`: pill controls
- `74px`: pill segments
- `100px`: circular avatar or grouped control
- `150px`: rounded control or surface

## Elevation & effects

- Background blur token: `135.91px`.
- Preview workspace background blur: `143.12px`.
- Inner-shadow effects are used on the preview workspace and content frame.
- Drop-shadow effects are used on the preview workspace.
- Translucent white surfaces use `#FFFFFF1A` and `#FFFFFF33`.
- Translucent dark surfaces use `#0000001A` where specified by the extracted tokens.

## Components

_None found in source._

No component families or component geometry were extracted. Raw interface structures include navigation panels, segmented controls, cards, menu items, rounded icon controls, and preview frames, but they are not defined as reusable component families in the source.

## Screen patterns

- **Use this for a Self Assessment**: `2000x2000px` white canvas containing a large neutral ladder diagram and four oversized color-coded stage labels.
- **Example**: `2000x2000px` version of the self-assessment ladder with selected ladder shapes highlighted using the stage accent colors.
- **PDF**: `1700x1428px` white presentation layout with a large image and an `uxplaybook.org` mark.
- **Find out more**: `1700x1119px` white informational layout with large black Poppins quotation text, supporting imagery, and an `uxplaybook` mark.
- **UX Career Ladder Preview**: `1920x1080px` image-backed desktop interface. A `1426x883px` rounded glass workspace contains navigation, segmented controls, cards, a central content preview, and a left-side structure panel.

## Notes for implementers

- Preserve the four stage-to-color assignments exactly.
- Use Rubik Bold at `60px` for the main career ladder labels.
- Keep the ladder diagram predominantly neutral with `#EEEEEE`, applying stage accents only to selected or emphasized shapes.
- Treat the preview interface as a translucent glass layout: use `#FFFFFF1A` surfaces, `#FFFFFF33` active fills, `#FFFFFF1A` strokes, and the extracted blur values.
- Use rounded geometry prominently, especially `8px`, `10px`, `32px`, `60px`, `72px`, and `74px` radii.
- Do not infer missing component families, spacing variables, radius variables, or text styles; the source does not define them.
- Image assets appear in the PDF, informational, and preview screens, but their source colors and contents are not specified as design tokens.
