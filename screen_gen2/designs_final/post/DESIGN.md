---
name: twitter-post-ui-kit-twitter-post-ui-x-post-ui-community
source: Twitter post  UI Kit | Twitter post UI | X post UI (Community)
kind: design-system-context
---

# post - Design System

## Overview

A Twitter/X post UI kit with light and dark post-card variants and a thumbnail composition showing both variants. The primary post card is 550×584px with a 520px content width, 15px internal padding, 15px vertical gaps, and 12px corner radius.

## Design language

- Social-post interface with compact metadata, author identity, caption, media, timestamp, engagement actions, and a full-width CTA.
- Light and dark themes use the same structure and geometry.
- Blue is used for links, follow actions, comments, and the primary CTA.
- Pink is reserved for likes.
- Typography uses Segoe UI at 14px and 19px; a 64px Poppins SemiBold heading appears in the thumbnail composition.
- Cards use rounded corners, thin theme-matched borders, and centered fixed-width layouts.

## Color palette

| Rank | Token | Value | Usage |
|---|---|---|---|
| 1 | Secondary text | `#536471` | 18 semantic uses; 4 raw unstyled uses |
| 2 | Dark secondary text | `#8B98A5` | 12 uses |
| 3 | Dark border / Dark background | `#15202B` | Dark border: 8 uses; dark background: 2 uses |
| 4 | Light | `#F7F9F9` | 7 uses |
| 5 | Dark Primary / Comment | `#1D9BF0` | Dark Primary: 6 uses; Comment: 4 uses |
| 6 | Primary | `#006FD6` | 4 uses |
| 7 | Like | `#F91880` | 4 uses |
| 8 | Text | `#0F1419` | 3 uses |
| 9 | Unstyled light gray | `#DCDCDC` | 6 raw uses |
| 10 | Unstyled white | `#FFFFFF` | 3 raw uses |

Theme mapping:

- Light background: `#FFFFFF`
- Light primary text: `#0F1419`
- Light secondary text: `#536471`
- Light border: `#DCDCDC`
- Light link and CTA: `#006FD6`
- Dark background and border: `#15202B`
- Dark primary text: `#F7F9F9`
- Dark secondary text: `#8B98A5`
- Dark link and CTA: `#1D9BF0`
- Like icon: `#F91880`
- Comment icon: `#1D9BF0`

## Type scale

- `64px` — Poppins SemiBold; thumbnail heading.
- `19px` — Segoe UI; post caption and link.
- `14px` — Segoe UI; handle, metadata, timestamps, and interaction labels.
- `14px` — Segoe UI Semibold; author name, follow action, interaction count, and CTA.

Raw usage:

- Segoe UI Semibold, 14px: 24 uses.
- Segoe UI, 19px: 12 uses.
- Segoe UI, 14px: 8 uses.

## Spacing scale

Observed spacing and padding values:

- `3px` — author name/handle stack gap.
- `5px` — author header gap, metadata separator gap, image-wrapper gap, and date-row gap.
- `7px` — button vertical padding.
- `10px` — interaction icon-to-label gap.
- `15px` — post-card padding and primary vertical gap.
- `20px` — interaction item gap.
- `30px` — caption internal gap.

Primary post-card layout:

- Card padding: `15px`.
- Card section gap: `15px`.
- Content width: `520px`.
- Card width: `550px`.

## Radius scale

- `12px` — light and dark cards; media image; outer screen frames.
- `999px` — “Read more on X” pill button.

## Elevation & effects

- Thumbnail background includes large blurred ellipse effects with `200px` layer blur.
- Thumbnail heading uses a linear gradient from `#15202B` at `0%` to `#006FD6` at `100%`.
- No shadows or elevation tokens were found.
- No local effect styles were found beyond the thumbnail blur.

## Components

_None found in source._

## Screen patterns

- **Light UI post:** 550×584px white card with `#DCDCDC` border, 12px radius, 15px padding, author header, caption, media area, timestamp, engagement row, and outlined pill CTA.
- **Dark UI post:** Same geometry as the light post, using `#15202B` background and border, `#F7F9F9` primary text, `#8B98A5` secondary text, and `#1D9BF0` actions.
- **Thumbnail:** 1512×982px white canvas with blurred background effects, a light post card, a dark post card, and a 64px gradient heading.

Post structure:

1. Author header: 46px high; 46px avatar; 5px internal gaps.
2. Caption: 520×105px with a 30px gap between caption text and link.
3. Image and metadata wrapper: 520×325px; 260px media image; 30px date row; 5px wrapper gap.
4. Interaction row: 214×25px with 20px gaps between actions.
5. CTA: 520×33px, centered label, 999px radius, and 1px theme-matched border.

## Notes for implementers

- Preserve the same 550×584px card geometry across light and dark themes.
- Keep the inner content width at 520px and use 15px card padding.
- Use Segoe UI for all post content. Use Segoe UI Semibold only where the source specifies the stronger 14px treatment.
- Use `#006FD6` for light-theme links and CTA text; use `#1D9BF0` for dark-theme links and CTA text.
- Use `#F91880` only for the like icon and `#1D9BF0` for the comment icon.
- Keep the CTA pill radius at `999px`; do not substitute the 12px card radius.
- No component family or component geometry specification was extracted; implement the screen patterns as reusable UI only when needed.
