---
name: oskr-ds-personal-design-system-community
source: OSKR.DS - Personal Design System (Community)
kind: design-system-context
---

# casper - Design System

## Overview

- Source: OSKR.DS - Personal Design System (Community).
- Figma pages: Cover and System.
- The system supports light (`☀️`) and dark (`☾`) themes.
- Primary typeface: Anonymous Pro.
- The visual system includes semantic colors for brand, canvas, text, icons, borders, information, positive, negative, and scrim states.
- No local variable collections, spacing variables, radius variables, motion variables, or grid styles were found.

## Design language

- Use a monospace editorial voice through Anonymous Pro Regular and Bold.
- Use `#5900FF` as the primary brand color and link color in the light theme.
- Use `#00FFF0` as a secondary brand color.
- Light theme surfaces use `#F9FAFC`, `#FFFFFF`, `#E0E2E4`, and `#EAEBEC`.
- Dark theme surfaces use `#202442`, `#292E56`, `#2F3946`, and `#000000`.
- Semantic states use blue for information, green for positive, and red for negative.
- Icons are 24px Material-style icon families.
- Use layered drop shadows for elevation rather than a radius or spacing token system.

## Color palette

### Raw colors ranked by observed usage

1. `#DADADA` — 3813 uses
2. `#5900FF` — 797 uses
3. `#FF0078` — 110 uses
4. `#FFFFFF` — 29 uses

### Brand

- `#5900FF` — light brand background, light link, light brand icon, dark focused brand background.
- `#4C00B8` — light focused brand background.
- `#B9A3FA` — light brand hover background, dark brand background, dark link, dark brand icon.
- `#00FFF0` — secondary brand.
- `#E0E2E4` — brand token 1 and light shaded canvas.

### Light theme

- App background: `#F9FAFC`
- Canvas: `#FFFFFF`
- Shaded canvas: `#E0E2E4`
- Tinted canvas: `#EAEBEC`
- Primary text and default icon: `#2F3946`
- Secondary text: `#697489`
- Disabled primary text: `#C0C3C7`
- Link: `#5900FF`
- Active link: `#3A007F`
- Default icon: `#2F3946`
- Brand icon: `#5900FF`
- Primary, secondary, and brand borders: `#FFFFFF`
- Information: `#0A66C1`
- Information hover: `#3181D1`
- Information focused and active text: `#004EC2`
- Positive: `#0C9B53`
- Positive hover: `#2ACF78`
- Positive focused and active text: `#006102`
- Negative: `#E6373C`
- Negative hover: `#F68184`
- Negative focused and active text: `#A8070B`
- Scrim: `#000000BF`

### Dark theme

- App background: `#202442`
- Canvas: `#292E56`
- Shaded canvas: `#000000`
- Tinted canvas: `#2F3946`
- Primary text and default icon: `#EAEBF4`
- Secondary text: `#C0C3C7`
- Disabled primary text: `#C0C3C7`
- Link: `#B9A3FA`
- Active link: `#5900FF`
- Information: `#9FC3EB`
- Information focused: `#3181D1`
- Positive: `#84F6AA`
- Positive focused: `#2ACF78`
- Negative: `#FAAFB0`
- Negative focused: `#F68184`
- Brand background: `#B9A3FA`
- Brand hover: `#B9A3FA`
- Brand focused: `#5900FF`
- Brand icon: `#B9A3FA`
- Information icon: `#9FC3EB`
- Positive icon: `#84F6AA`
- Negative icon: `#FAAFB0`
- Primary, secondary, and brand borders: none

## Type scale

All listed type tokens use Anonymous Pro unless otherwise specified.

| Token | Family | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Heading / 1 | Anonymous Pro | 400 | 96px | auto | -1.5px |
| Heading / 2 | Anonymous Pro | 400 | 60px | auto | -0.5px |
| Heading / 3 | Anonymous Pro | 400 | 48px | auto | 0px |
| Heading / 4 | Anonymous Pro | 400 | 34px | auto | 0.25px |
| Heading / 5 | Anonymous Pro | 400 | 24px | auto | 0px |
| Heading / 6 | Anonymous Pro | 400 | 20px | auto | 0.15px |
| Body/1 Open | Anonymous Pro | 400 | 16px | 150% | 0.7px |
| Body/1 | Anonymous Pro | 400 | 16px | 125% | 0.7px |
| Body/1 Bold | Anonymous Pro | 700 | 16px | 125% | 0.7px |
| Subtitle/1 | Anonymous Pro | 400 | 16px | 25.6px | 0.15px |
| Subtitle/1 Bold | Anonymous Pro | 700 | 16px | 25.6px | 0.15px |
| Body/2 Open | Anonymous Pro | 400 | 14px | 150% | 0.7px |
| Body/2 | Anonymous Pro | 400 | 14px | 125% | 0.7px |
| Body/2 Bold | Anonymous Pro | 700 | 14px | 125% | 0.7px |
| Subtitle / 2 | Anonymous Pro | 400 | 14px | 25.6px | 0.1px |
| Subtitle / 2 Bold | Anonymous Pro | 700 | 14px | 25.6px | 0.1px |
| Overline/Overline | Anonymous Pro | 400 | 13.71px | 125% | 1px |
| Overline/Bold | Anonymous Pro | 700 | 13.71px | 125% | 1px |
| Caption / Caption Open | Anonymous Pro | 400 | 12px | 150% | 0.4px |
| Caption/Caption | Anonymous Pro | 400 | 12px | 125% | 0.4px |
| Caption/Bold | Anonymous Pro | 700 | 12px | 125% | 0.4px |

