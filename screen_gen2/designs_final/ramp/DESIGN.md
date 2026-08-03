---
name: on-ramp-blockchain-app-community
source: On-ramp blockchain app (Community)
kind: design-system-context
---

# ramp - Design System

## Overview

A dark-themed mobile cryptocurrency on-ramp flow consisting of:
- A landing screen introducing fiat-to-crypto purchasing.
- A buy-order screen for entering spend, receive, and wallet details.
- A payment screen for selecting and entering debit-card information.

No local variables, text styles, spacing variables, radius variables, motion variables, grid styles, or component families were found.

## Design language

- Use dark purple backgrounds and surfaces.
- Use white typography and iconography for contrast.
- Use a pink-to-blue gradient for primary actions and emphasized borders.
- Use solid purple surfaces for form fields and secondary containers.
- Use rounded controls, with pill-shaped primary actions on the landing screen.
- Use Metropolis typography throughout the interface.
- Cryptocurrency imagery and symbols are used as decorative visual elements on the landing screen and payment summary.

## Color palette

Ranked by raw usage count:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 54 | Primary text, icons, controls, and light surfaces |
| `#392160` | 12 | Form fields, panels, and secondary surfaces |
| `#F7931A` | 11 | Bitcoin visual accent |
| `#F3BA2F` | 7 | Cryptocurrency visual accent |
| `#00A478` | 6 | Cryptocurrency visual accent |
| `#3AB83A` | 4 | Cryptocurrency visual accent |
| `#C2A633` | 3 | Cryptocurrency visual accent |

Named color tokens:

- `ss`: `#392160`
- `g`: linear gradient from `#251461` at 0% to `#160037` at 100%
- `xx`: linear gradient from `#FA3C97` at 0% to `#758FF9` at 100%

## Type scale

Font family: `Metropolis`

Observed styles:

| Size | Weight | Observed usage |
|---:|---|---|
| 32px | SemiBold | Landing-screen headline |
| 24px | Medium | Screen headings |
| 24px | SemiBold | Payment summary values |
| 18px | Bold | Primary action labels |
| 18px | Medium | Form labels and supporting headings |
| 16px | SemiBold | Currency and input values |
| 16px | Regular | Order detail text |
| 14px | Regular | Payment disclaimer and wallet address |

Typography hierarchy:

1. 32px Metropolis SemiBold for the primary landing headline.
2. 24px Metropolis Medium for screen headings.
3. 24px Metropolis SemiBold for prominent payment summary values.
4. 18px Metropolis Bold for primary action labels.
5. 18px Metropolis Medium for form labels.
6. 16px Metropolis SemiBold or Regular for values and supporting details.
7. 14px Metropolis Regular for disclaimer text and secondary wallet information.

## Spacing scale

_None found in source._

## Radius scale

Observed corner radii:

- `2px` checkbox
- `2.5px` compact white control
- `5px` form fields
- `10px` action buttons and payment summary panels
- `100px` landing-screen pill button
- `0px` group radius

## Elevation & effects

- Background blur: `40px` on the payment summary panel.
- Payment summary panel has a `1px` border.
- Payment summary image layer opacity: `20%`.
- Wallet address text opacity: `80%`.
- No elevation or shadow styles were found.

## Components

_None found in source._

## Screen patterns

### Landing screen

- Mobile frame: `360x800px`.
- Background uses the `g` dark gradient.
- A rounded pill CTA uses the `xx` gradient and reads “Get Started”.
- A large white headline uses 32px Metropolis SemiBold.
- Supporting copy uses 18px Metropolis Regular.
- Floating cryptocurrency artwork occupies the visual area above the headline.

### Buy-order screen

- Mobile frame: `360x800px`.
- Background uses the `g` dark gradient.
- Heading: “Buy Order”.
- Form fields use `#392160` with `5px` radius and a `1px` `#392160` stroke.
- Labels use 18px Metropolis Medium.
- The primary “Proceed” button uses the `xx` gradient and a `10px` radius.
- Input content includes fiat amount, currency, crypto amount, crypto currency, and wallet address.
- Supporting transaction details show amount, processing fee, and processing time.

### Payment screen

- Mobile frame: `360x800px`.
- Background uses the `g` dark gradient.
- Heading: “Payment”.
- Payment fields use `#392160` with `5px` radius.
- The selected payment option uses the `xx` gradient as a `1px` border.
- Card inputs include card number, expiry date, and CVV.
- A debit-card option is displayed with a white icon and 16px Metropolis SemiBold text.
- A payment disclaimer uses 14px Metropolis Regular.
- The payment summary panel uses a `10px` radius, a `1px` border, and `40px` background blur.
- The primary “Pay” button uses the `xx` gradient.

## Notes for implementers

- Preserve the three-screen flow: landing, buy order, then payment.
- Use only the documented `g`, `ss`, and `xx` color tokens for the primary interface surfaces and actions.
- Keep primary action labels in 18px Metropolis Bold.
- Keep screen headings at 24px Metropolis Medium.
- Use 32px Metropolis SemiBold only for the landing headline.
- Use `5px` field radii, `10px` action and panel radii, and `100px` for the landing CTA pill.
- No reusable component specifications were extracted; implement the recurring fields, gradient action buttons, headings, and payment summary consistently from the screen patterns above.
