---
name: the-goat-ultimate-kit-design-system-community
source: The GOAT Ultimate kit (Design System) (Community)
kind: design-system-context
---

# goat - Design System

## Overview

The GOAT Ultimate kit is an Inter-based design system with a broad color palette, responsive grid presets, typography from 12px to 52px, and reusable UI components for dashboards, forms, navigation, feedback, calendars, tables, and content cards.

Source pages include: Cover, Pages, Cards and Widgets, Social Media Post, Color, UI Principles, Grid and Layout, Typography, Spacing, Accordion, Alerts, Avatar, Buttons, Breadcrumb, Calendar, Icons, Inputs (Forms), Modal, Progress Bar, Shadows, Tabs, Table, and Tags.

No local variable collections, spacing variables, radius variables, or motion variables were found.

## Design language

- Font family: Inter.
- Typography uses regular, medium, semibold, bold, and extra bold weights.
- Heading and display styles use negative tracking.
- Text styles use `0px` tracking.
- Components generally use compact spacing, horizontal or vertical auto-layout, and fixed dimensions where specified.
- Common component treatments include:
  - Black primary controls using `#000000`.
  - White surfaces and icon fills using `#FFFFFF`.
  - Gray borders and surfaces using `#E0E0E0`, `#EEEEEE`, `#F5F5F5`, and `#FAFAFA`.
  - Rounded controls and cards with radii of `4px`, `8px`, or `40px`.
  - Status colors for danger, warning, success, and informational states.

## Color palette

### Highest observed raw usage

| Color | Usage |
|---|---:|
| `#000000` | 2324 |
| `#FFFFFF` | 552 |
| `#9747FF` | 26 |
| `#1E1E1E` | 24 |
| `#D9D9D9` | 23 |
| `#FFFFFF1A` | 19 |
| `#444444` | 18 |

### Core neutrals

- Black: `#000000`
- White: `#FFFFFF`
- Gray 900: `#212121`
- Gray 800: `#424242`
- Gray 700: `#616161`
- Gray 600: `#757575`
- Gray 500: `#9E9E9E`
- Gray 400: `#BDBDBD`
- Gray 300: `#E0E0E0`
- Gray 200: `#EEEEEE`
- Gray 100: `#F5F5F5`
- Gray 50: `#FAFAFA`
- Blue Gray 900: `#263238`
- Blue Gray 800: `#37474F`
- Blue Gray 700: `#455A6A`
- Blue Gray 600: `#546E7A`
- Blue Gray 500: `#607D8B`
- Blue Gray 400: `#78909C`
- Blue Gray 300: `#90A4AE`
- Blue Gray 200: `#B0BEC5`
- Blue Gray 100: `#CFD8DC`
- Blue Gray 50: `#ECEFF1`
- Additional raw neutrals: `#1E1E1E`, `#333333`, `#444444`, `#D9D9D9`, `#FFFFFF1A`

### Primary color families

Use the named source color families and levels below. Each family also contains source-defined intermediate levels and accent levels where listed in the extraction.

