---
name: intercom-ui-kit-community
source: Intercom UI Kit (Community)
kind: design-system-context
---

# intercom - Design System

## Overview

Intercom UI Kit Community extraction covering the Thumbnail, UI, Components, and Support pages. The system centers on a customer-support chat widget with blue headers and triggers, white conversation surfaces, compact quick replies, avatars, and menu navigation.

## Design language

- Primary typeface: Inter.
- Supporting typefaces in source: SF Pro Display, Suisse Int'l, Font Awesome 6.
- Use blue `#3047EC` for widget headers, triggers, and customer message surfaces.
- Use white `#FFFFFF` for widget, navigation, conversation, and reply surfaces.
- Use pale blue `#E5EEFF` for quick replies and news chips.
- Use rounded cards, pill-shaped chips, circular triggers, and layered drop shadows.
- Chat layouts use compact 15px body text, 13px message stamps, and 15px quick-reply labels.
- Header layouts support compact company/operator states and an expanded AI/customer-service state.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 168 | Primary surface and component fill |
| `#000000` | 126 | Black token and text |
| `#F2F2F2` | 21 | Navigation stroke and neutral UI |
| `#00000024` | 18 | Tile stroke |
| `#FFC421` | 17 | Accent |
| `#FFF4D0` | 17 | Pale yellow accent surface |
| `#F5F5F5` | 12 | Desktop background |
| `#F8F8F8` | 12 | Light header text and icons |
| `#585858` | 11 | Neutral text |
| `#EBEBEB` | 11 | Divider line |
| `#9747FF` | 10 | Purple accent |
| `#3047EC` | 7 | Header, trigger, and customer-message blue |
| `#E5EEFF` | 7 | Quick-reply and chip surface |
| `#9AA0A6` | 6 | Neutral gray |
| `#C1C1C1` | 6 | Neutral gray |
| `#B8B8B8` | 3 | Neutral gray |

Additional effect colors:

- `#0000000D`
- `#0000000F`
- `#00000014`
- `#0000001A`
- `#00000029`
- `#00000033`
- `#1A1A1A1F`

## Type scale

Named typography tokens:

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| `header/hero` | Inter | 600 | 34px | 99.15% | 0px |
| `header/title` | Inter | 600 | 18px | 18px | 0px |
| `header/subtitle` | Inter | 400 | 14px | 18px | 0px |
| `header/ai-label` | Inter | 600 | 15px | 111.55% | 0px |
| `tile/title` | Inter | 600 | 16px | 115.68% | 0px |
| `tile/body-large` | Inter | 400 | 16px | 115.68% | 0px |
| `tile/body-secundary-large` | Inter | 400 | 16px | 123.94% | 0px |
| `tile/body-normal` | Inter | 400 | 15px | 115.68% | 0px |
| `tile/body-secundary-normal` | Inter | 400 | 15px | 99.15% | 0px |
| `chat/operator-body` | Inter | 400 | 15px | 115.68% | 0px |
| `chat/customer-body` | Inter | 400 | 15px | 115.68% | 0px |
| `chat/operator-quick-reply` | Inter | 400 | 15px | 20px | 0px |
| `chat/message-stamp` | Inter | 400 | 13px | 99.15% | 0px |

Other source typography sizes include Inter at 10px, 12px, 14px, 15px, 16px, 17.73px, 18px, 20px, and 34px; Inter Bold at 10px and 42px; Inter Medium at 16px; Inter SemiBold at 12px, 14px, 15px, 16px, and 20px; SF Pro Display Semibold at 14px; and Suisse Int'l Regular at 52px.

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found. Explicit component and screen radii:

- `6px`: AI Label, quick-reply frames in desktop UI
- `7.09px`: thumbnail quick-reply frame
- `10px`: Tile
- `18px`: desktop Intercom widget
- `19.31px`: thumbnail heart icon
- `20px`: chip-news
- `21.28px`: thumbnail Intercom widget
- `40px`: thumbnail logo
- `100px`: Trigger
- `118.2px`: thumbnail Trigger
- `125px`: desktop avatar instances
- `196.22px`: expanded desktop avatar instances

## Elevation & effects

Named effects:

- `shadows/shadow-menu`: drop shadow, `70px`, offset `0 0`, color `#0000000D`.
- `shadows/shadow-card`: drop shadow, `15px`, offset `2 2`, color `#0000001A`.
- `shadows/shadow-widget`: two drop shadows:
  - `80px`, offset `5 14`, color `#1A1A1A1F`
  - `40px`, offset `10 10`, color `#00000014`
- `24`: two drop shadows:
  - `48px`, offset `0 24`, color `#00000033`
  - `6px`, offset `0 3`, color `#0000001A`

Trigger effect:

- `6px`, offset `0 1`, color `#0000000F`
- `32px`, offset `0 2`, color `#00000029`

The thumbnail also uses a `200px` layer blur on a white ellipse.

## Components

Allowed component families and specifications:

### Reply

- Size: `423x66px`
- Layout: vertical
- Padding: `20px` on all sides
- Gap: `30px`
- Alignment: min/center
- Sizing: fixed width and fixed height
- Fill: `#FFFFFF`
- Variants:
  - Property: `1 icon`, `2 icons`, `3 icons`, `Send`
  - Device: `Desktop`, `Mobile`
- Text/icons: Font Awesome 6 Pro Light `16px`, Inter Regular `15px`

### Nav

- Size: `423x90px`
- Layout: vertical
- Padding: `18px 20px 18px 20px`
- Gap: `206px`
- Fill: `#FFFFFF`
- Stroke: `#F2F2F2`, `1px`
- Effect: `shadows/shadow-menu`
- Variants:
  - Property: `Help`, `Home`, `Messages`, `News`
  - Notification: `No`, `Yes`
