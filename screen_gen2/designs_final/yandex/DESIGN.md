---
name: yandex-ai-app-concept-community
source: Yandex Ai App: Concept (Community)
kind: design-system-context
---

# yandex - Design System

## Overview

Dark Yandex AI mobile app concept with rounded mobile screens, pill-shaped navigation controls, AI mode switching, search, voice interaction, and chat-style assistant responses.

Source pages: Page 1 and asset. Primary screens: `home`, `alice`, and `Plugin / file cover - 1`.

- Mobile home/alice frames: 390×844px
- Home frame radius: 35px
- Alice frame radius: 35px
- Plugin cover frame: 1920×1080px
- Primary component families: `anim`, `ANIM`

## Design language

- Dark, rounded, mobile-first interface.
- Primary screen background: #1E1E1E.
- Controls use pill geometry with 38–50px radii.
- Search and mode-switching controls use dark surfaces with gradient strokes.
- AI interaction uses purple fills and purple-to-pink gradient treatments.
- Text is predominantly white on dark surfaces, with gray secondary and placeholder text.
- Decorative AI imagery and logos are image-based or vector-based assets.
- Chat bubbles use asymmetric rounded corners: 15/15/5/15px.

## Color palette

Ranked by source usage:

| Color | Uses | Role |
|---|---:|---|
| #FFFFFF | 241 | Primary text, logos, icons |
| #000000 | 70 | Black surfaces and artwork |
| #A0A0A0 | 50 | Secondary gray |
| #EEEEEE | 50 | Light neutral |
| #008959 | 25 | Accent green |
| #009DFF | 25 | Accent blue |
| #1E1E1E | 21 | Primary dark screen background |
| #379D53 | 20 | Green accent |
| #4285F4 | 20 | Blue accent |
| #EA4437 | 20 | Red accent |
| #FBBE0D | 20 | Yellow accent |
| #212121 | 14 | Dark border/detail |
| #AAAAAA | 14 | Placeholder and muted text |
| #0000000D | 13 | Subtle black overlay |
| #2B2B2B | 13 | Search and navigation surfaces |
| #363636 | 11 | Secondary control surfaces |
| #2A2A2A | 10 | Mode chip surfaces |
| #D9D9D9 | 10 | Neutral circular accent |
| #7A4FF4 | 8 | Voice interaction purple |
| #282828 | 7 | Control border |
| #4796E3 | 7 | Blue accent |
| #8779CC | 7 | Muted purple accent |
| #C7667A | 7 | Muted pink accent |
| #00000026 | 6 | Black overlay |
| #FFFFFF80 | 5 | Semi-transparent white |

Additional source treatments include gradient strokes and gradient text/fills. Their source colors are not included here because they are outside the allowed palette.

## Type scale

No local text styles were defined. Use the following extracted typography:

| Size | Font | Weight | Uses |
|---:|---|---|---:|
| 25px | Roboto | Bold | 50 |
| 19px | Roboto | SemiBold | 50 |
| 16px | Inter | Bold | 4 |
| 16px | Inter | SemiBold | 7 |
| 15px | Inter | SemiBold | 6 |
| 13px | Roboto | Regular | 50 |
| 10px | Inter | Bold | 14 |
| 10px | Inter | SemiBold | 24 |

Observed text roles:

- Search placeholder: Inter SemiBold, 15px, #AAAAAA at 50% opacity.
- Mode labels: Inter SemiBold, 10px or 16px, #FFFFFF.
- Chat text: Inter Bold, 16px, #FFFFFF at 80% opacity.
- Main/headline text: Roboto Bold, 25px.
- Supporting text: Roboto SemiBold, 19px or Roboto Regular, 13px.

## Spacing scale

_None found in source._

## Radius scale

Extracted radii:

- 5px: small vector detail.
- 15px/15px/5px/15px: asymmetric chat bubbles.
- 35px: mobile screen containers.
- 38px: circular controls and voice controls.
- 50px: search and mode-selector pills.
- 99px: mode chips and fully rounded image containers.

## Elevation & effects

- Voice search control: layer blur, 19px.
- Subtle black overlays: #0000000D and #00000026.
- White content may use #FFFFFF80.
- Search and mode-selector surfaces use 1.5px gradient strokes.
- Chat bubbles use flat purple or gradient fills.
- No local effect styles or elevation tokens were defined.

