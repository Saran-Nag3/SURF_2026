---
name: microsoft-app-icons-community
source: Microsoft App Icons (Community)
kind: design-system-context
---

# microsoft - Design System

## Overview

Microsoft App Icons is an icon toolkit containing Microsoft product and Copilot icon families. The source includes three Figma pages: Hello 👋, Icons, and Archive. Components are primarily square app-icon assets, with a small set of monochrome variants and composite layouts.

## Design language

- Product-icon-focused visual language with colorful layered shapes, gradients, and decorative compositions.
- Use square icon containers as the primary asset format.
- Common icon sizes are `176x176px`, `186x186px`, and `200x200px`.
- Some icons use white fills for monochrome variants.
- Display typography uses Playfair Display Black; supporting text uses Roboto.
- Changelog cards use rounded corners, white surfaces, and grey containers.
- Decorative compositions and icon showcases are used in thumbnail and landing-page layouts.

## Color palette

Ranked by reported usage where available:

| Token / color | Value | Usage |
|---|---|---:|
| Raw purple | `#A598F7` | 11,258 |
| White | `#FFFFFF` | 81 |
| Black | `#000000` | 103 |
| White token | `#E5E5E5` | 20 |
| DeepGrey | `#8A8A8A` | 10 |
| Grey | `#E5E5E5` | 3 |
| Engage Gradient | `#3697F9` → `#0A4EAA` | 2 |
| Black with 40% opacity | `#00000066` | — |
| Black with 13% opacity | `#00000021` | — |
| Black with 10% opacity | `#0000001A` | — |

- `Engage Gradient`: linear gradient, `#3697F9` at `0%` to `#0A4EAA` at `78%`.
- The source names both `Grey` and `White` tokens with `#E5E5E5`; preserve the extracted values rather than assuming semantic correction.

## Type scale

| Size | Font | Weight / style | Observed usage |
|---:|---|---|---:|
| `96.5px` | Playfair Display | Black | 11 |
| `48px` | Roboto | Bold / Black | Changelog and display headings |
| `28px` | Roboto | Regular | Supporting heading text |
| `27px` | Roboto | Bold | Name display |
| `24px` | Roboto | Regular | 8; changelog headings |
| `22px` | Roboto | Regular | 6; supporting text |
| `20px` | Roboto | Medium | 8; metadata |

## Spacing scale

_None found in source._

Observed layout spacing values include:

- Changelog card horizontal padding: `24px`.
- Changelog release-list gap: `14px`.
- Changelog text-frame gap: `10px`.
- Thumbnail icon-row gap: `69.57px`.
- Azure AI Studio horizontal padding: `2.9px` on each side.
- Azure AI Studio gap: `4.83px`.

## Radius scale

Observed radii:

- `24px`: Changelog container, release cards, Keep in touch container, Thumbnail container.
- `47px`: Icons / Background container.
- `0px`: Several icon and thumbnail groups.

## Elevation & effects

- Drop Shadow: offset `0 -5px`, blur `9px`, color `#00000066`.
- Level 8:
  - Drop shadow offset `0 3.2px`, blur `7.2px`, color `#00000021`.
  - Drop shadow offset `0 0.6px`, blur `1.8px`, color `#0000001A`.

## Components

All component families extracted from the source:

### Data, Azure, and Fabric

- Data Activator — `186x186px`
- Synapse Real Time Analytics — `186x186px`
- Synapse Data Warehouse — `186x186px`
- Synapse Data Engineering — `186x186px`
- Data Factory — `186x186px`
- Synapse Data — `186x186px`
- OneLake — `186x186px`
- Fabric — `186x186px`
- Azure — `176x176px`
- Azure AI Studio — `200.3x200px`; horizontal layout; horizontal padding `6px` total (`0 6 0 6px`); gap `10px`; fixed width and height

### Microsoft 365 and productivity

- Clipchamp — `186x186px`
- Loop — `186x186px`
- Designer — `186x186px`
- Edge — `186x186px`
- New Outlook — `176x176.78px`
- Lists — `160x160px`; fill `#FFFFFF`
- Forms — `176x176px`
- To Do — `176x176px`
- Calendar — `176x176px`
- People — `176x176px`
- Sway — `176x176px`
- Project — `176x176px`
- Word — `200x182.22px`
- Excel — `200x182.22px`
- PowerPoint — `200x182.21px`
- OneNote — `200x182.22px`
- Outlook — `201.79x186.95px`
- Outlook_B&W — `186x186px`
- Teams — `200x196.01px`
- Teams_B&W — `200x196.01px`; fill `#FFFFFF`
- OneDrive — `200x195.95px`
- Microsoft 365 — `200x183.6px`
- Microsoft 366_B&W — `200x200px`; fill `#FFFFFF`
- Sharepoint — `200x183.6px`
- Planner — not included because it is not an allowed component family.

### Security, administration, and compliance

