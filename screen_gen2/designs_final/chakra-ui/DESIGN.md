---
name: chakra-ui-unofficial-ui-kit-community
source: Chakra UI unofficial UI kit (Community)
kind: design-system-context
---

# chakra-ui - Design System

## Overview

- Community Figma UI kit for Chakra UI.
- Source covers design-system foundations, components, pro patterns, notes, and miscellaneous internal/deprecated material.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.
- Primary UI typography is Inter. Additional source typography includes Hind, Source Sans Pro, Menlo, and Roboto.
- Most frequently used raw colors:
  - `#090B37` — 684 uses
  - `#FFFFFF` — 411 uses
  - `#000000` — 196 uses
  - `#00000000` — 125 uses
  - `#F7F7FB` — 98 uses
  - `#FFFFFF4D` — 51 uses
  - `#9747FF` — 47 uses
  - `#51526A` — 43 uses
  - `#5F6368` — 26 uses
  - `#E2E8F000` — 12 uses

## Design language

- Use Inter for the primary interface system.
- Use bold or semibold Inter for headings, controls, buttons, badges, and table headers.
- Use regular Inter for body copy, form values, menu items, and table rows.
- Use compact control typography with `99.15%` line height for buttons and heading styles.
- Use rounded controls and surfaces, with observed radii from `2px` through `8px`, plus fully circular avatars and badges using `9999px`.
- The component system includes explicit interaction states such as Default, Hover, Active, Disabled, Invalid, Checked, Empty, Indeterminate, Opened, and Closed.
- Color families include gray, blue, red, orange, yellow, green, teal, cyan, purple, pink, and social-brand palettes.

## Color palette

### Core and interface colors

Ranked by raw usage where counts are available:

- `#090B37` — interface extra-dark; 684 uses.
- `#FFFFFF` — white/interface white; 411 uses.
- `#000000` — black; 196 uses.
- `#00000000` — transparent; 125 uses.
- `#F7F7FB` — light neutral surface; 98 uses.
- `#FFFFFF4D` — white alpha; 51 uses.
- `#9747FF` — purple accent; 47 uses.
- `#51526A` — interface dark; 43 uses.
- `#5F6368` — browser-control neutral; 26 uses.
- `#E2E8F000` — transparent gray; 12 uses.

Additional core tokens:

- `gray/50`: `#F7FAFC`
- `gray/100`: `#EDF2F7`
- `gray/200`: `#E2E8F0`
- `gray/300`: `#CBD5E0`
- `gray/400`: `#A0AEC0`
- `gray/500`: `#718096`
- `gray/600`: `#4A5568`
- `gray/700`: `#2D3748`
- `gray/800`: `#1A202C`
- `gray/900`: `#171923`
- `blackAlpha/50` through `blackAlpha/900`: `#0000000A`, `#0000000F`, `#00000014`, `#00000029`, `#0000003D`, `#0000005C`, `#0000007A`, `#000000A3`, `#000000CC`, `#000000EB`
- `whiteAlpha/50` through `whiteAlpha/900`: `#FFFFFF0A`, `#FFFFFF0F`, `#FFFFFF14`, `#FFFFFF29`, `#FFFFFF3D`, `#FFFFFF5C`, `#FFFFFF7A`, `#FFFFFFA3`, `#FFFFFFCC`, `#FFFFFFEB`
- `transparent`: `#00000000`
- `black`: `#000000`
- `white`: `#FFFFFF`

### Semantic and brand palettes

- Blue:
  - 50 `#EBF8FF`
  - 100 `#BEE3F8`
  - 200 `#90CDF4`
  - 300 `#63B3ED`
  - 400 `#4299E1`
  - 500 `#3182CE`
  - 600 `#2B6CB0`
  - 700 `#2C5282`
  - 800 `#2A4365`
  - 900 `#1A365D`
- Red:
  - 50 `#FFF5F5`
  - 100 `#FED7D7`
  - 200 `#FEB2B2`
  - 300 `#FC8181`
  - 400 `#F56565`
  - 600 `#C53030`
  - 700 `#9B2C2C`
  - 800 `#822727`
  - 900 `#63171B`
- Green:
  - 50 `#F0FFF4`
  - 100 `#C6F6D5`
  - 200 `#9AE6B4`
  - 300 `#68D391`
  - 400 `#48BB78`
  - 500 `#38A169`
  - 600 `#2F855A`
  - 700 `#276749`
  - 800 `#22543D`
  - 900 `#1C4532`
