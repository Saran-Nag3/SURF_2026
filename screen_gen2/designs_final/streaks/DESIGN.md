---
name: streaks
source: Streaks UI Kit (Community)
kind: design-system-context
---

# streaks - Design System

## Overview

Streaks UI Kit is a component-focused system for displaying weekly streak progress. The source contains two pages: Cover and Components. Its primary UI is a seven-day streak tracker with Fire and Flash variants, day states, continuation markers, save indicators, and supporting icons.

## Design language

- Use rounded, circular day indicators with centered status icons.
- Present streaks in horizontal weekly groups.
- Use strong contrast between white surfaces, light borders, and accent indicators.
- Use Fire and Flash as the two primary streak types.
- Use compact day labels above 48px circular indicators.
- Use purple outlines for component-set documentation boundaries.
- Use restrained elevation through soft drop shadows on weekly streak containers.

## Color palette

Ranked by reported usage where available:

| Color | Usage / role |
|---|---|
| `#9747FF` | 3 uses; component-set outline |
| `#C5BEB0` | 3 uses; cover orb fill |
| `#D9D9D9` | 3 uses; cover mask fill |
| `#FFFFFF` | Weekly streak and indicator surfaces; icon fills |
| `#E5E7EB` | StreakWeek border |
| `#122D581A` | StreakWeek drop-shadow color |

## Type scale

Typeface: Figtree Medium.

| Size | Reported usage | Role |
|---:|---:|---|
| 16px | 90 uses | Day labels and supporting text |
| 24.89px | 8 uses | Larger supporting text |
| 42.67px | 8 uses | Large display text |

No local text styles were defined.

## Spacing scale

No local spacing tokens were defined. Observed spacing values:

- 4px
- 6.22px
- 8px
- 9.33px
- 10px
- 10.67px
- 12.44px
- 16px
- 18.67px
- 21.33px
- 23.33px
- 24.89px
- 32px
- 40px
- 42.67px

Key component spacing:

- StreakDay: 4px vertical gap.
- StreakWeek: 16px gap in the canonical component.
- StreakWeek content: 24.89px bottom and side padding in the canonical component.
- StreakWeek info row: 12.44px gap in the canonical component.

## Radius scale

No local radius tokens were defined. Observed radii:

- 5px: component-set boundary.
- 20px: canonical StreakWeek container.
- 9999px: circular day and indicator surfaces.
- 39996px: large circular cover indicator background.

## Elevation & effects

- StreakWeek uses a drop shadow with `16px` offset `0 0` and color `#122D581A`.
- No local effect styles were defined.
- No local motion styles were defined.

## Components

### ContinuedStreak

- Family: `ContinuedStreak`
- Canonical size: `12x48px`
- Variants: `Continued Streak: No/Yes`
- Used as a vertical continuation marker at the beginning and end of a weekly streak row.

### StreakWeek

- Family: `StreakWeek`
- Canonical size: `360x148px`
- Radius: `20px`
- Layout: horizontal
- Gap: `16px`
- Alignment: center/min
- Sizing: fixed width and fixed height
- Fill: `#FFFFFF`
- Stroke: `#E5E7EB`, `2px`
- Effect: drop shadow using `#122D581A`
- Text: Figtree Medium, `16px`
- Variants:
  - `State: Broken/Current/Saved`
  - `Streak Type: Fire/Flash`
- Typical composition: a continuation marker, seven `StreakDay` instances, a continuation marker, and an information row.

### StreakDay

- Family: `StreakDay`
- Canonical size: `48x76px`
- Layout: vertical
- Gap: `4px`
- Alignment: center/min
- Sizing: fixed width and fixed height
- Variants:
  - `Streak Type: Fire/Flash`
  - `Indicator: None/Save/Streak`
  - `Time: Future/Past/Today`
  - `Current Streak: No/Yes`
  - `Sequence: Leading/Middle/Single/Trailing`
- Structure:
  - Day name text: `48x24px`, Figtree Medium, `16px`
  - Circular background: `48x48px`
  - Inner indicator: `40x40px`
  - Icon: `24x24px`
- Circular indicator surfaces use `#FFFFFF`; surrounding weekly streak surfaces use `#FFFFFF`.

### Icon

- Family: `Icon`
- Canonical size: `24x24px`
- Available icons:
  - `battery-charging-v`
  - `battery-charging-h`
  - `battery-low`
  - `battery`
  - `flash`
  - `fireshield`
  - `shield`
  - `fire`
- Icon fills are `#FFFFFF` at the component-instance level.

## Screen patterns

### Cover / Thumbnail

- A `1920x1080px` cover composition.
- Uses large orb and mask imagery as a background treatment.
- Includes large title and description text.
- Displays multiple `StreakWeek` examples at different scales.
- Includes large circular streak indicators using Flash and Fire icon examples.
- The cover demonstrates both compact and enlarged weekly streak layouts.

### Components / Components

- A `1628x1764px` white documentation section.
- Presents the `StreakDay` component set and its combinations.
- Demonstrates Fire and Flash types across Streak, Save, Past, and Today states.
- Shows leading, middle, single, and trailing sequence treatments.
- Uses purple component-set outlining for documentation boundaries.

## Notes for implementers

- Treat `StreakWeek` as the primary composite component and expose both `State` and `Streak Type` variants.
- Build `StreakDay` from a fixed `48x24px` label area and a fixed `48x48px` circular indicator.
- Keep the internal indicator at `40x40px` with a `24x24px` icon.
- Map `Indicator=Streak` to the Fire or Flash icon according to `Streak Type`.
- Map `Indicator=Save` to the battery-charging or fireshield icon according to the streak type.
- Preserve the `Time`, `Current Streak`, and `Sequence` variant axes even when the visual difference is subtle.
- Use `ContinuedStreak` at weekly-row boundaries when the sequence continues beyond the visible seven days.
- Do not introduce additional colors, typefaces, spacing tokens, radius tokens, or component families not listed here.
