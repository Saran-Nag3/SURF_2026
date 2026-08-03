---
name: google-chrome-ui-kit-community
source: Google Chrome UI Kit (Community)
kind: design-system-context
---

# google - Design System

## Overview

Google Chrome desktop browser UI kit covering light and dark browser shells, browser tabs, URL controls, browser control bars, icons, and an “Acerca de mi” card.

Source pages: Cover, Buscadores, Componentes.

No local variable collections, text styles, spacing variables, radius variables, motion tokens, effect styles, or grid styles were found.

## Design language

- Desktop browser chrome with distinct browser-control and URL-control bars.
- Light mode uses white browser surfaces, a light-gray control bar, and a pale-gray URL field.
- Dark mode uses dark URL-control and control-bar surfaces with the same browser structure.
- Browser controls use three 12px circular indicators: green expand, yellow minimize, and red close.
- Icons are primarily 24x24px components, with 16x16px and 12x12px instances in browser toolbars.
- The “Acerca de mi” card uses a horizontal image-and-content layout with a dark fill, outlined border, rounded corners, and centered vertical alignment.

## Color palette

Ranked by raw usage:

| Color | Raw uses | Observed role |
|---|---:|---|
| #5F6368 | 69 | Primary browser-control and URL-control icon color |
| #FFFFFF | 34 | Browser surfaces, tabs, icon component backgrounds, and light text |
| #979797 | 24 | Image/profile strokes and tab-related strokes |
| #D8D8D8 | 18 | Raw extracted neutral |
| #35363A | 8 | Dark URL-controls background |
| #202124 | 7 | Dark URL field and URL text |
| #3C4043 | 6 | Browser-control icons and icon components |
| #27CA40 | 5 | Expand control |
| #3EAF3F | 5 | Expand control stroke |
| #E14942 | 5 | Close control stroke |
| #E1A325 | 5 | Minimize control stroke |
| #FF6058 | 5 | Close control |
| #FFC130 | 5 | Minimize control |
| #494C4F | 4 | Browser-tab text |
| #86888A | 4 | Raw extracted neutral |
| #EAEAEA | 4 | Raw extracted neutral |
| #696A6C | 3 | Secondary URL text |
| #DEE1E6 | 3 | Light browser control-bar background |
| #F1F3F4 | 3 | Light URL field background |
| #1F1F21 | — | Card fill and border tokens |
| #BABCBE | — | Disabled URL-control icon token |

Named color tokens:

- `Icon/Browser Controls/Light`: #3C4043
- `Icon/URL Controls/Disabled/Light`: #BABCBE
- `Rellenos`: #1F1F21
- `Bordes`: #1F1F21

## Type scale

- 12px — Roboto Regular; 13 raw uses. Used in browser chrome and browser-tab text.
- 14px — Roboto Regular; 10 raw uses. Used in URL controls.
- 18.75px — DM Sans Regular; 4 raw uses. Used for card body text.
- 18.75px — DM Sans Medium. Used for card button text.
- 50px — Poppins SemiBold. Used in the thumbnail preview heading.
- 56.24px — DM Sans Medium. Used for the “Acerca de mi” heading.
- 100px — Poppins Bold. Used in the thumbnail preview display heading.

Hierarchy explicitly identified in the source: 56.24px DM Sans Medium, 18.75px DM Sans Regular, 14px Roboto Regular, 12px Roboto Regular.

## Spacing scale

Explicit values observed:

- 8px — Browser-tab internal corner radius and tab/control spacing.
- 9px — Browser-tab internal gap.
- 10px — Card button gap.
- 16px — Card button horizontal padding; icon and control sizing contexts.
- 20px — Card content vertical padding and button right/left padding.
- 28.06px — Card text-section gap.
- 28.12px — Card outer padding and content-section gap.
- 37.49px — Card horizontal image/content gap and text-section gap.

Additional toolbar dimensions:

- Browser control bar: 42px high.
- URL-control toolbar: 38px high.
- URL field: 28px high.
- Browser-tab: 34px high.

## Radius scale

- 2px — Placeholder icon container.
- 8px — Browser outline; browser control-bar top corners; card button.
- 9.37px — “Acerca de mi” card and personal-image corners.
- 14px — URL field.
- 15px — Buscadores rectangles.
- 28.34px — Thumbnail preview image top corners.
- 30px — Thumbnail preview image tile.
- 38px — Thumbnail preview red rectangle.

The source also specifies a 0/0/8/8px radius pattern for the browser content image and an 8/8/0/0px pattern for browser control-bar and tab surfaces.

## Elevation & effects

- Light URL controls use an inner shadow with 0px horizontal offset, -1px vertical offset.
- Dark browser control bar uses a drop shadow with 4px offset and 0px blur.
- Buscadores rectangles use a drop shadow with 22px blur and 0px horizontal, 12px vertical offset.
- No local effect styles were found.

## Components

### Browser

Allowed family: `Browser`.

- `Browser / Chrome / Light`
  - Size: 1440x1160px.
  - Fill: #FFFFFF.
  - Browser and URL controls occupy 1440x80px.
  - URL-control toolbar: 1440x38px.
  - Browser control bar: 1440x42px.
  - Browser outline radius: 8px.
  - Text: Roboto Regular 12px and 14px.
- `Browser / Chrome / Dark`
  - Size: 1440x1160px.
  - Uses the same browser structure as the light browser.
  - URL-controls background: #35363A.
  - URL-field background: #202124.
  - Control-bar background: #202124.
  - Browser outline radius: 8px.
  - Text: Roboto Regular 12px and 14px.

