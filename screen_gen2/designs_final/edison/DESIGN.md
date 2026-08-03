---
name: nutrifit-app-community
source: NutriFit App (Community)
kind: design-system-context
---

# edison - Design System

## Overview

NutriFit is a mobile fitness and nutrition app designed for 414×896px screens. The UI combines full-screen photographic backgrounds, dark overlays, white navigation bars, bold fitness-oriented headings, and image-led menu cards.

Source coverage includes onboarding, authentication, registration, menu, activity selection, food entry, voice assistant, completion, and calendar screens. No local variable collections were found.

## Design language

- Mobile-first canvas: 414×896px.
- Use full-bleed imagery with dark overlays for onboarding, authentication, registration, voice assistant, and activity experiences.
- Primary navigation uses a black 80px-high header with a 33×33px icon, 60×60px circular image, and white “NutriFit” wordmark.
- Headings are large, bold, and high contrast, typically white over imagery.
- Menu and activity choices use 182×166px image cards with 24px corner radius and white labels.
- Authentication fields use white strokes, 6px corner radius, and white text over darkened backgrounds.
- Primary actions use blue or dark teal fills with white labels.
- Nutrition and food-entry screens use white surfaces, gray separators, green accents, and segmented controls.
- The source uses multiple type families: Poppins, Open Sans, Inter, Montserrat, Material Icons, and SF Pro Text.

## Color palette

Colors are deduplicated from the extracted raw usage counts and ranked by count.

| Color | Usage | Suggested role |
|---|---:|---|
| #FFFFFF | 887 | Primary light surface, text, controls |
| #000000 | 523 | Dark backgrounds, overlays, navigation |
| #666666 | 84 | Secondary text |
| #132B35 | 39 | Dark teal action or container |
| #009806 | 33 | Green accent and selected food-entry states |
| #C4C4C4 | 33 | Borders and separators |
| #1565D8 | 30 | Primary authentication action |
| #FFFCFC | 27 | Near-white surface |
| #251B24 | 24 | Dark accent |
| #FFFFFF96 | 24 | Translucent white |
| #7BD038 | 21 | Success accent |
| #F5F5F5 | 12 | Light divider or neutral surface |
| #FFFFFFCC | 12 | Translucent white |
| #212121 | — | Primary dark |
| #007AFF | — | System blue |
| #E5E5EA | — | Light system gray |
| #173846 | — | Dark teal |
| #219653 | — | Green accent |
| #F2994A | — | Orange status accent |
| #EB5757 | — | Red status accent |
| #2F80ED | — | Blue accent |
| #BDBDBD | — | Gray border or neutral |
| #3C6171 | — | Blue-gray accent |
| #1E9DFA | — | Bright blue accent |
| #424242 | — | Dark gray |
| #27AE60 | — | Green accent |
| #9B51E0 | — | Purple accent |
| #EEEEEE | — | Light gray |
| #757575 | — | Dark secondary gray |
| #F2F2F2 | — | Light gray surface |
| #74788D | — | Storm gray |

## Type scale

The source contains no single consistent type family. Preserve the family and weight where a role is known.

- **72px:** Material Icons Regular.
- **50px:** Open Sans Bold.
- **48px:** Montserrat Light, Open Sans Bold, Open Sans ExtraBold.
- **42px:** Inter Bold.
- **40px:** Poppins SemiBold.
- **36px:** Inter Bold, Montserrat Bold.
- **34px:** Open Sans Bold.
- **32px:** Poppins Medium, Poppins SemiBold.
- **30px:** Material Icons Regular; Poppins SemiBold.
- **28px:** Material Icons Regular.
- **24px:** Inter Medium default; Open Sans Bold; Poppins Medium, Regular, and SemiBold.
- **22px:** Poppins Medium.
- **18px:** Inter Medium; Open Sans Bold and SemiBold; Poppins Regular and Medium; Material Icons Regular.
- **16px:** Inter Bold and Medium; Montserrat Regular; Poppins Regular, Medium, and SemiBold.
- **14px:** Inter Medium; Poppins Regular.
- **13px:** Montserrat Regular; Open Sans Regular and SemiBold.
- **12px:** Inter Regular; Material Icons Regular; Montserrat Light; Poppins Regular and Medium.
- **11px:** Montserrat Regular.
- **10.51px:** Poppins Bold.
- **9.75px:** Poppins Bold.
- **8.89px:** SF Pro Text Regular.
- **8.63px:** Poppins Regular.

