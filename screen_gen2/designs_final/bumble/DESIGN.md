---
name: bumble-chat-room-ui-kit-community
source: Bumble Chat Room UI Kit (Community)
kind: design-system-context
---

# bumble - Design System

## Overview

A chat-room UI kit centered on a 360px mobile conversation screen. The system includes a white app bar, date divider, left/right message bubbles, image messages, replies, and a bottom chat input. The cover page uses a yellow background, oversized Nunito typography, rounded white labels, and a phone-style chat preview.

## Design language

- Friendly, minimal chat interface with strong monochrome contrast and yellow sender accents.
- Use white surfaces and dark near-black text.
- Second-person bubbles use light gray `#F6F6F6`; first-person bubbles use yellow `#FEC627`.
- Message bubbles use asymmetric corner radii to indicate message grouping and direction.
- Primary mobile layout width: `360px`.
- Chat content width: `344px`.
- App bar height: `56px`; chat input height: `48px`.
- Use DM Sans for interface and message text.
- Use Nunito for prominent cover and date-divider typography.
- Controls and surfaces use rounded geometry, including pill-shaped controls and heavily rounded message bubbles.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role |
|---|---:|---|
| `#070707` | 76 | Primary dark text and icons |
| `#6B6B6B` | 29 | Secondary text, metadata, and icons |
| `#C4C4C4` | 19 | Image placeholders |
| `#F6F6F6` | 17 | Second-person message bubbles |
| `#FEC627` | 16 | First-person message bubbles and yellow surfaces |
| `#000000` | 13 | Cover and component-page text |
| `#FFFFFF` | 11 | App bar, input, date-divider, and white surfaces |
| `#FFC62B` | 9 | Reply accent bars |
| `#130F26` | 8 | Source color present in the extraction |
| `#7B61FF` | 5 | Component-set outline |
| `#E5E5E5` | 4 | Chat input border |

`#FEC627` is the primary yellow bubble color. `#FFC62B` is the secondary yellow accent used for reply indicators.

Named color token:

- `Monochrome/White`: `#FFFFFF`

## Type scale

- `36px` — Nunito Bold; cover labels and headings.
- `16px` — DM Sans Medium; message text and primary interface text.
- `12px` — DM Sans Medium; metadata, reply names, and supporting labels.
- `12px` — DM Sans Regular; reply content and supporting text.
- `11px` — Nunito Sans SemiBold; date divider.
- `8px` — DM Sans Bold; GIF label.
- `17px` — DM Sans Bold; app-bar title.
- `24px` — DM Sans Medium; component-page headings.
- `48.06px` — Nunito Bold; cover title.

## Spacing scale

Observed spacing values:

`0px`, `2px`, `4px`, `5px`, `6px`, `7px`, `8px`, `10px`, `12px`, `16px`, `24px`, `40px`

Key component spacing:

- App Bar: padding `12px 8px 12px 8px`, gap `16px`.
- Chat Input: padding `5px 8px 5px 8px`, gap `10px`.
- Bubble Chat: padding `6px 12px 6px 12px`, gap `10px`.
- Reply: gap `8px`.
- Image Chat: gap `4px`.
- Bubble Chat with reply content: padding `8px 12px 8px 12px`, gap `12px`.
- Message groups commonly use `4px` or `8px` vertical gaps.

## Radius scale

Observed radius values:

- `1px` — reply accent bar.
- `4px` — message-bubble directional corners, small image corners, and input controls.
- `5px` — component-set outline.
- `12px` — image-chat corner radius.
- `16px` — cover image radius.
- `17px` — message-bubble rounded corners.
- `18px` — chat-input text control.
- `60px` — cover-page pill labels.
- `100px` — circular avatar image.

Message-bubble corner patterns:

- Second person, first: `17px 17px 17px 4px`
- Second person, middle: `4px 17px 17px 4px`
- Second person, last: `4px 17px 17px 17px`
- First person, first: `17px 17px 4px 17px`
- First person, middle: `17px 4px 4px 17px`
- First person, last: `17px 4px 17px 17px`

## Elevation & effects

- Chat Input uses a drop shadow with offset `0 -2px`, blur `4px`, color `#00000024`.
- The cover image uses a drop shadow with offset `0 4px` and blur `60px`; the extracted shadow color is not included because it is outside the allowed palette.
- App Bar uses a `1px` stroke in `#EBEBEB`.
- Chat Input text control uses a `1px` stroke in `#E5E5E5`.
- Component-set outline uses a `1px` stroke in `#7B61FF`.

## Components

### App Bar

- Size: `360px × 56px`
- Layout: horizontal
- Padding: `12px 8px 12px 8px`
- Gap: `16px`
- Alignment: center / center
- Fill: `#FFFFFF`
- Stroke: `#EBEBEB`, `1px`
- Title typography: DM Sans Bold, `17px`
- Includes back navigation, circular image/avatar, title, video action, and overflow action.

### Bubble Chat

- Base size: `114px × 33px`
- Layout: horizontal
- Padding: `6px 12px 6px 12px`
- Gap: `10px`
- Fill:
  - Second person: `#F6F6F6`
  - First person: `#FEC627`
