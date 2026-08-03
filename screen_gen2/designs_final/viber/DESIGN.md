---
name: viber
source: Viber chat UI (Community)
kind: design-system-context
---

# viber - Design System

## Overview

Viber group-chat UI for a 390×844px mobile screen. The interface includes a white chat header, grouped message list, date separator, message reactions, and a white message composer. Supporting presentation frames include a purple promotional thumbnail, iPhone mockup, and component showcase screens.

## Design language

- Clean, lightweight chat interface with white surfaces and light-gray incoming message bubbles.
- TT Commons is the primary interface typeface.
- Purple and violet gradients are used for call controls, voice controls, and reaction icons.
- Primary controls use compact outlined icons and rounded circular buttons.
- Message groups use 30×30px avatars, compact vertical spacing, and 12px bubble corners.
- Headings in showcase artwork use large TT Commons DemiBold or Poppins display text.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 89 | Primary surface, header, composer, avatar/reaction backgrounds |
| `#000000` | 19 | Primary text and dark icon strokes |
| `#EFEFEF` | 16 | Incoming message bubbles |
| `#B4B4B4` | 14 | Secondary icon strokes and outlines |
| `#A7A7A7` | 11 | Neutral gray |
| `#8275EB` | 9 | Violet accent |
| `#BA6FEC` | 5 | Purple accent |
| `#323232` | 4 | Dark neutral |
| `#B1B1B1` | 4 | Date and reaction count text |
| `#7060EA` | 3 | Back icon stroke and violet accent |
| `#7B3BCD` | 3 | Showcase heading text |
| `#00000026` | — | Message input 1px stroke |
| `#6454E05E` | — | Voice icon drop shadow |

Declared semantic tokens:

- Light Text / Primary: `#000000`
- Black / Black: `#000000`
- Light Field / Light Header / Background: `#FFFFFF`

## Type scale

### TT Commons

- Regular, `12.92px`
- Regular, `13.22px`
- Regular, `13.6px`
- Regular, `14px`
- Regular, `15px`
- Regular, `20px`
- Regular, `20.87px`
- DemiBold, `15px`
- DemiBold, `16.23px`
- DemiBold, `19px`
- DemiBold, `126px`
- Regular, `82px`

### Other type

- Inter Regular, `16px` — message input text
- SF Pro Text Semibold, `17px` — status bar time
- Poppins Bold, `155.76px` — promotional heading
- Poppins SemiBold, `98.07px` — promotional subheading

## Spacing scale

No spacing variables were defined. Observed spacing values:

- `2px` — small message alignment frame
- `5px` — message/avatar and message-content gap
- `6.03px` — Message component gap
- `6.35px` — Like view gap
- `8px` — spacing between messages
- `10px` — date separator side padding and gap
- `11.59px` — Message component top padding
- `12px` — message bubble horizontal padding
- `13px` — date separator top padding
- `16px` — Like view vertical spacing between reaction controls
- `18.28px` — decorative showcase gap
- `23px` — icon showcase gap
- `40px` — promotional decorative gap
- `-4px` — message text stack gap
- `-12.19px` — promotional frame gap
- `-48.75px` — promotional heading stack gap

## Radius scale

- `0px` — square message bubble corner
- `5px` — component-set showcase outline
- `12px` — message bubble corners
- `100px` — home indicator
- Message bubble corner pattern: `0/12/12/12px` for bubbles with one squared corner.

## Elevation & effects

- Voice icon: drop shadow `8px` offset `0 3`, color `#6454E05E`.
- Voice icon duplicated control: same drop shadow, with `70%` opacity.
- Avatar and reaction circles use a drop shadow with `6.35px` blur and `0 2.27` offset; the source does not provide an allowed shadow color for this effect.
- Decorative showcase vectors use `80px` layer blur; their source colors are not included because they are outside the allowed palette.

## Components

Only the following component families are defined:

### Message

- Base size: `373.73×254.34px`
- Layout: horizontal
- Padding: `11.59 0 0 0px`
- Gap: `6.03px`
- Sizing: fixed width, fixed height
- Variants: `Defolt`, `Lite`, `Photo`, `Reply`
- Message text styles include TT Commons Regular `13.6px`, `13.22px`, `20.87px`, and TT Commons DemiBold `16.23px`.
- Observed incoming bubble fill: `#EFEFEF`
- Observed bubble padding: `3 12 6 12px`, `4 12 4 12px`, or `6 12 6 12px`
- Observed bubble gap: `8px`
- Avatar size: `30×30px`

