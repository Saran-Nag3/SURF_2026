---
name: fortnite-progressive-companion-app-community
source: Fortnite Progressive Companion App (Community)
kind: design-system-context
---

# fortnite - Design System

## Overview

- Fortnite companion app design system for mobile screens.
- Primary extracted mobile frame: 390×844px.
- Visual direction combines vivid blue gradients, dark navy surfaces, yellow accents, condensed Fortnite display typography, and icon-led navigation.
- Mobile grid: 4 columns, 77.5px section width, 16px gutter, stretch alignment.

## Design language

- Use Burbank Big Condensed Black/Bold for prominent Fortnite-style headings, labels, and button text.
- Use Floki for supporting headings, paragraphs, and tertiary actions.
- Favor uppercase labels and compact, high-impact text.
- Use blue gradient backgrounds with dark navy panels and bright yellow emphasis.
- Use outlined, angular button treatments with dark strokes.
- Navigation is icon-first, with fixed-height mobile menu items.
- Decorative character, logo, and game-themed imagery are prominent in splash, login, and locker experiences.

## Color palette

Usage-ranked colors from raw extraction:

| Color | Usage |
|---|---:|
| `#737373` | 381 |
| `#222222` | 294 |
| `#000000` | 160 |
| `#FFFFFF` | 95 |
| `#DD9F17` | 45 |
| `#F2EC00` | 42 |
| `#D8D8D8` | 30 |
| `#AD7C12` | 28 |
| `#0B0D0E` | 20 |
| `#1D1D1D` | 20 |
| `#28DFEA` | 16 |
| `#F2F2F2` | 14 |
| `#101010` | 13 |
| `#00082D` | 12 |
| `#7B61FF` | 12 |
| `#9747FF` | 8 |
| `#FFFF00` | 8 |

### Foundation scales

- **Blue:** 50 `#EDEEFE`, 100 `#C8C9FD`, 200 `#ADAFFB`, 300 `#878AFA`, 400 `#7074F9`, 500 `#4C51F7`, 600 `#454AE1`, 700 `#363AAF`, 800 `#2A2D88`, 900 `#202268`.
- **Yellow:** 50 `#FEFDE6`, 100 `#FBF9B0`, 200 `#F9F68A`, 300 `#F6F254`, 400 `#F5F033`, 500 `#F2EC00`, 600 `#DCD700`, 700 `#ACA800`, 800 `#858200`, 900 `#666300`.
- **Black:** 50 `#E6E6E6`, 100 `#B2B2B2`, 200 `#8C8C8C`, 300 `#585858`, 400 `#383838`, 500 `#060606`, 600 `#050505`, 700 `#040404`, 800/900 `#030303`.
- **White:** 50 `#FFFFFF`, 100 `#FEFEFE`, 200 `#FDFDFD`, 300/400 `#FCFCFC`, 500 `#FBFBFB`, 600 `#E4E4E4`, 700 `#B2B2B2`, 800 `#8A8A8A`, 900 `#696969`.
- **Purple:** 50 `#F5EDF8`, 100 `#E1C8EA`, 200 `#D2ADE0`, 300 `#BD88D1`, 400 `#B171C9`, 500 `#9D4DBB`, 600 `#8F46AA`, 700 `#6F3785`, 800 `#562A67`, 900 `#42204F`.
- **Green:** 50 `#EAF4EB`, 100 `#BFDDC1`, 200 `#A0CDA3`, 300 `#75B678`, 400 `#5AA85E`, 500 `#319236`, 600 `#2D8531`, 700 `#236826`, 800 `#1B501E`, 900 `#153D17`.

### Named colors and gradients

- **Dark:** `#1D1A1B`.
- **Blue:** `#3E1FFF`.
- **Radial Blues:** radial gradient `#4C51F7` at 0% to `#454AE1` at 100%; 8 uses.
- **Background gradient:** radial gradient `#09AAFB` at 0% to `#0745B4` at 100%; 6 uses.
- **Battle pass gradient:** radial gradient `#F3AF19` at 0%, `#AD7C12` at 44%, `#664A0B` at 66%, and `#030303` at 98%; 3 uses.

