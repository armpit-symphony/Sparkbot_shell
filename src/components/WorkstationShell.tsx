import type { ShellState } from "../types/shell";
import { InviteWingPanel } from "./InviteWingPanel";
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

  return (
    <section className="page-section">
      <div className="intro-row">
        <div>
          <p className="section-label">Public Layer 3</p>
          <h2>Workstation operating floor</h2>
          <p>
            The Workstation is the company floor. Main Chat is the middle-person, Round Table is the meeting room, and
            model seats power Chat, Round Table, and Specialty Wing.
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
        deliveryChannels={shellState.deliveryChannels}
      />

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Shared company memory preview</p>
            <h2>Meeting notes and context direction</h2>
          </div>
        </div>
        <div className="mini-card-grid">
          {shellState.meetingNotePreviews.map((note) => (
            <article className="template-card" key={note.id}>
              <strong>{note.title}</strong>
              <p>{note.summary}</p>
              <small>{note.source}</small>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
