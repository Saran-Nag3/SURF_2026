---
name: behance-app-design-community
source: Behance App Design (Community)
kind: design-system-context
---

# behance - Design System

## Overview

- Source: Behance App Design (Community)
- Source pages: All pages (3): 🖤 Hello!, 📱 UI Design, 🤳Instagram
- The extraction contains a dark Behance/Dutra design portfolio experience and a mobile discovery app experience.
- No local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- Component families: `Header`, `Footer`, `Créditos`.

## Design language

- High-contrast visual language using dark backgrounds, white typography, and orange accents.
- Portfolio screens use large Montserrat headings, spacious compositions, white social and footer content, and image-led presentation.
- Mobile app screens use Poppins for product UI, compact rounded cards and pills, white labels over imagery, translucent overlays, and orange active states.
- The mobile interface is designed at `375x812px`.
- The portfolio canvas uses large desktop frames sized `1530.67x861px` and `2126.02x1291.85px`.

## Color palette

Ranked by source usage:

| Role | Color | Source usage |
|---|---|---:|
| Primary light / surface | `#FFFFFF` | 289 |
| Primary dark | `#000000` | 37 |
| Orange accent | `#FF5113` | 36 |
| Orange accent variant | `#FF5114` | 26 |
| Dark text / surface | `#212121` | 24 |
| Lime accent | `#EDFC74` | 12 |
| Lime accent variant | `#F2FE8D` | 12 |
| Black translucent overlay | `#0000005C` | 9 |
| Black translucent overlay | `#00000026` | 6 |
| Warm cream accent | `#FFF0D8` | 6 |
| Dark translucent surface | `#1E1E1ECC` | 3 |
| Dark neutral | `#373535` | 3 |
| Muted blue-gray | `#6F7789` | 3 |
| Light neutral | `#DADADA` | 3 |
| White translucent overlay | `#FFFFFF5C` | 3 |

Use `#FF5113` as the default orange accent. `#FF5114` is a near-identical source variant. Use `#EDFC74` and `#F2FE8D` as lime accent variants rather than introducing additional yellows.

## Type scale

### Montserrat

| Size | Weight | Source usage |
|---:|---|---:|
| `87.71px` | Medium | 3 |
| `50.05px` | Bold | 4 |
| `48px` | Regular | 5 |
| `38.76px` | Regular | 4 |
| `24px` | Bold | 11 |
| `21px` | Regular | 39 |
| `15.94px` | Bold | 4 |
| `15.94px` | ExtraLight | 8 |
| `11.16px` | ExtraLight | 8 |
| `88.58px` | Light | observed in `UI+UX Design` |
| `54.91px` | Light | observed in `+Instagram Carousel` |

### Poppins

| Size | Weight | Source usage |
|---:|---|---:|
| `28px` | Regular | observed in mobile card title |
| `18px` | Medium | observed in section headings |
| `18px` | Bold | observed on `Iniciar` |
| `14px` | Regular | 3 |
| `12px` | SemiBold | 3 |
| `12px` | Regular | observed in mobile UI |
| `12px` | Medium | observed in distance labels |
| `10.65px` | Regular | 4 |
| `6.44px` | SemiBold | observed in compact ratings and labels |
| `6.44px` | Medium | observed in compact distance labels |
| `6.12px` | SemiBold | observed in compact location labels |

### SF Pro Text

- `15px`, Semibold: 3 uses, used for mobile status-bar time.

## Spacing scale

_None found in source._

## Radius scale

Observed radii:

- `5px`
- `7px`
- `17px`
- `20px`
- `23px`
- `55.99px`
- `74.56px`
- `100px`
- `0/0/0/0px` for explicitly square groups and cards

## Elevation & effects

- Layer blur: `4px`, `154px`.
- Background blur: `10.2px`, `10.73px`, `19px`, `20px`, `56px`.
- Drop-shadow blur values: `16.64px`, `20px`, `31px`, `47px`, `75.67px`, `84.89px`.
- Observed drop-shadow offsets include:
  - `0 10.73`
  - `8 11`
  - `0 20`
  - `0 1`
  - `0 86.74`
  - `-33.22 86.74`
