---
name: lego-brick-design-system-community
source: LEGO Brick Design System (Community)
kind: design-system-context
---

# lego - Design System

## Overview

A LEGO brick-focused design system containing physical brick illustrations, minifigure parts, custom objects, buttons, and LEGO branding. The system uses Archivo typography, bold black outlines, white highlights, gray shading, and modular perspective variants.

## Design language

- Visual language: dimensional LEGO-style brick geometry with front, top, side, and isometric perspectives.
- Brick construction uses reusable primitives for tops, sides, pegs, lips, slopes, circles, and custom shapes.
- Outlines primarily use `#000000`; dimensional shading uses `#9C9C9C`, `#212121`, and `#0000004D`.
- Highlights use `#FFFFFF` with 40% opacity where specified.
- Primary surfaces in the extracted component specifications use `#FFFFFF`.
- Typography uses Archivo across 12px, 14px, 16px, and 18px named scales, with larger raw sizes from 12px through 92px.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#D9D9D9` | 6082 | Unstyled neutral |
| `#000000` | 5866 | Outlines, strokes, dark graphic details |
| `#FFFFFF` | 530 | Surfaces, fills, highlights, logo/component fills |
| `#5A5D60` | 322 | Unstyled dark neutral |
| `#0000004D` | 215 | Shadow treatment |
| `#9C9C9C` | — | Component shading |
| `#212121` | — | Dark component strokes |

## Type scale

Font family: Archivo unless otherwise noted. Tracking is `0px`; line height is auto for named typography tokens.

- 12px: Archivo X Small — Regular, Medium, Semibold, Bold, Black; Archivo Regular raw; Inter Regular raw.
- 14px: Archivo Small — Regular, Medium, Semibold, Bold, Black.
- 16px: Archivo Base — Regular, Medium, Semibold, Bold, Black.
- 18px: Archivo Large — Regular, Medium, Semibold, Bold, Black.
- 20px: Archivo Regular raw.
- 24px: Archivo Regular raw; used by Button and button primitives.
- 28px: Archivo Regular raw.
- 32px: Archivo Regular raw.
- 36px: Archivo Regular raw.
- 42px: Archivo Regular raw.
- 48px: Archivo Regular raw.
- 54px: Archivo Regular raw.
- 60px: Archivo Regular raw.
- 68px: Archivo Regular raw.
- 76px: Archivo Regular raw.
- 84px: Archivo Regular raw.
- 92px: Archivo Regular raw.

Named weight mappings:

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Black: Archivo Black Regular, 400

## Spacing scale

_None found in source._

## Radius scale

- `12px`: button base and button top.
- `999px`: circle-brick top primitive.

## Elevation & effects

- No local effect styles found.
- Highlights: `#FFFFFF` at 40% opacity where specified.
- Shadows: `#0000004D`.
- Standard dark stroke: `#000000`.
- Component strokes: `#212121`, 1px where specified.
- Button stroke: `#000000`, 2px.
- No motion tokens found.
- No local grid styles found.

## Components

### Button

- Size: `112x92px`.
- Fill: `#FFFFFF`.
- Text: Archivo Regular, `24px`.
- Variants:
  - Color: Purple, Yellow.

### __primitive--button--structure

- Size: `112x92px`.
- Text: Archivo Regular, `24px`.
- Variants:
  - State: Default, Pressed.

### __primitive--button--base

- Size: `112x66px`.
- Radius: `12px`.
- Layout: horizontal.
- Padding: `20px` on all sides.
- Gap: `10px`.
- Alignment: center/center.
- Sizing: fixed width, fixed height.
- Fill: `#FFFFFF`.
- Stroke: `#000000`, 2px.
- Text: Archivo Regular, `24px`.

### __primitive--button--top

- Size: `112x66px`.
- Radius: `12px`.
- Layout: horizontal.
- Padding: `20px` on all sides.
- Gap: `10px`.
- Alignment: center/center.
- Sizing: fixed width, fixed height.
- Fill: `#FFFFFF`.
- Stroke: `#000000`, 2px.
- Text: Archivo Regular, `24px`.

### Rectangular Brick

- Size: `20x20px`.
- Fill: `#FFFFFF`.
- Base dimensions: 1x1, 1x2, 1x3, 1x4, 1x5, 1x6, 2x2, 2x3, 2x4, 2x5, 2x6, 3x3, 3x4, 3x5, 3x6, 4x4, 4x5, 4x6.
- X, Y, and Z rotation: 0°, 90°.
- Perspective: front, iso, top.
- Height: 1, Plate.

### Rectangular Brick with Single Peg

- Size: `20x12px`.
- Base dimensions: 1x2, 1x3.
- X rotation: 0°, 90°.
- Y rotation: 0°.
- Z rotation: 0°.
- Perspective: front, iso, top.
- Height: Plate.

### Round Brick

