---
name: pix-sumup-projeto-do-curso-de-ui-design-ebac-community
source: PIX + SUMUP - Projeto do curso de UI Design EBAC (Community)
kind: design-system-context
---

# sumup - Design System

## Overview

- UI design system extracted from the Figma file “PIX + SUMUP - Projeto do curso de UI Design EBAC (Community)”.
- Source pages: Thumbnail, References, Moodboard, Styles, Components / Wireframe, Components / Main, Style Guide, Wireframes, Key Visuals, Refinment, Responsive Design, Prototype.
- No local variable collections found.
- Component families: Active, Default, Forms, Group, Hiperlink, Icon, Input, Menu, Mobile, PassedBy, Phone, Scroll Bar, Selection Controls, Tablet.

## Design language

- Primary visual language uses white surfaces, Royal Blue actions, dark blue interaction states, black outlines, and gray form surfaces.
- Typography is primarily Roboto, with additional raw usage of Montserrat and Poppins in display treatments.
- Buttons use pill-shaped geometry with 30px radius.
- Inputs and selects use rounded 15px corners.
- Neumorphic shadows and inner shadows are used for default, pressed, and active states.
- Layouts include centered 2-, 6-, and 8-column grids, plus stretched 12-column layouts.
- Responsive component references include Phone, Mobile, and Tablet families.

## Color palette

Ranked by reported usage where available:

| Color | Usage / role |
|---|---|
| `#FFFFFF` | 1080 raw uses; Primary/White, SumUp/Space Gray, On Primary / High Emphasis |
| `#D9D9D900` | 505 raw uses; transparent menu surfaces |
| `#000000` | 346 raw uses; Primary/Black and default outline stroke |
| `#2A2E3B` | 240 raw uses; Text/PriDefault |
| `#5C656F` | 194 raw uses; raw gray |
| `#D9D9D9` | 185 raw uses; raw gray fill |
| `#FDD216` | 118 raw uses; raw yellow |
| `#F5F5F5` | 52 raw uses; Secondary/LightGray |
| `#F0F0F3` | 39 raw uses; raw light gray |
| `#2E62E9` | SumUp/Royal Blue; 779 style uses |
| `#10399E` | Secondary/Darker Blue; 29 style uses |
| `#1C51D3` | Secondary/Dark Blue; 37 style uses |
| `#3388FF` | SumUp/Sky Blue; 26 style uses |
| `#8F8F8F` | Text/SecDefault; 65 style uses |
| `#F7F0E8` | Secondary/Sand; 12 style uses |
| `#F7941C` | Secondary/Orange; 6 style uses |
| `#F5CC1C` | Secondary/Taxi Yellow; 3 style uses |
| `#AEAEC099` | Neumorphic shadow color |
| `#FFFFFF66` | Neumorphic highlight color |

Color aliases reported in source:

- SumUp/Space Gray maps to `#FFFFFF`.
- Secondary/LightGray maps to `#F5F5F5`.
- Text/PriDefault maps to `#2A2E3B`.
- SumUp/Royal Blue maps to `#2E62E9`.
- Secondary/Darker Blue maps to `#10399E`.
- Secondary/Dark Blue maps to `#1C51D3`.
- SumUp/Sky Blue maps to `#3388FF`.
- Text/SecDefault maps to `#8F8F8F`.
- SumUp/Modern Ink, Secondary/LightGray 2 have no resolved color in the source.

## Type scale

Font family: Roboto unless otherwise stated. Line-height values are from the source.

