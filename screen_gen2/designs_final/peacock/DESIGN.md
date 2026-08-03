---
name: peacock-flounder-ui-kit-community
source: Peacock Flounder UI Kit (Community)
kind: design-system-context
---

# peacock - Design System

## Overview

Peacock Flounder UI Kit is a dark, developer-oriented UI system covering typography, color, icons, layout, buttons, forms, and feedback patterns. The source contains 9 pages: Cover, Demo, Type, Color, Icon, Layout, Button, Form, and Feedback.

No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Dark ferrum surfaces form the base UI.
- Cobalt is the primary interactive color.
- Rose is used for destructive and error states.
- Jade is used for success states.
- Gold provides an additional accent ramp.
- DM Sans is used throughout the type system.
- Controls use compact dimensions, small radii, and 20px icons.
- Cards and fields commonly use 1px ferrum/base strokes.
- Focus states use cobalt or rose outline effects.
- Raw unstyled colors occur in placeholder elements:
  - `#9747FF`: 83 uses
  - `#9747FF1F`: 24 uses
  - `#FFFFFF00`: 4 uses

## Color palette

### Usage-ranked colors

| Token | Hex | Uses |
|---|---:|---:|
| ferrum/t2 | #CDCCD1 | 219 |
| ferrum/base | #1A1A1D | 194 |
| ferrum/s4 | #1A1A1D | 189 |
| pure white | #FFFFFF | 185 |
| rose/base | #FA0087 | 61 |
| ferrum/t4 | #B2B2B9 | 47 |
| ferrum/s3 | #212124 | 42 |
| ferrum/t7 | #777683 | 39 |
| cobalt/t3 | #BDC1FA | 37 |
| ferrum/t8 | #63626D | 28 |
| ferrum/t9 | #4E4E57 | 27 |
| ferrum/t3 | #C2C2C7 | 22 |
| ferrum/s5 | #151517 | 21 |
| ferrum/s2 | #29292D | 20 |
| cobalt/t7 | #212124 | 19 |
| ferrum/t6 | #8B8A95 | 17 |
| cobalt/base | #1047EA | 10 |

`ferrum/base` and `ferrum/s4` resolve to the same color, `#1A1A1D`. `ferrum/s3` and `cobalt/t7` resolve to the same color, `#212124`.

### Ferrum

- `ferrum/base`: #1A1A1D
- `ferrum/s1`: #323238
- `ferrum/s2`: #29292D
- `ferrum/s3`: #212124
- `ferrum/s4`: #1A1A1D
- `ferrum/s5`: #151517
- `ferrum/t1`: #D8D7DB
- `ferrum/t2`: #CDCCD1
- `ferrum/t3`: #C2C2C7
- `ferrum/t4`: #B2B2B9
- `ferrum/t5`: #9F9EA8
- `ferrum/t6`: #8B8A95
- `ferrum/t7`: #777683
- `ferrum/t8`: #63626D
- `ferrum/t9`: #4E4E57

### Cobalt

- `cobalt/base`: #1047EA
- `cobalt/s1`: #0A39C7
- `cobalt/s2`: #082E96
- `cobalt/s3`: #06246F
- `cobalt/s4`: #041C52
- `cobalt/s5`: #041844
- `cobalt/t1`: #E2E2FD
- `cobalt/t2`: #D1D2FC
- `cobalt/t3`: #BDC1FA
- `cobalt/t4`: #A8AEF9
- `cobalt/t5`: #8F9BF7
- `cobalt/t6`: #7588F5
- `cobalt/t7`: #212124
- `cobalt/t8`: #3B62F1
- `cobalt/t9`: #1D52EF

### Rose

- `rose/base`: #FA0087
- `rose/s1`: #CE036F
- `rose/s2`: #9A0454
- `rose/s3`: #72043E
- `rose/s4`: #54032E
- `rose/s5`: #440426
- `rose/t1`: #FFE0F1
- `rose/t2`: #FFCEE8
- `rose/t3`: #FFB8DE
- `rose/t4`: #FFA2D4
- `rose/t5`: #FF87C7
- `rose/t6`: #FF6BBA
- `rose/t7`: #FF4CAB
- `rose/t8`: #FF38A2
- `rose/t9`: #FF2499

### Jade

- `jade/base`: #00C880
- `jade/s1`: #09B375
- `jade/s2`: #08915F
- `jade/s3`: #06744C
- `jade/s4`: #055739
- `jade/s5`: #04492F
- `jade/t1`: #CFFCEB
- `jade/t2`: #C1FBE6
- `jade/t3`: #AAF9DC
- `jade/t4`: #91F8D2
- `jade/t5`: #73F7C7
- `jade/t6`: #38F5B0
- `jade/t7`: #06EF99
- `jade/t8`: #04E794
- `jade/t9`: #00DB8B

### Gold

