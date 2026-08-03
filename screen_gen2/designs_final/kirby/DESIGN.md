---
name: kirby-cms-ui-kit-unofficial-community
source: Kirby CMS UI kit (Unofficial) (Community)
kind: design-system-context
---

# kirby - Design System

## Overview

- Unofficial community Kirby CMS UI kit.
- Source pages: ⚙️ Kirby UI Kit, 📄 Exemples, 👀 References.
- No local variable collections found.
- Primary UI structure uses fixed-size components, vertical form layouts, compact controls, cards, reports, content blocks, and file/page management patterns.
- Available grid styles:
  - 2 columns: 2 columns, 764px section, 72px gutter, centered.
  - 3 culumns: 3 columns, 467px section, 100px gutter, centered.

## Design language

- Typography is based on Roboto:
  - Roboto Regular, weight 400.
  - Roboto Medium, weight 500.
  - Roboto Mono Regular, weight 400.
- Text uses neutral gray and black tones with white surfaces.
- Semantic colors distinguish positive, notice, negative, and focus states.
- Controls commonly use 4px radius, white fills, and 1px borders.
- Common controls are compact:
  - Buttons: 69x32px.
  - Inputs: 208x40px.
  - Tabs: 214x36px.
  - Toggles: 84x40px.
- Icons are primarily 16x16px; file icons are 32x32px.
- No motion tokens found.

## Color palette

### Core and neutral colors

Ranked raw colors:

- `#222222` — 82,574 uses.
- `#2B2B2B` — 82,574 uses.

Named neutral tokens:

- `gray/900`: `#111111`
- `gray/800`: `#333333`
- `gray/700`: `#555555`
- `gray/600`: `#777777`
- `gray/500`: `#999999`
- `gray/400`: `#FFFFFF`
- `gray/300`: `#DDDDDD`
- `gray/200`: `#EFEFEF`
- `gray/100`: `#F7F7F7`
- `White`: `#FFFFFF`
- `Black`: `#000000`
- `alias/background`: `#EFEFEF`
- `alias/border`: `#FFFFFF`
- `alias/text`: `#111111`
- `alias/placeholder`: `#999999`
- `alias/backdrop`: `#00000099`

### Semantic colors

- `alias/positive`: `#5D800D`
- `alias/positive-light`: `#A7BD68`
- `alias/notice`: `#F4861F`
- `alias/notice-light`: `#DE935F`
- `alias/negative`: `#C82829`
- `alias/negative-light`: `#D16464`
- `alias/focus`: `#4271AE`
- `alias/focus-light`: `#7E9ABF`

### Color scales

- Blue:
  - Blue/600: `#4271AE`
  - Blue/400: `#7E9ABF`
  - Blue/300: `#B1C2D8`
  - Blue/200: `#CBD7E5`
- Green:
  - Green/600: `#5D800D`
  - Green/400: `#A7BD68`
  - Green/300: `#C6D49D`
  - Green/200: `#DCE5C2`
- Red:
  - Red/600: `#C82829`
  - Red/400: `#D16464`
  - Red/300: `#E3A0A0`
  - Red/200: `#EDC1C1`
- Purple:
  - Purple/600: `#9C48B9`
  - Purple/400: `#B294BB`
  - Purple/300: `#D4C3D9`
  - Purple/200: `#E0D4E4`
- Acqua:
  - Acqua/600: `#398E93`
  - Acqua/400: `#8ABEB7`
  - Acqua/300: `#BBD9D5`
  - Acqua/200: `#D0E5E2`
- Yellow:
  - Yellow/600: `#CCA000`
  - Yellow/400: `#F0C674`
  - Yellow/300: `#F7E2B8`
  - Yellow/200: `#F9E8C7`
- Orange:
  - Orange/600: `#F4861F`
  - Orange/400: `#DE935F`
  - Orange/300: `#EBBE9E`
  - Orange/200: `#F2D4BF`

## Type scale

### Roboto Regular, weight 400

- xs: 12px, line height auto, tracking 0px.
- sm: 14px, line height auto, tracking 0px.
- base: 16px, line height 24px, tracking 0px.
- lg: 18px, line height auto, tracking 0px.
- xl: 20px, line height auto, tracking 0px.
- 2xl: 24px, line height auto, tracking 0px.
- 3xl: 30px, line height auto, tracking 0px.
- 4xl: 36px, line height auto, tracking 0px.
- 5xl: 48px, line height auto, tracking 0px.
- 6xl: 64px, line height auto, tracking 0px.

