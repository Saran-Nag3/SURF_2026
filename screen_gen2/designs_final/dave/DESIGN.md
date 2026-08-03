---
name: dave
source:  Apple Intelligence Icon iOS 18 (Community) (Community); iOS Midnight Icons (Community)
kind: design-system-context
---

# dave - Design System

## Overview

A monochrome iOS icon system paired with Apple Intelligence app-icon treatments and presentation covers. The visual language combines black-and-white iconography, high-contrast typography, rounded outlined tags, and large gradient-based icon artwork.

Source files:
-  Apple Intelligence Icon iOS 18 (Community) (Community)
- iOS Midnight Icons (Community)

## Design language

- Use high-contrast black and white as the primary visual foundation.
- Icon artwork is geometric, centered, and designed for square or wide app-icon canvases.
- Midnight icon tiles use 60×60px source frames with black backgrounds and white or near-white symbols.
- Presentation covers use a black background, oversized white heading typography, and a right-aligned icon or icon preview.
- Author attribution uses a rounded outlined tag with a translucent circular link affordance.
- Apple Intelligence artwork uses soft gradient fills and pronounced drop shadows; preserve the extracted artwork rather than recreating gradients from unavailable color values.
- Keep decorative icon construction visually simple at the usage level, even when source artwork contains many vector shapes.

## Color palette

Ranked by observed raw-color usage across the provided sources:

| Color | Usage |
|---|---:|
| #FFFFFF | 389 uses |
| #000000 | 147 uses |
| #C4C4C4 | 54 uses |
| #676768 | 42 uses |
| #D9D9D9 | 10 uses |
| #FEFEFE | 8 uses |
| #D0E326 | 6 uses |
| #FFFFFF33 | 4 uses |
| #7C0048 | 4 uses |
| #0000001A | 1 observed use |
| #FFFFFF4D | 3 observed uses |

Usage guidance:
- Use #000000 for midnight backgrounds and presentation-cover backgrounds.
- Use #FFFFFF for primary icon marks, headings, borders, and light icon surfaces.
- Use #FEFEFE for near-white icon artwork where specified.
- Use #676768 for subdued compass details.
- Use #FFFFFF33 for translucent circular link affordances.
- Use #C4C4C4, #D9D9D9, #D0E326, and #7C0048 only where source artwork requires them.
- Do not introduce additional colors.

## Type scale

Observed typography:

| Size | Family / weight | Usage |
|---:|---|---|
| 128px | SF Pro Display Bold | Cover and section headings |
| 48px | SF Pro Text Regular | Instructions |
| 40px | SF Pro Text Medium | Attribution tag |
| 40px | Inter Regular | Attribution tag variant |
| 38px | SF Pro Text Light | Contacts icon glyph |
| 36px | SF Pro Text Bold | Thank-you text |
| 36px | SF Pro Text Medium | Books icon glyph |
| 6.46px | SF Pro Display Medium | Small source icon text |

Typography rules:
- Use SF Pro Display Bold at 128px for primary presentation headings.
- Use SF Pro Text or Inter at 40px for attribution text.
- Attribution text is displayed at 70% opacity in the source.
- Use the source family and weight when reproducing icon glyphs.

## Spacing scale

Observed spacing values:

- 12px: tag internal gap.
- 16px: tag vertical padding and horizontal component-set padding.
- 20px: component-set outer padding and gap.
- 24px: tag horizontal padding.
- 32px: cover text-stack gap.
- 0px: cover text-stack padding.

No reusable spacing variables were defined.

## Radius scale

Observed radii:

- 5px: component-set container radius.
- 14px: Instagram icon inner rectangle.
- 24px: tag radius.
- 37.97px: Shortcuts icon frame radius.
- 23.16px: YouTube preview rectangle.
- 16.96px: FaceTime preview rectangle.
- 5.86px: FaceTime small rectangle.
- 1.88px: FaceTime vector corner radius.

