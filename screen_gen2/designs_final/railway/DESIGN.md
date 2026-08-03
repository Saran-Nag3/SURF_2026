---
name: railway
source: E-TRACK Railway Tracking App (Community) — Page 1
kind: design-system-context
---

# railway - Design System

## Overview

Mobile railway tracking app UI extracted from a 428×926px viewport. The source includes language selection, onboarding, login, password reset, and account registration screens, with light and dark variants.

Primary visual patterns:
- Blue primary actions on light and dark surfaces.
- White or near-black screen backgrounds.
- Large, rounded rectangular fields and buttons.
- Open Sans is the dominant UI typeface.
- Status bars and bottom home indicators follow iPhone-style layouts.

## Design language

- Use a clean, mobile-first interface sized around 428×926px.
- Use strong blue for primary actions and links.
- Use rounded controls with 10px corners.
- Light mode uses #FFFFFF backgrounds and #F1F1F1 fields.
- Dark mode uses #0D0D0D backgrounds and #363636 fields.
- Primary action labels are white and commonly use Open Sans Bold at 22px.
- Supporting labels and body copy commonly use Open Sans Regular or SemiBold at 18px.
- Dark mode reverses primary text and system UI to white.
- Screens use generous full-width controls with a common width of 372px.

## Color palette

Ranked by raw usage count:

| Color | Usage | Observed role |
|---|---:|---|
| #000000 | 767 | Light-mode text, controls, indicators |
| #FFFFFF | 534 | Light-mode surfaces, dark-mode text and controls |
| #0076CB | 154 | Primary buttons and active links |
| #C4C4C4B2 | 118 | Neutral translucent UI |
| #0085E4 | 100 | Dark-mode links and accents |
| #C4C4C4 | 86 | Neutral UI and image placeholders |
| #0000008C | 82 | Secondary and placeholder text |
| #0D0D0D | 53 | Dark-mode screen background |
| #00000099 | 48 | Muted dark text |
| #F1F1F1 | 47 | Light-mode input fields |
| #FFFFFF8C | 41 | Dark-mode secondary and placeholder text |
| #C2D1D9 | 31 | Borders and placeholder artwork |
| #252325 | 27 | Dark neutral |
| #DADADA | 24 | Neutral UI |
| #363636 | 22 | Dark-mode input fields |
| #FFFFFF99 | 22 | Muted white text |
| #FFFFFF80 | 21 | Translucent white UI |
| #000000B2 | 15 | Emphasized muted dark text |
| #E9F3F9 | 13 | Pale blue surface |

Named color tokens:
- Focus/Blue: #4975E9
- Dark: #282D46
- Extra Light: #FFF4EF

## Type scale

No local text styles were found. Observed typography, ranked by usage:

| Typeface | Weight | Size | Usage |
|---|---|---:|---:|
| Open Sans | Regular | 18px | 193 |
| Open Sans | SemiBold | 22px | 162 |
| Open Sans | Regular | 22px | 78 |
| Open Sans | SemiBold | 18px | 72 |
| Open Sans | Bold | 22px | 71 |
| SF Pro Display | Semibold | 18px | 59 |
| Inter | Regular | 12px | 18 |
| Open Sans | SemiBold | 24px | 13 |
| Open Sans | Regular | 20px | 8 |
| Inter | Light | 22px | 6 |
| Inter | Regular | 22px | 6 |
| Open Sans | Bold | 24px | 6 |
| Open Sans | Bold | 32px | 6 |

Observed hierarchy:
- 32px: Open Sans Bold
- 24px: Open Sans Bold or SemiBold
- 22px: Inter Light, Inter Regular, Open Sans Bold, Regular, or SemiBold
- 20px: Open Sans Regular
- 18px: Open Sans Regular, SemiBold, or SF Pro Display Semibold
- 12px: Inter Regular

## Spacing scale

No spacing variables were found.

Observed control dimensions:
- Standard full-width field or button: 372×60px
- Password-reset action: 128×60px
- Create Account action: 250×60px
- Language-selection controls: 372×60px
- Mobile viewport: 428×926px
- Status bar: 428×44px
- Home indicator: 134×5px

## Radius scale

No radius variables were found.

Observed radii:
- 4px: thumbnail placeholder
- 10px: fields, buttons, language controls, and image thumbnail
- 85px: onboarding artwork shape
- 100px: home indicator

## Elevation & effects

Observed effects:
- Starting Page: drop shadow with 4px value and offset 0 4.
- Image artwork: drop shadow with 8px value and offset 0 4.
- No local effect styles were found.
- No motion variables were found.
- No grid styles were found.

## Components

_None found in source._

## Screen patterns

- **Starting Page:** 428×926px language-selection screen. Contains three 372×60px rounded controls, a language prompt, 100×100px artwork, a logo asset, iPhone status bar, and bottom home indicator. Light and dark variants are present.
- **begin:** 428×926px onboarding/splash screen with a 280×280px image area and a large circular or rounded artwork treatment. Light and dark variants are present.
- **Login Page:** Two 372px-wide input fields, a “Forgot Password?” link, a 372×60px Login button, account-registration prompt, artwork, status bar, and home indicator. Light and dark variants are present.
- **Pw-Reset:** Email instruction copy, email field, 128×60px Send button, reset-password heading/link, back arrow, status bar, and home indicator. Light and dark variants are present.
- **Sign In:** Registration form with five 372×60px fields, profile-image area, back arrow, 250×60px Create Account button, status bar, and home indicator.
- **Wallet icon:** A standalone 24×24px wallet frame is present.

## Notes for implementers

- Preserve the 428×926px mobile composition and the common 372px content width where applicable.
- Use only the documented colors; do not introduce additional palette values.
- Use #0076CB for primary actions in both themes.
- Use #0085E4 for dark-mode reset-password and back-arrow accents where shown.
- In light mode, use #FFFFFF for the screen background and #F1F1F1 for input fields.
- In dark mode, use #0D0D0D for the screen background and #363636 for input fields.
- Keep controls at approximately 60px high with 10px corner radii.
- Use Open Sans for app content unless the system status bar requires SF Pro Display.
- Use white text on blue buttons and maintain the observed 22px bold button-label style.
- Treat extracted image fills as source assets; their contents are not defined by the token extraction.