### Roboto Medium, weight 500

- xs: 14px, line height auto, tracking 0px.
- sm: 12px, line height auto, tracking 0px.
- base: 16px, line height auto, tracking 0px.
- lg: 18px, line height auto, tracking 0px.
- xl: 20px, line height auto, tracking 0px.
- 2xl: 24px, line height auto, tracking 0px.
- 3xl: 30px, line height auto, tracking 0px.
- 4xl: 36px, line height auto, tracking 0px.
- 5xl: 48px, line height auto, tracking 0px.
- 6xl: 64px, line height auto, tracking 0px.

### Roboto Mono Regular, weight 400

- xs: 14px, line height auto, tracking 0px.
- sm: 12px, line height auto, tracking 0px.
- base: 16px, line height 24px, tracking 0px.
- lg: 18px, line height auto, tracking 0px.
- xl: 20px, line height auto, tracking 0px.
- 2xl: 24px, line height auto, tracking 0px.
- 3xl: 30px, line height auto, tracking 0px.
- 4xl: 36px, line height auto, tracking 0px.
- 5xl: 48px, line height auto, tracking 0px.
- 6xl: 64px, line height auto, tracking 0px.

Raw typography also contains:

- Roboto Regular, 43.49px.
- Roboto Regular, 20px.
- Roboto Regular, 14px.
- Roboto Regular, 9px.

## Spacing scale

_No spacing variables found in source._

Documented component spacing values:

- 0px, 1px, 2px, 6px, 8px, 10px, 12px, 16px, 34px.
- Common vertical form gap: 12px.
- Common content gap: 8px or 10px.
- Common cardlet, file, and content-block gap: 12px.
- Common input padding: 8px.
- Common button padding: 8px 6px.
- Common tag padding: 6px 8px or 0px 8px.

## Radius scale

- 4px:
  - `card`
  - `page`
  - `report`
  - `empty section`
  - `input text`
  - `range`
  - `tag`
  - `preview page & file`
  - `input textarea`
  - `radio`
  - `checkboxes`
- No other radius variables found.

## Elevation & effects

- `shadow/default`:
  - Drop shadow: 3px, offset 0 1, `#0000001A`.
  - Drop shadow: 2px, offset 0 1, `#0000000F`.
- `shadow/md`:
  - Drop shadow: 6px, offset 0 4, `#0000001A`.
  - Drop shadow: 4px, offset 0 2, `#0000000F`.
- `shadow/lg`:
  - Drop shadow: 15px, offset 0 10, `#0000001A`.
  - Drop shadow: 6px, offset 0 4, `#0000000D`.
- `shadow/xl`:
  - Drop shadow: 25px, offset 0 20, `#0000001A`.
  - Drop shadow: 10px, offset 0 10, `#0000000A`.
- `shadow/sticky`:
  - Drop shadow: 5px, offset 0 2, `#0000000D`.
- `shadow/inset`:
  - Inner shadow: 4px, offset 0 2, `#0000000F`.
- `shadow/outline`:
  - Drop shadow: 0px, offset 0 0, `#111111`.

## Components

### Layout and navigation

- `topbar`: 1929x40px; fill `gray/900`; text `/regular/sm`, `regular/base`.
- `header/Default`: 1546x120px; vertical; gap -1px; text `/regular/sm`, `/bold/3xl`.
- `tab`: 214x36px; variants `Is active: false/true`; text `/regular/sm`.
- `page`: 750x36px; radius 4px; horizontal; shadow/default; variants `Type: emoji/empty/icon/image`.
- `logo`: 121x42px; variants `Color: black/white`, `with name: false/true`.
- `Line`: 747x0px; fill `#FFFFFF`.
- `empty section`: 766x276px; radius 4px; 1px stroke `alias/border`; text `/regular/sm`.

### Content blocks

- `blocks`: 1598x1879px; vertical; gap 10px; text `/regular/sm`, `regular/base`, `/bold/3xl`, `/regular/2xl`, `/regular/3xl`, `/bold/lg`.
- `block-heading`: 1600x73px; vertical; padding 8px 0px 0px 0px; gap 10px; text `/regular/3xl`; variants `Size: H1/H2/H3`.
- `block-text`: 1600x110px; vertical; padding 8px 0px 0px 0px; gap 10px; text `regular/base`.
- `block-list`: 1600x110px; vertical; padding 8px 0px 0px 0px; gap 10px; text `regular/base`; variants `list type: bullet/numbered`.
- `block-quote`: 1600x142px; vertical; padding 8px 0px 0px 0px; gap 10px; text `regular/base`, `/bold/3xl`.
- `block-image`: 1501x849px; vertical; padding 0px 16px; gap 16px; text `/regular/sm`.
- `headline`: 719x68px; vertical; padding 8px; gap 8px; text `/regular/sm`, `/regular/2xl`.

