---
name: streaming-app-based-on-crunchyroll-community-community
source: Streaming app - Based on Crunchyroll (Community) (Community)
kind: design-system-context
---

# crunchyroll - Design System

## Overview

A dark streaming-app design system for mobile layouts. The source uses 430px-wide screens, orange as the primary accent, dark blue and gray surfaces, white text, media cards, profile selection, offline downloads, playback controls, and bottom navigation.

Primary source screens:
- Loading screen: centered logo and loading indicator.
- Profiles: profile selection with circular avatars and orange outlines.
- Offline: two-column grid of downloadable media cards with bottom navigation.

## Design language

- Dark, high-contrast streaming interface.
- Primary accent: orange.
- Surfaces use layered dark blue, black, and gray tones.
- White is used for primary text and iconography.
- Cards use compact layouts, media imagery, short metadata, and occasional overflow actions.
- Mobile-first frame width: 430px.
- Main content commonly uses a 398px width with 16px gaps.
- Navigation emphasizes an orange active state against dark surfaces.
- Typography mixes Inter, Roboto, and Poppins according to hierarchy and component context.
- Use 4px card and button radii where specified.
- Use the documented drop shadow for elevated navigation surfaces.

## Color palette

### Ranked usage

| Color | Usage |
|---|---:|
| #D9D9D9 | 64 |
| #FFFFFF | 52 |
| #CCC2BB00 | 49 |
| #000000 | 48 |
| #00000099 | 23 |
| #00000026 | 19 |
| #9747FF | 17 |
| #00000066 | 16 |
| #F57314 | 10 |
| #0000004D | 6 |
| #00000033 | 3 |

### Named color tokens

| Token | Value |
|---|---|
| Blue/40 | #303240 |
| Gray/50 | #050505 |
| Blue/10 | #DFE0E7 |
| Neutral/black | #000000 |
| Blue/50 | #181920 |
| Gray/10 | #E0E0E0 |
| Gray/20 | #C1C1C1 |
| Neutral/Yellou | #FFBE00 |
| Gray/40 | #828282 |
| Orange/80 | #602B04 |
| cool-gray/900 | #111827 |
| CoolGray/700 | #4A5568 |
| Gray/60 | #636363 |
| Blue/90 | #0C0D10 |
| Orange/90 | #401C03 |
| Gray/70 | #444444 |
| Gray/30 | #A1A1A1 |
| Blue/80 | #0F1014 |
| Blue/30 | #616581 |
| Orange/30 | #F8964F |
| Gray/80 | #242424 |
| Blue/70 | #121318 |
| Orange/20 | #FAB98A |
| Gray/90 | #040404 |
| Blue/60 | #15161C |
| Orange/10 | #FDDCC4 |
| Orange/60 | #E06309 |

Orange/50 is referenced by components and styles, but its extracted value is an image reference rather than a hex value. Blue/20, Orange/40, Neutral/Withe, and CoolGray/White have no extracted concrete value.

## Type scale

All extracted text styles use 0px tracking and automatic line height.

| Role | Family | Weight | Size |
|---|---|---:|---:|
| Titulo/Titulo principal | Poppins | 600 | 40px |
| Title/Title | Inter | 600 | 32px |
| Title/SecondaryTitle | Roboto | 600 | 32px |
| Title/Description | Inter | 500 | 20px |
| Normal/Medium | Inter | 500 | 18px |
| Normal/Regular | Inter | 400 | 18px |
| Normal/Semibold | Inter | 600 | 18px |
| NormalRoboto/Medium | Roboto | 500 | 18px |
| NormalRoboto/Regular | Roboto | 400 | 18px |
| NormalRoboto/Semibold | Roboto | 600 | 18px |
| Small/Medium | Inter | 500 | 12px |
| Small/Regular | Inter | 400 | 12px |
| Small/Semibold | Inter | 600 | 12px |
| SmallCard/Extra | Inter | 400 | 10px |
| SmallCard/Extra 2 | Inter | 600 | 10px |

Raw typography also contains Poppins SemiBold at 48px.

