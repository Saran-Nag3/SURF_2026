---
name: customer-io-messaging-automation-saas-ui-community
source: Customer io - Messaging Automation SaaS UI (Community)
kind: design-system-context
---

# customer-io - Design System

## Overview

Customer.io messaging automation SaaS interface extracted from the Figma file “Customer io - Messaging Automation SaaS UI (Community)”. The source contains two replicated UI screens: People and Analysis. No local variables, styles, component sets, or effect styles were defined.

## Design language

- Compact, data-dense SaaS application UI.
- Dark teal navigation shell using `#09272B`.
- Pale green accents using `#E4FFCD` and `#F4FFEB`.
- Neutral white, pale gray, and blue-gray surfaces for navigation, tables, controls, and page backgrounds.
- Green is used for active states and status indicators, including `#00882A` and `#18A47B`.
- Blue is used for informational messaging, including `#E5F3FF`, `#00469F`, and `#002860`.
- Primary interface text is predominantly `#000000`, with secondary labels using blue-gray values.
- Controls use compact dimensions, thin borders, small corner radii, and occasional drop shadows.
- Typography is dominated by Manrope at 10px–16px, with larger display text at 20px, 26px, 24px, and 120px.

## Color palette

Ranked by observed usage:

| Color | Uses | Observed role |
|---|---:|---|
| `#000000` | 147 | Primary text |
| `#3F4E50` | 104 | Navigation and icon strokes |
| `#FFFFFF` | 92 | Surfaces, controls, and icon containers |
| `#F4FFEB` | 84 | Light text and navigation accents |
| `#65777A` | 72 | Secondary text and metadata |
| `#565D6D` | 61 | Footer and supporting text |
| `#EBF0F1` | 45 | Borders and selected structural surfaces |
| `#DCDBDD` | 40 | Control and table borders |
| `#E4FFCD` | 30 | Green accent surfaces and active states |
| `#171A1F` | 28 | Dark text |
| `#576466` | 28 | Carets and secondary controls |
| `#C9D6D8` | 23 | Pagination and control borders |
| `#F8F9F9` | 23 | Application background |
| `#00882A` | 19 | Status indicators and badges |
| `#839598` | 19 | Secondary interface text |
| `#09272B` | 17 | Top navigation and dark primary buttons |
| `#404F51` | 17 | Dark neutral interface elements |
| `#00320B` | 16 | Text on pale green controls |
| `#18A47B` | 16 | Active navigation icon |
| `#E5F3FF` | 16 | Informational banner background |
| `#1F2C2D` | 14 | Dark interface text |
| `#9095A1` | 14 | Version metadata |
| `#ACBABA` | 13 | Muted control text |
| `#ADBBBC` | 12 | Muted dropdown text |
| `#EEEEEE` | 11 | Text on dark buttons |
| `#00469F` | 10 | Informational icon stroke |
| `#486061` | 10 | Secondary dark neutral |
| `#6F7B7C` | 10 | Muted interface text |
| `#056D24` | 9 | Green interface accent |
| `#818F92` | 9 | Description labels |
| `#969FA0` | 9 | Muted metadata |
| `#FBFAF8` | 9 | Off-white surface |
| `#002860` | 8 | Informational banner text |
| `#EAEAEA` | 7 | Light neutral surface |

## Type scale

No local text styles were found. Raw typography usage:

| Size | Font | Weight/style | Uses |
|---:|---|---|---:|
| 120px | Inter | Black | 3 |
| 26px | Manrope | Bold | 3 |
| 24px | Helvetica Helvetica | Regular/unspecified | 5 |
| 20px | Manrope | Bold | 4 |
| 16px | Manrope | Bold | 19 |
| 14px | Manrope | Bold | 37 |
| 14px | Manrope | SemiBold | 21 |
| 12px | Manrope | Medium | 129 |
| 12px | Manrope | Bold | 77 |
| 12px | Manrope | SemiBold | 31 |
| 12px | Manrope | ExtraBold | 9 |
| 12px | Manrope | Regular | 8 |
| 12px | ABeeZee | Regular | 10 |
| 12px | Consolas | Regular | 4 |
| 11px | Manrope | Medium | 8 |
| 11px | Manrope | Regular | 8 |
| 11px | Manrope | Bold | 5 |
| 11px | ABeeZee | Regular | 3 |
| 10px | Manrope | Bold | 56 |
| 10px | Manrope | SemiBold | 39 |

