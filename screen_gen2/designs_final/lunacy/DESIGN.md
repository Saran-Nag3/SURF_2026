---
name: lunacy-design-system-community
source: Lunacy Design System (Community)
kind: design-system-context
---

# lunacy - Design System

## Overview

Lunacy’s design system is an editor UI kit covering navigation, toolbars, panels, property controls, dialogs, plans, billing, collaboration, and canvas tools. The visual language uses compact 32px controls, Inter-based UI typography, white surfaces, black text, light-grey borders, and blue interaction states.

No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- **Primary UI font:** Inter.
- **Supporting fonts:** Roboto for captions and notes; IBM Plex Mono for code; Ubuntu appears in raw typography and title-bar assets.
- **Control rhythm:** Many controls use a 32px height.
- **Common icon sizes:** 16px, 24px, and 32px.
- **Surface treatment:** White surfaces with light-grey borders and compact rounded corners.
- **Interaction color:** Accent blue `#179DE3`, with translucent variants `#179DE31A`, `#179DE333`, and `#179DE399`.
- **Text hierarchy:** Dark text uses `#333333`; black and translucent black are used extensively for primary and overlay treatments.
- **Feedback colors:** Red for errors, green for success, orange and yellow for notices, and multiplayer colors for collaboration indicators.

## Color palette

Colors are deduplicated and ordered by reported usage where usage counts are available.

### Core and surfaces

| Token | Value | Usage |
|---|---:|---:|
| Dark/BlackBrush | `#000000` | 5642 style uses; 1094 raw uses |
| Light/WhiteBrush | `#FFFFFF` | 3145 style uses; 579 raw uses |
| Dark/TextColorBrush | `#333333` | 3118 style uses |
| Grey / LightGreyBrush | `#E5E5E5` | 1158 style uses |
| Dark/BlackBrush40 | `#00000059` | 1055 style uses |
| Grey/AlmostTransparentGreyBrush | `#F4F4F4` | 469 style uses |
| Grey / DarkGreyBrush | `#A6A6A6` | 426 style uses |
| Grey/DeepDarkGreyBrush | `#4A4A4A` | 323 style uses |
| Dark/BlackBrush20 | `#00000033` | 458 style uses |
| Dark/BlackBrush05 | `#0000000D` | 143 style uses; 38 raw uses |
| Grey/MediumGreyBrush | `#CCCCCC` | 81 style uses |
| Grey / GreyBrush | `#BFBFBF` | 10 style uses |
| Dark/BlackBrush10 | `#0000001A` | 8 style uses |
| Dark/BlackBrush2 | `#181818` | — |
| Dark/BlackBrush3 | `#262626` | — |
| Black / 900 | `#1A1A1A` | 17 style uses; 15 raw uses |
| Black / 200 | `#EBEBEB` | 23 style uses; 31 raw uses |
| E9E9E9 raw color | `#E9E9E9` | 26 raw uses |
| DADADA raw color | `#DADADA` | 23 raw uses |
| F8F8F8 raw color | `#F8F8F8` | 17 raw uses |

### Accent and interaction colors

| Token | Value | Usage |
|---|---:|---:|
| Blue/AccentBlueBrush | `#179DE3` | 912 style uses |
| Blue/AccentBlueBrush20 | `#179DE333` | 114 style uses |
| Blue/AccentBlueBrush10 | `#179DE31A` | 33 style uses |
| Blue/AccentBlueBrush60 | `#179DE399` | — |
| Blue/BlueBrush | `#2891C9` | 48 style uses |
| Blue / AccentBlueBrush10 | `#499DF21A` | — |
| Blue/DarkBlueBrush | — | 47 style uses; no value found |
| Blue | — | no value found |
| #02 Colors/#01 | `#F96057` | 15 style uses |
| #02 Colors/#03 | `#F8CE52` | 15 style uses |
| #02 Colors/#04 | `#5FCF65` | 15 style uses |
| Ubuntu Orange | `#E95420` | 13 style uses |
| Close Button Stroke | `#E95420` | 13 style uses |
| Title Bar | `#2C2C2C` | 13 style uses |
| Titlebar Stroke | `#2C2C2C` | 13 style uses |
| Title Text | `#FFFFFF` | 13 style uses |

### Semantic colors

