---
name: ui-mobile-app-by-omega-community
source: UI mobile app / by Omega (Community)
kind: design-system-context
---

# omega - Design System

## Overview

A dark mobile finance app UI with a 428 × 926px viewport and 60px outer corner radius. The primary screens are Home, Analyze, and Bank Cards. The system combines a deep navy background, white typography, muted lavender secondary text, vivid accent colors, gradient bank cards, transaction lists, charts, avatars, and a persistent white tab bar.

No local variables, text styles, spacing variables, radius variables, motion tokens, effect styles, grid styles, or component families were extracted.

## Design language

- Dark, high-contrast financial dashboard aesthetic.
- Primary screen background: `#000040`.
- Primary text and key values: `#FFFFFF`.
- Secondary text and metadata: `#B9B2C4`; chart/date labels also use `#B9B2C4`.
- Large rounded surfaces dominate the interface:
  - Mobile screen radius: `60px`.
  - Home payment card radius: `40px`.
  - Bank card radius: `50.87px`.
  - Circular function buttons: `40px` radius.
- Card surfaces use a linear gradient from `#20204D` to `#1D1D55`, with blur, noise, translucent border treatment, and vivid decorative color fields.
- Layouts use fixed-width content areas of `368px` inside the mobile viewport.
- Headings and balances are prominent, while transaction metadata is compact and muted.
- Rubik is the sole observed typeface.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 54 | Primary text, balance values, icons, tab bar fill |
| `#B9B2C4` | 28 | Secondary text, labels, dates, metadata |
| `#9491AE` | 15 | Additional muted UI color |
| `#E42BC9` | 7 | Chart highlight and vivid accent |
| `#2680B8` | 4 | Accent |
| `#000040` | 3 | Mobile screen background |
| `#00F0FF` | 3 | Accent |
| `#00FF38` | 3 | Accent |
| `#4200FF` | 3 | Accent |
| `#49BAFF` | 3 | Accent |
| `#EB001B` | 3 | Accent |
| `#F79E1B` | 3 | Accent |
| `#FA00FF` | 3 | Accent |
| `#FF5F00` | 3 | Accent |
| `#FFFFFF80` | 3 | Translucent card decoration |
| `#FFFFFFB2` | 3 | Secondary card metadata |

Gradient:

- Linear gradient: `#20204D` at 0% to `#1D1D55` at 100%.
- Used on the Home payment card and Bank Cards surfaces.

## Type scale

Typeface: Rubik.

Observed hierarchy and styles:

| Size | Weight/style | Observed usage |
|---:|---|---|
| `32px` | Medium | Balance values such as `$1.924,35` |
| `30px` | Bold | Large greeting and page titles |
| `24px` | SemiBold | Analyze page title |
| `20px` | SemiBold | Section titles such as “Transaction details” |
| `20.35px` | Light | Vertical bank card numbers |
| `18px` | Medium | Transaction names and amounts |
| `16px` | Regular | Body labels, metadata, dates, actions |
| `15.26px` | Light | Vertical card expiry labels |
| `14px` | Regular | Chart value label |
| `12px` | Light | Horizontal card expiry label |

Observed line box dimensions include:

- `32px` text rendered at `38px` height.
- `30px` text rendered at `36px` height.
- `24px` text rendered at `28px` height.
- `20px` text rendered at `24px` height.
- `18px` text rendered at `21px` height.
- `16px` text rendered at `19px` height.

No local text styles were defined in Figma.

## Spacing scale

No spacing variables were found. Observed layout gaps and dimensions:

- `4px` gap between transaction name and metadata rows.
- `6px` gap between circular function icon and label.
- `8px` gap between balance label and balance value.
- `10px` gap between transaction rows.
- `10.17px` gap within vertical card details.
- `12px` gap in the bank-card pagination indicator.
- `15px` gap between transaction logos and text.
- `16px` gap between bank cards.
- `18px` gap between function items.
- `20px` gap between major stacked sections.
- Content width: `368px`.
- Transaction logo diameter: `55px`.
- Avatar diameter: `60px`.
- Function icon container: `80px`.
- Tab bar: `388px × 66px`.

## Radius scale

Observed radii:

- `10px` — chart meaning label.
- `40px` — Home payment card; circular function buttons.
- `50.87px` — Bank Cards surfaces.
- `60px` — mobile screen frames.
- `76.3px` — decorative bank-card polygon geometry.
- `0px` — square vector geometry and some groups.

## Elevation & effects

- No elevation or shadow styles were extracted.
- Background blur:
  - `90px` on the Home payment card.
  - `114.46px` on Bank Cards surfaces.
- Noise texture image overlays use `20%` opacity.
- Card border treatments:
  - Home card: `2px` gradient border layers and a `3px` border layer at `50%` opacity.
  - Bank cards: `2.54px` gradient border layers and a `3.82px` border layer at `50%` opacity.
- Translucent card decoration uses `#FFFFFF80`.
- Card expiry metadata uses `#FFFFFFB2`.

## Components

_None found in source._

The extraction contains repeated UI patterns but no Figma component families or component specs.

## Screen patterns

### Home

- Frame: `428 × 926px`, background `#000040`, radius `60px`.
- Header combines a greeting, user name, and `60px` circular avatar.
- Payment card:
  - `368 × 230px`.
  - `40px` radius.
  - Gradient surface with blur, noise, decorative geometry, translucent borders, balance, card number, expiry, and card-brand artwork.
- Functions row:
  - Four equal `80 × 105px` items.
  - Circular `80 × 80px` decorative icon areas.
  - Labels: Analyze, Calendar, Document, Collect.
  - `18px` gap between items.
- Transaction details:
  - Section width `368px`.
  - Header pairs a `20px` section title with a right-aligned “View All” action.
  - Four transaction rows, each `368 × 55px`.
  - `55px` circular logo, `15px` logo-to-text gap, and `10px` row gap.
- Persistent white tab bar: `388 × 66px`.

### Analyze

- Frame: `428 × 926px`, background `#000040`, radius `60px`.
- Back/title row:
  - `368px` wide.
  - `28px` back icon.
  - `24px` SemiBold “Analyze” title.
- Filter control displays “Oct - Feb” with a dropdown icon.
- Schedule chart:
  - `368px` wide and `195.5px` high.
  - Followed by a `19px` date-label row with Oct, Nov, Dec, Jan, and Feb.
  - Chart value callout uses a `66 × 30px` label with `10px` radius and `#E42BC9`.
- Reuses the Home transaction-details pattern.
- Includes a `151 × 65px` total-balance block.
- Persistent white tab bar: `388 × 66px`.

### Bank Cards

- Frame: `428 × 926px`, background `#000040`, radius `60px`.
- Header combines a `30px` Bold “Bank Cards” title and `60px` circular avatar.
- Balance block:
  - `151 × 65px`.
  - Muted `16px` label.
  - White `32px` Medium balance.
- Horizontal cards area:
  - `601 × 468px`.
  - Two cards, each `292.5 × 468px`.
  - `16px` gap between cards.
  - `50.87px` radius.
  - Gradient, blur, noise, decorative geometry, translucent border, vertically oriented card details, card-brand artwork, and translucent vector decoration.
- Pagination indicator below the cards uses a `54 × 10px` decorative frame with `12px` gap.
- Persistent white tab bar: `388 × 66px`.

## Notes for implementers

- Use only the extracted palette values listed above; do not substitute additional colors.
- Preserve the dark `#000040` screen background and the high contrast between `#FFFFFF` primary text and `#B9B2C4` secondary text.
- Use Rubik and match the observed weights and sizes rather than creating new typography styles.
- Keep the primary content width at `368px` within the `428px` mobile frame.
- Treat transaction rows as a reusable visual pattern even though no formal component was extracted.
- Keep card surfaces layered: gradient base, decorative accent geometry, background blur, noise texture at `20%` opacity, and translucent border treatment.
- Card numbers and expiry labels may be arranged vertically on Bank Cards and horizontally on the Home payment card.
- Logos, avatars, Mastercard artwork, tab-bar artwork, chart geometry, and function icons are image or decorative assets from the source; no component geometry specification was extracted for them.
- Do not infer additional interaction states, motion, shadows, grid rules, or spacing tokens; none were present in the source.
