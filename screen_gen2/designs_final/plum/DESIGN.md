---
name: plum-wifi-mobile-community
source: Plum WiFi Mobile (Community)
kind: design-system-context
---

# plum - Design System

## Overview

- Source: Figma file “Plum WiFi Mobile (Community)”.
- Source pages: Components, Tabler, Plum WiFi Mobile.
- No local variable collections, text styles, spacing variables, radius variables, motion tokens, or grid styles were found.
- The system uses Plum purple surfaces and strokes, blue primary actions, semantic success and failure colors, white cards, and black text.

## Design language

- Typography uses Poppins for most interface content and Inter for navigation and menu labels.
- Primary interface controls are compact rounded rectangles, commonly `300x40px` with `10px` radius.
- Purple is used for filled actions and outlined controls.
- White is used for cards, inputs, navigation surfaces, and image placeholders.
- Layouts commonly use fixed widths and heights, explicit padding, horizontal or vertical auto-layout, and centered alignment.
- Navigation includes bottom menus, hamburger menu, dropdowns, and location, enterprise, and router selectors.
- Iconography is represented through `Component 1`, with `24x24px` icons and extensive Tabler icon variants.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage / role |
|---|---|
| `#000000` | 5,582 uses; primary raw text or icon color |
| `#FFFFFF` | 591 uses; surfaces, cards, controls, and navigation |
| `#5A315D` | 284 uses; Plum filled controls, strokes, and primary brand color |
| `#696868` | Gray 700 |
| `#1CA0F1` | Primary |
| `#4ED753` | Success |
| `#C34040` | Danger |
| `#FF0000` | Failure |
| `#834581` | Email component stroke |
| `#FAFAFA` | Light image-container fill |
| `#AEAEAE` | Blank background-image fill |
| `#0000001F` | Button shadow color |
| `#00000040` | Toggle shadow color |

## Type scale

### Poppins

| Size | Weight / style | Usage count |
|---:|---|---:|
| `60px` | Bold | 3 |
| `40px` | Bold | 3 |
| `32px` | Regular | 7 |
| `24px` | Regular | 4 |
| `20px` | SemiBold | 9 |
| `16px` | Regular | 24 |
| `13px` | Bold | 26 |
| `13px` | Regular | 22 |
| `13px` | Italic | 4 |
| `11px` | Regular | 12 |
| `10px` | Regular | 9 |
| `5px` | Bold | 10 |

### Inter

| Size | Weight | Usage count |
|---:|---|---:|
| `12px` | Regular | 143 |

## Spacing scale

No spacing variables were found. Observed component spacing values:

- Padding: `0px`, `5px`, `9px`, `10px`, `15px`, `20px`, `25px`, `40px`, `60px`, `70px`.
- Gaps: `0px`, `10px`, `17px`, `19px`, `23px`, `50px`, `60px`, `76px`, `100px`, `115px`.
- `Enable` uses a `-30px` gap.
- Common control padding is `10px` on all sides.
- Common compact dropdown padding is `5px` vertical with `15px` or `20px` horizontal padding.

## Radius scale

No radius variables were found. Observed radii:

- `10px`: common buttons, dropdowns, cards, previews, image containers, and menus.
- `60/10/10/60px`: `Enterprise Info`.
- No radius: many icon, text, and navigation elements.

## Elevation & effects

- `Button Shadow`: drop shadow with offset `0 2px`, color `#0000001F`.
- `Toggle`: drop shadow with offset `0 4px`, color `#00000040`.
- No motion tokens were found.

## Components

### Navigation and menus

- `Bottom_Menu`: `160x49px`, white fill. Variants: `Customization`, `Default`, `Overview`, `Settings`.
- `Bottom Menu`: `448x124px`, white fill, Inter Regular `12px`. Variants: `Customization_Selected`, `Default`, `Overview_Selected`, `Settings_Selected`.
- `Bottom Rectangle`: `448x124px`, vertical layout, `10px` padding, `10px` gap.
- `Hamburger Menu`: `39x39px`, white fill, `10px` radius, `#5A315D` `1px` stroke.
- `SETTINGS`: `60x18px`, white fill, Inter Regular `12px`.
- `CUSTOMIZATION`: `100x18px`, white fill, Inter Regular `12px`.
- `OVERVIEW`: `62x18px`, white fill, Inter Regular `12px`.
- `Settings`: `41x41px`, white fill.
- `Customization`: `40x40px`, white fill.
- `Overview`: `46x46px`, white fill.

