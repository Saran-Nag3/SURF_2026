---
name: notion-design-system-wip-community
source: Notion design system (WIP) (Community) — Page 1
kind: design-system-context
---

# notion - Design System

## Overview

- Notion design system work-in-progress community file.
- Source page: Page 1.
- Primary page canvas: 1172×1613px.
- No local variables, paint styles, color variables, spacing variables, radius variables, motion variables, or grid styles were found.
- The system uses SF Pro Text for interface typography, with DM Mono Medium appearing in raw typography.

## Design language

- Light, neutral interface built around white content surfaces and a light gray sidebar.
- Compact navigation uses 30px menu rows, 6px corner radii, 14px medium text, and 16–20px icons.
- Content cards use white fills, 16px radii, and soft layered shadows.
- Dialogs use 10–12px radii and layered drop shadows.
- Warm accent colors appear in notes and workspace icons.
- AI surfaces use compact segmented tabs, rounded inputs, and circular submit controls.
- Active and hover states commonly use translucent black fills such as `#00000008` and `#0000000A`.

## Color palette

Ranked by reported usage:

| Color | Uses | Observed role |
|---|---:|---|
| `#A6A299` | 37 | Most-used neutral |
| `#FFFFFF` | 28 | Primary surface and icon fill |
| `#000000` | 25 | Text and raw black |
| `#91918E` | 19 | Secondary text and sidebar eyebrow text |
| `#9747FF` | 18 | Purple accent |
| `#32302C` | 14 | Primary dark text and icon color |
| `#E07C3945` | 14 | Warm orange translucent accent |
| `#51493C52` | 13 | Warm translucent neutral |
| `#D9730D` | 13 | Orange accent |
| `#00000066` | 9 | Translucent stroke |
| `#484743` | 7 | Neutral dark |
| `#00000008` | 6 | Subtle hover or surface fill |
| `#0000001A` | 6 | Dialog shadow |
| `#A5A5A5` | 6 | Disabled or muted control fill |
| `#F8F8F7` | 5 | Sidebar and light background |
| `#FF0000` | 4 | Raw red |

Additional observed colors:

- `#00000000` — transparent stroke.
- `#00000005`, `#0000000D`, `#0000000F`, `#00000040` — shadow layers.
- `#5448310A`, `#54483114` — warm translucent surface and border/shadow tones.
- `#1D1B16` — dark share dialog surface.
- `#FBF3DB` — note surface.
- `#0688D2` — initials/avatar fill.
- `#FFFFFF02` — near-transparent dialog icon button fill.

## Type scale

Use SF Pro Text unless otherwise specified.

| Style | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Heading H1 | SF Pro Text | Bold 700 | 40px | 48px | -1.6px |
| Body | SF Pro Text | Regular 400 | 16px | 24px | -0.64px |
| Body Small Medium | SF Pro Text | Medium 500 | 14px | 20px | -0.56px |
| Body Small | SF Pro Text | Regular 400 | 14px | 20px | -0.56px |
| Button Small | SF Pro Text | Regular 400 | 14px | 16.8px | -0.56px |
| Body Extra Smal Medium | SF Pro Text | Medium 500 | 12px | 16px | -0.48px |
| Body Extra Small | SF Pro Text | Regular 400 | 12px | 16px | -0.48px |
| Button Extra Small | SF Pro Text | Regular 400 | 12px | 14.4px | 0px |
| Dialog | SF Pro Text | Regular 400 | 12px | 117.32% | -0.48px |
| Dialog title | SF Pro Text | Medium 500 | 12px | 117.32% | -0.48px |

Additional raw typography:

- SF Pro Text Semibold, 14px.
- SF Pro Text Semibold, 24px.
- SF Pro Text Medium, 16px.
- SF Pro Text Bold, 24px.
- SF Pro Text Regular, 21.6px.
- DM Mono Medium, 20px.

Most-used text styles:

- Body: 21 uses.
- Body Small Medium: 13 uses.
- Button Small: 12 uses.
- Body Extra Smal Medium: 7 uses.
- Button Extra Small: 4 uses.
- Body Extra Small: 2 uses.
- Body Small: 2 uses.
- Heading H1: 2 uses.

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found. Observed component radii:

- 2px: Checkbox.
- 3px: Home Orange.
- 4px: Initials, Note.
- 6px: Button -> Border, Button -> Ghost, Button -> Ghost -> Brand, Menu Item -> More, Menu Item -> Add New, Menu Item -> Teamspace, Icon Button.
- 8px: AI Tabs.
- 10px: Dialog -> Account.
- 12px: Share Dialog, AI Chat Input and Suggestion.
- 16px: Page Tile, Tile -> Home Views, Tile -> Upcoming Events, Tile -> My Tasks.
- 100px: Submit AI, Dialog Icon Button.