- Brown: 50 `#EFEBE9`, 100 `#D7CCC8`, 200 `#BCAAA4`, 300 `#A1887F`, 400 `#8D6E63`, 500 `#795548`, 600 `#6D4C41`, 700 `#5D4037`, 800 `#4E342E`, 900 `#3E2723`
- Deep Orange: 50 `#FBE9E7`, 100 `#FFCCBC`, 200 `#FFAB91`, 300 `#FF8A65`, 400 `#FF7043`, 500 `#FF5722`, 600 `#F4511E`, 700 `#E64A19`, 800 `#D84315`, 900 `#BF360C`; A100 `#FF9E80`, A200 `#FF6E40`, A400 `#FF3D00`, A700 `#DD2C00`
- Orange: 50 `#FFF3E0`, 100 `#FFE0B2`, 200 `#FFCC80`, 300 `#FFB74D`, 400 `#FFA726`, 500 `#FF9800`, 600 `#FB8C00`, 700 `#F57C00`, 800 `#EF6C00`, 900 `#E65100`; A100 `#FFD180`, A200 `#FFAB40`, A400 `#FF9100`, A700 `#FF6D00`
- Amber: 50 `#FFF8E1`, 100 `#FFECB3`, 200 `#FFE082`, 300 `#FFD54F`, 400 `#FFCA28`, 500 `#FFC107`, 600 `#FFB300`, 700 `#FFA000`, 800 `#FF8F00`, 900 `#FF6F00`; A100 `#FFE57F`, A200 `#FFD740`, A400 `#FFC400`, A700 `#FFAB00`
- Yellow: 50 `#FFFDEE`, 100 `#FFF9C4`, 200 `#FFF59D`, 300 `#FFF176`, 400 `#FFEE58`, 500 `#FFEB3B`, 600 `#FDD835`, 700 `#FBC02D`, 800 `#F9A825`, 900 `#F57F17`; A100 `#FFFF8D`, A200 `#FFFF00`, A400 `#FFEA00`, A700 `#FFD600`
- Lime: 50 `#F9FBE7`, 100 `#F0F4C3`, 200 `#E6EE9C`, 300 `#DCE775`, 400 `#D4E157`, 500 `#CDDC39`, 600 `#C0CA33`, 700 `#AFB42B`, 800 `#9E9D24`, 900 `#827717`; A100 `#F4FF81`, A200 `#EEFF41`, A400 `#C6FF00`, A700 `#AEEA00`
- Light Green: 50 `#F1F8E9`, 100 `#DCEDC8`, 200 `#C5E1A5`, 300 `#AED581`, 400 `#9CCC65`, 500 `#8BC34A`, 600 `#7CB342`, 700 `#689F38`, 800 `#558B2F`, 900 `#33691E`; A100 `#CCFF90`, A200 `#B2FF59`, A400 `#76FF03`, A700 `#64DD17`
- Green: 50 `#E8F5E9`, 100 `#C8E6C9`, 200 `#A5D6A7`, 300 `#81C784`, 400 `#66BB6A`, 500 `#4CAF50`, 600 `#43A047`, 700 `#388E3C`, 800 `#2E7D32`, 900 `#1B5E20`; A100 `#B9F6CA`, A200 `#69F0AE`, A400 `#00E676`, A700 `#00C853`
- Teal: 50 `#E0F2F1`, 100 `#B2DFDB`, 200 `#80CBC4`, 300 `#4DB6AC`, 400 `#26A69A`, 500 `#009688`, 600 `#00897B`, 700 `#00796B`, 800 `#00695C`, 900 `#004D40`; A100 `#A7FFEB`, A200 `#64FFDA`, A400 `#1DE9B6`, A700 `#00BFA5`
- Cyan: 50 `#E0F7FA`, 100 `#B2EBF2`, 200 `#80DEEA`, 300 `#4DD0E1`, 400 `#26C6DA`, 500 `#00BCD4`, 600 `#00ACC1`, 700 `#0097A7`, 800 `#00838F`, 900 `#006064`; A100 `#84FFFF`, A200 `#18FFFF`, A400 `#00E5FF`, A700 `#00B8D4`
- Light Blue: 50 `#E1F5FE`, 100 `#B3E5FC`, 200 `#81D4FA`, 300 `#4FC3F7`, 400 `#29B6F6`, 500 `#03A9F4`, 600 `#039BE5`, 700 `#0288D1`, 800 `#0277BD`, 900 `#02579B`; A100 `#80D8FF`, A200 `#40C4FF`, A400 `#00B0FF`, A700 `#0091EA`
- Blue: 50 `#E3F2FD`, 100 `#BBDEFB`, 200 `#90CAF9`, 300 `#64B5F6`, 400 `#42A5F5`, 500 `#2196F3`, 600 `#1E88E5`, 700 `#1976D2`, 800 `#1565C0`, 900 `#0D47A1`; A100 `#82B1FF`, A200 `#448AFF`, A400 `#2979FF`, A700 `#2962FF`
- Indigo: 50 `#E8EAF6`, 100 `#C5CAE9`, 200 `#9FA8DA`, 300 `#7986CB`, 400 `#5C6BC0`, 500 `#3F51B5`, 600 `#3949AB`, 700 `#303F9F`, 800 `#283593`, 900 `#1A237E`; A100 `#8C9EFF`, A200 `#536DFE`, A400 `#3D5AFE`, A700 `#304FFE`
- Deep Purple: 50 `#EDE7F6`, 100 `#D1C4E9`, 200 `#B39DDB`, 300 `#9575CD`, 400 `#7E57C2`, 500 `#673AB7`, 600 `#5E35B1`, 700 `#512DA8`, 800 `#4527A0`, 900 `#311B92`; A100 `#B388FF`, A200 `#7C4DFF`, A400 `#651FFF`, A700 `#6200EA`
- Purple: 50 `#F3E5F5`, 100 `#E1BEE7`, 200 `#CE93D8`, 300 `#BA68C8`, 400 `#AB47BC`, 500 `#9C27B0`, 600 `#8E24AA`, 700 `#7B1FA2`, 800 `#6A1B9A`, 900 `#4A148C`; A100 `#EA80FC`, A200 `#E040FB`, A400 `#D500F9`, A700 `#AA00FF`
- Pink: 50 `#FCE4EC`, 100 `#F8BBD0`, 200 `#F48FB1`, 300 `#F06292`, 400 `#EC407A`, 500 `#E91E63`, 600 `#D81B60`, 700 `#C2185B`, 800 `#AD1457`, 900 `#880E4F`; A100 `#FF80AB`, A200 `#FF4081`, A400 `#F50057`, A700 `#C51161`
- Red: 50 `#FFEBEE`, 100 `#FFCDD2`, 200 `#EF9A9A`, 300 `#E57373`, 400 `#EF5350`, 500 `#F44336`, 600 `#EF3935`, 700 `#D32F2F`, 800 `#C62828`, 900 `#B71C1C`; A100 `#FF8A80`, A200 `#FF5252`, A400 `#FF1744`, A700 `#D50000`

