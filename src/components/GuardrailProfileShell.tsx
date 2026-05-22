import type { GuardrailProfile, GuardrailProfileName } from "../types/shell";

type GuardrailProfileShellProps = {
  profiles: GuardrailProfile[];
  selectedProfile: GuardrailProfileName;
  onSelectProfile: (profile: GuardrailProfileName) => void;
  onProfilesChange?: (profiles: GuardrailProfile[]) => void;
};

export function GuardrailProfileShell({
  profiles,
  selectedProfile,
  onSelectProfile,
  onProfilesChange,
}: GuardrailProfileShellProps) {
  const selected = profiles.find((profile) => profile.name === selectedProfile) ?? profiles[0];

  function updateCustomBlockerText(value: string) {
    if (!onProfilesChange) return;
    onProfilesChange(
      profiles.map((profile) =>
        profile.name === "Custom" ? { ...profile, customBlockerText: value } : profile,
      ),
    );
  }

  return (
    <section className="config-panel">
      <div className="card-heading">
        <div>
          <p className="section-label">Guardrails / Security</p>
          <h2>Profile shell</h2>
          <p>Shell preview only. Enforcement arrives in a later runtime layer.</p>
        </div>
      </div>

      <div className="guardrail-tabs">
        {profiles.map((profile) => (
          <button
            className={profile.name === selectedProfile ? "guardrail-tab active" : "guardrail-tab"}
            key={profile.name}
            type="button"
            onClick={() => onSelectProfile(profile.name)}
          >
            {profile.name}
          </button>
        ))}
      </div>

      <article className="profile-detail">
        <h3>{selected.name}</h3>
        <p>{selected.summary}</p>
        <p>{selected.confirmationPosture}</p>
        <small>{selected.shellBehavior}</small>
      </article>

      {selectedProfile === "Custom" ? (
        <label>
          <span>Custom blocker text shell</span>
          <textarea
            value={selected.customBlockerText ?? ""}
            onChange={(event) => updateCustomBlockerText(event.currentTarget.value)}
            rows={3}
          />
        </label>
      ) : null}
    </section>
  );
}
