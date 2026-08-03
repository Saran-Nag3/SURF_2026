---
name: indeed-for-ios-wip-community
source: Indeed for iOS WIP (Community)
kind: design-system-context
---

# indeed - Design System

## Overview

- iOS-oriented Indeed community design exploration.
- Source page: Page 1.
- Primary frames are 440x956px.
- Observed screens include Home and Search, plus screenshot references.
- No local variable collections found.

## Design language

- Mobile-first, native iOS visual language.
- Typography uses Inter and SF Pro Display.
- Primary surfaces are white, with black and muted gray labels.
- Indeed blue is used for primary actions, active navigation, links, and selected icons.
- Cards and sticky surfaces use soft shadows and rounded corners.
- Bottom navigation uses a translucent chrome material with a blur effect.
- Job listings combine a title, compensation, employer, status label, filter controls, and save/dislike actions.

## Color palette

Ranked by observed raw usage where counts were provided:

| Color | Usage / role |
|---|---|
| #FFFFFF4D | 28 uses; translucent white |
| #000000 | 27 uses; primary black |
| #FFFFFF | 15 uses; primary white and surfaces |
| #00000066 | 10 uses; muted black strokes and icons |
| #11111140 | 9 uses; translucent dark neutral |
| #D9D9D9 | 8 uses; neutral asset fills |
| #003A9B | 6 uses; dark Indeed blue and active branding |
| #1F5F7B | 6 uses; dark teal asset details |
| #B6D7EE | 6 uses; light blue asset details |
| #999999 | 5 uses; inactive navigation labels and symbols |
| #0000004D | 4 uses; dark translucent divider/shadow |
| #979797 | 4 uses; gray asset fills |
| #7B7B7B30 | 3 uses; filter chip borders |
| #F5F5F5 | 3 uses; light icon/detail strokes |

Additional named colors:

- #FFF4BA — sticky/legal-pad yellow.
- #F9FAFB — gray/50 background.
- #000000CC — dark black at 80%.
- #00000099 — dark black at 60%.
- #0A84FF — dark blue.
- #383838 — regular material dark neutral.
- #FF3B30 — red.
- #3C3C4399 — secondary label gray.
- #B3B3B3D1 — regular material gray.
- #FFFFFFBF — chrome material white.
- #007AFF — primary blue.
- #0000000A — subtle shadow.
- #00000014 — sticky shadow.
- #00000029 — elevated card shadow.
- #00000040 — elevated shadow.
- #0000007A — elevated card shadow.

## Type scale

| Style | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| H4 | Inter | 700 | 48px | 48px | -1.92px |
| Feature | Inter | 700 | 44px | 44px | -2.2px |
| SemiBold/22pt | SF Pro | 590 | 22px | 28px | -0.26px |
| Subtitle | Inter | 700 | 19px | 24px | -0.76px |
| Regular/17pt | SF Pro | 400 | 17px | 22px | -0.43px |
| Body | Inter | 400 | 16px | 22px | -0.32px |
| Detail Bold | Inter | 700 | 14px | 20px | -0.28px |
| subtle-medium | Inter | 500 | 14px | 20px | 0px |
| Uppercase SemiBold/13pt | SF Pro | 590 | 13px | 16px | -0.08px |

Raw typography also includes:

- SF Pro Display Regular: 25px, 17px, and 16px.
- SF Pro Display Medium: 18px, 14px, and 10px.
- SF Pro Display Semibold: 18px.
- SF Pro Display Thin: 16px.

## Spacing scale

No spacing variables were found.

Documented layout spacing:

- Tab bar horizontal padding: 24px.
- Tab bar gap: 83px.
- Navigation actions horizontal padding: 20px.
- Right action gap: 30px.
- Title container padding: 3px top, 20px horizontal, 8px bottom.
- Search section padding: 1px top, 20px horizontal, 15px bottom.
- Search icon/text gap: 3px.
- Back icon/text gap: 4px.
- Status bar horizontal padding: 10px.
- Status bar left/right area padding: 18px and 13px.
- Search input leading padding: 6px.

## Radius scale

Documented radii:

- 7px — filter chips and primary action button.
- 10px — search input.
- 12px — context menu content area.
- 100px — Dynamic Island hole.
- 0/0/1/1px — asset rectangle corner configuration.

## Elevation & effects

- Sticky Shadow:
  - Drop shadow: 16px, offset 0 8px, color #00000014.
  - Drop shadow: 8px, offset 0 2px, color #0000000A.
  - Drop shadow: 4px, offset 0 4px, color #00000040.
