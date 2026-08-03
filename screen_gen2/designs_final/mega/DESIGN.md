---
name: mega-design-system-community
source: Mega design system (Community)
kind: design-system-context
---

# mega - Design System

## Overview

- Design system source: Mega design system (Community), covering 38 Figma pages.
- Primary font: Inter.
- Core visual language: green primary actions, blue informational and secondary accents, semantic success/error/warning states, white surfaces, and dark Nature text.
- Responsive grid presets:
  - Mobile: 4 columns, 75px section, 20px gutter, centered.
  - Tablet: 8 columns, 72px section, 20px gutter, centered.
  - Web: 12 columns, 90px section, 20px gutter, centered.

## Design language

- Use Inter typography tokens for interface text.
- Use dark Nature colors for primary text, muted Nature colors for secondary text, and white surfaces.
- Primary color family is green:
  - Primary/900: `#009A67`
  - Primary/500: `#66D9B3`
  - Primary/300: `#B8EDDC`
  - Primary/50: `#F0FBF8`
- Semantic colors:
  - Success: `#31BD00`, `#73D252`, `#B7E8A6`, `#EAF8E5`
  - Error: `#ED5555`, `#F38C8C`, `#F9C4C4`, `#FDEEEE`
  - Warning: `#D6B900`, `#FFDD00`, `#FFE852`, `#FFF3A6`, `#FFFCE5`
  - Info: `#65A3FF`, `#93BEFF`, `#BDD7FF`, `#E3EEFF`
- Secondary color family is blue:
  - Secondary/900: `#4367BC`
  - Secondary/700: `#6885CA`
  - Secondary/500: `#8DA3D8`
  - Secondary/300: `#B2C2E6`
  - Secondary/50: `#D8E0F3`
- Most-used styles are Nature/500, Nature/900, Body 2, Other/White, Button, Nature/100, Small 1, Nature/400, Nature/50, and Info/700.

## Color palette

### Usage-ranked raw colors

| Color | Uses |
|---|---:|
| `#000000` | 634 |
| `#FFFFFF` | 535 |
| `#D9D9D9` | 83 |
| `#1D1D1D` | 82 |
| `#9747FF` | 61 |
| `#FFFFFFCC` | 42 |
| `#FFFFFFA3` | 27 |
| `#00000033` | 17 |
| `#65A3FF` | 16 |
| `#B1B1B1` | 13 |
| `#00000052` | 12 |
| `#8E8E8E` | 12 |

### Semantic and neutral tokens

- White:
  - Other/White: `#FFFFFF`
- Dark neutrals:
  - Nature/900: `#1F2125` and `#1D1D1D`
  - Nature/800: `#45484C`
  - Nature/700: `#585C62`
  - Nature/600: `#777777`
  - Nature/500: `#878B90` and `#8E8E8E`
  - Nature/400: `#969CA5` and `#A5A5A5`
  - Nature/300: `#B2B5BB`
  - Nature/50: `#F3F5F6` and `#F8F8F8`
  - Neutral/Black/Black-700: `#333843`
  - text-drak: `#000000`
- Primary:
  - Primary/900: `#009A67`
  - Primary/500: `#66D9B3`
  - Primary/300: `#B8EDDC`
  - Primary/50: `#F0FBF8`
- Secondary:
  - Secondary/900: `#4367BC`
  - Secondary/700: `#6885CA`
  - Secondary/500: `#8DA3D8`
  - Secondary/300: `#B2C2E6`
  - Secondary/50: `#D8E0F3`
- Success:
  - Success/700: `#31BD00`
  - Success/500: `#73D252`
  - Success/300: `#B7E8A6`
  - Success/50: `#EAF8E5`
- Error:
  - Error/700: `#ED5555`
  - Error/500: `#F38C8C`
  - Error/300: `#F9C4C4`
  - Error/50: `#FDEEEE`
- Warning:
  - Warning/900: `#D6B900`
  - Warning/700: `#FFDD00`
  - Warning/500: `#FFE852`
  - Warning/300: `#FFF3A6`
  - Warning/50: `#FFFCE5`
- Info:
  - Info/700: `#65A3FF`
  - Info/500: `#93BEFF`
  - Info/300: `#BDD7FF`
  - Info/50: `#E3EEFF`
- Other observed colors:
  - `#FFFFFFA3`
  - `#FFFFFFCC`
  - `#00000033`
  - `#00000052`
  - `#D9D9D9`
  - `#9747FF`
  - `#B1B1B1`

## Type scale

