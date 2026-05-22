import type { LocalRuntimeKind, ModelSeat } from "../types/shell";
import { StatusBadge } from "./StatusBadge";

type LocalAiSetupPanelProps = {
  localSeats: ModelSeat[];
  selectedSeat: ModelSeat;
  onSelect: (seatId: string) => void;
  onUpdate: (seat: ModelSeat) => void;
};

const runtimeOptions: Array<{ kind: LocalRuntimeKind; label: string; defaultBaseUrl: string }> = [
  { kind: "ollama", label: "Ollama", defaultBaseUrl: "http://localhost:11434" },
  { kind: "lmstudio", label: "LM Studio", defaultBaseUrl: "http://localhost:1234/v1" },
  { kind: "llamacpp", label: "llama.cpp / llama-server", defaultBaseUrl: "http://localhost:8080/v1" },
  { kind: "openai_compatible", label: "OpenAI-compatible local endpoint", defaultBaseUrl: "http://localhost:1234/v1" },
  { kind: "custom", label: "Custom local endpoint", defaultBaseUrl: "http://localhost:8000/v1" },
];

export function LocalAiSetupPanel({ localSeats, selectedSeat, onSelect, onUpdate }: LocalAiSetupPanelProps) {
  function updateSeat(next: Partial<ModelSeat>) {
    onUpdate({ ...selectedSeat, ...next });
  }

  return (
    <section className="config-panel">
      <div className="card-heading">
        <div>
          <p className="section-label">Local AI setup shell</p>
          <h2>Local provider shape</h2>
          <p>No live health check or network call runs in Layer 2.</p>
        </div>
        <StatusBadge status={selectedSeat.setupStatus} />
      </div>

      <div className="runtime-options">
        {runtimeOptions.map((option) => (
          <button
            className={selectedSeat.localRuntime === option.kind ? "runtime-option active" : "runtime-option"}
            key={option.kind}
            type="button"
            onClick={() =>
              updateSeat({
                localRuntime: option.kind,
                providerKind: option.kind === "openai_compatible" ? "openai_compatible" : "local_ai",
                baseUrl: option.defaultBaseUrl,
              })
            }
          >
            <strong>{option.label}</strong>
            <small>{option.defaultBaseUrl}</small>
          </button>
        ))}
      </div>

      <div className="form-grid">
        <label>
          <span>Local seat</span>
          <select value={selectedSeat.id} onChange={(event) => onSelect(event.currentTarget.value)}>
            {localSeats.map((seat) => (
              <option value={seat.id} key={seat.id}>
                {seat.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Base URL</span>
          <input value={selectedSeat.baseUrl ?? ""} onChange={(event) => updateSeat({ baseUrl: event.currentTarget.value })} />
        </label>
        <label>
          <span>Model ID</span>
          <input value={selectedSeat.modelId} onChange={(event) => updateSeat({ modelId: event.currentTarget.value })} />
        </label>
        <label>
          <span>Status</span>
          <input value={selectedSeat.setupMessage} onChange={(event) => updateSeat({ setupMessage: event.currentTarget.value })} />
        </label>
      </div>

      <div className="runtime-boundary compact">
        <strong>Live check boundary</strong>
        <p>
          This form only models setup shape. Runtime endpoint checks and local model calls arrive in a later layer.
        </p>
      </div>
    </section>
  );
}
