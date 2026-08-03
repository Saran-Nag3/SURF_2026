---
name: marvel-app-community
source: MARVEL APP (Community)
kind: design-system-context
---

# marvel-app - Design System

## Overview

- Mobile-first Marvel streaming app design for a 360 × 800px viewport.
- Primary visual structure uses black backgrounds, white content, and Marvel red accents.
- Screens include splash, onboarding, authentication, and social sign-in flows.
- No local variables, text styles, spacing variables, radius variables, motion tokens, grid styles, or component sets were found.

## Design language

- High-contrast, dark cinematic interface.
- Use #000000 as the primary screen background.
- Use #FFFFFF for primary text, logos, and light surfaces.
- Use #ED1B24 for primary Marvel branding and filled actions.
- Typography uses Inter with frequent semibold and extra bold weights.
- Onboarding screens use full-width imagery in a 360px × 600px region, with overlaid Marvel branding and white copy.
- Authentication screens use white 300px × 50px input fields and compact social sign-in controls.
- Decorative indicators and status-bar content are consistently positioned within the 360px-wide viewport.

## Color palette

Ranked by source usage:

| Color | Usage |
|---|---:|
| #FFFFFF | 929 |
| #000000 | 459 |
| #ED1B24 | 50 |
| #FFFFFF4D | 46 |
| #FFFFFF80 | 42 |
| #FFFFFFB2 | 26 |
| #FFFFFF33 | 20 |
| #FFFFFF26 | 18 |
| #FFFFFFCC | 18 |
| #000000B2 | 17 |
| #ED1B24B2 | 12 |
| #00000080 | 9 |

Usage guidance:

- #000000: screen backgrounds and dark text contexts.
- #FFFFFF: primary text, logo details, button labels, and input surfaces.
- #ED1B24: Marvel logo accent and primary action fills.
- #FFFFFF80 and #FFFFFFB2: secondary or subdued text on dark backgrounds.
- #00000080 and #000000B2: subdued text on white input surfaces.
- #FFFFFF26, #FFFFFF33, #FFFFFF4D, and #FFFFFFCC: translucent white interface details.
- #ED1B24B2: translucent Marvel red.

## Type scale

All typography uses Inter.

| Size | Weights and source usage |
|---:|---|
| 25px | ExtraBold, 6 |
| 24px | Bold, 5 |
| 23.78px | ExtraBold, 19 |
| 20px | ExtraBold, 26; Regular, 19; Bold, 17; SemiBold, 14 |
| 18.38px | SemiBold, 48 |
| 18px | Bold, 18; ExtraBold, 5 |
| 16px | ExtraBold, 20; SemiBold, 13; Bold, 10; Medium, 4 |
| 15px | Regular, 78; ExtraBold, 4 |
| 14px | SemiBold, 70; ExtraBold, 10; Regular, 6 |
| 12px | Medium, 8; SemiBold, 6 |
| 10px | ExtraBold, 52; Medium, 6 |

Common roles:

- Onboarding copy: Inter SemiBold, 20px, #FFFFFF.
- Primary button labels: Inter SemiBold, 18.38px, #FFFFFF.
- Status-bar time: Inter Regular, 15px, #FFFFFF.
- Authentication labels: Inter SemiBold, 14px.
- Authentication supporting text: Inter ExtraBold, 14px or 15px.
- Small password visibility control: Inter SemiBold, 12px.
- Large password placeholder: Inter SemiBold, 50px.

## Spacing scale

_None found in source._

Documented layout measurements:

- Main viewport: 360px × 800px.
- Onboarding image region: 360px × 600px.
- Primary buttons and input fields: 300px × 50px.
- Onboarding indicator frame: 110px × 10px with a 10px gap.
- Status bar: 360px × 24px with a 183px gap between aligned content groups.
- Social sign-in controls: 120px × 50px.
- Social icon groups: 36px × 36px for Google and 40px × 40px for Facebook.

## Radius scale

_None found in source._

## Elevation & effects

- Google and Facebook social sign-in groups use a drop shadow with a 0px horizontal offset and 2px vertical offset.
- No local effect styles or elevation tokens were found.
- No reusable radius values were found; the status-bar group explicitly reports 0/0/0/0px radius.

## Components

_None found in source._

## Screen patterns

- **Splash Screen**
  - 360px × 800px.
  - #000000 background.
  - Centered or positioned Marvel logo using a 188.23px × 85.19px logo instance.
  - Logo uses #ED1B24 and #FFFFFF.

- **Welcome screens 1–5**
  - 360px × 800px black screen.
  - Full-width 360px × 600px image region.
  - Marvel logo instance sized 188.23px × 85.19px.
  - White onboarding copy, typically Inter SemiBold, 20px, within a 250px-wide text area.
  - 300px × 50px primary action with a Marvel red fill and white Inter SemiBold, 18.38px label.
  - 110px × 10px decorative progress indicator with a 10px gap.
  - 360px × 24px status bar with white time text.

- **Welcome screen 6**
  - Same black 360px × 800px structure and Marvel logo.
  - Contains two 300px × 50px actions.
  - One action uses a Marvel red fill.
  - One action uses a 3px Marvel red stroke with a transparent or dark interior.
  - Labels use white Inter SemiBold, 18.38px text.

- **Authentication screens**
  - 360px × 800px black background.
  - Marvel logo at 188.23px × 85.19px.
  - Two white 300px × 50px input surfaces.
  - Primary or outlined 300px × 50px action.
  - Outlined actions use a 3px Marvel red stroke.
  - Supporting copy includes “Forgot Password?”, account-switching text, “or”, and “Continue With”.
  - Social controls appear as separate 120px × 50px Google and Facebook groups with white surfaces and drop shadows.
  - Authentication input text uses dark colors, while surrounding labels and supporting copy use white or translucent white.
  - Password visibility control uses “Show” in Inter SemiBold, 12px.

- **Authenticated password or email state**
  - Same authentication structure.
  - Filled email text uses #000000 and Inter SemiBold, 14px.
  - Password content may use a 50px Inter SemiBold placeholder consisting of periods.
  - The primary action may use either a filled Marvel red background or a 3px Marvel red outline.

## Notes for implementers

- Preserve the 360px × 800px mobile composition and 300px content width shown throughout the source.
- Do not introduce additional colors beyond the documented palette.
- Use the exact Marvel red #ED1B24 for primary actions, branding accents, and outlined action strokes.
- Keep primary text white on dark surfaces and dark text on white input surfaces.
- Use Inter rather than substituting another typeface.
- Keep onboarding copy at 20px Inter SemiBold and primary action labels at 18.38px Inter SemiBold.
- Treat image fills as screen-specific assets; the source provides image hashes but no reusable image token.
- The source contains no component families, so recurring controls should be implemented from the documented dimensions and visual treatments without assuming an existing component library.
