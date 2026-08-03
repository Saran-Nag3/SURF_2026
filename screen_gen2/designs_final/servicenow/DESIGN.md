---
name: servicenow-ui-kit-1-0-community
source: Servicenow UI Kit 1.0 (Community)
kind: design-system-context
---

# servicenow - Design System

## Overview

- Source: Figma file “Servicenow UI Kit 1.0 (Community)”.
- Pages: 00. Introduction; 01. What's New; 02. Servicenow UI Componentes; 10. Sample Prototype; 20. Bootstrap 3 Icons.
- No local variable collections found.
- The system contains ServiceNow field, navigation, layout, data-entry, data-display, and icon components.
- Extracted at: 2026-07-25T09:21:27.484406+00:00.

## Design language

- Primary typeface: Inter.
- Display typeface: Space Grotesk.
- Additional raw heading/display style: Roboto Regular, 24px.
- Common component layout: horizontal, fixed width and height, white fill, centered or minimum alignment.
- Common field layout: 7px 10px padding, 22px gap, 50px height.
- Navigation uses a dark chrome brand fill and 60px height.
- Title bars use a white fill and 60px height.
- Icons are 24px by 24px and available in outlined and non-outlined variants.
- No motion, grid, or local effect styles were found.

## Color palette

### Usage-ranked raw colors

| Color | Uses |
|---|---:|
| #4754B9 | 563 |
| #FFFFFF | 363 |
| #0B0B0B | 171 |
| #333333 | 153 |
| #30387D | 148 |
| #2B2B2B | 124 |
| #CED4D5 | 118 |
| #E1E2F2 | 89 |
| #F5F5F5 | 72 |
| #F6F6F8 | 65 |
| #AFAFAF | 64 |
| #1C1C1C | 47 |
| #9747FF | 47 |
| #D5D7DC | 33 |
| #000000 | 24 |
| #181826 | 18 |
| #111111 | 17 |
| #E8EAED | 16 |
| #A5EB99 | 14 |

### Named color tokens

| Token | Value |
|---|---|
| Text Primary | #111111 |
| White | #FFFFFF |
| Base Colors/Chrome Brand | #181826 |
| Nav Propriedades/Favorite Icon | #FFDB92 |
| Nav Propriedades/Header Color | #D9D9D9 |
| Brand Colors/Brand 4 | #2E2C48 |
| Gray 300 | #FFFFFF |
| Gray 800 | #3C3E3E |
| Gray 400 | #B6BBBC |
| Neutral Colors/Neutral 0 | #F4F4F5 |
| Primary Colors/Primary 0 | #C1C3DE |
| Blue 0 | #066FDE |
| Light | #F7F8F8 |
| Gray 900 | #29272B |
| Gray 500 | #FFFFFF |

- Gray 600 has no value in the source.
- Components explicitly using white fill use #FFFFFF.
- Filter bar fill: #F6F6F8; stroke: #111111, 1px.
- Field Name fill: #333333.
- Data Structure stroke: #AFAFAF, 1px.
- Navigation fill: #181826.
- Expand fill: #2E2C48.
- Title Bar fill: #FFFFFF.
- Tela 1 fill: #FFFFFF.

## Type scale

### Typography token

- `p`: Inter Regular, weight 400, 16px, line height 103.29%, tracking 0px.

### Usage-ranked raw styles

| Typeface | Weight | Size |
|---|---|---:|
| Inter | Medium | 14px |
| Inter | Medium | 12px |
| Inter | SemiBold | 10px |
| Inter | SemiBold | 11px |
| Inter | Medium | 11px |
| Inter | Bold | 14px |
| Space Grotesk | Bold | 36px |
| Inter | SemiBold | 16px |
| Inter | Bold | 16px |
| Inter | SemiBold | 12px |
| Inter | SemiBold | 9px |
| Inter | Bold | 10px |
| Inter | Medium | 16px |
| Inter | Bold | 11px |
| Inter | Bold | 12px |
| Inter | Bold | 8px |
| Space Grotesk | Regular | 18px |
| Roboto | Regular | 24px |
| Inter | Regular | 16px |

### Hierarchy

- 36px: Space Grotesk Bold.
- 24px: Roboto Regular.
- 18px: Space Grotesk Regular.
- 16px: Inter Regular, Medium, SemiBold, or Bold.
- 14px: Inter Medium or Bold.
- 12px: Inter Medium, SemiBold, or Bold.
- 11px: Inter Medium, SemiBold, or Bold.
- 10px: Inter SemiBold or Bold.
- 9px: Inter SemiBold.
- 8px: Inter Bold.

## Spacing scale

No spacing variables were found. Observed component padding and gap values:

- Padding: 0px, 1px, 2px, 7px, 8px, 10px, 30px.
- Gaps: 0px, 5px, 6px, 10px, 14px, 16px, 22px.
- Common padding patterns:
  - 7px 10px.
  - 10px 8px.
  - 7px 30px.
  - 7px 7px.
- Textarea and script components use 0px padding.
- Data Table and Data Structure use 0px gap.

## Radius scale

- 4px: Field Name, Expand, Data Structure.

## Elevation & effects

- No local effect styles found.
- No elevation or shadow values found.
- No motion tokens found.
- No local grid styles found.

## Components

### Component families

Audio Input, Calendar Data, Checkbox, Color, Condition String, Conditions, Data Structure, Data Table, Date, Decimal, Domain ID, Dropdown, Duration, Expand, FX Currency, Field Name, File Attachment, Filter bar, Floating Point Number, IP Address, Icon, Icons, Image, Insert Timestamp, Integer, List, Long, Name-Value Pairs, Navigation, Password 1 Way Encrypted, Password 2 Way Encrypted, Percent Complete, Phone Number E164, Price, Script, String, Table name, Tela 1, Text, Time, Title Bar, Translated HTML, Translated Text, URL, UTC Time, Video, Wiki.

### Component specifications

| Family | Size | Layout / spacing | Fill / stroke | Text | Variants |
|---|---|---|---|---|---|
| List | 127×44px | Horizontal; padding 7px 30px; gap 16px; min/center | #FFFFFF | Inter Medium, 12px | Button/Text |
| Domain ID | 405×50px | Horizontal; padding 10px 8px; gap 14px; min/center | #FFFFFF | Inter SemiBold, 11px; Inter Medium, 12px | Input/Option/Table/Value |
| Translated HTML | 1246×233px | Vertical; padding 0px; gap 6px; min/max | None specified | Inter Medium, 12px | Textarea |
| Wiki | 1198×28px | Vertical; padding 0px; gap 6px; min/max | None specified | Inter Medium, 12px | Btn/Expand |
| Video | 191×29px | Horizontal; padding 7px 30px; gap 16px | #FFFFFF | Inter Bold, 12px; Inter Medium, 12px | Input/Video |
| Image | 193×29px | Horizontal; padding 7px 30px; gap 16px | #FFFFFF | Inter Bold, 12px; Inter Medium, 12px | Image/Input |
| URL | 1100×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input Lock/Input Unlock/Value Lock/Value Unlock |
| Translated Text | 1103×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input |
| Table name | 1090×54px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/Option/Value |
| String | 1172×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | String/String FULL UTF-8 |
| Name-Value Pairs | 862×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/More Input |
| Script | 1227×229px | Vertical; padding 0px; gap 6px; min/max | None specified | Inter Medium, 12px | Input |
| Phone Number E164 | 611×112px | Horizontal; padding 7px 10px; gap 22px | #FFFFFF | p; Inter Medium, 12px | Input/Option/Value |
| Price | 453×44px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | Inter Regular, 14px; Inter SemiBold, 11px; Inter Medium, 12px | Input/Option/Value |
| Percent Complete | 448×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/Value |
| Password 2 Way Encrypted | 1081×42px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | Inter Medium, 12px | Input |
| Password 1 Way Encrypted | 499×42px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | Inter Medium, 12px | Input/Value |
| Long | 373×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/Value |
| Integer | 385×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/Value |
| IP Address | 406×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/Value |
| Insert Timestamp | 450×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input |
| Icon | 1050×54px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/Option/Value |
| Text | 1182×233px | Vertical; padding 0px; gap 6px; min/max | None specified | Inter Medium, 12px | Textarea |
| UTC Time | 302×50px | Horizontal; padding 10px 8px; gap 14px; min/center | None specified | Inter SemiBold, 11px; Inter Medium, 12px | Value |
| Time | 274×50px | Horizontal; padding 10px 8px; gap 14px; min/center | None specified | Inter SemiBold, 11px; Inter Medium, 12px | Input/Value |
| Duration | 396×50px | Horizontal; padding 10px 8px; gap 14px; min/center | None specified | Inter SemiBold, 11px; Inter Medium, 12px | Input/Time |
| Floating Point Number | 472×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/Value |
| Date | 377×50px | Horizontal; padding 10px; gap 14px; min/center | None specified | Inter SemiBold, 11px; Inter Medium, 12px | Input/Value |
| Calendar Data/Time | 415×50px | Not specified | #FFFFFF | Inter Medium, 12px | Expand/Input/Time |
| File Attachment | 365×29px | Horizontal; padding 7px 10px; gap 22px; center/center | #FFFFFF | Inter SemiBold, 12px; Inter Medium, 12px | Attachment/Button/Input |
| Field Name | 1112×392px | Vertical; padding 7px; gap 5px | #333333; radius 4px | Inter SemiBold, 9px and 8px | Expand/Input |
| Decimal | 390×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/Value |
| Data Structure | 1579×440px | Vertical; padding 0px; gap 0px; center/min | #FFFFFF; stroke #AFAFAF, 1px | Inter Medium, 12px; Inter Bold, 12px | Empty/Fill |
| FX Currency | 500×50px | Horizontal; padding 7px 10px; gap 16px; min/center | #FFFFFF | Inter Regular, 16px; p; Inter Medium, 12px | Button/Input |
| Condition String | 438×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | String |
| Conditions | 482×50px | Not specified | #FFFFFF | Inter SemiBold, 16px; Inter Medium, 12px | 1/2/3 |
| Calendar Data | 461×50px | Not specified | #FFFFFF | Inter SemiBold, 11px; Inter Medium, 12px | Expand/Input/Time |
| Color | 375×50px | Horizontal; padding 7px 10px; gap 22px; min/center | #FFFFFF | p; Inter Medium, 12px | Color/Input |
| Checkbox | 84×22px | Horizontal; padding 1px 2px; gap 10px; min/center | #FFFFFF | p | False/True |
| Dropdown | 379×50px | Horizontal; padding 7px 10px; gap 16px; min/center | #FFFFFF | p; Inter Medium, 12px | Input/Option/Select |
| Audio Input | 191×29px | Horizontal; padding 7px 30px; gap 16px | #FFFFFF | Inter Bold, 12px; Inter Medium, 12px | Input |
| Data Table | 1595×436px | Horizontal; padding 0px; gap 0px | None specified | Inter Medium, 14px; p; Inter SemiBold, 12px | Padrão/Selecionada |
| Filter bar | 1440×50px | Not specified | #F6F6F8; stroke #111111, 1px | Inter Medium, 14px | Default |
| Title Bar | 1440×60px | Not specified | #FFFFFF | Inter Bold, 16px; Inter Medium, 14px; Inter Bold, 14px | Default |
| Expand | 210×434px | Not specified | #2E2C48; radius 4px | Inter Medium, 11px | Navigation1/Navigation2/TitleBar1 |
| Navigation | 1440×60px | Not specified | #181826 | Inter SemiBold, 16px; Inter Medium, 14px and 16px | Hover False/True; Open False |
| Tela 1 | 1440×820px | Not specified | #FFFFFF | Inter SemiBold, 16px; Inter Medium, 14px and 16px | None specified |
| Icons | 24×24px | Not specified | #FFFFFF | None specified | Icon variants; Outlined False/True |

