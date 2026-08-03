---
name: dydx-design-system-community
source: dYdX Design System (Community)
kind: design-system-context
---

# dydx - Design System

## Overview

- Dark dYdX trading interface system with supporting brand assets.
- Primary visual language: dark layered surfaces, light text, green/red trading states, purple accents, compact data-dense controls.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.
- Component families: Brand, Tokens, Loader, IconButton, Radio, Notification, Widgets, Transaction, Position Change, Drafts, Position Info, Position, Market, Sort, Chart, Metric, ETH, Funding, Order Status, Dropdown, Navigation Bar, Tabs, Navigation, Icon, Receipt, Status, Link, Button, Slider, Toggle, Tag, Input.

## Design language

- Use layered dark surfaces rather than a flat background:
  - Base: `#08080C`, `#101018`, `#181825`
  - Elevated layers: `#212131`, `#29293D`, `#303045`, `#38384D`
- Use `#FAFAFD` and `#FFFFFF` for primary/light content.
- Use `#807E98`, `#AFAEC0`, and `#C8C7D8` for secondary and muted text.
- Use green for positive/long/success states and red for negative/short/error states.
- Use purple for ETH and selected accent states.
- Interfaces are compact and information-dense, with frequent 8px radii, 1px borders, and small-to-medium typography.
- Typography tokens use CircularXX; raw interface usage also includes Satoshi and Inter, but named typography tokens are the clearest system definitions.

## Color palette

Ranked by reported usage where available:

### Core text and surfaces

| Usage | Color |
|---|---|
| 2,684 raw uses; 1,913 style uses | `#FFFFFF` |
| 2,998 style uses | `#807E98` |
| 2,008 style uses | `#FAFAFD` |
| 1,576 style uses | `#C8C7D8` |
| 1,752 raw uses; 83 style uses | `#000000` |
| 530 style uses | `#212131` |
| 515 style uses | `#29293D` |
| 450 style uses | `#303045` |
| 334 style uses | `#181825` |
| 192 style uses | `#000000` |
| 160 style uses | `#101018` |
| 41 style uses | `#08080C` |
| 40 style uses | `#A1A1AA` |
| 12 style uses | `#18181B` |
| 4 style uses | `#0F172A` |
| 2 style uses | `#1E293B` |
| 2 style uses | `#374151` |

### Semantic colors

| Usage | Color | Meaning |
|---|---|---|
| 1,269 style uses; 79 raw uses | `#3ED9A4` | Positive, long, success, primary green |
| 871 style uses | `#E45555` | Negative, short, error |
| 744 style uses | `#3ED9A4` | Original green |
| 383 style uses | `#E45555` | Original red |
| 202 style uses | `#6966FF` | Purple accent |
| 158 raw uses; 136 style uses | `#7A57DD` | ETH asset accent |
| 100 style uses | `#FFCC48` | Yellow |
| 6 style uses | `#FFB648` | Yellow accent |
| 102 raw uses | `#0052FF` | Blue accent |
| 270 raw uses | `#E4761B` | Orange |
| 120 raw uses | `#F6851B` | Orange |
| 96 raw uses | `#CD6116` | Dark orange |
| 96 raw uses | `#E4751F` | Orange |

### Transparency and overlays

- `#FFFFFF1A`, `#FFFFFF33`, `#FFFFFF66`, `#FFFFFF9A`, `#FFFFFFB2`
- `#0000000F`, `#00000014`, `#0000001A`, `#00000033`
- `#3ED9A433`: green at 20% opacity.
- `#E4555524`, `#E4555533`: red overlays.
- `#55E3B026`: green overlay.

## Type scale

All listed line heights and tracking values are from the source. Tracking is `0px` throughout.

### Desktop

