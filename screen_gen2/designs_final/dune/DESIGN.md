---
name: dune-stock-investment-app-community
source: Dune: Stock investment app (Community)
kind: design-system-context
---

# dune - Design System

## Overview

- Product: Dune stock investment app.
- Source pages: Low fidelity screens and High fidelity screens.
- Primary viewport shown in low-fidelity screens: 428x926px.
- Design-system component families: Assets, balance card, bottom nav bar, button, cash invest, dangote stock details, deposit action, deposit outer, fund method pop-up, input field, paystack portfolio list, referral banner, search input field, stock detail table, stock list, verification input, withdrawal action, withdrawal outer.
- No local variable collections found.

## Design language

- Mobile investment app UI using a warm peach background, dark brown surfaces, pale peach secondary surfaces, white cards, and green positive states.
- Typography is primarily Rubik in the named mobile app tokens. Low-fidelity screens also use Roboto; raw extraction includes Inter.
- Layout is compact and card-based, with 8px radii in the high-fidelity component system.
- Main navigation uses Home, Invest, and Transact destinations.
- Grid: 4 columns, 17.88px section, 16px gutter, stretch alignment. Rows: 800, 8px section, 0px gutter, center alignment.

## Color palette

Semantic colors:

- Background colour: `#FEDBD0`
- Surface colour: `#442C2E`
- Surface text colour: `#FFFBFA`
- Second surface colour: `#FEEAE6`
- Off-text colour: `#FEEAE6`
- Error colour: `#D90101`
- White: `#FFFFFF`
- Border: none

Raw colors ranked by reported usage:

1. `#FFFFFF` — 247 uses
2. `#000000` — 212 uses
3. `#46BF5A` — 78 uses
4. `#C4C4C4` — 40 uses
5. `#442C2E99` — 30 uses
6. `#E05848` — 27 uses
7. `#1D204B` — 21 uses
8. `#2A2C52` — 21 uses
9. `#4F516F` — 21 uses
10. `#6F718A` — 21 uses
11. `#9799AB` — 21 uses
12. `#B7B8C5` — 21 uses
13. `#E5E5E5` — 20 uses
14. `#442C2E` — 17 uses
15. `#1434CB` — 7 uses
16. `#442C2E70` — 6 uses
17. `#1A37721A` — 5 uses

Additional extracted colors used by semantic tokens or effects:

- `#0000001F`
- `#00000024`
- `#00000033`
- `#BFADD080`

## Type scale

Named mobile app tokens:

- Headline 1: Rubik Regular, 400, 35px, tracking 0.25px, line height auto.
- Headline 2: Rubik Regular, 400, 24px, tracking 0px, line height auto.
- Headline 3: Rubik Medium, 500, 20px, tracking 0.15px, line height auto.
- Body large: Rubik Regular, 400, 16px, tracking 0.5px, line height auto.
- Body small: Rubik Regular, 400, 14px, tracking 0.25px, line height auto.
- Button text: Rubik Medium, 500, 14px, tracking 1.25px, line height auto.
- Caption text: Rubik Regular, 400, 12px, tracking 0.4px, line height auto.

Additional raw styles:

- Roboto Bold: 36px, 20px, 16px.
- Roboto SemiBold: 20px, 16px, 14px.
- Roboto Medium: 16px.
- Roboto Regular: 16px, 13px.
- Inter Medium: 20px.
- Rubik Bold: 20px, 16px, 14.16px, 14px, 11.33px, 9.91px, 7.08px, 5.66px, 4.96px.
- Rubik Medium: 9.91px, 4.96px.
- Rubik Regular: 24.5px, 9.91px, 8.67px, 8.5px, 5.66px, 4.96px, 4.25px.

## Spacing scale

No spacing variables found.

Extracted component and layout spacing values:

- Grid column gutter: 16px.
- Grid row section: 8px.
- Component gaps: 0px, 4px, 8px, 10px, 16px, 24px, 76px.
- Component padding: 0px, 8px, 16px.
- Low-fidelity mobile navigation height: 79px.
- Low-fidelity screen width: 428px.

## Radius scale

- 8px: high-fidelity component radius used by cards, fields, buttons, banners, and pop-ups.
- 16px: low-fidelity screen cards and controls.
- No radius variables found.

## Elevation & effects

- Mobile app Umbra shadow: drop shadow, 24px, offset `0 16`, color `#00000024`; 69 uses.
- Mobile app Penumbra shadow: drop shadow, 30px, offset `0 6`, color `#0000001F`; 11 uses.
- Card food delivery shadow: drop shadow, 80px, offset `0 33`, color `#BFADD080`; 6 uses.
- Mobile app Ambient shadow: drop shadow, 10px, offset `0 8`, color `#00000033`; 1 use.
- No motion variables found.

## Components

All dimensions are fixed unless stated otherwise.

### Assets

- Size: 136x56px.
- Radius: 8px.
- Horizontal layout; padding 8px; gap 8px.
- Fill: `#FFFFFF`.
- Text: Rubik Bold, 16px; Mobile app body small.

### Balance card

- Size: 274x181px.
- Horizontal layout; padding 16px; gap 24px.
- Fill: `#FFFFFF`.
- Text: Mobile app button text, Mobile app body small, Rubik Bold, 14px.

### Bottom nav bar

- Size: 350x82px.
- Horizontal layout; padding 16px; gap 10px.
- Alignment: center/center.
- Fill: `#FFFFFF`.
- Text: Mobile app caption text.

### Button

