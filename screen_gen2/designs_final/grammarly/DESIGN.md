---
name: grammarly-ui-screens-community
source: Grammarly UI Screens (Community)
kind: design-system-context
---

# grammarly - Design System

## Overview

- Source page: UIKit.
- The extraction contains an Intro screen, before-generation presentation, after-generation presentation, document cards, generated UI components, controls, buttons, tags, and icons.
- No local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- Primary typefaces are Inter and Manrope.
- Component layouts are predominantly fixed-size horizontal or vertical frames with zero internal padding and zero gap in the extracted component specs.

## Design language

- Interface styling is predominantly monochrome, using black and near-black tones with white and near-white surfaces.
- Teal is used for interactive fills: `#047B67`, `#057C6C`, and `#057E6E`.
- Pale teal is used for tags: `#EBFCFB`.
- Components use compact fixed dimensions, especially controls between `22px` and `43px` high.
- Larger content cards use pronounced rounding: `ToneProfileCard_5_22` uses `34px`; document cards use `10px`.
- Typography is mostly Inter Regular from `8px` through `26px`, with Manrope SemiBold at `24px`.

## Color palette

Ranked by recorded usage where counts are available:

| Color | Recorded uses | Observed usage |
|---|---:|---|
| `#000000` | 135 | Most-used raw color |
| `#FEFEFE` | 43 | Near-white surfaces and control fills |
| `#010101` | 17 | Raw near-black |
| `#040404` | 14 | Raw near-black |
| `#000001` | 10 | Raw near-black |
| `#010102` | 9 | Raw near-black |
| `#010103` | 8 | Raw near-black |
| `#6D6D6D` | 8 | Gray |
| `#FFFFFF` | 8 | White text and surfaces |
| `#030304` | 7 | Raw near-black |
| `#232323` | 7 | Dark stroke on `Button_3_3` |
| `#000101` | 6 | Raw near-black |
| `#030303` | 6 | Raw near-black |
| `#101010` | 6 | Raw near-black |
| `#1D1D1D` | 6 | Raw near-black |
| `#3C3C3C` | 6 | Dark gray |
| `#F7F7F7` | 6 | Light surface |
| `#020304` | 5 | Raw near-black |
| `#040405` | 5 | Raw near-black |
| `#060606` | 5 | Raw near-black |
| `#090909` | 5 | Raw near-black |
| `#1F1736` | 5 | Dark purple text in the Intro screen |
| `#EBFCFB` | Not counted | `Tag_5_20` fill |
| `#EFFFFF` | Not counted | `Button_1_27` stroke |
| `#F6F6F6` | Not counted | `Button_2_5` fill |
| `#047B67` | Not counted | `Button_3_19` fill |
| `#057C6C` | Not counted | `Button_2_6` fill |
| `#057E6E` | Not counted | `Button_1_27` fill |

Use the listed near-black colors as distinct source values when reproducing extracted artwork; do not normalize them to an unlisted color.

## Type scale

### Inter Regular

| Size | Recorded uses |
|---:|---:|
| `12px` | 230 |
| `13px` | 200 |
| `14px` | 100 |
| `16px` | 94 |
| `15px` | 92 |
| `10px` | 38 |
| `11px` | 29 |
| `18px` | 15 |
| `26px` | 13 |
| `17px` | 12 |
| `9px` | 11 |
| `8px` | 10 |

### Manrope

- SemiBold, `24px`: 6 recorded uses.
- The Intro screen also contains Manrope ExtraBold at `50px` and `40px`, and Manrope Bold at `30px`.
- The extracted presentation screens contain Inter Medium at `80px` and Inter Regular at `40px`.
- The extracted screen typography includes Inter Regular at `14px` for component labels.

Use the recorded hierarchy from largest to smallest: `26px`, `24px`, `18px`, `17px`, `16px`, `15px`, `14px`, `13px`, `12px`, `11px`, `10px`, `9px`, `8px`.

## Spacing scale

No spacing variables were found. Observed layout values:

- Screen padding: `160px`.
- Intro screen vertical gap: `88px`.
- Intro content gaps: `24px`, `14px`, and `10px`.
- Before/after presentation screen vertical gap: `120px`.
- Presentation content gap: `80px`.
- Generated UI component container gap: `20px`.
- Basic and feature component internal padding and gap: `84px`.
- Intro button padding: horizontal `31px` and vertical `66px`.
- Component-spec padding and gaps are generally `0px`.

## Radius scale

Observed radii:

- `2px`: `Button_1_27`
- `3px`: `Tag_5_20`, `Button_3_19`
- `5px`: `Button_3_3`
- `7px`: `Button_2_5`, `Button_2_6`
- `10px`: `DocumentCard_2_16`
- `16px`: Intro screen download button
- `34px`: `ToneProfileCard_5_22`
- `43px`: extracted generated document composition