### Like view

- Size: `25×25px`
- Layout: horizontal
- Gap: `6.35px`
- Alignment: minimum/center
- Sizing: fixed width, fixed height
- Variants: `Full`, `Zero`, `share`
- Full variant size: `38.05×24.7px`
- Full variant includes a `13px` reaction icon and `13px` count text.
- Reaction circle fill: `#FFFFFF`
- Reaction outlines and neutral icons: `#B4B4B4`

### Date separator

- Size: `370×39px`
- Padding: `13 10 8 10px`
- Gap: `10px`
- Alignment: center/minimum
- Label: `Today`
- Label style: TT Commons Regular `15px`
- Label color: `#B1B1B1`

### Voice icon

- Size: `43×43px`
- Circular control with a `15×22px` microphone vector
- Microphone stroke: `#FFFFFF`, `1px`
- Circle stroke: `#B4B4B4`, `1.13px`
- Drop shadow: `8px` offset `0 3`, `#6454E05E`

### Video call icon

- Size: `30×30px`
- Video vector: `26.5×18.5px`
- Vector corner radius: `1px`

### Voice call icon

- Size: `30×30px`
- Voice-call vector: `18.23×18.18px`

### Back icon

- Size: `16×24px`
- Vector size: `9×16.5px`
- Stroke: `#7060EA`, `2px`
- Vector radius: `0.1px`

### Chat header

- Size: `390×43px`
- Fill: `#FFFFFF`
- Group title: TT Commons DemiBold `19px`, `#000000`
- Participant subtitle: TT Commons Regular `14px`
- Includes Back icon, Voice call icon, and Video call icon.
- Header action frame: `66×43px`
- Action frame padding: `5 0 8 0px`
- Action gap: `6px`

### Message input

- Size: `390×118px`
- Fill: `#FFFFFF`
- Stroke: `#00000026`, `1px`
- Placeholder style: Inter Regular `16px`
- Includes two `43×43px` voice controls and a `299×37px` media area.
- One voice control is rendered at `70%` opacity.

### Spacing between messages

- Size: `370×8px`
- Used between message groups in the chat list.

## Screen patterns

### Mobile chat screen

- Canvas: `390×844px`
- White background: `#FFFFFF`
- Header: `390×43px`
- Message content frame: `390×571.96px`
- Message content horizontal padding: `10px`
- Date separator width: `370px`
- Messages use 30×30px avatars and `#EFEFEF` bubbles.
- Insert an `8px` spacing component between message groups.
- Composer: `390×118px`, positioned below the chat content.
- Home indicator area: `389×34px`.

### Header pattern

- Place the Back icon at the leading edge.
- Center the `Group chat` title and participant subtitle.
- Place Voice call and Video call icons in the trailing `66×43px` action frame.
- Use a white header surface.

### Message pattern

- Use a 30×30px avatar followed by message content with a `5px` gap.
- Use `#EFEFEF` for incoming bubbles.
- Use 12px rounding on three bubble corners; preserve a square corner where specified.
- Attach Like view controls beside or below message content.
- Separate message groups with an `8px` component.

### Composer pattern

- Use a white `390×118px` surface with a `#00000026` 1px stroke.
- Use Inter Regular `16px` for the input placeholder.
- Place circular voice controls at `43×43px`.
- Include the `299×37px` media area along the bottom.

### Promotional showcase

- Promotional thumbnail frame: `1920×960px`.
- iPhone mockup frame: `600.16×1216.39px`.
- Showcase headings use TT Commons DemiBold `126px` in `#7B3BCD`.
- Decorative vectors and gradients are present, but their colors are not represented here because they are outside the allowed palette.

## Notes for implementers

- Use only the defined component families: Back icon, Chat header, Date separator, Like view, Message, Message input, Spacing between messages, Video call icon, Voice call icon, and Voice icon.
- Do not treat the showcase artwork, mockup images, avatars, or media rectangle as reusable color tokens.
- Prefer the listed component dimensions and explicit padding values over inferred responsive values.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The source contains additional colors not included in the approved palette; do not reproduce them as design tokens.
