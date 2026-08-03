---
name: cash-app
source: Cash App UI - 2023 (Community)
generated_at: 2026-07-26T04:14:50.834028+00:00
kind: design-system-context
---

# cash-app - Design System

> Curated from Figma extraction for use as build context. Values are verbatim from the source file; palette and type scale are de-duplicated and ranked by usage.

## Overview
Deterministic extraction. Run design_synth.py --llm for a written summary.

## Design language
- Primary typeface: **Proxima** across 13 sizes.
- Corner treatment: _no radius tokens; set per component_.
- Accent color: **#000000** (Labels/Primary).
- Scale: 12 component families, 18 curated swatches.

## Color palette
- `#000000` - brand/accent: Labels/Primary, 166 uses
- `#01D651` - brand/accent: Brand/Green/Green 3, 25 uses
- `#2D65DB` - brand/accent: (unnamed), 17 uses
- `#FF0000` - brand/accent: (unnamed), 15 uses
- `#EEDD00` - brand/accent: (unnamed), 14 uses
- `#9747FF` - brand/accent: (unnamed), 7 uses
- `#02CD33` - brand/accent: (unnamed), 6 uses
- `#3A56B7` - brand/accent: (unnamed), 4 uses
- `#A927F9` - brand/accent: (unnamed), 4 uses
- `#C9592F` - brand/accent: (unnamed), 4 uses
- `#00B743` - brand/accent: Brand/Green/Green 1, 3 uses
- `#FFFFFF` - surface: Grays/White, 294 uses
- `#E5E5E5` - surface: Grays/Gray 6, 96 uses
- `#343434` - other: Grays/Gray 1, 187 uses
- `#686868` - other: Grays/Gray 2, 55 uses
- `#C0C0C0` - other: Grays/Gray 4, 46 uses
- `#9D9D9D` - other: Grays/Gray 3, 19 uses
- `#ABB0BA` - other: (unnamed), 4 uses

## Type scale
- 102px - Large Title - Proxima Nova Semibold
- 50.01px - Display - Proxima Nova Semibold (unstyled)
- 43.49px - Display - Proxima Nova Semibold (unstyled)
- 42px - Title 1/Semibold - Proxima Nova Semibold
- 36.97px - Heading - Proxima Nova Semibold (unstyled)
- 32.62px - Heading - Proxima Nova Regular (unstyled)
- 25px - Title 2 - Proxima Nova Semibold
- 23px - Title 3 - Proxima Nova Semibold
- 20px - Headline/Semibold - Proxima Nova Semibold
- 17px - Body/Semibold - Proxima Nova Semibold
- 16px - Callout - Proxima Nova Regular
- 15px - Subhead - Proxima Nova Regular
- 13px - Caption - Proxima Nova Semibold

## Spacing scale
_None found in source._

## Radius scale
_None found in source._

## Elevation & effects
- Shadow/Light: [drop_shadow 16px offset 0 4 #00000005]
- Shadow/Medium: [drop_shadow 24px offset 0 4 #00000014]

## Components
- Button: size 150x48px, radius 100px, padding 8 32 8 32px, gap 8px, fill Brand/Green/Green 2, text [Headline/Semibold] | variants: Hierarchy: Primary/Secondary
- Checkbox: size 24x24px, radius 8px, stroke Grays/Gray 5 3px | variants: Filled: False/True
- Chip: size 78x36px, radius 100px, padding 0 14 0 18px, gap 2px, fill Brand/Green/Green 3, text [Body/Semibold] | variants: Size: Large/Small; Hierarchy: Primary/Secondary/Tertiary; Icon: False/True
- Icon/Chevron: size 32x32px | variants: Direction: Down/Left/Right; Size: Large/Small
- Icon button: size 24x24px, radius 100px, padding 4 4 4 4px, gap 8px, fill Grays/Gray 7
- Keyboard: size 393x246.5px, padding 0 0 0 0px, gap 43px, text [Title 3] | variants: Size: Large/Small
- List item/User: size 393x64px, padding 0 20 0 20px, gap 16px, fill Grays/White, text [Body/Regular, Body/Semibold]
- Nav bar: size 393x89px, padding 12 0 0 0px, gap 24px, fill Grays/White | variants: Type: Default/Transparent
- News card: size 266x178px, radius 24px, padding 24 24 24 24px, gap 24px, fill Grays/White, text [Body/Semibold, Caption]
- Profile pic: size 32x32px, radius 100px | variants: Type: Image/Placeholder; Size: 32/40
- Search input: size 349x40px, radius 100px, padding 0 16 0 16px, gap 4px, fill Grays/Gray 7, text [Body/Regular]
- Sheet/Amount: size 393x465px, radius 48/48/0/0px, padding 10 24 0 24px, gap 64px, fill Grays/White, text [Headline/Semibold, Body/Semibold, Body/Regular]

## Screen patterns
- 14 screen(s) extracted.
- `Home`
- `Add cash`
- `Payment details`
- `Enter PIN`
- `Stocks 1/2`
- `Stocks 2/2`
- `Stock details`
- `Buy stock`
- `Pay amount`
- `Deposit amount`
- `Success`
- `Text styles`
- `Color styles`
- `Components`

## Notes for implementers
- Prefer palette swatches and the type scale above over one-off values.
- Roles (surface / text / border / accent) are inferred; verify against brand intent.
- Full node-by-node structure is omitted here; see guidelines.json for exact geometry.
