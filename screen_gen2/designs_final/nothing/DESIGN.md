---
name: nothing-weather-app-2023-community
source: Nothing Weather App 2023 (Community)
kind: design-system-context
---

# nothing - Design System

## Overview

Nothing Weather App 2023 weather interface from the Figma pages Home, Prototype, Components, and thank you. The system uses dark weather screens, monochrome typography and icons, red temperature emphasis, and fixed-size weather data components.

## Design language

- Dark, technical weather-dashboard aesthetic.
- Primary background: `#07080A`.
- High-contrast white and grey information hierarchy.
- Bright red indicates active selections and warm temperature ranges.
- Dull red indicates inactive navigation.
- Blue is available as a weather-system color.
- Typography is predominantly monospaced, with Ndot and Agrandir variants used for selected display values.
- Components are compact, fixed-size compositions with explicit horizontal or vertical gaps.
- Weather illustrations and directional arrows use white fills.

## Color palette

Ranked by reported usage:

| Name | Color | Usage |
|---|---|---:|
| white | `#FFFFFF` | 1995 |
| grey | `#2C2D30` | 670 |
| bright red | `#D71921` | 188 |
| blue | `#002F6C` | 140 |
| dull red | `#8A2025` | 26 |
| bgblack | `#07080A` | 21 |
| unstyled grey | `#535353` | 41 |
| unstyled purple | `#9747FF` | 13 |
| white | `#E7EAE9` | 8 |
| unstyled blue-grey | `#5E6980` | 4 |

Additional source color usage:

- `#FFFFFF`: 9 raw unstyled uses.
- `#E7EAE9`: 8 raw unstyled uses.
- `#535353`: 41 raw unstyled uses.
- `#9747FF`: 13 raw unstyled uses.
- `#5E6980`: 4 raw unstyled uses.

Use `#FFFFFF` for primary white component fills and strokes where specified. Use `#535353` for inactive menu titles. Use `#D71921` for active navigation text and temperature emphasis. Use `#8A2025` for inactive top-level navigation.

## Type scale

No local text styles were defined. Observed typography, ordered from largest to smallest:

| Font | Size |
|---|---:|
| Ndot 57 | 54px |
| Noto Sans Mono Regular | 24px |
| Ndot 55 | 23px |
| Noto Sans Mono Regular | 22px |
| Noto Sans Mono Regular | 21px |
| Ndot 55 | 20.95px |
| Noto Sans Mono Regular | 20px |
| Noto Sans Mono Regular | 19.13px |
| Noto Sans Mono Regular | 19px |
| Noto Sans Mono Regular | 18.22px |
| Ndot 57 | 18px |
| Noto Sans Mono Regular | 18px |
| Noto Sans Mono Regular | 17px |
| Agrandir GrandHeavy | 16.4px |
| Noto Sans Mono Regular | 16.4px |
| Noto Sans Mono Regular | 15px |
| Noto Sans Mono Regular | 14.99px |
| Noto Sans Mono Regular | 11px |
| Noto Sans Mono Regular | 9.19px |

Most-used text styles:

- Noto Sans Mono Regular, 18px: 63 uses.
- Noto Sans Mono Regular, 15px: 33 uses.
- Noto Sans Mono Regular, 20px: 33 uses.
- Noto Sans Mono Regular, 17px: 29 uses.
- Noto Sans Mono Regular, 24px: 23 uses.
- Noto Sans Mono Regular, 11px: 20 uses.

## Spacing scale

No spacing variables were defined. Observed component gaps:

- `0px` padding in the listed components.
- `0px` gap in `temp-level-dots`.
- `1px` gap in `temperature`.
- `2px` gap in `wind-amplitude`.
- `5px` gap in `temp-level`.
- `10px` gap in `main-menu`.
- `17px` gap in `wind-bar`.
- `18px` gap in `precipitation-info`.
- `21px` gap in `pie-chart`.
- `24px` gap in `prediction-component`.

Other observed screen-layout gaps include `0.91px`, `4.55px`, `47.37px`, `62.85px`, and `69px`.

## Radius scale

No radius variables were defined. Observed radii:

- `8px`: `selected-title`.
- `14px`: `TODAY`.
- `12.75px`: scaled `TODAY` instance in the large screen.
- `73.66px`: large rounded weather screen frames.
- `44.23px`: thermometer outline.
- `20.54px`: thermometer temperature bars.

## Elevation & effects

- No local effect styles were defined.
- Large weather screen frames use layer blur of `6px` and `7.13px`.
- `selected-title` uses a white `3px` stroke.
- `TODAY` uses a white `3px` stroke; the scaled instance uses a white `2.73px` stroke.
- `temperature-bar` uses rounded ends with a `20.54px` radius.
- `weather1`, `weather2`, `weather3`, `weather-small`, and `arrow` specify `#FFFFFF` fills.
- The thermometer uses a white `7px` outline stroke and a white `5.74px` internal stroke.

## Components

Only the following component families are defined in the source.

### `main-menu`

- Size: `424x52px`.
- Horizontal layout.
- Gap: `10px`.
- Text: Noto Sans Mono Regular, `20px`.
- Variants: `10DAYS`, `TODAY`, `TOMORROW`.
- The active `TODAY` state is a white outlined rounded control with bright red text.

### `TODAY`

- Size: `100x52px`.
- Radius: `14px`.
- White stroke: `3px`.
- Text: Noto Sans Mono Regular, `20px`.
- Variants: active, inactive.

### `selected-title`

- Size: `100x52px`.
- Radius: `8px`.
- White stroke: `3px`.
- Text: Noto Sans Mono Regular, `20px`.
- Variants: active, inactive.