### Controls and selectors

- `Preview`: `300x40px`, `10px` radius, `10px 25px` padding, `100px` gap, purple fill and stroke, Poppins Bold `13px`. Variant: default with visible option `No`.
- `Social Media Links`: `300x40px`, `10px` radius, `10px 25px` padding, `115px` gap, white fill, `#5A315D` `1px` stroke, Poppins Bold `13px`.
- `Background Image`: `300x40px`, `10px` radius, `10px 25px` padding, `50px` gap, white fill, `#5A315D` `1px` stroke, Poppins Bold `13px`. Visible options: `No`, `Yes`.
- `Logo`: `300x40px`, `10px` radius, `10px 25px` padding, `76px` gap, white fill, `#5A315D` `1px` stroke, Poppins Bold `13px`. Visible options: `No`, `Yes`.
- `Toggle_Variant`: `28x16.98px`, white fill. Variants: `Failure`, `Success`.
- `Toggle`: `28x16.98px`, white fill, `0 4px` shadow using `#00000040`.
- `Drop Down Location`: `241x25px`, `10px` radius, `5px 20px` padding, `60px` gap, white fill, `#5A315D` `1px` stroke, Inter Regular `12px`. Options: `1`, `2`, `3`, `Default`; visible options: `No`, `Yes`.
- `Drop Down Enterprise`: `225x25px`, `10px` radius, `5px 20px` padding, `50px` gap, white fill, `#5A315D` `1px` stroke, Inter Regular `12px`. Options: `1`, `2`, `3`, `Default`; visible options: `No`, `Yes`.
- `Dropdown Menu`: `133x25px`, `10px` radius, `5px 15px` padding, `10px` gap, white fill, `#5A315D` `1px` stroke, Inter Regular `12px`. Options: `1`, `2`, `3`, `4`, `Default`; visible options: `No`, `Yes`.
- `Location`: `169x25px`, white fill, `5px 60px` padding, `10px` gap, Inter Regular `12px`. Variants: `Default`, `Hover`, `Selected`, `Selected_Hover`.
- `Enterprise`: `198x25px`, white fill, `5px 70px` padding, `10px` gap, Inter Regular `12px`. Variants: `Default`, `Hover`, `Selected`, `Selected_Hover`.
- `Router`: `98x25px`, white fill, `5px 30px` padding, `10px` gap, Inter Regular `12px`. Variants: `Default`, `Hover`, `Selected`, `Selected_Hover`.
- `Enable`: `132x22.64px`, horizontal layout, `-30px` gap, Poppins Regular `13px`.
- `Notifications`: `73x44px`, vertical layout, `10px 20px` padding, `10px` gap.

### Actions and account controls

- `Support`: `300x40px`, `10px` radius, `10px` padding, purple fill, centered Poppins Regular `16px`.
- `Log Out`: `300x40px`, `10px` radius, `10px` padding, purple fill, centered Poppins Regular `16px`.
- `Account Settings`: `300x40px`, `10px` radius, `10px 40px` padding, purple fill, centered Poppins Regular `16px`.
- `Connect`: `300x40px`, `10px` radius, `10px` padding, purple fill, Poppins Bold `13px`.
- `Phone Number`: `300x40px`, `10px` radius, white fill, `#5A315D` `1px` stroke, Poppins Bold `13px`.
- `Email`: `300x40px`, `10px` radius, white fill, `#834581` `1px` stroke, Poppins Bold `13px`.
- `Sign In`: `547x88px`, `10px` radius, `20px` padding, purple fill, centered Poppins Regular `32px`.
- `Sign Up`: `547x88px`, white fill, `9px` right padding, Poppins Regular `32px`.
- `Add`: `39x39px`, white fill.
- `Reboot`: `39x39px`, white fill.
- `Add_Animation`: `35x35px`. Variants: `Default`, `Variant2`.
- `Reboot_Animation`: `39x39px`, white fill. Variants: `Default`, `Variant2`, `Variant3`, `Variant4`.

### Information and lists

- `Guest Network ID`: `270x68px`, white fill, Poppins Regular `16px`.
- `Store Network ID`: `270x68px`, white fill, Poppins Regular `16px`.
- `Guest Info`: `511x495px`, `10px` radius, white fill, `#5A315D` `1px` stroke, Poppins Bold `13px` and `20px`.
- `Enterprise Info`: `425x111px`, `60/10/10/60px` radius, white fill, `#5A315D` `1px` stroke, Poppins Regular `13px` and `24px`.
- `List of Locations`: `241x75px`, white fill, Inter Regular `12px`.
- `List of Enterprise`: `241x75px`, white fill, Inter Regular `12px`.
- `List of Routers`: `157x100px`, vertical layout, centered/min alignment, Inter Regular `12px`.

