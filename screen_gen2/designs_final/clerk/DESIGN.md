---
name: clerk-mosaic-ui-components-community
source: Clerk Mosaic UI Components (Community)
kind: design-system-context
---

# clerk - Design System

## Overview

Clerk Mosaic is a component system for authentication, user profiles, organizations, billing, waitlists, task organization selection, and core UI primitives. The source contains 52 Figma pages covering UI component screens, core components, content, and helpers.

Primary composed experiences include:

- Authentication: `sign-in`, `sign-up`
- User: `user-button`, `user-profile`
- Organizations: `create-organization`, `Organization Profile`, `organization-switcher`, `organization-list`
- Billing: `pricing-table`, `pricing-table-cta`, `checkout`
- Other flows: `waitlist`, `task-select-organization`

## Design language

- Primary typeface: SF Pro.
- Supporting typefaces: Inter, Helvetica Helvetica, and Suisse Int'l for the cover title.
- UI is compact, structured, and card-based.
- Common controls use 6px radii.
- Common control heights are 16px, 18px, 24px, 26px, 30px, 32px, 34px, 36px, 40px, 48px, 52px, 58px, 64px, and 72px.
- Panels and overlays commonly use white fills, subtle borders, and layered shadows.
- Component states and variants are explicit: default, hover, focus, disabled, selected, active, open, closed, error, and success where specified.

## Color palette

Use these colors in descending order of raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 160 | Base white, cards, surfaces, table cells, social controls |
| `#000000` | 85 | Black, tooltip and dark UI elements |
| `#333333` | 60 | Primary dark neutral |
| `#757575` | 60 | Secondary neutral |
| `#1C0452` | 45 | Deep purple |
| `#020A12` | 38 | Dark section background |
| `#9747FF` | 36 | Purple accent |
| `#42434D` | 34 | Dark neutral |
| `#253B80` | 18 | Deep blue |
| `#1976D2` | 17 | Blue |
| `#4CAF50` | 17 | Green |
| `#FF3D00` | 17 | Orange-red |
| `#FFC107` | 17 | Amber |
| `#444444` | 13 | Dark neutral |
| `#575757` | 13 | Neutral |
| `#179BD7` | 12 | Cyan-blue |
| `#5E5F6E` | 12 | Muted dark neutral |
| `#646464` | 12 | Neutral |
| `#A38CFF` | 11 | Light purple |
| `#131316` | 10 | Near-black |
| `#9394A1` | 9 | Muted gray |
| `#F7F7F8` | 8 | Light surface |
| `#F7F7F8CC` | 8 | Translucent light surface |
| `#343434` | 6 | Dark neutral |
| `#2EB67D` | 5 | Green |
| `#34A853` | 5 | Green |
| `#36C5F0` | 5 | Cyan |
| `#4285F4` | 5 | Blue |
| `#E01E5A` | 5 | Pink |
| `#EA4335` | 5 | Red |
| `#ECB22E` | 5 | Yellow |
| `#FBBC04` | 5 | Yellow |

Named color tokens:

- `PayPal Yellow`: `#FFC43A`
- `Base/White`: `#FFFFFF`

Component-specific fills include `#372F35` for Branding Logo, badge, and button surfaces; `#F7F7F7` for disclosure, drawer, and sidebar surfaces; and `#FFFFFF` for container, menu, pricing, table, and social surfaces.

## Type scale

| Token | Typeface | Weight | Size / line height | Tracking | Usage |
|---|---|---:|---:|---:|---|
| `Body/B1` | SF Pro Regular | 400 | 13px / 18px | 0px | Body text; 506 uses |
| `Header/H1` | SF Pro Bold | 700 | 24px / 32px | 0px | Primary headings; 74 uses |
| `Button/S` | SF Pro Medium | 510 | 12px / 16px | 0px | Small buttons; 109 uses |
| `Caption/C1` | SF Pro Medium | 510 | 11px / 16px | 0px | Captions; 255 uses |
| `Subtitle/S1` | SF Pro Medium | 510 | 13px / 18px | 0px | Supporting labels; 253 uses |
| `Header/H2` | SF Pro Bold | 700 | 17px / 24px | -0.17px | Secondary headings; 82 uses |
| `Button/L` | SF Pro Medium | 510 | 13px / 18px | 0px | Large buttons; 158 uses |
| `Header/H3` | SF Pro Bold | 700 | 13px / 18px | 0px | Tertiary headings; 9 uses |
| `Caption/C2` | Inter Medium | 500 | 12px / 16px | 0.12px | Secondary captions; 16 uses |
| `Cover Title` | Suisse Int'l SemiBold | 600 | 92px / 77.1% | -2.3px | File-cover title; 1 use |

