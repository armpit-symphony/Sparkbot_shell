import json
from pathlib import Path


FIXTURE_PATH = Path("tests/fixtures/sparkbot_shell_lima_v1_g7_integration_proof_packet.json")


def load_fixture() -> dict:
    with FIXTURE_PATH.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def test_v1_g7_fixture_required_fields_and_boundaries() -> None:
    fixture = load_fixture()

    required_keys = {
        "proof_gap_id",
        "shell_repo",
        "proof_branch",
        "proof_packet_files",
        "validation_commands",
        "validation_results",
        "can_consume_lima_contract_outputs_as_static_evidence",
        "can_consume_lima_runtime_outputs_live",
        "lima_runtime_wiring_added",
        "lima_runtime_behavior_added",
        "runtime_exports_required_from_lima",
        "runtime_exports_changed_in_lima",
        "shell_response_states_evaluated",
        "source_backed_shell_response_states",
        "docs_fixture_only_shell_response_states",
        "missing_shell_response_states",
        "kernel_status_mappings",
        "packet_statuses",
        "haptic_intent_metadata_supported",
        "shell_owns_haptics",
        "lima_owns_haptic_device_behavior",
        "haptic_device_behavior_added",
        "destructive_edit_delete_requires_operator_approval",
        "approval_enforcement_status",
        "guardian_decision_status",
        "provider_model_routing_status",
        "audit_evidence_status",
        "tool_pack_scope_status",
        "connector_file_browser_network_device_robotics_status",
        "raw_natural_language_to_tool_execution_allowed",
        "sparkbot_code_copied_to_lima",
        "sparkbot_imported_by_lima",
        "lima_imported_by_shell_runtime",
        "production_readiness_claimed",
        "v1_product_readiness_claimed",
        "accepted_as_static_shell_evidence",
        "accepted_as_live_runtime_parity",
        "blockers",
        "recommended_next_step",
    }
    assert required_keys.issubset(fixture)

    assert fixture["proof_gap_id"] == "V1-G7"
    assert fixture["shell_repo"] == "Sparkbot_shell"
    assert fixture["proof_branch"] == "v1-g7-sparkbot-shell-integration-proof-packet"
    assert fixture["can_consume_lima_contract_outputs_as_static_evidence"] is True
    assert fixture["can_consume_lima_runtime_outputs_live"] is False
    assert fixture["lima_runtime_wiring_added"] is False
    assert fixture["lima_runtime_behavior_added"] is False
    assert fixture["runtime_exports_required_from_lima"] == []
    assert fixture["runtime_exports_changed_in_lima"] is False
    assert fixture["haptic_intent_metadata_supported"] is True
    assert fixture["shell_owns_haptics"] is True
    assert fixture["lima_owns_haptic_device_behavior"] is False
    assert fixture["haptic_device_behavior_added"] is False
    assert fixture["destructive_edit_delete_requires_operator_approval"] is True
    assert fixture["destructive_edit_delete_runtime_present"] is False
    assert fixture["raw_natural_language_to_tool_execution_allowed"] is False
    assert fixture["sparkbot_code_copied_to_lima"] is False
    assert fixture["sparkbot_imported_by_lima"] is False
    assert fixture["lima_imported_by_shell_runtime"] is False
    assert fixture["production_readiness_claimed"] is False
    assert fixture["v1_product_readiness_claimed"] is False
    assert fixture["accepted_as_static_shell_evidence"] is True
    assert fixture["accepted_as_live_runtime_parity"] is False


def test_v1_g7_required_state_and_status_coverage() -> None:
    fixture = load_fixture()

    required_states = {
        "received",
        "thinking",
        "preview_ready",
        "blocked",
        "needs_approval",
        "completed",
        "failed_safe",
        "deferred",
    }
    assert required_states == set(fixture["shell_response_states_evaluated"])

    source_backed = set(fixture["source_backed_shell_response_states"])
    assert {
        "received",
        "thinking",
        "preview_ready",
        "blocked",
        "completed",
        "failed_safe",
        "deferred",
    }.issubset(source_backed)
    assert "needs_approval" in set(fixture["docs_fixture_only_shell_response_states"])
    assert fixture["missing_shell_response_states"] == []

    mappings = fixture["kernel_status_mappings"]
    assert mappings["proposed"] == "preview_only"
    assert mappings["needs_review"] == "explain_plan"
    assert mappings["blocked"] == "blocked"
    assert mappings["deferred"] == "packet-only for now"
    assert {"preview_only", "explain_plan", "blocked", "completed", "deferred"}.issubset(
        set(fixture["packet_statuses"])
    )


def test_v1_g7_files_exist_and_source_evidence_is_static() -> None:
    fixture = load_fixture()

    for file_path in fixture["proof_packet_files"]:
        assert Path(file_path).exists()

    for file_path in fixture["reviewed_files"]:
        assert Path(file_path).exists()

    chat_shell = Path("src/components/ChatShell.tsx").read_text(encoding="utf-8")
    shell_types = Path("src/types/shell.ts").read_text(encoding="utf-8")
    styles = Path("src/styles.css").read_text(encoding="utf-8")
    mock_contracts = Path("src/data/mockLimaContracts.ts").read_text(encoding="utf-8")

    assert 'shellState: "received"' in chat_shell
    assert 'shellState: "thinking"' in chat_shell
    assert 'shellState: "completed"' in chat_shell
    assert "No provider, retrieval service, connector, or LIMA runtime was called" in chat_shell
    assert 'shellState?: "received" | "thinking" | "completed"' in shell_types
    assert ".chat-message.thinking" in styles
    assert "model_provider_calls_allowed: false" in mock_contracts
    assert "connector_calls_allowed: false" in mock_contracts
    assert "guardian_decision_created: false" in mock_contracts
    assert "physical_world_allowed: false" in mock_contracts


def test_v1_g7_docs_preserve_static_only_verdict() -> None:
    packet = Path(
        "docs/proof_packets/SPARKBOT_SHELL_LIMA_V1_G7_INTEGRATION_PROOF_PACKET.md"
    ).read_text(encoding="utf-8")
    audit = Path("docs/audits/SPARKBOT_SHELL_LIMA_V1_G7_INTEGRATION_PROOF_AUDIT.md").read_text(
        encoding="utf-8"
    )

    assert "static shell integration evidence only" in packet
    assert "does not prove live LIMA runtime parity" in packet
    assert "LIMA runtime behavior added: no" in packet
    assert "Final API freeze approved: no" in packet
    assert "acceptable_as_static_shell_integration_evidence_only" in audit
    assert "This audit does not accept live LIMA runtime parity" in audit
