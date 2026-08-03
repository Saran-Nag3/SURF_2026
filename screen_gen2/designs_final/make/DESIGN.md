---
name: make-simple-app-community
source: Make Simple app (Community)
kind: design-system-context
---

# make - Design System

## Overview

- Dark, high-contrast beauty community app interface.
- Primary surface color: `#000000`.
- White text, rounded controls, image-led product discovery, and muted gray form surfaces.
- Source screens include a desktop cover and mobile prototype screens at `430x932px`.

## Design language

- Use a black foundation with white typography and controls.
- Use `#FFFFFFCC` for secondary labels and helper text.
- Use `#D9D9D9` for input fields, selectors, and product/result surfaces.
- Use `#965128` as the accent action color.
- Controls consistently use pill-shaped corners.
- Display typography uses Big Shoulders Display; body and utility text use Big Shoulders Display or Apple SD Gothic Neo Thin.
- Product discovery is image-forward, with rounded image cards and circular save/discard actions.

## Color palette

| Color | Usage |
|---|---:|
| `#FFFFFF` | 120 uses |
| `#FFFFFF33` | 60 uses |
| `#000000` | 20 uses |
| `#FFFFFFCC` | 19 uses |
| `#D9D9D9` | 4 uses |
| `#965128` | 3 uses |
| `#1C1C1E` | Primary color; 3 uses |

## Type scale

- `40px` — Big Shoulders Display Medium; logo or large heading.
- `25.83px` — Apple SD Gothic Neo Thin.
- `24px` — Big Shoulders Display Medium; headings and navigation.
- `20px` — Big Shoulders Display Medium; prominent button labels.
- `14px` — Big Shoulders Display Medium; standard labels and navigation text.
- `14px` — Big Shoulders Display Bold; section labels and product metadata.
- `28.92px` — Big Shoulders Display Medium; navigation logo text.

## Spacing scale

_None found in source._

## Radius scale

- `40px` — primary screen frames, pill buttons, fields, selectors, product cards, and image cards.
- `43.97px` — best-match result image.
- `100px` — home indicator.
- `0px` — several group containers.

## Elevation & effects

_None found in source._

## Components

### Sign up button

- Size: `96x28px`.
- Fill: `#965128`.
- Stroke: `#FFFFFF`, `2px`.
- Radius: `40px`.
- Label: `Sign up`.
- Label typography: Big Shoulders Display Medium, `14px`.
- Label color: `#FFFFFF`.

### discart button

- Size: `72x72px`.
- Circular white background: `#FFFFFF`.
- Icon color: Primary color `#1C1C1E`.

### log in button

- Recorded size: `96x28px`.
- Prototype text variant: Big Shoulders Display Medium, `14px`.
- Additional prototype text variant: Big Shoulders Display Medium, `20px`.
- Prototype button rectangle is also recorded as `162x28px`.
- White variant:
  - Fill: `#FFFFFF`.
  - Stroke: `#FFFFFF`, `2px`.
  - Label color: `#000000`.
- Brown variant:
  - Fill: `#965128`.
  - Stroke: `#FFFFFF`.
- Radius: `40px`.

### nav

- Size: `345x51px`.
- Navigation heading: Big Shoulders Display Medium, `24px`.
- Logo variant: Big Shoulders Display Medium, `28.92px`.
- Uses white text and white navigation icons.
- Includes a person icon; some variants include a left chevron.

### photo button

- Size: `162x28px`.
- Fill: `#FFFFFF`.
- Stroke: `#FFFFFF`, `2px`.
- Radius: `40px`.
- Uses a camera icon in primary color `#1C1C1E`.

### save button

- Size: `72x72px`.
- Circular white background: `#FFFFFF`.
- Icon color: Primary color `#1C1C1E`.

## Screen patterns

- **Cover / Desktop - 1:** `1440x1024px` black desktop frame with `40px` radius and large decorative imagery.
- **Sign up:** Black `430x932px` mobile screen with social icons, email and password fields, a white log-in action, and a brown sign-up action.
- **My account:** Black `430x932px` screen with a `40px` radius, account details, password fields, white labels, muted helper text, and a white log-in button.
- **Selection:** Black mobile screen with navigation, a large `350x547px` rounded image selection area, two brown `160x26px` actions, and a home indicator.
- **Find your shade:** Black mobile screen with upload/photo actions, an `OR` label, four `226x28px` selectors, and a `350x194px` rounded feature card.
- **Best match:** Black mobile screen with navigation, a `350x505px` rounded result image, a product information panel, a tips panel, and `72x72px` save/discard actions.
- **Saved matches:** Black mobile screen with repeated `165x87.62px` product rows, gray `163x80px` rounded surfaces, white borders, product imagery, and bottom navigation.

## Notes for implementers

- Preserve the exact component family spelling `discart button`.
- Use only the documented colors; the primary color token is `#1C1C1E`.
- Treat `#FFFFFFCC` as secondary or muted white text and `#FFFFFF` as primary white text and controls.
- Keep mobile screens at `430x932px` with black backgrounds and `40px` outer corner radius.
- Apply `40px` radius to pill controls and rounded cards unless a screen-specific radius is documented.
- Use `2px` white strokes on documented fields and buttons.
- Do not infer spacing, elevation, motion, or local text styles; none were found in the source.
