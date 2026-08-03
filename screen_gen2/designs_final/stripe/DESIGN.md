---
name: stripe-notification-ios-community
source: Stripe Notification (iOS) (Community)
kind: design-system-context
---

# stripe - Design System

## Overview

A single iOS-style Stripe notification component on a 450×250px screen. The notification is a fixed 326×79.12px horizontal card with a logo area and payment message content.

## Design language

- Compact, centered notification presentation.
- Horizontal composition with a square logo mark followed by text content.
- Dark notification surface using `#00000080`.
- White primary text on the notification surface.
- Rounded corners and tightly controlled spacing.
- Typography uses Albert Sans with SemiBold and Medium weights.

## Color palette

- `#FFFFFF` — 4 uses; screen background and primary notification text.
- `#00000080` — notification component fill.

## Type scale

Font family: Albert Sans.

- `12.54px`, SemiBold — source label such as “Stripe”.
- `12.02px`, SemiBold — notification message.
- `10.45px`, Medium — secondary timestamp such as “2m ago”.

## Spacing scale

- `0px` — frame padding.
- `3.13px` — vertical text-stack gap and header gap.
- `10.45px` — horizontal component gap.
- `11.49px` — notification component padding on all sides.

## Radius scale

- `6.27px` — logo square radius.
- `13.06px` — notification component radius.

## Elevation & effects

_None found in source._

## Components

### Stripe Notification

- Size: `326×79.12px`.
- Fixed width and fixed height.
- Horizontal layout.
- Padding: `11.49px` on all sides.
- Gap: `10.45px`.
- Alignment: minimum/center.
- Radius: `13.06px`.
- Fill: `#00000080`.
- Contains a `33.96×33.96px` notification logo and a `258.61×56.13px` vertical content frame.
- Content frame gap: `3.13px`.
- Header uses space-between alignment.
- Header label: `35×15px`, Albert Sans SemiBold, `12.54px`.
- Timestamp: `37×13px`, Albert Sans Medium, `10.45px`.
- Message: `258.61×38px`, Albert Sans SemiBold, `12.02px`.

## Screen patterns

### Page 1 — Stripe Notification

- Screen frame: `450×250px`.
- Screen fill: `#FFFFFF`.
- Notification is positioned from the left and top.
- Use one Stripe Notification component with the fixed dimensions and spacing defined above.

## Notes for implementers

- Implement only the Stripe Notification component family.
- Preserve the fixed component size of `326×79.12px`.
- Keep the logo at `33.96×33.96px`.
- Keep the content frame at `258.61×56.13px`.
- Use a vertical content stack with a `3.13px` gap.
- Place the source label and timestamp in a space-between header row.
- Use the exact Albert Sans weights and sizes specified in the type scale.
- Do not introduce additional colors, spacing values, radii, effects, or component variants not present in the source.
