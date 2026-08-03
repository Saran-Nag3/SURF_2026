---
name: gmail-mobile-app-community
source: Gmail Mobile App (Community)
kind: design-system-context
---

# gmail - Design System

## Overview

Gmail mobile app community design for a 375×812px inbox experience, including splash, email-list, search, bottom navigation, and iPhone 11 Pro device presentation. The visual language combines white surfaces, Gmail red accents, gray supporting text, Product Sans headings, and Roboto interface text.

## Design language

- Mobile-first layout centered on a 375×812px viewport.
- Primary surfaces are white.
- Gmail red identifies active mail navigation and key brand accents.
- Sender names and subjects use dark text; secondary message and metadata use gray.
- Product Sans is used for branded labels and sender emphasis.
- Roboto is used for email metadata, message content, counts, and utility text.
- Inbox rows are horizontal, compact, and information-dense.
- Attachment indicators use pill-shaped outlined containers.
- Cover artwork uses a red background with a darker red vector shape and large white typography.

## Color palette

Ranked where usage counts are available:

| Token / usage | Color | Usage |
|---|---|---:|
| `gmail/grey` | `#5D5C5D` | 54 |
| `gmail/red` | `#EA4335` | 34 |
| `gmail/blue` | `#FFFFFF` | 30 |
| `gmail/yellow` | No value recorded | 24 |
| `gmail/black` | `#292929` | 20 |
| `gmail/light-grey` | No value recorded | 20 |
| `#FFFFFF` | `#FFFFFF` | 45 raw uses |
| `#000000` | `#000000` | 7 raw uses |
| `#DADADA` | `#DADADA` | 7 raw uses |
| `#C52627` | `#C52627` | 3 raw uses |
| `#EA4535` | `#EA4535` | 3 raw uses |
| `Screen Components` | `#262C2D` | — |
| `fl-gray-600` | `#636F73` | — |
| `fl-gray-1000` | `#121515` | — |
| `Device BG` | `#121515` | — |
| `Device Surround` | `#3A4245` | — |
| `Side Buttons` | `#121515` | — |
| `SystemOrange / Light` | `#FF9500` | 1 |
| `Carbon / Darkest` | `#24262B` | — |
| `Carbon Neutral/300` | `#D6D9DD` | 1 |

Additional recorded colors:

- `#00000039`
- `#0015400D`
- `#00154024`
- `#121515`
- `#24262B`
- `#262C2D`
- `#3A4245`
- `#636F73`
- `#C52627`
- `#D6D9DD`
- `#EA4335`
- `#EA4535`
- `#FF9500`
- `#FFFFFF`

## Type scale

- `200px` — Gilroy ExtraBold, cover heading.
- `64px` — Gilroy Light, cover supporting heading.
- `20px` — Product Sans Bold, sender emphasis.
- `14px` — Product Sans Bold, sender labels and branded interface text.
- `14px` — Product Sans Regular, navigation labels and search placeholder.
- `14px` — Roboto Medium, subjects, section labels, and compact metadata.
- `14px` — Roboto Regular, message previews and attachment labels.
- `12px` — Roboto Regular, timestamps and inbox section labels.
- `10px` — Roboto Regular, notification badge text.

## Spacing scale

No spacing variables were found. Recorded component spacing:

- Mail row: `12px` horizontal padding on the left and right, `12px` gap between avatar and content.
- Mail content: `6px` vertical gap between message body and attachment row.
- Attachment list: `8px` gap between attachment pills.
- Attachment pill: `4px` vertical padding, `8px` horizontal padding, `3px` internal gap.
- Search field: `351×44px`.
- Bottom navigation: `375×64px`.
- Mail component: `351×110px`.
- Email list: `351×650px`.

## Radius scale

- `8px` — search field.
- `30px` — attachment pill.
- `50px` — notification badge.
- Device and avatar shapes are present, but no radius value was recorded for them.

## Elevation & effects