| Token | Value | Usage |
|---|---:|---:|
| Red/RedBrush | `#F25555` | 95 style uses |
| Red/RedPressedBrush | `#CC4747` | 15 style uses |
| Red/RedHoverBrush | `#D94C4C` | — |
| Red/RedBrush60 | `#F2555599` | — |
| Red / RedBrush20 | `#F2555533` | — |
| Green/DarkGreenBrush | `#00A955` | 12 style uses |
| Green/GreenBrush | — | 12 style uses; no value found |
| Green/GreenBrush10 | `#00CC661A` | — |
| Green/GreenBrush20 | `#00CC6633` | — |
| Green/GreenBrush60 | `#00CC6699` | — |
| Yellow/AccentYellowBrush | `#FFC52D` | 13 style uses |
| Yellow/YellowBrush | `#FFEA00` | — |
| Note / Container | `#FF781E` | — |
| Note / Background | `#FF781E29` | — |
| Pink/PinkBrush | `#F15085` | 139 style uses |
| Pink/PinkBrush20 | `#EF2E8333` | — |
| Pink/PinkBrush 10 | `#EF2E831A` | — |
| Hot pink | `#F531B3` | — |

### Multiplayer colors

| Token | Value | Usage |
|---|---:|---:|
| Multiplayer/Purple | `#5E5CE6` | 167 style uses |
| Multiplayer/Orange | `#FF9500` | 70 style uses |
| Multiplayer/Red | `#FF3B30` | 38 style uses |
| Multiplayer/Blue | `#007AFF` | 33 style uses |
| Multiplayer/Green | `#34C759` | — |
| Multiplayer/Lavender | `#AF52DE` | — |
| Multiplayer/Turquoise | `#2EC3C2` | — |
| Multiplayer/Grey | `#607D8B` | — |
| Multiplayer/Cerulean | `#36BAF5` | — |
| Multiplayer/Pink | `#EC407A` | — |
| Multiplayer/Violet | — | no value found |

### Gradients and overlays

- `tttt`: linear gradient from `#06A0E5` at 0% to `#0379C4` at 100%.
- `FG 30`: `#0000004D`.
- `FG 100`: `#000000CC`.
- `Transparent black / 200`: `#00000014`.
- `Transparent black / 600`: `#0000008C`.
- `Transparent black / 900`: `#000000E5`.
- `Light/WhiteBrush10`: `#FFFFFF1A`.
- `Light/WhiteBrush20`: `#FFFFFF33`.
- `Light/WhiteBrush40`: `#FFFFFF59`.
- `Light/WhiteBrush80`: `#FFFFFFCC`.
- `Clean / White`: `#FFFFFF`.

## Type scale

### Named styles

| Style | Font | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| Font Styles/Heading | Inter | 400 | 24px / 31px | -0.46px |
| Font Styles/Dialog title | Inter | 600 | 16px / 24px | -0.18px |
| Caption 1 / 400 | Roboto | 400 | 14px / 16px | 0.28px |
| Font Styles/Body 14 | Inter | 400 | 14px / 16px | -0.08px |
| Product/UI 13 Semi Bold | Inter | 600 | 13px / auto | -0.03px |
| Font Styles/Menu & Body | Inter | 400 | 12px / 16px | 0px |
| Font Styles/Menu & Body Medium | Inter | 500 | 12px / 16px | 0px |
| Font Styles/Section label | Inter | 600 | 12px / 16px | 0px |
| Font Styles/Monospaced (Code) | IBM Plex Mono | 400 | 12px / 16px | 0px |
| .doc / Regular | Inter | 400 | 12px / 16px | 0px |
| Caption 2 / 400 | Roboto | 400 | 12px / 16px | 0.24px |
| Font Styles/Section label | Inter | 600 | 11px / 16px | 0px |
| Font Styles/Subbody | Inter | 400 | 11px / 16px | 0.06px |
| Font Styles/Tabs 11 | Inter | 500 | 11px / 16px | 0px |
| Neg – UI 11 | Inter | 400 | 11px / 16px | 0.11px |
| Neg – UI 11 Medium | Inter | 500 | 11px / 16px | 0.11px |
| Pos – UI 11 Bold | Inter | 600 | 11px / 16px | 0.06px |
| Product/UI 11 Regular | Inter | 400 | 11px / 16px | 0.06px |
| Note – 400 | Roboto | 400 | 11px / 14px | 0px |