### Status and component colors

- Warning: `#FBA018`
- Error: `#F54135`
- Success: `#38CE47`
- Purple component fill: `#9C27B0`
- Tags border: `#212121`
- Primary button fill: `#000000`
- Alert fill: `#FAFAFA`
- Alert border: `#F5F5F5` or `#EEEEEE`
- Breadcrumb fill: `#FFFFFF`
- Icon fill: `#FFFFFF`

## Type scale

Font family: Inter. All listed styles use `0px` tracking for text styles and negative tracking for headings and displays.

### Display

- 52px / 83.2px: Regular 400, Medium 500, SemiBold 600, ExtraBold 800; tracking `-1.56px`
- 44px / 70.4px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `-1.32px`
- 40px / 64px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `-1.2px`

### Headings

- 36px / 57.6px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `-1.08px`
- 32px / 51.2px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `-0.96px`
- 28px / 44.8px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `-0.84px`
- 24px / 38.4px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `-0.72px`
- 20px / 32px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `-0.6px`

### Text

- 18px / 28.8px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `0px`
- 16px / 25.6px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `0px`
- 14px / 22.4px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `0px`
- 12px / 19.2px: Regular 400, Medium 500, SemiBold 600, Bold 700, ExtraBold 800; tracking `0px`

## Spacing scale

No spacing variables were found.

Concrete spacing used by components:

- `0px`: component padding or gap in Accordion, Card, Calendar, Avatar Grioup, Breadcrumbs, and other full-bleed layouts.
- `4px`: Tags vertical padding, Breadcrumb padding, Calendar Items vertical padding.
- `8px`: common horizontal and vertical padding, component gaps, and Button padding.
- `16px`: Card, Alert, Accordion Items, and form-related padding.
- `40px`: Desktop Webdesign 3 grid gutter.
- `211px`: Accordion Items gap.
- `-8px`: Avatar Grioup overlap gap.

Grid spacing:

- Desktop Dashboard: 12 columns, section `88px`, gutter `16px`, stretch.
- Desktop Webdesign 1: 12 columns, section `78.67px`, gutter `16px`, stretch.
- Desktop Webdesign 2: 12 columns, section `72px`, gutter `16px`, stretch.
- Desktop Webdesign 3: 12 columns, section `43.33px`, gutter `40px`, stretch.
- Tablet: 8 columns, section `82.25px`, gutter `16px`, stretch.
- Mobile: 4 columns, section `69.75px`, gutter `16px`, stretch.

## Radius scale

No radius variables were found.

Concrete component radii:

- `4px`: Frame 59 and Button-related source dimensions.
- `8px`: Alerts, Alert, Card 2.
- `40px`: Tags.
- No radius specified: Avatar, Avatar Grioup, Accordion, Accordion Items, Breadcrumbs, Calendar, Icons, Input, Modal, Tabs, Pagination, and Table Items.

## Elevation & effects

- Soft Shadow: drop shadow `50px`, offset `0 30`, color `#3D4B5C1A`
- Shadow 1: drop shadow `4px`, offset `0 4`, color `#00000040`
- Shadow 2: drop shadow `4px`, offset `-4 4`, color `#00000040`
- Shadow 3: drop shadow `4px`, offset `4 4`, color `#00000040`
- Shadow 4: drop shadow `15px`, offset `0 30`, color `#00000040`
- Shadow 5: drop shadow `60px`, offset `0 35`, color `#00000040`
- Shadow 6: drop shadow `30px`, offset `0 0`, color `#00000040`

## Components

Only use the component families represented in the source.

### Frame 59

- Size: `114x36px`
- Radius: `4px`
- Horizontal layout; padding `8px 8px 8px 8px`; gap `8px`
- Alignment: space-between / center
- Sizing: width fill, height fixed
- Fill: `#9C27B0`
- Text: Inter/Text/XS/Regular
- Variants: Default, Variant2, Variant3, Variant4, Variant5

### Tags

- Size: `120x28px`
- Radius: `40px`
- Horizontal layout; padding `4px 8px 4px 8px`; gap `8px`
- Alignment: center / center
- Stroke: `#212121`, `1px`
- Text: Inter/Text/XS/Medium
- Variants:
  - Color: Amber, Black, Blue, Brown, Cyan, Deep Orange, Deep Purple, Green, Indigo, Light Blue, Light Green, Lime, Orange, Pink, Purple, Red, Teal, Yellow
  - Type: Fill, Stroke

### Button

- Size: `103x36px`
- Horizontal layout; padding `8px 8px 8px 8px`; gap `8px`
- Alignment: center / center
- Fill: `#000000`
- Text: Inter/Text/XS/Medium
- Variants:
  - Property 1: Primary, Secondary, Tetiary
  - Property 2: Large, Medium, Small, Very Large
  - Property 3: Rounded, Semi-Rounded, Straight

### Avatar

- Size: `40x40px`
- Variants:
  - Type: Icon, Picture
  - Status: Active, Busy, Default, Disabled
  - Size: Large, Medium, Small, X-Large
  - Shape: Rectangle, Rounded

### Avatar Grioup

- Size: `136x40px`
- Horizontal layout; gap `-8px`
- Fixed width and height
- Text: Inter/Text/XS/Medium

### Alerts

- Size: `241x56px`
- Radius: `8px`
- Fill: `#FAFAFA`
- Stroke: `#F5F5F5`, `1px`
- Text: Inter/Text/XS/Medium and Inter/Text/XS/Regular
- Variants:
  - Status: Danger, Default, Success, Warning
  - Type: Basic, Fill, Outline

### Alert

- Size: `327x239px`
- Radius: `8px`
- Vertical layout; padding `16px`; gap `8px`
- Fill: `#FAFAFA`
- Stroke: `#EEEEEE`, `1px`
- Text: Inter/Text/XS/Medium, Inter/Text/S/Regular, Inter/Heading/XS/SemiBold

### Accordion, Accordion 1, Accordion 2

- Size: `327x183px`
- Vertical layout; padding `0px`; gap `0px`
- Text: Inter/Text/XS/Regular and Inter/Text/S/Regular
- Accordion 1 and Accordion 2 variants: Close, Open

### Accordion Items

- Size: `327x55px`
- Horizontal layout; padding `16px`; gap `211px`
- Alignment: space-between / center
- Width fill, height fixed
- Stroke: `#E0E0E0`, `1px`
- Text: Inter/Text/S/Regular
- Variants: Accordion Title, Accordion section; Default, Whit, White

### Card 2

- Size: `358x117px`
- Radius: `8px`
- Vertical layout; padding `16px`; gap `8px`
- Alignment: center / min
- Fill: `#212121`
- Text: Inter/Text/S/Regular and Inter/Heading/XS/Bold
- Variants:
  - Property 1: Danger, Info, Primar, Primary, Success, Warning
  - Type: Fill, Outline

