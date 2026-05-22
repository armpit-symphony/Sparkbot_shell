# Layer 2 Chat And Model Config Status

Updated: 2026-05-22

Branch: `public-release-layer-2-chat-model-config-shell`

## What Was Added

- Public-safe frontend-only shell types in `src/types/shell.ts`.
- Demo-only model-seat and chat state in `src/data/demoShellState.ts`.
- Interactive Main Chat shell with local transcript state, selected model-seat dropdown, setup-needed warnings, and context chips.
- Command Center model config shell with editable model-seat forms, guardrail profile labels, and local React state updates.
- Local AI setup shell covering Ollama, LM Studio, llama.cpp / llama-server, OpenAI-compatible local endpoints, and custom local endpoints.
- Shared public-safe components for status badges, setup notices, model-seat cards, model-seat editor, chat shell, and local AI setup.

## Demo/Local State Only

Layer 2 state lives only in React component state. It is not saved to localStorage, sent to a backend, written to files, stored in a database, synced to connectors, or rolled into memory.

Sample model seats cover Codex/OpenAI, Claude/Anthropic, Grok/xAI, Local AI/Ollama, and an OpenAI-compatible local endpoint. The sample data uses status examples such as `configured`, `setup_needed`, `disabled`, and `unreachable`.

## Credential Boundary

No API key, password, PIN, token, webhook, cookie, OAuth value, or provider secret field exists in Layer 2.

Model-seat forms include `authMode` as a label only. The UI states that credentials are not stored in this shell layer and that backend/Vault storage arrives in a later runtime layer.

## Runtime Features Intentionally Not Included

- Real chat backend.
- Real model/provider calls.
- Real Local AI calls or health checks.
- Real Vault/credential storage.
- Real Round Table execution.
- Real Task Guardian execution.
- Real connector sends.
- Real terminal/browser execution.
- Real robotics/IoT control.
- Private Robo/LIMA bridge.
- LIMA AI OS, Arc Bot, LIMA Office, or LIMA IT wiring.
- Guardian Suite internals.

## Public/Private Boundary

Layer 2 uses only public product labels and shell concepts. It does not import Sparkbot R&D backend code, connector code, Guardian internals, private Robo/LIMA code, package artifacts, tests, workflows, private deployment paths, or internal R&D docs.

## Validation Results

Layer 2 validation completed for this branch:

- `git status --short --branch`: reviewed before commit.
- `git diff --check`: passed with normal Windows LF-to-CRLF notices only.
- `npm run build`: passed.
- `npm run lint`: not configured.
- Local Markdown link check: passed.
- `markdown-link-check`: not installed.
- Dev-server smoke: `http://127.0.0.1:5173` returned HTTP 200.
- Source-copy check: no `backend/`, `src-tauri/`, connector services, Guardian internals, scheduler, Robo bridge, package artifacts, tests, or workflows were added.
- Targeted high-risk secret/private-path scan: no live secrets or private paths found.
- Broader private-term scan: matches are intentional boundary/planning references in docs and public no-go copy.

## Next Layer Recommendation

Layer 3 should refine Workstation + Command Center shell integration:

- Show model-seat shell state across Workstation panels.
- Add static Specialty Wing and Invite Wing planning surfaces.
- Keep all runtime behavior disabled.
- Do not add backend calls, credential persistence, connector sends, Local AI calls, or Guardian internals.
