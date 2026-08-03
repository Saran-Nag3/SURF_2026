---
name: letterboxd-ui-community
source: Letterboxd UI (Community) — Page 1
kind: design-system-context
---

# letterboxd - Design System

## Overview

Mobile-focused Letterboxd community UI for film discovery, social activity, profiles, reviews, lists, diary entries, watchlists, and settings.

- Primary dark screen background: `#14171C`
- Primary accent: `#00E054`
- Main mobile screen sizes: `390x844px` and `300x844px`
- Light sign-in screen background: `#FFFFFF`
- Extracted component family: `tabs`

## Design language

- Dark, cinematic interface with high-contrast white navigation and headings.
- Bright green is used for active tab indicators and film ratings.
- Secondary text uses cool blue-gray tones.
- Orange is used for heart/favorite indicators.
- Mobile layouts use compact navigation bars, stacked content, film imagery, avatars, ratings, and social activity.
- Typography combines Satoshi, SF Pro Display, and Outfit.
- Navigation labels are generally bold and white on dark surfaces.
- Content sections use thin separators and compact vertical stacking.

## Color palette

Ranked by raw usage:

| Color | Uses | Primary role |
|---|---:|---|
| `#FFFFFF` | 181 | Primary text, icons, light surfaces |
| `#000000` | 148 | Dark text and icons on light surfaces |
| `#00E054` | 101 | Active indicators, star ratings, accent |
| `#969696` | 78 | Borders and muted interface details |
| `#99AABB` | 69 | Secondary film metadata and body text |
| `#8899AA` | 42 | Muted metadata and secondary text |
| `#445565` | 38 | Dark blue-gray surface; combines near-identical `#445565` and `#445566` usage |
| `#14171C` | 12 | Primary dark screen background |
| `#8899AACC` | 11 | Translucent muted blue-gray |
| `#C8D4E0` | 11 | Light secondary text and icons |
| `#667788` | 10 | Tertiary metadata and usernames |
| `#223344` | 6 | Deep blue-gray |
| `#F27405` | 5 | Heart/favorite indicators |
| `#556677` | 4 | Muted blue-gray |

## Type scale

Raw typography usage:

| Font | Weight | Size | Uses |
|---|---|---:|---:|
| Satoshi | Light | 25px | 3 |
| SF Pro Display | Bold | 24px | 3 |
| SF Pro Display | Regular | 20px | 11 |
| SF Pro Display | Medium | 20px | 3 |
| Satoshi | Bold | 20px | 6 |
| SF Pro Display | Bold | 18px | 3 |
| Satoshi | Bold | 18px | 10 |
| SF Pro Display | Medium | 17px | 14 |
| SF Pro Display | Bold | 16px | 8 |
| Satoshi | Bold | 16px | 5 |
| Satoshi | Medium | 16px | 5 |
| Outfit | Medium | 14px | 36 |
| SF Pro Display | Bold | 14px | 30 |
| SF Pro Display | Medium | 14px | 15 |
| SF Pro Display | Medium | 12px | 15 |
| SF Pro Display | Regular | 12px | 3 |
| Satoshi | Medium | 12px | 23 |
| SF Pro Display | Bold | 10px | 10 |
| SF Pro Display | Medium | 10px | 6 |
| Satoshi | Medium | 10px | 7 |

Guidance:

- Use `Satoshi Bold, 20px` for prominent profile or navigation titles.
- Use `Satoshi Bold, 18px` for menu items.
- Use `SF Pro Display Bold, 16px` for section headings.
- Use `SF Pro Display Bold, 14px` for film titles and prominent metadata.
- Use `Outfit Medium, 14px` for tab labels.
- Use `SF Pro Display Medium, 12px` or `Satoshi Medium, 12px` for supporting content.
- Use 10px styles for compact metadata and usernames.
- Use `SF Pro Display Bold, 26px` for the observed “Sign In” heading.

## Spacing scale

_None found in source._

Observed fixed dimensions include:

- Tab component: `313x41px`
- Tab label areas: `68x34px`
- Mobile header surface: `390x157px`
- Decorative film/content frames: `380x150px`, `379x80px`
- Film poster: `80x120px`
- Avatar: `30x30px`
- Icon frames: `26x26px`
- Home indicator: `134x5px`

## Radius scale

_None found in source._

Observed corner radii:

- `5px` on the tabs component set
- `10px` on mobile screen frames and header surfaces
- `12px` on the sign-in field
- `100px` on the home indicator
- `4px` on battery borders
- `2px` on battery capacity

## Elevation & effects

_None found in source._

Observed opacity values:

- `40%` on the battery border
- `50%` on the battery cap
- `44%` on activity separators

## Components

### tabs

- Family: `tabs`
- Variant: `Property 1=Default`
- Size: `313x41px`
- Component-set radius: `5px`
- Labels: `FILMS`, `REVIEWS`, `LISTS`, `JOURNAL`
- Label typography: `Outfit Medium, 14px`
- Label areas: `68x34px`
- Active indicator: `70x0px` line
- Active indicator color: `#00E054`
- Active indicator stroke: `2.5px`
- In dark screens, tab labels use `#FFFFFF`.
- In the component preview, tab labels use `#000000`.

## Screen patterns

- **Profile/menu screen:** `300x844px`, dark `#14171C` background, centered `70x70px` avatar, white profile name, stacked navigation labels such as Lists, Profile, Reviews, Settings, Search, Popular, Diary, Watchlist, Activity, and Sign out. Uses 26px icon frames.
- **Popular discovery screen:** `390x844px`, dark background with a `390x157px` blue-gray header surface, search and menu icons, “Popular” title, tabs, and sections including “Popular this week,” “New from friends,” and “Popular with friends.”
- **Popular film activity screen:** Uses stacked film entries with a `370px` content width, 80x120px poster imagery, 30x30px avatars, film titles, years, usernames, review text, green star ratings, orange heart indicators, and thin separators.
- **Friends activity screen:** Uses stacked activity rows with 30x30px avatars, usernames in tertiary blue-gray, collection or film titles, supporting text, and thin muted separators.
- **Sign-in screen:** `390x844px`, light `#FFFFFF` background, centered eye icon, top status bar, large film image, back icon, and a `SF Pro Display Bold, 26px` “Sign In” heading. Includes a `343x50px` field with `12px` radius.

## Notes for implementers

- Preserve the dark-first visual hierarchy: use `#14171C` for primary app screens, `#FFFFFF` for primary text, and `#99AABB` or `#8899AA` for supporting text.
- Use `#00E054` sparingly for active states and ratings; it is the principal interaction accent.
- Use `#F27405` only for heart/favorite indicators.
- Keep tab controls at `313x41px` with four equal `68px` label areas and a `70px`, `2.5px` green active line.
- Use the observed typography families and sizes rather than substituting a generic type scale.
- Film metadata should remain compact: titles commonly use 14px, years and usernames commonly use 10px.
- Do not introduce additional component families beyond `tabs`.
- Image fills are present for posters, avatars, and hero imagery, but their source assets are not represented as color tokens.
