---
name: expedia-ui-kit-community
source: expedia-UI-Kit (Community)
kind: design-system-context
---

# expedia - Design System

## Overview

Expedia UI kit extracted from the Figma file `expedia-UI-Kit (Community)`, covering the `cover` and `design-files` pages. The source contains mobile-oriented onboarding, sign-in, notification-access, and home screen patterns, plus a desktop cover presentation.

No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Mobile-first travel experience with compact layouts and rounded controls.
- Primary interaction color is blue, used for links, actions, and selected navigation.
- Text hierarchy uses dark navy titles, slate body text, and gray supporting labels.
- Surfaces are predominantly white with light gray dividers and outlined fields.
- Onboarding uses centered illustrations, short explanatory copy, progress indicators, and bottom actions.
- Decorative travel illustrations use soft blue gradients, pale neutral surfaces, and yellow accents.
- Typography is primarily Inter, with SF Pro used in keyboard and system-style UI, and Gothic A1 used in selected decorative text.

## Color palette

Ranked by raw usage count:

| Color | Usage | Observed role |
|---|---:|---|
| `#000000` | 274 | Black text, icons, and system UI |
| `#FFFFFF` | 182 | Primary surfaces and inverse text |
| `#444558` | 105 | Dark slate UI text |
| `#D9D9D9` | 87 | Dividers and neutral structural fills |
| `#F5E070` | 43 | Yellow decorative accent |
| `#7B7D85` | 24 | Outlines and muted labels |
| `#787981` | 23 | Input outlines and muted UI |
| `#416D65` | 21 | Green accent |
| `#4761C8` | 20 | Blue accent |
| `#F3F2F0` | 16 | Soft illustration surface |
| `#00000040` | 15 | Backdrop and shadow overlay |
| `#ABB0BC` | 15 | Neutral secondary UI |
| `#1B1D38` | 13 | Deep navy background and decorative shapes |
| `#363A50` | 12 | Primary heading text |
| `#DCDCDA` | 12 | Input and button borders |
| `#091853` | 11 | Deep navy accent |
| `#424141` | 11 | Dark neutral text |
| `#50555C` | 10 | Secondary dark text |
| `#E5E5E4` | 10 | Light neutral surface |
| `#B7B6B8` | 8 | Neutral secondary element |
| `#D6D6D6` | 8 | Light divider |
| `#383A4D` | 6 | Supporting body text |
| `#525161` | 6 | Notification text |
| `#EFECE9` | 6 | Pale illustration detail |
| `#161C35` | 6 raw uses; 97 semantic-style uses | Title text |
| `#161C34` | 6 | Dark title or navigation text |
| `#F2F2F2` | 1 semantic-style use | Gray surface |
| `#828282` | 1 semantic-style use | Gray text |
| `#BDBDBD` | 4 semantic-style uses | Gray text or surface |
| `#333333` | 33 semantic-style uses | Gray 1 / safe-area indicator |
| `#4F67C9` | 127 semantic-style uses | Links and primary actions |

Semantic color tokens:

- `links-colors`: `#4F67C9`
- `outline-gray`: `#7B7D85`
- `body-text-color`: `#525467`
- `title-text-color`: `#161C35`
- `Label Color/Light/Primary`: `#000000`
- `System Background/Light/Primary`: `#FFFFFF`

## Type scale

Typography is unstyled at source level; use the following observed combinations:

| Font | Size | Weight/style | Usage count |
|---|---:|---|---:|
| Gothic A1 | 28px | Black | 8 |
| Inter | 24px | Bold | 9 |
| Inter | 24px | Medium | 5 |
| Inter | 24px | Regular | 4 |
| Inter | 22px | SemiBold | 9 |
| SF Pro Display | 21.21px | Regular | 130 |
| Gothic A1 | 19.2px | Black | 4 |
| Inter | 18px | Bold | 4 |
| Inter | 16px | Bold | 6 |
| Inter | 16px | SemiBold | 18 |
| SF Pro Text | 15.43px | Regular | 15 |
| Inter | 15px | Medium | 9 |
| Inter | 14px | Regular | 97 |
| Inter | 14px | Medium | 60 |
| Inter | 14px | SemiBold | 22 |
| Inter | 14px | Bold | 14 |
| Inter | 13px | Medium | 32 |
| Inter | 12px | Bold | 41 |
| Inter | 12px | Regular | 35 |
| Inter | 12px | Medium | 22 |
| Inter | 11px | Medium | 15 |
| Inter | 10px | Medium | 12 |
| Inter | 9.6px | Medium | 8 |
| Inter | 8.91px | Medium | 4 |
| Inter | 8.23px | Bold | 7 |
| Inter | 6.86px | Medium | 4 |

Observed hierarchy:

- Large display: Gothic A1 Black at `28px`.
- Large actions or headings: Inter at `24px`, `22px`, and `18px`.
- Standard headings and buttons: Inter SemiBold or Bold at `16px` and `14px`.
- Body and navigation: Inter Regular or Medium at `14px`, `13px`, and `12px`.
- Compact mobile/system labels: Inter Medium or Bold from `11px` down to `6.86px`.
- System keyboard text: SF Pro Text Regular `15.43px` and SF Pro Display Regular `21.21px`.

## Spacing scale

No spacing variables were found. Observed component spacing values:

- `0px` padding in `top-notch` and several compact frames.
- `3.43px` safe-area indicator height.
- `4.11px` vertical gap in bottom navigation items.
- `5.49px` gap in compact layouts.
- `6.17px` gap in status and illustration frames.
- `8.23px` gap in sign-in option stacks.
- `10.97px` and `38.4px` gaps in compact horizontal frames.
- `28.8px`, `32.91px`, and `174.16px` gaps in specific horizontal arrangements.
- `254px` gap in the desktop-sized `top-notch` component.

## Radius scale

Observed corner radii:

- `0px` for square containers and decorative groups.
- `2.74px` for small illustration detail.
- `5.49px` for fields, buttons, cards, and compact panels.
- `8.23px` for notification cards.
- `10.97px` for safe-area indicators.
- `21.94px` for circular or strongly rounded illustration elements.

## Elevation & effects

- `AlphabeticKeyboard` uses `background_blur` at `104.83px`.
- Source illustrations and notification cards use drop shadows with observed blur values of `10.97px` and `2.74px`.
- A backdrop overlay uses `#00000040`.
- Notification cards use rounded white surfaces with a visible drop-shadow treatment.
- No local effect styles were found.

## Components

Only the following component families are present:

### `text-filed`

- Size: `328x49px`.
- Text: Inter Medium, `13px`.
- Observed compact instance: `224.9x33.6px`.
- Compact instance radius: `5.49px`.
- Compact instance outline: `#787981`, `0.69px`.
- Used for email address entry.

### `top-notch`

- Size: `341x17px`.
- Horizontal layout.
- Padding: `0 0 0 0px`.
- Gap: `254px`.
- Alignment: minimum/center.
- Fixed width and height.
- Text: Inter Bold, `12px`.
- Mobile instance: `233.61x11.66px`, with a `174.16px` gap.

### `AlphabeticKeyboard`

- Size: `376x302px`.
- Fill: `#D1D3D9`.
- Background blur: `104.83px`.
- Text: SF Pro Text Regular `15.43px` and SF Pro Display Regular `21.21px`.

### `button`

- Size: `328x48px`.
- Text: Inter SemiBold, `16px`.
- Observed compact instance: `224.9x32.91px`.
- Compact instance radius: `5.49px`.
- Primary fill: `#4F67C9`.
- Primary text: `#FFFFFF`.

### `safe-area`

- Size: `376x12px`.
- Mobile instance: `257.81x8.23px`.
- Indicator uses `#333333`.
- Indicator dimensions: `91.88x3.43px`.
- Indicator radius: `10.97px`.

## Screen patterns

- **Cover:** Desktop `1920x960px` presentation screen with a black base, deep navy decorative background, Expedia branding, and multiple mobile screen previews.
- **Onboarding:** Mobile `257.81x556.76px` screens with a white surface, `top-notch`, optional `Skip` action, centered illustration, dark heading, supporting body copy, progress dots, `safe-area`, and an outlined bottom action such as `Next` or `Let’s go`.
- **Sign-in options:** Mobile screen with a `#00000040` backdrop, white panel, close control, sign-in heading, supporting copy, account-creation link, social sign-in options, and an email field.
- **Notification access:** Mobile permission-style panel with a `#00000040` backdrop, heading, supporting copy, `Not now` link, close control, illustration, and filled `button` labeled `Continue`.
- **Home:** Mobile home screen with status area, Expedia branding, category navigation for stays, cars, cruises, packages, things to do, and flights; promotional imagery and cards; and a bottom navigation with Home and Search items.

## Notes for implementers

- Use only the concrete colors listed in the palette; prioritize semantic tokens for links, body text, titles, outlines, labels, and system backgrounds.
- Preserve the mobile canvas size of `257.81x556.76px` for the extracted screen compositions when reproducing the source screens.
- Use `5.49px` radius for standard fields, buttons, cards, and outlined controls.
- Keep onboarding actions full-width within approximately `222.16px` to `224.9px` mobile content widths.
- Use Inter for most product UI. Reserve SF Pro for keyboard/system-style elements and Gothic A1 for the observed decorative numeric or display treatments.
- Treat illustration groups, logos, and image fills as decorative assets; do not infer their internal structure from the extraction.
- The source contains spelling-truncated or malformed text strings in some extracted nodes; preserve intended UI labels where they are clearly shown, but do not derive additional copy from the node dump.
- No responsive breakpoints, interaction states, motion timings, or grid rules were provided.
