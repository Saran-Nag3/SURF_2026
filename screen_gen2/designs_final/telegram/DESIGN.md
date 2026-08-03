---
name: telegram-ui-screens-community
source: Telegram UI Screens (Community)
kind: design-system-context
---

# telegram - Design System

## Overview

- Source: Figma file **Telegram UI Screens (Community)**.
- Source page: **All pages (3): Telegram, ---, High-Quality Resources for UI Designers**.
- Extracted screens include:
  - Telegram / Dark Theme
  - Telegram / Classic Theme
  - Telegram / App
  - Telegram / Telegram Chats
  - Telegram / Telegram Chat Modal
- Primary UI reference: iPhone-sized Telegram chat list at **375×812px**.
- No local variables, component families, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Mobile messaging interface with dark Telegram chat-list styling.
- Dark surfaces use near-black and dark neutral backgrounds.
- Primary text is white; secondary message previews and timestamps use muted gray.
- Active and status states use blue, green, yellow, orange, and red accents.
- Chat rows are dense and consistent, with circular **60×60px** avatars, **76px** row heights, name text, message preview, timestamp, and optional status icons.
- Navigation uses a top navigation area, search field, bottom tab bar, status bar, and home indicator.
- Typography is primarily SF Pro Text for the Telegram interface, with Roboto used for some message previews. Public Sans and Crimson Text appear in separate promotional or resource-oriented designs.

## Color palette

Ranked by raw usage count where available:

| Color | Usage | Role / source token |
|---|---:|---|
| #FFFFFF | 849 | White; primary light content, icons, backgrounds |
| #000000 | 485 | Gray 90; dark backgrounds and primary dark surfaces |
| #8E8E93 | 222 | Muted secondary text, timestamps, message previews |
| #1C1C1D | 151 | Dark navigation and surface color |
| #979797 | 138 | Neutral gray |
| #545458A6 | 132 | Separator stroke |
| #3C3C434A | 125 | Translucent neutral |
| #455154 | 119 | Blue-gray neutral |
| #21C004 | 115 | Green status indicator |
| #037EE5 | 87 | Blue accent |
| #D8D8D8 | 74 | Light neutral |
| #060606 | 69 | Near-black surface |
| #007AFF | 59 | Bright blue accent |
| #636366 | 58 | Dark gray badges and icons |
| #3C3C434D | 50 | Translucent neutral |
| #EBEBF54D | 44 | Translucent light surface |
| #FFFFFF4D | 41 | Translucent white |
| #3C3C4399 | 40 | Stronger translucent neutral |
| #AEAEB2 | 37 | Light gray |
| #3E5155 | 34 | Blue-gray neutral |
| #ABABAB | 34 | Neutral gray |
| #BAB9BD | 32 | Light neutral |
| #F7F7F7 | 29 | Light system surface |
| #EBEBF599 | 28 | Stronger translucent light surface |
| #999999 | 25 | Neutral gray |
| #B95252 | 24 | Muted red accent |
| #FFFFFF73 | 24 | Translucent white text |
| #F6F6F6 | 23 | Light surface |
| #B5CADD | 21 | Pale blue accent |
| #7E7E82 | 20 | Gray neutral |
| #FEFFFE | 20 | Near-white |
| #FE3B30 | 19 | Red accent |

Named color tokens:

- White: #FFFFFF
- Gray 50: #808080
- Gray 90: #000000
- Gray 70: #4D4D4D
- Yellow: #FFA800
- Green: #67CE00
- Orange: #FF5E00

## Type scale

### Named typography tokens

| Style | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Crimson Text/Regular/22 | Crimson Text | 400 | 22px | 28px | -0.22px |
| Public Sans/ExtraBold/12 | Public Sans | 800 | 12px | 16px | -0.12px |
| Public Sans/Regular/14 | Public Sans | 400 | 14px | 20px | -0.14px |
| Public Sans/ExtraBold/48 | Public Sans | 800 | 48px | 56px | -0.48px |
| Crimson Text/Regular/28 | Crimson Text | 400 | 28px | 32px | -0.28px |

### Raw styles by usage

- SF Pro Text Regular, 17px — 354 uses
- SF Pro Text Regular, 14px — 160 uses
- SF Pro Text Regular, 15px — 82 uses
- SF Pro Text Regular, 13px — 72 uses
- SF Pro Text RegularItalic, 11px — 42 uses
- SF Pro Text Medium, 16px — 40 uses
- SF Pro Text Semibold, 15px — 34 uses
- SF Pro Text Semibold, 17px — 34 uses
- SF Pro Text Medium, 10px — 32 uses
- SF Pro Text Medium, 17px — 24 uses
- Roboto Regular, 15px — 20 uses
- SF Pro Display Regular, 25px — 20 uses
- SF Pro Text Medium, 13px — 20 uses
- SF Pro Text Bold, 10px — 18 uses
- SF Pro Text Regular, 16px — 16 uses
- SF Pro Display Regular, 20px — 14 uses
- SF Pro Text Medium, 15px — 14 uses
- SF Pro Text Regular, 12px — 14 uses
- Public Sans Regular, 18px — 10 uses
- Public Sans ExtraBold, 24px — 8 uses
- Roboto Regular, 17px — 6 uses
- SF Pro Text Medium, 14px — 6 uses

