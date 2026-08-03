---
name: vk-app-for-ipad-community
source: VK App for iPad (Community)
kind: design-system-context
---

# vk - Design System

## Overview

VK’s iPad community design system supports light and dark themes across feed, content, messaging, music, video, calls, commerce, communities, search, and shared component surfaces. The primary visual language uses VK Sans, SF Pro, and Roboto typography; blue, white, and neutral surfaces; compact 11–17px text styles; subtle separators; and layered shadows for cards, overlays, sheets, and badges.

Supported iPad keyboard dimensions include:

- iPad 9.7": landscape `1024x328px`, portrait `768x264px`
- iPad 10.5": landscape `1112x349px`, portrait `834x264px`
- iPad 12.9": landscape `1366x422px`, portrait `1024x349px`

## Design language

- Use light surfaces primarily with `#FFFFFF`, `#EBEDF0`, `#F2F3F5`, `#F5F5F5`, and `#F9F9F9`.
- Use dark surfaces with `#0A0A0A`, `#19191A`, `#232324`, and `#2C2D2E`.
- Primary light-theme actions use `#3F8AE0`, `#4986CC`, or the green accent `#00B887`.
- Dark-theme accent is `#71AAEB`; dark destructive accent is `#FF5C5C`.
- Primary text is `#000000` in light mode and `#E1E3E6` in dark mode.
- Secondary and tertiary text/icons use muted steel-gray values such as `#818C99`, `#99A2AD`, `#AEB3BE`, `#AEB7C2`, `#76787A`, and `#5D5F61`.
- Separate content with `#D7D8D9` in light mode and `#363738` in dark mode.
- Use compact typography with 11–17px body and supporting text, 20–24px title styles, and 21px display titles.
- Use gradients for media overlays, polls, red states, blue states, violet states, and yellow states.
- Use shadows sparingly for cards, badges, snippets, overlays, sheets, and elevated surfaces.

## Color palette

### Most-used raw colors

Ranked by source usage:

| Color | Uses |
|---|---:|
| `#000000` | 7793 |
| `#FFFFFF` | 4208 |
| `#FFFFFF80` | 818 |
| `#C4C4C4` | 639 |
| `#9F4E4E` | 588 |
| `#C0C0C0` | 546 |
| `#B6B6B6` | 406 |
| `#D77B7B` | 392 |
| `#FF0000` | 354 |
| `#00000014` | 198 |
| `#DADADA` | 191 |
| `#757677` | 184 |
| `#AAADB7` | 154 |
| `#0000000A` | 138 |
| `#3F8AE0` | 135 |
| `#37324A` | 116 |
| `#909499` | 100 |

### Core and semantic colors

- White: `#FFFFFF`
- Black: `#000000`
- Light page background: `#EBEDF0`
- Light content background: `#FFFFFF`
- Light content tint background: `#F5F5F5`
- Light background: `#F9F9F9`
- Light input/field background and border: `#F2F3F5`
- Light separator: `#D7D8D9`
- Light highlighted background: `#00000014`
- Light primary text: `#000000`
- Light secondary/placeholder text: `#818C99`
- Light tertiary text: `#99A2AD`
- Light subhead text: `#6D7885`
- Light muted text: `#2C2D2E`
- Light link/name/action: `#4986CC`
- Light accent, header tint, outline foreground, and writebar icon: `#3F8AE0`
- Light alternate accent and primary button background: `#00B887`
- Light active tab icon: `#2975CC`
- Light inactive tab icon and secondary icon: `#99A2AD`
- Light tertiary icon: `#B8C1CC`
- Light tertiary icon alpha: `#0000003D`
- Light commerce button: `#4BB34B`
- Light destructive field background/border: `#FAEBEB`
- Light destructive red: `#E64646`
- Light prominent counter background: `#FF3347`
- Light secondary counter background: `#AEB7C2`
- Light primary counter background: `#3F8AE0`
- Light counter text: `#FFFFFF`
- Light incoming message bubble: `#EBEDF0`
- Light outgoing message bubble: `#CCE4FF`
- Light message forward-line tint: `#45678F`
- Light keyboard background: `#E1E3E6`
- Light modal/card background: `#FFFFFF`
- Light action-sheet separator: `#0000001F`
- Light panel-tab active background: `#EBEDF0`
- Dark page background: `#0A0A0A`
- Dark content/header background: `#19191A`
- Dark search/input background: `#363738` / `#2C2D2E`
- Dark separator: `#363738`
- Dark primary text: `#E1E3E6`
- Dark secondary text/icon: `#76787A`
- Dark tertiary icon: `#5D5F61`
- Dark medium icon/search tint/outline: `#909499` / `#AAAEB3`
- Dark accent: `#71AAEB`
- Dark destructive accent: `#FF5C5C`
- Dark primary button background: `#E1E3E6`
- Dark primary button foreground: `#19191A`
- Dark commerce button: `#4BB34B`
- Dark active tab icon: `#FFFFFF`
- Dark inactive tab icon: `#76787A`
- Dynamic blue: `#3F8AE0`
- Dynamic green: `#4BB34B`
- Dynamic violet: `#792EC0`
- Dynamic orange: `#FFA000`
- Dynamic red: `#FF3347`
- Orange fire: `#F05C44`
- Emerald: `#4CD964`
- Yellow light: `#FFD54F`
- Placeholder/icon background: `#001C3D14`
- Blueprint background: `#EBF2FA`

