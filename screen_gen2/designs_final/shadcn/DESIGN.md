---
name: myna-ui-tailwindcss-shadcn-ui-radix-premium-ui-kit-community
source: Myna UI - TailwindCSS & shadcn/ui & Radix Premium UI Kit (Community)
kind: design-system-context
---

# shadcn - Design System

## Overview

Myna UI is a TailwindCSS, shadcn/ui, and Radix-based premium UI kit. The source covers six Figma pages:

- Components
- Design System
- Assets
- Marketing Blocks
- Application Blocks
- Email Blocks

No local variable collections were found. The extraction includes reusable UI components, a large named icon set, Inter- and Geist-based typography, color usage counts, max-width grid styles, and effect styles.

## Design language

- Primary typeface: Inter.
- Supporting typeface: Geist, used primarily at 14px and in some 12px and 16px raw text.
- Monospace typefaces in raw usage: Menlo at 12px and Chivo Mono at 14px.
- Text tracking: `0px` across the extracted typography tokens.
- Layout uses centered, single-column max-width sections from `320px` through `1280px`.
- The palette is neutral-led, with blue, violet, magenta, red, orange, and dark navy accents.
- Effects include subtle black-alpha shadows, large shadows, inner shadows, layer blur, and backdrop blur.

## Color palette

Ranked by observed usage:

| Color | Uses |
|---|---:|
| `#DADADA` | 825 |
| `#FFFFFF` | 560 |
| `#000000` | 318 |
| `#F5F5F5` | 172 |
| `#0068A3` | 87 |
| `#10298E` | 78 |
| `#4A4A4A` | 77 |
| `#262626` | 53 |
| `#002855` | 42 |
| `#1A1919` | 41 |
| `#2D2341` | 36 |
| `#D8232A` | 33 |
| `#F7931A` | 28 |
| `#17120F` | 27 |
| `#6461FC` | 24 |
| `#862165` | 24 |
| `#E10098` | 24 |
| `#FFFFFE` | 24 |

Use the neutral colors for surfaces, borders, and text before introducing accent colors. The extraction does not define semantic color-token names beyond the raw values.

## Type scale

All extracted typography tokens use `0px` tracking.

### Core Inter scale

| Size | Line height | Available weights |
|---:|---:|---|
| `12px` | `16px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `14px` | `20px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `16px` | `24px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `18px` | `28px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `20px` | `28px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `24px` | `32px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `30px` | `36px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `36px` | `40px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `48px` | `48px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `60px` | `60px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `72px` | `72px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `96px` | `96px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| `128px` | `128px` | 100, 200, 300, 400, 500, 600, 700, 800, 900 |

### Named recurring styles

- `text-xs/normal`: Inter Regular, `12px / 16px`
- `text-xs/medium`: Inter Medium, `12px / 16px`
- `text-xs/semibold`: Inter SemiBold, `12px / 16px`
- `text-sm/normal`: Inter Regular, `14px / 20px`
- `text-sm/medium`: Inter Medium, `14px / 20px`
- `text-sm/semibold`: Inter SemiBold, `14px / 20px`
- `body-medium`: Inter Medium, `14px / 24px`
- `text-base/normal`: Inter Regular, `16px / 24px`
- `text-base/medium`: Inter Medium, `16px / 24px`
- `text-base/semibold`: Inter SemiBold, `16px / 24px`
- `text-lg/normal`: Inter Regular, `18px / 28px`
- `text-lg/medium`: Inter Medium, `18px / 28px`
- `text-lg/semibold`: Inter SemiBold, `18px / 28px`
- `text-xl/normal`: Inter Regular, `20px / 28px`
- `text-xl/semibold`: Inter SemiBold, `20px / 28px`
- `text-xl/bold`: Inter Bold, `20px / 28px`
- `text-2xl/semibold`: Inter SemiBold, `24px / 32px`
- `text-2xl/bold`: Inter Bold, `24px / 32px`
- `text-3xl/bold`: Inter Bold, `30px / 36px`
- `text-4xl/semibold`: Inter SemiBold, `36px / 40px`
- `text-4xl/bold`: Inter Bold, `36px / 40px`
- `text-4xl/extrabold`: Inter ExtraBold, `36px / 40px`
- `text-5xl/bold`: Inter Bold, `48px / 48px`
- `text-6xl/extralight`: Inter ExtraLight, `60px / 60px`
- `text-9xl/thin`: Inter Thin, `128px / 128px`
- `text-9xl/black`: Inter Black, `128px / 128px`

### Alternate font usage

- Geist Regular and Medium: `14px / 20px`
- Geist Regular: `12px` and `16px` raw usage
- Geist SemiBold: `14px`
- Menlo Regular: `12px`
- Chivo Mono Regular and Medium: `14px`

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

### Shadows

