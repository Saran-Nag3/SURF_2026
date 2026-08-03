---
name: ant-design-x-community-design-system-for-ai-products-community
source: Ant Design X  (Community) - Design System for AI Products (Community)
kind: design-system-context
---

# ant-design - Design System

## Overview

Ant Design X community design system for AI products. The extraction covers the Cover, Components, Templetes [WIP], and doc pages. It provides chat-oriented components for conversations, message bubbles, prompts, attachments, senders, avatars, buttons, icons, and scrollbars.

No local variable collections, paint styles, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Clean, compact interface language centered on AI conversations.
- Predominantly white surfaces with light neutral fills and borders.
- Rounded containers use 4px, 6px, 8px, 12px, or 48px radii where specified.
- Typography uses PingFang SC and SF Pro Text for system text, with Space Grotesk Regular 14px also present as unstyled text.
- Purple `#9747FF` is the most prominent saturated raw color.
- A light blue-to-light purple gradient is used by `.custom`.
- Components support explicit interaction states including default, hover, focused, disabled, loading, typing, filled, selected, pressed, and uploaded.

## Color palette

Ranked raw colors:

| Color | Usage |
|---|---:|
| `#FFFFFF` | 38 uses |
| `#FFFFFF73` | 21 uses |
| `#9747FF` | 14 uses |

Additional component colors:

- `#00000005`: subtle fill and button default shadow.
- `#00000008`: tertiary shadow.
- `#0000000D`: box shadow.
- `#0000000F`: attachment and bubble fill.
- `#00000014`: box shadow.
- `#0000001F`: box shadow.
- `#0591FF1A`: primary button shadow.
- `#D9D9D9`: borders on attachment buttons and sender.
- `#E6F4FF`: start color of `.custom` gradient.
- `#F0F0F0`: prompt item border.
- `#F9F0FF`: end color of `.custom` gradient.

Gradient:

- `.custom`: linear gradient from `#E6F4FF` at 0% to `#F9F0FF` at 100%.

## Type scale

| Role | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Heading/1 | PingFang SC | 600 | 38px | 46px | 0px |
| Heading/2 | PingFang SC | 600 | 30px | 38px | 0px |
| Heading/3 | PingFang SC | 600 | 24px | 32px | 0px |
| Heading/3 | SF Pro Text | 600 | 24px | 32px | 0px |
| Heading/4 | PingFang SC | 600 | 20px | 28px | 0px |
| Heading/4 | SF Pro Text | 600 | 20px | 28px | 0px |
| Heading/5 | PingFang SC | 600 | 16px | 24px | 0px |
| Base/Normal | PingFang SC | 400 | 14px | 22px | 0px |
| Base/Strong | PingFang SC | 600 | 14px | 22px | 0px |
| SM/Normal | PingFang SC | 400 | 12px | 20px | 0px |
| Unstyled text | Space Grotesk | 400 | 14px | Not specified | Not specified |

## Spacing scale

No spacing tokens or spacing variables were found.

Specified component spacing:

- 4px: common component gap.
- 8px: common gap and padding value.
- 10px: `.header` gap.
- 12px: common padding and gap value.
- 15px: `*Attachments*` container gap.
- 16px: common horizontal and vertical padding.
- 0px: several fixed layouts use no padding or gap.

## Radius scale

Observed component radii:

- 4px: `*Button*`.
- 6px: `*Attachments* / button`.
- 8px: `*Attachments* / file`, `*Conversations* / item`, `*Bubble* / content`, `*Prompts* / custom-item`, `*Prompts* / item`, `*Welcom*`, and `*Prompts* / custom`.
- 12px: `*Sender*`.
- 48px: `*Avatar*`.

No radius variables were found.

## Elevation & effects

- `Component/Button/defaultShadow`: drop shadow with offset `0px 2px`, color `#00000005`.
- `Component/Button/primaryShadow`: drop shadow with offset `0px 2px`, color `#0591FF1A`.
- `boxShadowTertiary`: three drop shadows:
  - offset `0px 2px`, color `#00000005`
  - offset `0px 1px`, color `#00000005`
  - offset `0px 1px`, color `#00000008`
- `boxShadow`: three drop shadows:
  - offset `0px 9px`, color `#0000000D`
  - offset `0px 3px`, color `#0000001F`
  - offset `0px 6px`, color `#00000014`

## Components

Only the extracted component families are listed below.

### *Attachments*

- `file`: 166×68px, 8px radius, horizontal, fixed width and height, padding `12px 16px`, gap 8px, fill `#0000000F`. Uses `Base/Normal` and `Base/Strong`. Types: excel, image, md, mp3, pdf, ppt, word, zip.
- `button`: 68×68px, 6px radius, centered horizontal layout, fixed width and height, 1px `#D9D9D9` stroke, gap 4px, `Component/Button/defaultShadow`. Variants: hover false/hover4/true; uploaded false/true.
- Container: 764×258px, horizontal, fixed width and height, padding `12px 16px`, gap 15px.

### *Sender*

- Main sender: 760×56px, 12px radius, white fill, 1px `#D9D9D9` stroke, `boxShadowTertiary`, fill-width fixed-height, bottom padding 12px. Uses `SM/Normal`, `Base/Normal`, and `Heading/5`. States: default, disabled, filled, focused, hover, loading, typing.
- `upload`: 342×238px, white fill, vertical centered layout, padding 16px, gap 8px. Uses `Base/Normal` and `Heading/5`.
- `header`: 276×40px, horizontal, padding `8px 8px 8px 16px`, fill `#00000005`. Uses `Base/Normal`.

