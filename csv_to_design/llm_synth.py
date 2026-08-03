"""LLM authoring for Phase 2: raw extraction -> a clean, LLM-readable DESIGN.md.

Here the model AUTHORS the whole document (prose, organization, wording) from the
raw dump, tuned to be consumed by the downstream generation LLM. Two guardrails keep
it honest, because a design-system doc must be ground truth:

  1. It must produce EXACTLY the canonical sections it is given, so every company's
     DESIGN.md stays consistently shaped and machine-parseable.
  2. Hex values are validated against the source. If the model emits a color that is
     not in the extraction, it gets one corrective pass to fix it; anything residual
     is logged. (Sizes/families are supplied as allowed sets in the prompt.)

On any failure or missing config, the caller falls back to the deterministic path.

Uses Azure OpenAI chat completions. Credentials as plain variables below or via env.
"""
from __future__ import annotations

import json
import logging
import os
import re
import urllib.error
import urllib.request

log = logging.getLogger("synth.llm")

# --- config (edit here, or set the matching env vars) -----------------------
AZURE_OPENAI_ENDPOINT = os.getenv("AZURE_OPENAI_ENDPOINT", "https://wu-lab-east-us-2.openai.azure.com")
AZURE_OPENAI_KEY = os.getenv("AZURE_OPENAI_KEY", "")            # <-- paste your key here or export it
AZURE_OPENAI_DEPLOYMENT = os.getenv("AZURE_OPENAI_DEPLOYMENT", "gpt-5.4-mini")
AZURE_OPENAI_API_VERSION = os.getenv("AZURE_OPENAI_API_VERSION", "2024-10-21")

TIMEOUT = 120
# GPT-5/o-series count reasoning against this budget, so it must be generous or the
# model spends it all thinking and returns empty content. Override via env if needed.
MAX_TOKENS = int(os.getenv("AZURE_MAX_COMPLETION_TOKENS", "16000"))
SOURCE_CHAR_BUDGET = 24000   # cap raw dump sent to the model (structure tree can be huge)

HEX_RE = re.compile(r"#[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?")


class LLMUnavailable(RuntimeError):
    pass


def available() -> bool:
    return bool(AZURE_OPENAI_KEY and AZURE_OPENAI_ENDPOINT and AZURE_OPENAI_DEPLOYMENT)


def _post(url: str, payload: dict) -> tuple[str, str | None]:
    body = json.dumps(payload).encode()
    req = urllib.request.Request(
        url, data=body,
        headers={"api-key": AZURE_OPENAI_KEY, "content-type": "application/json"})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
        data = json.loads(r.read().decode())
    choice = (data.get("choices") or [{}])[0]
    content = (choice.get("message") or {}).get("content") or ""
    return content, choice.get("finish_reason")


def _chat(messages: list[dict], deployment: str) -> str:
    if not available():
        raise LLMUnavailable("Azure OpenAI key/endpoint/deployment not configured")
    url = (f"{AZURE_OPENAI_ENDPOINT.rstrip('/')}/openai/deployments/{deployment}"
           f"/chat/completions?api-version={AZURE_OPENAI_API_VERSION}")

    # Start with the newer GPT-5 / o-series shape (max_completion_tokens, default
    # temperature). If the deployment complains, adapt and retry; on any other 400
    # surface Azure's actual message instead of a bare "Bad Request".
    payload = {"messages": messages, "max_completion_tokens": MAX_TOKENS}
    for _ in range(4):
        try:
            content, finish = _post(url, payload)
        except urllib.error.HTTPError as e:
            detail = e.read().decode("utf-8", "replace")
            low = detail.lower()
            if e.code == 400 and "max_completion_tokens" in low and "max_tokens" not in payload:
                payload["max_tokens"] = payload.pop("max_completion_tokens", MAX_TOKENS)
                continue
            if e.code == 400 and "'max_tokens'" in low and "max_tokens" in payload:
                payload["max_completion_tokens"] = payload.pop("max_tokens", MAX_TOKENS)
                continue
            if e.code == 400 and "temperature" in low and "temperature" in payload:
                payload.pop("temperature", None)
                continue
            raise RuntimeError(f"Azure {e.code}: {detail[:700]}") from e
        # 200 OK: guard against empty output (reasoning ate the budget / content filter).
        if not content.strip():
            raise RuntimeError(
                f"empty completion (finish_reason={finish}). For GPT-5/o-series this "
                "usually means reasoning consumed the whole budget - raise "
                "AZURE_MAX_COMPLETION_TOKENS - or the response was content-filtered.")
        if finish == "length":
            log.warning("completion truncated (finish_reason=length); "
                        "consider a larger AZURE_MAX_COMPLETION_TOKENS")
        return content
    raise RuntimeError("Azure: could not find a compatible request shape")


