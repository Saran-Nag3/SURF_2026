---
name: nintendo-switch-screens-community
source: Nintendo Switch Screens (Community)
kind: design-system-context
---

# nintendo - Design System

## Overview

- Nintendo Switch UI recreation for 1280×720 screens.
- Primary surfaces use light gray `#F0F0F0`, white navigation/footer areas, and dark Nintendo black.
- Interaction is communicated through circular controller buttons, cyan selection labels, and blue selection outlines.
- Source page: Page 1.
- No local variable collections, spacing variables, radius variables, motion variables, effect styles, or grid styles were found.

## Design language

- Minimal, console-dashboard interface with large tile-based navigation.
- Use high-contrast dark text and icons on light surfaces.
- Selected content uses a `#FFFFFF` outline token named “Selected blue” and cyan `#43D6DF` labels.
- Navigation icons are arranged as large 80×80px icons within 121px-high navigation items.
- Footer actions pair text labels with compact circular controller-button glyphs.
- Decorative icon geometry is predominantly circular, rectangular, and geometric.
- Primary typeface is Nintendo Switch UI; supporting source typography includes SF Pro Display, NanumGothic, Montserrat, and Keyboard.

## Color palette

Ranked by raw usage:

| Color | Usage | Source token / role |
|---|---:|---|
| `#FFFFFF` | 263 | Selected blue token; white surfaces, selected outlines, reversed text |
| `#000000` | 172 | Raw black; footer and status text |
| `#F0F0F0` | 161 | Main screen background and Switch icon interior |
| `#C4C4C4` | 96 | Image placeholders and profile icon base |
| `#E5E5E5` | 44 | Raw neutral |
| `#2E2E2E` | 41 | Nintendo Blk; primary dark fill and icon color |
| `#DCDCDC` | 38 | Icon and border neutral |
| `#414141B5` | 31 | Translucent dark neutral |
| `#FA5757` | 20 | Red accent; online indicator |
| `#757575` | 18 | Mid-gray neutral |
| `#4277FF` | 14 | Raw blue accent |
| `#43D6DF` | 13 | Cyan selection label and status accent |
| `#FFBB36` | 12 | Yellow token |
| `#464646` | 9 | Dark neutral |
| `#79DF49` | 6 | Green accent |
| `#D7D7D7` | 6 | Light neutral |
| `#D2D2D2` | 5 | Light neutral |

Named color tokens:

- Nintendo Blk: `#2E2E2E`
- Selected blue: `#FFFFFF`
- Green: `#3CDC86`
- Blue: `#0047FF`
- Icon Gray: `#8B8B8B`
- Yellow: `#FFBB36`
- Red token: none; raw red usage is `#FA5757`

## Type scale

Named typography tokens use Nintendo Switch UI NintendoSwitchUI at weight 300 and tracking `-0.3px`:

| Token | Font | Size | Line height | Tracking |
|---|---|---:|---|---:|
| Large Text | Nintendo Switch UI NintendoSwitchUI, 300 | 28px | auto | -0.3px |
| Keyboard | Nintendo Switch UI NintendoSwitchUI, 300 | 24px | auto | -0.3px |
| Title | Nintendo Switch UI NintendoSwitchUI, 300 | 24px | auto | -0.3px |
| Tabs | Nintendo Switch UI NintendoSwitchUI, 300 | 20px | auto | -0.3px |
| small text | Nintendo Switch UI NintendoSwitchUI, 300 | 18px | auto | -0.3px |
| caption | Nintendo Switch UI NintendoSwitchUI, 300 | 16px | auto | -0.3px |

Additional raw typography:

- Nintendo Switch UI NintendoSwitchUI: 14px, 16px, 18px, 20px, 24px, 28px.
- SF Pro Display Semibold: 18px.
- NanumGothic NanumGothic: 14px and 20px.
- Montserrat Black: 20px.
- Montserrat Bold: 11px.
- Montserrat Bold: 20px.
- SF Pro Display Semibold: 12px.
- SF Pro Display Bold: 22px.

## Spacing scale

_None found in source._

## Radius scale

No radius variables were found. Explicit component radii:

- Switch icon: 6px outer rectangle radius.
- Video icon rectangle: 2px radius.
- Home icon geometric rectangles: 1px radius; polygon: 3px radius.
- Battery icon geometry includes no listed radius.

## Elevation & effects

- Profile icon includes a drop shadow with 5px offset and `0 0` origin; the extracted shadow color is not included because it is outside the allowed palette.
- Sleep Icon includes a drop shadow with 7px offset and `0 0` origin; the extracted shadow color is not included because it is outside the allowed palette.
- Selection borders:
  - Selected Game: `#FFFFFF`, 6px stroke.
  - Selected circle: `#FFFFFF`, 5px stroke.
- Footer divider: Icon Gray `#8B8B8B`, 1px stroke.
- Battery outline: Nintendo Blk `#2E2E2E`, 3px stroke.

## Components

All dimensions are source dimensions.

### Controls and buttons

- **A button** — 116×28px in footer; standalone controller glyph shown as 48×48px in the starting screen. Footer glyph is 24×24px with a `#2E2E2E` circle and white “A”.
- **B button** — 104×31px; Nintendo Switch UI 18px and SF Pro Display Semibold 18px.
- **X button** — 169×28px; small text plus a 24×24px controller glyph.
- **Y button** — 142×28px; SF Pro Display Semibold 18px and small text.
- **L** — 50×24px; SF Pro Display Semibold 18px.
- **R** — 50×24px; SF Pro Display Semibold 18px.
- **Shift** — 74×28px; small text.
- **Options button** — 18×18px.
- **Add button** — 48×48px.
- **Plus button** — 107×28px; small text plus a 24×24px controller glyph.
- **Edit button** — 22×22px.
- **Benefits** — 92×31px; Tabs typography.