Raw typography also includes SF Pro Regular and Medium at 14px, SF Pro Regular and Medium at 12px, SF Pro Regular and Medium at 11px, SF Pro Semibold at 11px, 14px, and 18px, SF Pro Medium and Regular at 25.18px, SF Pro Medium at 21.3px, Inter Regular at 12px and 14px, and Helvetica Helvetica at 14px.

## Spacing scale

No spacing variables were defined. Observed spacing values are:

- `0px`
- `2px`
- `4px`
- `6px`
- `8px`
- `10px`
- `12px`
- `16px`
- `20px`
- `24px`
- `32px`
- `40px`
- `48px`

Observed usage patterns:

- Compact controls commonly use 4px, 6px, 8px, and 12px padding.
- Standard content layouts use 16px and 32px gaps or padding.
- Authentication and waitlist content uses `32px 40px 32px 40px` padding and a 32px gap.
- Create-organization content uses `16px 20px 48px 20px` padding and a 24px gap.
- Drawer and disclosure content uses `32px 12px 32px 12px` padding and a 12px gap.
- Pricing CTA uses 16px padding; compact pricing CTA uses 12px padding.

## Radius scale

Observed radius values:

- `0px`
- `4px`
- `6px`
- `8px`
- `12px`
- `16px`
- `999px`

Usage:

- `6px` is the dominant radius for buttons, cards, inputs, menus, badges, dialogs, disclosures, drawers, and segmented controls.
- `8px` is used by line items and list items.
- `12px` is used by user-profile, organization-profile, and container-profile surfaces.
- `16px` is used by `_section`.
- `999px` is used by toggle.
- Composite radii include `6/0/0/6px` for checkout and drawer surfaces.

## Elevation & effects

Defined effect style:

- `light/shadow-sm`:
  - Drop shadow: 2px offset `0 0`, color `#00000014`
  - Drop shadow: 2px offset `0 1`, color `#191C210F`
  - Drop shadow: 0px offset `0 0`, color `#191C210A`

Common component shadow stacks:

- Surface shadow:
  - Drop shadow: 0px offset `0 0`, color `#0000000F`
  - Drop shadow: 35px offset `0 15`, color `#00000033`
  - Drop shadow: 15px offset `0 5`, color `#00000014`
- Compact card shadow:
  - Drop shadow: 0px offset `0 0`, color `#0000000F`
  - Drop shadow: 2px offset `0 1`, color `#0000001F`
  - Drop shadow: 2px offset `0 0`, color `#00000014`
- Button shadow:
  - Drop shadow: 0px offset `0 0`, color `#372F35`
  - Inner shadow: 1px offset `0 1`, color `#FFFFFF12`
  - Drop shadow: 3px offset `0 2`, color `#00000033`
  - Drop shadow: 1px offset `0 1`, color `#0000003D`
- Social button shadow:
  - Drop shadow: 3px offset `0 2`, color `#00000014`
  - Drop shadow: 0px offset `0 1`, color `#00000005`
  - Drop shadow: 0px offset `0 0`, color `#00000014`
- Toggle inner shadow: 0px offset `0 0`, color `#0000000F`
- Badge shadow:
  - Drop shadow: 0px offset `0 0`, color `#3B3E44`
  - Drop shadow: 0px offset `0 2`, color `#0000000A`

## Components

### Composed components

- `sign-in`: 400x478px, fixed size, vertical, centered; variants: another method, check your email, enter password, get help, sign-in.
- `sign-up`: 400x610px, fixed size, vertical, centered; radius 6px; variants: all fields, initial, verify email.
- `user-button`: 376x248px, fixed size, vertical, 8px gap.
- `user-profile`: 880x704px, fixed size; radius 12px; vertical, 10px gap; navigation variants: billing, plans, profile, security.
- `create-organization`: 400x450px, fixed size, vertical, centered; radius 6px.
- `Organization Profile`: 880x704px, fixed size; radius 12px; vertical, 10px gap; navigation variants: general, members.
- `organization-switcher`: 400x344px, fixed size; radius 6px; vertical, 8px gap.
- `organization-list`: 400x554px, fixed size; radius 6px; vertical, centered.
- `pricing-table-cta`: 1080x64px, fill width, horizontal, 16px padding, 8px gap, space-between; variants: active trial, default plan, subscribed annually, subscribed monthly, subscribed to other plan, trial plan.
- `pricing-table`: 320x460px, fixed size; radius 6px; white fill; variants: CTA top/bottom and show-features false/true.
- `waitlist`: 400x448px, fixed size, vertical, centered; radius 6px; variants: Enter email, Success.
- `task-select-organization`: 400x662px, fixed size, horizontal, 10px gap.

