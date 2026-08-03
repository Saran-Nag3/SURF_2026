---
name: renault-carcare-app-community
source: Renault CarCare App (Community — Page 1)
kind: design-system-context
---

# renault - Design System

## Overview

Mobile Renault CarCare app design extraction for 375×812px screens. The documented flows include Settings, Profile, Profile Updated, Account, Account Updated, and a partial More Settings screen. The interface uses white surfaces, blue primary actions, neutral text, rounded controls, and Poppins typography.

## Design language

- Mobile-first layouts at 375×812px.
- White screen backgrounds using Shades/0.
- Primary actions use Secondary/500.
- Text is predominantly Neutral/900, with Neutral/500 for supporting copy and icons.
- Secondary blue accents use Secondary/100, Secondary/300, Secondary/500, and Secondary/700.
- Controls and dialogs use rounded corners.
- Settings rows pair a circular icon background with a label and trailing chevron.
- Forms use stacked labels and 327px-wide input fields.
- Dialogs use a white rounded container over a Neutral/700 overlay at 60% opacity.
- Poppins is the primary text family; Inter is used for one regular medium style.
- Raw unstyled layers also contain SF Pro Text and Poppins styles.

## Color palette

Ranked by recorded usage where available:

| Token | Color | Usage |
|---|---|---:|
| Neutral/900 | #0F172A | 123 |
| Shades/100 | #000000 | 109 |
| Shades/0 | #FFFFFF | 96 |
| Secondary/500 | #52B6DF | 26 |
| Neutral/300 | #F1F5F966 | 20 |
| Neutral/500 | #64748B | 10 |
| Error/500 | #E03C4C | 8 |
| Neutral/100 | #F1F5F9 | 6 |
| Secondary/700 | #316D86 | 6 |
| Primary/500 | #4178D4 | 3 |
| Secondary/100 | #DCF0F9 | 3 |
| Secondary/300 | #86CCE9 | 3 |
| Neutral/700 | #334155 | 2 |
| Warning/700 | #B45309 | 1 |

Additional raw color:

| Color | Raw uses |
|---|---:|
| #DADADA | 48 |
| #F1F5F966 | 14 |
| #000000 | 43 |

Observed semantic usage:

- Screen backgrounds and white surfaces: Shades/0 (#FFFFFF).
- Primary text and dark icons: Neutral/900 (#0F172A).
- Black status-bar and navigation graphics: Shades/100 (#000000).
- Primary filled actions: Secondary/500 (#52B6DF).
- Secondary icon backgrounds: Secondary/100 (#DCF0F9).
- Secondary icons and outlined action text: Secondary/700 (#316D86) or Secondary/500 (#52B6DF).
- Supporting text and muted icons: Neutral/500 (#64748B).
- Input surfaces: Neutral/300 (#F1F5F966).
- Input borders and separators: Neutral/300 (#F1F5F966) or Neutral/100 (#F1F5F9).
- Error messaging and error borders: Error/500 (#E03C4C).
- Dialog overlay: Neutral/700 (#334155) at 60% opacity.

## Type scale

| Style | Family | Weight | Size | Line height | Tracking | Usage |
|---|---|---:|---:|---:|---:|---:|
| Large Title | Poppins | SemiBold (600) | 32px | 42px | 0px | 1 |
| Title 3 | Poppins | SemiBold (600) | 20px | 24px | 0px | 3 |
| Text Large/SemiBold | Poppins | SemiBold (600) | 17px | 24px | 0px | 9 |
| Text Large/Medium | Poppins | Medium (500) | 17px | 24px | 0px | 14 |
| Regular/None/Medium | Inter | Medium (500) | 16px | 16px | 0px | 12 |
| Text Small/Medium | Poppins | Medium (500) | 15px | 25px | 0.2px | 6 |
| Text Small/Regular | Poppins | Regular (400) | 15px | 25px | 0.2px | 28 |
| Very Small/Medium | Poppins | Medium (500) | 13px | 22px | 0.2px | 1 |
| Very Small/Regular | Poppins | Regular (400) | 13px | 22px | 0.2px | 1 |

Raw unstyled typography:

- SF Pro Text Light, 24px: 52 uses.
- SF Pro Text Regular, 16px: 6 uses.
- Poppins Medium, 15px: 4 uses.

## Spacing scale

_No spacing variables found in source._

Observed layout values include:

- Main content width: 327px.
- Screen width: 375px.
- Button height: 56px.
- Input height: 49px.
- Form block height: 82px.
- Settings row height: 40px.
- Common component gaps: 10px, 16px, and 20px.
- Button horizontal padding: 32px for large buttons; 24px for medium outlined buttons.
- Dialog horizontal padding: 20px and 25px.
- Dialog content width: 303px.
- Status/navigation bar heights: 44px and 48px.

## Radius scale

_No radius variables found in source._

Observed radii:

- Screen frame: 35px.
- Dialog: 25px.
- Buttons and inputs: 10px.
- Icon rectangle: 9px.
- Battery detail: 2.67px and 1.33px.
- Several elements use 0px radius.

## Elevation & effects

- Profile avatar uses a drop shadow with 8px size and offset `0 4`.
- Profile avatar has a white outline of 3px at 58×58px and 4px at 80×80px.
- Camera action circle has a white 2.5px stroke.
- Dialog overlays use Neutral/700 (#334155) at 60% opacity.
- No local effect styles were found.
- No motion variables were found.

## Components

_None found in source._

## Screen patterns

- **Settings:** 375×812px white screen with Profile, Account, and More Settings rows. Each row is 327×40px and uses a 40px circular icon background, a 15px Poppins label, and a trailing 16px chevron. A profile summary includes a 58px avatar, welcome text, sign-out action, and separators.
- **Profile:** Profile photo area with an 80px avatar and 32px camera action, followed by Email, Date of birth, and Phone Number form fields. Uses 327px-wide, 49px-high inputs and a 327×56px filled action button.
- **Profile Updated:** Same profile form structure with a modal dialog over a 60%-opacity Neutral/700 overlay. The dialog is 343px wide with a 25px radius and includes a 160px illustration area, a Title 3 heading, and a 303×48px outlined button.
- **Account:** Password form with Old Password, New Password, and Confirm Password fields. Uses the same 327px-wide input pattern and filled action button.
- **Account Updated:** Password form showing an error state for Old Password, including an Error/500 border and “Password incorrect” supporting text. A larger 343px-wide modal includes title, body copy, and an outlined action.
- **Group 5363:** Small 24×24px graphic group containing a 9px-radius black rectangle and an image layer.
- **More Settings:** The extraction is truncated before its layout details are available.

## Notes for implementers

- Use only the documented palette values and semantic token names.
- Prefer Poppins for application UI text. Use the listed Inter style only where the Regular/None/Medium token is required.
- Preserve the 375px mobile frame and 327px primary content width shown across the documented screens.
- Reuse the 327×49px input, 327×56px filled button, and 303×48px outlined button dimensions where the corresponding patterns apply.
- Keep form fields stacked in 82px blocks; error fields expand to 112px when helper text is present.
- Use 10px radii for buttons and inputs, 25px for dialogs, and 35px for the screen frame where applicable.
- Treat status-bar, signal, Wi-Fi, battery, and navigation graphics as decorative system UI.
- Component families and component geometry were not formally extracted, so do not assume a reusable component inventory beyond the documented visual patterns.
