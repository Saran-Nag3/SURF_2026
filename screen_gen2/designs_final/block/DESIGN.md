---
name: block-chain-company-website-community
source: Block Chain Company Website (Community) / Page 1
kind: design-system-context
---

# block - Design System

## Overview

A dark, high-contrast blockchain company website system using bright blue interaction states, white content, rounded controls, and large display typography. The source contains reusable navigation, logo, form, button, chip, footer, arrow, image, and scrolling-logo components.

## Design language

- Primary visual mode: dark surfaces with white text.
- Primary action color: `#0014F4`.
- Supporting dark colors: `#17181D`, `#232428`, `#383A41`.
- Controls use strongly rounded pill shapes with `65px` radius.
- Typography combines Outfit for large display headings and Satoshi for interface and body text.
- Logos and scrolling marquees use white iconography and text.
- Borders are primarily `#383A41`, using `1px` or `2px` strokes.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 777 | Primary light surface, text, icons, and content color |
| `#383A41` | 301 | Borders and strokes |
| `#17181D` | 100 | Primary dark surface |
| `#D9D9D9` | 95 | Neutral placeholder and pressed-state surface |
| `#232428` | 50 | Secondary dark color |
| `#0014F4` | 49 | Primary action, hover, active, and link color |
| `#000000` | 44 | Light-surface primary text |
| `#DADADA` | 30 | Neutral color |
| `#9747FF` | 11 | Component-set outline in extracted Figma presentation |

Additional usage:

- `#FFFFFF66`: translucent white fill for the default arrow background.
- `Label Color/Light/Primary`: `#000000`, 30 uses.

## Type scale

### Outfit

- `128px`, Medium
- `64px`, Medium
- `48px`, Regular
- `32px`, Bold
- `32px`, Medium
- `28px`, Medium
- `24px`, Regular

### Satoshi

- `28px`, Bold
- `28px`, Medium
- `24px`, Regular
- `20px`, Regular
- `18px`, Regular
- `16px`, Medium
- `16px`, Regular
- `14px`, Regular
- `12px`, Regular

### Microsoft Tai Le

- `16px`, Bold

Usage guidance:

- Use Outfit Medium for the largest display sizes: `64px` and `128px`.
- Use Outfit Regular or Bold for display headings from `24px` to `48px`.
- Use Satoshi for body copy, navigation, controls, footer links, and logo text.
- Use Satoshi Medium `16px` for primary buttons.
- Use Satoshi Regular `14px` for chips.
- Use Satoshi Regular `12px` for the smallest text.
- The source contains no local text styles.

## Spacing scale

No spacing variables were defined. Observed component spacing values:

- `0px`
- `0.88px`
- `9.5px`
- `10px`
- `16px`
- `20px`
- `31.22px`
- `32px`
- `39px`
- `75px`
- `119px`

Observed layout usage:

- Logo scroller gap: `10px`.
- Footer-list gap: `10px`.
- Logo internal gap: `9px` or `10px`.
- Button padding: `16px 31.22px 16px 32px`.
- Chip padding: `10px 20px 10px 20px`.
- Tab padding: `39px 75px 39px 75px`.
- Desktop logo padding: `0px 119px 0px 119px`.
- Mobile logo horizontal padding: `20px`.
- Scrolling-logo item padding: `9.5px 0px 9.5px 0px`.

## Radius scale

No radius variables were defined. Observed radii:

- `5px`: component-set presentation containers.
- `32px`: arrow control.
- `65px`: button and chip pill controls.

## Elevation & effects

- No local effect styles were found.
- No elevation or shadow tokens were found.
- Arrow default background uses translucent white: `#FFFFFF66`.
- Two gradient vector treatments are present in the source, but their complete gradient colors are not part of the approved palette.

## Components

### `button`

- Size: `225.22px × 56px`.
- Radius: `65px`.
- Horizontal layout.
- Padding: `16px 31.22px 16px 32px`.
- Text: Satoshi Medium, `16px`.
- Label example: “Request a project”.
- Variants:
  - Default: fill `#0014F4`, text `#FFFFFF`.
  - Hover: fill `#FFFFFF`, text `#0014F4`.
  - Pressed: fill `#D9D9D9`, text `#0014F4`.

### `chip`

- Default size: `147px × 44px`.
- Hover and pressed size: `179px × 44px`.
- Radius: `65px`.
- Horizontal layout.
- Padding: `10px 20px 10px 20px`.
- Stroke: `#383A41`, `2px` on the default variant.
- Text: Satoshi Regular, `14px`.
- Label example: “Request a project”.
- Variants:
  - Default: outlined.
  - Hover: fill `#FFFFFF`, text `#0014F4`.
  - Pressed: fill `#D9D9D9`, text `#0014F4`.

### `textbox`

