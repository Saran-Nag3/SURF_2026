---
name: calendar-app-cron-community
source: Calendar App - Cron (Community)
kind: design-system-context
---

# cron - Design System

## Overview

- Calendar application design system extracted from the Figma pages Cover, Main/Prototype, and Components.
- Primary product surfaces are a dark calendar grid, month navigation, event cards, event detail bottom sheets, and event creation forms.
- No local variable collections, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Dark, dense calendar interface with high-contrast white text and muted gray secondary text.
- Orange is the primary accent for branding and today-state indicators.
- Purple and blue tones distinguish calendar events and interactive states.
- Mobile-first surfaces use fixed widths of 390px for the main calendar and bottom-sheet layouts.
- Cover artwork uses large decorative geometric compositions and dark surfaces.
- Typography is primarily SF Pro; the cover also uses Helvetica Neue and Gilroy.

## Color palette

Ranked by source usage count:

| Color | Usage count |
|---|---:|
| `#FFFFFF` | 363 |
| `#FF4700` | 108 |
| `#808080` | 101 |
| `#666666` | 54 |
| `#5D5D5D` | 30 |
| `#303030` | 28 |
| `#D9D9D9` | 18 |
| `#69AADE` | 15 |
| `#606060` | 12 |
| `#404040` | 11 |
| `#EC6330` | 11 |
| `#000000` | 10 |
| `#2D2D2D` | 8 |
| `#333333` | 8 |
| `#3B3B3B` | 8 |
| `#9747FF` | 8 |
| `#1A1A1A` | 7 |
| `#1E1E1E` | 7 |
| `#4D4D4D` | 7 |
| `#565656` | 7 |
| `#A1A3F8` | 7 |
| `#252525` | 6 |
| `#CD4821` | 6 |
| `#3E3F59` | 5 |
| `#4C4D6F` | 5 |
| `#838394` | 5 |
| `#3B3A3F` | Not counted in raw color usage |

- White: `#FFFFFF`
- Primary orange accents: `#FF4700`, `#EC6330`, `#CD4821`
- Dark surfaces: `#1A1A1A`, `#1E1E1E`, `#252525`, `#2D2D2D`, `#303030`, `#333333`, `#3B3B3B`, `#3E3F59`, `#404040`, `#4C4D6F`
- Neutral text and controls: `#4D4D4D`, `#565656`, `#5D5D5D`, `#606060`, `#666666`, `#808080`, `#838394`
- Event and interactive accents: `#69AADE`, `#9747FF`, `#A1A3F8`
- Light neutral: `#D9D9D9`
- Black: `#000000`

## Type scale

| Size | Font | Weight/style | Usage count |
|---:|---|---|---:|
| 26px | Helvetica Neue | Bold | 3 |
| 20px | SF Pro | Medium | 4 |
| 14px | SF Pro | Regular | 84 |
| 14px | SF Pro | Medium | 18 |
| 14px | SF Pro | Semibold | 8 |
| 12px | SF Pro | Medium | 10 |
| 12px | SF Pro | Regular | 8 |
| 11.83px | SF Pro | Regular | 56 |
| 11px | SF Pro | Medium | 23 |
| 10px | SF Pro | Regular | 9 |

- Default body and interface text: SF Pro Regular, 14px.
- Labels and compact event text: SF Pro Regular or Medium from 10px to 11.83px.
- Emphasized interface text: SF Pro Medium or Semibold at 12px or 14px.
- Larger form or section labels: SF Pro Medium, 20px.
- Month headings: Helvetica Neue Bold, 26px.
- Cover lettering also uses Gilroy Black at 42.09px and Gilroy Bold at 92.01px.

## Spacing scale

No spacing variables were found. Observed spacing and layout values include:

- `0px`, `1px`, `2px`, `2.5px`, `4px`, `6px`, `7px`, `7.78px`, `8px`, `10px`, `12px`, `14px`, `15px`, `16px`, `17px`, `18px`, `24px`, `26px`, `32px`
- Component-specific gaps: `18px`, `30.69px`, `45px`, `78px`, `80px`, `106px`, `120px`, `131px`
- Component padding examples:
  - Date and date highlight: `6px` on all sides.
  - Month navigation: `12px` vertical and `24px` horizontal.
  - Toggle: `2px` on all sides.
  - Bottom-sheet content: `14px` to `15px` internal padding.
- Negative gaps are present in overlapping state components: `-23px`, `-27px`, and `-85.43px`.

## Radius scale

Observed corner radii:

- `4px`
- `5px`
- `6px`
- `6.33px`
- `7px`
- `8px`
- `14px`
- `14.78px`
- `15.5px`
- `16px`
- `21.09px`
- `32.45px`
- `205px`

- Date and date highlight surfaces use `6.33px`.
- Month dropdown uses `8px`.
- Bottom-sheet top corners use `16px`.
- Toggle uses `15.5px`.
- Circular add controls use `14.78px`.
- Cover artwork includes a `205px` radius.

