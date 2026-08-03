---
name: retool-ui-kit-community
source: Retool UI Kit (Community)
kind: design-system-context
---

# retool - Design System

## Overview

Retool UI Kit (Community) is an Inter-based UI system for data-heavy applications. It uses compact 12px body and control typography, blue accent actions, white surfaces, light gray canvas and borders, and semantic error, info, success, and warning colors.

The source contains five Figma pages: Cover, Components, Styles, an unnamed page, and Admin. No local variable collections, spacing variables, radius variables, motion tokens, grid styles, or local effect styles were found.

## Design language

- **Typeface:** Inter is the primary typeface.
- **Density:** Controls and supporting text are compact, predominantly 12px.
- **Surface hierarchy:** White component surfaces sit on a `#F5F5F5` canvas, with `#EDEDED` used for primary and disabled backgrounds.
- **Primary action:** Use `#3C92DC` for accent backgrounds; use `#266EBD` for dark accent states and `#67AAE4` for light accent states.
- **Text hierarchy:** Primary text is `#262626`; secondary text is `#262626B2`; disabled text is `#979797`.
- **Shape language:** Controls commonly use a 4px radius. Tags and navigation items use a 16px radius.
- **Layout:** Components use fixed dimensions in the source, with vertical form layouts and 8px gaps as the dominant pattern.
- **Feedback:** Semantic states use dedicated error, info, success, and warning palettes.

## Color palette

Ranked by reported usage where available:

| Token | Color | Usage |
|---|---|---:|
| Text/Primary | `#262626` | 734 |
| Background/Accent | `#3C92DC` | 648 |
| Paragraph/Text | `#262626` | 593 |
| Background/White | `#FFFFFF` | 392 |
| Headers/Label | `#262626` | 353 |
| Text/Disabled | `#979797` | 321 |
| Border/Primary | `#F5F5F5` | 312 |
| Text/Secondary | `#262626B2` | 245 |
| Error/Primary | `#CD574C` | 191 |
| Background/Highlight | `#3C92DC24` | 141 |
| Headers/Heading 3 | `#262626` | 70 |
| Background/Primary | `#EDEDED` | 42 |
| Background/Canvas | `#F5F5F5` | 36 |
| Background/Disabled | `#EDEDED` | 23 |
| Info/Primary | `#3C92DD` | 15 |
| Border/Dark | `#9E9E9E` | 10 |
| Success/Primary | `#5E8D6E` | 9 |
| Info/Primary 20 | `#D4E7F7` | 8 |
| Background/Accent Dark | `#266EBD` | 6 |
| Background/Accent light | `#67AAE4` | 6 |
| Info/Primary 30 | `#B1D3F1` | 6 |
| Background/Accent lightest | `#3C92DC66` | 4 |
| Error/Primary 20 | `#F4DAD7` | 4 |
| Primary/Red | `#EA1B3D` | 4 |
| Error/Primary 30 | `#EBBCB7` | 3 |
| Info/Primary 0 | `#F6FAFD` | 3 |
| Success/Primary 30 | `#C8DACE` | 3 |
| Warning/Primary 30 | `#DFA165` | 3 |
| Error/Primary 0 | `#FCF6F5` | 2 |
| Success/Primary 0 | `#F3F9F6` | 2 |
| Success/Primary 20 | `#E0EBE4` | 2 |
| Success/Primary 100 | `#A0CFB5` | 2 |
| Warning/Primary 0 | `#FEF6F2` | 2 |
| Warning/Primary | `#F4A125` | 1 |
| Warning/Primary 10 | `#EDC9A7` | 1 |
| Warning/Primary 50 | `#D17823` | 3 |
| White | `#FFFFFF` | 8 |
| Raw unstyled white | `#FFFFFF` | 4483 |
| Raw unstyled black | `#000000` | 134 |

Semantic palette groupings:

- **Info:** `#3C92DD`, `#D4E7F7`, `#B1D3F1`, `#F6FAFD`
- **Success:** `#5E8D6E`, `#A0CFB5`, `#C8DACE`, `#E0EBE4`, `#F3F9F6`
- **Warning:** `#F4A125`, `#D17823`, `#DFA165`, `#EDC9A7`, `#FEF6F2`
- **Error:** `#CD574C`, `#EBBCB7`, `#F4DAD7`, `#FCF6F5`
- **Accent:** `#3C92DC`, `#266EBD`, `#67AAE4`, `#3C92DC24`, `#3C92DC66`
- **Neutrals:** `#262626`, `#262626B2`, `#979797`, `#9E9E9E`, `#EDEDED`, `#F5F5F5`, `#FFFFFF`, `#000000`, `#00000026`

