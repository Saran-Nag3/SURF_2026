---
name: whatsapp-ui-screens-community
source: WhatsApp UI Screens (Community)
kind: design-system-context
---

# whatsapp - Design System

## Overview

- Mobile WhatsApp UI screen extraction covering:
  - Chat list in edit/selection mode.
  - Individual chat conversation.
  - Classic-theme and app title treatments.
- Primary mobile frame: `375px × 812px`.
- No local variables, component families, spacing styles, radius styles, motion styles, effect styles, or grid styles were found.

## Design language

- iOS-inspired messaging interface with white navigation and action bars.
- Chat list uses stacked white rows on a light gray background.
- Primary text is black; metadata and previews use muted gray.
- Sent messages use pale green bubbles; received messages use near-white bubbles.
- Blue is used for read indicators and iOS-style actions.
- Typography combines SF Pro for the product UI with Public Sans and Crimson Text in the broader title/landing treatments.
- Interfaces use thin separators, subtle shadows, circular avatars, and compact metadata.

## Color palette

Ranked by raw usage where counts were available:

| Color | Usage | Role |
|---|---:|---|
| `#979797` | 314 | Dominant unstyled gray |
| `#FFFFFF` | 271 | Navigation bars, chat rows, cards, message surfaces |
| `#000000` | 235 | Primary text |
| `#007AFF` | 150 | Action text and selected/read states |
| `#455154` | 133 | Secondary dark neutral |
| `#8E8E93` | 132 | Chat previews, dates, and metadata |
| `#545458A6` | 120 | Translucent neutral |
| `#3497F9` | 111 | Read/check indicators |
| `#3C3C434A` | 86 | Thin separators and subtle shadows |
| `#060606` | 77 | System status icons and dark controls |
| `#3C3C434D` | 63 | Translucent separator treatment |
| `#00000066` | 53 | Message shadows and muted overlays |
| `#FFFFFF4D` | 42 | Translucent white |
| `#D8D8D8` | 39 | Neutral surface/detail |
| `#3E5155` | 38 | Dark blue-gray neutral |
| `#ABABAB` | 38 | Neutral gray |
| `#FCFCFE` | 38 | Near-white surface |
| `#F6F6F6` | 32 | Action-bar surface |
| `#A85757` | 30 | Muted red accent |
| `#00000040` | 26 | Message timestamps and overlays |
| `#3C3C4399` | 24 | Selection-circle outline |
| `#FF3B30` | 21 | Destructive action accent |
| `#DCF7C5` | 20 | Sent message bubbles |
| `#171717` | 19 | Dark system text |
| `#D1D1D6` | 18 | Light neutral detail |
| `#EFEFF4` | 17 | App background |
| `#50555C` | 15 | Dark neutral |
| `#A06A6A` | 15 | Muted red neutral |
| `#C6C6C8` | 15 | Disabled or muted action text |
| `#00000033` | 14 | Fine line/shadow |
| `#9F9EA2` | 12 | Neutral gray |
| `#FFA800` | 3+ | Yellow accent token |
| `#67CE00` | 2+ | Green accent token |
| `#FF5E00` | 1+ | Orange accent token |

Additional named palette mappings:

- White: `#FFFFFF`
- Gray 50: `#808080`
- Gray 90: `#000000`
- Gray 70: `#4D4D4D`
- Yellow: `#FFA800`
- Green: `#67CE00`
- Orange: `#FF5E00`

## Type scale

### Named typography tokens

| Token | Family | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| Crimson Text Regular 22 | Crimson Text | 400 | `22px / 28px` | `-0.22px` |
| Public Sans ExtraBold 12 | Public Sans | 800 | `12px / 16px` | `-0.12px` |
| Public Sans Regular 14 | Public Sans | 400 | `14px / 20px` | `-0.14px` |
| Public Sans ExtraBold 48 | Public Sans | 800 | `48px / 56px` | `-0.48px` |
| Crimson Text Regular 28 | Crimson Text | 400 | `28px / 32px` | `-0.28px` |

### Observed UI typography

- SF Pro Text Regular `16px`: primary message text.
- SF Pro Text Semibold `16px`: chat names.
- SF Pro Text Regular `14px`: chat previews and dates.
- SF Pro Text Regular `11px`: message timestamps and file metadata.
- SF Pro Text Semibold `17px`: system/status text and action labels.
- SF Pro Text Regular `17px`: action labels.
- SF Pro Text Semibold `15px`: status-bar time.
- SF Pro Display Bold `34px`: “Chats” navigation heading.
- SF Pro Display Regular `20px` and `25px`: display treatments.
- SF Pro Text Medium `10px` and `13px`, SF Pro Text Bold `10px`: compact labels.
- Public Sans Regular `18px` and Public Sans ExtraBold `24px`: raw display treatments.
- SF Pro Text Regular `12px`, `14px`, `17px`, `22.5px`; SF Pro Text Semibold `15px`, `17px`, `19px`: additional observed sizes.

