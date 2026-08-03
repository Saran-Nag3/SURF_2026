# Design Value Scraper

A Figma plugin that walks the current selection (or page) and exports a
**deduplicated catalog of the raw values that exist** in the design as a CSV.

It is built for one job: producing independent, mechanical evidence you can
check a `Design.md` against. To keep that evidence trustworthy it follows three
hard rules:

1. **Existence, not frequency.** Each distinct value is recorded exactly once.
   The CSV never tells you how many times a value is used — only that it is
   present.
2. **Raw, not inferred.** Every row is a direct read of a stored Figma
   property. Nothing is computed, clustered, named, or guessed. There is no
   sibling-spacing math, no unit normalization, no "primary color" judgment.
3. **Offline, no model.** The manifest declares no network access. Nothing
   leaves Figma; no LLM is involved at any step.

The one transform applied is encoding 0–1 RGB floats as `#RRGGBB` hex and
trimming IEEE floating-point dust (e.g. `7.9999999` → `8`). Both are
deterministic and lossless to 8-bit / 4-decimal precision.

## Install (development)

1. Build the JS the plugin actually loads:
   ```
   npm install
   npm run build
   ```
   (A prebuilt `code.js` is already included, so you can skip this if you only
   want to run it.)
2. In the Figma desktop app: **Plugins → Development → Import plugin from
   manifest…** and select `manifest.json`.
3. Run it from **Plugins → Development → Design Value Scraper**.

## Use

Select one or more frames (or pick "Entire page"), click **Scrape & export
CSV**, and the file downloads automatically. A per-category count of distinct
values is shown in the panel — that is a count of distinct *values*, not usage
frequency.

## CSV schema

Seven columns; the seven together form the uniqueness key.

| Column      | Meaning                                                        |
|-------------|----------------------------------------------------------------|
| `category`  | General grouping (Color, Typography, Layout, …)                |
| `property`  | The exact Figma property the value came from                   |
| `value`     | The stored value, faithfully encoded                           |
| `value_type`| COLOR / FLOAT / INT / STRING / ENUM / BOOL / MIXED / NULL      |
| `unit`      | Figma's own unit: px / percent / deg / AUTO / (blank)          |
| `role`      | Where the value lives: fill / stroke / effect / text / (blank) |
| `token`     | Bound variable or style name, if any                           |

### Categories

- **Structure** — which node types exist.
- **Color** — every color anywhere (fills, gradient stops, strokes, shadows),
  with `role` naming the source. Solid opacity and gradient alpha are recorded
  as their own atomic rows.
- **Stroke** — stroke geometry only: weight, align, dash pattern, cap, join.
- **Radius** — corner radii (per-corner when they differ).
- **Effects** — shadow/blur type, radius, spread, offsets. Effect colors are
  filed under Color with `role = effect`.
- **OpacityBlend** — node opacity, blend mode, mask flag.
- **Layout** — auto-layout mode, item/counter spacing, padding, alignment,
  wrap, sizing. (This is the *only* spacing recorded — real stored gaps and
  padding, never inferred margins.)
- **Constraints** — horizontal/vertical pin behavior.
- **Dimensions** — width, height, rotation. (High-cardinality by nature.)
- **Typography** — font family, style, size, line height, letter spacing,
  case, decoration, alignment, paragraph spacing/indent. Mixed-style text is
  read per styled segment so every distinct value is captured.
- **Token** — the catalog of variable and style names actually referenced.

## Notes

- Resolving a bound-variable or style id to its name is a deterministic lookup
  of a stored fact, so it is allowed. If the host environment only exposes the
  async name-lookup APIs, resolution degrades silently: the raw value is still
  recorded, just without the token name.
- Output is sorted by all columns with a natural (numeric-aware) comparison, so
  the same file produces a stable, comparable CSV every run.

## Files

See the source comments in `code.ts` and `ui.html`. In short: `manifest.json`
declares the plugin and its zero-network policy; `code.ts` (compiled to
`code.js`) does the traversal and extraction in Figma's sandbox; `ui.html` is
the panel that assembles the CSV and triggers the download.
