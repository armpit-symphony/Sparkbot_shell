import { useMemo, useState } from "react";
import type {
  GuardrailProfile,
  GuardrailProfileName,
  ModelSeat,
  SpecialtyAgent,
} from "../types/shell";
import type { ConnectorCard } from "../types/connectors";
import type { HealthReportPreview, TaskDeliveryPreference, TaskGuardianTemplate } from "../types/taskGuardian";
import { GuardrailProfileShell } from "./GuardrailProfileShell";
import { InviteWingPanel } from "./InviteWingPanel";
import { LocalAiSetupPanel } from "./LocalAiSetupPanel";
import { ModelSeatCard } from "./ModelSeatCard";
import { ModelSeatEditor } from "./ModelSeatEditor";
import { SetupNotice } from "./SetupNotice";
import { SpecialtyWingPanel } from "./SpecialtyWingPanel";
import { TaskGuardianPreview } from "./TaskGuardianPreview";

const commandCenterMap = [
  ["AI Setup / Model Seats", "Primary, Backup 1, Backup 2, Heavy Hitter, and BYO local seats."],
  ["Local AI", "Runtime labels for Ollama, LM Studio, llama.cpp, and compatible endpoints."],
  ["Specialty Wing", "Role/skill-agent cards assigned to model seats later."],
  ["Guardrails", "Profile labels and custom draft text; no enforcement yet."],
  ["Task Guardian", "Read-only health-check report and delivery previews."],
  ["Connectors", "Identity/PIN gates and live-QA caveats for optional channels."],
  ["Shell Status", "Static-only runtime boundary and no-credential reminders."],
] as const;

const stackRoles = [
  ["Primary", "seat-codex-openai"],
  ["Backup 1", "seat-claude-anthropic"],
  ["Backup 2", "seat-grok-xai"],
  ["Heavy hitter", "seat-local-ollama"],
  ["Bring-your-own", "seat-local-openai-compatible"],
] as const;

type ModelConfigShellProps = {
  modelSeats: ModelSeat[];
  specialtyAgents: SpecialtyAgent[];
  guardrailProfiles: GuardrailProfile[];
  guardrailProfile: GuardrailProfileName;
  taskGuardianTemplates: TaskGuardianTemplate[];
  taskDeliveryPreferences: TaskDeliveryPreference[];
  healthReportPreviews: HealthReportPreview[];
  connectorCards: ConnectorCard[];
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
  connectorCards,
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
          <p className="section-label">Command Center shell</p>
          <h2>Setup, model seats, and guardrails</h2>
          <p>
            Command Center groups model seats, Invite/Specialty Wing setup, Guardian posture, and Task Guardian
            previews. All state is local demo state only.
          </p>
        </div>
        <aside className="status-card">
          <span>Credential boundary</span>
          <strong>Credentials are not stored in this shell layer.</strong>
        </aside>
      </div>

      <SetupNotice
        notice={{
          title: "No credential storage in this preview",
          message:
            "Save actions update local React state only. Do not paste provider keys, endpoint credentials, connector secrets, or PIN values.",
          severity: "info",
        }}
      />

      <section className="command-center-map" aria-label="Command Center setup sections">
        {commandCenterMap.map(([title, detail]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{detail}</p>
          </article>
        ))}
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Model stack preview</p>
            <h2>Primary, backups, heavy hitter</h2>
            <p>
              Public setup shape only. No provider checks, endpoint probes, or key handling run in this shell.
            </p>
          </div>
        </div>
        <div className="model-stack-grid">
          {stackRoles.map(([role, seatId]) => {
            const seat = modelSeats.find((candidate) => candidate.id === seatId);
            if (!seat) return null;
            return (
              <article className="template-card" key={role}>
                <span className="seat-marker">{role}</span>
                <strong>{seat.label}</strong>
                <p>{seat.modelId}</p>
                <small>{seat.setupMessage}</small>
              </article>
            );
          })}
        </div>
      </section>

      <section className="model-config-grid">
        <div className="model-seat-list">
          <div className="card-heading">
            <div>
              <p className="section-label">Model seats</p>
              <h2>Named seat previews</h2>
              <p>A seat is the named slot; a model ID is the provider/runtime target label inside that slot.</p>
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
                <p>Edit labels and setup state only. This form does not accept credentials or call providers.</p>
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
        connectorCards={connectorCards}
        templates={taskGuardianTemplates}
      />

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">System / Shell status</p>
            <h2>Shell boundary</h2>
            <p>No backend runtime, credential storage, live connector sends, scheduler, or Guardian enforcement is active.</p>
          </div>
        </div>
        <div className="seat-flags">
          <span>Static shell only</span>
          <span>No credentials stored</span>
          <span>No live connector sends</span>
          <span>No runtime enforcement</span>
          <span>Future LIMA contracts only</span>
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
