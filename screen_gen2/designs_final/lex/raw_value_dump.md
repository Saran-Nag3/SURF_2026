---
name: ios-26-liquid-glass-texture-community
source_file: iOS 26 Liquid Glass texture (Community)
source_page: All pages (3): Thumbnail, Glass, Component
generated_at: 2026-07-25T09:27:45.015658+00:00
---

# iOS 26 Liquid Glass texture (Community) Design Guidelines

## Source
- Figma file: iOS 26 Liquid Glass texture (Community)
- Figma page: All pages (3): Thumbnail, Glass, Component
- Extracted at: 2026-07-25T09:27:45.015658+00:00

## Variable Collections
- No local variable collections found.

## Color Tokens
- No local paint styles or color variables found.

## Raw Colors (unstyled)
- #FFFFFF: 5 uses
- #0000001F: 3 uses
- #1A1A1A: 3 uses

## Typography Tokens
- Headline/Large: Space Grotesk Regular (400), 40px / 40px, tracking 0px

## Raw Typography (unstyled)
- SF Pro Semibold, 22.29px: 3 uses

## Typography Hierarchy
- 40px - Headline/Large (Space Grotesk Regular)
- 22.29px - SF Pro Semibold, 22.29px (raw)

## Spacing Tokens
- No spacing variables found.

## Radius Tokens
- No radius variables found.

## Motion Tokens
- No motion variables found.

## Effect Styles
- No local effect styles found.

## Grid Styles
- No local grid styles found.

## Component Families
- Glass button

## Component Specs
- Glass button: size 177x62px, radius 185.71px, horizontal layout, padding 16 24 16 24px, gap 0px, align min/center, sizing W:fixed H:fixed, fill #1A1A1A, effect [background_blur 10px, inner_shadow 40.86px offset 0 0 #F2F2F280, inner_shadow 0px offset 0 0 #999999, inner_shadow 1.86px offset -3.71 -3.71 #B3B3B3, inner_shadow 1.86px offset 3.71 3.71 #B3B3B3, inner_shadow 0.93px offset 5.57 5.57 #FFFFFF80], text [SF Pro Semibold, 22.29px]

## Most-Used Styles
- Headline/Large: 1 use

## Layout & Structure
Screen: Thumbnail / Thumbnail
- FRAME "Thumbnail", 800x560px, vertical pad 80 80 80 80px gap 27px sizing W:fixed H:fixed, constraints left/top, fill image(hash: cfae6fbb1407c641ce58c396a3a3b6e6f304a6ea)
  - TEXT "iOS 26", 640x40px, constraints left/top, fill #FFFFFF, text [Headline/Large], [heading]
  - TEXT "iOS Glass texture", 605x80px, constraints left/top, fill #FFFFFF, effect [drop_shadow 40px offset 0 4 #00000066], text [SF Pro Semibold, 80px], [heading]
  - INSTANCE "Glass button", 209x78px, horizontal pad 24 40 24 40px gap 0px align min/center sizing W:fixed H:fixed, constraints left/top, radius 185.71px, fill #1A1A1A, effect [background_blur 10px, inner_shadow 40.86px offset 0 0 #F2F2F280, inner_shadow 0px offset 0 0 #999999, inner_shadow 1.86px offset -3.71 -3.71 #B3B3B3, inner_shadow 1.86px offset 3.71 3.71 #B3B3B3, inner_shadow 0.93px offset 5.57 5.57 #FFFFFF80]
    - RECTANGLE "Appearance", 280x280px, constraints center/center, fill #0000001F, effect [texture, background_blur 12px]
    - TEXT "{Label}", 129x30px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 22.29px]
  - INSTANCE "Figma", 169.71x169.71px, constraints right/top
    - VECTOR "Vector", 56.57x56.57px, constraints scale/scale, fill #0ACF83
    - VECTOR "Vector", 56.57x56.57px, constraints scale/scale, fill #A259FF
    - VECTOR "Vector", 56.57x56.57px, constraints scale/scale, fill #F24E1E
    - VECTOR "Vector", 56.57x56.57px, constraints scale/scale, fill #FF7262
    - VECTOR "Vector", 56.57x56.57px, constraints scale/scale, fill #1ABCFE

Screen: Glass / BG
- RECTANGLE "BG", 472x1023px, constraints left/top, fill image(hash: cfae6fbb1407c641ce58c396a3a3b6e6f304a6ea)

Screen: Glass / iOS 26
- TEXT "iOS 26", 127x160px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 80px], [heading]

Screen: Glass / Glass button
- INSTANCE "Glass button", 177x62px, horizontal pad 16 24 16 24px gap 0px align min/center sizing W:fixed H:fixed, constraints center/center, radius 185.71px, fill #1A1A1A, effect [background_blur 10px, inner_shadow 40.86px offset 0 0 #F2F2F280, inner_shadow 0px offset 0 0 #999999, inner_shadow 1.86px offset -3.71 -3.71 #B3B3B3, inner_shadow 1.86px offset 3.71 3.71 #B3B3B3, inner_shadow 0.93px offset 5.57 5.57 #FFFFFF80]
  - RECTANGLE "Appearance", 280x280px, constraints center/center, fill #0000001F, effect [texture, background_blur 12px]
  - TEXT "{Label}", 129x30px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 22.29px]

Screen: Component / Glass button
- COMPONENT "Glass button", 177x62px, horizontal pad 16 24 16 24px gap 0px align min/center sizing W:fixed H:fixed, constraints center/center, radius 185.71px, fill #1A1A1A, effect [background_blur 10px, inner_shadow 40.86px offset 0 0 #F2F2F280, inner_shadow 0px offset 0 0 #999999, inner_shadow 1.86px offset -3.71 -3.71 #B3B3B3, inner_shadow 1.86px offset 3.71 3.71 #B3B3B3, inner_shadow 0.93px offset 5.57 5.57 #FFFFFF80]
  - RECTANGLE "Appearance", 280x280px, constraints center/center, fill #0000001F, effect [texture, background_blur 12px]
  - TEXT "{Label}", 129x30px, constraints left/top, fill #FFFFFF, text [SF Pro Semibold, 22.29px]


## Editing Notes
- Refine this file after extraction to add brand context and rationale.
- Keep token names synchronized with Figma styles and variables.
- Add usage examples and anti-patterns for critical components.
