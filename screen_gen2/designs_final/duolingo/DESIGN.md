---
name: duolingo-design-system-community
source: DuoLingo Design System (Community)
kind: design-system-context
---

# duolingo - Design System

## Overview

- Source: Figma file “DuoLingo Design System (Community)”.
- Pages: Cover, Components, Existing Flows, Design Challenge.
- The system combines DIN 2014 Rounded VF for Duolingo UI typography with SF Pro for system-style text.
- Primary UI patterns include lesson progress, questions and answers, language selection, task tracking, level paths, bottom navigation, counters, tooltips, and social/proficiency modules.
- No local variable collections, spacing variables, radius variables, motion tokens, grid styles, or local effect styles were found.

## Design language

- Friendly, rounded, game-oriented interface with compact cards, pill-like progress indicators, bright accent colors, and prominent progress feedback.
- DIN 2014 Rounded VF is used for most UI, headings, buttons, goals, and lesson content.
- SF Pro Text and SF Pro Display are used for system-style callout, body, and title text.
- Common controls use rounded corners: 8px navigation buttons, 10–14px cards and controls, 13px primary controls, and 64px progress-bar rounding.
- Phone-oriented layouts use a 430px-wide content frame and a 932px-high phone frame with a 55px radius.
- Component states are commonly expressed through variants such as selected/unselected, active/inactive, complete/empty/frozen, answered/unanswered, open/closed, and progress percentage.

## Color palette

Ranked by raw usage where usage counts were provided:

| Color | Usage | Source usage |
|---|---:|---|
| #D9D9D9 | 299 | Raw color |
| #FFFFFF | 196 | Label Color/Dark/Primary; raw color |
| #000000 | 185 | Label Color/Light/Primary; raw color |
| #6F6F70 | 81 | Raw color |
| #15451F | 65 | Raw color |
| #9DAD88 | 65 | Raw color |
| #FFC800 | 51 | Raw color |
| #00A47D | 42 | Raw color |
| #9747FF | 23 | Raw color |
| #1899D6 | 20 | Raw color; Button fill |
| #C9C7C7 | 20 | Raw color |
| #D1EBF7 | 20 | Raw color |
| #6195D3 | 16 | Raw color |
| #456B64 | 12 | Raw color |
| #F8FCFF | 12 | Raw color |
| #9069CD | 9 | Raw color |
| #D84F9E | 9 | Raw color; Special Task stroke |
| #F3AD6D | 9 | Raw color |
| #FFEF8F | 9 | Raw color |
| #AC016A | 8 | Raw color |
| #4B4B4C | 7 | Raw color |
| #636366 | 6 | Default/SystemGray/02/Dark |
| #A568CC | — | Section Header fill; component usage |
| #E5E5E5 | — | Record Audio and Word fill; component usage |
| #DDF4FF | — | Bottom Nav Button fill |
| #63C9F9 | — | Bottom Nav Button stroke |
| #FF4B4B | — | Flag fill |
| #FFE5F4 | — | Special Task fill |

- Use #FFFFFF for dark-primary labels and white component surfaces.
- Use #000000 for light-primary labels and black utility elements.
- Use #636366 for system-gray text or controls where specified.
- Do not infer semantic meanings for colors without a component or token assignment.

## Type scale

### Named typography tokens

| Token | Font | Weight | Size | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Header 1 | DIN 2014 Rounded VF | Bold 700 | 31px | auto | 1.24px |
| Header | DIN 2014 Rounded VF | Bold 700 | 26px | auto | -0.52px |
| Primary Title | DIN 2014 Rounded VF | Bold 700 | 22px | auto | -0.44px |
| Title2 / Regular | SF Pro Display | Regular 400 | 22px | 28px | 0.35px |
| Goal Title | DIN 2014 Rounded VF | Bold 700 | 21px | 23px | -0.1px |
| Primary | DIN 2014 Rounded VF | Regular 400 | 20px | auto | 0.6px |
| Primary Bold | DIN 2014 Rounded VF | Bold 700 | 20px | auto | 0.6px |
| Subtext | DIN 2014 Rounded VF | Regular 400 | 18px | auto | -0.18px |
| Body/Regular | SF Pro Text | Regular 400 | 17px | 22px | -0.41px |
| Linked Text | DIN 2014 Rounded VF | ExtraBold 900 | 17px | auto | 0px |
| Default/Regular/Callout | SF Pro Text | Regular 400 | 16px | 21px | -0.32px |
| Button Text | DIN 2014 Rounded VF | Bold 700 | 16px | auto | -0.32px |
| Small Bold | DIN 2014 Rounded VF | Bold 700 | 16px | auto | -0.32px |
| Subtext 2 | DIN 2014 Rounded VF | Regular 400 | 16px | auto | -0.16px |
| XS Bold | DIN 2014 Rounded VF | ExtraBold 900 | 13px | auto | 0px |

### Usage priority

