---
name: tinder-app-community
source: Tinder App (Community)
kind: design-system-context
---

# tinder - Design System

## Overview

- Mobile dating app interface extracted from Figma page `Page 1`.
- Primary frame size: `375×667px`.
- Visual focus: Tinder branding, gradient backgrounds, rounded authentication actions, social sign-in flows, and phone-number entry.
- No local variable collections, text styles, spacing variables, radius variables, motion variables, grid styles, or component sets were found.

## Design language

- Bright, energetic onboarding aesthetic centered on a pink-to-orange linear gradient.
- Use white branding, high-contrast white text, pill-shaped actions, and sparse layouts.
- Authentication screens use either full-screen gradient backgrounds or white backgrounds with dark gray and medium gray text.
- Social sign-in actions are outlined, rounded pills with centered labels and white iconography.
- System-style authorization dialogs use translucent dark overlays, blurred backgrounds, white text, and blue action text where present in the source.
- Phone-number entry uses a prominent large heading, underlined input segments, and a native-style numeric keypad.

## Color palette

Ranked by raw usage count:

| Color | Usage | Observed role |
|---|---:|---|
| `#939393` | 2775 | Medium gray text, inactive phone-number content, controls |
| `#FFFFFF` | 1958 | Primary text, logos, button fills, keypad backgrounds |
| `#4A4A4A` | 1906 | Dark gray text and input underlines |
| `#000000` | 1057 | Black text, keypad labels, overlays |
| `#D9D9D9` | 757 | Neutral gray surface |
| `#FCFCFE` | 372 | Key backgrounds |
| `#F5F7FA` | 341 | Light neutral surface |
| `#4396F7` | 243 | Blue accent |
| `#EAEDF1` | 166 | Light neutral surface |
| `#EA5D6B` | 164 | Red-pink accent |
| `#C42936` | 158 | Dark red accent |
| `#EEEFF1` | 137 | Light neutral surface |
| `#96E063` | 132 | Green accent |
| `#D0CECD` | 132 | Warm neutral gray |
| `#FE3675` | 110 | Gradient endpoint and pink accent |
| `#7D8490` | 103 | Gray accent |
| `#F2F2F6` | 91 | Light neutral surface |
| `#346CF2` | 90 | Blue accent |
| `#ECEFF2` | 90 | Light neutral surface |
| `#EFC54D` | 88 | Yellow accent |
| `#488AF2` | 81 | Blue accent |

### Gradient

- Linear gradient: `#FE3675` at `0%` to `#FF7854` at `100%`.
- Screens also show the same endpoints in reverse order: `#FF7854` at `0%` to `#FE3675` at `100%`.
- Used for splash, main authentication, social sign-in, and primary continue-button surfaces.

## Type scale

### Gotham

- Gotham Medium: `10px`, `11px`, `12px`, `14px`, `16px`, `18px`, `20px`, `22px`, `26px`, `32px`, `34px`
- Gotham Book: `10px`, `11px`, `12px`, `13px`, `14px`, `15px`, `16px`, `18px`, `24px`, `33px`
- Gotham Bold: `14px`, `18px`, `26px`
- Gotham Rounded Book: `11px`
- Gotham Light Light: `11px`, `12px`

### SF Pro

- SF Pro Regular: `16px`, `22px`, `25px`
- SF Pro Bold: `10px`

### Usage guidance from observed hierarchy

- Large headings: Gotham Medium `34px`; Gotham Book `33px`; Gotham Medium `32px`.
- Prominent headings: Gotham Bold or Gotham Medium `26px`; SF Pro Regular `25px`.
- Dialog and screen headings: Gotham Book `24px`, Gotham Medium or SF Pro Regular `22px`, Gotham Medium `20px`.
- Standard headings and button labels: `16px` and `14px`.
- Compact labels and legal text: `10px`, `11px`, and `12px`.
- Phone keypad numbers: SF Pro Regular `25px`.
- Phone keypad labels: SF Pro Bold `10px`.

## Spacing scale

_No spacing variables found in source._

Observed component dimensions:

- Standard pill button height: `44px`.
- Social sign-in stack: three `44px` buttons within a `154px` group.
- Primary button widths: `210px`, `243px`, and `277px`.
- Phone keypad region: `375×280px`.
- Splash logo group: `200.14×47.5px`.
- Main authentication logo group: `160.06×37.99px`.

## Radius scale

Observed radii:

- `5px`: numeric keypad keys.
- `6px`: Continue action in the Apple authorization dialog.
- `13px`: Apple authorization icon container.
- `21px`: Facebook authorization dialog.
- `62px`: primary and outlined pill buttons.
- `101px`: phone keypad home indicator.
- `0px`: square containers and grouped screen regions.

## Elevation & effects

- Drop shadow: offset `0 4px`, blur `13px`, color source `#000000`.
- Key shadow: offset `0 1px`, blur `0px`, color source `#000000`.
- Numeric keypad keys use a `0 1px` drop shadow.
- Apple authorization sheet uses `20px` background blur.
- Facebook authorization dialog uses `25px` background blur.
- Authentication overlays use full-screen dark translucent treatments in the source; exact source colors are not part of the allowed palette.
- No reusable local effect styles were found.

## Components

_None found in source._

Observed repeated UI patterns are not defined as component families or component sets.

## Screen patterns

- **Splash screen:** `375×667px` full-screen gradient with a centered white Tinder logo.
- **Main authentication screen:** Full-screen gradient, white Tinder logo, white legal copy, a `210×44px` white filled `CREATE ACCOUNT` pill, a `210×44px` white outlined `SIGN IN` pill, and a `Trouble signing in?` link.
- **Social sign-in selection:** Full-screen gradient with three vertically stacked outlined pills for Apple, Facebook, and phone-number sign-in. Button widths are `243px` or `277px`; each button is `44px` high with `62px` radius.
- **Image-backed sign-in:** Full-screen image with dark gradient overlays, white branding and copy, and the same authentication actions.
- **Apple authorization:** Full-screen gradient underneath a dark overlay and a bottom authorization sheet sized `375×233px`. The sheet includes `Apple ID`, `Cancel`, a gradient Tinder icon container, account description, and a blue `Continue` action.
- **Facebook authorization:** Full-screen gradient underneath a dark overlay and a centered `261×159px` dialog with `21px` radius, white text, `Cancel`, and `Continue`.
- **Phone-number entry:** White screen with a large `My number is` heading in Gotham Medium `34px`, gray country and number fields in Gotham Book `18px`, gray helper text in Gotham Light Light `12px`, a gradient `210×44px` Continue pill, and a native-style numeric keypad occupying `375×280px`.

## Notes for implementers

- Use only the listed palette values and the documented gradient endpoints.
- Preserve the `375×667px` mobile composition as the primary reference frame.
- Prefer pill-shaped actions with `44px` height and `62px` radius for authentication controls.
- Use white text and logo artwork on gradient surfaces.
- Keep button labels uppercase where shown: `CREATE ACCOUNT`, `SIGN IN`, `SIGN IN WITH APPLE`, `SIGN IN WITH FACEBOOK`, `SIGN IN WITH PHONE NUMBER`, and `CONTINUE`.
- Use Gotham for Tinder-branded interface copy and SF Pro for the numeric keypad.
- Do not introduce a component family abstraction; the source contains no component sets.
- No spacing, radius, motion, or effect variables were defined locally. Use only the observed dimensions and effects documented above.