- Orange:
  - 50 `#FFFAF0`
  - 100 `#FEEBC8`
  - 200 `#FBD38D`
  - 300 `#F6AD55`
  - 400 `#ED8936`
  - 600 `#C05621`
  - 700 `#9C4221`
  - 800 `#7B341E`
  - 900 `#652B19`
- Yellow:
  - 50 `#FFFFF0`
  - 100 `#FEFCBF`
  - 200 `#FAF089`
  - 300 `#F6E05E`
  - 400 `#ECC94B`
  - 500 `#D69E2E`
  - 600 `#B7791F`
  - 700 `#975A16`
  - 800 `#744210`
  - 900 `#5F370E`
- Teal, cyan, purple, pink, Lime, and social-brand palettes are present as extracted tokens. Preserve their source token-to-color mappings rather than substituting colors.
- Duplicate mappings exist. For example, `gray/200` appears as both `#FFFFFF` and `#E2E8F0`; `gray/300` and `gray/500` also appear as `#FFFFFF` in some token entries. Prefer the explicitly named semantic token in the relevant component context.

## Type scale

### Primary Inter scale

- 12px: regular, medium, semibold, bold variants.
- 14px: regular, medium, semibold, bold variants.
- 16px: regular, medium, semibold, bold variants.
- 18px: regular, medium, semibold variants.
- 20px: regular, medium, semibold variants.
- 24px: regular and semibold variants.
- 30px: regular.
- 36px: regular.
- 48px: regular.
- 60px: regular.
- 14px–72px: Inter Bold heading styles across mobile and desktop variants.
- Heading desktop sizes: 14px, 16px, 20px, 30px, 36px, 48px, 60px, 72px.
- Heading mobile sizes: 14px, 16px, 20px, 24px, 30px, 36px, 48px, 60px.

### Named typography tokens

- `text/xs/regular`: Inter Regular 12px, line height `123.94%`.
- `text/sm/regular`: Inter Regular 14px, line height `123.94%`.
- `text/md/regular`: Inter Regular 16px, line height `123.94%`.
- `text/lg/regular`: Inter Regular 18px, line height `123.94%`.
- `text/xl/regular`: Inter Regular 20px, line height `123.94%`.
- `text/2xl/regular`: Inter Regular 24px, line height `123.94%`.
- `text/md/medium`: Inter Medium 16px, line height `123.94%`.
- `text/lg/medium`: Inter Medium 18px, line height `123.94%`.
- `text/md/semibold`: Inter SemiBold 16px, line height `123.94%`.
- `text/lg/semibold`: Inter SemiBold 18px, line height `123.94%`.
- `text/md/bold`: Inter Bold 16px, line height `123.94%`.
- `misc/button/xs/default`: Inter SemiBold 12px, line height `99.15%`.
- `misc/button/sm/default`: Inter SemiBold 14px, line height `99.15%`.
- `misc/button/md/default`: Inter SemiBold 16px, line height `99.15%`.
- `misc/button/lg/default`: Inter SemiBold 18px, line height `99.15%`.
- `misc/tag/sm`: Inter Medium 12px, line height `99.15%`.
- `misc/tag/md`: Inter Medium 14px, line height `99.15%`.
- `misc/tag/lg`: Inter Medium 16px, line height `99.15%`.
- `misc/badge`: Inter Bold 12px, line height `auto`.
- `misc/code`: Menlo Regular 14px, line height `auto`.
- `misc/kbd`: Menlo Bold 12px, line height `16px`.
- `misc/circular-progress`: Inter Regular 11.52px, line height `123.94%`.
- `misc/th/sm`: Inter Bold 12px, line height `16px`, tracking `0.6px`.
- `misc/th/lg`: Inter Bold 14px, line height `20px`, tracking `0.7px`.
- `misc/tr/sm`: Inter Regular 14px, line height `16px`.
- `misc/tr/md`: Inter Regular 16px, line height `20px`.

### Other source typography

- `Headings / H1`: Source Sans Pro Bold 64px, line height `87.51%`, tracking `-1.28px`.
- `Headings / H4`: Source Sans Pro SemiBold 26px, line height `95.47%`, tracking `-0.26px`.
- `Paragraphs/P2`: Hind Regular 26px, line height `93.69%`.
- `Paragraphs/P4`: Hind Regular 18px, line height `93.69%`.
- Raw extraction also contains Hind 8px, Roboto 12px and 14px, Inter 38.4px, Inter SemiBold 60px, and Inter Black 72px.

