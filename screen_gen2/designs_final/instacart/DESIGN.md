---
name: instacart-ui-screens-community
source: Instacart UI Screens (Community) / UIKit
kind: design-system-context
---

# instacart - Design System

## Overview

Community UIKit extraction for Instacart mobile commerce screens and supporting presentation frames. The source includes search, store listings, cart, delivery, promotion, donation, order confirmation, product, tab bar, tag, checkbox, button, and image-icon components.

No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- **Typography:** Primarily Inter Regular across interface components, with Manrope SemiBold used for prominent introductory content.
- **Color character:** Predominantly black, white, near-white, neutral gray, green action colors, yellow promotional accents, and blue presentation accents.
- **Controls:** Rounded buttons are common, ranging from compact pill controls to large full-width CTAs.
- **Composition:** Mobile layouts use fixed-width components around 375px-wide screens, with stacked content blocks and persistent bottom tab bars.
- **Imagery:** Image-based icon components are used at fixed dimensions with no internal padding or gaps.
- **Presentation content:** Introductory presentation frames use blue headings, dark purple body text, white backgrounds, and blue CTA surfaces.

## Color palette

Ranked by reported raw usage:

| Color | Uses | Typical role |
|---|---:|---|
| `#000000` | 64 | Primary dark content |
| `#000001` | 14 | Near-black content |
| `#FEFEFE` | 14 | Near-white surfaces and controls |
| `#010101` | 13 | Near-black content |
| `#030303` | 12 | Dark content and borders |
| `#020202` | 10 | Near-black content |
| `#FFFFFF` | 10 | White surfaces and text |
| `#17191A` | 9 | Dark neutral content and border |
| `#E8EAEB` | 8 | Light neutral surfaces and controls |
| `#000101` | 7 | Near-black content |
| `#030304` | 6 | Near-black content |
| `#494949` | 6 | Secondary dark neutral |
| `#F7F7F7` | 6 | Light neutral surface |
| `#FCFEFC` | 6 | Near-white surface |
| `#010102` | 5 | Near-black content |
| `#010204` | 5 | Near-black content |
| `#080808` | 5 | Dark content |
| `#0B0B0B` | 5 | Dark content |
| `#1F1736` | 5 | Introductory body text |
| `#000100` | 4 | Near-black content |
| `#010000` | 4 | Near-black content |
| `#010103` | 4 | Near-black content |
| `#050606` | 4 | Dark content |
| `#060606` | 4 | Dark content |
| `#0A0A0A` | 4 | Dark content |
| `#131516` | 4 | Dark neutral content |
| `#151617` | 4 | Dark neutral content |
| `#333333` | 4 | Neutral content |
| `#3B3B3D` | 4 | Neutral content |
| `#3C3E40` | 4 | Neutral content |
| `#3F4142` | 4 | Neutral content |
| `#444444` | 4 | Neutral content |
| `#4499F8` | 4 | Introductory headings and CTA |
| `#454545` | 4 | Neutral content |

Component-specific fills and strokes:

- `#108910`: primary large CTA fill.
- `#0F710C`: primary button fill with `#F1F1F0` 1px stroke.
- `#FED923`: promotional tag fill.
- `#FEEFBC`, `#FEEFBD`: promotional button fills.
- `#F6F8F9`: checkbox surface.
- `#F1F1F0`: button stroke.
- `#FEFEFE`: white button and checkbox fills.
- `#030303`: button stroke.
- `#17191A`: button stroke.

## Type scale

### Primary interface type

Inter Regular is the dominant interface face.

Most-used sizes:

- `12px` — 107 uses
- `11.67px` — 102 uses
- `12.33px` — 63 uses
- `12.67px` — 49 uses
- `13.67px` — 40 uses
- `11.33px` — 29 uses
- `11px` — 28 uses
- `14.33px` — 28 uses
- `10px` — 27 uses
- `9.67px` — 26 uses
- `14px` — 21 uses
- `16px` — 20 uses
- `13px` — 19 uses
- `19px` — 16 uses
- `10.67px` — 15 uses
- `9.33px` — 15 uses
- `10.33px` — 14 uses
- `13.33px` — 14 uses
- `8.33px` — 11 uses
- `8.67px` — 9 uses
- `14.67px` — 7 uses
- `18.67px` — 7 uses
- `18.33px` — 6 uses
- `9px` — 6 uses
- `17.67px` — 5 uses
- `18px` — 5 uses
- `19.67px` — 5 uses
- `3.67px` — 4 uses

### Display and presentation type

- Manrope SemiBold, `24px` — 6 uses.
- Introductory presentation headings use Manrope ExtraBold at `50px` and `40px`.
- Introductory presentation body uses Manrope SemiBold at `24px`.
- Introductory CTA text uses Manrope Bold at `30px`.
- Presentation labels use Inter Medium at `80px`.
- Presentation generated-design title uses Inter Regular at `40px`.

## Spacing scale

_None found in source._

Observed component layout values are zero internal padding and zero gap for the extracted component families. Screen-level layouts include:

- Intro frame padding: `160px` on all sides; vertical gap `88px`.
- Intro content frame gap: `24px`.
- Capability list gap: `14px`.
- Intro CTA padding: `31px 66px 31px 66px`; gap `10px`.
- Before/after presentation frame padding: `160px` on all sides; vertical gap `120px`.
- Generated-design presentation gap: `80px`.
- Mobile document frame gap: `24px`.

## Radius scale

No radius variables were found. Observed component radii:

- `6.33px`: `OrderConfirmationSummary_7_6`, `CheckBox_8_29`
- `7.33px`: `RestaurantCreditPromotionCard_1_17`, `Button_5_20`, `Button_5_30`
- `7.67px`: `Button_3_12`
- `8px`: `DeliveryDetails_7_14`
- `8.67px`: `Tag_3_11`
- `10px`: `DonationCard_1_46`
- `11.33px`: `Button_2_41`
- `12.33px`: `Button_2_33`
- `14.33px`: `ProductCard_2_20`
- `14.67px`: `Button_1_18`
- `16px`: Intro CTA frame
- `17.67px`: `Button_8_5`
- `18px`: `Button_6_26`
- `18.67px`: observed mobile component frame
- `23.33px`: `ShoppingCartButton_3_55`
- `26.67px`: `Button_6_26`

## Elevation & effects

_None found in source._

No local effect styles, shadows, blur values, or elevation tokens were extracted.

## Components

Use only the named component families below. Extracted components use fixed sizing, zero padding, and zero gap unless otherwise specified.

### Search, commerce, delivery, and summary components

- `SearchBarWithSuggestions_generated_21` — `347x92px`; Inter Regular at `12px`, `12.33px`, `11.67px`.
- `StoreListingWithDiscount_generated_36` — `325.33x149.67px`; Inter Regular from `8.33px` through `14px`.
- `ShoppingCartButton_3_55` — `166x93.33px`; radius `23.33px`; Inter Regular at `13.33px`, `12.33px`.
- `InstacartPlusPromotionCard_generated_35` — `334.67x126.33px`; Inter Regular at `14.33px`, `12px`, `11px`, `13.67px`, `14px`, `15px`.
- `DeliveryOptions_generated_34` — `346.33x205.33px`; Inter Regular from `9.67px` through `13.33px`.
- `DonationCard_1_46` — `319.67x134px`; radius `10px`; Inter Regular at `12px`, `17.67px`, `18.33px`, `18.67px`, `19px`.
- `DeliveryAddressSelection_generated_33` — `339x72px`; Inter Regular from `11.67px` through `19.67px`.
- `DeliveryDetails_7_14` — `343.33x210px`; radius `8px`; Inter Regular from `9.67px` through `14.33px`.
- `DeliveryDetails_generated_31` — `317.33x174.33px`; Inter Regular from `9.67px` through `14.33px`.
- `CartSummary_generated_29` — `346.67x79.33px`; Inter Regular at `10px`, `11.67px`, `12px`, `12.33px`, `12.67px`, `19.67px`.
- `OrderConfirmationSummary_7_6` — `343.33x140px`; radius `6.33px`; Inter Regular from `9.67px` through `19px`.
- `OrderConfirmationSummary_generated_30` — `316x108px`; Inter Regular from `9.67px` through `19px`.

### Promotion and product components

- `PromotionCard_generated_28` — `293x78.67px`; Inter Regular at `9.67px`, `10px`, `10.33px`, `11.67px`, `12px`, `12.33px`.
- `RestaurantCreditPromotionCard_1_17` — `344.67x76.33px`; radius `7.33px`; Inter Regular from `9px` through `16.33px`.
- `ProductCard_generated_27` — `349x77.33px`; Inter Regular at `5px`, `7.67px`, `9.67px`, `11px`, `11.33px`, `12px`, `12.33px`, `12.67px`, `13px`, `13.33px`.
- `ProductCard_2_20` — `119.33x122.67px`; radius `14.33px`; Inter Regular at `3.67px`, `9.33px`, `9.67px`, `26.67px`.

### Navigation, tags, and selection controls

- `TabBar_1_155` — `375x76.33px`; Inter Regular at `8.33px`, `10px`, `10.33px`.
- `TabBar_2_149` — `375x74px`; Inter Regular at `8.67px`, `9.67px`, `10px`, `10.33px`, `10.67px`.
- `Tag_4_33` — `74x21px`; fill `#FED923`; Inter Regular `12.67px`.
- `Tag_3_11` — `173.67x30px`; radius `8.67px`; fill `#E8EAEB`; Inter Regular `12.33px`.
- `CheckBox_generated_checkbox_5` — `112.33x12px`; fill `#FEFEFE`; Inter Regular `13.33px`.
- `CheckBox_generated_checkbox_4` — `141.67x12px`; fill `#FEFEFE`; Inter Regular `13px`.
- `CheckBox_8_29` — `288.67x13px`; radius `6.33px`; fill `#F6F8F9`; Inter Regular `12.33px`.

### Buttons