### Gradients

- Poll orange: linear `#D93651` at 0% to `#D99816` at 100%.
- Red: linear `#FF5263` at 0% to `#FF3347` at 100%.
- Blue: linear `#70B2FF` at 0% to `#5C9CE6` at 100%.
- Violet: linear `#C48AFF` at 0% to `#AA65F0` at 100%.
- Yellow: linear `#FFB73D` at 0% to `#FFA000` at 100%.
- Black overlay: linear `#00000000` at 0%, `#00000004` at 9%, `#0000000E` at 19%, `#0000001E` at 28%, `#00000033` at 38%, `#0000004A` at 48%, `#00000064` at 57%, `#00000080` at 66%, `#0000009B` at 74%, `#000000B5` at 81%, `#000000CC` at 88%, `#000000E1` at 93%, `#000000F1` at 97%, `#000000FB` at 99%, and `#000000` at 100%.
- White overlay: linear `#FFFFFF00` at 0%, `#FFFFFF04` at 9%, `#FFFFFF0E` at 19%, `#FFFFFF1E` at 28%, `#FFFFFF33` at 38%, `#FFFFFF4A` at 48%, `#FFFFFF64` at 57%, `#FFFFFF80` at 66%, `#FFFFFF9B` at 74%, `#FFFFFFB5` at 81%, `#FFFFFFCC` at 88%, `#FFFFFFE1` at 93%, `#FFFFFFF1` at 97%, `#FFFFFFFB` at 99%, and `#FFFFFF` at 100%.
- Dark content-tint overlay: linear `#23232400` at 0%, `#23232404` at 9%, `#2323240E` at 19%, `#2323241E` at 28%, `#23232433` at 38%, `#2323244A` at 48%, `#23232464` at 57%, `#23232480` at 66%, `#2323249B` at 74%, `#232324B5` at 81%, `#232324CC` at 88%, `#232324E1` at 93%, `#232324F1` at 97%, `#232324FB` at 99%, and `#232324` at 100%.
- Light content-tint overlay: linear `#F5F5F500` at 0%, `#F5F5F504` at 9%, `#F5F5F50E` at 19%, `#F5F5F51E` at 28%, `#F5F5F533` at 38%, `#F5F5F54A` at 48%, `#F5F5F564` at 57%, `#F5F5F580` at 66%, `#F5F5F59B` at 74%, `#F5F5F5B5` at 81%, `#F5F5F5CC` at 88%, `#F5F5F5E1` at 93%, `#F5F5F5F1` at 97%, `#F5F5F5FB` at 99%, and `#F5F5F5` at 100%.

## Type scale

### VK Sans

