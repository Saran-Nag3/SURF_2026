---
name: adobe-ul-screens-community
source: Adobe Ul Screens (Community)
kind: design-system-context
---

# adobe - Design System

## Overview

- Source: Adobe Ul Screens (Community)
- Figma pages: Page 1 and UIKit
- Extracted screens: UIKit / Intro, Before generation (Image), After generation (Figma design)
- No local variables, paint styles, text styles, spacing styles, radius styles, motion tokens, effect styles, or grid styles were found.
- Primary typefaces: Inter Regular and Manrope SemiBold.
- The extraction is predominantly grayscale, with #3C6957 appearing as a green accent.

## Design language

- Interface styling is predominantly grayscale with high-contrast black, white, and near-black tones.
- Typography is compact in reusable UI components, primarily using Inter from 8px through 17px.
- Large presentation headings use Manrope at 24px in the extracted typography tokens.
- Controls commonly use pill-shaped geometry with radii of 11px, 14px, 15px, and 18px.
- Image-based icon components use fixed dimensions and no internal padding or gap.
- Layouts use fixed-size frames extensively; many extracted components have zero padding and zero gap.
- The UIKit intro presentation uses large spacing values, including 160px outer padding and 88px or 120px section gaps.

## Color palette

Raw, unstyled colors ranked by reported usage:

| Color | Uses |
|---|---:|
| #000000 | 112 |
| #FEFEFE | 33 |
| #010101 | 27 |
| #030303 | 24 |
| #FFFFFF | 22 |
| #020202 | 21 |
| #0D0D0D | 17 |
| #070707 | 16 |
| #080808 | 16 |
| #0C0C0C | 16 |
| #0E0E0E | 15 |
| #111111 | 15 |
| #121212 | 15 |
| #0B0B0B | 14 |
| #212121 | 14 |
| #060606 | 13 |
| #0F0F0F | 12 |
| #F9F9F9 | 12 |
| #050505 | 11 |
| #101010 | 11 |
| #171717 | 11 |
| #181818 | 11 |
| #202020 | 11 |
| #1D1D1D | 10 |
| #262626 | 10 |
| #323232 | 10 |
| #040404 | 9 |
| #1A1A1A | 9 |
| #353535 | 9 |
| #4A4A4A | 9 |
| #4C4C4C | 9 |
| #131313 | 8 |
| #161616 | 8 |
| #4E4E4E | 8 |
| #F7F7F7 | 8 |
| #1C1C1C | 7 |
| #1E1E1E | 7 |
| #232323 | 7 |
| #282828 | 7 |
| #2A2A2A | 7 |
| #4B4B4B | 7 |
| #545454 | 7 |
| #676767 | 7 |
| #696969 | 7 |
| #090909 | 6 |
| #0A0A0A | 6 |
| #1B1B1B | 6 |
| #252525 | 6 |
| #292929 | 6 |
| #303030 | 6 |
| #363636 | 6 |
| #373737 | 6 |
| #393939 | 6 |
| #3C6957 | 6 |
| #3F3F3F | 6 |
| #404040 | 6 |
| #4D4D4D | 6 |
| #5F5F5F | 6 |
| #656565 | 6 |
| #707070 | 6 |
| #767676 | 6 |
| #E6E6E6 | 6 |
| #E7E7E7 | 6 |
| #F2F2F2 | 6 |
| #F6F6F6 | 6 |
| #F7F7F7 | 8 |
| #F9F9F9 | 12 |
| #FEFEFE | 33 |
| #FFFFFF | 22 |

Usage guidance:

- Use #000000 as the most frequently observed dark color.
- Use #FEFEFE and #FFFFFF for light surfaces and text.
- Use #F2F2F2, #F6F6F6, #F7F7F7, and #F9F9F9 for light control fills.
- Use #3C6957 as the observed accent color.
- Use #323232 for the observed button stroke.
- Use #696969 for the observed dark-surface stroke.

## Type scale

| Typeface | Weight | Size | Uses |
|---|---|---:|---:|
| Manrope | SemiBold | 24px | 6 |
| Inter | Regular | 11px | 197 |
| Inter | Regular | 10px | 188 |
| Inter | Regular | 12px | 154 |
| Inter | Regular | 8px | 131 |
| Inter | Regular | 13px | 94 |
| Inter | Regular | 9px | 78 |
| Inter | Regular | 16px | 55 |
| Inter | Regular | 14px | 38 |
| Inter | Regular | 15px | 30 |
| Inter | Regular | 17px | 6 |

Type hierarchy from the extraction:

- Display: Manrope SemiBold, 24px.
- Large UI text: Inter Regular, 17px and 16px.
- Standard UI text: Inter Regular, 15px, 14px, 13px, and 12px.
- Compact labels and metadata: Inter Regular, 11px, 10px, 9px, and 8px.

