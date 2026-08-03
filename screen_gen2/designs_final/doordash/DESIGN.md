---
name: doordash-ul-screens-community
source: DoorDash Ul Screens (Community)
kind: design-system-context
---

# doordash - Design System

## Overview

- Source: DoorDash Ul Screens (Community)
- Pages: All pages (2): Page 1, UIKit
- Extracted: 2026-07-25
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The extraction includes UIKit introduction content, before/after-generation presentation screens, mobile UI screens, and generated UI component examples.

## Design language

- The UIKit introduction uses large Manrope headings with blue emphasis and dark purple supporting copy.
- Generated mobile UI uses Inter Regular extensively across compact labels, cards, navigation, and status content.
- Presentation screens use large Inter Medium labels and dark canvases.
- Layouts are predominantly fixed-size, horizontal or vertical frames with explicit gaps and minimal component padding.
- Mobile screen artifacts use a 375px-wide viewport in the generated design examples.
- Image-based icons are used as fixed-size assets rather than a unified icon-size token.

## Color palette

Ranked by raw usage:

| Color | Uses | Observed role |
|---|---:|---|
| `#000000` | 64 | Most-used raw neutral |
| `#010101` | 14 | Near-black neutral |
| `#070707` | 14 | Near-black neutral |
| `#060606` | 13 | Near-black neutral |
| `#404040` | 12 | Dark neutral |
| `#040404` | 9 | Near-black neutral |
| `#414141` | 9 | Dark neutral |
| `#434343` | 9 | Dark neutral |
| `#030303` | 8 | Near-black neutral |
| `#212121` | 8 | Dark neutral |
| `#383838` | 8 | Dark neutral |
| `#080808` | 7 | Near-black neutral |
| `#454545` | 7 | Dark neutral |
| `#464646` | 7 | Dark neutral |
| `#5C5C5C` | 7 | Mid-dark neutral |
| `#131313` | 6 | Near-black neutral |
| `#4C4C4C` | 6 | Mid-dark neutral |
| `#F7F7F7` | 6 | Light surface |
| `#FEFEFE` | 6 | Near-white surface |
| `#FFFFFF` | 6 | White surface or text |
| `#181818` | 5 | Near-black neutral |
| `#1F1736` | 5 | Dark purple supporting text |
| `#3A3A3A` | 5 | Dark neutral |
| `#3B3B3B` | 5 | Dark neutral |
| `#3D3D3D` | 5 | Dark neutral |
| `#424242` | 5 | Dark neutral |
| `#4F4F4F` | 5 | Mid-dark neutral |
| `#595959` | 5 | Mid-dark neutral |
| `#F1F1F1` | 5 | Light neutral surface |
| `#282828` | 4 | Dark neutral |
| `#343434` | 4 | Dark neutral |
| `#4499F8` | 4 | Blue accent and primary emphasis |
| `#EFEFEF` | 4 | Light neutral surface |
| `#020202` | 3 | Near-black neutral |
| `#0B0B0B` | 3 | Near-black neutral |
| `#161616` | 3 | Near-black neutral |
| `#474747` | 3 | Dark neutral |
| `#4E4E4E` | 3 | Mid-dark neutral |
| `#545454` | 3 | Mid-dark neutral |
| `#5B5B5B` | 3 | Mid-dark neutral |
| `#F6F6F6` | 3 | Light neutral surface |
| `#F8F8F8` | 3 | Light neutral surface |

Explicit component fills:

- `Button_5_9`: `#F1F1F1`
- `Button_5_8`: `#F1F1F1`
- `CheckBox_generated_checkbox_11`: `#FEFEFE`
- `Avatar_generated_avatar_9`: `#FEFEFE`
- `Button_5_18`: `#F6F6F6`

## Type scale

### Font families and weights

- Inter Regular is the dominant UI font.
- Inter Medium is used for large presentation labels.
- Manrope SemiBold is used for supporting introduction copy and 24px text.
- Manrope ExtraBold is used for 40px and 50px introduction headings.
- Manrope Bold is used for the 30px “Download Now” label.

### Ranked Inter Regular sizes

| Size | Uses |
|---:|---:|
| 12.67px | 47 |
| 12.33px | 38 |
| 11px | 35 |
| 12px | 31 |
| 13.33px | 23 |
| 16px | 23 |
| 10.33px | 22 |
| 14.67px | 17 |
| 11.67px | 15 |
| 14.33px | 15 |
| 14px | 15 |
| 10.67px | 14 |
| 10px | 9 |
| 17.67px | 8 |
| 17px | 8 |
| 18px | 8 |
| 13.67px | 7 |
| 13px | 7 |
| 15.33px | 5 |
| 9.67px | 5 |
| 11.33px | 4 |
| 18.33px | 4 |
| 22px | 4 |
| 3.67px | 4 |
| 16.33px | 3 |
| 21.67px | 3 |

