---
name: ebay-ui-screens-community
source: eBay UI Screens (Community)
kind: design-system-context
---

# ebay - Design System

## Overview

- Source page: UIKit.
- No local variable collections, paint styles, color variables, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The extraction contains an Intro presentation, before/after-generation showcase screens, mobile UI screenshots, and generated UI component examples.
- Primary UI component families include buttons, tags, inputs, avatars, tabs, product cards, list items, banners, filters, action buttons, and image icons.

## Design language

- Typography uses Inter Regular extensively for UI text, with Inter Medium in showcase headings and Manrope SemiBold, Bold, and ExtraBold in the Intro presentation.
- The Intro presentation uses bright blue `#4499F8` for headings and calls to action, dark purple `#1F1736` for supporting text, and white `#FFFFFF` for the canvas and button text.
- UI examples use a predominantly monochrome palette with blue accents, pale pink action surfaces, white and near-white surfaces, and gray borders.
- Layout examples use fixed-size mobile compositions at `375px` wide, alongside larger showcase canvases.
- Component layouts are primarily horizontal or vertical fixed-size frames. Most extracted component specs report zero padding and zero gap because internal child geometry was not fully surfaced.

## Color palette

Ranked by raw usage count. No local color tokens or styles were defined.

- `#000000` — 100 uses
- `#010101` — 25 uses
- `#060606` — 24 uses
- `#040404` — 19 uses
- `#070707` — 18 uses
- `#FEFEFE` — 14 uses
- `#020202` — 13 uses
- `#050505` — 13 uses
- `#080808` — 12 uses
- `#030303` — 10 uses
- `#151515` — 9 uses
- `#090909` — 7 uses
- `#FFFFFF` — 7 uses
- `#0F0F0F` — 6 uses
- `#545454` — 6 uses
- `#565656` — 6 uses
- `#595959` — 6 uses
- `#F7F7F7` — 6 uses
- `#FDFDFD` — 6 uses
- `#1F1736` — 5 uses
- `#222222` — 5 uses
- `#505050` — 5 uses
- `#5F5F5F` — 5 uses
- `#F8F8F8` — 5 uses
- `#FCDCED` — 5 uses
- `#181818` — 4 uses
- `#292929` — 4 uses
- `#4499F8` — 4 uses
- `#4F4F4F` — 4 uses
- `#575757` — 4 uses
- `#5C5C5C` — 4 uses
- `#606060` — 4 uses
- `#004CCE` — 3 uses
- `#0050DA` — 3 uses
- `#0153CF` — 3 uses
- `#0556D1` — 3 uses
- `#096FF5` — 3 uses
- `#0D0D0D` — 3 uses
- `#141414` — 3 uses
- `#191919` — 3 uses
- `#232323` — 3 uses
- `#2A000B` — 3 uses
- `#4E4E4E` — 3 uses
- `#585858` — 3 uses
- `#7F7F7F` — 3 uses
- `#828282` — 3 uses
- `#888888` — 3 uses
- `#F6F6F6` — 3 uses
- `#FDFDFC` — 3 uses

Known component color assignments:

- `Tag_2_14`: fill `#FDFDFD`; stroke `#828282`, `1px`.
- `Tag_1_13`: fill `#F6F6F6`; stroke `#000000`, `1px`.
- `Avatar_4_41`: fill `#FDFDFD`.
- `Input_5_34`: fill `#FEFEFE`.
- `Button_1_21`: fill `#FCDCED`.
- `Button_1_23`: fill `#181818`.
- `Button_5_37`: fill `#FEFEFE`; stroke `#0556D1`, `1px`.
- `Button_5_36`: fill `#096FF5`.
- `Button_5_38`: fill `#FEFEFE`; stroke `#0153CF`, `1px`.
- `Button_2_15`: fill `#FEFEFE`; stroke `#7F7F7F`, `1px`.
- `Button_3_10`: fill `#FEFEFE`; stroke `#888888`, `1px`.

## Type scale

No local text styles were found. Raw text is predominantly Inter Regular, ranked by usage:

