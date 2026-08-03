---
name: astro-7-uxds-wireframe-theme-community
source: Astro 7 UXDS - Wireframe Theme (Community)
kind: design-system-context
---

# astro - Design System

## Overview

Astro 7 UXDS wireframe theme for operational interfaces, with foundations, reusable controls, data visualization, status communication, logs, sign-in, pagination, and timeline patterns. The system uses Roboto typography, neutral wireframe surfaces, compact 4px grid intervals, and a broad palette for semantic status and visualization use.

## Design language

- **Typography:** Roboto Light, Regular, Medium, and Bold.
- **Layout:** Responsive vertical grids at 360px, 768px, 1920px, and 3840px widths.
- **Grid:** 4px horizontal interval grid; vertical layouts use 8px, 12px, 16px, 24px, and 48px gutters.
- **Surfaces:** Primarily white, light grey, and neutral grey surfaces with dark interactive controls.
- **Controls:** Compact rectangular controls with a 3px radius where specified.
- **Status:** Neutral status fills and borders distinguish normal, caution, serious, critical, standby, and off states.
- **Visualization:** Sequential neutral, cyan, bright blue, green, yellow, orange, red, purple, pink, teal, and hotorange palettes.
- **Effects:** Overlay drop shadow and directional inner shadows for scrollbars and tags.

## Color palette

### Usage-ranked raw colors

| Color | Usage |
|---|---:|
| `#000000` | 1628 |
| `#2D2D2D` | 189 |
| `#7B61FF` | 65 |
| `#FFFFFF` | 29 |
| `#9747FF` | 18 |

### Core semantic colors

| Token | Value |
|---|---|
| `color/text/primary` | `#141414` |
| `color/text/secondary` | `#51555B` |
| `color/text/placeholder` | `#666666` |
| `color/text/white` | `#FFFFFF` |
| `color/text/black` | `#000000` |
| `color/text/inverse` | `#FFFFFF` |
| `color/text/interactive/default` | `#333333` |
| `color/text/interactive/hover` | `#525252` |
| `color/text/error` | `#C8102E` |
| `color/background/base/default` | `#EBEBEB` |
| `color/background/base/hover` | `#CCCCCC` |
| `color/background/base/selected` | `#EBEBEB` |
| `color/background/base/header` | `#F5F5F5` |
| `color/background/surface/default` | `#FFFFFF` |
| `color/background/surface/hover` | `#EBEBEB` |
| `color/background/surface/selected` | `#E0E0E0` |
| `color/background/surface/header` | `#F5F5F5` |
| `color/background/interactive/default` | `#333333` |
| `color/background/interactive/hover` | `#525252` |
| `color/background/interactive/muted` | `#858585` |
| `color/border/interactive/default` | `#EBEBEB` |
| `color/border/interactive/hover` | `#EBEBEB` |
| `color/border/interactive/muted` | `#EBEBEB` |
| `color/border/error` | `#FFFFFF` |
| `color/neutral/520` | `#7A7A7A` |
| `color/neutral/560` | `#707070` |
| `color/neutral/640` | `#5C5C5C` |
| `color/neutral/920` | `#141414` |
| `color/neutral/440` | `#8F8F8F` |
| `menu/divider/color/fill` | `#51555B` |
| `tooltip/color/background` | `#3C3E42` |
| `tooltip/color/text` | `#FFFFFF` |
| `push-button/color/background/default` | `#333333` |
| `push-button/color/background/hover` | `#525252` |
| `gsb/color/background` | `#1F1F1F` |
| `gsb/color/text` | `#FFFFFF` |
| `monitoring-icon/badge/color/background` | `#000000` |
| `clock/datetime/color/background` | `#000000` |
| `container/color/border` | `#FFFFFF` |
| `card/color/border` | `#F5F5F5` |
| `log/color/border` | `#FFFFFF` |
| `timeline/cell/color/background` | `#999999` |
| `timeline/header/color/background` | `#F5F5F5` |

### Status colors

All status tokens use the following values:

| Status | Base | Symbol fill/border |
|---|---|---|
| Normal | `#EBEBEB` | `#E0E0E0` |
| Caution | `#EBEBEB` | `#F5F5F5` |
| Serious | `#EBEBEB` | `#CCCCCC` |
| Critical | `#EBEBEB` | `#B8B8B8` |
| Standby | `#EBEBEB` | `#D6D6D6` |
| Off | `#EBEBEB` | `#ADADAD` |

Use the same symbol values for `on-light` and `on-dark` where defined in the source.