## Type scale

All tracking is `0px`.

| Role | Typeface | Weight/style | Size / line height |
|---|---|---|---|
| Heading 1 | Inter | Bold 700 | 36px / 40px |
| Heading 2 | Inter | Bold 700 | 28px / 32px |
| Heading 3 | Inter | Bold 700 | 24px / 28px |
| Heading 4 | Inter | Bold 700 | 18px / 20px |
| Heading 5 | Inter | Bold 700 | 16px / 20px |
| Heading 6 | Inter | Bold 700 | 14px / 18px |
| Caption | Inter | Regular 400 | 12px / 16px |
| Label | Inter | Medium 500 | 12px / 16px |
| Paragraph/Text | Inter | Regular 400 | 12px / 20px |
| Paragraph/Bold | Inter | Bold 700 | 12px / 20px |
| Paragraph/Italic | Inter | Italic 400 | 12px / 20px |
| Paragraph/Link | Inter | Regular 400 | 12px / 20px |
| Paragraph/Ordered list | Inter | Regular 400 | 12px / 20px |
| Paragraph/Unordered list | Inter | Regular 400 | 12px / 20px |
| Paragraph/Strikethrough | Inter | Regular 400 | 12px / 20px |

Raw, unstyled typography also includes Inter SemiBold 12px, Inter Bold 11px, Inter Medium 11px, Inter Regular 10px, Helvetica 10px, and Lexend Medium 136.06px. Prefer the named tokens above.

## Spacing scale

_No spacing variables found in source._

Observed component spacing values are `0px`, `2px`, `4px`, `8px`, `10px`, `12px`, `16px`, `20px`, `24px`, `49px`, `63px`, `78px`, and `2021px`. The dominant form-component gap is `8px`; common internal padding values are `4px`, `8px`, `16px`, `20px`, and `24px`.

## Radius scale

_No radius variables found in source._

Observed radii:

- `0px`: tables and containers without rounded corners
- `4px`: buttons, split buttons, calendar input, pagination pages, statistic trends, and component cards
- `16px`: tags and navigation items

## Elevation & effects

- **Drop shadow:** `drop_shadow`, 12px, offset `0 4`, color `#00000026`.
- The shadow is used on Scanner and Modal.
- No other local effect styles were found.

## Components

All listed component families are available: Alert, Avatar, Avatar Group, Button, Calendar Input, Chart, Checkbox, Checkbox - Treed, Checkbox Group, Checkbox Tree, Collapsible Container, Color, Color Input, Comment, Container, Date, Date Range, Divider, Editable Text, Editable Text Area, Error message, Feature Flag, File Dropzone, File Input, Headers, Image, Label, Map, Modal, Multiselect, Navigation, Number Input, Number Inputs, Page Input, Pagination, Password, Progress Bar, Progress Circle, Query Builder, Radio Group, Range Slider, Rich Text Editor, Scanner, Segmented Control, Select, Select Inputs, Select Inputs, Signature Pad, Slider, Special Inputs, Split Button, Statistic, Steps, Switch, Switch Group, Table, Tags, Text Area, Text Input, Time, Timeline, Timer, Video, Wizard.

### Actions and navigation

- **Button:** `64x32px`, 4px radius, `#3C92DC` fill, 4px gap, `Headers/Label`; levels Inline, Primary, Secondary; disabled state.
- **Split Button:** `88x32px`, 4px radius, `#3C92DC` fill; levels Primary and Secondary; disabled state.
- **Navigation:** `548x28px`, horizontal gap `16px`, white fill, Inter SemiBold 12px; horizontal or vertical.
- **Navigation/Nav Item:** `78x28px`, 16px radius, `#D4E7F7` fill, padding `4px 8px`, selected, disabled, and level 1/2 variants.
- **Pagination:** `264x24px`, 8px gap, white fill, Inter SemiBold 12px.
- **Pagination/Page:** `24x24px`, 4px radius, padding `8px`, active variant.
- **Page Input:** `139x24px`, 8px gap, white fill.
- **Steps/Step:** `62x24px`, 8px gap, Inter Bold 11px; horizontal or vertical; Indicator or Numbered; Active, Completed, or Default.
- **Steps/Connector:** `22x34px`, 4px gap; horizontal or vertical; completed variant.
- **Wizard:** `442x316px`, white surface, heading 4, label, and paragraph text; first-page variant.
- **Collapsible Container:** `442x368px`; Collapsed or Expanded.
- **Container:** `442x368px`; Default, Stepped, or Tabbed header style.

