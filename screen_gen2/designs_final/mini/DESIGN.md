---
name: mini
source: Mini Design System (Community)
kind: design-system-context
---

# mini - Design System

## Overview

- Source: Mini Design System (Community), all pages: Cover and Design System.
- Visual system centered on teal `#005555`, dark charcoal `#212121` and `#434343`, pale blue-white `#F7FCFF`, and high-contrast white `#FFFFFF`.
- Component families: Avatar, Bottom bar, Button, Checkbox, Chips, Input, Radio, Shadow, Toggle.
- No local variable collections, spacing variables, radius variables, motion tokens, local effect styles, or local grid styles were found.

## Design language

- Primary accent: `#005555`; supporting teal values: `#009A9A` and `#028989`.
- Dark surfaces and text use `#212121`, `#434343`, `#130F26`, and `#616161`.
- Light surfaces use `#F7FCFF`, `#FAFAFA`, `#E0E0E0`, and `#FFFFFF`.
- Active input states use pale teal `#00555514` with a `#005555` stroke.
- Typography combines Urbanist for prominent headings and selected component text with Inter for most interface labels and controls.
- Rounded controls are prominent: chips use a `100px` radius, toggles use `1167.37px`, buttons use `22.23px`, and inputs use `13.06px`.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role / observation |
|---|---:|---|
| `#F7FCFF` | 151 | Most-used light surface |
| `#005555` | 133 | Primary teal |
| `#9E9E9E` | 117 | Neutral and default-state text/icon color |
| `#130F26` | 98 | Dark neutral |
| `#FFFFFF` | 95 | White surfaces, fills, and contrast color |
| `#434343` | 86 | Dark component surface and input fill |
| `#E31D1C` | 42 | Error or destructive accent |
| `#00555514` | 14 | Active-state background |
| `#FAFAFA` | 14 | Light component surface |
| `#000000` | 8 | Black |
| `#009A9A` | 8 | Supporting teal |
| `#212121` | 6 | Header and dark surface |
| `#028989` | 5 | Supporting teal |
| `#E0E0E0` | 5 | Light neutral |
| `#BDBDBD` | — | Greyscale 400 token |
| `#616161` | — | Greyscale 700 token |
| `#246BFD` | — | Primary/500 token; also reported by the source as “Others / White” |
| `#0000000D` | — | Shadow alpha |
| `#0000001A` | — | Shadow alpha |

## Type scale

### Named typography tokens

- `H1 / bold`: Urbanist Bold, weight `700`, `48px`, line height `91.67%`, tracking `0px`.
- `body / xsmall / bold`: Urbanist Bold, weight `700`, `10px`, line height `auto`, tracking `0.2px`.

### Observed raw hierarchy

- `26.12px`: Urbanist Bold.
- `19.45px`: Inter SemiBold.
- `18px`: Inter Bold.
- `16.34px`: Inter SemiBold; Urbanist SemiBold also appears at this size.
- `16px`: Inter SemiBold.
- `15.24px`: Inter Regular, Inter SemiBold, and Urbanist SemiBold.
- `14px`: Inter SemiBold.
- `10px`: Inter Bold, Inter Light, Inter Medium, and Urbanist Bold.

### Component typography

- Button: Inter SemiBold, `19.45px`.
- Chips: Inter Bold, `18px`.
- Input code: Urbanist Bold, `26.12px`.
- Input standard labels: Urbanist SemiBold or Inter SemiBold, `15.24px`.
- Input default labels: Inter Regular, `15.24px`.
- Bottom bar: Inter Light, `10px`; the source also associates the body xsmall bold token with this component.

## Spacing scale

_No spacing variables found in source._

Observed component spacing:

- Chips padding: `10px 24px 10px 24px`; gap `4px`.
- Bottom bar padding: `0px 0px 0px 0px`; gap `0px`.
- Phone input internal frame gap: `8.71px`.
- Input component-set stroke: `1.09px`.
- Button component-set stroke: `1.39px`.

## Radius scale

_No radius variables found in source._

Observed radii:

- Chips: `100px`.
- Toggle: `1167.37px`.
- Button: `22.23px`.
- Input: `13.06px`.
- Bottom bar: no radius specified.
- Radio, Checkbox, and Avatar: no radius specified.
- Shadow / 100: no radius specified.
- Input component set: `5.44px`.
- Button component set: `6.95px`.

## Elevation & effects

- Bottom bar:
  - Drop shadow: `4.15px`, offset `0 2.76px`, color `#0000000D`.
  - Drop shadow: `10.37px`, offset `0 6.91px`, color `#0000001A`.
- Shadow / 100:
  - Drop shadow: `1.38px`, offset `0 0.69px`, color `#0000000D`.
- Shadow / 200–600 and Shadow Maker levels are present as named component/effect examples in the source. Their source effect definitions include additional alpha values not represented in the allowed palette.
- Shadow fills are reported as `#FFFFFF`.

## Components

### Avatar

- Size: `56.03px × 56.03px`.
- Variants:
  - Type: Default, Edit Avatar, Offline Avatar, Online Avatar.

### Bottom bar

- Size: `428px × 82px`.
- Layout: vertical.
- Padding: `0px 0px 0px 0px`.
- Gap: `0px`.
- Alignment: min / center.
- Sizing: fixed width and fixed height.
- Fill: `#FFFFFF`.
- Typography: Inter Light, `10px`; associated body xsmall bold token is Urbanist Bold, `10px`, tracking `0.2px`.
- Variants:
  - Active Menu: Dark Home, Dark Inbox, Dark Profile, Dark Project, Light Home, Light Inbox, Light Profile, Light Project.
