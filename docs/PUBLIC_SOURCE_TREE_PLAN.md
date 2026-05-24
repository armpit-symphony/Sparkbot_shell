# Public Source Tree Plan

## Purpose

This document defines a proposed frontend-only source tree for later safe extraction/import work from R&D references into a public shell repo.

## Proposed Import Layout

- `src/app` — shell shell-level composition, global context, and shared route shell.
- `src/components` — reusable UI widgets used across surfaces.
- `src/pages` — route pages and user workflows.
- `src/workstation` — workstation/office floor UI preview surfaces.
- `src/roundtable` — meeting flow previews and meeting-manager shells.
- `src/agents` — agent seat previews and specialty agent cards.
- `src/controls` — settings and local UI control panels.
- `src/guardian-basic` — guardrail/policy messaging and confirmation UX only.
- `src/robo-teaser` — Robo preview-only UI and disclaimers.
- `src/shared` — shared shell utilities, types, and non-runtime helpers.

## Import Rules

- This is a source-plan document only.
- No additional source-tree creation or code move/import is approved in this phase unless already present in current repo history.
- Any future import must preserve source boundaries:
  - No backend runtime directories.
  - No desktop/runtime wiring.
  - No provider/tool execution code.
  - No connector send/write logic.
  - No persistence or scheduler internals.
- Any file imported later must be explicitly approved and re-scanned for:
  - secret leakage
  - runtime assumptions
  - private domain/path references
  - proprietary dependency capture