- `shadow/2xs`: drop shadow, offset `0 1`, color `#0000000D`
- `shadow/xs`: drop shadow, offset `0 1`, color `#0000000D`
- `shadow/sm`: drop shadow, offset `0 1`, color `#0000000D`
- `shadow/sm`: drop shadows, offset `0 1`, color `#0000000F`, and offset `0 1`, color `#0000001A`
- `shadow/md`: drop shadows, offset `0 2`, color `#0000000F`, and offset `0 4`, color `#0000001A`
- `shadow/lg`: drop shadows, offset `0 4`, color `#0000000D`, and offset `0 10`, color `#0000001A`
- `shadow/xl`: drop shadows, offset `0 10`, color `#0000000A`, and offset `0 20`, color `#0000001A`
- `shadow/2xl`: drop shadow, offset `0 25`, color `#00000040`

### Inner shadows

- `inner-shadow/2xs`: inner shadow, offset `0 1`, color `#0000000D`
- `inner-shadow/xs`: inner shadow, offset `0 1`, color `#0000000D`
- `inner-shadow/sm`: inner shadow, offset `0 2`, color `#0000000D`

### Blur

Layer blur values:

- `blur/none`: `0px`
- `blur/xs`: `4px`
- `blur/sm`: `8px`
- `blur/md`: `12px`
- `blur/lg`: `16px`
- `blur/xl`: `24px`
- `blur/2xl`: `40px`
- `blur/3xl`: `64px`

Backdrop blur values:

- `backdrop-blur/none`: `0px`
- `backdrop-blur/xs`: `4px`
- `backdrop-blur/sm`: `8px`
- `backdrop-blur/md`: `12px`
- `backdrop-blur/lg`: `16px`
- `backdrop-blur/xl`: `24px`
- `backdrop-blur/2xl`: `40px`
- `backdrop-blur/3xl`: `64px`

## Components

### UI component families

Use the extracted families as the available component vocabulary:

- Accordion
- Alert
- Alert Dialog
- Avatar
- Badge
- Breadcrumb Item
- Button
- Calendar
- Card
- Carousel
- Checkbox
- Checkbox Group
- Combobox
- Combobox Trigger
- Command
- Context Menu
- Date Picker
- Days
- Dialog
- Drawer
- Dropdown Menu
- Hover Card
- Input
- Input Group
- Input OTP
- Input OTP Container
- Input OTP Group
- Label Text
- Menu Item
- Menubar
- Menubar Dropdown
- Menubar Trigger Item
- Pagination Item
- Pagination Link
- Popover
- Progress
- Radio
- Scrollbar
- Select Dropdown
- Select Group
- Select Trigger
- Separator
- Sheet
- Slider
- Sonner
- Store Badges
- Switch
- Switch Group
- Tab Item
- Table
- Tabs
- Tag
- Textarea
- Textarea Group
- Toggle
- Tooltip

### Additional extracted families

- Element
- Flag
- Maps
- Payment Method & Credit Cards
- Row
- Cursor

### Icons

The source includes a large named icon set. Use only extracted icon names, including action icons such as `check`, `x`, `plus`, `minus`, `search`, `edit`, `delete`, `download`, `upload`, `menu`, `chevron-down`, `chevron-left`, `chevron-right`, and `chevron-up`, as well as the extracted status, navigation, communication, commerce, media, chart, weather, shape, number, and letter variants.

## Screen patterns

- **Components:** reusable controls, feedback elements, navigation primitives, overlays, form controls, data display, and utility components.
- **Design System:** typography, colors, effects, grids, and design-token references.
- **Assets:** avatars, flags, maps, payment methods, store badges, cursor assets, and named icons.
- **Marketing Blocks:** marketing-oriented compositions built from the component library.
- **Application Blocks:** application-oriented layouts and interactive interface compositions.
- **Email Blocks:** email-oriented compositions using the same visual language and reusable elements.

Grid styles are centered, single-column max-width sections:

| Token | Section width |
|---|---:|
| `max-width/xs` | `320px` |
| `max-width/sm` | `384px` |
| `max-width/md` | `448px` |
| `max-width/lg` | `512px` |
| `max-width/xl` | `576px` |
| `max-width/2xl` | `672px` |
| `max-width/3xl` | `768px` |
| `max-width/4xl` | `896px` |
| `max-width/5xl` | `1024px` |
| `max-width/6xl` | `1152px` |
| `max-width/7xl` | `1280px` |

All extracted grid styles use one column, `0px` gutter, and centered alignment.

## Notes for implementers

- Prefer Inter for new UI text unless a source pattern specifically calls for Geist, Menlo, or Chivo Mono.
- Preserve the exact extracted line heights and `0px` tracking.
- Prioritize colors by observed usage: `#DADADA`, `#FFFFFF`, `#000000`, and `#F5F5F5` are the dominant neutrals.
- Use accent colors from the extracted palette only; do not introduce additional colors.
- No spacing variables or radius variables were extracted. Do not infer a spacing or radius scale from this source.
- When applying elevation, use the named shadow and blur effects rather than inventing new effect values.
- Use centered max-width layouts from the extracted grid styles.
- Avatar tokens reference images, not colors: `Avatar/1` uses image hash `a07b0b43d6f080949cc7f3e45da3ec90c1c42f92`; `Avatar/10` uses image hash `abcadb1700d983b259b4ff355a2013ff064726fc`.
