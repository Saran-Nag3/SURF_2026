---
name: google-meet-spacial-ui-design-concept-community
source: GOOGLE meet Spacial Ui design concept (Community)
kind: design-system-context
---

# google-meet - Design System

## Overview

Google Meet spatial UI concept from Figma Page 1. The interface uses image-backed video-call layouts, translucent glass-like containers, circular action controls, participant tiles, and a dark meeting-control bar.

## Design language

- Spatial video-conferencing interface centered on large photographic backgrounds and participant video feeds.
- Glass-like surfaces use gradients, blur, drop shadows, and inner shadows.
- Primary meeting controls are circular 56px buttons.
- Destructive actions use a red gradient treatment in the source.
- Standard controls use a dark gradient treatment in the source.
- Icons are white inside controls.
- Participant names use white Poppins Medium text over video imagery.
- Video tiles use rounded corners and image fills.
- Main desktop meeting surface uses a 32px radius.
- Secondary bars and video tiles use 8px radius; the lower meeting bar uses 16px radius.

## Color palette

Usage-ranked colors from the source:

1. `#FFFFFF` — 50 uses; surfaces, text, and icon fills.
2. `#000000` — 22 uses; icon vectors and text.
3. `#A99F9F` — 5 uses; participant-tile fallback fill.

## Type scale

- Poppins Medium, `18px` — participant names, presenter label, and meeting title.
- Poppins Medium, `12px` — notification/count badge text.

## Spacing scale

- `8px` — compact control padding and repeated control spacing.
- `16px` — gaps between control buttons and video tiles.
- `20px` — padding in the top meeting bar.
- `24px` — desktop meeting surface padding.
- `27px` — right-side top-bar padding.
- `47px` — horizontal padding on red action buttons.
- `19px` — horizontal padding on red action buttons and compact controls.
- `10px` — internal control gap.
- `0px` — full-bleed and zero-padding frames.

## Radius scale

- `8px` — video tiles and top meeting bar.
- `16px` — lower meeting bar.
- `32px` — main desktop meeting surface.
- `50px` — circular controls and avatars.
- `180px` — circular badge vector radius.

## Elevation & effects

- Background blur: `48.96px` on dark circular controls and bars.
- Background blur: `60px` on the main desktop meeting surface.
- Background blur: `48.96px` on the lower meeting bar.
- Layer blur: `30px` on the full-screen photographic background.
- Drop shadow: `20.48px`, offset `0 0.85`, on dark controls and bars.
- Drop shadow: `12.02px`, offset `0 0.5`, on the main desktop meeting surface.
- Drop shadow and inner-shadow treatments are used to create glass-like depth.
- Red action controls use inner shadows with `4px` offsets.
- Dark controls use inner shadows with `1.92px`, `4px`, and `6.72px` offsets.
- The source includes gradient fills for dark and red controls; use the extracted gradients where available without introducing additional palette colors.

## Components

All listed components use white fill in their extracted component specifications unless noted otherwise.

### Meeting actions

- `ic:baseline-call-end` — `24x24px` source component; also used at `32x32px` and `40x40px` inside action buttons.
- `material-symbols:mic` — `24x24px` source component; used at `32x32px` and `40x40px`.
- `bx:video` — `24x24px` source component; used at `32x32px` and `40x40px`.
- `material-symbols:mic-off` — `24x24px`.
- `material-symbols:call-sharp` — `24x24px`.

### Meeting tools

- `material-symbols:closed-caption-outline` — `24x24px` source component; used at `32x32px` and `40x40px`.
- `material-symbols:present-to-all-outline-rounded` — `24x24px` source component; used at `32x32px` and `40x40px`.
- `akar-icons:hand` — `24x24px` source component; used at `32x32px` and `40x40px`.
- `iwwa:option` — `24x24px` source component; used at `32x32px` and `40x40px`.
- `lucide:shapes` — `24x24px` source component; used at `40x40px`.

### Collaboration and status

- `material-symbols:group-outline` — `24x24px` source component; used at `40x40px`.
- `material-symbols:chat-outline` — `24x24px` source component; used at `40x40px`.
- `gravity-ui:face-fun` — `16x16px`.
- `mingcute:warning-line` — `24x24px` source component; used at `40x40px`.

### Control containers

- Standard control: `56x56px`, radius `50px`, dark gradient fill, blur and shadow effects.
- Red action control: `56x56px`, radius `50px`, red gradient fill, inner-shadow effects.
- End-call control: `80x56px` in the main meeting bar; `113x56px` in the alternate control grouping.
- Control groups use `16px` gaps.
- A participant-count badge uses a `28x28px` circular dark container with a `12x12px` text frame and `12px` Poppins Medium text.

## Screen patterns

- **Full-screen meeting background:** photographic image fills a large canvas; a centered meeting surface overlays it with a `32px` radius, `24px` padding, translucent gradient, blur, and shadow.
- **Main meeting desktop:** a `1729x984px` meeting surface contains a top presenter bar, a large `1113x728px` presentation/video area, a `544x728px` participant grid, and a lower meeting-control bar.
- **Presenter bar:** `1681x80px`, dark gradient, `8px` radius, avatar `40x40px`, and white `18px` Poppins Medium presenter label.
- **Participant layout:** one large video area beside six smaller participant tiles. Smaller tiles are `264x232px`, arranged in rows with `16px` gaps and `8px` radius.
- **Participant labels:** white Poppins Medium `18px` text placed over participant imagery.
- **Meeting controls:** horizontal `56px`-high control group with `16px` gaps. Microphone and video actions use red controls; captions, presenting, hand raise, options, and related tools use dark controls; end call uses a red control.
- **Auxiliary controls:** separate groups contain warning, participants, chat, and shapes actions. Participant controls may include a `28x28px` count badge showing `6`.
- **Alternate spatial concept screen:** a `1659x1172px` white frame includes image-backed meeting content, a `617x56px` control row, a `272x56px` auxiliary row, and a participant/status area.

## Notes for implementers

- Use only the extracted palette: `#FFFFFF`, `#000000`, and `#A99F9F`.
- Preserve the distinction between dark standard controls and red action controls; the source represents these with gradients and different shadow treatments.
- Use the named icon families exactly; do not substitute unlisted icon families.
- Keep icon controls circular at `56x56px` unless the source pattern specifies another size.
- Use `40px` avatars in presenter bars.
- Use `8px` corner radii for video tiles and the presenter bar, `16px` for the lower control bar, and `32px` for the main desktop surface.
- Use image fills for meeting backgrounds and video tiles where imagery is available.
- No local color, typography, spacing, radius, motion, effect, or grid styles were defined in Figma; the values above are extracted raw values and observed layout properties.
