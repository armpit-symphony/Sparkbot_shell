# Round Table Overview

Round Table is the meeting room for AI agents. It is the main public hook for Sparkbot Shell.

## Current Preview Flow

1. Setup: choose the problem, seats, agents, and model-seat assignments.
2. First Pass: participants give initial ideas.
3. Manager Assessment: Seat 1 Meeting Manager reviews the first pass.
4. Assignments: Meeting Manager assigns follow-up work.
5. Second Pass: participants respond to assigned jobs.
6. Wrap-Up: Meeting Manager summarizes next steps.
7. Notes: editable local notes preview.

## Meeting Manager

Meeting Manager is the default Seat 1 concept. In the preview, it is a static role card and does not call a model or execute meeting logic.

## Notes And Memory

The notes surface previews a future meeting-note contract. It does not write memory, persist notes, or generate per-turn meeting notes.

## Future Runtime Requirements

Round Table runtime work should define room state, provider/model calls, assignment persistence, manager wrap-up behavior, memory write rules, and redaction rules before any live execution is added.
