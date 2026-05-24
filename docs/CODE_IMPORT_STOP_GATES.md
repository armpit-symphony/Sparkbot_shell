# Code Import Stop Gates

Before any code import/reduction work advances beyond this static shell stage, any of the following conditions blocks merge:

- Backend runtime required.
- Persistence/database required.
- Provider calls required.
- Connector calls required.
- Secrets required.
- Guardian internals required.
- LIMA OS internals required.
- Arc/LIMA Office/LIMA IT code required.
- Robotics/IoT code required.
- Shell/browser/network/file mutation required.
- `src-tauri` required.
- Build workflows required.
- Private domain/path references found.
- License uncertainty.
- Dependency uncertainty.
- Proprietary module uncertainty.

## What to do when a stop gate triggers

- Pause the import path.
- Move the request into the next planning ticket under:
  - LIMA contract boundary planning
  - separate legal/proprietary review
  - explicit approval workflow
- Restore current static-shell posture and update the planning docs accordingly.

## Immediate Enforcement

- If a diff introduces any stopped condition, that diff is not eligible for public preview candidate status.
- Docs and link corrections remain allowed without re-importing backend/runtime code.
- Static artifact scans must re-run after any branch merge that touches Docs or packaging metadata.
