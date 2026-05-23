# Branch Reconciliation Status

Updated: 2026-05-23

## Scope

This report reconciles the older docs-only handoff branch with the newer layered Sparkbot Shell public-preview branches. It is documentation-only and does not merge, cherry-pick, reset, or add runtime behavior.

## Current Checked-Out Branch During Reconciliation

`public-release-branch-reconciliation-status`

This branch was created from `origin/public-release-shell-release-decision-gate` so the reconciliation note lands on top of the latest discovered shell work instead of overwriting the older handoff branch or any layered shell branch.

## Branch Inventory

| Branch | Latest commit | Status |
|---|---:|---|
| `public-release-decoupling-handoff` | `d2ea4a62f4f8d75b71cb1ec6e19f987c163aa0e7` | Older docs-only handoff. Diverges from the layered shell history at initial commit. |
| `public-release-layer-8-packaging-boundary-shell` | `d98f3ff7b5783581fb21856cb6e2f680bdd9fdb2` | Layered shell branch; ancestor of visual QA, mobile polish, docs/package QA, and release decision gate. |
| `public-release-shell-visual-qa-assessment` | `5e29b7ceb27b965df1e0bf0448d1723eba6d6e93` | Linear descendant of Layer 8. |
| `public-release-shell-visual-polish-mobile-qa` | `201f5fbb05b487b0f51cf84a1d7e43295b7dd1d4` | Linear descendant of visual QA assessment. |
| `public-release-shell-docs-package-qa` | `f916017db1ecdc46727702f955913a7b9a77abb7` | Linear descendant of mobile polish; best baseline among the originally listed newer branches. |
| `public-release-shell-release-decision-gate` | `c6d2449ecefc9f8106bda6f5915d0a7c75de6a4a` | Newer origin branch discovered during fetch; linear descendant of docs/package QA and currently the most complete shell/release decision branch. |

## Ancestry Findings

- `public-release-layer-8-packaging-boundary-shell` is an ancestor of `public-release-shell-visual-qa-assessment`.
- `public-release-shell-visual-qa-assessment` is an ancestor of `public-release-shell-visual-polish-mobile-qa`.
- `public-release-shell-visual-polish-mobile-qa` is an ancestor of `public-release-shell-docs-package-qa`.
- `public-release-shell-docs-package-qa` is an ancestor of `public-release-shell-release-decision-gate`.
- `public-release-decoupling-handoff` is not an ancestor or descendant of the layered shell line. Its merge base with the layered shell branches is the initial commit `26c501347010b842fc15eabe70e23ea6ae3751ac`.

## Recommended Current Baseline

Use `public-release-shell-release-decision-gate` at `c6d2449ecefc9f8106bda6f5915d0a7c75de6a4a` as the current baseline for continuing Sparkbot Shell public-preview release decision work.

If work must be limited only to the branches named in the original handoff, use `public-release-shell-docs-package-qa` at `f916017db1ecdc46727702f955913a7b9a77abb7`. It is the most complete branch in that listed set and is a direct ancestor of the release decision gate branch.

## Decoupling Handoff Status

`public-release-decoupling-handoff` is superseded for continuing shell work.

Do not reset, rebase, or overwrite the layered shell branches with `public-release-decoupling-handoff`. That branch remains useful as a historical docs-only handoff, but it does not contain the static Vite/React shell, layered status docs, visual QA, package QA, release decision gate, or current preview artifact boundary work.

## Handoff Content Coverage

The newer layered line already contains and expands the handoff document set:

| Handoff doc | Newer branch status |
|---|---|
| `README.md` | Superseded by shell preview README with current status, public docs, artifact boundary, caveats, and next step. |
| `docs/PUBLIC_RELEASE_HANDOFF.md` | Present and updated for layered shell status. |
| `docs/FEATURE_CLASSIFICATION.md` | Present and updated for shell/layer classification. |
| `docs/EXTRACTION_MAP.md` | Present and updated for shell extraction readiness. |
| `docs/SANITIZATION_CHECKLIST.md` | Present and updated for shell/artifact sanitation. |
| `docs/PUBLIC_MVP_ROADMAP.md` | Present and updated through docs/package QA and release decision gate. |
| `docs/REPO_SEPARATION_RULES.md` | Present and updated for shell/public artifact boundaries. |

No blocking content needs to be cherry-picked from `public-release-decoupling-handoff` into the current shell baseline.

Non-blocking carry-forward candidates, if Phil wants extra detail preserved:

- The original target-user list: hobbyists, self-hosters, model tinkerers, agent experimenters, open-source automation users, and users avoiding hosted SaaS agents.
- The exact original scan-term block, including `remote.sparkpitlabs.com`, `/home/sparky`, `/home/ubuntu`, `104.236`, `DigitalOcean`, `AWS`, `Robo OS`, `MCP`, `Vault`, and `breakglass`.
- More explicit branding scan language for `armpit-symphony` and SparkPit Labs.
- More granular long-tail feature classification rows for policy simulation, persistent approvals, audit timeline, connector health, Token Guardian, terminal/browser/code execution, email/calendar/drive connectors, Jira/Linear/Notion/Confluence, GitHub tools, installer/Tauri, Docker/server install, and branding assets.
- The older legal/license/security review specifics: connector terms, vulnerability reporting, Tauri signing posture, trademarks, third-party logos, screenshots, and sample data.

The only older baseline detail that should remain historical, not current, is the R&D reference note `v1.6.81` / `1cd250fb29daaf3bdf6534627ec1b689ad37561c`. The layered shell docs now cite the later reference source branch `public-release-live-connector-qa` at `fe2a5ffc2bbbff7ef4fde9959d6b35206719f3e5`.

## Merge / Cherry-Pick Recommendation

- Do not merge `public-release-decoupling-handoff` into the layered shell branch line.
- Do not cherry-pick `d2ea4a62f4f8d75b71cb1ec6e19f987c163aa0e7` unless Phil explicitly wants the old historical baseline text preserved.
- Continue future public-preview work from `public-release-shell-release-decision-gate` or from a new branch based on it.
- Keep `public-release-decoupling-handoff` as a historical handoff branch only.

## No-Go Warning

Do not reset current Sparkbot Shell work back to `public-release-decoupling-handoff`. Doing so would discard or obscure the Layer 1-8 shell, visual QA, mobile polish, public docs/package QA, release decision gate, and preview artifact boundary work.

## Runtime Boundary Confirmation

This reconciliation did not add backend runtime, provider/model calls, Local AI calls, connector sends, scheduler/runtime behavior, memory persistence, Guardian internals, terminal/browser execution, robotics/IoT control, or LIMA AI OS / Arc Bot / LIMA Office / LIMA IT wiring.
