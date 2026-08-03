---
name: lovable-task-board-generate-interface-community
source: Lovable/Task Board-Generate Interface (Community)
kind: design-system-context
---

# lovable - Design System

## Overview

- Source page: `Design draft display`
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.
- The extraction combines a dark editor interface, a generated music-player preview, a task-board generation flow, and a large visual presentation layer.
- The dominant product language is dark, compact, editor-oriented UI with blue action states and purple presentation accents.

## Design language

- Use dark surfaces with high-contrast white text and muted gray-beige secondary text.
- Use blue for primary actions and links.
- Use green as a limited accent for menu or status indicators.
- Use rounded controls, compact 28–40px button heights, and dense editor panels.
- Presentation headings use very large display typography and purple emphasis.
- The editor preview uses a two-column structure: narrow navigation/sidebar plus a larger content canvas.
- The generated task-board interface uses a dark application shell with a top bar, left sidebar, main workspace, and floating circular action button.

## Color palette

Ranked by raw unstyled usage where counts were available:

| Color | Usage | Role |
|---|---:|---|
| `#E2E8F0` | 139 | Light border or neutral UI detail |
| `#00000000` | 131 | Transparent fill or stroke |
| `#9CA3AF` | 101 | Muted neutral text or icon |
| `#FFFFFF` | 55 | Primary text, light controls, icon strokes |
| `#D9D9D9` | 44 | Neutral surface/detail |
| `#D1D5DB` | 23 | Light neutral border/detail |
| `#374151` | 21 | Dark shell border |
| `#000000` | 19 | Black detail |
| `#1F2937` | 12 | Dark application chrome |
| `#3B82F6` | 9 | Blue action or interactive accent |
| `#8363EE` | 8 | Purple presentation heading |
| `#4B5563` | 7 | Neutral border |
| `#6B7280` | 5 | Muted gray |
| `#8B5CF6` | 5 | Purple accent |
| `#22C55E` | 4 | Green status/accent |
| `#121212` | — | Dark editor surface |
| `#1C1C1C` | — | Dark editor surface |
| `#272725` | — | Dark neutral surface, border, or control |
| `#FCFBF8` | — | Warm light text/surface |
| `#C5C1BA` | — | Warm muted text |
| `#26344B` | — | Dark blue control surface |
| `#1E52F1` | — | Primary blue action |
| `#F0F6FF` | — | Pale blue text or surface |
| `#D4D4D8` | — | Light neutral detail |
| `#1E1E1E` | — | Dark content surface |
| `#B3B3B3` | — | Muted neutral text |
| `#2A2A2A` | — | Dark card surface |
| `#191414` | — | Dark surface |
| `#3ECF8E` | — | Green accent |
| `#1F68DB` | — | Blue link/action |
| `#FCFBF880` | — | Translucent warm light surface |

### Color relationships

- Primary dark surfaces: `#121212`, `#1C1C1C`, `#1E1E1E`, `#191414`, `#272725`, `#2A2A2A`.
- Primary light text: `#FFFFFF`, `#FCFBF8`.
- Muted text: `#9CA3AF`, `#B3B3B3`, `#C5C1BA`, `#6B7280`.
- Primary actions: `#1E52F1`, `#1F68DB`, `#3B82F6`.
- Presentation accents: `#8363EE`, `#8B5CF6`.
- Green accents: `#3ECF8E`, `#22C55E`.
- Borders and neutral details: `#D1D5DB`, `#D4D4D8`, `#E2E8F0`, `#374151`, `#4B5563`.

## Type scale

### Families and weights

- Inter Regular: 12px, 13px, 14px, 15px, 16px.
- Inter Medium: 11px, 13px, 14px, 15px.
- Inter Bold: 19px, 23px, 28px.
- Inter ExtraBold: 60px, 80px.
- Roboto Regular: 54px.
- Roboto SemiBold: 90px.
- Roboto Bold: 100px.
- Roboto ExtraBold: 200px.
- Inter Medium: 300px.

### Hierarchy