# --- grounding --------------------------------------------------------------
def extract_grounding(files: list[dict]) -> dict:
    """Allowed values pulled from guidelines.json, used to catch fabrications."""
    hexes, families, sizes = set(), set(), set()
    for g in files:
        for key in ("colorTokens", "rawColors", "componentSpecs", "effectTokens",
                    "typographyTokens", "rawTypography", "gridTokens"):
            for line in g.get(key, []):
                hexes.update(h.upper() for h in HEX_RE.findall(line))
        families.update(f for f in g.get("componentFamilies", []) if f)
        for key in ("typographyTokens", "rawTypography", "spacingTokens",
                    "radiusTokens", "componentSpecs", "typographyHierarchy"):
            for line in g.get(key, []):
                sizes.update(re.findall(r"\d+(?:\.\d+)?px", line))
    return {"hexes": hexes, "families": sorted(families), "sizes": sorted(sizes)}


def _ungrounded_hexes(md: str, grounding: dict) -> list[str]:
    found = {h.upper() for h in HEX_RE.findall(md)}
    return sorted(found - grounding["hexes"])


def _system_prompt(company: str, sections: list[str], grounding: dict) -> str:
    return (
        "You convert a raw Figma design-system extraction into a clean, precise "
        "DESIGN.md whose reader is ANOTHER LLM that will generate on-brand UI from it. "
        "Optimize for that reader: unambiguous, well-organized, no filler, every token "
        "concrete.\n\n"
        "HARD RULES:\n"
        "- Use ONLY values present in the source. Never invent a hex, size, or component.\n"
        f"- Allowed hex colors: {', '.join(sorted(grounding['hexes'])) or 'none'}.\n"
        f"- Allowed component families: {', '.join(grounding['families']) or 'none'}.\n"
        "- De-duplicate near-identical colors and rank by usage when the source shows counts.\n"
        "- Do NOT reproduce the raw node-by-node structure tree; summarize screens briefly.\n\n"
        "OUTPUT FORMAT (exactly this, always):\n"
        "1. YAML frontmatter with keys: name, source, kind: design-system-context.\n"
        f"2. Title line: `# {company} - Design System`.\n"
        "3. These H2 sections, in this order, always present (write `_None found in source._` "
        f"if a section has no data): {', '.join('## ' + s for s in sections)}.\n"
        "Return ONLY the markdown document."
    )


def author(raw_dump: str, files: list[dict], company: str, sections: list[str],
           *, deployment: str | None = None) -> str:
    """Author a full DESIGN.md from the raw dump. Raises on transport failure."""
    deployment = deployment or AZURE_OPENAI_DEPLOYMENT
    grounding = extract_grounding(files)
    source = raw_dump[:SOURCE_CHAR_BUDGET]
    if len(raw_dump) > SOURCE_CHAR_BUDGET:
        source += "\n\n[...raw dump truncated for length...]"

    messages = [
        {"role": "system", "content": _system_prompt(company, sections, grounding)},
        {"role": "user", "content": "RAW EXTRACTION:\n\n" + source},
    ]
    md = _chat(messages, deployment)

    violations = _ungrounded_hexes(md, grounding)
    if violations:
        log.info("%s: correcting %d ungrounded hex(es): %s",
                 company, len(violations), ", ".join(violations[:6]))
        messages += [
            {"role": "assistant", "content": md},
            {"role": "user", "content":
                "These hex values are NOT in the source and must be removed or replaced "
                "with real ones from the allowed list: " + ", ".join(violations)
                + ". Return the corrected full document only."},
        ]
        md = _chat(messages, deployment)
        residual = _ungrounded_hexes(md, grounding)
        if residual:
            log.warning("%s: %d ungrounded hex(es) remain after correction: %s",
                        company, len(residual), ", ".join(residual[:6]))

    return md.strip() + "\n"
