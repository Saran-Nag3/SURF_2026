---
name: cloud-storage-drive-dropbox-icloud-app-community
source: Cloud Storage Drive Dropbox iCloud app (Community) — Page 1
kind: design-system-context
---

# icloud - Design System

## Overview
Cloud-storage dashboard UI with a persistent sidebar, top navigation, search, upload action, recently opened files, file/folder cards, and file-type icons. The primary application frame is 1512x982px with a 256px sidebar and 1256px main content area.

## Design language
- Clean, light productivity interface with neutral surfaces and blue primary actions.
- Use #F6F6F6 for the sidebar and inactive navigation surfaces.
- Use #497FFF for primary actions, active navigation text, folder graphics, and file icons.
- Use rounded cards and controls, predominantly with 8px radius.
- Use horizontal file grids and vertically stacked navigation groups.
- Primary UI typography is Inter Medium, generally 14px.
- Use #1A1A1A for primary card labels and #5B5B5B for secondary navigation labels.

## Color palette
Ranked by raw usage count:
- `#00000066` — 305 uses; muted black for strokes and icon details.
- `#1A1A1A` — 118 uses; primary card text.
- `#5B5B5B` — 108 uses; secondary navigation text.
- `#497FFF` — 79 uses; primary blue, active states, folder and file graphics.
- `#497FFF0D` — 68 uses; light blue item-card fill.
- `#F6F6F6` — 66 uses; sidebar and inactive surfaces.
- `#000000` — 44 uses; black text and controls.
- `#F6F9FF` — 41 uses; pale blue file-card fill and main panel surfaces.
- `#3F82EF` — 27 uses; blue file-type icon.
- `#FFFFFF` — 26 uses; white background, button text, and icon containers.
- `#D9D9D9` — 16 uses; image placeholder fill.
- `#497FFF1A` — 13 uses; active navigation fill.
- `#EB8909` — 13 uses; orange file-type icon.
- `#E72A2A` — 12 uses; red file-type icon.
- `#00000026` — 10 uses; light borders.
- `#299438` — 10 uses; green file-type icon.
- `#4A5568` — 10 uses; gray file-type icon.
- `#7C7C7C` — 10 uses; section-label text.
- `#00000014` — 5 uses; sidebar border.
- `#F4F3F3` — 5 uses; search-field fill.

## Type scale
- Inter Regular, 112.84px — cover title.
- Inter Black, 101px — license heading.
- Inter Regular, 50px — notes heading; 4 uses.
- Inter SemiBold, 50px — notes heading; 3 uses.
- Inter Medium, 24px — 3 uses.
- Inter Medium, 20px — 20 uses; search text and larger UI labels.
- Inter Medium, 16px — 5 uses.
- Inter Medium, 14px — 343 uses; primary UI default.
- Inter Medium, 13px — 86 uses; item-card labels.
- Inter Medium, 12px — 36 uses.
- Inter SemiBold, 12px — 10 uses; sidebar section labels.
- DM Sans Medium, 12px — 6 uses; PDF control text.

## Spacing scale
Observed spacing values:
- 0px
- 4px
- 5px
- 6px
- 8px
- 10px
- 12px
- 14px
- 16px
- 20px
- 24px
- 26px
- 32px
- 40px
- 54px
- 204px

Common patterns:
- Navigation item padding: 16px horizontal.
- Primary button padding: 12px horizontal and vertical.
- Item-card gaps: 8px or 14px.
- Main content section padding: 40px.
- Sidebar internal group gaps: 4px, 8px, and 40px.

## Radius scale
Observed radii:
- 4px
- 5px
- 6px
- 7px
- 8px
- 9.01px
- 12px
- 32px

Common usage:
- Item cards and search/control surfaces: 8px.
- PDF control: 6px.
- Main panel: 12px.
- File icon circular control: 32px.
- Folder graphic: 7px.

## Elevation & effects
_No elevation or effect styles found in source._  
Observed borders:
- `#00000026`, 1px on Frame 970 and PDF.
- `#00000014`, 1px on Sidebar 13.
- `#00000066`, 1.5px on settings and help icons.

## Components
Only the following component families are present:

