# LIMA Contract Frontend Readiness

Updated: 2026-05-24

This document defines what the frontend must guarantee when rendering mock LIMA contract responses.

This frontend pass now includes a static mock display component in the shell:

- `src/components/MockLimaContractPanel.tsx`
- Workstation and command-center placement in static readiness surfaces

## Frontend Readiness Principles

1. **Mock-first rendering**
   - Show structured contract surfaces even when no runtime is connected.
   - Mark all data as preview-only.

2. **Explicit mock/runtime distinction**
   - Every relevant card must include status badges or labels for:
     - `Static preview`
     - `Demo fixture`
     - `Not authoritative`
     - `Runtime disabled`

3. **Runtime stays disabled by default**
   - No calls are made unless and until a future runtime gate is approved.
   - Contract actions remain non-functional placeholders (disabled controls, static text, stub responses).

4. **Never treat labels as authority**
   - All LIMA previews must be clearly documented as advisory previews.
   - No production or enforcement wording should be implied.

5. **No enforcement by shell**
   - No approvals are granted in shell UI.
   - No execution/dispatch/scheduling is started.

6. **No side effects**
   - No persistence writes.
   - No provider/model/connector dispatch.
   - No robotics/IoT control actions.

7. **Robust unknown/empty-state handling**
   - Unknown contract data should render fallback copy.
   - Malformed payloads should degrade safely and show explicit reason text.
   - Missing fields should not crash UI.

## UI Display Implementation (Current Static Pass)

- Contract examples are rendered with static fixture cards for:
  - workstation state
  - roundtable preview
  - model/seat preview
  - context preview
  - guardian posture
  - robo teaser
  - release/readiness status
- Data source: `src/data/mockLimaContracts.ts`
- Rendering component: `src/components/MockLimaContractPanel.tsx`
- Placement:
  - Workstation: LIMA readiness section
  - Command Center: contract preview panel (alongside LIMA layer marker)
  - Docs: contract-readiness summary copy and boundary links

## Frontend UI Checklist for Mock-Only Contract Use

- Render `lima_runtime_active` and route state visibly.
- If `lima_runtime_active` is `false`, show:
  - install-readiness placeholder state,
  - `LIMA not installed` concept text only,
  - clear next-step text for future install planning.
- For every contract response:
  - show preview-only indicators,
  - keep all action controls disabled,
  - avoid deep-link links to runtime endpoints.
- For `candidate_preview` and `meeting_plan_preview`:
  - show stage and intent text as advisory text.
- For `release_readiness_preview`:
  - show exact blocked actions (`provider`, `connector`, `dispatch`, `persistence`, `robotics`) as blocked labels.

## Contract Error Handling

The shell should gracefully show:

- `Response missing` (for empty payloads)
- `Invalid preview schema` (for malformed payload)
- `Unknown contract version` (for schema drift)
- `Runtime unavailable` (for explicit offline state)

No alert popups or runtime retries should be performed in this phase.

## Planned Safe LIMA Posture States

- **`lima_runtime_active: false`**: show install/checklist placeholder only.
- **`lima_runtime_active: true`**: allowed only in future runtime stage, not this phase.
- **`preview_only: true`**: no contract-backed write operations.
- **`humaninput_bridge_active: false`**: no HumanInput bridge assumptions.

## Explicit Runtime Prohibition (Current Phase)

This planning pass does not add any of the following:

- provider runtime calls,
- connector calls,
- scheduler behavior,
- persistence writes,
- task/meeting state mutation,
- approval enforcement, or
- any robotics/IoT live actions.

## Compatibility With Wave 1 Baseline

- Existing static surfaces for Workstation, Round Table, model seats, files/memory/tasks, and Docs can consume these mock payloads as display-only fixtures.
- No frontend code import or backend behavior is introduced in this phase.