| Token | Font | Size | Line height |
|---|---|---:|---:|
| Desktop/Mini | CircularXX Book, weight 450 | 12px | 108.33% |
| Desktop/Typography/Mini | CircularXX Book, weight 450 | 12px | 108.33% |
| Desktop/Small | CircularXX Book, weight 450 | 13.5px | 108.33% |
| Desktop/Typography/Small | CircularXX Book, weight 450 | 13.5px | 108.33% |
| Desktop/Typography/Small+ | CircularXX Medium, weight 500 | 13.5px | 116.67% |
| Desktop/Base | CircularXX Book, weight 450 | 15px | 116.67% |
| Desktop/Typography/Base | CircularXX Book, weight 450 | 15px | 108.33% |
| Desktop/Base+ | CircularXX Medium, weight 500 | 15px | 108.33% |
| Desktop/Typography/Base+ | CircularXX Medium, weight 500 | 15px | 108.33% |
| Desktop/Medium_ | CircularXX Regular, weight 400 | 18px | 108.33% |
| Desktop/Typography/Medium | CircularXX Book, weight 450 | 18px | 108.33% |
| Desktop/Large | CircularXX Medium, weight 500 | 22px | 108.33% |

### Mobile

| Token | Font | Size | Line height |
|---|---|---:|---:|
| Mobile/Typography/Tiny- | CircularXX Regular, weight 400 | 11px | 108.33% |
| Mobile/Typography/Tiny | CircularXX Book, weight 450 | 11px | 108.33% |
| Mobile/Typography/Tiny+ | CircularXX Medium, weight 500 | 11px | 108.33% |
| Mobile/Typography/Mini | CircularXX Book, weight 450 | 13px | 108.33% |
| Mobile/Mini | CircularXX Medium, weight 500 | 13px | 110.93% |
| Mobile/Typography/Mini+ | CircularXX Medium, weight 500 | 13px | 108.33% |
| Mobile/Typography/Small | CircularXX Book, weight 450 | 14.5px | 108.33% |
| Mobile/Typography/Base | CircularXX Book, weight 450 | 16px | 108.33% |
| Mobile/Typography/Base+ | CircularXX Medium, weight 500 | 16px | 108.33% |
| Mobile/Typography/Medium | CircularXX Book, weight 450 | 18px | 108.33% |
| Mobile/Typography/Medium+ | CircularXX Medium, weight 500 | 18px | 108.33% |
| Mobile/Typography/Extra | CircularXX Book, weight 450 | 25px | 108.33% |
| Mobile/Typography/Extra+ | CircularXX Medium, weight 500 | 25px | 108.33% |
| Mobile/Typography/Large+ | CircularXX Medium, weight 500 | 22px | 108.33% |

Number tokens use the same sizes and styles as their corresponding typography tokens. `Mobile/Number/Medium#` uses 18px / 24px.

## Spacing scale

_None found in source._

Component-level spacing values are documented with their components. Explicit values include:

- IconButton gap: `8px`
- Position Info gap: `5px`
- Position gap: `8px`
- Market gap: `54px`
- Sort gap: `7px`
- Link gap: `4px`
- Button padding: `5.5px 10px`
- Input padding: `6px 10px`, gap `20px`
- Tag padding: `2px 4px`, gap `10px`
- Status padding: `15.1px`, gap `15.1px`
- Drafts horizontal padding: `20px`
- Brand horizontal padding: `20px`, gap `40px`

## Radius scale

_No radius variables found in source._

Component radii:

- Widgets, Receipt, Position Change, Metric, Toggle, Input, Status: `8px`
- Button: `6px`
- Tag: `4px`
- Brand: `5px`
- ETH and Order Status: `20px`
- Tubes decorative vector: `100px`

## Elevation & effects

- Shadow/base:
  - Drop shadow `2px`, offset `0 1px`, color `#0000000F`
  - Drop shadow `3px`, offset `0 1px`, color `#0000001A`
- Shadow / Medium:
  - Drop shadow `18px`, offset `0 3px`, color `#0000000F`