- `gold/base`: #FFCC17
- `gold/s1`: #F0BC00
- `gold/s2`: #D1A505
- `gold/s3`: #A38105
- `gold/s4`: #806505
- `gold/s5`: #614D05
- `gold/t1`: #FDF9E2
- `gold/t2`: #FCF5D1
- `gold/t3`: #FBF1BC
- `gold/t4`: #FAECA7
- `gold/t5`: #F9E78B
- `gold/t6`: #F8E16D
- `gold/t7`: #F9DE58
- `gold/t8`: #FADA4C
- `gold/t9`: #FFD52E

### Other colors

- `pure white`: #FFFFFF
- Raw placeholder purple: #9747FF
- Raw placeholder purple at reduced opacity: #9747FF1F
- Transparent: #FFFFFF00

## Type scale

Font family: DM Sans.

| Style | Weight | Size | Line height | Tracking |
|---|---:|---:|---:|---:|
| Heading/Largest | Bold 700 | 48px | 60px | 0.48px |
| Heading/Larger | Bold 700 | 36px | 44px | 0.36px |
| Heading/Large | Bold 700 | 28px | 36px | 0.28px |
| Heading/Medium | Bold 700 | 20px | 28px | 0.2px |
| Heading/Small | Medium 500 | 16px | 28px | 0.32px |
| Heading/Tiny | Bold 700 | 12px | 20px | 0.36px |
| Text/Bold | Bold 700 | 16px | 24px | 0.16px |
| Text/Medium | Medium 500 | 16px | 24px | 0.16px |
| Text/Regular | Regular 400 | 16px | 24px | 0.16px |
| Text/Small/Bold | Bold 700 | 12px | 20px | 0.24px |
| Text/Small/Medium | Medium 500 | 12px | 20px | 0.24px |
| Text/Small/Regular | Regular 400 | 12px | 20px | 0.24px |

Most-used text styles: `Text/Regular` with 121 uses, `Text/Small/Medium` with 97 uses, and `Text/Medium` with 65 uses.

## Spacing scale

_None found in source._

Observed component padding and gaps are specified in the Components section.

## Radius scale

No radius variables were found.

Observed radii:

- 4px: Text, Placeholder, Button, Text Area, Input, Select, Checkbox, Affix Label
- 8px: Slip, Callout, Toast
- 10px: Toggle
- 26px: Radio
- 9px, 14px, and 24px: decorative Cover shapes

## Elevation & effects

- `shadow-base`: drop shadow 8px, offset 0 0, color #3F3F46; plus drop shadow 2px, offset 1 2, color #1E1E1E. Used 15 times.
- `shadow-focus-outline-cobalt`: drop shadow 0px, offset 0 0, color #5875F3. Used 7 times.
- `shadow-focus-outline-rose`: drop shadow 0px, offset 0 0, color #FA0087. Used 3 times.

## Components

### Icons

All listed icons are 20x20px:

`Github`, `Desktop`, `Mobile`, `Alert`, `Warning-Filled`, `Info-Filled`, `Warning`, `Info`, `Success-Filled`, `Alert-Filled`, `Columns`, `Rows`, `Strike`, `Link`, `Bookmark`, `Code`, `Align Right`, `Align Left`, `Align Center`, `Align Justify`, `Italic`, `Bold`, `Circle-Filled`, `Dot`, `External Link`, `Convert`, `Log out`, `Arrow Right`, `Arrow Down`, `Arrow Up`, `Arrow Left`, `Chevron Right`, `Chevron Down`, `Check`, `More`, `Loader`, `Settings`, `Copy`, `Remove`, `Minus`, `Plus`, `Dismiss`.

### Text and layout primitives

- `Text`: 31x24px, radius 4px, horizontal, padding 0 0 0 0px, gap 0px, fixed width and height. Uses `Text/Regular`. Variant: `Secondary` false/true.
- `Blank`: 296x28px, horizontal, padding 0 0 0 0px, gap 0px, centered. Uses DM Sans Regular 12px. Variant: `Horizontal` false/true.
- `Card`: 296x44px, horizontal, padding 8 12 8 12px, gap 0px, centered, fill `ferrum/s3`, 1px stroke `ferrum/base`. Uses DM Sans Regular 12px. Variant: `Horizontal` false/true.
- `Divider`: 9x32px, horizontal, padding 2 4 2 4px, gap 0px, centered. Variant: `Horizontal` false/true.
- `Slip`: 296x36px, radius 8px, horizontal, padding 4 4 4 4px, gap 4px, centered, fill `ferrum/s5`. Uses DM Sans Regular 12px.

### Buttons and labels

- `Button`: 68x32px, radius 4px, horizontal, padding 4 8 4 8px, gap 8px, centered, fill `cobalt/base`. Uses `Text/Medium`.
  - `Style`: Light, Strong, Transparent
  - `State`: Click, Default, Hover
  - `Selected`: false/true
  - `Subtitle`: false/true
  - `Layout`: Icon first, Label first, Tooltip
