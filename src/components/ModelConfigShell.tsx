import { useMemo, useState } from "react";
import type {
  GuardrailProfile,
  GuardrailProfileName,
  ModelSeat,
  SpecialtyAgent,
} from "../types/shell";
import type { HealthReportPreview, TaskDeliveryPreference, TaskGuardianTemplate } from "../types/taskGuardian";
import { GuardrailProfileShell } from "./GuardrailProfileShell";
import { InviteWingPanel } from "./InviteWingPanel";
import { LocalAiSetupPanel } from "./LocalAiSetupPanel";
import { ModelSeatCard } from "./ModelSeatCard";
import { ModelSeatEditor } from "./ModelSeatEditor";
import { SetupNotice } from "./SetupNotice";
import { SpecialtyWingPanel } from "./SpecialtyWingPanel";
import { TaskGuardianPreview } from "./TaskGuardianPreview";

type ModelConfigShellProps = {
  modelSeats: ModelSeat[];
  specialtyAgents: SpecialtyAgent[];
  guardrailProfiles: GuardrailProfile[];
  guardrailProfile: GuardrailProfileName;
  taskGuardianTemplates: TaskGuardianTemplate[];
  taskDeliveryPreferences: TaskDeliveryPreference[];
  healthReportPreviews: HealthReportPreview[];
  onModelSeatsChange: (seats: ModelSeat[]) => void;
  onSpecialtyAgentsChange: (agents: SpecialtyAgent[]) => void;
  onGuardrailProfilesChange: (profiles: GuardrailProfile[]) => void;
  onGuardrailProfileChange: (profile: GuardrailProfileName) => void;
};

export function ModelConfigShell({
  modelSeats,
  specialtyAgents,
  guardrailProfiles,
  guardrailProfile,
  taskGuardianTemplates,
  taskDeliveryPreferences,
  healthReportPreviews,
  onModelSeatsChange,
  onSpecialtyAgentsChange,
  onGuardrailProfilesChange,
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

      <InviteWingPanel modelSeats={modelSeats} onSelectSeat={setSelectedSeatId} />

      <SpecialtyWingPanel
        agents={specialtyAgents}
        modelSeats={modelSeats}
        onAgentsChange={onSpecialtyAgentsChange}
      />

      <GuardrailProfileShell
        profiles={guardrailProfiles}
        selectedProfile={guardrailProfile}
        onSelectProfile={onGuardrailProfileChange}
        onProfilesChange={onGuardrailProfilesChange}
      />

      <TaskGuardianPreview
        deliveryPreferences={taskDeliveryPreferences}
        healthReports={healthReportPreviews}
        templates={taskGuardianTemplates}
      />

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">System / Shell status</p>
            <h2>Layer 3 boundary</h2>
            <p>No backend runtime, credential storage, live connector sends, scheduler, or Guardian enforcement is active.</p>
          </div>
        </div>
        <div className="seat-flags">
          <span>Layer 3 shell only</span>
          <span>No credentials stored</span>
          <span>No live connector sends</span>
          <span>No runtime enforcement</span>
        </div>
      </section>

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