### Broswer Control Bar

Allowed family: `Broswer Control Bar`.

- Size: 1440x42px.
- Light background: #DEE1E6.
- Top-corner radius: 8px.
- Contains a 167x34px tab-and-plus region.
- Contains a 52x12px browser-controls region.
- Control indicators: 12x12px each.
  - Expand: fill #27CA40, stroke #3EAF3F, stroke width 0.5px.
  - Minimize: fill #FFC130, stroke #E1A325, stroke width 0.5px.
  - Close: fill #FF6058, stroke #E14942, stroke width 0.5px.

### Browser Tab

Allowed family: `Browser Tab`.

- `Browser Tab / With Plus`
  - Size: 131x34px.
  - Tab content uses 8px horizontal padding and 9px internal gap.
  - Tab surface radius: 8/8/0/0px.
  - Favicon: 16x16px.
  - Tab text: Roboto Regular 12px, color #494C4F.
  - Close icon instance: 18x18px.
  - Plus icon instance: 20x20px.
  - New-tab icon: 13.33x13.33px.
  - Browser tab text is represented as `{tab_name}`.

### Card

Allowed family: `Card`.

- `Card/Acerca de mi`
  - Size: 1133x570.71px.
  - Horizontal layout; align min/center.
  - Padding: 28.12px on all sides.
  - Gap: 37.49px.
  - Radius: 9.37px.
  - Fill token: `Rellenos` (#1F1F21).
  - Border token: `Bordes` (#1F1F21).
  - Stroke width: 1.76px.
  - Personal image: 383.13x514.47px, radius 9.37px.
  - Content area: 656.13x514.47px.
  - Content vertical padding: 20px top and bottom.
  - Content gap: 28.12px.
  - Heading: DM Sans Medium, 56.24px.
  - Body: DM Sans Regular, 18.75px.
  - Button height: 56.24px.
  - Button radius: 8px.
  - Button padding: 16px vertical, 20px horizontal.
  - Button gap: 10px.
  - Button border width: 1px.
  - Button variants:
    - Full-width: 656.13px.
    - Fixed width: 231.99px with a 16.4x16.4px arrow icon.

### Icon

Allowed family: `Icon`.

All listed icon components use a 24x24px frame with #FFFFFF fill unless otherwise specified.

- `Icon / Placeholder`: container 24x24px, radius 2px, fill #5F6368.
- `Icon / New Tab`: 16x16px icon, fill #3C4043.
- `Icon / Close`: 10x10px vector, fill #3C4043.
- `Icon / Arrow / Secure`: 16x21px container, fill #5F6368.
- `Icon / Arrow / Refresh`: 18x18px container, fill #5F6368.
- `Icon / Arrow / More`: 4.5x18px container, fill #5F6368.
- `Icon / Arrow / Home`: 18x18px container, fill #5F6368.
- `Icon / Arrow / Forward`: 18x17.54px container, fill #BABCBE.
- `Icon / Arrow / Favorite`: 18x17.21px container, fill #5F6368.
- `Icon / Arrow / Back`: 18x17.53px container, fill #5F6368.

### Toolbar - URL Controls

Allowed family: `Toolbar - URL Controls`.

- Size: 1440x38px.
- Background: #FFFFFF in light mode.
- URL-controls background in dark mode: #35363A.
- URL field: 1225x28px with 14px radius.
- Light URL field fill: #F1F3F4.
- Dark URL field fill: #202124.
- Left locked-icons region: 109x16px.
- Right locked-icons region: 51x22px.
- Standard toolbar icon instances:
  - Home: 16x16px.
  - Refresh: 16x16px.
  - Forward: 16x16px, disabled color #BABCBE.
  - Back: 16x16px.
  - Favorite: 16x16px.
  - Secure: 12x12px.
  - More: 16x16px.
- URL text uses Roboto Regular 14px.
- Example URL text:
  - `domain.com`: #202124.
  - `/subdomain/`: #696A6C.

## Screen patterns

- **Cover / Card/Acerca de mi:** A large horizontal dark card with a personal image on the left and vertically structured content on the right.
- **Cover / Thumbnail Preview:** A 1920x1080px preview composition with large display typography, a rounded red panel, and image tiles.
- **Buscadores / Browser light:** A 1440x1160px light Chrome browser with a 42px control bar and 38px URL-controls toolbar.
- **Buscadores / Browser dark:** The same browser structure with dark URL-controls and control-bar surfaces.
- **Componentes:** Isolated component showcase screens for URL controls, browser controls, browser tabs, browsers, and individual icons.

## Notes for implementers

- Use only the component families defined in this document.
- Preserve the spelling `Broswer Control Bar` when referring to that component family.
- Keep browser chrome dimensions at 1440x1160px, with an 80px combined browser-controls region.
- Treat the URL-controls toolbar and browser control bar as separate stacked regions: 38px followed by 42px.
- Use 24x24px icon components as the base icon frame; smaller toolbar instances use the explicit sizes listed above.
- Use #BABCBE specifically for disabled forward navigation.
- Use #F1F3F4 for the light URL field and #202124 for the dark URL field.
- Use the three specified indicator color and stroke pairs for expand, minimize, and close controls.
- Do not infer missing local variables, motion values, grid values, effect colors, image assets, or typography styles beyond the values explicitly listed.