- Caption 3 Regular: VK Sans Text Regular, 11px / 14px, tracking 0.11px
- Caption 2 Regular: VK Sans Text Regular, 12px / 14px, tracking 0.06px
- Caption 2 Medium: VK Sans Text Medium, 12px / 14px, tracking 0.06px
- Caption 2 Semibold: VK Sans Text DemiBold, 12px / 14px, tracking 0.06px
- Caption Caps 2 Demibold: VK Sans Text DemiBold, 12px / 14px, tracking 0.06px
- Caption 1 Regular: VK Sans Text Regular, 13px / 16px, tracking 0px
- Caption 1 Medium: VK Sans Text Medium, 13px / 16px, tracking 0px
- Caption 1 Demibold: VK Sans Text DemiBold, 13px / 16px, tracking 0px
- Subhead Regular: VK Sans Text Regular, 14px / 18px, tracking -0.06px
- Subhead Medium: VK Sans Text Medium, 14px / 18px, tracking -0.06px
- Subhead Demibold: VK Sans Text DemiBold, 14px / 18px, tracking -0.06px
- Text Regular: VK Sans Text Regular, 15px / 20px, tracking -0.1px
- Text Medium: VK Sans Text Medium, 15px / 20px, tracking -0.1px
- Text Demibold: VK Sans Text DemiBold, 15px / 20px, tracking -0.1px
- Headline Regular: VK Sans Text Regular, 16px / 20px, tracking -0.16px
- Headline Medium: VK Sans Text Medium, 16px / 20px, tracking -0.16px
- Headline Demibold: VK Sans Text DemiBold, 16px / 20px, tracking -0.16px
- Title 3 Regular: VK Sans Text Regular, 17px / 22px, tracking -0.22px
- Title 3 Medium: VK Sans Text Medium, 17px / 22px, tracking -0.22px
- Title 3 Demibold: VK Sans Text DemiBold, 17px / 22px, tracking -0.22px
- Title 2 Regular: VK Sans Text Regular, 20px / 24px, tracking -0.4px
- Title 2 Demibold: VK Sans Text DemiBold, 20px / 24px, tracking -0.4px
- Display Title 2: VK Sans Display DemiBold, 21px / 26px, tracking 0px
- Title 1 Bold: VK Sans Text Bold, 24px / 28px, tracking -0.48px

### SF Pro

- Caption Caps 3 Semibold: SF Pro Text Semibold, 11px / 14px, tracking 0.06px
- Caption 2 Regular: SF Pro Text Regular, 12px / 14px, tracking 0px
- Caption Caps 2 Semibold: SF Pro Text Semibold, 12px / 14px, tracking 0px
- Caption 1 Regular: SF Pro Text Regular, 13px / 16px, tracking -0.08px
- Caption Caps 1 Semibold: SF Pro Text Semibold, 13px / 16px, tracking -0.08px
- Subhead Regular: SF Pro Text Regular, 14px / 18px, tracking -0.15px
- Text Regular: SF Pro Text Regular, 15px / 20px, tracking -0.24px
- Title 2 Semibold: SF Pro Display Semibold, 20px / 24px, tracking 0.38px
- Title 1 Semibold: SF Pro Display Semibold, 24px / 28px, tracking 0.33px

### Roboto and TT Commons

- Caption 2 Medium: Roboto Medium, 12px / 14px, tracking 0.2px
- Caption 1 Regular: Roboto Regular, 13px / 16px, tracking 0.2px
- Caption 1 Medium: Roboto Medium, 13px / 16px, tracking 0.2px
- Subhead Medium: Roboto Medium, 14px / 18px, tracking 0.2px
- Text Regular: Roboto Regular, 15px / 20px, tracking 0.2px
- Text Medium: Roboto Medium, 15px / 20px, tracking 0.2px
- Headline Medium: Roboto Medium, 16px / 20px, tracking 0.1px
- VK Taxi Text: Roboto Regular, 16px / 20px, tracking 0px
- VK Taxi Title: TT Commons Medium, 24px / 28px, tracking 0px

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- Elevation · Snippet: drop shadow `4px`, offset `0 2`, color `#00000003`; drop shadow `6px`, offset `0 0`, color `#0000000A`.
- Elevation 4 pt · Badges: drop shadow `4px`, offset `0 2`, color `#00000014`.
- Elevation 4 dp: drop shadow `4px`, offset `0 4`, color `#00000014`; drop shadow `2px`, offset `0 0`, color `#0000000A`.
- Elevation 8 pt · Cards: drop shadow `24px`, offset `0 2`, color `#00000014`; drop shadow `2px`, offset `0 0`, color `#00000014`.
- Elevation 8 dp: drop shadow `8px`, offset `0 8`, color `#00000029`; drop shadow `4px`, offset `0 0`, color `#00000014`.
- Elevation 16 pt: drop shadow `96px`, offset `0 0`, color `#00000029`; drop shadow `2px`, offset `0 0`, color `#0000001F`.
- Elevation 32 pt: drop shadow `24px`, offset `0 0`, color `#00000029`; drop shadow `2px`, offset `0 0`, color `#00000014`.
- Elevation · Overlay: drop shadow `3px`, offset `0 1`, color `#00000052`.
- Small Shadow: drop shadow `12px`, offset `0 4`, color `#0000001A`.
- VK Taxi/Card Sheet Shadow: drop shadow `32px`, offset `0 16`, color `#00000033`.
- Keyboard background blur: `108.73px`.

