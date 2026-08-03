---
name: openai
source: OpenAI Ul Screens (Community)
kind: design-system-context
---

# openai - Design System

## Overview

- Source: Figma file `OpenAI Ul Screens (Community)`.
- Pages: `Page 1`, `UIKit`.
- Extraction contains no local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles.
- Visual system is dominated by near-black neutrals, white and off-white surfaces, Inter typography, rounded controls, image-based icons, and large fixed-size showcase layouts.
- Component sizing is primarily fixed. Most extracted component layouts use zero padding and zero gap.

## Design language

- Use Inter Regular as the primary UI typeface.
- Use Manrope for prominent introductory and marketing-style headings.
- Prefer near-black text and surfaces, white or off-white backgrounds, and occasional green or periwinkle accents.
- Use pill-shaped controls for inputs and buttons.
- Use small radii for cards and code blocks, medium radii for tags, and circular treatment for avatars.
- Use fixed image assets for iconography rather than substituting generic icons.
- Keep layouts spacious: extracted showcase screens use 160px outer padding and gaps of 24px, 40px, 80px, 88px, 120px, and 160px.

## Color palette

Colors are listed by observed usage. Near-identical neutral shades are grouped as observed variants rather than treated as separate semantic roles.

### Dominant near-black neutrals

- `#000000` — 294 uses
- `#010101` — 33 uses
- `#020202` — 22 uses
- `#030303` — 16 uses
- `#040404` — 16 uses
- `#050505` — 18 uses
- `#060606` — 15 uses
- `#070707` — 9 uses
- `#080808` — 7 uses
- `#090909` — 5 uses
- `#0A0A0A` — 8 uses
- `#0C0C0C` — 7 uses
- `#0D0D0D` — 5 uses
- `#0E0E0E` — 5 uses
- `#101010` — 5 uses
- `#151515` — 5 uses
- `#161616` — 8 uses
- `#202020` — 5 uses

### Dark and mid neutrals

- `#444444` — 6 uses
- `#454545` — 7 uses
- `#474747` — 6 uses
- `#494949` — 5 uses
- `#4B4B4B` — 6 uses
- `#4C4C4C` — 5 uses
- `#565656` — 8 uses
- `#595959` — 5 uses

### Light neutrals

- `#FEFEFE` — 42 uses
- `#EFEFEF` — 7 uses
- `#E2E2E2` — 6 uses
- `#C2C2C2` — 6 uses
- `#F7F7F7` — 6 uses
- `#F9F9F9` — 6 uses
- `#F5F9F8` — 10 uses
- `#F4F4F4` — observed on `Input_2_14`
- `#F2F2F2` — observed on `Input_generated_input_20`
- `#FFFFFF` — 6 uses and used for the Intro screen background

### Accent colors

- `#0C9772` — `Button_1_4` fill
- `#7A8BFC` — `Avatar_2_1` fill
- `#1F1736` — observed in Intro screen body text

## Type scale

No local text styles were found. Observed typography is primarily Inter Regular:

| Size | Typeface | Weight | Uses |
|---:|---|---|---:|
| 13px | Inter | Regular | 18 |
| 14px | Inter | Regular | 68 |
| 15px | Inter | Regular | 30 |
| 16px | Inter | Regular | 168 |
| 17px | Inter | Regular | 117 |
| 18px | Inter | Regular | 193 |
| 19px | Inter | Regular | 106 |
| 20px | Inter | Regular | 41 |
| 21px | Inter | Regular | 10 |
| 22px | Inter | Regular | 21 |
| 23px | Inter | Regular | 6 |
| 24px | Manrope | SemiBold | 6 |

Additional screen-specific typography present in the extraction:

- Manrope ExtraBold, 50px: Intro title.
- Manrope ExtraBold, 40px: Intro section headings.
- Manrope SemiBold, 24px: Intro body and capability text.
- Manrope Bold, 30px: Intro CTA text.
- Inter Medium, 80px: Before/After generation showcase labels.
- Inter Regular, 40px: Generated Design showcase heading.

## Spacing scale

No spacing tokens were defined. Observed layout values:

- Outer padding: `160px`.
- Intro vertical gap: `88px`.
- Showcase vertical gaps: `120px`.
- Content gaps: `80px`, `40px`, `24px`, `14px`, `10px`.
- Common extracted component padding: `0px` on all sides.
- Common extracted component gap: `0px`.

## Radius scale

No radius tokens were defined. Observed radii:

- `1px`: `Radio_5_10`, `Radio_5_33`
- `2px`: `Radio_5_24`
- `4px`: `Radio_5_13`
- `5px`: pricing cards and `Radio_5_3`
- `7px`: `CodeSnippetDisplay_5_8`
- `9px`: `Tag_3_15`
- `12px`: `Radio_5_4`
- `16px`: Intro CTA frame
- `20px`: `Avatar_2_1`
- `23px`: `Button_5_1`
- `24px`: `MessageInput_5_34`
- `26px`: `ChatInput_4_42`, `Button_2_20`, `Button_2_21`
- `27px`: `Input_2_14`
- `28px`: `Button_1_5`, `Button_1_3`, `Button_1_4`

## Elevation & effects

_No effect styles, motion tokens, or elevation values found in source._

- No shadows are specified.
- No blur, opacity, or animation values are specified.
- One-pixel strokes are present on the showcase frames in the raw layout extraction.

## Components

### Buttons

- `Button_1_5`: `423x57px`, radius `28px`, fill `#0E0E0E`, Inter Regular `18px`.
- `Button_1_3`: `423x57px`, radius `28px`, fill `#EFEFEF`, Inter Regular `18px`.
- `Button_1_4`: `423x57px`, radius `28px`, fill `#0C9772`, Inter Regular `18px`.
- `Button_5_1`: `113x47px`, radius `23px`, fill `#FEFEFE`, Inter Regular `17px`.
- `Button_2_20`: `163x53px`, radius `26px`, fill `#FEFEFE`, Inter Regular `20px`.
- `Button_2_21`: `192x53px`, radius `26px`, fill `#FEFEFE`, Inter Regular `16px`.

### Inputs and messaging

- `Input_generated_input_20`: `951x156px`, fill `#F2F2F2`, Inter Regular `15px`, `18px`, and `19px`.
- `Input_2_14`: `973x121px`, radius `27px`, fill `#F4F4F4`, Inter Regular `19px`.
- `ChatInput_4_42`: `944x121px`, radius `26px`, Inter Regular `19px`.
- `MessageInput_5_34`: `942x121px`, radius `24px`, Inter Regular `19px`.

### Cards and content blocks

- `PricingCardFree_1_31`: `485x677px`, radius `5px`; uses Inter Regular `13px` through `20px`, plus `28px` and `50px`.
- `PricingCardPro_1_32`: `484x677px`, radius `5px`; uses Inter Regular `13px` through `20px`, plus `30px` and `53px`.
- `PricingCardPlus_1_30`: `483x717px`, radius `5px`; uses Inter Regular `12px` through `20px`, plus `29px` and `51px`.
- `CodeSnippetDisplay_5_8`: `905x520px`, radius `7px`, fill `#F9F9F9`; uses Inter Regular `15px`, `16px`, `17px`, `18px`, `19px`, `20px`, `21px`, `22px`, and `23px`.
- `QuickActionSuggestionBar_generated_38`: `943x127px`; uses Inter Regular `15px`, `16px`, `17px`, and `20px`.
- `Tag_3_15`: `298x44px`, radius `9px`, fill `#E2E2E2`, Inter Regular `16px`.
- `Avatar_2_1`: `40x40px`, radius `20px`, fill `#7A8BFC`, Inter Regular `17px`.

### Checkboxes and radios

- `CheckBox_generated_checkbox_13`: `173x25px`, fill `#FEFEFE`, Inter Regular `19px`.
- `CheckBox_generated_checkbox_45`: `129x22px`, fill `#FEFEFE`, Inter Regular `17px`.
- `CheckBox_generated_checkbox_43`: `245x22px`, fill `#FEFEFE`, Inter Regular `17px`.
- `CheckBox_generated_checkbox_35`: `795x26px`, fill `#FEFEFE`, Inter Regular `20px`.
- `CheckBox_generated_checkbox_37`: `438x24px`, fill `#FEFEFE`, Inter Regular `19px`.
- `Radio_generated_checkbox_52`: `179x26px`, fill `#FEFEFE`, Inter Regular `18px`.
- `Radio_generated_checkbox_54`: `379x22px`, fill `#FEFEFE`, Inter Regular `17px`.
- `Radio_generated_checkbox_46`: `180x26px`, fill `#F5F9F8`, Inter Regular `16px`.
- `Radio_generated_checkbox_42`: `206x20px`, fill `#FEFEFE`, Inter Regular `16px`.
- `Radio_generated_checkbox_51`: `362x24px`, fill `#F5F9F8`, Inter Regular `17px`.
- `Radio_generated_checkbox_16`: `124x38px`, fill `#F9F9F9`, Inter Regular `16px`.
- `Radio_generated_checkbox_17`: `223x38px`, fill `#F9F9F9`, Inter Regular `17px`.
- `Radio_5_24`: `5x7px`, radius `2px`, image fill.
- `Radio_5_10`: `7x17px`, radius `1px`, image fill.
- `Radio_5_13`: `9x16px`, radius `4px`, image fill.
- `Radio_5_33`: `12x7px`, radius `1px`, image fill.
- `Radio_5_4`: `24x24px`, radius `12px`, image fill.
- `Radio_5_3`: `27x22px`, radius `5px`, image fill.

