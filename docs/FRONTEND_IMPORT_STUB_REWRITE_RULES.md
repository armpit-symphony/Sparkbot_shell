# Frontend Import Stub and Rewrite Rules

Updated: 2026-05-24  
Branch: `frontend-only-import-planning`

## Purpose

Any future frontend import from Sparkbot R&D must be rewritten into static fixture behavior before entering Sparkbot Shell.

## Hard Rules

1. No imports from R&D API clients.
2. No `fetch`, `axios`, `WebSocket`, or `EventSource`.
3. No `localStorage`, `sessionStorage`, or `document.cookie`.
4. No `process.env` or `import.meta.env`.
5. No provider key handling or token entry flows.
6. No connector read/write runtime calls.
7. No backend route calls.
8. No terminal/browser/shell execution surfaces.
9. No robotics/MCP live call surfaces.
10. No LIMA runtime calls.

## Required Rewrite Pattern

- Replace API hooks with local constants or fixture objects.
- Replace async runtime state with deterministic static states.
- Replace auth/operator state with fixed preview labels.
- Replace provider setup with disabled/demo copy only.
- Replace real approvals with preview-only status language.
- Replace Robo runtime actions with teaser-only cards.

## Allowed Output in Sparkbot Shell

- Static TS/TSX components.
- Static fixture data under `src/data`.
- Static explanatory copy and docs.
- Local UI transitions in React state only.

## Block Conditions

Stop and do not merge if any imported diff introduces:

- runtime network calls
- storage persistence calls
- credential/token handling
- connector send paths
- terminal or MCP live execution
- Guardian/LIMA runtime internals

