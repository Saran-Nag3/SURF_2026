---
name: ng-news-edit-mobile-app-community
source: NG News Edit Mobile App (Community)
kind: design-system-context
---

# williams - Design System

## Overview

- Mobile news-editing app design for a 375×812px viewport.
- Primary flows: splash, three onboarding screens, sign up, sign in, and home.
- Brand text: “NG News Edit”.
- Product positioning: short, precise news reading.
- No local variable collections found.

## Design language

- Editorial and content-first, combining serif typography with sans-serif interface text.
- Predominantly white surfaces with black text and thin black or translucent black rules.
- News content is presented as numbered, bordered cards in a horizontal carousel.
- Onboarding uses centered content cards, pagination dots, and a skip action.
- Authentication uses outlined fields with large rounded corners and full-width continuation buttons.
- Navigation uses a bottom bar with Home, Saved, and Settings.

## Color palette

Semantic colors:

| Token | Value | Usage |
|---|---|---|
| dark | `#1D1D1D` | Dark brand text |
| primary | `#ECF4F6` | Primary light surface |
| white / Neutral/White | `#FFFFFF` | Main surfaces and button text |
| secondary | `#F8F8F8` | Secondary light surface |
| Secondary | `#014EB1` | Secondary/action text |
| Secondary | `#BE71FF` | Additional secondary token |
| Yellow Primary | `#FFBB54` | Highlight color |
| Gray 2 | `#4F4F4F` | Gray text |
| Base/Black | `#161C2B` | Dark base |
| Fill/Dark/Main Dark | `#2E2C34` | Dark component text |

Raw colors ranked by usage:

| Value | Uses |
|---|---:|
| `#000000` | 704 |
| `#FFFFFF` | 91 |
| `#D9D9D9` | 36 |
| `#0000004D` | 25 |
| `#0000001A` | 24 |
| `#00000080` | 22 |
| `#8C8C8C` | 17 |
| `#999797` | 17 |
| `#00000017` | 12 |
| `#A9A4A4` | 12 |
| `#BBBBBB` | 12 |
| `#FFF6F6` | 12 |

Additional source colors:

`#00000000`, `#00000005`, `#00000033`, `#0000004D`, `#00000080`, `#014EB1`, `#19104E`, `#212121`, `#222831`, `#242E42`, `#333333`, `#34C759`, `#535353`, `#7A7979`, `#847C7C`, `#8D8484`, `#999797`, `#9B9696`, `#9B9B9A`, `#9E9E9E`, `#A9A4A4`, `#A9A9AA`, `#AAA4A4`, `#AFAFAF`, `#BE71FF`, `#C6C5C5`, `#D1D1D6`, `#D2AD32`, `#EBEBF54D`, `#ECF4F6`, `#EEEEEE`, `#F8F8F8`, `#F9F6EE`, `#FBC02D`, `#FBFBFB`, `#FF9201`, `#FFAB41`, `#FFBB54`, `#FFD60A`, `#FFEB3B`, `#FFEB3B80`, `#FFF6F6`, `#FFFBF4`.

## Type scale

| Role | Typeface | Weight | Size | Tracking | Uses |
|---|---|---:|---:|---:|---:|
| Display raw | Poppins | 500 | 128px | 0px | 6 |
| H1 | Montserrat | 700 | 48px | 0px | 19 style uses |
| H1 | Times New Roman BoldMT | 700 | 32px | 0px | — |
| Raw heading | Plus Jakarta Sans SemiBold | 600 | 30px | — | 28 |
| H2 | Times New Roman BoldMT | 700 | 24px | 0px | — |
| H2 | Montserrat | 700 | 24px | 0px | — |
| H3 | Times New Roman BoldMT | 700 | 20px | 0px | 47 style uses |
| Body | Poppins | 400 | 16px | 0px | 12 style uses |
| Paragraph | Times New Roman TimesNewRomanPSMT | 400 | 16px | 0px | 34 style uses |
| Raw body | Poppins Medium | 500 | 16px | — | 15 |
| Raw body | Times New Roman BoldMT | 700 | 16px | — | 48 |
| Status text | SF Pro Text Semibold | 600 | 15px | — | 21 |
| Small text | Times New Roman TimesNewRomanPSMT | 400 | 12px | 0px | 140 style uses |
| Raw small | Poppins SemiBold | 600 | 12px | — | 4 |
| Raw small | Times New Roman BoldMT | 700 | 12px | — | 16 |

