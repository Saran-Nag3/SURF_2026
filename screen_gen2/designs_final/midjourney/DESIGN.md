---
name: midjourney-ui-screens-community
source: Midjourney UI Screens (Community) / UIKit
kind: design-system-context
---

# midjourney - Design System

## Overview

- Source page: UIKit.
- Screens shown:
  - **Intro:** white canvas, blue headings, dark purple supporting text, and a blue rounded “Download Now” CTA.
  - **Before generation (Image):** large dark presentation canvas with a white heading and image-based content.
  - **After generation (Figma design):** large dark presentation canvas with white heading, green 1px border, generated-design content, and multiple 1440×901 design documents.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- The UI uses Inter Regular for the majority of interface text.
- Intro and promotional content uses Manrope SemiBold, Manrope Bold, and Manrope ExtraBold.
- Interface surfaces are predominantly near-white and light gray, contrasted with black, charcoal, and dark blue-purple text.
- Primary promotional emphasis uses blue `#4499F8`.
- Controls use compact fixed dimensions with frequent pill radii of 12px, 14px, 16px, 17px, 22px, and 25px.
- Image assets are represented as fixed-size image icons or avatars.
- Layouts use fixed-size frames, explicit gaps, and large presentation-canvas padding.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role indication |
|---|---:|---|
| `#000000` | 25 | Black text or strokes |
| `#FDFDFD` | 13 | Near-white component surfaces |
| `#F1F2F4` | 11 | Light gray surfaces |
| `#F2F3F5` | 10 | Light gray controls and inputs |
| `#FCFCFC` | 10 | Near-white controls and avatars |
| `#FFFFFF` | 10 | White canvas, text, and surfaces |
| `#000002` | 7 | Near-black content |
| `#2E2F31` | 7 | Dark neutral content |
| `#343539` | 7 | Dark neutral stroke/content |
| `#3A3B3D` | 7 | Dark neutral content |
| `#010103` | 6 | Near-black content |
| `#444446` | 6 | Dark gray content |
| `#F7F7F7` | 6 | Light neutral surface |
| `#1F1736` | 5 | Intro supporting text |
| `#2B2B2B` | 5 | Dark neutral content |
| `#333436` | 5 | Dark neutral content |
| `#3C3D41` | 5 | Dark neutral content |
| `#020204` | 4 | Near-black content |
| `#1A1A1C` | 4 | Dark neutral content |
| `#262626` | 4 | Dark neutral content |
| `#2D2C32` | 4 | Dark neutral content |
| `#3A393F` | 4 | Dark neutral content |
| `#4499F8` | 4 | Primary blue emphasis |
| `#FCEDEC` | 4 | Pale pink control surface |
| `#FEFFFA` | 4 | Off-white stroke/surface |

## Type scale

### Inter Regular

Ranked by usage:

- 13px — 196 uses
- 14px — 159 uses
- 12px — 122 uses
- 15px — 56 uses
- 16px — 37 uses
- 10px — 26 uses
- 11px — 19 uses
- 17px — 10 uses
- 22px — 10 uses
- 18px — 9 uses
- 21px — 6 uses
- 34px — 4 uses

### Other observed text styles

- Manrope SemiBold, 24px — 6 uses.
- Manrope ExtraBold, 40px — intro headings.
- Manrope ExtraBold, 50px — intro title.
- Manrope Bold, 30px — “Download Now” CTA.
- Inter Medium, 80px — presentation-canvas headings.

### Hierarchy

- 80px Inter Medium — presentation headings.
- 50px Manrope ExtraBold — intro title.
- 40px Manrope ExtraBold — intro section headings.
- 34px Inter Regular — large interface text.
- 30px Manrope Bold — CTA label.
- 24px Manrope SemiBold — intro supporting and capability text.
- 22px Inter Regular — large interface text.
- 21px Inter Regular — large interface text.
- 18px Inter Regular — prominent button text.
- 17px Inter Regular — large interface text.
- 16px Inter Regular — standard interface text.
- 15px Inter Regular — medium interface text.
- 14px Inter Regular — standard control text.
- 13px Inter Regular — most common compact interface text.
- 12px Inter Regular — compact interface text.
- 11px Inter Regular — small labels.
- 10px Inter Regular — smallest labels.

## Spacing scale

No spacing variables were found.

Observed explicit layout values:

- 0px padding and gap are used by many fixed-size components and icons.
- 10px gap appears in controls and intro CTA padding.
- 14px gap appears between capability items.
- 24px gap appears between intro heading and supporting content.
- 31px and 66px horizontal padding appear in the intro CTA.
- 40px gap appears in the intro title row.
- 80px gap appears in presentation content layouts.
- 88px gap appears between intro sections.
- 120px gap appears between presentation sections.
- 160px outer padding appears on the intro and presentation canvases.

## Radius scale

Observed radii:

- 1px, 2px, 3px, 4px, 5px, 6px, 8px, 9px, 12px, 14px, 16px, 17px, 22px, 25px, 90px, and 217px.
- Component radii:
  - `Avatar_6_15`: 12px.
  - `Avatar_6_47`: 3px.
  - `Button_2_178`: 16px.
  - `Button_2_10`: 6px.
  - `Button_2_203`: 5px.
  - `Button_2_236`: 6px.
  - `Button_2_237`: 12px.
  - `Button_5_1`: 14px.
  - `Input_4_27`: 25px.
  - `Button_2_2`: 5px.
  - `Button_4_28`: 22px.
  - `Button_1_6`: 17px.
  - `Button_3_36`: 4px.
  - `Button_3_4`: 4px.
  - `Button_3_17`: 17px.
  - `Tag_6_44`: no radius specified.
  - `Avatar_6_22`: 12px.

## Elevation & effects

_Elevation, shadows, blur, and local effect styles were not found in source._

Observed strokes:

- `Button_2_10`: `#FEFFFA`, 1px.
- `Tag_6_44`: `#343539`, 1px.
- `Button_3_36`: `#000000`, 1px.
- Presentation-canvas borders and internal separators are present in the source, but their extracted colors are outside the permitted palette and are not specified here.

## Components

### Icons

All icons are fixed-size image assets with 0px padding and 0px gap.

- `Icon_2_227_image`: 17×20px.
- `Icon_2_217_image`: 20×20px.
- `Icon_5_36_image`: 17×17px.
- `Icon_5_64_image`: 17×17px.
- `Icon_5_66_image`: 17×17px.
- `Icon_6_3_image`: 15×15px.
- `Icon_5_24_image`: 17×17px.
- `Icon_5_28_image`: 17×18px.
- `Icon_3_18_image`: 15×15px.
- `Icon_3_11_image`: 16×15px.
- `Icon_1_93_image`: 17×17px.
- `Icon_3_39_image`: 17×18px.
- `Icon_3_38_image`: 20×20px.
- `Icon_1_142_image`: 17×18px.
- `Icon_6_12_image`: 16×16px.
- `Icon_4_29_image`: 16×17px.
- `Icon_4_26_image`: 17×17px.
- `Icon_4_31_image`: 18×18px.
- `Icon_4_30_image`: 21×19px.
- `Icon_5_8_image`: 19×18px.
- `Icon_5_3_image`: 16×15px.
- `Icon_1_3_image`: 17×16px.
- `Icon_1_4_image`: 16×16px.

### Messaging and layout modules

- `ChatMessage_generated_59`: 163×721px; fixed width and height; uses Inter Regular at 10px, 11px, 12px, 13px, and 14px.
- `RoomListItem_generated_54`: 1179×61px; fixed width and height; uses Inter Regular at 10px, 12px, 13px, and 14px.
- `FilteringOptions_generated_61`: 177×649px; fixed width and height; uses Inter Regular at 11px, 12px, 13px, and 15px.

### Selection controls

- `CheckBox_generated_checkbox_36`: 69×25px, fill `#FDFDFD`, Inter Regular 12px.
- `CheckBox_generated_checkbox_35`: 60×24px, fill `#FDFDFD`, Inter Regular 15px.
- `CheckBox_generated_checkbox_34`: 107×26px, fill `#FDFDFD`, Inter Regular 13px.
- `CheckBox_generated_checkbox_31`: 84×26px, fill `#FCFCFC`, Inter Regular 13px.
- `CheckBox_generated_checkbox_20`: 103×20px, fill `#FDFDFD`, Inter Regular 13px.
- `Radio_generated_radio_21`: 104×18px, fill `#FDFDFD`, Inter Regular 14px.
- `Radio_generated_checkbox_38`: 89×26px, fill `#FDFDFD`, Inter Regular 13px.
- `Radio_generated_checkbox_37`: 67×28px, fill `#FDFDFD`, Inter Regular 15px.
- `Radio_generated_checkbox_32`: 76×27px, fill `#FCFCFC`, Inter Regular 13px.

### Avatars

