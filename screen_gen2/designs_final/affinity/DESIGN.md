---
name: affinity-walls-ux-uxis-academy-community
source: Affinity walls - UX - uxis.academy (Community)
kind: design-system-context
---

# affinity - Design System

## Overview

- Affinity-walls UX education/community design system for course contents, affinity-wall canvases, and reusable templates.
- Visual language combines Montserrat typography, bright accent colors, white surfaces, colorful affinity-wall notes, rounded cards, and subtle drop shadows.
- Component families: Comment imitator, Comment template, Content cell, Informational block template, Stickers, Table title, Title cell, Valid point template.

## Design language

- Use Montserrat as the primary typeface. Averta CY Extrabold appears for selected exploratory or CTA-style headings.
- Use dark charcoal text on white surfaces.
- Use #6C4BEF for CTA and brand accents.
- Use pale cyan accents for table and template structures: #E6FAFF and #B5F1FE.
- Use bright, varied note colors for affinity-wall content, led by #D5E479, #D3B4D9, #D9D9D9, and #E6C52A.
- Prefer fixed-size horizontal or vertical blocks with explicit padding and gaps.
- Apply subtle shadowing to white informational and validation blocks.
- Use rounded corners selectively: 8px for validation blocks and 16px for informational blocks.

## Color palette

### Core and text

| Color | Hex | Usage evidence |
|---|---|---:|
| Black | #424545 | 178 style uses |
| Dark text | #1F1E23 | 57 raw uses |
| Black | #000000 | 10 raw uses |
| White | #FFFFFF | 145 style uses; 10 raw uses |
| White with low opacity | #FFFFFF03 | 60 raw uses |
| Black with low opacity | #00000033 | 34 raw uses |
| Black with low opacity | #00000014 | Used by Regular drop shadow |

### Brand and accent

| Color | Hex | Usage evidence |
|---|---|---:|
| CTA brand color | #6C4BEF | 15 style uses; 8 raw uses |
| Accent 30 | #E6FAFF | 6 style uses |
| Accent 50 | #B5F1FE | 3 style uses |
| Green | #14AE5C | 19 raw uses |
| Green | #26A31B | 5 raw uses |
| Red | #EB5656 | 1 style use |
| Red | #E42B2B | 6 raw uses |
| Pink | #D02D85 | 9 raw uses |
| Pale pink | #F4AFAB | 12 raw uses |
| Pale pink | #FFE5ED | 8 raw uses |
| Pale red | #FFE6E6 | 5 raw uses |

### Affinity-wall note colors

| Color | Hex | Raw uses |
|---|---|---:|
| Yellow-green | #D5E479 | 134 |
| Lavender | #D3B4D9 | 60 |
| Light gray | #D9D9D9 | 60 |
| Yellow | #E6C52A | 60 |
| Olive | #3E4514 | 37 |
| Muted green | #B6C560 | 37 |
| Pale yellow | #ECE88B | 22 |
| Dark olive | #5F4F18 | 12 |
| Mustard | #D8C943 | 12 |
| Brown | #451A14 | 6 |
| Gray | #DADADA | 6 |
| Gray | #DEDEDE | 11 |
| Gray | #B3B3B3 | 5 |
| Terracotta | #C47260 | 5 |
| Dark gray | #363636 | 5 |
| Dark gray | #222222 | 4 |
| Pale green | #E7F9E7 | 4 |

### Other token colors

- Gray 8: #F5F5F5.
- Grey: #E5E5E5.
- White 100: #FFFFFF.
- White: #FFFFFF.
- Red: #EB5656.

## Type scale

Use the following source-defined combinations, ordered by observed usage where counts are available:

| Typeface | Weight | Size | Uses |
|---|---|---:|---:|
| Montserrat | Medium | 20px | 117 |
| Montserrat | Medium | 16px | 51 |
| Montserrat | ExtraBold | 24px | 50 |
| Montserrat | ExtraBold | 15px | 22 |
| Montserrat | Regular | 17px | 18 |
| Montserrat | ExtraBold | 32px | 16 |
| Averta CY | Extrabold | 24px | 15 |
| Montserrat | Regular | 13px | 15 |
| Montserrat | SemiBold | 13px | 15 |
| Montserrat | Bold | 32px | 6 |
| Montserrat | ExtraBold | 40px | 6 |
| Montserrat | SemiBold | 17px | 6 |
| Montserrat | Bold | 24px | 5 |
| Montserrat | Bold | 28px | 4 |
| Montserrat | ExtraBold | 45.45px | 4 |
| Montserrat | Medium | 13px | 4 |
| Montserrat | SemiBold | 20px | 4 |
| Montserrat | ExtraBold | 18px | 3 |
| Montserrat | Medium | 156px | 3 |
| Montserrat | Medium | 256px | 3 |

- Common heading sizes: 24px, 28px, 32px, 40px, and 45.45px.
- Common body sizes: 13px, 16px, 17px, and 20px.
- Intro/course cards use Montserrat ExtraBold 32px for titles and Montserrat Regular 17px for descriptions.
- Table titles use Montserrat Bold 32px.
- Table title cells use Montserrat Bold 24px.
- Content and validation text commonly use Montserrat Medium 20px.
- Small attribution text uses Montserrat Regular 13px.

## Spacing scale

No spacing variables were found. Observed layout values:

- 0px padding and gap in Stickers and several course-card text groups.
- 3.32px and 6.63px horizontal padding in small label frames.
- 8.29px gap in small label frames.
- 10px gap in Valid point template, Informational block template, Title cell, Content cell, and Table title.
- 12px gap in course-card text groups.
- 14px gap in course-card cover metadata groups.
- 20px grid gutter.
- 24px padding in Informational block template.
- 32px vertical and 40px horizontal padding in Valid point template, Title cell, and Content cell.
- 56px vertical and 745px horizontal padding in Table title.
- Stickers use 0px padding and 0px gap.

## Radius scale

Observed radii:

- 6.67px: course-content thumbnail frames.
- 8px: Valid point template.
- 16px: Informational block template.
- No radius variables were found.

## Elevation & effects

- Regular effect: drop shadow with 0px horizontal offset, 4px vertical offset, and #00000014 color.
- Applied to Valid point template and Informational block template.
- Course-cover frames use a 1px #00000033 stroke.
- Thumbnail frames use a 1.67px white stroke.
- Title cell, Content cell, and Table title use a 1px Accent 100 stroke; the source does not provide a hex value for Accent 100.

## Components

Only use the following source-defined component families.

### Stickers

- Size: 142x132px.
- Layout: vertical.
- Padding: 0px on all sides.
- Gap: 0px.
- Sizing: fixed width and fixed height.
- Text: Montserrat Medium 13px.
- Variants:
  - Property 1: L, S, XL.
  - Property 2: Gray, Green, Red, Yellow.

### Comment imitator

- Size: 330x152px.
- Text styles: Montserrat ExtraBold 15px and Montserrat Medium 20px.

### Comment template

- Size: 489x190px.
- Text styles: Montserrat Medium 20px and Montserrat ExtraBold 15px.

### Valid point template

- Size: 847x96px.
- Layout: horizontal.
- Padding: 32px vertical, 40px horizontal.
- Gap: 10px.
- Sizing: fixed width and fixed height.
- Radius: 8px.
- Fill: White, #FFFFFF.
- Effect: Regular drop shadow.
- Text: Montserrat Medium 20px.

### Informational block template

- Size: 485x176px.
- Layout: vertical.
- Padding: 24px on all sides.
- Gap: 10px.
- Sizing: fixed width and fixed height.
- Radius: 16px.
- Fill: White, #FFFFFF.
- Effect: Regular drop shadow.
- Text: Montserrat Medium 20px.

### Title cell

- Size: 848x104px.
- Layout: horizontal.
- Padding: 32px vertical, 40px horizontal.
- Gap: 10px.
- Sizing: fixed width and fixed height.
- Fill: Accent 30, #E6FAFF.
- Stroke: Accent 100, 1px; Accent 100 has no source hex value.
- Text: Montserrat Bold 24px.

### Content cell

- Size: 848x96px.
- Layout: horizontal.
- Padding: 32px vertical, 40px horizontal.
- Gap: 10px.
- Sizing: fixed width and fixed height.
- Fill: White, #FFFFFF.
- Stroke: Accent 100, 1px; Accent 100 has no source hex value.
- Text: Montserrat Medium 20px.

### Table title

- Size: 848x160px.
- Layout: horizontal.
- Alignment: center/center.
- Padding: 56px vertical, 745px horizontal.
- Gap: 10px.
- Sizing: fixed width and fixed height.
- Fill: Accent 50, #B5F1FE.
- Stroke: Accent 100, 1px; Accent 100 has no source hex value.
- Text: Montserrat Bold 32px.

## Screen patterns

### Intro & contents / Course contents

- Main frame: 1326x7278px.
- White page background: #FFFFFF.
- Course entries pair:
  - A left text block with Montserrat ExtraBold 32px title.
  - A Montserrat Regular 17px description.
  - An Averta CY Extrabold 24px “Explore file” action.
  - A right 534x267px cover/thumbnail.
- Course cover frames use white fill, #00000033 1px stroke, and thumbnail radius 6.67px.
- Cover metadata commonly uses Montserrat Bold between 23px and 32px, plus Montserrat Regular 13px attribution.
- CTA labels use #6C4BEF.

### Affinity walls

- Use colorful note-like content blocks with the affinity-wall palette.
- Organize incoming data and generated ideas into structured wall areas.
- Use Stickers, Comment imitator, Comment template, and Informational block template for participant input, labels, and explanatory content.
- Keep dark text against light note colors and white surfaces.

### Template screens

- Use Table title as the primary section header.
- Follow with Title cell and Content cell rows.
- Use Accent 50 #B5F1FE for the table title, Accent 30 #E6FAFF for title cells, and #FFFFFF for content cells.
- Use Valid point template for emphasized conclusions or validated statements.
- Use Informational block template for explanatory or instructional content.

## Notes for implementers

- Do not introduce colors outside the source palette.
- Accent 100 is referenced by components but has no source hex value; preserve it as an unresolved token rather than substituting a color.
- No local variable collections, text styles, spacing variables, radius variables, or motion variables were found.
- Preserve fixed component dimensions where a component specification provides them.
- Keep component padding and gaps exact; do not normalize the distinct values such as 8.29px, 10px, 12px, 14px, 24px, 32px, 40px, and 56px.
- Use the source’s explicit typography combinations rather than creating additional weights or sizes.
- Use image assets only where the original screen pattern calls for a thumbnail or cover; no image color or asset replacement is specified here.