## Spacing scale

_None found in source._

Observed layout dimensions are documented in screen patterns rather than treated as spacing tokens.

## Radius scale

No radius variables were found.

Observed radii:

- `0px`: square system and message surfaces.
- `6px`: file attachment inner surface.
- `8px`: message bubbles and message shadows.
- `100px`: home-indicator line.

## Elevation & effects

- Message bubbles use a shadow layer filled with `#00000066` and `1.63px` layer blur.
- Chat action bar uses a drop shadow at `0px` horizontal offset and `-0.33px` vertical offset.
- Actions bar uses a drop shadow at `0px` horizontal offset and `0.33px` vertical offset.
- Thin separators use `#3C3C434A` with `0.33px` stroke.
- Classic-theme divider uses `#00000033` with a `2px` stroke.
- Selection circles use `#3C3C4399` at `1.5px` stroke and `42%` opacity.
- No reusable local effect styles were defined.

## Components

_None found in source._

The extraction contains repeated UI structures, but no Figma component families or component sets were defined.

## Screen patterns

### Chat list / edit mode

- Canvas: `375px × 812px`, background `#EFEFF4`.
- Status bar: `375px × 44px`, near-white background.
- Navigation bar: `375px × 140px`, white background.
  - Large “Chats” heading uses SF Pro Display Bold `34px`, black.
  - “Done” action uses SF Pro Text Semibold `17px`, `#007AFF`.
- Actions bar: `375px × 44px`, white background.
  - “Broadcast Lists” and “New Group” use SF Pro Text Regular `17px`.
  - Disabled-looking action text uses muted gray.
- Chat rows:
  - Approximately `375px × 74px`.
  - White background.
  - Circular avatar approximately `52px × 52px`.
  - Name uses SF Pro Text Semibold `16px`, black.
  - Preview and date use SF Pro Text Regular `14px`, `#8E8E93`.
  - Selection control approximately `21px × 21px`, with a `20.5px` circular outline.
  - Read indicator approximately `17px × 11px`, using `#3497F9`.
  - Separators are approximately `296px × 1px`, using `#3C3C434A`.
- Chat actions:
  - `375px × 83px`, with `#F6F6F6` surface.
  - “Archive”, “Delete”, and “Read All” use SF Pro Text Regular `17px` and muted gray.

### Individual chat

- Canvas: `375px × 812px`, background `#EFEFF4`.
- Conversation content includes a `375px × 724px` image-backed chat area.
- Sent message bubbles:
  - Pale green fill `#DCF7C5`.
  - Common height `34px`; attachment messages use `67px`.
  - Common corner radius `8px`, with some square-corner variants.
  - Black message text uses SF Pro Text Regular `16px`.
  - Timestamp uses SF Pro Text Regular `11px` and `#00000040`.
  - Read indicator uses `#3497F9`.
- Received message bubbles:
  - Near-white fill.
  - Common height `34px`.
  - Timestamp uses `#00000040`.
- Attachment messages:
  - Inner file surface uses `6px` radius.
  - File name uses SF Pro Text Regular `16px`.
  - File metadata uses SF Pro Text Regular `11px` and `#00000066`.
  - File information includes type, separator dot, numeric size, and unit.

### System chrome

- Status bar uses a `375px × 44px` frame.
- Status-bar time uses SF Pro Text Semibold `15px`, dark text.
- Home indicator area uses a `375px × 34px` frame.
- Home indicator is `134px × 5px`, black, with `100px` radius.

### Classic theme and app title treatments

- Classic-theme title group: `1525px × 61.5px`.
- Divider spans `1525px × 1px`, using `#00000033`.
- App title treatment includes a decorative icon and large “WhatsApp UI” display text.
- Named title typography uses Public Sans ExtraBold `48px`, Crimson Text Regular `28px` and `22px`, and Public Sans ExtraBold `12px`.

## Notes for implementers

- Prioritize the observed `375px × 812px` mobile layout for product screens.
- Keep chat rows white and separated by thin, partial-width dividers.
- Use SF Pro Text for chat names, previews, messages, timestamps, and controls.
- Use `#8E8E93` for secondary chat metadata and `#000000` for primary text.
- Use `#DCF7C5` only for sent message surfaces and `#3497F9` for read indicators.
- Preserve the distinction between navigation/action bars and the `#EFEFF4` app background.
- Recreate message shadows with `#00000066` and `1.63px` blur where the source shows them.
- Do not introduce component families or undocumented design tokens; the source defines none.
- Image-backed avatars and chat backgrounds are present in the source, but their image values are not color tokens.