Primary hierarchy:

- Display: Inter Black, 120px.
- Large heading: Manrope Bold, 26px.
- Secondary large heading: Helvetica Helvetica, 24px.
- Section heading: Manrope Bold, 20px or 16px.
- Standard controls and labels: Manrope Bold, SemiBold, or Medium at 12px–14px.
- Compact navigation and status text: Manrope Bold or SemiBold at 10px–11px.
- Code-like text: Consolas, 12px.

## Spacing scale

No spacing variables were found.

Observed layout values include:

- Top navigation height: `35px`.
- Sidebar widths: `36px` and `192px`.
- Main content width in the 1440px screens: `1212px`.
- Main content horizontal padding: `100px`.
- Common control heights: `19px`, `25px`, `26px`, `27px`, `32px`, `36px`, `37px`, `40px`.
- Common internal gaps: `2px`, `3px`, `4px`, `5px`, `8px`, `10px`.
- Common horizontal and vertical padding values: `3px`, `4px`, `5px`, `8px`, `10px`, `15px`, `100px`.

## Radius scale

No radius variables were found.

Observed corner radii:

- `3px`: checkboxes.
- `4px`: navigation controls, sidebar buttons, primary content controls, and table controls.
- `5px`: compact buttons, badges, pagination controls, and grouped controls.
- `111px`: circular status indicators and notification badges.

## Elevation & effects

No local effect styles were found.

Observed drop shadows:

- `4px` shadow offset `0 0` on buttons, headers, and controls.
- `6px` shadow offset `0 3` on the outer application frame.

## Components

No component families or component sets were found in the source.

Recurring UI patterns visible in the screens include:

- Top navigation bar.
- Compact icon sidebar.
- Expanded navigation sidebar.
- Active and inactive sidebar items.
- Primary, secondary, upgrade, help, and dropdown controls.
- Informational banner.
- Search control.
- Filter or view controls.
- Pagination controls.
- Bordered table or empty-state panel.
- Checkbox and table headers.
- Footer attribution.

## Screen patterns

### Customer io - People

- Fixed `1440px × 718px` application frame.
- `35px` dark teal top navigation bar.
- Two-part sidebar system: `36px` icon rail and `192px` expanded navigation panel.
- Main workspace uses a `#F8F9F9` background and a `1212px` content column.
- Main content has `100px` horizontal padding.
- Includes an informational verification banner with `#E5F3FF` background and `#002860` text.
- Includes a section title row with a bordered “Learn More” control and dark teal creation control.
- Includes description and view controls, search, pagination, and a bordered table region.
- Includes version metadata at the bottom and a footer attribution.

### Customer io - Analysis

- Shares the same `1440px × 718px` application frame and top navigation structure as People.
- Uses the same two-part sidebar layout and `#F8F9F9` workspace background.
- Repeats the dark teal, pale green, white, blue, and blue-gray visual language.
- The raw extraction is truncated before the complete Analysis screen structure is available.

## Notes for implementers

- Treat the source as a raw visual reference rather than a formal tokenized design system: no variables, local styles, components, spacing tokens, radius tokens, motion tokens, grid styles, or effect styles were defined.
- Prefer Manrope for application UI, especially 10px–16px labels, controls, navigation, and headings.
- Use `#09272B` for the top navigation and dark primary controls.
- Use `#E4FFCD` for pale green action surfaces and active states; pair with `#00320B` text.
- Use `#F8F9F9` for the application workspace background and `#FFFFFF` for panels and controls.
- Keep controls compact, with heights commonly between `25px` and `37px`, `4px` or `5px` corner radii, and thin borders.
- Preserve the fixed desktop composition: `1440px` wide, `35px` top navigation, `36px` icon rail, and `192px` expanded sidebar.
- Do not assume named reusable components exist in the source; create implementation components only when needed to reproduce the recurring visual patterns.
