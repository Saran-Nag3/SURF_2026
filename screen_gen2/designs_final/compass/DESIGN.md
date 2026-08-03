---
name: compass-design-system-community
source: Compass Design System (Community)
kind: design-system-context
---

# compass - Design System

## Overview

Compass is a LATAM-oriented travel and flight design system covering foundations, branding, styles, components, design tokens, and mobile-oriented design flows.

Primary product areas represented:
- Flight search and booking
- Calendar and passenger selection
- Flight details and trip administration
- Seat selection and boarding passes
- Points and miles
- Travel assistance, destinations, luggage, and benefits
- Navigation, headers, loading, dropdowns, trays, banners, tags, toasts, and links

No local variable collections, spacing variables, radius variables, motion tokens, or local grid styles were found.

## Design language

- Friendly travel-product interface using Nunito Sans as the primary typeface.
- Inter is used in selected text styles.
- Rounded controls and cards are common, with frequent `7px`, `14px`, and circular `100px` radii.
- Primary visual emphasis uses navy, purple, teal, pink, and white.
- Cards commonly use white fills with subtle gray shadows or borders.
- Mobile-width layouts frequently use fixed widths around `353px`–`395px`.
- Components use explicit horizontal or vertical layouts with defined padding, gaps, and alignment.
- Variants commonly represent state, type, style, selection, or travel-specific categories.

## Color palette

Ranked by raw usage where counts were provided:

| Color | Usage | Use |
|---|---:|---|
| `#FFFFFF` | 666 | Primary card, control, and surface fill |
| `#D9D9D9` | 590 | Neutral raw color |
| `#9747FF` | 82 | Purple accent |
| `#000000` | 33 | Black text or icon color |
| `#4658E0` | 12 | Blue accent and banner icon fill |
| `#1C1B1F` | 10 | Dark neutral |
| `#5C5C5C` | 8 | Gray text or icon color |

Additional extracted colors:

- `#110053` — navy
- `#1B0188` — deep purple; used for alert borders and seat icon circles
- `#0BAEAF` — teal; used for state and progress icons
- `#EA104C` — pink/red accent; used for primary action borders and arrow buttons
- `#EFEDFA` — light lavender surface
- `#FFF9E6` — pale yellow alert surface
- `#F3F2F7` — light gray-purple surface
- `#B6B6B6` — neutral border
- `#D1D1D2` — light border
- `#E0E0E2` — light gray border and shadow
- `#E7E7E7` — upward shadow
- `#DCDCDC` — card shadow
- `#858585` — gray control fill
- `#00000000` — transparent black
- `#11005300` — transparent navy
- `#11005380` — semi-transparent navy
- `#110053D9` — navy with opacity
- `#0F0142E5` — dark navy with opacity
- `#0F0F0FE5` — dark black with opacity
- `#EA104C05` — very transparent pink
- `#FFFFFF00` — transparent white

Gradients:

- `NavyGardient`: linear gradient from `#11005300` at `0%`, to `#110053D9` at `91%`, to `#0F0142E5` at `100%`.
- `PremiumGradient`: `#110053` base with radial gradient from `#EA104C` at `0%` to `#EA104C05` at `100%`.
- `DestinationCard|Gradient`: linear gradient from `#00000000` at `0%` to `#0F0F0FE5` at `84%`.
- `DestinationCard|Gradient2`: linear gradient from `#FFFFFF00` at `0%` to `#FFFFFF` at `84%`.

## Type scale

Primary typeface: Nunito Sans. Secondary typeface: Inter.

### Named styles