All specified typography uses tracking `0px`.

| Token | Font | Weight | Size | Line height |
|---|---|---:|---:|---:|
| Heading 1 | Inter | 600 | 64px | 92.54% |
| Heading 2 | Inter | 600 | 56px | 92.54% |
| Heading 3 | Inter | 700 | 48px | 103.29% |
| Heading 4 | Inter | 700 | 40px | 103.29% |
| Heading 5 | Inter | 700 | 36px | 103.29% |
| Heading 6 | Inter | 700 | 32px | 103.29% |
| Subtitle 1 | Inter | 600 | 24px | 103.29% |
| Subtitle 2 | Inter | 600 | 20px | 103.29% |
| Body 1 | Inter | 400 | 18px | 123.94% |
| Link 2 | Inter | 500 | 18px | 103.29% |
| Body 2 | Inter | 400 | 16px | 123.94% |
| Button | Inter | 500 | 16px | 103.29% |
| Link 1 | Inter | 400 | 16px | 123.94% |
| Small 1 | Inter | 500 | 14px | 103.29% |
| Small 2 | Inter | 500 | 12px | 103.29% |

Raw, non-token typography also appears as Inter Black at 190px and Roboto Regular at 12px.

## Spacing scale

No spacing variables were found.

Observed component spacing values include:

- 2px, 4px, 6px, 8px, 10px, 12px, 13px, 16px, 20px, 24px, 32px, 33px, 42px, 48px, 150px, and 157px.
- Button padding: `16px 32px`.
- Breadcrumb gap: `4px`.
- Button gap: `8px`.
- Many component gaps: `10px`.
- Card gaps: `6px`, `10px`, `20px`, and `33px`.
- Grid gutter: `20px`.

## Radius scale

No radius variables were found.

Observed radii:

- 6px: Badge.
- 8px: Right and Left, Text, pagination, Select item.
- 12px: Card, Sidebar control, pagination.
- 16px: buttons, larger cards, tab menu.
- 28px: Edit.
- 36px: Status.
- 64px: cover graphic group.

## Elevation & effects

- No local effect styles were found.
- No motion tokens were found.
- Borders observed:
  - 1px stroke on Outlined button, Tab menu, table cells, and selected card/footer surfaces.
  - 2px white stroke on Edit.
- Opacity colors observed: `#FFFFFFA3`, `#FFFFFFCC`, `#00000033`, and `#00000052`.

## Components

- **Buttons**
  - Critical button: `106x52px`, 16px radius, `16px 32px` padding, 8px gap; supports Large, Medium, Small; icon-only, left-icon, right-icon, and text-only; Disabled, Enabled, Hovered, Pressed.
  - Outlined button: same size, radius, padding, and gap; has a 1px Nature/100 stroke.
  - Tonal button: same size, radius, padding, and gap; fills Nature/100.
  - Filled Button: same size, radius, padding, and gap; fills Primary/700.
- **Inputs and selection**
  - Component 1, Component 2, Component 3, and Component 4 input variants.
  - Input sizes include `368x48px`, `368x72px`, `368x74px`, and `368x96px`.
  - States include Default, Typed, Typing, Hover, Error, and Help.
  - Select: `368x74px`; supports Default, Error, Help, Hover, Typing, and Typed Off/On.
  - Select item: `360x48px`, 8px radius, `12px 16px` padding; Enabled, Hover, Selected.
  - Textarea: `368x154px`; Default, Error, Help, Hover, Typing; Typed No/Yes.
  - Search: `360x56px`; expanded search is `360x128px` with Found/Not found and typing variants.
  - Drobdown: `280x430px`; supports left, right, or both icon locations.
  - Drobdown menu: `240x40px`, `8px 16px` padding; Default, Hover, Selected.
  - Data select: `368x412px`; Month select and Year select.
  - Time select: `368x455px`.
  - Calendar: `368x358px`.
- **Feedback and status**
  - Component 10 alert: `640x112px`, 10px gap; Default, Error, Help, Success, Warning.
  - Dialog: `496x180px`, 10px gap.
  - Component 60: `368x74px`; Default, Error, Help and Off/On.
  - Component 7: `368x74px`; Default, Error, Help and False/True.
  - Component 2 Toast: `360x90px`; Enable/Hover and Left/None/Right.
  - Validation: `368x18px`; Medium, Strong, Week.
  - Component 1 Status: `71x28px`, 36px radius; Danger, Default, Info, Success, Warning.
