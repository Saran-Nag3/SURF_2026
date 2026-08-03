---
name: postman-api-platform-saas-ui-community
source: Postman - API Platform SaaS UI (Community)
kind: design-system-context
---

# postman - Design System

## Overview

- Source: Figma file `Postman - API Platform SaaS UI (Community)`.
- Source pages: `🎨 Replicated UI kit` and `📕 Cover`.
- Extracted screens include `Postman - Account` and `Postman - Workspace`.
- No local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion variables, grid styles, or component families were found.
- Visual language is a dense SaaS application UI with compact navigation, account-management sections, workspace discovery, bordered containers, dividers, and restrained color usage.

## Design language

- Use Roboto as the primary interface typeface.
- Use medium weights for labels, buttons, section titles, and prominent headings.
- Use regular weights for descriptions, navigation labels, metadata, and supporting text.
- Use ABeeZee selectively for 14px and 15px interface labels.
- Use compact controls with observed heights of 35px and 37px.
- Use light gray page surfaces, white content containers, 1px borders, and horizontal dividers.
- Use blue for links and green, teal, purple, orange, and brown as accent/status colors.
- Account and workspace screens use left-side navigation or content panels paired with larger content areas.
- Repeated navigation and utility bars use 50px observed height.

## Color palette

Ranked by source usage count:

| Color | Usage |
|---|---:|
| `#000000` | 356 |
| `#6B6B6B` | 334 |
| `#212121` | 147 |
| `#9095A1` | 135 |
| `#EDEDED` | 133 |
| `#027F31` | 113 |
| `#171A1F` | 110 |
| `#FFFEFE` | 59 |
| `#FFFFFF` | 47 |
| `#F9F9F9` | 43 |
| `#E6E6E6` | 42 |
| `#BDC1CA` | 41 |
| `#F2F2F2` | 36 |
| `#A6A6A6` | 34 |
| `#D9D9D9` | 31 |
| `#028192` | 28 |
| `#623497` | 28 |
| `#0164D2` | 21 |
| `#EAEAEA` | 16 |
| `#FE6C37` | 12 |
| `#565D6D` | 11 |
| `#AC7A04` | 10 |

Observed usage:
- Primary dark text: `#171A1F`, `#212121`, and `#000000`.
- Secondary text: `#6B6B6B`, `#9095A1`, and `#565D6D`.
- Surfaces: `#FFFFFF`, `#FFFEFE`, `#F9F9F9`, `#F2F2F2`, and `#E6E6E6`.
- Borders and dividers: `#EDEDED`, `#EAEAEA`, `#D9D9D9`, `#BDC1CA`, and `#A6A6A6`.
- Accents: `#0164D2`, `#027F31`, `#028192`, `#623497`, `#FE6C37`, and `#AC7A04`.

## Type scale

### Roboto

| Typeface | Size | Usage |
|---|---:|---:|
| Roboto Regular | 12px | 171 |
| Roboto Regular | 13px | 146 |
| Roboto Medium | 13px | 31 |
| Roboto Regular | 14px | 30 |
| Roboto Medium | 12px | 28 |
| Roboto Medium | 10px | 20 |
| Roboto Medium | 15px | 17 |
| Roboto Regular | 11px | 8 |
| Roboto Medium | 20px | 7 |
| Roboto Medium | 11px | 4 |
| Roboto Medium | 14px | 4 |
| Roboto Medium | 26px | 4 |

### Other typefaces

| Typeface | Size | Usage |
|---|---:|---:|
| ABeeZee Regular | 14px | 8 |
| ABeeZee Regular | 15px | 8 |
| Helvetica Helvetica | 24px | 5 |
| Inter Black | 120px | 3 |

Observed hierarchy, largest to smallest:
- Inter Black, 120px.
- Roboto Medium, 26px.
- Helvetica Helvetica, 24px.
- Roboto Medium, 20px.
- ABeeZee Regular and Roboto Medium, 15px.
- ABeeZee Regular, Roboto Regular, and Roboto Medium, 14px.
- Roboto Regular and Roboto Medium, 13px.
- Roboto Regular and Roboto Medium, 12px.
- Roboto Regular and Roboto Medium, 11px.
- Roboto Medium, 10px.
- An Account screen title also uses Roboto Medium at 28px.

## Spacing scale

_None found in source._

## Radius scale

- 3px: observed on compact buttons.
- 4px: observed on inputs, cards, buttons, search controls, image containers, and grouped controls.
- 15px: observed on a circular workspace avatar.
- 18px: observed on a circular profile image.
- 0/4px: observed on adjoining grouped controls with one rounded side.
- 4/0/0/4px: observed on left-side grouped controls.
- 0/4/4/0px: observed on right-side grouped controls.

## Elevation & effects

- No local effect styles were found.
- Screen-level drop shadow observed with `6px` blur, offset `0 3px`.
- A sidebar card uses a `16px` drop shadow with offset `0 0`.
- Borders are commonly 1px.
- Horizontal dividers are commonly 0px-high vector lines with a 1px stroke.

## Components

_None found in source._

## Screen patterns

### Account

- 1440x806px application screen.
- Uses a white main content area with an account title and stacked settings sections.
- Settings include email update, password change, two-factor authentication, data export, and account deletion.
- Sections use compact text hierarchy, 1px horizontal dividers, and 12px supporting descriptions.
- Includes a bordered sidebar card containing navigation, profile information, progress indicators, and action controls.
- Uses a 50px utility bar with home navigation, workspace/API network navigation, search, decorative actions, profile imagery, and an upgrade control.

### Workspace

- 1440x806px application screen.
- Uses a 307px light-gray left navigation panel with workspace-related navigation and discovery content.
- Main content includes `Your workspaces` and `Discover what you can do in Postman` sections.
- Section headings use Roboto Medium at 20px.
- Workspace rows pair a workspace label with a circular image/avatar.
- Discovery content uses a blue `View all -` link and muted supporting copy.
- Uses the same 50px utility bar pattern as the Account screen.
- Cards and navigation areas use light-gray surfaces, white content areas, borders, dividers, and 3px or 4px corners.

## Notes for implementers

- Treat the listed raw colors as the available palette; do not introduce additional colors.
- Prefer the highest-usage colors for default text and surfaces: `#000000`, `#6B6B6B`, `#212121`, `#9095A1`, `#EDEDED`, `#171A1F`, `#FFFFFF`, and `#F9F9F9`.
- Use `#0164D2` for link-like actions observed in the Workspace screen.
- Use `#FE6C37` for prominent orange actions observed in the Account screen.
- Preserve the compact typography: 12px and 13px Roboto are the dominant body and metadata sizes.
- Use 15px Roboto Medium for section labels and 20px Roboto Medium for major workspace headings.
- Use 1px borders and dividers where containers or sections are separated.
- Use 3px or 4px radii for controls and cards; reserve 15px and 18px radii for circular imagery.
- No reusable component definitions were extracted. Recreate patterns from the screen summaries rather than assuming a component library.
- Image fills appear in the source, but their image hashes are not reusable design tokens.
