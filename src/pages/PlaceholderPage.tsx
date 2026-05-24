import type { PageContent, PageKey } from "../types";

const pageContent: Record<Exclude<PageKey, "docs">, PageContent> = {
  workstation: {
    title: "Company floor for local-first agent work",
    summary:
      "The Workstation is the operating floor where the user sees the public Sparkbot surfaces without exposing runtime internals.",
    status: "Layer 1 placeholder. Static panels only; no model routing, memory, or tool execution.",
    panels: [
      { title: "Main Chat", body: "Operator middle-person and command channel.", meta: "Layer 2 shell added" },
      { title: "Round Table", body: "Meeting room for AI agents and the Meeting Manager.", meta: "Layer 4 planned" },
      { title: "Model Seats", body: "Invite Wing slots for cloud, subscription, and Local AI models.", meta: "Config shell later" },
      { title: "Specialty Wing", body: "Public-safe custom agent roles with model-seat direction.", meta: "No prompts imported" },
      { title: "Task Guardian", body: "Scheduled work manager for useful, bounded automations.", meta: "No scheduler" },
      { title: "Command Center", body: "AI setup and guardrail profile control surface.", meta: "Static setup map" },
    ],
    boundary:
      "No backend services, secrets, connector sends, terminal/browser controls, or private automation surfaces are included.",
  },
  chat: {
    title: "Main Chat as the operator command channel",
    summary:
      "Chat is represented as the middle-person surface for the operator. Runtime messaging arrives in a later layer.",
    status: "Coming in Layer 2 as chat/model config shell. No real chat backend is called here.",
    panels: [
      { title: "Operator Thread", body: "Placeholder for the primary conversation and command flow." },
      { title: "Model Stack", body: "Placeholder for primary, backup, and heavy-hitter model direction." },
      { title: "Shared Context", body: "Placeholder for the future public memory/context adapter." },
    ],
    boundary:
      "This page does not send messages, call providers, persist memory, read files, or trigger tools.",
  },
  roundtable: {
    title: "AI agent meetings with a Meeting Manager",
    summary:
      "Round Table is the public hero flow: agents meet, receive assignments, work a second pass, and wrap up through the Meeting Manager.",
    status: "Static Layer 1 flow map. No meeting execution or room runtime is wired.",
    panels: [
      { title: "Meeting Manager", body: "Seat 1 coordinator and secretary for meeting flow." },
      { title: "First Pass", body: "Agents frame the problem and surface initial findings." },
      { title: "Assignments", body: "Manager assigns focused follow-up work to seats." },
      { title: "Second Pass", body: "Agents return with refined answers or artifacts." },
      { title: "Wrap-Up", body: "Manager summarizes decisions, next steps, and open questions." },
    ],
    boundary:
      "No rooms API, SSE stream, artifacts, meeting notes, model seats, or memory rollups are active.",
  },
  "command-center": {
    title: "Setup and user-owned guardrails",
    summary:
      "Command Center will hold AI setup, model seats, Local AI direction, and public guardrail profiles.",
    status: "Layer 2 model-seat shell is available from the Command Center nav. No persistence or credential storage exists.",
    panels: [
      { title: "AI Setup", body: "Model stack and provider setup direction." },
      { title: "Invite Wing", body: "Model-seat placeholders for cloud, subscription, and Local AI seats." },
      { title: "Local AI", body: "Ollama, LM Studio, llama.cpp, and OpenAI-compatible endpoint direction." },
      { title: "Personal", body: "Flexible owner-controlled profile label." },
      { title: "Balanced", body: "Default confirmation posture label." },
      { title: "Locked", body: "Stronger confirmation posture label." },
      { title: "Custom", body: "Future custom blocker text and user-owned rules." },
    ],
    boundary:
      "No Vault, PIN, provider credential, policy engine, or Guardian Suite internals are imported.",
  },
  "task-guardian": {
    title: "Useful scheduled work without runtime execution",
    summary:
      "Task Guardian is the scheduled work manager direction for PC/server health-check previews and app-first delivery preference shapes.",
    status: "Static placeholder. No scheduler, worker, connector, or health collector is active.",
    panels: [
      { title: "PC Health Check", body: "Planned read-only local workstation health report." },
      { title: "Server Health Check", body: "Planned read-only server install health report." },
      { title: "App / In-Room Delivery", body: "Default delivery direction for public MVP." },
      { title: "External Delivery", body: "Telegram, Discord, Slack, and WhatsApp remain opt-in and configured only." },
      { title: "SMS / Text", body: "Future and unsupported until a real provider is selected." },
    ],
    boundary:
      "No remediation, package updates, service restarts, connector sends, or recurring jobs run here.",
  },
  connectors: {
    title: "Connector identity and PIN gates",
    summary:
      "Connectors are optional communication channels. Private recall must fail closed until identity and step-up verification rules are satisfied.",
    status: "Layer 7 connector/PIN shell. No sends, webhooks, sessions, or private recall runtime.",
    panels: [
      { title: "Telegram", body: "Optional configured channel later; no chat target or send path here." },
      { title: "Discord", body: "Shared-channel private recall remains blocked until stronger gates exist." },
      { title: "Slack", body: "Allowed channel/user and linked owner checks are future runtime requirements." },
      { title: "WhatsApp", body: "Allowed phone and verification checks are future runtime requirements." },
      { title: "SMS / Text", body: "Future/unsupported until an identity and provider model exists." },
    ],
    boundary:
      "No connector runtime, webhook, secret input, target identifier, PIN verification, connector session, send, or private memory recall exists.",
  },
  "robo-preview": {
    title: "Robo OS preview",
    summary:
      "Robo Preview shows the future-facing boundary for LIMA robotics and IoT systems without including a control surface.",
    status: "Demo/teaser only. No live MCP, robotics, IoT, bridge, or emergency control path is present.",
    panels: [
      { title: "Future LIMA robotics", body: "A visual promise that embodied systems belong behind a future runtime contract." },
      { title: "No hardware control", body: "This public shell preview cannot command robots, drones, devices, or IoT systems." },
      { title: "No live calls", body: "No MCP tool, hardware bridge, telemetry stream, or emergency-control path is included." },
      { title: "Teaser only", body: "Robo stays exciting in the nav while remaining outside the static public MVP runtime." },
    ],
    boundary:
      "No private platform wiring, hardware adapter, robot-motion command, IoT action, or live device runtime is included.",
  },
};

type PlaceholderPageProps = {
  page: Exclude<PageKey, "docs">;
};

export function PlaceholderPage({ page }: PlaceholderPageProps) {
  const content = pageContent[page];

  return (
    <section className="page-section">
      <div className="intro-row">
        <div>
          <p className="section-label">Public Layer 1</p>
          <h2>{content.title}</h2>
          <p>{content.summary}</p>
        </div>
        <aside className="status-card">
          <span>Status</span>
          <strong>{content.status}</strong>
        </aside>
      </div>

      <div className="panel-grid">
        {content.panels.map((panel) => (
          <article className="info-panel" key={panel.title}>
            <div>
              <h3>{panel.title}</h3>
              <p>{panel.body}</p>
            </div>
            {panel.meta ? <span>{panel.meta}</span> : null}
          </article>
        ))}
      </div>

      <div className="runtime-boundary">
        <strong>Runtime boundary</strong>
        <p>{content.boundary}</p>
      </div>
    </section>
  );
}
