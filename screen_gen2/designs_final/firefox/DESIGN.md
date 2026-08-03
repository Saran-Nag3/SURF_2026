---
name: firefox-browser-ui-kit-community
source: Firefox Browser UI Kit (Community)
kind: design-system-context
---

# firefox - Design System

## Overview

Firefox browser UI kit covering:
- Desktop light browser UI at 1280x784px.
- Desktop dark browser UI at 1280x784px.
- Mobile light browser UI at 375x667px.
- Light desktop new-tab state at 1280x784px.
- Browser chrome components including tabs, toolbars, URL bars, menus, navigation controls, and traffic lights.

No local variable collections, spacing variables, radius variables, motion tokens, text styles, or grid styles were found.

## Design language

- Platform-inspired browser chrome with compact controls and dense horizontal layouts.
- Desktop UI uses 32px tabs and 41px toolbars.
- Mobile UI uses 24px navigation icons, a 46px tab toolbar, and a 76px top bar.
- Light surfaces primarily use `#FFFFFF`, `#F9F9FA`, and `#FAF9F8`.
- Dark browser surfaces use `#2A2A2E`, `#323234`, and `#0C0C0D`.
- Active tabs use a `#0A84FF` top line.
- Controls are predominantly 16px on desktop and 24px on mobile.
- Typography uses SF Pro Text at 11px, 13px, 12px, and 15px where specified.

## Color palette

Ranked by reported raw usage:

| Color | Usage | Role / observation |
|---|---:|---|
| `#000000` | 84 | Primary black; text and mobile status content |
| `#F9F9FA` | 78 | Light desktop body and tab surfaces |
| `#FFFFFF` | 44 | Toolbar, URL bar, and light control surfaces |
| `#5C5C61` | 18 | Neutral UI color |
| `#181A1B24` | 16 | Translucent dark neutral |
| `#0C0C0D` | 12 | Dark surfaces and borders |
| `#C4C4C4` | 10 | Mobile separator color |
| `#323234` | 9 | Dark toolbar and active dark-tab surface |
| `#0A84FF` | 8 | Active-tab indicator |
| `#58A942` | 6 | Traffic-light fullscreen stroke |
| `#62C554` | 6 | Traffic-light fullscreen fill |
| `#CE5347` | 6 | Traffic-light close stroke |
| `#D6A243` | 6 | Traffic-light minimize stroke |
| `#ED6A5E` | 6 | Traffic-light close fill |
| `#F6BE4F` | 6 | Traffic-light minimize fill |
| `#0C0C0D40` | 5 | Light URL bar stroke |
| `#181A1B26` | 4 | Translucent dark neutral |
| `#29292933` | 4 | URL bar separator |
| `#EBEEF4` | 4 | Mobile toolbar and top-bar lines |
| `#FAF9F8` | 4 | Mobile toolbar and top-bar surfaces |
| `#0C0C0D4D` | 3 | Light navigation control stroke |
| `#262627` | 3 | Dark navigation control stroke |
| `#2A2A2E` | 3 | Dark browser body |
| `#474749` | 3 | Dark URL bar surface |
| `#565656` | 3 | Light tab-strip base |
| `#5F6670` | 3 | Dark URL bar separator |
| `#B2B2B266` | 3 | Dark navigation control fill |
| `#E1E1E2` | 3 | Desktop light toolbar line |
| `#F9F9FA33` | 3 | Dark URL bar stroke |
| `#FFFFFF33` | 3 | Dark toolbar separator |

Defined opacity tokens:
- `black-100`: `#000000`
- `black-60`: `#00000099`
- `black-70`: `#000000B2`
- `black-30`: `#0000004D`
- `black-10`: `#0000001A`
- `white-70`: `#FFFFFFB2`
- `white-80`: `#FFFFFFCC`
- `white-30`: `#FFFFFF4D`

The source defines `black-80` as having no value.

## Type scale

- SF Pro Text Medium, 11px — tab labels and compact controls.
- SF Pro Text Regular, 13px — menu items and standard UI text.
- SF Pro Text Medium, 13px — toolbar and URL bar text.
- SF Pro Text Regular, 12px — mobile status and top-bar text.
- SF Pro Text Semibold, 12px — mobile status text.
- SF Pro Text Regular, 15px — mobile URL content.

Reported raw typography usage:
- SF Pro Text Regular, 13px: 90 uses.
- SF Pro Text Medium, 13px: 52 uses.
- SF Pro Text Medium, 11px: 16 uses.

## Spacing scale

No spacing tokens were defined. Repeated observed layout values:
- 0px
- 1px
- 5px
- 12px
- 16px
- 20px
- 24px
- 32px

Observed desktop toolbar content uses 5px horizontal padding and 16px gaps. URL bar internal separators are 20px or 24px high. Mobile controls use 24px icon boxes.

## Radius scale

No radius tokens were defined. Observed radii:
- 0px
- 4px — desktop URL bar and mobile tab-count control
- 5px — desktop screen frame
- 8px — mobile URL bar base

## Elevation & effects

- **Browser Shadow** — three drop shadows:
  - `drop_shadow 50px offset 0 10 #00000033`
  - `drop_shadow 30px offset 0 20 #0000004D`
  - `drop_shadow 1px offset 0 0 #000000B2`
- Desktop URL bars use `drop_shadow 4px offset 0 1 #0000000D`.
- Desktop tab strips use `background_blur 20px`.
- Traffic lights use `inner_shadow 6px offset 0 0` with state-specific colors.

## Components

### Dark

