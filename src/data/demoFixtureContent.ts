export const demoFileCards = [
  {
    title: "Project brief.pdf",
    type: "PDF",
    status: "summary ready",
    notes: "Meeting goal and constraints used in the Round Table framing stage.",
    tags: ["demo fixture", "indexed preview", "future runtime contract"],
  },
  {
    title: "Meeting notes.md",
    type: "Markdown",
    status: "indexed preview",
    notes: "Prior recommendation draft used by the Meeting Manager seat.",
    tags: ["demo fixture", "no live upload", "no persistence"],
  },
  {
    title: "Customer FAQ.csv",
    type: "CSV",
    status: "summary ready",
    notes: "Structured facts for specialist perspectives during review.",
    tags: ["demo fixture", "static preview", "local-first future"],
  },
  {
    title: "Product screenshot.png",
    type: "Image",
    status: "attached preview",
    notes: "Visual context reference for recommendation artifact language.",
    tags: ["demo fixture", "no live upload", "future runtime contract"],
  },
] as const;

export const demoMemoryCards = [
  {
    title: "Operator preference",
    summary: "Keep recommendations concise and avoid runtime claims before validation.",
    state: "verified",
    confidence: "0.90",
    caveat: "Local preview only. No live memory writes.",
  },
  {
    title: "Project context",
    summary: "This room demonstrates a self-hosted workstation plus Round Table workflow.",
    state: "local-first future",
    confidence: "0.82",
    caveat: "Contract-only memory posture.",
  },
  {
    title: "Pending verification",
    summary: "Launch wording and release route need explicit approval before Option D.",
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
    title: "Prepare Round Table recommendation draft",
    state: "planned",
    owner: "Meeting Manager",
    due: "Before product demo handoff",
  },
  {
    title: "Review model seat assignments",
    state: "needs approval",
    owner: "Operator",
    due: "Before runtime contract phase",
  },
  {
    title: "Draft release briefing notes",
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
  tasks: ["Prepare Round Table recommendation draft", "Review model seat assignments", "Robo teaser copy review"],
  roundTableOutcome: "Recommendation artifact previewed with decisions, action items, and open questions.",
  guardianPosture: "Risky future actions require confirmation in later runtime layers.",
  limaReadiness: "Ready for contract docs and mocked responses; no LIMA runtime wired.",
} as const;