### Cards, files, and data

- `card`: 250x276px; radius 4px; shadow/default; text `/regular/sm`; variants `Layout: Default/cardlet`, `type: Image`.
- `Cardlets`: 1600x269px; vertical; gap 12px; text `/regular/sm`, `/bold/lg`.
- `files`: 764x239px; vertical; gap 12px; text `/regular/sm`, `/bold/lg`.
- `files list`: 764x69px; vertical; gap 12px; text `/regular/sm`, `/bold/lg`.
- `preview page & file`: 76x24px; radius 4px; fill `gray/200`; text `/regular/xs`.
- `title file`: 184x60px; horizontal; padding 10px 12px; gap 10px; fill `#FFFFFF`; text `/regular/sm`.
- `object`: 761x189px; vertical; gap 12px; text `/regular/sm`, `mono/sm`, `Roboto Regular, 14px`, `/regular/xs`, `/bold/lg`.
- `cell`: 107x39px; horizontal; padding 8px; gap 10px; fill `alias/background`; 1px stroke `alias/border`; text `mono/sm`; variants include emoji image, icon, empty, heading, number, pages & files, status, tags, text, URL & email.
- `stats`: 1600x152px; vertical; gap 8px; text `/regular/sm`, `/regular/xs`, `/regular/3xl`, `/bold/lg`.
- `report`: 192x99px; vertical; padding 12px 16px; gap 8px; radius 4px; fill `White`; shadow/default; text `/regular/xs`, `/regular/3xl`; variants `theme: default/info/negative/notice/positive`.
- `users`: 750x69px; vertical; gap 12px; text `/regular/sm`, `/bold/lg`.

### Forms and controls

- `input text`: 208x40px; radius 4px; horizontal; padding 8px 0px 8px 8px; gap 10px; fill `White`; 1px stroke `gray/400`; text `regular/base`.
- `input text/label`: 103x24px; horizontal; gap 8px; text `regular/base`.
- `input textarea`: 750x128px; radius 4px; vertical; fill `White`; 1px stroke `gray/400`; text `regular/base`.
- `textarea`: 762x161px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `email`: 750x73px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `date`: 750x73px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `number`: 750x73px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `URL`: 358x73px; vertical; gap 12px; text `regular/base`, `/regular/sm`, `/bold/lg`.
- `phone`: 762x102px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `text`: 765x101px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `select`: 763x73px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `multiselect`: 750x109px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `tags`: 765x109px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `tags list`: 762x161px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `range`: 764x73px; vertical; gap 12px; text `/regular/sm`, `/regular/xs`, `regular/base`, `/bold/lg`.
- `range`: 729x40px; radius 4px; horizontal; padding 8px 0px 8px 8px; gap 8px; fill `White`; 1px stroke `gray/400`; text `regular/base`, `/regular/xs`.
- `radio`: 750x156px vertical field and 106x205px control; the control has radius 4px, fill `White`, 1px stroke `gray/400`, and `shadow/inset`.
- `checkboxes`: 750x156px vertical field and 106x205px control; the control has radius 4px, fill `White`, 1px stroke `gray/400`, and `shadow/inset`.
- `option`: 16x16px; fill `#FFFFFF`; variants `is selected: false/true`.
- `option-line`: 115x41px; vertical; padding 8px 1px 0px 1px; gap 8px; text `regular/base`.
- `Check`: 16x16px; fill `#FFFFFF`; variants `Checked: false/true`.
- `toggle`: 24x12px; fill `#FFFFFF`; variants `is active: false/true`.
- `Toggle`: 359x73px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `toogle`: 84x40px; horizontal; padding 8px 16px; gap 8px; centered; fill `White`; 1px stroke `alias/border`; text `regular/base`; variants `states: active/inactive`.
- `toggles`: 748x101px; vertical; gap 12px; text `/regular/sm`, `regular/base`, `/bold/lg`.
- `button`: 69x32px; horizontal; padding 8px 6px; gap 8px; text `/regular/sm`.
- `button label`: 67x16px; horizontal; gap 12px; text `/regular/sm`.
- `button statut`: 75x32px; horizontal; fill `#FFFFFF`; text `/regular/sm`; variants `Status: draft/listed/locked/unlisted`.
- `tag`: 98x32px; horizontal; padding 0px 8px; gap 10px; fill `gray/900`; text `regular/base`.
- `tag`: 37x28px; radius 4px; horizontal; padding 6px 8px; gap 8px; fill `gray/200`; text `/regular/sm`.
- `slider`: 199x20px; fill `#FFFFFF`.
- `help text`: 56x16px; fill `#FFFFFF`; text `/regular/sm`.
- `label`: 64x21px; horizontal; gap 12px; text `/bold/lg`.
- `label bar`: 165x21px; horizontal; gap 34px; text `/regular/sm`, `/bold/lg`.
- `info`: 711x65px; vertical; gap 12px; text `/regular/sm`, `/bold/lg`; variants `theme: Info/negative/positive`.