- Text: DM Sans Medium, `16px`
- Variants:
  - Type: First Person / Second Person
  - Order: First / Middle / Last
  - Sizing: Hug / Block
  - Reply: Off / On
- Hug sizing uses `114px × 33px` in the component set.
- Block sizing uses `246px × 33px` in the component set.
- With reply, height is `83px` in the component set.
- Use directional corner radii from the Radius scale.

### Bubble Chat Container

- Size: `344px × 33px`
- Layout: vertical
- Gap: `10px`
- Variants:
  - Type: First Person / Second Person
- Used as the full-width message row containing a left- or right-aligned bubble.
- Message groups can use heights of `33px`, `53px`, `70px`, `90px`, `104px`, `147px`, or `204px` as shown in the playground.

### Chat Input

- Size: `360px × 48px`
- Layout: horizontal
- Padding: `5px 8px 5px 8px`
- Gap: `10px`
- Alignment: center / center
- Fill: `#FFFFFF`
- Effect: drop shadow, offset `0 -2px`, blur `4px`, color `#00000024`
- Includes media action, text-entry control, GIF control, decorative action, video action, and microphone action.
- Text-entry control:
  - Size: `170px × 36px`
  - Padding: `7px 12px 7px 12px`
  - Gap: `8px`
  - Radius: `18px`
  - Stroke: `#E5E5E5`, `1px`
  - Placeholder: DM Sans Regular, `16px`
- GIF label: DM Sans Bold, `8px`.

### Date Divider

- Size: `344px × 15px`
- Fill: `#FFFFFF`
- Text: Nunito Sans SemiBold, `11px`
- Text color: `#6B6B6B` in the playground usage.

### Image

- Default size: `100px × 100px`
- Playground avatar size: `32px × 32px`
- Reply thumbnail size: `32px × 32px`
- Image-chat size: `114px × 127px`
- Variants: Person — Andrew Garfield / Emma Stone / Tom Hollad
- Avatar usage can be circular with `100px` radius.
- Reply thumbnail uses `4px` radius.

### Image Chat

- Size: `127px × 147px`
- Layout: vertical
- Gap: `4px`
- Variants:
  - Type: First Person / Second Person
  - Order: First / Middle / Last
- Playground image usage: `114px × 127px`
- Timestamp: DM Sans Medium, `12px`, using `#6B6B6B`.
- Image corner pattern shown in the playground: `12px 12px 4px 12px`.

### Reply

- Base size: `76px × 34px`
- Layout: horizontal
- Gap: `8px`
- Alignment: min / center
- Variants:
  - Person: First Person / Second Person
  - Type: Image / Text
- Reply accent bar:
  - Width: `2px`
  - Height: `33px`
  - Radius: `1px`
  - Second-person usage: `#FFC62B`
  - First-person usage: `#070707`
- Reply text:
  - Name: DM Sans Medium, `12px`
  - Content: DM Sans Regular, `12px`
- Reply image: `32px × 32px`.

## Screen patterns

### Cover / Thumbnail

- Canvas: `1920px × 1080px`
- Background: yellow surface from the source.
- Includes a `485px × 863px` phone-style image with `16px` radius.
- Cover title: “Chat Room”, Nunito Bold, `48.06px`.
- Includes three white pill labels:
  - “Variants”
  - “Auto Layout”
  - “Responsive”
- Pill labels use `36px` Nunito Bold, `24px 40px 24px 40px` padding, `10px` gap, and `60px` radius.

### Components / Playground

- Canvas: `360px × 640px`
- Background: `#FFFFFF`
- Top App Bar: `360px × 56px`
- Conversation content width: `344px`
- Bottom Chat Input: `360px × 48px`, aligned to the bottom.
- Conversation sequence demonstrates:
  - Date divider
  - Second-person short bubbles
  - First-person short and block bubbles
  - Delivered metadata
  - Image chat
  - Reply-enabled message
- Use `4px` or `8px` vertical spacing between message groups.

### Components / Variants

- Canvas: `2357px × 1763px`
- Background: `#FFFFFF`
- Bubble Chat component set is outlined in `#7B61FF`.
- Showcase dimensions:
  - Hug bubble: `114px × 33px`
  - Block bubble: `246px × 33px`
  - Reply-enabled bubble: `114px × 83px` or `246px × 83px`
- Organize examples by:
  - First Person / Second Person
  - Hug Sizing / Block Sizing
  - No Reply / With Reply
  - First / Middle / Last order

## Notes for implementers

- Keep the chat viewport at `360px` wide for the provided mobile composition.
- Use `344px` as the inner conversation width beneath the `360px` app shell.
- Align second-person bubbles to the left and first-person bubbles to the right.
- Select bubble corner radii from message order; do not use one radius for every message.
- Use `#F6F6F6` for incoming messages and `#FEC627` for outgoing messages.
- Use `#FFC62B` for reply accent bars.
- Preserve `33px` as the standard single-line bubble height.
- Use `83px` for the shown reply-enabled component height.
- Keep reply content at `12px`; keep message content at `16px`.
- Use the provided component families only: App Bar, Bubble Chat, Bubble Chat Container, Chat Input, Date Divider, Image, Image Chat, and Reply.
- No local spacing, radius, motion, typography, or effect token collections were found; use the concrete values documented here.
