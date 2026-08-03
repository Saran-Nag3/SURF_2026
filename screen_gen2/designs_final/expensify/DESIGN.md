---
name: expensify-budget-tracker-app-community
source: Expensify - Budget Tracker App (Community)
kind: design-system-context
---

# expensify - Design System

## Overview

- Source: Figma file `Expensify - Budget Tracker App (Community)`.
- Pages: Thumbnails, Design + Prototype, Components.
- The extraction contains a dark budget-tracker experience with card-management flows, balance summaries, add-card forms, navigation, category icons, and a separate music-oriented welcome/explore experience.
- No local variable collections, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Primary visual mode is dark, using `#141326` and `#191933` surfaces with white and translucent-white content.
- Accent color is gold `#E3B53C`, supported by purple `#6F259C`, red/pink tones, and translucent overlays.
- Typography is primarily DM Sans. Syne, Poppins, and Century Gothic are used for selected headings and secondary screens.
- UI icons are predominantly white and commonly sized at `24x24px`.
- Cards and form controls use rounded corners, translucent fills, borders, blur, and layered visual effects.
- Large display headings use DM Sans Bold at `36px`, while navigation and labels use smaller Century Gothic or DM Sans styles.
- Decorative screens use blurred color fields, gradients, large rounded containers, and image-like category tiles.

## Color palette

Ranked by source usage:

| Color | Uses | Role |
|---|---:|---|
| `#FFFFFF` | 774 | Primary text, icons, fills, and surfaces |
| `#FFFFFFDE` | 290 | High-emphasis translucent text |
| `#E3B53C` | 270 | Gold accent, selected states, indicators |
| `#FFFFFF80` | 216 | Translucent fills and borders |
| `#141326` | 126 | Primary dark background and containers |
| `#D9D9D9` | 75 | Light neutral surface |
| `#19173D80` | 56 | Translucent dark input/control fill |
| `#00000099` | 42 | Dark overlay |
| `#FFFFFF4D` | 42 | Low-opacity white surface |
| `#CAC9DF` | 39 | Muted indicator and secondary neutral |
| `#FDC1C1` | 26 | Light red/pink accent |
| `#333333` | 16 | Dark neutral |
| `#6F259C` | 12 | Purple accent |
| `#D9D9D900` | 12 | Transparent neutral |

Additional source colors are present in raw artwork and gradients but are not included here because they are outside the approved palette.

## Type scale

### Primary type usage

- **DM Sans Medium**
  - `16px` — 156 uses
  - `14px` — 45 uses
  - `15px` — 32 uses
  - `20px` — 25 uses
  - `24px` — 13 uses
  - `13px` — 4 uses
- **DM Sans Regular**
  - `13px` — 153 uses
  - `16px` — 50 uses
  - `14px` — 8 uses
  - `10px` — 4 uses
  - `12.34px` — 4 uses
  - `14.04px` — 4 uses
  - `20px` — 4 uses
- **DM Sans Bold**
  - `16px` — 49 uses
  - `13px` — 41 uses
  - `15px` — 28 uses
  - `36px` — 22 uses
  - `10px` — 7 uses
  - `20px` — 4 uses
  - `24px` — 4 uses
- **Poppins Medium**
  - `12px` — 16 uses
- **Syne Bold**
  - `20px` — 14 uses
  - `24px` — 9 uses
- **Century Gothic Bold**
  - `16px` — 11 uses
  - `20px` — 9 uses
  - `11px` — 6 uses
  - `15px` — 5 uses
- **Poppins Regular**
  - `24px` — 8 uses
- **Century Gothic CenturyGothic**
  - `12px` — 5 uses

### Hierarchy

- `36px` — DM Sans Bold
- `24px` — DM Sans Bold, DM Sans Medium, Poppins Regular, or Syne Bold
- `20px` — Century Gothic Bold, DM Sans Bold, DM Sans Medium, DM Sans Regular, or Syne Bold
- `16px` — Century Gothic Bold, DM Sans Bold, DM Sans Medium, or DM Sans Regular
- `15px` — Century Gothic Bold, DM Sans Bold, or DM Sans Medium
- `14.04px` — DM Sans Regular
- `14px` — DM Sans Medium or DM Sans Regular
- `13px` — DM Sans Bold, DM Sans Medium, or DM Sans Regular
- `12.34px` — DM Sans Regular
- `12px` — Century Gothic CenturyGothic or Poppins Medium
- `11px` — Century Gothic Bold
- `10px` — DM Sans Bold or DM Sans Regular

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- `4px`
- `5px`
- `11.57px`
- `13.16px`
- `15px`
- `18px`
- `20px`
- `30px`
- `40px`

Common control radii include `15px`. Large containers use `30px` or `40px`. The primary cards use `11.57px`, `13.16px`, and `15px`.

## Elevation & effects

