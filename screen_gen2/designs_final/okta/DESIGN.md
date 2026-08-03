---
name: okta-a-chat-app-community
source: OKTA, A chat app (Community)
kind: design-system-context
---

# okta - Design System

## Overview

- Source page: Page 1.
- Primary viewport: 390x844px.
- Screens identified: `Chat` and `groups`.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The interface uses a monochrome palette, compact mobile layouts, rounded cards, dense utility text, and OCR-inspired typography.

## Design language

- Use high-contrast black-and-white surfaces.
- Use OCR-style typefaces for nearly all interface text.
- Use `Nothing Font (5x7)` for the primary “Your Chats -” heading at 25px.
- Use rounded white cards with thin black strokes and subtle shadows.
- Use dense metadata and action labels at 5px–8px.
- Use black filled bars for prominent navigation or action areas.
- Use white navigation labels at 14px.
- Preserve the compact, highly structured mobile composition shown at 390x844px.

## Color palette

Ranked by observed raw usage:

| Color | Usage | Source tokens / usage |
|---|---:|---|
| `#000000` | 302 | Primary black; Black text, filled action bar |
| `#FFFFFF` | 147 | White surfaces, cards, backgrounds, navigation areas |
| `#343030` | 46 | Secondary action text such as “Delete chat” and “Mark as read” |
| `#DADADA` | 37 | Raw color usage |
| `#1B1919` | 23 | Metadata text such as “sent on 10am” |
| `#5D5A5A` | 23 | Message preview text |
| `#FFFFFF5C` | 12 | Translucent white |
| `#F6F6F6` | 8 | Light surface color |
| `#FDFDFD` | 8 | Near-white surface color |
| `#1A1B365C` | 4 | Translucent dark color |
| `#A7AEC1` | 4 | Muted blue-grey |
| `#191D31` | — | `Black/01` token |
| `#161719` | — | `Colors / Dark / Base 1` token |

Named palette entries without values in the source: `Light Grey/01`, `Tosca/01`.

## Type scale

| Size | Font | Observed usage |
|---:|---|---:|
| 25px | Nothing Font (5x7) NothingFont5x7 | 6 |
| 18px | OCR-A BT Regular | 11 |
| 18px | OCR-B 10 BT Regular | 16 |
| 16px | OCR-A BT Regular | 3 |
| 15px | Inter SemiBold | 4 |
| 15px | OCR A Extended OCRAExtended | 3 |
| 14px | OCR-B 10 BT Regular | 13 |
| 10px | OCR-A A | 8 |
| 10px | OCR-B 10 BT Regular | 6 |
| 8px | OCR-A BT Regular | 47 |
| 6px | OCR-A BT Regular | 95 |
| 5px | OCR-A A | 24 |
| 5px | OCR-A BT Regular | 44 |

Observed hierarchy:

- Primary heading: Nothing Font (5x7) NothingFont5x7, 25px.
- Contact and group names: OCR-B 10 BT Regular, 18px.
- Search text and some labels: OCR-A BT Regular, 18px.
- Navigation labels: OCR-B 10 BT Regular, 14px.
- Message previews: OCR-A BT Regular, 8px.
- Metadata and actions: OCR-A BT Regular or OCR-A A, 5px–6px.
- Status bar time: Inter SemiBold, 15px.

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found. Observed geometry uses:

- 0px: unrounded groups and containers.
- 12px: inner message groups and message preview rectangles.
- 14px: search field.
- 15px: chat cards.
- 16px: group action card.
- 20px: group menu sections.
- 30px: black bar.
- 100px: home indicator.

## Elevation & effects

No local effect styles were found.

Observed effects:

- Chat cards: drop shadow with 6px blur and offset `0 4`.
- Search field: inner shadow with 4px blur and offset `0 4`; drop shadow with 4px blur and offset `0 4`.
- Group card: drop shadow with 6px blur and offset `0 4`.
- Group action card: drop shadow with 4px blur and offset `0 4`.
- Card strokes are thin black strokes ranging from `0.1px` to `0.3px`.
- The home indicator is a 135x5px rounded element.

## Components

_None found in source._

## Screen patterns

### Chat

- Mobile frame: 390x844px with a white background.
- Status bar: 375x44px, white, with 15px Inter SemiBold time text.
- App and bottom bars use white fills; the home indicator is 135x5px.
- Heading: “Your Chats -” in Nothing Font (5x7) at 25px.
- Search field: 298x37px, white, 14px radius, with inner and drop shadows.
- Search label: “Search Chats” in OCR-A BT Regular at 18px.
- A black 390x49px bar appears below the search area.
- Chat cards are 143x114px, white, 15px radius, thin black stroke, and drop shadow.
- Chat card names use OCR-B 10 BT Regular at 18px.
- Inner message previews are 126x48px, white, 12px radius, thin black stroke.
- Message previews use OCR-A BT Regular at 8px.
- Metadata and actions use 5px–6px OCR text.
- Bottom navigation labels are “Community”, “Chats”, “Profile”, and “Groups” in white OCR-B 10 BT Regular at 14px.

### groups

- Mobile frame: 390x844px with a white background.
- Group entry card: 367x114px outer group area with a 274x114px white card, 15px radius, thin black stroke, and drop shadow.
- Group title: “Project 50” in OCR-A BT Regular at 18px.
- Member avatars are 29x29px; member count uses OCR-A BT Regular at 6px.
- Group message preview: 126x48px, 12px radius, white fill, thin black stroke.
- Group action card: 81x111px, white, 16px radius, thin black stroke, and drop shadow.
- Group action sections use 64x17px white rounded rectangles with thin black strokes.
- Group actions include “Archive group”, “Delete group”, and “Lock group” in OCR-A BT Regular at 5px.

## Notes for implementers

- Treat the source as a single mobile-first visual system at 390x844px.
- Prefer the explicitly observed colors in the palette; do not introduce additional colors.
- Use OCR-A and OCR-B families as the default UI typography, with Nothing Font reserved for the primary chat heading.
- Keep text sizes compact and preserve the 5px–8px metadata scale.
- Recreate cards with white fills, thin black strokes, and the observed rounded corners.
- Use the listed shadow blur and offset values where elevation is required.
- No reusable component families or formal design tokens were extracted; implement repeated chat and group patterns directly from the screen observations.