### Card

- Size: `358x733px`
- Vertical layout; padding `0px`; gap `0px`
- Text: Inter/Text/S/Medium, Inter/Text/XS/Medium, Inter/Text/XS/SemiBold, Inter/Text/XS/Regular, Inter/Heading/S/Bold

### Breadcrumb and Breadcrumbs

- Breadcrumb size: `87x28px`
- Breadcrumb layout: horizontal; padding `4px`; gap `8px`; center / center
- Breadcrumb fill: `#FFFFFF`
- Breadcrumb text: Inter/Text/XS/Regular
- Breadcrumb variants: Clcikable, Overflow, Slash, Unclickable
- Breadcrumbs size: `482x28px`
- Breadcrumbs layout: horizontal; padding `0px`; gap `8px`; min / center
- Breadcrumbs text: Inter/Text/XS/Regular

### Calendar and Calendar Items

- Calendar size: `280x244px`
- Vertical layout; padding `0px`; gap `0px`
- Calendar text: Inter/Text/XS/Regular, Inter/Text/XS/SemiBold, Inter/Text/XS/Bold
- Calendar Items size: `40x36px`
- Calendar Items padding: `8px 4px 8px 4px`; gap `8px`; center / center
- Calendar Items text: Inter/Text/XS/SemiBold
- Calendar Items variants: Active, Days, Highlighted, Not in month, Number

### Icons

- Icon size: `16x16px`
- Icon fill: `#FFFFFF`
- Source examples include zoom-out, zoom-in, zap, zap-off, youtube, x, x-square, x-octagon, x-circle, wind, wifi, wifi-off, watch, volume, volume-x, volume-2, volume-1, voicemail, video, video-off, users, user, user-x, user-plus, user-minus, user-check, upload, upload-cloud, unlock, underline, umbrella, type, twitter, twitch, tv, truck, triangle, trending-up, trending-down, trello, trash, trash-2, tool, and toggle-right.

### Input, Checkbox, Radio button, Radio Button Item, Dropdown item

- These families are present in the source.
- No additional component dimensions or visual specifications were available in the extracted component specs.

### Form Layput and Form Stepper

- These families are present for form layouts and multi-step forms.
- No additional component dimensions or visual specifications were available in the extracted component specs.

### Modal, Tabs, Pagination, Pagination Comps, Table Items, Bar, Frame 3, Text

- These families are present in the source.
- No additional component dimensions or visual specifications were available in the extracted component specs.

## Screen patterns

- Responsive dashboard layouts use:
  - Desktop Dashboard: 12 columns, `88px` section, `16px` gutter.
  - Tablet: 8 columns, `82.25px` section, `16px` gutter.
  - Mobile: 4 columns, `69.75px` section, `16px` gutter.
- Desktop web layouts use 12-column grids with either:
  - `78.67px` sections and `16px` gutters.
  - `72px` sections and `16px` gutters.
  - `43.33px` sections and `40px` gutters.
- Common page patterns include navigation with breadcrumbs, tabs, pagination, tables, cards, alerts, accordions, calendars, forms, modals, avatars, tags, and progress bars.

## Notes for implementers

- Use Inter for all typography.
- Prefer named typography tokens over ad hoc font sizes.
- Use the supplied line heights exactly: `19.2px`, `22.4px`, `25.6px`, `28.8px`, `32px`, `38.4px`, `44.8px`, `51.2px`, `57.6px`, `64px`, `70.4px`, and `83.2px`.
- Preserve heading tracking values: `-0.6px`, `-0.72px`, `-0.84px`, `-0.96px`, `-1.08px`, `-1.2px`, `-1.32px`, and `-1.56px`.
- Use `#000000` and `#FFFFFF` for the most frequently observed raw colors.
- Use status colors only for their corresponding status roles: Warning `#FBA018`, Error `#F54135`, and Success `#38CE47`.
- Do not introduce spacing, radius, or motion tokens; none were defined.
- Use the supplied grid presets rather than inventing column counts or gutters.
- Treat component names and variant names as source identifiers, including source typos such as `Tetiary`, `Clcikable`, `Whit`, `Primar`, and `Form Layput`.