- Admin — `176x176px`
- Compliance — `176x176px`
- Entra — `176x176px`
- Purview — `176x176px`
- Priva — `176x176px`
- Copilot for Security — `200x200px`; fill `#FFFFFF`; stroke `#000000` at `1px`; Inter Bold `62px`

### Power Platform and Dynamics

The following families are all `200x200px` with fill `#FFFFFF`:

- AIBuilder_scalable
- PowerFx_scalable
- Dataverse_scalable
- PowerVirtualAgents_scalable
- PowerPages_scalable
- PowerBI_scalable
- PowerApps_scalable
- PowerAutomate_scalable
- PowerPlatform_scalable
- Dynamics365_scalable 1
- CustomerInsights_scalable
- CoreHR_scalable
- ConnectedStore_scalable
- Commerce_scalable
- BusinessCentral_scalable
- TalentOnboard_scalable
- TalentAttract_scalable
- Talent_scalable
- SustainabilityCalculator_scalable
- SupplyChainManagement_scalable
- SalesInsights_scalable
- Sales_scalable
- ProjectServiceAutomation_scalable
- ProjectOperations_scalable
- Product_Insights__scalable
- MarketInsights_scalable
- Marketing_scalable
- IntelligentOrderManagement_scalable (1)
- FraudProtection_scalable
- Finance+Operations_scalable
- Finance_scalable
- FieldService_scalable
- CustomerVoice_scalable
- CustomerServiceInsights_scalable
- CustomerService_scalable
- ImportTool_scalable
- Guides_scalable
- VoiceAssistant_scalable
- RemoteAssist_scalable
- ProductVisualize_scalable
- MRPortal_scalable
- Layout_scalable

### Copilot

The following families are `200x200px`:

- Copilot for Service
- Copilot for Finance
- Copilot for Sales
- Copilot in PowerPoint
- Copilot in Excel
- Copilot Outline in PowerPoint
- Copilot Outline in Excel
- Copilot Outline
- Copilot Outline in Word
- Microsoft 365 Copilot
- Copilot in Teams
- Copilot Studio

### Viva, Windows, and other services

- Syntex — `176x176.78px`
- Viva Glint — `200x200px`
- Viva Pulse — `200x200px`
- Viva Amplify — `200x200px`
- Viva Learning — `200x200px`
- Windows 11 — `200x200px`
- Windows 11_B&W — `200x200px`; fill `#FFFFFF`
- Bing — `200x200px`
- Viva Goals — `200x200px`
- Viva Insights — `200x200px`
- Viva Connections — `200x200px`
- Viva Suite — `200x200px`
- Skype — `200x200px`
- Stream — `200x200px`
- Viva Engage — `200x200px`
- Yammer — `176x176px`
- Tasks by Planner and To Do — `176x176.78px`
- Viva Sales — `200x200px`
- Viva Topics — `200x200px`

## Screen patterns

### Hello 👋 / Changelog

- Main frame: `988x1600px`.
- Container radius: `24px`.
- Container fill: `Grey`.
- Container stroke: `White`, `6px`.
- Centered release list: `828x1332px`, vertical gap `14px`.
- Release cards use horizontal padding `24px`, radius `24px`, and white surfaces.
- Release metadata uses Roboto Medium `20px` in DeepGrey.
- Release text uses Roboto Regular `24px` in Black.
- Heading “Changelog” uses Roboto Bold `48px`.

### Hello 👋 / Keep in touch

- Main frame: `1920x560px`.
- Container radius: `24px`.
- Container stroke: `White`, `6px`.
- Contact and social-link content uses Roboto.
- Social icons are `28x28px`.
- Supporting statement uses Roboto Regular `28px`.
- “Say hello!” uses Roboto Black `48px`.
- Decorative groups are used as background artwork with opacity `80%`.

### Hello 👋 / Thumbnail

- Main frame: `1920x960px`.
- Container radius: `24px`.
- Container stroke: `White`, `6px`.
- A title treatment uses Playfair Display Black `96.5px`.
- Icon showcase rows use centered alignment and a `69.57px` gap.
- Microsoft 365 and product icon instances are displayed in varied intrinsic dimensions.
- Decorative groups and large background artwork are layered behind the title and icon rows.

### Icons / Background

- Main frame: `3340x10082px`.
- Container radius: `47px`.
- Container fill: `#FFFFFF`.
- The page is a large icon-library background and showcase surface.

## Notes for implementers

- Treat the extracted component-family names as asset identifiers; do not redesign or substitute the icon artwork.
- Preserve the exact intrinsic dimensions where provided, especially non-square assets such as Word, Excel, PowerPoint, OneNote, Outlook, Microsoft 365, and Sharepoint.
- Use `#FFFFFF` for explicitly marked monochrome fills and `#000000` for the specified Copilot for Security stroke.
- No local variable collections, local text styles, spacing variables, radius variables, motion variables, or local grid styles were found.
- Do not infer additional spacing, radius, typography, or color tokens beyond the values listed here.