- Size: `35x44px`.
- Height: 1, Plate.
- Perspective: front, iso, top.
- Variation: 1, 2.

### Slope Brick

- Size: `52x44px`.
- Fill: `#FFFFFF`.
- Perspective: front, iso, top.
- Base dimensions: 1x2, 2x2, Mixed.
- Rotation: 0, 180°, 270°, 90°.

### Washing Machine Brick

- Size: `51x54px`.
- Fill: `#FFFFFF`.
- Base dimensions: 1x1, 1x2.
- Perspective: front, iso, top.
- X rotation: 180°, 270°, 90°, Default.

### L Brick

- Size: `40x40px`.
- Fill: `#FFFFFF`.
- Base dimensions: 2x2, 2x3.
- Rotation: 0, 180°, 270°, 90°.
- Perspective: front, iso, top.
- Height: 1, Plate.
- Orientation: 1, 2.

### Computer Mouse Brick

- Size: `35x28px`.
- Fill: `#FFFFFF`.
- Perspective: iso left, iso right.

### Computer Screen Brick

- Size: `41x64px`.
- Fill: `#FFFFFF`.
- Perspective: iso left, iso right.

### Keyboard Brick

- Size: `52x38px`.
- Fill: `#FFFFFF`.
- Rotation: 0°, 90°.

### Palette

- Size: `16x20px`.
- Fill: `#FFFFFF`.
- Material Color variants: Aqua, Black, Blue, Blue-Violet, Bright Green, Bright Light Blue, Bright Light Orange, Bright Light Yellow, Bright Pink, Brown, Clikits Lavender, Coral, Dark Azure, Dark Blue, Dark Blue-Violet, Dark Bluish Gray, Dark Brown, Dark Gray, Dark Green, Dark Nougat, Dark Olive Green, Dark Orange, Dark Pink, Dark Purple, Dark Red, Dark Salmon, Dark Tan, Dark Turquoise, Dark Yellow, Earth Orange, Fabuland Brown, Fabuland Lime, Fabuland Orange, Green, Lavender, Light Aqua, Light Blue, Light Bluish Gray, Light Brown, Light Gray, Light Green, Light Lilac, Light Lime, Light Nougat, Light Orange, Light Pink, Light Purple, Light Salmon, Light Turquoise, Light Violet, Light Yellow, Lilac, Lime, Little Robots Blue, Maersk Blue, Magenta, Medium Azure, Medium Blue, Medium Brown, Medium Dark Pink, Medium Green, Medium Lavender, Medium Lime, Medium Nougat, Medium Orange, Medium Tan, Medium Violet, Neon Green, Neon Orange, Neon Yellow, Nougat, Olive Green, Orange, Pink, Purple, Red, Reddish Brown, Rust, Salmon, Sand Blue, Sand Green, Sand Purple, Sand Red, Sky Blue, Tan, Very Light Bluish Gray, Very Light Gray, Very Light Orange, Violet, White, Yellow, Yellowish Green.

### __primitive--graphic

- Size: `40x20px`.
- Graphic variants: Computer Screen, Frame 3, Frame 4, Keyboard, Mouse.
- Perspective: iso, top.
- Rotation: 0°, 90°.

### Flower Brick

- Size: `49x43px`.
- Fill: `#FFFFFF`.

### Plant with 3 Leaves Brick

- Size: `109.82x75.99px`.

### LEGO Logo

- Size: `256x256px`.
- Fill: `#FFFFFF`.

### Minifigure Hair

- Size: `42.5x36px`.

### Minifigure head

- Size: `34.64x40.31px`.
- Fill: `#FFFFFF`.

### Minifigure Torso

- Size: `70x80.5px`.

### Minifigure Legs

- Size: `52.5x79px`.

### __primitive--custom-shapes--flower--top

- Size: `40x40px`.
- Perspective: iso, top.

### __primitive--custom-shapes--plant-leaves

- Size: `109.82x70.22px`.

### __primitive--complex-brick-shapes--washing-machine-brick--side

- Size: `20x24px`.
- X rotation: Default, Variant2, Variant3, Variant4.
- Perspective: iso left, iso right, side.

### __primitive--complex-brick-shapes--lip--top

- Size: `20.78x12px`.
- Fill: `#FFFFFF`.
- X rotation: 0°, 90°.
- Tiles: 1, 2.

### __primitive--complex-brick-shapes--washing-machine-brick-height

- Size: `20x20px`.
- Fill: `#FFFFFF`.
- Tiles: 1, 2.
- Perspective: front, iso left, iso right.

### __primitive--peg-frame--front

- Size: `20x4px`.
- Layout: vertical.
- Padding: `0px` on all sides.
- Gap: `0px`.
- Alignment: center/center.
- Sizing: fixed width, fixed height.
- Rotation: 0, 90°.

### __primitive--peg-base--front`

- Size: `12x4px`.
- Fill: `#FFFFFF`.
- Rotation: 0, 90°.

