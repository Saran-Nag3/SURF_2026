---
name: ui-design-for-supabase-ssr-starter-website-community
source: UI Design For Supabase Ssr Starter Website (Community)
kind: design-system-context
---

# supabase - Design System

## Overview

A dark Supabase SSR starter website presented in two authenticated states:

- Logged-out state with a “Register” action and an authentication status notice.
- Logged-in state with “Log out” and “Hey, Nermal” actions, plus an authenticated status notice.

The primary content is centered and uses large Inter typography, green primary actions, dark secondary actions, and rounded rectangular surfaces.

## Design language

- Dark, minimal developer-tool aesthetic.
- Centered hero composition with a large headline, supporting description, and paired actions.
- Green is reserved for primary actions and authenticated status messaging.
- Secondary actions use dark surfaces with subtle borders.
- Text uses Inter throughout.
- Controls and notification surfaces use rounded corners.
- Authenticated and unauthenticated states are communicated through concise status copy.

## Color palette

Ranked by reported usage:

| Color | Uses | Observed usage |
|---|---:|---|
| `#2E2E2E` | 6 | Dark secondary controls and notification surfaces |
| `#FFFFFF` | 6 | Primary text on controls and light interface details |
| `#E7E7E7` | 5 | Muted notification text and icon strokes |
| `#70CC93` | 4 | Green primary-control borders and authenticated status text |
| `#3E3E3E` | 3 | Secondary-control borders |
| `#56976F` | 3 | Green primary-control fills |

## Type scale

Font family: Inter.

| Size | Weight | Uses | Role |
|---:|---|---:|---|
| 68px | Regular | 6 | Hero headline |
| 68px | SemiBold | 4 | Large emphasis variant |
| 24px | Medium | 7 | Primary control labels and status notices |
| 24px | Regular | 7 | Navigation, account, and supporting headings |
| 20px | Regular | 4 | Supporting description and footer attribution |

Observed text dimensions include a 164px-tall hero headline block, 48px supporting description block, 29px control/status text line, and 24px footer text line.

## Spacing scale

No spacing tokens were found in the source.

Observed layout values:

- 37px gap between notification text and close icon.
- 52px control height.
- 62px notification height.
- 0px horizontal padding in the extracted notification inner frames.

## Radius scale

Observed corner radii:

- 9px: hero action groups, navigation groups, and controls.
- 6px: notification surfaces.
- 0px: notification outer group geometry.

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

### Centered hero

Both screens use the same centered hero structure:

- 68px Inter headline: “Build Auth with Supabase SSR User Sessions at Finest”.
- 20px Inter supporting description: “Using Supabase SSR Authentication with nextjs with better co”.
- Two 52px-tall actions:
  - Primary green action: “Deploy on Vercel”.
  - Secondary dark action: “Git Clone”.

### Top navigation and account actions

The navigation includes:

- Project label: “Nermalcat69 / Supabase Ssr Starter”.
- Logged-out state: green “Register” action.
- Logged-in state: dark “Log out” action and dark “Hey, Nermal” account control.

### Authentication status notice

A bottom status surface uses a 6px radius and 62px height:

- Logged-out copy: “You’re Not Logged In” in `#E7E7E7`.
- Logged-in copy: “You’re Logged In as {email-address}” in `#70CC93`.
- Close icon positioned after a 37px gap.
- Close icon uses `#E7E7E7` strokes.

### Footer attribution

Centered footer copy reads “Powered by Supabase & Vercel” in 20px Inter Regular.

## Notes for implementers

- Preserve the dark overall presentation and centered composition.
- Use Inter for all text.
- Use 68px typography for the primary hero headline.
- Use 24px labels for controls, navigation, account controls, and status notices.
- Use 20px typography for supporting descriptions and footer attribution.
- Primary actions use `#56976F` fill with a `#70CC93` border.
- Secondary actions use `#2E2E2E` fill with a `#3E3E3E` border.
- Use 9px radii for controls and 6px radii for status notices.
- Keep logged-in and logged-out states structurally consistent; change only the account actions and status messaging.
