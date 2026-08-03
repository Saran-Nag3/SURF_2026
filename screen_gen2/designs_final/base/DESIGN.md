---
name: ui-kit-base-community
source: UI KIT BASE (Community)
kind: design-system-context
---

# base - Design System

## Overview

- Figma source: UI KIT BASE (Community).
- Source page: All pages, 27 pages covering navigation, style, components, color, typography, layout, effects, icons, and component examples.
- No local variable collections were found.
- The system uses Inter as the primary typeface, with Montserrat Medium also present.
- Components are generally compact, rectangular controls with 4px radii; tags use a 50px radius.
- Primary layout grid: 1440px canvas, 12 columns, 8px grid, 93.67px section, 20px gutter, stretch alignment.

## Design language

- Interface style: compact, utility-focused controls with restrained radii and subtle shadows.
- Primary color: `#482BD9`; primary hover: `#3B25A8`; primary pressed: `#220F80`.
- Semantic states:
  - Danger: `#B20000`, background/border `#FBEFEF`.
  - Success: `#007505`, background/border `#EBF8EC`.
  - Warning: `#E5C100`, background/border `#FAF7E6`.
  - Info: `#0065C1`, background/border `#F0F8FF`.
- Most controls use white surfaces and gray text/borders.
- Use 8px grid alignment where layout is unspecified.

## Color palette

Colors are consolidated by exact value. Raw unstyled colors are ranked first by reported usage.

- `#000000` — raw unstyled; 11,596 uses.
- `#FFFFFF` — white surface, raw unstyled; 77 uses. Also used by Gray/300, Gray/400, Gray_02/1O, Neutral0, White, primary focus, checkbox, radio, switch, icon fills, and Component 1.
- `#482BD9` — primary main; Tab inner shadow.
- `#3B25A8` — primary hover.
- `#220F80` — primary pressed.
- `#F6F4FF` — primary background and border.
- `#B20000` — danger main.
- `#940000` — danger hover.
- `#590000` — danger pressed.
- `#FBEFEF` — danger background and border.
- `#F9D9D9` — danger focus.
- `#007505` — success main.
- `#005803` — success hover.
- `#044407` — success pressed.
- `#EBF8EC` — success background and border.
- `#C5E1C6` — success focus.
- `#E5C100` — warning main.
- `#A38900` — warning hover.
- `#726000` — warning pressed.
- `#FAF7E6` — warning background and border.
- `#FFF4B9` — warning focus.
- `#0065C1` — info main.
- `#004889` — info hover.
- `#002B52` — info pressed.
- `#F0F8FF` — info background and border.
- `#D9E8F4` — info focus.
- `#0A0A0A` — Gray_02/100.
- `#1A1A1A` — Gray_02/10O.
- `#2E3A59` — Shade / 700.
- `#424242` — Gray_02 / 9O and Gray_02/90.
- `#616161` — Gray_02 / 8O.
- `#757575` — Gray_02 / 7O.
- `#9E9E9E` — Gray_02 / 6O.
- `#EDEDED` — Gray_02 / 3O.
- `#F5F5F5` — Gray_02 / 2O, 4O, and 5O.
- `#00000014` — shadow opacity.
- `#0000001A` — shadow opacity.
- `#0000001F` — shadow opacity.

## Type scale

Typeface tokens use 0px tracking throughout.

- 36px / 44px — Inter Medium, 500; `Heding/Inter/36/Medium`.
- 28px / 36px — Inter Medium, 500; `Heding/Inter/28/Medium`.
- 20px / 28px — Inter Medium, 500; `Heding/Inter/20/Medium`.
- 16px / 24px — Inter Medium, 500; `Bode Text/Inter/16/Medium`.
- 16px / 24px — Inter Regular, 400; `Bode Text/Inter/16/Regular`.
- 14px / 20px — Inter Medium, 500; `Bode Text/Inter/14/Medium`.
- 14px / 20px — Inter Regular, 400; `Bode Text/Inter/14/Regular`.
- 14px / 20px — Montserrat Medium, 500; `Body Text/Montserrat/14/Medium`.
- 12px / 16px — Inter Medium, 500; `Bode Text/Inter/12/Medium`.
- 12px / 16px — Inter Regular, 400; `Bode Text/Inter/12/Regular` and `Body Text/Inter/12/Regular`.
- Raw typography also includes Inter Medium at 40px and Montserrat SemiBold at 14px.

## Spacing scale

No spacing variables were found.

Recorded component spacing values:

- 0px padding: Radio_btn, Switch_label, Textarea, Select_Label, Imput.
- 2px vertical, 8px horizontal: Tag.
- 4px vertical, 0px horizontal: Dropdown_icon.
- 4px gap: Tag, Accordion, Button, Textarea, Select_Label, Imput, Select.
- 6px vertical, 16px horizontal: Dropdown_item, Select_item.
- 6px vertical, 12px horizontal: Select.
- 8px vertical, 16px horizontal: Accordion, Button, Menu_vertical, Menu_horizontal.
- 8px all sides: Dropdown_btn.
- 8px vertical, 40px right/16px left: Menu_vertical_inner.
- 8px vertical, 12px horizontal: Tab.
- 14px vertical, 16px horizontal: Cell_tab, Header_tab.
- 16px gap: not defined as a component spacing token; use only where explicitly present in source.
- 24px all sides: Modal, Notification.
- Layout grid: 8px base grid; 20px column gutter.

## Radius scale

No radius variables were found.

Recorded radii:

- 4px — Button, Modal, Notification, Dropdown_icon, Dropdown_btn, Select, Menu_vertical_inner, Menu_vertical, Menu_horizontal.
- 50px — Tag.

## Elevation & effects

- Shadow/2px: drop shadow, 4px blur, offset `0 2px`, color `#0000001F`.
- Shadow/4px: drop shadow, 8px blur, offset `0 4px`, color `#0000001A`.
- Shadow/6px: drop shadow, 12px blur, offset `0 6px`, color `#0000001A`.
- Shadow/8px: drop shadow, 16px blur, offset `0 8px`, color `#00000014`.
- Tab inner shadow: `0px` blur, offset `0 -3px`, color `#482BD9`.
- Shadow/6px is used by Modal, Notification, and Dropdown_icon.
- Shadow/2px is used by Select.

## Components

All dimensions are fixed unless stated otherwise.

- **Tag** — 55×20px; 50px radius; horizontal; padding 2px 8px; 3px gap; centered; fill `#F5F5F5`; 1px stroke `#F5F5F5`; text Inter Medium 12/16. Variants: Danger, Disabled, Info, Primary, Success, Warning; property on/off.
- **Accordion** — 440×40px; horizontal; padding 8px 16px; 4px gap; fill `#F5F5F5`; text Inter Medium 14/20. Variants: off/on.
- **Button** — 77×36px; 4px radius; horizontal; padding 8px 16px; 4px gap; centered; fill `#482BD9`; text Inter Medium 14/20. Variants: icon, text, text_icon; large/normal; outline, primary, secondary, text_btn; default, disabled, focus, hover, pressed.
- **Checkbox** — 64×20px; fill `#FFFFFF`; text Inter Regular 14/20. Variants: active, inactive, indeterminate; default, disabled, focus, hover; label off/on.
- **Radio_btn** — 64×20px; horizontal; 8px gap; fill `#FFFFFF`; text Inter Regular 14/20. Variants: default, disabled, focus, hover; check off/on.
- **Radio** — 20×20px; fill `#FFFFFF`. Variants: default, disabled, focus, hover; check off/on.
- **Modal** — 588×264px; 4px radius; vertical; padding 24px; 8px gap; fill `#FFFFFF`; Shadow/6px. Text: Inter Medium 20/28, Inter Regular 16/24, Inter Medium 14/20. States: danger, defauld, success, warning.
- **Notification** — 588×204px; 4px radius; vertical; padding 24px; 8px gap; fill `#FBEFEF`; 2px stroke `#FBEFEF`; Shadow/6px. Text: Inter Medium 20/28 and Inter Regular 16/24. States: danger, success, warning.
- **Switch_label** — 72×20px; horizontal; 8px gap; text Inter Regular 14/20. States: defalt, disabled, focus, hover; active off/on.
- **Switch** — 28×16px; fill `#FFFFFF`. States: defait, disabled, focus, hover; active off/on.
- **Textarea** — 256×122px; vertical; 4px gap; text Inter Regular 12/16, 14/20, 16/24. States: default, disabled, filled, focus, hover; label off/on; helper text off/on.
- **Dropdown_icon** — 190×176px; 4px radius; vertical; padding 4px 0; fill `#FFFFFF`; Shadow/6px; text Inter Medium and Regular 14/20. Variant: icon off/on.
- **Dropdown_item** — 125×32px; horizontal; padding 6px 16px; 8px gap; text Inter Regular 14/20. States: default, disabled, focus, hover, pressed; icon off/on.
- **Dropdown_btn** — 137×36px; 4px radius; horizontal; padding 8px; 10px gap; space-between alignment; fill `#FFFFFF`; text Inter Regular 14/20. States: default, disabled, focus, hover, pressed.
- **Rating** — 144×32px; horizontal; padding 4px; 4px gap. Five independent on/off properties.
- **Select_item** — 102×32px; horizontal; padding 6px 16px; 8px gap; text Inter Regular 14/20. States: default, disabled, focus, hover, pressed, selected; icon off/on.
- **Select_Label** — 266×60px; vertical; 4px gap; text Inter Medium 14/20. States: default, desabled, filled, focus, hover.
- **Select** — 256×32px; 4px radius; horizontal; padding 6px 12px; 4px gap; fill `#FFFFFF`; 1px stroke `#F5F5F5`; Shadow/2px; text Inter Medium 14/20. States: default, desabled, filled, focus, hover.
- **Menu_vertical_inner** — 256×36px; 4px radius; horizontal; padding 8px 16px 8px 40px; 8px gap; fill `#FFFFFF`; text Inter Medium 14/20. States: Default, Hover, active, disable, focussed, pressed; chevron off/on.
- **Menu_vertical** — 256×36px; 4px radius; horizontal; padding 8px 16px; 8px gap; fill `#FFFFFF`; text Inter Medium 14/20. States: active, default, disabled, focussed, hover, pressed; icon off/on; chevron off/on.
- **Menu_horizontal** — 151×36px; horizontal; padding 8px 16px; 8px gap; fill `#FFFFFF`; text Inter Medium 14/20. States: active, default, disabled, focussed, hover, pressed; icon off/on; chevron off/on.
- **Imput** — 328×76px; vertical; 4px gap; text Inter Regular 12/16 and 14/20. States: Default, disabled, focussed, hover, pressed; status Default, Error, Success; icon, helper text, label off/on.
- **Tab** — 49×36px; horizontal; padding 8px 12px; 10px gap; centered; fill `#FFFFFF`; Tab inner shadow; text Inter Medium 14/20. States: default, disabled, focus, hover, pressed; line off/on.
- **Cell_tab** — 140×48px; horizontal; padding 14px 16px; 10px gap; fill `#FFFFFF`; text Inter Regular 14/20. Types: checkbox, link, tag, text. States: active, default, disabled.
- **Header_tab** — 52×48px; horizontal; padding 14px 16px; 10px gap; fill `#F5F5F5`; text Inter Regular 14/20. Properties: checkbox, text.
- **Component 1** — 102×8px; fill `#FFFFFF`.
- **Icon families** — Phosphor Icons Fill, Phosphor Icons Regular, and Fether Icons. Phosphor Fill icons are 24×24px with fill `#FFFFFF`.
- **Radio_Button**, **Modal_Windows**, **Dropdown_line**, **Select_menu**, and **Vertical** are source component families without additional specifications in the extraction.