### Icons

- The Icons family contains a large Bootstrap 3 icon set.
- Variants include directional arrows, navigation controls, calendars, files, communication, status, media, layout, text, and utility icons.
- Each icon is 24px by 24px.
- `Outlined` has False and True variants.
- The source contains named icon variants and tags; use the exact icon name when one is specified.

## Screen patterns

- Introduction and “What’s New” documentation pages establish the kit and its changes.
- The component page presents field and interface component families, including inputs, values, options, textareas, tables, filters, navigation, and icons.
- The sample prototype uses a 1440px-wide navigation bar at 60px height, a title bar at 60px height, a filter bar at 50px height, and a 1440px by 820px Tela 1 canvas.
- Navigation includes hover states and an open state.
- Expand provides navigation and title-bar expansion patterns at 210px by 434px.
- Data-entry patterns commonly use white 50px-high fields with 7px 10px padding, 22px gaps, and Inter Medium 12px text.
- Data-display patterns include Data Table and Data Structure variants for default/selected or empty/filled states.

## Notes for implementers

- Use only the listed colors; prefer the usage-ranked raw colors when no named token is specified.
- Use Inter for application UI text unless a component explicitly specifies Space Grotesk or Roboto.
- Preserve the exact component dimensions when reproducing the extracted kit components.
- Preserve variant names and states, including Input, Option, Value, Expand, Hover, Open, False, True, Empty, Fill, Default, and Selected/Selecionada variants.
- Do not create spacing, radius, elevation, motion, or effect tokens beyond the observed values.
- Use #181826 for the Navigation family and #2E2C48 for the Expand family.
- Use #F6F6F8 with a #111111 1px stroke for Filter bar.
- Use #FFFFFF for Title Bar, Tela 1, and components whose specification explicitly lists a white fill.
- The raw icon extraction is extensive and truncated in the source; do not substitute an unlisted icon name.