- `Avatar_6_15`: 58×25px, radius 12px, fill `#F2E3F3`, Inter Regular 12px.
- `Avatar_generated_avatar_3`: 89×28px, fill `#FCFCFC`, Inter Regular 13px.
- `Avatar_generated_avatar_2`: 65×28px, fill `#FCFCFC`, Inter Regular 13px.
- `Avatar_6_47`: 103×63px, radius 3px, fill `#F1F2F4`, Inter Regular 12px.
- `Avatar_6_22`: 25×25px, radius 12px, image fill.
- `Avatar_generated_avatar_1`: 135×65px, fill `#FCFCFC`, Inter Regular 14px.

### Buttons, tag, and input

- `Button_2_178`: 183×32px, radius 16px, fill `#F2F3F5`, Inter Regular 11px.
- `Button_2_10`: 79×79px, radius 6px, fill `#F5770A`, stroke `#FEFFFA` 1px, Inter Regular 10px.
- `Button_2_203`: 87×29px, radius 5px, fill `#F2F3F5`, Inter Regular 11px.
- `Button_2_236`: 55×31px, radius 6px, fill `#F1F2F4`, Inter Regular 10px.
- `Button_2_237`: 118×24px, radius 12px, fill `#F1F2F4`, Inter Regular 11px.
- `Button_5_1`: 128×29px, radius 14px, fill `#292D31`, Inter Regular 14px.
- `Tag_6_44`: 102×64px, fill `#F1F2F4`, stroke `#343539` 1px, Inter Regular 13px.
- `Input_4_27`: 417×51px, radius 25px, fill `#F2F3F5`, Inter Regular 15px.
- `Button_2_2`: 244×49px, radius 5px, fill `#FCFCFC`, Inter Regular 13px.
- `Button_4_28`: 409×45px, radius 22px, fill `#2F3039`, Inter Regular 18px.
- `Button_1_6`: 151×35px, radius 17px, fill `#FCEDEC`, Inter Regular 13px.
- `Button_3_36`: 166×44px, radius 4px, fill `#FDFDFD`, stroke `#000000` 1px, Inter Regular 13px.
- `Button_3_4`: 101×31px, radius 4px, fill `#F2F3F5`, Inter Regular 12px.
- `Button_3_17`: 151×34px, radius 17px, fill `#FCEFEE`, Inter Regular 13px.

## Screen patterns

### Intro

- Canvas: 1333×2614px.
- Fill: `#FFFFFF`.
- Outer padding: 160px on all sides.
- Vertical section gap: 88px.
- Title row: 1013×140px, horizontal gap 40px.
- Intro title: Manrope ExtraBold, 50px, blue `#4499F8`.
- Section headings: Manrope ExtraBold, 40px, blue `#4499F8`.
- Supporting and capability text: Manrope SemiBold, 24px, dark purple `#1F1736`.
- CTA: 348×104px, 16px radius, blue `#4499F8`, horizontal padding 31px and 66px, 10px gap, white Manrope Bold 30px label.

### Before generation

- Canvas: 9360×2614px.
- Outer padding: 160px.
- Vertical gap: 120px.
- Background and border colors were extracted but are outside the permitted palette; do not reproduce them as palette tokens.
- Heading: Inter Medium, 80px, white.
- Main content is a horizontal 9040×900px frame with 80px gap and approximately six decorative shapes.

### After generation

- Canvas: 13107×2614px.
- Outer padding: 160px.
- Vertical gap: 120px.
- Heading: Inter Medium, 80px, white.
- Main content frame: 12787×2077px with 80px gap.
- Generated-design section includes a 9040×1065px frame and a 9040×84px header row.
- Header label “Generated Design”: Inter Regular, 40px, white.
- Generated documents are 1440×901px each.
- The extracted design contains image backgrounds, fixed-width interface elements, rounded content regions, buttons, text labels, and many small decorative/component frames.

## Notes for implementers

- Use only the listed palette colors; do not recreate unlisted extracted colors.
- Preserve the distinction between promotional Intro typography and compact application-interface typography.
- Use the named component families as the implementation vocabulary; do not replace them with newly invented component families.
- Treat all listed component dimensions as fixed source dimensions unless responsive behavior is explicitly required by the target implementation.
- Icons are image assets with the specified dimensions; preserve their aspect ratios.
- Prefer the listed component radius for each component rather than applying one global radius.
- No spacing, typography, radius, motion, elevation, or effect variables were defined; use the observed values directly.
- The source contains image fills identified by hashes, but no image URLs or reusable image-token definitions were provided.
