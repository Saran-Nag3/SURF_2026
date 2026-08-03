---
name: rover-app-new-design-features-community
source: Rover App New Design Features (Community), Page 1
kind: design-system-context
---

# rover - Design System

## Overview

Mobile iOS-oriented Rover app design system for service discovery and partnerships. Screens use a 375×812px viewport with a white status/header area, light gray content background, card-based navigation, and a persistent five-tab bottom bar.

## Design language

- Clean, functional, pet-care-oriented interface with high-contrast black typography.
- Primary content is organized into stacked white cards on a #F1F1F1 background.
- Cards use compact 13px text, simple monochrome line icons, and right-facing chevrons.
- Decorative brand cues include paw imagery and grass.
- Headers are centered and use 18px Inter Regular.
- Bottom navigation uses a light #FAFAFA surface, a #BDC5CD divider, black labels, and monochrome icons.
- Use #2E3A59 for chevrons and selected dot indicators.
- Use #4B4B4B for secondary text and section labels.
- Use #1F1F1F for primary card titles.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage / role |
|---|---|
| #000000 | 325 raw uses; primary black, labels, icons, headings |
| #5DB075 | 202 raw uses |
| #8DCF6E | 126 raw uses |
| #4B4B4B | 93 raw uses; secondary text and section labels |
| #DADADA | 77 raw uses |
| #111111 | 52 raw uses; paw icon strokes |
| #FFFFFF | 31 raw uses; page, card, and component surfaces |
| #1F1F1F | 29 raw uses; primary card titles |
| #F1F1F1 | 23 raw uses; content background |
| #C4C4C4 | 18 raw uses |
| #BDC5CD | 11 raw uses; bottom-bar divider |
| #FAFAFA | 11 raw uses; bottom-bar background |
| #909090 | 8 raw uses |
| #1C1C1C | 6 raw uses |
| #2E3A59 | Shade / 700; 51 style uses; chevrons and selected indicators |
| #D6D9DD | Carbon Neutral/300; 11 style uses |
| #7676801F | Fill Color / Light / Tertiary; 2 style uses |
| #78788029 | Fill Color / Light / Secondary; 1 style use |
| #24262B | Carbon / Darkest |
| #FF3B30 | SystemRed / Light |
| #3C3C434D | Label Color / Light / Tertiary; 7 style uses |
| #34C759 | SystemGreen / Light; 1 style use; enabled switch background |
| #0000001A | Available shadow color |
| #909090 | Gray neutral |
| #FFFFFF | White, system background, and component fills |

## Type scale

- 20px / 24px, SF Pro Display Regular 400, tracking 0.38px — `Default / Regular / Title3`; 31 style uses.
- 20px / 24px, SF Pro Display Semibold 600, tracking 0.38px — `Default / Bold / Title3`; 1 style use.
- 18px, Inter Regular — raw typography; used for page headers and 8 raw uses.
- 13px / 18px, SF Pro Text Semibold 600, tracking -0.08px — `Default / Bold / Footnote`; 7 style uses.
- 13px, Inter SemiBold — 88 raw uses; primary card titles and supporting labels.
- 13px, Inter Medium — 44 raw uses; bottom navigation labels.
- 13px, Inter Medium — bottom navigation labels: `SERVICES`, `INBOX`, `YOUR PETS`, `MORE`.
- 11px, Inter Bold — 6 raw uses.
- 9px, Inter SemiBold — used for `precise location?`.
- 24px, SF Pro Display Heavy — used for the location heading glyph.

## Spacing scale

_None found in source._

## Radius scale

- 8.91px — `Mode=Light, Options=2 Options, Selected=Left Selected` component.
- 13px — `Mode=Light` component.
- 100px — iOS home indicator.
- 0px — iPhone bottom-bar group and `shelters` group.

## Elevation & effects

- `Mode=Light` component: drop shadow, 60px blur, offset 0 10px, color #0000001A.
- Screen service and partnership cards use drop shadows with offset 0 4px; the source does not provide an allowed shadow color for these effects.
- Bottom navigation has a 0.5px top divider using #BDC5CD.
- Icon Grid: 2px grid, 2 columns, 2px section, 20px gutter, centered alignment.

## Components

Allowed component families and documented specifications:

- `basic / map`: 31×31px.
- `cart`: 38×38px, fill #FFFFFF.
- `edit / list_ol`: 28×27px.
- `file / file_blank_outline`: 47×47px.
- `Mode=Light, Options=2 Options, Selected=Left Selected`: 343×32px, radius 8.91px, fill #7676801F. Text source specifies Roboto Regular 15px and Roboto Black 15px.
- `Mode=Light`: 346×319px, radius 13px, fill #FFFFFF. Text uses Inter SemiBold 20px plus the Title3 and Footnote styles.
- `Mode=Light, State=Off`: 51×31px, fill #FFFFFF.
- `Mode=Light, State=On`: 51×31px, fill #FFFFFF with a #34C759 switch background and #FFFFFF knob.
- `basic / help_circle_outline`: 24×24px.
- `other / sun`: 24×24px.
- `brand / dribbble`: 24×24px.
- `briefcase`: 24×24px, fill #FFFFFF.
- `arrow / chevron_big_right`: 24×24px.
- `home / home_alt_outline`: 24×24px.
- `misc / dot_03_m`: 24×24px.
- `message-circle`: 33×33px, fill #FFFFFF.
- `Paw`: 23×25px.
- `zoom-out`: 33×33px, fill #FFFFFF.
- Service card: 339×74px, white surface, title and subtitle, leading service icon, trailing `arrow / chevron_big_right`.
- Partnership card: 339×74px, white surface, organization title, `adopt and volunteer` subtitle, leading `home / home_alt_outline` at 45×45px, and trailing chevron.
- Bottom bar: 375×83px, #FAFAFA background, 134×5px home indicator, and a 0.5px #BDC5CD top divider.
- Component families present: `basic`, `cart`, `edit`, `file`, `Mode=Light, Options=2 Options, Selected=Left Selected`, `Mode=Light`, `Mode=Light, State=Off`, `Mode=Light, State=On`, `other`, `brand`, `briefcase`, `arrow`, `home`, `misc`, `message-circle`, `Paw`, `zoom-out`.

## Screen patterns

### Select a Service

- Viewport: 375×812px.
- Centered header: `Select a Service`, Inter Regular 18px.
- Main content background: #F1F1F1 with decorative grass at the top.
- Section label: `FIND AND BOOK A SERVICE`, Inter SemiBold 13px, #4B4B4B.
- Six stacked 339×74px service cards:
  - Dog Walking — `in your neighborhood`
  - House Sitting — `in your home`
  - Dog Boarding — `in the sitter’s home`
  - Drop in Visits — `visits in your home`
  - Doggy Day Care — `in the sitter’s home`
  - First time pet owners — `resources and services`
- Persistent bottom navigation uses `zoom-out`, `Paw`, `message-circle`, `misc / dot_03_m`, and the labels `SERVICES`, `INBOX`, `YOUR PETS`, `MORE`.

### Partnerships

- Viewport: 375×812px.
- Centered header: `Partnerships`, Inter Regular 18px.
- Main content background: #F1F1F1 with decorative grass at the top.
- Partnership cards use the 339×74px card pattern:
  - Seattle animal shelter — `adopt and volunteer`
  - PAWS Cat City — `adopt and volunteer`
  - Homeward pet adoption center — `adopt and volunteer`
  - Eastside pet adoption center — `adopt and volunteer`
- Partnership cards use `home / home_alt_outline`, a trailing chevron, and #1F1F1F / #4B4B4B text.
- The precise-location state includes `showing results for: Bellevue`, `ORGANIZATIONS WE PARTNER WITH`, an enabled switch, `back`, `precise location?`, and a 24px SF Pro Display Heavy location glyph.
- Persistent bottom navigation matches the service screen.

## Notes for implementers

- Build for a 375×812px mobile viewport and preserve the 375px-wide full-bleed header and bottom bar.
- Keep primary content within 339px-wide cards.
- Use white cards against #F1F1F1; use #1F1F1F for card titles and #4B4B4B for subtitles and section labels.
- Use Inter for screen text unless a named design token specifies SF Pro Display, SF Pro Text, or Roboto.
- Do not introduce spacing variables, radius values, motion, or effect colors that are not documented here.
- Treat status-bar decorative shapes and grass as decorative, not reusable content components.
- Reuse the same bottom navigation across the service and partnership screens.