## Spacing scale

Observed layout spacing values:

- 0px: component padding and gaps.
- 10px: control padding and gaps.
- 14px: list-item gap.
- 16px: frame padding.
- 24px: vertical section gap.
- 31px: button/frame horizontal padding.
- 40px: intro header gap.
- 66px: intro button horizontal padding.
- 80px: large presentation gap.
- 88px: intro section gap.
- 120px: presentation section gap.
- 160px: presentation frame padding.

No reusable spacing variables were defined.

## Radius scale

Observed corner radii:

- 1px: Avatar_3_7.
- 2px: AdobeExpressTemplates_1_63.
- 3px: LibraryList_4_10 and Button_6_5.
- 4px: Tag_6_16.
- 6px: GenerativeAIPrompt_1_66 and LibraryCard_3_28.
- 7px: LibraryCard_3_30.
- 8px: Avatar_3_3.
- 9px: Button_1_48.
- 11px: Button_2_69 and Button_2_45.
- 14px: Button_6_23.
- 15px: Button_4_54, Button_5_16, and Button_5_26.
- 16px: Intro presentation button.
- 18px: Input_2_1 and an extracted generated-design frame.
- 43px: extracted generated-design frame.
- 99px: LibraryCard_3_29.
- 136px: SubscriptionCard_5_13.

## Elevation & effects

_None found in source._

## Components

### Composite components

| Component | Size | Radius | Fill | Stroke | Text |
|---|---:|---:|---|---|---|
| LibraryList_4_10 | 1310x235px | 3px | — | — | Inter Regular, 10px–29px |
| OrderSummary_generated_50 | 343x111px | — | — | — | Inter Regular, 8px–17px |
| FreeTrialTerms_generated_51 | 332x90px | — | — | — | Inter Regular, 12px–14px |
| CartSummary_generated_49 | 330x371px | — | — | — | Inter Regular, 8px–16px |
| AdobeExpressTemplates_1_63 | 496x212px | 2px | — | — | Inter Regular, 10px–16px |
| GenerativeAIPrompt_1_66 | 496x205px | 6px | — | — | Inter Regular, 8px–15px |
| PaymentMethodSelection_generated_48 | 392x171px | — | — | — | Inter Regular, 10px–13px |
| RecentFilesSection_generated_47 | 821x217px | — | — | — | Inter Regular, 6px–15px |
| SubscriptionCard_5_13 | 272x321px | 136px | — | — | Inter Regular, 9px–29px |
| UserProfileSection_generated_avatar_5 | 294x68px | — | — | — | Inter Regular, 13px–16px |
| ApplicationLauncher_generated_44 | 437x201px | — | — | — | Inter Regular, 9px–48px |
| LibraryCard_3_28 | 197x233px | 6px | — | — | Inter Regular, 9px–12px |
| LibraryCard_3_29 | 198x235px | 99px | — | — | Inter Regular, 8px–12px |
| LibraryCard_3_30 | 198x235px | 7px | — | — | Inter Regular, 9px–44px |

### Controls

| Component | Size | Radius | Fill | Stroke | Text |
|---|---:|---:|---|---|---|
| Tag_6_16 | 79x23px | 4px | #FEFEFE | #3C6957, 1px | Inter Regular, 9px |
| CheckBox_generated_checkbox_13 | 131x23px | — | #F2F2F2 | — | Inter Regular, 10px |
| CheckBox_generated_checkbox_11 | 121x23px | — | #FEFEFE | — | Inter Regular, 12px |
| CheckBox_generated_checkbox_16 | 278x20px | — | #FEFEFE | — | Inter Regular, 12px |
| CheckBox_generated_checkbox_33 | 73x30px | — | #FEFEFE | — | Inter Regular, 11px |
| CheckBox_generated_checkbox_32 | 74x30px | — | #FEFEFE | — | Inter Regular, 12px |
| CheckBox_generated_checkbox_36 | 174x30px | — | #FEFEFE | — | Inter Regular, 11px |
| CheckBox_generated_checkbox_35 | 131x30px | — | #FEFEFE | — | Inter Regular, 12px |
| Radio_generated_checkbox_10 | 57x24px | — | #FEFEFE | — | Inter Regular, 12px |
| Input_2_1 | 243x37px | 18px | #FEFEFE | — | Inter Regular, 10px–11px |
| Button_6_23 | 142x28px | 14px | #E6E6E6 | — | Inter Regular, 12px |
| Button_4_54 | 144x30px | 15px | #FEFEFE | — | Inter Regular, 14px |
| Button_2_69 | 53x23px | 11px | #F9F9F9 | — | Inter Regular, 11px |
| Button_2_45 | 81x22px | 11px | #F7F7F7 | #323232, 1px | Inter Regular, 12px |
| Button_6_5 | 78x23px | 3px | #FEFEFE | — | Inter Regular, 9px |
| Button_5_16 | 92x30px | 15px | #F6F6F6 | — | Inter Regular, 12px |
| Button_5_26 | 104x30px | 15px | #FEFEFE | — | Inter Regular, 12px |
| Button_1_48 | 64x19px | 9px | #E7E7E7 | — | Inter Regular, 8px |