Additional observed sizes:

- Inter Regular: 8.67px, 6px, 3px, 2.33px, 2px, 1.33px
- Manrope SemiBold: 24px
- Manrope ExtraBold: 50px, 40px
- Manrope Bold: 30px
- Inter Medium: 80px

Use the listed source sizes as-is; no normalized type scale was defined.

## Spacing scale

No spacing variables were found.

Observed layout gaps:

- `0px`
- `10px`
- `14px`
- `20px`
- `24px`
- `40px`
- `80px`
- `84px`
- `88px`
- `120px`

Observed explicit padding values:

- `0px`
- `10px`
- `31px 66px 31px 66px`
- `84px`
- `160px`

## Radius scale

No radius variables were found.

Observed radii:

- `3.67px`
- `7.33px`
- `9.33px`
- `10.33px`
- `11px`
- `16px`
- `26px`

## Elevation & effects

- No local effect styles were found.
- No elevation or shadow tokens were found.
- No motion tokens were found.
- Borders are explicitly observed at `1px` on presentation frames and generated-design headers.
- A `1px` stroke using `#F8F8F8` is observed on generated-design section headers.

## Components

All listed component families are fixed-size unless otherwise noted.

### Navigation, headers, and search

| Component | Size | Radius | Typography |
|---|---:|---:|---|
| `UserProfileHeader_generated_22` | 130 × 56.67px | — | Inter Regular: 7.33px, 10px, 10.67px, 12.67px, 12.33px, 11px, 17.33px |
| `TabBar_generated_bottomnavigationbar_5` | 40 × 38.67px | — | Inter Regular: 10.33px |
| `TabBar_5_128` | 375 × 77.67px | — | Inter Regular: 12px, 10.33px, 11px, 10.67px |
| `TabBar_3_58` | 375 × 77.67px | — | Inter Regular: 12.33px, 10.33px, 11px, 10.67px |
| `TabBar_2_268` | 375 × 77.67px | — | Inter Regular: 12px, 10.33px, 11px, 10.67px |
| `SearchBar_3_9` | 129 × 18.67px | 9.33px | Inter Regular: 14.67px |
| `SearchBar_1_11` | 164 × 18.67px | 9.33px | Inter Regular: 14.33px, 13.33px |
| `RestaurantInformationHeader_generated_24` | 346.67 × 77.33px | — | Inter Regular: 12.67px, 10.33px, 14.67px, 12.33px, 17.67px |
| `DeliveryOptionsTab_2_205` | 344.67 × 92.33px | 10.33px | Inter Regular: 12px, 12.33px, 11px, 13px, 14px, 14.33px, 13.67px, 12.67px, 13.33px |

### Cards and content sections

| Component | Size | Radius | Typography |
|---|---:|---:|---|
| `AddOnItemsSuggestion_generated_44` | 337 × 55.67px | — | Inter Regular: 12.67px, 18.33px, 13.33px, 11.67px, 12px, 17.67px, 12.33px, 17px, 11px, 18px |
| `ItemCard_generated_46` | 240.33 × 278.67px | — | Inter Regular: 13.33px, 12.67px, 12.33px, 13px, 12px, 11px, 9.67px, 10.67px, 8.67px, 10px, 11.33px, 15.67px, 14.33px, 2.33px, 2px, 1.33px, 3.67px, 6px |
| `GoToStoresSection_generated_23` | 260 × 188px | — | Inter Regular: 18px, 16.33px |
| `CuisineCard_3_23` | 151.33 × 92px | 10.33px | Inter Regular: 13.67px, 14.67px |
| `StoreSelectionTag_generated_45` | 361 × 46.67px | — | Inter Regular: 11px, 9.67px, 12.33px, 11.67px, 3px |
| `OrderStatusTracker_generated_43` | 348 × 92.67px | — | Inter Regular: 16px, 14.33px, 22px, 14px, 21.67px |
| `RestaurantCard_4_60` | 374.67 × 75px | 11px | Inter Regular: 10.33px, 10px, 11.67px, 17px, 14.67px, 15.33px, 12px, 11px |
| `RestaurantCard_4_51` | 105 × 104.67px | 26px | Inter Regular: 11px |

### Controls

