---
name: air-india
source: Air India UI (Community)
kind: design-system-context
---

# air-india - Design System

## Overview

Air India’s extracted visual system combines an aviation booking interface with editorial travel content. The strongest recurring visual cues are:

- Primary red action color: `#CC0200`
- Secondary orange: `#FE9901`
- Warm off-white page background: `#FEFCFB`
- Large Roboto headings and body copy
- Volkhov Bold for prominent hero messaging
- White cards with subtle elevation
- Travel booking controls, alerts, content cards, news navigation, and promotional sections

No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- **Brand expression:** Red-led, travel-oriented, editorial, and service-focused.
- **Primary actions:** Use `#CC0200` with white text.
- **Secondary booking states:** Use pale red `#D9000D1A` with dark or gray text and a `#CC0200` stroke where shown.
- **Surfaces:** Use `#FEFCFB` for the primary page surface, `#FFFFFF` for cards and controls, and `#F5F7F5` for supporting content sections.
- **Typography:** Roboto is the dominant interface and content typeface. Google Sans Medium is used for labels and navigation. Volkhov Bold is used for the large promotional hero.
- **Content hierarchy:** Large bold headings introduce sections; card titles use 20px semibold Roboto; supporting descriptions use 16px regular Roboto.
- **Controls:** Booking controls are horizontally grouped, use 56px-high fields or tabs, and use compact 4px radii.
- **Imagery:** Travel and promotional imagery is used in large card media areas and full-width hero sections.

## Color palette

Colors are deduplicated by value. Where available, usage counts are included from the raw extraction or most-used-style report.

### Highest observed raw color usage

| Color | Raw uses | Role |
|---|---:|---|
| `#FFFFFF` | 901 | White surfaces, text, and controls |
| `#A4A4A4` | 600 | Neutral gray |
| `#D9000D` | 464 | Red accent |
| `#EF7000` | 377 | Orange accent |
| `#486AAE` | 196 | Blue accent |
| `#00000033` | 180 | Black transparency |
| `#D9D9D9` | 151 | Neutral placeholder or divider |
| `#D8D8D8` | 112 | Neutral gray |
| `#000000` | 107 | Black text or icon color |
| `#D9000D1A` | 94 | Pale red surface |
| `#FEFCFB` | 63 | Warm off-white surface |
| `#DCDCDC` | 60 | Light neutral |
| `#0000001A` | 36 | Black transparency |
| `#6926D7` | 31 | Purple accent |
| `#DADADA` | 22 | Neutral gray |
| `#5451E8` | 19 | Purple-blue accent |
| `#80868B` | 18 | Gray accent |

### Named palette

| Token / alias | Color | Observed style uses |
|---|---|---:|
| Gray 2 / Primary text gray | `#4F4F4F` | 1556 |
| Primary / Main Red Color | `#CC0200` | 885 |
| Grey/700 | `#5F6368` | 477 |
| Gray 3 | `#828282` | 323 |
| Grey/300 | `#DADCE0` | 245 |
| Grey/White / True White / WHite | `#FFFFFF` | 190 |
| Grey/800 | `#3C4043` | 122 |
| Grey / 200 | `#CBD4E6` | 72 |
| Grey/900 | `#202124` | 57 |
| `color_text` | `#1A1A1A` | 56 |
| Grey / 400 | `#7C8DB0` | 51 |
| Light / Base | `#000000` | 46 |
| Color Off-1 / 3rd | `#E5E5E5` | 105 combined |
| Gray 4 | `#BDBDBD` | 93 |
| bg | `#F5F7F5` | 19 |
| Secondary | `#FE9901` | 20 |
| `#FAA61A` | `#FAA61A` | 25 |
| Orange/700 | `#D56E0C` | 16 |
| Yellow/600 | `#F9AB00` | 16 |
| Yellow/50 | `#FEF7E0` | 14 |
| Blue/600 | `#1A73E8` | 18 |
| Green 2 | `#27AE60` | 3 |
| Green/50 | `#E6F4EA` | 3 |
| Green/600 | `#1E8E3E` | 6 |
| Green/800 | `#137333` | 3 |
| Purple Extra Light | `#E9E8FC` | 65 |
| Purple 1 | `#9B51E0` | 15 |
| Purple Blue | `#605DEC` | 2 |
| Light / Tints / Indigo | `#5856D6` | 12 |
| Light / Tints / Pink | `#FF2D55` | 4 |
| Primary / Main Color | `#3E7BFA` | 9 |
| `1st` | `#FF7152` | 4 |
| `#F2F2F2` | `#F2F2F2` | 1 |

### Gradients

- **Purple Blue Gradient:** linear gradient from `#605DEC` at 0% to `#2A26D9` at 100%.
- **Purple Light:** linear gradient from `#99BBFF` at 0%, through `#CCCCFF` at 49%, to `#99BBFF` at 100%.

## Type scale

### Defined typography tokens

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Component Labels / Menu & Navigation | Google Sans | 500 | 14px | 20px | 0.25px |
| Subheader/2 - 14pt | Google Sans | 500 | 14px | 20px | 0.25px |
| Component Labels/Button | Google Sans | 500 | 14px | 20px | 0.25px |
| Body/Body 2 (Android) - 14pt | Roboto | 400 | 14px | 20px | 0.2px |
| Body/Body 1 (Android) - 16pt | Roboto | 400 | 16px | 24px | 0.1px |
| Caption/Caption (Android) - 12pt | Roboto | 400 | 12px | 16px | 0.3px |
| Overline/Overline (Android) - 11pt | Roboto | 500 | 11px | 16px | 0.8px |
| Stylized / Small | Inter | 400 | 12px | auto | 0px |
| Body Extra Small | Nunito Sans | 400 | 12px | auto | 0px |

