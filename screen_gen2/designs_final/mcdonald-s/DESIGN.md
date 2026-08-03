---
name: mcdonald-s-app-concept-community
source: McDonald's App Concept (Community), Page 1
kind: design-system-context
---

# mcdonald-s - Design System

## Overview

- Source: Figma file “McDonald's App Concept (Community)”, Page 1.
- The extraction contains mobile app concepts sized primarily at 414x896px, plus supporting location and payment-method overlays.
- No local variable collections, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The visual system combines McDonald’s red and yellow branding with white surfaces, soft gray neutrals, rounded cards, blurred color fields, and prominent bottom sheets.

## Design language

- Use Noto Sans throughout the interface.
- Brand emphasis comes from red surfaces and controls, yellow accents, and warm orange/yellow blurred background shapes.
- Use white as the dominant surface color, with light gray backgrounds and cards for secondary content.
- Apply rounded geometry extensively: pill-shaped controls, rounded cards, circular avatars, and rounded bottom sheets.
- Use large, soft shadows on cards, navigation bars, overlays, and floating controls.
- Use large headings in Noto Sans SemiBold, Bold, or ExtraBold; supporting copy is typically Regular, Light, or Medium.
- Product imagery and decorative food illustrations are prominent in menu cards and promotional content.
- Navigation commonly uses thin line icons in gray, with selected states using red-to-yellow gradients where present in the source.

## Color palette

Colors are ranked by source usage count. Only colors permitted by the extraction are included.

- `#FFEA28` — 68 uses; bright yellow accent and rating stars.
- `#FFFFFF` — 66 uses; primary surface and control fill.
- `#000000` — 58 uses; primary text and icon color.
- `#525252` — 13 uses; dark neutral text and icons.
- `#F6F6F6` — 13 uses; light gray surfaces and cards.
- `#D52B1E` — 12 uses; primary brand red and primary actions.
- `#DADADA` — 12 uses; neutral borders and dividers.
- `#8B8B8B` — 9 uses; secondary text and outlined controls.
- `#DB4B40` — 8 uses; lighter red text and actions.
- `#FFE62E` — 8 uses; yellow accent.
- `#F8B756` — 7 uses; warm orange controls and accents.
- `#8A8A8A` — 6 uses; navigation and secondary icons.
- `#8F8F8FE5` — 5 uses; translucent gray borders.
- `#FDC82F` — 5 uses; yellow gradient and blurred background accent.
- `#FFC800` — 5 uses; yellow accent.
- `#9E9E9E` — 4 uses; muted controls and placeholder text.
- `#AAAAAA` — 4 uses; tertiary text.
- `#D52B1ED9` — 4 uses; translucent red background.
- `#EBEBEB` — 4 uses; dividers and inactive indicators.
- `#EEEEEE` — 4 uses; muted text on dark or branded surfaces.
- `#F68E5A` — 4 uses; blurred warm background accent.
- `#FF2211` — 4 uses; red accent.
- `#FFD41F` — 4 uses; yellow accent.
- `#AB2D1F` — 3 uses; dark red accent.
- `#C6C6C6` — 3 uses; close and inactive icon details.
- `#D6D6D6` — 3 uses; avatar and neutral borders.
- `#EFEFEF` — 3 uses; inactive indicators and light surfaces.
- `#F7D8AB` — 3 uses; warm product-card background.
- `#FF3E3E` — 3 uses; notification badges.
- `#FFFFFF4D` — 3 uses; translucent white border or overlay.

## Type scale

All typography uses Noto Sans.

- 26px ExtraBold — largest display heading.
- 26px Regular — large heading variant.
- 24px SemiBold — screen and section heading.
- 22px Bold — prominent price or heading text.
- 18px Bold — card and notification titles.
- 18px Medium — prominent supporting text.
- 18px SemiBold — buttons, labels, and secondary headings.
- 16px Bold — card titles and totals.
- 16px Regular — body copy and labels.
- 16px SemiBold — buttons and menu options.
- 14px Medium — supporting metadata.
- 14px Regular — quantity labels and compact metadata.
- 13px Bold — compact emphasis.
- 13px Light — subtle supporting copy.
- 12px Regular — compact descriptions and placeholders.
- 12px SemiBold — compact labels and menu options.

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- `5px` — small square controls.
- `8px` — notification cards and compact cards.
- `10px` — outlined buttons.
- `12px` — search and card surfaces.
- `15px` — short progress indicators.
- `18px` — compact handles or controls.
- `20px` — product cards and translucent panels.
- `25px` — payment-method cards and rounded surfaces.
- `26px` — location image container.
- `30px` — bottom sheets, large controls, and profile fields.
- `40px` — product image backgrounds.
- `50px` — pill-shaped search and input controls.
- `60px` — asymmetric large branded panel corner.
- `0px` — square or edge-aligned containers.

## Elevation & effects

- Layer blur is used on branded background ellipses at `35px`, `70px`, and `100px`.
- Background blur is used at `15px` on translucent panels.
- Drop shadows appear on cards, bottom navigation, floating controls, location overlays, and product surfaces.
- Observed drop-shadow blur values include `10px`, `15px`, `30px`, `38px`, `50px`, `62px`, and `65px`.
- Observed shadow offsets include `3px 3px`, `0px 25px`, `0px 26px`, `0px 32px`, `0px 34px`, `25px 25px`, and `0px -8px`.
- Use translucent white borders such as `#FFFFFF4D` on glass-like panels.
- Branded backgrounds use blurred warm accent circles over translucent red surfaces.
- Gradients are used for selected navigation icons and branded accents, including red-to-yellow transitions.

## Components

### Saly-1

- Family: `Saly-1`.
- Size: `504x504px`.
- Fill: `#FFFFFF`.

## Screen patterns

- **Home / restaurant discovery:** 414x896px mobile screen with a search field, location row, rounded bottom navigation, promotional banner, popular-item sections, and horizontally arranged product cards.
- **Account / profile:** branded red header with blurred warm accents, profile avatar and details, logout control, voucher entry, and stacked white navigation rows.
- **Cart:** branded header with back navigation and cart title, product image and quantity controls, item price, promo entry, total summary, and a red primary action.
- **Order status:** branded red background with blurred accents, white rounded content sheet, order-status heading, order-progress indicators, receipt link, help and cancel controls, and floating phone/location actions.
- **Notifications:** stacked light-gray notification cards with close controls, red unread badges, compact titles, descriptions, and decorative food or voucher icons.
- **Location overlay:** 386x556px rounded map/image panel with a close control and floating location marker.
- **Payment methods:** 168x163px rounded white menu with QR-code, Visa/Master, and Apple Pay options separated by thin dividers.
- **Product cards:** 153x181px white cards with 20px radius, light border, shadow, product imagery, favorite and add controls, star ratings, product name, and price.

## Notes for implementers

- Treat the listed colors as the complete usable palette; do not introduce additional colors.
- Use Noto Sans with the specified weight and size combinations rather than creating unlisted text styles.
- Preserve the 414x896px mobile composition for primary app screens where applicable.
- Use rounded white sheets over branded red backgrounds for major flows such as profile, cart, and order status.
- Keep primary actions and selected states in `#D52B1E` or the documented red variants.
- Use `#FFEA28` for star ratings and yellow emphasis.
- Keep secondary text and inactive icons within the documented gray palette.
- Use shadows and blur selectively to create floating cards, glass-like overlays, and depth; match the observed blur and offset values.
- The source includes image fills and icon assets, but their source hashes are not reusable design tokens; preserve the role and sizing of these assets when implementing.
- Only the `Saly-1` component family is documented. Do not assume additional reusable component families.