## Components

Only the extracted component families `anim` and `ANIM` are present.

### `anim`

- Size: 390×844px
- Radius: 35px
- Fill: #1E1E1E
- Variant: `Property 1: Default`

### `ANIM`

- Size: 393×852px
- Radius: 15px
- Fill: #000000
- Variant: `Property 1: Default`
- Text styles included: Roboto Regular 13px, Roboto SemiBold 19px, Roboto Bold 25px

### Search bar

- Outer layout: 318×48px search frame within a 390×55px top bar.
- Search surface: 375×48px.
- Radius: 50px.
- Fill: #2B2B2B.
- Stroke: 1.5px gradient stroke.
- Placeholder examples:
  - `Интеллект, в каждом слове...`
  - `Интеллект, в каждом образе...`
- Placeholder typography: Inter SemiBold, 15px, #AAAAAA at 50% opacity.
- Search icon: #AAAAAA, 2px stroke, observed size 19×19px or 22.5×22.5px.

### Alice voice search control

- Frame: 48×48px.
- Inner control: 40×40px.
- Radius: 38px.
- Fill: #7A4FF4.
- Effect: layer blur, 19px.
- Contains a 43×40px image asset.

### Mode selector

- Container: 312×48px.
- Radius: 50px.
- Fill: #2B2B2B.
- Stroke: 1.5px gradient stroke.
- Contains three pill chips:
  - `YandexGPT`: 89px or 102px wide, 38px high, #2A2A2A or #363636, Inter SemiBold 10px, #FFFFFF.
  - `YandexART`: 90px, 91px, or 102px wide, 38px high, #2A2A2A or #363636, Inter SemiBold 10px, #FFFFFF.
  - `Нейро`: 101px, 105px, or 107px wide, 38px high, #1E1E1E, Inter SemiBold 16px.
- Mode chips use 99px radius.
- Decorative logos are white vector/image marks.
- The `Нейро` chip may include a 30×30px #D9D9D9 circle.

### Secondary circular control

- Size: 38×38px.
- Radius: 38px.
- Fill: #363636.
- Border: #282828, 1.5px.

### Chat bubbles

- Text: Inter Bold, 16px, #FFFFFF at 80% opacity.
- Common radius: 15px/15px/5px/15px.
- Observed sizes:
  - 190×38px: `Привет, как дела?`
  - 239×38px: `Включи Мою Волну.`
  - 220×64px: `Привет, чем могу помочь?`
  - 131×100px: `Включаю.`
- Purple fills include #7A4FF4 and gradient treatments.
- Some bubbles contain decorative logos or image assets.

## Screen patterns

### Home

- 390×844px dark rounded mobile frame.
- Top search bar with a 318×48px search area and 48×48px voice control.
- Mode selector positioned as a 312×48px pill group.
- Secondary 38×38px circular control beside the selector.
- Optional muted label: `Используется YaART`, #AAAAAA at 21% opacity.
- Decorative image assets may appear at 168×169px and 390×268px.
- Search placeholder alternates between word-focused and image-focused copy.

### Alice

- Same 390×844px dark rounded frame and shared mode selector.
- 168×169px decorative image asset near the upper content area.
- 74×74px decorative voice-search frame.
- Processing label: `Обработка...`, Inter ExtraBold 16px, gradient text, 45% opacity.
- Conversation is represented by stacked purple chat bubbles using the asymmetric 15/15/5/15px radius.
- Example messages:
  - `Привет, как дела?`
  - `Привет, чем могу помочь?`
  - `Включаю.`
  - `Включи Мою Волну.`

### Plugin cover

- 1920×1080px frame.
- Background: #1E1E1E.
- Includes a 1951×1128px decorative black overlay layer.

## Notes for implementers

- Preserve the 390×844px mobile composition and 35px outer radius for the primary app screens.
- Treat the repeated home extractions as variants of one screen, not separate page structures.
- Use only the extracted color palette above; do not introduce additional colors.
- Use gradient treatments where the source specifies them, but do not substitute unlisted solid colors.
- Keep search, mode selector, and chip controls pill-shaped.
- Keep voice controls circular with purple treatment and 19px blur where applicable.
- Use image assets for the extracted image fills; their visual content is not represented by color tokens.
- Logos and decorative marks should remain decorative and should not alter text layout.
- No spacing, grid, motion, or local style variables were defined.