## Elevation & effects

- Dialog:
  - Drop shadow: 28px, offset `0 14`, `#0000001A`.
  - Drop shadow: 4px, offset `0 2`, `#0000000F`.
  - Drop shadow: 0px, offset `0 0`, `#54483114`.
- Dialog Dark:
  - Drop shadow: 4px, offset `0 4`, `#00000040`.
- Tile:
  - Drop shadow: 32px, offset `0 12`, `#00000005`.
  - Drop shadow: 0px, offset `0 0`, `#0000000D`.
- Box:
  - Drop shadow: 32px, offset `0 12`, `#00000008`.
  - Drop shadow: 0px, offset `0 0`, `#0000000D`.
- Sidebar right border:
  - Inner shadow: 0px, offset `-1 0`, `#54483114`.
- Most-used effects:
  - Tile: 37 uses.
  - Sidebar right border: 6 uses.
  - Box: 4 uses.
  - Dialog: 2 uses.
  - Dialog Dark: 1 use.

## Components

### Navigation and menus

- **Account Menu** — 248×32px; horizontal; padding `8 6 8 6px`; centered alignment; Body Small Medium; Hover/Resting.
- **Menu Item -> Navigation** — 248×30px; horizontal; padding `4 8 4 8px`; 14px SF Pro Text Medium; Active/Resting.
- **Menu Item -> More** — 248×30px; horizontal; padding `4 8 4 8px`; 6px radius; 14px SF Pro Text Medium; Active/Resting.
- **Menu Item -> Add New** — 248×30px; horizontal; padding `5 8 5 16px`; 6px radius; 14px SF Pro Text Medium; Active/Resting.
- **Menu Item -> Teamspace** — 248×30px; horizontal; padding `5 8 5 16px` or `4 8 4 8px`; 6px radius; 14px SF Pro Text Medium; Active/Resting.
- **Eyebrow** — 232×16px; horizontal; padding `0 8 0 8px`; 12px SF Pro Text Medium.
- **Sidebar Eyebrow** — 232×30px; horizontal; padding `0 8 0 8px`; 12px SF Pro Text Medium.
- **Divider** — 400×1px.
- **Divider -> Page** — 400×13px; padding `1 0 1 0px`.
- **Initials** — 36×36px; 4px radius; fill `#0688D2`; Body text.

### Buttons and controls

- **Button -> Border** — 97×28px; 6px radius; padding `0 8 0 8px`; 1px stroke `#37352F29`; Button Extra Small; Hover/Resting.
- **Button -> Ghost** — 107×28px; 6px radius; padding `8 8 8 8px`; Button Small; Hover/Resting; Normal/Small.
- **Button -> Ghost -> Brand** — 174×28px; 6px radius; padding `8 8 8 8px`; SF Pro Text Medium 14px; Hover/Resting; Normal/Small.
- **Button -> Disabled** — 159×28px; 6px radius; padding `8 8 8 8px`; fill `#5448310A`; SF Pro Text Medium 14px.
- **Icon Button** — 28×28px; 6px radius; centered contents.
- **Dialog Icon Button** — 20×20px; 100px radius; 4px gap; fill `#FFFFFF02`.
- **Tab** — 42×24px; horizontal; 1px gap; SF Pro Text Regular 14px; Base/Dropdown; Active/Inactive.
- **AI Tabs** — 191×28px; 8px radius; padding `2 2 2 2px`; fill `#0000000A`; SF Pro Text Regular 14px.
- **Checkbox** — 14×14px; 2px radius; fill `#FFFFFF`.
- **Submit AI** — 24×24px; 100px radius; padding `10 10 10 10px`; 10px gap; fill `#A5A5A5`.
- **AI Submit** — 247×52px; horizontal; padding `12 13 12 13px`; 6px gap; SF Pro Text Regular 14px.
- **Thin check**, **Invite Member Small**, **Settings** — 16×16px icons.
- **Checkmark Square Small**, **Exercise**, **Food and Drink**, **Book Closed Filled**, **Wheat**, **Sun**, **Clock Small**, **More**, **Page**, **Plus Small**, **Compass Light Grey**, **Magnifying Glass**, **View Calendar Small** — 16×16px icons.
- **Close** — 16×16px icon.
- **Chevron Down Rounded Thick** — 12×12px icon.
- **Arrow Straight Up Fill**, **At**, **Paperclip**, **Notion**, **Templates**, **Gear**, **Trash**, **Question Mark Circle**, **Mail**, **Calendar Date 17**, **Invite Member**, **Globe** — 20×20px icons.
- **Compose** — 22×22px icon.
- **Grip** — 24×24px icon.
- **My Tasks Large**, **Home Database Views** — 48×48px icons.
- **Zoom Logo** — 13×9px icon.
- **View Table** — 16×12px icon.
- **Inbox** — 18×14px icon.
- **Home** — 16×14px icon.
- **Home Orange** — 20×20px; 3px radius; fill `#E07C3945`.

