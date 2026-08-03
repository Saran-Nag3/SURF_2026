---
name: raycast-app-style-icons-community
source: Raycast App Style Icons (Community)
kind: design-system-context
---

# raycast - Design System

## Overview

A single-page Raycast app-style icon cover design. The visual direction is dark, metallic, dimensional, and centered around rounded icon forms with large typographic labeling.

- Source page: Page 1
- Screen size: 1552 × 960px
- No local variables, paint styles, text styles, components, grids, motion tokens, or spacing/radius tokens were found.

## Design language

- Dark, metallic visual treatment.
- Uses radial and linear gradients for dimensional surfaces.
- Strongly rounded containers and pill-like elements.
- Layered drop shadows and inner shadows create depth.
- Centered compositions with large, high-contrast typography.
- Decorative geometric shapes appear within the large rounded icon frames.

## Color palette

Raw unstyled colors, ranked by usage:

| Color | Usage |
|---|---:|
| #D9D9D9 | 3 |
| #FFFFFF | 3 |

No local color tokens or paint styles were found.

## Type scale

| Font | Weight | Size | Usage |
|---|---|---:|---:|
| Inter | Medium | 51px | 3 |
| Inter | SemiBold | 51px | 3 |

Observed text roles:

- Large heading text uses Inter Medium at 51px.
- Large numeric text uses Inter SemiBold at 51px.
- Text line height was extracted as 62px for the 51px text instances.

## Spacing scale

No spacing tokens were found.

Observed layout values:

- Padding: 16.36px on all sides of the small rounded numeric frames.
- Gap: 16.36px within the small rounded numeric frames.

## Radius scale

No radius tokens were found.

Observed corner radii:

- 69px
- 76px
- 80.18px

## Elevation & effects

Observed effect patterns:

- Large icon frames use a drop shadow with a 37px blur and a vertical offset of 20px.
- Small numeric frames use a drop shadow with a 12px blur and an offset of -8px horizontally and 8px vertically.
- Small numeric frames use inner shadows with 6px and 4px blur values.
- The page frame uses a drop shadow with a 2px blur and a vertical offset of 1px.
- The page frame also uses inner shadows with 3px and 2px blur values.

## Components

_None found in source._

## Screen patterns

### Page 1 — Plugin / file cover - 1

- Canvas: 1552 × 960px.
- Three large 364 × 364px rounded icon frames form the primary decorative group.
- The large frames use radii of 76px, 69px, and 69px.
- Three small 126 × 83.45px rounded numeric frames appear within the composition.
- Each small frame contains the number “4”, set in Inter SemiBold at 51px.
- The title “Raycast App Style Icons” uses Inter Medium at 51px.
- The byline “by Ste” uses Inter Medium at 51px.
- Decorative shapes are contained within the large icon frames.

## Notes for implementers

- Preserve the dark metallic and dimensional visual direction.
- Use only the extracted typefaces and sizes: Inter Medium or Inter SemiBold at 51px.
- Use large rounded forms with the observed radii rather than introducing additional radius values.
- Reproduce the layered shadow treatment for depth on both large and small frames.
- Keep the primary composition centered and spacious within the 1552 × 960px cover.
- No reusable component family or component geometry was defined in the source.
