"""Quick check that your .env reaches Azure and that the deployment name is right.

Run:  python check_azure.py

It makes one tiny call and tells you which of endpoint / key / deployment is the
problem, so you can confirm the AZURE_OPENAI_DEPLOYMENT value without portal access.
"""
from __future__ import annotations

import config
from openai import (
    AzureOpenAI,
    NotFoundError,
    AuthenticationError,
    APIConnectionError,
    BadRequestError,
)


def main() -> None:
    key = config.AZURE_API_KEY
    print("endpoint   :", config.AZURE_ENDPOINT or "(EMPTY)")
    print("deployment :", config.AZURE_DEPLOYMENT or "(EMPTY)")
    print("api_version:", config.AZURE_API_VERSION)
    print("api_key    :", (key[:4] + "…" + key[-2:]) if key else "(EMPTY)")
    print("-" * 40)

    if not (config.AZURE_ENDPOINT and key and config.AZURE_DEPLOYMENT):
        print("Fill in the empty field(s) in .env first.")
        return

    client = AzureOpenAI(
        azure_endpoint=config.AZURE_ENDPOINT,
        api_key=key,
        api_version=config.AZURE_API_VERSION,
    )
    try:
        r = client.chat.completions.create(
            model=config.AZURE_DEPLOYMENT,
            messages=[{"role": "user", "content": "ping"}],
            max_tokens=5,
        )
        reply = (r.choices[0].message.content or "").strip()
        print(f"SUCCESS — deployment '{config.AZURE_DEPLOYMENT}' works. Reply: {reply[:40]!r}")
    except NotFoundError:
        print(
            f"DEPLOYMENT NOT FOUND — endpoint + key reach Azure, but "
            f"'{config.AZURE_DEPLOYMENT}' is not a deployment on this resource.\n"
            f"Try the model name (e.g. gpt-4o, gpt-4.1) or ask the shared-group owner "
            f"for the exact deployment name."
        )
    except AuthenticationError:
        print("AUTH FAILED — the API key (or endpoint) is wrong for this resource.")
    except APIConnectionError as e:
        print(f"CONNECTION FAILED — check the endpoint URL. ({e})")
    except BadRequestError as e:
        # e.g. a reasoning/GPT-5 model rejecting max_tokens. That still proves the
        # deployment EXISTS and auth works — the real run handles this param difference.
        print(
            "Deployment EXISTS and auth works (the model just rejected a test param, "
            "which the real run adapts to automatically):\n  "
            + str(e)[:200]
        )


if __name__ == "__main__":
    main()