- Dark tabs: 1280x32px, `#FFFFFF` component fill, SF Pro Text Medium 11px.
- Dark toolbar: 1280x41px, `#FFFFFF` component fill, SF Pro Text Medium 13px.
- Dark menu popup: 291x615px, SF Pro Text Regular and Medium 13px.
- Dark menu items: 291x16px.
- Dark active and inactive tabs: 224x32px, SF Pro Text Medium 11px.
- Dark tab-strip base: `#0C0C0D`.
- Dark toolbar base: `#323234`.
- Dark browser body: `#2A2A2E`.
- Dark URL bar: 821x30px, radius 4px, surface `#474749`, stroke `#F9F9FA33` at 1px.

### Light

- Light tabs: 1280x32px, `#FFFFFF` component fill, SF Pro Text Medium 11px.
- Light toolbar: 1280x41px, `#FFFFFF` component fill, SF Pro Text Medium 13px.
- Light menu popup: 291x615px, SF Pro Text Regular and Medium 13px.
- Light menu items: 291x16px.
- Light active and inactive tabs: 224x32px, SF Pro Text Medium 11px.
- Light tab-strip base: `#565656`.
- Light toolbar base: `#F9F9FA`.
- Light URL bar: 821x30px, radius 4px, surface `#FFFFFF`, stroke `#0C0C0D40` at 1px, with the 4px URL-bar shadow.

### Icon

- Desktop icon size: 16x16px.
- Close icon size: 12x12px.
- Mobile icon size: 24x24px.
- Observed icon families include:
  - `icon-back`
  - `icon-forward`
  - `icon-reload`
  - `icon-home`
  - `icon-menu`
  - `icon-bookmark`
  - `icon-pocket-outline`
  - `icon-security`
  - `icon-protection-active`
  - `icon-chevron-right`
  - `icon-close`

### Tab - Active

- Size: 224x32px.
- Light base: `#F9F9FA`.
- Dark base: `#323234`.
- Active indicator: 224x1.5px in `#0A84FF`.
- Label: SF Pro Text Medium, 11px.
- Includes a 16x16px favicon area and a 12x12px close control.

### Tab - Inactive

- Size: 224x32px.
- Label: SF Pro Text Medium, 11px.
- Uses the corresponding light or dark tab-strip context.

### Tab Toolbar

- Size: 375x46px.
- Surface: `#FFFFFF` component fill with `#FAF9F8` base.
- Contains 24x24px back, forward, reload, tab-count, and menu controls.
- Bottom line: 1px in `#EBEEF4`.

### Toolbar

- Desktop size: 1280x41px.
- Base height: 40px with a 1px bottom line.
- Content frame: 1215x40px with 5px horizontal padding and 16px gaps.
- URL bar: 821x30px.
- Flexible space: 69x30px.
- Desktop navigation and utility icons use 16x16px controls.
- Light toolbar line: `#E1E1E2`.
- Dark toolbar line: `#0C0C0D`.

### Top Bar

- Size: 375x76px.
- Surface: `#FAF9F8`.
- Bottom line: 1px in `#EBEEF4`.
- Mobile URL bar group: 361x43px with an 8px base radius.
- Mobile URL content uses SF Pro Text Regular, 15px.
- Mobile status bar includes 12px text.

### Traffic Light

- Group size: 52x12px.
- Each control: 12x12px circle.
- Close: fill `#ED6A5E`, stroke `#CE5347`.
- Minimize: fill `#F6BE4F`, stroke `#D6A243`.
- Fullscreen: fill `#62C554`, stroke `#58A942`.

## Screen patterns

### Desktop light browser

- Frame: 1280x784px, radius 5px, `#F9F9FA`, Browser Shadow.
- Body: 1280x711px in `#F9F9FA`.
- Toolbar above a 32px light tab strip.
- Toolbar contains menu, back, forward, reload, home, flexible spaces, URL bar, library, sidebar, and account controls.
- Light URL bar uses a 4px radius and `#0C0C0D40` stroke.
- Active tab has a `#0A84FF` indicator.

### Desktop dark browser

- Frame: 1280x784px, radius 5px, Browser Shadow.
- Body: 1280x711px in `#2A2A2E`.
- Dark toolbar base: `#323234`.
- Dark tab-strip base: `#0C0C0D`.
- Dark URL bar uses `#474749` with `#F9F9FA33` stroke.
- Navigation and utility icons use `#FFFFFFB2`-style light icon treatment.

### Mobile light browser

- Frame: 375x667px with a `#FFFFFF` body.
- 46px Tab Toolbar at the top.
- 76px Top Bar below the Tab Toolbar.
- Tab Toolbar contains back, forward, reload, tab count, and menu controls.
- Top Bar contains status information and a 361x43px URL bar.
- Mobile URL bar includes protection, lock, action, and separator controls.

### Light desktop new tab

- Uses the same 1280x784px light desktop frame, toolbar, tab strip, traffic lights, and active-tab treatment as the desktop light browser.
- The body remains `#F9F9FA`.

## Notes for implementers

- Prefer the named component families and icon families above; do not create additional component families.
- Preserve the desktop ordering: toolbar, then tab strip, then browser body.
- Preserve the mobile ordering: Tab Toolbar, then Top Bar, then page body.
- Use 11px typography for tabs and 13px typography for desktop toolbar, URL bar, and menu content.
- Use 24px icon containers for mobile browser controls and 16px icon containers for desktop controls.
- Use `#0A84FF` only for the active-tab indicator.
- Keep desktop URL bars at 821x30px and mobile URL bar groups at 361x43px where those layouts apply.
- Use the Browser Shadow only on the desktop frame.
- No motion behavior or timing values were found.
