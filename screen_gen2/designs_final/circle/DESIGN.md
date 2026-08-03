---
name: circle-share-app-community
source: Circle Share App (Community)
kind: design-system-context
---

# circle - Design System

## Overview

- Mobile app design system extracted from the Circle Share App (Community) Figma file, Page 1.
- Primary viewport: 375×812px.
- Visible flows include onboarding, lazy loading, sign in, password recovery, sign up, and unauthenticated sign up/sign in.
- The interface mixes Circle Share branding with French-language onboarding and authentication copy.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Light mobile UI with white surfaces and rounded controls.
- Branding uses blue and green accents, including linear gradients.
- Onboarding uses centered text blocks, branded imagery, pagination indicators, and prominent blue calls to action.
- Authentication screens use soft warm decorative backgrounds, pale gray input fields, rounded social-login controls, and prominent rounded blue actions.
- Typography is mixed across Roboto, Inter, Avenir Next, Helvetica, Helvetica Neue, DM Sans, and SF Pro Display.
- Decorative illustrations and logos are image or vector assets; their source image hashes are not design tokens.

## Color palette

Ranked by raw usage where counts were available:

- `#000000` — 128 uses; black labels, icons, and text.
- `#FFFFFF` — 108 uses; primary light surface and light text.
- `#30242A` — 83 uses.
- `#A15842` — 40 uses.
- `#FEE6C6` — 32 uses.
- `#E5CAA6` — 26 uses.
- `#F9D8AC` — 26 uses.
- `#3F414E` — 24 uses; dark authentication headings and labels.
- `#F5EBDD` — 23 uses.
- `#FFB7D5` — 19 uses.
- `#A1A4B2` — 17 uses; secondary authentication text and placeholders.
- `#6893FD` — 15 uses.
- `#066798` — 14 uses; primary button and loading-screen blue.
- `#321F0E` — 14 uses.
- `#DADADA` — 14 uses.
- `#200E32` — 12 uses.
- `#80B996` — 12 uses.
- `#F6F1FB` — 12 uses.
- `#444359` — 11 uses.
- `#8E97FD` — 11 uses.
- `#FFBE21` — 11 uses.
- `#3EC1F3` — 10 uses.
- `#4756DF` — 10 uses; use as the representative of the near-identical `#4756DF`/`#4856DF` raw colors.
- `#66A986` — 10 uses.
- `#E7CCA8` — 9 uses.
- `#EBEAEC` — 9 uses; authentication control borders.
- `#CA7358` — 8 uses.
- `#D8D8D8` — 8 uses.
- `#EDA47E` — 8 uses.
- `#FF7235` — 7 uses.
- `#EAA58B` — 6 uses.
- `#F2F3F7` — 6 uses; authentication input backgrounds.
- `#FAE5D2` — 6 uses.
- `#05293C` — 5 uses.
- `#F9F0E3` — 5 uses; authentication decorative background.
- `#FDBCA0` — 5 uses.
- `#FFBBAB` — 5 uses.

Named color tokens:

- Text Color: `#000000DE`
- Light Color: `#FFFFFF`
- Gray Color: `#5F5F5F`
- Primary/Primary shade 3: `#244CAA`
- Primary/Primary: `#447BFB`
- Grays/Gray 58: `#7E8494`
- Grays/Gray 88: `#D3D7E0`
- Carbon/Darkest: `#24262B`
- Carbon Neutral/300: `#D6D9DD`
- Primary/Primary tint 4: `#E8EFFF`
- Grays/Gray 73: `#959FBA`
- Label/Light/Primary: `#000000`
- Black/B100: `#171717`
- Gray/G100: `#8F92A1`
- Typography/Paragraph: `#A6A6A6`
- Typography/Heading: `#262626`
- Typography/Button: `#FFFFFF`
- SystemOrange/Light: `#FF9500`

Gradients:

- Accent Color: linear gradient from `#1DDE7D` at 0% to `#72DFC5` at 100%.
- Primary Color: linear gradient from `#1A73E9` at 0% to `#6C92F4` at 100%.

## Type scale

Defined typography tokens:

- 28px: Header / Heading 1 — Inter Bold, weight 700, line-height 42px, tracking `-0.28px`.
- 21px: Button/CTA-Medium — Roboto Bold, weight 700, line-height 21px, tracking `0.42px`.
- 17px: Body / Paragraph 1 — Inter Regular, weight 400, line-height 25px, tracking `0px`.
- 16px: Subheading Regular — Roboto Regular, weight 400, line-height auto, tracking `0px`.
- 14px: Body 2 Medium — Roboto Medium, weight 500, line-height auto, tracking `0px`.
- 14px: Body 1 Regular — Roboto Regular, weight 400, line-height auto, tracking `0px`.
- 13px: Tab — Avenir Next DemiBold, weight 600, line-height auto, tracking `0px`.

