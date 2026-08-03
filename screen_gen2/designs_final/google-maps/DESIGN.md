---
name: google-maps-ui-kit-ios-community
source: Google Maps UI Kit – iOS (Community)
kind: design-system-context
---

# google-maps - Design System

## Overview

Google Maps-style iOS UI kit centered on map-based navigation, search, location actions, place previews, category filters, and bottom-sheet content.

Observed screens:
- **Thumbnail:** presentation layout with a Google Maps preview panel and iPhone mockup.
- **Home Page:** map view with search, category pills, weather and layers controls, side actions, bottom navigation, and a location preview card.
- **Restaurant → Preview:** map view with a restaurant marker and place preview bottom sheet.

## Design language

- Use Google Sans for product UI typography.
- Use compact, rounded controls with frequent `100px` pill radii.
- Primary map actions use teal fills and white icons.
- Secondary controls use white fills with layered drop shadows.
- Bottom sheets are white, rounded at the top, and elevated with upward-facing shadows.
- Navigation uses a pale teal background: `#EFF5F6`.
- Icons are predominantly `24x24px`; compact icon treatments use `18x18px`.
- Layouts are designed around an iPhone-sized `393px` viewport and a `4`-column mobile grid.
- Category filters are horizontally arranged white pills with icon-plus-label content.
- Active navigation states use a pale teal selection background.

## Color palette

Ranked by raw usage where counts are available:

| Color | Raw uses | Observed use |
|---|---:|---|
| `#000000` | 250 | Black UI elements, system text, indicators |
| `#FFFFFF` | 141 | Primary surfaces, cards, controls, icons |
| `#D9D9D9` | 52 | Neutral fills and dividers |
| `#F4F4F4` | 51 | Light neutral surfaces |
| `#323232` | 25 | Dark neutral UI |
| `#767B7F` | 22 | Secondary text |
| `#9747FF` | 9 | Accent color in source |
| `#DADCE0` | 9 | Borders and handle stroke |
| `#007B8B` | 7 | Teal action and link color |
| `#1F1F1F` | 6 | Primary dark text and icons |
| `#C40000` | 6 | Dark red marker stroke |
| `#202124` | 5 | Dark text |
| `#EFF5F6` | 5 | Bottom navigation background |
| `#0000001A` | 4 | Subtle stroke or black transparency |
| `#FF2924` | 4 | Red map marker fill |

Additional component colors:
- `#007D8D`: primary `Button /Action` fill.
- `#00000029`, `#00000024`, `#00000014`, `#00000005`, `#00000000`: pills shadow layers.
- `#00000008`, `#00000005`, `#00000000`: bottom-sheet shadow layers.
- `#00000040`: location shadow.
- `#00000038`, `#00000030`, `#0000001C`, `#00000008`, `#00000000`: primary large-button shadow layers.
- `#9F9D9D96`, `#9F9D9D82`, `#9F9D9D4D`, `#9F9D9D17`, `#9F9D9D03`: secondary large-button shadow layers.
- `#00000014`, `#00000012`, `#0000000A`, `#00000003`, `#00000000`: weather-widget shadow layers.
- `#1F1F1FCC`: `publication-date`.
- `360-widget` gradient: `#1F1F1F` at `0%` to `#1F1F1F33` at `89%`.

## Type scale

Named Google Sans tokens:

| Token | Family | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---|---:|
| `H1` | Google Sans | 400 | `22px` | auto | `0px` |
| `H2` | Google Sans | 400 | `19px` | `26px` | `0px` |
| `b1` | Google Sans | 500 | `14px` | auto | `0px` |
| `b2` | Google Sans | 400 | `14px` | auto | `0px` |
| `b3` | Google Sans | 500 | `12px` | auto | `0.2px` |
| `b4` | Google Sans | 400 | `12px` | auto | `0px` |
| `Nav Bar` | Google Sans | 500 | `12px` | auto | `0.2px` |

Most-used named styles:
- `b2`: `71` uses.
- `b1`: `69` uses.
- `b3`: `25` uses.
- `b4`: `13` uses.
- `Nav Bar`: `12` uses.
- `H1`: `10` uses.
- `H2`: `8` uses.

Additional raw typography:
- Inter Regular, `16px`.
- Inter Regular, `12px`.
- Inter SemiBold, `16px`.
- Inter SemiBold, `12px`.
- Inter Bold, `16px`.
- Inter Bold, `32px`.
- Google Sans Bold, `77.65px`.
- SF Pro Semibold, `17px`.

## Spacing scale

No spacing variables were found. Observed concrete spacing:

- Mobile grid: `4` columns, `75.25px` section width, `20px` gutter, stretch alignment.
- `location-card`: padding `34 20 34 20px`, gap `20px`; alternate instance padding `24 16 24 16px`, gap `20px`.
- `list-item`: padding `15 16 15 16px`, gap `37px`.
- `Button /Action`: padding `8 16 8 12px`, gap `8px`.
- `search-bar`: padding `10 9 10 16px`, gap `8px`.
- `tab-bar`: padding `0 16 0 16px`, gap `30px`.
- `navbar`: padding `4 34 33 34px`, gap `47px`.
- `pills`: padding `7 10 7 10px`, gap `4px`.
- `weather-widget`: padding `9 8 9 8px`, gap `1px`.
- `side-action`: gap `16px`.
- `header actions`: gap `74px`.
- `user-info`: gap `48px`.
- `navbar-box`: gap `4px`.
- `tab`: gap `12px`.

