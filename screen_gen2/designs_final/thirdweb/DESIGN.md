---
name: thirdweb-design-system-community
source: thirdweb Design System (Community)
kind: design-system-context
---

# thirdweb - Design System

## Overview

- Source: thirdweb Design System (Community), covering Foundation and Components pages.
- Primary typeface: Inter.
- Visual language combines a neutral UI foundation with vivid thirdweb gradients and colorful status or category colors.
- Available component families include `Chain Icon`, `Flag Icon`, `Icon`, `Product Icon`, `Social Media Icon`, `_Color`, and the listed `li:*` icon components.
- No local variable collections, spacing variables, radius variables, or motion variables were found.

## Design language

- Use Inter throughout the interface.
- Use neutral surfaces and text with colorful accents for emphasis, status, branding, and category identification.
- Use thirdweb gradients for branded hero areas, prominent visual accents, and product-oriented surfaces.
- Use iconography from the `li:*` family or the named icon families rather than introducing custom icon styles.
- The source includes a 34px by 34px icon grid with 0px gutters.

## Color palette

Ranked by raw usage:

| Color | Usage | Recommended role |
|---|---:|---|
| `#F0F0F0` | 392 | Primary light neutral surface or UI background |
| `#D80027` | 346 | Red status or accent |
| `#FFDA44` | 262 | Yellow status or accent |
| `#0052B4` | 211 | Blue status or accent |
| `#FFFFFF` | 117 | White surface or inverse content |
| `#000000` | 104 | Primary dark content |
| `#9747FF` | 103 | Purple accent |
| `#6DA544` | 98 | Green status or accent |
| `#338AF3` | 71 | Bright blue accent |
| `#496E2D` | 60 | Dark green accent |
| `#A2001D` | 49 | Dark red status or accent |
| `#0000000A` | 45 | Subtle black overlay |
| `#D9D9D9` | 27 | Neutral border or divider |
| `#FF9811` | 25 | Orange accent or warning |
| `#EBA4D2CC` | 19 | Translucent pink accent |
| `#ACABB1` | 12 | Muted neutral content |

### Gradients and effects

- Thirdweb gradient: linear gradient with stops `#F213A4` at 0%, `#E011A7` at 15%, `#B20DAF` at 46%, `#6806BB` at 88%, and `#5204BF` at 100%.
- New infrastructure gradient: linear gradient from `#3F2DAF` at 0% to `#917FFB` at 100%.
- New wallet gradient: `#7E28EE` and a linear gradient from `#2567FF` at 0% to `#22A7FF` at 100%.
- Light purple gradient: linear gradient from `#E5A1F5` at 0% to `#E169FF` at 100%, with `#00000033`.
- New contracts gradient: linear gradient from `#F4009F` at 0% to `#F856C8` at 100%.

## Type scale

All tokens use Inter. Tracking is `0px` unless noted.

| Token group | Size | Line height | Weights and styles |
|---|---:|---:|---|
| `8xl` | 128px | 90.89% | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `7xl` | 96px | 90.89% | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `6xl` | 72px | 90.89% | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `5xl` | 60px | 90.89% | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `4xl` | 48px | 90.89% | regular 400, medium 500, semibold 600, bold 700, semibold 600, link 500; tracking `-0.72px` |
| `3xl` | 36px | 40px | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `2xl` | 30px | 36px | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `xl` | 24px | 32px | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `lg` | 18px | 28px | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `lg/regular-spaced` | 18px | 32px | regular 400 |
| `base` | 16px | 24px | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `base/regular-spaced` | 16px | 28px | regular 400 |
| `sm` | 14px | 20px | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `sm/regular-spaced` | 14px | 24px | regular 400 |
| `xs` | 12px | 16px | regular 400, medium 500, semibold 600, bold 700, link 500 |
| `xs/regular-spaced` | 12px | 20px | regular 400 |

Additional raw typography found:

- Inter Medium, 8px.
- Merge One Regular, 6.05px.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- `Shadow/xs`: drop shadow, offset `0px 0px`, color `#0000000D`.
- `Shadow/sm`: drop shadow, offset `0px 1px`, color `#0000000D`.
- `Shadow/md`: drop shadows at `0px 1px` with `#0000000F` and `0px 1px` with `#0000001A`.
- `Shadow/lg`: drop shadows at `0px 2px` with `#0000000F` and `0px 4px` with `#0000001A`.
- `Shadow/xl`: drop shadows at `0px 2px` with `#0000000F` and `0px 4px` with `#0000001A`.
- `Shadow/2xl`: drop shadows at `0px 2px` with `#0000000F` and `0px 4px` with `#0000001A`.
- `Shadow/3xl`: drop shadow, offset `0px 25px`, color `#00000040`.
- `Shadow/Inner`: inner shadow, offset `0px 2px`, color `#0000000F`.

## Components

### Named component families

- `Chain Icon`
- `Flag Icon`
- `Icon`
- `Product Icon`
- `Social Media Icon`
- `_Color`

### Icon components

Use the source `li:*` icon family. Available icon groups include:

- Navigation: `li:chevron-down`, `li:chevron-left`, `li:chevron-right`, `li:chevron-up`, `li:menu`, `li:more-horizontal`, `li:more-vertical`, `li:arrow*` equivalents where present in the source family.
- Actions: `li:check`, `li:x`, `li:plus`, `li:minus`, `li:edit`, `li:copy`, `li:download`, `li:upload`, `li:search`, `li:settings`, `li:share`, `li:trash`.
- Status and feedback: `li:check-circle` equivalents where present, `li:info`, `li:help-circle`, `li:alert-circle` equivalents where present, `li:loader`, `li:circle`, `li:dot`.
- Product and platform: `li:wallet`, `li:package`, `li:box` equivalents where present, `li:globe`, `li:code`, `li:component`, `li:database`, `li:server`, `li:rocket`.
- Communication and social: `li:mail`, `li:message-circle`, `li:message-square`, `li:bell` equivalents where present, `li:github`, `li:facebook`, `li:instagram`, `li:linkedin`, `li:twitter`, `li:youtube`, `li:dribbble`, `li:slack`, `li:twitch`.
- Content and layout: `li:file`, `li:folder`, `li:image`, `li:calendar` equivalents where present, `li:list`, `li:grid-2x2`, `li:layout`, `li:columns`, `li:rows`, `li:table`.
- Media and controls: `li:play`, `li:pause`, `li:volume`, `li:mic`, `li:video`, `li:camera` equivalents where present, `li:fullscreen` equivalents where present.

Use only icon names explicitly available in the source component family list.

## Screen patterns

- Foundation pages establish colors, typography, icons, shadows, and logo usage.
- Component pages cover interaction patterns including accordion, alert, alert dialog, avatar, aspect ratio, badge, breadcrumb, button, calendar, card, carousel, checkbox, context menu, dialog, drawer, dropdown menu, hover card, input, input OTP, pagination, popover, progress, radio, select, select menu, sheet, slider, skeleton, switch, tabs, text area, toast, toggle, and tooltip.
- Prefer neutral UI surfaces using `#F0F0F0`, `#FFFFFF`, `#D9D9D9`, and `#000000`, then apply status colors or branded gradients for emphasis.
- Use the documented elevation styles for overlays, dialogs, popovers, drawers, cards, and floating content when elevation is required.

## Notes for implementers

- Do not infer spacing or corner-radius values; the source contains no spacing or radius tokens.
- Use Inter with the exact documented size, weight, line-height, and tracking combinations.
- Preserve the distinction between regular, medium, semibold, bold, link, and spaced typography tokens.
- Reuse the ranked neutral and status colors before introducing any additional color.
- Use only the documented gradient stops and shadow colors.
- Use source icon components rather than drawing replacement icons.
- The source contains image references for Superchain/Zora, Superchain/Base, and Superchain/Optimism Mainnet, but no usable image values were extracted.
