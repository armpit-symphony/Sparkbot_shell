import json
from pathlib import Path


def load_fixture() -> dict:
    path = Path("tests/fixtures/sparkbot_shell_ux_state_proof_packet.json")
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def test_sparkbot_shell_ux_state_proof_packet_fixture() -> None:
    fixture = load_fixture()

    required_keys = {
        "consumer_name",
        "reference_shell",
        "api_status",
        "source_branch",
        "runtime_behavior_added",
        "lima_runtime_wiring_added",
        "sparkbot_import_added",
        "sparkbot_code_copied",
        "haptic_implementation_added",
        "shell_owns_haptics",
        "lima_owns_haptics",
        "required_shell_states",
        "observed_shell_states",
        "missing_shell_states",
        "packet_statuses",
        "kernel_status_mappings",
        "evidence_files",
        "blockers",
        "recommended_next_step",
    }
    assert required_keys.issubset(fixture)

    assert fixture["runtime_behavior_added"] is False
    assert fixture["lima_runtime_wiring_added"] is False
    assert fixture["sparkbot_import_added"] is False
    assert fixture["sparkbot_code_copied"] is False
    assert fixture["haptic_implementation_added"] is False
    assert fixture["shell_owns_haptics"] is True
    assert fixture["lima_owns_haptics"] is False

    required_states = {
        "received",
        "thinking",
        "needs_approval",
        "blocked",
        "explaining_plan",
        "preview_ready",
        "running_not_allowed_yet",
        "completed",
        "deferred",
        "failed_safe",
    }
    assert required_states.issubset(set(fixture["required_shell_states"]))
    assert required_states.issubset(set(fixture["observed_shell_states"]))

    assert {"preview_only", "explain_plan", "blocked", "deferred"}.issubset(
        set(fixture["packet_statuses"])
    )

    mappings = fixture["kernel_status_mappings"]
    assert mappings["proposed"] == "preview_only"
    assert mappings["needs_review"] == "explain_plan"
    assert mappings["blocked"] == "blocked"
    assert mappings["deferred"] == "packet-only for now"

    required_docs = {
        "docs/proof_packets/SPARKBOT_SHELL_UX_STATE_PROOF_PACKET.md",
        "docs/audits/SPARKBOT_SHELL_UX_STATE_PROOF_AUDIT.md",
        "docs/proof_packets/SPARKBOT_REFERENCE_UX_NOTES.md",
    }
    assert required_docs.issubset(set(fixture["evidence_files"]))

    for evidence_file in fixture["evidence_files"]:
        assert Path(evidence_file).exists()