### Image icons

All icon components use fixed sizing, zero padding, zero gap, horizontal layout, and image fills.

- `Icon_1_29_image`: `30x17px`.
- `Icon_2_15_image`: `40x39px`; `Icon_2_16_image`: `17x25px`; `Icon_2_32_image`: `17x20px`; `Icon_2_33_image`: `21x17px`; `Icon_2_34_image`: `16x18px`; `Icon_2_35_image`: `35x35px`; `Icon_2_36_image`: `31x30px`.
- `Icon_3_3_image`: `24x24px`; `Icon_3_4_image`: `23x22px`; `Icon_3_7_image`: `32x30px`; `Icon_3_9_image`: `24x22px`; `Icon_3_16_image`: `19x18px`; `Icon_3_18_image`: `39x39px`; `Icon_3_19_image`: `17x25px`; `Icon_3_20_image`: `23x25px`; `Icon_3_23_image`: `69x45px`; `Icon_3_25_image`: `19x17px`; `Icon_3_27_image`: `18x17px`; `Icon_3_29_image`: `18x16px`.
- `Icon_4_6_image`: `15x17px`; `Icon_4_7_image`: `16x17px`; `Icon_4_14_image`: `44x44px`; `Icon_4_18_image`: `50x36px`; `Icon_4_20_image`: `33x28px`; `Icon_4_24_image`: `35x29px`; `Icon_4_26_image`: `31x29px`; `Icon_4_29_image`: `34x25px`; `Icon_4_32_image`: `31x22px`; `Icon_4_34_image`: `35x25px`; `Icon_4_38_image`: `31x29px`; `Icon_4_39_image`: `41x41px`; `Icon_4_41_image`: `21x21px`; `Icon_4_43_image`: `46x45px`.
- `Icon_5_11_image`: `18x18px`; `Icon_5_15_image`: `20x18px`; `Icon_5_28_image`: `18x18px`; `Icon_5_29_image`: `19x19px`; `Icon_5_30_image`: `18x19px`; `Icon_5_31_image`: `17x19px`; `Icon_5_32_image`: `17x16px`; `Icon_5_37_image`: `22x29px`; `Icon_5_38_image`: `25x25px`.
- `Icon_6_14_image`: `21x17px`; `Icon_6_15_image`: `43x44px`; `Icon_6_24_image`: `43x44px`; `Icon_6_25_image`: `17x17px`; `Icon_6_26_image`: `19x19px`; `Icon_6_27_image`: `17x19px`; `Icon_6_28_image`: `17x19px`; `Icon_6_30_image`: `40x39px`; `Icon_6_32_image`: `22x25px`; `Icon_6_33_image`: `24x31px`; `Icon_6_35_image`: `30x30px`.

## Screen patterns

### UIKit / Intro

- Fixed frame: `1333x3788px`.
- Background: `#FFFFFF`.
- Outer padding: `160px` on all sides.
- Vertical gap: `88px`.
- Intro header combines a `140x140px` image and a title area in a horizontal row with `40px` gap.
- Main sections use `24px` vertical gaps.
- Capability list uses `14px` gaps.
- CTA frame: `348x104px`, radius `16px`, horizontal padding `31px` and vertical padding `66px` as extracted, with centered content.

### UIKit / Before generation (Image)

- Fixed frame: `12240x3788px`.
- Outer padding: `160px`.
- Vertical gap: `120px`.
- Includes a large `80px` Inter Medium screen label and a decorative image/shapes region.

### UIKit / After generation (Figma design)

- Fixed frame: `17290x3750px`.
- Outer padding: `160px`.
- Vertical gap: `120px`.
- Includes an `80px` Inter Medium screen label and a generated-design content area.
- Generated design header uses a `11926x84px` row with a `16px` trailing padding and a `120px` gap.
- Content columns use `1921x1201px` document regions with `80px` gaps.

## Notes for implementers

- Use only the extracted component family names when mapping UI elements to source components.
- Preserve fixed component dimensions when reproducing the showcased UIKit compositions.
- Do not infer missing semantic color tokens from the raw colors; no local color styles or variables were found.
- Treat the many near-black shades as observed raw values, not as a documented semantic scale.
- Use image assets for the extracted icon families; the source does not provide icon names or semantic labels.
- No responsive behavior, interaction states, elevation, motion, or accessibility specifications were extracted.
