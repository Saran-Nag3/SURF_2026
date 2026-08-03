---
name: phantom
source: Phantom UI Design System (Community)
kind: design-system-context
---

# phantom - Design System

## Overview

- Visual system inspired by Monkeytype.
- Primary typefaces: Roboto Mono and Vazirmatn.
- Main UI colors: dark Background, Primary, Unselected, Secondary, and Error.
- No local variable collections, spacing variables, radius variables, motion tokens, or local grid styles were found.
- Component layouts use fixed dimensions, rounded corners, compact spacing, and centered horizontal controls.

## Design language

- Dark, high-contrast interface centered on `#000011` Background.
- Primary UI emphasis uses `#C0CAF5`; secondary emphasis uses `#7AA2F7`.
- Unselected states use `#414868`.
- Error states use `#FE7D7D`.
- Large rounded controls and soft colored glows are recurring visual patterns.
- Roboto Mono is the main UI and body font. Vazirmatn is used in presentation headings and supporting display content.
- Decorative visual references include Monkeytype homage shapes and gradient-backed title cards.

## Color palette

Ranked where usage counts are available:

| Role | Value | Usage |
|---|---|---:|
| Primary | `#C0CAF5` | 142 uses |
| Unselected | `#414868` | 118 uses |
| Background | `#000011` | 37 uses |
| Error | `#FE7D7D` | 32 uses |
| Secondary | `#7AA2F7` | 9 uses |
| White | `#FFFFFF` | 55 raw uses |
| Success/raw accent | `#C0F5C6` | 12 raw uses |
| Warning/raw accent | `#F5E9C0` | 8 raw uses |
| Translucent dark | `#00001140` | 3 raw uses |
| Primary light effect | `#97ADF6` | Used by primary glows |
| Secondary gradient endpoint | `#485F91` | Used by Secondary Gradient |
| Error gradient endpoint | `#914553` | Used by Error Gradient |
| Gradient dark endpoint | `#70768F` | Used by Primary and Unselected Gradients |
| Error glow color | `#F7768E` | Used by Error Glow |

### Gradients

- **Primary Gradient:** linear gradient from `#C0CAF5` at 0% to `#70768F` at 100%.
- **Unselected Gradient:** linear gradient from `#C0CAF5` at 0% to `#70768F` at 100%.
- **Secondary Gradient:** linear gradient from `#7AA2F7` at 0% to `#485F91` at 100%.
- **Dark Gradient:** linear gradient from `#000011` at 0% to `#414868` at 100%.
- **Error Gradient:** linear gradient from `#FE7D7D` at 0% to `#914553` at 100%.

## Type scale

### Design tokens

All listed line heights are `auto`; tracking is `0px`.

| Token | Font | Weight | Size |
|---|---|---:|---:|
| Title/H1 | Roboto Mono | 700 | 48px |
| Title/H2 | Roboto Mono | 700 | 36px |
| Title/H3 | Roboto Mono | 700 | 30px |
| Title/H4 | Roboto Mono | 500 | 24px |
| Title/H5 | Roboto Mono | 500 | 20px |
| Title/H6 | Roboto Mono | 500 | 16px |
| Body/Lead Text | Roboto Mono | 400 | 20px |
| Body/Paragraph | Roboto Mono | 400 | 16px |
| Body/Small | Roboto Mono | 400 | 14px |
| Body/Tiny | Roboto Mono | 400 | 12px |

### Additional raw typography

- Vazirmatn Bold, 64px.
- Vazirmatn Regular, 40px, 32px, 24px, and 16px.
- Vazirmatn SemiBold, 24px.
- Vazirmatn Medium, 20px.
- Vazirmatn Light, 14px and 12px.
- Roboto Mono Regular, 32px, 24px, and 12px.
- Roboto Mono Medium, 14px.

## Spacing scale

_None found in source._

Component-specific spacing:

- Button Unselected: padding `20px 40px 20px 40px`, gap `10px`.
- Standard button variants: padding `20px 40px 20px 40px`, gap `10px`.
- Desktop Small: padding `10px 20px 10px 20px`, gap `10px`.
- Desktop Medium: padding `15px 30px 15px 30px`, gap `10px`.
- Desktop Large: padding `20px 40px 20px 40px`, gap `10px`.
- Mobile Small: padding `10px 20px 10px 20px`, gap `10px`.
- Mobile Medium: padding `15px 30px 15px 30px`, gap `10px`.
- Mobile Large: padding `20px 40px 20px 40px`, gap `10px`.
- Modal Group: padding `40px 60px 20px 60px`, gap `10px`.
- Navigation Sidebar: padding `50px 80px 378px 80px`, gap `40px`.

## Radius scale

Documented radius values:

- `7.5px`: Mobile Small.
- `10px`: Checkbox Selected and Checkbox Unselected.
- `12.5px`: Mobile Medium and Desktop Small.
- `20px`: standard buttons, Mobile Large, Desktop Medium, popover gradient swatches.
- `25px`: Desktop Large.
- `30px`: Modal Group, Navigation Sidebar, decorative Monkeytype homage.
- `30px / 30px / 0px / 0px`: Modal Group.
- `30px / 0px / 0px / 30px`: Navigation Sidebar.
- `50px`: switch track.

## Elevation & effects

- **Error Glow:** drop shadow, `50px` offset `0 0`, color `#F7768E`.
- **Secondary Glow:** drop shadow, `50px` offset `0 0`, color `#7AA2F7`.
- Button Hovering Selected: drop shadow, `50px` offset `0 0`, color `#97ADF6`.
- Hollow Error: drop shadow, `50px` offset `0 0`, color `#FE7D7D`.
- Hollow Primary: drop shadow, `50px` offset `0 0`, color `#97ADF6`.
- Title-card display text uses `50px` glows in `#97ADF6`.
- Title-card subtitles use `25px` glows in `#97ADF6`.

## Components

Only the documented component families are listed below.

### Buttons

- **Button Unselected**
  - `800x72px`; radius `20px`.
  - Horizontal layout; padding `20px 40px 20px 40px`; gap `10px`.
  - Fixed width and height; align minimum/center.
  - `2px` Unselected stroke.
  - Text: Roboto Mono Regular, `24px`.
  - Variants: Disabled, Error, Password, Regular, Search, Success, Username.
- **Button Error**
  - `167x72px`; radius `20px`.
  - Padding `20px 40px 20px 40px`; gap `10px`; centered.
  - Fill `#FE7D7D`; Error Glow; text Roboto Mono Regular, `24px`.
- **Button Secondary**
  - `167x72px`; radius `20px`.
  - Padding `20px 40px 20px 40px`; gap `10px`; centered.
  - Fill `#7AA2F7`; Secondary Glow; text Roboto Mono Regular, `24px`.
- **Button Hovering Selected**
  - `167x72px`; radius `20px`.
  - Padding `20px 40px 20px 40px`; gap `10px`; centered.
  - Fill `#C0CAF5`; glow `#97ADF6`; text Roboto Mono Regular, `24px`.
- **Button Unselected**
  - `167x72px`; radius `20px`.
  - Padding `20px 40px 20px 40px`; gap `10px`; centered.
  - Fill `#414868`; text Roboto Mono Regular, `24px`.

### Hollow buttons

- **Hollow Error:** `167x72px`, radius `20px`, `2px` Error stroke, Error glow, Roboto Mono Regular `24px`.
- **Hollow Secondary:** `167x72px`, radius `20px`, `2px` Secondary stroke, Roboto Mono Regular `24px`.
- **Hollow Primary:** `167x72px`, radius `20px`, `2px` Primary stroke, `#97ADF6` glow, Roboto Mono Regular `24px`.
- **Hollow Unselected:** `167x72px`, radius `20px`, `2px` Unselected stroke, Roboto Mono Regular `24px`.
- All hollow buttons use padding `20px 40px 20px 40px`, gap `10px`, and centered alignment.

### Responsive buttons

