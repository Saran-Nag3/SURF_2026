---
name: onlyfans-v1-0-app-community
source: OnlyFans v1.0 社交类app 自制版 (Community)
kind: design-system-context
---

# onlyfans - Design System

## Overview

- Community-oriented OnlyFans mobile app design system covering cover artwork, main feed/detail views, profile, publishing, authentication, messaging, chat, media viewing, payments, and iconography.
- Primary mobile frame: 375px wide. Common screen heights include 812px.
- Visual foundation: blue logo accents, black/white text, light-gray surfaces, compact mobile navigation, media-first cards, and dense social interaction controls.
- No local variable collections were found.

## Design language

- Use `#0071CE` and `#4EACE9` as logo and brand accents.
- Use `#323232` for primary dark text, `#707070` and `#979797` for secondary text, and `#FFFFFF` for light-on-dark content.
- Use `#F6F7F9`, `#F4F4F4`, `#F2F3F5`, `#EFEFEF`, and `#F8F8F8` for input, card, and utility surfaces.
- Interaction states include `#6DE18C` for normal status, `#ED6054` for errors and alerts, and `#DADADA` for disabled states.
- Interfaces are mobile-first, with 24px icon controls, 375px-wide bars and action regions, rounded cards, media previews, comments, likes, subscriptions, and messaging.
- Typography primarily uses Helvetica Neue; SF Pro Text is used for system-style UI, and Plus Jakarta Sans appears in cover artwork.

## Color palette

Ranked by raw usage where counts are available:

| Color | Usage | Role |
|---|---:|---|
| `#000000` | 1344 | Primary dark text and dark UI |
| `#FFFFFF` | 820 | Primary light text, surfaces, and icons |
| `#DADADA` | 233 | Disabled state and muted controls |
| `#FCFCFE` | 224 | Light surface |
| `#D9D9D9` | 133 | Payment and neutral surfaces |
| `#F2F3F5` | 128 | Card and message surface |
| `#50555C` | 120 | Dark neutral |
| `#9747FF` | 94 | Accent color |
| `#00579F` | 84 | Dark blue accent |
| `#F6F7F9` | 83 | Input background |
| `#EEEFF1` | 57 | Light neutral surface |
| `#010101` | 53 | Video and dark content surface |
| `#00000033` | 36 | Dark translucent overlay |
| `#8A96A3` | 32 | Default icon state |
| `#4EACE9` | 30 | Main logo color |
| `#434343` | 28 | Dark secondary text |
| `#ADB3BC` | 24 | Muted gray |
| `#F7F7F7` | 23 | Light surface |
| `#0071CE` | 22 | Auxiliary logo color and blue accent |
| `#979797` | 21 | Light-gray text |
| `#EBF3FA` | 21 | Pale blue surface |
| `#FAA61A` | 21 | Orange accent |

Named semantic tokens:

- Primary text: `#323232` — 1141 uses.
- White text: `#FFFFFF` — 831 uses.
- Light-gray text: `#979797` — 444 uses.
- Main logo color: `#4EACE9` — 343 uses.
- Default icon state: `#8A96A3` — 299 uses.
- Gray line: `#F0F0F0` and `#323232` — 281 uses.
- Gray text: `#707070` — 218 uses.
- Input background: `#F6F7F9` — 28 uses.
- Normal status: `#6DE18C` — 75 uses.
- Error and alert status: `#ED6054` — 42 uses.
- Disabled status: `#DADADA` — 24 uses.
- Dark translucent material: `#0000001A`.
- Light translucent overlay: `#00000033`.
- Label Color / Light / Primary: `#000000`.
- Label Color / Dark / Primary: `#FFFFFF`.
- Light gray surface: `#EFEFEF`.
- White surface: `#FFFFFF`.

## Type scale

Primary typography tokens:

| Token | Family | Weight | Size / line height | Tracking |
|---|---|---:|---:|---:|
| Body 7 | Helvetica Neue HelveticaNeue | 400 | 10px / 14px | 0px |
| Body 5 / Body 5m / Body 6 | Helvetica Neue HelveticaNeue or Helvetica Neue Medium | 400 / 500 | 12px / 20px or 12px / 16px | 0px |
| Body / Body m | Helvetica Neue HelveticaNeue or Helvetica Neue Medium | 400 / 500 | 15px / 27px | 0px |
| H&B 3 / H&B 3m | Helvetica Neue HelveticaNeue or Helvetica Neue Medium | 400 / 500 | 16px / 27px | 0px |
| Default/Bold/Body | SF Pro Text Semibold | 600 | 17px / 22px | -0.41px |
| Heading m | Helvetica Neue Medium | 500 | 18px / 30px | 0px |
| Heading 1 | Helvetica Neue HelveticaNeue | 400 | 24px / 35px | 0px |
| Body 4 / Body 4m | Helvetica Neue HelveticaNeue or Helvetica Neue Medium | 400 / 500 | 14px / 22px | -0.03px or 0px |

