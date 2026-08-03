---
name: netflix-app-community
source: Netflix App (Community)
kind: design-system-context
---

# netflix - Design System

## Overview

- Mobile Netflix UI extracted from Figma file `Netflix App (Community)`, page `Page 1`.
- Primary viewport: `375x812px`.
- Visual foundation: black backgrounds, white typography, Netflix red actions, image-led content, and compact mobile navigation.
- Defined component family: `Play Button`.

## Design language

- Dark, cinematic interface built around `#000000`, `#1A1A1A`, and white content.
- Use Netflix red for primary actions and branded accents.
- Use large white bold headings for onboarding and concise regular-weight metadata for content details.
- Content imagery occupies prominent hero and trailer areas.
- Secondary labels and navigation items use reduced-opacity white.
- Bottom navigation uses four items: Home, Search, Downloads, and More.
- Onboarding uses centered messaging, a full-width illustration or image, logo, Help text, indicators, and a full-width sign-in action.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| `#FFFFFF` | 633 | Primary text, icons, controls, and light surfaces |
| `#000000` | 160 | Primary app and screen background |
| `#0000005C` | 48 | Translucent black overlays |
| `#00000042` | 23 | Translucent black overlays |
| `#00000099` | 22 | Translucent black overlays |
| `#737373` | 18 | Secondary gray content |
| `#FFFFFF82` | 18 | Reduced-opacity white content |
| `#585858` | 16 | Gray placeholder/content surfaces |
| `#DADADA` | 16 | Light neutral surface |
| `#FFFFFF5C` | 16 | Reduced-opacity white content |
| `#D9D9D9` | 14 | Light neutral surface |
| `#0171EB` | 12 | Blue accent |
| `#131313` | 12 | Dark surface |
| `#B1060F` | 10 | Dark red accent |
| `#1A1A1A` | 9 | Dark elevated/content surface |
| `#FFFFFF33` | 9 | Subtle white overlay |
| `#00000066` | 8 | Translucent black controls and overlays |
| `#FFFFFFCC` | 8 | High-opacity white content |
| `#00000080` | 7 | Translucent black overlay |
| `#FFFFFF1A` | 6 | Subtle white overlay |

Brand tokens:

- `netflix red`: `#EE1520`, 55 uses.
- `Netflix Red`: `#E50815`, 2 uses.
- Primary action fills use Netflix red; both red values occur in the source and should not be treated as interchangeable without matching the originating screen.

## Type scale

No local text styles were defined. Use the following extracted font and size combinations:

### Primary hierarchy

- `Netflix Sans Medium`, `17.21px`
- `Helvetica Neue Medium`, `15px`
- `Netflix Sans Regular`, `14.49px`
- `Netflix Sans Black`, `14.21px`
- `Netflix Sans Medium`, `14px`
- `Netflix Sans Regular`, `14px`
- `Netflix Sans Medium`, `12.68px`
- `Netflix Sans Regular`, `12.68px`
- `Netflix Sans Bold`, `12px`
- `Netflix Sans Regular`, `12px`
- `Netflix Sans Medium`, `11.08px`
- `Netflix Sans Regular`, `11.08px`
- `Netflix Sans Regular`, `11px`
- `Netflix Sans Medium`, `10.87px`
- `Netflix Sans Regular`, `10.87px`
- `Netflix Sans Bold`, `9.5px`
- `Netflix Sans Regular`, `9.5px`
- `Netflix Sans Regular`, `9.06px`
- `Netflix Sans Light`, `9px`
- `Netflix Sans Regular`, `9px`
- `Netflix Sans Regular`, `8.71px`
- `Netflix Sans Black`, `8.15px`
- `Netflix Sans Light`, `7.12px`
- `Netflix Sans Regular`, `7.12px`
- `Netflix Sans Bold`, `7px`
- `Netflix Sans Regular`, `7px`
- `Netflix Sans Bold`, `5.54px`
- `Netflix Sans Regular`, `5.54px`
- `Netflix Sans Black`, `5.43px`

### Usage guidance from screens

- Onboarding headings: `Netflix Sans Bold`, `30px`.
- Onboarding body copy: `Netflix Sans Regular`, `18px`.
- Sign-in label: `Netflix Sans Regular`, `16px`.
- Content title: `Netflix Sans Regular`, `17px`.
- Section labels: `Netflix Sans Medium`, `15px`.
- Metadata and descriptions: `Netflix Sans Regular`, `12px` or `14px`.
- Bottom navigation labels: `Netflix Sans Light` or `Netflix Sans Regular`, `9px`.
- Utility labels such as My List, Rate, and Share: `Netflix Sans Regular`, `9px`.
- Play action label: `Netflix Sans Bold`, `14px`.
- Play Button component text: `Netflix Sans Medium`, `13.59px`.
- Status-bar time: `Helvetica Neue Medium`, `15px`.

