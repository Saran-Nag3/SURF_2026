---
name: signal-org-icon-concept-macos-big-sur-ios-14-community
source: Signal.org Icon Concept - MacOS Big Sur, IOS 14 (Community)
kind: design-system-context
---

# signal - Design System

## Overview

Icon concept exploration for macOS Big Sur and iOS 14. The source focuses on app-icon compositions, rounded app frames, gradient fills, glass-like presentation, wallpaper imagery, and decorative lighting effects.

## Design language

- Large rounded-square icon frames.
- Soft, layered presentation using blur, shadows, highlights, and translucent surfaces.
- App icons are presented at 842x842px.
- The thumbnail composition uses a centered icon panel with large padding and gaps.
- Visual treatments include gradients, image fills, decorative highlights, and dimensional shadows.
- White is the dominant extracted color, followed by pale blue.

## Color palette

| Color | Usage |
|---|---:|
| #FFFFFF | 9 uses |
| #D6E7FF | 8 uses |

## Type scale

_None found in source._

## Spacing scale

- 200px: thumbnail panel padding on all sides.
- 200px: gap between items in the thumbnail icon layout.

## Radius scale

- 194px: app-icon frame radius.
- 300px: thumbnail icon-panel radius.

## Elevation & effects

- 100px layer blur on the thumbnail wallpaper background.
- 250px background blur on the thumbnail icon panel.
- 85px drop shadow with 0, 80px offset on the thumbnail icon panel.
- 5px inner shadow with 0, -10px offset on the thumbnail icon panel.
- 6px inner shadow with 0, 10px offset on the thumbnail icon panel.
- 20px layer blur on the Apple Messages shadow.
- 60px drop shadow with 0, 30px offset on the Apple Messages shadow.
- 44px inner shadow with 0, -60px offset on the Apple Messages bubble highlight.
- 3px layer blur on the Apple Messages left highlight.
- 14px layer blur on the Apple Messages right shadow.

## Components

_None found in source._

## Screen patterns

- **Thumbnail / design equasion:** 4697x2640.28px white canvas with a 4828x2758px wallpaper background. A centered 4126x1242px icon panel uses 200px padding, 200px gaps, 300px radius, and blurred translucent presentation effects.
- **icons / Signal icon:** 842x842px white frame containing an 842x842px rounded app frame with 194px radius and a 614x614px logo group.
- **icons / original - Signal icon:** 842x842px white frame containing an 842x842px rounded app frame with 194px radius and an image fill.
- **icons / Apple Messages icon:** 842x842px white frame containing an 842x842px rounded app frame with 194px radius. The icon includes layered chat-bubble vectors, a shadow, highlights, and blurred lighting effects.

## Notes for implementers

- No reusable component families, local styles, variables, typography tokens, spacing variables, radius variables, motion tokens, effect styles, or grid styles were extracted.
- Preserve the 842x842px icon canvas and 194px app-frame radius when recreating icon variants.
- Use layered gradients or image fills for app-frame backgrounds where specified by the screen pattern.
- Recreate the thumbnail panel with 200px padding, 200px gaps, a 300px radius, background blur, and layered shadows.
- Keep decorative highlights and shadows as separate layers so their blur and offset effects can be controlled independently.
