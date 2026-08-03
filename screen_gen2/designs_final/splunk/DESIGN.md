---
name: splunk-web-app-icon-toolkit-community
source: Splunk Web App Icon Toolkit (Community)
kind: design-system-context
---

# splunk - Design System

## Overview

Splunk Web App Icon Toolkit for designing, previewing, and exporting web app icons. The system centers on the reusable `Icon (Edit me)` component and provides cover, design, mockup, instruction, and export screens.

## Design language

- Dark Splunk Enterprise application chrome with white text and green brand accents.
- Large instructional typography using SF Pro.
- App icons use rounded square containers with a linear gradient and translucent white decorative vector overlays.
- Layouts use spacious presentation areas and a 16px page margin.
- Icon previews are shown in sidebar, app bar, and export contexts.

## Color palette

| Color | Token / usage | Observed usage |
|---|---|---:|
| #FFFFFF | `basic/grayscale/white`; primary light surface and text | 230 raw uses |
| #000000 | Unstyled dark text | 15 raw uses |
| #FFFFFF66 | Translucent white icon overlays | 12 raw uses |
| #5CC05C | `brand/Enterprise`; Splunk Enterprise accent | 7 raw uses |
| #000000D9 | Unstyled primary instructional text | 4 raw uses |
| #32373D | Dark mockup surface and placeholders | 4 raw uses |
| #3E444C | Sidebar and app row surface | 3 raw uses |
| #171D21 | `basic/grayscale/gray-20`; dark header background | Token; 1 most-used style use |
| #C3CBD4 | `basic/grayscale/gray-80`; muted app-bar text | Token; 1 most-used style use |
| #3C444D | `basic/grayscale/gray-30`; app-bar background | Token; 1 most-used style use |

Most-used named styles: `basic/grayscale/white` (7), `brand/Enterprise` (2), `basic/grayscale/gray-20` (1), `basic/grayscale/gray-30` (1), and `basic/grayscale/gray-80` (1).

## Type scale

Typeface: SF Pro.

| Size | Weight | Usage |
|---:|---|---|
| 14px | Regular | App titles, labels, and enterprise text |
| 32px | Regular | Instructional descriptions |
| 53.91px | Medium | Instruction and export headings |
| 60px | Regular | Cover subtitle |
| 150px | Black | Cover heading |
| 197.95px | Black | Cover heading |

Raw typography usage: SF Pro Regular 14px (4), SF Pro Regular 32px (4), and SF Pro Medium 53.91px (3).

## Spacing scale

- 16px page margin.
- 0px grid gutter.
- 12px horizontal padding in sidebar app rows.
- 16px horizontal padding in sidebar app rows.
- 16px gap between sidebar app icon and title.
- 27px gap between app-bar navigation items.
- 12px gap in the app-bar title/icon group.
- 25.42px gap in the header logo-and-app group.
- Sidebar app rows use a `-1px` vertical gap.
- Grid: 1 column across a 1408px section and 1 row across a 992px section, both stretched.

## Radius scale

- 0px: instruction groups.
- 2.22px: mockup sidebar image icon.
- 3.11px: app-bar icon instance.
- 4px: 36px icon instances and export logo icon.
- 8px: header placeholders.
- 16px: 144px default icon.
- Radius values scale with icon size in the reusable icon component.

## Elevation & effects

- Mockup sidebar app rows use inner shadows with vertical offsets of `0px -1px`; the second row also uses `0px 1px`.
- Mockup app bar uses an inner shadow with offset `1px 0px`.
- No local effect styles or motion tokens were found.
- Header placeholders use rounded pill-like geometry with an 8px radius.

## Components

### Icon (Edit me)

Allowed component family: `Icon (Edit me)`.

- Base component size: 144px × 144px.
- Default icon container: rounded square with a 16px radius.
- Decorative overlays use translucent white `#FFFFFF66`.
- Used at 36px × 36px in sidebar app rows and export frames.
- Used at 28px × 28px in the app bar and `appLogo` export frame.
- The 36px export frames are named `appIcon` and `appIconAlt`.
- The 40px export frame `appLogo` contains a 28px icon instance.
- The component scales responsively in its default 144px context.

## Screen patterns

- **Cover:** 1920px × 1080px presentation frame with a large white decorative image area, oversized white headings, and a white subtitle.
- **Design / Icon:** Isolated 144px editable icon component.
- **Design / Mockup:** 1440px × 1024px application mockup with a dark surface, 270px sidebar, 44px app bar, and 34px header.
- **Design / Instructions:** Large SF Pro Medium heading paired with a 32px SF Pro Regular explanatory line.
- **Export:** Large “Export icons” heading, export guidance, and preconfigured icon frames.
- **Export frames:** `appIcon` and `appIconAlt` use 36px icon instances; `appLogo` uses a 28px icon instance inside a 40px frame.

## Notes for implementers

- Use the `Icon (Edit me)` component for all editable and previewed app icon instances.
- Preserve the exported frame names `appIcon`, `appIconAlt`, and `appLogo`.
- Keep 36px icon instances for app icons and 28px instances for app-logo contexts.
- Use SF Pro Regular at 14px for application labels and 32px for instructional copy.
- Use SF Pro Medium at 53.91px for instructional and export headings.
- Use `#5CC05C` for Enterprise branding and selected navigation indicators.
- Use `#171D21`, `#3E444C`, and `#32373D` to establish the dark application chrome.
- Use `#FFFFFF66` only for translucent decorative icon overlays.
- Export icon files to `$SPLUNK_HOME/etc/apps/$APP_NAME/static` as specified by the source instructions.
