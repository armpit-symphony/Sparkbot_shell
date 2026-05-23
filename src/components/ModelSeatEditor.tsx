import type { ChangeEvent } from "react";
import type { LocalRuntimeKind, ModelProviderKind, ModelSeat, ModelSeatSetupStatus } from "../types/shell";

type ModelSeatEditorProps = {
  seat: ModelSeat;
  onChange: (seat: ModelSeat) => void;
};

const providerKinds: ModelProviderKind[] = [
  "openai",
  "anthropic",
  "xai",
  "local_ai",
  "openai_compatible",
  "custom",
];

const localRuntimes: LocalRuntimeKind[] = [
  "ollama",
  "lmstudio",
  "llamacpp",
  "openai_compatible",
  "custom",
];

const setupStatuses: ModelSeatSetupStatus[] = ["configured", "setup_needed", "disabled", "unreachable"];

export function ModelSeatEditor({ seat, onChange }: ModelSeatEditorProps) {
  function updateField<K extends keyof ModelSeat>(field: K, value: ModelSeat[K]) {
    onChange({ ...seat, [field]: value });
  }

  function updateCheckbox(field: keyof Pick<ModelSeat, "enabled" | "showInChat" | "showInRoundTable" | "showInSpecialtyWing">) {
    return (event: ChangeEvent<HTMLInputElement>) => updateField(field, event.currentTarget.checked);
  }

  return (
    <form className="model-editor" onSubmit={(event) => event.preventDefault()}>
      <div className="form-grid">
        <label>
          <span>Label</span>
          <input value={seat.label} onChange={(event) => updateField("label", event.currentTarget.value)} />
        </label>
        <label>
          <span>Provider</span>
          <input value={seat.provider} onChange={(event) => updateField("provider", event.currentTarget.value)} />
        </label>
        <label>
          <span>Provider kind</span>
          <select
            value={seat.providerKind}
            onChange={(event) => updateField("providerKind", event.currentTarget.value as ModelProviderKind)}
          >
            {providerKinds.map((kind) => (
              <option value={kind} key={kind}>
                {kind}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Model ID</span>
          <input value={seat.modelId} onChange={(event) => updateField("modelId", event.currentTarget.value)} />
        </label>
        <label>
          <span>Setup status</span>
          <select
            value={seat.setupStatus}
            onChange={(event) => updateField("setupStatus", event.currentTarget.value as ModelSeatSetupStatus)}
          >
            {setupStatuses.map((status) => (
              <option value={status} key={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Auth boundary label</span>
          <input
            value={seat.authMode}
            placeholder="Label only - do not paste credentials"
            onChange={(event) => updateField("authMode", event.currentTarget.value)}
          />
        </label>
        <label>
          <span>Local runtime label</span>
          <select
            value={seat.localRuntime ?? "custom"}
            onChange={(event) => updateField("localRuntime", event.currentTarget.value as LocalRuntimeKind)}
          >
            {localRuntimes.map((runtime) => (
              <option value={runtime} key={runtime}>
                {runtime}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Base URL label</span>
          <input
            value={seat.baseUrl ?? ""}
            placeholder="http://localhost:11434"
            onChange={(event) => updateField("baseUrl", event.currentTarget.value)}
          />
        </label>
      </div>

      <div className="checkbox-row">
        <label>
          <input type="checkbox" checked={seat.enabled} onChange={updateCheckbox("enabled")} />
          <span>Enabled</span>
        </label>
        <label>
          <input type="checkbox" checked={seat.showInChat} onChange={updateCheckbox("showInChat")} />
          <span>Show in Chat</span>
        </label>
        <label>
          <input type="checkbox" checked={seat.showInRoundTable} onChange={updateCheckbox("showInRoundTable")} />
          <span>Show in Round Table</span>
        </label>
        <label>
          <input type="checkbox" checked={seat.showInSpecialtyWing} onChange={updateCheckbox("showInSpecialtyWing")} />
          <span>Show in Specialty Wing</span>
        </label>
      </div>

      <label>
        <span>Setup message</span>
        <input value={seat.setupMessage} onChange={(event) => updateField("setupMessage", event.currentTarget.value)} />
      </label>

      <label>
        <span>Notes</span>
        <textarea value={seat.notes} onChange={(event) => updateField("notes", event.currentTarget.value)} rows={3} />
      </label>

      <div className="runtime-boundary compact">
        <strong>Credential boundary</strong>
        <p>
          Credentials are not stored in this shell layer. Do not paste API keys, tokens, passwords, or connector secrets
          into demo fields. Backend/Vault storage arrives in a later runtime layer.
        </p>
      </div>
    </form>
  );
}