## Spacing scale

No spacing variables found in source.

Observed component spacing values:

- `0px`, `3px`, `4px`, `8px`, `12px`, and `16px`.
- Button padding: vertical `0px`, horizontal `8px`; gap `8px`.
- AccordionButton padding: vertical `8px`, horizontal `16px`.
- Alert padding: vertical `12px`, horizontal `16px`.
- `.My Component` padding: `16px` on all sides; gap `16px`.
- Badge padding: vertical `0px`, horizontal `4px`.
- Code padding: vertical `0px`, horizontal `3px`; gap `8px`.
- AvatarGroup gap: `-16px`.
- Components commonly use zero padding and zero gap where the source specifies it.

## Radius scale

No radius variables found in source.

Observed radii:

- `2px`: Badge, Code.
- `4px`: `Icon/MdIndeterminateCheckBox`.
- `6px`: `Icon/IoCheckbox`, Button, Close Button.
- `8px`: `.My Component`.
- `9999px`: Avatar and AvatarBadge.
- `0px`: used where no radius is specified or where square geometry is implied.

## Elevation & effects

- `shadows/xs`: drop shadow `0px` offset `0 0`, color `#0000000D`.
- `shadows/sm`: drop shadow `2px` offset `0 1`, color `#0000000D`.
- `shadows/md`: drop shadows `4px` offset `0 2` `#0000000F` and `6px` offset `0 4` `#0000001A`.
- `shadows/lg`: drop shadows `6px` offset `0 4` `#0000000D` and `15px` offset `0 10` `#0000001A`.
- `shadows/xl`: drop shadows `10px` offset `0 10` `#0000000A` and `25px` offset `0 20` `#0000001A`.
- `shadows/2xl`: drop shadow `50px` offset `0 25`, color `#00000040`.
- `shadows/base`: drop shadows `2px` offset `0 1` `#0000000F` and `3px` offset `0 1` `#0000001A`.
- `shadows/dark-lg`: drop shadows `40px` offset `0 15` `#00000066`, `10px` offset `0 5` `#00000033`, and `0px` offset `0 0` `#0000001A`.
- `shadows/inner`: inner shadow `4px` offset `0 2`, color `#0000000F`.
- `kbd-inner`: inner shadow `0px` offset `0 -2`, color `#E2E8F0`.
- `shadows/outline`: drop shadow `0px` offset `0 0`, color `#3F99E199`.
- `right / 2px`: drop shadow `0px` offset `2 2`, color `#090B37`.

## Components

Available component families:

- AccordionButton
- AccordionItem
- Alert
- Answer 1 Frame
- Answer 2 Frame
- Avatar
- AvatarBadge
- AvatarGroup
- Badge
- Breadcrumb
- Button
- Checkbox
- Circular Progress
- Close Button
- Code
- Divider with with text
- Drawer
- Feature with three columns centred
- FormControl
- Icon
- Icon Button
- Input
- Kbd
- Menu
- MenuDivider
- MenuGroup
- MenuItem
- MenuItemOption
- Modal
- Navbars
- NumberInput
- PinInput
- Popover
- Progress
- Radio
- Select
- Skeleton
- Skeleton with Slot
- SkeletonCircle
- Slider
- Spinner
- Stat
- StatArrow-decrease
- StatArrow-increase
- Stats with divider
- Switch
- Tab
- TabList
- TabPanel
- Tabs
- Table (column)
- Tag
- Toast
- Tooltip
- With image background

Supporting and prototype families:

- `.AlertIcon`
- `.Avatar`
- `.AvatarBadge`
- `.Button-transparent`
- `.Chrome`
- `.Color`
- `.Component Checklist`
- `.Documentation`
- `.Drawer Example Slot`
- `.Feature`
- `.Logo`
- `.Menu Prototype Example`
- `.My Body`
- `.My Component`
- `.My ModalBody`
- `.My ModalFooter`
- `.PopoverBody Prototype Example`
- `.Radii example`
- `.Shadow Group`
- `.Skeleton Slot Example`
- `.Slot`
- `.TabList Prototype Example`
- `.TabPanel`
- `.TabPanel-1`
- `.TabPanel-2`
- `.Textarea-prototype-resize`

### Known component specifications

