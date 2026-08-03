---
name: strava-fitness-app-community
source: Strava Fitness App (Community)
kind: design-system-context
---

# strava - Design System

## Overview

Strava fitness and community app concept with:
- Cover screen: 574x373px, orange background, 20px radius.
- Mobile screens: 393x852px.
- Primary screens: homepage, challenges, and leaderboard.
- Component family: button.
- No local variable collections found.

## Design language

- Bright orange is the primary brand color: `#FE4C00` and source variant `#FC4C01`.
- Mobile screen backgrounds use pale peach `#FFE5D9`.
- Content cards and controls commonly use `#FFFFFF`.
- Typography is predominantly black using `#000000`.
- Layouts use rounded cards, pill-shaped leaderboard rows, orange navigation bars, and compact activity-focused content.
- Community and challenge content is presented in card grids with iconography and decorative illustrations.
- The cover uses large bold display text and a centered Strava icon treatment.

## Color palette

Ranked by raw usage count:

| Color | Usage | Typical role |
|---|---:|---|
| `#000000` | 196 | Primary text, icons, strokes |
| `#FFFFFF` | 138 | Text on orange, cards, controls |
| `#161616` | 90 | Dark neutral surfaces or text |
| `#E8E8E8` | 64 | Light neutral |
| `#FE4C00` | 45 | Primary orange, navigation, buttons, accents |
| `#797979` | 38 | Secondary text or neutral |
| `#231F20` | 32 | Dark neutral |
| `#040415` | 26 | Black token |
| `#D9D9D9` | 25 | Image or media placeholder |
| `#6D6C6C` | 22 | Secondary neutral |
| `#FFE5D9` | 11 | Mobile screen background |
| `#EDA600` | 10 | Yellow-orange accent |
| `#D1D3D4` | 9 | Light neutral |
| `#FC4C01` | 7 | Near-identical orange source variant; use only where matching the source screen |
| `#F8E7E9` | 6 | Pale pink accent |
| `#444444` | 5 | Dark gray |
| `#12131A` | 4 | Near-black neutral |
| `#303030` | 4 | Dark gray |
| `#424242` | 4 | Dark gray |
| `#979797` | 4 | Medium gray |
| `#FDA580` | 4 | Light orange accent |

Named color tokens:
- `Colors/Black/100%`: `#040415`
- `Colors/Black/40%`: `#04041566`

Near-identical orange colors should be consolidated to `#FE4C00` for new UI unless reproducing the cover or splash screen, which uses `#FC4C01`.

## Type scale

### Defined typography tokens

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| `Paragraph/03` | Circular Std Book | 400 | 14px | 24px | 0px |
| `roboto` | Roboto Regular | 400 | 14px | auto | -0.7px |
| `Paragraph/02` | Circular Std Book | 400 | 16px | 26px | 0px |

### Observed type hierarchy

- 21.6px: NATS NATS, Roboto Regular
- 20px: Roboto Bold, Roboto Regular
- 18px: Lato Regular
- 16px: Lato Regular, Roboto Bold, Roboto ExtraLight, Roboto Regular, Circular Std Book
- 14px: Circular Std Book, Roboto Regular
- 12px: Roboto Light, Roboto Regular
- 8px: Roboto Regular

Additional observed display style:
- Cover title: Inter Bold, 70px.
- Cover attribution: Inter Bold, 40px.
- Leaderboard ranking numbers: NATS NATS at 27.84px and 21.6px.
- Compact labels use Roboto CondensedMedium at 6.41px, 6.62px, and 6.69px.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

- No local effect styles found.
- Source includes drop-shadow effects on decorative activity artwork and chart groups, but no reusable elevation token is defined.

## Components

### Button

- Size: `122x31px`
- Fill: `#FE4C00`
- Radius: `5px`
- Label: `join`
- Label font: Lato Regular, `18px`
- Label color: `#FFFFFF`
- Used in challenge cards.
- The button appears both as a component and as an instance of the same component.

## Screen patterns

### Cover

- Canvas: `574x373px`
- Background: `#FC4C01`
- Radius: `20px`
- Large `strava redesign` heading in Inter Bold, `70px`, `#000000`.
- Centered Strava icon treatment with `#FFFFFF` and `#FDA580`.
- Attribution text uses Inter Bold, `40px`, `#FFFFFF`.

### Splash screen

- Canvas: `393x852px`
- Background: `#FC4C01`
- Centered Strava icon treatment with `#FFFFFF` and `#FDA580`.

### Homepage

- Canvas: `393x852px`
- Background: `#FFE5D9`
- Orange top navigation bar: `#FE4C00`, with white title and utility icons.
- Community and suggested-challenge headings use black text and Roboto Bold, `16px`.
- Posts use white cards with `25px` radius.
- Media placeholders use `#D9D9D9`.
- Challenge cards are white, `171x164px`, with `10px` radius.
- Challenge cards use orange `122x31px` join buttons.
- Activity summary includes `Your Activity`, a numeric value, and an orange energy icon.
- Floating add-post control is a `50x50px` orange circle with a white add icon.
- Includes a white-card activity/chart section with orange accents.

### Challenges

- Canvas: `393x852px`
- Background: `#FFE5D9`
- Header bar: `393x93px`, fill `#FE4C00`.
- Header tabs: `Challenges` and `LeaderBoard`, using white Roboto text.
- Activity filter controls are white rounded rectangles with `5px` radius.
- Filter labels include run, Walk, Swim, Cycle, and Hike.
- Challenge cards are white, `171x164px`, with `10px` radius.
- Cards use black titles and compact 8px metadata.
- Join actions use the shared button component.
- Sections include recommended challenges and popular challenges.
- Bottom navigation is present as a decorative navigation group.

### Leaderboard

- Canvas: `393x852px`
- Background: `#FFE5D9`
- Header bar: `393x93px`, fill `#FE4C00`.
- Challenges and LeaderBoard tabs use white Roboto text with active and inactive weights.
- Global/Mumbai selector: `267x40px`, white fill, `20px` radius.
- Active `Global` label uses `#FE4C00`; inactive `Mumbai` label uses `#000000`.
- Ranking podium uses orange and black graphic elements.
- Ranking numbers use NATS NATS at `27.84px` and `21.6px`.
- Leaderboard rows are white, `314x70px`, with `35px` radius.
- Person markers use orange circles with black outline icons.

## Notes for implementers

- Prefer `#FE4C00` as the primary orange; retain `#FC4C01` when reproducing the cover or splash screen.
- Use only the documented button family. Do not introduce additional component families.
- Preserve the source typography choices and sizes; do not substitute a different font when the specified font is available.
- Use `#FFE5D9` for mobile page backgrounds and `#FFFFFF` for cards and filter controls.
- Challenge cards use `10px` radius; post cards use `25px`; leaderboard rows use `35px`; the cover uses `20px`.
- No spacing, radius, motion, grid, or reusable effect variables were defined.
- Decorative illustrations and icon groups are part of the visual language but are not defined as reusable components.
- The raw leaderboard extraction is truncated; implement only the leaderboard patterns explicitly documented above.