- Device dropshadow:
  - `#00154024`, offset `0 0`, blur `2px`.
  - `#0015400D`, offset `0 2px`, blur `4px`.
  - `#00000039`, offset `13 37`, blur `48px`.
- The search field has a recorded drop shadow.
- Bottom navigation rectangles use a recorded top shadow with `0px` horizontal offset and `-1px` vertical offset.

## Components

### `mail`

- Family: `mail`.
- Size: `351×110px`.
- Layout: horizontal.
- Padding: `12px 0 12px 0`.
- Gap: `12px`.
- Sizing: fixed width and fixed height.
- Fill: `#FFFFFF`.
- Avatar: `32×32px` circular image area.
- Content area: `307×86px`.
- Body area: `307×56px`.
- Body layout separates:
  - Middle content area: `264×56px`.
  - Right metadata area: `50×49px`.
- Content gap: `6px`.
- Sender: Product Sans Bold, `14px`, `gmail/black`.
- Subject: Roboto Medium, `14px`, `gmail/black`.
- Message preview: Roboto Regular, `14px`, `gmail/grey`.
- Timestamp: Roboto Regular, `12px`, `gmail/grey`.
- Attachment row: `188×24px`, with `8px` gap.
- Attachment pill: `90×24px`, padding `4px 8px`, gap `3px`, radius `30px`, `gmail/light-grey` stroke at `1px`.
- Attachment icon: `16×16px`.
- Attachment label: Roboto Regular, `14px`, `gmail/grey`.

### `Devices / Apple / iPhone 11 Pro`

- Family: `Devices`.
- Size: `427×858px`.
- Used as a device mockup in the cover presentation.
- Device background: `#121515`.
- Device surround: `#3A4245`.
- Side buttons: `#121515`.

## Screen patterns

### Splash

- Viewport: `375×812px`.
- Background: `#FFFFFF`.
- Centered decorative Gmail logo artwork.
- Two logo instances are recorded: `18×13.51px` and `152.8×114.65px`.

### Inbox email list

- Viewport: `375×812px`.
- White screen background.
- Search field at the top: `351×44px`, radius `8px`, black `1px` stroke.
- Search includes a `24×24px` menu icon, Product Sans Regular `14px` placeholder, and `28×28px` profile image.
- Email list: `351×650px`.
- Repeated mail rows: `351×110px`.
- Section label: “Recibidos”, Roboto Medium, `12px`, `gmail/grey`.
- Mail rows contain avatar, sender, subject, preview, timestamp, status/star icon, and optional attachment pills.
- Bottom navigation: `375×64px`, split into two `187.5×64px` areas.
- Active mail navigation uses Gmail red; inactive meeting navigation uses `gmail/grey`.
- Notification badge: `24×16px`, radius `50px`, `gmail/red` fill, white `10px` text.

### Cover presentation

- Canvas: `1920×960px`.
- Background: `#EA4535`.
- Decorative vector: `#C52627`.
- Includes two collapsed `Devices / Apple / iPhone 11 Pro` mockups.
- Main title: “GMAIL mobile app”, Gilroy ExtraBold, `200px`, white.
- Supporting title: “Splash screen Inbox email list Prototype ready”, Gilroy Light, `64px`, white.
- Three decorative white circles, each `10×10px`.

## Notes for implementers

- Preserve the 375px mobile composition and the fixed `351px` content width used by search and email-list content.
- Use `gmail/red` only for active mail states and Gmail brand emphasis.
- Keep sender and subject text visually stronger than message previews and timestamps.
- Use Product Sans for Gmail-branded or prominent labels; use Roboto for dense email content and metadata.
- Reuse the `mail` family for inbox rows rather than creating alternate row structures.
- Render attachment pills only when attachments are present; keep their `90×24px` geometry and `30px` radius.
- Do not invent values for tokens recorded as having no color value: `gmail/light-grey` and `gmail/yellow`.
- Do not introduce colors outside the recorded palette.