### Observed raw hierarchy

- 60px: Roboto Bold; Volkhov Bold
- 40px: Roboto Bold
- 32px: Roboto Bold
- 28px: Roboto Bold; Roboto Regular
- 24px: Roboto Bold; Roboto Regular
- 22px: Roboto Regular
- 20px: Roboto Bold, Medium, Regular, and SemiBold
- 18px: Roboto Medium and SemiBold
- 16px: Roboto Bold, Regular, and SemiBold; Inter Regular
- 15px: Inter Bold
- 14px: Google Sans Regular, Google Sans Medium, Nunito Sans Regular, Roboto Medium, and Roboto Regular
- 12px: Roboto Regular and SemiBold; Inter Regular; Nunito Sans Regular
- 11px: Roboto Medium
- 10px: Inter Regular; Roboto Regular
- 8px: Inter Regular

The most-used raw text styles are Roboto Regular 20px, Roboto SemiBold 20px, and Roboto Regular 16px. The largest promotional heading observed is Volkhov Bold at 60px.

## Spacing scale

_None found in source._

Observed layout gaps and padding values include 8px, 10px, 12px, 14px, 16px, 24px, and 50px, but no spacing token scale was defined.

## Radius scale

No radius variables were found. Observed radii are:

- `0px`: square edges and grouped layout containers
- `4px`: booking controls, buttons, cards, alerts, and text fields
- `10px`: a large booking surface
- `20px`: icon button

Some controls use mixed corner radii, including `4/0/0/4px` and `0/4/4/0px`, to form adjoining tab groups.

## Elevation & effects

- **Elevation Light/1**
  - Drop shadow: `3px`, offset `0 1`, color `#3C404326`
  - Drop shadow: `2px`, offset `0 1`, color `#3C40434D`
- **Elevation Light/2**
  - Drop shadow: `6px`, offset `0 2`, color `#3C404326`
  - Drop shadow: `2px`, offset `0 1`, color `#3C40434D`
- **Elevation Light/3**
  - Drop shadow: `3px`, offset `0 1`, color `#3C40434D`
  - Drop shadow: `8px`, offset `0 4`, color `#3C404326`

No motion tokens were found.

## Components

_None found in source._

The extraction reports no reusable component families or component geometry specs, although the screen contains instances labeled Callout, Text Field, Icon button, Standard Button, and Button. Treat these as observed screen patterns rather than validated component definitions.

## Screen patterns

### Visual Design / Re-design Air India_Mohammed Asif AH

Observed as a 1920px-wide page with multiple stacked travel-service sections:

- **Booking search surface**
  - Large white booking card with a 10px radius.
  - Tab row for Round Trip, passenger count, Special Fares, and Cabin.
  - Four adjacent 56px-high service tabs: Search Flights, Manage Booking, Check-in, and Flight Status.
  - Active tab uses `#CC0200` with white text.
  - Inactive tabs use `#D9000D1A` with a `#CC0200` stroke.
  - Search form includes From, To, and Travel dates fields.
  - Search action is a 156px by 60px button with 4px radius, `#CC0200` fill, and white Roboto Medium 18px text.
- **Alert callout**
  - 1169px by 72px observed size.
  - Uses `#FEF7E0` with orange icon color `#D56E0C`.
  - Includes message content and a yellow action button using `#F9AB00`.
- **Promotional card sections**
  - Four-column card groups with 280px-wide media areas and 4px radii.
  - Media areas are 250px high.
  - Titles use Roboto SemiBold 20px.
  - Descriptions use Roboto Regular 16px and gray text.
  - Section headings use Roboto Bold 40px.
- **Travel hero**
  - Full-width 1920px by 400px image-backed section.
  - Hero message uses `#CC0200` and Volkhov Bold 60px.
- **Utility navigation**
  - A pale green section uses `#F5F7F5`.
  - Navigation items include Latest news, Cargo, FAQs, and Feedback.
  - Labels are primarily 20px Roboto with 24px icons.
- **Gallery/content area**
  - Uses repeated gallery tiles and a thin gray divider.
  - Gallery labels use 12px Roboto Regular or SemiBold.

### Presentation page

The source contains a second Figma page named Presentation, but no separate screen structure or component specification was provided for it.

## Notes for implementers

- Prefer the named tokens where available, especially `#CC0200`, `#4F4F4F`, `#5F6368`, `#202124`, `#3C4043`, `#FFFFFF`, `#FEFCFB`, and `#F5F7F5`.
- Do not infer a formal spacing, radius, grid, motion, or component system; those were not extracted.
- Use Roboto for most UI and content. Use Google Sans Medium for 14px navigation and button labels. Reserve Volkhov Bold for large promotional hero text.
- Preserve the 4px control and card radius unless the observed pattern explicitly calls for 10px or 20px.
- Keep booking actions visually dominant through the `#CC0200` fill and white text.
- Use pale red `#D9000D1A` for inactive booking tabs rather than replacing it with an unrecorded tint.
- Image assets are present in the source, but their visual content and reusable asset names were not extracted.
- Avoid introducing colors from unsupported source values when implementing effects or overlays.
