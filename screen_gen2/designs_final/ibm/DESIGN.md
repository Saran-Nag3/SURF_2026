---
name: ibm-carbon-design-system-community
source: IBM Carbon Design System (Community)
kind: design-system-context
---

# ibm - Design System

## Overview

IBM Carbon Design System Community extraction covering 46 Figma pages, including foundational elements, form controls, navigation, data display, feedback, overlays, tabs, tags, toggles, tooltips, and icons.

No local variable collections, spacing variables, motion variables, or grid styles were found.

## Design language

- **Typography:** IBM Plex Sans is the primary UI typeface. IBM Plex Mono is used for code.
- **Visual character:** Functional, structured, high-contrast, and compact. Components use rectangular geometry, minimal rounding, strong interaction states, and clear semantic colors.
- **Layout:** Components commonly use fixed-height controls with horizontal alignment and compact spacing. Groups and page-level structures use vertical or horizontal layouts with explicit gaps.
- **Interaction states:** Components commonly expose Default, Hover, Active, Focus, Disabled, Error, Warning, Selected, Open, and Skeleton variants.
- **Focus:** Focus uses a 2px `#FFFFFF` focus stroke on button components. An inner focus effect uses `#FFFFFF`.

## Color palette

### Core colors, ranked by raw usage

| Color | Raw usage | Primary use |
|---|---:|---|
| `#000000` | 29,561 | Raw extraction color; use only where a source element explicitly requires it |
| `#8E93FF` | 9,508 | Raw extraction color |
| `#E0E0E0` | 7,583 | Borders, selected layers, accent layers |
| `#5539E6` | 2,380 | Raw extraction color |
| `#626262` | 1,771 | Raw extraction color |
| `#FFFFFF` | 1,748 | Backgrounds, on-color text and icons |
| `#161616` | 659 | Primary text and icons |
| `#222323` | 654 | Raw extraction color |
| `#F4F4F4` | 521 | Primary field and layer backgrounds |

### Semantic palette

- **Primary text and icon:** `#161616`
- **Secondary text and icon:** `#525252`
- **Helper text:** `#6F6F6F`
- **Placeholder text:** `#A8A8A8`
- **Disabled text, borders, and button background:** `#C6C6C6`
- **On-color text and icon:** `#FFFFFF`
- **Primary action and interactive border:** `#0F62FE`
- **Primary action hover:** `#0353E9`
- **Primary action active:** `#002D9C`
- **Secondary action hover:** `#4C4C4C`
- **Secondary action active:** `#6F6F6F`
- **Tertiary action:** `#0F62FE`
- **Tertiary hover:** `#0353E9`
- **Tertiary active:** `#002D9C`
- **Danger:** `#DA1E28`
- **Danger hover:** `#BA1B23`
- **Danger active:** `#750E13`
- **Success:** `#24A148`
- **Success inverse:** `#42BE65`
- **Warning:** `#F1C21B`
- **Info background and support info:** `#EDF5FF`
- **Info inverse:** `#4589FF`
- **Error inverse:** `#FA4D56`
- **Error notification background:** `#FFF1F1`
- **Warning notification background:** `#FFF8E1`
- **Success notification background:** `#DEFBE6`
- **Skeleton background:** `#E5E5E5`
- **Skeleton element:** `#C6C6C6`
- **Default background and layer 02:** `#FFFFFF`
- **Layer and field 01/03:** `#F4F4F4`
- **Hover layer and field:** `#E5E5E5`
- **Selected layer and subtle borders:** `#E0E0E0`
- **Inverse background:** `#393939`
- **Inverse background hover:** `#4C4C4C`
- **Overlay:** `#16161680`
- **Visited link:** `#8A3FFC`
- **Inverse link:** `#78A9FF`
- **Secondary link:** `#0043CE`
- **Highlight:** `#D0E2FF`

## Type scale

All listed typography uses the stated font family, weight, size, line height, and tracking.

| Token | Family | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| `headings/heading-03` | IBM Plex Sans | 400 | 20px / 28px | 0px |
| `body/body-compact-02` | IBM Plex Sans | 400 | 16px / 22px | 0px |
| `body/body-compact-02 (link)` | IBM Plex Sans | 400 | 16px / 22px | 0px |
| `body/body-01` | IBM Plex Sans | 400 | 14px / 20px | 0.16px |
| `body/body-compact-01` | IBM Plex Sans | 400 | 14px / 18px | 0.16px |
| `body/body-compact-01 (link)` | IBM Plex Sans | 400 | 14px / 18px | 0.16px |
| `headings/heading-compact-01` | IBM Plex Sans | 600 | 14px / 18px | 0.16px |
| `productive/code-02` | IBM Plex Mono | 400 | 14px / 20px | 0.32px |
| `productive/code-01` | IBM Plex Mono | 400 | 12px / 16px | 0.32px |
| `productive/label-01` | IBM Plex Sans | 400 | 12px / 16px | 0.32px |
| `productive/helper-text-01` | IBM Plex Sans | 400 | 12px / 16px | 0.32px |
| `productive/helper-text-01 (link)` | IBM Plex Sans | 400 | 12px / 16px | 0.32px |

