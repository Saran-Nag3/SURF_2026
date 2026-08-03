---
name: hey-bird-app-community
source: Hey Bird App (Community)
kind: design-system-context
---

# hey - Design System

## Overview

- Mobile community app design system for 375x812px iPhone 11 Pro / X screens.
- Visual direction: soft pink-to-white gradients, bird imagery, rounded pink controls, black or white text, and frequent soft drop shadows.
- Source page: Page 1.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Use a playful, bird-focused visual identity with large photographic or illustrated bird imagery.
- Use pink as the primary interactive and navigational color.
- Use white text on pink controls and black text on light backgrounds.
- Use rounded controls with large corner radii.
- Use soft, repeated drop shadows on controls, text, imagery, and icons.
- Use Roboto across the interface, with frequent Light, Regular, Bold, Italic, and Italic Bold treatments.
- App surfaces commonly use a vertical gradient from `#FFBBCD` to `#FFFFFF`.
- Community content includes circular user imagery, labels such as Friends, Birds, Chirping, Map, and Call, and a prominent Add Friend action.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role / notes |
|---|---:|---|
| `#000000` | 223 | Primary dark text, icons, and dark fills |
| `#FFFFFF` | 136 | Primary light text, status surfaces, and light fills |
| `#C4C4C4` | 87 | Raw neutral color |
| `#F99DAA` | 58 | Primary pink field and input fill |
| `#FCFCFE` | 58 | Near-white surface |
| `#00000066` | 50 | Image drop shadow |
| `#F38093` | 44 | Pink accent and labels |
| `#F88D9C` | 34 | Pink buttons and accents |
| `#50555C` | 30 | Dark neutral |
| `#FFBBCD` | 26 | Light pink gradient and navigation surface |
| `#0000007A` | 25 | Dark translucent color |
| `#52565F` | 15 | Dark neutral |
| `#FF759B33` | 10 | Translucent pink |
| `#F4F4F6` | 9 | Light neutral surface |
| `#F3809336` | 8 | Translucent pink accent |
| `#ADB3BC` | 6 | Light neutral |
| `#FFD04C` | 5 | Yellow accent |
| `#FFD663` | 5 | Yellow accent |

Named tokens:

- `Label Color / Dark / Primary`: `#FFFFFF`
- `Fill Color / Dark / Secondary`: `#78788052`
- `Black/100%`: `#000000`
- `Yellow`: `#FFD663`
- `Label Color / Light / Primary`: `#000000`

Common gradients:

- `#FFBBCD` at 0% to `#FFFFFF` at 100%.
- `#FFBBCD` at 0% to `#FFFFFF` at 17%.
- Pink-only gradient surfaces using `#FFBBCD`.

## Type scale

Font family: Roboto.

Ranked raw text styles:

| Size | Weight / style | Usage |
|---:|---|---:|
| 22.5px | Regular | 54 uses; keyboard text |
| 23px | Bold Italic | 52 uses |
| 14px | Black | 29 uses; status time and button text |
| 17px | Regular | 19 uses; navigation text |
| 21px | Bold | 17 uses |
| 16px | Regular | 16 uses |
| 28px | Bold | 8 uses |
| 18px | Bold Italic | 8 uses |
| 25px | Light | 8 uses; app labels |
| 20px | Medium | 8 uses |
| 24px | Italic | 7 uses; input headings |
| 23px | Light | 7 uses |
| 16px | Bold Italic | 6 uses |
| 9px | Regular | 6 uses |
| 14px | Bold Italic | 4 uses |
| 19px | Light | 4 uses |
| 11px | Regular | 4 uses |
| 17px | Bold | 3 uses |
| 32px | Bold | 3 uses |
| 17px | Light | 3 uses |

Additional styles observed in screens:

- Roboto LightItalic, 20px: quotation text.
- Roboto Thin, 19px: “Press On The Logo”.
- Roboto MediumItalic, 24px: form action heading.
- Roboto MediumItalic, 21px: “Sign In”.

Hierarchy sizes present:

- 32px Bold
- 28px Bold
- 25px Light
- 24px Italic
- 23px Bold Italic
- 23px Light
- 22.5px Regular
- 21px Bold
- 20px Medium
- 19px Light
- 18px Bold Italic
- 17px Bold, Light, or Regular
- 16px Bold Italic or Regular
- 14px Black or Bold Italic
- 11px Regular
- 9px Regular

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found.

Observed radii:

- 15px: small circular image.
- 28px: rounded form action control.
- 31px: rounded primary controls and button groups.
- 250.5px: large circular image treatment.
- 339px, 384px, 414px, 480px, 479.5px, 480px, 546px, 720px, 1007px, and 1021.5px: circular profile imagery.
- 720px: circular image treatment.