### Avatars

- Avatar_3_3: 17x16px, 8px radius, image fill.
- Avatar_3_7: 14x14px, 1px radius, image fill.
- UserProfileSection_generated_avatar_5 uses the composite specification above.

### Image icons

All icon components use fixed sizing, 0px padding, 0px gap, and image fills.

- 15x15px: Icon_3_24_image, Icon_2_18_image, Icon_1_6_image.
- 15x16px: Icon_3_14_image, Icon_3_36_image, Icon_4_17_image.
- 15x17px: Icon_4_9_image.
- 16x15px: Icon_3_19_image.
- 16x17px: Icon_3_27_image, Icon_2_15_image.
- 17x15px: Icon_3_15_image.
- 17x16px: Icon_3_38_image, Icon_1_4_image.
- 17x17px: Icon_3_22_image.
- 18x17px: Icon_4_31_image.
- 18x22px: Icon_5_0_image.
- 22x16px: Icon_6_13_image.
- 22x20px: Icon_4_2_image.
- 22x22px: Icon_1_5_image.
- 23x19px: Icon_2_121_image.
- 23x22px: Icon_5_19_image, Icon_5_14_image, Icon_6_6_image.
- 24x22px: Icon_5_32_image, Icon_6_15_image.
- 25x23px: Icon_2_31_image.
- 27x27px: Icon_2_105_image, Icon_2_82_image, Icon_2_83_image, Icon_2_58_image, Icon_2_32_image, Icon_2_33_image.
- 28x27px: Icon_2_107_image, Icon_2_57_image, Icon_2_60_image.
- 29x40px: Icon_3_25_image, Icon_1_11_image.
- 29x42px: Icon_2_24_image.
- 45x55px: Icon_1_64_image.
- 48x51px: Icon_1_75_image.
- 55x83px: Icon_1_42_image.
- 56x57px: Icon_6_26_image.
- 58x85px: Icon_1_45_image.
- 60x60px: Icon_1_14_image.
- 60x72px: Icon_1_44_image.
- 60x83px: Icon_1_41_image.
- 61x83px: Icon_1_40_image.
- 63x70px: Icon_1_28_image.

## Screen patterns

### UIKit / Intro

- Fixed frame: 1333x3448px.
- Outer padding: 160px on all sides.
- Vertical section gap: 88px.
- White background: #FFFFFF.
- Intro header combines a 140x140px image with a large heading.
- Header image-to-heading gap: 40px.
- Content sections use 24px vertical gaps.
- Primary presentation button: 348x104px, 16px radius, with 31px vertical and 66px horizontal padding.
- Repeated content headings and body copy form stacked explanatory sections.

### UIKit / Before generation (Image)

- Fixed frame: 9360x3448px.
- Outer padding: 160px on all sides.
- Vertical gap: 120px.
- Dark surface: #393939.
- Border: #696969, 1px.
- Heading is positioned above a large horizontal image/content area.
- Main content area uses an 80px gap and contains decorative image shapes.

### UIKit / After generation (Figma design)

- Fixed frame: 14227x3448px.
- Outer padding: 160px on all sides.
- Vertical gap: 120px.
- Dark surface: #2A2A2A.
- Heading is positioned above a generated-design showcase.
- Showcase content is arranged horizontally with an 80px gap.
- The generated-design header uses a 1px light stroke and a 120px horizontal gap.
- Repeated document previews use 1440x901px frames.
- Generated preview controls include a 243x37px, 18px-radius input pattern.

## Notes for implementers

- Treat the listed values as observed fixed dimensions, not responsive rules; no responsive constraints or breakpoints were extracted.
- Prefer the named component families rather than recreating equivalent controls.
- Preserve exact component dimensions when reproducing UIKit examples.
- Use Inter Regular for the compact component UI and Manrope SemiBold for the 24px display style.
- Use #000000, #FEFEFE, and #FFFFFF as the dominant contrast colors; use #3C6957 only where an accent or tag stroke is required.
- Component fills and strokes should follow the component table exactly.
- Do not infer shadows, gradients, transitions, or motion; none were extracted.
- Icon assets are image-backed components. Preserve their fixed dimensions and do not add padding or gaps unless a containing layout explicitly specifies them.
