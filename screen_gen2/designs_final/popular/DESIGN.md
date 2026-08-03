---
name: popular
source: Popular App & Website Mockups (Community)
kind: design-system-context
---

# popular - Design System

## Overview

A community collection of app and website mockups across the Mockups, Thumbnail, and About pages. The extraction contains reusable mockup component families, Inter-based typography tokens, a broad neutral and accent palette, and a small set of shadow effects.

## Design language

- UI styles range from dark productivity interfaces to light sign-in and dashboard screens.
- Inter is the primary design-system typeface, with Inter Medium, Regular, SemiBold, Black, and ExtraBold weights represented.
- Additional product-specific typography uses Poppins, SF Pro Rounded, and Helvetica Neue.
- Mockup canvases are commonly `1600x900px`.
- Common mockup containers use `16px` corner radius and `1px` strokes.
- Layouts use clear sidebar/content splits, compact navigation controls, status rows, issue lists, account selectors, and dashboard-style content areas.
- Use restrained neutral surfaces with blue, purple, orange, green, red, and yellow accents.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Common role |
|---|---:|---|
| `#333333` | 174 | Primary dark text or UI content |
| `#FFFFFF` | 75 | Light surfaces and inverse text |
| `#222222` | 42 | Dark UI surfaces or text |
| `#E5E5E5` | 34 | Neutral surfaces; `gray/500` |
| `#D5D5D5` | 30 | Neutral borders and fills |
| `#18A0FB` | 20 | Bright blue accent |
| `#000000` | 16 | Black text and icon content |
| `#606060` | 14 | Secondary gray content |
| `#CDC3CE` | 12 | Muted purple-gray |
| `#EAEAEA` | 8 | Light borders |
| `#3A123E` | 7 | Deep purple surface |
| `#8394EA` | 7 | Soft blue-purple accent |
| `#F58B4F` | 7 | Orange status accent |
| `#B3B3B3` | 6 | Muted gray content |
| `#F9F9FA` | 5 | Off-white surface |
| `#3D3F44` | 4 | Dark borders |
| `#636565` | 4 | Secondary dark gray |
| `#78786A` | 4 | Muted olive-gray |
| `#BC3755` | 4 | Red-magenta accent |
| `#BCBDBD` | 4 | Light gray content |
| `#D3D3D3` | 4 | Light gray surface |
| `#F9F9FF` | 4 | Very light cool surface |
| `#2C2C2C` | 3 | Dark surface or text |
| `#2E2E28` | 3 | Warm dark neutral |
| `#4C2851` | 3 | Purple border |
| `#505A8A` | 3 | Muted blue accent |
| `#616061` | 3 | Gray content |
| `#62C453` | 3 | Green accent |
| `#EC6A5F` | 3 | Coral accent |
| `#F5BF4F` | 3 | Yellow accent |

Named color tokens:

- `gray/500`: `#E5E5E5`
- `gray/800`: `#656D79`
- `dark/100`: `#D7D8DB`
- `gray/900`: no value found
- `primary/white`: no value found

## Type scale

All listed design-system typography uses `123.94%` line height and `0px` tracking unless otherwise noted.

| Token | Typeface | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| `website heading/Heading 1` | Inter | 900 | `64px` | `99.15%` | `-1.92px` |
| `semibold/4xl` | Inter | 600 | `36px` | `123.94%` | `0px` |
| `medium/3xl` | Inter | 500 | `30px` | `123.94%` | `0px` |
| `semibold/3xl` | Inter | 600 | `30px` | `123.94%` | `0px` |
| `medium/2xl` | Inter | 500 | `24px` | `123.94%` | `0px` |
| `medium/xl` | Inter | 500 | `20px` | `123.94%` | `0px` |
| `semibold/xl` | Inter | 600 | `20px` | `123.94%` | `0px` |
| `medium/lg` | Inter | 500 | `18px` | `123.94%` | `0px` |
| `regular/lg` | Inter | 400 | `18px` | `123.94%` | `0px` |
| `semibold/lg` | Inter | 600 | `18px` | `123.94%` | `0px` |
| `regular/base` | Inter | 400 | `16px` | `123.94%` | `0px` |
| `semibold/base` | Inter | 600 | `16px` | `123.94%` | `0px` |
| `medium/sm` | Inter | 500 | `14px` | `123.94%` | `0px` |
| `semibold/sm` | Inter | 600 | `14px` | `123.94%` | `0px` |

Raw, unstyled typography also appears:

- Poppins Regular, `16px`
- SF Pro Rounded Medium, `16px`
- Helvetica Neue Bold, `36px`

## Spacing scale

_None found in source._

Observed layout spacing values include `8px`, `16px`, and `32px` gaps or padding, but no spacing variables were defined.

## Radius scale

No radius variables were defined. Observed component and element radii:

- `16px`: common mockup container radius
- `8px`: buttons, account tiles, and selected controls
- `4px`: icon container radius

## Elevation & effects

- `Gentle Backdrop`: drop shadow, offset `0 8`, blur `32px`, color `#00000026`
- `Sketch Shadow (Prod)`: drop shadow, offset `0 0`, blur `0px`, color `#0000000F`; plus drop shadow, offset `0 10`, blur `36px`, color `#00000029`
- `dropshadow/md`: drop shadow, offset `0 4`, blur `6px`, color `#0000001A`; plus drop shadow, offset `0 2`, blur `4px`, color `#0000000F`

