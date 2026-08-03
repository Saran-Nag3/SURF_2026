---
name: clockify-add-ons-ui-kit-community
source: Clockify Add-ons UI Kit (Community)
kind: design-system-context
---

# clockify - Design System

## Overview

Clockify Add-ons UI Kit for light and dark mode interfaces. The source includes introduction, colors, typography, icons, and UI element reference pages. It defines a compact productivity interface system using Roboto typography, blue-gray surfaces, cyan primary actions, semantic alerts, 20px icons, and compact controls.

No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Use a blue-gray neutral system for backgrounds, surfaces, strokes, and dark-mode containers.
- Use cyan as the primary action color:
  - Primary: `#03A9F4`
  - Primary hover: `#0288D1`
- Use semantic alert colors for info, error, success, and warning states.
- Use compact controls:
  - Inputs: `250x40px`
  - Primary buttons: `95x40px`
  - Secondary buttons: `73x30px`
  - Tags and statuses: `24px` high
- Use 20px icons throughout the product UI.
- Typography is primarily Roboto, with one label style also defined in Inter.
- Light and dark mode variants are explicitly provided for dropdowns, tags, statuses, alerts, checkboxes, switches, and inputs.

## Color palette

### Usage-ranked colors

The most-used extracted styles are listed first. Near-identical aliases are consolidated.

| Role | Color | Source usage |
|---|---|---:|
| High-emphasis text | `#000000DE` | 331 |
| Caption and secondary text | `#FFFFFFDE` | 230 raw uses |
| Blue-gray background / BG 04 | `#FFFFFF` | 153 |
| Blue-gray background / BG 07 | `#546E7A` | 153 |
| Surface | `#FFFFFF` | 109 |
| Medium-emphasis text | `#0000008A` | 59 |
| Primary | `#03A9F4` | 39 |
| Placeholder text | `#00000033` | 10 |
| Primary hover | `#0288D1` | 16 |
| Blue-gray highlight / BG 02 | `#E4EAEE` | 3 |
| Dark container / BG 12 | `#12191D` | 19 |
| Dark background / BG 10 | `#263238` | 15 |

### Blue-gray palette

| Token role | Color |
|---|---|
| BG 01 / background | `#F2F6F8` |
| BG 02 / highlight | `#E4EAEE` |
| BG 03 / strokes | `#FFFFFF` |
| BG 04 | `#FFFFFF` |
| BG 05 | `#78909C` |
| BG 06 | `#607D8B` |
| BG 07 | `#546E7A` |
| BG 08 | `#455A64` |
| BG 09 | `#37474F` |
| BG 10 | `#263238` |
| BG 11 | `#1D272C` |
| BG 12 | `#12191D` |
| Container background | `#F6F8FA` |
| Additional extracted blue-gray | `#375162` |
| Additional extracted blue-gray | `#B6CAD8` |
| Additional extracted neutral | `#C6D2D9` |

### Text and neutral colors

| Role | Color |
|---|---|
| High emphasis | `#000000DE` |
| Medium emphasis | `#0000008A` |
| Low emphasis | `#00000052` |
| Placeholder | `#00000033` |
| White text / surface | `#FFFFFF` |
| White emphasis | `#FFFFFFDE` |
| White medium emphasis | `#FFFFFF8A` |
| White low emphasis | `#FFFFFF52` |
| Neutral | `#C4C4C4` |
| Neutral | `#D9D9D9` |
| Neutral | `#DDDDDD` |

### Primary and basic colors

| Role | Color |
|---|---|
| Primary | `#03A9F4` |
| Primary hover | `#0288D1` |
| Marketplace primary | `#0A9AFF` |
| Red / error | `#F44336` |
| Orange / warning | `#FF9800` |
| Light green / success | `#8BC34A` |
| Brown | `#795548` |
| Cyan | `#00BCD4` |
| Deep orange | `#FF5722` |
| Indigo | `#3F51B5` |
| Amber | `#FFC107` |
| Deep purple | `#673AB7` |
| Purple | `#9C27B0` |
| Green | `#4CAF50` |
| Pink | `#E91E63` |
| Teal | `#009688` |

### Semantic alerts

#### Light mode

| State | Background | Text |
|---|---|---|
| Info | `#E1F5FE` | `#0277BD` |
| Error | `#FDD9D7` | `#7F231C` |
| Success | `#DBEFDC` | `#285B2A` |
| Warning | `#FFEACC` | `#854F00` |

#### Dark mode

