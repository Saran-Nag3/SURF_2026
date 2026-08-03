---
name: tally-form-builder-saas-ui-community
source: Tally - Form builder SaaS UI (Community)
kind: design-system-context
---

# tally - Design System

## Overview

- Source: Figma file `Tally - Form builder SaaS UI (Community)`.
- No local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- Extracted UI uses a white canvas, neutral gray typography and icons, blue primary actions, compact navigation, and sparse layouts.
- Summarized screens:
  - **Tally - Search command:** dashboard shell with sidebar navigation, top utility actions, empty content state, and centered search command dialog.
  - **Tally - Form:** form editor with breadcrumb navigation, editor controls, form content, publish controls, and floating help action.
  - **Tally - Table:** table-oriented content screen with a large heading and structured content area.

## Design language

- Use a predominantly white interface with dark warm-gray primary text.
- Use `#0070D7` for primary actions and links.
- Use muted warm grays for secondary text, icons, labels, borders, and placeholder content.
- Use compact 20px icon containers beside navigation and action labels.
- Primary buttons use 6px radius, blue fill, white text, and a 1px `#CDDCEE` stroke.
- Secondary or utility controls are generally unfilled and text-led.
- Dialogs use white surfaces, 8px radius, and centered placement over the application.
- Sidebar navigation is organized into labeled groups with 10px item gaps and 14px gaps between grouped sections.
- Use rounded circular affordances for avatars and floating help controls.

## Color palette

Ranked by observed usage:

| Color | Uses | Role |
|---|---:|---|
| `#898883` | 264 | Primary icon color, muted labels, section titles |
| `#37352F` | 242 | Primary text and headings |
| `#FFFFFF` | 67 | Page, panel, icon-container, and button text color |
| `#DFDFDE` | 52 | Neutral UI surface or border color |
| `#777671` | 50 | Secondary text, utility icons, and controls |
| `#BBBAB8` | 38 | Placeholder and subdued breadcrumb text |
| `#0070D7` | 22 | Primary buttons and links |
| `#EDEDEC` | 18 | Borders and command-list row backgrounds |
| `#7E7D78` | 14 | Breadcrumb text |
| `#807124` | 14 | Avatar initial text |
| `#FEF6CA` | 14 | Avatar background |
| `#000000` | 13 | Dark submit-button fill |
| `#A5A299` | 12 | Neutral muted UI color |
| `#D7D6D6` | 12 | Floating help-button border |
| `#45433D` | 8 | User name text |
| `#8A46FF` | 8 | Pro/discovery icon accent |
| `#CDDCEE` | 8 | Primary button border |
| `#D2D1D1` | 8 | Submit-button border |
| `#D9D8D8` | 8 | Neutral border or divider |
| `#878682` | 6 | Neutral muted UI color |
| `#AFAEAC` | 6 | Neutral muted UI color |
| `#F81CE5` | 6 | Pro/discovery accent |
| `#FBD3E6` | 6 | Pink accent surface |
| `#FFE5FC` | 6 | Light pink accent surface |

## Type scale

All typography is unstyled raw text; no local text styles were found.

| Size | Family and weight | Uses |
|---:|---|---:|
| 120px | Inter Black | 3 |
| 42px | Inter ExtraBold | 4 |
| 30px | Inter Bold | 6 |
| 24px | Helvetica | 5 |
| 20px | Inter SemiBold | 8 |
| 17px | Inter Bold | 6 |
| 17px | Inter SemiBold | 14 |
| 17px | Inter Medium | 8 |
| 17px | Inter Regular | 8 |
| 16px | Inter SemiBold | 4 |
| 15px | Inter SemiBold | 78 |
| 15px | Inter Medium | 240 |
| 15px | Inter Regular | 22 |
| 12px | Inter SemiBold | 36 |
| 12px | Inter Medium | 8 |

Observed hierarchy:

- Large display: Inter Black, 120px.
- Display heading: Inter ExtraBold, 42px.
- Page heading: Inter Bold, 30px.
- Large content title: Inter SemiBold, 20px.
- Body and navigation: Inter Medium, 15px.
- Strong body and controls: Inter SemiBold, 15px.
- Section labels: Inter SemiBold, 12px.
- A 24px Helvetica style is also present in the source.

## Spacing scale

No spacing variables were found. The following values are observed padding and gap values:

- `0px`: repeated for unpadded containers and icon/text wrappers.
- `1px`: strokes and borders.
- `4px`: breadcrumb and content gaps.
- `8px`: common horizontal gaps, button padding, dialog padding, and list-row padding.
- `10px`: navigation and form-field gaps.
- `12px`: search-bar horizontal padding and selected control gaps.
- `14px`: gaps between sidebar section labels and their lists.
- `16px`: page and sidebar padding, common control gaps.
- `20px`: icon containers and common vertical dimensions.
- `28px`: sidebar group gap.
- `48px`: major content-section gap.
- `133.5px`, `139.5px`: large layout gaps observed in the form screen.

## Radius scale

No radius variables were found. Observed radii:

- `6px`: primary buttons, publish controls, and command-list rows.
- `8px`: search command dialog.
- `99px`: circular avatar and floating help controls.

## Elevation & effects

No local effect styles were found.

Observed effects:

- Application frame: drop shadow with `6px` blur and offset `0 3px`.
- Search dialog: drop shadow with `4px` blur and offset `0 4px`.
- Floating help control: drop shadow with `4px` blur and offset `0 4px`.
- Search command uses a full-screen overlay behind the dialog.
- Floating help control is `36px × 36px`, white, with a 1px `#D7D6D6` border and `99px` radius.

## Components

_None found in source._

## Screen patterns

- **Application shell**
  - White 1440px-wide canvas in the extracted desktop screens.
  - Sidebar width: `264px`, with `16px` padding and `16px` internal gap.
  - Sidebar navigation uses 20px icon containers, 8px icon-to-label gaps, 15px Inter Medium labels, and 12px Inter SemiBold section labels.
  - Top-level utility actions include search, sparkles, and settings icons.
  - A floating help control sits at the lower-right edge.

- **Search command**
  - Centered white dialog: `640px` wide, `371px` high, `8px` radius.
  - Search bar height: `51px`, with `12px` horizontal padding and an 8px icon-to-placeholder gap.
  - Results are grouped into labeled sections.
  - Result rows are `38px` high, use `8px` horizontal padding, `8px` gaps, and `6px` radius.
  - Empty dashboard content includes a 20px title and 15px body text.

- **Form editor**
  - Page padding: `16px`.
  - Header includes breadcrumb navigation on the left and settings, sign-up, preview, and publish actions on the right.
  - Publish control: `70px × 30px`, `6px` radius, `#0070D7` fill, `#FFFFFF` text, and `#CDDCEE` border.
  - Form editing controls use 20px icon containers.
  - Submit button: `115px × 40px`, `6px` radius, `#000000` fill, and `#D2D1D1` border.

- **Table/content screen**
  - Content area uses large heading typography, including Inter Bold at `42px`.
  - Major sections use large vertical separation, including a `48px` gap.
  - Use white surfaces with dark warm-gray headings and muted supporting text.

## Notes for implementers

- Treat all values as observed raw extraction values rather than named design tokens; the source contains no local styles or variables.
- Prefer Inter for the interface because it accounts for the majority of extracted typography.
- Preserve the distinction between Inter Medium, SemiBold, Bold, ExtraBold, Black, and Regular.
- Use `#37352F` for primary text and `#898883` or `#777671` for muted UI text and icons.
- Use `#0070D7` only for prominent actions and links; use `#000000` for the extracted form submit action.
- Keep icon containers at `20px × 20px` and use 8px as the most common icon-to-label gap.
- Do not introduce additional colors, component families, spacing tokens, radius tokens, or effects not present in this extraction.