## Components

All extracted component families:

- **Frogma - layers**
  - `1600x900px`, `16px` radius
  - Fill `#E5E5E5`
  - `1px` stroke using `gray/500` (`#E5E5E5`)
  - Text includes Inter ExtraBold at `144px`, `medium/lg`, `regular/lg`, and `medium/2xl`

- **Terminal**
  - `1600x900px`
  - `16px` radius
  - Fill `#171717`

- **Oops!**
  - `1600x900px`, `16px` radius
  - Fill `#FFFFFF`
  - `1px` stroke `#EAEAEA`
  - Text includes Helvetica Neue at `24px` and Helvetica Neue Bold at `36px`

- **Magicsheet**
  - `1600x900px`
  - Fill `#EBF2FE`
  - `1px` stroke `#EAEAEA`
  - Text includes SF Pro Rounded Medium at `16px` and `17.5px`, and SF Pro Rounded Semibold at `36px` and `48px`

- **Lamp sign in**
  - `1600x900px`, `16px` radius
  - Fill `#FFFFFF`
  - `1px` stroke `#EAEAEA`
  - Text includes Poppins Regular at `16px` and Poppins Medium at `36px` and `48px`

- **Brekt Sign In**
  - `1600x900px`, `16px` radius
  - Fill `#FFFFFF`
  - `1px` stroke `#EAEAEA`
  - Text uses `medium/sm`, `semibold/base`, `semibold/4xl`, `semibold/xl`, and Helvetica Neue Bold at `36px`

- **Brekt Reports**
  - `1600x900px`, `16px` radius
  - Fill `#F9F9F9`
  - `1px` stroke `#EAEAEA`
  - Text uses `semibold/base`, Inter Medium at `12px`, `medium/sm`, `semibold/3xl`, `semibold/sm`, `semibold/xl`, and Helvetica Neue Bold at `36px`

- **Frogma logo**
  - `1600x900px`, `16px` radius
  - Fill `#E5E5E5`
  - `1px` stroke using `gray/500` (`#E5E5E5`)
  - Text includes `regular/lg`, `medium/lg`, and `medium/2xl`

- **Frogma**
  - `1600x900px`, `16px` radius
  - Fill `#E5E5E5`
  - `1px` stroke using `gray/500` (`#E5E5E5`)
  - Text includes Inter SemiBold at `64px`, Inter ExtraBold at `144px`, `medium/lg`, `regular/lg`, and `medium/2xl`

- **Whack app**
  - `1600x900px`, `16px` radius
  - Fill `#FFFFFF`
  - `1px` stroke `#68516B`
  - Text includes `medium/xl`, `medium/lg`, `regular/base`, `semibold/lg`, `semibold/xl`, Inter SemiBold at `15px`, Inter ExtraBold at `18px` and `20px`, and `semibold/3xl`

- **Exponential app**
  - `1600x900px`, `16px` radius
  - Fill `#FFFFFF`
  - `1px` stroke `#3D3F44`
  - Text includes `medium/3xl`

## Screen patterns

- **Exponential app**
  - Dark desktop application layout with a `318px` sidebar and `1282px` main area inside a `1600x900px` canvas.
  - Sidebar and main background use a dark neutral surface; the extracted source also identifies `#3D3F44` as a border color.
  - Sidebar navigation contains `70px`-high menu rows with `16px` gaps and `40px` icons.
  - Main content uses `77px`-high status, issue-header, and issue rows.
  - Horizontal content padding is `32px`; vertical padding is `16px`.
  - Issue rows use `32px` controls, `32px` status rings, `16px` gaps, and muted opacity for secondary metadata.
  - Window controls are three `16px` circles with coral, yellow, and green fills: `#EC6A5F`, `#F5BF4F`, and `#62C453`.
  - The account area uses a `32px` logo and `32px` avatar.

- **Whack app**
  - Light desktop application layout with a `318px` sidebar inside a `1600x900px` canvas.
  - Sidebar background uses deep purple `#3A123E` with `#4C2851` borders.
  - Account navigation uses `48x48px` tiles with `8px` radius.
  - The selected account tile has a white `6px` stroke.
  - The component uses a white outer surface and a `1px` `#68516B` stroke.

- **Other mockup screens**
  - `Oops!`, `Magicsheet`, `Lamp sign in`, `Brekt Sign In`, `Brekt Reports`, `Frogma`, `Frogma - layers`, `Frogma logo`, and `Terminal` are provided as standalone `1600x900px` mockup canvases with the fills, borders, radii, and typography listed in Components.

## Notes for implementers

- Use only the listed palette colors; prioritize the highest-usage neutrals for general UI and use accent colors for statuses, controls, and product identity.
- Prefer Inter typography tokens for shared UI. Use Poppins, SF Pro Rounded, or Helvetica Neue only for the product-specific mockup families that specify them.
- Preserve the `1600x900px` mockup canvas and `16px` outer radius where a component family specifies them.
- For Exponential-style layouts, preserve the `318px` sidebar / `1282px` content split, `77px` row rhythm, `32px` horizontal padding, and `16px` vertical padding.
- For Whack-style account navigation, use `48x48px` tiles with `8px` radius and a `6px` selected-state stroke.
- Apply the named shadow effects only where elevation is required; do not add unlisted effects.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.
