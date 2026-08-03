---
name: github-ui-resume-community
source: Github UI Resume (Community)
kind: design-system-context
---

# github - Design System

## Overview

A GitHub-inspired dark resume UI system covering three screens:
- **CV / Resume:** Two-column resume layout with profile, education, skill tags, soft skills, work experience, and other experience.
- **Components / Work Experience:** Reusable work-experience card with breadcrumb header, description, topic tags, and metadata tags.
- **Components / topic-tag and Tag:** Standalone tag components.
- **Cover:** Presentation cover for the resume with a large title and framed resume preview.

No local variable collections were found.

## Design language

- Dark, developer-oriented visual language with muted gray text, blue links and topic tags, subtle borders, and compact metadata.
- Use SF Pro Display for display and regular text content; use SF Pro Text Semibold for compact labels and emphasis.
- Use rounded pill-shaped tags with `100px` radius.
- Use thin `1px` borders for cards and outlined labels.
- Work-experience content is structured into compact vertical blocks with consistent gaps and metadata rows.
- Link and repository-style text uses `#6AA6F8`.
- Secondary and metadata text uses `#8B949E` or `#8C949D`.

## Color palette

Ranked by raw usage where counts are available:

| Color | Raw usage | Usage |
|---|---:|---|
| `#8B949E` | 190 | Muted text and Tag labels |
| `#E9E9E9` | 171 | Tag indicator fill |
| `#FFFFFF1A` | 171 | Tag indicator stroke |
| `#6AA6F8` | 120 | Links, repository text, and topic-tag text |
| `#162337` | 86 | topic-tag fill |
| `#CAD1D8` | 60 | Primary resume text and headings |
| `#31363C` | 45 | Card, section, and component strokes |
| `#1F2124` | 28 | Skill and soft-skill tag fill; `border/subtle` token |
| `#8C949D` | 21 | Secondary label and icon color |
| `#1B1F2426` | 14 | `btn/counter-bg` raw color |
| `#57606A` | 8 | `fg/muted` token |

Named color tokens:
- `fg/muted`: `#57606A`
- `btn/counter-bg`: `#1B1F2414`
- `btn/text`: `#24292F`
- `border/subtle`: `#1F2124`

## Type scale

| Size | Family | Weight | Line height | Tracking | Usage |
|---:|---|---:|---:|---:|---|
| `20px` | SF Pro Display | 400 | `30px` | `0.3px` | `Font scale/f3 - 20px` |
| `20px` | SF Pro Display | 600 | `30px` | `0.3px` | `Heading/h3 - 20px` |
| `18.11px` | SF Pro Display | 400 | Not specified | Not specified | Raw display text |
| `18.11px` | SF Pro Display | 600 | Not specified | Not specified | Raw semibold display text |
| `18px` | SF Pro Display | 400 | Not specified | Not specified | Raw display text |
| `16.3px` | SF Pro Display | 400 | Not specified | Not specified | Raw display text |
| `14px` | SF Pro Text | 600 | `20px` | `-0.15px` | `Text style/text-bold` |
| `14px` | SF Pro Display | 400 | Not specified | Not specified | Resume body text |
| `12.67px` | SF Pro Display | 400 | Not specified | Not specified | Raw display text |
| `12px` | SF Pro Text | 600 | `18px` | `0px` | `Text style/text-small-bold` |
| `12px` | SF Pro Text | 600 | `16px` | `0px` | `text/text-small-bold-condensed` |
| `12px` | SF Pro Display | 400 | Not specified | Not specified | Tag text and raw display text |
| `12px` | SF Pro Text | 500 | Not specified | Not specified | Raw medium text |
| `10.86px` | SF Pro Display | 400 | Not specified | Not specified | Raw display text |
| `10.86px` | SF Pro Text | 500 | Not specified | Not specified | Raw medium text |
| `10.86px` | SF Pro Text | 600 | Not specified | Not specified | Raw semibold text |

Most-used styles:
- `text/text-small-bold-condensed`: 46 uses
- `Font scale/f3 - 20px`: 19 uses
- `Text style/text-small-bold`: 10 uses
- `Heading/h3 - 20px`: 9 uses
- `Text style/text-bold`: 1 use

## Spacing scale

No spacing variables were found.

Documented component and layout spacing values:
- Work Experience gap: `25px`; bottom padding: `24px`
- Work Experience internal block gap: `8px`
- topic-tag padding: `4px 8px 4px 8px`; gap: `10px`
- Tag gap: `2px`
- Work-experience topic-tag row gap: `8px`
- Work-experience metadata row gap: `8px`
- Work list padding: `16px`; work list gap: `24px` in the main list and `16px` in the Other list
- Resume column gap: `59px`
- Resume sidebar section gap: `32px`
- Resume main section gap: `32px`
- Work-experience section gap: `16px`
- Bio internal gap: `8px`
- Education and skill section gaps: `12px`

