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

The preview package is generated under `preview-artifacts/`. It contains the built app, this public docs bundle, README, LICENSE, package.json, and package metadata only.

The generated folder is `preview-artifacts/sparkbot-shell-preview-0.8.0-layer8/`.

The package/version label is `0.8.0-layer8-preview`. This is an internal/staging static preview artifact, not a public release tag, npm publication, or uploaded release.

## Current Boundaries

- No live model/provider calls.
- No Local AI endpoint checks.
- No connector sends.
- No scheduler, health collector, memory persistence, or backend runtime.
- No terminal, browser automation, robotics, or IoT control.
