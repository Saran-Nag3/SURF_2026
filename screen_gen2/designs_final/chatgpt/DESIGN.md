---
name: chatgpt-app-concept-community
source: ChatGPT App Concept (Community)
kind: design-system-context
---

# chatgpt - Design System

## Overview

A mobile ChatGPT app concept centered on a dark chat interface, onboarding flow, introductory capability panels, conversation states, and a navigation drawer.

Primary mobile screens are 428×926px. The cover screen is 1280×720px.

## Design language

- Dark, high-contrast conversational interface.
- White typography and line icons on dark neutral surfaces.
- Green is used as the ChatGPT accent and progress indicator.
- Pink is used for onboarding emphasis, headings, button borders, and button labels.
- Content is organized into compact cards with rounded corners.
- Interface controls use thin white strokes and simple linear icons.
- Chat responses use a distinct darker message surface from the surrounding chat background.
- Layouts are predominantly fixed-width mobile compositions with centered content groups.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 281 | Primary text, icons, logos, light surfaces |
| `#3E3F4B` | 70 | Example, capability, and limitation cards; progress track |
| `#F1EEE999` | 60 | Translucent neutral overlay |
| `#000000` | 40 | Black neutral |
| `#D6D6D6` | 40 | Light neutral |
| `#00000000` | 20 | Transparent |
| `#FF8BFF` | 15 | Onboarding headings, supporting text, button border and label |
| `#343541` | 14 | Main chat background |
| `#40414F` | 14 | Chat composer surface |
| `#080F21` | 10 | Dark navy neutral |
| `#0E0E0E` | 10 | Near-black neutral |
| `#141414` | 10 | Dark neutral |
| `#CDCDCD` | 10 | Light neutral |
| `#D2CECE` | 10 | Warm light neutral |
| `#0FA47F` | 7 | Accent green, avatar background, progress fill |
| `#444654` | 7 | Assistant response surface |

Named tokens:

- Neutrals/White: `#FFFFFF`
- Accent Green: `#0FA47F`

## Type scale

Observed type styles, ordered from largest to smallest:

| Size | Font | Weight | Usage count |
|---:|---|---|---:|
| 40.29px | Inter | Bold | 3 |
| 40.29px | Product Sans | Regular | 10 |
| 30.22px | Product Sans | Regular | 15 |
| 26.86px | Inter | Medium | 5 |
| 26.86px | Inter | Regular | 26 |
| 24px | Product Sans | Regular | 4 |
| 23.51px | Product Sans | Regular | 45 |
| 18px | Product Sans | Regular | 6 |
| 16.79px | Inter | Regular | 20 |
| 16.79px | Product Sans | Regular | 10 |
| 16px | Inter | Regular | 12 |
| 14px | Product Sans | Regular | 18 |
| 10px | Inter | Regular | 8 |
| 10px | Product Sans | Regular | 4 |

Additional observed text:

- Product Sans Bold, 24px, used for a ChatGPT heading.
- Inter Bold, 32px, used for the onboarding “Welcome To ChatGPT” heading.
- Product Sans Regular, 20px, used for onboarding supporting text.
- Inter Bold, 20px, used for the onboarding “Try ChatGPT” button.
- Product Sans Regular, 24px, used in the chat composer.
- Inter Medium, 16px, used for conversation titles.
- Inter Regular, 16px, used for drawer actions and response controls.

## Spacing scale

No spacing variables were defined. Observed gaps and padding values:

- `0px`: frame padding
- `8px`: card horizontal padding; button horizontal padding
- `10px`: card and button padding; inline gaps
- `12px`: onboarding and section-header gaps
- `13px`: assistant response content gap
- `16px`: card-stack gaps; drawer item gaps
- `18px`: gaps between section headers and content groups
- `20px`: onboarding button padding; drawer/content padding
- `27px`: onboarding logo-to-content gap
- `32px`: drawer section gap
- `36px`: horizontal gap between introductory columns

Observed padding patterns:

- Introductory cards: horizontal padding `8px` and vertical padding `10px`.
- Onboarding button: horizontal padding `10px`, vertical padding `20px`.
- Drawer action button: horizontal padding `10px`, vertical padding `8px`.

## Radius scale

No radius variables were defined. Observed radii:

- `2px`: assistant avatar
- `3.16px`: conversation thumbnail frame
- `4px`: onboarding button, stop-generating button, regenerate-response button
- `8px`: example/capability/limitation cards, chat composer, progress indicators

## Elevation & effects

No local effect styles or elevation tokens were found.

Observed visual effects are limited to:

- Translucent neutral overlay treatment.
- Thin white strokes on outlined controls.
- Thin gray divider line in the navigation drawer.
- Flat filled surfaces with no extracted shadow values.

## Components

_None found in source._

## Screen patterns

- **Cover:** 1280×720px white presentation frame containing a full-frame thumbnail image.
- **Onboarding:** 428×926px mobile screen with a full-screen image, centered white logo, pink welcome heading and supporting copy, and an outlined “Try ChatGPT” action with arrow icon.
- **Chat introduction:** Dark 428×926px chat screen with “Examples,” “Capabilities,” and “Limitations” columns. Each section uses a white linear icon, an 18px heading, and stacked 217×54px cards with 8px radius.
- **Chat composer:** 388×67px rounded input surface using `#40414F`, white input text, and a send icon. Supporting version text appears below at 10px.
- **Chat response:** Conversation title row with thumbnail and 16px Inter Medium title, followed by an assistant response surface using `#444654`. The assistant avatar uses `#0FA47F` with a white logo.
- **Generating state:** A bordered “Stop Generating” control uses a 4px radius, 1px white stroke, checkbox-style icon, and 16px Inter Regular text.
- **Completed response state:** A bordered “Regenerate Response” control replaces the generating action and includes a refresh icon.
- **Navigation drawer:** A 237×926px side drawer containing an outlined “New Chat” action, divider, and vertically stacked actions for clearing conversation, upgrading, dark mode, updates and FAQs, and logging out. A menu toggle and add-circle control appear in the chat header.
- **Progress indicator:** A 46×5px rounded track uses `#3E3F4B` with a 17×5px `#0FA47F` progress segment.

## Notes for implementers

- Use the extracted 428×926px mobile composition as the primary responsive reference.
- Preserve the dark chat hierarchy: `#343541` for the main background, `#40414F` for the composer, `#444654` for assistant responses, and `#3E3F4B` for informational cards.
- Use `#FFFFFF` for primary interface text and icons.
- Reserve `#0FA47F` for ChatGPT identity and progress emphasis.
- Use `#FF8BFF` specifically for onboarding emphasis and outlined onboarding actions.
- Prefer Product Sans for most ChatGPT interface copy and Inter for chat titles, controls, and emphasized headings as observed.
- Keep cards and controls compact, with 4px or 8px radii according to the observed patterns.
- No reusable component families or component geometry were extracted; implement patterns directly from the screen specifications.
- Do not introduce additional colors, spacing tokens, radius values, effects, or component variants beyond the values documented here.