## Elevation & effects

- Cover artwork includes drop shadows with a `40px` blur and `0px 4px` offset.
- Decorative cover groups also use drop shadows with a `40px` blur and `0px 4px` offset.
- Gradient fills are present on cover artwork and orange action surfaces.
- No reusable local effect styles were found.

## Components

### Date

- Size: `42x42px`.
- Radius: `6.33px`.
- Padding: `6px` on all sides.
- Gap: `10px`.
- Layout: horizontal, fixed width and height.
- Text: SF Pro Regular, `11.83px`.

### Date highlight

- Size: `42x42px`.
- Radius: `6.33px`.
- Padding: `6px` on all sides.
- Gap: `10px`.
- Fill: `#333333`.
- Layout: horizontal, fixed width and height.
- Text: SF Pro Regular, `11.83px`.
- Variants: View `1 Day`, `2 Day`, `3 Days`.

### Event

- Size: `110x58px`.
- Padding: `0px` on all sides.
- Gap: `0px`.
- Layout: horizontal, fixed width and height.
- Text: SF Pro Medium, `11px`.
- Variants:
  - Status: `Past`, `Upcoming`
  - Duration: `1 hr`, `15 mins`, `30 mins`
  - Accepted: `No`, `Yes`

### Event Click Interaction

- Size: `390x793px`.
- Text styles: SF Pro Regular `14px`, SF Pro Medium `14px`, SF Pro Medium `20px`.
- Variants: `Event Click Design -1`, `Event Click Design -2`.

### Month Collapse

- Size: `390x64px`.
- Fill: `#1A1A1A`.
- Padding: `12px` vertical and `24px` horizontal.
- Gap: `120px`.
- Layout: horizontal, space-between and center aligned, fixed width and height.
- Text styles: SF Pro Semibold `14px`, Helvetica Neue Bold `26px`.
- Variants: `Collapsed`, `Expanded`.

### Next meeting bottomsheet

- Size: `390x241px`.
- Text styles: SF Pro Medium `12px`, SF Pro Regular `14px`, SF Pro Medium `14px`.
- Surface fill: `#1E1E1E`.
- Top corners: `16px`.
- Includes a `40x4px` drag indicator with `14px` radius.
- Variants: `Frame 82`, `Frame 83`.

### States for Today date

- Base size: `36x32px`; an extracted instance is `40x32px`.
- Gap: `-27px` in the component specification and `-23px` in the main screen instance.
- Text: SF Pro Semibold, `14px`.
- Variants: `Many_left`, `Many_right`, `One_left`, `One_right`, `Today`.
- Today indicator uses an orange `32x32px` surface with `8px` radius.

### Toggle Interaction

- Size: `51x31px`.
- Radius: `15.5px`.
- Fill: `#3B3A3F`.
- Padding: `2px` on all sides.
- Gap: `10px`.
- Layout: horizontal, fixed width and height.
- Variants: `Frame 106`, `Frame 107`.

## Screen patterns

### Cover

- Canvas: `1920x960px`.
- Primary surface: `#252525`.
- Large decorative dark geometric artwork occupies the cover.
- Branding combines an orange `CRON` wordmark, a large `Calendar App` title, and a calendar icon featuring `31`.
- Cover typography includes Gilroy Black `42.09px`, Gilroy Bold `92.01px`, and Helvetica Neue `48.39px`.

### Main calendar

- Canvas: `390x844px`.
- Main surface: `#1A1A1A`.
- Top system area: `390x47px`.
- Month navigation: `390x64px`.
- Calendar grid: `390x732px`.
- Day bar uses `10px` labels and muted gray text.
- Time-grid event cards are `110px` wide with heights including `14.5px`, `29px`, `58px`, and `220px`.
- Current-time indicator uses a gray line and white indicator segments.
- The next meeting bottom sheet is anchored to the bottom at `390x241px`.

### New event form

- Canvas: `390x781px`.
- Bottom-sheet surface: `#1E1E1E`.
- Top corners: `16px`.
- Content frame: `374x755.95px`.
- Uses a `40x4px` drag indicator.
- Sections include title, time, date, event type, participants, conferencing, location, description, email, options, and reminders.
- Dividers use `#303030`.
- Primary form text uses SF Pro Regular or Medium at `14px`; the title label uses SF Pro Medium at `20px`.

## Notes for implementers

- Treat the listed values as observed source values, not as newly invented design tokens.
- Prefer the ranked palette and preserve the dark-first contrast hierarchy.
- Use SF Pro for product UI unless implementing the explicitly identified cover typography.
- Keep mobile calendar and bottom-sheet surfaces at `390px` wide where the source specifies that width.
- Preserve fixed component dimensions for dates, toggles, events, month navigation, and bottom sheets.
- Use component variants exactly as named when state changes are required.
- No local Figma variables or reusable style definitions were found; implement tokens directly from the documented values.
