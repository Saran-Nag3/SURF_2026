---
name: rabby
source: Calendar Interactive UI Kit (Community)
kind: design-system-context
---

# rabby - Design System

## Overview

Calendar-focused UI kit containing:
- Calendar month view.
- Month-selection menu.
- Year, decade, and year-range selection states.
- Time-period selector with Monthly, Weekly, and Yearly options.
- Cover and style-guide screens.

## Design language

- Use Poppins throughout.
- Calendar surfaces use translucent teal backgrounds, a 1px matching stroke, 15px rounded corners, and 60px background blur.
- Active selections use a cyan-to-dark-teal linear gradient: `#67F0FD 0%` to `#184A5E 100%`.
- Text is primarily white or light gray against dark translucent surfaces.
- Inactive or adjacent calendar dates use gray text.
- Selection controls use compact fixed dimensions and centered alignment.

## Color palette

Ranked by reported usage where available:

| Color | Usage / role |
|---|---|
| `#F2F2F2` | Gray 6; 64 style uses and 10 raw uses. Primary light calendar text and month-menu text. |
| `#808080` | UI / color-ui-gray; 22 style uses. Adjacent or inactive calendar dates. |
| `#FFFFFF` | 50 raw uses. Primary text, arrows, and selected year values. |
| `#4F4F4F` | Gray 2; 14 style uses. Calendar weekday labels. |
| `#18617933` | Infographics background / Calender background; 11 style uses, plus Calender Bg and Calender Bg Stroke. Translucent calendar and menu surfaces. |
| `#FFFFFFB2` | 8 raw uses. De-emphasized year values and arrows. |
| `#67F0FD` → `#184A5E` | Linear gradient used by skippr-stroke lite color, Calender Select, and active selections. |

## Type scale

Font family: Poppins.

| Size | Weight | Line height | Tracking | Named usage |
|---:|---:|---:|---:|---|
| 20px | Bold (700) | 24px | 0.38px | Calender Header |
| 16px | Regular (400) | 21px | -0.32px | Calender Header |
| 16px | Regular (400) | — | — | Raw typography; calendar dates |
| 15px | Regular (400) | — | — | Frame 762247 labels |
| 13px | Regular (400) | 12px | -0.3px | Calender H1 |
| 13px | Regular (400) | auto | -0.3px | Skipper-h2-Poppin |
| 13px | Medium | — | — | Year and decade selections |
| 13px | Bold (700) | — | — | Selected year and year-range labels |
| 12px | Regular (400) | 16px | 0px | Calender H2 and weekday labels |

Reported raw usage: Poppins Regular 16px (83), Poppins Medium 13px (23), Poppins Regular 12px (13), Poppins Regular 13px (13), Poppins Bold 13px (3), and Poppins Regular 15px (3).

## Spacing scale

No spacing variables were found. Component-level spacing values:

- `Frame 762247`: gap `8px`; padding `0 0 0 0px`.
- `Year Selection`: horizontal padding `13px 0 13px 0px`; gap `10px`.
- `month selection`: vertical padding `8px 0 8px 0px`; gap `0px`.
- Month menu item: padding `4px 16px 4px 16px`; gap `8px`.
- Year list: vertical padding `8px 18px 8px 18px`; gap `12px`.
- Decade and year columns: gap `30px`.
- `Frame 762244`: padding `8px 8px 8px 8px`; gap `10px`.
- `Frame 762245`: padding `8px 8px 8px 8px`; gap `10px`.
- `Frame 762246`: padding `8px 8px 8px 8px`; gap `10px`.

## Radius scale

- `15px`: Calendar, selected time period, month selection, and year-range selection surfaces.
- `9px`: Year Selection background group.
- `8px`: Active menu item, year-selection highlight, time-period active option, and `Frame 762247` internal frame.
- `0px`: Year Selection 2 and Year Selection 3 unspecified rectangular surface groups.
- `0/0/0/0px`: selected Time Period nested groups.
- `0/0/0/0px`: Year Selection nested content group.

## Elevation & effects

- Background blur: `60px`, used by `infographics bg` and `Calender Blur`.
- No elevation or shadow tokens were found.
- Calendar and month-selection surfaces use a 1px stroke matching `#18617933`.
- Gradient selection surfaces use the linear gradient `#67F0FD 0%` to `#184A5E 100%`.

## Components

Only the following component families are defined:

### Calender