Raw extraction also includes SF Pro Text Regular and Medium at 14px, Password Dots at 14px, and IBM Plex Sans variants at 12px, 14px, and 16px.

## Spacing scale

_No spacing variables found in source._

Component spacing values explicitly present:

- `0px`
- `1px`
- `8px`
- `15px`
- `16px`
- `24px`
- `32px`

Examples include 8px gaps in breadcrumbs and checkbox groups, 16px button padding, 32px button content gaps, and `16px 16px 24px 16px` title padding.

## Radius scale

_No radius variables found in source._

Component-specific radius values:

- `0px`
- `4px`
- `0/4/4/0px`

`Code Snippet Inline` uses a 4px radius. `Content Switcher Item` uses `0/4/4/0px` depending on section.

## Elevation & effects

- **Drop shadow:** offset `0 2`, color `#0000004D`, style `drop_shadow 6px`.
- **Inner focus:** offset `0 0`, color `#FFFFFF`, style `inner_shadow`.
- **Button focus:** 2px `#FFFFFF` focus stroke.
- **Overlay:** `#16161680`.
- No motion tokens were found.

## Components

### Actions

- `Button 01 Primary`: 124x48px; padding `15px 16px`; gap `32px`; primary fill; 2px focus stroke; supports Default, Hover, Active, Focus, Disabled, Danger, text, and icon variants.
- `Button 02 Secondary`: 124x48px; padding `15px 16px`; gap `32px`; secondary fill; 2px focus stroke and inner focus.
- `Button 03 Tertiary`: 124x48px; padding `15px 16px`; gap `32px`; tertiary fill; 2px focus stroke and inner focus.
- `Button 04 Ghost`: 76x48px; padding `15px 16px`; gap `8px`; 2px focus stroke and inner focus.
- `Button 05 Skeleton`: 124x48px.
- Expressive button variants use 48px height, `13px 16px` padding, and `body/body-compact-02`.
- `Button Group Default`: 1024x48px; 1px gap; horizontal or vertical; 1–7 items.
- `Expressive Button Group`: 1024x46px; 1px gap; horizontal or vertical; 1–7 items.
- `.Base Action Button`, `.Base Interactive Button`, `.Base Icon Button`, `Overflow Menu Button`, `Icon Button Tooltip`.

### Navigation

- `Breadcrumb Group`: 360x18px; horizontal; 8px gap; 1–5 items.
- `Breadcrumb Item`: 85x18px; horizontal; 1px left padding.
- `.Base Breadcrumb Overflow`: 35x18px; open and closed states.
- `Accordion Group`, `Accordion Item`, `Accordion Skeleton`.
- `Container Tab`, `Container Tab Group`, `Line Tab`, `Line Tab Group`, and skeleton variants.
- `Content Switcher Group`: 504x40px; horizontal; 2–5 items.
- `Content Switcher Item`: 126x40px; selected, disabled, hover, and positional section variants.

### Forms and selection

- `Checkbox Group`, `Checkbox Item`, `Checkbox Skeleton`.
- `Radio Button Group`, `Radio Button Item`, and skeleton variants.
- `Combobox Default`, `Combobox Error`, `Combobox Warning`.
- `Dropdown Default`, `Dropdown Error`, `Dropdown Warning`, `Dropdown Skeleton`.
- `Select Default`, `Select Error`, `Select Warning`.
- `Select Inline Default`, `Select Inline Error`, `Select Inline Warning`.
- `Multiselect Default`, `Multiselect Error`, `Multiselect Warning`.
- `Multiselect filterable Default`, `Multiselect filterable Error`, `Multiselect filterable Warning`.
- `Inline Multiselect Default`, `Inline Multiselect Error`, `Inline Multiselect Warning`.
- `Text Input`, `Text Input Error`, `Text Input Warning`, `Text Input Skeleton`.
- `Password Input`, `Password Input Error`, `Password Input Skeleton`.
- `Text Area`, `Text Area Error`, `Text Area Skeleton`.
- `Number Input Default`, `Number Input Error`, `Number Input Warning`, `Number Input Read only`, `Number Input Skeleton`.
- `Toggle`, `Toggle small`.
- `Slider`, `Slider Skeleton`, `.Base Slider Handle`, `.Base Slider Number Input`.

### Data display

