import { cp, mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packageJsonPath = path.join(root, "package.json");
const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));

const publicDocs = [
  "INSTALL.md",
  "CAPABILITIES.md",
  "ARCHITECTURE_OVERVIEW.md",
  "SECURITY_AND_GUARDRAILS.md",
  "LOCAL_AI_SETUP.md",
  "ROUND_TABLE_OVERVIEW.md",
  "TASK_GUARDIAN_OVERVIEW.md",
  "CONNECTORS_OVERVIEW.md",
  "ROBO_PREVIEW.md",
  "BETA_LIMITATIONS.md",
];

const excludedDocs = [
  "EXTRACTION_MAP.md",
  "EXTRACTION_READINESS_ASSESSMENT.md",
  "FEATURE_CLASSIFICATION.md",
  "PUBLIC_RELEASE_HANDOFF.md",
  "PUBLIC_MVP_ROADMAP.md",
  "REPO_SEPARATION_RULES.md",
  "SANITIZATION_CHECKLIST.md",
  "SHELL_VISUAL_QA_REPORT.md",
  "SHELL_PRODUCT_ASSESSMENT.md",
  "SHELL_LAYER_READINESS_SCORECARD.md",
  "PUBLIC_ARTIFACT_MANIFEST.md",
  "PUBLIC_DOCS_INDEX.md",
  "RELEASE_ARTIFACT_CHECKLIST.md",
  "RELEASE_DECISIONS.md",
  "RELEASE_DECISION_GATE.md",
  "PHYSICAL_MOBILE_QA_CHECKLIST.md",
  "PUBLIC_PREVIEW_READINESS_SUMMARY.md",
  "PACKAGE_QA_REPORT.md",
];

const excludedPrefixes = ["LAYER_"];
const forbiddenSegments = [
  ".git",
  ".github",
  ".agents",
  "node_modules",
  "src",
  "backend",
  "src-tauri",
  "tests",
  "coverage",
  ".vite",
];

const highRiskPatterns = [
  /remote\.sparkpitlabs\.com/i,
  /\/home\/sparky/i,
  /\/home\/ubuntu/i,
  /104\.236/i,
  /API_KEY/i,
  /SLACK_SIGNING_SECRET/i,
  /WHATSAPP_VERIFY_TOKEN/i,
  /Arc Bot/i,
  /LIMA AI OS/i,
  /LIMA Office/i,
  /LIMA IT/i,
  /private Robo bridge/i,
];

const distDir = path.join(root, "dist");
const artifactRoot = path.join(root, "preview-artifacts");
const artifactName = `${packageJson.name}-${packageJson.version}-preview`;
const artifactDir = path.join(artifactRoot, artifactName);

async function ensureFile(filePath) {
  const fileStat = await stat(filePath).catch(() => null);
  if (!fileStat?.isFile()) {
    throw new Error(`Missing required file: ${path.relative(root, filePath)}`);
  }
}

async function walk(dir) {
  const entries = await import("node:fs/promises").then((fs) => fs.readdir(dir, { withFileTypes: true }));
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(entryPath)));
    } else {
      files.push(entryPath);
    }
  }
  return files;
}

async function copyPublicDocs() {
  const docsOut = path.join(artifactDir, "docs");
  await mkdir(docsOut, { recursive: true });
  for (const doc of publicDocs) {
    const source = path.join(root, "docs", doc);
    await ensureFile(source);
    await cp(source, path.join(docsOut, doc));
  }
}

function assertNoForbiddenPath(relativePath) {
  const normalized = relativePath.split(path.sep).join("/");
  for (const segment of forbiddenSegments) {
    if (normalized.split("/").includes(segment)) {
      throw new Error(`Forbidden path segment in artifact: ${normalized}`);
    }
  }
  if (normalized.startsWith("docs/")) {
    const name = path.basename(normalized);
    if (excludedDocs.includes(name) || excludedPrefixes.some((prefix) => name.startsWith(prefix))) {
      throw new Error(`Repo-only doc included in artifact: ${normalized}`);
    }
    if (!publicDocs.includes(name)) {
      throw new Error(`Unexpected doc included in artifact: ${normalized}`);
    }
  }
}

async function assertNoHighRiskContent(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".html", ".js", ".css", ".json", ".md", ".txt"].includes(ext)) return;
  const content = await readFile(filePath, "utf8").catch(() => "");
  for (const pattern of highRiskPatterns) {
    if (pattern.test(content)) {
      throw new Error(`High-risk private term matched in ${path.relative(artifactDir, filePath)}: ${pattern}`);
    }
  }
}

async function main() {
  await ensureFile(path.join(distDir, "index.html"));
  await rm(artifactDir, { recursive: true, force: true });
  await mkdir(artifactDir, { recursive: true });

  await cp(distDir, path.join(artifactDir, "app"), { recursive: true });
  await cp(path.join(root, "README.md"), path.join(artifactDir, "README.md"));
  await copyPublicDocs();

  const metadata = {
    name: packageJson.name,
    version: packageJson.version,
    artifactName,
    generatedAt: new Date().toISOString(),
    includes: ["app/", "README.md", "docs/", "package-metadata.json"],
    publicDocs,
    excludedCategories: [
      "repo-only staging docs",
      "extraction maps",
      "readiness/no-go docs",
      "source-boundary planning notes",
      "tests, workflows, logs, caches, env files, and dependency folders",
    ],
    caveats: [
      "Static shell preview only.",
      "No backend runtime, provider calls, connector sends, scheduler, memory persistence, or robotics control.",
      "License and final public repo naming remain open decisions.",
      "Final preview artifact name/version remains an open decision.",
      "Physical/mobile 390px browser QA remains NOT_RUN until completed on a real or credible mobile browser.",
      "External connector recall/delivery remains live-QA UNKNOWN.",
    ],
  };
  await writeFile(path.join(artifactDir, "package-metadata.json"), `${JSON.stringify(metadata, null, 2)}\n`);

  const files = await walk(artifactDir);
  for (const file of files) {
    const relative = path.relative(artifactDir, file);
    assertNoForbiddenPath(relative);
    await assertNoHighRiskContent(file);
  }

  for (const doc of excludedDocs) {
    if (existsSync(path.join(artifactDir, "docs", doc))) {
      throw new Error(`Excluded doc exists in artifact: ${doc}`);
    }
  }

  console.log(`Preview artifact created: ${path.relative(root, artifactDir)}`);
  console.log(`Public docs included: ${publicDocs.length}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
