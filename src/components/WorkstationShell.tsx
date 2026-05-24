import type { ShellState } from "../types/shell";
import { InviteWingPanel } from "./InviteWingPanel";
import { LimaReadyLayerPanel } from "./LimaReadyLayerPanel";
import { MemoryContextPreview } from "./MemoryContextPreview";
import { SpecialtyWingPanel } from "./SpecialtyWingPanel";
import { StaticFixtureContentPreview } from "./StaticFixtureContentPreview";
import { StatusBadge } from "./StatusBadge";
import { TaskGuardianPreview } from "./TaskGuardianPreview";
import { demoRoomFixture } from "../data/demoFixtureContent";

type WorkstationShellProps = {
  shellState: ShellState;
};

const workstationPanels = [
  {
    title: "Main Chat",
    route: "#/chat",
    summary: "Operator middle-person between you and the whole workstation.",
    status: "Layer 2 shell",
  },
  {
    title: "Round Table",
    route: "#/roundtable",
    summary: "Meeting room for AI-agent first pass, assignments, second pass, wrap-up, and notes preview.",
    status: "Layer 4 shell",
  },
  {
    title: "Command Center",
    route: "#/command-center",
    summary: "Setup, model seats, guardrails, task templates, and system controls.",
    status: "Layer 3 shell",
  },
  {
    title: "Task Guardian",
    route: "#/task-guardian",
    summary: "Scheduled work manager direction for useful read-only health checks.",
    status: "Preview only",
  },
  {
    title: "Files / Memory / Tasks",
    route: "#/workstation",
    summary: "Fixture shelves for documents, memory context, reminders, and demo room state.",
    status: "Fixture preview",
  },
  {
    title: "Connectors",
    route: "#/connectors",
    summary: "Optional communication doors with identity/PIN gates and fail-closed private recall.",
    status: "Layer 7 shell",
  },
  {
    title: "Local AI",
    route: "#/command-center",
    summary: "Ollama, LM Studio, llama.cpp, OpenAI-compatible, and custom endpoint setup shape.",
    status: "No live checks",
  },
  {
    title: "Robo Preview",
    route: "#/robo-preview",
    summary: "Teaser surface only. No real robot or IoT control.",
    status: "Teaser only",
  },
];

const primaryWorkstationPanels = workstationPanels.slice(0, 3);
const secondaryWorkstationPanels = workstationPanels.slice(3);

const deskHighlights = [
  ["Sparkbot desk", "One operator floor for chat, meetings, setup, safety, and docs."],
  ["Model stack", "Primary, backups, heavy-hitter, and BYO seats are setup labels only."],
  ["Guardian posture", "Risky future actions are marked for confirmation in later runtime layers."],
  ["Open-source preview", "Inspectable static shell with public-safe docs and no proprietary runtime code."],
] as const;

const demoStorySteps = [
  ["Framing", "Round Table starts with a clear task and shared context."],
  ["Perspectives", "Specialist seats provide focused views from assigned roles."],
  ["Synthesis", "Meeting Manager groups findings into a recommendation path."],
  ["Assignments", "Follow-up cards show what needs approval or deeper validation."],
  ["Recommendation", "Wrap-up includes decisions, action items, and open questions."],
  ["Artifact", "Meeting note artifact remains local demo content in this shell."],
] as const;

