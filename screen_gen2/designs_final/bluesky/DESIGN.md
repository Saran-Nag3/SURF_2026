---
name: bluesky-bsky-app-logo-community
source: BlueSky bsky.app Logo (Community)
kind: design-system-context
---

# bluesky - Design System

## Overview

A logo-focused design system containing three `bsky.app` logo component families in 16px, 512px, and color variants. No local variables, text styles, spacing tokens, radius tokens, motion tokens, effect styles, or grid styles were found.

## Design language

- Use the `bsky.app` logo as the primary visual asset.
- Available logo variants:
  - `bsky.app logo 16`
  - `bsky.app logo 512`
  - `bsky.app logo color`
- Logo components use scale constraints for their vector artwork.
- The documented color component is presented centered in the `BleuSky Logo` frame.

## Color palette

- `#FFFFFF` — documented component fill for all three logo component specifications.
- No local paint styles or color variables were found.
- The source also contains non-white vector fills, but they are not defined as local color tokens.

## Type scale

_None found in source._

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

_None found in source._

## Components

### bsky.app logo 16

- Size: `16x16px`
- Fill: `#FFFFFF`
- Vector artwork: `16x14.09px`
- Constraints: left/top on the component; scale/scale on the vector

### bsky.app logo 512

- Size: `512x512px`
- Fill: `#FFFFFF`
- Vector artwork: `512x450.81px`
- Constraints: left/top on the component; scale/scale on the vector

### bsky.app logo color

- Size: `64x57px`
- Fill: `#FFFFFF`
- Vector artwork: `64x56.53px`
- Constraints: left/top on the component; scale/scale on the vector

## Screen patterns

### Page 1 — Logo components

The page contains standalone instances of the three logo component families: 16px, 512px, and color variants.

### Page 1 — BleuSky Logo

- Frame size: `1920x1080px`
- Contains a centered `bsky.app logo color` instance.
- Instance size: `512x456px`
- Instance constraints: center/center

## Notes for implementers

- Use only the three documented component family names when selecting logo assets.
- Preserve the documented component dimensions unless the consuming layout explicitly requires scaling.
- Keep logo vectors proportional when resizing.
- No typography, spacing, radius, motion, elevation, or effect guidance is defined in the source.
- No style usage counts were available.
