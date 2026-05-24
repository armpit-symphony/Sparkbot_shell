# Public Source Tree Plan

Updated: 2026-05-24
Branch: `frontend-only-import-planning`

## Purpose

Define a proposed frontend-only source layout for future safe import work from R&D references into Sparkbot Shell.

## Proposed Layout

- `src/app` - shell composition, top-level app frame, shared route shell
- `src/components` - reusable UI components
- `src/pages` - route pages and page-level composition
- `src/workstation` - workstation floor UI modules
- `src/roundtable` - meeting flow preview modules
- `src/agents` - agent seat and persona surfaces
- `src/controls` - setup and control panels (static preview only)
- `src/guardian-basic` - basic guardrail posture copy and confirmation UX labels
- `src/robo-teaser` - robo teaser-only UI
- `src/shared` - shared types, constants, and helper utilities

## Important Clarification

This is a planning document only.

- No new source-tree creation/import is approved in this phase unless already present.
- No R&D code import is approved by this plan alone.

## Source Boundary Rules

Any future import must preserve these boundaries:

- No backend runtime directories.
- No desktop/runtime wiring.
- No provider/tool execution code.
- No connector send/write logic.
- No persistence/scheduler internals.

## Required Review Before Import

Every candidate file must pass:

- secret/private reference scan
- runtime assumption scan
- proprietary dependency scan
- licensing and attribution check
- stop-gate check (`CODE_IMPORT_STOP_GATES.md`)
