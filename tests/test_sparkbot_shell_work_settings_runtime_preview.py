import json
from pathlib import Path


FIXTURE_PATH = Path("tests/fixtures/sparkbot_shell_work_settings_runtime_preview.json")


def load_fixture() -> dict:
    with FIXTURE_PATH.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def test_work_settings_runtime_preview_fixture_and_docs_exist() -> None:
    fixture = load_fixture()

    assert fixture["packet_id"] == "sparkbot_shell_work_settings_runtime_preview"
    assert fixture["api_status"] == "CANDIDATE_ONLY"
    assert fixture["shell_repo"] == "Sparkbot_shell"
    assert fixture["proof_branch"] == "sparkbot-shell-work-settings-runtime-preview"
    assert fixture["source_commit_before_branch"] == (
        "54057a6222dadb898da9389e4b2242554f4c0bf1"
    )

    for file_path in fixture["proof_packet_files"]:
        assert Path(file_path).exists()


def test_work_settings_runtime_preview_local_behaviors_are_explicit() -> None:
    behaviors = load_fixture()["local_browser_behaviors"]

    assert behaviors == {
        "user_selected_file_read_via_file_input": True,
        "in_memory_document_editing": True,
        "work_program_staging_in_react_state": True,
        "simulated_network_index_search": True,
        "operator_triggered_endpoint_reachability_check": True,
        "endpoint_check_limited_to_localhost_or_loopback": True,
    }


def test_work_settings_runtime_preview_blocks_runtime_and_external_authority() -> None:
    blocked = load_fixture()["blocked_behaviors"]

    for key in (
        "backend_runtime_added",
        "lima_runtime_import_added",
        "lima_runtime_call_added",
        "provider_model_generation_call_added",
        "chat_completion_call_added",
        "connector_call_added",
        "external_send_added",
        "credential_field_added",
        "credential_storage_added",
        "api_key_or_provider_token_access_added",
        "filesystem_write_added",
        "non_local_endpoint_check_allowed",
        "simulated_network_index_live_io_added",
        "persistence_outside_react_state_added",
        "guardian_enforcement_runtime_added",
        "tool_execution_added",
        "robotics_device_physical_world_behavior_added",
        "product_readiness_claimed",
        "production_readiness_claimed",
    ):
        assert blocked[key] is False


def test_work_page_source_keeps_file_and_network_preview_bounded() -> None:
    work_page = Path("src/pages/WorkPage.tsx").read_text(encoding="utf-8")

    assert "new FileReader()" in work_page
    assert "reader.readAsText(file)" in work_page
    assert "onWorkspaceFilesChange([...workspaceFiles, ...fileEntries])" in work_page
    assert "setEditingText(doc.text)" in work_page
    assert "This shell stores edits locally for the current browser session" in work_page
    assert "networkDemoIndex" in work_page
    assert "Run network preview search" in work_page
    assert "fetch(" not in work_page
    assert "localStorage" not in work_page
    assert "sessionStorage" not in work_page


def test_settings_source_limits_endpoint_checks_to_loopback() -> None:
    settings_page = Path("src/pages/SettingsPage.tsx").read_text(encoding="utf-8")

    assert "function isLocalEndpointAllowed(endpoint: string)" in settings_page
    assert '"localhost", "127.0.0.1", "::1"' in settings_page
    assert "Only localhost or loopback endpoints can be checked from this shell." in settings_page
    assert "fetch(endpoint" in settings_page
    assert "method: \"GET\"" in settings_page
    assert "mode: \"cors\"" in settings_page
    assert "No credentials or secrets are stored in this shell." in settings_page
    assert "chat completions" in settings_page
    assert "localStorage" not in settings_page
    assert "sessionStorage" not in settings_page


def test_routes_and_docs_describe_the_bounded_preview_truthfully() -> None:
    app = Path("src/App.tsx").read_text(encoding="utf-8")
    readme = Path("README.md").read_text(encoding="utf-8")
    capabilities = Path("docs/CAPABILITIES.md").read_text(encoding="utf-8")
    limitations = Path("docs/BETA_LIMITATIONS.md").read_text(encoding="utf-8")
    local_ai = Path("docs/LOCAL_AI_SETUP.md").read_text(encoding="utf-8")
    packet = Path(
        "docs/proof_packets/SPARKBOT_SHELL_WORK_SETTINGS_RUNTIME_PREVIEW_PACKET.md"
    ).read_text(encoding="utf-8")
    audit = Path(
        "docs/audits/SPARKBOT_SHELL_WORK_SETTINGS_RUNTIME_PREVIEW_AUDIT.md"
    ).read_text(encoding="utf-8")

    assert '{ key: "work", label: "Work"' in app
    assert '{ key: "settings", label: "Settings"' in app
    assert "user-selected file reads into React state" in readme
    assert "localhost/loopback-only model endpoint reachability checks" in readme
    assert "Local AI model generation calls." in capabilities
    assert "Non-local endpoint checks." in capabilities
    assert "Local AI endpoint checks are limited to explicit operator-triggered localhost/loopback reachability checks." in limitations
    assert "Endpoint checks are blocked unless the target resolves to localhost or loopback." in local_ai
    assert "Endpoint target: localhost, `127.0.0.1`, or `::1` only." in packet
    assert "bounded_local_browser_preview_only" in audit