Most-used semantic styles:

- `#EDEEFE` / Foundation Blue 50: 390 uses.
- `#202268` / Foundation Blue 900: 260 uses.
- `#FBFBFB` / Foundation White 500: 185 uses.
- `#060606` / Foundation Black 500: 120 uses.
- `#4C51F7` / Foundation Blue 500: 57 uses.
- `#7074F9` / Foundation Blue 400: 53 uses.
- `#F2EC00` / Foundation Yellow 500: 35 uses.

## Type scale

All listed styles use 0px tracking and automatic line height unless otherwise specified.

| Style | Font | Weight | Size |
|---|---|---:|---:|
| BBK - HEADER 1 | Burbank Big Condensed Black | 700 | 50px |
| Header 1 | Floki | 700 | 50px |
| BBK - HEADER 2 | Burbank Big Condensed Black | 700 | 38px |
| Header 2 | Floki | 700 | 38px |
| BBK - HEADER 3 | Burbank Big Condensed Black | 700 | 28px |
| Header 3 | Floki | 700 | 28px |
| BBK - HEADER 4 | Burbank Big Condensed Black | 700 | 21px |
| Header 4 | Floki | 700 | 21px |
| BBK - BUTTON TEXT | Burbank Big Condensed Black | 700 | 16px |
| BBK - Paragraph big | Burbank Big Condensed Bold | 600 | 16px |
| Button text | Floki | 800 | 16px |
| Paragraph big | Floki | 400 | 16px |
| BBK - Paragraph small | Burbank Big Condensed Bold | 600 | 12px |
| Paragraph small | Floki | 400 | 12px |

Raw typography also contains Inter Regular at 9px, 12px, and 15px; Burbank Big Condensed Bold at 36px and 50px; Burbank Big Condensed Black at 15px and 50px; Poppins ExtraBoldItalic at 10px; and Floki Medium at 21px.

## Spacing scale

_No spacing variables found in source._

Documented component spacing:

- `menu-item`: 4px padding on all sides, 4px gap.
- `mobile-menu-item`: 4px padding on all sides, 4px gap.
- `ButtonPrimary`: 0px padding and 0px gap.
- `ButtonPrimary/button_tertiary`: 0px padding and 10px gap.
- Login logo frame: 8px vertical gap.
- Login action frame: 24px vertical gap.
- Locker header: 16px horizontal padding and 89px gap.
- Locker bottom menu: 0px padding and 0px gap.
- Vertical mobile grid gutter: 16px.

## Radius scale

_No radius variables found in source._

## Elevation & effects

- No local effect styles found.
- Background gradient: radial `#09AAFB` to `#0745B4`.
- Radial Blues gradient: radial `#4C51F7` to `#454AE1`.
- Battle pass gradient: radial `#F3AF19`, `#AD7C12`, `#664A0B`, and `#030303` across the documented stops.
- Button treatments use dark `#000000` strokes.
- Splash loading mark uses a 4px blue stroke.
- No shadows or elevation tokens were extracted.

## Components

Only extracted component families from the permitted component set are listed.

### Navigation and actions

- **ButtonPrimary**
  - Size: 362.5×59.5px.
  - Vertical layout, centered alignment, 0px padding, 0px gap.
  - Text style: BBK - HEADER 3.
  - Variants: Default, Variant2, Variant3.
- **ButtonPrimary/button_tertiary**
  - Size: 121×31px.
  - Horizontal layout, 0px padding, 10px gap.
  - Text style: Floki Bold, 21px.
- **menu-item**
  - Size: 117×40px.
  - Horizontal layout, centered alignment, 4px padding, 4px gap.
  - Text style: BBK - HEADER 3.
  - Variants: Default, Selected.
- **mobile-menu-item**
  - Size: 56×76px base component.
  - Vertical layout, centered alignment, 4px padding, 4px gap.
  - Fill: `#EDEEFE`.
  - Text style: BBK - BUTTON TEXT.
  - Variants: Default, selected.

### Content

- **quest list**
  - Size: 364×146px.
  - Text styles: BBK - Paragraph big and BBK - HEADER 2.
  - Variants: Default, expand.