- Shadow / Large:
  - Drop shadow `20px`, offset `0 4px`, color `#00000014`
- Shadow/Extra:
  - Drop shadow `30px`, offset `0 5px`, color `#0000001A`
- Drafts uses background blur `53px`.
- Borders are commonly `1px`, using dark layer colors or translucent white.

## Components

Use only the documented component families and variants below.

- **Brand** — `131x41px`, white fill. Variants: Type `Chain`, `Logo`, `Mark`; Color `Dark`, `Light`.
- **Tokens** — `50x50px`, white fill. Token variants include `ada`, `ape`, `apt`, `arb`, `atom`, `avax`, `blur`, `btc`, `comp`, `crv`, `dot`, `eth`, `icp`, `ldo`, `link`, `matic`, `mkr`, `near`, `op`, `pepe`, `sei`, `snx`, `sol`, `sui`, `trx`, `uni`, `usdc`, `wld`, `xlm`, `xrp`.
- **Loader** — `32x32px`. Shape: `Circle`, `Dots`, `Grid`, `Rounded`, `Square`. Color: `Dark`, `Extradark`, `Light`, `Purple`.
- **IconButton** — `53x73px`, vertical, gap `8px`, white fill, Satoshi Medium `14.5px`. Types: `Disconnect`, `Settings`, `Tutorials`, `Wallets`. View: `Profile`. Size: `Base`, `Small`.
- **Radio** — `393x80px`, `1px` stroke, full width. View: `Settings`. State: `Active`, `Default`.
- **Notification** — `390x51px`. Types: `Deposit`, `Fill`, `Liquidation`, `Price Alert`, `Verification`, `Warning`, `Withdraw`.
- **Widgets** — `364x163px`, `12px` radius, fill `#29293D`. View: `Profile`. Types: `Fees`, `History`, `Leaderboards`, `Rewards`.
- **Transaction** — `36x36px`. Status: `Complete`, `Error`, `Pending`.
- **Position Change** — `342x81px`, `8px` radius, fill `#29293D`. Type: `Changed`, `In Progress`.
- **Drafts** — `395x106px`, fill `#212131`, `1px` stroke using `#38384D`, background blur `53px`. State: `In Progress`, `Null`.
- **Position Info** — `60x47px`, vertical, gap `5px`. Statistic: `Leverage`, `Statistic2`.
- **Position** — `162x142px`, vertical, gap `8px`. Side: `Long`; Market: `ETH`; Size: `100%`, `50%`; Null: `False`.
- **Market** — `360x44px`, horizontal, gap `54px`, space-between. Trend: `Increase`, `Trend2`.
- **Sort** — `60x25px`, horizontal, gap `7px`. Active: `False`, `True`.
- **Chart** — `356x181px`. View: `Portfolio`. State: `Default`, `Null`, `Pressed`.
- **Metric** — `116x64px`, `8px` radius, fill `#212131`. Types: `Buying Power`, `Collateral`, `Equity`, `Leverage`, `Margin`, `Open Interest`.
- **ETH** — `32x32px`, `20px` radius, fill `#212131`. State: `Error`, `Liquidated`, `Success`.
- **Funding** — `42x39px`. Payment: `Received`, `Sent`.
- **Order Status** — `32x32px`, `20px` radius, fill `#212131`. State: `Failed`, `Filled`, `Open`, `Partial Fill`.
- **Dropdown** — `357x355px`. View: `Portfolio`. Size: `Large`, `Small`. Type: `Filter`, `View`.
- **Navigation Bar** — `394x94px`, fill `#181825`. Active: `Portfolio`. Style: `Native`.
- **Tabs** — `70x29px`, white fill. View: `General`. State: `Active`, `Default`. Number: `False`, `True`.
- **Navigation** — `153x31px`. View: `Portfolio`. State: `Active`, `Default`.
- **Icon** — `40x40px`, white fill. Type: `Back`, `Star`, `Star (Filled)`, `Warning`.
- **Receipt** — `342x212px`, `8px` radius, fill `#181825`. View: `Caution`, `Reveal`, `Transfer`. Expanded: `False`, `True`.
- **Status** — `323x73.98px`, `8px` radius, horizontal, padding `15.1px`, gap `15.1px`, fill `#29293D`. Type: `Generate`, `Verify`. State: `Complete`, `Pending`.
- **Link** — `164x21px`, horizontal, gap `4px`. Type: `Text & Icon`.
- **Button** — `39x30px`, `6px` radius, padding `5.5px 10px`, gap `1px`, fill `#303045`, `1px` stroke. Views: `General`, `Markets`, `Onboarding`, `Profile`, `Trade`. Types include `About`, `Buy`, `Close`, `Disabled`, `Primary`, `Remember`, `Search`, `Secondary`, `Sell`, `Shortcut`, wallet options, and zoom options. State: `Active`, `Default`. Icon: `False`, `True`. Size: `Base`, `Medium`, `Small`.
- **Slider** — `113.5x24px`. Type: `Leverage`. Side: `Long`, `Short`. Variant: `Default`, `New`.
- **Toggle** — `40x40px`, `8px` radius, fill `#38384D`, `1px` stroke. State: `Active`, `Default`. Supports asset, leverage, market, order book, order type, view, funding, orders, price, and recent variants.
- **Tag** — `31x18px`, `4px` radius, padding `2px 4px`, gap `10px`, fill `#38384D`. Types: `Asset`, `Number (Long)`, `Number (Short)`, `Side (Long)`, `Side (None)`, `Side (Short)`. Size: `Medium`, `Small`.
- **Input** — `173x56px`, `8px` radius, horizontal, padding `6px 10px`, gap `20px`, fill `#29293D`, `1px` stroke using `#38384D`. Types: `Amount`, `Asset`, `Default`, `Dropdown`, `Leverage`, `Source`. Context: `Trade`, `Transfer`. Width: `25%`, `50%`, `Full`. Size: `Default`, `Large`, `Small`. Toggle: `False`, `Nested`, `True`.
- **Icon** — circular icon variant, `56x56px`. Icons: `Gear`, `Liquid`, `Reward`, `Shield`.

