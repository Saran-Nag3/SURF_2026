---
name: databricks-web-design-community
source: databricks -web design (Community)
kind: design-system-context
---

# databricks - Design System

## Overview

- Source: Figma file `databricks -web design (Community)`.
- Source page: All pages (2): cover, design.
- Extracted screens: `cover` and `Catalog`.
- No local variable collections, typography styles, spacing variables, radius variables, motion tokens, grid styles, or component families were found.
- The extracted application screen uses a light interface with a fixed header, left navigation, search controls, and a large content workspace.

## Design language

- Light, utility-focused application UI.
- Primary text is dark neutral, with blue used for selected navigation and red used for new or alert states.
- Navigation uses compact 32px rows with small corner radii.
- Controls use white surfaces, thin borders, compact spacing, and 4px corner radii.
- Typography is predominantly PingFang SC at 14px, with IBM Plex Sans also used in application controls.
- The cover screen uses large abstract blurred orb artwork and a prominent image panel; its gradients use colors outside the approved palette and should not be treated as reusable color tokens.

## Color palette

Ranked by raw usage count where available:

| Color | Usage | Observed role |
|---|---:|---|
| `#DFDFDF` | 797 | Most-used neutral |
| `#4A7B30` | 247 | Green accent |
| `#3464A3` | 161 | Selected navigation text and blue accent |
| `#00000033` | 89 | Borders and subtle outlines |
| `#0000001A` | 80 | Soft shadow |
| `#AB434D` | 73 | Red accent |
| `#7A8999` | 65 | Muted neutral |
| `#63717F` | 47 | Secondary neutral |
| `#404954` | 43 | Dark secondary neutral |
| `#5A6674` | 41 | Secondary neutral |
| `#CDD3DA` | 41 | Light border neutral |
| `#F5F6F8` | 38 | Light navigation surface |
| `#FF3621` | 35 | Red accent, new state, notification |
| `#FFFFFF` | 32 | White surface and light text |
| `#AB434D66` | 21 | Translucent red |
| `#0A6CC7` | 19 | Blue accent |
| `#D11F28` | 19 | Dark red accent |
| `#333333` | 18 | Primary interface text |
| `#8F959E` | 15 | Muted neutral |
| `#D8E2EE` | 14 | Selected navigation background |
| `#DADFE6` | 14 | Light neutral |
| `#FF36211A` | 13 | Translucent red background or border |
| `#AB434D1A` | 11 | Translucent red |
| `#B9C3D0` | 11 | Input border |
| `#FFFFFF99` | 27 token uses | `huly.app/Nero 60%` token |
| `#080808` | 1 token use | `Editor/Light/Default text` token |

## Type scale

No local text styles were found. Observed typography:

| Size | Font and weight | Usage |
|---:|---|---:|
| 24px | PingFang SC Semibold | Heading |
| 16px | PingFang SC Semibold | Larger interface text |
| 14px | PingFang SC Regular | Primary body and control text |
| 14px | PingFang SC Bold | Navigation labels |
| 14px | PingFang SC Medium | Medium-emphasis interface text |
| 14px | PingFang SC Semibold | Emphasized interface text |
| 14px | IBM Plex Sans Regular | Application controls |
| 14px | SF Pro Display Regular | Interface text |
| 12px | PingFang SC Regular | Small labels |
| 12px | PingFang SC Medium | Small labels |
| 10px | PingFang SC Semibold | Compact labels |
| 7px | PingFang SC Medium | Micro text |

Most-used text style: PingFang SC Regular, 14px. Secondary most-used style: PingFang SC Bold, 14px.

## Spacing scale

No spacing variables were found. Observed layout values:

- `0px`: no padding or gap.
- `1px`: borders and compact overlays.
- `2px`: compact icon or control padding.
- `4px`: control padding, icon gaps, and compact spacing.
- `5px`: small control gap.
- `8px`: common gap and padding.
- `10px`: compact control padding.
- `12px`: navigation and input padding.
- `16px`: icon and control sizing.
- `17.37px`: space-between gap in a content header.
- `20px`: section gap.
- `24px`: navigation section inset.
- `32px`: repeated navigation row and button height.
- `52px`: navigation top margin height.
- `56px`: application header height.
- `76px`: content panel header height.
- `128px`, `192px`, `224px`, `256px`, `828px`, `916px`, `1024px`: observed structural dimensions, not spacing tokens.

## Radius scale

No radius variables were found. Observed corner radii:

- `3px`: compact overlay.
- `4px`: inputs, buttons, and compact navigation rows.
- `6px`: grouped navigation rows.
- `8px`: navigation callout and content container.
- `99px`: circular avatar.
- Composite radii observed: `4/0/0/4px`, `0/4/4/0px`, and `8/8/0/0px`.

## Elevation & effects

Observed reusable effect styles:

- `中间层阴影`: drop shadow, `6px`, offset `0 0`, color `#3333334D`.
- `弹窗阴影`: drop shadow, `8px`, offset `0 3`, color `#3333334D`.

Additional screen-level shadows and blur effects were extracted, but their associated colors are not part of the approved palette and should not be generalized as design tokens.

## Components

_None found in source._

## Screen patterns

- **Cover screen**
  - Frame size: `1600x960px`.
  - Uses abstract, oversized blurred orb artwork and a prominent image panel.
  - Includes a logo area and a 32px heading treatment in the extracted artwork composition.
  - The artwork includes gradients, blur, inner shadows, and background blur that are specific to the cover composition.

- **Catalog application screen**
  - Frame size: `1920x1080px`.
  - Fixed application header: `1920x56px`.
  - Left navigation: `220px` wide and full remaining height.
  - Main content region: `1692px` wide and full remaining height.
  - Header search field: `560x36px`, white surface, `4px` radius, `1px` border in `#B9C3D0`.
  - Main content search control: `242x32px`, paired with a `54x32px` action button.
  - Navigation rows are generally `196x32px` inside a `220px` navigation column.
  - Selected navigation uses `#D8E2EE` background and `#3464A3` text.
  - The “New” navigation callout uses a translucent red treatment with `#FF36211A` and `#FF3621`.
  - Content list items repeat at `296x32px` within a `320px` content panel.

## Notes for implementers

- Prefer PingFang SC at 14px for general interface text; use PingFang SC Bold at 14px for navigation labels.
- Use IBM Plex Sans Regular at 14px for application controls where the source specifies it.
- Preserve the compact control geometry: 32px buttons and navigation rows, 4px input radii, and 8px or 12px horizontal padding.
- Use `#333333` for primary interface text, `#3464A3` for selected navigation text, `#D8E2EE` for selected navigation background, and `#FF3621` for new or alert states.
- Use `#B9C3D0` for input borders where the source specifies that border.
- Do not infer reusable components from the raw node tree; the extraction contains no component family definitions or component specifications.
- Treat cover artwork gradients and blur effects as screen-specific composition rather than palette or component tokens.
