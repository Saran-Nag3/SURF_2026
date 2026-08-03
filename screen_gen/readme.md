# screengen — design-spec → realistic phone screenshots

Reads each `Design.md` (Figma token/component dump) in a folder and, per company,
generates 3–5 **realistic mobile app screens** as PNGs — believable enough to sit
in a real-vs-generated dataset next to actual phone screenshots.

Per company it deterministically picks **one platform (iOS or Android) and one
device size** and holds them constant across that company's screens, so the whole
set mixes both platforms the way real captures do. Realism is "light but tidy":
a real status bar, a mid-scroll crop, no ad-banner clutter.

The OS chrome (status bar, notch/Dynamic Island, gesture pill) is rendered by the
**harness**, not the model — those are the elements that betray a fake when a model
improvises them. The model only produces the app content inside the viewport.

## How it works

```
Design.md ──► Azure OpenAI (chat model) ──► JSON: {screens:[{content_html}…]}
                                                  │
                            device shell (status bar + home indicator)
                                                  │
                                  Playwright (headless Chromium) ──► screen_N.png
```

## 1. Azure setup

You said you have Azure OpenAI access through a shared group. In the Azure portal /
AI Foundry:

1. **Create a deployment** of a chat model (GPT-4o / GPT-4.1 recommended). The
   *deployment name* you choose is what you were calling the "Target UI" — it's the
   value for `AZURE_OPENAI_DEPLOYMENT`, and it is **not** the same as the model
   family name.
2. **Get the key + endpoint** from the resource's *Keys and Endpoint* pane. With a
   shared-group resource you may need to mint a new key (key 1 or key 2 both work).
3. Note the **API version** (`2024-10-21` is a safe default).

## 2. Install

```bash
pip install -r requirements.txt
python -m playwright install chromium      # one-time browser download
```

## 3. Configure

```bash
cp .env.example .env
# edit .env: AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, AZURE_OPENAI_DEPLOYMENT
```

## 4. Lay out your specs

Default discovery is `**/Design.md`, one folder per company; the **folder name is
the company name**:

```
designs/
  Acme/Design.md
  Globex/Design.md
  Initech/Design.md
```

Different layout? Set `DESIGN_GLOB` in `.env` (e.g. `*.md`).

## 5. Run

```bash
python main.py                 # full run (calls Azure)
python main.py --dry-run       # render chrome with placeholder content, NO Azure calls
python main.py --only Acme     # restrict to companies whose name contains "Acme"
```

Run `--dry-run` first: it exercises discovery + the device shells + rendering
without spending any tokens, so you can confirm the frames look right.

## Output

```
output/Acme/
  screen_1_feed.png        # 1082×2402-ish PNG at the device's real pixel density
  screen_1_feed.html       # the content fragment, so you can tweak + re-render free
  screen_2_detail.png
  …
  manifest.json            # labels: platform, device, viewport/output px, paradigm, per-screen kinds
```

`manifest.json` gives you ready-made labels for the study (platform, device,
detected source paradigm, screen kinds).

## Knobs (`.env`)

| Var | Meaning |
|---|---|
| `SEED` | Global seed; changes the platform/device/clock draw per company. Same seed ⇒ reproducible set. |
| `MAX_INPUT_CHARS` | Truncates oversized Design.md before sending (guards context window / cost). Raise if your specs are large and your deployment has the context for it. |
| `DESIGN_GLOB` | How specs are found under `DESIGN_DIR`. |

Screen count (3–5) is drawn per company from `SEED`.

## Tuning

- **Devices / platform mix** — edit the `DEVICES` list in `config.py` (add phones,
  drop a platform, change DPR).
- **Realism level** — the "light but tidy" rules live in `prompt.py` (STEP 6). Want
  the messier look (ads, heavier mid-scroll crops)? Loosen them there.
- **Chrome** — status bar glyphs, notch/island, clock/battery logic are in
  `device_shell.py` and `config.py` (`plan_for_company`).

## Fidelity notes (for the discriminator study)

- **Fonts are the biggest tell.** Chromium uses the OS's fonts. For the closest
  match to real captures, install **SF Pro** (iOS look) and **Roboto** (Android
  look) on the rendering machine; otherwise the browser falls back to a generic
  sans and the text won't match real iOS/Android rendering.
- This is **headless web rendering**, not native UIKit/Material. Even with the
  right fonts there can be subtle antialiasing/metric differences from a real
  device capture. That's the inherent ceiling of the HTML route (the tradeoff you
  accepted to get both platforms from one pipeline).
- The harness clips at the device's logical size × DPR. If your **real** control
  screenshots were captured at a different density or with a different status-bar
  state, match those by editing the relevant `Device` preset so fakes and reals
  share capture conditions.
