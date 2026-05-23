# Sanitization Checklist

This checklist is for public-release preparation. Do not remove files or rewrite history from the R&D repo during planning. Use it before any code import, public package build, screenshot capture, or release artifact publication.

## Required Checks

- [ ] Secret scan across tracked files, generated artifacts, docs, screenshots, installer metadata, and packaged source.
- [ ] Private domain/path scan.
- [ ] `armpit-symphony` branding scan for final public release decision.
- [ ] SparkPit Labs branding scan for public ownership and attribution decision.
- [ ] Server IP/path reference scan.
- [ ] Client data and workload example scan.
- [ ] API key/token/password/passphrase/cookie scan.
- [ ] Internal R&D note and status-document scan.
- [ ] Proprietary LIMA/Arc/Office/IT code scan.
- [ ] Robotics/IoT control code scan.
- [ ] Advanced Guardian commercial controls scan.
- [ ] Paid-service template and orchestration scan.
- [ ] License compatibility review.
- [ ] Dependency audit for frontend, backend, desktop, and scripts.
- [ ] Package metadata review.
- [ ] Installer metadata review.
- [ ] Public screenshots/docs review.
- [ ] README quickstart review.
- [ ] Release artifacts review, including tar/zip contents and checksums.
- [ ] Generated docs/download page review.
- [ ] CI/workflow review for private infrastructure assumptions.
- [ ] Test fixture review for private paths, tokens, client examples, and internal workloads.
- [ ] Docker context review with `.dockerignore` and compose defaults.

## Search Terms

Run case-sensitive and case-insensitive scans where useful:

```text
armpit-symphony
remote.sparkpitlabs.com
/home/sparky
/home/ubuntu
104.236
token
secret
password
passphrase
private
internal
proprietary
client
LIMA Office
Arc Bot
LIMA IT
Robo OS
robotics
MCP
Vault
breakglass
production
DigitalOcean
AWS
sparkpitlabs internal paths
```

## Suggested Commands

Adjust paths for the repo/artifact being checked.

```bash
rg -n --hidden -S "armpit-symphony|remote\.sparkpitlabs\.com|/home/sparky|/home/ubuntu|104\.236|LIMA Office|Arc Bot|LIMA IT|Robo OS|robotics|MCP|Vault|breakglass|DigitalOcean|AWS" .
rg -n --hidden -i "token|secret|password|passphrase|private|internal|proprietary|client|production|sparkpitlabs internal paths" .
git diff --check
git status --short --branch
```

## Release Artifact Inspection

- [ ] Unpack tar/zip artifacts into a temporary directory.
- [ ] Confirm no `.env`, `.env.local`, local DBs, logs, keys, certs, caches, or virtualenvs are included.
- [ ] Confirm no private deployment docs or workflows are included.
- [ ] Confirm no `docs/audits/*` private extraction docs are included.
- [ ] Confirm Robo bridge files are non-executing preview stubs only.
- [ ] Confirm screenshots do not show private hostnames, usernames, tokens, client names, chats, or files.
- [ ] Confirm checksums match published artifacts.

## Decision Gates

- [ ] Phil approves any `NEEDS_REVIEW` feature before it enters the public shell.
- [ ] Legal/license review complete before public repo launch.
- [ ] Security review complete before downloads or installer publication.
- [ ] Public/private repo boundary approved before first code import.
- [ ] No live adapter, execution, approval, dispatch, or persistence expansion is added without explicit later approval.
