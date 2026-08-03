---
name: clay
source: 64+ Mobile device mockup component! (Clay, Realistic, Flat, Vector, iPhone, Pixel, Samsung) | ODW (Community)
kind: design-system-context
---

# clay - Design System

## Overview

A mobile-device mockup system by osborndesign.works. It provides realistic, clay, flat, and vector phone mockups for iPhone, Google Pixel, and Samsung Galaxy devices, with configurable accent color, screen content, and shadow variants.

Primary component families:

- Phone Mockups
- Screen Content
- Shadows

The source contains a cover page, usage directions, examples, component showcases, screen-content variants, shadow variants, and phone-mockup variants.

## Design language

- Brand presentation uses large display typography, especially Suez One Regular and Rubik.
- Mockups are presented on light neutral surfaces with strong device imagery, reflections, and cast shadows.
- Accent treatments use yellow and blue.
- Screen splash content uses #4350FF with the ODW logomark.
- Device bodies may use a yellow accent layer when `Accent Color=True`.
- Screens use masked content sized to the device viewport.
- Layout examples use centered, fixed-size compositions and vertical or horizontal gaps.
- Decorative imagery, reflections, device shells, and logomarks are integral to the mockup presentation.

## Color palette

Ranked by raw usage where counts are available:

| Color | Raw uses | Usage |
|---|---:|---|
| #959FAE | 365 | Device borders and outlines |
| #ED1C24 | 348 | Raw extracted color |
| #F15A29 | 334 | Raw extracted color |
| #9B8579 | 284 | Raw extracted color |
| #657B9A26 | 148 | Raw extracted color |
| #F4F7FA | 141 | Device mask/fill |
| #FFFFFF | 116 | White surfaces and fills |
| #1C75BC | 82 | Raw extracted color |
| #27AAE1 | 74 | Raw extracted color |
| #FFFFFF4D | 67 | Translucent white |
| #00A79D | 66 | Raw extracted color |
| #292929 | 52 | Primary dark display text; 22 style uses |
| #666666 | 49 | Raw extracted color |
| #CCCCCC | 49 | Raw extracted color |
| #4350FF | 46 | Splash-screen background; 10 style uses |
| #000000 | 29 | Mask vectors |
| #D6D6D6 | — | Gray true / 300; 3 style uses |
| #475467 | — | Gray Cool / 600; 38 style uses |
| #101828 | — | Gray Cool / 900; 5 style uses |
| #F9FAFB | — | Gray Cool / 50; 3 style uses |
| #344054 | — | Gray Cool / 700; 4 style uses |
| #1D2939 | — | Gray Cool / 800; 11 style uses |
| #FDE272 | — | Yellow / 300; 17 style uses |
| #FDEAD7 | — | Orange / 100; 10 style uses |
| #FF822D | — | Orange / 51; 3 style uses |
| #1C1C1C | — | Neutral / 1 |
| #FCD53F | — | Yellow / 106 |
| #F9C23C | — | Yellow / 105; 2 style uses |
| #212121 | — | Neutral / 2 |
| #F2F4F7 | — | Gray Cool / 100; 7 style uses |
| #E5E5E5 | — | Gray true / 200 |
| #099250 | — | Green / 600 |
| #EAAA08 | — | Yellow / 500 |

Most-used named styles include Gray Cool / 600, Gray Cool / 400, Grays Extra / Gray warm / 700, Gray true / 800, Base / White, Yellow / 300, Gray Cool / 200, and Gray Cool / 800.

## Type scale

### Defined typography tokens

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Text xl/Regular | Inter | 400 | 20px | 123.94% | 0px |
| Text md/Semibold | Inter | 600 | 16px | 123.94% | 0px |
| Text sm/Medium | Inter | 500 | 14px | 115.68% | 0px |

### Raw typography hierarchy

| Size | Font |
|---:|---|
| 60px | Suez One Regular |
| 42px | Rubik Bold |
| 40px | Rubik Regular |
| 38px | Rubik Regular |
| 30px | Suez One Regular |
| 25px | Inter Medium |
| 24px | Inter SemiBold |
| 22px | Inter Medium |
| 20px | Inter Regular |
| 16px | Inter SemiBold |
| 14px | Inter Medium |
| 3.08px | Inter Regular |

Large headings use Suez One Regular at 60px, 100px, 190px, and 200px in the extracted screens. Supporting directions use Rubik Regular, Rubik SemiBold, or Rubik Bold.

## Spacing scale

No spacing variables were defined. Observed layout spacing values:

- 20px, 22px, 25px, 30px, 40px, 50px, 70px, 80px, 110px
- Screen Content component padding: 50px on all sides
- Shadows component padding: 50px on all sides
- Directions frame padding: 80px on all sides
- Cover content gaps: 16px, 20px, 22px, 25px, 30px, 70px
- Grid: 1 column, 700px section, 0px gutter, centered alignment