export function WorkstationShell({ shellState }: WorkstationShellProps) {
  const activeSeats = shellState.modelSeats.filter((seat) => seat.enabled);
  const manager = shellState.specialtyAgents.find((agent) => agent.id === "agent-meeting-manager");
  const latestMeetingNote = shellState.memoryContext.events.find((event) => event.sourceType === "meeting_note");
  const latestHealthReport = shellState.memoryContext.events.find((event) => event.sourceLabel === "task_guardian.health.pc");
  const latestServerHealthReport = shellState.memoryContext.events.find(
    (event) => event.sourceLabel === "task_guardian.health.server",
  );
  const deliveryStatus = shellState.memoryContext.events.find(
    (event) => event.sourceLabel === "task_guardian.delivery.external_caveat",
  );
  const connectorRecall = shellState.memoryContext.events.find((event) => event.sourceType === "connector");
  const optionalConnectors = shellState.connectorCards.filter((connector) => connector.kind !== "sms");
  const liveQaUnknownCount = shellState.connectorCards.filter(
    (connector) => connector.setupStatus === "live_qa_unknown",
  ).length;
  const unsupportedConnector = shellState.connectorCards.find((connector) => connector.kind === "sms");

  return (
    <section className="page-section">
      <div className="intro-row">
        <div>
          <p className="section-label">Static public shell</p>
          <h2>Sparkbot desk for AI office work</h2>
          <p>
            The Workstation is the shell floor: Main Chat is the operator channel, Round Table is the hero meeting
            room, and model seats organize local-first setup with no provider calls.
          </p>
          <p className="preview-map">Static preview only. No backend, provider, connector, memory, scheduler, or hardware runtime is active.</p>
        </div>
        <aside className="status-card">
          <span>Public preview gate</span>
          <strong>GREEN_CANDIDATE / NOT_RELEASED / final public home TBD.</strong>
        </aside>
      </div>

      <section className="demo-story-grid" aria-label="Workstation demo storyline">
        {demoStorySteps.map(([title, detail]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{detail}</p>
          </article>
        ))}
      </section>

      <section className="product-snapshot-grid" aria-label="Sparkbot Shell public preview summary">
        {deskHighlights.map(([title, detail]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{detail}</p>
          </article>
        ))}
      </section>

      <div className="workstation-grid primary">
        {primaryWorkstationPanels.map((panel) => (
          <a className="workstation-card" href={panel.route} key={panel.title}>
            <span>{panel.status}</span>
            <h3>{panel.title}</h3>
            <p>{panel.summary}</p>
          </a>
        ))}
      </div>

      <div className="workstation-grid secondary" aria-label="Workstation setup and preview links">
        {secondaryWorkstationPanels.map((panel) => (
          <a className="workstation-card compact" href={panel.route} key={panel.title}>
            <span>{panel.status}</span>
            <h3>{panel.title}</h3>
            <p>{panel.summary}</p>
          </a>
        ))}
      </div>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Operating floor status</p>
            <h2>Shared demo state</h2>
            <p>Fixture-backed counters show how the product shell organizes seats, agents, and safety posture.</p>
          </div>
        </div>
        <div className="floor-status-grid">
          <article>
            <strong>{activeSeats.length}</strong>
            <span>enabled model seats</span>
          </article>
          <article>
            <strong>{shellState.specialtyAgents.length}</strong>
            <span>specialty agents</span>
          </article>
          <article>
            <strong>{manager?.name ?? "Meeting Manager"}</strong>
            <span>default Seat 1 concept</span>
          </article>
          <article>
            <strong>{shellState.guardrailProfile}</strong>
            <span>selected guardrail profile</span>
          </article>
        </div>
        <div className="runtime-boundary compact">
          <strong>Current demo room</strong>
          <p>{demoRoomFixture.title}. Files, memory, and tasks below are tied to this same room context.</p>
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Model seats</p>
            <h2>Chat, Round Table, Specialty Wing</h2>
            <p>Seats are named setup slots with model ID labels. No provider is called and no credential is stored.</p>
          </div>
        </div>
        <div className="seat-overview-grid">
          {shellState.modelSeats.map((seat) => (
            <article className="seat-overview" key={seat.id}>
              <div className="card-heading">
                <h3>{seat.label}</h3>
                <StatusBadge status={seat.setupStatus} />
              </div>
              <p>{seat.modelId}</p>
            </article>
          ))}
        </div>
      </section>

      <InviteWingPanel modelSeats={shellState.modelSeats} />
      <SpecialtyWingPanel agents={shellState.specialtyAgents} modelSeats={shellState.modelSeats} />
      <TaskGuardianPreview
        templates={shellState.taskGuardianTemplates}
        deliveryPreferences={shellState.taskDeliveryPreferences}
        healthReports={shellState.healthReportPreviews}
        connectorCards={shellState.connectorCards}
        contextEvents={shellState.memoryContext.events}
      />

      <section className="config-panel connector-floor-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Connector doors</p>
            <h2>Communication channels into Sparkbot</h2>
            <p>
              Telegram, Discord, Slack, and WhatsApp are optional configured channels later. Private recall needs linked
              identity or a time-limited PIN session, and live QA is still required.
            </p>
          </div>
          <a className="text-button" href="#/connectors">Open Connectors</a>
        </div>
        <div className="mini-card-grid">
          <article className="template-card">
            <strong>{optionalConnectors.length}</strong>
            <p>optional external connector shells with no real sends</p>
            <small>External delivery remains opt-in</small>
          </article>
          <article className="template-card">
            <strong>{liveQaUnknownCount}</strong>
            <p>connector previews marked live-QA unknown</p>
            <small>Do not claim private recall complete</small>
          </article>
          <article className="template-card">
            <strong>Fail closed</strong>
            <p>private meeting recall requires linked identity or PIN session in a later runtime</p>
            <small>No private memory recall runs here</small>
          </article>
          {unsupportedConnector ? (
            <article className="template-card">
              <strong>{unsupportedConnector.label}</strong>
              <p>{unsupportedConnector.caveat}</p>
              <small>Future/unsupported</small>
            </article>
          ) : null}
        </div>
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Shared company memory preview</p>
            <h2>Memory / context spine</h2>
            <p>
              Company memory is contract-only in this shell. Saved meeting summaries and safe health notes can become
              future context; drafts, credentials, and unverified connector recall stay excluded.
            </p>
          </div>
        </div>
        <div className="mini-card-grid">
          {latestMeetingNote ? (
            <article className="template-card">
              <strong>{latestMeetingNote.title}</strong>
              <p>{latestMeetingNote.summary}</p>
              <small>{latestMeetingNote.sourceLabel}</small>
            </article>
          ) : null}
          {latestHealthReport ? (
            <article className="template-card">
              <strong>{latestHealthReport.title}</strong>
              <p>{latestHealthReport.summary}</p>
              <small>{latestHealthReport.sourceLabel}</small>
            </article>
          ) : null}
          {latestServerHealthReport ? (
            <article className="template-card">
              <strong>{latestServerHealthReport.title}</strong>
              <p>{latestServerHealthReport.summary}</p>
              <small>{latestServerHealthReport.sourceLabel}</small>
            </article>
          ) : null}
          {deliveryStatus ? (
            <article className="template-card">
              <strong>External delivery caveat</strong>
              <p>{deliveryStatus.summary}</p>
              <small>{deliveryStatus.sourceLabel}</small>
            </article>
          ) : null}
          {connectorRecall ? (
            <article className="template-card">
              <strong>Connector recall status</strong>
              <p>{connectorRecall.summary}</p>
              <small>Code-gated / live QA unknown</small>
            </article>
          ) : null}
          <article className="template-card">
            <strong>{shellState.memoryContext.retrievalPreview.resultCount}</strong>
            <p>demo context sources included in Main Chat handoff preview</p>
            <small>Contract only</small>
          </article>
        </div>
      </section>

      <MemoryContextPreview
        events={shellState.memoryContext.events}
        retrievalPreview={shellState.memoryContext.retrievalPreview}
        compact
      />

      <StaticFixtureContentPreview />

      <LimaReadyLayerPanel />
    </section>
  );
}