- Effects: uses the documented bottom-bar shadows in Elevation & effects.

### Button

- Size: `527.87px × 80.57px`.
- Radius: `22.23px`.
- Fill: `#005555`.
- Label: Inter SemiBold, `19.45px`.
- Label color: `#FFFFFF`.
- Component-set radius: `6.95px`.
- Component-set stroke: `#005555`, `1.39px`.
- Variant: Component = Button.

### Checkbox

- Size: `28.02px × 28.02px`.
- Fill: `#FFFFFF`.
- Variants:
  - Style: None, Text.
  - Theme: Dark, Default, Light.
  - State: Checked, Unchecked.

### Chips

- Base size: `100px × 45px`.
- Radius: `100px`.
- Layout: horizontal.
- Padding: `10px 24px 10px 24px`.
- Gap: `4px`.
- Alignment: center / center.
- Sizing: fixed width and fixed height.
- Fill: `#005555`.
- Label: Inter Bold, `18px`.
- Variants:
  - Size: Large, Medium, Small.
  - Type: Border, Filled.
  - Icon: Left, None, Right.

### Input

- Component family name: Input Field.
- Standard input size: `413.58px × 60.95px`.
- Code input size: `84.89px × 66.39px`.
- Radius: `13.06px`.
- Dark fill: `#434343`.
- Light fill: `#FAFAFA`.
- Active fill: `#00555514`.
- Active stroke: `#005555`, `1.09px`.
- Dark code input stroke/fill: `#434343`, `1.09px`.
- Code input typography: Urbanist Bold, `26.12px`.
- Standard filled typography: Urbanist SemiBold, `15.24px`.
- Standard active typography: Inter SemiBold, `15.24px`.
- Standard default typography: Inter Regular, `15.24px`.
- Variants:
  - Status: Active, Default, Fill.
  - Type: Code, Default, Email, Normal, Password, Phone, Username.
  - State: Active Input, Default Input, Filled Input.
  - Theme: Dark, Light.
- Phone input internal frame: `52.24px × 19.59px`, gap `8.71px`; flag group `26.12px × 19.59px`; arrow instance `17.41px × 17.41px`.
- Normal, password, email, and username variants use `21.77px × 21.77px` icon instances where present.

### Radio

- Size: `28.02px × 28.02px`.
- Fill: `#FFFFFF`.
- Variants:
  - Style: None, Text.
  - Theme: Dark, Default, Light.
  - State: Selected, Unselected.

### Shadow

- Shadow / 100 size: `207.32px × 207.32px`.
- Shadow / 100 fill: `#FFFFFF`.
- Shadow / 100 effect: `1.38px` drop shadow, offset `0 0.69px`, color `#0000000D`.
- Named levels: Shadow / 100, Shadow / 200, Shadow / 300, Shadow / 400, Shadow / 500, Shadow / 600.
- Shadow Maker levels: Shadow Maker / 100, Shadow Maker / 200, Shadow Maker / 300, Shadow Maker / 400, Shadow Maker / 500, Shadow Maker / 600.

### Toggle

- Size: `51.36px × 28.02px`.
- Radius: `1167.37px`.
- Fill: `#005555`.
- Variants:
  - State: Disabled, Enabled.
  - Theme: Dark, Default, Light.

## Screen patterns

- Cover screen:
  - Frame size: `1600px × 960px`.
  - Background: `#FFFFFF`.
  - Includes a teal `#005555` vertical shape occupying `565px × 960px`.
  - Presents the design-system title and creator attribution.
  - Two approximately `406.33px × 400.78px` visual panels and an approximately `784.5px × 773.78px` input-field visual are arranged over the cover.
- Input Field screen:
  - Frame size: `1755px × 1731px`.
  - Background: `#FFFFFF`.
  - Header: `1755px × 213px`, fill `#212121`.
  - Header title uses the `H1 / bold` token.
  - Main content is an Input component set with dark/light themes and Active, Default, and Fill states.
- Shadow screen:
  - Frame size: `1755px × 1731px`.
  - Background is a light neutral surface.
  - Header: `1755px × 213px`, fill `#212121`.
  - Displays Shadow / 100–600 and Shadow Maker / 100–600 examples.
- Button screen:
  - Frame size: `1755px × 1731px`.
  - Background: `#FFFFFF`.
  - Header: `1755px × 213px`, fill `#212121`.
  - Main content is a Button component set containing the teal rounded button pattern.

## Notes for implementers

- Use only the documented component families and variants; do not introduce additional component categories.
- Prefer the ranked raw colors for general UI construction, with `#005555` as the primary action/accent color.
- Preserve the distinction between filled, active, and default input states:
  - Filled dark inputs use `#434343`.
  - Filled light inputs use `#FAFAFA`.
  - Active inputs use `#00555514` with a `#005555` stroke.
  - Default text uses `#9E9E9E`.
- Use Urbanist for H1 and code-style input text; use Inter for most control labels and standard interface text.
- Keep fixed component dimensions when reproducing the documented component specimens.
- Reuse the documented rounded radii rather than substituting a new radius scale.
- No responsive behavior, spacing variables, motion tokens, or grid rules were provided; infer none beyond the observed fixed dimensions and layout properties.
