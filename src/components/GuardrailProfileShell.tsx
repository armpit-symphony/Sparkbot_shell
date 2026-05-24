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
          <p>Profile labels are easier to scan here, but no guardrail enforcement runs in the shell preview.</p>
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

      <div className="guardian-basics-grid" aria-label="Guardian basics preview">
        <article>
          <strong>Confirm risky work</strong>
          <p>Future writes, sends, tool use, file changes, and elevated actions should require confirmation.</p>
        </article>
        <article>
          <strong>No execution today</strong>
          <p>The preview cannot enforce policy because it has no runtime execution path.</p>
        </article>
        <article>
          <strong>Contract-gated later</strong>
          <p>Future Guardian/LIMA integration must arrive through approved contracts and audit envelopes.</p>
        </article>
      </div>

      {selectedProfile === "Custom" ? (
        <label>
          <span>Custom blocker text draft</span>
          <textarea
            value={selected.customBlockerText ?? ""}
            onChange={(event) => updateCustomBlockerText(event.currentTarget.value)}
            rows={3}
          />
          <small>Draft text is not enforced and is not saved outside local component state.</small>
        </label>
      ) : null}
    </section>
  );
}
