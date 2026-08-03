---
name: kia
source: Progress Bar UI Kit (Community)
kind: design-system-context
---

# kia - Design System

## Overview
Progress-bar UI kit focused on status, step-based, and percentage-based progress indicators. The source contains a cover screen and component showcase screens for icons, progressing animation, and five progress-bar types.

## Design language
- Typeface: Lato.
- Primary interaction color: #6929C4.
- Progress and active-step color: #0043CE.
- Status colors: success #198038, error #DA1E28, warning #F1C21B.
- Surfaces are primarily #FFFFFF with neutral gray text and tracks.
- Progress components use compact horizontal layouts, rounded containers, and 8px gaps.
- Progressing states use centered dot animation inside outlined circular icons.

## Color palette
Ranked by reported usage, with duplicate hex values consolidated:

| Hex | Source roles | Usage |
|---|---|---:|
| #0043CE | Blue/Blue 70; primary progress, active icons | 56 |
| #FFFFFF | Neutral/White; Neutral/Gray 30; Purple/Purple 50 | 51+ |
| #6F6F6F | Neutral/Gray 60; secondary text | 35 |
| #8D8D8D | Neutral/Gray 50; disabled borders | 19 |
| #A8A8A8 | Neutral/Gray 40; disabled animation dot | 15 |
| #393939 | Neutral/Gray 80; dark surface | 14 |
| #262626 | Neutral/Gray 90; primary text | 14 |
| #FFFFFF | Neutral/Gray 30; inactive step line | 13 |
| #E0E0E0 | Neutral/Gray 20; progress-track background | 12 |
| #D0E2FF | Blue/Blue 20 | 11 |
| #DA1E28 | Status/Error | 10 |
| #F1C21B | Status/Warning | 8 |
| #EDF5FF | Blue/Blue 10 | 6 |
| #525252 | Neutral/Gray 70 | 6 |
| #0072C3 | Cyan/Cyan 60 | 4 |
| #198038 | Status/Success | 4 |
| #FFD7D9 | Red/Red 20 | 3 |
| #0F62FE | Blue/Blue 60; Status/Info | 2+ |
| #F6F2FF | Purple/Purple 10 | 1 |
| #4589FF | Blue/Blue 50 | 1 |
| #F9E59E | Yellow/Yellow 20 | 2 |
| #FFFFFF1A | Unstyled color | 5 |
| #F1A81B | Unstyled color | 3 |

## Type scale
- 56px, Lato Medium (500), raw heading style.
- 36px, Lato Medium (500), raw heading style.
- 18px, Lato Bold (700).
- 16px, Lato Bold (700).
- 14px / 20px, Lato Regular (400), tracking 0.25px; named `En/Body/EN Body M`.
- 12px, Lato Regular (400).
- 10px, Lato Medium (500).
- 10px, Lato Regular (400).
- 8px, Lato Bold (700).
- 8px, Lato Medium (500).
- 8px, Lato SemiBold (600).
- Raw cover title uses Lato ExtraBold at 140px; this is present only in the cover screen extraction.

## Spacing scale
No spacing variables are defined. Component layout values:
- 2px padding on icon internals.
- 4px vertical gap in the progressing-animation component set.
- 6px gap in Type 3 progress bars.
- 8px standard component gap.
- 12px padding in Type 5 progress bars and component-set containers.
- 16px padding in Type 4 and Type 1/2/3 progress bars.
- 24px horizontal padding in Type 1, Type 2, and Type 3 progress bars.
- Type 5 padding: 12px on all sides.
- Type 4 padding: 16px on all sides.
- Type 1, Type 2, and Type 3 padding: 16px vertical and 24px horizontal.

## Radius scale
No radius variables are defined.
- Progress-bar containers: 8px radius.
- Circular icons: 64px radius.
- Progress tracks and indicators: 64px radius.

## Elevation & effects
No local effect styles were found. The cover extraction includes drop shadows on title and image elements, but their full values are not represented as reusable effect tokens.

## Components
### Proggressing Animation
- Size: 16×16px.
- Variants: `Step=1`, `Step=2`, `Step=3`.
- Step 1: one 4×4px dot in #0043CE.
- Step 2: 4×4px center dot in #0043CE plus an 8×8px #0043CE ring at 16% opacity.
- Step 3: 4×4px center dot, 8×8px ring at 12% opacity, and 12×12px ring at 8% opacity; all #0043CE.

