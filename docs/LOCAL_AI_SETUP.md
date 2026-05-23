# Local AI Setup Overview

Sparkbot Shell shows the planned Local AI setup shape. It does not call local model runtimes yet.

## Previewed Local AI Options

- Ollama.
- LM Studio.
- llama.cpp / llama-server.
- OpenAI-compatible local endpoints.
- Custom local endpoints.

## What The Shell Stores

The preview stores labels, model IDs, setup status, and local runtime labels in local component state only. It does not store credentials or check whether an endpoint is reachable.

## Setup Status Labels

- `configured preview`: sample state only, not live QA.
- `setup needed`: runtime setup is not connected.
- `unreachable`: example status for a future endpoint check.
- `disabled`: not enabled in the preview.

## Future Runtime Requirements

Before Local AI can be marked live, a runtime layer should add explicit endpoint checks, user-visible error states, credential boundaries for protected endpoints, and tests against at least one local runtime.
