---
name: kijiji-hub-app-ios-ui-kit-community
source: Kijiji Hub App iOS UI Kit (Community)
kind: design-system-context
---

# hub - Design System

## Overview

- iOS UI kit for the Kijiji Hub app.
- Source pages: 📐Designs, 🍱Components, 🌈Global GuideStyle, Symbols.
- Primary screen frame: 375×812px.
- No local variable collections were found.
- Component families cover onboarding, authentication, dashboard, projects, tasks, teams, chat, notifications, profiles, navigation, forms, controls, icons, and settings.

## Design language

- Use Poppins SemiBold for display headlines and prominent titles.
- Use Inter for buttons, tabs, labels, body copy, captions, chips, and controls.
- Use 18px Poppins SemiBold for large screen titles.
- Use 13px Inter body text for dense application content.
- Use bold Inter typography for actions and emphasis.
- Use rounded, mobile-first control patterns with frequent 48px-high navigation and action rows where specified.
- Use colorful gradients and soft pastel accent colors alongside dark backgrounds.
- The documented background uses `Background/01`, a linear gradient from `#9ADB7F` to `#6EA95C`.
- The source contains both named typography styles and unstyled SF Pro Text and Roboto instances; prefer named styles where applicable.

## Color palette

### Ranked raw colors by usage

| Color | Uses |
|---|---:|
| `#FFFFFF` | 1256 |
| `#DADADA` | 460 |
| `#200E32` | 388 |
| `#230B34` | 264 |
| `#434343` | 252 |
| `#E7E7E7` | 150 |
| `#00000000` | 128 |
| `#5E6272` | 124 |
| `#181A20` | 102 |
| `#23262E` | 98 |
| `#FBA3FF` | 50 |
| `#B4DDDD` | 43 |
| `#D8D8D8` | 37 |
| `#200745` | 36 |
| `#8E96FF` | 29 |
| `#97DAA4` | 29 |
| `#242424` | 23 |

### Named colors

- `State/Deactive`: `#5E6272`
- `State/Deactive - Darker`: `#3A3D46`
- `State/Active`: `#FFFFFF`
- `State/Light-Mode Active`: `#200745`
- `Color/White`: `#FFFFFF`
- `Colorful/01`: `#A06AF9`
- `Colorful/02`: `#FBA3FF`
- `Colorful/05`: `#A5F59C`
- `Colorful/06`: `#FFDD72`
- `Colorful/07`: `#FF968E`
- `Background/02`: `#262A34`
- `Background/Blur`: `#181A20D9`
- `Label Color / Dark / Primary`: `#FFFFFF`
- `SystemOrange / Light`: `#FF9500`
- `Carbon / Darkest`: `#24262B`
- `Carbon Neutral/300`: `#D6D9DD`
- `Gray 3`: `#828282`
- `Gray 4`: `#BDBDBD`

### Gradients

- `Gradient/04` and `Background/01`: linear, `#9ADB7F` at 0% to `#6EA95C` at 100%.
- `Gradient/07`: linear, `#BBFFE7` at 0% to `#86FFCA` at 100%.
- `Gradient/02`: linear, `#C393FF` at 0% to `#E42A6C` at 100%.
- `Gradient/09`: linear, `#353843` at 0% to `#181A20` at 100%.
- `Gradient/08`: linear, `#FFB28E` at 0% to `#FF7A55` at 100%.
- `Gradient/03`: linear, `#FFEBA2` at 0% to `#FF8669` at 100%.
- `Gradient/05`: radial, `#FFF9B0` at 0%, `#D3FFFA` at 46%, `#FFC4FA` at 100%.
- `Gradient/06`: linear, `#FFAFAF` at 0%, `#FFB07B` at 17%, `#FFB37A` at 18%, `#FFECB7` at 33%, `#D6FFAA` at 50%, `#0091FF` at 67%, `#6236FF` at 83%, `#B620E0` at 100%.

## Type scale

### Poppins

| Style | Font | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Headline/H0 | Poppins | 60px | SemiBold 600 | 64px | 0px |
| Headline/H1 | Poppins | 48px | SemiBold 600 | 56px | 0px |
| Headline/H2 | Poppins | 40px | SemiBold 600 | 48px | 0px |
| Headline/H3 | Poppins | 36px | SemiBold 600 | 40px | 0px |
| Headline/H4 | Poppins | 32px | SemiBold 600 | 40px | 0px |
| Headline/H5 | Poppins | 24px | SemiBold 600 | 32px | 0px |
| Headline/H6 | Poppins | 20px | SemiBold 600 | 24px | 0px |
| Title (L) | Poppins | 18px | SemiBold 600 | 24px | 0px |

### Inter

| Style | Font | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Button (L) | Inter | 16px | Bold 700 | 24px | 0px |
| Title (M) | Inter | 16px | SemiBold 600 | 24px | 0px |
| Button (S) | Inter | 14px | Bold 700 | 24px | 0px |
| Tab | Inter | 14px | SemiBold 600 | 24px | 0px |
| Title (S) | Inter | 14px | SemiBold 600 | 24px | 0px |
| Body (L) | Inter | 14px | Medium 400 | 24px | 0px |
| Body (S) - Medium | Inter | 13px | Medium 500 | 24px | 0px |
| Body (S) - Bold | Inter | 13px | Bold 700 | 24px | 0px |
| Body (S) - Regular | Inter | 13px | Regular 400 | 20px | 0px |
| Caption (L) | Inter | 12px | Medium 500 | 16px | 0px |
| Caption (S) | Inter | 11px | Medium 500 | 16px | 0px |
| CHIP | Inter | 10px | Bold 700 | 16px | 0.5px |

### Other source typography