### Dialogs and overlays

- **Dialog -> Account** — 300×295px; 10px radius; white fill; Dialog effect; includes Body Extra Smal Medium, Body Small Medium, Body, Body Extra Small, and Button Extra Small.
- **Dialog -> Link row** — 296×28px; Body Extra Smal Medium; Hover/Resting; Default/Last.
- **Dialog -> New workspace row** — 296×36px; padding `4 4 0 4px`; Body Small Medium; Hover/Resting.
- **Dialog -> Account settings row** — 296×36px; padding `4 4 0 4px`; Body Small Medium and Body; Active/Resting.
- **Share Dialog** — 260×156px; 12px radius; dark fill `#1D1B16`; padding `10 10 12 12px`; Dialog Dark effect; Dialog and Dialog title typography.

### Page and content surfaces

- **Topbar -> Page** — 924×44px; horizontal; padding `0 10 0 12px`; space-between/center alignment; white fill; Button Small and Body Small.
- **Topbar -> Home** — 924×44px; horizontal; padding `0 10 0 12px`; 4px gap; max/center alignment; white fill.
- **Text Block** — 309×26px; horizontal; padding `1 2 1 2px`; 10px gap; Body; Empty/List/Text/Title.
- **Heading H3** — 400×38px; padding `3 2 3 2px`; white fill; SF Pro Text Bold 24px.
- **Heading H1** — 400×51px; padding `3 2 0 2px`; white fill; Heading H1 style.
- **Note** — 710×206px; 4px radius; padding `16 16 20 12px`; warm fill `#FBF3DB`; Body and SF Pro Text Regular 21.6px.
- **Page** — 16×16px icon.
- **Page Tile** — 124×118px; 16px radius; white fill; Tile effect; SF Pro Text Medium 14px.
- **Tiles** — 756×151px; horizontal; padding `1 24 32 0px`; 16px gap; SF Pro Text Medium 14px.
- **Tile -> Home Views** — 756×239px; 16px radius; white fill; Tile effect; SF Pro Text Medium 14px.
- **Tile -> Upcoming Events** — 756×295px; 16px radius; white fill; Tile effect; SF Pro Text Medium 12px, 14px, and 16px.
- **Tile -> My Tasks** — 756×216px; 16px radius; white fill; Tile effect; SF Pro Text Medium 12px and 14px.
- **Home Database Views** — 48×48px icon.
- **My Tasks Large** — 48×48px icon.

### AI input

- **AI Chat Input and Suggestion** — 756×132px; 12px radius; white fill; Box effect; SF Pro Text Regular 14px and SF Pro Text Medium 12px.
- **AI Submit** — 247×52px; horizontal; padding `12 13 12 13px`; 6px gap; SF Pro Text Regular 14px.
- **AI Tabs** — 191×28px; 8px radius; fill `#0000000A`; SF Pro Text Regular 14px.
- **Submit AI** — 24×24px; circular 100px radius; fill `#A5A5A5`.

## Screen patterns

- The page uses a 248px-wide vertical sidebar with a light `#F8F8F7` fill and Sidebar right border effect.
- Sidebar navigation is organized into an account row, primary navigation, teamspace sections, and compact sidebar eyebrow labels.
- The main content area uses 924px-wide top bars at 44px height.
- Page content includes headings, dividers, text blocks, notes, tiles, and database/task views.
- Home surfaces use 756px-wide tile and AI-input compositions.
- Account and sharing flows use compact white or dark dialogs with layered elevation.
- Navigation rows use 232px content width inside the 248px sidebar and commonly use 6px radii for active or interactive states.

## Notes for implementers

- Prefer the named component families and their exact dimensions over ad hoc equivalents.
- Use the provided typography styles rather than introducing new sizes or line heights.
- Preserve the distinction between Body Small Medium and Body Small.
- Use `#00000008` and `#0000000A` for the documented subtle surface states; do not substitute opaque fills.
- Apply Tile, Box, Dialog, Dialog Dark, and Sidebar right border effects only where specified.
- Keep icon dimensions exact; most icons are 16×16px or 20×20px.
- Treat repeated raw colors as palette candidates ranked by usage, not as additional semantic tokens.
- No spacing, radius, motion, grid, or local variable system was defined in the source.
