import type { WorkspaceFile, WorkspaceFileCategory, WorkProgram } from "../types/workspace";

const now = new Date().toISOString();

export const initialWorkspaceFiles: WorkspaceFile[] = [
  {
    id: "sop-standard-operating-procedure",
    title: "AI Office SOP.md",
    category: "SOP",
    sourceLabel: "Local fixture",
    mimeType: "text/markdown",
    text: `# SOP: AI Work Program\n\n- Confirm model is configured before assigning active work.\n- Do not send private data to unconfigured workers.\n- Keep all file edits in work log before applying to external systems.`,
    size: 221,
    uploadedAt: now,
    updatedAt: now,
  },
  {
    id: "work-brief-template",
    title: "Work Program Brief Template.md",
    category: "Work File",
    sourceLabel: "Local fixture",
    mimeType: "text/markdown",
    text: `# Work Program Brief\n\nTask:\n- Objective\n- Worker role\n- Expected output\n\nDeliverable:\n- Notes\n- Files touched\n- Approval status`,
    size: 208,
    uploadedAt: now,
    updatedAt: now,
  },
];

export const initialWorkPrograms: WorkProgram[] = [
  {
    id: "prog-ops-setup",
    title: "Ops readiness runbook",
    details: "Prepare the shell route for local model onboarding, file access, and worker training simulation.",
    workerType: "Ops",
    trainingMemo: "Prefer safe, read-only checks and explicit confirmation for writes.",
    sopFileIds: ["sop-standard-operating-procedure"],
    workFileIds: ["work-brief-template"],
    status: "ready",
    createdAt: now,
  },
];

export const workspaceCategoryOptions: WorkspaceFileCategory[] = ["SOP", "Work File"];