- **Cards and lists**
  - Card variants include `360x145px`, `150x131px`, `360x56px`, `310x64px`, `170x333px`, and `360x160px`.
  - Card radii include 12px and 16px.
  - Card variants support buttons, avatars, images, sizes, actions, and text.
  - List variants include `360x168px` and `360x255px`, with optional left icon, detail, and right icon.
- **Navigation**
  - App menu: `85x54px`, Off/On.
  - Menu bottom navigation: `400x293px`.
  - 2x, 3x, 4x, and 5x bottom navigation: each `400x82px`.
  - Tablet navigation: `800x80px`.
  - Web navigation: `1600x80px`.
  - Component 1 Tab menu: `286x56px`, 16px radius, 1px Nature/100 stroke; Large, Medium, Small.
  - Breadcrumb: `45x24px`, 4px gap.
  - Component 2 Saidbar: `300x900px`, with avatar, label, dark-mode, and open-state variants.
  - Component 3 Saidbar control: `40x40px`, 12px radius, `8px` padding.
- **Data display and controls**
  - Component 1 Radio & Checkbox & toggle: `24x24px`; Large, Medium, Small; Off/On; Checkbox, Radio button, Toggle.
  - Component 2 Slider: `174x20px`; Continuous/Discrete; Disabled, Enabled, Focused, Hovered, Pressed.
  - Component 10 Progress: `200x30px`; 0% through 100% values and left/right positions.
  - Pagination items: `24x24px` and `32x32px`; pagination group `248x32px`.
  - Table Heading: `225x56px`.
  - Left and Right table cells: `284x56px`, `16px` padding, 1px Nature/100 stroke.
- **Other**
  - Star Disabled and Star Enabled: `24x24px`.
  - Component 1 Avatar: `24x24px`, with 24/32/40/52/64/72/80/88/96 variants.
  - Component 2 Avatar: `52x52px`, variants 1/2/3/4/More.
  - Component 2 Badge: `28x22px`, 6px radius, `2px 6px` padding; Ghost, Outlined, Primary.
  - Component 3 Badge: `24x24px`; 8/16/24 variants.
  - Edit: `28x28px`, 28px radius, `4px` padding, Primary/700 fill and 2px white stroke.
  - Footer variants exist for mobile `400px`, tablet `800px`, and web `1600px` widths.
  - Tool bar: `400x74px`; Features 2/3/4/5 and Icon No/Yes.
  - Group 6, Group 7, Group 8, Group 21, Group 24, Group 25, Group 28, Group 31, Group 32, Group 35, Group 38, Group 39, Group 42, and Group 43 are fixed-size grouped patterns using Subtitle, Button, and Body text tokens.
  - Components 1, 2, 3, 4, 5, 6, 7, 18, and 60 are numbered source components with the dimensions and variants listed above.

## Screen patterns

- **Cover:** `1920x1080px`, white background, centered cover imagery and a `160x160px` rounded graphic group.
- **Typography:** typography hierarchy from 12px Small 2 through 64px Heading 1, with a raw 190px Inter Black specimen.
- **Color:** semantic Primary, Secondary, Success, Error, Warning, Info, Nature, and White palettes.
- **Spacing:** spacing examples and layout grid presets; no spacing variables.
- **Layout:** responsive Mobile, Tablet, and Web grid structures.
- **Icon:** star and icon variants including navigation, search, calendar, chevron, close, edit, user, time, and related icons.
- **Content patterns:** Accordion, Alert, Alert dialog, App bar, Avatar, Badge, Bottom navigation, Bottom sheet, Breadcrumb, Buttons, Card, Data & Time, Dialog, Drobdown, Footer, Input, List, Navigation, Pagination, Profile, Progress, Radio & Checkbox & toggle, Saidbar, Search, Select, Slider, Status, Tab menu, Table, Textarea, and Toast.

## Notes for implementers

- Prefer named typography tokens over raw typography styles.
- Prefer semantic color tokens over unstyled colors. When using raw colors, use only colors present in the source.
- Nature/100, Nature/200, Primary/700, Nature/700, Success/900, Info/900, and Error/900 have incomplete or conflicting resolved values in the extraction; do not infer missing values.
- Preserve the source spelling `Drobdown` and `Saidbar` when mapping directly to extracted component families.
- Use the provided fixed dimensions only where the component is being reproduced at its source breakpoint; use the Mobile, Tablet, and Web grid presets for responsive layouts.
- No spacing, radius, motion, or effect variable system was extracted. Use the explicitly observed component values rather than inventing additional scales.