Usage priorities:
- Inter Medium 18px is the most-used raw style.
- Inter Regular 18px and Inter SemiBold 18px support body and emphasized text.
- Poppins is reserved for prominent titles.
- Roboto is used in logos, metadata, navigation, and selected secondary titles.

## Spacing scale

No spacing variables were found.

Extracted component spacing values:
- 4px: icon-to-label gap in Logo and Seguir viendo.
- 6px: Home vertical padding and PerfilCard internal gap.
- 8px: Button icon gap, Avatar gap, Offline Card gap, Previw Card gap.
- 10px: TimeBar padding and gap, Premiere Card gap, TabBar gap, Toast gap.
- 12px: Button horizontal padding and TabBar padding.
- 16px: common card/list gap, Modal Cast padding, grid gutter.
- 19px: Offline Card name block gap.
- 20px: Under Margen grid gutter.
- 24px: Header and Name Header padding.
- 63px: Offline Card name-to-overflow gap.
- 123px: Modal Cast gap.
- 180px: Name Header gap.
- 190px: Header gap.
- 220px: Slide Bar gap.

Grid styles:
- Normal Margen: 4 columns, 87.5px section, 16px gutter, stretch alignment.
- Under Margen: 1 row, 87px section, 20px gutter, max alignment.

## Radius scale

No radius variables were found.

Extracted radii:
- 4px: Button, Premiere Card, Modal Cast, Offline Card, ListCard, Toast-related card surfaces, and Previw Card.
- 4px/4px/0px/0px: Modal Cast and media-image top corners where explicitly specified.
- 4px/4px/0px/0px: Offline card media-image corners.
- 0px: Logo and icon elements where explicitly specified.

## Elevation & effects

- Drop effect: drop shadow, 15px offset, 15px horizontal offset, 10px vertical offset, color #14121266.
- App Bar effect: drop shadow, 4px offset, 0px horizontal offset, -2px vertical offset, color #36353594.
- The App Bar shadow is used to separate bottom navigation from the content surface.
- No motion tokens were found.

## Components

Only use the following component families and documented variants.

### Navigation and headers

- **App Bar**: 430x62px; centered horizontal layout; effect uses the App Bar shadow; text uses Inter Medium 18px and Inter SemiBold 18px.
- **Home**: 86x62px; vertical layout; 6px top and bottom padding; dark blue fill; active state uses orange icon and label.
- **TabBar**: 143.33x45px; 12px padding; 10px gap; space-between alignment; 1px orange stroke; false/true variants.
- **Header**: 430x76px; 24px vertical padding; Roboto SemiBold 18px; Header variant.
- **Header Back**: 430x108px; default variant.
- **Name Header**: 400x76px; 24px vertical and 16px horizontal padding; 180px gap; dark gray fill; Normal/Semibold text.
- **Logo**: 180x32px; 4px gap; centered; Roboto SemiBold 24px; Normal/Small variants.

### Actions and controls

- **Button**: 178x40px; 4px radius; 12px horizontal padding; 8px gap; Inter Medium 18px; orange token fill; icon and non-icon variants; Default, Link, Link 2, Outline, and Solid styles.
- **Guardar**: 40x40px; false/true variants.
- **Star**: 18x18px; white fill; false/true variants.
- **Avisar**: 44x40px; vertical layout; SmallCard/Extra text; false/true variants.
- **Switch**: 30x18px; false/true variants.
- **Slide Bar**: 398x21px; 220px gap; NormalRoboto/Medium text; Normal, Sub-Text, and Switch styles.
- **TimeBar**: 318x3px; 10px padding; orange token fill; Semicompleta style.
- **Loading**: 40x40px; four documented variants.
- **Toast**: 30x20px; 4px padding; 10px gap; #00000099 fill; SmallCard/Extra 2 text.

### Media and content cards