### Icons
- Base size: 20×20px.
- Internal icon size: 16×16px.
- Internal padding: 2px on all sides.
- Radius: 64px.
- Variants: `Check`, `Disable`, `Empty`, `Erorr`, `Progressing`, `Warning`.
- Check: circular #0043CE fill with white check.
- Error: circular #DA1E28 fill with white close mark.
- Warning: circular #F1C21B fill with dark information mark.
- Progressing: #FFFFFF fill with 1px #0043CE stroke and progressing animation.
- Empty: #FFFFFF fill with 1px #FFFFFF stroke.
- Disable: #FFFFFF fill with 1px #8D8D8D stroke and a #A8A8A8 animation dot.

### Progress Bar - Type 1
- Size: 328×80px.
- Layout: horizontal; 16px vertical and 24px horizontal padding; 8px gap; aligned min/center.
- Container: #FFFFFF fill, 8px radius.
- Includes a 40×40px status icon and a 232×40px information/indicator area.
- Track: 232×8px, #E0E0E0 fill, 64px radius.
- Variants:
  - `Complete`: 100% indicator in #198038; percentage uses Lato Bold 18px.
  - `Error`: 75% indicator in #DA1E28; percentage uses Lato Bold 18px.
  - `Progressing`: 30% indicator in #0043CE; percentage uses Lato Bold 18px.
  - `Warning`: 50% indicator in #F1C21B; percentage uses Lato Bold 18px.

### Progress Bar - Type 2
- Size: 328×80px.
- Layout: horizontal; 16px vertical and 24px horizontal padding; 8px gap; space-between/center alignment.
- Container: #FFFFFF fill, 8px radius.
- Progress line: 232×1px, divided into four 58px segments.
- Five labeled sections use 20×20px icons above 10px Lato Medium labels.
- Variants: `Complete`, `Error`, `Progressing`, `Warning`.
- Status line segments use #0043CE for completed progress, status-specific colors for the active error or warning segment, and #FFFFFF for inactive segments.

### Progress Bar - Type 3
- Size: 328×80px.
- Layout: horizontal; 16px vertical and 24px horizontal padding; 6px gap; min/center alignment.
- Container: #FFFFFF fill, 8px radius.
- Text: Lato SemiBold, 8px.
- Variants: `Error`, `Progressing`, `Warning`.

### Progress Bar - Type 4
- Size: 328×80px.
- Layout: horizontal; 16px padding on all sides; 8px gap; min/center alignment.
- Container: #FFFFFF fill, 8px radius.
- Variants: `Progressing`, `Show Step`, `Error`, `Warning`.
- Text combinations use Lato Medium 8px, Lato Bold 8px, and Lato Bold 16px.

### Progress Bar - Type 5
- Size: 328×128px.
- Layout: vertical; 12px padding on all sides; 8px gap.
- Container: #FFFFFF fill, 8px radius.
- Variants: `Progressing`, `Erorr`, `Warning`.
- Text combinations include `En/Body/EN Body M`, Lato Regular 10px, Lato Regular 12px, and Lato Bold 16px.

### Bottom Navigation
_None found in source._

## Screen patterns
- Cover: 1920×960px frame with #F6F2FF fill, centered promotional typography, and multiple image-based previews.
- Icons showcase: component set containing six 20×20px icon states in a vertical arrangement.
- Progressing Animation showcase: component set containing three 16×16px animation steps.
- Progress Bar Type 1 showcase: four 328×80px percentage indicators for complete, error, progressing, and warning states.
- Progress Bar Type 2 showcase: step-based progress line with labeled sections and status variants.
- Additional Type 3, Type 4, and Type 5 progress-bar families are defined in the component specifications.

## Notes for implementers
- Use only the listed component families and variants.
- Preserve the 328px fixed width for progress-bar components.
- Use #FFFFFF for component surfaces.
- Use #0043CE for active progress and progressing states.
- Use #198038, #DA1E28, and #F1C21B for complete, error, and warning states respectively.
- Keep progress tracks and indicators at 64px radius where specified.
- Use Lato with the exact sizes and weights listed in the type scale.
- The source contains no variable collections, spacing tokens, radius tokens, motion tokens, effect styles, or grid styles.
