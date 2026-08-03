---
name: honeycomb-design-mobile-community
source: Honeycomb Design Mobile 组件库 (Community)
kind: design-system-context
---

# honeycomb - Design System

## Overview

- Mobile component library covering 47 Figma pages.
- Product areas: foundational styles, common controls, data entry, data display, navigation, and feedback.
- Primary language: Simplified Chinese.
- Primary typeface: PingFang SC.
- No local variable collections, spacing variables, motion variables, or local grid styles were found.

## Design language

- Mobile-first component system with compact controls, form-heavy workflows, data lists, status feedback, and bottom navigation.
- Primary brand color: 景泰蓝 `#266EFF`.
- Core text colors:
  - Titles and dark icons: `#333333`
  - Body text: `#666666`
  - Secondary text and medium-gray icons: `#999999`
  - Disabled text and light icons: `#C7C7C7`
- Common surfaces:
  - Page background: `#F5F5F5`
  - Header background: `#FAFAFA`
  - Light blue state background: `#F0F7FF`
  - White surface: `#FFFFFF`
- Status colors use pale backgrounds paired with saturated functional colors.
- Icons are provided in linear, filled, and reversed-white styles. Standard icon assets are `48x48px`; `Icon-Wrapper` supports `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, and `48px`.
- Profile visuals use linear gradients.

## Color palette

### Highest-usage raw colors

| Color | Usage count | Typical role |
|---|---:|---|
| `#DCDEE0` | 7496 | Neutral border or divider |
| `#999999` | 3781 | Secondary text and medium-gray icons |
| `#FFFFFF` | 3235 | Surface and reversed text |
| `#FF4040` | 1756 | Error or destructive emphasis |
| `#000000` | 1104 | Black and primary label color |
| `#333333` | 940 | Title text and dark icons |
| `#D9D9D9` | 728 | Neutral border |
| `#CCCCCC` | 616 | Neutral disabled or border color |
| `#FF404033` | 327 | Translucent red emphasis |
| `#212122` | 292 | Dark text |
| `#666666` | 244 | Body text |
| `#979797` | 208 | Neutral secondary text |
| `#2C5CF7` | 178 | Blue emphasis |
| `#D8D8D8` | 152 | Neutral border |
| `#FFFFFFB2` | 152 | Translucent white |
| `#9747FF` | 130 | Purple emphasis |
| `#266EFF` | 121 | Primary brand blue |
| `#FFFFFFD9` | 120 | Translucent white |

### Semantic colors

- Brand blue: `#266EFF`
- White: `#FFFFFF`
- Black: `#000000`
- Title text and dark icons: `#333333`
- Body text: `#666666`
- Secondary text and medium-gray icons: `#999999`
- Disabled text and light icons: `#C7C7C7`
- Neutral background: `#F5F5F5`
- Cool-gray background: `#F5F7FA`
- Header background: `#FAFAFA`
- Neutral border: `#DCDEE0`, `#D9D9D9`, `#D8D8D8`, `#CCCCCC`, `#DDDDDD`
- Mask: `#00000080`
- Error background: `#FFF0F0`
- Error red: `#F22C3C`
- Bright red: `#FF4040`
- Green background: `#F0FFE3`
- Green: `#53BF1D`
- Emerald background: `#E8FFF4`
- Emerald: `#00A170`
- Yellow background: `#FFFCE6`
- Yellow: `#CF9400`
- Orange background: `#FFF5E8`
- Orange: `#FF8026`
- Cyan background: `#E8FEFF`
- Cyan: `#00BCE0`
- Magenta background: `#FFF0FA`
- Magenta: `#E617C3`
- Purple background: `#F9F2FF`
- Purple: `#893DF2`
- Gray-blue functional text: `#4569B2`
- Gray-blue inactive state: `#878D99`
- Teal theme color: `#24C5C7`

### Color ramps

- Blue:
  - `#001466`, `#00218C`, `#0936B3`, `#1650D9`, `#266EFF`
  - `#4F90FF`, `#78AEFF`, `#A1CAFF`, `#C9E2FF`, `#F0F7FF`
- Green:
  - `#0B3800`, `#155C00`, `#267D06`, `#3A9E10`, `#53BF1D`
  - `#72CC3D`, `#93D964`, `#B1E68A`, `#D2F2B6`, `#F0FFE3`
- Red:
  - `#470010`, `#6E0013`, `#96091E`, `#C4182B`, `#F22C3C`
  - `#FF575F`, `#FF8082`, `#FFAAA8`, `#FFD1CF`, `#FFF0F0`
