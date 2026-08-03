---
name: pocket-app-community
source: Pocket App (Community)
kind: design-system-context
---

# pocket - Design System

## Overview

Pocket is a community finance app design system centered on dark surfaces, teal accents, rounded controls, card-based payment methods, account settings, and transaction history. The source contains presentation, component, and template pages, with light and dark theme components.

## Design language

- Use dark navy surfaces: `#292E3B` and `#292E3C`.
- Use `#00A896` as the primary accent for actions, section headings, active navigation, labels, and positive emphasis.
- Use white text and surfaces extensively: `#FFFFFF`.
- Use translucent white overlays for inactive controls: `#FFFFFF29`, `#FFFFFF3D`, and `#FFFFFF7A`.
- Use highly rounded controls, typically with `42px` or `48px` radius.
- Use Raleway for most interface and display text.
- Use Fira Code SemiBold for payment-card labels.
- Use Roboto Medium for small utility text.
- Favor large display typography, pill-shaped controls, dark cards, teal actions, and soft drop shadows.

## Color palette

Ranked by source usage:

| Color | Uses | Role |
|---|---:|---|
| `#FFFFFF` | 343 | Primary light surface and text |
| `#888888` | 214 | Neutral text and secondary content |
| `#00A896` | 119 | Primary accent, actions, active states, labels |
| `#DADADA` | 91 | Neutral light color |
| `#F0F0F0` | 36 | Light neutral surface |
| `#F0F0F03D` | 36 | Translucent input/control surface |
| `#FFFFFF3D` | 30 | Translucent white overlay |
| `#88888829` | 28 | Translucent neutral overlay |
| `#FFFFFF29` | 28 | Inactive dark-theme control surface |
| `#292E3C` | 12 | Dark surface |
| `#292E3B` | 11 | Dark surface |
| `#00000029` | 6 | Dark translucent row or shadow overlay |
| `#8888883D` | 6 | Neutral translucent card detail |
| `#88DE8B` | 6 | Green payment-card variant |
| `#FAFAFA` | 6 | Off-white surface |
| `#FFFFFF7A` | 6 | Reduced-opacity white text |

Near-identical dark surfaces `#292E3B` and `#292E3C` are both present; use them according to the screen or component context rather than introducing another dark color.

## Type scale

### Raleway

- `Raleway Bold`, `160px` — largest display title
- `Raleway Bold`, `80px` — display subtitle
- `Raleway Bold`, `47.88px`
- `Raleway Bold`, `36px`
- `Raleway Bold`, `35.91px`
- `Raleway Bold`, `32px` — major section headings and buttons
- `Raleway Bold`, `24px` — navigation and prominent labels
- `Raleway SemiBold`, `29.93px`
- `Raleway SemiBold`, `26.93px`
- `Raleway SemiBold`, `23.94px`
- `Raleway SemiBold`, `20px` — field labels and secondary headings
- `Raleway SemiBold`, `18px` — transaction amounts
- `Raleway SemiBold`, `16px`
- `Raleway Regular`, `41.9px`
- `Raleway Regular`, `35.91px`
- `Raleway Regular`, `28px`
- `Raleway Regular`, `24px`
- `Raleway Light`, `23.94px`
- `Raleway Light`, `16px` — transaction dates and descriptions

### Fira Code

- `Fira Code SemiBold`, `56.86px`
- `Fira Code SemiBold`, `41.9px`
- `Fira Code SemiBold`, `38px`
- `Fira Code SemiBold`, `28px` — payment-card labels

### Roboto

- `Roboto Medium`, `23.94px`
- `Roboto Medium`, `16px`
- `Roboto Medium`, `14.96px`
- `Roboto Medium`, `10px`

## Spacing scale

No spacing variables were found. Observed spacing and padding values:

- `0px`
- `10px`
- `16px`
- `24px`
- `32px`
- `48px`
- `80px`
- `160px`
- `240px`
- `320px`
- `1073px`

Observed control padding:

- Input controls: vertical `16px`, horizontal `24px`
- Primary buttons: vertical `16px`, horizontal `48px`
- Navigation pills: vertical `16px`, horizontal `32px`
- Icon controls: vertical `16px`, horizontal `32px`

## Radius scale

No radius variables were found. Observed radii:

- `8px` — payment-card brand detail
- `10px` — payment-card chip detail
- `16px` — major dark panels and containers
- `24px` — payment cards
- `42px` — buttons and navigation pills
- `48px` — text inputs and compact pill controls

## Elevation & effects

No local effect styles were found.

Observed supported effect:

- Drop shadow with `8px` offset `0 4px` using `#00000029`, used on primary buttons.
- Dark panels use larger drop shadows with `16px` offset `8 8`; the source does not provide an allowed shadow color for this effect.
- Payment cards use an `8px` drop shadow with zero offset; the source does not provide an allowed shadow color for this effect.
- Inputs use an `8px` drop shadow with offset `0 4`; several source colors for this effect are not available in the allowed palette.

## Components

Allowed component families:

- `app-icon`
  - Size: `336x336px`
  - Fill: `#FFFFFF`
- `user-icon`
  - Size: `192x192px`
  - Fill: `#FFFFFF`
  - Also observed at `72x72px` and `221x221px`
- `light_theme`
  - Size: `80x80px`
  - Fill: `#FFFFFF`
- `dark_theme`
  - Size: `80x80px`
  - Fill: `#FFFFFF`
- `chevron_left`
  - Size: `32x32px`
  - Fill: `#FFFFFF`
- `chevron_right`
  - Size: `32x32px`
  - Fill: `#FFFFFF`
- `local_mall`
  - Size: `32x32px`
  - Fill: `#FFFFFF`
- `swap_vert`
  - Size: `32x32px`
  - Fill: `#FFFFFF`
- `settings_24px`
  - Size: `48x48px`
  - Fill: `#FFFFFF`

Observed component patterns:

- Primary action button: `64px` high, `42px` radius, `#00A896` fill, white `Raleway Bold` text at `32px`.
- Secondary or inactive pill: `56px` or `64px` high, `42px` radius, translucent white fill.
- Text input: `60px` high, `48px` radius, `#F0F0F03D` fill, `16px` vertical and `24px` horizontal padding.
- Dark application panel: `738x1640px`, `16px` radius, dark surface.
- Payment card: `570x360px`, `24px` radius. Variants use `#FFFFFF`, `#88DE8B`, and `#00A896`.
- Payment-card chip detail: `88x64px`, `10px` radius.
- Payment-card brand detail: `120x36px`, `8px` radius.
- Transaction row: `666x96px`.
- Section heading: `Raleway Bold`, `32px`, colored `#00A896`.
- Secondary heading or field label: `Raleway SemiBold`, `20px`, colored `#00A896`.

## Screen patterns

- **Presentation screen**
  - Large white presentation canvas with generous outer padding.
  - Introductory “Pocket Pay App” display title and theme selector.
  - Three dark finance-app panels: a login panel, a payment-methods and operations panel, and an account-settings panel.
  - Panels use rounded corners, dark surfaces, teal actions, white text, pill navigation, payment cards, and transaction lists.

- **Login panel**
  - Dark `738x1640px` application surface.
  - Centered app icon.
  - User and password inputs with teal labels.
  - Teal `LOG IN` button.
  - White support and registration text.

- **Payment methods and operations panel**
  - Dark surface with horizontal pill navigation.
  - Left and right chevron controls.
  - Stacked payment cards with white, green, and teal variants.
  - User and settings icons near a welcome header.
  - Transaction list with amounts, dates, descriptions, and operation icons.
  - Teal “Pay methods” and “Last operations” headings.

- **Account settings panel**
  - Dark surface with a scrollable form area.
  - Recovery email, token, email, name, last name, username, and password inputs.
  - Security and account-data sections.
  - Checkbox-style notification controls.
  - User image area with `CHANGE` button.
  - Footer with gradient treatment and teal `SAVE` button.
  - Header with back chevron and “Account details” title.

## Notes for implementers

- Do not introduce colors outside the palette listed here.
- Preserve the distinction between `#292E3B` and `#292E3C`; both are source-defined dark surfaces.
- Use `#00A896` for primary interactive emphasis rather than green or neutral colors.
- Keep all primary controls pill-shaped with the observed `42px` radius.
- Keep text inputs at `60px` height with `48px` radius and `#F0F0F03D` fill.
- Use white text on dark surfaces and teal labels above or beside inputs.
- Use Raleway for interface hierarchy, Fira Code SemiBold for payment-card data, and Roboto Medium only for small utility text.
- Use the listed component families only.
