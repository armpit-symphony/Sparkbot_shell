# Install And Setup

Sparkbot Shell is a static public preview built with Vite, React, and TypeScript. It shows the planned product surfaces without a backend runtime.

## Requirements

- Node.js 20 or newer.
- npm 10 or newer.
- A local terminal.

No database, server process, connector account, model provider account, or Local AI runtime is required for the current shell preview.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local URL printed by Vite. The app routes are static shell routes and do not call a backend.

## Build

```bash
npm run build
```

The build output is written to `dist/`.

## Preview Package Dry Run

```bash
npm run package:preview
```

The preview package is generated under `preview-artifacts/`. It contains the built app, this public docs bundle, README, and package metadata only.

The current generated folder name remains `sparkbot-shell-0.8.0-layer8-preview` until Phil chooses a final preview artifact name/version.

## Current Boundaries

- No live model/provider calls.
- No Local AI endpoint checks.
- No connector sends.
- No scheduler, health collector, memory persistence, or backend runtime.
- No terminal, browser automation, robotics, or IoT control.