- SF Pro Text Regular: 22.5px and 16px instances occur in input, authentication, search, chat, and task-detail screens.
- Roboto Regular: 14px and 36px instances occur in dashboard, chat, onboarding, and creation flows.
- Unstyled source typography also includes SF Pro Text Black at 20px.

## Spacing scale

_None found in source._

- No spacing variables were found.
- Explicit component gaps:
  - `Dashboard Cards`: 16px vertical gap.
  - `tab`: 8px horizontal gap.
- Explicit component padding:
  - `Dashboard Cards`: `0 0 0 0px`.
  - `tab`: `0 0 0 0px`.

## Radius scale

_None found in source._

## Elevation & effects

- `Popup`: drop shadow, 12px blur, offset `0 8`, color `#00000040`.
- `BG Blur 01`: background blur 24px.
- No motion variables were found.
- No local grid styles were found.

## Components

Use only the documented component families:

- **Navigation and shell:** Nav, Nav (Background On), Navigation, Navigation Bar, Navigation Bar Copy, Home Indicator, iPhone X, 11 Pro, Slide Menu, Tab Bar Icon 24, Tab Item, Switch Tab, Pagination.
- **Actions and controls:** Add, Add Small, Add Member, Add Task, Button, Full Button 1, btn, Circle Button, Circle Button 12, Circle Button 20, Circle Icon 32, Toggle, Check, Check box, Chevron, chevron-up, arrow-left, Edit Profile, Filter Bar, Search, Select Layout, Input.
- **Content and work management:** Dashboard, Dashboard Cards, Project, Project 01, Task, Task Large, Task Small, Task Detail, Sub task, Goal, Progress, Plan, Chart, Calendar, Date Time, Appointments, timeline, inform progress board.
- **People and communication:** Avatar, Avatar Stack, Member, Team, Team members - Number, Profile, View Profile, Chat, Conversation, Comment, Comment Count, Messages, Liked, heart, bookmark.
- **Settings and notifications:** Setting, Setting Icons, Notification Settings, Notifications, Notication, Theme Pick, Status.
- **Identity and onboarding:** Logo, Mark, Tag-line, Onboarding, Sign In - Sign Up, Feature, Social Icons, facebook button, google button, email button.
- **Icons and decorative elements:** 3D Icon 48, Icon 12, icon 12, Icon 16, Icon 20, Icon 24, Icon 32, Icon 48, Iconly, COLOR, decor, attachment icon, date, assign, project, acti, label 09, tag, popup background, Frame 58, Frame 91, DSM, Dark, ✏️Title.
- **Popup and overlay elements:** Popup, popup background, Navigation Bar, Navigation Bar Copy.

### Documented dimensions and layouts

- Screen compositions: 375×812px.
- `Nav` variants: 327×48px, including Only Back, Close, Add and More, Ghost Button, More Button, Task, Project, Back - Title, Action Button, Conversation, Add Icon, Search, Default/Avatar Set, Dashboard, and Default/No Avatar.
- `Dashboard Cards`: 324×224px, vertical layout, fixed width and height, 16px gap.
- `tab`: 204×32px, horizontal layout, 8px gap, fixed width and height.
- `Add Task`: 290×48px.
- `Task/Board`: 290×216px and 290×72px variants.
- `Circle Button 12/Show - Hide`: 24×24px, with `State: Hide/Show`.
- `label 09`: 154×32px.
- `chat/typing`: 64×40px.
- `attachment icon`: 40×40px.
- `acti`: 224×42px.
- `date`: 122×48px.
- `assign`: 158×48px.
- `project`: 222×48px.

## Screen patterns

- **Onboarding:** Splash Screen followed by Onboarding 01–04; uses Poppins Headline/H2 at 40px, with Inter Button (S) and Caption (L).
- **Authentication:** Sign In, Sign Up/Email, Sign Up/Name - Password, and Create Workspace flows; combines Poppins display titles with Inter form labels, captions, buttons, and inputs.
- **Dashboard:** Dashboard 01, Dashboard 02, and Dashboard Setting; uses dashboard cards, tabs, buttons, chips, and navigation.
- **Projects:** Project List, Project Card, Project Task Board, Project Task List, and board settings or listing-type switches.
- **Tasks:** Task Detail, More, Comment, Edit Title, Asignees, SubTask Detail, and Add Sub Task.
- **Teams:** Team Overview, Team Detail, Calendar, Settings, Add/Create Team, Select Members, and Members Selected.
- **Communication:** Chat List, Chat Conversation, typing indicator, comments, attachment controls, and search.
- **Profile and settings:** View Profile, Edit Profile, Notification Settings, Slide Menu, Theme Pick, and general Setting screens.
- **Creation flows:** Add/Create Project, Add/Create Task, Add/Create Event, and Add/Create Team use repeated form, assignment, selection, popup, and action-button patterns.
- All extracted application screens use the 375×812px frame and `Background/01` as the documented fill.

## Notes for implementers

- Treat the named typography tokens as the canonical type system; raw SF Pro Text and Roboto entries represent additional source instances rather than replacements.
- Preserve exact capitalization and token names when mapping styles.
- Do not infer spacing, corner radii, motion, grid behavior, or primary/secondary colors; those values were not documented.
- Use `#00000000` for transparent fills only where the source specifies it, such as the documented Tab Bar Icon 24 fill.
- Use `#FFFFFF` for documented white fills and active states.
- Use `#181A20D9` for the documented blur background rather than substituting an opaque dark color.
- The source includes both `Notication` and `Notifications`; retain the supplied family names when resolving components.
- Several component families have both lowercase and uppercase variants, such as `icon 12` and `Icon 12`, `project` and `Project`, and `tab` and `Tab Item`; do not merge them without confirming the intended source instance.