## Elevation & effects

Drop shadows:

- `4px` blur, offset `0 4`, color `#00000040`.
- `4px` blur, offset `0 4`, color `#000000`.
- `4px` blur, offset `0 4`, color `#F88D9C`.
- `5px` blur, offset `35 40`, color `#00000066`.
- Icons/16/Send uses two `4px` blur shadows with offset `0 4` and color `#00000040`.
- Text and controls may use the same shadow repeatedly; source examples include two, three, or four repeated shadows.

Opacity treatments:

- Primary landing buttons: 75% opacity.
- Form input rectangles: 42% opacity.
- Form action group: 54% opacity.
- `Fill Color / Dark / Secondary`: `#78788052`.

Other effects:

- Keyboard/Light/Alphabetic uses a `108.73px` background blur.
- Image and icon assets commonly use `4px` blur shadows.
- No local effect styles were defined.

## Components

### Icons

- Icons/24/Camera: 32x32px.
- Icons/16/More: 32x32px.
- Icons/16/Send: 16x16px, fill `#FFFFFF`, with two drop shadows using `#00000040`.
- Microphone vector: 11x16.37px, fill `#FFFFFF`.
- Arrow vector: 9x0px, white 3px stroke.
- Status icons include Wi-Fi at 15.27x10.97px and cellular signal at 17x10.67px.

### Keyboard

- Keyboard/Light/Alphabetic: 375x291px.
- Fill: `#D1D5DB`.
- Background blur: 108.73px.
- Text uses Roboto Regular at 22.5px and 16px.

### friendly

- friendly: 22x22px.

### Controls and form patterns

- Landing buttons: 175x51.07px, 31px radius, `#F88D9C`, 75% opacity.
- Landing button labels: white Roboto Black at 20px or 21px, with repeated `#00000040` drop shadows.
- Form fields: 311x52px or 335x56px, `#F99DAA`, 42% opacity, with a `4px` offset `0 4` black shadow.
- Form field labels: white Roboto Italic at 24px.
- Form action control: 149x42px, 28px radius, `#F99DAA`, with the source’s translucent pink treatment.
- Sign In action group: 110x40.86px, 31px radius, `#F88D9C`, with 54% opacity.
- Navigation text such as Back, Home, and Log out: black Roboto Regular at 17px, often with pink and black shadows.

### Status bar

- Status bar: 375x44px with white fill.
- Time area: 54x28px, “9:41”, Roboto Black 14px.
- Battery: 25x12px.
- Wi-Fi: 15.27x10.97px.
- Cellular signal: 17x10.67px.
- Status icon fills vary between `#000000` and `#FFFFFF`.

## Screen patterns

- **Landing / authentication entry:** 375x812px screen with `#FFBBCD` to `#FFFFFF` gradient, large bird imagery, and stacked rounded buttons for Log in, Sign Up, and Add Phone.
- **Intro prompt:** Same mobile gradient and bird imagery, with a large quotation in Roboto LightItalic 20px and a “Press On The Logo” instruction in black.
- **Sign-up form:** White status bar, pink translucent input fields for First name, Last name, Email app, Password, and Confim password; a rounded Sign Up action; bird imagery and a Back control.
- **Sign-in form:** Pink gradient background, Email and Password fields at 311x52px, rounded Sign In action, Back navigation, and lower bird imagery.
- **Home dashboard:** Pink-to-white gradient, status bar, app imagery, a large bird illustration, icon-and-label navigation for Friends, Birds, Chirping, Map, and Call, plus Log out.
- **Add Friend screen:** Header region with `#FFBBCD`, Add Friend label in white Roboto Light 23px, circular profile images at approximately 91x91px, Home navigation, and a white microphone icon.
- **Shared navigation:** Black Roboto Regular 17px labels such as Back, Home, and Log out, frequently supported by pink or black drop shadows.

## Notes for implementers

- Use only the listed palette values; prioritize `#000000`, `#FFFFFF`, `#F99DAA`, `#F38093`, `#F88D9C`, and `#FFBBCD` according to the screen pattern.
- Preserve the 375x812px mobile composition and 375px-wide status bar.
- Do not introduce spacing, motion, grid, or text-style tokens; the source does not define them.
- Keep controls strongly rounded, especially the 31px-radius landing and sign-in actions.
- Use Roboto and match the specified weight, style, and size rather than approximating with another typeface.
- Treat bird and profile imagery as prominent visual content with soft shadows; the source provides image assets but no reusable image component family.
- Maintain high contrast between white labels on pink controls and black navigation text on light surfaces.
- Use the allowed component families only: Icons, Keyboard, and friendly.
