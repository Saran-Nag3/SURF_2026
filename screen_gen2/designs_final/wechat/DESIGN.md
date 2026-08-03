---
name: wechat-ui-apple-vision-pro-community-community
source: WeChat UI - Apple Vision Pro(Community) (Community) / UI
kind: design-system-context
---

# wechat - Design System

## Overview

Apple Vision Pro community WeChat UI with a translucent, glass-like interface. The extracted UI centers on a two-pane messaging experience: a message list, conversation content, floating navigation tabs, and rounded action controls.

Primary extracted component families: `Tab`, `未读`, `消息列表Row`, `消息列表头像`, `添加`, `表情`, `视频`, `语音`, `静音`.

No local variable collections, spacing variables, radius variables, motion tokens, grid styles, or local effect styles were found.

## Design language

- Use translucent white overlays and dark translucent surfaces.
- Use large rounded containers and circular controls.
- Use white iconography throughout.
- Use PingFang SC for Chinese UI text and SF Pro Text for the extracted subheadline token.
- Use red only for unread indicators.
- Selected message rows use a translucent white fill.
- The main shell uses background blur, rounded corners, and gradient strokes.
- Navigation is vertically stacked in a rounded floating rail.
- Messaging layouts use fixed-height rows with consistent horizontal gaps.

## Color palette

Ranked by raw usage:

| Color | Raw usage | Role |
|---|---:|---|
| `#3B5F76` | 45 | Group-avatar tile fill |
| `#FFFFFF99` | 33 | Secondary text, muted icon fill, translucent controls |
| `#FFFFFF` | 31 | Primary labels and icon fills |
| `#FFFFFF1A` | 11 | Translucent surfaces and control backgrounds |
| `#FFFFFFE5` | 9 | Primary message-row title text |
| `#9747FF` | 4 | Component-set inspection stroke |
| `#00000033` | 3 | Dark translucent surfaces |
| `#FF3B30` | 3 | Red unread indicator |
| `#FFFFFF4D` | 3 | Voice-control and navigation-control surfaces |

Named color tokens:

- `Default/SystemRed/Light` → `#FF3B30`
- `Label Color/Dark/Primary` → `#FFFFFF`

## Type scale

| Size | Family | Weight | Line height | Tracking | Usage |
|---:|---|---:|---:|---:|---|
| 20px | PingFang SC | Semibold | — | — | Heading and primary message-row title |
| 18px | PingFang SC | Medium | — | — | Raw typography level |
| 16px | PingFang SC | Medium | — | — | Message preview text |
| 15px | SF Pro Text | Semibold (600) | 20px | -0.5px | `Default/Bold/Subheadline` |
| 14px | PingFang SC | Medium | — | — | Message metadata |
| 10px | Default/Bold/Subheadline | — | 20px | — | Unread count |

Additional extracted text styles include SF Pro Regular at 20px.

## Spacing scale

_None found in source._

Extracted component spacing values:

- `消息列表Row`: padding `12px` on all sides; gap `12px`.
- Message-list content: padding `0 16px 16px 16px`; gap `12px`.
- Message-list header: padding `28px` on all sides; gap `20px`.
- Conversation header: padding `28px` on all sides.
- Conversation content rows: padding `12px 28px`; gap `12px`.
- Composer: padding `28px` on all sides; gap `16px`.
- `消息列表头像` group avatar: padding `4px`; internal gap `2px`.
- Group avatar tile rows: gap `2px`.
- `Tab` rail: padding `20px`; gap `18px`.
- Floating navigation control: padding `12px`; gap `12px`.

## Radius scale

Extracted radius values:

- `4px` — group-avatar tiles.
- `5px` — component-set inspection containers.
- `10px` — avatars and message bubbles.
- `16px` — bottom system bar.
- `20px` — message rows.
- `24px` — unread badges.
- `43px` — navigation rail item containers.
- `50px` — main glass shell.
- `57px` — search/input field.
- `58px` — composer action control.
- `60px` — circular action controls.
- `77px` — floating navigation rail.
- `92.73px` — `Tab` and `添加` icons.
- `1000px` — system shadow.

## Elevation & effects

- Background blur: `31.69px` on `添加`.
- Background blur: `60px` on the floating navigation rail.
- Background blur: `100px` on the lock and bar controls.
- Background blur: `160px` on the main glass shell.
- Layer blur: `0px` on the background image layer.
- Layer blur: `40px` on the system shadow.
- Inner shadow: `4px`, offset `0 2px`.
- Drop shadow: `2px`, offset `0 2px`.
- Main glass shell stroke: `3px`.
- Floating navigation rail stroke: `1px`.
- Component-set inspection stroke: `1px`.

## Components

### `消息列表Row`

