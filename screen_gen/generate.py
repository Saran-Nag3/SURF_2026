"""Call Azure OpenAI and parse the structured screen list."""
from __future__ import annotations

import json
import re

from openai import AzureOpenAI, BadRequestError

import config
from prompt import system_prompt, user_message
from config import CompanyPlan

_client: AzureOpenAI | None = None


def _client_singleton() -> AzureOpenAI:
    global _client
    if _client is None:
        _client = AzureOpenAI(
            azure_endpoint=config.AZURE_ENDPOINT,
            api_key=config.AZURE_API_KEY,
            api_version=config.AZURE_API_VERSION,
        )
    return _client


def _coerce_json(text: str) -> dict:
    """Tolerate stray prose or ```json fences around the JSON object."""
    text = text.strip()
    text = re.sub(r"^```(?:json)?", "", text).strip()
    text = re.sub(r"```$", "", text).strip()
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        start, end = text.find("{"), text.rfind("}")
        if start != -1 and end != -1 and end > start:
            return json.loads(text[start : end + 1])
        raise


def _create(client: AzureOpenAI, **kw):
    """Call chat completions, stripping/renaming params a model rejects.

    GPT-4o / GPT-4.1 take the defaults as-is. Reasoning models (o-series, GPT-5.x)
    reject `temperature`, want `max_completion_tokens` instead of `max_tokens`, and
    may not accept `reasoning_effort` or `response_format`. We retry, fixing one
    offending param per pass.
    """
    for _ in range(5):
        try:
            return client.chat.completions.create(**kw)
        except BadRequestError as e:
            msg = str(e).lower()
            if "max_tokens" in msg and "max_tokens" in kw:
                kw["max_completion_tokens"] = kw.pop("max_tokens")
                continue
            if "temperature" in msg and "temperature" in kw:
                kw.pop("temperature")
                continue
            if "reasoning_effort" in msg and "reasoning_effort" in kw:
                kw.pop("reasoning_effort")
                continue
            if "response_format" in msg and "response_format" in kw:
                kw.pop("response_format")  # prompt still demands JSON; we parse defensively
                continue
            raise
    return client.chat.completions.create(**kw)


def generate_screens(plan: CompanyPlan, design_md: str) -> dict:
    """Return the parsed dict: company, platform, paradigm_detected, self_check, screens[]."""
    if len(design_md) > config.MAX_INPUT_CHARS:
        print(
            f"  ! {plan.company}: Design.md is {len(design_md)} chars; "
            f"truncating to {config.MAX_INPUT_CHARS} (raise MAX_INPUT_CHARS or pre-summarize)."
        )
        design_md = design_md[: config.MAX_INPUT_CHARS]

    resp = _create(
        _client_singleton(),
        model=config.AZURE_DEPLOYMENT,  # Azure: this is the DEPLOYMENT name
        messages=[
            {"role": "system", "content": system_prompt(plan)},
            {"role": "user", "content": user_message(plan.company, design_md)},
        ],
        temperature=0.7,
        max_tokens=config.MAX_OUTPUT_TOKENS,
        reasoning_effort="low",  # spend budget on screens, not deliberation (dropped if unsupported)
        response_format={"type": "json_object"},
    )
    choice = resp.choices[0]
    if getattr(choice, "finish_reason", None) == "length":
        raise ValueError(
            f"model output hit the token cap (MAX_OUTPUT_TOKENS={config.MAX_OUTPUT_TOKENS}) "
            f"and was cut off before finishing the JSON. Raise MAX_OUTPUT_TOKENS in .env, "
            f"or lower the screen count."
        )
    data = _coerce_json(choice.message.content or "")
    screens = data.get("screens", [])
    if not isinstance(screens, list) or not screens:
        raise ValueError(f"Model returned no screens for {plan.company}")
    # Keep only the planned count, in case the model over/under-produces.
    data["screens"] = screens[: plan.n_screens]
    return data
