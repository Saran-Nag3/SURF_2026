---
name: snow-fox-design-system-community
source: Snow Fox Design System (Community)
kind: design-system-context
---

# fox - Design System

## Overview

Snow Fox is a dark/light design system with a strong teal-green accent, blue, yellow, red, gray, and light-gray semantic palettes. The primary UI typeface is PP Pangram Sans. The source contains Dark Components, Light Components, Style Guide, Assets, Thumbnail, and a WIP page.

No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- **Primary visual character:** dark neutral surfaces with bright teal-green accents.
- **Primary dark surface:** `#121212`, with `#1F1F1F`, `#2B2B2B`, `#383838`, `#454545`, and `#525252` as progressively lighter gray surfaces.
- **Accent:** green, centered on `#63DEC7` and `#39D5B8`; the green gradient runs from `#63DEC7` to `#3F9393`.
- **Semantic colors:** blue for informational/action states, green for success, yellow for warning, red for danger/error.
- **Shape language:** compact controls and cards commonly use `4px` radii; badges use `12px`; toggles use `20px`.
- **Typography:** use PP Pangram Sans for system UI. Prefer semibold and bold weights for controls and labels; use regular for body copy.
- **Effects:** use compact, solid-color drop shadows rather than soft diffuse shadows.

## Color palette

### Usage-ranked raw colors

| Color | Usage |
|---|---:|
| `#121212` | 4734 |
| `#DBF0F0` | 1130 |
| `#222222` | 222 |
| `#3F9393` | 173 |
| `#737373` | 137 |
| `#98999A` | 71 |
| `#CECECE` | 67 |
| `#9747FF` | 44 |

### Token palette

#### Neutrals

- `white`: `#FFFFFF`
- `Black`: `#000000`
- `gray/1000`: `#121212`
- `gray/900`: `#1F1F1F`
- `gray/800`: `#2B2B2B`
- `gray/700`: `#383838`
- `gray/600`: `#454545`
- `gray/500`: `#525252`
- `gray/400`: `#5E5E5E`
- `gray/300`: `#6B6B6B`
- `gray/200`: `#787878`
- `gray/100`: `#858585`
- `gray/transparent`: `#52525233`
- `light-gray/500`: `#CCCCCC`
- `light-gray/600`: `#E6E6E6`

#### Blue

- `blue/1000`: `#0448BE`
- `blue/900`: `#0552D7`
- `blue/800`: `#055BF0`
- `blue/700`: `#1469FA`
- `blue/600`: `#2D79FA`
- `blue/500`: `#4689FB`
- `blue/400`: `#5F99FB`
- `blue/300`: `#79A9FC`
- `blue/200`: `#91B9FD`
- `blue/100`: `#AAC9FD`
- `blue/transparent`: `#4689FB33`

#### Green

- `green/1000`: `#22A088`
- `green/900`: `#26B59A`
- `green/800`: `#2BCAAC`
- `green/700`: `#39D5B8`
- `green/600`: `#4EDAC0`
- `green/500`: `#63DEC7`
- `green/400`: `#78E3CF`
- `green/300`: `#8DE7D6`
- `green/200`: `#A2EBDE`
- `green/100`: `#B7F0E5`
- `green/transparent`: `#63DEC733`
- `green/gradient`: linear gradient from `#63DEC7` at 0% to `#3F9393` at 100%

#### Red

- `red/1000`: `#BE0404`
- `red/900`: `#D70404`
- `red/800`: `#F00505`
- `red/700`: `#FA1414`
- `red/600`: `#FB2D2D`
- `red/500`: `#FB4646`
- `red/400`: `#FC5F5F`
- `red/300`: `#FC7878`
- `red/200`: `#FD9191`
- `red/100`: `#FDAAAA`

#### Yellow