### *Conversations*

- Main container: 256×372px, white fill, vertical layout, padding 12px, gap 4px.
- `item`: 216×40px, 8px radius, horizontal centered layout, padding `0px 8px`, gap 8px. Uses `Base/Normal`. Types: default, group title, sub group. States: default, disabled, disabled hover, hover, selected, selected hover.

### *Bubble*

- Main bubble group: 1000×232px, vertical layout, gap 16px.
- `bubble`: 960×46px, horizontal, fill-width fixed-height, gap 12px. Uses `Base/Normal`. Placement: end/start. Width: 100%, auto, max-600. Avatar: false/true.
- `content`: 112×46px, 8px radius, horizontal, padding `12px 16px`, gap 4px, fill `#0000000F`. Uses `Base/Normal`. Variants: borderless, filled, outlined, shadow, variant5, variant6, variant7, variant8. Shapes: corner-end, corner-start, default, round.
- `footer`: 108×36px, horizontal, padding `12px 0px 0px`, gap 4px. Placement: end, space-between, start.
- `header`: 85×26px, horizontal, bottom padding 4px, gap 10px. Uses `Base/Normal`.

### *Prompts*

- `list`: 1000×72px, horizontal, fixed width and height, gap 12px. Uses `Base/Normal` and `Base/Strong`. Arrangements: horizontal, responsible, vertical, wrap.
- `item`: 277×72px, 8px radius, horizontal, padding `12px 16px`, gap 8px, white fill, 1px `#F0F0F0` stroke. Uses `Base/Normal` and `Base/Strong`. States: default, disabled, hover. Description: false/true.
- `custom-item`: 216×46px, 8px radius, horizontal, padding `12px 16px`, gap 8px, fill `#FFFFFF73`, 1px `#FFFFFF` stroke. Uses `Base/Normal`. Description: false/true.
- `title`: 411×30px, horizontal centered layout, bottom padding 8px. Uses `Base/Strong`.
- `custom-list`: 1040×246px, horizontal, gap 12px, vertically centered alignment. Uses `Base/Normal` and `Base/Strong`.
- `custom`: 297×246px, 8px radius, vertical, padding `12px 16px`, gap 4px, gradient fill from `#E6F4FF` to `#F9F0FF`. Uses `Base/Normal` and `Base/Strong`.

### *Welcom*

- 656×82px, 8px radius, fill-width fixed-height, horizontal, padding `12px 16px`, gap 16px, fill `#0000000F`. Uses `Base/Normal` and `Heading/4`. Variants: borderless, custom-dark, custom-light, filled.

### *Button*

- 24×24px, 4px radius, centered horizontal layout, fixed width and height, gap 4px.
- Types: outlined, text.
- States: default, disabled, focused, hover, loading, pressed.
- Sizes: default, small.
- Round: false/true.
- Icon: false/true.

### *Avatar*

- 32×32px, 48px radius.
- Color variants: blue, cyan, magenta, purple.

### *NestedIcon*

- 12×12px with `#FFFFFF` fill.
- Supported sizes: 12px, 14px, 16px, 20px, 24px, 32px, 40px, 48px, 56px.

### Scrollbar

- 12×100px, horizontal layout, fixed width and height, centered/min alignment, `#FFFFFF` fill.

### Icon

- Icon set includes two-tone and filled variants.
- Standard extracted size is 24×24px with `#FFFFFF` fill.
- Two-tone coverage includes communication, files, tools, commerce, navigation, status, and utility icons.
- Filled coverage includes the same functional categories plus social and platform icons.

### .brand

- `_None found in source._`

### .header

- `_None found in source._`

### .title

- `_None found in source._`

### .tag

- `_None found in source._`

### .description

- `_None found in source._`

### .logo

- `_None found in source._`

## Screen patterns

- Conversation workspace: combine `*Conversations*` as a 256×372px navigation panel with `*Bubble*` message groups and a 760×56px `*Sender*`.
- Message composition: use `*Sender*`, its `header`, upload surface, and `*Attachments*` for file states.
- Prompt discovery: use `*Prompts* / title`, `list`, `item`, `custom-list`, and `custom` for horizontal, vertical, wrapping, and custom prompt arrangements.
- Welcome state: use `*Welcom*` with `*Prompts*` to introduce an empty conversation.
- Message content: use `*Bubble* / bubble`, `content`, `header`, and `footer`, with optional `*Avatar*` and placement variants.

## Notes for implementers

- Use only the listed colors; no local color variables were extracted.
- Preserve the specified fixed dimensions when implementing fixed-size components; use fill sizing only where explicitly specified.
- Do not infer additional spacing, radius, typography, motion, grid, or elevation tokens.
- Use `Base/Normal` for standard interface text and `Base/Strong` for emphasized labels where specified.
- Keep interaction states explicit, especially for `*Button*`, `*Sender*`, `*Conversations*`, `*Prompts*`, and `*Attachments*`.
- Use `#D9D9D9` and `#F0F0F0` only for the borders specified by their components.
- Use `#FFFFFF73` for `*Prompts* / custom-item` fill and `#0000000F` for the specified attachment, bubble, and welcome fills.
- Use the provided shadow definitions rather than introducing new elevation values.
