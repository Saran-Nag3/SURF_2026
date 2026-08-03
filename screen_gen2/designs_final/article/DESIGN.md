---
name: article-cards-ui-kit-community
source: Article Cards UI Kit (Community)
kind: design-system-context
---

# article - Design System

## Overview

Article card UI kit containing fixed-aspect-ratio cover cards, directional image cards, galleries, a video player, and reusable article metadata elements. Source pages: Thumbnail, Readme, Components, Elements, Templets.

No local variables, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Article-focused layouts using image-led cards with overlaid or adjacent metadata.
- Card layouts use fixed sizing, cover imagery, vertical or horizontal auto layout, and zero default gap.
- Overlay content uses a linear gradient from `#00000000` to `#00000073` and a `4px` background blur.
- Common card radius: `4px` in component specifications; thumbnail examples use `24px` and `40px`.
- Typography is primarily Roboto Regular and Roboto Medium.
- Metadata is compact and commonly arranged as date, author, topic, title, and engagement items.
- Supported image aspect-ratio variants: `16:10`, `16:9`, `1:1`, `21:9`, `2:1`, `3:2`, `4:3`, `5:4`, and Golden ratio `1.618:1`.

## Color palette

Ranked by reported usage where available:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 889 styled uses; 9 raw uses | Primary light surface and overlay text |
| `#BFBFBF` | 480 uses | Secondary metadata text |
| `#000000D9` | 434 uses | Primary/title character color |
| `#14/regular` | 229 uses | Not a color; see Type scale |
| `#FF6060` | 198 uses | Accent text and tags |
| `#000000` | 217 raw uses; 128 styled uses | Dark surfaces and raw artwork |
| `#F4F4F4` | 136 uses | Tag fill and neutral surface |
| `#666666` | 81 uses | Secondary dark text |
| `#16/medium` | 213 uses | Not a color; see Type scale |
| `#24/medium` | 77 uses | Not a color; see Type scale |
| `#D1D1D1` | 24 uses | Neutral detail |
| `#292F33` | 159 raw uses | Raw dark neutral |
| `#E1E8ED` | 159 raw uses | Raw light neutral |
| `#FFCC4D` | 159 raw uses | Raw yellow accent |
| `#EAEAEA` | 96 uses | Topic wrapper and neutral detail |
| `#7B61FF` | 21 raw uses | Raw purple accent |
| `#F5F5F5` | 7 uses | Neutral / 3 |
| `#EAEEFF` | 1 use | Primary / Pr10 surface |
| `#FFF2E8` | 2 uses | Volcano / 1 surface |
| `#00000000` | gradient endpoint | Transparent gradient endpoint |
| `#00000073` | gradient endpoint | Gradient overlay endpoint |

- Gradient: `#00000000 0%` to `#00000073 100%`.
- Most-used named styles: `#FFFFFF`, `#BFBFBF`, `#000000D9`, `#FF6060`, `#F4F4F4`, `#000000`, `#666666`.
- `#FFFFFF` is also used for content surfaces, logos, dates, and text.
- `#000000` is used as the content surface for dark image-side card content.

## Type scale

### Defined typography tokens

- `12px`, Roboto Regular, weight `400`, line height auto, tracking `0px`.
- `14px`, Roboto Regular, weight `400`, line height auto, tracking `0px`.
- `16px`, Roboto Medium, weight `500`, line height auto, tracking `0px`.
- `24px`, Roboto Medium, weight `500`, line height auto, tracking `0px`.

### Raw typography usage

- Roboto Medium, `16px`: 72 uses.
- Roboto Regular, `12px`: 70 uses.
- Roboto Regular, `24px`: 24 uses.
- Roboto Bold, `20px`: 14 uses.
- Beedii Beedii, `36px`: 4 uses.
- Inter Bold, `36px`: 4 uses.
- Roboto Black, `24px`: 4 uses.
- Roboto Regular, `14px`: 4 uses.
- Roboto Bold, `36px`: 3 uses.
- Roboto Medium, `24px`: 3 uses.

### Usage guidance

- Titles commonly use `24px` Roboto Medium.
- Card titles commonly use `16px` Roboto Medium.
- Metadata, dates, and supporting text commonly use `12px` Roboto Regular.
- Topics use `14px` Roboto Regular.
- Raw `20px` and `36px` styles exist in the source but are not defined typography tokens.

## Spacing scale

No spacing variables were found. Explicit component spacing values:

- `0px` default card padding and gap.
- `2px` and `8px` tag padding.
- `4px` gaps in user info and bottom-right items.
- `8px` content-top gap in thumbnail examples.
- `10px` gaps in title, content-bottom, icon-box, and player timeline layouts.
- `12px` content padding and content gaps.
- `24px` content padding in overlay blocks and player timeline.
- `24px` overlay content gap.

