---
name: wet-and-canada-ca-design-system-kit-boew-et-trousse-du-syst-me-de-conception-de-canada-ca-community
source: WET and Canada.ca Design System Kit / BOEW et Trousse du système de conception de Canada.ca (Community)
kind: design-system-context
---

# ca - Design System

## Overview

Canada.ca and WET community design system covering typography, colours, page layouts, navigation, forms, feedback, tables, pagination, tabs, toggles, panels, modals, meters, labels, badges, filters, and wells. The extraction contains 27 Figma pages, including bilingual component and documentation pages.

No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Government-oriented, content-first interface with strong navigation hierarchy and restrained neutral surfaces.
- Primary type pairing:
  - Lato Bold for headings.
  - Noto Sans for body, labels, and utility text.
  - Inter appears in two medium text styles.
- Common text colours include `#333333`, `#343741`, `#1A1C21`, `#284162`, and `#26374A`.
- Links use `#284162` by default, `#0535D2` when selected, and `#7834BC` when visited.
- Controls use compact 39–40px input and button heights, 4px control radii, light borders, and subtle shadows.
- Layouts use fixed reference widths of 1170px for global shell elements and 1588px for the basic page layout.
- Feedback states use pale fills:
  - Danger: `#F3E9E8`
  - Warning: `#F9F4D4`
  - Info: `#DFF9FE`
  - Success: `#DDEDCD`
  - Primary: `#E8F2F4`
  - Default: `#EEEEEE`

## Color palette

### Highest-use raw colours

| Colour | Uses |
|---|---:|
| `#FFFFFF` | 259 |
| `#F9F9F9` | 229 |
| `#335075` | 155 |
| `#757575` | 117 |
| `#000000` | 100 |
| `#00000080` | 85 |
| `#DCDEE1` | 61 |
| `#7B61FF` | 58 |
| `#AAAAAA` | 58 |
| `#5C5C5C` | 49 |
| `#CECFD0` | 45 |
| `#CCCCCC` | 39 |
| `#D8D8D8` | 34 |
| `#EBF2FC` | 31 |
| `#2572B4` | 29 |
| `#E1E4E7` | 28 |
| `#444444` | 26 |
| `#0F172A` | 24 |
| `#6F6F6F` | 20 |
| `#333333` | 15 |
| `#295376` | 14 |
| `#C0C3C9` | 14 |
| `#D4D6DA` | 14 |
| `#E2E2E2` | 14 |
| `#111111` | 12 |
| `#979797` | 12 |
| `#EAEBED` | 11 |
| `#FF0000` | 11 |
| `#FFFFFF4D` | 11 |
| `#D9D9D9` | 9 |
| `#E3E3E3` | 9 |

### Semantic colours

- Default text: `#333333`
- Secondary text: `#979797`, `#6F6F6F`
- Accent: `#26374A`
- Label default: `#26374A`, with an alternate `#FFFFFF`
- Link default: `#284162`
- Link selected: `#0535D2`
- Link visited: `#7834BC`
- Black: `#000000`, `#0F172A`
- White: `#FFFFFF`
- Light gray: `#F8F8F8`
- Gray: `#EAEBED`
- Default border: `#F8F8F8`, with an alternate `#FFFFFF`
- Form error: `#D3080C`
- Success accent: `#318000`
- Meter yellow: `#FFB900`
- Meter green: `#107C10`

### Indicator fills

- Danger: `#F3E9E8`
- Warning: `#F9F4D4`
- Info: `#DFF9FE`
- Success: `#DDEDCD`
- Primary: `#E8F2F4`
- Default: `#EEEEEE`

## Type scale

All extracted typography has `0px` tracking unless otherwise noted. Line height is `auto` unless specified.

| Style | Family and weight | Size | Line height |
|---|---|---:|---:|
| Desktop H1 | Lato Bold 700 | 38px | auto |
| Desktop H2 | Lato Bold 700 | 36px | auto |
| Smaller-device H1 | Lato Bold 700 | 34px | auto |
| Inter Heading 1 | Inter Bold 700 | 34px | 40px |
| Smaller-device H2 | Lato Bold 700 | 32px | auto |
| Desktop H3 | Lato Bold 700 | 24px | auto |
| Desktop H4 | Lato Bold 700 | 22px | auto |
| Desktop H5 | Lato Bold 700 | 20px | auto |
| Desktop Body | Noto Sans Regular 400 | 20px | auto |
| Desktop H6 | Lato Regular 400 | 19px | auto |
| Button Label Super | Lato Medium 500 | 18px | auto |
| Button Label | Lato Medium 500 | 16px | auto |
| Button Label with Link | Lato Medium 500 | 16px | 20px |
| Desktop Body Small | Noto Sans Regular 400 | 16px | auto |
| Desktop Body Small Bold | Noto Sans Bold 700 | 16px | auto |
| Inter Paragraph Bold | Inter Bold 700 | 16px | 24px |
| Label Default | Noto Sans Bold 700 | 15px | auto |
| Body Extra Small | Noto Sans Regular 400 | 14px | auto |
| Raw small text | Noto Sans Light 400, Noto Sans SemiBold 600 | 12px | not specified |

