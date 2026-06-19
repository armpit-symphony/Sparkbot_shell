import { useEffect, useMemo, useState } from "react";
import type { LocalRuntimeKind, ModelSeat } from "../types/shell";
import type { LocalModelProbeResult, LocalModelRuntimeState } from "../types/workspace";

type LocalRuntimeInstallStep = {
  runtime: LocalRuntimeKind;
  label: string;
  installUrl: string;
  quickstart: string;
  checkPath: string;
};

type SettingsPageProps = {
  modelSeats: ModelSeat[];
  runtimeChecks: Record<string, LocalModelProbeResult>;
  onModelSeatsChange: (next: ModelSeat[]) => void;
  onRuntimeCheck: (seatId: string, next: LocalModelProbeResult) => void;
};

const onboardingSteps: LocalRuntimeInstallStep[] = [
  {
    runtime: "ollama",
    label: "Ollama (local runtime)",
    installUrl: "https://ollama.com/download",
    quickstart: "Install, then `ollama pull llama3.1`.",
    checkPath: "/api/version",
  },
  {
    runtime: "lmstudio",
    label: "LM Studio",
    installUrl: "https://lmstudio.ai/",
    quickstart: "Run Local Server and copy the API endpoint URL.",
    checkPath: "/v1/models",
  },
  {
    runtime: "llamacpp",
    label: "llama.cpp / llama-server",
    installUrl: "https://github.com/ggerganov/llama.cpp",
    quickstart: "Run llama-server and expose the HTTP endpoint.",
    checkPath: "/v1/models",
  },
  {
    runtime: "openai_compatible",
    label: "OpenAI-compatible runtime",
    installUrl: "https://platform.openai.com/docs/api-reference",
    quickstart: "Expose /v1/models and /v1/chat/completions locally.",
    checkPath: "/v1/models",
  },
  {
    runtime: "custom",
    label: "Custom runtime URL",
    installUrl: "https://example.com/local-ai",
    quickstart: "Point base URL to your local-compatible API root.",
    checkPath: "/v1/models",
  },
];

const localSeatFallback: LocalModelProbeResult = {
  checkedAt: "not checked",
  details: "No runtime check has been run.",
  detectedModels: "",
  endpoint: "",
  state: "unknown",
};

function nowIso() {
  return new Date().toISOString();
}

function statusToLabel(state: LocalModelRuntimeState | "unknown") {
  if (state === "running") return "running";
  if (state === "not_running") return "not detected";
  if (state === "error") return "check failed";
  return "not checked";
}

function resolveCheckEndpoint(baseUrl: string, runtime: LocalRuntimeKind) {
  const defaultStep = onboardingSteps.find((step) => step.runtime === runtime) ?? onboardingSteps[0];
  const normalizedBase = (baseUrl || "").replace(/\/$/, "");
  const checkPath = defaultStep.checkPath;
  if (!normalizedBase) return "";
  if (normalizedBase.includes("/v1/models") || normalizedBase.includes("/api/version")) {
    return normalizedBase;
  }
  if (/(?:\/v1|\/api)$/.test(normalizedBase)) {
    return normalizedBase.endsWith("/v1")
      ? `${normalizedBase}/models`
      : `${normalizedBase}/version`;
  }
  return `${normalizedBase}${checkPath}`;
}

function isLocalEndpointAllowed(endpoint: string) {
  try {
    const url = new URL(endpoint);
    return ["localhost", "127.0.0.1", "::1"].includes(url.hostname);
  } catch {
    return false;
  }
}

