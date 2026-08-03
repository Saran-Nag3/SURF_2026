---
name: tailwind-css-design-system-style-guide-community
source: Tailwind CSS Design System - Style Guide (Community)
kind: design-system-context
---

# tailwind-css - Design System

## Overview

- Source: Figma file “Tailwind CSS Design System - Style Guide (Community)”.
- Pages: Overview, 👀 Instructions, 🎨 Style Guide.
- Primary visual system: Inter typography, Tailwind-style color scales, indigo-led accents, white surfaces, and gray text.
- Most-used colors:
  - Gray/900 `#111827`: 829 uses
  - Gray/500 `#6D7280`: 242 uses
  - White `#FFFFFF`: 201 uses
  - Indigo/500 `#6366F1`: 136 uses
  - Gray/100 `#F3F4F6`: 33 uses
  - Gray/400 `#9CA3AF`: 21 uses
  - Gray/700 `#374151`: 20 uses
- Most-used text styles:
  - `text-sm/font-semibold`: 91 uses
  - `text-xl/font-semibold`: 62 uses
  - `text-base/font-semibold`: 25 uses
  - `text-5xl/font-semibold`: 18 uses
  - `text-lg/font-regular`: 14 uses
  - `text-xs/font-semibold`: 13 uses

## Design language

- Use Inter throughout.
- Use Gray/900 `#111827` for dominant text and headings.
- Use Gray/500 `#6D7280` for secondary text.
- Use Indigo/500 `#6366F1` as the primary accent.
- Use Indigo/100 `#E0E7FF` surfaces with Indigo/700 `#4338CA` text for pill-like labels.
- Use white `#FFFFFF` for card and icon surfaces.
- Typography uses regular 400, light 300, semibold 600, and bold 700 weights.
- The source demonstrates large display headings from 30px through 128px, with compact interface text from 12px through 20px.
- Layout grids use 4 columns at base, 8 at md, and 12 from lg through 2xl.

## Color palette

Use the following named tokens and values. Where usage counts are available, prioritize the higher-count tokens.

### Core usage-ranked colors

| Token | Hex | Usage |
|---|---|---:|
| Gray/900 | `#111827` | 829 |
| Gray/500 | `#6D7280` | 242 |
| White | `#FFFFFF` | 201 |
| Indigo/500 | `#6366F1` | 136 |
| Gray/100 | `#F3F4F6` | 33 |
| Gray/400 | `#9CA3AF` | 21 |
| Gray/700 | `#374151` | 20 |
| Indigo/100 | `#E0E7FF` | 8 |
| Purple/500 | `#A855F7` | 8 |
| Indigo/700 | `#4338CA` | 6 |
| systemGrey/600 | `#757575` | 6 |
| Indigo/50 | `#EEF2FF` | 4 |
| Indigo/600 | `#4F46E5` | 3 |

### Gray

- Gray/900 `#111827`
- Gray/800 `#1F2937`
- Gray/700 `#374151`
- Gray/600 `#4B5563`
- Gray/500 `#6D7280`
- Gray/400 `#9CA3AF`
- Gray/300 `#D2D5DA`
- Gray/200 `#E5E7EB`
- Gray/100 `#F3F4F6`
- Gray/50 `#F9FAFB`

### Indigo

- Indigo/900 `#312E81`
- Indigo/800 `#3730A3`
- Indigo/700 `#4338CA`
- Indigo/600 `#4F46E5`
- Indigo/500 `#6366F1`
- Indigo/400 `#818CF8`
- Indigo/300 `#A5B4FC`
- Indigo/200 `#C7D2FE`
- Indigo/100 `#E0E7FF`
- Indigo/50 `#EEF2FF`

### Blue

- Blue/900 `#1E3A8A`
- Blue/800 `#1E40AF`
- Blue/700 `#1D4ED8`
- Blue/600 `#2563EB`
- Blue/500 `#3B82F6`
- Blue/400 `#60A5FA`
- Blue/300 `#93C5FD`
- Blue/200 `#BFDBFE`
- Blue/100 `#DBEAFE`
- Blue/50 `#EFF6FF`

### Purple

- Purple/900 `#581C87`
- Purple/800 `#6B21A8`
- Purple/700 `#7E22CE`
- Purple/600 `#9333EA`
- Purple/500 `#A855F7`
- Purple/400 `#C084FC`
- Purple/300 `#D8B4FE`
- Purple/200 `#E9D5FF`
- Purple/100 `#F3E8FF`
- Purple/50 `#FAF5FF`

### Pink