No radius variables were found.

## Elevation & effects

- No local effect styles were found.
- No shadows or elevation tokens were extracted.
- Observed strokes:
  - `Button_3_3`: `#232323`, `1px`.
  - `Button_1_27`: `#EFFFFF`, `1px`.
- Image fills are used by the icon families and are identified by source image hashes.

## Components

### Cards and content components

- `ToneProfileCard_5_22`
  - Size: `518x292px`.
  - Radius: `34px`.
  - Horizontal layout; fixed width and height.
  - Padding: `0px` on all sides; gap: `0px`.
  - Uses Inter Regular at `8px`, `9px`, `10px`, `12px`, `13px`, `14px`, `15px`, `16px`, and `26px`.

- `DocumentCard_2_16`
  - Size: `216x202px`.
  - Radius: `10px`.
  - Horizontal layout; fixed width and height.
  - Padding: `0px` on all sides; gap: `0px`.
  - Uses Inter Regular at `8px`, `11px`, `12px`, `13px`, `14px`, and `15px`.

- `FreePlanCard_generated_68`
  - Size: `315x374px`.
  - Horizontal layout; fixed width and height.
  - Padding: `0px` on all sides; gap: `0px`.
  - Uses Inter Regular at `12px`, `13px`, `14px`, `16px`, `17px`, `18px`, `20px`, and `37px`.

- `Tag_5_20`
  - Size: `62x19px`.
  - Radius: `3px`.
  - Fill: `#EBFCFB`.
  - Uses Inter Regular at `10px`.

### Buttons

- `Button_3_19`
  - Size: `62x29px`; radius `3px`.
  - Fill: `#047B67`.
  - Uses Inter Regular at `13px`.

- `Button_3_3`
  - Size: `75x31px`; radius `5px`.
  - Fill: `#FEFEFE`.
  - Stroke: `#232323`, `1px`.
  - Uses Inter Regular at `12px`.

- `Button_2_5`
  - Size: `129x37px`; radius `7px`.
  - Fill: `#F6F6F6`.
  - Uses Inter Regular at `15px`.

- `Button_2_6`
  - Size: `162x37px`; radius `7px`.
  - Fill: `#057C6C`.
  - Uses Inter Regular at `15px`.

- `Button_1_26`
  - Size: `299x42px`.
  - Fill: `#FEFEFE`.
  - Uses Inter Regular at `16px`.

- `Button_1_27`
  - Size: `321x43px`; radius `2px`.
  - Fill: `#057E6E`.
  - Stroke: `#EFFFFF`, `1px`.
  - Uses Inter Regular at `14px`.

### Selection controls

All listed controls use fixed dimensions, horizontal layout, `0px` padding, and `0px` gap unless otherwise noted. Their fill is `#FEFEFE`.

- `CheckBox_generated_checkbox_3`: `81x23px`, Inter Regular `13px`.
- `CheckBox_generated_checkbox_6`: `99x22px`, Inter Regular `12px`.
- `CheckBox_generated_checkbox_58`: `326x30px`, Inter Regular `14px`.
- `CheckBox_generated_checkbox_53`: `172x29px`, Inter Regular `12px`.
- `CheckBox_generated_checkbox_62`: `121x29px`, Inter Regular `13px`.
- `CheckBox_generated_checkbox_5`: `106x23px`, Inter Regular `12px`.
- `CheckBox_generated_checkbox_57`: `278x29px`, Inter Regular `12px` and `13px`.
- `CheckBox_generated_checkbox_55`: `244x30px`, Inter Regular `13px`.
- `Radio_generated_checkbox_7`: `98x22px`, Inter Regular `12px`.
- `Radio_generated_radio_1`: `74x24px`, Inter Regular `12px`.
- `Radio_generated_checkbox_63`: `256x29px`, Inter Regular `13px`.
- `Radio_generated_checkbox_10`: `84x22px`, Inter Regular `12px`.

### Icons

All icon components use fixed sizing, horizontal layout, `0px` padding, and `0px` gap. Each uses an image fill identified by its source hash.