Additional raw sizes include Lato Bold 64px, Noto Sans Bold and Regular 42px, Noto Sans Bold 24px, Noto Sans Bold/Medium/Regular 20px, and 14px styles in Inter, Lato, and Noto Sans.

## Spacing scale

No spacing variables were found. Use component-specific spacing from the extraction:

- Common control padding: `9px 12px 8px 12px` for input bases.
- Button padding: `10px 14px 10px 14px`.
- Filter header padding: `10px 14px 10px 14px`.
- Filter options padding: `10px 10px 10px 18px`.
- Footer navigation padding: `32px 28px 38px 28px`.
- Page body padding: `0px 15px 0px 15px`.
- Calendar dropdown padding: `12px 14px 12px 14px`.
- Common control gaps: `4px`, `8px`, `10px`, `12px`, `14px`, `16px`, `18px`, `24px`, `27px`, `42px`, `94px`.

## Radius scale

Extracted radii:

- `2px`: Calendar Dropdown
- `4px`: Button, input bases, List Group, Panel, Pagination button
- `10px`: Custom Tag
- `12px`: Badge
- `50px`: Meter
- `4px / 0px / 0px / 4px`: `_Pagination Button`
- No global radius scale was defined.

## Elevation & effects

- Input box: inner shadow, offset `0px 1px`, colour `#0000001A`.
- Input focus: input box shadow plus drop shadow, offset `0px 0px`, colour `#88C3F580`, with `6px` spread.
- Table row border top: inner shadow, offset `0px 1px`, colour `#DBDBDB`.
- Light bottom border: inner shadow, offset `0px -1px`, colour `#DDDDDD`.
- Button light: drop shadow offset `0.75px 0.75px`, colour `#8A8A8A`; inner shadow offset `0.5px 0.5px`, colour `#00000026`.
- Button: drop shadow offset `0.75px 0.75px`, colour `#333333`; inner shadow offset `0.5px 0.5px`, colour `#00000026`.
- Dropdown shadow:
  - Drop shadow offset `1px 0px`, colour `#00000026`.
  - Drop shadow offset `-1px 0px`, colour `#00000040`.
  - Drop shadow offset `0px 5px`, colour `#00000026`.
- Tabs top/right/bottom border: inner shadows at `0px 1px`, `0px -1px`, and `0px -1px`, colour `#CECFD0`.
- Tabs left/right/bottom border: inner shadows at `1px 0px`, `-1px 0px`, and `0px -1px`, colour `#CECFD0`.
- Right / 2px: drop shadow offset `2px 2px`, colour `#090B37`.
- Shadow/Medium:
  - Drop shadow offset `0px 15px`, colour `#0000000A`.
  - Drop shadow offset `0px 5.7px`, colour `#0000000D`.
  - Drop shadow offset `0px 2.6px`, colour `#0000000F`.
  - Drop shadow offset `0px 0.9px`, colour `#00000014`.

## Components

### Shell and page layout

- **Global Header**: `1170px × 228.71px`, vertical, top padding `12px`, includes 16px regular, 12px light, 16px bold, and 24px bold Noto Sans.
- **Top Bar**: `1170px × 75.71px`, vertical, white fill, 16px Noto Sans; variants: Default, With Search Bar.
- **App Bar**: `1170px × 49px`, horizontal, accent fill `#26374A`, 10px gap, centered; variants: Default, Sign in.
- **Custom Menu**: `1170px × 50px`, horizontal, fill `#E1E4E7`, border `#D8D8D8`, 16px Noto Sans Bold.
- **Page Body**: `1170px × 42px`, horizontal padding `15px`, 16px body-small text.
- **Basic Page Layout**: `1588px × 462.71px`.
- **Custom Page**: `949px × 909px`, vertical gap `42px`.
- **Heading 1**: `300px × 54px`, bottom padding `8px`, gap `8px`, H1 typography, bottom effect `#AF3C43`.
- **Global Footer**: `1170px × 172px`.
- **Footer Navigation Menu**: `1170px × 108px`, light-gray fill `#F8F8F8`, padding `32px 28px 38px 28px`, gap `94px`.
- **Subfooter links**: `378px × 19px`, gap `12px`.

### Feedback and status

