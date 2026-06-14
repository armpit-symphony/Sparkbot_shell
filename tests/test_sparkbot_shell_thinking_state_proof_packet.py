import json
from pathlib import Path


def load_fixture() -> dict:
    path = Path("tests/fixtures/sparkbot_shell_thinking_state_proof_packet.json")
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def test_thinking_state_proof_packet_fixture() -> None:
    fixture = load_fixture()

    assert fixture["proof_gap_id"] == "V1-G1"
    assert fixture["state_name"] == "thinking"
    assert fixture["source_backed_thinking"] is True
    assert fixture["docs_fixture_only_thinking"] is False
    assert fixture["sparkbot_shell_local_ui_behavior_added"] is True

    assert fixture["haptics_shell_owned"] is True
    assert fixture["lima_owns_haptics"] is False
    assert fixture["haptic_implementation_added"] is False
    assert fixture["lima_runtime_behavior_added"] is False
    assert fixture["lima_runtime_wiring_added"] is False
    assert fixture["sparkbot_code_copied_to_lima"] is False
    assert fixture["provider_model_routing_added"] is False
    assert fixture["guardian_decision_runtime_added"] is False
    assert fixture["approval_enforcement_added"] is False
    assert fixture["execution_dispatch_persistence_added"] is False
    assert fixture["browser_file_network_device_robotics_behavior_added"] is False
    assert fixture["production_readiness_claimed"] is False

    source_files = set(fixture["thinking_source_files"])
    assert {
        "src/types/shell.ts",
        "src/components/ChatShell.tsx",
        "src/styles.css",
    }.issubset(source_files)

    transitions = {(entry["from"], entry["to"]) for entry in fixture["state_transitions"]}
    assert ("received", "thinking") in transitions
    assert ("thinking", "completed") in transitions

    assert fixture["desktop_behavior_reviewed"] is True
    assert fixture["mobile_behavior_reviewed"] is True

    for source_file in source_files:
        assert Path(source_file).exists()


def test_thinking_state_is_source_backed() -> None:
    chat_shell = Path("src/components/ChatShell.tsx").read_text(encoding="utf-8")
    shell_types = Path("src/types/shell.ts").read_text(encoding="utf-8")
    styles = Path("src/styles.css").read_text(encoding="utf-8")

    assert 'shellState: "received"' in chat_shell
    assert 'shellState: "thinking"' in chat_shell
    assert 'shellState: "completed"' in chat_shell
    assert "window.setTimeout" in chat_shell
    assert "No provider, retrieval service, connector, or LIMA runtime was called" in chat_shell
    assert 'shellState?: "received" | "thinking" | "completed"' in shell_types
    assert ".chat-message.thinking" in styles
    assert ".chat-state-pill" in styles