## Spacing scale

No spacing variables were defined. Reuse these observed layout values:

- `4px`, `5px`, `8px`, `9px`, `12px`, `13px`, `14px`, `15px`, `16px`, `18px`, `20px`, `32px`, `44px`, `56px`, `59px`, `67px`, `120px`, `140px`.
- Onboarding text stack gap: `20px`.
- Show detail utility groups use gaps of `5px`, `8px`, `9px`, `13px`, and `15px`.
- Episode list item spacing: `8px`, with list grouping gap `12px` and `16px`.
- Common horizontal content inset: `12px`.
- Full-width action button horizontal padding: `12px` on each side, with `140px` horizontal distribution in the extracted fixed layout.
- Bottom navigation item group gap: `59px`.
- Show detail utility group gap: `67px`.

## Radius scale

No radius variables were defined. Observed radii:

- `2px`: primary action buttons.
- `150px`: circular play control.
- `500px`: circular close control.
- `0px`: status-bar decorative groups and other square containers.

## Elevation & effects

- No local effect styles were defined.
- Background blur: `56px`.
- Layer blur: `56px`.
- Layer blur: `120px`.
- Dark translucent overlays are used behind show titles and close controls.
- Trailer play control uses a circular shape with a `1.5px` white stroke.
- No shadows or elevation tokens were extracted.

## Components

### Play Button

- Component family: `Play Button`.
- Extracted size: `91.49x34.42px`.
- Text: `Netflix Sans Medium`, `13.59px`.
- Screen-specific play actions also appear as:
  - `355x34px` red action button with a `24x24px` play icon and `Netflix Sans Bold`, `14px` label.
  - `48x48px` circular trailer control with a `36x36px` play icon.
- Use white play iconography on Netflix red or dark overlay surfaces.

## Screen patterns

### Onboarding

- Two onboarding screens use a `375x812px` black frame.
- Screen 1 includes a `375x268px` illustration, centered text block, logo, Help label, indicators, and a bottom-centered `355x44px` red SIGN IN button.
- Screen 2 uses a full-screen image approximately `375x816px`, with the same status bar, indicators, logo, Help label, and sign-in action.
- Heading content uses `30px` bold white text; supporting copy uses `18px` regular white text.
- Onboarding copy stack gap: `20px`.

### Show details

- Dark show detail screen with trailer/content area, blurred image background, metadata, description, action controls, and bottom navigation.
- Trailer section uses a dark `#1A1A1A` surface, a `351px`-wide image, and a `48x48px` circular play control.
- Primary Play action is a `355x34px` red button.
- Metadata row contains match information, year, rating, and runtime.
- Utility actions: My List, Rate, and Share.
- Bottom navigation occupies `375x87px` and contains Home, Search, Downloads, and More.
- A title overlay pattern uses an `88px`-high translucent dark layer with `56px` background blur.

### Episodes

- Episodes screen uses a dark background and an image header approximately `381x218px`.
- Title overlay uses a `375x88px` translucent dark layer with `56px` background blur.
- Episode content area uses `12px` horizontal padding and `14px` vertical padding.
- Season label uses `Netflix Sans Regular`, `15px`, with reduced-opacity white.
- Episode rows use `351px`-wide content, `128x83px` thumbnail placeholders in `#585858`, `8px` internal gaps, and `14px` regular descriptions with reduced opacity.
- Episode list spacing uses `16px` between grouped rows.

## Notes for implementers

- Keep the base viewport at `375x812px` when matching the extracted layouts.
- Preserve the black-first visual hierarchy; do not introduce light page backgrounds.
- Use only the extracted Netflix red values for branded actions: `#EE1520` or `#E50815`, selected according to the originating screen.
- Use white for primary content and the extracted white opacity variants for secondary content.
- Treat image fills as content assets; the extraction provides image hashes but not reusable image URLs.
- Do not assume local typography, spacing, radius, motion, grid, or effect variables exist; the source explicitly reports none.
- Keep bottom navigation labels and ordering consistent: Home, Search, Downloads, More.
- Use reduced-opacity white for inactive navigation and secondary metadata.
