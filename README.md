# Sparkbot Shell

Sparkbot Shell is the MIT-licensed preview staging repo for a self-hosted AI workstation shell.

The public product model is a local-first AI office shell with:

- Workstation floor preview
- Round Table hero flow
- model seats and Invite Wing placeholders
- file/memory/task fixtures
- basic guardian posture labels
- Robo teaser
- LIMA AI OS contract-readiness notes

## Current Status

This repo is in public-release staging. The current shell is a Vite + React + TypeScript preview with a coherent product demo flow: Workstation floor, Work page, Local AI settings, Round Table meeting storyline, model/agent setup shells, Files/Memory/Tasks fixtures, Demo Room context, Guardian posture preview, Robo teaser, and LIMA-ready contract-layer notes.
Branch `sparkbot-shell-work-settings-runtime-preview` moves beyond the prior static baseline only for explicit local browser preview behaviors: user-selected file reads into React state, in-memory work-program edits, simulated network-index search, and localhost/loopback-only model endpoint reachability checks. It is not a public release tag, not a production runtime, and not a provider/model execution layer.
Current checkpoint baseline is `active-staging-baseline-mock-lima-ui-lock` (from `active-staging-baseline-lock`).
Current branch: `active-staging-baseline-mock-lima-ui-lock` (implements Option B mock LIMA contract UI display lock).
Current commit: HEAD of `active-staging-baseline-mock-lima-ui-lock` (`3fab1e8`).
Current release status remains `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`.

Wave 1 candidate #1 (Workstation visual refinement) is complete as a manual static adaptation from R&D reference concepts only.
Wave 1 candidate #2 (Round Table visual refinement) is complete as a manual static adaptation from R&D reference concepts only.
Wave 1 candidate #3 (Model stack + Invite Wing visual refinement) is complete as a manual static adaptation from R&D reference concepts only.
Wave 1 candidate #4 (Docs/info visual refinement) is complete as a manual static adaptation from R&D + shell docs concepts only.
Wave 1 checkpoint/audit docs are complete and consolidated on this branch with mock LIMA contract planning pass.
Option B mock LIMA contract UI display now renders contract example cards and hard safety invariants in Workstation and Command Center preview surfaces.

It has no backend runtime, no live model generation calls, no credential persistence, no connector sends, no connector sessions, no PIN verification, no scheduler, no health collector, no memory/context runtime, and no robotics/IoT control. The Work page stores uploaded/read/edited file text only in browser React state for the current page session. The Settings page can check localhost or loopback model endpoints only when the operator clicks the check button.
It also includes a static `LIMA AI OS ready layer` panel that documents contract-first integration phases without bundling runtime wiring.

Public users should wait for approved Sparkbot Shell release artifacts before treating this as an install path.

Static preview artifact: `sparkbot-shell-preview-0.8.0-layer8`.
Package/version label: `0.8.0-layer8-preview`.

Preview status is `GREEN_CANDIDATE` for static-preview readiness and remains `NOT_RELEASED`.
No tag, no upload, and no announcement have been executed.
Official public repo move is pending Phil approval. Public repo/home is currently `TBD`; this repo continues as the active staging shell.
`sparkpit-labs/Sparkbot` is a possible future target but not active.

Current next options:

- Option A (pause): return to LIMA AI OS universal contract planning.
- Option B (implemented): mock LIMA contract UI display is locked as static preview; review-only refinements only if requested.
- Alternative: pause on static baseline and return to LIMA AI OS universal contract work.
- Or continue release-candidate branch planning/review when desired.
See [Static preview signoff](docs/STATIC_PREVIEW_SIGNOFF.md), [Physical mobile QA checklist](docs/PHYSICAL_MOBILE_QA_CHECKLIST.md), [Public preview readiness summary](docs/PUBLIC_PREVIEW_READINESS_SUMMARY.md), [Release decision gate](docs/RELEASE_DECISION_GATE.md), [Static shell baseline handoff](docs/STATIC_SHELL_BASELINE_HANDOFF.md), [Static shell baseline audit](docs/STATIC_SHELL_BASELINE_AUDIT.md), and [Next phase decision matrix](docs/NEXT_PHASE_DECISION_MATRIX.md).

