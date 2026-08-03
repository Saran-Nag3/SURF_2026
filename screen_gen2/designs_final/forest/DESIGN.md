---
name: food-delivery-website-app-design-ui-kit-community
source: Food Delivery Website & App Design UI Kit (Community), Page 1
kind: design-system-context
---

# forest - Design System

## Overview
- Food-delivery website and app UI kit for desktop experiences.
- Source page: Page 1.
- Extracted screens:
  - Home Desktop: 1728×4959px.
  - Restaurant Detail Page Desktop: 1728×6923px.
- No local variables, paint styles, text styles, spacing styles, radius styles, motion variables, grid styles, effect styles, or component sets were found.

## Design language
- High-contrast food-delivery interface using #03081F as the primary dark color, #FC8A06 as the primary accent, and #FFFFFF as the dominant light surface.
- Poppins is the primary typeface. Manrope SemiBold, 18px is used for desktop navigation.
- Large promotional headlines, rounded search and action controls, restaurant imagery, offer cards, category cards, and dark image overlays define the visual language.
- Navigation uses a light background with orange brand-action elements and a dark Login/Signup control.
- Content sections use bold black headings, orange category labels, dark cards, and white supporting text.

## Color palette
Ranked by raw usage count:
- `#FFFFFF` — 722 uses; primary light surface and light text.
- `#000000` — 609 uses; primary text.
- `#03081F` — 501 uses; dark backgrounds, cards, navigation actions, and overlays.
- `#FC8A06` — 280 uses; primary orange accent, buttons, labels, and promotional surfaces.
- `#028643` — 140 uses.
- `#0000001A` — 92 uses; light black stroke.
- `#00000033` — 75 uses; darker stroke.
- `#D9D9D9` — 67 uses.
- `#FDFDFD` — 67 uses.
- `#D8D8D8` — 44 uses.
- `#0000004D` — 40 uses.
- `#A6A6A6` — 38 uses.
- `#0000001C` — 28 uses.
- `#8E8E8E` — 24 uses.
- `#00F076` — 19 uses.
- `#CFCFCF` — 16 uses.
- `#F6F6F6` — 16 uses.
- `#00000099` — 15 uses.
- `#D9D9D999` — 15 uses.

## Type scale
Primary typeface: Poppins.
- 64px — Light; 16 uses.
- 54px — Bold; 12 uses.
- 44px — Bold; 17 uses.
- 36px — SemiBold; 10 uses.
- 32px — Bold; 109 uses.
- 32px — SemiBold; 22 uses.
- 26px — Bold; 12 uses.
- 24px — Bold; 61 uses.
- 24px — Regular; 22 uses.
- 24px — SemiBold; 21 uses.
- 22px — Bold; 9 uses.
- 20px — Bold; 10 uses.
- 20px — SemiBold; 102 uses.
- 20px — Regular.
- 18px — Bold; 209 uses.
- 18px — Medium; 66 uses.
- 18px — Regular; 11 uses.
- 18px — SemiBold; 66 uses.
- 16px — Bold; 24 uses.
- 16px — Medium; 16 uses.
- 16px — Regular; 109 uses.
- 16px — SemiBold; 48 uses.
- 15px — Bold; 20 uses.
- 15px — Medium; 24 uses.
- 15px — Regular; 108 uses.
- 14px — Bold; 200 uses.
- 14px — Regular; 87 uses.
- 14px — SemiBold; 9 uses.
- 13px — Bold; 52 uses.
- 13px — Regular; 81 uses.
- 12px — SemiBold.
- 68px — SemiBold; used for numbered promotional headings.

Additional typeface:
- Manrope SemiBold, 18px — desktop navigation labels.

## Spacing scale
_None found in source._

## Radius scale
- 120px — pill-shaped inputs, buttons, tabs, and subscription controls.
- 12px — cards, hero containers, and rounded image containers.
- 1px — small icon/group geometry.
- `282.5/0/12/0px` — asymmetric radius on the Home Desktop hero image.
- `0/0/0/0px` — square-cornered groups.
- `0/0/12/12px` — bottom-rounded promotional and location surfaces.
- `12/12/0/0px` — top-rounded card images.
- `0/12/12/0px` — asymmetric restaurant detail accent panel.

## Elevation & effects
- No local effect styles found.
- Image-based promotional cards use dark image-overlay treatments.
- An image in the Home Desktop hero is shown at 20% opacity.
- The Restaurant Detail Page uses a dark image overlay using #03081F.
- Borders are used as 1px strokes with #0000001A, #00000033, or #FFFFFF.

## Components
_None found in source._

## Screen patterns
- **Home Desktop, 1728×4959px:** white page background; dark #03081F hero banner with orange #FC8A06 imagery; large white Poppins headline; postcode search control with a white 120px-radius field and orange search action; navigation bar with logo, links, orange action, and dark Login/Signup pill; location and promotion strip; promotional deal cards; popular-category cards.
- **Restaurant Detail Page Desktop, 1728×6923px:** orange top strip; large 12px-radius restaurant hero with image and dark #03081F overlay; white 54px Poppins restaurant title; orange restaurant tagline panel; shared navigation and location/promotion strips; offer category navigation in a dark pill-style row; restaurant information controls; similar restaurant cards; footer.
- **Promotional deal card:** 496×325px, 12px radius, restaurant label in #FC8A06, title in #FFFFFF, and dark discount badge in #03081F.
- **Category card:** 238×266px, 12px radius, dark #03081F body, 238×203px image area with top corners rounded, orange category title, and white restaurant count.
- **Similar restaurant card:** 238×266px, 12px radius, orange #FC8A06 body, 238×203px image area, and white restaurant name.
- **Footer:** light gray content region with dark #03081F headings and a dark #03081F bottom bar containing white legal and copyright text.

## Notes for implementers
- Use only the documented palette; prioritize #FFFFFF, #000000, #03081F, and #FC8A06 according to the usage ranking.
- Use Poppins for nearly all interface text. Use Manrope SemiBold, 18px for desktop navigation where that source treatment is required.
- Use 12px radius for cards and major image containers.
- Use 120px radius for pill controls, search fields, buttons, tabs, and subscription inputs.
- Keep promotional content image-led with dark overlays and white foreground typography.
- Preserve the desktop canvas width of 1728px for the two extracted screen patterns.
- No component family specifications, spacing tokens, or reusable local styles were extracted; infer only from the concrete screen patterns documented above.