## Radius scale

No radius variables were found. Observed radii:

- `100px`: pills, circular buttons, tabs’ selected background, account photos, restaurant logos, home indicator.
- `16px`: `picture`.
- `10/10/0/0px`: `location-card` top corners.
- `8px`: `360-widget`, `weather-widget`.
- `29px`: iPhone screen frame.
- `20px`: map user-location marker.
- `107.69px`: `account-photo`.
- `48px`: thumbnail presentation frames.

## Elevation & effects

- **Pills:**  
  `drop_shadow 1px offset 0 0 #00000029`  
  `drop_shadow 1px offset 0 1 #00000024`  
  `drop_shadow 2px offset 0 3 #00000014`  
  `drop_shadow 2px offset 0 5 #00000005`  
  `drop_shadow 2px offset 0 8 #00000000`

- **Bottom sheet:**  
  `drop_shadow 1px offset 0 -1 #00000008`  
  `drop_shadow 3px offset 0 -3 #00000008`  
  `drop_shadow 4px offset 0 -6 #00000005`  
  `drop_shadow 4px offset 0 -11 #00000000`  
  `drop_shadow 5px offset 0 -17 #00000000`

- **Location:** `drop_shadow 4px offset 0 1 #00000040`.

- **Primary large button:**  
  `drop_shadow 3px offset 0 1 #00000038`  
  `drop_shadow 6px offset 0 6 #00000030`  
  `drop_shadow 8px offset 0 13 #0000001C`  
  `drop_shadow 10px offset 0 24 #00000008`  
  `drop_shadow 10px offset 0 37 #00000000`

- **Secondary large button:**  
  `drop_shadow 1px offset 0 0 #9F9D9D96`  
  `drop_shadow 1px offset 0 1 #9F9D9D82`  
  `drop_shadow 2px offset 0 3 #9F9D9D4D`  
  `drop_shadow 2px offset 0 5 #9F9D9D17`  
  `drop_shadow 2px offset 0 8 #9F9D9D03`

- **Search bar:**  
  `drop_shadow 2px offset 0 1 #00000038`  
  `drop_shadow 3px offset 0 3 #00000030`  
  `drop_shadow 4px offset 0 7 #0000001C`  
  `drop_shadow 5px offset 0 13 #00000008`  
  `drop_shadow 6px offset 0 20 #00000000`

- **Weather widget:**  
  `drop_shadow 3px offset 0 1 #00000014`  
  `drop_shadow 5px offset 1 4 #00000012`  
  `drop_shadow 6px offset 3 10 #0000000A`  
  `drop_shadow 7px offset 6 18 #00000003`  
  `drop_shadow 8px offset 9 27 #00000000`

## Components

### Icon components

The following icon families are `24x24px` unless noted otherwise:

`restaurant`, `place`, `360`, `navigation`, `star`, `layers`, `mic`, `near_me`, `directions`, `turned_in_not`, `location_pin`, `earth-outlined`, `restaurant-filled`, `watch-outlined`, `location-outlined`, `more-outlined`, `arrow-outlined`, `360-outlined`, `close-outlined`, `navigation-filled`, `share-outlined`, `car-filled`, `star-filled`, `layers-outlined`, `grocery-filled`, `hotel-filled`, `gasstation-filled`, `home-filled`, `mic-filled`, `near me-outlined`, `directions-filled`, `add circle-outlined`, `turned in not-outlined`, `location-filled`.

Additional icon size:
- `directions_car`: `18x18px`.

### Map and identity components

- `location`: `40x60px`; variants `type: marked/user`.
- `location-card`: `393x481px`; radius `10/10/0/0px`; padding `34 20 34 20px`; gap `20px`; fill `#FFFFFF`; effect `bottom sheet`; text styles `b3`, `b1`, `b4`, `H1`; variants `status: default/full page/preview`.
- `google-point`: `28x28px`; fill `#FFFFFF`.
- `account-photo`: `32x32px`; radius `107.69px`; fill `#FFFFFF`.
- `restaurant-logo`: `40x40px`; radius `100px`; fill `#FFFFFF`; stroke `#EBEBEB 1px`.
- `user-photo`: `32x32px`; radius `100px`; image fill.
- `picture`: `353x320px`; radius `16px`; variants `size: large/medium/small`.

### Navigation and action components