- Orange:
  - `#4D1600`, `#7A2A05`, `#A8440D`, `#D46019`, `#FF8026`
  - `#FF9E4F`, `#FFB875`, `#FFCF9C`, `#FFE3C2`, `#FFF5E8`

### Gradients

- Blue: `gradient_linear(#266EFF 0% | #4F90FF 100%)`
- Gray-blue: `gradient_linear(#4569B2 0% | #6386C2 100%)`
- Emerald: `gradient_linear(#00A170 0% | #00C785 100%)`
- Green: `gradient_linear(#53BF1D 0% | #72CC3D 100%)`
- Cyan: `gradient_linear(#00BCE0 0% | #29CCE6 100%)`
- Red: `gradient_linear(#F22C3C 0% | #FF575F 100%)`
- Orange: `gradient_linear(#FF8026 0% | #FF9E4F 100%)`
- Magenta: `gradient_linear(#E617C3 0% | #FF40D9 100%)`
- Yellow: `gradient_linear(#CF9400 0% | #FABC00 100%)`
- Purple: `gradient_linear(#893DF2 0% | #A963FF 100%)`
- Cool gray: `gradient_linear(#878D99 0% | #9CA2AD 100%)`
- Profile blue: `gradient_linear(#4F90FF 0% | #78AEFF 100%)`
- Profile gray-blue: `gradient_linear(#6386C2 0% | #84A3D1 100%)`
- Profile green: `gradient_linear(#28D495 0% | #53E0A8 100%)`
- Profile red: `gradient_linear(#FF575F 0% | #FF8082 100%)`
- Profile orange: `gradient_linear(#FFB875 0% | #FF9E4F 100%)`
- Profile sky blue: `gradient_linear(#507AFE 0% | #507AFECC 100%)`

## Type scale

- Font family: PingFang SC.
- Regular weight: `400`.
- Medium weight: `500`.
- Tracking: `0px`.

### Named typography tokens

| Token | Weight | Size | Line height |
|---|---:|---:|---:|
| 标题/H1 | 500 | `22px` | `34px` |
| 标题/H2 | 500 | `18px` | `28px` |
| 标题/H3 | 500 | `16px` | `24px` |
| 标题/H4 | 500 | `14px` | `22px` |
| 标题/H5 | 500 | `13px` | `20px` |
| 标题/H6 | 500 | `12px` | `18px` |
| 标题/16px | 500 | `16px` | `24px` |
| EMTitle / PINGFANG SC | 500 | `17px` | `auto` |
| 正文/T1 | 400 | `16px` | `24px` |
| 正文/T2 | 400 | `14px` | `22px` |
| 正文/T3 | 400 | `13px` | `20px` |
| 正文/14px | 400 | `14px` | `20px` |
| Text/Small | 400 | `13px` | `22px` |
| 辅助/T4 | 400 | `12px` | `18px` |
| 辅助/12px | 400 | `12px` | `18px` |

### Additional raw sizes

Raw extraction also contains PingFang SC sizes `10px`, `11px`, `15px`, `20px`, `26px`, `30px`, and `40px`, plus PingFang SC Semibold sizes `8.1px`, `16px`, `20px`, and `40px`. Inter Regular and Medium both occur at `16px`.

## Spacing scale

_None found in source._

Known component padding and gaps:

- `按钮`: padding `8px 16px 8px 16px`, gap `10px`.
- `文字按钮`: padding `0 0 0 0px`, gap `4px`.
- `图文按钮`: padding `0 0 0 0px`, gap `2px`.

## Radius scale

- `按钮`: `8px`.
- No global radius variables were found.

## Elevation & effects

- Background blur: `21px`.
- 标签栏投影: drop shadow `3px`, offset `0 -2`, color `#00000005`.
- 卡片投影: drop shadow `3px`, offset `0 2`, color `#00000005`.
- 组件投影: drop shadow `20px`, offset `0 4`, color `#0000001A`.

## Components

Use only the extracted component families and their documented variants.

### Actions and navigation

- `按钮`: `351x40px`; radius `8px`; primary fill `#266EFF`; padding `8px 16px 8px 16px`; gap `10px`; text `正文/T1 16px Regular`; variants include 主要按钮、幽灵按钮、次要按钮, warning, disabled, loading, sizes 中/大/小/超大, and 大圆角.
- `文字按钮`: `48x22px`; gap `4px`; text `正文/T2 14px Regular`; sizes `14px` and `16px`; warning and disabled states.
- `图文按钮`: `54x44px`; vertical layout; gap `2px`.
- `按钮组合`
- `批量操作`
- `批量操作-默认`
- `批量操作-插槽`
- `操作栏按钮`
- `浮动按钮-子按钮`
- `浮动按钮-弹出子按钮`
- `Fab`
- `导航栏`
- `标签栏`
- `Home Indicator`
- `动作面板`
- `_动作面板选项`