## Radius scale

Observed corner radii:

- 20px: cover frame
- 30px: directions frame, Screen Content component set, Shadows component set, Phone Mockups component set
- 90px: example phone collection frame
- 0px: several phone and device groups

## Elevation & effects

### Named shadow styles

- `Shadow/xs`: drop shadow, offset `0 1px`, color #1018280D
- `Shadow/sm`: drop shadows, offsets `0 1px` and `0 1px`, colors #1018280F and #1018281A
- `Shadow/lg`: drop shadows, offsets `0 4px` and `0 12px`, colors #10182808 and #10182814
- `Shadow/xl`: drop shadows, offsets `0 8px` and `0 20px`, colors #10182808 and #10182814

### Mockup effects

- Device cast shadows use source image fills with layer blur values of 0.28px, 0.73px, 0.81px, 1px, or 2px.
- Some cast shadows use 70% opacity.
- Device mask groups use drop shadows with offsets `0 0.64px` and `0 0.64px`.
- Badge effects use drop shadows with offsets `0 1.93px` and `0 3.85px`.
- Device borders use #959FAE with observed strokes of 0.33px, 0.53px, 0.72px, and 1.19px.

## Components

### Phone Mockups

- Base size: 1164 × 2044px
- Variants:
  - Type: Clay High Detail
  - Type: Clay Med Detail
  - Type: Clay No detail
  - Type: Google Pixel
  - Type: Samsung Galaxy
  - Type: Vector Iphone
  - Type: Vector Samsung Galaxy
  - Type: iPhone 14
  - Accent Color: False
  - Accent Color: True
- Device screens are inserted through masked `Screen Content` instances.
- Accent-enabled variants add a Yellow / 300 layer using #FDE272.
- iPhone 14 uses an iPhone shell and supports both accent states.
- Samsung Galaxy supports both accent states.
- Google Pixel and vector device variants include device imagery, masks, reflections, and borders as applicable.

### Screen Content

- Base size: 414 × 896px
- Variant: `Show Splash=True`
  - Background: #4350FF
  - Includes the ODW logomark
- Variant: `Show Splash=False`
  - Uses dark screen content with #292929
  - Includes source image content
- Component set padding: 50px
- Component set gap: 50px
- Component set radius: 30px

### Shadows

- Base size: 1164 × 2044px
- Variants: `Type=1`, `Type=2`, `Type=3`, `Type=4`
- Type 1 and Type 2 use broad device cast shadows with 70% opacity.
- Type 3 uses a horizontal shadow.
- Type 4 uses a wider horizontal shadow.
- Component set padding: 50px
- Component set gap: 40px
- Component set radius: 30px

## Screen patterns

### Cover

- Frame size: 1825 × 960px
- White fill with 20px radius.
- Large Suez One Regular display title.
- Yellow accent for “Free”.
- Feature list uses check icons and Rubik Regular.
- Includes a “Built by osborndesign.works” attribution block.
- Displays multiple phone mockups with shadows and a larger device composition.

### Directions

- Frame size: 2488 × 2615px
- Uses 80px padding and 110px vertical gap.
- Large “Directions:” heading in Suez One Regular at 200px.
- Provides instructions to select an example and adjust the component.
- Shows four phone mockup examples in a rounded collection.

### Examples

- Uses “Examples!” in Suez One Regular at 190px.
- Uses #292929 for the heading.

### Mockup Components

- Uses “Mockup Components:” in Suez One Regular at 200px.
- Introduces the component showcase sections.

### Screen Content showcase

- Displays the `Show Splash=True` and `Show Splash=False` screen variants.
- Splash state is a blue screen with the ODW logomark.
- Non-splash state uses source image content on a dark screen.

### Shadows showcase

- Displays all four shadow variants in a single component set.
- Shadows are scaled independently of the device shells.

### Phone Mockups showcase

- Displays device types and accent-color variants.
- Each mockup combines a device shell, optional accent layer, masked screen content, and a shadow variant.
- Phone mockup showcase uses a light neutral background and a 30px radius.

## Notes for implementers

- Use only the defined component families: Phone Mockups, Screen Content, and Shadows.
- Treat `Screen Content` as a replaceable masked viewport inside each phone mockup.
- Preserve the device-specific aspect ratios and source component dimensions.
- Use `Accent Color=True` only for variants that support the yellow accent layer.
- Use `Show Splash=True` for the #4350FF splash screen and ODW logomark; use `False` for image-based screen content.
- Keep shadows separate from device shells so shadow type can be changed independently.
- Preserve reflections and border strokes where the selected device variant includes them.
- Use Suez One for oversized display headings and Inter or Rubik for supporting text according to the type scale above.
- No local variables, spacing variables, radius variables, or motion variables were found.