### `TITLE`

- Size: `54x25px`.
- Fill: `#FFFFFF`.
- Text: Noto Sans Mono Regular, `18px`.
- Variants: active, inactive.
- Active title text uses white; inactive title text uses `#535353`.

### `prediction-component`

- Size: `269x50px`.
- Horizontal layout.
- Gap: `24px`.
- Alignment: minimum/center.
- Fixed width and height.
- Text: Noto Sans Mono Regular, `15px` and `18px`.
- Variants: `CLEAR-NIGHT`, `CLOUDY`, `SHOWERS`, `SUNNY`.

### `weather1`

- Size: `129x165px`.
- Fill: `#FFFFFF`.
- Text: Noto Sans Mono Regular, `18px`.
- Variants: Default, Variant2, Variant3, Variant4.

### `weather2`

- Size: `120x183px`.
- Fill: `#FFFFFF`.
- Variants: Default, Frame 4, Variant2, Variant3, Variant4.

### `weather3`

- Size: `120x120px`.
- Fill: `#FFFFFF`.
- Variants: `clear-night`, `clear-sun`, `cloudy`, `showers`.

### `weather-small`

- Size: `36x56.68px`.
- Fill: `#FFFFFF`.
- Text: Noto Sans Mono Regular, `14.99px` and `9.19px`.
- Variants: `clear-night`, `cloudy`, `showers`, `sunny`.

### `arrow`

- Size: `12x12px`.
- Fill: `#FFFFFF`.
- Variants: `NORTH`, `east`, `north-east`, `north-west`, `south`, `south-east`, `south-west`, `west`.

### `pie-chart`

- Size: `55x109px`.
- Vertical layout.
- Gap: `21px`.
- Alignment: minimum/center.
- Fixed width and height.
- Text: Noto Sans Mono Regular, `24px`.
- Variants: `0%`, `10%`, `20%`, `30%`, `40%`, `50%`, `60%`, `70%`, `80%`, `90%`, `100%`.

### `precipitation-info`

- Size: `55x221px`.
- Vertical layout.
- Gap: `18px`.
- Alignment: minimum/center.
- Fixed width and height.
- Text: Noto Sans Mono Regular, `22px`, `17px`, and `24px`.

### `wind-amplitude`

- Size: `30x38px`.
- Vertical layout.
- Gap: `2px`.
- Alignment: maximum/center.
- Fixed width and height.
- Text: Noto Sans Mono Regular, `17px`.
- Variants: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`.

### `wind-bar`

- Size: `46x103px`.
- Vertical layout.
- Gap: `17px`.
- Alignment: minimum/center.
- Fixed width and height.
- Text: Noto Sans Mono Regular, `19px` and `17px`.

### `temperature`

- Size: `119.2x47px`.
- Horizontal layout.
- Gap: `1px`.
- Alignment: center/minimum.
- Fixed width and height.
- Text: Ndot 57, `54px`.

### `temperature-bar`

- Size: `3x14px`.
- Fill: `#FFFFFF`.
- Variants: active, inactive.
- Temperature-scale instances use grey and bright red fills.

### `temp-level`

- Size: `36x265.68px`.
- Vertical layout.
- Gap: `5px`.
- Alignment: maximum/center.
- Fixed width and height.
- Text: Noto Sans Mono Regular, `14.99px`, `9.19px`, and `11px`.

### `temp-level-dots`

- Size: `18x204px`.
- Vertical layout.
- Gap: `0px`.
- Alignment: maximum/center.
- Fixed width and height.
- Text: Noto Sans Mono Regular, `11px`.
- Variants: `ZERO`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`.

## Screen patterns

### Prototype / HOME

- Screen size: `428x926px`.
- Background: `#07080A`.
- Top navigation uses `main-menu` at `424x52px`.
- Navigation labels are Noto Sans Mono Regular, `20px`; inactive labels use `#8A2025`, active `TODAY` uses `#D71921`.
- A horizontal title menu follows below the top navigation.
- Title menu uses six `TITLE` instances with `69px` gaps.
- Active title is white; inactive titles use `#535353`.
- Weather information is grouped into compact date, temperature, weather, air-quality, and official-note areas.
- The screen includes weather prediction, precipitation, wind, temperature, and weather-icon component families.

### Home / Plugin / file cover - 7

- Large presentation frame: `1920x1189px`.
- Contains two large dark weather screens, each approximately `393.5x845.2px`, with `73.66px` corner radii.
- Screens use layer blur of `6px` or `7.13px`.
- The top navigation is a scaled `main-menu` with `TODAY` selected.
- The first screen presents air quality, an official note, date-time, temperature, weather, and a thermometer visualization.
- The second screen presents sunrise and sunset information, date-time, chances of rain, and a decorative weather visualization.
- Thermometer visualizations combine rounded outlines, white strokes, red mercury, and repeated temperature bars.

## Notes for implementers

- Treat every listed component size as fixed unless the source explicitly indicates otherwise.
- Preserve the monospaced visual character with Noto Sans Mono Regular for the majority of interface text.
- Use Ndot 57 at `54px` for the large `temperature` display.
- Keep active and inactive states distinct: active navigation uses `#D71921` or white; inactive navigation commonly uses `#8A2025` or `#535353`.
- Use `#07080A` for the primary weather-screen background.
- Do not infer additional spacing, radius, typography, motion, grid, or effect tokens; none were defined locally.
- Component family names and variant names should remain exactly as listed.
- The source includes decorative shapes and imagery in large presentation screens; their detailed construction is not part of the reusable component system.