### Icons

- `Icon-Wrapper`: supports sizes `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, and `48px`; 拼合 supports `false` and `true`.
- `线性`: standard assets are `48x48px`.
- `面性`: standard assets are `48x48px`; many reversed variants use fill `#FFFFFF`.
- `反白图标`: assets are `32x32px`.
- `通用图标`
- `安全质量`: application icons are `96x96px`, fill `#FFFFFF`.
- `事物协同`: application icons are `96x96px`, fill `#FFFFFF`.
- `成本协同`: application icons are `96x96px`, fill `#FFFFFF`.
- `智慧客服`: application icons are `96x96px`, fill `#FFFFFF`.
- `设计管理`: application icons are `96x96px`, fill `#FFFFFF`.

### Selection and input

- `单选框`
- `单选框组合`
- `单选图标`
- `复选框`
- `复选框组合`
- `复选图标`
- `开关`
- `输入文本`
- `搜索`
- `语音录入`
- `键盘`
- `选择器`
- `选择组合`
- `选择选项`
- `选项`
- `选项组合`
- `时间选择`
- `级联选择`
- `级联选择tab组合`
- `级联选择-平铺选择`
- `级联选择-平铺选择-选择选项`
- `筛选过滤`
- `文件上传`
- `文件上传图标`
- `文件上传组合`
- `视频图片上传元件`
- `视频图片上传组合`
- `子表单`
- `表单标题`
- `表单组合`
- `辅助文字`

### Data display

- `基础列表`
- `复杂列表`
- `树列表`
- `徽标`
- `标签`
- `标签组合`
- `标签页`
- `状态简档`
- `信息简档`
- `_简档指标`
- `指标组合`
- `标题`
- `步骤组合`
- `流程步骤（横向）`
- `流程步骤（纵向）`
- `步进器`
- `评分`
- `评分（列表）`
- `Image`
- `元件`
- `元素`
- `分组`
- `1st`
- `2nd`
- `3rd`
- `4th`
- `5th`

### Overlays and feedback

- `popover menu`
- `弹出层`
- `弹出层标题`
- `对话框`
- `提示`
- `icon-tost`
- `通告栏`
- `通告栏icon`
- `缺省图`
- `.状态标签`
- `.状态标签组合`

The `.状态标签` and `.状态标签组合` families are marked deprecated in the source.

## Screen patterns

- **Foundation**: foundational style documentation, icons, colors, typography, buttons, floating actions, popovers, groups, and button groups.
- **Data entry**: radio buttons, checkboxes, switches, ratings, steppers, filtering, file and media upload, search, voice input, forms, pickers, cascaders, enum filtering, date selection, keyboard, and text input.
- **Data display**: lists, tree lists, badges, tags, tabs, profiles, steps, popups, empty states, statistics, and images.
- **Navigation**: top navigation through `导航栏`, bottom navigation through `标签栏`, and `Home Indicator`.
- **Feedback**: action sheets, dialogs, toast prompts, and notice bars.
- **Application icon grids**: 96px icons grouped under `安全质量`, `事物协同`, `成本协同`, `智慧客服`, `设计管理`, and `通用图标`.

## Notes for implementers

- Prefer named typography tokens over raw text styles.
- Use `#266EFF` for primary actions unless a component’s documented semantic or warning state requires another extracted color.
- Preserve the distinction between `#333333` title text, `#666666` body text, `#999999` secondary text, and `#C7C7C7` disabled text.
- Use pale semantic backgrounds with their corresponding functional colors for status surfaces.
- Use `48x48px` source icon assets inside an appropriately sized `Icon-Wrapper`; do not assume the source asset size is the rendered size.
- Use white fills only for extracted reversed or filled icon variants; the source explicitly documents fill `#FFFFFF` for those variants.
- Do not create a spacing, radius, grid, or motion scale beyond the concrete values listed here.
- Do not use deprecated `.状态标签` or `.状态标签组合` for new components when an active status component is suitable.
- Keep mobile controls compact and use the documented fixed dimensions for `按钮`, `文字按钮`, and `图文按钮`.
