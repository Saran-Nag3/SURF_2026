---
name: sony-app-design-community
source: Sony App Design (Community)
kind: design-system-context
---

# sony - Design System

## Overview

- Source: Figma file “Sony App Design (Community)”.
- Source pages: 🖤 Hello!, 📱 UI Design, 🤳Instagram.
- No local variable collections were found.
- Visual direction combines black-and-white editorial layouts with vivid abstract decoration, rounded mobile cards, and translucent navigation surfaces.
- Primary extracted mobile frame size: `375x812px`.

## Design language

- High-contrast visual system centered on `#000000` and `#FFFFFF`.
- Large editorial headings use Montserrat, with supporting UI typography using SF Pro Display, Axiforma, SF Pro Text, and Poppins.
- Decorative abstract artwork is used as a low-opacity background or card overlay.
- Mobile UI uses rounded cards, bottom navigation, status bars, transaction lists, and horizontally arranged card content.
- Social and portfolio screens use sparse layouts, large headlines, white iconography, and black backgrounds.
- Use centered or scale-based placement where the source specifies scale constraints; preserve the source’s left/top positioning for editorial and mobile content.

## Color palette

Ranked by raw usage:

| Color | Usage | Source role |
|---|---:|---|
| `#FFFFFF` | 2510 | Primary text, surfaces, icons, headers, footers, navigation elements |
| `#000000` | 48 | Editorial and portfolio backgrounds |
| `#212121` | 24 | Dark neutral |
| `#FF5113` | 19 | Accent color |
| `#363339` | 14 | Dark gray neutral |
| `#EDFC74` | 14 | Bright highlight accent |
| `#79767D` | 2 named-token uses | Grey token; secondary text |
| `#AA9EB7` | 8 named-token uses | Purple token |
| `#FFFFFF` | 7 named-token uses | Text token |

- The source also identifies `Grey`, `Purple`, and `Text` as named styles.
- Use `#FFFFFF` for primary content over dark backgrounds.
- Use `#79767D` for muted supporting text where the Grey token is required.
- Use `#AA9EB7` for Purple token usage.
- Do not infer colors for gradients or image assets when their source values are not in the allowed palette.

## Type scale

### Named typography tokens

| Token | Family | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Caption / c2 | SF Pro Display | Regular 400 | 12px | 16px | 0px |
| Body/b2 | SF Pro Display | Medium 500 | 16px | 20px | 0px |
| Caption / c1 | SF Pro Display | Regular 400 | 14px | 18px | 0.11px |

### Raw hierarchy and recurring styles

- `50.05px`: Montserrat Bold.
- `48px`: Montserrat Regular.
- `38.76px`: Montserrat Regular.
- `32px`: SF Pro Display Regular.
- `28px`: Axiforma Medium.
- `24px`: Montserrat Bold.
- `21px`: Montserrat Regular.
- `16px`: SF Pro Display Medium.
- `15.94px`: Montserrat Bold or Montserrat ExtraLight.
- `15px`: SF Pro Text Semibold.
- `14px`: Axiforma Medium, Axiforma Regular, or SF Pro Display Regular.
- `12px`: SF Pro Display Regular.
- `11.16px`: Montserrat ExtraLight.
- `10.65px`: Poppins Regular.
- `10px`: SF Pro Text Medium.

Additional extracted styles:

- `88.58px`: Montserrat Light, used for “UI+UX Design”.
- `54.91px`: Montserrat Light, used for “+Instagram Carousel”.
- `20.75px`: Axiforma Bold.
- `14px`: SF Pro Display Light.
- `14px`: Axiforma Medium or Axiforma Regular.
- `28px`: SF Pro Display Medium for emoji headings.

## Spacing scale

_None found in source._

## Radius scale

- `4px`: small line radius.
- `11.53px`: mobile header radius.
- `30px`: mobile payment-card radius.
- `40px`: filter control radius.
- `55.99px`: large image and mobile artwork radius.
- `100px`: home-indicator line radius.
- `0px`: square containers and unrounded groups.

## Elevation & effects

