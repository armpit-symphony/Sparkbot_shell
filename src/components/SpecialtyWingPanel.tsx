import type { ModelSeat, SpecialtyAgent } from "../types/shell";

type SpecialtyWingPanelProps = {
  agents: SpecialtyAgent[];
  modelSeats: ModelSeat[];
  onAgentsChange?: (agents: SpecialtyAgent[]) => void;
};

function seatLabel(modelSeats: ModelSeat[], seatId: string) {
  return modelSeats.find((seat) => seat.id === seatId)?.label ?? "Unassigned model seat";
}

export function SpecialtyWingPanel({ agents, modelSeats, onAgentsChange }: SpecialtyWingPanelProps) {
  function updateAgentSeat(agentId: string, modelSeatId: string) {
    if (!onAgentsChange) return;
    onAgentsChange(agents.map((agent) => (agent.id === agentId ? { ...agent, modelSeatId } : agent)));
  }

  return (
    <section className="config-panel">
      <div className="card-heading">
        <div>
          <p className="section-label">Specialty Wing</p>
          <h2>Specialty agents</h2>
          <p>
            Specialty Wing cards are configurable role/skill-agent previews that can be assigned to Round Table seats
            later. Built-ins are locked defaults; custom agents are editable only in this local shell state.
          </p>
        </div>
      </div>

      <div className="agent-grid">
        {agents.map((agent) => (
          <article className="agent-card" key={agent.id}>
            <div className="card-heading">
              <div>
                <h3>{agent.name}</h3>
                <p>{agent.role}</p>
              </div>
              <span className={agent.locked ? "status-badge disabled" : "status-badge configured"}>
                {agent.locked ? "Locked built-in" : "Custom shell"}
              </span>
            </div>
            {agent.defaultSeat ? <strong className="seat-marker">Default Seat {agent.defaultSeat}</strong> : null}
            <p>{agent.description}</p>
            <label>
              <span>Model-seat assignment</span>
              <select
                value={agent.modelSeatId}
                onChange={(event) => updateAgentSeat(agent.id, event.currentTarget.value)}
                disabled={!onAgentsChange}
              >
                {modelSeats.map((seat) => (
                  <option value={seat.id} key={seat.id}>
                    {seat.label}
                  </option>
                ))}
              </select>
            </label>
            <div className="seat-flags">
              {agent.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <small>Assigned to {seatLabel(modelSeats, agent.modelSeatId)}. No live model call is made.</small>
          </article>
        ))}
      </div>

      <div className="runtime-boundary compact">
        <strong>Agent boundary</strong>
        <p>
          No proprietary prompts, private workflow behavior, provider calls, or agent runtime is active in this preview.
        </p>
      </div>
    </section>
  );
}
