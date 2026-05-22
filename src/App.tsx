import { useEffect, useMemo, useState } from "react";
import { ChatShell } from "./components/ChatShell";
import { ModelConfigShell } from "./components/ModelConfigShell";
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
  { key: "task-guardian", label: "Task Guardian", eyebrow: "Scheduled work" },
  { key: "robo-preview", label: "Robo Preview", eyebrow: "Teaser only" },
  { key: "docs", label: "Docs", eyebrow: "Planning links" },
];

const pageKeys = new Set<PageKey>(navItems.map((item) => item.key));

function getRouteFromHash(): PageKey {
  const route = window.location.hash.replace(/^#\/?/, "") as PageKey;
  return pageKeys.has(route) ? route : "workstation";
}

export function App() {
  const [activePage, setActivePage] = useState<PageKey>(() => getRouteFromHash());
  const [shellState, setShellState] = useState<ShellState>(demoShellState);
  const activeNavItem = useMemo(
    () => navItems.find((item) => item.key === activePage) ?? navItems[0],
    [activePage],
  );

  useEffect(() => {
    const onHashChange = () => setActivePage(getRouteFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
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
            <span>Layer 2 chat/model shell</span>
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
          <span>No backend, connectors, live model calls, credential storage, scheduling, or robotics control.</span>
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
        {activePage === "chat" ? (
          <ChatShell
            session={shellState.chatSession}
            modelSeats={shellState.modelSeats}
            onSessionChange={(chatSession) => setShellState((current) => ({ ...current, chatSession }))}
          />
        ) : null}
        {activePage === "command-center" ? (
          <ModelConfigShell
            modelSeats={shellState.modelSeats}
            guardrailProfile={shellState.guardrailProfile}
            onGuardrailProfileChange={(guardrailProfile) =>
              setShellState((current) => ({ ...current, guardrailProfile }))
            }
            onModelSeatsChange={(modelSeats) => setShellState((current) => ({ ...current, modelSeats }))}
          />
        ) : null}
        {activePage !== "docs" && activePage !== "chat" && activePage !== "command-center" ? (
          <PlaceholderPage page={activePage} />
        ) : null}
      </main>
    </div>
  );
}
