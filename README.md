# Sparkbot Shell

Sparkbot Shell is the MIT-licensed public staging repo for a self-hosted AI workstation shell preview. Its hook is simple: Round Table meetings for your AI agents.

The public product model is a local-first workstation for agent work, model routing, model seats, Local AI providers, Round Table meetings, shared memory/context, Task Guardian utility automations, connectors, and user-owned guardrails.

## Current Status

This repo is in public-release staging. The current shell is a Vite + React + TypeScript static preview with a coherent product demo flow: Workstation floor, Round Table meeting storyline, model/agent setup shells, Files/Memory/Tasks fixtures, Demo Room context, Guardian posture preview, Robo teaser, and LIMA-ready contract-layer notes.
Wave 1 candidate #1 (Workstation visual refinement) is complete as a manual static adaptation from R&D reference concepts only.
Wave 1 candidate #2 (Round Table visual refinement) is complete as a manual static adaptation from R&D reference concepts only.
Wave 1 candidate #3 (Model stack + Invite Wing visual refinement) is complete as a manual static adaptation from R&D reference concepts only.
Wave 1 candidate #4 (Docs/info visual refinement) is complete as a manual static adaptation from R&D + shell docs concepts only.

It has no backend runtime, no live model calls, no credential persistence, no connector sends, no connector sessions, no PIN verification, no scheduler, no health collector, no memory/context runtime, and no robotics/IoT control.
It also includes a static `LIMA AI OS ready layer` panel that documents contract-first integration phases without bundling runtime wiring.

Public users should wait for approved Sparkbot Shell release artifacts before treating this as an install path.

Static preview artifact: `sparkbot-shell-preview-0.8.0-layer8`.
Package/version label: `0.8.0-layer8-preview`.

Preview status is `GREEN_CANDIDATE` for static-preview readiness and remains `NOT_RELEASED`.
No tag, no upload, and no announcement have been executed.
Official public repo move is pending Phil approval. Public repo/home is currently `TBD`; this repo continues as the active staging shell.
See [Static preview signoff](docs/STATIC_PREVIEW_SIGNOFF.md), [Physical mobile QA checklist](docs/PHYSICAL_MOBILE_QA_CHECKLIST.md), [Public preview readiness summary](docs/PUBLIC_PREVIEW_READINESS_SUMMARY.md), [Release decision gate](docs/RELEASE_DECISION_GATE.md), and [Official public repo readiness](docs/OFFICIAL_PUBLIC_REPO_READINESS.md).

## Public MVP Highlights

- Workstation as the operating floor.
- Main Chat / DM as the operator command channel.
- Round Table as the agent meeting room.
- Meeting Manager as the coordinator and secretary.
- Invite Wing model seats and Specialty Wing custom agents.
- Local AI setup shapes for Ollama, LM Studio, llama.cpp / llama-server, and OpenAI-compatible endpoints.
- Command Center AI Setup and public guardrail profile previews.
- Unified memory/context contract preview and meeting-note labels.
- Task Guardian PC/server health-check previews and app-first delivery preference shell.
- Optional connector setup patterns for Telegram, Discord, Slack, and WhatsApp.
- Robo Preview teaser only, with no real robotics or IoT control in public core.

## Public Docs

These docs are safe to ship in the preview artifact:

- [Install and setup](docs/INSTALL.md)
- [Capabilities](docs/CAPABILITIES.md)
- [Architecture overview](docs/ARCHITECTURE_OVERVIEW.md)
- [Security and guardrails](docs/SECURITY_AND_GUARDRAILS.md)
- [Local AI setup overview](docs/LOCAL_AI_SETUP.md)
- [Round Table overview](docs/ROUND_TABLE_OVERVIEW.md)
- [Task Guardian overview](docs/TASK_GUARDIAN_OVERVIEW.md)
- [Connectors overview](docs/CONNECTORS_OVERVIEW.md)
- [Robo Preview](docs/ROBO_PREVIEW.md)
- [Beta limitations](docs/BETA_LIMITATIONS.md)
- [MIT license](LICENSE)

Repo-only staging docs are still kept in git for auditability, but they are excluded from preview release artifacts.

Planned reconciliation and import-planning docs (repo-only):