| Style | Family / weight | Size | Tracking |
|---|---|---:|---:|
| Bold/1 | Nunito Sans Bold 700 | `45px` | `-1.8px` |
| Bold/2 | Nunito Sans Bold 700 | `21px` | `0px` |
| Bold/3 | Nunito Sans Bold 700 | `19px` | `0px` |
| Bold/4 | Nunito Sans Bold 700 | `17px` | `-0.51px` |
| Bold/5 | Nunito Sans Bold 700 | `15px` | `-0.3px` |
| Bold/5.1 | Nunito Sans Bold 700 | `15px` | `0.15px` |
| Bold/6 | Nunito Sans Bold 700 | `14px` | `-0.56px` |
| Bold/6.1 | Nunito Sans Bold 700 | `14px` | `0px` |
| Bold/7 | Nunito Sans Bold 700 | `13px` | `-0.26px` |
| Bold/8 | Nunito Sans Bold 700 | `12px` | `-0.12px` |
| Bold/9 | Nunito Sans Bold 700 | `11px` | `0px` |
| Regular/1 | Nunito Sans Regular 400 | `25px` | `-0.5px` |
| Regular/2 | Nunito Sans Regular 400 | `22px` | `-0.44px` |
| Regular/3 | Nunito Sans Regular 400 | `20px` | `-0.8px` |
| Regular/4 | Nunito Sans Regular 400 | `19px` | `0.19px` |
| Regular/5 | Nunito Sans Regular 400 | `18px` | `-0.54px` |
| Regular/6 | Nunito Sans Regular 400 | `16px` | `-0.32px` |
| Regular/7 | Nunito Sans Regular 400 | `15px` | `0px` |
| Regular/8 | Nunito Sans Regular 400 | `14px` | `-0.42px` |
| Regular/9 | Nunito Sans Regular 400 | `12px` | `-0.12px` |
| Regular/10 | Nunito Sans Regular 400 | `11px` | `-0.33px` |
| Regular/11 | Nunito Sans Regular 400 | `10px` | `0.1px` |
| Regular/12 | Nunito Sans Regular 400 | `7px` | `-0.42px` |
| Light/1 | Nunito Sans Light 300 | `25px` | `-0.75px` |
| Light/2 | Nunito Sans Light 300 | `22px` | `-0.66px` |
| Light/3 | Nunito Sans Light 300 | `14px` | `-0.42px` |
| Light/4 | Nunito Sans Light 300 | `12px` | `-0.36px` |
| Semibold/1 | Nunito Sans SemiBold 600 | `17px` | `-0.34px` |
| Semibold/2 | Nunito Sans SemiBold 600 | `14px` | `-0.28px` |
| Semibold/3 | Nunito Sans SemiBold 600 | `13px` | `-0.65px` |
| Semibold/4 | Nunito Sans SemiBold 600 | `10px` | `-0.5px` |
| Inter/1-Regular | Inter Regular 400 | `13px` | `-0.39px` |
| Inter/2-Regular | Inter Regular 400 | `10px` | `-0.7px` |

Italic styles:
- `Regular/1-Italic`: Nunito Sans Italic 400, `20px`, tracking `-0.4px`.
- `Light/1-Italic`: Nunito Sans LightItalic 300, `20px`, tracking `-0.4px`.
- `Light/2-Italic`: Nunito Sans LightItalic 300, `14px`, tracking `-0.42px`.

Raw typography also includes Nunito Sans sizes from `28px` through `100px`, including Bold, Black, ExtraBold, Regular, and Inter Light `35px`. Use named styles when available.

## Spacing scale

_No spacing variables found in source._

Component spacing values are explicit rather than tokenized. Extracted examples include:
- `0px`, `2px`, `4px`, `5px`, `7px`, `8px`, `10px`, `12px`, `14px`, `16px`, `18px`, `23px`, `28px`, `32px`, `33px`, `44px`, `58px`, `62px`, `80px`, `87px`, `130px`, `131px`, `263px`.

## Radius scale

_No radius variables found in source._

Recurring component radii:
- `0px` for square edges or joined controls
- `5px`
- `7px`
- `11px`
- `14px`
- `30px`
- `100px` for circular controls and indicators

Some components use asymmetric radii, including `7px/0/0/7px`.

## Elevation & effects

Extracted effect styles:

- `Drop-shadow/Card`: drop shadow with `15px` offset and color `#DCDCDC`.
- `Drop-shadow/Down`: drop shadow with `4px` offset, positioned at `0 2`, color `#E0E0E2`.
- `Drop-shadow/Up`: drop shadow with `10px` offset, positioned at `0 -3`, color `#E7E7E7`.

Use card shadows on `Card+image-button`, `Action-card-button`, `Seat-assignation-card`, `Past-flight-card`, and `Benefits-card`. Use directional shadows on `Flight-card`, `Buy-flight-card`, and `Flight-selection-card` as specified by their component specs.

## Components

### Banners, alerts, and status

- `Informative-Banner`: `364x184px`, radius `7px`, fill `#EFEDFA`, padding `23px 14px`, gap `10px`, horizontal; uses `Bold/6`, `Regular/7`, `Bold/4`.
- `Alert-Banner`: `364x67px`, radius `7px`, fill `#FFF9E6`, stroke `#1B0188 1px`, padding `10px 14px`, gap `10px`; uses `Bold/9`, `Bold/8`, `Bold/6`.
- `Banner-icon`: `17x17px`, radius `30px`, fill `#4658E0`; variants `Alert` and `Info`.
- `Info-state-icon`: `14x14px`, radius `100px`, fill `#0BAEAF`; variants `Alert` and `Check`, sizes `Big` and `Small`.
- `State-dot`: `12x12px`; variants `Canceled`, `Delayed`, and `On time`.
- Toast families: `Copy-verification-toast`, `Info-update-toast`.
- Tag families: `Status-tags`, `Flight-state-tag`, `Upgrade-tag`, `Normal-tag`, `Destination-tag`, `Person-number-tag`, `Boarding-pass-update-tag`, `Flight-tag`.

### Buttons and controls

- `Big-button`: `362x51px`, radius `7px`, fill `#FFFFFF`, stroke `#EA104C 1px`, horizontal, centered; variants `Primary`, `Secondary`, `Tertiary` and `Filled`, `Outlined`.
- `Copy-number-button`: `121.6x51px`, radius `7px`, fill `#EFEDFA`, padding `16px 18px`, gap `12px`; background variants `Blue`, `Grey`, `Light blue`.
- `Segmented-button`: `101x36px`, radius `100px`, fill `#FFFFFF`, stroke `#D1D1D2 1px`, padding `8px 10px`; states `Default`, `Selected`.
- `Trip-type-button`: `181x31px`, radius `7px/0/0/7px`, stroke `#B6B6B6 1px`; variants `Default`, `Selected`, `One way`, `Round`.
- `Date-selection-button`: `44x44px`, radius `7px`, fill `#FFFFFF`, stroke `#D1D1D2 1px`; types `Default`, `Disabled`, `Middle`, `Selected`.
- `Normal-tab-button`: `197x55px`, fill `#FFFFFF`, stroke `#D1D1D2 1px`; variants `Primary`, `Secondary`, `Default`, `Selected`.
- `Image-tab-button`: `197x44px`, fill `#FFFFFF`; states `Default`, `Selected`.
- `Category-option-button`: `354x56px`, radius `7px`, fill `#FFFFFF`, stroke `#B6B6B6 1px`, padding `18px 14px`, gap `23px`; states `Default`, `Selected`.
- `Action-card-button`: `94x94px`, radius `7px`, fill `#FFFFFF`, `Drop-shadow/Card`; uses `Regular/9`.
- `Card+image-button`: `89x86px`, radius `14px`, fill `#FFFFFF`, `Drop-shadow/Card`; uses `Regular/11`.
- `Arrow-button`: `28x27px`, radius `100px`, fill `#EA104C`.
- `Carousell-arrow-button`: `35.33x35.33px`, radius `100px`, fill `#FFFFFF`, stroke `#EA104C 1px`; types `Back`, `Forward`.
- `Invert-button`: `41x41px`, radius `100px`, fill `#FFFFFF`, stroke `#B6B6B6 1px`.
- `Seat-selection-button`: `32x32px`, fill `#FFFFFF`; types `Blue`, `Green`, `Grey`, `Pink`, `Purple`, with `Filled` and `Outlined` styles.
- `Exit-button`: `23x23px`, radius `100px`, fill `#858585`; types `Big`, `Filled`, `Medium`, `Small`.
- `Back-button`: `9x14px`; types `Blue`, `Filled`, `White`.
- `Menu-button`: `24x20px`, fill `#FFFFFF`.
- `Menu-option-button`: `364x36px`, padding `7px 0`, gap `130px`; styles `Default`, `Underlined`, types `Big`, `Small`.
- `Miles-button`: `160x80px`, radius `7px`, fill `#FFFFFF`, stroke `#E0E0E2 1px`.
- `LATAM-pass-button`: `178x41px`, radius `7px`, fill `#FFFFFF`; uses `Bold/7`.