- `Starter Table`, `Regular Column`, `First Column`, `Cell`, `First Cell`, `Header`, `Title`, `Toolbar`, `Action Bar`.
- `Structured List Header`, `Structured List Header Row`, `Structured List Cell Simple`, `Structured List Cell Selection`, `Structured List Selectable Row`, `Structured List Skeleton`.
- `Table Pagination Advanced`, `Table Pagination Simple`, `Table Pagination Unbound`, `Standalone Pagination`.
- `.Base Pagination Number Item`, `.Base Pagination Number Overflow`, `.Base Pagination Select Input`.
- `List`, `List Item`, `Definition Link`, `Definition Tooltip`.

### Feedback and status

- `Inline Loading`, `Inline Loading Interactive`, `Loading Spinner`, `.Base Loading Spinner`.
- `Inline Notification`, `Toast Notification`.
- `Progress Indicator Group`, `Progress Indicator Step Horizontal`, `Progress Indicator Step Vertical`, `.Base Progress Indicator Step Text`.
- `Progress Indicator Skeleton`, `Progress Indicator Skeleton Group`.
- `Tag`, `Tag Skeleton`.
- `Popover No tip`, `Popover Tab tip`, `Popover Caret tip`.
- `Standard Tooltip`, `Icon with Tooltip`, `Icon Button with Tooltip`, `Icon Button Tooltip`, `Toggletip`, `Toggletip Interactive`.

### Overlays and file handling

- `Modal 01 Transactional`, `Modal 02 Passive`, `Modal 03 Danger`.
- `File Uploader`, `File Uploader Drop Container`, `File Uploader Item`, `File Uploader Skeleton`.
- `Search`, `Search Skeleton`.
- `Overflow Menu`, `Overflow Menu Option`.
- `.Base Close Button`, `.Base Button Close`, `.base Show Hide Button`.

### Code and utility components

- `Code Snippet Inline`: 69x20px; 4px radius; `0 8px` horizontal padding.
- `Code Snippet Singleline`: 640x40px.
- `Code Snippet Multiline`: 640x192px.
- Singleline and multiline skeleton variants.
- `tile`, `.component-images`, `.Documentation Label`, `.Documentation PostIt`.
- Browser UI components: `.BrowserUI Select Dropdown`, `.BrowserUI Select Dropdown Option`, `.BrowserUI Text Area Corner Handle`.

### Icons

Available icon families include `add`, `subtract`, `arrow--down`, `arrow--up`, `arrows`, `calendar`, `caret--down`, `caret--left`, `caret--right`, `caret--up`, `checkbox`, `checkbox--checked--filled`, `checkbox--undeterminate--filled`, `checkmark`, `checkmark--filled`, `checkmark--outline`, `chevron--down`, `chevron--left`, `chevron--right`, `chevron--up`, `circle--fill`, `circle--filled`, `circle-dash`, `close`, `copy`, `delete`, `edit`, `edit--off`, `error--filled`, `filter`, `incomplete`, `information`, `information--filled`, `information--square`, `information--square--filled`, `menu`, `overflow-menu--horizontal`, `overflow-menu--vertical`, `radio-button`, `radio-button--checked`, `radio-button--focus`, `search`, `settings`, `settings--adjust`, `tag`, `view`, `view--off`, `warning`, `warning--alt--filled`, `warning--filled`.

## Screen patterns

- **Foundations:** Cover, Elements, Grid, and Overview establish the system language and layout foundations.
- **Form workflows:** Form controls are organized around labeled fields, helper text, error and warning states, selection controls, date entry, text entry, and file upload.
- **Data-heavy screens:** Data table, structured list, pagination, toolbar, title, and action bar components support dense information layouts.
- **Navigation:** Breadcrumbs, tabs, content switchers, accordions, overflow menus, and pagination provide hierarchical and sectional navigation.
- **Feedback:** Loading, inline notifications, toast notifications, progress indicators, tags, tooltips, toggletips, popovers, and modals communicate system status and actions.
- **Date workflows:** Date picker components combine date navigation, calendar day selection, month navigation, and year navigation.
- **Icon and supporting material:** `ZZ_Icons` and `ZZ_Other Base Components` contain the icon set and base/documentation components.
- **UI Shell:** The source lists UI Shell as TBD; no extracted screen pattern was provided.

## Notes for implementers

- Use only the named component families and their documented variants.
- Prefer semantic color roles over raw colors when implementing components.
- Use IBM Plex Sans for interface text and IBM Plex Mono for code.
- Preserve the documented 12px, 14px, 16px, and 20px type levels with their associated line heights and tracking.
- Do not infer a global spacing or radius scale; only use the explicit component values.
- Preserve component state variants such as Hover, Active, Focus, Disabled, Error, Warning, Selected, Open, and Skeleton.
- Use the documented 2px `#FFFFFF` focus treatment where specified.
- Use `#E5E5E5` for skeleton backgrounds and `#C6C6C6` for skeleton elements.
- Use `#16161680` only for overlays and `#0000004D` for the documented drop shadow.
- The extraction contains raw colors and raw typography outside the semantic token set; use them only when the corresponding source element explicitly requires them.
