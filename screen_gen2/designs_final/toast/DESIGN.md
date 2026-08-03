---
name: toast-component-ui-design-community
source: Toast Component UI Design (Community)
kind: design-system-context
---

# toast - Design System

## Overview

Toast-focused design system from the Figma file “Toast Component UI Design (Community)”, covering the Components and Cover pages.

Primary component family: Toast. Supporting families: Icon, Close affordance, and Button.

The Toast component is a fixed-size, horizontal notification with a status variant and five visual styles.

## Design language

- Use General Sans throughout.
- Toasts use compact horizontal layouts with centered vertical alignment.
- Primary toast content is paired with a status icon, an action button, and a close affordance.
- Status colors communicate Info, Success, Error, and Warning.
- Dark and light toast surfaces are both present.
- Accent colors are used for status icons, actions, borders, and vertical rails.
- Rounded geometry is prominent, with 16px toast corners and circular status treatments.

## Color palette

Ranked by reported raw usage where available:

| Color | Usage / role |
|---|---|
| `#FFFFFF` | 31 raw uses; white surfaces, text, icons, and controls |
| `#28292A` | 16 raw uses; light-surface text |
| `#242C32` | 15 raw uses |
| `#2D3438` | 14 raw uses; dark neutral text and dark surfaces |
| `#FBFBFB` | 14 raw uses; light neutral surface |
| `#01E17B` | 6 raw uses; Success |
| `#4B85F5` | 5 raw uses; Info |
| `#51E57A` | 4 raw uses |
| `#F043491A` | 4 raw uses; Error translucent treatment |
| `#01E17B1A` | 3 raw uses; Success translucent treatment |
| `#292F66` | 3 raw uses |
| `#7FA2E4` | 3 raw uses; component-set stroke |
| `#E5FCF1` | 3 raw uses; Success light surface |
| `#F04349` | 3 raw uses; Error |
| `#FDCD0F` | semantic Warning accent |
| `#0305121A` | Toast drop-shadow color |

Semantic palette:

- Default: `#FFFFFF`
- Dark neutral / Black: `#2D3438`
- Info: `#4B85F5`
- Success: `#01E17B`
- Error: `#F04349`
- Warning: `#FDCD0F`

## Type scale

Font family: General Sans.

| Size | Weight | Reported usage |
|---:|---|---:|
| 14px | Bold | 27 uses |
| 16px | Medium | 26 uses |
| 32px | Medium | 13 uses |
| 14.45px | Bold | 6 uses |
| 16.51px | Medium | 6 uses |
| 36px | Medium | 4 uses |
| 64px | Medium | 3 uses |

Component text usage:

- Toast content: General Sans Medium, 16px.
- Toast action button: General Sans Bold, 14px.
- Button component: General Sans Bold, 14px.

## Spacing scale

No spacing variables were found.

Documented component spacing:

- Toast padding: `12 16 12 16px`.
- Toast gap: `12px`.
- Button padding: `0 0 0 0px`.
- Button gap: `8px`.
- Toast Style 4 uses right padding values of `20px` or `24px` depending on variant.
- Component-set padding: `32 32 32 32px`.
- Component-set gap: `72px`.

## Radius scale

No radius variables were found.

Documented radii:

- Toast: `16px`.
- Icon status circle: `50px`.
- Style 3 status icon container: `6px`.
- Toast component set: `32px`.
- Outer “Toasts” frame: `64px`.

## Elevation & effects

- Toast drop shadow: `drop_shadow 20px`, offset `0 16`, color `#0305121A`.
- Outer “Toasts” frame shadow: `drop_shadow 48px`, offset `0 16`.
- Toast Style 2 and later documented styles use a `#FBFBFB` stroke of `1px`.
- The component set uses a `#7FA2E4` stroke of `1px`.
- No motion tokens were found.
- No local effect styles were found.

## Components

### Toast

- Size: `350x56px`.
- Layout: horizontal.
- Padding: `12 16 12 16px`.
- Gap: `12px`.
- Alignment: minimum / center.
- Sizing: fixed width / fixed height.
- Radius: `16px`.
- Variants:
  - Style: `1`, `2`, `3`, `4`, `5`.
  - Property 2: `Default`, `Error`, `Info`, `Success`, `Warning`.
- Content structure: status icon, content text, action Button, and Close affordance.
- Content text: General Sans Medium, 16px.
- Action text: General Sans Bold, 14px.
- Style 1 uses a dark `#2D3438` surface.
- Style 2 uses a `#FFFFFF` surface with a `#FBFBFB` 1px stroke.
- Style 3 uses status-oriented light treatments and a 1px status stroke where documented. Success uses `#E5FCF1` with `#01E17B`.
- Style 4 uses a `#FFFFFF` surface and a 10px-wide vertical status rail for Info, Success, Error, and Warning.
- Style 5 uses a `#FBFBFB` surface.
- Toast variants use the relevant status accent for the icon, action, close affordance, border, or rail.

### Icon

- Size: `32x32px` component size.
- Icon size: `24x24px` in documented Toast instances.
- Variants:
  - Shape: Circle, Square.
  - Icon: Check, Error, Info.
- Icon artwork uses a `19.5x19.5px` vector in the documented circular treatments.
- Style 3 uses a `24x24px` status container with a `6px` radius.

### Close affordance

- Size: `24x24px`.
- Fill: `#FFFFFF`.
- Documented vector size: `15x15px`.
- Uses the toast status accent in status variants and `#2D3438` or `#FFFFFF` in neutral variants.

### Button

- Size: `61x22px`.
- Layout: horizontal.
- Padding: `0 0 0 0px`.
- Gap: `8px`.
- Alignment: center / center.
- Sizing: fixed width / fixed height.
- Text: General Sans Bold, 14px.
- Button text uses the Toast status accent or the dark neutral color.

## Screen patterns

### Components / Toasts

A large “Toasts” presentation frame contains the Toast component set and its style/status combinations. The component set presents fixed `350x56px` Toast instances in a horizontal arrangement with `72px` gaps and `32px` padding.

The displayed patterns cover:

- Dark neutral Toasts.
- Light Toasts with neutral borders.
- Status-colored light treatments.
- Toasts with a vertical status rail.
- Default, Info, Success, Error, and Warning states.
- Consistent content, action, and close-control placement.

## Notes for implementers

- Keep Toast dimensions fixed at `350x56px` unless the source design explicitly requires another documented component size.
- Preserve the horizontal order: Icon, content, Button, Close affordance.
- Use `12px` between Toast children and `12px 16px` internal padding as the default.
- Use General Sans Medium at `16px` for content and General Sans Bold at `14px` for actions.
- Map status consistently:
  - Info → `#4B85F5`
  - Success → `#01E17B`
  - Error → `#F04349`
  - Warning → `#FDCD0F`
- Use `#FFFFFF` for dark-surface Toast text and controls.
- Use `#28292A` or `#2D3438` for light-surface text according to the documented variant.
- Apply the documented `20px` drop shadow with offset `0 16` and color `#0305121A`.
- Do not introduce additional component families, spacing variables, radius variables, motion tokens, or effect styles not documented in the source.