| State | Background | Text |
|---|---|---|
| Info | `#01354D` | `#CDEEFD` |
| Error | `#551713` | `#FCCAC7` |
| Success | `#18381A` | `#CDE9CE` |
| Warning | `#523100` | `#FFE2B8` |

## Type scale

All tracking values are `0px`.

| Style | Font | Weight | Size | Line height |
|---|---|---:|---:|---:|
| H1 / Hero title | Roboto | 400 | `24px` | `34px` |
| H2 / Heading 2 | Roboto | 500 | `18px` | `27px` |
| Body 1 / Body text 1 | Roboto | 400 | `14px` | `21px` |
| Body 2 / Body text 2 | Roboto | 500 | `14px` | `21px` |
| Body text 3 | Roboto | 700 | `14px` | `21px` |
| Button | Roboto | 400 | `14px` | `auto` |
| Label | Roboto | 400 | `14px` | `16px` |
| Label | Inter | 400 | `14px` | `16px` |
| Label text 2 | Roboto | 700 | `14px` | `14px` |
| Caption | Roboto | 400 | `12px` | `128%` |
| Raw small text | Roboto | 400 | `10px` | Not specified |
| Raw text | Roboto | 400 | `20px` | Not specified |
| Raw text | Roboto | 400 | `20.59px` | Not specified |

Use uppercase text for the defined Button style.

## Spacing scale

No spacing variables were found in the source.

Observed component spacing values:

- `0px` padding and gap for icon-like controls and button shells.
- `10px` horizontal tag padding.
- `10px` tag gap.
- `4px` vertical status padding.
- `9px` checkbox and radio gap.
- `10px` alert gap.
- `16px 20px` alert padding.
- `10px` vertical and `0px` horizontal dropdown padding in one dark-mode variant.

## Radius scale

- `2px`: tags, statuses, and alerts.
- No radius variables were found.

## Elevation & effects

- Default shadow: none.
- Item hover: drop shadow `0 0 10px #0000001A`.
- Effect `01`: drop shadow `0 0 4px #00000040`.
- Large shadow: `0 5px 15px #0000001F` plus `0 15px 35px #3C425714`.

## Components

### Icons

All listed icon families use `20x20px` and fill `#FFFFFF`, except:

- Wallet: `20x19px`
- Tag-required: `20x22px`
- Clockout: `20.01x20px`
- Visible: `20.01x20px`

Available icon families include:

`Activities`, `Add`, `Add Required`, `Add-ons`, `Approvals`, `Arrow Down`, `Arrow Left`, `Arrow Right`, `Arrow Up`, `Attachment`, `Automatic Mode`, `Backspace`, `Billable`, `Bulk Edit`, `Calendar`, `Check_mark`, `Checkmark Green`, `Clients`, `Clockout`, `Close`, `Comfortable`, `Compact`, `Cup`, `Cup strikethrough`, `Dashboard`, `Delete`, `Download`, `Drag item`, `Drag resize`, `Duplicate`, `Edit`, `Emoji`, `Error`, `Estimate`, `Exit`, `Flag`, `Globe`, `Hamburger`, `Help`, `Info`, `Info_big`, `Invoices`, `Kiosk`, `Language`, `Launch`, `Live track`, `Loader`, `Locked`, `Loop`, `Loop smaller`, `Manual Mode`, `Maximise`, `Minimize`, `More`, `More smaller`, `Notes`, `Notifications`, `Pin`, `Play`, `Plugin`, `Print`, `Projects`, `Refresh`, `Remove`, `Reports`, `Resize`, `Save`, `Scheduling`, `Search`, `Search smaller`, `Settings`, `Share`, `Sort down`, `Sort none`, `Sort up`, `Star Outline`, `Stop`, `Subscription`, `Support`, `Tag`, `Tag-required`, `Tags`, `Team`, `Timesheet`, `Tracker`, `translate`, `Upgrade`, `Visible`, `Wallet`, `Workspaces`, `Zoom in`, `Zoom out`, `chat 11`.

### Buttons

| Family | Size | Text | Variants |
|---|---:|---|---|
| Primary | `95x40px` | Button, Roboto Regular `14px`, uppercase | `Primary normal`, `Primary hover`, `Primary Disabled` |
| Primary outline | `95x40px` | Button, Roboto Regular `14px`, uppercase | `Primary outline normal`, `Primary outline hover`, `Primary outline disabled` |
| Secondary | `73x30px` | Button, Roboto Regular `14px`, uppercase | `Secondary normal`, `Secondary hover`, `Secondary disabled` |
| Secondary outline | `73x30px` | Button, Roboto Regular `14px`, uppercase | `Secondary outline normal`, `Secondary outline hover` |