## Components

Only the following component families are present:

- **Frame 20642**: `120x142px`; vertical layout; gap `8px`; fixed width and height; SF Pro Text Regular, 12px.
- **Frame 83**: `335x231px`; horizontal layout; gap `12px`; fixed width and height; VK Subhead Regular and VK Caption 1 Regular.
- **Keyboard**: `1194x398px`; fill `#CDD0D4EB`; background blur `108.73px`; variants `Mode: Dark/Light` and `Type: Alphabetic/Emoji`.
- **iOS Avatar Button**: component family present; no additional specification supplied.
- **iPad 9.7"**: keyboard variants for landscape and portrait alphabetic light layouts.
- **iPad 10.5"**: keyboard variants for landscape and portrait alphabetic light layouts.
- **iPad 12.9"**: keyboard variants for landscape and portrait alphabetic light layouts.
- **item copy 4**: `219x278px`; fill `#FFFFFF`; VK Caption 1 Regular and VK Subhead Demibold.
- **item copy 5**: `185x244px`; fill `#FFFFFF`; VK Caption 1 Regular and VK Subhead Demibold.
- **x**:
  - Product Card / Normal / iPad: `219x295px`; fill `#FFFFFF`; uses VK Caption 1 Regular, VK Subhead Demibold, SF Pro Text Medium 11px, VK Caption 3 Regular, SF Pro Text Regular, and SF Pro Text Regular 13px.
  - Cell / Left / Common / 4. Number: `42x48px`; horizontal layout; centered alignment; VK Headline Regular.
  - Cell / Middle / 3. Title Medium with Player Track: `235x80px`; vertical layout; vertical padding `7px`; VK Caption 1 Regular, VK Caption 1 Medium, and VK Headline Regular.

## Screen patterns

- **Navigation and headers**: light and dark header backgrounds, header tint colors, tab bars with active/inactive icon states, and compact title and caption typography.
- **Feed and content**: white or tinted content surfaces, image/media overlays using black, white, or theme-tinted gradients, snippets, cards, counters, and recommendation surfaces.
- **Search**: search fields use `#EBEDF0` in light mode and `#363738` in dark mode, with `#818C99` or `#AAAEB3` field tint.
- **Messaging**: incoming bubbles use `#EBEDF0`; outgoing bubbles use `#CCE4FF`; names use `#4986CC`; forward lines use `#45678F`.
- **Commerce**: product cards use the supplied `x`, `item copy 4`, and `item copy 5` families; commerce actions use `#4BB34B`.
- **Music and media**: player cells, media overlay gradients, playback icons, loaders, and track-focused cells use the supplied `x` cell patterns.
- **Keyboard and input**: use the Keyboard family with light/dark and alphabetic/emoji variants, plus the iPad-specific dimensions.
- **Modals and sheets**: use white or dark modal surfaces, action-sheet separators, card borders, overlay elevation, and sheet shadows.
- **Counters and status**: prominent counters use `#FF3347`; primary counters use `#3F8AE0`; secondary counters use `#AEB7C2`; counter foreground is `#FFFFFF`.
- **Theme switching**: light and dark semantic tokens are explicitly defined for page, content, header, text, icons, separators, fields, buttons, counters, search, and tab bars.

## Notes for implementers

- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.
- Do not infer spacing or corner-radius values from the source; only use component-specific gaps and padding that are explicitly listed.
- Prefer named VK typography tokens over raw typography values.
- Preserve the supplied font family, weight, size, line height, and tracking for each text style.
- Treat `VK Sans Text DemiBold` entries with source weight `400` exactly as extracted; do not normalize the weight.
- Use `#FFFFFF` and `#000000` as the dominant light-theme text/surface colors only where the semantic token calls for them.
- Use the dark-theme semantic palette rather than inverting light colors manually.
- Apply shadows according to the named elevation style; do not create additional blur, spread, opacity, or offset values.
- Use the listed component dimensions and variants exactly for iPad-specific surfaces and keyboards.
- Keep media overlays directional and use only the supplied gradient stops.