- `Button /Action`: `128x40px`; radius `100px`; padding `8 16 8 12px`; gap `8px`; fill `#007D8D`; text `b1`; variant `primary: off/on`.
- `Button /Round`: `56x56px`; radius `100px`; padding `2px`; gap `10px`; fill `#FFFFFF`; effect `btn-large-secondary`; variants `Size: Big/Small`, `Primary: Off/On`, `Secondary: Off/On`.
- `Button /Ghost`: `44x18px`; gap `10px`; text `b1`.
- `search-bar`: `369x48px`; radius `100px`; padding `10 9 10 16px`; gap `8px`; fill `#FFFFFF`; search-bar shadow; text `H1`; variant `typed: Off/On`.
- `navbar`: `393x90px`; padding `4 34 33 34px`; gap `47px`; fill `#EFF5F6`; text `Nav Bar`.
- `navbar-box`: `64x53px`; gap `4px`; text `Nav Bar`; variant `on tap: off/on`.
- `tab`: `64x35px`; gap `12px`; text `b1`; variant `selected: off/on`.
- `tab-bar`: `408x35px`; padding `0 16 0 16px`; gap `30px`; stroke `#E3E3E3 1px`; text `b1`.
- `header actions`: `361x24px`; gap `74px`; space-between alignment.
- `side-action`: `56x128px`; vertical layout; gap `16px`.
- `handle`: `56x0px`; fill `#FFFFFF`; handle line uses `#DADCE0 3px`.

### Content and status components

- `list-item`: `393x67px`; horizontal layout; padding `15 16 15 16px`; gap `37px`; fill `#FFFFFF`; stroke `#DADCE0 1px`; text `b2`; variants `type: location/reserve/time/webpage`.
- `list-item/info`: `189x80px`; vertical layout; text `b2`, `H2`.
- `status-restaurant`: `36x18px`; gap `10px`; text `b2`.
- `pills`: `71x32px`; radius `100px`; padding `7 10 7 10px`; gap `4px`; fill `#FFFFFF`; effect `pills`; text `b1`.
- `360-widget`: `56x56px`; radius `8px`; stroke `#FFFFFF 2.3px`; effect `pills`.
- `weather-widget`: `55x40px`; radius `8px`; padding `9 8 9 8px`; gap `1px`; fill `#FFFFFF`; weather-widget effect; text `b2`.
- `user-info`: `353x33px`; gap `48px`; text `b1`, `b4`.

### Documentation template components

- `@FontDocTemplate`: `1520x15px`; gap `20px`; fill `#FFFFFF`; text Inter Regular `12px`.
- `@VariableHeaderTemplate`: `58x19px`; text Inter Bold `16px`.
- `@VariableHTypeTemplate`: `38x19px`; text Inter Regular `16px`.
- `@VariableRowValueTemplate`: `300x106px`; vertical gap `12px`; text Inter SemiBold `12px`, Inter Regular `12px`, Inter Regular `16px`.
- `@VariableTitleTemplate`: `71x39px`; fill `#FFFFFF`; text Inter Bold `32px`.
- `@VariableNameTemplate`: `200x19px`; fill `#FFFFFF`; text Inter SemiBold `16px`.

## Screen patterns

- **Map home screen**
  - Use a `393x852px` white iPhone-sized frame.
  - Place the map as the full background.
  - Position the `search-bar` near the top.
  - Place horizontal `pills` below the search control.
  - Pair `weather-widget` and a round `layers-outlined` action in a horizontal control row.
  - Place a vertical `side-action` near the lower-right area with a white location action above a teal directions action.
  - Use a `navbar` at the bottom with three `navbar-box` items.
  - Show `location-card` as a bottom sheet when a place preview is active.

- **Place preview**
  - Use a white `location-card` attached to the bottom edge.
  - Include a centered `handle` at the top.
  - Use `H1` for the place title.
  - Follow the title with `user-info` and a `picture`.
  - Use the `bottom sheet` effect and top-corner radius `10/10/0/0px`.
  - Restaurant previews use map markers and restaurant-specific content such as `restaurant-logo`, `status-restaurant`, and `list-item/info`.

- **Bottom navigation**
  - Use `#EFF5F6` as the navigation surface.
  - Each `navbar-box` is `64x53px`, with a `64x32px` icon area and `Nav Bar` label.
  - Active navigation uses a pale teal rounded background; inactive content uses neutral dark colors.

- **Search and category controls**
  - Use white rounded controls with `100px` radii.
  - Search combines `google-point`, `H1` placeholder text, `mic-filled`, and `account-photo`.
  - Category filters use `pills` with an `18x18px` icon and `b1` label.

## Notes for implementers

- Prefer named typography tokens `H1`, `H2`, `b1`, `b2`, `b3`, `b4`, and `Nav Bar` over raw font styles.
- Use only the documented component families and variants.
- Keep standard icon instances at `24x24px`; use `18x18px` for compact pill icons and `directions_car`.
- Preserve the distinction between `#007B8B` and `#007D8D`: both occur in the source, with `#007D8D` specified for `Button /Action`.
- Apply the complete shadow stacks rather than replacing them with a single generic shadow.
- Use white surfaces for cards, search, pills, round actions, and place previews.
- No local variable collections, spacing variables, radius variables, or motion variables were found.
- The source contains image assets and map imagery, but their hashes do not define reusable color or sizing tokens.