| Token | Font | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| H1 | Roboto | 48px | Bold 700 | auto | 0px |
| Header/H2 | Roboto | 32px | Bold 700 | auto | 0px |
| Header/H3 | Roboto | 24px | Bold 700 | auto | 0px |
| Header/H4 | Roboto | 24px | Regular 400 | 114.51% | 0px |
| Header/H5 | Roboto | 20px | Bold 700 | 114.51% | 0px |
| Text/Roboto | Roboto | 16px | Regular 400 | 114.51% | 0px |
| Text/Roboto SemiBold | Roboto | 16px | SemiBold 600 | 114.51% | 0px |
| Text/Roboto hyperlink | Roboto | 16px | Regular 400 | 114.51% | 0px |
| Text 2/Roboto | Roboto | 14px | Regular 400 | 114.51% | 0px |
| Text 2/Roboto SemiBold | Roboto | 14px | SemiBold 600 | 114.51% | 0px |
| Text 2/Roboto hyperlink | Roboto | 14px | Regular 400 | 114.51% | 0px |
| Text 3/Roboto | Roboto | 12px | Regular 400 | 114.51% | 0px |

Raw display styles also present:

- Roboto ExtraBold: 16px and 64px.
- Roboto Medium: 20px.
- Roboto Bold: 18px, 24px, 40px, and 48px.
- Montserrat Regular: 32px.
- Montserrat Black: 40px.
- Poppins Bold: 40px and 64px.

## Spacing scale

No spacing variables found. Observed component and grid values:

- Input padding: `12px` on all sides; gap `8px`.
- Select padding: `12px` on all sides; gap `8px`.
- Button horizontal padding: `32px` or `34px`; vertical padding `12px`; gap `28px`.
- Menu padding: `7px` vertical and `5px` horizontal; gap `5px`.
- Header padding: `16px 16px 16px 32px`; gap `8px`.
- Form label gap: `5px`.
- Grid gutters: `12px` and `26px`.
- Grid sections: `103px`, `126.17px`, `130px`, `148px`, and `152px`.

## Radius scale

- `15px`: text inputs and select controls.
- `30px`: outline and solid pill buttons.
- No radius variables found.

## Elevation & effects

- `Neumorphism/default`: drop shadow `6px`, offset `1.5px 1.5px`, color `#AEAEC099`; drop shadow `5px`, offset `-1px -1px`, color `#FFFFFF`.
- `Neumorphism/pressed/blue`: inner shadow `6px`, offset `1px 1px`, color `#112558`; inner shadow `4px`, offset `-1px -1px`, color `#FFFFFF66`.
- `Neumorphism/pressed/default`: inner shadow `6px`, offset `1px 1px`, color `#AEAEC099`; inner shadow `4px`, offset `-1px -1px`, color `#FFFFFF`.
- `Neumorphism/pressed/active`: combines the default drop shadows with the default inner shadows.
- `Forms/Selected`: drop shadow `3px`, offset `0 0`, color `#2E62E9`.
- No motion tokens found.

## Components

### Buttons

- `Default / Solid / Default`: `151x45px`, radius `30px`, fill `#2E62E9`, padding `12px 32px`, gap `28px`, centered.
- `Default / Solid / Hover`: `146x45px`, radius `30px`, fill `#1C51D3`, padding `12px 32px`, gap `28px`.
- `Default / Solid / Pressed`: `162x45px`, radius `30px`, fill `#10399E`, padding `12px 32px`, gap `28px`, `Neumorphism/pressed/blue`.
- `Default / Outline / Default`: `168x45px`, radius `30px`, `#2E62E9` 1px stroke, padding `12px 34px 12px 32px`, gap `28px`.
- `Default / Outline / Hover`: `163x45px`, radius `30px`, `#1C51D3` 1px stroke.
- `Default / Outline / Pressed`: `179x45px`; text uses `Text/Roboto`.

### Inputs

- Standard labeled and unlabeled inputs: `367.07x50px`, white fill, `15px` radius where specified, `#FFFFFF` fill, `#FFFFFF`/SumUp Space Gray 1px stroke, `12px` padding, `8px` gap.
- Labeled input height: `75.69px`; uses `Text/Roboto` and `Text 2/Roboto`.
- Variants: Default, Selected, Disabled, Written/Witten, Icon Left, Icon Right, Label, and NoLabel.
- Selected, Disabled, and Written states are available for default, left-icon, and right-icon variants where specified.