- Pink/900 `#831843`
- Pink/800 `#9D174D`
- Pink/700 `#B3185B`
- Pink/600 `#DB2777`
- Pink/500 `#EC4899`
- Pink/400 `#F472B6`
- Pink/300 `#F9A8D4`
- Pink/200 `#FBCFE8`
- Pink/100 `#FCE7F3`
- Pink/50 `#FDF2F8`

### Green

- Green/900 `#14532D`
- Green/800 `#166534`
- Green/700 `#15803D`
- Green/600 `#16A34A`
- Green/500 `#22C55E`
- Green/400 `#4ADE80`
- Green/300 `#86EFAC`
- Green/200 `#BBF7D0`
- Green/100 `#DCFCE7`
- Green/50 `#F0FDF4`

### Yellow

- Yellow/900 `#713F12`
- Yellow/800 `#854D0E`
- Yellow/700 `#A16207`
- Yellow/600 `#CA8A04`
- Yellow/500 `#EAB308`
- Yellow/400 `#FACC15`
- Yellow/300 `#FDE047`
- Yellow/200 `#FEF08A`
- Yellow/100 `#FEF9C3`
- Yellow/50 `#FEFCE8`

### Orange

- Orange/900 `#7C2D12`
- Orange/800 `#9A3412`
- Orange/700 `#C2410C`
- Orange/600 `#EA580C`
- Orange/500 `#F97316`
- Orange/400 `#FB923C`
- Orange/300 `#FDBA74`
- Orange/200 `#FED7AA`
- Orange/100 `#FFEDD5`
- Orange/50 `#FFF7ED`

### Red

- Red/900 `#7F1D1D`
- Red/800 `#991B1B`
- Red/700 `#B91C1C`
- Red/600 `#DC2626`
- Red/500 `#EF4444`
- Red/400 `#F87171`
- Red/300 `#FCA5A5`
- Red/200 `#FECACA`
- Red/100 `#FEE2E2`
- Red/50 `#FEF2F2`

### Raw colors

- Black `#000000`: 4 uses
- Purple `#9747FF`: 4 uses
- White `#FFFFFF`: 5 uses

## Type scale

- Font family: Inter.
- Tracking: `0px` for all defined typography tokens.
- 12px: line-height `107.42%`; regular 400, light 300, semibold 600, bold 700.
- 14px: line-height `107.42%`; regular 400, light 300, semibold 600, bold 700.
- 16px: line-height `123.94%`; regular 400, light 300, semibold 600, bold 700.
- 18px: line-height `123.94%`; regular 400, light 300, semibold 600, bold 700.
- 20px: line-height `123.94%`; regular 400, light 300, semibold 600, bold 700.
- 24px: line-height `123.94%`; regular 400, light 300, semibold 600, bold 700.
- 30px: line-height `123.94%`; regular 400, light 300, semibold 600, bold 700.
- 36px: line-height `123.94%`; regular 400, light 300, semibold 600, bold 700.
- 48px: line-height `115.68%`; regular 400, light 300, semibold 600, bold 700.
- 60px: line-height `115.68%`; regular 400, light 300, semibold 600, bold 700.
- 72px: line-height `115.68%`; regular 400, light 300, semibold 600, bold 700.
- 96px: line-height `107.42%`; regular 400, light 300, semibold 600, bold 700.
- 128px: line-height `107.42%`; regular 400, light 300, semibold 600, bold 700.
- Most-used text styles:
  - `text-sm/font-semibold`: 14px, Inter SemiBold 600, `107.42%`
  - `text-xl/font-semibold`: 20px, Inter SemiBold 600, `123.94%`
  - `text-base/font-semibold`: 16px, Inter SemiBold 600, `123.94%`
  - `text-5xl/font-semibold`: 48px, Inter SemiBold 600, `115.68%`
  - `text-lg/font-regular`: 18px, Inter Regular 400, `123.94%`
  - `text-xs/font-semibold`: 12px, Inter SemiBold 600, `107.42%`
- Raw typography also includes Inter Bold at 27.66px and Inter Regular at 12.97px, 10.37px, 3.89px, and 2.59px; Inter SemiBold at 10.37px, 4.32px, 3.62px, and 3.03px.

## Spacing scale

No spacing variables found. Observed layout values:

- Grid section sizes: 44px, 48px, 60px, 72px, 80px.
- Grid gutters: 16px and 32px.
- Grid configurations:
  - Base: 4 columns, 60px section, 16px gutter, stretch alignment.
  - md: 8 columns, 44px section, 32px gutter, stretch alignment.
  - lg: 12 columns, 48px section, 32px gutter, center alignment.
  - xl: 12 columns, 72px section, 32px gutter, center alignment.
  - 2xl: 12 columns, 80px section, 32px gutter, center alignment.