- `Button_7_24` — `68x36px`; radius `18px`; fill `#E8EAEB`; Inter Regular `13.67px`.
- `Button_6_26` — `344.33x53.33px`; radius `26.67px`; fill `#108910`; Inter Regular `19px`.
- `Button_2_33` — `249.67x52.67px`; radius `12.33px`; fill `#0F710C`; stroke `#F1F1F0` `1px`; Inter Regular `13.33px`.
- `Button_2_41` — `48x22.67px`; radius `11.33px`; fill `#FEFEFE`; Inter Regular `12.33px`.
- `Button_8_5` — `63x35.67px`; radius `17.67px`; fill `#FEFEFE`; stroke `#17191A` `1px`; Inter Regular `14.33px`.
- `Button_1_18` — `91.67x29.67px`; radius `14.67px`; fill `#FEFEFE`; stroke `#030303` `1px`; Inter Regular `12px`.
- `Button_5_20` — `151.67x32.33px`; radius `7.33px`; fill `#FEEFBD`; Inter Regular `12px`.
- `Button_5_30` — `151.67x33.67px`; radius `7.33px`; fill `#FEEFBC`; Inter Regular `12.33px`.
- `Button_3_12` — `157.33x29px`; radius `7.67px`; fill `#E8EAEB`; Inter Regular `12px`.

### Image icons

All image-icon families use fixed sizing, zero padding, zero gap, and image fills.

- `Icon_8_4_image` — `33.67x34px`
- `Icon_3_56_image` — `26x26px`
- `Icon_6_3_image` — `33.33x33.67px`
- `Icon_5_17_image` — `36.33x36.67px`
- `Icon_5_28_image` — `36.33x36.33px`
- `Icon_4_9_image` — `35.67x35.67px`
- `Icon_1_33_image` — `41.33x41.33px`
- `Icon_1_30_image` — `64x47.67px`
- `Icon_1_31_image` — `65x48.33px`
- `Icon_1_32_image` — `64x47.67px`
- `Icon_2_4_image` — `38.33x38.67px`
- `Icon_2_5_image` — `38x37.67px`
- `Icon_1_19_image` — `65x48.33px`
- `Icon_1_10_image` — `45.33x45.33px`
- `Icon_1_22_image` — `65x48.67px`
- `Icon_1_20_image` — `65x48.67px`
- `Icon_1_21_image` — `65x48.67px`
- `Icon_6_11_image` — `19x18.67px`
- `Icon_6_22_image` — `16.33x16px`
- `Icon_7_3_image` — `36x36px`
- `Icon_4_34_image` — `16x15.67px`
- `Icon_4_46_image` — `17x16.67px`
- `Icon_2_49_image` — `19x16.67px`
- `Icon_2_47_image` — `15.33x19px`
- `Icon_5_6_image` — `26x27px`
- `Icon_4_11_image` — `36.67x36px`
- `Icon_4_10_image` — `36x36.33px`
- `Icon_2_34_image` — `25.33x25.33px`
- `Icon_1_9_image` — `54.67x38px`
- `Icon_1_8_image` — `45x45px`
- `Icon_1_4_image` — `19x18.67px`

## Screen patterns

- **Mobile commerce screen:** Use a `375px`-wide document with stacked content blocks. `TabBar_1_155` and `TabBar_2_149` are both `375px` wide and occupy the bottom-navigation region.
- **Search and browse:** Combine `SearchBarWithSuggestions_generated_21`, `StoreListingWithDiscount_generated_36`, `ProductCard_generated_27`, `ProductCard_2_20`, and promotional cards.
- **Cart and checkout:** Combine `ShoppingCartButton_3_55`, `CartSummary_generated_29`, `DeliveryAddressSelection_generated_33`, `DeliveryOptions_generated_34`, delivery details, checkboxes, and a large CTA such as `Button_6_26`.
- **Promotions and donations:** Use `Tag_4_33`, `Tag_3_11`, `PromotionCard_generated_28`, `InstacartPlusPromotionCard_generated_35`, `RestaurantCreditPromotionCard_1_17`, and `DonationCard_1_46`.
- **Order confirmation:** Use one of the order confirmation summary components with delivery details and a persistent tab bar where applicable.
- **Introductory presentation:** White background, blue `#4499F8` headings and CTA, dark purple `#1F1736` body text, and generous `160px` frame padding.
- **Generated-design presentation:** Large fixed presentation frames contain multiple `375x813.33px` mobile documents separated by `80px`.

## Notes for implementers

- Prefer the exact named component family over recreating a similar component.
- Preserve fractional dimensions; the extraction contains many non-integer sizes.
- Use fixed dimensions for the extracted component families. Their reported sizing mode is fixed width and fixed height.
- Keep component padding and gap at `0px` unless a screen pattern explicitly specifies otherwise.
- Use Inter Regular for interface text unless the presentation context explicitly calls for Manrope.
- Use the reported component fill and stroke colors exactly; do not substitute colors.
- Do not infer missing spacing, radius, elevation, motion, or text-style tokens.
- Image icons are identified by family name and image fill; no semantic icon mapping was provided.