Line height is `auto` for defined typography tokens.

## Spacing scale

No spacing variables found.

Explicit layout spacing:

- Button: `292×50px` or screen instances at `326×50px` / `327×50px`.
- Frame 11: padding `4px 24px 4px 24px`, gap `9px`.
- Onboarding pagination: gap `11px`.
- Social-login rows: gap `10px`.
- News carousel: gap `16px`.
- Status bar height: `44px`.
- Bottom navigation height: `62px`.

## Radius scale

Explicit radii:

- `10px`: button.
- `15px`: onboarding content card.
- `20px`: authentication input containers.
- `2.67px`: status-bar battery border.
- `1.33px`: status-bar battery capacity.
- `0px`: groups and several structural containers.

## Elevation & effects

- No local effect styles found.
- No elevation values found.
- Borders are primarily `1px` black strokes.
- Translucent black rules use `#0000004D`, `#00000080`, and `#0000001A`.
- Authentication fields use `1px` black outlines with `20px` radius.
- News cards use `1px` black borders.

## Components

### button

- Size: `292×50px` base component.
- Screen instances: `326×50px`, `327×50px`.
- Radius: `10px`.
- Fill: `#8C8C8C`.
- Label: Poppins Medium, `16px`.
- Label color: `#FFFFFF`.
- Variant: `Property 1: DESIGN/Default`.
- Common label: “Continue”.

### Frame 11

- Size: `375×62px`.
- Vertical layout.
- Padding: `4px 24px 4px 24px`.
- Gap: `9px`.
- Alignment: min/center.
- Fill: `#999797`.
- Stroke: `#000000`, `1px`.
- Contains bottom navigation items: Home, Saved, Settings.
- Labels use small text.

### Status bar

- Size: `375×44px`.
- Time text: SF Pro Text Semibold, `15px`.
- Uses black status icons and white background.
- Battery border has `2.67px` radius and `1px` black stroke.
- Battery capacity has `1.33px` radius.

## Screen patterns

- **Splash:** White `375×812px` screen with “NG News Edit”, the tagline “For those who love it short and precise”, a grouped visual placeholder area, and a full-width Continue button.
- **Onboarding:** Three repeated `375×812px` screens. Each has a `327×329px` light-gray card with `15px` radius, a centered H2 message, Continue button, reCAPTCHA text, three `15×15px` pagination dots with `11px` gaps, and a skip action.
- **Sign up:** Status bar, “Sign Up” heading, three outlined `327×50px` fields for User Name, Email, and Password, social-login rows, Continue button, and an account-switching link.
- **Sign in:** Status bar, “Sign In” heading, outlined User Name and Password fields, social-login rows, Continue button, and a sign-up link.
- **Home:** Status bar, “NG News Edit” header, date/edition rule group, story count, horizontally arranged news cards, and the Frame 11 bottom navigation.
- **News card:** `327×469px` card with `#BBBBBB` background and `1px` black stroke; image placeholders, pale article-title panel, H3 headline, numbered badge, divider, and small-text summary content.
- **Bottom navigation:** Three evenly arranged destinations: Home, Saved, Settings. Each destination combines an icon area and small label.

## Notes for implementers

- Preserve the 375px-wide mobile composition and 812px screen pattern.
- Prefer the defined typography roles over raw styles; use Times New Roman for editorial headlines and paragraphs, and Poppins for interface actions and body UI text.
- Treat `small text` as the dominant supporting-text style.
- Keep buttons full-width within their containing authentication or onboarding layout.
- Use black rules and borders sparingly but consistently for the editorial structure.
- Do not add spacing, radius, motion, grid, or effect tokens that are not specified.
- No local spacing, radius, motion, effect, or grid styles were found.