- Use blur and shadow effects primarily on mobile cards, translucent navigation surfaces, and portfolio device mockups.
- No local effect styles were found.

## Components

### Header

- Family: `Header`
- Default extracted size: `997x157px`
- Fill: `#FFFFFF`
- Text: Montserrat Regular, `21px`
- Portfolio instance: `1991.3x289.74px`, white fill.
- Mobile status-bar-related header frame: `375x44px`, with white fill and `15px` SF Pro Text Semibold time.
- Portfolio header includes decorative vector artwork.

### Footer

- Family: `Footer`
- Extracted size: `996.71x104.58px`
- Text: Montserrat Regular, `21px`
- Portfolio footer instance: `1839.44x193.01px`
- Footer heading examples use Montserrat Regular, `38.76px`, with white text.

### Créditos

- Family: `Créditos`
- Extracted size: `996.71x104.58px`
- Fill: `#FFFFFF`
- Text: Montserrat Regular, `21px`

### Mobile CTA button

- Observed size: `192x48px`
- Radius: `17px`
- Fill: `#FF5113`
- Label: `Iniciar`
- Label typography: Poppins Bold, `18px`
- Label color: `#FFFFFF`

### Mobile discovery cards

- Large card: `341x213px`, radius `20px`.
- Small cards: `183x195px`, radius `20px`.
- Card surfaces use white-backed image compositions with dark overlays.
- Rating pill uses `#00000026`, white star icons, and Poppins SemiBold.
- Distance pill uses `#FFF0D8`, orange Poppins Medium text, and a map icon.
- Location labels use white text with orange location markers.
- Card titles use Poppins Regular:
  - Large card: `28px`
  - Small cards: `15.03px`

### Mobile navigation

- Navigation surface: `335x80.29px`
- Radius: `23px`
- Uses a translucent light surface and background blur.
- Four navigation icons are arranged horizontally with a `31px` gap.
- Active icon and indicator use `#FF5113`; inactive icons use `#FFFFFF`.
- Indicator ellipse size: `4.08x4.08px`.

## Screen patterns

- `🖤 Hello! / BR` and `🖤 Hello! / EN`: desktop black canvases sized `1530.67x861px`, with a white header, large white Montserrat Bold `50.05px` messaging, social bars, contributor text, and footer/legal copy.
- `🖤 Hello! / Thumb`: large portfolio thumbnail composition sized `2126.02x1291.85px`, using full-bleed imagery, white portfolio headings, rounded device imagery with `55.99px` radii, orange logo vectors, a white header instance, footer, and a horizontal arrow treatment.
- `📱 UI Design / Intro`: mobile screen sized `375x812px`, with full-screen imagery, white status and home-indicator areas, orange CTA, white Behance branding, and Poppins introductory copy.
- `📱 UI Design / Home`: mobile discovery screen sized `375x812px`, with an image background, orange logo, city selector, large and compact discovery cards, category pills, section headings, and translucent bottom navigation.
- Additional mobile screens are present in the source extraction, but the supplied raw dump is truncated after `📱 UI Design / Compra`.

## Notes for implementers

- Keep the primary visual contrast: dark or image-led backgrounds, white foreground content, and `#FF5113` for primary actions and active states.
- Use Montserrat for portfolio and editorial presentation; use Poppins for mobile product UI; use SF Pro Text Semibold only for the mobile status-bar time.
- Preserve the strong type-size contrast between portfolio display headings and compact mobile labels.
- Use rounded geometry for mobile cards, buttons, pills, and navigation surfaces. Apply the observed radii rather than inventing new values.
- Use white text directly over imagery only where the source uses dark overlays or sufficient contrast.
- Treat `#FF5114`, `#EDFC74`, and `#F2FE8D` as source variants, not as new palette categories.
- Do not assume undocumented spacing, grid, motion, or component behavior; the extraction contains no corresponding token definitions.