- `yellow/1000`: `#BE8A04`
- `yellow/900`: `#D79C05`
- `yellow/800`: `#F0AE05`
- `yellow/700`: `#FABA14`
- `yellow/600`: `#FAC12D`
- `yellow/500`: `#FBC846`
- `yellow/400`: `#FBD05F`
- `yellow/300`: `#FCD778`
- `yellow/200`: `#FDDF91`
- `yellow/100`: `#FDE6AA`

## Type scale

### Named typography tokens

All named tokens use PP Pangram Sans with `0px` tracking.

| Token | Family | Weight | Size | Line height |
|---|---|---:|---:|---|
| `TITLE` | PP Pangram Sans Extrabold | 800 | `200px` | auto |
| `SUBTITLE` | PP Pangram Sans Extrabold | 800 | `28px` | auto |
| `h5` | PP Pangram Sans Bold | 700 | `18px` | auto |
| `body` | PP Pangram Sans Semibold | 600 | `16px` | auto |
| `body/regular` | PP Pangram Sans Regular | 400 | `16px` | auto |
| `h6` | PP Pangram Sans Extrabold | 800 | `16px` | `32px` |
| `body/sm` | PP Pangram Sans Semibold | 600 | `14px` | auto |
| `sm-bold` | PP Pangram Sans Bold | 700 | `14px` | auto |
| `body/xs-bold` | PP Pangram Sans Semibold | 600 | `12px` | auto |
| `body/xs` | PP Pangram Sans Regular | 400 | `12px` | auto |

### Raw typography

Use only when matching existing unstyled source content:

- Inter Regular: `12px` (217 uses), `9px` (114 uses), `15px` (15 uses), `30px` (3 uses)
- Inter Medium: `14px` (5 uses)
- Open Sans Bold: `12px` (12 uses), `20px` (8 uses), `16px` (4 uses)
- Open Sans SemiBold: `9px` (8 uses)
- PP Pangram Sans Semibold: `7px` (6 uses)
- PP Migra Extrabold: `120px` (3 uses)

## Spacing scale

No spacing variables were found. Observed component spacing values:

- `0px` padding and gaps
- `4px` padding
- `8px` gaps
- `10px` gaps
- `12px` padding and gaps
- `20px` padding and gaps
- `24px` padding
- `32px` gaps

## Radius scale

No radius variables were found. Observed radii:

- `4px`: Calendar, Card, Menu, MenuButton, Affix, Button, Indicator, and other compact surfaces
- `12px`: Badge
- `20px`: Toggle

TextInput exposes named radius variants: `Default`, `lg`, `md`, and `xl`; numeric values for those variants were not provided.

## Elevation & effects

- `shadow`: drop shadow with `4px` offset on both axes set to `0 0`, color `#39D5B8`
- `shadow-red`: drop shadow with `4px` offset on both axes set to `0 0`, color `#FB4242`

## Components

### Form and input components

- **TextInput:** `300x74px`; vertical; `8px` gap; variants `Default`, `Disabled`, `Error`, `Focused`; radius variants `Default`, `lg`, `md`, `xl`; icon position `end`, `false`, or `start`.
- **DateInput:** `170x74px` or `320x74px`; vertical; `8px` gap. Variants include `Default`, `Filled`, `CalendarOpen`; properties include `Range`.
- **Select:** `200x74px`; vertical; `8px` gap; variants `Default`, `Error`, `Filled`.
- **SelectMenu:** component family present; no dimensions provided.
- **MultiSelect:** `374x74px`; vertical; `8px` gap; variants `Default`, `Error`, `Filled`; example values `Javascript` and `Python`.
- **MultiSelectMenu:** component family present; no dimensions provided.
- **TextArea:** `300x130px`; vertical; `8px` gap; variants `Default`, `Error`, `Focused`, `Variant4`; disabled property.
- **NumberInput:** `300x74px`; vertical; `8px` gap; variants `Default`, `Error`, `NoControls`, `Variant5`; disabled property.
- **PasswordInput:** `300x118px`; vertical; `8px` gap; variants `Default`, `Error`, `Visible`; `StrengthMeterOpen` and disabled properties.
- **Checkbox:** `290x28px`; horizontal; `12px` gap; variants `Checked`, `Default`.
- **RadioGroup:** `333x134px`; vertical; `20px` gap; variants `Default`, `Selected`.
- **Toggle:** `58x32px`; `20px` radius; fill `gray/700`; variants `Checked`, `Default`.
- **Slider:** `240x70px`; vertical; `20px` gap; variants `Default`, `Disabled`.
- **StrengthMeter:** component family present; no dimensions provided.