## Radius scale

No radius variables were found. Explicit radii:

- `4px`: standard component card radius.
- `8px`: avatar radius.
- `19px`: tag and topic-wrapper radius.
- `24px`: thumbnail card examples.
- `40px`: thumbnail card example.
- `100px`: player timeline slider radius.

## Elevation & effects

- Background blur: `4px`.
- Overlay effect: linear gradient from `#00000000` to `#00000073`.
- No elevation or shadow styles were found.

## Components

Only the extracted component families and `Element` are available.

### Cards

- **Card: Fixed-aspect-ratio cover + Elements on top,Bottom el.=yes**
  - Size: `240x559.99px`.
  - Layout: vertical.
  - Padding: `0px` on all sides.
  - Gap: `0px`.
  - Sizing: fixed width and fixed height.
  - Radius: `4px`.
  - Cover image fill.
  - Text: `12px` Roboto Regular and `16px` Roboto Medium.
  - Variants: Aspect ratio listed in the design language; Portrait `No` or `Yes`.

- **Card: Fixed-aspect-ratio cover + Elements on top,Top el.=yes,Bottom el.=yes**
  - Size: `240x559.99px`.
  - Layout: vertical.
  - Padding: `0px` on all sides.
  - Gap: `0px`.
  - Sizing: fixed width and fixed height.
  - Radius: `4px`.
  - Cover image fill.
  - Text: `16px` Roboto Medium and `12px` Roboto Regular.
  - Variants: Aspect ratio listed in the design language; Portrait `No` or `Yes`.

- **Card: Fixed-aspect-ratio cover + Elements on top,Top el.=yes,Bottom el.=yes,Center el.=yes**
  - Size: `240x102.87px`.
  - Layout: vertical.
  - Padding: `0px` on all sides.
  - Gap: `0px`.
  - Sizing: fixed width and fixed height.
  - Radius: `4px`.
  - Cover image fill.
  - Text: `16px` Roboto Medium and `12px` Roboto Regular.
  - Variants: Aspect ratio listed in the design language; Portrait `No` or `Yes`.

- **Card: Fixed-aspect-ratio cover + Elements on top,Bottom el.=yes,Center el.=yes**
  - Size: `240x559.99px`.
  - Layout: vertical.
  - Padding: `0px` on all sides.
  - Gap: `0px`.
  - Sizing: fixed width and fixed height.
  - Radius: `4px`.
  - Cover image fill.
  - Text: `12px` Roboto Regular and `16px` Roboto Medium.
  - Variants: Aspect ratio listed in the design language; Portrait `No` or `Yes`.

- **Card: Image on right**
  - Size: `480x240px`.
  - Layout: horizontal.
  - Padding and gap: `0px`.
  - Radius: `4px`.
  - Text: `12px` Roboto Regular and `16px` Roboto Medium.
  - Variants: Con-Element `Fully`, `top`, `top+bottom`, or `top+center`; Light Mode `off` or `on`.

- **Card: Image on left**
  - Size: `480x240px`.
  - Layout: horizontal.
  - Padding and gap: `0px`.
  - Radius: `4px`.
  - Text: `12px` Roboto Regular and `16px` Roboto Medium.
  - Variants: Con-Element `Fully`, `top`, `top+bottom`, or `top+center`; Light Mode `off` or `on`.

- **Card: Image on top**
  - Size: `240x251px`.
  - Layout: vertical.
  - Padding and gap: `0px`.
  - Radius: `4px`.
  - Text: `12px` Roboto Regular and `16px` Roboto Medium.
  - Variants: Con-Element `Fully`, `top`, `top+bottom`, or `top+center`; Light Mode `off` or `on`.

- **Card: Image on bottom**
  - Size: `240x251px`.
  - Layout: vertical.
  - Padding and gap: `0px`.
  - Radius: `4px`.
  - Text: `12px` Roboto Regular and `16px` Roboto Medium.
  - Variants: Con-Element `Fully`, `top`, `top+bottom`, or `top+center`; Light Mode `off` or `on`.

- **Card: Image gallery**
  - Size: `800x450.01px`.
  - Layout: vertical.
  - Padding and gap: `0px`.
  - Radius: `4px`.
  - Cover image fill.
  - Text: `12px` Roboto Regular.

- **Card: Video player — Playing**
  - Size: `800x450.01px`.
  - Layout: vertical.
  - Padding and gap: `0px`.
  - Radius: `4px`.
  - Cover image fill.
  - Text: `16px` Roboto Medium.

### Elements

