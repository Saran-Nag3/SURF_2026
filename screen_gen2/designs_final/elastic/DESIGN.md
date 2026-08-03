---
name: elastic-ui-borealis-community
source: Elastic UI [Borealis] (Community)
kind: design-system-context
---

# elastic - Design System

## Overview

Elastic UI Borealis is a community Figma design system covering foundations, interactions, application layouts, data-heavy interfaces, forms, navigation, feedback, and documentation components.

- Source page: All pages (66)
- Extracted: 2026-07-25T09:32:49.152740+00:00
- Variable collections: none
- Spacing variables: none
- Radius variables: none
- Motion variables: none
- Primary typefaces: Inter and Roboto Mono

## Design language

- Use Inter for interface text, headings, labels, links, and body copy.
- Use Roboto Mono for code.
- The interface palette is centered on Elastic Blue, dark ink, midnight blue, subdued cool grays, white, teal, pink, and yellow.
- Use subdued cool backgrounds such as `#F6F9FC` and `#F7F8FC`.
- Use blue for primary actions and links.
- Use teal, pink, and yellow as supporting accent colors.
- Use layered shadows for floating surfaces, menus, flyouts, modals, and elevated cards.
- Use gradients for skeleton loading states and AI-related surfaces.
- Icons are available as named icon assets, including navigation, actions, status, data visualization, product, and token icons.

## Color palette

### Core and text colors

| Role | Color |
|---|---|
| Primary / Elastic Blue | `#0077CC` |
| Primary text / link | `#0071C2` |
| Button primary text | `#005EC4` |
| Dark ink / title | `#1C1E23` |
| Title | `#1A1C21` |
| Darkest shade | `#343741` |
| Developer blue | `#101C3F` |
| Midnight blue | `#153385` |
| Medium shade | `#98A2B3` |
| Light shade | `#D3DAE6` |
| White / empty shade | `#FFFFFF` |
| Plain background | `#F6F9FC` |
| Subdued background | `#F7F8FC` |

### Accent colors

| Role | Color |
|---|---|
| Elastic blue illustration | `#0B64DD` |
| Elastic pink | `#F04E98` |
| Elastic teal | `#00BFB3` |
| Light teal | `#48EFCF` |
| Elastic yellow | `#FEC514` |
| Illustration pink | `#F04E98` |
| Illustration teal | `#02BCB7` |
| AI filled gradient endpoint | `#731DCF` |
| AI default gradient endpoint | `#ECE2FE` |

### Usage-ranked raw colors

Use these only where a specific raw color is required by the source. Counts indicate source usage.

- `#000000` — 380 uses
- `#FFFFFF` — 347 uses
- `#D9D9D9` — 324 uses
- `#505050` — 268 uses
- `#1BA9F5` — 243 uses
- `#FF0000` — 231 uses
- `#9747FF` — 167 uses
- `#F1F1F1` — 139 uses
- `#00BFB3` — 136 uses
- `#F04E98` — 136 uses
- `#FEC514` — 136 uses
- `#FF957D` — 136 uses
- `#7B61FF` — 121 uses
- `#FF00001A` — 112 uses
- `#9ADC30` — 105 uses
- `#00000080` — 90 uses
- `#00000033` — 56 uses
- `#1D2A3E` — 29 uses
- `#00B474` — 28 uses
- `#FFFFFF33` — 26 uses
- `#FFFFFF66` — 26 uses
- `#FFFFFF99` — 26 uses
- `#FFFFFFCC` — 26 uses
- `#BD1F70` — 22 uses
- `#FFFFFF40` — 22 uses
- `#FFFFFF80` — 22 uses
- `#1750BA33` — 21 uses
- `#61A2FF` — 21 uses
- `#FF076F` — 20 uses
- `#FF076F1C` — 20 uses
- `#FF076F26` — 20 uses

### Gradients

- Skeleton gradient: linear gradient with `#48597529` at 30%, `#4859750A` at 50%, and `#48597529` at 70%.
- Skeleton background: linear gradient with `#48597529` at 45%, `#4859750A` at 50%, and `#48597529` at 55%.
- AI default: linear gradient with `#D9E8FF` at 17% and `#ECE2FE` at 83%.
- AI filled: linear gradient with `#0B64DD` at 17% and `#731DCF` at 83%.

## Type scale

All listed typography uses `0px` tracking unless otherwise noted.

### Inter