- `AccordionItem`: `319x40px`; vertical; padding `0px`; gap `0px`; width fill; states Closed and Opened.
- `AccordionButton`: `257x40px`; horizontal; padding `8px 16px`; space-between/center alignment; states Default and Hover.
- `Alert`: `597x48px`; horizontal; padding `12px 16px`; min/center alignment; blue/100 fill; statuses error, info, loading, success, warning; variants left-accent, solid, subtle, top-accent.
- `Avatar`: `128x128px`; centered; circular `9999px` radius; gray/400 fill; supports sizes 2xl, 2xs, lg, md, sm, xl, xs; image, initials, or neither; optional border.
- `AvatarBadge`: `64x64px`; circular `9999px` radius; green/500 fill; white `10px` stroke.
- `AvatarGroup`: `352x128px`; horizontal; gap `-16px`; supports avatar sizes 2xl, 2xs, lg, md, sm, xl, xs.
- `Badge`: `40x15px`; `2px` radius; horizontal; padding `0 4px`; gray/100 fill; outline, solid, and subtle variants.
- `Breadcrumb`: `73x24px`; horizontal; Default and Hover states.
- `Button`: `108x24px` base example; `6px` radius; horizontal; padding `0 8px`; gap `8px`; gray/100 fill; ghost, link, outline, and solid variants; Active, Default, Disabled, and Hover states; lg, md, sm, and xs sizes; blue and gray color schemes.
- `Checkbox`: `56x21px`; horizontal; gap `8px`; lg, md, and sm sizes; Checked, Empty, and Indeterminate states; Default, Disabled, Hover, and Invalid states.
- `Code`: `251x16px`; `2px` radius; padding `0 3px`; gap `8px`; gray/100 fill.
- `Drawer`: `320x130.33px`; vertical; width fixed and height fill; white fill; placements full, left, right, top, and bottom; sizes lg, md, n/a, sm, xl, xs.
- `.My Component`: `406x199px`; `8px` radius; vertical; padding `16px`; gap `16px`; white fill.
- `.My Body`: `71x24px`; white fill; Inter Regular 16px.
- `Icon`: extracted icons are generally `16x16px`; many use white fill. Named icons include AddIcon, ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, CheckIcon, CloseIcon, DeleteIcon, EditIcon, EmailIcon, ExternalLinkIcon, HamburgerIcon, InfoIcon, LinkIcon, LockIcon, MinusIcon, SearchIcon, SettingsIcon, SmallCloseIcon, SpinnerIcon, StarIcon, SunIcon, TimeIcon, UnlockIcon, ViewIcon, WarningIcon, and related variants.
- `Close Button`: `24x24px`; `6px` radius; lg, md, and sm sizes; Active, Default, Disabled, Disabled-Hover, and Hover states.

## Screen patterns

- Foundation pages: Border radius, Breakpoints, Colors, Icons, Shadows, Spacing, Typography.
- Component documentation pages: Accordion, Alert, Avatar, Badge, Breadcrumb, Button, Checkbox, Circular Progress, Close Button, Code, Drawer, Form Control, Icon Button, Input, Keyboard Key, Menu, Modal, Number Input, Pin Input, Popover, Progress, Radio, Range Slider, Select, Skeleton, Slider, Spinner, Stat, Switch, Table, Tabs, Tag, Textarea, Toast, Tooltip.
- Pro patterns: Dividers, Features, Heroes, Navbars, and Stats.
- Documentation and kit guidance pages: Cover, Please read, How to use Slots, How to use this file, Next steps.
- Internal or deprecated areas: Deprecated and Internal.
- Common composed patterns include navigation bars, tab lists and panels, drawers, modals, popovers, menus, alerts, forms, stat groups, feature layouts, skeleton slots, and image-background heroes.

## Notes for implementers

- Use only the extracted token values; do not create substitute colors, spacing values, radii, or effects.
- Prefer the named typography tokens over raw text styles when implementing standard UI.
- Preserve component variants and states exactly where listed.
- Use `#FFFFFF` for explicitly white surfaces and fills; note that some duplicate semantic entries map inconsistently in the extraction.
- Use the extracted social palettes only for social-brand contexts: LinkedIn, Facebook, Messenger, WhatsApp, Twitter, and Telegram.
- No responsive breakpoint values were extracted, despite a Breakpoints source page.
- No spacing or radius variable scale was extracted; use only observed component measurements.
- No motion guidance was extracted.
- Use the available component families rather than introducing new component names.