- 11px: small advanced label.
- 12px: compact supporting text.
- 13px: default control labels, navigation, and metadata.
- 14px: standard body and action text.
- 15–16px: larger input and body text.
- 19px: sidebar heading.
- 23px: section heading.
- 28px: primary editor heading.
- 54px: large generated prompt text.
- 60–100px: presentation headings.
- 200–300px: oversized process or start display text.

## Spacing scale

Observed explicit padding, gaps, and layout values:

`0px`, `5px`, `6px`, `8px`, `10px`, `12px`, `16px`, `24px`, `40px`, `50px`, `80px`, `100px`, `116px`, `120px`, `167px`.

Notable layout applications:

- Navigation height: `48px`.
- Compact buttons: `28px` high.
- Standard controls: `32px`, `36px`, `37px`, `40px` high.
- Form height: `93px`.
- Editor top bar: `64px`.
- Main editor canvas: `792px` high.
- Editor content padding includes `24px`.
- Presentation card padding: `80px` vertical and `120px` horizontal.
- Major process layouts use `50px`, `100px`, and `116px` gaps.

## Radius scale

Observed radii:

- `4px`
- `6px`
- `8px`
- `12px`
- `16px`
- `24px`
- `30px`
- `44px`
- `100px`
- `9999px`

Usage patterns:

- `6px`: compact buttons, inputs, textareas, comboboxes.
- `8px`: bordered navigation fields and content cards.
- `12px`: editor containers and forms.
- `24px`: large generated-preview frame.
- `44px`: presentation logo and process groups.
- `9999px`: circular controls and pill buttons.

## Elevation & effects

- Drop shadows are used on compact dark controls, with observed offsets including `0 1px`, `0 2px`, and `0 4px`.
- Larger floating controls use layered shadows with offsets including `0 4px`, `0 10px`, and `0 16px`.
- A layer blur effect with `116.03px` was observed on a purple presentation ellipse.
- Gradients are used on editor backgrounds, logos, and presentation surfaces.
- Opacity values observed include `50%`, `60%`, `70%`, `80%`, and `30%`.
- No local effect styles were defined.

## Components

_None found in source._

## Screen patterns

### Design draft display / 3

- Large process-presentation canvas measuring `8258px × 2639px`.
- Dark editor preview measuring `1440px × 900px`, with a `48px` navigation bar.
- Editor content uses a `1015px × 852px` bordered container with a `256px` sidebar and a `758px × 843px` content area.
- Preview content includes “Good evening”, “Recently played”, “Made for you”, and “Popular right now” sections.
- A right-side style editor panel measures approximately `398.98px × 677px`, with controls for font size, font weight, color, background, and border radius.
- A prompt form measures approximately `398.98px × 93px`.
- The process presentation includes large steps for extracting style, analyzing requirements, and generating an editable UI.
- A generated task-board preview uses a `1439px × 856px` application shell with a `64px` top bar, `157.41px` sidebar, `1281.59px` main area, and a `56px` circular floating action button.
- A large “Generate process” heading and a rounded gradient “Start➡️” call-to-action conclude the screen.

### Design draft display / 2

- Large visual cover layout measuring approximately `1923.56px × 1624.56px`.
- The primary cover frame measures `1920px × 1200px`.
- Branding is presented with a large logo and “UIdraft Make” heading.
- Oversized category labels include “Color”, “Typography”, “Spacing”, “Border”, and “Effect”.
- The layout uses layered decorative shapes and blurred presentation accents.
- The visible type is primarily large Roboto display text with varying opacity.

## Notes for implementers

- Prefer Inter for product UI and Roboto for large presentation or generated-prompt typography.
- Keep editor surfaces dark and controls compact; use `28px` buttons for navigation actions and `32–40px` controls for forms.
- Use `#1E52F1` or `#1F68DB` for primary actions such as Publish, Save, and links; use `#3ECF8E` or `#22C55E` sparingly for status accents.
- Use `#FFFFFF` or `#FCFBF8` for high-priority text and `#9CA3AF`, `#B3B3B3`, or `#C5C1BA` for supporting text.
- Apply `6px` radii to compact controls, `12px` radii to editor containers, and `9999px` only for circular or pill-shaped controls.
- Do not infer additional component families, design tokens, or values; none were defined in the source.