- 64px, line-height auto, SemiBold — library header 1
- 48px, line-height auto, SemiBold — library header 2
- 32px, line-height auto, Medium — library header 3
- 30px / 36px, SemiBold — heading 1
- 24px / 28px, SemiBold — heading 2
- 20px / 24px, SemiBold — heading 3
- 16px / 24px, SemiBold — heading 4
- 14px / 20px, SemiBold — heading 4 or heading 5 variants
- 12px / 16px, SemiBold — heading 6
- 34px / 40px, Bold — legacy medium heading 1
- 22px / 24px, Bold — legacy medium heading 3
- 14px / 20px, Regular — body copy
- 14px / 20px, Medium — body copy
- 14px / 20px, Bold — body copy
- 14px / 20px, Regular italic — body copy
- 12px / 16px, Medium — compact body copy
- 12px / 16px, SemiBold — compact body copy
- 12px / 16px, Bold — compact body copy
- 16px / 24px, Medium — default link
- 12px / 16px, Medium — link hover
- 14px / 24px, Regular — fine print
- 14px / 24px, Medium — fine print
- 10.5px / 16px, Regular, Medium, SemiBold, or Bold — compact fine print
- 20px / auto, Medium — library paragraph
- 20px / auto, Bold — library paragraph bold
- 16px / auto, Regular — library annotation
- 16px / 24px, Bold — title X Small
- 14px / 24px, Bold — title XX Small

### Roboto Mono

- 10.8px / 16px, Regular — code
- 10.8px / 16px, Regular italic — code
- 12.6px / 20px, Bold — code

### Other source typography

- Figma Hand Regular, 16px
- Zilla Slab Highlight Regular, 12px

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

### Shadows

- X-small: `drop_shadow 8px offset 0 2 #00000042`, `drop_shadow 4px offset 0 1 #00000066`, `drop_shadow 0px offset 0 0 #2B394F`
- Small: `drop_shadow 11px offset 0 4 #2B394F0D`, `drop_shadow 7px offset 0 2 #2B394F14`, `drop_shadow 2px offset 0 0 #2B394F29`
- Medium: `drop_shadow 14px offset 0 6 #2B394F0F`, `drop_shadow 10px offset 0 3 #2B394F1A`, `drop_shadow 2px offset 0 0 #2B394F29`
- Medium alternate: `drop_shadow 15px offset 0 15 #0000000A`, `drop_shadow 12px offset 0 5.7 #0000000D`, `drop_shadow 8px offset 0 2.6 #0000000F`, `drop_shadow 4px offset 0 0.9 #00000014`
- Large: `drop_shadow 17px offset 0 8 #2B394F12`, `drop_shadow 13px offset 0 4 #2B394F1F`, `drop_shadow 2px offset 0 0 #2B394F29`
- Large alternate: `drop_shadow 35px offset 0 23 #0000000D`, `drop_shadow 23px offset 0 8.4 #0000000F`, `drop_shadow 13px offset 0 3.6 #00000012`, `drop_shadow 5px offset 0 1 #0000001A`
- X-large: `drop_shadow 20px offset 0 10 #2B394F14`, `drop_shadow 16px offset 0 5 #2B394F24`, `drop_shadow 2px offset 0 0 #2B394F29`
- X-large hover: `drop_shadow 23px offset 0 12 #2B394F17`, `drop_shadow 19px offset 0 6 #2B394F29`, `drop_shadow 2px offset 0 0 #2B394F29`

### Other effects

- Bottom border: `inner_shadow 0px offset 0 -1 #D3DAE6`

## Components

Use the documented component family that matches the interaction or layout requirement. The source includes:

### Layout and page structure

- Page `<EuiPage>`
- Page body `<EuiPageBody>`
- Page header `<EuiPageHeader>`
- Page section `<EuiPageSection>`
- Page sidebar `<EuiPageSidebar>`
- Header `<EuiHeader>`
- Header section item `<EuiHeaderSectionItem>`
- Header breadcrumbs `<EuiHeaderBreadcrumbs>`
- Footer
- Content
- Panel `<EuiPanel>`
- Card `<EuiCard>`
- Split panel outer `<EuiSplitPanelOuter>`
- Bottom bar `<EuiBottomBar>`
- Flyout `<EuiFlyout>`
- Modal `<EuiModal>`
- Confirm modal `<EuiConfirmModal>`
- Overlay Mask `<EuiOverlayMask>`
- Popover `<EuiPopover>`
- Tooltip `<EuiToolTip>`

### Navigation

- Side Nav `<EuiSideNav>`
- Collapsible Nav `<EuiCollapsibleNav>`
- Collapsible Nav Group `<EuiCollapsibleNavGroup>`
- Breadcrumbs `<EuiBreadcrumbs>`
- Tabs `<EuiTabs>`
- Tab `<EuiTab>`
- Pagination `<EuiPagination>`
- Table Pagination `<EuiTablePagination>`
- Tree View `<EuiTreeView>`
- Tree view item `<EuiTreeViewItem>`
- List group `<EuiListGroup>`
- List group item `<EuiListGroupItem>`
- Context menu `<EuiContextMenu>`

### Actions and controls

- Button `<EuiButton>`
- Button empty `<EuiButtonEmpty>`
- Button icon `<EuiButtonIcon>`
- Button Group `<EuiButtonGroup>`
- Split button `<EuiSplitButton>`
- Filter group `<EuiFilterGroup>`
- Key pad menu `<EuiKeyPadMenu>`
- Key pad menu item `<EuiKeyPadMenuItem>`
- Link `<EuiLink>`
- Auto refresh `<EuiAutoRefresh>`
- Auto refresh button `<EuiAutoRefreshButton>`

