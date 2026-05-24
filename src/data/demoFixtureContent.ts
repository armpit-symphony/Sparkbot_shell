export const demoFileCards = [
  {
    title: "Project brief.pdf",
    type: "PDF",
    status: "summary ready",
    notes: "Demo fixture only. No live upload or persistence.",
    tags: ["demo fixture", "indexed preview", "future runtime contract"],
  },
  {
    title: "Meeting notes.md",
    type: "Markdown",
    status: "indexed preview",
    notes: "Preview-only card for notes ingestion shape.",
    tags: ["demo fixture", "no live upload", "no persistence"],
  },
  {
    title: "Customer FAQ.csv",
    type: "CSV",
    status: "summary ready",
    notes: "Represents structured knowledge rows in a static shell.",
    tags: ["demo fixture", "static preview", "local-first future"],
  },
  {
    title: "Product screenshot.png",
    type: "Image",
    status: "attached preview",
    notes: "Static visual reference card with no file read/write path.",
    tags: ["demo fixture", "no live upload", "future runtime contract"],
  },
] as const;

export const demoMemoryCards = [
  {
    title: "Operator preference",
    summary: "Use concise release checklists and keep runtime claims blocked until validation.",
    state: "verified",
    confidence: "0.90",
    caveat: "Local preview only. No live memory writes.",
  },
  {
    title: "Project context",
    summary: "Sparkbot Shell is the staging shell for a self-hosted workstation + Round Table MVP.",
    state: "local-first future",
    confidence: "0.82",
    caveat: "Contract-only memory posture.",
  },
  {
    title: "Pending verification",
    summary: "Public launch copy needs explicit approval before any Option D action.",
    state: "pending approval",
    confidence: "0.61",
    caveat: "No persistence or workflow automation.",
  },
  {
    title: "Sensitive note",
    summary: "Private delivery details are hidden until verified identity and policy gates are real.",
    state: "redacted",
    confidence: "0.78",
    caveat: "No private recall runtime in this shell.",
  },
] as const;

export const demoTaskCards = [
  {
    title: "Prepare Round Table demo checklist",
    state: "planned",
    owner: "Meeting Manager",
    due: "Next staging pass",
  },
  {
    title: "Review model stack setup",
    state: "needs approval",
    owner: "Operator",
    due: "Before runtime import",
  },
  {
    title: "Draft launch notes",
    state: "draft",
    owner: "Writer",
    due: "Staging copy cycle",
  },
  {
    title: "Robo teaser copy review",
    state: "blocked",
    owner: "Reviewer",
    due: "Awaiting approval",
  },
  {
    title: "Update fixture coverage docs",
    state: "done",
    owner: "Planner",
    due: "Completed in this pass",
  },
] as const;

export const demoRoomFixture = {
  title: "Public Preview Room - Workstation MVP",
  agents: ["Meeting Manager", "Researcher", "Builder", "Reviewer"],
  files: ["Project brief.pdf", "Meeting notes.md"],
  memories: ["Operator preference", "Project context", "Sensitive note"],
  tasks: ["Prepare Round Table demo checklist", "Review model stack setup", "Robo teaser copy review"],
  roundTableOutcome: "Recommendation artifact previewed with decisions, action items, and open questions.",
  guardianPosture: "Risky future actions require confirmation in later runtime layers.",
  limaReadiness: "Ready for contract docs and mocked responses; no LIMA runtime wired.",
} as const;