Additional raw typography observed:

- 30px: Helvetica Bold.
- 28px: Helvetica Bold.
- 24px: DM Sans Bold.
- 16px: Helvetica Light.
- 15px: Helvetica Helvetica.
- 15px: SF Pro Display Regular.
- 14px: Helvetica Bold.
- 14px: Helvetica Helvetica.
- 14px: Roboto Medium.
- 13px: HelveticaNeue HelveticaNeueMedium.
- 13px: Roboto Regular.
- 10px: SF Pro Display Regular.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- 16dp Elevation Dialog:
  - Drop shadow: `48px`, offset `0 32`, color `#2632381F`.
  - Drop shadow: `16px`, offset `0 16`, color `#26323814`.
- Shadow/Base:
  - Drop shadow: `20px`, offset `0 12`, color `#8385A34D`.
- Shadow/Footer:
  - Drop shadow: `14px`, offset `0 4`, color `#A6B3C24D`.
- Burger Menu effects:
  - Drop shadow: `1.95px`, offset `0 1.49`, color `#00000009`.
  - Drop shadow: `5.38px`, offset `0 4.13`, color `#0000000D`.
  - Drop shadow: `12.96px`, offset `0 9.95`, color `#00000011`.
  - Drop shadow: `43px`, offset `0 33`, color `#0000001A`.

## Components

Only these component families were found:

### Burger Menu

- Size: `375×812px`.
- Radius: `20px`.
- Fill: `#FCEFE352`.
- Text styles:
  - 16 sp • Subheading Regular.
  - 14 sp • Body 2 Medium.
  - 14 sp • Body 1 Regular.
- Uses the Burger Menu effects listed in Elevation & effects.

### State=Not selected

- Size: `120×50px`.
- Fill: `#FFFFFF`.
- Text style: Tab — Avenir Next DemiBold, 13px.

### State=Selected

- Size: `120×50px`.
- Fill: `#FFFFFF`.
- Text style: Tab — Avenir Next DemiBold, 13px.
- Source provides no visual difference from State=Not selected.

## Screen patterns

- Onboarding user 1, 2, and 3:
  - `375×812px` white screens.
  - Shared status bar, Circle Share logo, centered onboarding content, pagination indicators, and primary blue action button.
  - Headings use Header / Heading 1.
  - Supporting copy uses Body / Paragraph 1.
  - Buttons use `#066798`, 12px radius, and Button/CTA-Medium.
  - Onboarding illustrations are decorative assets.
  - Screens include “Passer” on onboarding user 1 and 2.
- Onboarding user 4:
  - `375×812px` screen using the White/W100 surface token.
  - A home-indicator element is present.
- Lazy Loading App V1:
  - `375×812px` loading screen.
  - Full-screen blue vector using `#066798`.
  - Centered white Circle Share logo and title image assets.
- Sign in:
  - `375×812px` white screen with warm decorative background treatment.
  - Authentication inputs use pale gray surfaces represented by `#F2F3F7`, 15px radius, and secondary text `#A1A4B2`.
  - Google, Apple, and Facebook continuation controls are stacked.
  - Apple control uses `#000000`; primary authentication action uses `#066798`.
  - Headings use dark `#3F414E`.
- Password Recover:
  - Email input, large dark heading, explanatory text, recovery action, back control, and a Google reCAPTCHA image asset.
  - Primary recovery action uses `#066798`.
- Sign up:
  - Social continuation controls appear above email and password inputs.
  - Inputs use pale gray surfaces and 15px radius.
  - Includes terms acceptance text, checkbox, back control, and blue registration action.
- Sign up and Sign in (if not connected):
  - Promotional unauthenticated entry screen with decorative illustration, logo, headline, supporting paragraph, registration action, and sign-in prompt.

## Notes for implementers

- Use only the listed colors and typography values; do not introduce additional design tokens.
- Preserve the 375×812px mobile composition for the documented screens.
- Treat decorative illustrations, logos, social icons, and reCAPTCHA as assets rather than reconstructing them from unlisted primitives.
- Use the exact component families: Burger Menu, State=Not selected, and State=Selected.
- The selected and not-selected state specs are identical in the extraction; do not infer an unrecorded visual distinction.
- No spacing or radius scales were defined. Use component-specific measurements only where explicitly documented.
- The source contains multiple typography systems. Prefer the named typography tokens for corresponding components and preserve raw font usage where a screen explicitly uses it.
- Keep French copy and accents when reproducing the documented authentication and onboarding screens.