- Inter Regular `13.33px` — 54 uses
- Inter Regular `8.33px` — 50 uses
- Inter Regular `12.67px` — 47 uses
- Inter Regular `13px` — 31 uses
- Inter Regular `11px` — 25 uses
- Inter Regular `13.67px` — 23 uses
- Inter Regular `11.67px` — 22 uses
- Inter Regular `12.33px` — 19 uses
- Inter Regular `11.33px` — 18 uses
- Inter Regular `14.33px` — 18 uses
- Inter Regular `14.67px` — 16 uses
- Inter Regular `16px` — 14 uses
- Inter Regular `10.67px` — 12 uses
- Inter Regular `12px` — 11 uses
- Inter Regular `14px` — 11 uses
- Inter Regular `19.67px` — 11 uses
- Inter Regular `9px` — 10 uses
- Inter Regular `19.33px` — 8 uses
- Inter Regular `19px` — 7 uses
- Inter Regular `23px` — 7 uses
- Inter Regular `9.67px` — 7 uses
- Inter Regular `23.33px` — 6 uses
- Manrope SemiBold `24px` — 6 uses
- Inter Regular `17px` — 5 uses
- Inter Regular `3.33px` — 5 uses
- Inter Regular `3.67px` — 5 uses
- Inter Regular `4.33px` — 5 uses
- Inter Regular `10.33px` — 4 uses
- Inter Regular `10px` — 4 uses
- Inter Regular `15.33px` — 4 uses
- Inter Regular `15px` — 4 uses
- Inter Regular `16.33px` — 4 uses
- Inter Regular `18.67px` — 4 uses
- Inter Regular `3px` — 4 uses
- Inter Regular `4px` — 4 uses
- Inter Regular `8px` — 4 uses
- Inter Regular `9.33px` — 4 uses
- Inter Regular `15.67px` — 3 uses
- Inter Regular `20.67px` — 3 uses
- Inter Regular `22.67px` — 3 uses
- Intro presentation styles also include Manrope ExtraBold `50px` and `40px`, Manrope Bold `30px`, Inter Medium `80px`, and Inter Regular `40px`.

## Spacing scale

No spacing variables were found. Observed layout values:

- Intro frame padding: `160px` on all sides.
- Intro vertical gaps: `88px`, `24px`, `14px`.
- Intro CTA padding: `31px` vertical and `66px` horizontal; gap `10px`.
- Before/after showcase frame padding: `160px` on all sides; section gap `120px`.
- Showcase internal gaps: `80px`, `20px`, and `84px`.
- Generated mobile screen gap: `24px`.
- Component specs generally report padding `0 0 0 0px` and gap `0px`.

## Radius scale

No radius variables were found. Observed component and layout radii:

- `6px` — `Input_5_34`
- `6.33px` — `Button_2_15`
- `10px` — `Button_1_21`
- `15px` — `Tag_2_14`, `Button_3_10`
- `16px` — Intro CTA frame
- `19.67px` — `Button_1_23`
- `22.67px` — `Button_5_37`, `Button_5_36`, `Button_5_38`

## Elevation & effects

_No effect styles, shadows, blur values, or elevation tokens found in source._

## Components

All component families extracted from the source:

### Buttons and actions

- `ActionButtons_generated_28` — `347x155px`; Inter Regular `15.67px`, `17px`, `16.33px`.
- `Button_1_21` — `142.67x40px`; radius `10px`; fill `#FCDCED`; Inter Regular `14.33px`.
- `Button_1_23` — `117.67x39.33px`; radius `19.67px`; fill `#181818`; Inter Regular `13.33px`.
- `Button_5_36` — `344.33x45.33px`; radius `22.67px`; fill `#096FF5`; Inter Regular `17px`.
- `Button_5_37` — `344.33x45.33px`; radius `22.67px`; fill `#FEFEFE`; stroke `#0556D1`, `1px`; Inter Regular `15.67px`.
- `Button_5_38` — `344.33x45.67px`; radius `22.67px`; fill `#FEFEFE`; stroke `#0153CF`, `1px`; Inter Regular `16.33px`.
- `Button_2_15` — `131x30.33px`; radius `6.33px`; fill `#FEFEFE`; stroke `#7F7F7F`, `1px`; Inter Regular `11px`.
- `Button_3_10` — `80.67x30px`; radius `15px`; fill `#FEFEFE`; stroke `#888888`, `1px`; Inter Regular `10.33px`.

### Inputs, tags, and identity

- `Input_5_34` — `343.67x38.33px`; radius `6px`; fill `#FEFEFE`; Inter Regular `14.33px`.
- `Tag_1_13` — `104x30px`; radius `15px`; fill `#F6F6F6`; stroke `#000000`, `1px`; Inter Regular `13px`.
- `Tag_2_14` — `83.67x30.33px`; radius `15px`; fill `#FDFDFD`; stroke `#828282`, `1px`; Inter Regular `11.67px`.
- `Avatar_4_41` — `374.67x19.33px`; fill `#FDFDFD`; Inter Regular `13.33px`.

### Navigation and filtering

- `CategoryFilterBar_generated_25` — `353x33px`; Inter Regular `11.67px`, `11px`.
- `TabBar_6_178` — `375x76.67px`; Inter Regular `8.33px`, `9px`.
- `TabBar_2_132` — `375x74.33px`; Inter Regular `8.33px`, `9px`.
- `TabBar_3_163` — `375x76.67px`; Inter Regular `8.33px`, `9.33px`, `37px`.
- `TabBar_generated_bottomnavigationbar_1` — `327.67x38.33px`; Inter Regular `9px`, `8.33px`.

