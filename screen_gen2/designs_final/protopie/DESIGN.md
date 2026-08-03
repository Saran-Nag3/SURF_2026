---
name: protopie-build-a-realistic-mobile-app-prototype-community
source: ProtoPie - Build a Realistic Mobile App Prototype (Community)
kind: design-system-context
---

# protopie - Design System

## Overview

A dark, mobile-first social/discovery interface system with a 375×812px screen pattern. The source includes a decorative teal-coral cover and three primary app screens: Settings, Discover, and People.

## Design language

- Predominantly dark interfaces using #000000 backgrounds and #FFFFFF primary text.
- Secondary text uses translucent white values such as #FFFFFF80 and #FFFFFF59.
- iOS-oriented typography uses SF Pro Text and SF Pro Display; Inter SemiBold is used for a large display size.
- Large page headings use bold display typography.
- Lists use 60px-high rows with icon, label, secondary value, and optional navigation affordance.
- Discover and People screens use translucent top bars with background blur.
- Accent colors include #0584FE, #19A3FE, #5AD439, #C7F0BB, and red tones from #994444 through #D76A6A.
- Cover artwork uses teal-coral radial gradients.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| #000000 | 175 | Primary dark background and surfaces |
| #FFFFFF | 167 | Primary text, icons, and light surfaces |
| #0584FE | 86 | Blue accent |
| #979797 | 42 | Neutral gray |
| #FFFFFF33 | 35 | Translucent white fills and icon backgrounds |
| #FFFFFF80 | 35 | Secondary text |
| #D8D8D8 | 24 | Light neutral |
| #FFFFFF59 | 21 | Muted translucent white |
| #CB4949 | 20 | Red accent |
| #19A3FE | 14 | Light blue accent |
| #5AD439 | 14 | Green status accent |
| #FFFFFF00 | 12 | Transparent white |
| #00000026 | 10 | Translucent black and subtle borders/shadows |
| #676E75 | 10 | Muted gray icon color |
| #43474D | 8 | Dark neutral |
| #8E8E93 | 8 | Search placeholder and muted gray |
| #A14A4A | 8 | Red accent |
| #A34141 | 8 | Red accent |
| #11111199 | 6 | Translucent dark overlay |
| #B95B5B | 6 | Red accent |
| #D34646 | 6 | Red accent |
| #00000000 | 5 | Transparent black |
| #3B3B3B | 4 | Dark neutral |
| #994444 | 4 | Red accent |
| #A14B4B | 4 | Red accent |
| #B35D5D | 4 | Red accent |
| #C04646 | 4 | Red accent |
| #C7F0BB | 4 | Pale green status surface |
| #D76A6A | 4 | Light red accent |

Named color styles:

- `Text/[Light] Primary Text`: #181818.
- `BSG Colors/Base Colors/Logo color`: #23262E with #00000033.
- `State/[Light] Secondary Selected Surface`: linear gradient from #FFFFFF at 0% to #F6F8FC at 100%.
- `BSG Gradients/Teal-Coral`: #FFFFFF base with radial gradients:
  - #FF8B81 at 0% to #FFB2A700 at 100%.
  - #FFFFFF at 0% to #FFFFFF00 at 100%.
  - #81DBDB at 0% to #81DBDB00 at 100%.

## Type scale

| Size | Font | Weight | Usage count |
|---:|---|---|---:|
| 31px | Inter | SemiBold | 11 |
| 30px | SF Pro Display | Bold | 4 |
| 24px | SF Pro Display | Bold | 3 |
| 17px | SF Pro Text | Medium | 25 |
| 17px | SF Pro Text | Regular | 19 |
| 17px | SF Pro Text | Semibold | 5 |
| 15px | SF Pro Text | Semibold | 9 |
| 14px | SF Pro Text | Regular | 17 |
| 13px | SF Pro Text | Regular | 19 |
| 13px | SF Pro Text | Bold | 5 |
| 13px | SF Pro Text | Semibold | 5 |
| 13px | SF Pro Text | Medium | 3 |
| 8px | SF Pro Text | Medium | 4 |

Observed hierarchy:

- Page headings: SF Pro Display Bold, 30px.
- Profile heading: SF Pro Display Bold, 24px.
- Primary list labels and controls: SF Pro Text Medium or Regular, 17px.
- Section labels and supporting text: SF Pro Text, 13px.
- Compact status labels: SF Pro Text Medium, 8px.

## Spacing scale

_None found in source._

## Radius scale

_No radius variables found in source._

Observed radii:

- 14px: selected tab surface.
- 10px: search field.
- 5px: “Was Online” status pill.
- 2.67px and 1.33px: status bar battery shapes.

## Elevation & effects

- Background blur: 54.37px on translucent top bars and tab bars.
- Drop shadow: 8px blur with 0 3px offset using #00000026.
- Drop shadow: 1px blur with 0 3px offset is used on the switch knob; the source also includes #00000026.
- Thin separators use #FFFFFF33 with a 0.5px stroke.
- Image-backed circular assets use a #00000026 border with a 0.33px stroke.

## Components

_None found in source._

## Screen patterns

- **Cover**: 1600×1080px decorative composition using the teal-coral gradient, large background artwork, design artwork, and a bottom-aligned logo.
- **Settings**: 375×812px dark settings screen. Includes a top bar with “Done”, a profile section with avatar/code artwork and name, grouped 60px settings rows, switches, navigation arrows, secondary values, separators, and a “Preferences” section.
- **Discover**: 375×812px dark discovery screen. Includes a blurred top bar with page title and avatar, a 48px search area, “For you” and “Businesses” tabs, recent circular items, a company list with 76px rows, and a blurred bottom tab bar.
- **People**: 375×812px dark people screen. Includes a blurred top bar with title and actions, search, story content, 60px person rows with avatars and online status indicators, a “Recently active” section, and a bottom tab bar.

## Notes for implementers

- Target the 375×812px mobile viewport for app screens.
- Use #000000 for primary app backgrounds and #FFFFFF for primary text and icons.
- Use #FFFFFF80 for secondary text and #FFFFFF33 for translucent icon or selected-state surfaces.
- Preserve 60px list-row height for Settings and People rows.
- Use 48px search areas with a 36px-high inner search field and 10px radius.
- Use 30px SF Pro Display Bold for primary screen headings.
- Keep top bars and bottom tab bars translucent with 54.37px background blur.
- Treat imagery and decorative artwork as asset-backed visuals rather than recreating them from unspecified colors.
- No component sets, spacing variables, radius variables, motion variables, or local text styles were extracted.