- Background blur: `15px`.
- Background blur: `100px`.
- Layer blur: `100px`.
- Layer blur: `500px`.
- Drop-shadow effects are used on cards, containers, decorative artwork, and status elements.
- Inner-shadow effects are used on credit-card icons.
- Component-level white drop shadow: `0px` offset, `2px` x/y offset, `2px` blur.
- Card surfaces use layered shadows and decorative overlays rather than flat elevation alone.
- Translucent borders use `#FFFFFF80`.
- Form panels use `#FFFFFF4D` with `#FFFFFF80` borders and `100px` background blur.

## Components

### Component families

- `.`
- `Component 1`
- `Statistics`
- `Week`
- `arrow`
- `business and finance`
- `design`
- `development`
- `disc`
- `ecommerce`
- `fashion`
- `interface`
- `lock`
- `mail`
- `moon`
- `music`
- `remove`
- `tag`
- `technology`
- `transportation`
- `users`

### Component specifications

- `interface/logout`: `36x36px`, white fill, white drop shadow.
- `ecommerce/credit-card`: `42x42px`, white fill, inner shadow.
- `ecommerce/credit-card-2`: `41x41px`, white fill, inner shadow.
- `development/qr-code`: `24x24px`, white fill.
- `.`: `390x120px`, dark transparent-to-dark gradient, `15px` background blur.
- `Statistics`: `74x21px`, DM Sans Medium, `16px`, white.
- `Week`: `44x44px`, Poppins Regular, `24px`.
- `Component 1`: `20x10.37px`, white fill.
- `mail`: `20x19px`, white fill.
- `interface/close-lg`: `16x16px`, white fill.
- `ecommerce/cvv`: `17x17px`, white fill.
- `interface/todo`: `18x18px`, white fill.
- `interface/add-circle`: `18x18px`, white fill.
- `ecommerce/balance`: `18x18px`, white fill.
- `ecommerce/price-tag-rotate`: `18x19px`, white fill.
- All other listed icon components are primarily `24x24px` with white fill, including interface, category, navigation, arrow, and utility icons.

### Card pattern

- Three payment-card sizes are present:
  - `304.73x233.81px`, radius `11.57px`
  - `349.87x268.45px`, radius `13.16px`
  - `395.01x303.09px`, radius `15px`
- Cards contain a chip, contactless mark, card number, expiration date, and cardholder name.
- Card text uses DM Sans Regular at `12.34px`, `14.04px`, or `16px`, depending on card size.
- The largest card uses DM Sans Regular `26px` for the card number.
- Card text is white with shadowed treatment.

### Add-card form

- Form panel size: `467.92x608.63px`.
- Inner translucent panel: `430.65x469.54px`, radius `30px`, white translucent fill, white border, `100px` background blur.
- Full-width fields: `310.83x122.73px`, radius `15px`.
- Expiration field: `171.73x85.46px`, radius `15px`.
- Security code and next controls: `134.06x75.37px`, radius `15px`.
- Field labels use DM Sans Regular or Medium, `13px`, in `#FFFFFFDE`.
- The next control uses a warm gradient and white border.
- Add-card heading uses DM Sans Medium `20px`; the add indicator uses `#E3B53C`.

## Screen patterns

- **Cover / card dashboard:** A `1600x960px` dark canvas using `#141326`, with layered card presentations, wallet title, available balance, pagination dots, and add-card content.
- **Wallet card stack:** Multiple rounded payment cards are layered within a dark rounded container. Gold is used for the active indicator and selected card accents.
- **Add-card flow:** A translucent blurred panel contains card number, cardholder name, expiration date, security code, and next controls.
- **Mobile welcome / explore:** A rounded `655.36x990.35px` welcome frame uses a colorful background and shadow. The explore view uses a dark base, category tiles, a search area, top genres, and bottom navigation.
- **Bottom navigation:** Home, Explore, and Library labels use Century Gothic Bold `11px`; the active Explore state uses a cyan accent in the source artwork.
- **Category tile grids:** Repeated tiles are approximately `187.12x139.06px` with inner rectangles approximately `185.19x138.53px` and `4px` corner radii.

## Notes for implementers

- Prefer DM Sans for the budget-tracker UI. Use Syne Bold for wallet-style display titles when matching the source; use Poppins for the `Week` component and Century Gothic for the mobile explore experience.
- Use only the palette listed above for system-level UI tokens. Raw artwork contains additional colors that are not part of the approved palette.
- Keep the primary background dark and use white opacity levels to establish hierarchy.
- Use `#E3B53C` for selected indicators, key accents, and add-card affordances.
- Use `15px` radius for standard fields and controls; reserve `30px` and `40px` for larger panels and screen containers.
- Use white `24x24px` icons by default unless a component specification defines another size.
- Preserve the layered, blurred, translucent treatment of forms and decorative backgrounds.
- Do not infer spacing, motion, grid, or local style tokens; none were extracted.
