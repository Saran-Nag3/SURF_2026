---
name: aura-vaadin-design-system-community
source: Aura / Vaadin Design System (Community)
kind: design-system-context
---

# aura - Design System

## Overview

Aura is a Vaadin design system community file covering foundations, icons, form controls, navigation, overlays, data grids, messaging, layouts, and application patterns. The source contains 42 pages, including Colors, Typography, Styles, Icons, Accordion & Details, Avatar, Badge, Button, Card, CRUD, Checkbox, Combo Box & Select, Context Menu, Cookie Consent, Custom Field, Dashboard, Date Picker, Date Time Picker, Dialogs, Grid, List Box, Login, Map, Master Detail Layout, Menu Bar, Messages, Notification, Popover, Progress Bar, Radio button, Rich Text Editor, Side Navigation, Split Layout, Tabs, Text Field, Time picker, Tooltip, and Upload.

No local variable collections, paint styles, color variables, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Primary typeface: Instrument Sans.
- Supporting typeface found in raw typography: Inter Regular, 16px and Inter Regular, 12px.
- Default component text is compact, predominantly 14px with 20px line height.
- Common controls use 34px height, 9px radius for filled buttons and overlays, and 15px radius for cards, dialogs, dashboards, and login overlays.
- Overlays use translucent white `#FFFFFFD9`, border `#03030314`, background blur of 20px, and shadow effects.
- Component variants frequently cover default, selected, disabled, invalid, opened, read-only, filled, outlined, elevated, and flat states.
- Icon assets are generally 20×20px.

## Color palette

Ranked by raw usage count:

| Color | Raw uses |
|---|---:|
| `#9747FF` | 53 |
| `#FFFFFF03` | 18 |
| `#0ACF83` | 12 |
| `#1ABCFE` | 12 |
| `#A259FF` | 12 |
| `#F24E1E` | 12 |
| `#FF7262` | 12 |
| `#7B61FF` | 11 |
| `#000000` | 9 |
| `#FFFFFF` | 9 |
| `#1B1B1F` | 7 |
| `#431C8F` | 6 |
| `#603FA1` | 6 |
| `#7B3AFB` | 6 |
| `#FAF8FF` | 6 |

Additional colors used by component specs and effects:

- `#0A0B0D` — button fill and stroke.
- `#13161B` — cookie consent background.
- `#3266E4` — color swatch fill, badge fill, date-picker selection and focus.
- `#D6D9DC80` — available source color.
- `#E9E9E9` — multi-select chip fill.
- `#ECEFF2` — map fill.
- `#EDF0F280` — card and dashboard widget fill.
- `#03030314` — borders and shadow tint.
- `#0B0B0B2E` — available source color.
- `#14141433` — shadow tint.
- `#0000000F` — overlay shadow tint.
- `#FFFFFF00` — transparent row background.
- `#FFFFFFD9` — overlay, dialog, grid, and menu surfaces.
- `#FFFFFF` — white surfaces and icon fills.

## Type scale

Font tracking is `0px` for all named text styles.

| Token / usage | Font | Weight | Size / line height |
|---|---|---:|---:|
| Text XS | Instrument Sans Regular | 400 | 11px / 16px |
| Text S | Instrument Sans Regular | 400 | 13px / 20px |
| Text M | Instrument Sans Regular | 400 | 14px / 20px |
| Input field | Instrument Sans Regular | 400 | 14px / 20px |
| Field label | Instrument Sans Medium | 500 | 14px / 20px |
| Text L | Instrument Sans SemiBold | 600 | 16px / 22px |
| Text XL | Instrument Sans SemiBold | 600 | 18px / 26px |

Additional raw hierarchy:

- Instrument Sans SemiBold, 40px.
- Instrument Sans SemiBold, 28px.
- Instrument Sans SemiBold, 16px.
- Instrument Sans SemiBold, 14px.
- Instrument Sans Medium, 13px.
- Instrument Sans Regular, 12px.
- Inter Regular, 16px.

Usage ranking favors Instrument Sans Regular 14px, Instrument Sans Medium 14px, and Instrument Sans Regular 12px.

## Spacing scale

No spacing scale or spacing variables were found.

Concrete component spacing values:

- Buttons: horizontal padding `12px`; icon-only padding `6px 8px`; text/icon gap `8px`; icon-only gap `4px`.
- Items: padding `6px 8px 6px 4px`; gap `4px`.
- Cards: padding `16px`; gap `16px`.
- Cookie Consent: padding `16px 24px`; gap `266px`.
- Login form: bottom padding `16px`; gap `16px`.
- Avatar Group: gap `-6px`.
- Context Menu: padding `4px`; gap `0px`.
- Combo Box Overlay: gap `10px`.
- Details open: bottom padding `8px`; gap `4px`.
- Multi-select chip: padding `2px 5px`; gap `2px`.
- Multi-select overflow chip: gap `1px`.
- Checkbox groups: gap `4px`.

## Radius scale

No radius variables were found. Concrete radii used by components:

- `4px`: tertiary and standard icon-only button; multi-select chip.
- `5px`: Item and Item (dropdown); Item (custom presentation).
- `8px`: Color swatch.
- `9px`: Details, filled buttons, button icon-only, combo-box overlay, context menu, date-picker overlay, dialog, grid with cells, login overlay.
- `15px`: Card, Card (Image), Dashboard widget, Dialog, Login overlay, Map.
- `25px`: Badge.
- `64px`: Avatar and Avatar (overflow).

## Elevation & effects

- Shadow XS: drop shadow `4px`, offset `0 1`, color `#14141433`.
- Shadow S: drop shadow `5px`, offset `0 2`, color `#14141433`.
- Shadow M: drop shadow `16px`, offset `0 8`, color `#14141433`.
- Overlay blur: background blur `20px`.
- Overlay shadow + blur: background blur `20px`; drop shadow `16px`, offset `0 8`, color `#14141433`; drop shadow `0px`, offset `0 0`, color `#0000000F`.
- Overlay surfaces commonly use fill `#FFFFFFD9` and stroke `#03030314`.

## Components

### Foundations and icons

- Color swatch: `240×120px`, radius `8px`, fill `#3266E4`; text uses Text L and Text S.
- Divider line: `180×9px`.
- Rich text controls Code, Underline, Strikethrough, H1, Bold, H2, Quote, Clear, H3, Superscript, Subscript, Italic, Outdent, List-bullet, List-number, Indent, Background, Align right, Align left, Align center, Undo, Redo, Photo, paper-airplane, Link, Fullscreen, Drag, and Calendar: `20×20px`.
- Utility icons User, Upload, Sort, Resize, Refresh, Plus, Play, Pen, Minus, Menu, Eye, Eye (disabled), Warn, Dropdown, Cross, Clock, Checkmark, Arrow up, Arrow right, Arrow left, Arrow down, Angle up, Angle right, Angle left, Angle down, and `[empty]`: `20×20px`.

### Navigation and selection items

- Item and Item (dropdown): `180×32px`, radius `5px`, padding `6px 8px 6px 4px`, gap `4px`, horizontal layout; Instrument Sans Medium 14px; Selected Off/On.
- Item (custom presentation): `180×48px`, radius `5px`, same padding and gap; Selected Off/On.
- Item (avatar): `184×32px`; Instrument Sans Medium 13px or Text M.
- Divider line: `180×9px`.
- List Box: `180×128px`, vertical layout.
- Tab: available in horizontal, vertical, and tab-sheet patterns.
- Side Nav Item, Nav bar, Side Navigation (labels), and Side Navigation (hierarchy) are available component families.
- Menu, Menu Bar, and Menu Bar example are available component families.

### Accordion and details

- Accordion: `264×192px`, vertical layout, zero padding and gap; variants Default, Filled, Filled Reverse, Reverse.
- Details/Detail: `260×32px`, radius `9px`, horizontal layout, padding `6px 0`, gap `4px`; variants Filled/Normal and icon position Left/Right.
- Details/Detail (open): `260×64px`, radius `9px`, bottom padding `8px`, gap `4px`; variants Filled/Normal and icon position Left/Right.

### Avatar and badge