Current planning phase also includes LIMA contract fixture/docs planning:

- [LIMA contract layer plan](docs/LIMA_CONTRACT_LAYER_PLAN.md)
- [LIMA contract mock schema](docs/LIMA_CONTRACT_MOCK_SCHEMA.md)
- [LIMA contract fixtures](docs/LIMA_CONTRACT_FIXTURES.md)
- [LIMA contract frontend readiness](docs/LIMA_CONTRACT_FRONTEND_READINESS.md)
- [LIMA contract stop gates](docs/LIMA_CONTRACT_STOP_GATES.md)
- [LIMA alignment brief response](docs/LIMA_ALIGNMENT_BRIEF_RESPONSE.md)
- [Mock LIMA contract UI plan](docs/MOCK_LIMA_CONTRACT_UI_PLAN.md)
- [Mock LIMA UI baseline lock](docs/MOCK_LIMA_UI_BASELINE_LOCK.md)
- [Post mock-LIMA UI decision gate](docs/POST_MOCK_LIMA_UI_DECISION_GATE.md)

Current vocabulary alignment for mock contract examples:

- Sequence: `ConsumerRequest -> TypedIntentEnvelope/TaskIntent -> CandidatePreview -> RuntimeStateSnapshot`
- Required refs/fields: `consumer_profile`, `embodiment_profile`, `approval_posture`, `evidence_ref`
- Renamed invariants: `side_effects_permitted`, `model_provider_calls_allowed`, `runtime_active`, `human_input_bridge_active`
- Added invariants: `runtime_test_harness_active`, `guardian_decision_created`, `adapter_calls_allowed`, `tool_calls_allowed`, `driver_calls_allowed`, `audit_storage_written`

## Public MVP Highlights

- Workstation as the operating floor.
- Work page for browser-local SOP/work-file intake, search, in-memory editing, and work-program staging.
- Main Chat / DM as the operator command channel.
- Round Table as the agent meeting room.
- Meeting Manager as the coordinator and secretary.
- Invite Wing model seats and Specialty Wing custom agents.
- Local AI setup shapes for Ollama, LM Studio, llama.cpp / llama-server, and OpenAI-compatible endpoints.
- Local AI settings route with localhost/loopback-only reachability checks and no credential fields.
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
- [Wave 1 checkpoint audit](docs/WAVE_1_CHECKPOINT_AUDIT.md)
- [Wave 1 static demo baseline](docs/WAVE_1_STATIC_DEMO_BASELINE.md)
- [LIMA contract layer plan](docs/LIMA_CONTRACT_LAYER_PLAN.md)
- [LIMA contract mock schema](docs/LIMA_CONTRACT_MOCK_SCHEMA.md)
- [LIMA contract fixtures](docs/LIMA_CONTRACT_FIXTURES.md)
- [LIMA contract frontend readiness](docs/LIMA_CONTRACT_FRONTEND_READINESS.md)
- [LIMA contract stop gates](docs/LIMA_CONTRACT_STOP_GATES.md)
- [Static shell baseline handoff](docs/STATIC_SHELL_BASELINE_HANDOFF.md)
- [Static shell baseline audit](docs/STATIC_SHELL_BASELINE_AUDIT.md)
- [Active staging baseline lock](docs/ACTIVE_STAGING_BASELINE.md)
- [Baseline lock audit](docs/BASELINE_LOCK_AUDIT.md)
- [Next phase decision matrix](docs/NEXT_PHASE_DECISION_MATRIX.md)

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
- Shell state is local React state only. It intentionally does not persist settings, store model-seat credentials, execute Round Table meetings, write meeting notes to memory, retrieve context, verify PINs, create connector sessions, schedule Task Guardian jobs, collect health data, send connector messages, run provider/model generation calls, enforce guardrails, or control robots/IoT. The only network behavior in this branch is an explicit localhost/loopback endpoint reachability check from the Local AI settings route.

## Next Step

Recommended next work is a second-layer Option B refinement decision only (UI-only) or a pause until Phil chooses release routing.
Continue to treat release actions as deferred while repo/home/version/tag are pending.