### Form controls

Form controls generally use vertical layout, `8px` gap, white fill, and `Headers/Label`, `Headers/Caption`, and `Paragraph/Text`.

- **Text Input:** `345x54px`; label position, placeholder, and disabled variants.
- **Password:** `345x54px`; label position, placeholder, and disabled variants.
- **Text Area:** `345x110px`; label position, placeholder, and disabled variants.
- **Editable Text:** `345x44px`; label position, placeholder, and disabled variants.
- **Editable Text Area:** `345x84px`; label position, placeholder, and disabled variants.
- **Number Input:** `345x54px`; label position, placeholder, and disabled variants.
- **Number Inputs/Rating:** `120x48px`; label position and disabled variants.
- **Select:** `345x54px`; label position, selected, and disabled variants.
- **Multiselect:** `345x54px`; label position, selected, and disabled variants.
- **Select Inputs/Button Group:** `265x56px`, 8px gap; disabled variant.
- **Select Inputs/Listbox:** `164x204px`, 8px gap; label position and disabled variants.
- **Select Inputs/Listbox/Listbox Item:** `126x28px`, padding `4px 8px`, 4px gap.
- **Segmented Control:** `244x52px`, 8px gap; label position Left/Top and disabled variants.
- **Select Inputs/Segmented Control/Option:** `80x24px`, padding `2px 0`, 10px gap, `#EDEDED` fill; selected variant.
- **Switch:** `68x16px`, horizontal, 8px gap; label Left/Right, Off/On, disabled.
- **Switch Group:** `68x136px`, vertical, 8px gap; label Left/Top and disabled.
- **Select Inputs/Switch/Toggle:** `28x16px`; Off/On and disabled.
- **Checkbox:** `58x20px`, 4px gap; label Left/Right, checked, disabled.
- **Checkbox Group:** `58x236px`, 8px gap; label position and disabled.
- **Checkbox Tree:** `98x236px`, 8px gap; label position and disabled.
- **Checkbox - Treed:** `82x20px`, left padding `24px`, 4px gap; Right label, checked, disabled, Child/Default/Parent level.
- **Select Inputs/Checkbox/Box:** `16x20px`; checked and disabled.
- **Radio Group:** `58x236px`, 8px gap; label position and disabled.
- **Select Inputs/Radio Group/Radio Component:** `16x20px`; selected and disabled.
- **Select Inputs/Radio Group/Radio Button:** `58x20px`, 4px gap; selected and disabled.
- **Slider:** `345x38px`, 8px gap; label position and disabled.
- **Range Slider:** `345x38px`, 8px gap; label position and disabled.
- **Calendar Input:** `345x223px`, 4px radius, padding `16px`, `#FFFFFF` fill, `#F5F5F5` 1px stroke; disabled variant.
- **Date:** `104x54px`; label position, placeholder, and disabled.
- **Date Range:** `278x54px`; label position, placeholder, and disabled.
- **Time:** `89x54px`; label position, placeholder, and disabled.
- **Color Input:** `345x54px`; label position, placeholder, and disabled.
- **File Input:** `316x54px`; label position and disabled.
- **File Dropzone:** `296x182px`, 10px gap; label position and disabled.
- **Signature Pad:** `398x196px`; label position and disabled.
- **Error message:** `135x20px`, 4px gap, centered vertically.
- **Label:** `32x16px`; disabled variant.

### Data display and feedback