- Avatar: `32×32px`, radius `64px`; image Off/On; color variants User-color-0 through User-color-9.
- Avatar (overflow): `32×32px`, radius `64px`.
- Avatar Group: `110×32px`, horizontal layout, gap `-6px`.
- Avatar Group (overflow list): `194×136px`, radius `9px`, padding `4px`, gap `10px`, fill `#FFFFFFD9`, stroke `#03030314` 1px, Shadow M.
- Badge: `20×20px`, radius `25px`, padding `2.5px`, gap `3px`, fill `#3266E4`; variants Icon, Icon Filled, Text, Text Filled and colors Accent, Accent neutral, Blue, Green, Orange, Purple, Red, Yellow.

### Buttons

- Button: `69×34px`, radius `9px`, padding `0 12px`, gap `8px`, fill and stroke `#0A0B0D`, Shadow XS; Instrument Sans Medium 14px.
- Button (primary): `69×34px`, radius `9px`, padding `0 12px`, gap `8px`, fill `#0A0B0D`, Shadow S; Instrument Sans Medium 14px.
- Button (tertiary): `69×34px`, padding `0 12px`, gap `8px`; no radius or fill specified.
- Button (icon-only): `36×34px`, radius `9px`, padding `6px 8px`, gap `4px`, fill and stroke `#0A0B0D`, Shadow XS.
- Button (primary, icon-only): `36×34px`, radius `9px`, padding `6px 8px`, gap `4px`, fill `#0A0B0D`, Shadow S.
- Button (tertiary, icon-only): `36×34px`, radius `4px`, padding `6px 8px`, gap `4px`.
- Button color variants include Accent, Accent neutral, Blue, Error, Orange, Purple, Success, Yellow. Primary additionally includes Green and Red.

### Cards and dashboard

- Card: `320×107px`, radius `15px`, padding `16px`, gap `16px`, fill `#EDF0F280`, Overlay blur; style Elevated/Flat/Outlined; Horizontal Off/On.
- Card (Image): `480×160px`, radius `15px`, fill `#EDF0F280`, Overlay blur; style Elevated/Flat/Outlined; Horizontal Off/On.
- Dashboard widget: `260×260px`, radius `15px`, fill `#EDF0F280`, Overlay blur; style Elevated/Flat/Outlined; state Editing/Move mode/Normal.

### Forms and fields

- Checkbox: `24×24px`; states Checked, Indeterminate, Unchecked.
- Checkbox with label: `74×24px`, gap `4px`; Instrument Sans Medium 14px.
- Checkbox group horizontal: `338×43px`, vertical layout, gap `4px`.
- Checkbox group vertical: `112×91px`, vertical layout, gap `4px`.
- Combo Box: `192×58px`, vertical layout, gap `4px`; states Default, Disabled, Invalid, Opened, Read only.
- Multi-Select Combo Box: `192×58px`, vertical layout, gap `4px`; states Default, Disabled, Invalid, Opened, Read only.
- Combo Box Overlay: `192×136px`, radius `9px`, fill `#FFFFFFD9`, stroke `#03030314`, Overlay shadow + blur; gap `10px`.
- Multi-Select Chip: `56×20px`, radius `4px`, padding `2px 5px`, gap `2px`, fill `#E9E9E9`.
- Multi-Select Overflow Chip: `27×20px`, gap `1px`.
- Custom field: `336×58px`, vertical layout, gap `4px`.
- Custom field examples: Date Range `336×58px`; US address `508×58px`; Price `336×58px`; Phone number `416×58px`.
- Date Picker: `192×58px`, vertical layout, gap `4px`; states Default, Disabled, Invalid, Opened, Read only.
- Date Picker Overlay: `315×504px`, radius `9px`, fill `#FFFFFFD9`, stroke `#03030314`, Overlay shadow + blur.
- Date Picker Overlay selected day: `36×36px`, radius `9px`, fill `#3266E4`.
- Date Picker Overlay focused day: `36×36px`, radius `9px`, stroke `#3266E4` 2px.
- Date Time Picker: `386×58px`, horizontal layout, gap `8px`.
- Text Field, Text Area, Password Field, Number Field, and Time Picker are available families.
- Time Picker Overlay is available.
- Radio button, Radio button with label, and horizontal/vertical Radio button groups are available.
- Upload is available.

### Overlays and feedback