### Select controls

- Default no-label select: `249x45px`, `15px` radius, white fill, SumUp Space Gray 1px stroke, `12px` padding, `8px` gap.
- Selected no-label select: `249x45px`, white fill, SumUp Royal Blue 1px stroke, `Forms/Selected`.
- Disabled no-label select: `249x45px`, `Secondary/LightGray 2` fill, Text/SecDefault 1px stroke.
- Labeled select: generally `249x69px`, vertical layout, `5px` gap.
- Disabled labeled select: `249x69px`.
- Selecting labeled select: `249x218px`.
- Selecting no-label select: `249x194px`.
- Icon variants are available with and without labels.

### Selection controls

- Checkboxes: `24x24px`.
- States: Selected Enabled, Selected Disabled, Deselected Enabled, Deselected Disabled.

### Links

- Default and footer links use white fill.
- Default size: `117x21px`.
- Hover size: `107x21px`.
- Typography: Text/Roboto hyperlink or Text/Roboto, depending on the footer variant.
- 16px and 14px hyperlink styles are available.

### Icons

- Search: `24x24px`, fill `#FFFFFF`.
- Eye: `24x24px`, fill `#FFFFFF`.
- User: `24x25px`, fill `#FFFFFF`.
- Generic Icon: `100x100px`, `Neumorphism/default`.

### Menus and groups

- Menu Dropdown: approximately `139.67x35px`, horizontal layout, `7px 5px` padding, `5px` gap.
- Menu Icon: `151x35px`, with hover size `153x35px`.
- Hover menu variants use `Text/Roboto SemiBold`; default variants use `Text/Roboto`.
- Group: `503x45px` in Components / Main; `556x173px` in Components / Wireframe.
- Default outline and solid menu/action variants are available.

### Navigation and responsive components

- Phone: `307x32.5px`, space-between alignment, `253px` gap.
- Mobile: `562x48px` or `567x430px`, depending on variant.
- Tablet: `768x575px`.
- Desktop header variant: `1546.84x47px`, space-between alignment, `253px` gap.
- Scroll bar desktop: `21x311px`.
- Scroll bar mobile: `8x311px`.
- Scroll bar states: Default and Pressed.

## Screen patterns

- Thumbnail: `1440x870px`, Sky Blue background, white “Pix + SumUp” and “Documentação” headings, and a white divider line.
- References: large white reference board containing visual references and grouped screenshots.
- References – Landing Pages: tall white presentation board of landing-page screenshots and decorative groups.
- References – E-mails: tall white presentation board of email screenshots.
- Moodboard and Styles: visual direction and token documentation pages.
- Components / Wireframe: early component definitions, including inputs, selects, headers, groups, menus, and large content regions.
- Components / Main: refined component states for buttons, inputs, selects, menus, navigation, and responsive layouts.
- Style Guide: consolidated type, color, component, and effect references.
- Wireframes: page-level structural layouts.
- Key Visuals: visual composition and branded presentation assets.
- Refinment: refined UI layouts and component usage.
- Responsive Design: Phone, Mobile, and Tablet adaptations.
- Prototype: interactive state examples, including pressed solid button behavior.

## Notes for implementers

- Prefer the named component tokens and variants over raw ad hoc styling.
- Use Roboto for the defined system type styles. Use Montserrat or Poppins only where the raw display treatments require them.
- Use `#2E62E9` for default primary actions, `#1C51D3` for hover, and `#10399E` for pressed solid actions.
- Preserve the distinction between white surfaces and transparent menu fills: `#FFFFFF` versus `#D9D9D900`.
- Apply `15px` radius to inputs and selects and `30px` radius to pill buttons.
- Selected selects use the `Forms/Selected` effect and Royal Blue stroke.
- Do not infer spacing or radius tokens beyond the observed component and grid values; no spacing or radius variable collections were found.
- Use the documented grid options: 2 columns with `12px` gutters, 6/8/12 columns with `26px` gutters.