## Radius scale

No radius variables were found.

Documented component radii:
- `topic-tag`: `100px`
- Tag-style skill and soft-skill pills: `100px`
- Work list: `8px`
- Button: `6px`
- Cover resume frame: `16px`
- Outlined private label: `100px`

## Elevation & effects

No local effect styles were found.

Documented visual effects:
- Thin strokes are used on cards, sections, and labels.
- Work Experience stroke: `#31363C`, `1px`
- Tag indicator stroke: `#FFFFFF1A`, `1px`
- No shadows or elevation tokens were found.

## Components

### Tag

- Family: `Tag`
- Size: `33px × 14px`
- Layout: horizontal
- Padding: `0 0 0 0px`
- Gap: `2px`
- Sizing: fixed width and fixed height
- Indicator: `12px × 12px` ellipse
- Indicator fill: `#E9E9E9`
- Indicator stroke: `#FFFFFF1A`, `1px`
- Label: SF Pro Display Regular, `12px`; color `#8B949E`

### topic-tag

- Family: `topic-tag`
- Size: `71px × 24px`
- Layout: vertical
- Padding: `4px 8px 4px 8px`
- Gap: `10px`
- Radius: `100px`
- Fill: `#162337`
- Content text: `55px × 16px`
- Text style: `text/text-small-bold-condensed`
- Text color: `#6AA6F8`

### Work Experience

- Family: `Work Experience`
- Component size: `623px × 172px`
- Layout: horizontal
- Bottom padding: `24px`
- Gap: `25px`
- Alignment: max/min
- Sizing: fixed width and fixed height
- Stroke: `#31363C`, `1px`
- Internal Block: `623px × 148px`, vertical layout, gap `8px`
- Header: `191px × 30px`, horizontal layout, gap `8px`
- Header breadcrumb uses `20px` SF Pro Display styles and `#6AA6F8` for repository/user text.
- Description: SF Pro Display Regular, `14px`, color `#8B949E`
- Topic tags: five `topic-tag` instances in the extracted component example.
- Metadata: `Tag` instances in a horizontal stack with `8px` gap.

## Screen patterns

### CV / Resume

- Resume frame: `1076px × 1595px`.
- Main container: `1011px × 1494px`, horizontal layout, gap `59px`.
- Sidebar: `232px × 944px`, vertical layout, gap `32px`.
- Sidebar sections include Bio, Education, Tech Stack, and Soft Skills.
- Main content column: `720px × 1494px`, vertical layout, gap `32px`.
- Work Experience section: `720px × 1221px`; work list uses `16px` padding and `24px` gap, with six Work Experience instances.
- Other section: `720px × 241px`; work list uses `16px` padding and `16px` gap, with two Work Experience instances.
- Section headings use SF Pro Display Regular, `18px`, color `#CAD1D8`.

### Components / Work Experience

- Standalone `Work Experience` component at `623px × 172px`.
- Structure: breadcrumb header, description, topic-tag row, and metadata Tag row.
- Header repository/user text uses `#6AA6F8`; breadcrumb divider uses `fg/muted`.
- Topic tags use the `topic-tag` family.
- Metadata entries use the `Tag` family.

### Components / topic-tag

- Standalone pill at `71px × 24px`.
- Use `#162337` fill, `100px` radius, and `#6AA6F8` condensed semibold text.

### Components / Tag

- Standalone metadata item at `33px × 14px`.
- Combine a `12px × 12px` indicator with `12px` SF Pro Display Regular text.

### Cover

- Cover frame: `1920px × 960px`.
- Large title: `Github UI Resume`, using Helvetica Neue Medium at `103.27px`.
- Resume preview frame: `974.13px × 1444px`, `16px` radius, `1px` stroke `#31363C`.
- Preview content uses scaled versions of the resume layout.

## Notes for implementers

- Use only the documented component families: `Tag`, `topic-tag`, and `Work Experience`.
- Preserve the distinction between `Tag` metadata items and `topic-tag` blue pill labels.
- Prefer the named typography tokens for reusable UI; raw typography values are present but lack complete line-height and tracking definitions.
- Keep borders thin and subtle; use `#31363C` for component and section strokes.
- Do not introduce spacing, radius, motion, grid, shadow, or effect tokens beyond the documented values.
- No motion tokens, grid styles, or local effect styles were found.
- The source includes additional colors and fills not included in the allowed palette; use the documented palette values above for implementation.
