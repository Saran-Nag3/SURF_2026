---
name: strapi-ui-kit-community
source: Strapi - UI Kit 🧩 (Community)
kind: design-system-context
---

# strapi - Design System

## Overview

- Source: Figma file `Strapi - UI Kit 🧩 (Community)`.
- Pages: `--- UI Kit ---`, `🎨 Design tokens`, `🧱 Components`, `🖼 Pages`.
- No local variable collections were found.
- The system includes light and dark semantic color tokens, SF Pro typography, an 8px grid, UI controls, navigation patterns, status indicators, form controls, overlays, tables, and a large icon set.
- Use the named design tokens where available. Raw unstyled values are included only as observed source values.

## Design language

- Product UI uses compact, structured controls with rounded corners, outlined fields, semantic statuses, and dense data-management patterns.
- Primary interface typography uses SF Pro Text for body and controls, and SF Pro Display for headings.
- The default layout grid is 8px.
- Icons are generally 24x24px.
- Light mode uses white surfaces and light neutral backgrounds; dark mode uses `#181826` and `#212134` surfaces with lighter text and semantic colors.
- Focus treatment uses a four-sided inner shadow in `#271FE0`.

## Color palette

### Most-used raw colors

| Color | Observed usage |
|---|---:|
| `#E6E6E6` | 6400 |
| `#FFFFFF` | 310 |
| `#8E8EA9` | 180 |
| `#B3B5B9` | 104 |
| `#979797` | 90 |
| `#D8D8D8` | 90 |
| `#22075E` | 76 |
| `#212134` | 62 |
| `#000000` | 60 |
| `#449AFF` | 60 |
| `#7B79FF` | 54 |
| `#1A2532` | 49 |
| `#C4C4C4` | 42 |

### Light semantic palette

- Neutral:
  - Neutral0, Neutral150, Neutral200, Neutral300: `#FFFFFF`
  - Neutral100: `#F6F6F9`
  - Neutral400: `#A5A5BA`
  - Neutral500: `#8E8EA9`
  - Neutral600: `#666687`
  - Neutral700: `#4A4A6A`
  - Neutral800: `#32324D`
  - Neutral900: `#212134`
  - Neutral1000: `#181826`
- Primary:
  - Primary100, Primary200: `#F0F0FF`
  - Primary600: `#4945FF`
  - Primary700: `#271FE0`
- Secondary:
  - Secondary100, Secondary200: `#EAF5FF`
  - Secondary500: `#66B7F1`
  - Secondary600: `#0C75AF`
  - Secondary700: `#006096`
- Alternative:
  - Alternative100, Alternative200: `#F6ECFC`
  - Alternative500: `#AC73E6`
  - Alternative600: `#9736E8`
  - Alternative700: `#8312D1`
- Success:
  - Success100, Success200: `#EAFBE7`
  - Success500: `#5CB176`
  - Success600: `#328048`
  - Success700: `#2F6846`
- Warning:
  - Warning100, Warning200: `#FDF4DC`
  - Warning500: `#F29D41`
  - Warning600: `#D9822F`
  - Warning700: `#BE5D01`
- Danger:
  - Danger100, Danger200: `#FCECEA`
  - Danger500: `#EE5E52`
  - Danger600: `#D02B20`
  - Danger700: `#B72B1A`

### Dark semantic palette

- Neutral:
  - Neutral0, Neutral150, Neutral200: `#212134`
  - Neutral100: `#181826`
  - Neutral300: `#666687`
  - Neutral400: `#A5A5BA`
  - Neutral500: `#C0C0CF`
  - Neutral600: `#A5A5BA`
  - Neutral700: `#EAEAEF`
  - Neutral800, Neutral900, Neutral1000: `#FFFFFF`
- Primary:
  - Primary100, Primary200: `#181826`
  - Primary500: `#4945FF`
  - Primary600: `#7B79FF`
  - Primary700: `#7B79FF`
