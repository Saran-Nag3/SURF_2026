---
name: clubhouse-ui-kit-comunity-community
source: ClubHouse UI kit (Comunity) (Community)
kind: design-system-context
---

# clubhouse - Design System

## Overview
- Source: Figma file “ClubHouse UI kit (Comunity) (Community)”.
- Source pages: Cover, Pages, Components, Styles.
- Primary UI surfaces: “All rooms” and “Room”, each shown at 428x926px.
- Visual direction: warm off-white backgrounds, green brand actions, blue primary controls, rounded cards, avatars, room metadata, and social participation indicators.
- No local variable collections found.

## Design language
- Use Nunito as the primary UI typeface.
- Use warm neutral surfaces: `#F1EFE5`, `#E6E3D6`, `#D5CFB9`, `#FFFFFF`.
- Use green for brand and default actions: `#55AB67`; use pale green supporting surfaces: `#ECFBDC` and `#C1E7BE`.
- Use blue for primary controls and social text: `#5B75A6`.
- Use strongly rounded controls and cards, including 20px cards, 50px buttons, 60px device-preview corners, and 140px pill corners.
- Cards use compact room metadata, participant avatars, titles, comments, and audience counts.
- Icons are commonly placed inside 40x40px containers.

## Color palette
- `#FFFFFF` — secondary background, secondary control background, primary/default control text, card surfaces. Most-used style: `bg/secondary` — 71 uses; raw color — 40 uses.
- `#000000` — primary text and system/status elements. Most-used style: `typo/primary` — 62 uses; raw color — 162 uses.
- `#333333` — secondary text and ghost-control secondary text. Most-used style: `control-ghost/text-secondary` — 40 uses; `typo/secondary` — 26 uses.
- `#999999` — ghost text. Most-used style: `typo/ghost` — 26 uses.
- `#F1EFE5` — default page background. Most-used style: `bg/default` — 22 uses.
- `#55AB67` — brand text, default control background, room typography. Most-used style: `control-default/bg` — 20 uses; `typo/brand` — 7 uses.
- `#DA615C` — ghost-control primary text. Most-used style: `control-ghost/text-primary` — 19 uses.
- `#D5CFB9` — speech background. Most-used style: `bg / speach` — 17 uses.
- `#F2F2F2` — ghost-control background. Most-used style: `control-ghost/bg` — 4 uses.
- `#6E664E` — time and tone text. Most-used style: `typo / time` — 4 uses.
- `#EB4D3D` — alert background. Most-used style: `bg/alert` — 3 uses.
- `#E6E3D6` — tone background. Most-used style: `bg/tone` — 2 uses.
- `#C4C4C4` — raw unstyled color, 203 uses; also used for a 10x10px decorative marker at 50% opacity.
- `#BABABA` — raw unstyled color, 38 uses.
- `#575757` — raw unstyled color, 30 uses; used in comment-icon details.
- `#FCFCFC` — raw unstyled color, 10 uses.
- `#0000001A` — raw unstyled color, 4 uses.
- `#DEDCD3` — border background token, 1 use.
- `#F3B263` — information background token, 1 use.
- `#5B75A6` — primary control background and social text, 1 use each.
- `#C1E7BE` — room icon, 1 use.
- `#ECFBDC` — room background, 1 use.
- `#555555` — secondary control text, 1 use.
- `#FFFFFF` — primary and secondary control text/background roles as listed above.
- `#000000` — primary typography role as listed above.

## Type scale
- Typeface: Nunito.
- `100px`, Bold — display/cover heading; 5 uses.
- `64px`, Bold — large heading; 5 uses.
- `40px`, Bold — heading and “In progress” control text; 7 uses.
- `24px`, Regular — large regular text; 28 uses.
- `18px`, Bold — room-card titles; 4 uses.
- `17px`, Bold — participant names; 13 uses.
- `16px`, Bold — user component text and counters; 23 uses.
- `15px`, Bold — room titles; 5 uses.
- `14px`, Bold — time labels and user component text; 19 uses.
- `10px`, Bold — room/category labels; 3 uses.
- System status text: SF Pro Text Semibold, `14px`.

## Spacing scale
- No spacing variables found.
- Observed explicit layout values:
  - Component padding: `20px 56px 20px 56px`.
  - Component gap: `10px`.
  - User component vertical gap: `7px`.
  - Button dimensions: `174x44px`.
  - Icon containers: commonly `40x40px`.