### Product and content surfaces

- `ProductListingCard_generated_29` — `346x156.67px`; Inter Regular from `8px` through `14.33px`.
- `ProductShowcase_generated_31` — `318x240px`; Inter Regular `11px`, `12px`, `12.67px`, `13px`, `13.33px`, `13.67px`, `22.67px`, `23.33px`.
- `ProductCard_generated_27` — `354.67x354.33px`; Inter Regular from `10.67px` through `20.67px`.
- `ProductCard_generated_26` — `346.33x216px`; Inter Regular `10.67px`, `11px`, `11.33px`, `11.67px`, `12px`, `13.33px`, `14px`, `19.67px`.
- `ListItem_generated_33` — `328x138.67px`; Inter Regular `11px`, `12.33px`, `12.67px`, `13px`, `13.33px`, `13.67px`, `14px`, `14.33px`.
- `PromotionalBanner_generated_30` — `318.33x123.33px`; Inter Regular `11.33px`, `12.33px`, `12.67px`, `13px`, `13.33px`, `14.33px`, `23px`.

### Image icons

All image icons use fixed sizing, zero padding, and zero gap:

- `Icon_6_73_image` — `20.67x20.67px`
- `Icon_6_70_image` — `20.67x20.67px`
- `Icon_6_71_image` — `20.67x20.67px`
- `Icon_5_43_image` — `21.33x21px`
- `Icon_5_41_image` — `20.67x20.67px`
- `Icon_6_13_image` — `17x17px`
- `Icon_3_56_image` — `30x30px`
- `Icon_4_34_image` — `19x17px`
- `Icon_5_10_image` — `24.33x36px`
- `Icon_4_45_image` — `18.67x20.67px`
- `Icon_5_11_image` — `27.67x35.33px`
- `Icon_4_44_image` — `21.33x21px`
- `Icon_5_21_image` — `36x43.33px`
- `Icon_5_22_image` — `38x37.67px`
- `Icon_5_8_image` — `26x37.33px`
- `Icon_3_12_image` — `30x30px`
- `Icon_5_7_image` — `26x30.33px`
- `Icon_3_13_image` — `30.33x30px`
- `Icon_4_9_image` — `37.33x31.67px`
- `Icon_4_6_image` — `37.33x32px`
- `Icon_4_7_image` — `37.67x31.67px`
- `Icon_2_70_image` — `15x15px`
- `Icon_3_6_image` — `37.33x37.67px`
- `Icon_2_8_image` — `24.33x36.67px`
- `Icon_2_31_image` — `15.33x15px`
- `Icon_1_27_image` — `20.67x20.67px`

## Screen patterns

### Intro

- Canvas: `1333x3624px`; fill `#FFFFFF`.
- Outer padding: `160px`; vertical gap `88px`.
- Header uses a `140x140px` image beside a `833x136px` title.
- Primary headings use Manrope ExtraBold `40px` and `50px` in `#4499F8`.
- Supporting copy uses Manrope SemiBold `24px` in `#1F1736`.
- CTA frame: `348x104px`; radius `16px`; fill `#4499F8`; label uses Manrope Bold `30px` in `#FFFFFF`.

### Before generation

- Presentation frame: `5220x3624px`.
- Outer padding: `160px`; vertical gap `120px`.
- Heading: `1002x97px`; Inter Medium `80px`; fill `#FFFFFF`.
- Contains a large decorative image/shapes area sized `4900x1624px`.

### After generation

- Presentation frame: `5370x3621px`.
- Outer padding: `160px`; vertical gap `120px`.
- Heading: `1219x97px`; Inter Medium `80px`; fill `#FFFFFF`.
- Generated mobile screens are six `375x813.33px` frames arranged with `80px` gaps.
- Generated UI components are organized into three showcase columns sized `720px` wide.
- Component showcase sections use `84px` internal padding and `84px` gaps, with `20px` between section labels and content.

## Notes for implementers

- Prefer the extracted component family names when selecting or implementing reusable UI pieces.
- Use Inter for the product UI unless reproducing the Intro presentation, where Manrope is used for prominent headings and CTA text.
- Preserve the source’s exact fractional dimensions where a component is being matched to the extracted design.
- Treat the raw color list as observed paint usage, not as named semantic tokens; no local token naming exists.
- Use the explicitly documented component fills, strokes, and radii for buttons, inputs, and tags.
- Do not infer shadows, motion, grids, or spacing variables; none were present in the extraction.
- The extraction contains many near-identical near-black, gray, and near-white colors. Choose the listed value that matches the target component or screen rather than introducing a new color.