- Context Menu: `194×136px`, radius `9px`, padding `4px`, fill `#FFFFFFD9`, stroke `#03030314`, Overlay shadow + blur.
- Context Menu (2 levels): `384×226px`, fill `#FFFFFF`.
- Dialog: `540×360px`, radius `15px`, fill `#FFFFFFD9`, stroke `#03030314`, Overlay shadow + blur.
- Confirm dialog: `420×158px`.
- Login overlay: `360×361px`, radius `15px`, fill `#FFFFFFD9`, stroke `#03030314`, Overlay shadow + blur.
- Popover, Tooltip, Notification, Message, and Warn are available feedback families.
- Progress Bar and Progress Bar (indeterminate) are available.
- Cookie Consent: `880×66px`, horizontal layout, padding `16px 24px`, gap `266px`, fill `#13161B`.

### Data and application patterns

- CRUD: `800×480px`, stroke `#03030314` 1px.
- CRUD Toolbar: `800×61px`, fill `#FFFFFF`, stroke `#03030314` 1px.
- CRUD Editor aside: `300×480px`, fill `#FFFFFF`, stroke `#03030314` 1px.
- CRUD Edit dialog: `800×330px`.
- CRUD Edit column: `44×1232px`, fill `#FFFFFF`.
- Grid: `800×480px`, fill `#FFFFFFD9`, stroke `#03030314` 1px.
- Grid with cells: `800×480px`, radius `9px`, fill `#FFFFFFD9`, stroke `#03030314` 1px.
- Grid (Rich content), Grid (filter columns), and Grid (tree): `800×480px`, fill `#FFFFFFD9`, stroke `#03030314` 1px.
- Grid cells use `32px` row/header heights in the supplied parts. Common cell padding is `6px 8px`; common cell gap is `10px`.
- Grid column examples: Text `66px`, Numeric `69px`, Checkbox `74px`, Icon `28px`, Icon button `44px`, Button `69px`, Badge `55px`, Selection `24px`, Rich content `220px`, Tree `164px`.
- Login form: `312×280px`, bottom padding `16px`, gap `16px`.
- Map: `800×600px`, radius `15px`, fill `#ECEFF2`, stroke `#03030314` 1px; variants City, County, World.
- Map/Cluster: `30×30px`.
- Map/Marker: `24×36px`, fill `#FFFFFF`.
- Master Detail Layout: `600×400px`, horizontal layout.
- Split Layout is available.
- Message List, Message List + Input, and Message Input are available.

## Screen patterns

- **Data management:** CRUD and Grid patterns use an `800×480px` primary surface, with toolbars, editable columns, dialogs, aside editors, filters, tree rows, rich content, badges, buttons, and selection columns.
- **Authentication:** Login form is `312×280px`; Login overlay is `360×361px` with a translucent white surface, 15px radius, blur, and overlay shadow.
- **Form entry:** Form controls commonly use `192×58px` or `336×58px` vertical field compositions, with labels, input text, and explicit Disabled, Invalid, Opened, and Read only states.
- **Navigation:** Side navigation, menu bars, tabs, accordion/details, and master-detail layouts provide hierarchical and sectional navigation patterns.
- **Feedback:** Dialogs, confirm dialogs, popovers, tooltips, notifications, messages, progress bars, and cookie consent provide transient or blocking feedback.
- **Dashboard:** Dashboard widgets use `260×260px`, 15px radius, translucent fill, and Overlay blur.
- **Mapping:** Map surfaces use `800×600px`, with City, County, and World variants plus cluster and marker elements.

## Notes for implementers

- Use only the named type styles and concrete sizes from this document; no local design tokens were extracted.
- Prefer Instrument Sans for UI text. Use Inter only where the source explicitly identifies Inter.
- Preserve the distinction between regular, medium, and semibold weights.
- Use `#FFFFFFD9` for translucent overlay surfaces only where the component specification calls for it.
- Use `#EDF0F280` for Card and Dashboard widget surfaces.
- Use `#0A0B0D` for the specified standard and primary button fills/strokes.
- Apply Shadow XS to standard buttons, Shadow S to primary buttons, and Overlay shadow + blur to menus, pickers, dialogs, login overlays, and other specified overlays.
- Keep icon assets at `20×20px` unless a component specifies another size.
- Treat component states and variants as explicit implementation requirements rather than separate components.
- Do not infer spacing, radius, grid, motion, or color variables that are absent from the source.