### Cards

Card families include `Plan-card`, `Frequent-companion-card`, `Seats-assigned-card`, `Flight-search-card`, `AddFlight-card`, `Seat-assignation-card`, `Flight-card`, `Luggage-card`, `Miles-card`, `Trip-admin-card`, `Flight-details-card`, `Past-flight-card`, `Assist-card`, `PlanOffer-card`, `Benefits-card`, `Next-flight-card`, `ReservationFlight-card`, `LATAM-pass-card`, `Passenger-selection-card`, `Miles-points-card`, `Boarding-pass-item-card`, `Flight-selection-card`, `ReservationCode-card`, `Destination-card`, `Flight-info-card`, `Points-card`, and `Buy-flight-card`.

Key dimensions and surfaces:
- `Plan-card`: `337x572px`, radius `7px`, fill `#FFFFFF`; variants `Premium`, `Standard`.
- `Flight-card`: `360x90px`, radius `14px`, fill `#FFFFFF`, `Drop-shadow/Down`.
- `Flight-search-card`: `363x51px`, radius `5px`, fill `#FFFFFF`.
- `AddFlight-card`: `365x127px`, radius `7px`, fill `#FFFFFF`.
- `Flight-details-card`: `361x327px`, radius `11px`, fill `#FFFFFF`, stroke `#E0E0E2 1px`.
- `Buy-flight-card`: `363x192px`, radius `7px`, fill `#FFFFFF`, `Drop-shadow/Down`.
- `Destination-card`: `365x214px`, radius `14px`, image fill, `DestinationCard|Gradient` or `DestinationCard|Gradient2`; uses `Bold/4`, `Regular/9`.
- `Next-flight-card`: `362x433px`, radius `14px`, fill `#FFFFFF`.
- `Passenger-selection-card`: `393x215px`, fill `#FFFFFF`, stroke `#E0E0E2 1px`.
- `Flight-selection-card`: `395x156px`, fill `#FFFFFF`, `Drop-shadow/Up`.
- `Trip-admin-card`: `363x66px`, radius `14px`, fill `#F3F2F7`.
- `Assist-card`: `359x121px`, radius `14px`, fill `#FFFFFF`.
- `Benefits-card`: `365x135px`, `Drop-shadow/Card`.
- `Miles-card`: `360x227px`, radius `7px`, fill `#FFFFFF`.
- `Miles-points-card`: `355x111px`, radius `5px`, fill `#FFFFFF`, stroke `#D1D1D2 1px`.
- `LATAM-pass-card`: `363x85px`, radius `5px`, fill `#FFFFFF`.
- `ReservationCode-card`: `353.6x67px`, radius `7px`, stroke `#E0E0E2 1px`.

### Inputs, dropdowns, trays, and selection

Families:
`Input`, `Active-origin-destination-input`, `Date-input`, `Origin-destination-formInput`, `Input add`, `Input-name and last name`, `Passengers-input`, `Dropdown-sortedBy`, `Selector-dropdown`, `Dropdown-code`, `Tray-dropdown`, `Pop-up-dropdown`, `Seat-type-tray`, `Loading-tray`, `Seats-tray`, `Active-input-tray`, `Menu-tray`, `Checkbox`, `Radio-button`, `Selector-dropdown`, and `Segmented-button`.