- Primary: 357 uses.
- Label Color/Dark/Primary: 102 uses.
- Button Text: 87 uses.
- Title2 / Regular: 78 uses.
- Goal Title: 65 uses.
- Primary Bold: 60 uses.
- Small Bold: 54 uses.
- Primary Title: 52 uses.
- Header: 28 uses.
- Subtext: 28 uses.
- Subtext 2: 24 uses.
- Default/Regular/Callout: 12 uses.
- XS Bold: 10 uses.
- Body/Regular: 9 uses.
- Linked Text: 8 uses.
- Default/SystemGray/02/Dark: 6 uses.
- Header 1: 5 uses.
- Label Color/Light/Primary: 3 uses.

### Raw typography sizes

The extraction also contains unstyled text at 11px, 12px, 16px, 18px, 22px, 39px, 50px, 90px, 110px, 122px, 200px, 300px, 404px, and 800px. These values are not named design tokens and should only be used when reproducing the extracted source artwork.

## Spacing scale

No spacing variables were found. Use only component-specific spacing values documented in the source:

- 0px padding or gap: several icon, ring, divider, level, and answer structures.
- 1px gap: Answer.
- 2px gap: Proficiency Bar.
- 3px gap: Question Word and Selected Language.
- 5px gap: Word Selection.
- 8px gap: Record Audio, Header, Chests, Level Icon, Icons, Header Counter.
- 9px gap: Day Tracker.
- 12px gap: Friend Streaks and Recorded Conversations.
- 14px gap: Start Tootltip, Day Tracker, and Selected Language-related structures.
- 18px padding: Tasks.
- 19px gap: Flag Selection.
- 21px gap: Tasks and Special Task.
- 22px gap: user journey steps and Frame 143.
- 24px gap: Context Bar in Design Challenge.
- 26px horizontal padding: Special Task.
- 31px gap: Bottom Nav.
- 51px horizontal padding: Day Tracker.
- 62px gap: Context Bar in Components.
- 100px gap: Frame 152.

Component padding values include:

- Header: 0px 16px 0px 16px.
- Context Bar: 11px 16px 11px 16px.
- Bottom Nav: 8px 16px 50px 16px.
- Record Audio: 0px.
- Component 1: 14px 15px 11px 15px.
- Tasks: 18px on all sides.
- Start Tootltip: 15px 13px 15px 13px.
- Special Task: 22px 26px 22px 26px.
- Recorded Conversations: 16px 15px 16px 15px.
- Flag Selection: 13px 16px 13px 16px.

## Radius scale

Documented radius values:

- 8px: Bottom Nav Button.
- 10px: Special Task.
- 11px: Flag.
- 13px: Record Audio, Word, Button, Section Header.
- 14px: Component 1, Friend Streaks, Recorded Conversations.
- 16px: Control Bar.
- 23px: Floating Island.
- 55px: Phone.
- 64px: Progress Bar.
- 100px: decorative level icon element.

## Elevation & effects

- No local effect styles were found.
- No local motion tokens were found.
- No local grid styles were found.

## Components

Only use the extracted component families and their documented dimensions, fills, strokes, typography, and variants.

