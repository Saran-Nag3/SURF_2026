---
name: daily-inspiration-mobile-app-community
source: Daily Inspiration Mobile App (Community)
kind: design-system-context
---

# daily - Design System

## Overview

Mobile inspiration and fitness-community app design for 430×932px mobile screens. Primary flows include login, dashboard, profile/settings, daily affirmation, daily challenge, trending stories, achievements, and onboarding/thumbnail presentation.

No local variable collections or component families were found.

## Design language

- Warm orange, peach, cream, white, and charcoal visual language.
- Roboto is the dominant typeface.
- Use orange for actions, links, dividers, search icons, and challenge accents.
- Use cream surfaces for content cards.
- Use charcoal and black for primary text.
- Use pale gray for input and utility surfaces.
- Rounded mobile-screen containers use a 40px radius.
- Content cards commonly use 10px or 12px radius.
- Login inputs use 8px radius; primary action uses 19px radius.

## Color palette

Ranked by raw usage count where available:

| Color | Usage | Typical role |
|---|---:|---|
| #FFFFFF | 48 | Primary background, light text, icons |
| #F97316 | 28 | Orange action and link color |
| #000000 | 24 | Dashboard text and icon strokes |
| #111214 | 24 | Form labels |
| #F68A1D | 19 | Orange accents, headings, dividers, search icons |
| #373737 | 16 | Settings text |
| #FB923C | 14 | Raw orange accent |
| #FDC125 | 10 | Raw accent |
| #FED624 | 10 | Raw accent |
| #F9FAFF | 9 | Light surface |
| #D9D9D900 | 8 | Transparent utility rectangles |
| #ABB7C2 | 6 | Muted gray |
| #DD4040 | 5 | Error or destructive accent |
| #F8A44C | 5 | Orange accent |
| #F973169E | 4 | Semi-transparent orange story labels |
| #FDB849 | 4 | Challenge button |
| #FF465A | 4 | Pink/red accent |
| #008C6E | 3 | Green accent |
| #14D29B | 3 | Bright green accent |
| #19212680 | 3 | Muted transparent text |
| #643CFF | 3 | Purple accent |
| #696F79 | 3 | Muted achievement labels |
| #D70A32 | 3 | Red accent |
| #F7846C | 3 | Peach accent |
| #F8F9FA | 3 | Card border/light surface |
| #F9731680 | 3 | Transparent orange |
| #FFF2E6 | 3 | Cream card and background surface |
| #FF9500 | 7 | `SystemOrange / Light` token |
| #393C43 | 4 | `Sandow Gray/80` token |
| #F3F3F4 | 2 | `Sandow Gray/10` token |
| #BABBBE | 1 | `Sandow Gray/30` token |
| #F99855 → #F97C25 | 1 | `nav` linear gradient, 0% to 100% |
| #FFFFFF00 → #FFFFFF | 1 | `Gradient/White/▲` linear gradient, 0% to 100% |

Named color styles:

- `SystemOrange / Light`: #FF9500
- `White/White`: #FFFFFF
- `Sandow Gray/80`: #393C43
- `Sandow Gray/10`: #F3F3F4
- `Sandow Gray/30`: #BABBBE
- `nav`: linear gradient from #F99855 at 0% to #F97C25 at 100%
- `Gradient/White/▲`: linear gradient from #FFFFFF00 at 0% to #FFFFFF at 100%

## Type scale

Primary typography is Roboto. The extracted named text style is Work Sans Medium.

| Size | Typeface and weight | Usage |
|---:|---|---|
| 59px | Roboto ExtraBold | Thumbnail heading |
| 34.4px | Roboto Bold | Login heading |
| 22px | Roboto Regular | Supporting text and section labels |
| 20px | Roboto Medium | Dashboard and settings headings |
| 18.35px | Roboto Regular | Login supporting text |
| 18px | Roboto Medium | Dashboard section headings |
| 17.05px | Roboto Medium | Thumbnail branding |
| 16px | Roboto Medium | Form text, buttons, dividers |
| 16px | Work Sans Medium (500), tracking -0.05px | Named `Text md/Medium` style |
| 15px | Roboto Regular | Profile email |
| 14px | Roboto Regular | Links, metadata, supporting labels |
| 14px | Roboto Medium | Card labels and metadata |
| 14px | Roboto Bold | Form labels |
| 14px | Lato Regular | Secondary and placeholder text |
| 13px | Roboto Light | Settings descriptions |
| 13px | Roboto Light | Small supporting text |