### Additional raw hierarchy

Raw typography also includes Inter Bold at 48px, 58.8px, 83.44px, and 100.12px; Inter Medium, Regular, and SemiBold at 58px or 58.8px; Inter SemiBold at 22px, 24px, and 32px; Inter Bold at 12px; Ubuntu Bold at 13px; Segoe WP at 12px; and Segoe UI at 12px.

## Spacing scale

_None found in source._

Component-level padding and gaps that are explicitly defined:

- Tooltip: padding `0 0 0 0px`, gap `0px`.
- Text Button: padding `1 0 1 0px`, gap `10px`.
- Cucumber: padding `0 0 0 0px`, gap `0px`.
- Badge: padding `2 8 2 8px`, gap `2px`.
- Tabs Billing: padding `2 2 2 2px`, gap `0px`.
- Input: padding `12 8 12 8px`, gap `10px`.
- Visual bell: padding `2 0 2 0px`, gap `10px`.

## Radius scale

_None found in source._

Explicit component radii:

- `2px`: Cucumber.
- `4px`: Pages dropdown, First Screen, Font Style, Color Palette, SitckerItem, Badge variants, Payment Failed Banner, Steper, Input, Photo and Illustration preview, Accordion, Team Plan, Personal Plan, Tabs Billing/Yearly.
- `8px`: Team Plan and Personal Plan.
- `35px`: Visual bell.

## Elevation & effects

| Effect | Definition | Intended use |
|---|---|---|
| Elevation/1 (Tooltip & Panel) | Drop shadow `2.5px`, offset `0 0.5`, color `#6060604D` | Tooltips, panels, surface-test, circle buttons, visual bell |
| Elevation/2 | Drop shadow `9px`, offset `0 3`, color `#60606038` | — |
| Elevation/3 (Pop-up) | Drop shadow `5px`, offset `0 5`, color `#60606036` | Pop-ups |
| Elevation/4 | Drop shadow `20px`, offset `0 5`, color `#60606030` | — |
| Assets/Modal shadow | Drop shadow `14px`, offset `0 2`, color `#00000026` | Modals |
| Assets/Suggestion Shadow | Drop shadow `20px`, offset `0 4`, color `#0000001F` | Suggestions |

## Components

Use only the extracted component families and their documented dimensions, fills, strokes, typography, radii, effects, and variants.

### Navigation and application chrome

- **Page item:** `190x32px`, fill `#FFFFFF`, Menu & Body Medium; variants Checkmark Off/On and Hover/Normal.
- **Pages dropdown:** `192x32px`, radius `4px`, fill `#FFFFFF`, `1px` `#E5E5E5` stroke; variants Hover/Normal/Open.
- **First Screen:** `350x80px`, radius `4px`, `1px` `#E5E5E5` stroke; types Import/New Cloud/New Local/Open, sizes Big/Small, states Hover/Normal/Pressed.
- **Welcome window panel:** `1157x48px`, fill `#FFFFFF`; supports empty/filled/focused search and A-Z/Largest/Recent sorting.
- **Home Tab:** `48x32px`, fill `#FFFFFF`; Active/Inactive/Inactive Hover.
- **New tab:** `26x32px`; Hover/Normal.
- **New Tab:** `16x16px`, fill `#FFFFFF`.
- **Left panel:** panel icons are `24x24px`; documented categories include Templates, Objects, Styles, Icons, Photos, Illustrations, UI Kits, Plugins, Hotkeys.
- **Documentaton_Logo:** `84x24px`, fill `#FFFFFF`, Inter Bold 12px.
- **Mininize, Full Screen, Close:** each `44x32px`, fill `#FFFFFF`.

### Buttons and controls

