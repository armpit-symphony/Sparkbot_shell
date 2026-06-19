# Local AI Setup Overview

Sparkbot Shell shows the planned Local AI setup shape. The Settings route can run explicit localhost/loopback endpoint reachability checks, but it does not send prompts, run model generation, or store credentials.

## Previewed Local AI Options

- Ollama.
- LM Studio.
- llama.cpp / llama-server.
- OpenAI-compatible local endpoints.
- Custom local endpoints.

## What The Shell Stores

The preview stores labels, model IDs, setup status, local runtime labels, and reachability-check results in local component state only. It does not store credentials. Endpoint checks are blocked unless the target resolves to localhost or loopback.

## Setup Status Labels

- `configured preview`: sample state only, not generation QA.
- `setup needed`: runtime setup is not connected.
- `running`: localhost/loopback endpoint responded to an operator-triggered reachability check.
- `not detected`: localhost/loopback endpoint responded with a non-OK status.
- `check failed`: localhost/loopback check failed or the target was not allowed.
- `disabled`: not enabled in the preview.

## Future Runtime Requirements

Before Local AI can be marked live, a runtime layer should add governed model-generation calls, credential boundaries for protected endpoints, prompt/data redaction, audit evidence, and tests against at least one local runtime.