## Screen patterns

- **Navigation** — use Menu_vertical, Menu_vertical_inner, Menu_horizontal, Header_tab, and Tab patterns.
- **Style** — central reference for color, typography, layout, effects, and icon usage.
- **Components** — shared component showcase organized around compact fixed-size controls.
- **Color** — semantic danger, success, warning, info, primary, gray, white, and neutral treatments.
- **Typography** — Inter hierarchy from 12px through 36px, with raw 40px Inter Medium also present.
- **Layout** — 1440px, 12-column grid with 8px base grid and 20px gutter.
- **Effects** — four drop-shadow levels and the Tab inner shadow.
- **Forms** — Imput, Textarea, Checkbox, Radio, Switch, Dropdown, and Select states support default, disabled, focus, hover, and related validation states.
- **Feedback** — Modal and Notification use semantic status variants and elevation.
- **Data/navigation controls** — Rating, Tab, Cell_tab, Header_tab, and menu families provide selection and navigation patterns.
- **Icons** — use the listed icon families at 24×24px where specified.
- **Table** — represented by Header_tab and Cell_tab patterns in the source pages.

## Notes for implementers

- Use only the listed colors; consolidate exact duplicate aliases to the same value.
- Prefer Inter for interface text. Use the specified weight, size, and line height combinations rather than approximating.
- Preserve fixed component dimensions when reproducing the documented component examples.
- Treat source typos such as `defauld`, `defalt`, `defait`, `desabled`, `focussed`, and `Imput` as source variant/component names, not corrected semantic values.
- No spacing, radius, or motion variables were defined; use only the recorded component values.
- Use semantic state colors consistently: danger, success, warning, and info each have main, hover, pressed, focus, and background/border values where provided.
- Keep shadows exact, including blur, offset, and opacity color.
- No motion guidance was found in the source.