- **Text Button:** `71x32px`, horizontal, padding `1 0 1 0px`, gap `10px`, Section label; states Disabled or second, Focused, Hovered, Normal, Pressed, Second hovered.
- **Button w. dropdown:** `48x32px`; tool Active/Component 3/Inactive and state Default/Hover/Hover down/Panel open.
- **Icon button:** `32x32px`; Disabled/Focus/Hover/Normal.
- **Circle button:** `16x16px`, fill `#FFFFFF` where specified, Elevation/1; Normal/Hover/Pressed.
- **Checkbox button:** `32x32px`; Disabled/Hover/Off/Off focus/On/On focus/On hover.
- **Radio button:** `32x32px`, fill `#FFFFFF`.
- **Switch button:** `32x32px`; Off/On.
- **Toggle:** `40x32px`; Off/Mixed/On.
- **Input:** `75x32px`, radius `4px`, fill `#F4F4F4`; Normal uses no specified stroke, Selected uses `2px` `#179DE3`; padding `12 8 12 8px`, gap `10px`, Body 14.
- **Steper:** `75x32px`, radius `4px`, fill `#F4F4F4`; Normal/Hover -/Hover +.
- **Editable Dropdown:** `128x32px`, Menu & Body.
- **Tooltip:** `96x30px`, Subbody; positions Bottom Center/Left/Right, Left, Right, Top Center/Left/Right.
- **Visual bell:** Normal `305x40px`, radius `35px`, fill `#FFFFFF`, Elevation/1; Hover `301x40px`.
- **Accordion:** `240x32px`, Hover fill `#F4F4F4`, Section label.
- **Badge:** radius `4px`, height `20px`, padding `2 8 2 8px`, gap `2px`; assets `67x20px` with `#00CC661A`, pro `39x20px` with `#179DE31A`, basic `50x20px` with `#0000001A`.

### Property and layout controls

- **Font Style:** `208x32px`, radius `4px`; Hover/Normal/Selected.
- **Color Palette:** `208x32px`, radius `4px`; Hover/Normal/Selected.
- **Value Simple:** `128x32px`, Menu & Body.
- **Value Simple w. icon:** `128x32px`, Menu & Body; Disabled/Normal.
- **Value Multiple w. icon:** `152x32px`, Menu & Body.
- **Value Font:** `128x32px`, Section label and Menu & Body.
- **Value Image:** `121x32px`, Menu & Body.
- **Value Paint w. Opacity:** `121x32px`, Menu & Body.
- **Value Paint:** `85x32px`, Menu & Body.
- **Label:** `47x32px`, Menu & Body.
- **Section Title:** `128x32px`, Section label; Disabled/Normal.
- **Down icon:** `8x32px`.
- **Strip switch 4:** `104x32px`, fill `#FFFFFF`.
- **Option strip 2:** `56x32px`, fill `#FFFFFF`.
- **Option strip 3:** `80x32px`, fill `#FFFFFF`.
- **Padding, Padding horizontal, Padding vertical, Padding per corner, Corner, Distirbute:** `32x32px`; fills are `#FFFFFF` where specified.
- **Align32:** `32x32px`; Bot and Center variants.
- **Layout alignment and distribution families:** `24x24px`, including Layout Align Bot, Layout Align Horizontal, Layout Align Left, Layout Align Right, Layout Align Top, Layout Align Vertical, Layout Distribute Horizontal, and Layout Distribute Vertical.
- **Text alignment families:** `16x16px`, including Text Align Center, Text Align Right, Align Justify, and Text Align left.
- **Resize Horizontally, Resize Vertically, Fixed Size:** `16x16px`.
- **Bottom to Top, Top to Bottom, Horizontally Center, Vertically Center, Right to Left, Left to Right, No Layout:** `16x16px`, fill `#FFFFFF`.
- **Layer:** `16x16px`; All, Component, Instance, Text.
- **Eye16:** `16x16px`, fill `#FFFFFF`; Show/Hide.
- **Caret down, Caret right, Info 16, Pin 16, Down 16:** `16x16px`.
- **Color variable thumb, Duplicate, Local file, color swatch:** `16x16px`; fills `#FFFFFF` where specified.
- **Menu element:** `40x40px`, fill `#FFFFFF`.
- **Menu item / Separator:** `224x16px`.

### Canvas and creation tools