### Media and icons

- `image`: 184x118px; fill `#FFFFFF`; variants `type: emojy/icon/image`.
- `bg-img`: 212x152px; vertical; no padding or gap.
- `icons`: standard icons are 16x16px and filled `#FFFFFF`.
- File icons are 32x32px and filled `#FFFFFF`.
- Available icon families include account, add, alert, angle-left, angle-right, angle-down, archive, attachment, audio, badge, bars, bell, blank, bold, bolt, book, bookmark, box, brush, bug, calendar, cancel, cancel-small, car, cart, chart, chat, check, circle, circle filled, circle half, circle nested, circle outline, clock, code, cog, collapse, copy, credit-card, crop, dashboard, discord, discount, display, divider, document, dots, download, draft, edit, email, expand, facebook, file, file-audio, file-code, file-document, file-image, file-spreadsheet, file-text, file-video, file-word, file-zip, filter, funnel, folder, folder-structure, food, github, globe, grid, grid-bottom, grid-bottom-left, grid-bottom-right, grid-full, grid-left, grid-right, grid-top, grid-top-left, grid-top-right, h1 through h6, headline, heart, heart-outline, hidden, home, image, import, info, instagram, italic, key, layers, link, linkedin, list bullet, list numbers, live, loader, lock, logout, markdown, map, menu, mobile, money, moon, open, order-alpha-asc, order-alpha-desc, order-num-asc, order-num-dec, page, palette, paragraph, parent, paypal, pen, pepette, phone, pin, pinterest, play, preview, print, protected, qr-code, question, quote, refresh, remove, road-sign, search, server, settings, share, shuffle, sitemap, smile, sort, star, star-outline, store, striketrough, sun, table, tablet, tag, template, text, text-center, text-justify, text-left, text-right, ticket, tiktok, title, toggle-off, toggle-on, trash, twitter, underline, undo, unlock, upload, URL, user, users, video, vimeo, wand, wheelchair, whatsapp, youtube.

## Screen patterns

- The source contains three pages:
  - ⚙️ Kirby UI Kit: component and form-control reference patterns.
  - 📄 Exemples: assembled examples using blocks, cards, files, reports, stats, and content structures.
  - 👀 References: reference material.
- Use the 2-column centered grid for 764px sections with a 72px gutter.
- Use the 3-column centered grid for 467px sections with a 100px gutter.
- Content-heavy patterns use 1600px-wide blocks, cardlets, stats, and block compositions.
- Form patterns use approximately 750px-wide vertical fields with 12px gaps.
- File and data patterns use 764px-wide sections, cells, previews, titles, and file lists.
- Dashboard-like patterns use a 1929x40px topbar, reports, stats, users, cards, and tabs.
- Content editing patterns combine `blocks`, `block-heading`, `block-text`, `block-list`, `block-quote`, and `block-image`.

## Notes for implementers

- Use only the listed color tokens; map semantic states to the alias colors before using raw palette colors.
- Prefer named typography tokens over raw typography values.
- Use Roboto Regular for body text, Roboto Medium for bold labels and headings, and Roboto Mono for monospace values and cells.
- Apply 4px radius only where specified; no general radius beyond the documented component radius.
- Use `shadow/default` for cards and pages unless a component specifies another effect.
- Preserve fixed component dimensions when reproducing the reference layouts.
- Use white fills for controls and cards where specified, with the documented `gray/400` or `alias/border` 1px strokes.
- Keep standard icons at 16x16px and file icons at 32x32px.
- No spacing, radius, or motion variable collections were found; do not infer additional scales.
