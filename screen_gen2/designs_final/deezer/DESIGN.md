---
name: deezer-app-concept-community
source: Deezer App Concept (Community)
kind: design-system-context
---

# deezer - Design System

## Overview

- Source: Deezer App Concept (Community), Page 1.
- Primary viewport: 390×844px mobile screens.
- Screens represented: Home and Player.
- No local variables, paint styles, text styles, spacing variables, radius variables, motion variables, or component sets were found.

## Design language

- Dark music-app interface centered on a #1C1C1C background.
- High-contrast white text and icons.
- Vivid purple is the primary accent for active navigation, the mini-player, gradients, and selected states.
- Large, condensed display typography creates an expressive editorial hierarchy.
- Rounded playlist tiles and player surfaces use prominent corner radii.
- Navigation uses translucent dark surfaces, layered opacity, and blur effects.
- Album artwork is used as a major visual anchor in the Player screen, with a blurred artwork background.

## Color palette

Ranked by observed usage:

| Color | Uses | Role |
|---|---:|---|
| #FFFFFF | 149 | Primary text, icons, artwork marks, and foreground content |
| #000000 | 43 | Dark playlist tile backgrounds and text on bright tiles |
| #868686 | 20 | Neutral secondary interface color |
| #00000080 | 16 | Translucent black overlays |
| #A238FF | 14 | Primary purple accent, active navigation, and mini-player |
| #505050 | 12 | Inactive navigation surfaces |
| #A0A0A0 | 12 | Inactive navigation highlights |
| #D9D9D9 | 10 | Neutral light color |
| #FFFFFF26 | 8 | Low-opacity white overlays |
| #FFFFFF40 | 8 | Translucent white overlays |
| #0000000D | 6 | Low-opacity black overlays |
| #1C1C1C | 6 | Primary app background |
| #7B9CFF | 6 | Blue playlist tiles |
| #E438FF | 6 | Bright pink playlist tiles |
| #FD6149 | 6 | Coral accent artwork and icons |
| #FFFFFF80 | 6 | Semi-transparent white content |
| #6038FF | 5 | Purple accent variation |
| #1F1F1F99 | 4 | Blurred Player background overlay |
| #262626CC | 4 | Translucent bottom navigation surface |
| #434343 | 4 | Player progress or handle element |
| #00000033 | 3 | Translucent black overlay |

## Type scale

Font families used:

- Barlow Condensed: display and interface typography.
- SF Pro: system status-bar typography.

Observed styles, ranked by usage:

| Font | Size | Weight | Uses |
|---|---:|---|---:|
| Barlow Condensed | 25px | Bold | 18 |
| Barlow Condensed | 15px | Regular | 14 |
| Barlow Condensed | 20px | Regular | 8 |
| Barlow Condensed | 36px | Bold | 6 |
| Barlow Condensed | 60px | Bold | 4 |
| Barlow Condensed | 22px | SemiBold | 4 |
| Barlow Condensed | 25px | SemiBold | 4 |
| Barlow Condensed | 35px | SemiBold | 4 |
| SF Pro | 17px | Semibold | 4 |

Hierarchy:

- 60px Barlow Condensed Bold: primary screen title, such as “Home”.
- 36px Barlow Condensed Bold: large playlist tile title.
- 35px Barlow Condensed SemiBold: large Player control text.
- 25px Barlow Condensed Bold or SemiBold: section headings and prominent playlist titles.
- 22px Barlow Condensed SemiBold: mini-player track title.
- 20px Barlow Condensed Regular: secondary playlist labels.
- 17px SF Pro Semibold: status-bar time.
- 15px Barlow Condensed Regular: metadata, descriptions, and artist names.

## Spacing scale

_None found in source._

## Radius scale

Observed radii; no radius tokens were defined:

- 3px: small polygon detail.
- 9px: player handle.
- 12px: navigation highlight shapes.
- 20px: mini-player container.
- 30px: playlist tiles, album artwork, Player surface, and blurred artwork background.
- 0px: square or explicitly unset corners.

## Elevation & effects

- Bottom navigation surface: background blur 60px and layer blur 20px.
- Navigation highlight: layer blur 8px.
- Player blurred artwork background: background blur 120px.
- Flow decorative glow: background blur 40px and layer blur 60px.
- Album artwork: drop shadow with 15px blur and an offset of 0px horizontal, 7px vertical.
- Translucency is frequently used for navigation, overlays, and secondary content through the listed alpha colors.

## Components

_None found in source._

## Screen patterns

### Home

- 390×844px dark mobile screen with a large “Home” title in 60px Barlow Condensed Bold.
- Content is organized into horizontal sections:
  - “Made for You” with 150×150px playlist tiles.
  - “Flow: listen to the mood” with 100×100px mood tiles and a 150×150px Flow tile.
  - “Last listening” with 100×100px listening tiles.
- Playlist and mood tiles use 30px corner radii.
- The bottom navigation and mini-player remain visible:
  - Four navigation destinations: Home, Shuffle, Heart, and Search.
  - Active Home state uses purple layered highlights.
  - Mini-player uses a 380×55px purple surface with a 20px radius.

### Player

- 390×844px dark mobile screen with a rounded Player surface.
- Artwork is shown as a 338×338px rounded square over a blurred, darkened artwork background.
- Track title uses Barlow Condensed SemiBold; artist metadata uses Barlow Condensed Regular.
- Player controls and progress elements are white or neutral gray with reduced opacity.
- Bottom navigation and the purple mini-player follow the same pattern as Home.

## Notes for implementers

- Use only the listed colors; prioritize #FFFFFF for foreground content and #1C1C1C for the main app background.
- Use Barlow Condensed for all product content unless rendering the system status-bar time, which uses SF Pro Semibold at 17px.
- Preserve the type hierarchy: 60px for screen titles, 25px for section headings, 22px for mini-player titles, and 15px for supporting metadata.
- Use 30px radii for playlist tiles and major artwork surfaces; use 20px for the mini-player and 12px for navigation highlight shapes.
- Build navigation as a translucent dark blurred surface with four 31px icon instances. The active state uses #A238FF; inactive states use #A0A0A0 and #505050.
- Keep the mini-player at 380×55px with a #A238FF fill and 20px radius.
- Use opacity and blur to separate layered surfaces rather than introducing additional colors.
- Do not assume reusable component definitions exist; the extraction contains no component families or component specifications.
