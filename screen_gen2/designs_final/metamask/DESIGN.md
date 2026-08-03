---
name: metamask-browser-for-ios-community
source: Metamask Browser for iOS (Community)
kind: design-system-context
---

# metamask - Design System

## Overview

MetaMask browser for iOS community design file focused on mobile navigation bars, tab bars, transaction and network modals, and status labels.

Primary surfaces are white with dark text, blue primary actions, outlined secondary actions, and rounded bottom-sheet modal forms.

## Design language

- Mobile-first iOS browser wallet UI.
- Use white surfaces with dark primary text.
- Use blue for primary actions and selected emphasis.
- Use outlined controls for secondary actions.
- Use rounded bottom sheets for modal flows.
- Use compact status and network labels with small typography.
- Use green indicators for active network and successful transaction timing.
- Typography is primarily Euclid Circular B in the extracted UI, with Inter, SF Pro Text, and Roboto used in specific system or caption elements.
- Modal actions use pill-shaped controls with centered labels.
- Account and gas-fee information uses bordered cards with rounded corners.

## Color palette

Ranked by raw usage count where available:

| Color | Usage / role |
|---|---|
| `#D9D9D9` | 155 uses; dividers and separator lines |
| `#242629` | 117 uses; dark UI text and iconography |
| `#FFFFFF` | 112 uses; primary surface and light backgrounds |
| `#000000` | 85 uses; system text, headings, and strong values |
| `#367BCF` | 39 uses; primary buttons, links, and blue emphasis |
| `#BCC0C4` | 29 uses; card borders and muted icons |
| `#5B5D66` | 18 uses; secondary text |
| `#25282D` | 16 uses; account and balance text |
| `#545960` | 16 uses; outlined button text and borders |
| `#66BFA0` | 14 uses; active network indicator |
| `#F6F6F9` | 8 uses; pale logo background |
| `#181818` | 6 uses; component-section headings and rules |
| `#FFFFFF99` | 6 uses; translucent white |
| `#FFFFFFCC` | 6 uses; translucent white |
| `#F5F6F8` | 5 uses; light neutral surface |
| `#1F35FC` | 4 uses; blue accent |
| `#2E7CF6` | 4 uses; blue accent |
| `#53A451` | 4 uses; success and timing message |
| `#2B32EA` | Primary [day] / Default |
| `#252733` | OnSurface [day] / Primary |
| `#60617029` | Level 3 shadow, 8px offset with 0 4px displacement |
| `#28293D0A` | Level 3 shadow, 2px offset with 0 0px displacement |

Named color tokens:

- Surface [day] / Default: `#FFFFFF`
- OnSurface [day] / Primary: `#252733`
- Primary [day] / Default: `#2B32EA`

## Type scale

Named typography tokens:

- Caption 1 Bold: Inter Bold, 700, 12px / 16px, tracking 0px.
- Caption 1 Regular: Inter Regular, 400, 12px / 16px, tracking 0px.

Observed type scale, largest to smallest:

- 48px — Euclid Circular B SemiBold
- 36px — Euclid Circular B SemiBold
- 27.92px — Euclid Circular B Regular
- 24px — Euclid Circular B Regular
- 22px — Euclid Circular B Regular
- 21px — Euclid Circular B Bold
- 21px — SF Pro Text Regular
- 16.5px — Euclid Circular B Regular or SemiBold
- 16px — Euclid Circular B SemiBold
- 15.23px — Euclid Circular B Regular
- 15px — Euclid Circular B Regular
- 14px — Euclid Circular B SemiBold, Inter Bold, or SF Pro Text Semibold
- 13px — Euclid Circular B Regular or SemiBold
- 12.69px — Euclid Circular B Regular
- 12px — Inter Bold, Inter Regular, Euclid Circular B Regular, or Euclid Circular B SemiBold
- 11px — Roboto Regular
- 10px — Euclid Circular B Regular

Additional observed sizes: 9.68px, 41.64px, 24.29px, 11px, 26.65px, 30.83px, and 52.85px.

## Spacing scale

