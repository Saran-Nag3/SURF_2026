---
name: xiaomi-v5-app-icon-community
source: Xiaomi V5 app icon (Community)
kind: design-system-context
---

# xiaomi - Design System

## Overview

- Figma file: Xiaomi V5 app icon (Community)
- Pages: App Icon, Cover
- Extraction includes a large app-icon library, a status bar, app rows, and paging controls.
- No local variable collections, text styles, spacing variables, motion tokens, or grid styles were found.
- App icons are primarily 512x512px components.

## Design language

- Dimensional, tactile app-icon treatment with layered shapes, gradients, inner shadows, drop shadows, and blur.
- Icon surfaces commonly use a light base with a raised or inset foreground mark.
- App-icon artwork is built as decorative vector and group compositions inside a 512x512px frame.
- The App row uses a horizontal mobile-layout pattern with generous horizontal padding and a fixed gap between items.
- Typography is regular-weight Chinese and Latin UI text at approximately 24–25px.

## Color palette

Ranked by raw usage:

| Color | Usage | Role |
|---|---:|---|
| #BBB8B8 | 492 | Most-used neutral |
| #CCC7C7 | 396 | Light neutral |
| #807F7F | 366 | Mid neutral |
| #FFFFFF | 277 | White surfaces and icon fills |
| #B5B2B2 | 264 | Light-mid neutral |
| #929292 | 244 | Mid neutral |
| #000000 | 89 | Black artwork and text |
| #C6C1C1 | 80 | Light neutral |
| #ECF0F9 | 76 | Very light cool background |
| #508EF5 | 22 | Blue accent |
| #5892F7 | 22 | Blue accent |
| #357FD3 | 20 | Darker blue accent |
| #C4C4C4 | 20 | Neutral |
| #868686 | 17 | Mid-dark neutral |
| #8A1814 | 16 | Dark red accent |
| #919191 | 16 | Mid neutral |
| #00000033 | 14 style uses | Shadow color |

## Type scale

No local text styles were found. Raw typography:

| Size | Font | Weight | Usage |
|---:|---|---|---:|
| 24px | PingFang SC | Regular | 64 |
| 24px | Noto Sans SC | Regular | 12 |
| 25px | Noto Sans SC | Regular | 4 |
| 25px | Roboto | Regular | 4 |

Use 24px PingFang SC Regular for the primary Chinese App-row text. Use Noto Sans SC Regular or Roboto Regular at 24–25px where specified by the source content.

## Spacing scale

No spacing variables were found. Explicit component spacing:

- App:
  - Horizontal padding: 45px on both sides.
  - Horizontal gap: 50px.
  - Layout: horizontal.
- Paging:
  - Horizontal gap: 14px.
  - Padding: 0px on all sides.
- Do not infer additional spacing tokens.

## Radius scale

No radius tokens were found.

- Figma icon mask: 166px radius.
- No other reusable radius values were identified.

## Elevation & effects

- Shadow color token: #00000033.
- Layer blur: 40px, used 13 times as the most-used effect style.
- The source also uses layered inner-shadow, drop-shadow, and blur treatments within individual icon artwork.
- Preserve effects as part of icon artwork rather than converting them into a general-purpose elevation scale.
- Use #00000033 when implementing the extracted shadow token.

## Components

### Shared layout components

- **Status Bar**
  - Size: 720x50px.
  - Text: Noto Sans SC Regular 25px or Roboto Regular 25px.
- **App**
  - Size: 720x158px.
  - Horizontal layout.
  - Padding: 0 45 0 45px.
  - Gap: 50px.
  - Fixed width and height.
  - Text: PingFang SC Regular 24px.
- **Paging**
  - Size: 90x12px.
  - Horizontal layout.
  - Padding: 0px.
  - Gap: 14px.
  - Fixed width and height.

### App-icon components

Every listed app-icon component is 512x512px unless noted otherwise. The following components use a #FFFFFF fill in the source:

VPN, UC浏览器, SIM卡应用, QQ音乐, KFC, Bilibili, 高德地图, Airbnb, 主题, 指南针, 支付宝, 游戏中心, 应用商店, 音乐, 设置, 在线视频, 信息, 小米, SSR, 相机, 相册, 文件管理, 微信, 微博, 通讯录, 手电筒, 视频播放器, 少数派, 美图秀秀, 录音机, 天气, 计算器, 电话, 地图, 生活黄页, 备忘录, 百度贴吧, 日历, 时钟, 站酷, 语音助手, 有道云笔记, 优酷, 讯飞输入法, 星巴克, QQ, 携程, 小米商城, 闲鱼, 下载管理, 阅读, 虾米音乐, 系统更新, 网易UU加速器, 网易云音乐, 网易邮箱, 网易新闻, 知乎, 网络助手, 天猫, 腾讯视频, 淘票票, 淘宝, 苏宁易购, 搜索, 收音机, 去哪儿旅行, 陌陌, 米币中心, 美团, 芒果TV, 浏览器, 快传, 酷安, 口碑, 京东, 今日头条, 花瓣, 防骚扰, 饿了么, 豆瓣, 斗鱼, 东方财富, 中国工商银行, 钉钉, 电子邮件, 滴滴, 大众点评, 备份, 百度网盘, 百度地图, 百度, 安全中心, 爱奇艺, 阿里旺旺, Youtube, Twitter, Telegram, Spotify, Play Store, pinterest, Instagram, imdb, Google map, Keep, 掌阅, Facebook, 印象笔记, 一加论坛, 倒数日, 遨游云浏览器.

The following 512x512px icon components are also present without an explicitly recorded fill in their component spec:

QQ邮箱, 抖音, 喜马拉雅听书, 米家, 酷狗音乐, wifi, 即刻, 输入法, 拼多多, Office, 新浪新闻, QQ空间, 豆瓣FM, Figma, apple music, Google, Chrome.

## Screen patterns

- **App Icon**
  - Individual app icons are 512x512px.
  - Icon artwork uses scale/scale constraints and is composed from vectors and decorative groups.
  - Common construction pattern: full-frame base, shadow or blurred backing shape, raised foreground mark, and inner-shadow highlight.
  - The source includes detailed artwork for icons such as 遨游云浏览器, 倒数日, 一加论坛, 印象笔记, Facebook, 掌阅, Keep, Google map, imdb, Instagram, pinterest, Play Store, Chrome, Google, Spotify, Telegram, Twitter, Youtube, apple music, Figma, 阿里旺旺, and 爱奇艺.
- **App list**
  - Uses the 720x158px App component.
  - Place content in a horizontal row with 45px side padding and a 50px gap.
- **Paging**
  - Uses a 90x12px horizontal control with 14px spacing between items.
- **Status bar**
  - Uses a 720x50px frame with 25px regular text.

## Notes for implementers

- Treat each app icon as a self-contained 512x512px component.
- Keep icon artwork proportional when resizing; the source consistently uses scale/scale constraints.
- Do not replace the dimensional icon treatment with flat fills when the artwork includes shadows, blur, highlights, or layered vectors.
- Use the ranked palette for surrounding UI and extracted component fills; do not introduce additional colors.
- Use only the recorded typography families and sizes.
- The raw extraction is truncated after the listed screen patterns, so do not infer specifications for omitted nodes.