- **Premiere Card**: 398x358px; 4px radius; vertical layout; 16px bottom padding; 10px gap; Blue/50 fill; uses SmallCard/Extra 2, NormalRoboto/Semibold, SmallCard/Extra, and Title/Title.
- **Offline Card**: 191x302px; 4px radius; vertical layout; 8px bottom padding; 8px gap; Blue/50 fill; media region is 191x222px.
- **ListCard**: 398x138px; 4px radius; horizontal layout; 16px gap; Blue/50 fill; uses Small/Semibold, NormalRoboto/Regular, and Title/Description.
- **Previw Card**: 398x106px; 4px radius; horizontal layout; 8px gap; Blue/50 fill; uses Normal/Regular, NormalRoboto/Medium, and SmallCard/Extra 2.
- **Card**: 398x172px; uses Inter Medium 18px, Inter Regular 18px, and Small/Medium.
- **Small card**: 130x219px; uses SmallCard/Extra and Small/Medium.
- **PerfilCard**: 91x111px; vertical layout; 6px gap; centered; uses NormalRoboto/Regular.
- **Media**: 164x21px; 4px gap; NormalRoboto/Regular.
- **Valoracion**: 90x18px; horizontal layout.
- **Seguir viendo**: 129x32px; 4px gap; Small/Medium; default variant.
- **¿Que ver?**: 379x175px; white fill; uses Inter Medium 18px, Title/Description, and Title/Title.
- **Link 2**: 163x22px; white fill; Normal/Semibold text.
- **Modal Cast**: 430x182px; 4px top radius and 0px bottom radius; 16px padding; 123px gap; Blue/50 fill; NormalRoboto/Regular and Normal/Semibold text.

### Icons and assets

Use only the documented icon families:
- `crown-solid 1`: 24x21.33px, white fill.
- `comment_black_24dp (1) 1`: 24x24px, white fill.
- `notifications_active_black_24dp 1`: 24x24px, white fill.
- `notifications_none_black_24dp 1`: 24x24px, white fill.
- `cast_connected_FILL0_wght400_GRAD0_opsz48 1`: 24x24px, white fill.
- `more_vert_FILL0_wght400_GRAD0_opsz48 1`: 24x24px, white fill.
- `Cast`: 24x24px, white fill.
- `play_arrow_FILL0_wght400_GRAD0_opsz48 1`: 24x24px, white fill.
- `play_arrow_black_24dp 1`: 24x24px, white fill.

## Screen patterns

### Loading

- Use a 430x932px frame.
- Fill with Gray/50.
- Place the 40x40px Loading component and the 180x32px Logo.
- The extracted logo contains a 32x32px mark and a 144x28px `MasterSeries` label.
- Logo label uses Roboto SemiBold 24px and orange token styling.

### Profiles

- Use a 430x932px frame with Gray/50 fill.
- Center a 207x548px vertical profile-selection region.
- Heading: `¿Quien esta mirando?`, using Title/Description.
- Stack four PerfilCard instances vertically with 16px gaps.
- Each profile avatar is 84x84px with a 2px orange stroke.
- Profile labels use NormalRoboto/Regular and Blue/10.
- Profile cards have documented widths of 91px, 98px, 84px, and 101px, all 111px high.

### Offline

- Use a 430px-wide frame with Gray/50 fill.
- Main content width: 398px.
- Arrange Offline Cards in two columns.
- Each card is 191x302px; column gap is 16px.
- Each card uses a 191x222px image region and a lower information area.
- Lower information includes a title, `2 Episodios` metadata, and a vertical overflow action.
- Add a 430x62px App Bar at the bottom.
- App Bar contains five 86x62px Home instances.
- The active navigation item uses orange icon and label treatment; inactive items use white icon and label treatment.

## Notes for implementers

- Preserve the 430px mobile frame and 398px content width for primary layouts.
- Prefer named color tokens over raw colors when a token has an extracted concrete value.
- Orange/50 is extensively used but has no extracted hex value; do not substitute an unlisted color.
- Several named tokens have no concrete value. Do not infer values for Blue/20, Orange/40, Neutral/Withe, or CoolGray/White.
- Do not replace image fills with invented colors; image references are present in the source but their image data is not included here.
- Keep icon dimensions at 24px unless a component explicitly specifies another size.
- Use white text and iconography on dark surfaces unless a component specifies orange or another documented color.
- Use 4px radii only where documented; do not generalize the radius to unspecified components.
- Keep typography family and weight paired as documented; do not interchange Inter, Roboto, and Poppins without a matching style token.
- No local variables, spacing variables, radius variables, or motion variables were found.