- Size: `368x88px`.
- Radius: `20px`.
- Layout: horizontal.
- Padding: `12px` on all sides.
- Gap: `12px`.
- Sizing: fixed width and fixed height.
- Fill when selected: `#FFFFFF33`.
- Variants: `选中=on`, `选中=off`.
- Internal content:
  - `消息列表头像`: `64x64px`.
  - Content frame: `268x52px`.
  - Content frame gap: `8px`.
  - Primary title: PingFang SC Semibold, `20px`, `#FFFFFFE5`.
  - Metadata: PingFang SC Medium, `14px`, `#FFFFFF99`.
  - Preview: PingFang SC Medium, `16px`, `#FFFFFF99`.
  - Optional `静音`: `22x22px`.

### `消息列表头像`

- Size: `64x64px`.
- Radius: `10px`.
- Variants:
  - `类型=用户, 未读=off`
  - `类型=用户, 未读=on`
  - `类型=群, 未读=off`
  - `类型=群, 未读=on`
- User variant uses an image fill.
- Group variant:
  - Fill: `#FFFFFF1A`.
  - Padding: `4px`.
  - Three rows.
  - Each row contains three `17.33x17.33px` tiles.
  - Tile radius: `4px`.
  - Tile fill: `#3B5F76`.
  - Internal gap: `2px`.
- Unread-on variants include `未读`.

### `未读`

- Size: `20x20px`.
- Radius: `24px`.
- Layout: centered horizontal content.
- Variants:
  - `Property 1=数字`: fill `#FF3B30`, centered count text, `#FFFFFF`.
  - `Property 1=红点`: red `10x10px` ellipse using `#FF3B30`.
- Count text uses `Default/Bold/Subheadline`.

### `Tab`

- Icon size: `34x34px`.
- Radius: `92.73px`.
- Variants by icon type:
  - `消息`
  - `联系人`
  - `收藏`
  - `文件`
  - `朋友圈`
- Each icon type supports `Current=off` and `Current=on`.
- Icon fill: `#FFFFFF`.
- Component-set arrangement: `74x542px`, vertical layout, padding `20px`, gap `18px`.

### `添加`

- Size: `34x34px`.
- Radius: `92.73px`.
- Icon vector: `20x20px`.
- Icon fill: `#FFFFFF`.
- Background blur: `31.69px`.

### `表情`

- Size: `34x34px`.
- Icon fill: `#FFFFFF`.

### `视频`

- Size: `34x34px`.
- Icon fill: `#FFFFFF`.

### `语音`

- Size: `28x28px`.
- Icon fill: `#FFFFFF`.

### `静音`

- Size: `22x22px`.
- Icon vector: `14.67x15.58px`.
- Icon fill: `#FFFFFF99`.

## Screen patterns

### `UI / Frame 35`

- Overall frame: `1842x1257px`.
- Main glass shell: `1140x750px`.
- Main shell radius: `50px`.
- Shell split into:
  - Message-list pane: `400x750px`.
  - Conversation pane: `740x750px`.
- Message-list pane uses `#00000033`.
- Message list contains `368x88px` rows with `12px` gaps.
- Conversation header: `740x100px`.
- Conversation content area: `740x540px`.
- Composer: `740x110px`.
- Floating navigation rail: `74x384px`.
- System bar: `269x20px`.

### `UI / Tab`

- Component set: `74x542px`.
- Vertical stack of five `34x34px` tabs.
- Padding: `20px`.
- Gap: `18px`.
- Supports five icon types and two current states.

### `UI / 添加`

- Standalone `34x34px` circular add control.
- White `20x20px` plus icon.
- Background blur: `31.69px`.

### `UI / 消息列表头像`

- Component set contains user and group avatar variants.
- Avatar size: `64x64px`.
- User avatars use image fills.
- Group avatars use a `3x3` arrangement of `17.33px` tiles.
- Unread state overlays a `20x20px` unread control.

### `UI / 未读`

- Component set contains numeric and dot states.
- Both states occupy `20x20px`.
- Numeric state uses a white count over red.
- Dot state uses a `10x10px` red ellipse.

### `UI / 静音`

- Standalone `22x22px` mute icon.
- Used inside message-list rows beside preview text.

### Message composer pattern

- Input field uses a `57px` radius and dark translucent fill.
- Voice control is `42x42px` with `#FFFFFF4D`.
- Composer actions are `54x54px` circular controls.
- Actions include `表情`, `Tab`, and `视频`.
- Action icons use `#FFFFFF`.

## Notes for implementers

- Restrict implementation to the extracted component families and their listed variants.
- Preserve the two-pane proportions from the `400px` message-list pane and `740px` conversation pane when reproducing the extracted screen.
- Keep message rows at `368x88px` with `20px` radius, `12px` padding, and `12px` internal gap.
- Use `#FFFFFF99` for secondary text and muted icons; use `#FFFFFFE5` for primary message-row titles.
- Use `#FF3B30` only for unread indicators.
- Use `#FFFFFF1A`, `#FFFFFF33`, and `#00000033` for translucent surfaces as specified.
- Use `#3B5F76` for group-avatar tiles.
- Keep all icons white unless the component explicitly uses `#FFFFFF99`.
- Apply blur effects only where extracted: `31.69px`, `60px`, `100px`, or `160px`.
- Do not introduce additional spacing, radius, typography, color, motion, or component tokens not present in the extraction.