Raw unstyled typography also includes Roboto Medium at 14px, Poppins Bold at 32px and 36px, Poppins ExtraBold at 116px, Anonymous Pro Bold at 20px, and Anonymous Pro Bold at 16px.

## Spacing scale

_None found in source._

## Radius scale

_None found in source._

## Elevation & effects

### Elevation 1

- `drop_shadow 1.11px offset 0 1.41 #00000012`
- `drop_shadow 3.79px offset 0 3.39 #0000000D`
- `drop_shadow 9.06px offset 0 6.39 #0000000B`
- `drop_shadow 19.06px offset 0 11.39 #00000009`
- `drop_shadow 39.78px offset 0 21.31 #00000007`
- `drop_shadow 100px offset 0 51 #00000005`

### Elevation 2

- `drop_shadow 17px offset 0 8 #00000005`
- `drop_shadow 20px offset 0 6 #0000003D`

### Elevation 3

- `drop_shadow 50px offset 0 17 #00000030`
- `drop_shadow 15px offset 0 12 #0000003D`

### Elevation 4

- `drop_shadow 55px offset 0 25 #00000030`
- `drop_shadow 28px offset 0 16 #0000003D`

### Elevation 5

- `drop_shadow 77px offset 0 40 #00000030`
- `drop_shadow 24px offset 0 27 #0000003D`

### Shadow tokens

- Shadow / 100: `drop_shadow 4px offset 0 4 #18274B14`, `drop_shadow 4px offset 0 2 #18274B1F`
- Shadow / 200: `drop_shadow 8px offset 0 8 #18274B14`, `drop_shadow 6px offset 0 4 #18274B1F`
- Shadow / 300: `drop_shadow 16px offset 0 8 #18274B14`, `drop_shadow 8px offset 0 6 #18274B1F`
- Shadow / 700: `drop_shadow 64px offset 0 14 #18274B1F`, `drop_shadow 22px offset 0 8 #18274B1F`
- Shadow / 800: `drop_shadow 88px offset 0 18 #18274B24`, `drop_shadow 28px offset 0 8 #18274B1F`

## Components

### Form and control families

- `Button`
- `Button Small`
- `Button Circle`
- `Button Small Circle`
- `Avatar`
- `Checkbox`
- `Input Checkbox`
- `Radio`
- `Input Radio`
- `Switch`
- `Input Switch`
- `Input Text`
- `Input Textarea`
- `Input Search`
- `Input Select`

### Icon families

- Icons use 24px families, including:
  - `add_24px`
  - `arrow_back_24px`
  - `arrow_forward_24px`
  - `check_24px`
  - `close_24px`
  - `search_24px`
  - `menu_24px`
  - `more_horiz_24px`
  - `more_vert_24px`
  - `expand_more_24px`
  - `expand_less_24px`
  - `chevron_left_24px`
  - `chevron_right_24px`
  - `cancel_24px`
  - `error_24px`
  - `error_outline_24px`
  - `warning_24px`
  - `info_24px`
  - `favorite_24px`
  - `star_24px`
  - `star_border_24px`
  - `star_half_24px`
  - `star_outline_24px`
  - `radio_button_checked_24px`
  - `radio_button_unchecked_24px`
  - `check_box_24px`
  - `check_box_outline_blank_24px`
  - `indeterminate_check_box_24px`
  - `toggle_on_24px`
  - `toggle_off_24px`
  - `person_24px`
  - `people_24px`
  - `notifications_24px`
  - `share_24px`
  - `edit_24px`
  - `delete_sweep_24px`
  - `save_24px`
  - `download_24px`
  - `upload_24px`
  - `email_24px`
  - `phone_24px`
  - `location_on_24px`
  - `home_24px`
  - `settings_24px`
  - `visibility_24px`
  - `visibility_off_24px`
  - `play_arrow_24px`
  - `pause_24px`
  - `stop_24px`
  - `refresh_24px`
  - `filter_list_24px`
  - `sort_24px`
  - `tune_24px`
  - `calendar_today_24px`
  - `event_24px`
  - `cloud_24px`
  - `folder_24px`
  - `image_24px`
  - `camera_24px`
  - `map_24px`
  - `directions_24px`
  - `wifi_24px`
  - `bluetooth_24px`
  - `lock_24px`
  - `security_24px`
  - `help_24px`
  - `help_outline_24px`

## Screen patterns

- `Cover`: introductory or presentation page for the design system.
- `System`: system reference page containing design tokens, components, controls, and icon families.

## Notes for implementers

- Use the exact semantic color assignments above; do not substitute colors between light and dark themes.
- Prefer named typography tokens over raw styles.
- Use Anonymous Pro as the default typeface. Raw Poppins and Roboto styles exist but are not part of the named typography token set.
- Do not infer spacing or corner-radius values; none were extracted.
- Use 24px icon families for interface icons.
- Use `none` for borders where the dark-theme border tokens specify no border.
- Apply elevation only through the listed shadow compositions.
- Preserve the distinction between focused, hover, active, disabled, positive, negative, and information states.