Button shells use `0px` padding and `0px` gap in the extracted specs.

### Inputs

All input variants are `250x40px`:

- `Input/Normal`
- `Input/Selected`
- `Input/Text field`
- `Input/Error`
- `Input/Success`
- `Input/Warning`

Light-mode inputs use Body 1 - 400, `14px`. Dark-mode inputs use Body text 1.

### Alerts

All alert variants are `262.5x50px`, radius `2px`, width fill, fixed height, padding `16px 20px`, and gap `10px`:

- `Alerts/Info`
- `Alerts/Success`
- `Alerts/Warning`
- `Alerts/Danger`

Light and dark mode variants use the corresponding semantic alert palette.

### Tags

All tag variants are `24px` high, radius `2px`, horizontal layout, centered alignment, `0 10px` padding, and `10px` gap:

- `Tag/Default`: `44x24px`
- `Tag/With close`: `70x24px`
- `Tag/Dropdown`: `74x24px`

Light mode uses the light info alert background. Dark mode uses the dark info alert background. Text uses Label - lower line height.

### Statuses

Status variants are `61x24px`:

- `Status/Approved`
- `Status/Ghost`
- `Status/Withdrawn`
- `Status/Pending`
- `Status/Rejected`

Light-mode styled statuses use radius `2px`, padding `4px 10px`, and `10px` gap where specified. Approved uses the light success alert background. Ghost uses `#E4EAEE`. Withdrawn uses `#FFFFFF`.

### Selection controls

- Check box variants: `Mix`, `Hover`, `Checked`, `Unchecked`.
- Radio buttons variants: `Hover`, `Checked`, `Unchecked`.
- Checkbox and radio layouts use `16px` height, `9px` gap, and Label - lower line height.
- Switch:
  - Light mode: `82x16px`, `0px` gap.
  - Dark mode: `82x16px`, `10px` gap.

### Dropdowns and loaders

- `Select - v1/With left icon`: `250x40px`, Body 1 - 400, `14px`.
- Dark-mode dropdown menu:
  - `250x220px`, vertical layout, `10px` top and bottom padding, `0px` gap.
  - `250x232px`, vertical layout, `0px` padding, `-10px` gap, Item hover effect.
- Loader variants:
  - Tree rows: `260x100px`.
  - Two rows: `260x100px`.
- Loader text may use H2 - 500, `18px`, Body 1 - 400, `14px`, or Roboto Regular `18px`.

### Toasts and badges

- Toast messages: `262.5x51px`, fixed width and height, Body 1 - 400, `14px`.
- Badge: `107x54px`, fixed size, zero padding and gap, white fill, Roboto Regular `35px`.
- Add-ons, navigation, productivity, and utility families are represented by the icon families listed above.

## Screen patterns

- **Introduction:** Design-system overview and usage context.
- **Colors:** Primary, blue-gray, basic, text, surface, and semantic alert palettes.
- **Typography:** Roboto hierarchy from `10px` through `24px`, with compact labels, body styles, buttons, captions, and headings.
- **Icons:** Predominantly `20x20px` white icon components covering navigation, actions, tracking, projects, reports, settings, and productivity workflows.
- **UI Elements - Light mode:** Inputs, buttons, tags, statuses, alerts, checkboxes, radio buttons, switches, loaders, selects, and toasts.
- **UI Elements - Dark mode:** Dark-mode dropdowns, tags, statuses, alerts, checkboxes, switches, and inputs using dark blue-gray surfaces and dark semantic alert colors.
- **Cover and separator pages:** No implementation patterns extracted.

## Notes for implementers

- Use only the named color tokens and aliases documented here; consolidate duplicate aliases to the same hex value.
- Prefer the usage-ranked colors for default text, surfaces, and backgrounds.
- Use `#03A9F4` for normal primary actions and `#0288D1` for primary hover states.
- Use semantic alert background/text pairs together; do not mix light and dark mode pairs.
- Treat `20x20px` as the default icon box unless a specific icon exception is listed.
- Preserve the exact control dimensions where specified.
- Apply `2px` radius to tags, statuses, and alerts.
- Use Roboto unless the component explicitly calls for Inter labels.
- The source contains no spacing, radius, motion, or grid variable collections; do not infer additional scales.