- Background blur: `0px`.
- Background blur: `17px` on transaction surfaces.
- Background blur: `37px` on the mobile bottom navigation background.
- Layer blur: `150px`, `154px`, and `200px` on decorative abstract lighting.
- Drop-shadow blur: `75.67px`, offset `0 86.74`.
- Drop-shadow blur: `84.89px`, offset `-33.22 86.74`.
- Decorative abstract artwork opacity: `5%` and `6%`.
- Some secondary text is rendered at `54%` opacity.
- Some card-number text is rendered at `90%` opacity.
- The source contains image fills and gradients whose complete values are not included in the allowed palette; preserve them as asset or gradient references rather than replacing them with invented colors.

## Components

Only the extracted component families are listed below.

### Header

- Family: `Header`.
- Size: `997x157px` in the component specification.
- Fill: `#FFFFFF`.
- Default text style: Montserrat Regular, `21px`.
- A screen instance is also specified at `1991.3x289.74px`.
- Used for portfolio navigation and editorial content headers.

### Footer

- Family: `Footer`.
- Size: `996.71x104.58px`.
- Default text style: Montserrat Regular, `21px`.
- A screen instance contains `.design` and `2021` in Montserrat Regular, `38.76px`.

### Créditos

- Family: `Créditos`.
- Size: `996.71x104.58px`.
- Fill: `#FFFFFF`.
- Default text style: Montserrat Regular, `21px`.

### abstract

- Family: `abstract`.
- `abstract/02`: `629.9x456.91px` and `925x671px`.
- `abstract/04`: `703x629px`.
- `abstract/06`: `1005x934px` and `640x594px`.
- `abstract/07`: `812x812px` and `631x581px`.
- `abstract/08`: `687x574px`.
- Used as decorative artwork, often with `5%` or `6%` opacity.

### grid

- Family: `grid`.
- `grid/2`: `552x658px`.

## Screen patterns

### 🖤 Hello! / BR and EN

- Desktop frame size: `1530.67x861px`.
- Background: `#000000`.
- White decorative header at the top.
- Large white Montserrat Bold headline at `50.05px`.
- Supporting portfolio and social information uses Montserrat ExtraLight at `11.16px` and `15.94px`.
- Social icon groups use white iconography.
- BR and EN share the same structure, with localized headline copy.

### 🖤 Hello! / Thumb

- Large portfolio thumbnail frame: `2126.02x1291.85px`.
- Includes a white Footer instance, large white portfolio headings, image-based project panels, a white Header instance, an arrow, and a Sony logo treatment.
- Project panels use `55.99px` corner radii and large drop shadows.
- Main headings use Montserrat Light at `88.58px` and `54.91px`.

### 📱 UI Design / Home

- Mobile frame size: `375x812px`.
- Dark background with decorative abstract artwork and blurred lighting.
- White status bar at `375x44px`.
- Welcome header uses a `211x57.65px` group with `11.53px` radius.
- Payment cards are `297x184px` with `30px` radius and horizontal card pagination.
- Transaction area is `375x365px`, with a filter control, four `375x60px` list items, and a title.
- Bottom menu is approximately `375x82px`, with chat, card, home, and users navigation icons.
- Home indicator line is `135x5px` with `100px` radius.

### 📱 UI Design / Transferencia

- A mobile transfer screen is present in the source under the `375x812px` UI Design format.
- The extraction is truncated before its complete structure and component details; reuse the mobile shell, dark visual treatment, status bar, and bottom navigation patterns only where supported by the available source.

### 🤳Instagram

- The source contains multiple abstract portfolio compositions and image-led layouts.
- Relevant extracted abstract assets include `abstract/02`, `abstract/06`, and `abstract/07`.
- Use the portfolio language of large imagery, white typography, black backgrounds, and geometric decorative artwork.

## Notes for implementers

- Treat the named typography tokens as the preferred UI foundation: SF Pro Display at `12px`, `14px`, and `16px`.
- Use the raw Montserrat hierarchy for editorial and portfolio headings, especially `50.05px`, `48px`, `38.76px`, and `21px`.
- Keep mobile screens at the extracted `375x812px` frame size when reproducing the source layout.
- Preserve the extracted component dimensions when a matching component is used.
- Do not invent spacing tokens; the source contains no spacing variables.
- Do not invent effect colors for shadows, gradients, or image assets.
- Use only the extracted component families: `Créditos`, `Footer`, `Header`, `abstract`, and `grid`.
- Avoid reproducing the source’s internal node hierarchy; implement the summarized screen patterns and component behaviors instead.