- Size: 86x49px.
- Radius: 8px.
- Horizontal layout; padding 16px; gap 10px.
- Alignment: center/center.
- Fill: Surface colour `#442C2E`.
- Text: Mobile app button text.

### Cash invest

- Size: 127x56px.
- Radius: 8px.
- Horizontal layout; padding 8px; gap 8px.
- Fill: `#FFFFFF`.
- Text: Rubik Bold, 16px; Mobile app body small.

### Dangote stock details

- Size: 295x200px.
- Fill: Background colour `#FEDBD0`.

### Deposit action

- Size: 159x64px.
- Radius: 8px.
- Horizontal layout; padding 8px; gap 16px.
- Alignment: center/center.
- Fill: `#FFFFFF`.
- Text: Rubik Bold, 20px.

### Deposit outer

- Size: 346x64px.
- Radius: 8px.
- Horizontal layout; padding 8px; gap 76px.
- Alignment: center/center.
- Fill: `#FFFFFF`.
- Text: Mobile app caption text, Rubik Bold, 16px, Mobile app body small.

### Fund method pop-up

- Size: 396x253px.
- Radius: 8px.
- Fill: Background colour `#FEDBD0`.
- Text: Rubik Medium, 16px; Mobile app button text.

### Input field

- Size: 216x49px.
- Radius: 8px.
- Horizontal layout; padding 16px; gap 10px.
- Alignment: min/center.
- Fill: Second surface colour `#FEEAE6`.
- Stroke: Off-text colour `#FEEAE6`, 1px.
- Text: Mobile app body small.

### Paystack portfolio list

- Size: 201x64px.
- Radius: 8px.
- Horizontal layout; padding 8px; gap 8px.
- Alignment: center/center.
- Fill: `#FFFFFF`.
- Text: Mobile app body small, Rubik Bold, 16px.

### Referral banner

- Size: 335x80px.
- Radius: 8px.
- Horizontal layout; padding 16px; gap 24px.
- Alignment: center/center.
- Fill: Background colour `#FEDBD0`.
- Text: Mobile app caption text, Rubik Bold, 16px.

### Search input field

- Size: 250x49px.
- Radius: 8px.
- Horizontal layout; padding 16px; gap 10px.
- Alignment: space-between/center.
- Fill: Second surface colour `#FEEAE6`.
- Stroke: Off-text colour `#FEEAE6`, 1px.
- Text: Mobile app body small.

### Stock detail table

- Size: 194x176px.
- Radius: 8px.
- Vertical layout; padding 0px; gap 4px.
- Alignment: center/center.
- Fill: Off-text colour `#FEEAE6`.
- Text: Mobile app body small.

### Stock list

- Size: 185x55.92px.
- Radius: 8px.
- Horizontal layout; padding 8px; gap 8px.
- Alignment: center/center.
- Fill: `#FFFFFF`.
- Text: Mobile app caption text, Rubik Bold, 16px.

### Verification input

- Size: 100x37px.
- Horizontal layout; padding 0px; gap 0px.
- Alignment: center/center.
- Text: Mobile app body small.

### Withdrawal action

- Size: 184x64px.
- Radius: 8px.
- Horizontal layout; padding 8px; gap 16px.
- Alignment: center/center.
- Fill: `#FFFFFF`.
- Text: Rubik Bold, 20px.

### Withdrawal outer

- Size: 346x64px.
- Radius: 8px.
- Horizontal layout; padding 8px; gap 76px.
- Alignment: max/center.
- Fill: `#FFFFFF`.
- Text: Mobile app caption text, Rubik Bold, 16px, Mobile app body small.

## Screen patterns

- Splash: white 428x926px screen with the DUNE wordmark.
- Authentication: entry point for login and sign-up.
- Signup/login option: two 250x50px actions for Login and Sign Up.
- Login: email and password fields with a Login action.
- Signup: email, phone number, and password fields with a Sign up action.
- Verification: verification-code field with a Verify action.
- Home: top navigation area, balance content, referral prompt, recent transactions, and fund-account content.
- Invest: stock discovery and portfolio navigation.
- Stock list: navigation, stock-list heading, stock portfolio heading, search field, and repeated stock cards.
- Stock details: stock heading, company information, valuation/statistics content, and an investment action.
- Investment flow: stock detail, amount input, proceed/invest action, and success state with a Back To Home action.
- Fund account flow: fund method pop-up and deposit/withdrawal-related actions.
- Repeated low-fidelity navigation: Home, Invest, and Transact labels with a 79px-high top area.
- Low-fidelity placeholders use `#FFFFFF`, `#E5E5E5`, and `#C4C4C4`; detailed high-fidelity styling should use the semantic palette and listed components.

## Notes for implementers

- Use only the listed colors; do not introduce additional palette values.
- Prefer named mobile app typography tokens for high-fidelity UI. Use raw Roboto styles only where matching the low-fidelity screen treatments.
- Preserve fixed component dimensions when using the extracted component families.
- Use 8px radii for the named high-fidelity components. The 16px radius appears in low-fidelity screen placeholders and should not replace the component radius by default.
- Use `#442C2E` for surface-colored buttons and `#FFFFFF` for white cards and action controls.
- Use `#FEEAE6` for secondary surfaces and field fills, with a 1px `#FEEAE6` stroke where specified.
- Use `#FEDBD0` for the primary background and referral/banner surfaces.
- Use `#D90101` for error states and `#46BF5A` for positive states where applicable.
- Keep mobile layouts aligned to the extracted 4-column grid with a 16px gutter.
