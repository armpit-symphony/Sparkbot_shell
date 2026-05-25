# Mock LIMA Contract UI Display Plan

Updated: 2026-05-24

## Purpose

This plan adds a static, non-runtime display surface for pre-defined mock LIMA contract examples.
The goal is to make `Sparkbot Shell` visibly contract-ready while preserving the current static
public-preview posture.

## Mock Contract Examples to Display

- Workstation state preview
- Round Table meeting preview
- Model stack / seat preview
- File/memory/task context preview
- Guardian posture preview
- Robo teaser / robotics deferred preview
- Release/readiness status preview

## Static Data Source Plan

- Keep contract fixtures local in shell source:
  - `src/data/mockLimaContracts.ts`
- Reference fixture items from UI components:
  - `src/components/MockLimaContractPanel.tsx`
- Surface panels in existing static contexts:
  - Workstation LIMA readiness area
  - Command Center LIMA section
  - Docs command-center summary
- Keep one source of truth per section:
  - contract invariant rows and inquiry labels are shared constants
  - example payloads stay static and preview-only

## Safety Invariants (All Surfaces)

Every displayed mock contract item must preserve:

- `preview_only: true`
- `non_authoritative: true`
- `safe_by_default: true`
- `execution_allowed: false`
- `side_effects_permitted: false`
- `approval_granted: false`
- `dispatch_allowed: false`
- `persistence_allowed: false`
- `model_provider_calls_allowed: false`
- `connector_calls_allowed: false`
- `runtime_active: false`
- `human_input_bridge_active: false`
- `sparkbot_wiring_active: false`
- `live_adapter_active: false`
- `robotics_allowed: false`
- `physical_world_allowed: false`

## No-Runtime Boundaries

- No API endpoints are called from the shell for this pass.
- No install detection is performed.
- No provider/model/connector dispatch or persistence action exists.
- No scheduler, no task execution, no file I/O.
- No runtime posture should be interpreted as authoritative.

## Files Planned for Change

- `src/data/mockLimaContracts.ts` (new)
  - static examples + invariants
- `src/components/MockLimaContractPanel.tsx` (new)
  - static contract display panel
- `src/components/WorkstationShell.tsx`
  - add contract panel in LIMA readiness area for floor context
- `src/App.tsx`
  - add contract panel for Command Center status area
- `src/pages/DocsPage.tsx`
  - add mock contract surface discoverability and static-boundary summary
- `src/styles.css`
- readiness/docs files listed below

## Stop Gates

- No provider/model calls
- No connector calls
- No backend/runtime import
- No LIMA runtime install detection
- No persistence (`localStorage` / `sessionStorage` / cookies / file writes)
- No runtime dispatch or scheduling
- No direct Sparkbot R&D code copy
- No Arc/LIMA Office/LIMA IT/robotics paths
- Option D release actions remain blocked until Phil approval