export function SettingsPage({
  modelSeats,
  runtimeChecks,
  onModelSeatsChange,
  onRuntimeCheck,
}: SettingsPageProps) {
  const localSeats = useMemo(
    () =>
      modelSeats.filter((seat) => seat.providerKind === "local_ai" || seat.providerKind === "openai_compatible"),
    [modelSeats],
  );
  const [selectedSeatId, setSelectedSeatId] = useState(localSeats[0]?.id ?? "");
  const [editableModelId, setEditableModelId] = useState(localSeats[0]?.modelId ?? "");
  const [editableRuntime, setEditableRuntime] = useState<LocalRuntimeKind>(localSeats[0]?.localRuntime ?? "custom");
  const [editableBaseUrl, setEditableBaseUrl] = useState(localSeats[0]?.baseUrl ?? "");
  const [confirmingSeatId, setConfirmingSeatId] = useState<string | null>(null);

  const selectedSeat = useMemo(
    () => localSeats.find((seat) => seat.id === selectedSeatId) ?? localSeats[0],
    [localSeats, selectedSeatId],
  );
  const selectedRuntimeCheck = useMemo(
    () => runtimeChecks[selectedSeat?.id ?? ""] ?? localSeatFallback,
    [runtimeChecks, selectedSeat?.id],
  );

  useEffect(() => {
    const fallbackSeat = localSeats[0];
    if (!fallbackSeat) {
      setSelectedSeatId("");
      setEditableModelId("");
      setEditableRuntime("custom");
      setEditableBaseUrl("");
      return;
    }

    if (!selectedSeat) {
      setSelectedSeatId(fallbackSeat.id);
      return;
    }
    setEditableModelId(selectedSeat.modelId);
    setEditableRuntime(selectedSeat.localRuntime ?? "custom");
    setEditableBaseUrl(selectedSeat.baseUrl ?? "");
  }, [localSeats, selectedSeat]);

  function selectSeat(seatId: string) {
    const nextSeat = localSeats.find((seat) => seat.id === seatId);
    if (!nextSeat) return;
    setSelectedSeatId(nextSeat.id);
    setEditableModelId(nextSeat.modelId);
    setEditableRuntime(nextSeat.localRuntime ?? "custom");
    setEditableBaseUrl(nextSeat.baseUrl ?? "");
  }

  function updateSelectedSeat() {
    if (!selectedSeat) return;
    onModelSeatsChange(
      modelSeats.map((seat) =>
        seat.id === selectedSeat.id
          ? {
              ...seat,
              modelId: editableModelId.trim() || seat.modelId,
              baseUrl: editableBaseUrl.trim() || seat.baseUrl,
              localRuntime: editableRuntime,
              setupMessage: seat.setupMessage,
            }
          : seat,
      ),
    );
  }

  async function confirmModelRuntime() {
    if (!selectedSeat) return;
    setConfirmingSeatId(selectedSeat.id);
    const endpoint = resolveCheckEndpoint(editableBaseUrl, editableRuntime) || "http://127.0.0.1:11434/api/version";
    if (!isLocalEndpointAllowed(endpoint)) {
      onRuntimeCheck(selectedSeat.id, {
        checkedAt: nowIso(),
        state: "error",
        details: "Only localhost or loopback endpoints can be checked from this shell.",
        endpoint,
        detectedModels: "",
      });
      setConfirmingSeatId(null);
      return;
    }
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000);
      const response = await fetch(endpoint, {
        method: "GET",
        signal: controller.signal,
        mode: "cors",
      });
      clearTimeout(timeout);
      if (!response.ok) {
        onRuntimeCheck(selectedSeat.id, {
          checkedAt: nowIso(),
          state: "not_running",
          details: `Runtime returned ${response.status} ${response.statusText}.`,
          endpoint,
          detectedModels: "",
        });
        return;
      }
      const text = await response.text();
      onRuntimeCheck(selectedSeat.id, {
        checkedAt: nowIso(),
        state: "running",
        details: "Endpoint responded during shell check.",
        endpoint,
        detectedModels: text.slice(0, 160),
      });
    } catch (error) {
      onRuntimeCheck(selectedSeat.id, {
        checkedAt: nowIso(),
        state: "error",
        details: error instanceof Error ? error.message : "Runtime check failed.",
        endpoint,
        detectedModels: "",
      });
    } finally {
      setConfirmingSeatId(null);
    }
  }

  return (
    <section className="page-section">
      <div className="intro-row">
        <div>
          <p className="section-label">Settings shell</p>
          <h2>Local AI settings</h2>
          <p>
            Configure local seats and confirm where a model is currently running. This is the installation/validation route
            into local AI work.
          </p>
          <p className="preview-map">
            This page stores setup labels in shell state only. It is explicitly a local preview and does not run chat completions,
            provider calls, or credential checks.
          </p>
        </div>
        <aside className="status-card">
          <span>Local seats</span>
          <strong>{localSeats.length} local-capable model seats.</strong>
          <span>No credentials or secrets are stored in this shell.</span>
        </aside>
      </div>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Install & onboarding</p>
            <h2>Clear route to local model install</h2>
            <p>Each runtime links to install documentation and a quickstart for first model load.</p>
          </div>
        </div>
        <div className="runtime-options">
          {onboardingSteps.map((step) => (
            <article className="flow-card" key={step.runtime}>
              <div className="card-heading">
                <h3>{step.label}</h3>
                <a className="text-button" href={step.installUrl} target="_blank" rel="noreferrer">
                  Install docs
                </a>
              </div>
              <small>{`Quickstart: ${step.quickstart}`}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="model-config-grid">
        <section className="model-seat-list">
          <div className="card-heading">
            <div>
              <p className="section-label">Local seats</p>
              <h2>Select seat to edit</h2>
              <p>Only seats with local-capable provider kind are editable here.</p>
            </div>
          </div>
          {localSeats.map((seat) => (
            <article className="model-seat-card" key={seat.id}>
              <div className="card-heading">
                <div>
                  <h3>{seat.label}</h3>
                  <p>{seat.provider}</p>
                </div>
                <StatusBadge state={runtimeChecks[seat.id]?.state ?? "unknown"} />
              </div>
              <p>{seat.modelId}</p>
              <button type="button" className="text-button" onClick={() => selectSeat(seat.id)}>
                Edit seat
              </button>
            </article>
          ))}
          {!localSeats.length ? <p>No local-capable seats configured.</p> : null}
        </section>

        {selectedSeat ? (
          <section className="config-panel">
            <div className="card-heading">
              <div>
                <p className="section-label">Seat details</p>
                <h2>{selectedSeat.label}</h2>
                <p>Edit local runtime and model labels for this seat.</p>
              </div>
            </div>
            <div className="form-grid">
              <label>
                <span>Model ID</span>
                <input value={editableModelId} onChange={(event) => setEditableModelId(event.currentTarget.value)} />
              </label>
              <label>
                <span>Local runtime</span>
                <select
                  value={editableRuntime}
                  onChange={(event) => setEditableRuntime(event.currentTarget.value as LocalRuntimeKind)}
                >
                  {onboardingSteps.map((step) => (
                    <option value={step.runtime} key={step.runtime}>
                      {step.runtime}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Base URL</span>
                <input
                  value={editableBaseUrl}
                  onChange={(event) => setEditableBaseUrl(event.currentTarget.value)}
                  placeholder="http://localhost:11434"
                />
              </label>
              <label>
                <span>Current status</span>
                <input value={statusToLabel(selectedRuntimeCheck.state)} readOnly />
              </label>
            </div>
            <div className="button-row">
              <button type="button" onClick={updateSelectedSeat}>
                Save seat setup
              </button>
              <button
                type="button"
                className="text-button"
                onClick={confirmModelRuntime}
                disabled={confirmingSeatId === selectedSeat.id}
              >
                {confirmingSeatId === selectedSeat.id ? "Checking model" : "Confirm model running"}
              </button>
            </div>

            <div className="runtime-boundary compact">
              <strong>Runtime confirmation</strong>
              <p>{selectedRuntimeCheck.details}</p>
              <small>Checked: {selectedRuntimeCheck.checkedAt}</small>
              <small>Endpoint: {selectedRuntimeCheck.endpoint || "not set"}</small>
              {selectedRuntimeCheck.detectedModels ? (
                <small>Detected payload sample: {selectedRuntimeCheck.detectedModels}</small>
              ) : null}
            </div>
          </section>
        ) : null}
      </section>

      <section className="config-panel">
        <div className="card-heading">
          <div>
            <p className="section-label">Running confirmation</p>
            <h2>Seat-level execution readiness</h2>
            <p>Use this list to confirm which seats are ready for assigned work programs.</p>
          </div>
        </div>
        <div className="mini-card-grid">
          {modelSeats.map((seat) => (
            <article className="template-card" key={seat.id}>
              <strong>{seat.label}</strong>
              <p>{seat.modelId}</p>
              <small>{seat.baseUrl ?? "Base URL not set"}</small>
              <small>Provider kind: {seat.providerKind}</small>
              <StatusBadge state={runtimeChecks[seat.id]?.state ?? "unknown"} />
              <small>{runtimeChecks[seat.id]?.details ?? "No check run yet."}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="runtime-boundary">
        <strong>Boundary note</strong>
        <p>
          This settings page performs optional endpoint reachability checks only. It does not persist secrets, route chat
          calls, or execute files.
        </p>
      </section>
    </section>
  );
}

function StatusBadge({ state }: { state: LocalModelRuntimeState | "unknown" }) {
  const className = state === "running" ? "configured" : state === "error" ? "unreachable" : "setup_needed";
  return <span className={`status-badge ${className}`}>{statusToLabel(state)}</span>;
}