- Size: `796px × 60px`.
- Stroke: `#383A41`, `2px`.
- Text: Satoshi Regular, `24px`.
- Variant: active/default.

### `textarea`

- Size: `796px × 348px`.
- Stroke: `#383A41`, `2px`.
- Text: Satoshi Regular, `24px`.
- Variant: active/default.

### `arrow`

- Size: `64px × 64px`.
- Radius: `32px`.
- Arrow vector: `26.18px × 48px`.
- Variants:
  - Default: fill `#FFFFFF66`, arrow fill `#17181D`.
  - Hover: fill `#FFFFFF`, arrow fill `#0014F4`.

### `tab`

- Size: `160px × 100px`.
- Mobile size: `390px × 100px`.
- Horizontal layout.
- Padding: `39px 75px 39px 75px`.
- Gap: `10px`.
- Stroke: `#383A41`, `1px`.
- Text: Satoshi Regular, `20px`.
- Variants: default, hover, pressed, mobile default, mobile click.
- Default dark tab: fill `#17181D`, text `#FFFFFF`.
- Hover: fill `#0014F4`, text `#FFFFFF`.
- Pressed/mobile click: fill `#FFFFFF`, text `#0014F4`.

### `tab/inverse`

- Size: `160px × 100px`.
- Mobile size: `390px × 100px`.
- Horizontal layout.
- Padding: `39px 75px 39px 75px`.
- Gap: `10px`.
- Stroke: `#383A41`, `1px`.
- Text: Satoshi Regular, `20px`.
- Variants: default, hover, mobile default, mobile click.
- Default light tab: fill `#FFFFFF`, text `#000000`.
- Hover/mobile default: fill `#0014F4`, text `#FFFFFF`.
- Mobile click: fill `#FFFFFF`, text `#000000`.

### `footerList`

- Size: `64px × 24px`.
- Horizontal layout.
- Gap: `10px`.
- Text: Satoshi Regular, `24px`.
- Default text: `#FFFFFF`.
- Hover text: `#0014F4`.
- Variants: default, hover.

### `logo`

- Desktop size: `480px × 100px`.
- Desktop padding: `0px 119px 0px 119px`.
- Desktop internal gap: `10px`.
- Desktop border: `#383A41`, `1px`.
- Desktop dark fill: `#17181D`.
- Logo text: Satoshi Bold, `28px`.
- Desktop content combines a `60px × 60px` icon and “Your Logo Here” text.
- Variants: default, hover, mobile, mobile click.
- Mobile size: `390px × 100px`.
- Mobile logo content uses a `42.56px × 43px` icon, a `200.44px × 27.27px` logo vector, and a `24px × 24px` menu icon.
- Mobile horizontal frame padding: `20px`.

### `logo scoll`

- Horizontal scrolling logo treatment.
- Component size: `2537.51px × 57px`.
- Gap: `10px`.
- Each repeated item: `244.75px × 57px`.
- Item padding: `9.5px 0px 9.5px 0px`.
- Icon size: `24px × 24px`.
- Text: Satoshi Medium, `28px`.
- Text example: “Our office space”.
- Uses white icon and text treatment.

### `Component 1`

- Size: `464px × 548px`.
- Image-based component.
- Variants: Rectangle 1 and Rectangle 2.
- Rectangle placeholder fill: `#D9D9D9`.

### `replace this icon`

- Size: `24px × 24px`.
- Fill: `#FFFFFF`.
- Used inside logo and scrolling-logo treatments.

## Screen patterns

- **Isolation_Mode:** two `353.31px × 26.02px` vector treatments with gradient fills.
- **Tab component set:** includes dark, light/inverse, hover, pressed, and mobile tab states.
- **Logo component set:** includes desktop and mobile navigation/logo states, including a mobile menu icon.
- **Component 1 set:** provides two interchangeable `464px × 548px` image variants.
- **Button and chip sets:** use pill-shaped controls with default, hover, and pressed states.
- **Arrow set:** provides a translucent default circular control and a white hover control.
- **Footer-list set:** provides white default links and blue hover links.
- **Logo scroller:** repeats icon-and-label items horizontally using white content.

## Notes for implementers

- Use only the listed palette colors for generated UI.
- Prefer `#17181D` for dark primary surfaces and `#FFFFFF` for primary content.
- Use `#0014F4` for primary actions and interactive emphasis.
- Keep button and chip corners fully pill-shaped at `65px`.
- Preserve the distinct arrow radius of `32px`.
- Use `#383A41` for borders, with `1px` for tabs and logos and `2px` for text inputs and the default chip.
- Use Satoshi for interface text and Outfit for large display typography.
- Treat desktop and mobile logo states as separate layouts rather than scaling the desktop logo proportionally.
- No local variables, spacing styles, radius styles, text styles, motion tokens, grid styles, or effect styles were found.