Additional source sizes: 20px, 22.5px, 36px, and 40px. Raw type also includes SF Pro Text Regular at 16px and 22.5px, Helvetica Neue Medium at 10px, 14px, 16px, 18px, 20px, Helvetica Neue HelveticaNeue at 15px and 16px, and Plus Jakarta Sans Bold at 20px.

## Spacing scale

_No spacing variables found in source._

Observed component spacing values:

- 0px, 1px, 2px, 4px, 5px, 6px, 8px, 10px, 11px, 12px, 16px, and 20px.
- Common horizontal padding: 6px, 12px, and 16px.
- Common component gaps: 4px, 6px, 8px, 10px, and 12px.
- `Frame 94` and `Frame 92`: padding `6px 12px 6px 12px`, gap `10px`.
- `Searchbar`: padding `6px 121px 6px 16px`, gap `6px`.
- `支付方式`: padding `11px 12px 11px 12px`, gap `10px`.
- `聊天图片`: padding `5px 6px 5px 6px`, gap `10px`.

## Radius scale

No radius variables were found. Observed radii:

- 0px: square corners and selected component corners.
- 6px: `Frame 94`, `Frame 92`, `Searchbar`, `聊天图片`.
- 8px: `消息记录`, `支付方式`, and `more`.
- 12.72px: decorative `Frame 94`.
- 30px: cover artwork frames.
- 100px: circular home indicator and avatar-related component.
- `100x100px` avatar variant is circular by component context.

Observed asymmetric radii include `6/6/6/0px` for `Frame 94` and `Frame 92`, and `6/6/0/6px` for `聊天图片`.

## Elevation & effects

- System material blur: `background_blur 81.55px`.
- Keyboard blur effect: `background_blur 108.73px`.
- `more` popup: drop shadow `64px`, offset `0 8px`, color `#0000001A`.
- Dark media viewing overlays use `#00000033`.
- No motion tokens were found.
- No local grid styles were found.

## Components

All components below are sourced component families or named components.

### Navigation and system chrome

- `导航`: 375x88px; variants for bar, playback, bottom, and top.
- `导航`: 375x75px; light/dark and personal, home, messages, create, and search variants.
- `statusBar`: 375x44px; iPhone 13, dark/light variants; white surface.
- `homeIndicator`: 375x34px; iPhone 13, dark/light variants.
- `主菜单`, `信息`, `搜索`, `个人中心`, `提醒`: 24x24px controls with off/on variants where specified.
- `创建`: 40x30px control with off/on variants.
- `Icons`: 24x24px arrow variants.
- `官方拷来的 Icons`: 24x24px icon collection with social, navigation, media, payment, and utility variants.
- `更多`: 45x8px horizontal control with 4px gap.

### Media, posts, and profile cards

- `card`: 375x210px media card with locked, image, video, chat, purchase-unlock, long-image, long-video, and category variants.
- `information card`: 375x478px content card with image, video, locked, free, forbidden, and unlock variants.
- `小视频资料卡`: 133x36px horizontal profile card; 8px gap; online, offline, live, and chat-online variants.
- `缩小视频-竖屏`: 120x260px minimized video; playback and paused variants.
- `卡片` families `Card`, `Cardname`, and `Status`: profile identity, certification, and online-state variants.
- `Card`: 180x76px; certified/not-certified variants.
- `Cardname`: 96x50px; certified/not-certified variants.
- `Status`: 76x76px; free/online/offline variants.
- `资料卡昵称`: 179x52px; 14px and 18px typography; online and non-online variants.
- `用户头像`: 100x100px base size with 50px, 62px, 76px, and 80px variants; online/offline and dynamic/non-dynamic states.
- `Nothing posted yet 1`: 303x148px empty-state surface.
- `。。。`: 108x8px white control.

### Social actions and interaction

