---
name: coachhub-personal-coach-hiring-mobile-app-ui-kit-community
source: CoachHub - Personal Coach Hiring Mobile App Ui Kit (Community)
kind: design-system-context
---

# coach - Design System

## Overview

- Mobile personal-coach hiring app UI kit.
- Source pages include Thumbnail, Main Design (Light Mode), Main Design (Dark Mode), Stye Guide, Components, Icons, and Design Editing Instraction.
- Both light and dark interface modes are represented.
- No local variable collections were found.

## Design language

- Primary accent: `#8576D0`.
- Light surfaces use `#FFFFFF` and `#F3F3F3`.
- Dark surfaces use `#0A0F23`, `#0E1725`, and `#151E28`.
- Text ranges from dark navy and charcoal to muted gray.
- Typography is primarily represented by General Sans, Inter, Product Sans, Outfit, and Poppins.
- The icon system is based on `vuesax/bold` icons at `24px × 24px`, with white fill in the extracted specs.
- Component families: `vuesax`, `document-normal`.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role / source references |
|---|---:|---|
| `#292D32` | 597 | Raw color |
| `#17191C` | 380 | Raw color |
| `#000000` | 307 | Raw color |
| `#FFFFFF` | 146 | Raw color; Light Mode/White, Banking/White, Personal Coach (Light)/White |
| `#E6EAEE` | 126 | Raw color |
| `#8576D0` | — | Personal Coach (Light)/Base 01; primary accent |
| `#192031` | — | Flight Booking App (Light Mode)/Font 01 |
| `#656871` | — | Flight Booking App (Light Mode)/Font 02 |
| `#2C2C29` | — | Taxi/Font 01 |
| `#151E28` | — | Base / 900 - Primary |
| `#0E1725` | — | Task Management/Title font; Font 01 |
| `#71767D` | — | Font 02 |
| `#F3F3F3` | — | BG 2 |
| `#323B4B` | — | Text 1 |
| `#B0B7C3` | — | Text 4 |
| `#0A0F23` | — | Personal Coach (Light)/Dark BG |

## Type scale

### Defined typography tokens

| Token | Family | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| B4 | General Sans | 500 | `12px` | `103.7%` | `0px` |
| B3 | General Sans | 500 | `16px` | `118.52%` | `0px` |
| B2 | General Sans | 500 | `18px` | `88.89%` | `0px` |

### Extracted raw styles

- `36px`: Inter Bold
- `32px`: Product Sans Bold
- `28px`: General Sans Medium
- `27.43px`: Inter SemiBold
- `24.02px`: Inter Medium; Inter SemiBold
- `24px`: General Sans Medium; General Sans Regular
- `22.43px`: Inter Bold
- `20.02px`: Inter SemiBold
- `20px`: General Sans Semibold; Outfit SemiBold
- `18.01px`: Inter Medium
- `18px`: General Sans Medium; Outfit Medium
- `16.01px`: Inter Medium
- `16px`: General Sans Medium; Outfit Medium; Poppins Regular; Product Sans Bold
- `12.01px`: Inter Medium
- `12px`: General Sans Medium; Inter Regular; Outfit Medium
- `11.21px`: Inter SemiBold
- `10.28px`: Inter SemiBold
- `8px`: Inter SemiBold

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- Drop shadow style: `drop_shadow 48px`, offset `0 4`, color `#00000005`.

## Components

### Component families

- `vuesax`
- `document-normal`

### Vuesax icon specification

- Family/style: `vuesax/bold`
- Size: `24px × 24px`
- Fill: `#FFFFFF`

The extracted icon set covers search, gender and zodiac, 3D and layout, logistics, buildings, alignment and grids, charts, education, transport, shopping, calling, routing and location, filters, status and utility, home, messaging, devices, and design tools.

Representative available icons include:

- `vuesax/bold/search-normal`
- `vuesax/bold/woman`
- `vuesax/bold/man`
- `vuesax/bold/home`
- `vuesax/bold/menu`
- `vuesax/bold/add`
- `vuesax/bold/close-circle`
- `vuesax/bold/tick-circle`
- `vuesax/bold/filter`
- `vuesax/bold/teacher`
- `vuesax/bold/briefcase`
- `vuesax/bold/message`
- `vuesax/bold/call`
- `vuesax/bold/location-tick`
- `vuesax/bold/heart`

## Screen patterns

- **Thumbnail:** overview or cover presentation for the UI kit.
- **Main Design — Light Mode:** primary mobile app screens using light surfaces and dark text.
- **Main Design — Dark Mode:** alternate mobile app screens using dark navy surfaces and light content.
- **Stye Guide:** visual reference for colors, typography, and styling.
- **Components:** reusable interface component references.
- **Icons:** the Vuesax icon inventory.
- **Design Editing Instraction:** editing and usage guidance.

## Notes for implementers

- Use only the extracted palette values listed in this document.
- Prefer the named General Sans tokens B4, B3, and B2 where the corresponding text role is known.
- Treat the raw typography list as available source styles, not as a single unified font system; multiple font families are present.
- Use `#8576D0` as the documented Personal Coach accent.
- Use `#FFFFFF` for the extracted Vuesax bold icon fill unless a screen-specific treatment is explicitly provided.
- No spacing, radius, motion, or grid variables were extracted.
- Preserve the distinction between light and dark screen modes.