- **Element/title**: `216x38px`; horizontal; gap `10px`; fixed sizing; `16px` Roboto Medium; variants Light Mode `off/on`, Indent `off/on`.
- **Element/p**: `208x28px`; horizontal; gap `10px`; fill `#FFFFFF`; `12px` Roboto Regular; variants Light Mode `off/on`.
- **Element/content**: `240x116px`; vertical; padding `12px`; gap `12px`; fill `#FFFFFF`; text `12px` Roboto Regular and `16px` Roboto Medium; variants Element `fully`, `top`, `top+buttom`, `top+center`, and Light Mode `off/on`.
- **Element/content-center**: `176x14px`; horizontal; gap `0px`; alignment min/center; fill `#FFFFFF`; `12px` Roboto Regular; variants `date`, `paragraphs`, `user-info`.
- **Element/content-bottom**: `216x16px`; horizontal; gap `10px`; space-between/center alignment; `12px` Roboto Regular; variants `Fully`, `only left`, `only right`.
- **Element/content-bottom-right**: `70x14px`; horizontal; gap `10px`; min/center alignment; `12px` Roboto Regular; Item Count `1`, `2`, or `3`.
- **Element/content-bottom-right-item**: `30x14px`; horizontal; gap `4px`; `12px` Roboto Regular; Icon `icon ←`, `icon →`, or `none`.
- **Element/content-bottom-left**: `44x16px`; horizontal; gap `4px`; `12px` Roboto Regular; variants `data+user-info`, `date`, `user-info`, `user-info+date`.
- **Element/user-info**: `69x14px`; horizontal; gap `4px`; `12px` Roboto Regular; avatar/name/icon combinations as defined by the source variants.
- **Element/content-top**: `216x38px`; horizontal; `16px` Roboto Medium and `12px` Roboto Regular; variants combine date, tag, title, topic, and user.
- **Element/tag**: `48x18px`; radius `19px`; horizontal; padding `2px 8px`; gap `10px`; centered; fill `#F4F4F4`; `12px` Roboto Regular; Filled `off/on`.
- **Element/icon-box**: `10x10px`; centered; variants include sizes `10px`, `12px`, `14px`, `16px`, `18px`, `20px`, `22px`, `24px`, `32px`, `48px`, `64px`, `104px`, and `128px`; Union `off/on`.
- **Element/Cover image**: `240x279.99px`; vertical; fixed sizing; cover image fill; variants use the listed aspect ratios, Portrait `No/Yes`, and 50% height `No/Yes`.
- **Element/player-timeline/slider**: `237.5x4px`; radius `100px`; fill `#F5F5F5`.
- **Element/player-timeline**: `407.5x72px`; horizontal; padding `24px`; gap `10px`; centered; fill the defined linear gradient; `16px` Roboto Medium.
- **Element/pagination**: `176.01x16px`; vertical; gap `0px`; max/center alignment.
- **Element/Logo/Software/Twitter**: `36x36px`; fill `#FFFFFF`.
- **Element/Logo/Software/Dribbble**: `36x36px`; fill `#FFFFFF`.
- **Element/Logo/Software/Figma-color**: `36x36px`; fill `#FFFFFF`.
- **Element/Logo/Software/Figma-gray**: `36x36px`; fill `#FFFFFF`.
- **Element/Logo/Avatar/YingMing**: `36x36px`; fill `#000000`.
- **Element/topic**: `44x16px`; `14px` Roboto Regular.
- **Element/date**: `44x16px`; fill `#FFFFFF`; `12px` Roboto Regular.

## Screen patterns

- **Thumbnail screen**
  - Frame size: `1920x960px`.
  - Background: `#EAEEFF`.
  - Uses large image-cover cards with overlaid bottom content, image-side cards, and top/bottom content variants.
  - Example large cards are `448x559.94px`, with example radii `40px` and `24px`.
  - Example horizontal and cover cards are `480x240px` and `480x296.64px`, with example radius `24px`.
  - Overlay content uses `24px` padding, `24px` internal gap, the defined gradient, and `4px` background blur.
  - Thumbnail card titles use `24px` Roboto Medium and supporting metadata uses `12px` or `14px` Roboto Regular.

## Notes for implementers

- Use only the named card families and `Element` family; do not create additional component families.
- Preserve the distinction between the standard component radius `4px` and screen-specific example radii `24px` and `40px`.
- For cover cards, keep the image as the visual base and place configured top, center, and bottom elements over it.
- Use the defined gradient and background blur for overlay content rather than a solid substitute.
- Use `#000000D9` for primary/title character styling, `#BFBFBF` for secondary metadata, `#FF6060` for the accent, and `#FFFFFF` for light overlay text and surfaces.
- Keep default card padding and gap at `0px`; apply component-specific padding only where specified.
- Use the defined typography tokens before raw typography styles. Raw fonts and weights are source observations, not additional design tokens.
- Respect the exact variant names and values, including `Portrait`, `Light Mode`, `Con-Element`, `Filled`, `Union`, and aspect-ratio variants.