### Branding, imagery, and social content

- `+Social Media`: `355x174px`, `10px` radius, vertical layout, `10px` padding and gap, white fill, `#5A315D` `1px` stroke, Poppins Bold `18px` and Regular `13px`.
- `+Background_Image`: `700x300px`, `10px` radius, vertical layout, `5px 10px` padding, `10px` gap, `#FAFAFA` fill, `#5A315D` `1px` stroke, Poppins Italic `13px` and Regular `13px`.
- `+Logo_Image`: `325x325px`, `10px` radius, vertical layout, `5px 10px` padding, `10px` gap, `#FAFAFA` fill, `#5A315D` `1px` stroke, Poppins Italic `13px` and Regular `13px`.
- `Background Image_blank`: `708x969px`, `10px` radius, `#AEAEAE` fill.
- `Background Image`: use the `300x40px` control specification above.
- `Preview_Image`: `300x400px`, `10px` radius, white fill, Poppins Bold `5px` and `7px`.
- `Social Media Icons`: `92x19px`, horizontal layout, `19px` gap.
- `Logo`: use the `300x40px` control specification above.
- `Plum WiFi`: `155x33px`, vertical layout, centered.
- `plumwifi 1`: `115x115px`, white fill.
- `plum wifi full 1`: `594x139px`, white fill.

### Status and system content

- `Status`: `442x574px`, white fill, with Poppins Regular `10px` and `13px`, SemiBold `20px`, Bold `40px` and `60px`.
- `Status`: `357x144px`, `10px` radius, purple fill, white `1px` stroke, centered Poppins Bold `40px`, Regular `13px`, and Bold `60px`.
- `Status Background`: `442x574px`, `10px` padding and `10px` gap.
- `Settings`: `415x155px`, `10px` radius, purple fill, `20px` padding, Poppins Regular `10px` and SemiBold `20px`.
- `Component 1`: `24x24px`, white fill. Variants are Tabler icon names.
- `Terms`: `549x50px`, horizontal layout, `10px 0 10px 10px` padding, `17px` gap, centered/min alignment, Poppins Regular `16px`.
- `Terms`: `300x80px`, horizontal layout, `10px` padding, `10px` gap, Poppins Bold `13px`.
- `SIGN UP INFO`: `547x381px`, vertical layout, `23px` gap, Poppins Regular `32px`.

## Screen patterns

- **Overview:** Use `Overview`, `Status`, `Status Background`, `List of Routers`, `Reboot`, `Add`, `Notifications`, and the `Bottom Menu` overview-selected variant.
- **Customization:** Use `Customization`, `Preview`, `Background Image`, `Logo`, `Social Media Links`, `+Background_Image`, `+Logo_Image`, `+Social Media`, and the `Bottom Menu` customization-selected variant.
- **Settings:** Use `Settings`, `Account Settings`, `Support`, `Log Out`, `Toggle`, and the `Bottom Menu` settings-selected variant.
- **Enterprise and location selection:** Combine `Drop Down Enterprise`, `Enterprise`, `Drop Down Location`, `Location`, `Dropdown Menu`, `List of Enterprise`, and `List of Locations`.
- **Sign-up and sign-in:** Use `plum wifi full 1`, `Plum WiFi`, `Sign Up`, `Sign In`, `SIGN UP INFO`, `Phone Number`, `Email`, `Connect`, and `Terms`.
- **Guest information:** Use `Guest Info`, `Guest Network ID`, `Store Network ID`, `Social Media Icons`, and `Preview_Image`.

## Notes for implementers

- Use only the listed colors; do not introduce additional color values.
- Use Poppins for content and action labels unless the component specifies Inter. Use Inter Regular `12px` for navigation, selectors, and list labels.
- Preserve the specified fixed component dimensions where a component is used.
- Preserve component-specific padding, gap, alignment, fill, stroke, and radius values rather than normalizing them.
- Treat repeated component names with different dimensions as distinct source specifications; do not merge them when dimensions or content differ.
- `Component 1` is an icon family with `24x24px` variants; select the required named Tabler icon variant rather than inventing an icon.
- No responsive behavior, breakpoint rules, motion behavior, or grid behavior was provided in the source.