### Item
- Size: 180x120px.
- Radius: 8px.
- Fill: #497FFF0D.
- Vertical layout; centered alignment.
- Padding: 20px top, 8px horizontal, 16px bottom.
- Gap: 14px.
- Variants: `Size: Large/Small`; `Type: File/Folder`.
- Large folder: 65x52px folder graphic, followed by an Inter Medium 13px label.
- Large file: 164x70px image area with 8px radius, followed by an Inter Medium 13px label.
- Small variant: 180x40px, horizontal layout, padding 8px vertical and 12px horizontal, gap 8px.
- Small variant uses Component 2 at 24x24px and an Inter Medium 13px label.

### Component 2
- Size: 24x24px.
- File-type variants: `3d`, `ae`, `ai`, `cal`, `eml`, `fig`, `file`, `html`, `indd`, `locked`, `mp3`, `mp4`, `pdf`, `png`, `ppt`, `psd`, `sketch`, `sql`, `txt`, `xls`, `zip`.
- File-type icon artwork is generally 15x19px.
- Generic file icon artwork is 16x12px and uses #497FFF.
- Observed icon colors include #3F82EF, #EB8909, #299438, #E72A2A, and #4A5568.

### Component 1
- Folder variant: 65x52px.
- Fill: #FFFFFF container with a #497FFF folder graphic.
- Folder graphic radius: 7px.

### Frame 920
- Size: 248x32px.
- Horizontal layout; gap 32px.
- Used for navigation and header content groupings.
- Navigation icon-to-label groupings commonly use 12px gap.
- Navigation text uses Inter Medium, 14px or 16px.

### Frame 970
- 380x261px variant:
  - Radius: 12px.
  - Fill: #F6F9FF.
  - Stroke: #00000026, 1px.
  - Vertical layout.
  - Padding: 16px top, 8px horizontal, 16px bottom.
  - Gap: 16px.
- 56x24px variant:
  - Horizontal layout.
  - Gap: 8px.

### PDF
- Size: 90x28px.
- Radius: 6px.
- Fill: #F0F0F0.
- Stroke: #00000026, 1px.
- Horizontal layout; centered.
- Padding: 6px vertical and 12px horizontal.
- Gap: 10px.
- Text: DM Sans Medium, 12px.

### Sidebar 13
- Size: 256x982px.
- Fill: #F6F6F6.
- Stroke: #00000014, 1px.
- Vertical layout with space-between alignment.
- Padding: 16px vertical.
- Gap: 204px.
- Navigation items: 240x32px with 16px horizontal padding and 8px radius.
- Active navigation fill: #497FFF1A.
- Active navigation text: #497FFF.
- Inactive navigation text: #5B5B5B.
- Section labels: #7C7C7C, Inter SemiBold, 12px.

## Screen patterns
- **Page 1 dashboard:** 256px fixed sidebar beside a 1256px main area. The main area contains a 56px top bar, upload action, user control, a 44px search field, and file-content sections.
- **Sidebar navigation:** Home is active with #497FFF1A fill and #497FFF text. Workspaces, Search, Notifications, Settings, and Help & support use #F6F6F6 surfaces with #5B5B5B text. Favourites sections use #7C7C7C labels.
- **Search:** 792x44px field with #F4F3F3 fill, 8px radius, 16px horizontal padding, and Inter Regular 20px text with muted opacity.
- **Recently opened:** 792px-wide section with a 17px heading row and a horizontal file grid using 180x120px Item cards with 24px gaps.
- **Upload action:** 124x32px blue control with #497FFF fill, 8px radius, 12px padding, 8px internal gap, and white Inter Medium 14px text.
- **Cover:** 1920x960px blue canvas using #3F82EF with a white Inter Regular 112.84px title.
- **Component showcase:** Item variants demonstrate large and small folder/file cards; Component 2 demonstrates file-type icon variants in a 24x24px grid.

## Notes for implementers
- Prefer the listed component families and variants rather than creating additional component types.
- Use only the observed palette; prioritize colors according to the usage ranking.
- Use Inter for the main application UI and DM Sans only for the PDF control text.
- Keep item labels at Inter Medium 13px unless the component specification calls for another size.
- Preserve the 256px sidebar width and 1256px main-area width for the extracted dashboard composition.
- Use 8px radius as the default for cards, navigation items, and controls where no other component-specific radius is specified.
- File-type artwork is represented through Component 2 variants; map file types to the observed icon colors.
- No local variable collections, text styles, spacing styles, radius styles, motion tokens, or effect styles were found.