### Core components

- `_avatar`: 48x48px; variants for organization/user, sizes 24/36/48, image/marble/solid backgrounds, and image/initials/silhouette foregrounds.
- `badge`: 78x18px, radius 6px, fill `#372F35`; styles: negative, positive, primary, secondary, warning.
- `social-button`: 97x32px, radius 6px, white fill, `6px 12px 6px 12px` padding, 12px gap; states: Default, Focus, Hover.
- `button`: 320x32px, radius 6px, fill `#372F35`, `6px` padding on all sides; variants: emphasis high/low/none, style negative/primary/secondary, size lg/sm, state default/disabled/focus/hover.
- `checkbox`: 177x18px, horizontal, 6px gap; states: checked/default.
- `checkout`: 400x704px, vertical, radius `6/0/0/6px`; steps: payment, plan, success.
- `clerk-logo`: 50x14px, fill `#FFFFFF`.
- `container-footer`: 462x48px, white fill, vertically centered.
- `container-profile`: 880x704px, radius 12px, vertical, 10px gap.
- `container`: 400x72px, radius 6px, white fill.
- `disclosure-content`: 492x82px, radius 6px, fill `#F7F7F7`, `32px 12px 32px 12px` padding, 12px gap; types: card-picker, payment-methods, slot.
- `disclosure`: 472x130px, radius 6px, white fill; states: closed/open.
- `drawer-header`: 400x48px, fill `#F7F7F7`, 1px stroke `#0000000F`, `12px 16px 12px 16px` padding, 16px gap; types: plan/title.
- `drawer-content`: 400x82px, fill `#F7F7F7`, `32px 12px 32px 12px` padding, 12px gap; types: payment, payment-success, plan-features, slot.
- `drawer`: 400x704px, radius `6/0/0/6px`, white fill.
- `devices`: 32x32px, white fill; devices: computer, phone.
- `icon`: 16x16px. Available icons include lock-dotted-circle, connections, calendar, rotate-left-right, block, plans, clipboard, information-circle, three-dots, arrows-up-down, arrow-left, arrow-right, search, upload, unlocked, phone, generic-pay, key, security, profile, minus, plus, check, chevron-down, chevron-up, chevron-left, chevron-right, sign-out, cog, users, user, organization, email, hashtag, credit-card, cross, show, edit, warning, triangle-right, left-right, and up-down.
- `input`: 320x58px, vertical, 8px gap; states: default/error/focus/hover; populated: False/True.
- `input-message`: 320x36px, horizontal, 8px gap.
- `input-label`: 706x18px, fill width, horizontal, 16px gap.
- `line-item`: 392x18px, radius 8px, horizontal, 8px gap, space-between; types: primary, secondary, tertiary.
- `list-item`: 392x32px, radius 8px, `6px 4px 6px 10px` padding, 8px gap; types: action, connected-account, destructive, device, password, profile, text.
- `menu-item`: 706x26px, radius 4px, `4px 12px 4px 12px` padding, 4px gap; types: default/negative; states: default/hover.
- `menu`: 120x30px, radius 6px, white fill, `2px` padding, 2px gap; amount variants: 1/2/3/4.
- `pagination`: 596x24px, horizontal, 16px gap, space-between.
- `profile-page-title`: 596x40px, fill width, vertical, 16px gap; tab-menu: False/True.
- `sidebar-item`: 196x32px, radius 6px, `6px 12px 6px 12px` padding, 12px gap, fill `#F7F7F7`; selected: False/True.
- `segmented-control-item`: 75x32px, radius 6px, `6px 12px 6px 12px` padding; states: default/selected; sizes: md/sm.
- `segmented-control`: 149x32px, radius 6px, fill `#F7F7F7`; sizes: md/sm.
- `Social connections`: 64x64px; providers: Apple, Atlassian, Bitbucket, Box, Coinbase, Discord, Dropbox, Facebook, GitHub, GitLab, Google, HubSpot, Hugging Face, LINE, Linear, LinkedIn, Microsoft, Notion, Slack, Spotify, TikTok, Twitch, X, Twitter, Xero.
- `table-cell`: 116x52px, white fill, 1px stroke `#0000000F`, `8px 16px 8px 16px` padding; bottom-sep: false/true; states: default/hover.
- `table-content`: 191x36px, horizontal, 16px gap; types: actions, badge, input, plan, select, text, text-2-lines, user.
- `table-header-item`: 101x34px, white fill, 1px stroke `#0000000F`, `8px 16px 8px 16px` padding, 10px gap.
- `table`: 596x137px, radius 6px, white fill.
- `_tab`: 61x26px, `8px` bottom padding, 8px gap; states: Active/Default.
- `tab-navigation`: 596x26px, 24px gap, 1px stroke `#0000000F`; menu items: 2/3/4/5/6.
- `toggle`: 24x16px, radius 999px, fill `#0000001C`; states: Default/hover; toggle on: false/true; sizes: lg/md.
- `tooltip`: 54x26px, radius 6px, black fill, `4px 6px 4px 6px` padding; text: one line/paragraph.