### Hierarchy

- 48px: Public Sans ExtraBold
- 28px: Crimson Text Regular
- 25px: SF Pro Display Regular
- 24px: Public Sans ExtraBold
- 22px: Crimson Text Regular
- 20px: SF Pro Display Regular
- 18px: Public Sans Regular
- 17px: SF Pro Text Regular, Medium, or Semibold; Roboto Regular
- 16px: SF Pro Text Regular or Medium
- 15px: SF Pro Text Regular, Medium, or Semibold; Roboto Regular
- 14px: Public Sans Regular; SF Pro Text Regular or Medium
- 13px: SF Pro Text Regular or Medium
- 12px: Public Sans ExtraBold; SF Pro Text Regular
- 11px: SF Pro Text RegularItalic
- 10px: SF Pro Text Medium or Bold

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- 2.67px: battery border
- 10px: search field and message-count badges
- 51px: app icon container
- 100px: home-indicator line

No radius variables were defined.

## Elevation & effects

- No local effect styles were found.
- The Telegram chat list includes drop-shadow effects on the navigation bar and an intermediate dark surface.
- Separators use a **0.33px** stroke and are **296px** wide.
- The home indicator is **134×5px** with a **100px** radius.

## Components

_None found in source._

## Screen patterns

### Telegram app cover

- App composition: **416×429px**.
- Icon container: **248×248px**, with **51px** radius.
- Inner Telegram logo group: **216×216px**.
- Main title: **416×87px**, text size **72px** in the extracted node.
- Supporting title: **171×31px**, text size **31px** in the extracted node.

### Theme headers

- Dark Theme header: **1525×61.5px**.
- Classic Theme header: **1525×61.5px**.
- Each includes a **1525×1px** horizontal line and a centered heading.

### Chat list

- Viewport: **375×812px**.
- Standard chat row: **375×76px**.
- Avatar: circular **60×60px**.
- Chat name: SF Pro Text Medium, **16px**.
- Message preview: SF Pro Text Regular, **15px**; Roboto Regular, **15px** also appears.
- Timestamp: SF Pro Text Regular, **14px**.
- Online indicator: **10×10px**.
- Read indicator: approximately **17×10px**.
- New-message badges use **20px** height and rounded ends.
- Pinned rows include a pin icon approximately **21×22px**.
- Muted rows include a mute icon approximately **11×12px**.
- Multiple rows are separated by **296×1px** separator lines.

### Swipe actions

- Right actions group: **148×76px**, containing two **74×76px** actions.
- Left actions group: **222×76px**, containing three **74×76px** actions.
- Actions shown: Pin, Unread, Mute, Delete, and Archive.
- Action labels use SF Pro Text Medium, **13px**, with white text.

### Navigation and search

- Navigation bar: **375×142px**.
- “Edit” and “Chats” labels use SF Pro Text at **17px**.
- Search field: **355×36px**, with **10px** radius.
- Search placeholder: SF Pro Text Regular, **17px**.
- Bottom tab bar: **375×83px**.
- Each of four tab regions is **94×49px**.
- Tab labels use SF Pro Text Medium, **10px**.
- Tabs: Contacts, Calls, Chats, Settings.
- Chats tab includes an **18×18px** unread badge.

### System bars

- Status bar: **375×44px**.
- Home indicator area: **375×34px**.
- Home indicator line: **134×5px**, centered at the bottom.
- Time uses SF Pro Text Semibold, **15px**.

## Notes for implementers

- Prefer the high-usage colors and typography styles before introducing lower-frequency tokens.
- Use #000000, #060606, and #1C1C1D for dark surfaces; use #FFFFFF for primary content.
- Use #8E8E93 for secondary chat metadata and previews.
- Preserve the repeated **76px** chat-row rhythm and **60×60px** avatar sizing.
- Keep chat names visually stronger than previews and timestamps.
- Use SF Pro Text for core Telegram interface text; use Roboto only where the source shows it for message previews.
- Use translucent tokens such as #FFFFFF4D, #FFFFFF73, #3C3C434A, #3C3C434D, #3C3C4399, #EBEBF54D, and #EBEBF599 only where transparency is needed.
- Do not infer component APIs, spacing variables, motion behavior, or additional tokens; none were extracted.