- `Promotions`, `Likes`, `Bookmark`, `Subscriptions`, `Comments`: 60x60px action components.
- `喜欢`, `收藏`, `提醒`, `个人中心`: 24x24px controls with state variants.
- `star`, `share`, `comments`, `At`, `Share`, `ChatsCircle`, `Gear`, `Medal`, `File`, `MusicNotes`, `Notepad`, `BellSlash`, `CalendarBlank`, `Camera`, `Check_All`, `Copy`, `Trash_Full`, `上传`, `功能`, `关闭`, `more`, `send`, `sound`, `sound 1`, `$`, `添加`, `Gif`, and `image`: primarily 24x24px icon controls with white fills where specified.
- `评论`: 343x108px vertical component with 12px gap; multiple comment variants.
- `评论列表`: 343x128px comment-list component.
- `喜欢列表`: 343x50px like-list component with recent, dated, individual, and multiple-user variants.
- `文章评论功能区`: 375x56px white action region with 1px gray stroke.
- `视频评论功能区`: 375x56px dark action region.
- `聊天`: 375x56px chat action/input region with 1px gap.
- `消息系统`: 337x53px message row with 6px gap; text, image, pinned, blocked, and group variants.
- `消息记录`: 343x89px message card with 8px radius and image/no-image variants.
- `聊天图片`: 235.8x160px media message with 6px asymmetric radius and multiple-media variants.

### Search, input, authentication, and payments

- `Searchbar`: 343x39px, 6px radius, `#F4F4F4` fill, 1px gray stroke, before/after variants.
- `Input`: 327x35px; email, name, and password fields with error, focus, off, and on states.
- `登陆选项`: 16x16px remember-me checkbox with off/on states.
- `登陆按钮`: 327x46px; sign-in/sign-up and off/on states.
- `keyboard`: 375x335px; dark/light modes, `#D1D5DB` fill, and keyboard blur.
- `1.Element DM`: 51x31px switch with OFF/ON variants.
- `支付按钮`: 296x44px; complete, sliding, and slide-button variants.
- `支付方式`: 296.33x44px, 8px radius, `#D9D9D9` fill, 1px gray stroke; payment, dropdown, and payment-provider variants.
- `金融标识`: 23.33x16px GooglePay, PayPal, and Visa variants.
- `支付方式/媒体标识`: 292x32px horizontal provider row with 12px gap.
- `弹窗页展示`: 303x46px payment-plan popup with 12px medium text.
- `主页面显示`: 343x46px subscription amount display.
- `转账区`: 315x77px; payable, default, and error variants.
- `more`: 217x150px, 8px radius, white popup with drop shadow.

### Cover and decorative components

- `Frame 94`: 230x66px, 6/6/6/0px radius, `#F2F3F5` fill, horizontal layout, 6px/12px padding, 10px gap.
- `Frame 92`: 231x66px with the same layout, radius, padding, gap, and fill as `Frame 94`.
- Cover artwork uses 30px-radius light frames and includes `Frame 94` as a decorative 96x97px element.

## Screen patterns

- **Cover / landing artwork:** A 1200x675px composition using rounded light-gray panels, brand-blue accents, media mockups, and large editorial statements. Cover typography includes Plus Jakarta Sans at 20px and 40px.
- **Main home and detail views:** Media cards, profile identity, subscription and engagement actions, comments, likes, bookmarks, and video controls are arranged within a 375px mobile layout.
- **Messaging and chat:** Use `消息系统`, `消息记录`, `聊天`, `聊天图片`, `send`, `Gif`, `image`, and `sound` around a 375px screen with system status and home-indicator regions.
- **Full-screen media viewer:** 375x812px dark media surface with a 44px status bar, 50px header, 56px action/status region, dark translucent overlays, and 34px home indicator.
- **Profile and status:** Combine `用户头像`, `资料卡昵称`, `Cardname`, `Card`, `Status`, and `状态` to represent identity, certification, online status, and profile actions.
- **Comments and engagement:** Use 343px-wide comment and list components, plus 375x56px article or video comment action regions.
- **Authentication:** Use `Input`, `登陆选项`, `登陆按钮`, `keyboard`, and system chrome within a 327px input/button width.
- **Payments and subscriptions:** Use 296px-wide payment controls, `支付方式`, `金融标识`, `弹窗页展示`, `主页面显示`, and `转账区` for plan selection, payment method selection, and transaction states.
- **Empty state:** Use `Nothing posted yet 1` when no posts are available.

## Notes for implementers

- Treat component names and variants as the source of truth; do not create unlisted component families.
- Prefer the named typography tokens over raw typography when both are available.
- Use 24x24px for the dominant icon-control size unless a component specifies another size.
- Preserve the specified mobile widths: 375px screen regions, 343px content rows, 327px authentication controls, and 296px payment controls.
- Preserve asymmetric radii where specified; do not normalize `6/6/6/0px` or `6/6/0/6px` to a fully rounded rectangle.
- Use `#00000033` or `#0000001A` for translucent dark overlays only where the source specifies translucent material or shadow behavior.
- No spacing, radius, motion, or grid variable collections were found; use the observed component values directly.
- Raw extraction includes additional decorative image and vector colors that are not part of the approved palette; implementers should use only the documented palette values.