- **Record Audio** — 398x88px; 13px radius; fill #E5E5E5; Button Text; Selected: False/True.
- **Proficiency Bar** — 30x22px; 2px gap; variants 0/1/2/3/4.
- **Component 1** — 189x68px; 14px radius; 14px 15px 11px 15px padding; 8px gap; #E5E5E5 2px stroke; Subtext 2 and Small Bold; four property variants.
- **Progress Ring** — 89x84px; fill #FFFFFF; progress 0/5, 1/5, 4/5.
- **Question** — 430x190px; Primary; type “Translate the Sentence”; Answered: False/True.
- **Question Word** — 45x27px; 3px gap; Primary; New: False/True.
- **Header** — 430x58px; 0px 16px 0px 16px padding; 8px gap; Header; Padding: False/True.
- **Word** — 74x46px; 13px radius; 0px 0px 2px 0px padding; 8px gap; fill #E5E5E5; Primary; In Answer: False/True.
- **Day Tracker** — 30x58px or 396x84px; 9px or 14px gap; Small Bold; Complete/Empty/Frozen.
- **Bottom Nav** — 430x106px; 8px 16px 50px 16px padding; 31px gap; fill #FFFFFF; Button Text; Action, Action Unavailable, Home, None, Success, Success With Translation.
- **Bottom Nav Button** — 40x40px; 8px radius; fill #DDF4FF; #63C9F9 2px stroke; Selected: False/True.
- **Context Bar** — 430x54px; 11px 16px 11px 16px padding; fill #FFFFFF; Headline/Lesson/Map/Popup/Prize. Design Challenge variant has 24px gap and #D9D9D9 1px stroke.
- **Volume** — 12x19.5px; Muted: False/True.
- **Chests** — 36x33px; Bronze/Gold/Silver; Open: False/True.
- **Progress Bar** — 293x19px; 64px radius; fill #E5E5E5; progress 0%, 5%, 50%, 95%, 100%; With Text: False/True.
- **Button** — 366x48px; 13px radius; fill #1899D6; Button Text; Primary/Secondary; Active: False/True; Icon: False/True.
- **Selected Language** — 86x96px; 3px gap; Primary Title; Selected/Unselected.
- **Icons** — 22x22px base size; icon variants include Add Profile, Back, Bell, Check, Chest, Close, Duo Pro, Face, Flag, Gem, Heart, House, Invite, Lightning, Microphone, Monthly Challenge, More, Share, Shiny Gold Chest, Streak, Target, Timer, Trash, Trophy, Volume, and Weights; sizes Large/Medium/Small/XS.
- **Flag** — 71x54px; 11px radius; fill #FF4B4B; French/German/Math/Music/New/Spanish; Big/Small/XS.
- **Level** — 71x65px; Complete/Gold/Next/Selected/Unavailable.
- **Level Icon** — 42x31.5px; Book/Headphones/Microphone/Star/Video/Weights; Available: False/True.
- **Check** — 30x30px; Empty/Filled/Iced.
- **Tasks** — 398x125px; 18px padding; 21px gap; Button Text and Goal Title; Completed: False/True; Bottom/Middle/Solo/Top.
- **Start Tootltip** — 341x146px; 15px 13px 15px 13px padding; 14px gap; Button Text, Subtext, Goal Title.
- **Word Selection** — 430x97px; 5px gap; Primary.
- **Answer** — 399x167px; 1px gap; Primary.
- **Divider** — 233x0px; fill #FFFFFF.
- **Friend Streaks** — 395x133px; 14px radius; 16px 15px 28px 15px padding; 12px gap; #E5E5E5 2px stroke; Goal Title.
- **Tooltip** — 430x2px.
- **Special Task** — 414x102px; 10px radius; 22px 26px 22px 26px padding; 21px gap; fill #FFE5F4; #D84F9E 2px stroke; Small Bold and Goal Title.
- **Header Counter** — 57x32px; 8px gap; DIN 2014 Rounded VF Bold 16px.
- **Flag Selection** — 430x122px; 13px 16px 13px 16px padding; 19px gap; fill #FFFFFF; Primary Title.
- **Section Header** — 398x79px; 13px radius; fill #A568CC; Button Text and Goal Title.
- **Phone** — 430x932px; 55px radius; fill #FFFFFF.
- **Trip Icon** — 32x19.76px.
- **Frame 143** — 4471x394px; 22px gap; DIN 2014 Rounded VF Regular 110px and Bold 200px.
- **Frame 152** — 4675x932px; 100px gap; DIN 2014 Rounded VF Regular 110px and Bold 200px.
- **user journey steps** — 1400x1391px; 22px gap; DIN 2014 Rounded VF Regular 110px and Bold 200px.
- **Recorded Conversations** — 395x82px; 14px radius; 16px 15px 16px 15px padding; 12px gap; #E5E5E5 2px stroke; Subtext and Goal Title.
- **Translate Icon** — 34x28px; fill #FFFFFF; DIN 2014 Rounded VF Bold at 8px, 7px, and 6px.

## Screen patterns

- **Cover screen** — 1920x1080px composition with a green background in the source extraction, a large white title, decorative artwork, and a 430x932px lesson-track phone frame. The phone frame contains a Context Bar, Header Counters, Section Header, Level path, Bottom Nav, Start Tootltip, and phone controls.
- **Instructions screen** — 1920x1080px composition with a large white “Instructions” heading and explanatory text using DIN 2014 Rounded VF Bold at 50px.
- **Lesson-track phone pattern** — Use the 430px-wide Phone container with a Context Bar at the top, progress or section content in the main area, and Bottom Nav at the bottom.
- **Lesson interaction pattern** — Combine Question, Question Word, Word Selection, Answer, Button, Volume, and Progress Bar or Progress Ring. Use the documented answered, selected, active, and progress variants.
- **Progression pattern** — Combine Section Header, Level, Level Icon, Check, Day Tracker, Tasks, Chests, and Proficiency Bar to show lesson, level, daily, and reward progress.
- **Selection pattern** — Use Flag Selection and Selected Language for language choice, with Flag and Icons for visual identification.
- **Social and special-content pattern** — Use Friend Streaks, Recorded Conversations, Special Task, Tooltip, and Start Tootltip for secondary actions and highlighted tasks.

## Notes for implementers

- Prefer named typography tokens over unstyled raw typography.
- Use the usage-ranked styles first: Primary, Label Color/Dark/Primary, Button Text, Title2 / Regular, Goal Title, Primary Bold, Small Bold, and Primary Title.
- Preserve the documented component dimensions when implementing the 430px phone layouts.
- Treat every listed component variant as a state that must be represented in the UI model.
- Do not introduce spacing, radius, motion, grid, or effect values not present in this document.
- Use only the documented palette values and component assignments.
- The extraction contains raw artwork colors and typography values outside the named token system; do not use those values for new UI unless reproducing the source artwork exactly.