- **Toolbar, Select tool, Comment tool, Voice tool, Screencast tool, Stamp tool, Pencil tool, Prototype Play, Settings, Rotation, Reset, Text Generator, Add, Solid, Radial gradient, Collapse All, Create Component Actions, Edit Actions, Image fill, Interpendent Corners:** generally `32x32px`.
- **Prototype Play:** fill `#FFFFFF`; Active/Inactive/Inactive Hover.
- **Comment tool, Voice tool, Screencast tool, Stamp tool, Pencil tool:** Hover/Normal/Selected.
- **3D transform control:** `50x50px`, fill `#FFFFFF`; Hover X/Hover Y/Hover Z/No.
- **Cucumber:** `50x28px`, radius `2px`, fill `#FFFFFF`, `1px` `#179DE3` stroke; Simple/With Close, Default/Hover/Hover-Close/Pressed/Pressed-Close, Iconic No/Yes.
- **Fat Aligments:** `20x20px`, fill `#FFFFFF`; horizontal/vertical and Bot/Center/Left/Right/Top.
- **BB Normal:** `70x70px`, fill `#FFFFFF`.
- **Photo and Illustration preview:** `74x74px`, radius `4px`, fill `#FFFFFF`, `1px` `#0000000D` stroke.
- **Surface-test:** `100x100px`, radius `4px`, fill `#FFFFFF`, Elevation/1; elevation variants 01/02/03/04.
- **Emoji:** `16x16px`; Apple/Noto/Microsoft/Android.
- **Microsoft_new:** `14x14px`, fill `#FFFFFF`.

### Plans, billing, and messaging

- **Tabs Billing/Monthly:** `198x32px`, padding `2 2 2 2px`, fill `#FFFFFF`, Section label and Menu & Body.
- **Tabs Billing/Yearly:** `200x32px`, radius `4px`, padding `2 2 2 2px`, fill `#F4F4F4`, Section label and Menu & Body.
- **Payment Failed Banner:** `1098x144px`, radius `4px`, fill `#F25555`, Menu & Body and Dialog title.
- **Team Plan:** `640x488px`, radius `8px`, fill `#FFFFFF`; uses Subbody, Heading, Menu & Body, Section label, and Dialog title.
- **Personal Plan:** `640x488px`, radius `8px`, fill `#FFFFFF`; uses the same plan typography set.
- **Layer Tree Layer 2nd:** `244x32px`, selected fill `#179DE333`, Menu & Body.
- **Pages Item:** `244x32px`, unselected hover fill `#F4F4F4`, Menu & Body.

## Screen patterns

- **Editor workspace:** Combine a left panel, compact toolbar, 32px icon buttons, property controls, layer tree items, and canvas tools. Use 16px icons inside 32px controls.
- **Welcome window:** Use the `Welcome window panel` at `1157x48px` with search and sorting states, paired with `First Screen` cards at `350x80px`.
- **Navigation and page management:** Use `Page item`, `Pages dropdown`, `Pages Item`, `New tab`, and `Home Tab` with white surfaces, 32px heights, and `#F4F4F4` hover treatments.
- **Properties sidebar:** Group `Section Title`, `Label`, `Value Simple`, `Value Font`, `Value Image`, `Value Paint`, `Input`, `Toggle`, `Switch button`, padding, alignment, and layout families into compact 32px rows.
- **Overlays:** Use Tooltip, Visual bell, Surface-test, and popup elevation styles. Prefer Elevation/1 for tooltips and panels, Elevation/3 for pop-ups, and the documented modal or suggestion shadows for those contexts.
- **Plans and billing:** Present Team Plan and Personal Plan cards at `640x488px`, with Billing tabs and a `Payment Failed Banner` for error messaging.
- **Collaboration:** Use multiplayer colors for participant or presence indicators: Purple `#5E5CE6`, Orange `#FF9500`, Red `#FF3B30`, Blue `#007AFF`, Green `#34C759`, Lavender `#AF52DE`, Turquoise `#2EC3C2`, Grey `#607D8B`, Cerulean `#36BAF5`, and Pink `#EC407A`.

## Notes for implementers

- Do not infer spacing, radius, motion, or grid tokens beyond the explicit component values listed here.
- Use the named typography styles where available instead of substituting raw typography.
- Preserve the distinction between `#179DE3` accent blue and its translucent variants.
- Use `#333333` for the documented text color; use `#000000` and translucent black values only where the source specifies black or overlay treatment.
- Keep standard controls at their documented dimensions, especially the prevalent `32px` height.
- Use only documented component families. Raw extraction names such as `Delete/Close Small 16` should map to the allowed `Delete` family when implementing.
- Several source tokens have no value or are listed as `none`; do not assign replacement values.
- The source contains duplicate names with different capitalization or spacing. Prefer the concrete value and usage-ranked form listed in the palette above.