### __primitive--peg-base--top

- Size: `12x12px`.
- Fill: `#FFFFFF`.
- Type: Hollow, Solid.
- Shading: Default, Highlight, Shadow.

### __primitive--complex-brick-shapes-slope--front-angle

- Size: `34.5x40px`.
- Tiles: 1x1, 1x2.
- Perspective: iso left, iso right.

### __primitive--complex-brick-shapes--lip--front

- Size: `20x4px`.
- Fill: `#FFFFFF`.
- Perspective: front, iso left, iso right.
- Tiles: 1, 2.
- Z rotation: 0°, 90°.

### __primitive--complex-brick-shapes--washing-machine--top

- Size: `16x40px`.
- Fill: `#FFFFFF`.
- Rotation: 0°, 90°.
- Perspective: iso, top.
- Section: top.
- Tile count: 1x1, 1x2.

### __primitive--complex-brick-shapes-slope--top

- Size: `40x40px`.
- Fill: `#FFFFFF`.
- Rotation: 0°, 90°.
- Perspective: iso, top.
- Section: bottom, top.
- Tile count: 1x1, 1x2, 2x2, 2x3.

### __primitive--round-brick-shapes--side

- Size: `20x24px`.
- Perspective: front, iso.
- Height: 1, Plate.
- Variation: 1, 2.

### __primitive--circle-brick-shapes--top

- Size: `20x20px`.
- Radius: `999px`.
- Stroke: `#000000`, 1px.
- Perspective: iso, top.

### __primitive--brick--pegs--top

- Size: `20x4px`.
- Layout: horizontal.
- Padding: `0px` on all sides.
- Gap: `0px`.
- Sizing: fixed width, fixed height.
- Fill: `#FFFFFF`.
- Perspective: front, iso, top.
- X, Y, and Z rotation: 0°, 90°.
- Tile count: 1, 2, 3, 4, 5, 6.
- Hollow pegs: False, True.

### __primitive--complex-brick-shapes--L--top

- Size: `40x40px`.
- Dimensions: 2x2, 2x3, 2x4.
- Perspective: iso, top.
- Orientation: 1, 2, 3, 4.
- Rotation: 0°, 90°.

### __primitive--basic-brick-shapes--top

- Size: `20x20px`.
- Fill: `#FFFFFF`.
- Perspective: iso, top.
- Tile count: 1x1, 1x2, 1x3, 1x4, 1x5, 1x6, 2x2, 2x3, 2x4, 2x5, 2x6, 3x3, 3x4, 3x5, 3x6, 4x4, 4x5, 4x6.
- X, Y, and Z rotation: 0°, 90°.

### __primitive--complex-brick-shapes-slope--side

- Size: `40x24px`.
- Fill: `#FFFFFF`.
- Perspective: front, iso left, iso right.
- Tile size: 2, 3.
- Height: 1.
- Rotation: 0°, 90°.

### __primitive--basic-brick-shapes--side

- Size: `20x24px`.
- Fill: `#FFFFFF`.
- Perspective: front, iso left, iso right, iso top.
- Tile size: 1, 2, 3, 4, 5, 6.
- Height: 1, 2, 5, Plate.
- X, Y, and Z rotation: 0°, 90°.

### __primitive--brick-component-color

- Size: `12x12px`.
- Fill: `#9C9C9C`.
- Shading: default, highlight, shadow.

### __primitive--brick-component--peg

- Size: `20x20px`.
- Perspective: front, iso, top.
- X and Z rotation: 0°, 90°.
- Type: Default, Minifigure.

### __primitive--round-brick--main

- Size: `20x20px`.
- Stroke: `#212121`, 1px.

### __primitive--circle-brick--base

- Size: `16x4px`.
- Stroke: `#212121`, 1px.

### __primitive--peg-frame--top

- Size: `20x20px`.

## Screen patterns

### Cover

- Canvas: `1920x1080px`.
- Contains a decorative mask group, LEGO Logo, title text, supporting text, trademark text, and a large rectangular brick illustration.
- Title: Archivo Black, `96px`.
- Supporting and trademark text use Archivo SemiBold at `48px` and `24px`.
- Brick artwork combines rectangular brick side and top primitives, brick pegs, peg frames, peg bases, component color, highlights, shadows, and strokes.
- Logo size: `256x256px`.

## Notes for implementers

- Prefer named component families over recreating brick geometry manually.
- Preserve the distinction between front, side, top, iso, iso left, and iso right perspectives.
- Use the listed variant values exactly; many brick components expose independent rotation, dimension, height, tile-count, and perspective controls.
- Use `#000000` for primary outlines and `#0000004D` for shadows.
- Use `#FFFFFF` for component surfaces and highlights; apply 40% opacity only where the source specifies it.
- Use Archivo for UI and display text. Button text is Archivo Regular at `24px`.
- No spacing, motion, grid, or local effect token collections were found.