| Component | Size | Radius | Fill | Typography |
|---|---:|---:|---|---|
| `Button_5_9` | 70 × 15px | 3.67px | `#F1F1F1` | Inter Regular: 13.33px |
| `Button_5_8` | 59.67 × 15px | 7.33px | `#F1F1F1` | Inter Regular: 13.33px |
| `Button_5_18` | 94 × 123px | 10.33px | `#F6F6F6` | Inter Regular: 13.33px |
| `CheckBox_generated_checkbox_11` | 346 × 32.67px | — | `#FEFEFE` | Inter Regular: 18px |
| `Avatar_generated_avatar_9` | 23.33 × 39.33px | — | `#FEFEFE` | Inter Regular: 12px |

### Image icons

All image icons use fixed sizing, zero padding, zero gap, and image fills identified by source hashes.

- `Icon_6_43_image`: 45.67 × 45.67px
- `Icon_2_212_image`: 21 × 20px
- `Icon_2_213_image`: 21 × 20.33px
- `Icon_2_210_image`: 22 × 21.67px
- `Icon_2_211_image`: 15.33 × 20.67px
- `Icon_2_207_image`: 21.67 × 22.67px
- `Icon_2_208_image`: 29.67 × 30px
- `Icon_5_44_image`: 30.33 × 21.33px
- `Icon_6_16_image`: 37.67 × 38px
- `Icon_5_49_image`: 15.33 × 20.67px
- `Icon_5_50_image`: 20.67 × 21.67px
- `Icon_5_51_image`: 20.67 × 18px
- `Icon_6_33_image`: 21.67 × 42.67px
- `Icon_6_30_image`: 43.33 × 43.33px
- `Icon_3_11_image`: 18.67 × 18.67px
- `Icon_5_1_image`: 16.67 × 15px
- `Icon_3_34_image`: 22 × 20.67px
- `Icon_3_31_image`: 21 × 20.67px
- `Icon_3_7_image`: 20.33 × 20.33px
- `Icon_1_6_image`: 19.33 × 16px
- `Icon_1_12_image`: 41.33 × 41.33px
- `Icon_1_26_image`: 36.67 × 28px
- `Icon_1_22_image`: 31.33 × 36.67px
- `Icon_1_23_image`: 37 × 32.33px
- `Icon_1_24_image`: 33.67 × 34.33px
- `Icon_1_25_image`: 20 × 32.67px
- `Icon_1_21_image`: 32.33 × 39px
- `Icon_2_199_image`: 29.67 × 30px

## Screen patterns

### UIKit / Intro

- Fixed canvas: 1333 × 3214px.
- Outer padding: `160px` on all sides.
- Vertical gap between major sections: `88px`.
- Intro header pairs a 140 × 140px image with a 50px Manrope ExtraBold heading.
- Primary heading color: `#4499F8`.
- Supporting copy uses 24px Manrope SemiBold with `#1F1736`.
- Secondary headings use 40px Manrope ExtraBold with `#4499F8`.
- The “Download Now” action is 348 × 104px, has `16px` radius, uses `#4499F8`, and contains 30px Manrope Bold text in `#FFFFFF`.

### UIKit / Before generation

- Fixed presentation canvas: 5220 × 3214px.
- Outer padding: `160px`.
- Vertical section gap: `120px`.
- Contains a large 80px Inter Medium title and a wide decorative image area.

### UIKit / After generation

- Fixed presentation canvas: 6810 × 3210.33px.
- Outer padding: `160px`.
- Vertical section gap: `120px`.
- Presents generated design screens and generated UI components side by side.
- Generated design examples use six 375 × 813px mobile frames with `24px` vertical gaps.
- Generated UI component examples are organized into labeled sections with `80px` gaps.
- Component sample containers use 720px-wide regions, with 84px internal padding and 84px gaps.
- Generated section headers use 40px Inter Regular labels and a `1px` `#F8F8F8` stroke.

## Notes for implementers

- Prefer the named component families over recreating equivalent structures.
- Preserve the source’s fractional dimensions and radii where a named component specifies them.
- Use Inter Regular for the generated mobile UI unless the component or screen explicitly specifies another family or weight.
- Use Manrope for the UIKit introduction and preserve the explicit ExtraBold, SemiBold, and Bold assignments.
- Keep blue emphasis as `#4499F8` and supporting introduction copy as `#1F1736`.
- Use the listed neutral colors directly; do not collapse all neutrals into a single gray.
- Use image icon families at their specified fixed dimensions.
- Do not add shadows, animations, grids, or unrecorded design tokens.
- The extraction contains no local style references or usage counts for named Figma styles.