Use 24px for the attribution tag. Preserve icon-specific radii within source artwork.

## Elevation & effects

Observed effects:

- Apple Intelligence icon artwork uses a large drop shadow with 50px blur and 0px horizontal / 39.76px vertical offset.
- Apple Intelligence icon artwork also uses a smaller drop shadow with 4.45px blur and 0px horizontal / 4.45px vertical offset.
- Weather and Shortcuts artwork uses a drop shadow with 20.23px blur and 0px horizontal / 5.06px vertical offset.
- Weather artwork in the icon grid uses a 6.99px blur and 0px horizontal / 1.75px vertical offset.
- The tag link affordance uses 12.8px background blur.
- Icon artwork may use a 3px translucent white stroke.

## Components

### App Icon Square

- Size: 1024×1024px.
- Variants: `over=white`, `over=gradient`.
- Source component-set container: 2108×1064px.
- Component-set padding: 20px on all sides.
- Component-set gap: 20px.
- Component-set radius: 5px.
- Component artwork: 683×666px, centered and scaling.
- The `over=white` variant uses a light background treatment and orange-to-pink icon artwork in the source.
- The `over=gradient` variant uses a blue-to-mint background treatment and near-white icon artwork in the source.

### App Icon Wide

- Size: 1024×768px.
- Variants: `over=white`, `over=gradient`.
- Source component-set container: 2108×808px.
- Component-set padding: 20px on all sides.
- Component-set gap: 20px.
- Component-set radius: 5px.
- Component artwork: 511×499px, scaling within the icon frame.
- Preserve the source gradient artwork and variant behavior.

### tag

- Size: 349×80px in the Midnight Icons source.
- Alternate size: 336×80px in the Apple Intelligence source.
- Horizontal padding: 16px vertical, 24px horizontal.
- Gap: 12px.
- Alignment: centered horizontally and vertically.
- Radius: 24px.
- Border: 2px solid #FFFFFF.
- Attribution text: “by David Leal”.
- Attribution text size: 40px.
- Attribution text opacity: 70%.
- Includes a 32×32px circular link affordance with a 16×16px icon.
- Link affordance uses #FFFFFF33 and a 3.2px translucent border.

## Screen patterns

### Cover

- Canvas: 1920×1053px.
- Background: #000000.
- Place a fixed-width text stack on the left, vertically centered.
- Text-stack gap: 32px.
- Heading: 128px SF Pro Display Bold in #FFFFFF.
- Place the `tag` beneath the heading.
- Place a large icon or icon preview on the right, vertically centered.
- Use a right-side shade treatment behind or beside the artwork when reproducing the source cover composition.

### Icon presentation

- Midnight icon grid uses 60×60px icon frames on #000000 or #FFFFFF surfaces.
- Individual icons are centered within their frames and primarily use #FFFFFF, #FEFEFE, or #000000.
- Decorative icons may contain many vector shapes; treat each named icon as a single reusable visual asset.
- The Apple Intelligence icon page presents square and wide app-icon variants side by side with 20px spacing and padding.

### Read Me

- Use a black section background.
- Stack the large heading, attribution `tag`, instructional text, and thank-you text vertically.
- Heading size: 128px.
- Instruction text size: 48px.
- Thank-you text size: 36px.
- Maintain the 32px gap used by the cover text stack where a stack gap is needed.

## Notes for implementers

- Only use the listed component families: `App Icon Square`, `App Icon Wide`, and `tag`.
- Do not flatten the icon artwork into generic glyphs; preserve each icon’s source geometry and proportions.
- Keep app-icon artwork centered and scaling within its source frame.
- Use #000000 and #FFFFFF as the dominant surface and foreground pairing.
- Preserve source gradients, shadows, and blur effects when the implementation supports them; no additional palette values are defined for recreating those treatments.
- Do not add unobserved spacing variables, typography styles, motion tokens, or grid rules.
- The two `tag` specifications differ in width and attribution font family; select the variant matching the source screen.