- [Public MVP import plan](docs/PUBLIC_MVP_IMPORT_PLAN.md)
- [Public source tree plan](docs/PUBLIC_SOURCE_TREE_PLAN.md)
- [Stub strategy](docs/STUB_STRATEGY.md)
- [Code import stop gates](docs/CODE_IMPORT_STOP_GATES.md)
- [Public MVP acceptance criteria](docs/PUBLIC_MVP_ACCEPTANCE_CRITERIA.md)
- [Public preview release candidate](docs/PUBLIC_PREVIEW_RELEASE_CANDIDATE.md)
- [Public preview launch checklist](docs/PUBLIC_PREVIEW_LAUNCH_CHECKLIST.md)
- [Public preview messaging draft](docs/PUBLIC_PREVIEW_MESSAGING_DRAFT.md)
- [Final public release decision packet](docs/FINAL_PUBLIC_RELEASE_DECISION_PACKET.md)
- [Official repo move plan](docs/OFFICIAL_REPO_MOVE_PLAN.md)
- [Version/tag decision](docs/VERSION_TAG_DECISION.md)
- [Public release action checklist](docs/PUBLIC_RELEASE_ACTION_CHECKLIST.md)
- [Official public repo readiness](docs/OFFICIAL_PUBLIC_REPO_READINESS.md)
- [Repo home decision matrix](docs/REPO_HOME_DECISION_MATRIX.md)
- [Sanitized tree export plan](docs/SANITIZED_TREE_EXPORT_PLAN.md)
- [Public repo copy dry-run checklist](docs/PUBLIC_REPO_COPY_DRY_RUN_CHECKLIST.md)
- [Branding and link cleanup plan](docs/BRANDING_AND_LINK_CLEANUP_PLAN.md)
- [Versioning finalization plan](docs/VERSIONING_FINALIZATION_PLAN.md)
- [Official repo preflight report](docs/OFFICIAL_REPO_PREFLIGHT_REPORT.md)
- [Sanitized export dry-run manifest](docs/SANITIZED_EXPORT_DRY_RUN_MANIFEST.md)
- [Official repo creation checklist](docs/OFFICIAL_REPO_CREATION_CHECKLIST.md)
- [Option C execution plan](docs/OPTION_C_EXECUTION_PLAN.md)
- [Release routing correction](docs/RELEASE_ROUTING_CORRECTION.md)
- [Frontend MVP surface audit](docs/FRONTEND_MVP_SURFACE_AUDIT.md)
- [Frontend MVP readiness report](docs/FRONTEND_MVP_READINESS_REPORT.md)
- [Frontend polish plan](docs/FRONTEND_POLISH_PLAN.md)
- [Static fixture content plan](docs/STATIC_FIXTURE_CONTENT_PLAN.md)
- [Product demo polish plan](docs/PRODUCT_DEMO_POLISH_PLAN.md)
- [Frontend import planning baseline](docs/FRONTEND_IMPORT_PLANNING_BASELINE.md)
- [Frontend import candidate matrix](docs/FRONTEND_IMPORT_CANDIDATE_MATRIX.md)
- [Frontend import Wave 1 plan](docs/FRONTEND_IMPORT_WAVE_1_PLAN.md)
- [Frontend import stub/rewrite rules](docs/FRONTEND_IMPORT_STUB_REWRITE_RULES.md)
- [Frontend import validation checklist](docs/FRONTEND_IMPORT_VALIDATION_CHECKLIST.md)
- [Wave 1 Workstation adaptation plan](docs/WAVE_1_WORKSTATION_ADAPTATION_PLAN.md)
- [Wave 1 Round Table adaptation plan](docs/WAVE_1_ROUNDTABLE_ADAPTATION_PLAN.md)
- [Wave 1 Model Seat adaptation plan](docs/WAVE_1_MODEL_SEAT_ADAPTATION_PLAN.md)
- [Wave 1 Docs/info adaptation plan](docs/WAVE_1_DOCS_INFO_ADAPTATION_PLAN.md)

## Preview Artifact Boundary

Generated preview artifacts include only the built static app, README, LICENSE, package.json, user-facing docs, and package metadata. Repo-only staging docs can remain in git for auditability, but they are excluded from generated preview artifacts.

The current repo, `armpit-symphony/Sparkbot_shell`, remains the active staging workspace.
`sparkpit-labs/Sparkbot` is a possible future candidate but is **not** the active target today; final public repo home is **TBD**.

## Development

Install dependencies:

```bash
npm install
```

Run the static shell locally:

```bash
npm run dev
```

Build the static shell:

```bash
npm run build
```

Create a public-safe preview artifact:

```bash
npm run package:preview
```

The generated preview artifact is written under `preview-artifacts/` and includes only the built app, README, LICENSE, package.json, allowlisted public docs, and package metadata.

The generated folder is `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`.

Release decision support docs remain in the staging repo and are not included in generated preview artifacts.

## Current Caveats

- Connector delivery/private recall is out-of-scope for this static shell preview (no connector runtime, no sends, no sessions).
- Future runtime-contract validation is still required for live external recall/delivery claims.
- External health-report delivery is setup-needed/live-QA-unknown and not implemented.
- Connector identity/PIN sessions are contract previews only; no real verification or session storage exists.
- SMS/text remains future/unsupported.
- Multi-worker scheduler leader locking remains future work.
- Sparkbot Shell is not production-ready.
- MIT is selected for this static public preview unless a legal blocker is discovered.
- Final public repo migration remains a later release operation; this repo remains staging.
- Physical/mobile 390px browser QA passed by Phil manual physical verification; keep requirement only for explicit Phil release approval.
- Shell state is local React state only. It intentionally does not persist settings, store model-seat credentials, execute Round Table meetings, write meeting notes to memory, retrieve context, verify PINs, create connector sessions, schedule Task Guardian jobs, collect health data, send connector messages, call Local AI endpoints, enforce guardrails, or control robots/IoT.

## Next Step

Recommended next work is a Wave 1 checkpoint/audit across candidates #1-#4 before any deeper import or runtime planning.
Continue to treat release actions as deferred while repo/home/version/tag are pending.