No spacing variables were found.

Observed layout spacing values:

- 0px
- 1.27px
- 2px
- 2.54px
- 3px
- 3.81px
- 5.08px
- 6.35px
- 7.62px
- 10.15px
- 11.42px
- 12.69px
- 15.23px
- 17.77px
- 20.31px
- 24px
- 36px
- 38.08px
- 64px
- 80px
- 200px

## Radius scale

No radius variables were found.

Observed radii:

- 2px
- 2.54px
- 8px
- 12.69px
- 19.04px
- 20px
- 25.39px
- 27.92px
- 126.93px

Observed modal corner configuration: 20px top-left and top-right, 0px bottom-left and bottom-right.

## Elevation & effects

- Level 3 drop shadow:
  - `8px` shadow with `0 4px` displacement and color `#60617029`.
  - `2px` shadow with `0 0px` displacement and color `#28293D0A`.
- No motion tokens were found.
- No local grid styles were found.

## Components

### Modal

- Confirm:
  - Size: 375x702px.
  - Fill: `#FFFFFF`.
  - Radius: 20px top corners, 0px bottom corners.
  - Uses Euclid Circular B Regular, SemiBold, and Bold from 9.68px through 41.64px.
  - Contains account, site, network, transaction amount, gas-fee, method, and confirm/reject regions.
- Connect to website:
  - Size: 375x410px.
  - Fill: `#FFFFFF`.
  - Radius: 20px top corners, 0px bottom corners.
  - Primary action: blue filled button using `#367BCF`.
  - Secondary action: outlined button using `#545960`.
- Switch network:
  - Size: 375x410px.
  - Fill: `#FFFFFF`.
  - Radius: 20px top corners, 0px bottom corners.
  - Primary action: blue filled button using `#367BCF`.
  - Secondary action: outlined button using `#545960`.
  - Includes current-network and destination-network labels.

### Status label

- Transaction submitted:
  - Size: 343x73px.
  - Radius: 8px.
  - Fill: `#3D3D3D`.
  - Text: Euclid Circular B Regular 12px and SemiBold 14px.
- Transaction complete:
  - Size: 343x73px.
  - Radius: 8px.
  - Fill: `#3D3D3D`.
  - Text: Euclid Circular B Regular 12px and SemiBold 14px.

### Matamask

- Tab bar:
  - Size: 375x72px.
  - Fill: `#FFFFFF`.
  - Text: Euclid Circular B Regular 15px.
  - Includes tab icons, count indicator, divider, and home indicator.

### Metamask

- Navigation bar:
  - Size: 375x80px.
  - Fill: `#FFFFFF`.
  - Text: Roboto Regular 11px, SF Pro Text Semibold 14px, and Euclid Circular B Regular 10px or 13px.
  - Includes network status, blue utility indicators, wallet icon, site title, divider, and iOS status-bar content.

## Screen patterns

- Cover:
  - Large presentation canvas with a dark cover background and white title typography.
  - Shows enlarged examples of connect-to-website, switch-network, confirm, navigation-bar, and tab-bar components.
- Components:
  - White documentation canvas with large black section headings.
  - Introductory “About” section followed by component previews.
  - Component previews are arranged in grouped sections such as bars, modals, and status labels.
  - Mobile components retain 375px-wide layouts in the documentation view.

## Notes for implementers

- Preserve the 375px mobile component width for navigation bars, tab bars, and modal specifications.
- Implement modals as white bottom sheets with 20px top corner radii and no bottom corner radius.
- Use `#367BCF` for filled primary actions and `#545960` for outlined secondary actions.
- Use `#D9D9D9` for dividers and `#BCC0C4` for card borders.
- Use `#66BFA0` for active network indicators and `#53A451` for success timing text.
- Keep account and gas-fee sections inside bordered cards with 12.69px radius.
- Use Euclid Circular B for product UI unless a component explicitly specifies Inter, SF Pro Text, or Roboto.
- Do not introduce spacing or radius values not listed in the observed scales.
- The source contains community-created components and states that the file is not an official MetaMask design file.