Key specs:
- `Selector-dropdown`: `145x48px`, radius `7px`, fill `#FFFFFF`, stroke `#E0E0E2 1px`; states `Closed`, `Open`.
- `Dropdown-code`: `121x51px`, radius `5px`, fill `#FFFFFF`, stroke `#B6B6B6 1px`; states `Default`, `Filled`, `Open`.
- `Dropdown-sortedBy`: `209x22px`; states `Closed`, `Open`.
- `Tray-dropdown`: `394x234px`, fill `#FFFFFF`.
- `Pop-up-dropdown`: `300x354px`, `Drop-shadow/Card`.

### Calendar and flight booking

- `Calendar-grid`: `356x321px`, vertical, gap `12px`; uses `Bold/6.1`, `Bold/9`.
- `Calendar-row`: `356x44px`, gap `8px`; types `Middle`, `Star & End`.
- `Week-day-calendar`: `321x15px`, gap `44px`; uses `Bold/9`.
- `Calendar-month`: `374x363px`, padding `0 7px`, gap `12px`; uses `Bold/6.1`, `Bold/9`, `Bold/3`, `Light/2`.
- A second `Calendar-month` header pattern is `366x30px`, gap `263px`, space-between alignment; uses `Bold/3`, `Light/2`.
- Related families: `Flight-type`, `Buy-bar`, `Flight-date&name`, `Flight-count-text`, `Flight-text`, `Hour+city-text`, `Flight-course-text`, `Flight-dates-icon`, `Flight-date-calendar-text`, `Flight-price-text`, `Duration-text`, and `Flight+account-type-text`.

### Seat selection and boarding

Families:
`Plane-grid`, `Plane-single-grid`, `Plane-row`, `Plane-image`, `Plane-icon`, `Seat-letters`, `Seat-number`, `Seat-icon`, `Seat-info`, `Seat-type-tray`, `Seats-section`, `Seats-tray`, `Seats-assigned-card`, `Seat-assignation-card`, `Emergency-exit`, `Normal-seats-icon`, `Seats-icon-circle`, `Progress-boarding-pass`, `Boarding-pass`, `Boarding-pass-item-card`, `Boarding-pass-illustration`, `Boarding-pass-progress`, and `Boarding-pass-update-tag`.

- `Seats-icon-circle`: `32.08x32.08px`, radius `100px`, fill `#1B0188`; styles `Blue`, `Green`, `Pink`, `Purple`.
- `Progress-boarding-pass`: `38x39px`, radius `100px`, fill `#0BAEAF`; types `Done`, `Pending`.
- `Boarding-pass-item-card`: `306x191px`.
- `Seats-assigned-card`: `360x234px`, radius `7px`, fill `#FFFFFF`.
- `Seat-assignation-card`: `254x182.08px`, radius `7px`, fill `#FFFFFF`, `Drop-shadow/Card`.

### Icons, logos, and illustrations

Icon families include `LATAM-pass-icon`, `Trips-icon`, `Buy-icon`, `Home-icon`, `Down-arrow`, `Economy-icon`, `Baby-icon`, `Flight-icon`, `Kid-icon`, `Assist-icon`, `Copy-icon`, `Adult-icon`, `Car-icon`, `Arrow-icon`, `Business-icon`, `Reservation-icon`, `External-link-icon`, `Premium-icon`, `Beach-chair-icon`, `Map-icon`, `Calendar-icon`, `Luggage-icon`, `Info-cloud-icon`, `Minus`, `Plus-icon`, `Pig-icon`, `Takeoff&landing-icon`, `Pin-icon`, `Return-icon`, `Discount-icon`, `Ticket-icon`, `Settings-icon`, `Doc-icon`, `Card-icon`, `Question-icon`, `Question-cloud-icon`, `Requirements-icon`, `Clock-icon`, `Opinion-icon`, `Card-doc-icon`, `Manage-trips-icon`, `Phone-icon`, `Upgrade-icon`, `Account-icon`, `User-icon`, and `Flight-admin-icon`.