- Secondary:
  - Secondary100, Secondary200: `#181826`
  - Secondary500: `#66B7F1`
  - Secondary600: `#66B7F1`
  - Secondary700: `#B8E1FF`
- Alternative:
  - Alternative100: `#181826`
  - Alternative200: `#4A4A6A`
  - Alternative500, Alternative600: `#AC73E6`
  - Alternative700: `#E0C1F4`
- Success:
  - Success100: `#181826`
  - Success200: `#4A4A6A`
  - Success500, Success600: `#5CB176`
  - Success700: `#C6F0C2`
- Warning:
  - Warning100: `#181826`
  - Warning200: `#4A4A6A`
  - Warning500: `#F29D41`
  - Warning600: `#F29D41`
  - Warning700: `#FAE7B9`
- Danger:
  - Danger100, Danger200: `#181826`
  - Danger500, Danger600, Danger700: `#EE5E52`

### Other named colors

- `Carbon 0`: `#FFFFFF`
- `Carbon 500`: `#8E8EA9`
- `Carbon 900`: `#212134`
- `FFF white`: `#FFFFFF`
- `blue/100`: `#DAD9FF`
- `blue/400`: `#7673FF`
- `blue/500`: `#4945FF`
- `green/500`: `#328048`

## Type scale

Use SF Pro Text for body, labels, buttons, and small text. Use SF Pro Display for headings.

| Role | Font | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| H1 / Alpha | SF Pro Display | Bold 700 | 32px / 40px | 0px |
| H2 / Beta | SF Pro Display | Bold 600 or Bold 700 | 18px / 22px | 0px |
| H3 / Delta | SF Pro Display | Medium 500 | 16px / 20px | 0px |
| Subtitle / Epsilon | SF Pro Text | Regular 400 | 16px / 24px | 0px |
| Body / Omega | SF Pro Text | Regular 400 | 14px / 20px | 0px |
| Body Highlight / Omega | SF Pro Text | Semibold 600 | 14px / 20px | 0px |
| Button text / Omega | SF Pro Text | Bold 700 | 14px / 16px | 0px |
| Small text / Pi | SF Pro Text | Regular 400 | 12px / 16px | 0px |
| Small button text / Pi | SF Pro Text | Bold 700 | 12px / 16px | 0px |
| Table Label / Sigma | SF Pro Text | Bold 700 | 11px / 16px | 0px |

Raw typography also contains SF Pro Text sizes `6.34px`, `6.92px`, `7.67px`, `8.94px`, `10px`, `10.43px`, `11px`, `12px`, `14px`, `15.05px`, `15.1px`, and `17.61px`; SF Pro Display Medium at `16px`; SF Pro Text Bold at `20px` and `200px`; Lato Bold at `10px` and `60px`; and Material Icons Regular at `19px`.

## Spacing scale

- Grid: `8px` default.
- No spacing variables were found.
- Observed component spacing:
  - `4px`: PopOver padding, Toggle and input vertical gaps, compact status padding.
  - `8px`: PopOver row gap and horizontal padding, Tag horizontal padding, status gaps.
  - `10px`: TimePicker and DatePicker vertical gap.
  - `12px`: Tag horizontal padding.
  - `16px`: PopOver row horizontal padding, Status padding, Header spacing.
- Do not infer additional spacing tokens from these observations.

## Radius scale

No radius variables were found.

Observed component radii:

- `2px`: Badge.
- `4px`: PopOver, Status, Status / Simple, Avatar, Tag, Toggle, GlassesSquare, FeatherSquare, PlaySquare, CodeSquare, InformationSquare.

## Elevation & effects

- Table shadow / Filter shadow:
  - Drop shadow.
  - Offset: `0 1`.
  - Blur: `4px`.
  - Color: `#2121341A`.
- Popup Shadow:
  - Drop shadow.
  - Offset: `0 2`.
  - Blur: `15px`.
  - Color: `#2121341A`.
- Focus:
  - Inner shadow at `2 0`, `0 2`, `-2 0`, and `0 -2`.
  - Color: `#271FE0`.