- **Desktop Large:** `196x82px`, radius `25px`, padding `20px 40px 20px 40px`, gap `10px`, Unselected fill, Roboto Mono Regular `32px`.
- **Desktop Medium:** `147x62px`, radius `20px`, padding `15px 30px 15px 30px`, gap `10px`, Unselected fill, Roboto Mono Regular `24px`.
- **Desktop Small:** `98x41px`, radius `12.5px`, padding `10px 20px 10px 20px`, gap `10px`, Unselected fill, Roboto Mono Regular `16px`.
- **Mobile Large:** `153x66px`, radius `20px`, padding `20px 40px 20px 40px`, gap `10px`, Unselected fill, Roboto Mono Regular `20px`.
- **Mobile Medium:** `111x48px`, radius `12.5px`, padding `15px 30px 15px 30px`, gap `10px`, Unselected fill, Roboto Mono Regular `14px`.
- **Mobile Small:** `84x36px`, radius `7.5px`, padding `10px 20px 10px 20px`, gap `10px`, Unselected fill, Roboto Mono Regular `12px`.

### Selection controls

- **Radio Unselected:** `42x42px`, white fill. Documented visual variants include Unselected stroke and Primary fill with Unselected stroke.
- **Checkbox Unselected:** `42x42px`, white fill, `10px` radius, Unselected `3px` stroke.
- **Checkbox Selected:** `42x42px`, `10px` radius, Unselected fill, Primary `3px` stroke, white checkmark frame.
- **Switch Selected:** `85x41px`; Unselected track with Primary knob.
- **Switch Unselected:** `85x41px`; Primary track with Unselected knob.

### Containers and navigation

- **Modal Group**
  - `1179x772px`; radius `30px / 30px / 0px / 0px`.
  - Vertical layout; padding `40px 60px 20px 60px`; gap `10px`.
  - Background fill; `2px` Unselected stroke.
  - Text includes Roboto Mono Regular `24px`, Vazirmatn SemiBold `24px`, and Title/H1.
  - A second documented Modal Group size is `1179x505px`, with Body/Lead Text, Title/H3, and Roboto Mono Regular `24px`.
- **Navigation Sidebar**
  - `448x828px`; radius `30px / 0px / 0px / 30px`.
  - Vertical layout; padding `50px 80px 378px 80px`; gap `40px`.
  - Background fill; `2px` Unselected stroke.
  - Text includes Body/Tiny and Title/H4.

### Popovers and tooltips

- **Popover w:** `374x159px`; text Title/H5 and Body/Paragraph.
- **Bottom Popover:** `374x104px`; text Body/Paragraph.
- **Top Popover:** `374x104px`; text Body/Paragraph.
- **Left Popover:** `319x114px`; text Body/Paragraph.
- **Right Popover:** `319x114px`; text Body/Paragraph.
- **Top Tooltip:** `232x58px`; Roboto Mono Regular `24px`.
- **Left Tooltip:** `258x47px`; Roboto Mono Regular `24px`.
- **Right Tooltip:** `272x47px`; Roboto Mono Regular `24px`.
- **Bottom Tooltip:** `276x58px`; Roboto Mono Regular `24px`.

## Screen patterns

- **Thumbnail:** `1920x1080px`; Dark Gradient background, Monkeytype homage decoration, device imagery, and a large Phantom UI title with primary glow.
- **Typography:** `1920x1314px`; dark title card paired with a typography specimen showing H1–H6, paragraph, lead, small, and tiny text.
- **Colors & Gradients:** `2189x1080px`; dark title card paired with color swatches, gradient swatches, and gradient code examples.
- **Component Library:** `1920x1080px`; dark title card introducing the component collection.
- **Buttons:** `1920x1080px`; dark title card with button variants and controls grouped into desktop, mobile, switches, checkboxes, and radios.
- **Examples:** Listed as a source page, but no additional extracted screen specification is available.
- **License:** Listed as a source page, but no additional extracted screen specification is available.

## Notes for implementers

- Use the named color roles rather than introducing additional colors.
- Preserve the distinction between filled, hollow, selected, unselected, secondary, and error component families.
- Use fixed component dimensions where a component spec provides them.
- Use Roboto Mono for the documented design-system tokens. Use Vazirmatn only where the source explicitly identifies it.
- No spacing or radius variable system was extracted; use the component-specific values documented above.
- The source contains both a `Button Unselected` form sized `800x72px` and a `Button Unselected` form sized `167x72px`; treat them as separate documented usages.
- The source contains two Modal Group sizes: `1179x772px` and `1179x505px`; select according to the content pattern.
- No motion behavior or transition values were found.
