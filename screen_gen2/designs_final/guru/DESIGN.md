---
name: product-refund-selection-ui-for-amazon-flipkart-meesho-and-other-e-commerce-web-and-applications-community
source: Product Refund Selection UI  for Amazon, Flipkart, Meesho, and other E-Commerce web and applications (Community)
kind: design-system-context
---

# guru - Design System

## Overview

- Source: Product Refund Selection UI for Amazon, Flipkart, Meesho, and other E-Commerce web and applications (Community).
- Figma page: Return Request Design, Thumbnail.
- Primary pattern: desktop return-request flow with centered progress steps and refund/return selection content.
- No local variable collections were found.
- Extracted desktop frame heights: 450px, 642px, 714px, and 738px. Frame width: 1366px.

## Design language

- Clean e-commerce workflow UI on a white canvas.
- Uses Inter for the interface and Young Serif Regular for raw display text.
- Progress is represented by five circular icon steps connected by horizontal lines.
- Active controls use purple fills and borders; inactive controls use white surfaces with light borders.
- Content is organized into compact form sections, tables, checkbox groups, and footer actions.
- Brand gradient: linear gradient from `#00FBFF` at 0% to `#10DCE8` at 100%, with `#09C9E3` also specified at 100%.

## Color palette

| Role | Value | Usage |
|---|---|---:|
| Avatar background | `#CFCBDC` | 33 raw uses; 3 avatar instances |
| Surface / canvas | `#FFFFFF` | 10 raw uses |
| Brand gradient start | `#00FBFF` | Part of brand gradient; 8 uses |
| Brand gradient midpoint/end | `#10DCE8` | Part of brand gradient |
| Brand gradient specified end | `#09C9E3` | Part of brand gradient |
| Secondary | `#EB24BF` | 2 uses |
| Dark | `#0D0543` | 1 use |
| Black | `#000000` | 3 raw uses |
| Shadow | `#0C0C0D66` | Drop Shadow/600 |
| Shadow | `#1018280D` | Shadows/shadow-xs |

## Type scale

Font family and styles:

- Inter Regular: weight 400.
- Inter Medium: weight 500.
- Inter SemiBold: weight 600.
- Inter Bold: weight 700.
- Young Serif Regular: raw 32px style.

| Token | Family | Weight | Size | Line height | Tracking | Usage |
|---|---|---:|---:|---:|---:|---:|
| Display 2xl/Bold | Inter | 700 | 72px | 90px | -1.44px | 16 |
| Young Serif Regular | Young Serif | Regular | 32px | Not specified | Not specified | 4 raw uses |
| Text xl/Semibold | Inter | 600 | 20px | 30px | 0px | 24 |
| Text md/Regular | Inter | 400 | 16px | 24px | 0px | 90 |
| Text md/Medium | Inter | 500 | 16px | 24px | 0px | 77 |
| Text md/Semibold | Inter | 600 | 16px | 24px | 0px | 8 |
| Text sm/Regular | Inter | 400 | 14px | 20px | 0px | 148 |
| Text sm/Semibold | Inter | 600 | 14px | 20px | 0px | 92 plus 16 raw uses |
| Text sm/Medium | Inter | 500 | 14px | 20px | 0px | 90 |
| Text xs/Medium | Inter | 500 | 12px | 18px | 0px | 39 |

## Spacing scale

No spacing variables were found. Observed layout spacing and padding values:

- 0px
- 2px
- 4px
- 8px
- 10px
- 12px
- 14px
- 16px
- 24px
- 32px

Observed structural values:

- Progress-step gap: 12px.
- Progress content gap: 16px.
- Checkbox-group gap: 12px.
- Checkbox item content gap: 12px.
- Table row group gap: 16px.
- Larger form-section gaps: 24px and 32px.
- Table header padding: 12px 24px.
- Table cell padding: 16px 24px.
- Button padding: 10px 14px.
- Selected option padding: 16px.

## Radius scale

Observed radius values:

- 0px.
- 8px: buttons, table container, and selected controls.
- 12px: checkbox group items.
- 9999px: circular progress icons.

No radius variables were found.

## Elevation & effects

- `Shadows/shadow-xs`: drop shadow, 2px offset, offset `0 1`, color `#1018280D`; used 146 times.
- `Drop Shadow/600`: drop shadow, 32px, offset `0 16`, color `#0C0C0D66`; used once.
- `Shadows/shadow-xs` appears on progress icons and buttons.
- Borders and other source colors that are not represented in the approved palette should not be added as new tokens.

## Components

_None found in source._

## Screen patterns

- **Return Request Design / Desktop — 1366×450px:** five-step centered progress indicator, page title, explanatory content, and a compact action link.
- **Return Request Design / Desktop — 1366×642px:** five-step progress indicator with the first three steps active and the final two inactive, followed by a refund-selection table, checkbox groups, and an action link.
- **Return Request Design / Desktop — 1366×714px:** five-step progress indicator, title, selectable checkbox-card options, and back/continue actions.
- **Return Request Design / Desktop — 1366×738px:** five-step progress indicator with earlier steps active and later steps inactive, followed by selectable checkbox cards and footer actions.
- Progress container: 946×72px, centered at the top.
- Each progress step: 176.4×72px with a 40×40px icon and 12px internal gap.
- Progress icons: 20×20px icons inside 40×40px circular containers.
- Main content width: 855px.
- Primary action buttons: 158×40px in the checkbox-card flow.
- Compact action buttons/links: 145×24px.

## Notes for implementers

- Use only the listed colors, typography, spacing, radius, and effect values.
- Preserve the five-step return-request sequence and its centered 946×72px progress layout.
- Use 40×40px circular progress icons with 20×20px line icons.
- Distinguish active and inactive progress states through the documented purple-filled versus bordered white icon treatment.
- Use `Text sm/Regular` as the most frequent text style, followed by `Text sm/Semibold`, `Text md/Regular`, and `Text sm/Medium`.
- Keep main form content at 855px where the source specifies that width.
- Do not infer missing component sets, local variables, motion tokens, or unlisted color values.