## Screen patterns

- **Brand Assets / Copyright** — dark brand-assets section with a centered copyright statement. The source shows a large heading-style text treatment and a dark background with translucent border.
- **Brand Assets / Backgrounds** — reusable decorative backgrounds including Wave, Stack, Grid, Diamond, Dots, Fan, Interface, Speed, Tech, Slant, Step, Rectangles, Horizon grid, Isometric grid, Arrows, Tubes, and Squares. These use dark base surfaces, geometric vectors, and low-contrast strokes.
- **Brand Assets / Branding** — brand component set containing logo, mark, and chain variants in dark and light color treatments.
- Trading interface patterns represented by the component set include portfolio navigation, charts, market rows, positions, metrics, orders, receipts, funding, notifications, dropdowns, tabs, inputs, toggles, sliders, and status feedback.

## Notes for implementers

- Prefer the named CircularXX typography tokens for new UI. Preserve the listed weight, size, and line-height combinations exactly.
- Keep surfaces dark and layered; do not replace the palette with light neutrals.
- Use green and red semantically for trading direction and status, not as arbitrary decoration.
- Use `#7A57DD` for ETH-specific asset treatment and `#6966FF` for purple accents.
- Use the documented component dimensions when reproducing fixed-size controls.
- Component-specific radii and spacing are available even though global radius and spacing scales are absent.
- Use translucent white or black overlays only where listed.
- Do not infer additional tokens from decorative source colors that are not present in the allowed palette.
- The raw extraction includes unstyled Satoshi and Inter usage; when a component explicitly specifies Satoshi, retain that component typography.