### Internal content families

- `_pricing-table-cta`: 706x48px; horizontal; `12px` padding; 8px gap; pricing CTA variants.
- `_pricing-table`: 188x318px; radius 6px; white fill; show-features false/true.
- `_waitlist-content`: 400x350px; `32px 40px 32px 40px` padding; 32px gap; states enter email/success.
- `_sign-up-content`: 404.33x512px; `32px 40px 32px 40px` padding; 32px gap; steps all fields/initial/verify email.
- `_sign-in-content`: 404.33x430px; `32px 40px 32px 40px` padding; 32px gap; steps another method/check your email/enter password/get help/sign in.
- `_organization-profile-content`: 596x288px; 16px gap; properties general/members.
- `_user-profile-content`: 596x352px; fill width; 16px gap; navigation billing/plans/profile/security.
- `_subscription-content`: 324x52px; horizontal.
- `table-container-slot`: 405x137px; radius 6px; fill `#F7F7F7`; 1px stroke `#0000000F`; 10px gap.
- `_container-slot`: 513x273px; radius 6px; fill `#F7F7F7`; 1px stroke `#0000000F`; 10px gap.
- `_organizationlist-content`: 400x506px; vertical, centered.
- `_organizationswitcher-content`: 400x260px; vertical, centered.
- `_task-select-organization`: 400x564px; `32px 40px 32px 40px` padding; 32px gap.
- `_create-organization-content`: 400x418px; `16px 20px 48px 20px` padding; 24px gap.
- `_userbutton-content`: 376x164px; vertical, centered.
- `_headerTitle`: 786x138px; `40px` padding on all sides; 8px gap.
- `_section`: 794x301px; radius 16px; `4px` padding; fill `#020A12`.

## Screen patterns

- Authentication screens use centered 400px-wide panels with sign-in or sign-up steps and compact SF Pro typography.
- User and organization profile screens use 880x704px shells with 596px content regions, 12px outer radii, 10px shell gaps, and navigation variants.
- Organization creation, waitlist, and task organization selection use 400px-wide modal-style flows with fixed content steps.
- Billing uses 320px-wide pricing cards, 1080px-wide full-width CTAs, 400px-wide checkout/drawer surfaces, and pricing plan variants.
- Core account-management screens combine sidebar items, profile page titles, tab navigation, tables, list items, disclosures, drawers, menus, and tooltips.
- Tables use 596px-wide containers with 116px cells, 101px header items, white surfaces, and 1px `#0000000F` strokes.
- The file-cover thumbnail is a 1920x1080px composition with a 40px radius; decorative background geometry is present but should not be treated as a reusable UI component.

## Notes for implementers

- Use only the named component families and their listed variants.
- Prefer the named typography tokens over raw typography values.
- Use `Body/B1` for general content, `Caption/C1` for compact metadata, `Subtitle/S1` for supporting labels, and `Button/L` or `Button/S` according to control size.
- Preserve fixed dimensions when implementing the composed authentication, profile, organization, billing, and waitlist surfaces.
- Treat `fill width` and `W:fill` components as responsive within their parent; other listed widths are fixed.
- Use the listed shadow stacks exactly for elevated surfaces; do not add unlisted effects.
- No local variable collections, spacing variables, radius variables, motion tokens, or grid styles were found.