### Palette families

- **Neutral:** `#FFFFFF`, `#F5F6F9`, `#EAEEF4`, `#D4D8DD`, `#BBC1C9`, `#7B8089`, `#51555B`, `#292A2D`.
- **Grey:** `#F5F5F5`, `#EBEBEB`, `#D6D6D6`, `#ADADAD`, `#8F8F8F`, `#858585`, `#7A7A7A`, `#707070`, `#666666`, `#5C5C5C`, `#525252`, `#51555B`, `#3D3D3D`, `#333333`, `#2D2D2D`, `#1F1F1F`, `#141414`, `#0A0A0A`.
- **Dark blue:** `#080C11`, `#172635`, `#1B2D3E`, `#1C3F5E`, `#005A8F`, `#2F7AA7`, `#649CBD`, `#98BDD3`, `#CBDEE9`, `#004872`.
- **Bright blue:** `#101923`, `#142435`, `#1C3851`, `#2B659B`, `#3A87CF`, `#4DACFF`, `#92CBFF`, `#B7DCFF`, `#CEE9FC`, `#DAEEFF`.
- **Cyan:** `#285766`, `#35798E`, `#20A9D5`, `#2DCCFF`, `#64D9FF`, `#5CE2FF`.
- **Teal:** `#032828`, `#035051`, `#00777A`, `#009FA3`, `#00C7CB`, `#3ED2D6`, `#A1E9EB`, `#D0F4F4`.
- **Green:** `#005A00`, `#00AD23`, `#00E200`, `#56F000`, `#99F666`.
- **Yellow:** `#645600`, `#917D01`, `#C7AB00`, `#FAD800`, `#FCE83A`, `#FDED61`.
- **Orange:** `#664618`, `#975F0E`, `#FF8C00`, `#FFAF3D`, `#FFB302`, `#FFCC57`.
- **Red:** `#661102`, `#C8102E`, `#FF2A04`, `#FF3838`, `#FF5F60`.
- **Purple:** `#18152B`, `#302C54`, `#48417F`, `#6058A8`, `#786DD3`, `#938BDB`, `#C9C5ED`, `#E4E2F7`.
- **Pink:** `#200227`, `#41004D`, `#610074`, `#81009A`, `#A200C1`, `#B534CE`, `#DA9CE7`, `#EDCEF3`.
- **Hotorange:** `#2B1105`, `#572108`, `#833209`, `#AF420A`, `#DA5309`, `#E27545`, `#F0BAA3`, `#F8DDD1`.
- **Violet:** `#502B85`.

### Special color treatments

- Table header shadow: `linear-gradient(#0000006B 0%, #3C3E4200 100%)`.
- Classification backgrounds: `#707070` for unclassified, CUI, confidential, secret, top secret, and top secret SCI.
- Notification banner borders:
  - Normal: `#E0E0E0`
  - Caution: `#F5F5F5`
  - Serious: `#CCCCCC`
  - Critical/default: `#B8B8B8`
  - Standby: `#D6D6D6`
  - Off: `#ADADAD`

## Type scale

Font family: **Roboto**.

| Token | Weight | Size / line height | Tracking |
|---|---|---:|---:|
| `display/display-1` | Light 300 | 60px / 70px | -0.3px |
| `display/display-2` | Regular 400 | 48px / 56px | 0px |
| `heading/heading-1` | Regular 400 | 34px / 40px | 0.09px |
| `heading/heading-1-bold` | Bold 700 | 34px / 40px | 0.09px |
| `monospace/monospace-1` | Medium 500 | 28px / 32px | 0px |
| `heading/heading-2` | Regular 400 | 24px / 28px | 0px |
| `heading/heading-3` | Medium 500 | 20px / 24px | 0.03px |
| `heading/heading-4` | Light 300 | 20px / 24px | 0.03px |
| `heading/heading-5` | Regular 400 | 18px / 24px | 0px |
| `heading/heading-6` | Light 300 | 18px / 24px | 0px |
| `body/body-1` | Regular 400 | 16px / 24px | 0.08px |
| `body/body-1-bold` | Bold 700 | 16px / 24px | 0.08px |
| `control/control-body-1` | Regular 400 | 16px / 20px | 0.08px |
| `control/control-body-1-bold` | Bold 700 | 16px / 20px | 0.08px |
| `body/body-2` | Regular 400 | 14px / 20px | 0.07px |
| `body/body-2-bold` | Bold 700 | 14px / 20px | 0.07px |
| `body/body-3` | Regular 400 | 12px / 16px | 0.06px |
| `body/body-3-bold` | Bold 700 | 12px / 16px | 0.06px |

