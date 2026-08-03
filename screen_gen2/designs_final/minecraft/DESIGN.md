---
name: minecraft-ui-kit-community
source: MINECRAFT UI KIT! 🔥 (Community)
kind: design-system-context
---

# minecraft - Design System

## Overview

Minecraft-themed UI kit extracted from the Figma file “MINECRAFT UI KIT! 🔥 (Community)”. The source contains six pages: Cover, Blocks, Items, UI KIT, Blocks with animations, and Special blocks.

The visual system combines Minecraft pixel-art textures, block and item imagery, pixel-style interface controls, inventory layouts, and a Minecraft-specific display typeface.

## Design language

- Use the Minecraft Minecraft typeface throughout the interface.
- Use pixel-art geometry and hard-edged, stepped outlines.
- Use dark top/left edges with light bottom/right edges to create Minecraft-style beveled surfaces.
- Use texture imagery for blocks, items, characters, and decorative assets.
- Use white text for prominent category headings on image or dark backgrounds.
- Use restrained grayscale UI surfaces with green accents for recipe-book and related interface graphics.
- Prefer fixed, compact UI elements and grid-based inventory arrangements.
- Decorative backgrounds may use many small shapes and a 4px layer blur.

## Color palette

Ranked by usage in the source:

| Color | Usage | Role |
|---|---:|---|
| `#8B8B8B` | 406 | Primary neutral UI fill, slot centers, arrows |
| `#FFFFFF` | 152 | Text, highlights, bottom slot outlines |
| `#373737` | 127 | Dark slot outlines and UI edges |
| `#2A592A` | 74 | Dark green accent |
| `#56AD56` | 68 | Bright green accent |
| `#B7B7B7` | 48 | Light neutral detail |
| `#161005` | 32 | Very dark brown-black detail |
| `#3D7A3D` | 32 | Mid green accent |
| `#1B361B` | 24 | Deep green accent |
| `#478E47` | 22 | Mid-light green accent |
| `#999999` | 18 | Neutral detail |
| `#C6C6C6` | 11 | Light UI surface and shading |
| `#000000` | 8 | Strong outlines |
| `#D6D6D6` | 8 | Light detail |
| `#555555` | 7 | Dark gray bevel detail |

## Type scale

All captured text uses `Minecraft Minecraft`, weight 400, tracking `0px`, with automatic line height.

| Token | Size | Usage |
|---|---:|---|
| Alert | `65px` | Alert text |
| Title | `40px` | Category and screen headings |
| Text | `16px` | Standard interface text |

The source also contains an “All the textures:” heading at `60px` and a URL heading at `100px`, both using Minecraft Minecraft. Their fills are not included because they are outside the allowed palette.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- No local effect styles were found.
- The Cover screen background uses `layer_blur 4px`.
- UI controls use pixel-art beveling rather than documented shadow tokens.
- Item slots use a dark top outline and a white bottom outline.
- Button geometry includes a shadow outline, with the captured button outline using a `1px` black stroke.

## Components

_None found in source._

The source contains no extracted component families. Reusable visual structures are present in the artwork, including item slots, buttons, inventory windows, recipe-book graphics, furnace controls, arrows, and mobile controls, but they are not registered as component families.

## Screen patterns

- **Cover:** A `1920x960px` white frame with a decorative blurred background, character imagery, and a Minecraft UI title image.
- **Blocks:** A large fixed canvas organized into horizontally arranged block-category groups. Categories include Sediment, Stone, Ore, Wood, Plant, Fungus, Animal, Decoration, Building, Utility, Redstone, Creative/Commands only, Debug textures, and Minecraft Earth. Category labels use the Title style and white text.
- **UI KIT:** A fixed `1326.21x1536.43px` composition with a vertical gap of `55px`. It includes mobile controls, a life bar, furnace UI, inventory slots, recipe controls, an inventory window, crafting slots, arrows, fire sparks, and player display artwork.
- **Items, Blocks with animations, Special blocks:** Pages are present in the source, but no summarized screen structure was included in the extracted layout data.

## Notes for implementers

- Do not introduce rounded corners, radius tokens, gradients, or unlisted colors.
- Treat Minecraft Minecraft as the sole captured typeface.
- Preserve hard pixel edges and stepped outlines when recreating UI surfaces.
- Use the palette colors exactly; prioritize the highest-usage neutrals for general UI and the green range for recipe-book-style accents.
- An item slot is captured at `36x36px` with a `32x32px` center, `2x2px` corner details, and `34x34px` top and bottom outlines.
- A recipe button is captured at `40x37px`; its center is `32x28.78px` and its outline uses a `1px` black stroke.
- A furnace slot-product and furnace slot-fuel are captured at `36x36px`; the furnace slot-final product is `52x52px`.
- Inventory layouts use repeated item slots and grid arrangements, including a captured `4x4` crafting area.
- The source has no spacing, radius, motion, grid, local paint-style, or local variable tokens.