- **Alert (Old)**: `380px × 82px`, horizontal, right padding `16px`, gap `16px`; variants Danger, Info, Success, Warning; title and dismissible options; Default and Old versions.
- **Badge**: `31px × 25px`, radius `12px`, padding `3px 7px 3px 7px`, fill `#767677`; Inverted and Normal modes.
- **Label**: `79px × 31.5px`, right padding `9px`, gap `14px`, default indicator fill `#EEEEEE`; variants Danger, Default, Information, Primary, Success, Warning.
- **Meter**: `272px × 14px`, radius `50px`, light-gray fill `#F8F8F8`, border `#F8F8F8`; meter colours include `#FFB900` and `#107C10`.
- **Panel**: `295px × 172px`, radius `4px`, 1px dark-gray border, variants Default, Info, Primary, Success, Variant7, Warning.
- **Well**: component family present; no detailed spec was included in the extracted portion.
- **Modal**: `313px × 185px`, vertical, includes button label, body-small, and H5 text.

### Buttons and icons

- **Button**: `166.98px × 39px`, radius `4px`, padding `10px 14px 10px 14px`, gap `8px`, accent fill, button effect; variants Danger, Link, Primary, Secondary, Supertask, Warning and states Default, Disabled, Hover.
- **Button (Dep)**: `110.99px × 39px`, same 4px radius and button effect; variants Danger, Link, Primary, Secondary, Super task, Warning; textual type.
- **Sized Button**: `132px × 39px`; sizes Default, Extra Small, Large, Small.
- **Share Widget**: `158.99px × 39px`; Button and Link types.
- **Icons**: standard icons are `24px × 24px`, including Add, Minus, chevrons, arrows, eye states, NewWindow, File, LogIn, LogOut, Check, Refresh, filters, Edit, Share, Calendar, Trash, Download, Cross, Close, Danger, Warning, Info, and Search.
- **Icons (dep)**: `15.99px × 16.02px`, white fill, with Add, Arrow right, Calendar, Check, Chevron Right, Close, Cross, Danger, Dropdown, Edit, Export, Filter, Filter-Off, Info, Plus, Refresh, Search, Share, Trash, Warning, checkmark, and small checkmark variants.
- **Icon (dep)**: `19.99px × 20.02px`, padding `2px`, white fill.
- **_Button Content**: `30px × 19px`, gap `8px`; icon positions Both, Icon Only, Left, No Icon, Right.

### Forms and filters

- **Input**: `287.99px × 65px`, vertical or horizontal alignment, gap `4px`; optional description, label, and button.
- **Text Input (Base)**: `240px × 39px`, radius `4px`, padding `9px 12px 8px 12px`, border `#CCCCCC`, input-box effect; statuses Default, Disabled, DisabledNoText, Filled; optional clearable.
- **Select Input**: `252px × 66.41px`; optional description and default label.
- **_Select Input (Base)**: `240px × 40.41px`, radius `4px`, border `#CCCCCC`; states Default, Disabled, Filled; focused option.
- **Date Picker Input**: `240px × 65px`; optional description and label.
- **_Date Picker Input (Base)**: `240px × 39px`, radius `4px`, border `#CCCCCC`; states Default, Disabled, Filled; focused option.
- **Text Area**: `180px × 126px`; optional description.
- **_Text Area (Base)**: `180px × 100px`, radius `4px`, padding `9px 12px 8px 12px`, border `#CCCCCC`; statuses Default, Disabled, Filled; optional clearable.
- **Checkbox**: `17px × 17px`, padding `2px`, states unchecked, checked, disabled.
- **Radio**: `17px × 17px`, padding `2px`, selected and unselected.
- **Option**: `141px × 22px`, gap `6px`, Checkbox or Radio type.
- **Filter**: `259px × 231px`; collapsed or expanded.
- **_Filter Header**: `259px × 42px`, light-gray fill `#F8F8F8`, gray border `#EAEBED`, padding `10px 14px 10px 14px`, gap `27px`.
- **_Filter Options**: `232px × 339px`, white fill, gray border, padding `10px 10px 10px 18px`, gap `8px`.
- **Calendar Dropdown**: `223px × 279px`, radius `2px`, padding `12px 14px 12px 14px`, white fill, dropdown shadow.
- **_Select Dropdown**: `211px × 192px`, white fill, dropdown shadow.
- **_Select Option**: `72px × 24px`, padding `1px 10px 1px 10px`, states Default, Hover, Selected.
- **Custom Tag**: `36px × 25px`, radius `10px`, padding `4px 8px 5px 8px`, fill `#E2E2E2`, 12px Noto Sans SemiBold.
- **Custom Tag List**: `120px × 25px`, gap `6px`.

### Navigation

