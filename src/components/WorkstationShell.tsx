import type { ShellState } from "../types/shell";
import { InviteWingPanel } from "./InviteWingPanel";
import { LimaReadyLayerPanel } from "./LimaReadyLayerPanel";
import { MockLimaContractPanel } from "./MockLimaContractPanel";
import { MemoryContextPreview } from "./MemoryContextPreview";
import { SpecialtyWingPanel } from "./SpecialtyWingPanel";
import { StaticFixtureContentPreview } from "./StaticFixtureContentPreview";
import { StatusBadge } from "./StatusBadge";
import { TaskGuardianPreview } from "./TaskGuardianPreview";
import { demoFileCards, demoMemoryCards, demoRoomFixture, demoTaskCards } from "../data/demoFixtureContent";

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

const modelStackDeskPlan = [
  { title: "Primary desk", match: "Primary", role: "Main operator seat" },
  { title: "Backup 1 desk", match: "Backup 1", role: "Fallback cloud seat" },
  { title: "Backup 2 desk", match: "Backup 2", role: "Optional alternate seat" },
  { title: "Heavy Hitter desk", match: "Heavy Hitter", role: "High-load local seat" },
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
  const modelStackDesks = modelStackDeskPlan.map((lane) => ({
    ...lane,
    seat: shellState.modelSeats.find((seat) => seat.label.includes(lane.match)),
  }));
  const inviteSeat = shellState.modelSeats.find((seat) => seat.label.includes("BYO"));
  const readyStackCount = modelStackDesks.filter((lane) => lane.seat?.setupStatus === "configured").length;
  const demoFixtureCount = demoFileCards.length + demoMemoryCards.length + demoTaskCards.length;

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

      <section className="config-panel office-floor-panel" aria-label="Sparkbot Workstation office-floor preview">
        <div className="card-heading">
          <div>
            <p className="section-label">AI office floor preview</p>
            <h2>Workstation map: desks, meeting hub, safety, and fixtures</h2>
            <p>
              Manual static adaptation inspired by R&D workstation layout concepts only. No runtime desks, terminal
              sessions, provider calls, connector sends, or hardware controls are active.
            </p>
          </div>
        </div>
        <div className="office-floor-grid">
          <article className="office-zone">
            <span className="zone-tag">Main Desk</span>
            <h3>Sparkbot desk</h3>
            <p>Primary operator surface for chat, routing, and workspace flow.</p>
            <small>Static preview. No live runtime channel.</small>
            <a className="inline-link" href="#/chat">
              Open Chat shell
            </a>
          </article>
          <article className="office-zone">
            <span className="zone-tag">Meeting Hub</span>
            <h3>Round Table</h3>
            <p>Hero room for framing, perspectives, synthesis, assignment, and recommendation artifact preview.</p>
            <small>Demo fixture only. No live room API or agent calls.</small>
            <a className="inline-link" href="#/roundtable">
              Open Round Table shell
            </a>
          </article>
          <article className="office-zone">
            <span className="zone-tag">Safety Posture</span>
            <h3>Guardian basics</h3>
            <p>Risky actions are marked for future confirmation gates.</p>
            <small>No approval enforcement runtime is implemented.</small>
            <a className="inline-link" href="#/command-center">
              Open Command Center shell
            </a>
          </article>
          <article className="office-zone">
            <span className="zone-tag">Fixture Context</span>
            <h3>Files, memory, tasks</h3>
            <p>{`${demoFixtureCount} demo fixtures are tied to ${demoRoomFixture.title}.`}</p>
            <small>Static cards only. No persistence or scheduling.</small>
          </article>
          <article className="office-zone">
            <span className="zone-tag">Robo Teaser</span>
            <h3>Robo preview wing</h3>
            <p>Future robotics and IoT direction remains a teaser surface only.</p>
            <small>No hardware control, MCP calls, or runtime bridge.</small>
            <a className="inline-link" href="#/robo-preview">
              Open Robo teaser
            </a>
          </article>
          <article className="office-zone">
            <span className="zone-tag">LIMA Future Gate</span>
            <h3>LIMA contract-ready layer</h3>
            <p>Shell UX is staged for future contract/install integration phases.</p>
            <small>No LIMA runtime bundled or wired in this preview.</small>
          </article>
        </div>
      </section>

      <section className="config-panel desk-lanes-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Model stack desks</p>
            <h2>Primary, backups, heavy-hitter, and invite seat</h2>
            <p>
              Desk cards clarify who sits where on the workstation floor. Seat states are static labels from fixture
              data and do not call providers.
            </p>
          </div>
        </div>
        <div className="desk-lane-grid">
          {modelStackDesks.map((desk) => (
            <article className="desk-lane-card" key={desk.title}>
              <div className="card-heading">
                <div>
                  <span className="zone-tag">{desk.title}</span>
                  <h3>{desk.seat?.label ?? "Unassigned desk"}</h3>
                </div>
                <StatusBadge status={desk.seat?.setupStatus ?? "setup_needed"} />
              </div>
              <p>{desk.role}</p>
              <small>{desk.seat?.modelId ?? "No model assigned in this fixture."}</small>
            </article>
          ))}
          <article className="desk-lane-card">
            <div className="card-heading">
              <div>
                <span className="zone-tag">Invite seat</span>
                <h3>{inviteSeat?.label ?? "BYO seat placeholder"}</h3>
              </div>
              <StatusBadge status={inviteSeat?.setupStatus ?? "setup_needed"} />
            </div>
            <p>Bring-your-own model seat concept for future user-defined setup.</p>
            <small>No key entry or provider setup runtime exists in this shell.</small>
          </article>
        </div>
        <div className="floor-status-grid">
          <article>
            <strong>{readyStackCount}</strong>
            <span>configured stack desks</span>
          </article>
          <article>
            <strong>{shellState.specialtyAgents.length}</strong>
            <span>specialty wing agents</span>
          </article>
          <article>
            <strong>{demoRoomFixture.files.length}</strong>
            <span>demo room files</span>
          </article>
          <article>
            <strong>{demoRoomFixture.tasks.length}</strong>
            <span>demo room tasks</span>
          </article>
        </div>
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

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Station-to-fixture tie-in</p>
            <h2>Demo room context for the office floor</h2>
            <p>
              Workstation desks, Round Table output, and Files/Memory/Tasks fixtures all point to the same demo room.
            </p>
          </div>
        </div>
        <div className="mini-card-grid">
          <article className="template-card">
            <strong>{demoRoomFixture.title}</strong>
            <p>{demoRoomFixture.roundTableOutcome}</p>
            <small>Round Table artifact preview</small>
          </article>
          <article className="template-card">
            <strong>Safety boundary</strong>
            <p>{demoRoomFixture.guardianPosture}</p>
            <small>No runtime enforcement in shell preview</small>
          </article>
          <article className="template-card">
            <strong>Contract-ready next step</strong>
            <p>{demoRoomFixture.limaReadiness}</p>
            <small>Future LIMA contract layer only</small>
          </article>
          <article className="template-card">
            <strong>Runtime-disabled posture</strong>
            <p>No provider calls, connector calls, scheduler jobs, persistence, or hardware control.</p>
            <small>Static preview / demo fixture</small>
          </article>
        </div>
      </section>

      <StaticFixtureContentPreview />

      <LimaReadyLayerPanel />
      <MockLimaContractPanel />
    </section>
  );
}