- `Icon_5_31_image`: `16x15px`; hash `38c95dca08079d320e7ad0d67987d48423c4c545`.
- `Icon_5_14_image`: `18x15px`; hash `065ca635300a71eabefed09724f8a04f59dcdb28`.
- `Icon_5_11_image`: `18x18px`; hash `987c4b519ddf85b10e4e100b30318e44f26d091d`.
- `Icon_5_16_image`: `39x49px`; hash `3ec4ff36240a4a5d3931dafacaf87d50d4f46e7b`.
- `Icon_5_24_image`: `19x22px`; hash `9a60838d81186aa33d1f7d441a0ca849907a3be3`.
- `Icon_3_17_image`: `23x16px`; hash `77f26b1a77263be4f38a4d39cf008204cb888366`.
- `Icon_3_22_image`: `18x16px`; hash `4c756e0e074deb04577dfa6c6fe9ce763367af43`.
- `Icon_3_27_image`: `19x16px`; hash `bffcaa29ed0ccc2ea9cc11ff543330fbc6b3c882`.
- `Icon_3_25_image`: `16x15px`; hash `f2e689f926865c54f3d6084752542160caf45147`.
- `Icon_3_30_image`: `20x17px`; hash `d99feac8702e86e3208c83fdf7a5ab1126540fba`.
- `Icon_4_5_image`: `39x39px`; hash `7f6de0589ea5513c9f0f6096e74af32dd7935edd`.
- `Icon_3_37_image`: `15x17px`; hash `c546ff40dcb67cabf15c2611ccc0cab70439e514`.
- `Icon_4_4_image`: `16x18px`; hash `0f0957c064feec27f0eb41c8e29343af071bacdf`.
- `Icon_3_41_image`: `16x17px`; hash `83c87c1dad9470ad6e8723aa9141ec1c02c7c7ef`.
- `Icon_1_17_image`: `21x22px`; hash `d9887f4db62fc567a9106ef83d0392374df41526`.
- `Icon_1_12_image`: `21x21px`; hash `b0e44e5fc962d9ac6d4c1e3751dabf107869473c`.
- `Icon_1_14_image`: `21x22px`; hash `b89b4f85116ef528927f6e45052c9108bb51e874`.
- `Icon_4_29_image`: `18x17px`; hash `4f4cbec8d4f34566406f1d5662c82ed66248225f`.
- `Icon_4_30_image`: `16x15px`; hash `121a3d64586e65221ac405dbc208f8dfc283f286`.
- `Icon_4_56_image`: `30x29px`; hash `5f1ad61975402f95ed9e93dbcde5a1739f719a2d`.
- `Icon_5_2_image`: `16x15px`; hash `8c9b910e76ab79c24b46fb7b7ee1aeeb5a5e8b69`.
- `Icon_2_28_image`: `16x15px`; hash `377b77075f2cd040f6ba20c79c0c33c3af121c0e`.
- `Icon_2_26_image`: `15x15px`; hash `eac93b02fa1dc5bbe6e83b39d3575cd2c5224193`.
- `Icon_1_0_image`: `32x31px`; hash `c458a40cc94213aa37c0cacabebaba0e57a6eee8`.
- `Icon_2_36_image`: `15x17px`; hash `6e1be1d5be2689d846b8198be53846ab35b2975a`.
- `Icon_2_30_image`: `15x16px`; hash `f84950162c96109932f13a7c30cf8809145c76bb`.
- `Icon_2_32_image`: `15x16px`; hash `a1f2bc3ae1ca7dcdbcd29d01f94631e2627f19bb`.

## Screen patterns

- **Intro**
  - Fixed canvas: `1333x2055px`.
  - Screen padding: `160px` on all sides.
  - Vertical gap: `88px`.
  - Content width: `1013px`.
  - Uses a `140x140px` image beside an introductory title area with a `40px` gap.
  - Includes content sections with `24px` and `14px` vertical gaps.
  - Includes a `348x104px` download button with `16px` radius, `31px` horizontal padding, `66px` vertical padding, and `10px` internal gap.

- **Before generation (Image)**
  - Fixed canvas: `10239.72x2055px`.
  - Screen padding: `160px` on all sides.
  - Vertical gap: `120px`.
  - Includes an `80px` Inter Medium heading and a large horizontal presentation area with an `80px` gap.

- **After generation (Figma design)**
  - Fixed canvas: `10960x2051px`.
  - Screen padding: `160px` on all sides.
  - Vertical gap: `120px`.
  - Organizes generated designs and generated UI components into large horizontal sections.
  - Generated design document previews use `1440x901px` frames with `80px` gaps.
  - Generated UI component examples use `720px`-wide containers, `20px` label-to-content gaps, and `84px` internal padding and gaps.
  - Section headings use Inter Regular at `40px`.

## Notes for implementers

- Use only the named component families; do not substitute unlisted component types.
- Preserve fixed component dimensions when reproducing extracted controls and cards.
- Use the recorded color values exactly, including near-identical near-black values where they occur in source artwork.
- Prefer Inter for control, card, and utility text. Use Manrope for the Intro presentation hierarchy where specified.
- Do not infer spacing, radius, elevation, motion, or text-style tokens that are not listed.
- Preserve image-based icons using their corresponding source image assets or hashes.
- Component specs generally have `0px` padding and `0px` gap; apply larger spacing only where the screen patterns explicitly record it.