- Elevated Card:
  - Drop shadow: 10px, offset 0 4px, color #00000029.
  - Drop shadow: 2px, offset 0 0px, color #0000007A.
- Bottom tab bar:
  - Background blur: 50px.
  - Drop shadow: 0px, offset 0 -0.33px, color #0000004D.
- Context menu:
  - Background blur: 20px.
- Status bar Dynamic Island hole:
  - Fill: #000000.
  - Radius: 100px.

## Components

Allowed component families present:

- Group
- Group 1
- Group 2
- Group 3
- Group 4
- Group 6
- Vector 2
- Vector 6
- icon

Component specifications:

| Component | Size | Appearance / behavior |
|---|---:|---|
| Group 4 | 120x41px | Find jobs action; 120x36px button, 7px radius, #007AFF fill, white SF Pro Display Medium 14px label |
| Group 4 | 120x41px | Alternate Find jobs action with #FFFFFF surface and blue gradient treatment in source |
| Group 6 | 123x84px | Illustration asset using #B6D7EE, #1F5F7B, #FFFFFF, and other source-defined fills |
| Group | 55x15px | Branding graphic filled #003A9B |
| Group 3 | 24x24px | Asset component |
| Group 2 | 14x14px | Gray asset component using #979797 and #D9D9D9 |
| Group 1 | 14x14px | Black outlined asset component with #D9D9D9 detail fills |
| Vector 6 | 14x14px | Blue asset component |
| Vector 2 | 14x18px | Black outlined asset component |
| icon/home | 24x24px | White component surface; #003A9B 2px stroke |
| icon/bookmark | 24x24px | White component surface; #000000 2px stroke |
| icon/bookmark-plus | 24x24px | White component surface; #00000066 2px stroke |
| icon/message-square | 24x24px | White component surface; #00000066 2px stroke |
| icon/user | 24x24px | White component surface; #00000066 2px stroke |
| icon/thumbs-down | 24x24px | White component surface; #000000 2px stroke |
| icon/arrow-up | 24x24px | Black 2px stroke |
| icon/dollar-sign | 24x24px | Black 2px stroke |

### Navigation and system chrome

- Tab bar: 440x74px, filled with #FFFFFFBF, background blur 50px.
- Tab buttons: 48x40px, horizontal padding 24px, 83px gap.
- Active tab label: #003A9B; active symbol: #007AFF.
- Inactive tab labels and symbols: #999999.
- Navigation bar: 430px wide.
- Status bar: 430x54px.
- Dynamic Island: 126x54px container with a 126x37px black hole.
- Actions container: 430x44px with 20px horizontal padding.
- Right actions: 120x44px with 30px gaps.

### Search input

- Search input: 390x36px.
- Input background is a 50%-opacity gray surface from the source.
- Input radius: 10px.
- Leading content uses 6px left padding and a 3px icon/text gap.

### Filter controls

- Filter chips use 7px radius and a 1px #7B7B7B30 stroke.
- Observed widths: 120px, 120px, 91px, and 57px.
- Observed heights: 28px and 20px.

## Screen patterns

### Home

- 440x956px white frame.
- iOS navigation and status chrome at the top.
- Page title and search input.
- “Jobs for you” section.
- Filter chips and a “Clear filter” link.
- Job listing content with title, compensation, employer, and “New” status.
- Job actions include dollar sign, thumbs down, bookmark, and bookmark plus icons.
- Bottom tab bar with four tabs.
- Context menu overlays use a 351x226px content area with 12px radius.

### Search

- 440x956px white frame.
- Same 430px navigation bar and iOS status-bar structure as Home.
- Back action is present.
- Search title uses secondary label styling.
- Search input occupies 390x36px within a 430px search section.

### Reference screenshots

- Multiple 391px-wide screenshot references are present, with heights of 941px and 956px.
- Screenshot contents are image assets; no additional reusable token data is available from them.

## Notes for implementers

- Use only the documented colors, typography, radii, effects, and component families.
- Prefer SF Pro Display for iOS navigation, tab labels, search, and job metadata where specified.
- Use Inter for the named product type styles: Body, subtle-medium, Detail Bold, Subtitle, Feature, and H4.
- Keep primary actions blue with white labels; use #007AFF where the source specifies primary blue.
- Use #003A9B for dark branded blue and active home/branding marks.
- Preserve the 24x24px icon box size even when the drawn vector is smaller.
- Treat the 440px frame as the primary layout width for Home and Search.
- No spacing, radius, grid, or motion variable collections were found; use only the explicit measurements documented above.
