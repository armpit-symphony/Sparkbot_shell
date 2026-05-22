import type { ShellState } from "../types/shell";
import { InviteWingPanel } from "./InviteWingPanel";
import { MemoryContextPreview } from "./MemoryContextPreview";
import { SpecialtyWingPanel } from "./SpecialtyWingPanel";
import { StatusBadge } from "./StatusBadge";
import { TaskGuardianPreview } from "./TaskGuardianPreview";

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

  return (
    <section className="page-section">
      <div className="intro-row">
        <div>
          <p className="section-label">Public Layer 6</p>
          <h2>Workstation operating floor</h2>
          <p>
            The Workstation is the company floor. Main Chat is the middle-person, Round Table is the meeting room, and
            model seats power Chat, Round Table, Specialty Wing, and Task Guardian health previews.
          </p>
        </div>
        <aside className="status-card">
          <span>Runtime boundary</span>
          <strong>Shell preview only. No backend, scheduler, connector, model, memory, or Robo runtime.</strong>
        </aside>
      </div>

      <div className="workstation-grid">
        {workstationPanels.map((panel) => (
          <a className="workstation-card" href={panel.route} key={panel.title}>
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
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Model seats</p>
            <h2>Chat, Round Table, Specialty Wing</h2>
            <p>These are public-safe setup badges only. No provider is called.</p>
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
        contextEvents={shellState.memoryContext.events}
      />

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Shared company memory preview</p>
            <h2>Memory / context spine</h2>
            <p>
              Company memory is contract-only in Layer 6. Saved meeting notes and safe health summaries can become
              future context; drafts, raw transcripts, credentials, and unverified connector recall stay excluded.
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
            <small>Layer 6 contract only</small>
          </article>
        </div>
      </section>

      <MemoryContextPreview
        events={shellState.memoryContext.events}
        retrievalPreview={shellState.memoryContext.retrievalPreview}
        compact
      />
    </section>
  );
}