- Dribbble shadow:
  - Drop shadow.
  - Offset: `0 4`.
  - Blur: `42px`.
  - Color: `#7A78B61A`.

## Components

### Core controls and states

- `Button`: button text uses Omega Bold, `14px / 16px`.
- `Input`: includes JSON field, NumberInput, and Select variants.
- `Checkbox`, `Radio`, `Toggle`, and `Switch`: support enabled, disabled, empty, false, true, null, error, and related state variants as defined in the source.
- `DatePicker`: `268x77px`; states include Completed, Completing, Disabled, Empty, Error, and Selected.
- `TimePicker`: `142x77px`; states include Completed, Disabled, Empty, Error, and Selected.
- `ProgressBar`: `78x4px`; variants include Large/Small and Cancel No/Yes.
- `SearchBar`, `Search`, `Filter`, `Pagination`, `Tabs`, and `Bulk Select` support data-management workflows.

### Navigation and layout

- `Header`: `984x136px`, light neutral background, with breadcrumb and level variants.
- `Header / Sticky`: `983x64px`, white background, with first-level and second-level variants.
- `MainNavigation`, `SubNavigation`, `Sidebar`, `SideBar`, `Menu`, `Breadcrumb`, `Accordion`, `Divider`, `Layout`, `Overlay`, and `Content` are available.
- `Accordion`: `633x68px`; variants include default, disabled, selected, icon, table-active, table-grey, and table-white states.
- `PopOver`: `251x80px`, `4px` radius, `4px` padding, white/light neutral surface, `0.5px` light neutral stroke, and Table shadow.
- `PopOver / Row`: `242x36px`, `8px 16px` padding, `8px` gap; supports default, hover, active, checkbox, nested checkbox, collapsed, expanded, danger, icon, and status variants.
- `Modal`, `DialogModal`, `PopUp.Header`, and `bottom popup` provide overlay patterns.

### Status and feedback

- `status - dot`: `16x16px`; statuses include Draft, Neutral, Published, and Updating.
- `Status / Simple`: `85x28px`, `4px` radius, `4px 8px` padding, `8px` gap, Success100 fill, Success200 `1px` stroke.
- `Status`: `228x52px`, `4px` radius, `16px` padding, `8px` gap, Success100 fill, Success200 `1px` stroke.
- `Alert`, `Information`, `InformationSquare`, `CheckCircle`, `ExclamationMarkCircle`, `EmptyState`, `EmptyData`, `EmptyDocuments`, `EmptyPermissions`, and `EmptyPictures` are available.

### Data and content

- `Table`, `_row`, `Card`, `card`, `Field`, `CTBFields`, `Tag`, `Badge`, `Avatar`, `DateTime.Picker`, and `TimePicker` support structured content and administration interfaces.
- `CTBFields`: `32x24px`; variants include Boolean, CollectionType, Component, Date, DynamicZone, Email, Enumeration, JSON, Media, Number, Password, Relation, RichText, SingleType, Text, and UID.
- `Avatar`: `40x40px`, `4px` radius; variants are Picture and Placeholder.
- `Tag`: `112x32px`, `4px` radius, `8px 12px` padding, `8px` gap, Primary100 fill, Primary200 `1px` stroke; states are Default and Hover.
- `Badge`: `34x16px`, `2px` radius, `0 2px` padding, Sigma typography; variants include Active/Default and M/S sizes.

### Iconography