- **Alert:** `485x40px`, horizontal, white fill; Error, Info, Success, and Warning types.
- **Tags:** `38x28px`, 16px radius, padding `4px 8px`, 10px gap, `#F4DAD7` fill, Inter SemiBold 12px; five color variants.
- **Progress Bar:** `279x32px`, white fill, 8px gap; Complete or In Progress.
- **Progress Circle:** `130x130px`, white fill, Heading 2; Complete or In Progress.
- **Statistic:** `139x48px`, white fill; caption and Inter SemiBold 24px value.
- **Statistic/Trend:** `34x16px`, 4px radius, padding `2px`, `#E0EBE4` fill; Negative or Positive direction.
- **Chart:** `216x248px`, white fill, 16px gap; Bar, Line, or Pie.
- **Table:** `277x256px`, white fill; Inter SemiBold 12px and paragraph text.
- **Table/Header:** `563x36px`, white fill.
- **Table/Row:** `563x36px`, white fill.
- **Table/Header Cell:** `74x36px`, padding `8px 16px`, `#F5F5F5` fill, `#F5F5F5` 1px stroke.
- **Table/Cell:** `64x36px`, padding `8px 16px`, white fill, `#F5F5F5` 1px stroke; selected variant.
- **Table/Footer:** `563x40px`, padding `8px 16px`, bottom radius `4px`, `#F5F5F5` fill, `#F5F5F5` 1px stroke.
- **Comment:** `359x92px`, white fill; paragraph and bold paragraph text.
- **Divider:** `366x16px`, vertical padding `8px`, centered.
- **Timeline:** `240x236px`, horizontal, white fill.
- **Timeline/Step:** `291x20px`, 24px gap.
- **Avatar:** `135x36px`, 8px gap, centered, white fill; Image or Text.
- **Avatar Group:** `200x32px`, horizontal, `-4px` gap; Image or Text.
- **Image:** `240x168px`, 8px gap; Circle or Rectangle.
- **Video:** `240x168px`, 8px gap.
- **Map:** `500x500px`, white fill.
- **Timer:** `153x68px`, centered, white fill; Paused variant.

### Overlays and advanced inputs

- **Modal:** `442x350px`, white fill, drop shadow `drop_shadow 12px offset 0 4 #00000026`; heading 4, label, and paragraph text.
- **Scanner:** `442x494px`, white fill, fixed width and fill height, same drop shadow as Modal.
- **Rich Text Editor:** `393x244px`, white fill, horizontal padding `24px`.
- **Query Builder:** `381x288px`, white fill.
- **Special Inputs/Query Builder/Rule:** `286x32px`, 8px gap.
- **Special Inputs/Query Builder/Group:** `361x144px`, padding `16px`, 8px gap, `#3C92DC24` fill.
- **Feature Flag:** `351x80px`, horizontal, padding `20px 24px`, 49px gap, white fill, `#F5F5F5` 1px stroke.
- **Color:** `80x104px`, vertical, 8px gap, centered.
- **Headers/Section:** `635x64px`, 10px gap, `#262626` 1px stroke, Heading 1.
- **Headers/Component:** `393x304px`, top radius `4px`, padding `24px`, 12px gap, `#3C92DC24` fill; Heading 3, label, and paragraph.

## Screen patterns

- **Cover / Thumbnail:** A `1600x960px` fixed frame with a 6px radius was extracted. Its detailed decorative fills are not part of the allowed design-system palette and should not be carried into product UI.
- **Component documentation:** Components are presented as compact, fixed-size examples, commonly using white surfaces, blue highlight backgrounds, 12px labels, and 8px or 12px internal gaps.
- **Admin-oriented UI:** The component inventory emphasizes forms, tables, navigation, query building, scanners, feature flags, and status feedback, indicating dense operational and administrative workflows.
- **Form screens:** Stack labeled controls vertically with `8px` gaps. Use `345x54px` as the common full-width control footprint where applicable.
- **Data screens:** Combine white tables and cards with `#F5F5F5` canvas, `#F5F5F5` borders, compact pagination, and semantic status indicators.

## Notes for implementers

- Use only the named tokens and colors documented here; do not infer additional colors from the source.
- Prefer named typography tokens over raw unstyled font occurrences.
- Treat `#FFFFFF` as the primary component surface and `#F5F5F5` as the canvas and common border color.
- Use `#3C92DC` for primary accent actions and `#3C92DC24` for subtle highlighted surfaces.
- Apply disabled states with `#979797` text and `#EDEDED` backgrounds.
- Preserve the compact 12px control and paragraph scale unless a named heading token is explicitly required.
- Use 4px radii for controls and 16px radii for tags and navigation items.
- Use the documented fixed component dimensions when recreating the extracted examples.
- Do not create spacing, radius, motion, grid, or effect tokens beyond those explicitly observed.
- Where a component has a variant list, implement the listed variants rather than inventing additional states.