## Radius scale
- `0.5px` — small decorative marker.
- `1px` — invite icon rectangles.
- `3px` — notification detail.
- `5px` — bottom indicator bar.
- `20px` — room cards.
- `50px` — “Start a room” button.
- `60px` — “Room” and “All rooms” device-preview frames.
- `140px` — “In progress” pill.
- `1px` stroke opacity treatment appears on avatar outlines at 10% opacity.

## Elevation & effects
- Cover preview rectangles use layer blur of `7px` and `6px`.
- Device-preview frames use a drop shadow with `100px` blur and offset `0 20px`.
- Room cards use a drop shadow with `1px` blur and offset `0 1px`.
- No local effect styles found.
- No motion variables found.
- No local grid styles found.

## Components
- Allowed component families: `User`, `avatar`, `icon`, `icons`.

### User
- Size: `77x102px`.
- Fill: `#FFFFFF`.
- Text styles: Nunito Bold `16px` and Nunito Bold `14px`.
- Used in the Room screen for speaker/user presentation.

### avatar
- `l`: `76x76px`.
- `m`: `40x40px`.
- `s`: `35x35px`.
- `xs`: `30x30px` and `35x35px` instances are present.
- Avatar images use a `1px` outline at 10% opacity.

### icons
- `notification`: `40x40px`; variants: “New notifications” off/on.
- `down`: `19x9.5px`; fill `#FFFFFF`.
- `doc`: `19.5x24px`.
- `more`: `20x4px`; fill `#FFFFFF`.
- `moderator`: `14x14px`.
- `micro`: `14.99x18.77px`.
- `hand`: `21.64x24.41px`; fill `#FFFFFF`.
- `calendar`: `40x40px`.
- `invite`: `40x40px`.
- `search`: `40x40px`.
- `home`: `10x10px`; fill `#FFFFFF`.
- `comment`: `14.21x13.63px`.
- `user`: `11x12px`.
- `menu`: `32x25px`.

### icon
- `plus plus`: `18x18px`; fill `#FFFFFF`.
- `somment one tone`: `12x11.51px`; fill `#FFFFFF`.
- `plus`: `15x15px`; fill `#FFFFFF`.

## Screen patterns
- Cover:
  - Canvas: `1920x960px`.
  - Large ClubHouse UI KIT display text uses Roboto Bold `100px`.
  - Includes two blurred screenshot previews and two rounded `428x926px` device previews.
  - Includes a centered-style `319x95px` “In progress” pill with `20px 56px 20px 56px` padding, `10px` gap, `140px` radius, and `#55AB67` background.
- All rooms:
  - Screen frame: `428x926px`, background `#F1EFE5`.
  - Header actions include calendar, search, invite, notification, and menu icons.
  - Room cards are `398px` wide with `20px` radius and white surfaces.
  - Observed card heights: `150px`, `218px`, and `244px`.
  - Cards include `40x40px` avatars, an 18px bold title, participant names at 17px, comments and audience counters at 16px, and time/category metadata at 14px and 10px.
  - “Start a room” action: `174x44px`, `50px` radius, `#55AB67` background, Nunito Bold `20px`, plus icon `15x15px`.
  - A bottom gradient uses `#F1EFE5` to transparent.
- Room:
  - Screen frame: `428x926px`, background `#F1EFE5`.
  - Main room surface includes a `428x799px` white area.
  - Room title uses Nunito Bold `18px`.
  - Speaker presentation uses the `User` component at `77x102px`.
  - Speech/avatar treatment uses approximately `76x76px` circular content and the `#D5CFB9` speech background token.

## Notes for implementers
- Prefer the named color roles over raw colors when a role exists.
- Preserve the distinction between `#F1EFE5` page backgrounds, `#FFFFFF` cards, and `#E6E3D6` tone surfaces.
- Use Nunito for UI content; use the explicitly observed Roboto Bold `100px` only for the cover display heading.
- Keep room cards at `398px` width within the `428px` screen pattern when reproducing the supplied mobile layout.
- Use the listed avatar sizes rather than substituting arbitrary dimensions.
- Do not infer unlisted spacing, radius, typography, motion, or grid tokens.
