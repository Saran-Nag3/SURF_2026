---
name: 2022-realme-ui-widget-co-creation-community
source: 2022 Realme UI Widget Co Creation (Community)
kind: design-system-context
---

# realme - Design System

## Overview

Weather-widget design exploration across Page 1 and Page 2. The source includes small, medium, and large weather cards with day/night variants, temperature, location, conditions, date, forecast indicators, and weather details.

No local variables, paint styles, text styles, components, or effect styles were found.

## Design language

- Weather-focused interface using compact informational cards.
- Visual modes include warm light weather cards, dark blue night cards, and pale blue-gray cloudy cards.
- Large temperature values are the primary visual anchor.
- Weather conditions use supporting labels such as “Sunny”, “Rain”, “Cloudy”, “Day”, and “Night”.
- Decorative weather illustrations use circular gradients and simplified geometric forms.
- Cards use rounded corners and compact, centered information clusters.
- Primary typeface: Zen Kaku Gothic New.
- One isolated source text layer uses Inter Regular at 12px.

## Color palette

Ranked by source usage:

| Color | Uses |
|---|---:|
| #332E2E | 712 |
| #BFCCEF | 478 |
| #D1CCCC | 475 |
| #FFFFFF | 228 |
| #101010 | 161 |
| #D1CCCC80 | 105 |
| #332E2E80 | 99 |
| #101D40 | 33 |
| #101D4080 | 27 |
| #BFCCEF80 | 27 |
| #FDEFDB | 26 |
| #49BCF6 | 21 |
| #3C2403 | 19 |
| #F8F8FF | 17 |

Observed palette roles:

- #332E2E: primary warm-dark text and icon color.
- #332E2E80: subdued warm-dark text.
- #101D40: dark blue background and primary blue text.
- #101D4080: subdued dark blue.
- #BFCCEF: pale blue text and accents on dark blue cards.
- #BFCCEF80: subdued pale blue.
- #FDEFDB: warm cream card background.
- #F8F8FF: cool off-white card background.
- #FFFFFF: white surfaces and isolated fills.
- #D1CCCC and #D1CCCC80: neutral gray values.
- #49BCF6: bright blue accent.
- #3C2403: dark brown accent.
- #101010: near-black text or neutral color.

## Type scale

Primary family: Zen Kaku Gothic New.

| Size | Weight | Uses |
|---:|---|---:|
| 96px | Black | 43 |
| 78.63px | Black | 13 |
| 36px | Bold | 11 |
| 32px | Black | 38 |
| 24px | Black | 43 |
| 20px | Bold | 65 |
| 19.66px | Black | 13 |
| 16.38px | Bold | 21 |
| 16px | Black | 23 |
| 14px | Medium | 76 |
| 14px | Regular | 219 |
| 12px | Light | 201 |
| 12px | Medium | 65 |
| 12px | Regular | 101 |
| 11.47px | Medium | 24 |
| 11.47px | Regular | 68 |
| 10px | Regular | 38 |
| 9.83px | Light | 64 |
| 9.83px | Medium | 21 |
| 9.83px | Regular | 34 |
| 8.19px | Regular | 12 |
| 8px | Medium | 206 |
| 8px | Regular | 114 |
| 6.55px | Medium | 66 |
| 6.55px | Regular | 36 |

Observed hierarchy:

- 96px Black and 78.63px Black: very large temperature or display values.
- 36px Bold, 32px Black, and 24px Black: prominent weather values and headings.
- 20px Bold: condition labels such as “Sunny”, “Rain”, and “Cloudy”.
- 14px Regular or Medium: temperatures, metadata, and weather details.
- 12px Light, Medium, or Regular: location, date, mode, and supporting labels.
- 10px and smaller: compact weather data and forecast labels.

## Spacing scale

No spacing tokens were found.

Observed layout values:

- Mobile grid: 4 columns.
- Mobile grid section: 44.16px.
- Mobile grid gutter: 20px.
- Row grid: 1000 rows.
- Row section: 8px.
- Row gutter: 0px.
- Grid alignment: stretch for columns; center for rows.
- Medium card internal vertical gap: 4px.
- Large card internal vertical gaps: 4px, 5px, and 8px.
- Forecast list row gap: 8px.
- Weather detail item gap: 8px.
- Large weekly forecast horizontal gap: 173px.
- Night indicator bar gap: 12px.

## Radius scale

Observed radius values:

- 16px: small cards.
- 20px: large cards.
- 30px: small rounded weather indicator bars.
- `16/100/100/16px`: asymmetric medium-card radius configuration.

No radius variables were found.

## Elevation & effects

No local effect styles were found.

One source sample contains an inner shadow on a 20x70px rectangle, with a 7px effect and offset `4 5`. Its source color is outside the allowed palette and is therefore not specified here.

No motion tokens were found.

## Components

_No component families or component sets were found in the source._

Observed reusable visual patterns are not formal Figma components:

- Small weather card: 158x158px.
- Medium weather card: 328x158px.
- Large weather card: 328x328px.
- Temperature unit lockup: numeric temperature, circular degree mark, and `C`.
- Weather summary: location, condition, date, and day/night label.
- Forecast row: day label, weather icon, temperature values, and secondary condition values.
- Weather detail indicators: wind, humidity, and UV index icon patterns.

## Screen patterns

- Page 1 / Frame 1: 360x800px mobile composition containing small, medium, and large weather-card arrangements.
- Small cards: 158x158px with 16px radius, warm cream or dark blue backgrounds, large temperature, location, condition, and day/night metadata.
- Medium cards: 328x158px with a 16/100/100/16px radius configuration. Used for condensed weather summaries with large temperature values and decorative weather illustrations.
- Large card: 328x328px with a 20px radius. Contains temperature, location, condition, date and mode, humidity, wind, UV, hourly forecast, and multi-day forecast rows.
- Hourly forecast: repeated compact columns with weather illustration, temperature, degree marker, and time labels such as `3PM`, `4PM`, and `5PM`.
- Weekly forecast: rows labeled `Saturday`, `Sunday`, and `Monday`, with weather icon and temperature groups.
- Additional source screens include isolated weather-card explorations and an unrelated text layer named “Pengingat anime2 Sampah Memori”.

## Notes for implementers

- Use only the listed palette values. Do not substitute colors from the source’s unapproved gradient or decorative fills.
- Preserve the contrast relationship between warm cream cards, dark blue night cards, and pale blue-gray cloudy cards.
- Use Zen Kaku Gothic New for weather UI text. Match the listed weight and size combinations rather than introducing new typography tokens.
- Treat 96px Black and 32px Black as temperature-display styles; use 20px Bold for condition labels and 12px styles for supporting metadata.
- Maintain the three observed card sizes: 158x158px, 328x158px, and 328x328px.
- Use 16px or 20px card radii according to card size; do not generalize the asymmetric medium-card radius into a uniform radius.
- Keep weather illustrations decorative and subordinate to the temperature and condition information.
- The source contains no formal component definitions, spacing variables, radius variables, motion tokens, or local styles.
