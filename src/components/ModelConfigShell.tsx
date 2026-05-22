import { useMemo, useState } from "react";
import type { GuardrailProfileName, ModelSeat } from "../types/shell";
import { LocalAiSetupPanel } from "./LocalAiSetupPanel";
import { ModelSeatCard } from "./ModelSeatCard";
import { ModelSeatEditor } from "./ModelSeatEditor";
import { SetupNotice } from "./SetupNotice";

type ModelConfigShellProps = {
  modelSeats: ModelSeat[];
  guardrailProfile: GuardrailProfileName;
  onModelSeatsChange: (seats: ModelSeat[]) => void;
  onGuardrailProfileChange: (profile: GuardrailProfileName) => void;
};

const guardrailProfiles: GuardrailProfileName[] = ["Personal", "Balanced", "Locked", "Custom"];

export function ModelConfigShell({
  modelSeats,
  guardrailProfile,
  onModelSeatsChange,
  onGuardrailProfileChange,
}: ModelConfigShellProps) {
  const [selectedSeatId, setSelectedSeatId] = useState(modelSeats[0]?.id ?? "");
  const selectedSeat = modelSeats.find((seat) => seat.id === selectedSeatId) ?? modelSeats[0];
  const localSeats = useMemo(
    () => modelSeats.filter((seat) => seat.providerKind === "local_ai" || seat.providerKind === "openai_compatible"),
    [modelSeats],
  );
  const selectedLocalSeat = localSeats.find((seat) => seat.id === selectedSeatId) ?? localSeats[0] ?? selectedSeat;

  function updateSeat(nextSeat: ModelSeat) {
    onModelSeatsChange(modelSeats.map((seat) => (seat.id === nextSeat.id ? nextSeat : seat)));
  }

  return (
    <section className="page-section">
      <div className="intro-row">
        <div>
          <p className="section-label">Public Layer 2</p>
          <h2>Command Center model config shell</h2>
          <p>
            Model stack, model-seat, Local AI, and guardrail profile shape for the public shell. All state is local demo
            state only.
          </p>
        </div>
        <aside className="status-card">
          <span>Credential boundary</span>
          <strong>Credentials are not stored in this shell layer.</strong>
        </aside>
      </div>

      <SetupNotice
        notice={{
          title: "Backend/Vault storage arrives later",
          message:
            "Save actions update local React state only. Provider keys and endpoint credential values are not accepted.",
          severity: "info",
        }}
      />

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Guardrails</p>
            <h2>Public profile labels</h2>
            <p>No Guardian internals or policy engine are imported in Layer 2.</p>
          </div>
        </div>
        <div className="guardrail-tabs">
          {guardrailProfiles.map((profile) => (
            <button
              className={profile === guardrailProfile ? "guardrail-tab active" : "guardrail-tab"}
              key={profile}
              type="button"
              onClick={() => onGuardrailProfileChange(profile)}
            >
              {profile}
            </button>
          ))}
        </div>
      </section>

      <section className="model-config-grid">
        <div className="model-seat-list">
          <div className="card-heading">
            <div>
              <p className="section-label">Model seats</p>
              <h2>Shell state</h2>
            </div>
          </div>
          {modelSeats.map((seat) => (
            <ModelSeatCard
              key={seat.id}
              seat={seat}
              selected={seat.id === selectedSeat?.id}
              onSelect={setSelectedSeatId}
            />
          ))}
        </div>

        {selectedSeat ? (
          <section className="config-panel">
            <div className="card-heading">
              <div>
                <p className="section-label">Editor shell</p>
                <h2>{selectedSeat.label}</h2>
                <p>Save updates local demo state only.</p>
              </div>
            </div>
            <ModelSeatEditor seat={selectedSeat} onChange={updateSeat} />
          </section>
        ) : null}
      </section>

      {selectedLocalSeat ? (
        <LocalAiSetupPanel
          localSeats={localSeats}
          selectedSeat={selectedLocalSeat}
          onSelect={setSelectedSeatId}
          onUpdate={updateSeat}
        />
      ) : null}

      <div className="runtime-boundary">
        <strong>Runtime boundary</strong>
        <p>
          The model config shell does not persist settings outside component state, call model providers, check Local AI
          endpoints, or store credentials.
        </p>
      </div>
    </section>
  );
}