- **battle-pass-skin**
  - Size: 997×904px.
  - Fill: `#FFFFFF`.
  - Variants: Default, Variant2.
- **Fortnite_lhama**
  - Size: 350×331.83px.
  - Variants: Default, loading.
- **Component 1**
  - Size: 63.58×62.63px.
  - Fill: `#FFFFFF`.
  - Variants: Selected, default.

### Icons

- **Battle Pass**, **Clock**, **Exit**, **Mic**, **Npc Dialog**, **Person add**, **People**, **Padlock**, **Person**, **Settings**, and **V-Bucks**
  - Base size: 64×64px.
  - Fill: `#FFFFFF`.
  - Available size variants include 12, 16, 18, 24, 28, 32, 38, 42, 48, and 64px where documented.
- **Fish**
  - Base size: 64×64px.
  - Fill: `#FFFFFF`.
  - Available size variants: 12, 16, 18, 24, 28, 32, 38, 42, and 48px.
- **loading**
  - Size: 48×48px.
  - Fill: `#FFFFFF`.
  - Variants: Default, Variant2.
- **Epic_Games_logo 1**
  - Size: 250×290.1px.
  - Fill: `#FFFFFF`.
- **FortniteLogo**
  - Size: 350×97.63px.
- **map-pin**, **map**, **quests**, and **locker**
  - Size: 48×48px.
- **xp-icon**
  - Size: 57×41.5px.
  - Fill: `#FFFFFF`.
  - Text style: BBK - HEADER 3.
- **badge**
  - Size: 28.44×30.06px.
  - Fill: `#FFFFFF`.
- **calendar**
  - Size: 35.78×35.72px.
- **circle**
  - Size: 33.46×35.07px.
  - Fill: `#FFFFFF`.
- **star**
  - Size: 48×48px.
  - Fill: `#FFFFFF`.

## Screen patterns

### Splash screen

- Frame: 390×844px.
- Background: Background gradient.
- Center or prominently place `Fortnite_lhama`.
- Include `loading` at 48×48px.
- Loading mark uses `#EDEEFE` strokes.

### Login

- Frame: 390×844px.
- Background: radial gradient `#09AAFB` at 0% to `#0745B4` at 100%.
- Logo stack uses `Epic_Games_logo 1` above `FortniteLogo`.
- Primary login action uses `ButtonPrimary` at 362.5×59.5px.
- Primary button treatment uses `#F2EC00`, `#4C51F7`, and `#000000`.
- Secondary account prompt uses Header 4 and a tertiary action using Floki Bold at 21px with `#F2EC00`.
- Login button label uses BBK - HEADER 3 in `#EDEEFE`.

### Locker

- Frame: 390×844px.
- Background: radial gradient `#09AAFB` to `#0745B4`.
- Header includes `Fortnite_lhama`, `Npc Dialog`, and `Person`.
- Main title: “SELECTING” using BBK - HEADER 2.
- Outfit selector uses dark navy `#202268`, white `#FBFBFB`, and blue `#EDEEFE`.
- Filter row uses `Component 1`, calendar, badge, and circle icons.
- Search treatment is a 359×53px outlined field with “SEARCH” in BBK - HEADER 4.
- Bottom navigation is a 390×76px horizontal row of five mobile menu items.
- Selected navigation state uses `#EDEEFE` with a `#F2EC00` stroke.

## Notes for implementers

- Preserve the 390×844px mobile composition and the 16px grid gutter.
- Prefer the highest-usage semantic colors before introducing lower-usage palette steps.
- Do not substitute generic fonts for Burbank Big Condensed or Floki when those styles are available.
- Keep headings and navigation labels uppercase where the source shows uppercase labels.
- Use `#EDEEFE` for the dominant light-blue navigation and interface fill, and `#202268` for dark blue structural surfaces.
- Use `#F2EC00` as the primary highlight and selected-state accent.
- Use the documented component dimensions rather than scaling arbitrary replacements.
- No local spacing, radius, motion, or effect-variable systems were extracted; use only the documented component padding, gap, gradient, and stroke values.