Most-used text styles:

- Poppins Regular, 12px — 186 uses.
- Poppins Regular, 16px — 141 uses.
- Poppins SemiBold, 32px — 93 uses.
- Open Sans Bold, 18px — 75 uses.
- Poppins Medium, 16px — 57 uses.
- Poppins Regular, 14px — 54 uses.
- Montserrat Regular, 16px — 45 uses.
- Inter Medium, 16px — 37 uses.
- Open Sans Bold, 48px — 34 uses.

Extracted default typography token: Inter Medium, 24px, 500 weight, 0px tracking, auto line height.

## Spacing scale

_None found in source._

Observed grid values:

- iOS grid section: 4px.
- iOS grid gutter: 4px.
- iOS grid columns: 4.
- iOS grid section: 83.5px.
- iOS grid gutter: 16px.
- Grid alignment: minimum and stretch.

## Radius scale

No radius variables were found. Observed geometry uses:

- 6px: authentication fields and primary buttons.
- 7px: selected food-entry control corners.
- 8px: image corner treatment.
- 10px: registration selection cards and food-entry controls.
- 11px: registration image panels.
- 12px: registration image panels.
- 24px: menu and activity cards.
- 40px: completion action container.

## Elevation & effects

- Drop shadow: 24px blur, offset 0 4px, color #00000014.
- Background blur: 4px on photographic background layers.
- Additional extracted drop shadows use a 4px offset and 4px blur, but their source color is not in the permitted palette.
- Authentication screens use dark translucent overlays above background imagery.
- Borders are commonly 1px, including white authentication-field borders, blue action borders, and gray separators.

## Components

_None found in source._

## Screen patterns

- **Onboard:** Full-screen blurred photographic background, large white “NutriFit” heading, circular image, black 6px-radius action button, and white “Next” label.
- **Voice Assistant:** Full-screen blurred image treatment with centered white “Speak to give command” heading and a large image-based control.
- **Finish:** Full-screen background with green success heading and a dark teal pill-shaped “Go Back to Menu” action.
- **Menu:** Black navigation header over a full-screen image. Large white “Fitness Never Stops” heading followed by four 182×166px image cards labeled Workout, Profile, Activity, and Nutrition.
- **Activity Page:** Full-screen image treatment with “Choose Activity” heading and four image cards labeled Cycling, Swimming, Walking, and Running.
- **Sign Up:** Darkened photographic background, white outlined fields, divider with “Or”, blue “Sign up for free” action, and login prompt.
- **Sign In:** Darkened photographic background, username and password fields, remember-me checkbox, blue “Login” action, and password-recovery link.
- **Register 1:** Background image with “Tell us about Yourself”, gender selection cards, age selection image, and blue “Next” action.
- **Register2:** Background image with height and weight selection areas and blue “Next” action.
- **Add Food Page:** White content surface with black navigation header, saved-food area, green labels and actions, search or food-entry controls, segmented Saved/Online Results control, and gray separators.
- **Calendar:** Black navigation header, full-screen image content, and a month selector displaying “October 2021”.

## Notes for implementers

- Target the extracted 414×896px mobile viewport.
- Prefer the source’s image-led composition over flat-color layouts for onboarding, menu, activity, registration, and authentication screens.
- Maintain strong white-on-dark contrast for major headings and navigation.
- Use Open Sans for prominent app and screen headings where explicitly shown; use Poppins for menu-card labels and supporting interface text; use Inter for authentication and action controls.
- Preserve the 80px black navigation header where present.
- Use 182×166px cards with 24px radius for menu and activity selections.
- Use 6px radius for authentication fields and primary buttons.
- Use #009806 for food-entry green accents, #1565D8 for authentication actions, #132B35 for dark teal completion actions, and #7BD038 for success messaging.
- Do not assume a reusable component library: the extraction found no component families or component geometry.
- No spacing, radius, or motion variables were defined; use the observed values only where the relevant screen pattern calls for them.