### Actions and navigation

- **Button:** `102x48px`; horizontal; `12px 24px` padding; `12px` gap; `4px` radius; fill `green/500`; variants `Filled`, `Gradient`, `Outline`, `Text`; radius variants `lg`, `md`, `sm`, `xl`; properties for uppercase, disabled, loading, icon, hover, and focus.
- **MenuButton:** `32x32px`; `4px` radius; `4px` padding; fill `gray/700`; variants `Default`, `Open`.
- **Menu:** `160x220px`; `4px` radius; `12px` padding; `12px` gap; fill `gray/700`; variants `Default`, `Hovered`.
- **Pagination:** `366x42px`; horizontal; `12px` gap; variants `Default`, `FirstPage`, `LastPage`, `WithEdges`.
- **Tabs:** `323x34px`; vertical; `8px` gap.
- **Accordion:** component family present.
- **Affix:** `164x48px`; `4px` radius; horizontal; `12px 20px` padding; `12px` gap; fill `green/500`; variants `Collapsed`, `Default`.

### Data display and feedback

- **Table:** `716x171px`; vertical; no padding or gap; variants `Default`, `Striped`; optional footer; uses `body` and `h5`.
- **Datagrid:** `1199x635px`; vertical; no padding or gap; uses Inter Medium `14px`, `body`, and `h5`.
- **Calendar:** `232x244px`; `4px` radius; `4px` padding; `8px` gap; centered alignment; fill `gray/700`; variants `Default`, `Disabled`, `Hovered`, `Range`, `Selected`.
- **Card:** `340x346px`; `4px` radius; `20px` padding; `32px` gap; fill `gray/900`; variants `Default`, `HorizontalCard`, `VerticalCard`; optional background.
- **Badge:** `88x24px`; `12px` radius; horizontal; `4px 20px` padding; `10px` gap; fill `gray/100`; variants `Danger`, `Default`, `Success`, `Warning`.
- **Indicator:** `64x64px`; `4px` radius; image fill; positions `bottom-left`, `bottom-right`, `top-left`, `top-right`.
- **Notification:** `421x86px`; fill `#FFFFFF`; variants `Error`, `Info`.
- **Progress:** component family present.
- **Loader:** component family present.
- **SkeletonSample:** component family present.
- **Highlight:** component family present.
- **TooltipButton:** component family present.
- **KBD:** component family present.
- **Code:** component family present.
- **RTE:** `1068x381px`; vertical; `12px` gap; aligned minimum/center; uses PP Pangram Sans and `h5`.

### Icon and asset families

Use the source icon families rather than introducing new icon names. The inventory includes:

- **Window and interface:** `secure-window`, `no-access-window`, `finger-print-window`, `brightness-window`, `favourite-window`, `pause-window`, `upload-data-window`, `download-data-window`, `check-window`, `warning-window`, `reload-window`, `error-window`, `select-window`, `locked-window`, `search-window`, `energy-usage-window`, `app-window`, `web-window`, `multi-window`, `mac-os-window`.
- **Navigation and arrows:** `arrow-down`, `arrow-up`, `arrow-left`, `arrow-right`, circled arrow variants, `nav-arrow-down`, `nav-arrow-up`, `nav-arrow-left`, `nav-arrow-right`, round arrows, long arrows, `fast-arrow-*`, `transition-*`.
- **Files, media, and editing:** `page`, `page-edit`, `page-search`, `page-star`, `page-flip`, `multiple-pages`, `media-image`, `media-video`, `album`, `playlist`, `camera`, `video-camera`, `crop-rotate-*`, `scissor`, `cut`, `copy`, `attachment`, `edit`.
- **Commerce and finance:** `cart`, `cart-alt`, `simple-cart`, `add-to-cart`, `remove-from-cart`, `bag`, `shopping-bag`, `wallet`, `card-wallet`, `credit-card`, `cash`, `coin`, `bank`, `dollar`, `euro`, `pound`, `yen`.
- **Security and identity:** `shield` variants, `lock`, `lock-key`, `fingerprint` variants, `face-id`, `iris-scan`, `user-scan`, `voice-scan`, `verified-user`, `security-pass`.
- **Devices and connectivity:** `computer`, `laptop`, `smartphone-device`, `phone`, `server`, `hard-drive`, `cpu`, `wifi` variants, `bluetooth`, `antenna`, `network`, `usb`.
- **Maps, transport, and environment:** `map`, `navigator`, `gps`, `position`, `car-outline`, `bus-outline`, `train-outline`, `tram`, `airplane`, `bicycle`, `motorcycle`, weather icons, `sun-light`, `cloud`, `rain`, `snow`, `wind`.
- **Shapes and selection:** `circle`, `square`, `triangle`, `hexagon`, `pentagon`, `heptagon`, `octagon`, `rhombus`, `3d-select-solid`, `3d-select-face`, `3d-select-edge`, `3d-select-point`, `one-point-circle`, `two-points-circle`, `three-points-circle`.
- **Social and brand:** `figma`, `iconoir`, `github`, `gitlab-full`, `google`, `apple`, `facebook`, `instagram`, `linkedin`, `twitter`, `telegram`, `youtube`, `tiktok`, `dribbble`, `medium`, `asana`, `trello`, `codepen`, `unity`, `nintendo-switch`.
- **Activities and lifestyle:** `home`, `hospital`, `healthcare`, `gym`, `running`, `walking`, `cycling`, `swimming`, `yoga`, `football`, `basketball`, `tennis-ball`, `golf`, `archery`, `trophy`, `medal`, `gift`, `heart`.

## Screen patterns

- **Dark Components:** primary component showcase using dark gray surfaces, green accents, compact `4px` controls, and the documented form, data, navigation, and feedback components.
- **Light Components:** light-theme counterpart to the dark component showcase.
- **Style Guide:** typography and color token presentation, including the oversized `TITLE` and `SUBTITLE` styles.
- **Assets:** broad icon and asset catalog organized around interface, technology, commerce, transportation, lifestyle, and social categories.
- **Thumbnail:** overview/cover page.
- **WIP:** unfinished exploration area; do not treat it as a finalized pattern.

## Notes for implementers

- Prefer named design tokens over raw colors where both exist.
- Use `#121212` as the dominant dark base when a dark surface is needed; use `gray/900` (`#1F1F1F`) for cards and `gray/700` (`#383838`) for menus and calendars.
- Use `green/500` (`#63DEC7`) for primary affirmative actions and accents.
- Use `green/gradient` only where a gradient button or accent is explicitly needed.
- Use red, yellow, blue, and green ramps for semantic states rather than arbitrary colors.
- Use PP Pangram Sans for new UI. Match raw Inter, Open Sans, or PP Migra styles only when reproducing existing unstyled source content.
- Keep controls compact and use the documented fixed dimensions when implementing the corresponding component.
- Preserve the documented component variants and state properties instead of creating additional states.
- Use the icon inventory for interface symbols; do not substitute arbitrary icon families.
- No spacing, radius, motion, or grid variables were defined. Reuse the observed spacing and radius values rather than inventing new scales.