Logo families:
`LATAM-logo`, `LATAM-big-logo`, and `LATAM-icon-single`.

Illustration and image families:
`Card-illustration`, `Boarding-pass-illustration`, `Seat+window-illustration`, `Vignette`, `Lighthouse-illustration`, `Assist-card-illustration`, `Cactus-illustration`, `Seat-illustration`, `People-illustration`, `Plane-image`, `Loading-illustration`, `Tickets-illustration`, and `Beach-image`.

### Headers, navigation, links, loading, and text

Header families:
`Home-header`, `Main-header`, `Image-header`, `Boarding-header`, `Buy-header`.

Navigation families:
`Nav-bar-single-button`, `Nav-bar`, `Menu-tray`, `Menu-option-button`, `Page-link`, `Link`, `External-link`, and `Definitive-black-link`.

Loading families:
`Loading`, `Blink`, `Loading-illustration`, `Loading-screen-text`, and `Loading-tray`.

Text families:
`Label`, `Title-back`, `Title`, `Italic-title`, `Title-bold+regular`, `Description-text-bold+regular`, `Calendar-description-text`, `Details-text`, `Landing-info-text`, `Details-section`, `Date-text`, and `Price-details-text`.

## Screen patterns

- **Flight search:** header, origin/destination inputs, date and passenger inputs, trip-type controls, and a primary `Big-button`.
- **Calendar selection:** `Calendar-month` contains a month header, weekday row, calendar grid, and `Date-selection-button` cells with default, disabled, middle, and selected states.
- **Flight results and purchase:** `Flight-search-card`, `Flight-card`, `Flight-selection-card`, `Buy-flight-card`, `Buy-bar`, pricing text, flight tags, and directional actions.
- **Trip management:** `Trip-admin-card`, `Past-flight-card`, `Next-flight-card`, `ReservationFlight-card`, `ReservationCode-card`, and related flight detail text.
- **Passenger and luggage flows:** `Passenger-selection-card`, `Frequent-companion-card`, `Luggage-card`, and passenger input families.
- **Seat selection:** aircraft grid families, seat buttons, seat type trays, emergency exit indicators, assigned-seat cards, and progress indicators.
- **Boarding pass:** `Boarding-header`, `Boarding-pass`, `Boarding-pass-item-card`, `Boarding-pass-progress`, update tags, and boarding illustrations.
- **Points and miles:** `Points-card`, `Miles-card`, `Miles-points-card`, `Points&miles-number`, `Plan-card`, `PlanOffer-card`, and `Benefits-card`.
- **Destination and assistance content:** image-led `Destination-card`, `Assist-card`, `Assist-card-illustration`, `Beach-image`, and travel illustrations.
- **Navigation and overlays:** header and nav families combined with dropdowns, trays, pop-up dropdowns, banners, toasts, and loading states.

## Notes for implementers

- Use only the extracted colors and named typography styles.
- Prefer named component families over creating new one-off components.
- Preserve component dimensions, padding, gap, radius, stroke, fill, and effect values where the component is used at its specified size.
- Treat listed variants as explicit states; do not merge `Default`, `Selected`, `Open`, `Closed`, `Filled`, `Outlined`, `Disabled`, or travel-specific types.
- Use `#FFFFFF` for the dominant card and control surface unless a component specifies another fill.
- Use `#EFEDFA`, `#F3F2F7`, and `#FFF9E6` for their specified light surfaces.
- Apply `#EA104C` to pink/red action accents and `#0BAEAF` to teal progress or state indicators where specified.
- Use the extracted shadow styles exactly; no additional elevation values were found.
- No spacing, radius, motion, or grid token collections exist. Reuse explicit component values rather than inventing a global scale.
- Fixed widths are common, especially between `353.6px` and `395px`; preserve them when reproducing the mobile-oriented layouts.