## Spacing scale

No spacing variables were found. Use only spacing values explicitly present in component and grid definitions:

- `0px`
- `2px`
- `4px`
- `8px`
- `12px`
- `16px`
- `24px`
- `48px`

Grid definitions:

| Grid | Columns / rows | Section | Gutter |
|---|---:|---:|---:|
| 360px compact | 4 columns | 76px | 8px |
| 360px default | 4 columns | 70px | 16px |
| 768px compact | 8 columns | 79.5px | 12px |
| 768px default | 8 columns | 69px | 24px |
| 1920px compact | 12 columns | 145px | 12px |
| 1920px default | 12 columns | 134px | 24px |
| 3840px compact | 12 columns | 290px | 24px |
| 3840px default | 12 columns | 268px | 48px |

The horizontal grid uses 4px rows with a 4px section and 4px gutter.

## Radius scale

- `3px`: Borderless Button, Secondary Button, Primary Button, Card, Checkbox Group.
- No radius variables were found.

## Elevation & effects

- `shadow/overlay`: drop shadow, offset `0 4px`, blur `4px`, color `#00000040`.
- `scrollbar/shadow/inner/horizontal`: inner shadow, offset `1px 3px`, blur `3px`, color `#00000080`.
- `scrollbar/shadow/inner/vertical`: inner shadow, offset `3px 3px`, blur `3px`, color `#00000080`.
- `tag/shadow/inner/unknown`: inner shadow, offset `0 0`, blur `5px`, color `#ADADAD`.
- `tag/shadow/inner/fail`: inner shadow, offset `0 0`, blur `5px`, color `#B8B8B8`.
- `tag/shadow/inner/pass`: inner shadow, offset `0 0`, blur `5px`, color `#E0E0E0`.

No motion tokens were found.

## Components

### Actions and controls

- **Primary Button:** `180x44px`, 3px radius, 12px padding, centered horizontal layout, `color/background/interactive/default` fill. Variants: icon, icon+text, text; large, medium, small; default, disabled, hover; fixed-width, text-width.
- **Secondary Button:** Same dimensions and variants as Primary Button; 1px stroke using `color/text/interactive/default`.
- **Borderless Button:** Same dimensions and variants without the specified stroke or fill.
- **Push Button:** Uses `#333333` default background and `#525252` hover background.
- **Segmented Button:** Segment-based control.
- **Checkbox / Checkbox Group:** Checkbox is `103x24px`; group is `135x152px`, 16px padding, 8px gap, 3px radius, and 1px muted border.
- **Radio Button / Radio Button Group:** Radio selection controls and grouped variants.
- **Switch:** On/off track and thumb states.
- **Slider / Dual Range Slider:** Slider controls with thumb, fill, and track subcomponents.
- **Select Menu / Multi-select Menu:** Selectable menu controls, including search, no-results, and menu-option subcomponents.
- **Input / Number input / Search input / Password Input / Textarea:** Text entry controls. Number input includes incrementer arrows.
- **Date Picker / Time Picker:** Date and time selection patterns using Date, Days Header, Month Year Header, and Time Tile.
- **Accordion Item / Accordion Group:** Accordion item is `450x40px`, 2px vertical and 4px horizontal padding; group is `450x280px`.
- **Tab Large / Tab Small:** Large and small tab variants with selected-state subcomponents.
- **Vertical Scrollbar / Horizontal Scrollbar:** Direction-specific inner shadow treatments.
- **Tooltip:** Dark `#3C3E42` background with `#FFFFFF` text.
- **Focus State:** Focus treatment reference component.

### Containers and feedback

- **Card:** `300x204px`, 3px radius, white surface, 1px `#F5F5F5` border, overlay shadow, centered content.
- **Parent Container:** `840x840px`, white surface, 1px white border; auto-vertical/manual resizing and shadow off/on variants.
- **Child Container:** `400x284px`, with `400x32px` header and `400x240px` body; body uses white surface and 1px muted border.
- **Dialog / Dialog Screen Overlay:** Dialog pattern with default footer and overlay.
- **Pop Up Container / Pop Up Menu:** Popup surfaces with arrow and menu subcomponents.
- **Toast / Toast stack:** Transient notification patterns.
- **Notification Banner / Notification Message:** Status-aware notification patterns with normal, caution, serious, critical, standby, off, and default border treatments.
- **Error Text / Help Text:** Supporting and validation text.
- **Classification Banner / Portion Marking:** Classification display; banner is `1920x24px`.
- **Status Tag / Tag 0 / Tag 1 / Tag 2 / Tag 3 / Tag 4:** Tag variants with inner shadow treatments.
- **Status Symbol:** `12x12px`; status variants include caution, critical, normal, off, serious, and standby; backgrounds are on-light or on-dark.
- **Access Denied:** Access-denied feedback state.

