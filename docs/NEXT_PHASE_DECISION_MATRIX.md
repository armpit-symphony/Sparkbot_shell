# Next Phase Decision Matrix

Updated: 2026-05-24

Context: static baseline consolidation is complete on `static-shell-mock-contract-baseline` (`d6a528f`).
Release status: `GREEN_CANDIDATE`, `NOT_RELEASED`, no runtime behavior.

## Decision Options

### Option A — Pause / Preserve Static Baseline

- **When to use:** if Phil wants no immediate movement.
- **What it means:** keep `armpit-symphony/Sparkbot_shell` as a static staging shell.
- **Pros:** maximal safety, no drift, strongest source-boundary control.
- **Cons:** slower momentum.
- **Required cleanup:** ensure wave docs and artifact checks stay current.
- **Notes:** good if focus shifts back to LIMA contract architecture first.

### Option B — Mock LIMA Contract UI Display

- **When to use:** if Phil wants visible contract-demo value next.
- **What it means:** render contract mock payloads in shell UI only (no runtime integration).
- **Pros:** user-facing clarity for future path, low risk, good demo alignment.
- **Cons:** does not provide runtime functionality.
- **Required cleanup:** add fixture-driven mock readers and safe missing/malformed-state UX (non-authoritative labels).
- **Required gates:** no fetch/network, no provider/model calls, no dispatch.

### Option C — Wave 2 Frontend-Only Import Planning

- **When to use:** if Phil wants broader planning after baseline lock.
- **What it means:** classify more R&D frontend areas; no code import yet.
- **Pros:** increases options for later static enrichment.
- **Cons:** adds planning overhead.
- **Required cleanup:** keep strict no-runtime and no-direct-copy posture.

### Option D — Release-Candidate Branch Consolidation / Merge

- **When to use:** if Phil wants branch-level lock before any release decision or movement.
- **What it means:** keep this consolidated baseline branch as canonical handoff.
- **Pros:** creates clean audit trail for Option D later.
- **Cons:** still no release action.
- **Required cleanup:** confirm all required docs and artifacts references are on this branch.

### Option E — Official Repo-Home Decision

- **When to use:** if Phil wants to choose where full official shell will live.
- **What it means:** decide final destination later (currently `TBD`).
- **Pros:** preserves governance and repo clarity.
- **Cons:** until decided, official release operations remain blocked.
- **Required cleanup:** keep routing and branding docs current.

### Option F — Public Preview Release Action

- **When to use:** only after explicit Phil release approval.
- **What it means:** tag/upload/announcement/publish with finalized destination/version.
- **Pros:** advances to public distribution.
- **Cons:** currently high risk if any boundary is incomplete.
- **Required cleanup:** explicit approval for repo home, version/tag, artifact destination, release note/changelog, announcement policy.

## Recommended Default

- **Default now:** **Option B** or **Option D**.
- Runtime implementation should remain off.
- Option F remains blocked until explicit approval.