- Observed gaps: 48px, 43.22px, 32px, 24.2px, 8px, 6.92px, 5.19px, 4px, 3.46px, 1.08px.
- Observed padding: 43.22px; 24px horizontal and 8px vertical; 6.92px horizontal and 1.73px vertical.

## Radius scale

No radius variables found. Observed radii:

- 36px: pill labels.
- 12.97px: icon card.
- 1.95px: small outlined frame.
- 1.08px: icon component set.

## Elevation & effects

- Shadow/2xl: drop shadow `50px`, offset `0 25`, color `#00000040`; 6 uses.
- Shadow/xl: drop shadows `25px`, offset `0 20`, color `#0000001A`, and `10px`, offset `0 10`, color `#0000000A`; 1 use.
- Shadow/lg: drop shadows `15px`, offset `0 10`, color `#0000001A`, and `6px`, offset `0 4`, color `#0000000D`; 1 use.
- Shadow/md: drop shadows `6px`, offset `0 4`, color `#0000001A`, and `4px`, offset `0 2`, color `#00000080`; 1 use.
- Shadow/base: drop shadows `3px`, offset `0 1`, color `#0000001A`, and `2px`, offset `0 1`, color `#0000001A`; 1 use.
- Shadow/sm: drop shadow `2px`, offset `0 1`, color `#00000014`; 1 use.
- The Overview icon card uses a drop shadow of `10.81px`, offset `0 5.4`, color `#00000040`.

## Components

### icon

- Families: `icon/Fill` and `icon/Outline`.
- Overview size: `7.28px × 7.28px`.
- Style Guide size: `24px × 24px`.
- Fill: `#FFFFFF`.
- Available names:
  - Alarm
  - ArrowCircleDown, ArrowCircleLeft, ArrowCircleRight, ArrowCircleUp
  - ArrowDown, ArrowLeft, ArrowRight, ArrowUp
  - Bell, BellSlash
  - Bluetooth, BluetoothSlash
  - Calendar, CalendarBlank, CalendarCheck, CalendarPlus
  - CaretCircleDown, CaretCircleLeft, CaretCircleRight, CaretCircleUp
  - CaretDown, CaretLeft, CaretRight, CaretUp
  - Clock
  - CloudArrowDown, CloudArrowUp, CloudCheck, CloudSlash
  - GearSix
  - Info
  - LinkBreak, LinkSimple, LinkSimpleBreak
  - LockSimple, LockSimpleOpen
  - Shield, ShieldCheck
  - Spinner, SpinnerGap
  - User, UserCircle, UserCircleMinus, UserCirclePlus, UserFocus, UserMinus, UserPlus, UserRectangle, UserSquare, UserSwitch, Users, UsersThree
  - Warning, WarningCircle, WarningOctagon
- No Button component family found.

## Screen patterns

- Overview / Thumbnail:
  - 1920px × 960px frame.
  - Background: Gray/100 `#F3F4F6`.
  - Centered title group with a 48px vertical gap.
  - Main heading: Inter Bold, 72px, Gray/900 `#111827`.
  - Accent heading: `text-4xl/font-semibold`, 36px, Indigo/500 `#6366F1`.
  - Four horizontal labels with 8px gap.
  - Labels use 24px horizontal padding, 8px vertical padding, 36px radius, Indigo/100 `#E0E7FF` fill, and Indigo/700 `#4338CA` text.
  - Icon content is presented in white cards with 43.22px padding, 12.97px radius, and a large shadow.
- Style Guide:
  - Presents the full color, typography, icon, grid, and effect references.
  - Icons are shown in both Fill and Outline variants at 24px.
- Responsive grid pattern:
  - Base: 4 columns.
  - md: 8 columns.
  - lg, xl, 2xl: 12 columns.

## Notes for implementers

- Prefer the named color tokens over raw colors.
- Preserve the distinction between Gray/900 `#111827` primary text and Gray/500 `#6D7280` secondary text.
- Use Indigo/500 `#6366F1` for primary accent emphasis and Indigo/100 `#E0E7FF` with Indigo/700 `#4338CA` for labels.
- Use only the listed Inter sizes, weights, and line-heights for defined typography styles.
- No local variable collections, spacing variables, radius variables, or motion variables were found.
- The source contains raw, unusually small text sizes; use them only when reproducing the source reference artwork, not as default interface text.
- Component support is limited to the icon family; no Button specification is present.
