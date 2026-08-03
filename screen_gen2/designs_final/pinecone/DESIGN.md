---
name: pinecone-vector-database-saas-ui-community
source: Pinecone - Vector database SaaS UI (Community)
kind: design-system-context
---

# pinecone - Design System

## Overview

- Source: Figma file “Pinecone - Vector database SaaS UI (Community)”.
- Pages: “🎨 Replicated UI” and “📕 Cover”.
- Extracted screens include:
  - Pinecone - Table
  - Pinecone - Onboarding
- No local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The interface uses a compact SaaS dashboard structure: a 60px top navigation, a 195px left sidebar, and a primary workspace.

## Design language

- Compact, utility-focused dashboard UI.
- White navigation and card surfaces with light gray borders.
- Primary actions use vivid blue-purple.
- Secondary and selected navigation states use very pale lavender fills.
- Typography is predominantly Manrope, with bold small labels and semibold utility text.
- Icons are outline-style, commonly rendered with 1.5px strokes.
- Common control geometry uses 4px corners; circular controls use 111px radius.
- Layouts use horizontal rows, vertical columns, fixed navigation regions, and fill-width workspace regions.

## Color palette

Ranked by usage from the source:

| Color | Usage | Observed role |
|---|---:|---|
| `#000000` | 244 | Primary navigation and utility text; icon strokes |
| `#E8E8ED` | 117 | Borders and dividers |
| `#FFFFFF` | 109 | Page, navigation, card, and button surfaces |
| `#171A1F` | 103 | Headings and section labels |
| `#72788D` | 100 | Secondary icon strokes and muted UI elements |
| `#1B17F5` | 55 | Primary button background |
| `#EDEDFE` | 38 | Avatar and progress-track backgrounds |
| `#666666` | 29 | Table header text |
| `#4745F7` | 26 | Selected navigation text and icon strokes |
| `#111111` | 13 | Raw color present in the source |
| `#020080` | 10 | Raw color present in the source |
| `#BDC1CA` | 10 | Raw color present in the source |
| `#F8F8FE` | 9 | Selected sidebar item background |
| `#FFFFFF80` | 9 | Translucent sidebar surface |
| `#565D6D` | 7 | Raw color present in the source |
| `#404040` | 6 | Raw color present in the source |

## Type scale

Primary font family: Manrope.

| Size | Weight / family | Usage count |
|---:|---|---:|
| 12px | SemiBold | 132 |
| 14px | SemiBold | 58 |
| 12px | Medium | 54 |
| 14px | Regular | 48 |
| 15px | Medium | 21 |
| 9px | Bold | 18 |
| 15px | Regular | 17 |
| 15px | Bold | 15 |
| 24px | Bold | 11 |
| 14px | Bold | 10 |
| 14px | ExtraBold | 9 |
| 13px | Consolas | 6 |
| 22px | Bold | 6 |
| 24px | Helvetica | 5 |
| 21px | Bold | 4 |
| 120px | Inter Black | 3 |
| 18px | Bold | 3 |
| 16px | Medium | 3 |

Observed hierarchy:

- 120px: Inter Black.
- 24px: Helvetica or Manrope Bold.
- 22px: Manrope Bold.
- 21px: Manrope Bold.
- 18px: Manrope Bold.
- 16px: Manrope Medium.
- 15px: Manrope Bold, Medium, or Regular.
- 14px: Manrope Bold, ExtraBold, Regular, or SemiBold.
- 13px: Consolas.
- 12px: Manrope Medium or SemiBold.
- 9px: Manrope Bold.

## Spacing scale

No spacing variables were found in the source.

Observed layout values include:

- 0px, 2px, 3px, 4px, 6px, 8px, 10px, 12px, 16px, 22px, and 40px.
- Navigation padding: top/bottom `0px`, right `22px`, left `16px`.
- Sidebar padding: `12px`.
- Sidebar item gap: `8px`.
- Main workspace horizontal padding: `40px`.
- Table cell horizontal padding: commonly `12px`; some cells use `6px`.
- Primary button internal padding: `10px`.
- Icon-and-label gaps: commonly `8px` or `12px`.

## Radius scale

Observed radii:

- `4px`: buttons, cards, panels, and progress elements.
- `111px`: circular avatar and progress-track geometry.

No radius variables were found.

## Elevation & effects

- Screen frames use a drop shadow with `6px` blur, `0 3px` offset.
- No local effect styles were found.
- Shadow color was not included because it is outside the allowed palette.

## Components

No component families or component specifications were found in the source.

Observed repeated UI patterns, not formal component definitions:

- Top navigation bar.
- Sidebar navigation button.
- Primary action button.
- Table header and table row.
- Quota meter with label, value, and progress track.
- Circular initials avatar.
- Icon-and-label navigation item.
- Icon-only action control.

## Screen patterns

### Pinecone - Table

- 1440×769px dashboard frame.
- 60px top navigation with Pinecone branding, organization selector, navigation links, and a circular `CT` avatar.
- 709px content area split into:
  - 195px left sidebar.
  - Fill-width workspace with 40px horizontal padding.
- Sidebar includes a project selector, database navigation, section labels, quota meters, and a bordered action area.
- Workspace uses a white bordered table card with a 58px header row and a 58px data row.
- A blue-purple 162×34px primary action button appears above the table.
- Workspace heading uses 24px Manrope Medium.

### Pinecone - Onboarding

- Shares the same 1440×769px frame and 60px top navigation as the table screen.
- Uses the same 195px sidebar and fill-width main workspace structure.
- Sidebar selected state uses `#F8F8FE` with `#4745F7` icon and text.
- Navigation and quota patterns remain consistent with the table screen.

## Notes for implementers

- Use only the listed palette colors.
- Prefer Manrope for interface text; preserve the explicitly observed Consolas, Helvetica, and Inter styles only where required by the design.
- Keep utility text compact: 12px Manrope Medium or SemiBold is the dominant UI size.
- Use 9px Manrope Bold for uppercase sidebar section labels.
- Use `#1B17F5` for primary action button backgrounds and `#FFFFFF` for their labels and icons.
- Use `#E8E8ED` for borders and dividers.
- Use `#72788D` for muted outline icons.
- Use `#F8F8FE` for selected sidebar navigation backgrounds and `#4745F7` for selected labels and icons.
- Maintain the 60px top navigation, 195px sidebar, and 40px workspace side padding where the layout matches the extracted screens.
- Use 4px radii for standard controls and panels; use 111px for circular controls.
- No formal component families are available; implement repeated patterns consistently without treating them as source-defined component specifications.
