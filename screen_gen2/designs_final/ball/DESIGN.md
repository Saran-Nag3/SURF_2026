---
name: weather-app-community
source: Weather app (Community)
kind: design-system-context
---

# ball - Design System

## Overview

Weather application design extracted from Figma file “Weather app (Community)” on Page 1. The interface includes weather dashboards, city search, saved cities, current conditions, forecast cards, and mobile phone mockups.

No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Mobile-first weather UI presented inside iPhone mockups.
- Primary visual language: blue weather backgrounds with translucent white glass-like surfaces.
- Use rounded cards with subtle borders, translucent fills, gradients, and drop shadows.
- Text and icons primarily use blue tones with varying opacity.
- Weather data is organized into prominent current-temperature content, forecast cards, time-based weather data, and wind/rain/humidity details.
- Navigation includes back, search, location, and vertical-more icons.
- Roboto is used throughout the interface.

## Color palette

Ranked by observed usage:

| Color | Usage | Observed role |
|---|---:|---|
| `#27658799` | 91 | Secondary text, muted icons, borders, weather data |
| `#276587` | 46 | Primary text, icons, prominent temperature |
| `#276587BF` | 42 | Weather data, labels, secondary information |
| `#DADADA` | 28 | Neutral gray |
| `#27658766` | 25 | Low-emphasis text, borders, inactive indicators |
| `#000000` | 24 | Status-bar time |
| `#276587CC` | 24 | Prominent secondary headings and labels |
| `#FFFFFF80` | 23 | Translucent card and weather-surface fills |
| `#27658780` | 12 | Low-emphasis weather data |
| `#276587A6` | 6 | Fine borders and indicators |
| `#5CB8EC` | 4 | Primary weather background |
| `#FFFFFF` | 4 | Solid background and icon surfaces |

Observed gradient treatment uses translucent white transitioning into transparent blue-background treatment. Apply only the listed palette colors when implementing.

## Type scale

Font family: Roboto.

| Size | Weight | Observed usage |
|---:|---|---|
| 64px | Bold | Prominent current temperature |
| 24px | Regular | Temperature headings and degree notation |
| 18px | Medium | Screen headings, city names, search labels |
| 18px | Regular | City names and weather values |
| 15px | Regular | Status-bar time |
| 14px | Bold | Weather values |
| 14px | Regular | Conditions and dates |
| 13px | Regular | Forecast temperature ranges |
| 12px | Regular | Forecast data |
| 11px | Medium | Today, Tomorrow, and forecast-day labels |
| 9px | Regular | Time labels |
| 5px | Regular | Sunrise, sunset, wind, rain, and humidity details |

Text hierarchy observed:

- Prominent temperature: Roboto Bold, 64px.
- Secondary temperature and degree notation: Roboto Regular, 24px.
- Screen headings and city names: Roboto Medium, 18px.
- Conditions and date information: Roboto Regular or Medium, 14px.
- Forecast metadata: 5px–13px depending on detail level.

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- `0px`
- `10px`
- `20px`

The most repeated weather cards use `20px`. Saved-city list cards use both `10px` and `20px`.

## Elevation & effects

Observed effects:

- Drop shadow with `120px` blur, offset `0 10`, color `#27658766`.
- Drop shadow with `4px` blur, offset `0 4`.
- Drop shadow with `30px` blur, offset `10 2`.
- Weather temperature group uses a drop shadow with `4px` blur, offset `0 4`.
- Cards combine translucent fills, gradients, borders, and shadows.
- The primary weather illustration includes a translucent circular surface using `#FFFFFF80`.

## Components

_None found in source._

## Screen patterns

- **SCREEN 1:** Main current-weather dashboard in a 570.49 × 956.48px mobile frame. Uses a `#5CB8EC` background, status bar, location and menu controls, a large current-temperature area, forecast cards, time-based weather data, and wind/rain/humidity details.
- **SCREEN 2:** Saved-city/search screen in a 414 × 896px mobile frame. Includes status bar, back navigation, “My Cities,” “Search a city,” search control, and repeated rounded city cards.
- **SCREEN 3:** Saved-city/search screen inside the cover composition at 519.17 × 939.44px. Uses a `#5CB8EC` background, status bar, navigation controls, city search, and repeated translucent cards.
- **Cover:** 1600 × 1200px presentation composition containing mobile weather screens, photographic imagery, and phone mockup layouts.
- **iPhone 12 Pro 6.1" Mockup:** 445.5 × 893px mockup frame used to present the interface.

## Notes for implementers

- Treat `#5CB8EC` as the primary weather-screen background.
- Use `#276587` for the strongest text and icon emphasis.
- Use the opacity variants of `#276587` to establish text hierarchy and inactive states.
- Use `#FFFFFF80` for translucent surfaces and layered weather visuals.
- Use `20px` rounded corners for primary weather cards and `10px` for compact saved-city cards where shown.
- Preserve the glass-like card construction: translucent white fill, blue-toned border, gradient treatment, and subtle shadow.
- Keep Roboto weights and sizes aligned to the observed type scale.
- Weather dashboard content should prioritize the current temperature, condition, city, date, forecast, and wind/rain/humidity metrics.
- No reusable component families were extracted; implement repeated cards and controls consistently from the observed screen patterns.
- Image fills and decorative icon assets are present in the source, but no reusable asset specifications were extracted.
