import { useEffect, useMemo, useState } from "react";
import { ChatShell } from "./components/ChatShell";
import { ConnectorIdentityShell } from "./components/ConnectorIdentityShell";
import { ModelConfigShell } from "./components/ModelConfigShell";
import { RoundTableFlowShell } from "./components/RoundTableFlowShell";
import { TaskGuardianPreview } from "./components/TaskGuardianPreview";
import { WorkstationShell } from "./components/WorkstationShell";
import { demoShellState } from "./data/demoShellState";
import { DocsPage } from "./pages/DocsPage";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import type { PageKey } from "./types";
import type { ShellState } from "./types/shell";

type NavItem = {
  key: PageKey;
  label: string;
  eyebrow: string;
};

const navItems: NavItem[] = [
  { key: "workstation", label: "Workstation", eyebrow: "Operating floor" },
  { key: "chat", label: "Chat", eyebrow: "Command channel" },
  { key: "roundtable", label: "Round Table", eyebrow: "Agent meetings" },
  { key: "command-center", label: "Command Center", eyebrow: "Setup and safety" },
  { key: "task-guardian", label: "Task Guardian", eyebrow: "Health previews" },
  { key: "connectors", label: "Connectors", eyebrow: "Identity gates" },
  { key: "robo-preview", label: "Robo Preview", eyebrow: "Teaser only" },
  { key: "docs", label: "Docs", eyebrow: "Planning links" },
];

const pageKeys = new Set<PageKey>(navItems.map((item) => item.key));

const routeAliases: Record<string, PageKey> = {
  "": "workstation",
  robo: "robo-preview",
};

function getRouteFromLocation(): PageKey {
  const hashRoute = window.location.hash.replace(/^#\/?/, "");
  const pathRoute = window.location.pathname.replace(/^\/+/, "").split("/")[0];
  const route = hashRoute || pathRoute;
  const alias = routeAliases[route];

  if (alias) return alias;
  return pageKeys.has(route as PageKey) ? (route as PageKey) : "workstation";
}

export function App() {
  const [activePage, setActivePage] = useState<PageKey>(() => getRouteFromLocation());
  const [shellState, setShellState] = useState<ShellState>(demoShellState);
  const activeNavItem = useMemo(
    () => navItems.find((item) => item.key === activePage) ?? navItems[0],
    [activePage],
  );

  useEffect(() => {
    const onLocationChange = () => setActivePage(getRouteFromLocation());
    window.addEventListener("hashchange", onLocationChange);
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("hashchange", onLocationChange);
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="Sparkbot Shell sections">
        <a className="brand" href="#/workstation" aria-label="Sparkbot Shell home">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span>
            <strong>Sparkbot Shell</strong>
            <span>Public preview decision gate shell</span>
          </span>
        </a>

        <nav className="primary-nav">
          {navItems.map((item) => (
            <a
              key={item.key}
              className={item.key === activePage ? "nav-link active" : "nav-link"}
              href={`#/${item.key}`}
              aria-current={item.key === activePage ? "page" : undefined}
            >
              <span>{item.label}</span>
              <small>{item.eyebrow}</small>
            </a>
          ))}
        </nav>

        <div className="boundary-note">
          <strong>Shell only.</strong>
          <span>No backend, connector runtime, live model calls, credential storage, scheduling, or robotics control.</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="kicker">Round Table meetings for your AI agents</p>
            <h1>{activeNavItem.label}</h1>
          </div>
          <div className="status-pill">Planning shell</div>
        </header>

        {activePage === "docs" ? <DocsPage /> : null}
        {activePage === "workstation" ? <WorkstationShell shellState={shellState} /> : null}
        {activePage === "roundtable" ? (
          <RoundTableFlowShell
            roundTable={shellState.roundTable}
            modelSeats={shellState.modelSeats}
            specialtyAgents={shellState.specialtyAgents}
            meetingNoteContract={shellState.memoryContext.meetingNoteContract}
            onRoundTableChange={(roundTable) => setShellState((current) => ({ ...current, roundTable }))}
          />
        ) : null}
        {activePage === "chat" ? (
          <ChatShell
            session={shellState.chatSession}
            modelSeats={shellState.modelSeats}
            memoryContext={shellState.memoryContext}
            onSessionChange={(chatSession) => setShellState((current) => ({ ...current, chatSession }))}
          />
        ) : null}
        {activePage === "command-center" ? (
          <ModelConfigShell
            modelSeats={shellState.modelSeats}
            specialtyAgents={shellState.specialtyAgents}
            guardrailProfiles={shellState.guardrailProfiles}
            guardrailProfile={shellState.guardrailProfile}
            taskGuardianTemplates={shellState.taskGuardianTemplates}
            taskDeliveryPreferences={shellState.taskDeliveryPreferences}
            healthReportPreviews={shellState.healthReportPreviews}
            connectorCards={shellState.connectorCards}
            onGuardrailProfileChange={(guardrailProfile) =>
              setShellState((current) => ({ ...current, guardrailProfile }))
            }
            onGuardrailProfilesChange={(guardrailProfiles) =>
              setShellState((current) => ({ ...current, guardrailProfiles }))
            }
            onSpecialtyAgentsChange={(specialtyAgents) =>
              setShellState((current) => ({ ...current, specialtyAgents }))
            }
            onModelSeatsChange={(modelSeats) => setShellState((current) => ({ ...current, modelSeats }))}
          />
        ) : null}
        {activePage === "task-guardian" ? (
          <section className="page-section">
            <div className="intro-row">
              <div>
                <p className="section-label">Static public shell</p>
                <h2>Task Guardian preview</h2>
                <p>
                  Task Guardian is the scheduled work manager direction. This preview shows read-only PC/server health
                  reports, delivery preferences, and context-event labels without a scheduler, memory write, or external
                  sends.
                </p>
              </div>
              <aside className="status-card">
                <span>Runtime boundary</span>
                <strong>No scheduler, worker, connector, or health collector is active.</strong>
              </aside>
            </div>
            <TaskGuardianPreview
              templates={shellState.taskGuardianTemplates}
              deliveryPreferences={shellState.taskDeliveryPreferences}
              healthReports={shellState.healthReportPreviews}
              connectorCards={shellState.connectorCards}
              contextEvents={shellState.memoryContext.events}
            />
          </section>
        ) : null}
        {activePage === "connectors" ? (
          <ConnectorIdentityShell
            connectors={shellState.connectorCards}
            contextEvents={shellState.memoryContext.events}
          />
        ) : null}
        {activePage !== "docs" &&
        activePage !== "workstation" &&
        activePage !== "roundtable" &&
        activePage !== "chat" &&
        activePage !== "command-center" &&
        activePage !== "task-guardian" &&
        activePage !== "connectors" ? (
          <PlaceholderPage page={activePage} />
        ) : null}
      </main>
    </div>
  );
}
