---
name: groww-app-ui-community
source: Groww App UI (Community)
kind: design-system-context
---

# groww - Design System

## Overview

Mobile-first investment app UI presented on 412×917px screens. The primary screens are:

- **Stocks:** market indices, category tabs, stock cards, product tools, market segments, and bottom navigation.
- **Individual Stock Page:** stock summary, performance chart, timeframe controls, stock SIP entry, and content tabs.
- **Thumbnail:** 1920×1080px presentation cover for the app design.

No local variables, paint styles, text styles, spacing styles, radius styles, motion styles, effect styles, or grid styles were found.

## Design language

- Clean, white-first financial interface with strong black text.
- Green communicates positive market movement and active states.
- Red communicates negative market movement.
- Blue identifies the active bottom-navigation destination.
- Content is organized into outlined cards with rounded corners.
- Navigation and filters use rounded pill controls.
- Stock data uses compact typography with clear hierarchy: company name, price, then percentage movement.
- Sections commonly use a heading followed by horizontally arranged cards.
- The visual language is restrained and data-focused, with minimal decoration.

## Color palette

Ranked by raw usage count:

| Color | Usage | Typical role |
|---|---:|---|
| `#000000` | 312 | Primary text, icons, borders |
| `#E8E8E8` | 60 | Card borders, inactive controls, separators |
| `#00B386` | 54 | Positive movement, active indicators, selected tabs |
| `#757575` | 43 | Secondary text and supporting labels |
| `#FFFFFF` | 32 | Screen and surface backgrounds |
| `#9B9B9C` | 21 | Inactive bottom-navigation icons and labels |
| `#808080` | 13 | Secondary neutral content |
| `#4E5ACC` | 11 | Active Stocks bottom-navigation icon and label |
| `#B7B7B7` | 10 | Neutral UI content |
| `#1E1E1E` | 7 | Dark icon detail |
| `#ECECEC` | 7 | Selected pill backgrounds |
| `#F35D5D` | 7 | Negative market movement |
| `#32B495` | 6 | Green accent variation |
| `#473636` | 5 | Brown accent variation |
| `#8D8D8D` | 5 | Neutral text |
| `#9B9999` | 5 | Inactive timeframe labels |
| `#DADADA` | 5 | Neutral surface or border |
| `#F5F6F6` | 4 | Light neutral surface |

Use only the palette colors above for UI color decisions. Image fills are separate assets, not color tokens.

## Type scale

Roboto is the primary UI typeface.

| Typeface | Weight | Size | Usage count |
|---|---|---:|---:|
| Roboto | Regular | 30px | 55 |
| Roboto | Medium | 14px | 48 |
| Roboto | Regular | 13px | 42 |
| Roboto | Regular | 14px | 37 |
| Roboto | Medium | 15px | 30 |
| Roboto | Medium | 18px | 28 |
| Roboto | Regular | 15px | 28 |
| Roboto | Medium | 16px | 21 |
| Roboto | Medium | 13px | 19 |
| Roboto | SemiBold | 13px | 18 |
| Roboto | Medium | 11px | 17 |
| Roboto | Medium | 20px | 6 |
| Roboto | Regular | 12px | 6 |
| Roboto | Medium | 12px | 4 |

Observed hierarchy:

- 30px Roboto Regular
- 20px Roboto Medium
- 18px Roboto Medium
- 16px Roboto Medium
- 15px Roboto Medium or Regular
- 14px Roboto Medium or Regular
- 13px Roboto Medium, Regular, or SemiBold
- 12px Roboto Medium or Regular
- 11px Roboto Medium

The thumbnail also uses Inter Medium at 80px and 24px.

## Spacing scale

No spacing variables were found.

Observed spacing and layout values include:

- 0px padding
- 1px borders and separators
- 4px gaps
- 5px vertical gaps
- 8px gaps
- 10px gaps
- 12px padding
- 27px horizontal padding
- 84px, 94px, and 153px navigation or alignment gaps

Common compact controls use `12px 27px` horizontal and vertical padding values as extracted.

## Radius scale

Observed radii:

- `10px`: cards, index panels, stock SIP panel, stock information group
- `12px`: one rounded stock image
- `30px`: mobile screen frames
- `40px`: pill tabs and timeframe controls
- `50px`: circular profile or icon surfaces
- `0px`: square or explicitly unrounded groups

## Elevation & effects

- Bottom navigation uses a `5px` drop shadow with offset `0 0`.
- No local effect styles were found.
- No other elevation values were extracted.

## Components

_None found in source._

## Screen patterns

### Stocks

- 412×917px white mobile screen with 30px outer radius.
- Header combines logo, `Stocks` title, profile image, search icon, and QR-code icon.
- Two 195×68px index cards use 10px radius and 1px `#E8E8E8` borders.
- Category navigation uses 37px-high pill tabs with 40px radius.
- Selected pills use `#ECECEC` fill and a 1px `#000000` border.
- Stock discovery sections use 18px Roboto Medium headings.
- Stock cards are 176×160px, use 10px radius, and a 1px `#E8E8E8` border.
- Positive values use `#00B386`; negative values use `#F35D5D`.
- Bottom navigation is a 64px-high white surface with three destinations: Stocks, Mutual Funds, and UPI.

### Individual Stock Page

- 412×917px white mobile screen with 30px outer radius.
- Header contains a back arrow and decorative controls.
- Stock information includes sector pill, company name, price, percentage movement, and timeframe.
- Chart area is 372px wide with a 251px chart image and a 1px separator.
- Timeline controls are 29px-high pills with 40px radius and options `1D`, `1W`, `1M`, `1Y`, `5Y`, and `ALL`.
- Active timeframe uses `#ECECEC` fill and `#000000` border; inactive labels use `#9B9999`.
- Stock SIP panel is 372×89px with 10px radius and a 1px `#E8E8E8` border.
- Content tabs are `Overview`, `News`, and `Events`; the active tab uses `#00B386`.
- The active tab indicator is a 4px-high green bar over a 4px-high neutral bar.

### Thumbnail

- 1920×1080px white presentation frame.
- Uses a large green graphic area and black Inter Medium typography.
- The title is 80px; creator and email text are 24px.

## Notes for implementers

- Prefer Roboto for all product UI; use Inter only for the extracted thumbnail treatment.
- Preserve the white background, black primary text, outlined cards, rounded pills, and compact financial-data hierarchy.
- Use `#00B386` for positive values and active content indicators, `#F35D5D` for negative values, and `#4E5ACC` for the active Stocks bottom-navigation destination.
- Use 10px radius for cards, 40px radius for pills, 30px radius for mobile screen shells, and 50px for circular elements where indicated.
- Do not introduce additional colors, type sizes, spacing tokens, radius values, component families, or effects beyond those extracted here.
