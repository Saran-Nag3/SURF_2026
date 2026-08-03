---
name: claude
source: Claude AI Tool for Fitness App (Community)
generated_at: 2026-07-26T04:18:05.753037+00:00
kind: design-system-context
---

# claude - Design System

> Curated from Figma extraction for use as build context. Values are verbatim from the source file; palette and type scale are de-duplicated and ranked by usage.

## Overview
Deterministic extraction. Run design_synth.py --llm for a written summary.

## Design language
- Primary typeface: **Inter** across 14 sizes.
- Corner treatment: _no radius tokens; set per component_.
- Accent color: **#30D158** (HTML.To.Design Color Styles/Emerald).
- Scale: 15 component families, 24 curated swatches.

## Color palette
- `#30D158` - brand/accent: HTML.To.Design Color Styles/Emerald, 212 uses
- `#4CD964` - brand/accent: HTML.To.Design Color Styles/Emerald, 106 uses
- `#5DC47A` - brand/accent: (unnamed), 47 uses
- `#276A35` - brand/accent: HTML.To.Design Color Styles/Green Pea, 30 uses
- `#1D9E4A` - brand/accent: (unnamed), 25 uses
- `#E0A020` - brand/accent: (unnamed), 10 uses
- `#7A5000` - brand/accent: HTML.To.Design Color Styles/Cinnamon, 8 uses
- `#FFCC00` - brand/accent: HTML.To.Design Color Styles/Supernova, 8 uses
- `#1A3F7A` - brand/accent: HTML.To.Design Color Styles/Chathams Blue, 7 uses
- `#5AC8FA` - brand/accent: HTML.To.Design Color Styles/Malibu, 7 uses
- `#FFFFFF` - surface: HTML.To.Design Color Styles/White, 390 uses
- `#E3F5E9` - surface: HTML.To.Design Color Styles/Frostee, 42 uses
- `#FFF3D6` - surface: HTML.To.Design Color Styles/Gallery, 11 uses
- `#000000` - text: HTML.To.Design Color Styles/Shark, 1235 uses
- `#1C1C1E` - text: HTML.To.Design Color Styles/Shark, 305 uses
- `#2C2C2E` - text: HTML.To.Design Color Styles/Ship Gray, 92 uses
- `#169931` - text: Text/Accent D1, 27 uses
- `#0E6520` - text: Text/Accent L, 26 uses
- `#CECEDE` - text: Text/Basic D, 26 uses
- `#0D3318` - text: HTML.To.Design Color Styles/Bush, 25 uses
- `#1E1400` - text: HTML.To.Design Color Styles/Cola, 9 uses
- `#0A2040` - text: HTML.To.Design Color Styles/Downriver, 6 uses
- `#003302` - text: Filling/Green D1, 4 uses
- `#8E8E93` - other: HTML.To.Design Color Styles/Manatee, 328 uses
- ... +4 more swatches trimmed

## Type scale
- 32px - Heading - Inter Regular (unstyled)
- 21.1px - HTML.To.Design Text Styles/Bold - Inter Bold
- 18px - Headline H1 - Inter Bold
- 17px - HTML.To.Design Text Styles/Bold - Inter Bold
- 16.9px - HTML.To.Design Text Styles/Bold - Inter Bold
- 16.7px - HTML.To.Design Text Styles/Bold - Inter Bold
- 16.5px - HTML.To.Design Text Styles/Bold - Inter Bold
- 16px - Headline H2 - Inter Bold
- 15px - HTML.To.Design Text Styles/Bold - Inter Bold
- 14.9px - HTML.To.Design Text Styles/Medium - Inter Medium
- 14.8px - HTML.To.Design Text Styles/Bold - Inter Bold
- 14.6px - HTML.To.Design Text Styles/Medium - Inter Medium
- 14.5px - HTML.To.Design Text Styles/Medium - Inter Medium
- 14.3px - HTML.To.Design Text Styles/Bold - Inter Bold

## Spacing scale
_None found in source._

## Radius scale
_None found in source._

## Elevation & effects
_None found in source._

## Components
- Headline: size 108x20px, padding 0 0 0 0px, gap 0px, text [Headline H2] | variants: Header: H1/H2/H3 (6 uses)
- Activity Card: size 343x56px, radius 8px, padding 16 16 16 16px, gap 8px, stroke Lines/Lines L 1px, text [12, Medium, 14, Regular]
- Avatar: size 32x32px, radius 16px, padding 8 8 8 8px, gap 0px, fill Filling/Green L2, text [13, Bold]
- Button / Primary: size 343x44px, radius 8px, padding 0 16 0 16px, gap 0px, fill Filling/Green L1, text [16, Semi Bold]
- Caption: size 343x14px, padding 0 0 0 0px, gap 0px, text [11, UpperCase]
- Heading: size 309x20px, padding 0 0 0 0px, gap 129.5px, text [Inter Medium, 10px, Headline H2]
- KPI Trend: size 27x12px, padding 0 0 0 0px, gap 0px, text [10, Medium]
- KPI Value: size 51x18px, padding 0 0 0 0px, gap 0px, text [Inter Bold, 14px]
- Status Bar: size 375x44px, padding 8 16 0 16px, gap 280.94px, fill #FFFFFF, stroke Lines/Lines L 0px, text [12, Medium]
- Streak Cell: size 28x28px, radius 4px, padding 0 0 0 0px, gap 0px, fill Filling/Green L1, text [11, Bold] | variants: State: Done/Not done/Today
- SubText: size 111x16px, padding 0 0 0 0px, gap 0px, text [12, Medium] | variants: State: Medium/Regular
- Tab Bar: size 375x83px, radius 0/0/30/30px, fill #F2F2F7, stroke Lines/Lines L 1px, text [11, SemiBold] | variants: Scheme: Dark/Light; Tabs: Alerts/Home/Library/Progress/Split
- Tab Bar Icon: size 20x20px | variants: Type: Alerts/Home/Library/Progress/Splits; State: Active/Default
- Tag: size 83x20px, radius 4px, padding 4 8 4 8px, gap 0px, fill Filling/Green L2, text [Inter Medium, 10px] | variants: Theme: Dark/Light; Type: Border/Filled; Color: Green
- openmoji: fill #FFFFFF

## Screen patterns
- 9 screen(s) extracted.
- `Cover`
- `01 Step: Request`
- `02 Step: Result`
- `03 Step: Export from Claude`
- `04.01 Step: Import to Figma: drag-and-drop SVG file`
- `04.02 Step: Import to Figma: with HTML.To.Design plugin`
- `05 Step: Resize to 375px + Light scheme`
- `Fitness App`
- `Components`

## Notes for implementers
- Prefer palette swatches and the type scale above over one-off values.
- Roles (surface / text / border / accent) are inferred; verify against brand intent.
- Full node-by-node structure is omitted here; see guidelines.json for exact geometry.