## Spacing scale

_No spacing variables found in source._

Observed layout values include 3px, 4px, 8px, 9.17px, 10px, 12px, 15px, 16px, 18.35px, 22px, 24px, 26px, 28px, 30px, 38px, 40px, 45.87px, 54px, 128px, and 134px gaps or padding values.

## Radius scale

Observed radius values:

- 6px: challenge `Play` button
- 8px: login input fields
- 10px: dashboard content cards
- 12px: dashboard search field
- 19px: primary login button
- 21px: dashboard notification control
- 25.54px: thumbnail phone preview
- 32.21px: circular thumbnail control
- 40px: mobile screen containers
- 0/0/10/10px: bottom-rounded story labels
- 0/0/0/0px: square decorative and icon shapes

No radius variables were found.

## Elevation & effects

No local effect styles were found.

- A login input uses a drop shadow with 0px offset and 0px blur/spread positioning; its extracted shadow color is not included in the permitted palette.
- The login screen uses a white-to-transparent overlay gradient: #FFFFFF00 to #FFFFFF.
- Borders observed include 1px card borders and 1px input strokes.
- A thumbnail phone preview uses a 0.64px black stroke.

## Components

_No component families or reusable component sets were found in source._

Observed recurring UI patterns:

- Mobile screen frame: 430×932px with 40px radius and #FFFFFF fill.
- Login input: 343px wide × 56px high, 16px padding, 8px radius, pale gray fill.
- Primary button: 344px wide × 56px high, 16px vertical and 28px horizontal padding, 19px radius.
- Search field: 374px wide × 48px high, 12px radius.
- Dashboard content card: 374px wide, cream fill, commonly 10px radius.
- Story card: 121px wide × 137px high, 10px radius.
- Achievement item: approximately 100px × 120px with muted label text.
- Notification control: 41px × 64px, 21px radius, #F3F3F4 fill.

## Screen patterns

### Thumbnail and onboarding

A 1200×900px thumbnail canvas presents multiple 274.52×595px mobile previews alongside a large brand panel. The brand panel uses a warm orange background, white typography, a “Mobile inspiration app” heading, the subtitle “True inspiration comes from within,” author attribution, color swatches, and a Roboto font label.

### Login

The 430×932px login screen uses a white background and rounded outer frame. It contains:

- A large “Sign In To Sandow” heading.
- Supporting personalization text.
- Email and password fields with leading icons.
- A primary dark charcoal button with a right-arrow icon.
- Orange “Forgot Password” link.
- Muted “Don’t have an account? Sign Up” text.
- An “Or” divider with orange horizontal rules.
- Bottom white gradient treatment and mobile status-area decoration.

### Dashboard

The dashboard uses a 430×932px white mobile frame with:

- User greeting and avatar at the top.
- Notification control.
- 374×48px search field.
- “Daily Affirmation” cream card.
- “Daily challenge” cream card with orange content and a `Play` control.
- Horizontally arranged “Trending stories” cards with “Read more” labels.
- “Achievement” card containing badges and labels.
- Decorative bottom navigation treatment.

### Settings/profile

The settings screen uses a profile header with avatar, name, email, search icon, and divider. Settings rows include:

- Account — “Security notifications, change email”
- Challenges — “select difficulty levels”
- Avatar — “Create, edit, profile photo”

Rows use orange icons, charcoal headings, and light gray supporting descriptions.

## Notes for implementers

- Use only the extracted palette above; do not introduce additional colors.
- Prefer Roboto for UI text. Use Work Sans Medium only where the named `Text md/Medium` style is explicitly required; Lato appears for secondary dashboard/login text.
- Preserve the mobile-first 430×932px frame and 40px outer radius for primary screens.
- Use #FFF2E6 for prominent dashboard cards and #F3F3F4 for utility surfaces.
- Use #F68A1D or #F97316 for orange actions, links, dividers, and icon accents.
- Use #000000, #111214, and #373737 for primary and settings text according to the patterns above.
- Components are inferred from repeated geometry and styling only; no formal component family exists in the source.
- Image fills and decorative groups are present in the source but have no reusable asset specifications.