- The source provides a broad 24x24px icon family, including `ArrowDown`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `Attachment`, `Bell`, `Calendar`, `Check`, `ChevronDown`, `ChevronLeft`, `ChevronRight`, `ChevronUp`, `Clock`, `Cloud`, `Cog`, `Cross`, `Download`, `Earth`, `Edit`-related `Pencil`, `Eye`, `EyeStriked`, `Filter`, `Folder`, `Globe`, `Heart`, `House`, `Information`, `Key`, `Lock`, `Mail`, `MenuBurger`, `More`, `Move`, `Plus`, `Refresh`, `Search`, `Settings`-related `Cog`, `Trash`, `Upload`, `User`, and `Write`.
- Additional source icons include `Alien`, `Apps`, `Archive`, `BitBucket`, `Book`, `Briefcase`, `Brush`, `Car`, `Cast`, `ChartBubble`, `ChartCircle`, `ChartPie`, `CloudUpload`, `Command`, `Connector`, `Crown`, `Cursor`, `Dashboard`, `Database`, `Discord`, `Discourse`, `Doctor`, `Drag`, `Duplicate`, `Facebook`, `Feather`, `Files`, `Gift`, `GitLab`, `Github`, `Google`, `GraphQL`, `HandHeart`, `Headphone`, `IndentDecrease`, `IndentIncrease`, `Landscape`, `Layer`, `Lightbulb`, `Magic`, `Medium`, `Message`, `Microphone`, `Moon`, `Music`, `Paint`, `PaintBrush`, `PaperPlane`, `Phone`, `Picture`, `Plane`, `Play`, `Plugins.settings.line`, `Puzzle`, `Quote`, `Reddit`, `Restaurant`, `Rocket`, `Rotate`, `Scissors`, `Server`, `Shield`, `Shirt`, `ShoppingCart`, `Slideshow`, `Stack`, `Star`, `Store`, `Strapi`, `Sun`, `Television`, `ThumbDown`, `ThumbUp`, `Train`, `Twitter`, `Typhoon`, `VolumeMute`, `VolumeUp`, `Walk`, and `Wheelchair`.
- Special icon sizes:
  - `Dot`: `4x4px`.
  - `ChevronDown`, `ChevronUp`: `17x10px`.
  - `ChevronLeft`, `ChevronRight`: `9.88x16px`.
  - `Earth`: `20x20px`.
  - `EarthStriked`: `21x21px`.
  - `Expand`: `22x22px`.
  - `PicturePlus`: `23.95x19.8px`.
  - `Collapse`: `21.91x21.91px`.
  - `Spinner`: `40x40px`.
  - `EmptyData`: `216x120px`.
  - `EmptyDocuments`, `EmptyPictures`: `216x120px`.
  - `EmptyPermissions`: `192x120px`.
- Square icon tiles are `32x32px` with `4px` radius:
  - `GlassesSquare`: Alternative500.
  - `FeatherSquare`: Alternative600.
  - `PlaySquare`: Secondary500.
  - `CodeSquare`: Warning600.
  - `InformationSquare`: Primary600.

## Screen patterns

- The source contains four Figma pages: UI kit overview, design tokens, components, and pages.
- Page-level extraction is truncated in the source; no reliable screen-specific layout dimensions or flows are available.
- Supported screen patterns inferred from the available component definitions include:
  - Header and sticky header navigation.
  - Breadcrumb-based hierarchical pages.
  - Sidebar and main-content administration layouts.
  - Tables with filters, popovers, bulk selection, pagination, badges, tags, and statuses.
  - Form pages using fields, inputs, selects, toggles, date pickers, time pickers, alerts, and validation states.
  - Empty, loading, error, and permission-denied states.
  - Modal, dialog, overlay, and bottom-popup interactions.

## Notes for implementers

- Prefer semantic light/dark tokens over raw colors.
- Preserve exact typography sizes, line heights, weights, and `0px` tracking from the type scale.
- Use the 8px grid as the default layout grid; do not create an unlisted spacing scale.
- Use only observed radii: `2px` and `4px`.
- Keep standard icons at `24x24px` unless a special size is specified.
- Preserve component dimensions and variant states when implementing the documented components.
- Use `#FFFFFF` fills explicitly where the source specifies white icon or component fills.
- The source contains duplicate semantic names and near-identical values; consolidate them to the same concrete color rather than creating additional tokens.
- No spacing variables, radius variables, motion variables, or local variable collections were found.
