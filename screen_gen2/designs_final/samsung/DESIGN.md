---
name: samsung-experience-app-icons-community
source: Samsung Experience App Icons (Community)
kind: design-system-context
---

# samsung - Design System

## Overview

- Source: Samsung Experience App Icons (Community), Page 1.
- The file presents Samsung Experience app icons and file-type icon assets.
- No local variables, styles, components, or component geometry were found.
- Primary asset tile size: `512px × 512px`.

## Design language

- Image-led icon presentation with large, square asset tiles.
- SamsungOne Bold typography is used for prominent labeling.
- Thumbnail composition combines a full-bleed image background, blurred circular and rectangular layers, white display text, and app icon imagery.
- The source emphasizes visual asset browsing rather than reusable UI components.

## Color palette

| Color | Usage |
|---|---:|
| `#000000` | 25 uses |
| `#FFFFFF` | 3 uses |

## Type scale

| Style | Font | Weight | Size | Usage |
|---|---|---:|---:|---:|
| Raw typography | SamsungOne | 700 | `512px` | 21 uses |
| Thumbnail heading | SamsungOne | 700 | `200px` | “App Icons” heading |

## Spacing scale

_None found in source._

## Radius scale

- `60px` radius on the thumbnail’s large rectangular overlay.

## Elevation & effects

- `background_blur` with `50px` blur radius is used on the thumbnail’s circular and rectangular layers.
- No local effect styles or elevation tokens were found.

## Components

_None found in source._

## Screen patterns

### Canvas

- Frame size: `20010px × 14714px`.
- White canvas background.
- Contains a large collection of image-based file and application icons.
- Listed assets use `512px × 512px` rectangles, including Word, voice recording, video, text, story album, SPD, Soundcamp, SNB, Scrapbook, Samsung Notes, Rich Text, RAW, PowerPoint, PDF, other file type, MHTML, Memo, image, HWP, HTML, GUL, folder, Excel, email, and contact assets.
- Additional children are present beyond the listed assets.

### Thumbnail

- Frame size: `1600px × 960px`.
- Includes an `Apps` image layer sized `1760px × 990px`.
- Uses two blurred ellipse layers and one blurred rectangular overlay.
- Displays the white “App Icons” heading in a `480px × 386px` text area.
- Includes “Samsung Experience Home” imagery at `280px × 280px`.
- Includes an `Apps` icon image at `200px × 200px`.

## Notes for implementers

- Preserve the `512px × 512px` tile format for icon assets.
- Use image assets for file and application icons; no vector icon construction rules were extracted.
- Use SamsungOne Bold for the documented typography.
- Keep the thumbnail heading at `200px` when reproducing the extracted thumbnail composition.
- Apply `50px` background blur to the documented thumbnail layers.
- Apply a `60px` radius to the documented thumbnail rectangle.
- Do not infer additional colors, spacing tokens, components, or interaction behavior; they were not present in the source.