### Navigation and status

- **Tabs** — 384×555px, 456×647px, or 456×544px variants; Tabs typography.
- **Selected Tab** — 280×72px; Tabs typography.
- **Header** — 1280×98px; Nintendo Switch UI 16px and 24px.
- **Footer** — 1280×73px or 1280×76px; SF Pro Display Semibold 18px, small text, and Nintendo Switch UI 18px.
- **Status bar** — 308×96px; NanumGothic 20px and 14px, Nintendo Switch UI 14px.
- **Battery Life** — 35×20px.
- **Switch** — 256×105px.
- **Switch icon** — 64×28px; outer dark rectangle radius 6px.
- **Airplane Mode** — 704×72px; Nintendo Switch UI 16px and Tabs.
- **Profile icon** — 48×73px; Nintendo Switch UI 16px.
- **Online** — 82×28px; Nintendo Switch UI 18px.
- **User** — 136×168px; small text.

### System and service icons

- **Home icon** — 200×200px.
- **Sleep Icon** — 118×121px; Tabs typography; 80×80px icon.
- **Settings Icon** — 154×121px; Tabs typography; 80×80px icon.
- **Controllers Icon** — 108×121px; Tabs typography; 80×80px icon.
- **Album Icon** — 80×121px; Tabs typography; 80×80px icon.
- **eShop Icon** — 159×121px; Tabs typography; 80×80px icon.
- **News Icon** — 80×121px; 80×80px icon.
- **Switch Online Icon** — 233×121px; Tabs and Montserrat Bold 11px; includes an 80×80px online circle.
- **Icon** — 28×28px; SF Pro Display Bold 22px.
- **Settings title** — 1280×97px; Title typography.
- **Controllers title** — 1200×96px; Title typography.
- **Album title** — 1280×97px; Tabs and Title typography.
- **News Title** — 1280×97px; small text and Title typography.
- **Title** — 101×55px with Nintendo Switch UI 24px, or 103×31px with Tabs.

### Content

- **Game** — 256×256px; Nintendo Switch UI 28px. Selected game uses a 6px `#FFFFFF` outline and a 28px cyan title.
- **News** — 304×168px.
- **Featured News** — 280×45px; SF Pro Display Semibold 32px and Large Text.
- **Article** — 336×212px with Nintendo Switch UI 14px and 16px; another variant is 352×241px with Montserrat Black 20px and Nintendo Switch UI 16px.
- **Screenshot** — 208×116px; Nintendo Switch UI 14px.
- **Headline** — 824×376px.
- **Slider** — 122×12px; Nintendo Switch UI 8px.
- **Slider dots** — 92×12px.
- **Keyboard** — 1280×360px; Nintendo Switch UI 20px and 18px, Keyboard 24px, SF Pro Display Semibold 12px and 18px, and small text.
- **Overlay** — 1280×373px; small text, SF Pro Display Semibold 18px, Nintendo Switch UI 18px, and Tabs.
- **Pop up** — 704×288px; Tabs, small text, and Nintendo Switch UI 16px.

## Screen patterns

### Starting Screen with News

- Frame: 1280×720px with `#F0F0F0` background.
- Left-side dark panel: 400×720px using Nintendo Blk `#2E2E2E`.
- Includes a 200×200px Home icon, 308×96px Status bar, Continue action, Featured News heading, and 304×168px News tiles.
- Continue combines Large Text with a 48×48px A button.
- Featured News uses white text and a Y button.
- News tiles use 304×168px image areas and may include a 40×24px video icon.

### Home

- Frame: 1280×720px with `#F0F0F0` background.
- Footer: 1280×73px, white, with a 1px Icon Gray divider.
- Footer actions: A / Continue, X / Close Software, and Plus / Options.
- Status bar remains 308×96px.
- Main content uses repeated 256×256px Game tiles.
- Selected Game uses a 6px `#FFFFFF` outline and cyan `#43D6DF` title.
- Navigation includes Profile icon, Switch Online Icon, News Icon, eShop Icon, Album Icon, Controllers Icon, Settings Icon, and Sleep Icon.

### Sleep Mode

- Uses the same 1280×720px frame, `#F0F0F0` background, 1280×73px white Footer, and 308×96px Status bar as Home.
- Game selection remains present with the selected game outline and cyan title.
- Footer retains A / Continue, X / Close Software, Plus / Options, and Switch icon controls.

### Shared status treatment

- Battery Life is drawn as a dark outlined battery with a dark fill bar.
- Status text uses black `#000000`; Wi-Fi geometry uses Nintendo Blk `#2E2E2E`.
- Status bar content includes battery percentage, time, “PM”, and Wi-Fi indicator.

## Notes for implementers

- Build for a 1280×720 canvas when reproducing the documented screens.
- Use only the extracted palette; prioritize colors by the usage ranking above.
- Treat “Selected blue” as `#FFFFFF`, despite the token name.
- Use Nintendo Switch UI NintendoSwitchUI for primary interface typography and preserve `-0.3px` tracking on named typography tokens.
- Do not infer spacing, radius, motion, grid, or additional effect tokens; none were extracted.
- Preserve the supplied component dimensions rather than normalizing similar variants.
- Use the allowed component families and avoid introducing unnamed components.
- Keep selection highly visible through the documented white outlines and cyan labels.