- Size: `353x367px`.
- Surface radius: `15px`.
- Surface fill: `#18617933`.
- Surface stroke: `#18617933`, `1px`.
- Effect: `60px` background blur.
- Month heading uses Calender Header.
- Weekday labels use Calender H2 or Poppins Regular 12px.
- Calendar dates use Poppins Regular 16px.
- Adjacent dates use `#808080`; current-month dates use `#F2F2F2`.
- Includes white navigation vectors with `2px` strokes and dimensions `5.84x14px`.

### selected Time Period

- Size: `353x367px`.
- Calendar surface uses `#18617933`, a 1px matching stroke, `15px` radius, and `60px` background blur.
- Month heading uses Poppins Bold 20px.
- Selected date uses Calender Header.
- Includes a decorative `286x107px` group with `8px` radius.

### month selection

- Size: `112x352px`.
- Vertical layout with `8px 0 8px 0px` padding and `0px` gap.
- Fill: `#18617933`.
- Stroke: `infographics bg`, `1px`.
- Radius: `15px`.
- Contains 12 month items, each `112x28px`, with `4px 16px 4px 16px` padding and `8px` gap.
- Month labels use Skipper-h2-Poppin.
- The active July item uses the cyan-to-dark-teal gradient and `8px` radius.

### Year Selection

- Size: `68x367px`.
- Horizontal layout with `13px 0 13px 0px` padding and `10px` gap.
- Surface radius: `15px`; nested background group radius: `9px`.
- Uses `#18617933` with a 1px matching stroke and `60px` background blur.
- Active year highlight is `67x27px`, `8px` radius, and the cyan-to-dark-teal gradient.
- Year labels use Poppins Regular 13px or Calender H1.
- Content is vertically arranged with `8px 18px 8px 18px` padding and `12px` gap.

### Year Selection 2

- Size: `353x218px`.
- Surface radius: `15px`.
- Fill and stroke: `#18617933`, with a 1px stroke.
- Uses white arrows and de-emphasized arrows in `#FFFFFFB2`.
- Year-range labels use Poppins Medium 13px.
- Selected range uses Poppins Bold 13px.
- Active highlight: `91x32px`, `8px` radius, cyan-to-dark-teal gradient.

### Year Selection 3

- Size: `353x218px`.
- Surface radius: `15px`.
- Fill and stroke: `#18617933`, with a 1px stroke.
- Uses white arrows and de-emphasized arrows in `#FFFFFFB2`.
- Year labels use Poppins Medium 13px.
- Selected decade uses Poppins Bold 13px.
- Active highlight uses `8px` radius and the Calender Select gradient.

### Frame 762247

- Size: `74x116px`.
- Vertical layout, centered alignment, and `8px` gap.
- Contains Monthly, Weekly, and Yearly options.
- Monthly active frame: `74x44px`, `8px` radius, `8px` padding on all sides, gradient fill, and 1px skippr-stroke lite color stroke.
- Weekly frame: `68x28px`, `8px` padding on all sides.
- Yearly frame: `61x28px`, `8px` padding on all sides.
- Labels use Poppins Regular 15px and white text.

## Screen patterns

- **Cover:** A large cover screen with a `4096x2913px` image-filled rectangle.
- **Style Guide:** A large style-guide screen with a `4096x2241px` image-filled rectangle.
- **Calendar UI Kit:** Presents the calendar, month-selection menu, year selector, decade selector, year-range selector, selected time-period state, and Monthly/Weekly/Yearly selector as fixed-size components.
- **Month selection pattern:** A translucent vertical menu lists January through December; one month is highlighted with the cyan-to-dark-teal gradient.
- **Calendar pattern:** A `353x367px` translucent rounded surface contains the month heading, weekday row, date grid, and navigation vectors.
- **Year navigation pattern:** Year and range selectors use centered vertical columns, white active labels, `#FFFFFFB2` de-emphasized values, and a gradient active highlight.

## Notes for implementers

- Preserve the spelling of the source component family `Calender`.
- Use only the documented colors and gradients.
- Use Poppins for all text.
- Keep the documented fixed component dimensions when recreating the extracted components.
- Apply `#F2F2F2` for primary light calendar and menu text, `#808080` for adjacent dates, and `#FFFFFFB2` for de-emphasized navigation values.
- Use the cyan-to-dark-teal gradient for active month, year, decade, and time-period states.
- No local variables, spacing tokens, radius variables, motion tokens, or grid styles were found.