### Forms and input

- Form row `<EuiFormRow>`
- Form label `<EuiFormLabel>`
- Form Append `<EuiFormAppend>`
- Form Prepend `<EuiFormPrepend>`
- Text field `<EuiFieldText>`
- Number field `<EuiFieldNumber>`
- Password field `<EuiFieldPassword>`
- Search field `<EuiFieldSearch>`
- Textarea `<EuiTextArea>`
- Select `<EuiSelect>`
- Super select `<EuiSuperSelect>`
- Combo box `<EuiComboBox>`
- Date Picker `<EuiDatePicker> Calendar`
- Date Range Picker `<EuiDateRangePicker>`
- Dual range `<EuiDualRange>`
- Single range `<EuiRange>`
- Checkbox `<EuiCheckbox>`
- Checkbox group `<EuiCheckboxGroup>`
- Radio `<EuiRadio>`
- Radio group `<EuiRadioboxGroup>`
- Switch `<EuiSwitch>`
- File picker `<EuiFilePicker>`
- Color picker `<EuiColorPicker>`
- Color palette picker `<EuiColorPalettePicker>`
- Inline edit text `<EuiInlineEdit>`
- Inline edit title `<EuiInlineEditTitle>`

### Data and content

- Data Grid `<EuiDataGrid>`
- Table `<EuiTable>`
- Description List `<EuiDescriptionList>`
- Code `<EuiCode>`
- Code Block `<EuiCodeBlock>`
- Markdown Editor `<EuiMarkdownEditor>`
- Expression `<EuiExpression>`
- Facet Group `<EuiFacetGroup>`
- Facet button `<EuiFacetButton>`
- List group `<EuiListGroup>`
- Comment list `<EuiCommentList>`
- Comment `<EuiComment>`

### Status, feedback, and loading

- Accordion `<EuiAccordion>`
- Banner `<EuiBanner>`
- CallOut `<EuiCallOut>`
- Badge `<EuiBadge>`
- Health `<EuiHealth>`
- Notification badge `<EuiNotificationBadge>`
- Progress `<EuiProgress>`
- Toast `<EuiToast>`
- Global toast list `<EuiGlobalToastList>`
- Empty prompt `<EuiEmptyPrompt>`
- Steps `<EuiSteps>`
- StepsHorizontal `<EuiStepsHorizontal>`
- Timeline `<EuiTimeline>`
- Timeline item `<EuiTimelineItem>`
- Tour `<EuiTour>`
- Beacon `<EuiBeacon>`
- Loading chart `<EuiLoadingChart>`
- Loading spinner `<EuiLoadingSpinner>`
- Loading logo `<EuiLoadingLogo>`
- Skeleton circle `<EuiSkeletonCircle>`
- Skeleton rectangle `<EuiSkeletonRectangle>`
- Skeleton text `<EuiSkeletonText>`
- Skeleton title `<EuiSkeletonTitle>`

### Visual and utility components

- Avatar `<EuiAvatar>`
- Icon `<EuiIcon>`
- Illustration `<EuiIllustration>`
- Image `<EuiImage>`
- Title `<EuiTitle>`
- Text `<EuiText>`
- Stat `<EuiStat>`
- Spacer `<EuiSpacer>`
- Horizontal rule `<EuiHorizontalRule>`
- Resizer
- Scroll bar
- Cursor

## Screen patterns

- Cover and instructions pages establish the library context and usage guidance.
- Foundation pages cover colors, shadows, typography, interactions, and animations.
- Component pages are organized by interaction and UI pattern, including navigation, forms, data grids, tables, overlays, feedback, loading, and content.
- Application layouts use page headers, headers, side navigation, page sections, panels, cards, bottom bars, flyouts, modals, and popovers.
- Data-heavy screens use Data Grid, Table, Description List, Facet Group, Filter group, Pagination, and Table Pagination.
- Form-heavy screens combine Form row, Form label, input fields, selection controls, date controls, range controls, and color pickers.
- Feedback flows use Banner, CallOut, Toast, Progress, Health, Empty prompt, Steps, Timeline, Tour, and Beacon.

## Notes for implementers

- Prefer named design tokens over raw colors when a semantic token is available.
- Use `#0077CC` for the primary Elastic Blue role, `#0071C2` for primary text and links, and `#1C1E23` or `#1A1C21` for dark text roles as documented.
- Do not infer a spacing scale or radius scale; neither is present in the extraction.
- Do not infer motion durations or easing; no motion tokens are present.
- Use the documented typography sizes and line-heights exactly. Tracking is `0px`.
- Use Roboto Mono for code and Inter for normal interface text.
- Apply the extracted shadow recipes rather than inventing elevation values.
- Use the named icon assets from the source, such as `search`, `filter`, `check`, `cross`, `chevronSingleDown`, `menu`, `gear`, `calendar`, `warning`, `error`, `info`, and `refresh`.
- Keep loading surfaces aligned with the extracted skeleton gradients.
- Treat names containing `☠️` as legacy or graveyard source references rather than preferred new component styles.