- Text/icons: Inter Regular `15px`, Inter SemiBold `15px`, Font Awesome 6 Pro Light and Solid `23px`

### Tile

- Size: `460x122.43px`
- Radius: `10px`
- Layout: horizontal
- Padding: `22px 24px 22px 24px`
- Gap: `10px`
- Alignment: min/center
- Fill: `#FFFFFF`
- Stroke: `#00000024`, `1px`
- Effect: `shadows/shadow-card`
- Variants: `Article`, `Help`, `News`, `Recent message`, `Send message`
- Text/icons: Font Awesome 6 Pro Solid `14px`, `tile/body-secundary-normal`, `tile/title`

### Chrome

- Size: `390x58px`
- Layout: vertical
- Padding: `12px` on all sides
- Gap: `10px`
- Alignment: center/center
- Fill: `#FFFFFF`
- Variants: `Bottom`, `Top`
- Text/icons: Font Awesome 6 Pro Regular `14px`, Inter Medium `16px`, Font Awesome 6 Pro Solid and Regular `12px`

### iOS Home Indicator

- Size: `390x30.21px`
- Variants: `Dark`, `Light`

### iOS Status Bar

- Size: `390x44px`
- Layout: horizontal
- Padding: `0 24px 0 24px`
- Gap: `233px`
- Alignment: space-between/center
- Text: SF Pro Display Semibold `14px`
- Variants: `Dark`, `Light`

### Header

- Size: `423x80px`
- Layout: horizontal
- Padding: `20px` on all sides
- Gap: `30px`
- Alignment: min/center
- Fill: `#3047EC`
- Variants: `AI Bot + stamp`, `Company`, `Company + stamp`, `Expanded 1`, `Home 1`, `Home 2`, `Operator + stamp`, `Title`, `Title+search`, `Variant9`
- Text/icons: Font Awesome 6 Sharp Regular `18px`, Font Awesome 6 Pro Light `14px`, `header/subtitle`, `header/title`

### AI Label

- Size: `19x19px`
- Radius: `6px`
- Layout: vertical
- Padding: `6px 4px 6px 4px`
- Gap: `10px`
- Alignment: center/center
- Fill: `#FFFFFF`
- Text: Inter Bold `10px`
- Variants: `Dark`, `Light`

### Avatars

- Size: `32x32px`
- Layout: vertical
- Padding: `0px` on all sides
- Gap: `10px`
- Alignment: max/min
- Variants: `AI header`, `AI last message`, `AI previous messages`, `Company`, `Person 1`, `Person 2`, `Person 3`
- Icon: Font Awesome 6 Sharp Solid `20px`

### Trigger

- Size: `60x60px`
- Radius: `100px`
- Fill: `#3047EC`
- Effect:
  - drop shadow `6px`, offset `0 1`, `#0000000F`
  - drop shadow `32px`, offset `0 2`, `#00000029`
- Variants: `Collapse`, `Logo`

### chip-news

- Size: `74x27px`
- Radius: `20px`
- Layout: horizontal
- Padding: `3px 8px 3px 8px`
- Gap: `10px`
- Fill: `#E5EEFF`
- Text: Inter Regular `15px`

## Screen patterns

### Thumbnail

- Canvas: `1920x1080px`
- Features a large Intercom widget composition alongside promotional title and footer content.
- Widget: `500x760.05px`, radius `21.28px`, with `#3047EC` header, white conversation area, divider, reply area, and a circular trigger.
- Outer promotional layout includes a `500x854.61px` Intercom composition and a `674x840px` content container.
- Promotional title uses `140px` SF Pro Medium.
- Supporting promotional text uses Suisse Int'l Regular `52px`.

### Desktop UI: expanded header state

- Canvas: `1440x1024px`
- Background: `#F5F5F5`
- Widget placement: bottom-right.
- Outer widget composition: `423x767px`.
- Intercom widget: `423x687px`, radius `18px`, `shadows/shadow-widget`.
- Expanded header: `423x220.79px`, fill `#3047EC`, with avatars, response-time text, and subtitle.
- Conversation frame: `423x465.01px`, fill `#FFFFFF`.
- Quick replies use `#E5EEFF`.
- Divider uses `#EBEBEB`.
- Trigger: `60x60px`.

### Desktop UI: conversation state

- Canvas: `1440x1024px`
- Background: `#F5F5F5`
- Outer widget composition: `423x723px`.
- Intercom widget: `423x643px`, radius `18px`, `shadows/shadow-widget`.
- Header: `423x80px`, fill `#3047EC`.
- Header contains a back icon, three avatars, company/operator title, and optional stamp.
- Conversation frame: `423x495.8px`, fill `#FFFFFF`.
- Customer message uses a blue `#3047EC` surface.
- Quick replies use `#E5EEFF`.
- Divider uses `#EBEBEB`.
- Reply component: `423x66px`.
- Trigger: `60x60px`.

## Notes for implementers

- Prefer the named typography tokens for application UI; use raw font entries only where the source explicitly requires them.
- Keep the widget width at `423px` for the desktop UI component family and `390px` for iOS Chrome/status components.
- Preserve the distinction between the expanded header at `220.79px` high and the compact header at `80px` high.
- Use `#3047EC` consistently for headers, triggers, and customer message surfaces.
- Use `#E5EEFF` for quick replies and `chip-news`; quick-reply text is associated with the source’s 15px chat token.
- Apply `shadows/shadow-widget` to the desktop widget and `shadows/shadow-menu` to navigation.
- Do not introduce spacing, radius, motion, grid, or variable tokens that are not present in the source.
