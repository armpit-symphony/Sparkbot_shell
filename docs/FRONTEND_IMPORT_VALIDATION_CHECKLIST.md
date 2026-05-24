# Frontend Import Validation Checklist

Updated: 2026-05-24  
Branch: `frontend-only-import-planning`

Use this checklist for each future import wave execution.

## Build and Packaging

- `npm run build`
- `npm run package:preview`
- `npm pack --dry-run --json`
- `node --check scripts/package-preview.mjs`

## Safety and Boundary Scans

- Forbidden API scan:
  - `fetch`
  - `axios`
  - `WebSocket`
  - `EventSource`
  - `localStorage`
  - `sessionStorage`
  - `document.cookie`
  - `process.env`
  - `import.meta.env`
  - `fs`
  - `child_process`
- Source boundary scan:
  - confirm no `backend/`
  - confirm no `src-tauri/`
  - confirm no `.github/`
  - confirm no `.agents/`
- Runtime/persistence scan over `src/`.
- Secret/private scan over repo and preview artifact.
- High-risk artifact scan for runtime/proprietary leakage.

## Docs and Release Discipline

- Update relevant docs and README status lines.
- Keep status terms aligned: `GREEN_CANDIDATE`, `NOT_RELEASED`, `NO_TAG`, `NO_UPLOAD`, `NO_ANNOUNCEMENT`.
- Confirm final public repo home remains `TBD` unless separately approved.

## Repository Discipline

- Confirm Sparkbot R&D repo was not modified.
- Confirm no direct proprietary module import/copy occurred.
- Confirm no tag/publish/upload/announcement action occurred.

## Visual Sanity

- Desktop and mobile layout check for overflow and readability.
- Confirm static demo storyline still coherent.