- `Status label`: 296x20px, horizontal, padding 0 0 0 0px, gap 4px. Uses DM Sans Regular 12px. Variant: `Error` false/true.
- `Label`: 296x92px, vertical, padding 0 0 0 0px, gap 4px. Uses DM Sans Regular 12px. `Children placement`: Bottom, End, Start.
- `Affix Label`: 95x32px, radius 4px, horizontal, padding 4 8 4 8px, gap 4px. Uses `Text/Regular`.

### Form controls

- `Input`: 296x32px, radius 4px, horizontal, padding 4 8 4 8px, gap 0px, fill `ferrum/s3`, 1px stroke `ferrum/base`. Uses `Text/Regular`.
  - `Filled`: false/true
  - `State`: Default, Focus, Hover
  - `Error`: false/true
- `Text Area`: 296x120px, radius 4px, horizontal, padding 4 8 4 8px, gap 4px, fill `ferrum/s3`, 1px stroke `ferrum/base`. Uses `Text/Regular`.
  - `Filled`: false/true
  - `State`: Default, Focus, Hover
- `Select`: 296x32px, radius 4px, horizontal, padding 4 8 4 8px, gap 4px, centered, fill `ferrum/s3`, 1px stroke `ferrum/base`. Uses `Text/Regular`.
  - `Filled`: false/true
  - `State`: Default, Focus, Hover
- `Toggle`: 32x20px, radius 10px, horizontal, padding 3 15 3 3px, gap 4px, fill `ferrum/s2`, 1px stroke `ferrum/base`. Variant: `Selected` false/true.
- `Radio`: 20x20px, radius 26px, horizontal, padding 0 0 0 0px, gap 4px, centered, fill `cobalt/t8`, 1px stroke `cobalt/t7`. Variant: `Selected` false/true.
- `Checkbox`: 20x20px, radius 4px, horizontal, padding 0 0 0 0px, gap 0px, centered, fill `cobalt/t8`, 1px stroke `cobalt/t7`. Variant: `Selected` false/true.

### Feedback

- `Callout`: 640x88px, radius 8px, horizontal, padding 8 12 8 10px, gap 10px, fill `ferrum/s4`, 1px stroke `ferrum/base`. Uses `Text/Small/Regular` and `Heading/Small`.
  - `Style`: Default, Destructive, Success
- `Toast`: 640x48px, radius 8px, horizontal, padding 8 8 8 16px, gap 8px, centered, fill `ferrum/t1`, uses `shadow-base`. Uses `Text/Medium` and `Text/Regular`.
  - `Style`: Default, Destructive, Success
- `Tooltip`: 8x8px, uses `Text/Small/Medium`.
  - `Placement`: Bottom, Left, Right, Top
  - `Subtitle`: false/true

### Additional component families

`Alert`, `Alert-Filled`, `Warning`, `Warning-Filled`, `Info`, `Info-Filled`, `Success-Filled`, `Toast`, `Tooltip`, `Callout`, `Card`, `Divider`, `Placeholder`, `Status label`, `Text`, `Blank`, `Slip`, `Button`, `Label`, `Text Area`, `Input`, `Select`, `Toggle`, `Radio`, `Checkbox`, `Affix Label`, `Columns`, `Rows`, `Convert`, `Copy`, `Settings`, `Log out`, `Bookmark`, `External Link`, and `Github` are component families present in the source.

`Placeholder` is 83x28px, radius 4px, horizontal, padding 4 8 4 8px, fill #9747FF1F, 1px stroke #9747FF, using DM Sans Regular 12px.

## Screen patterns

- **Cover:** 400x240px green gradient from #06744C to #04492F, with a white Heading/Larger title and three overlapping rounded decorative shapes using jade and gold tones.
- **Settings demo:** 1280x832px dark ferrum/s5 workspace with a top card, left navigation card, central form card, inputs, validation messaging, action buttons, and a bottom toast.
- **Editor demo:** 1280x832px dark ferrum/s4 workspace with a 72px toolbar card, navigation controls, alignment controls, text-formatting controls, and link/code actions.
- **Form pattern:** Labels, descriptions, 296px-wide inputs, error status labels, select controls, text areas, radio buttons, checkboxes, and toggles.
- **Feedback pattern:** Callouts and toasts use icon-led messaging, compact buttons, dark ferrum surfaces, and distinct default, destructive, or success styles.

## Notes for implementers

- Prefer named color tokens over raw colors.
- Preserve the duplicate color aliases where semantic token names are important: `ferrum/base` and `ferrum/s4` both use #1A1A1D; `ferrum/s3` and `cobalt/t7` both use #212124.
- Use DM Sans and the exact type styles defined in the Type scale.
- Use 20x20px icons unless a component specification states otherwise.
- Use 4px radii for compact controls and 8px radii for grouped feedback surfaces.
- Use `cobalt/base` for primary button fills, `rose/base` for errors and destructive states, and jade tokens for success styling where the component variant calls for success.
- Use `shadow-focus-outline-cobalt` and `shadow-focus-outline-rose` for focus outlines rather than inventing new effects.
- Do not infer a spacing scale; spacing variables were not found. Use the explicit component padding and gap values.