### Data visualization

- **Donut Chart, Pie Chart, Fill Gauge**
- **Scatter Plot Chart / Scatter Plot Point**
- **Line Chart**
- **Horizontal Bar Chart / Vertical Bar Chart**
- **Grouped Vertical Bar Chart**
- **Stacked Bar Chart**
- **Legend Item / Legend Item Interactive**
- **Legend Static Column / Legend Interactive Column**
- **Legend Static Row / Legend Interactive Row**
- **Info point (Straight) / Info point (Curved)**
- **Hero Number**
- **Monitoring Icon**
- **Clock**

### Structured content and navigation

- **Table:** Table, Table Content, Table Cell, Table Column, and Table Row compose tabular content.
- **Tree Group / Tree Item:** Hierarchical navigation and status rows.
- **Breadcrumbs / Breadcrumb Item:** Hierarchical location navigation.
- **Pagination:** Pagination text and “show all” subcomponents.
- **Timeline:** Timeline, Timeline Event Cell, timeline header, ribbon, playhead, and column subcomponents.
- **Log:** Log Search, Log Header, Log First Row, and Log Row compose log views.
- **Global Status Bar:** Global status bar with left content group.
- **Simple Sign In / SSO Sign In:** Sign-in patterns with remember-me and SSO-enabled text.
- **Time Tile / Date:** Time and date display components.
- **Icon:** `16x16px`; default, global, and hover states.

### Layout and internal components

Use only when implementing the corresponding source pattern:

- Auto Layout Slot
- Slot
- Parent Container
- Child Container
- _Design Token Template
- _Font Template
- _Section Header
- _Section Title
- _Vertical Grid
- _Horizontal Grid 4px Interval
- _GS Content
- _GS Intro
- _GS Image
- _GS Footer
- _SS Header
- _Sample-container-toolbar
- _test-container-header
- _test-container-toolbar
- _test-data-viz-example
- _testing-note
- _sticky-note-callout
- _diagrams

## Screen patterns

- **Foundations:** Design Tokens, Effects, Grids, Icons, Status Symbol, and Typography establish the visual primitives.
- **Component examples:** Accordion, Button, Card, Checkbox, Classification Marking, Clock, Container, Date Picker, Dialog, Input, Monitoring Icon, Pop Up, Progress, Push Button, Radio Button, Scrollbar, Segmented Button, Select Menu, Slider, Switch, Tab, Table, Tag, Text, Textarea, Toast, Tooltip, and Tree.
- **Data visualization:** Combine chart components with legend rows or columns, interactive legend items, info points, and Hero Number summaries.
- **Operational status:** Use Global Status Bar, Status Symbol, Status Tag, Classification Banner, Notification Banner, and Notification Message for system state.
- **Logs:** Use Log Search, Log Header, Log First Row, and Log Row within Log.
- **Navigation:** Use Breadcrumbs and Pagination for location and result navigation.
- **Authentication:** Use Simple Sign In or SSO Sign In, with remember-me and access-denied states as needed.
- **Timeline:** Compose Timeline with timeline headers, event cells, ribbons, playhead, and timeline columns.
- **Containers:** Use Parent Container for major surfaces and Child Container for nested content areas; headers, tab bars, toolbars, body, and footer are separate structural regions.

## Notes for implementers

- Use only the listed color values; do not introduce additional colors.
- Prefer semantic tokens over raw colors when a semantic token exists.
- Treat repeated palette values as one shared color: for example, `#A1E9EB` represents both teal 200 and teal 300, and `#C9C5ED` represents both purple 200 and purple 300.
- No local variable collections were found.
- No spacing, radius, or motion variable collections were found.
- Preserve the explicit component dimensions, padding, gaps, strokes, fills, and variants where provided.
- Use Roboto and the named typography tokens rather than raw unstyled text values.
- The raw extraction includes internal underscore-prefixed components; use them only as implementation subcomponents of their associated public component or pattern.
- The source contains raw unstyled typography at 72px and raw colors `#7B61FF` and `#9747FF`; these are not represented in the named typography or semantic color tokens.