- **Breadcrumbs**: `362px × 22px`, horizontal gap `18px`, 16px regular and 12px light Noto Sans.
- **_Breadcrumb Item**: `63px × 22px`, gap `18px`; last-item variant.
- **List Group**: `323px × 424px`, radius `4px`, white fill, `#DDDDDD` border.
- **_List Group Item**: `323px × 53px`, padding `10px 15px 10px 15px`, white fill, bottom-border effect; Active/Default, Badge, and Header variants.
- **Submenu**: `131px × 198px`, fill `#C9CFD4`, bottom padding `6px`, inner shadow using `#26374A`.
- **_Submenu Item**: `118px × 32px`, fill `#C9CFD4`, padding `5px 25px 5px 10px`; Default, Hover, Selected.
- **_Menu Item**: `97px × 50px`, fill `#E1E4E7`, border `#D8D8D8`, padding `14px 12px 14px 12px`; Hover, Selected, Expandable variants.
- **MenuItem**: Primary and Nested variants are present. Nested is `165px × 36px`, white fill, border `#CECFD0`; Primary is `184px × 38px`.
- **Navigation families**: MenuItem, Submenu, Custom Menu, Breadcrumbs, Footer Navigation Menu, Global Header, Top Bar, and App Bar.

### Tabs, tables, and pagination

- **Pagination**: `513px × 47px`, horizontal; optional first and last buttons.
- **_Pagination Page Button**: `44px × 47px`, padding `10px 16px 10px 16px`, gray fill `#EAEBED`, border `#DCDEE1`; hover and active states.
- **_Pagination Button**: `143px × 47px`, padding `10px 16px 10px 16px`, gray fill `#EAEBED`, border `#DCDEE1`; First, Last, Next, Previous variants.
- **Tabs Layout** and **Tabs Layout-Vertical** are present with tab groups, headers, bodies, and individual tab variants.
- Tabs use `#CECFD0` inner-shadow borders for top/right/bottom and left/right/bottom configurations.
- **Data Table**, **Table Main**, **Table Top**, **Custom Body Row**, **_Body Row**, **_Body Cell**, **_Header Row**, **_Header Cell**, and **_Sorter** families are present.
- Table rows use a top border effect with `#DBDBDB`.
- **Entries Info**, **Show entries**, and **Filter Search** support table controls.

### Text and utility components

- **Text with Description** and **_Text Content** support descriptive form and content patterns.
- **Toggle** and **Toggle Header** are present with `_Label` and `_Toggle Body` subcomponents.
- **Heading 1**, **Label**, **Badge**, **Share Widget**, **Alert (Old)**, **Meter**, **Modal**, and **Well** support content status and utility patterns.
- **_To Do Item**: `504px × 67px`, horizontal, padding `20px 24px 20px 24px`, gap `24px`, white fill, 2px border; Done, Not doing, and To Do statuses.

## Screen patterns

- **Global shell**: Global Header → Top Bar/App Bar → Custom Menu or navigation → Page Body → Global Footer.
- **Content page**: fixed content area with Heading 1, body text, optional Panel, Alert, Well, or Share Widget.
- **Form page**: labels and descriptions paired with Text Input, Select Input, Date Picker Input, Text Area, Checkbox, Radio, and Button controls.
- **Filtering and results**: Filter with header and options beside a Data Table; table controls include Filter Search, Show entries, Entries Info, and Pagination.
- **Navigation-heavy page**: Breadcrumbs followed by List Group, Submenu, Custom Menu, or tabbed content.
- **Tabbed content**: Tabs Layout or Tabs Layout-Vertical with tab header, tab group, tab body, and optional panels or forms.
- **Status and progress**: Alert, Label, Badge, Meter, Panel, and Modal communicate feedback, state, progress, or confirmation.
- **Documentation and contribution pages**: the source includes Cover, Getting Started, Contributions, Organization, Backlog & Changelog, Styles & Layout, Page Layouts, and component-specific documentation pages.

## Notes for implementers

- Treat component dimensions as extracted reference sizes, not responsive rules; no responsive token system was provided.
- Preserve the named component variants and states, especially Default, Disabled, Hover, Focused, Selected, Active, Filled, Collapsed, Dismissible, and Expanded states.
- Use semantic colours where available before raw colours.
- Use `#CCCCCC` for the 1px borders on input bases and the extracted input-box effect for inputs.
- Use Lato for headings and button labels; use Noto Sans for body, labels, navigation, and utility text unless a component explicitly specifies another family.
- Do not infer spacing, radius, motion, grid, or dark-gray values where the source marks them as absent.
- The source contains both current and deprecated families, including Button (Dep), Icons (dep), and Icon (dep); use the non-deprecated family when both are available.
- The extraction contains bilingual English/French page names, but no separate bilingual typography or colour tokens were defined.
