# Sparkbot Shell Work And Local Settings Runtime Preview Audit

Date: 2026-06-18
Branch: `sparkbot-shell-work-settings-runtime-preview`
Audit result: `bounded_local_browser_preview_only`

The Work page and Local AI Settings preview slice is acceptable as bounded local browser preview evidence. It is not acceptable as proof of live LIMA runtime parity, provider/model readiness, connector readiness, public release readiness, or production readiness.

## Accepted Evidence

- `src/pages/WorkPage.tsx` contains browser-local work-program staging, user-selected file ingestion, local search, in-memory editing, and simulated network-index search.
- `src/pages/SettingsPage.tsx` contains local runtime setup fields and an operator-triggered endpoint reachability check.
- The endpoint check is constrained to localhost or loopback targets.
- `src/App.tsx` wires `#/work` and `#/settings` routes through React state.
- Current-facing docs describe the local browser preview behavior and do not claim backend runtime readiness.

## Boundary Findings

- Backend runtime added: no.
- LIMA runtime import added: no.
- Provider/model generation added: no.
- Credential field or credential storage added: no.
- Connector call or external send added: no.
- Filesystem write added: no.
- Non-local endpoint check allowed: no.
- Simulated network-index search performs live network I/O: no.
- Persistence outside React state added: no.
- Guardian enforcement runtime added: no.
- Tool execution added: no.
- Robotics/device/physical-world behavior added: no.
- Product-readiness or production-readiness claim added: no.

## Risks

- This branch intentionally moves beyond the older static-only shell baseline because it uses browser `FileReader` and `fetch` for explicit local checks.
- Public-release docs and packaging must not treat this branch as the static baseline unless those local browser behaviors are explicitly accepted.
- Endpoint reachability does not prove generation quality, prompt safety, credential support, model-route authority, audit persistence, or LIMA runtime integration.

## Decision

Keep this as a separate bounded preview branch until LIMA and public-release gates decide whether local browser file ingestion and localhost endpoint checks belong in the tested shell lane.
