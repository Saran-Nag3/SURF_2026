---
name: webtoon
source: Manga & Webtoon App (Community)
kind: design-system-context
---

# webtoon - Design System

## Overview

Dark manga and webtoon reading/discovery interface for mobile screens. Primary screens are Home and Chapters, both built around a dark #171717 background, #DA0037 accents, manga cover imagery, rounded cards, and bold section headings. A 1280x720 thumbnail presents scaled previews of the Home and Chapters screens.

## Design language

- Dark, high-contrast visual system.
- Primary accent: #DA0037.
- Main background: #171717.
- Headings use Oswald Bold and are set in large sizes.
- Supporting labels and metadata use Poppins Medium.
- Strongly rounded surfaces: 16px, 24px, and 32px radii are used.
- Manga artwork is prominent in hero cards, cover cards, and chapter rows.
- Section headings use white or #EDEDED.
- Ratings use a #FFFF00 star with adjacent metadata.
- Primary floating actions use #DA0037 with a drop shadow.
- Decorative and status-bar elements use #FFFFFF.

## Color palette

Ranked by observed usage:

| Color | Usage | Role |
|---|---:|---|
| #EDEDED | 74 uses | Primary light text and icon color |
| #DA0037 | 32 uses | Accent, primary actions, links, borders, highlighted titles |
| #FFFFFF | 52 uses | Card fills, status bar, hero text, icons |
| #DADADA | 28 uses | Neutral light color |
| #EDEDEDBF | 26 uses | Secondary text and muted strokes |
| #171717 | 7 uses | Main screen background |
| #000000 | 6 uses | Dark overlay and blur source |
| #FFFF00 | 6 uses | Rating star |
| #EDEDED80 | 4 uses | Low-emphasis synopsis text |

## Type scale

### Oswald Bold

- 24px: major section headings and hero titles.
- 18.79px: scaled thumbnail headings.
- 18px: chapter titles.
- 14.08px: scaled thumbnail synopsis heading.

### Poppins

- Bold, 18px: chapter titles.
- Bold, 16px: user name.
- Bold, 14.08px: scaled thumbnail text.
- Medium, 12px: metadata, labels, ratings, chapter counts, navigation links.
- Medium, 9.4px: scaled thumbnail body text.
- Medium, 9.39px: scaled thumbnail body text.

### Other

- SF Pro Text Semibold, 15px: mobile status-bar time.
- SF Pro Text Semibold, 11.73px: scaled thumbnail status-bar time.
- Poppins Regular, 12px: greeting text.

## Spacing scale

No spacing variables were found. Observed layout gaps and spacing values:

- 4px: compact icon-to-label spacing.
- 8px: card-stack gaps, image-to-label gaps, and vertical list gaps.
- 13px: chapter-row image-to-content gap.
- 16px: horizontal spacing between navigation elements and cards.
- 125px: Home section header gap.
- 148px: scaled section header gap.
- 243px: Chapters screen top navigation gap.

## Radius scale

- 12.52px: scaled thumbnail chapter-cover radius.
- 16px: cover cards and compact image surfaces.
- 18.77px: scaled thumbnail screen, content panel, and chapter rows.
- 18.79px: scaled thumbnail Home screen.
- 24px: mobile screen frame, chapter detail panel, and chapter rows.
- 25.03px: scaled thumbnail floating action.
- 32px: primary pill-shaped action bar.
- 24px: circular and pill-shaped screen surfaces where explicitly applied.

## Elevation & effects

- Layer blur: 140px on Home hero artwork overlays.
- Layer blur: 120px on Chapters hero artwork overlays.
- Drop shadow: 4px offset on primary floating actions and content panels.
- Scaled thumbnail drop shadow: 3.13px offset.
- Hero artwork overlays use a #000000 stroke with 100px width on Home and Chapters.
- Thumbnail hero artwork overlay uses a #000000 stroke with 78.22px width.
- Chapter rows use a 1px #DA0037 stroke.
- Scaled thumbnail chapter rows use a 0.78px #DA0037 stroke.

## Components

_None found in source._

## Screen patterns

### Home

- 360x800px dark screen with a 24px outer radius.
- Status bar at the top.
- Greeting and user name near the top, with the accent color used for the user name.
- “Most Popular” section uses a 24px Oswald Bold heading.
- Featured manga cards are 296x200px with a 16px radius, white surface, artwork, title, rating, and chapter count.
- Cover grids use 128x190px artwork with 16px radius and 8px label spacing.
- Section headers such as “Recent Release” and “Coming Soon” pair a large Oswald Bold heading with a #DA0037 “See more” link.
- Primary action is a 296x64px #DA0037 pill with a 32px radius.

### Chapters

- 360x800px dark screen with a 24px outer radius.
- Hero artwork spans the upper area and is combined with a dark blurred overlay.
- Detail panel is 328x128px with a 24px radius and drop shadow.
- Title uses Oswald Bold, 24px; rating and view count use Poppins Medium, 12px.
- Synopsis heading uses Oswald Bold, 18px in #EDEDED80.
- Chapter list heading uses Oswald Bold, 24px.
- Chapter rows are 328x96px with a 24px radius and a 1px #DA0037 border.
- Each chapter row contains an 84x80px cover with a 16px radius, metadata, and an accent-colored chapter title.
- A 48x48px #DA0037 circular action appears near the bottom with a white arrow icon.
- Primary action bar is a 296x64px #DA0037 pill with a 32px radius.

### Thumbnail

- 1280x720px #DA0037 canvas containing scaled Home and Chapters previews.
- Scaled screen previews use approximately 18.77px to 18.79px outer radii.
- Typography and spacing are proportionally reduced, including 18.79px Oswald headings and 9.39px Poppins body text.

## Notes for implementers

- Use only the documented colors; do not introduce additional palette values.
- Preserve the dark #171717 canvas and #DA0037 action hierarchy.
- Use Oswald Bold for prominent headings and manga titles.
- Use Poppins Medium for metadata, labels, ratings, chapter counts, and secondary navigation.
- Keep manga artwork inside rounded surfaces and maintain the documented image dimensions where the layout requires fixed sizing.
- Use #FFFF00 only for rating stars.
- Use #EDEDEDBF and #EDEDED80 for secondary and low-emphasis text respectively.
- No reusable component families or local design tokens were defined in the source.
