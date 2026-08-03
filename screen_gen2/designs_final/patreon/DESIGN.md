---
name: patreon-like-mobile-app-design-community
source: Patreon Like Mobile App Design (Community), Page 1
kind: design-system-context
---

# patreon - Design System

## Overview

- Mobile support-creation screen designed at 375×812px.
- Primary use case: selecting a payment method and supporting a creator.
- Visual direction: dark navy background, white content, muted gray supporting text, and amber emphasis.
- No local variables, paint styles, text styles, spacing variables, motion tokens, grids, or component families were found.

## Design language

- Use a dark navy base with white primary content.
- Use amber for high-priority financial information and the primary support action.
- Use muted gray for secondary metadata, descriptions, and legal text.
- Use rounded payment-option containers with 24px corner radius.
- Use a fully rounded 50px primary action.
- Typography is Inter, with weights including Regular, Medium, SemiBold, and Bold.
- The primary mobile layout uses left/top constraints and 327px-wide content rows within a 375px-wide screen.

## Color palette

| Color | Usage count | Role |
|---|---:|---|
| `#FFFFFF` | 7 | Primary text, payment-card fill, light surface |
| `#8B8FA0` | 4 | Secondary text, supporting metadata, and outlined payment-option borders |
| `#010518` | 3 | Main screen background and dark frame fill |
| `#FCAD00` | 3 | Highlighted amount and primary action fill |

## Type scale

- Inter Regular, 14px — supporting metadata such as `/month` and backer count.
- Inter Medium, 16px — labels such as “Payment Method” and “About”.
- Inter Regular, 16px — descriptive body copy and legal text.
- Inter SemiBold, 18px — payment method names and the extracted raw typography token.
- Inter Bold, 18px — primary action label.
- Inter Bold, 20px — creator name.
- Inter Bold, 28px — highlighted monetary amount.
- Inter Bold, 55px — large asset/tutorial heading.

## Spacing scale

_None found in source._

## Radius scale

- 18px — content image/surface container.
- 24px — payment method containers.
- 50px — primary support action.

## Elevation & effects

_None found in source._

## Components

_None found in source._

## Screen patterns

### Support create page

- Canvas: 375×812px with `#010518` fill.
- Shows creator context including a 140×100px content image area, creator name, backer count, funding amount, monthly suffix, and description.
- Displays payment method options at 327×70px:
  - Visa option with a white surface and 24px radius.
  - Master Card option with a 1px `#8B8FA0` stroke and 24px radius.
  - AnggaPay option with a 1px `#8B8FA0` stroke and 24px radius.
- Uses a 327×50px amber primary action labeled “Support Now”.
- Places “Terms & Conditions” beneath the primary action.
- Payment-brand and creator-brand artwork is represented by source image/vector assets.

### Supporting asset frames

- A 100×100px frame uses `#010518`.
- A 100×100px frame uses `#FCAD00`.
- A 100×100px frame uses `#FFFFFF`.
- A 100×100px frame uses `#8B8FA0`.
- A separate tutorial heading asset uses Inter Bold at 55px.

## Notes for implementers

- Preserve the four documented palette colors and their semantic roles.
- Use a 327px content width for payment options and the primary action on the 375px mobile canvas.
- Keep payment options at 70px height and the primary action at 50px height.
- Apply 24px radius to payment options and 50px radius to the primary action.
- Use amber emphasis for the monetary amount and support action.
- Use muted gray for secondary information and outlined payment-option borders rather than primary labels.
- No reusable component specifications were extracted; implement the patterns as screen-level UI rather than assuming a component library.
