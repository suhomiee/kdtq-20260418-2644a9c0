#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const defaultInputDir = path.join(rootDir, "outputs", "plan-b-submissions");
const appJsPath = path.join(rootDir, "app.js");
const inputArg = process.argv[2] || defaultInputDir;
const dryRun = process.argv.includes("--dry-run");

const endpoint = process.env.POWER_AUTOMATE_URL || await readPowerAutomateUrl();
if (!endpoint && !dryRun) {
  throw new Error("Power Automate URL was not found. Set POWER_AUTOMATE_URL or keep app.js endpoint intact.");
}

const files = await resolveInputFiles(inputArg);
if (!files.length) {
  console.log("No Plan B submission JSONL files found.");
  process.exit(0);
}

const records = [];
for (const filePath of files) {
  const text = await fs.readFile(filePath, "utf8");
  text.split(/\n+/).forEach((line) => {
    if (!line.trim()) return;
    const parsed = JSON.parse(line);
    if (parsed?.payload) {
      records.push({ filePath, payload: parsed.payload });
    }
  });
}

const seen = new Set();
const uniqueRecords = records.filter(({ payload }) => {
  const key = `${payload.responseId || ""}:${payload.pageKind || ""}`;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
});

const log = [];
for (const { filePath, payload } of uniqueRecords) {
  const row = {
    responseId: payload.responseId || "",
    pageKind: payload.pageKind || "",
    sourceFile: path.relative(rootDir, filePath),
    dryRun,
    ok: false,
    status: 0,
    replayedAtUtc: new Date().toISOString()
  };
  if (dryRun) {
    row.ok = true;
    log.push(row);
    continue;
  }
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    row.status = response.status;
    row.ok = response.ok;
    if (!response.ok) {
      row.error = await response.text();
    }
  } catch (error) {
    row.error = error.message;
  }
  log.push(row);
}

const replayDir = path.join(rootDir, "outputs", "plan-b-replay-logs");
await fs.mkdir(replayDir, { recursive: true });
const logPath = path.join(replayDir, `${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
await fs.writeFile(logPath, JSON.stringify(log, null, 2), "utf8");

const okCount = log.filter((row) => row.ok).length;
console.log(`Plan B replay complete: ${okCount}/${log.length} ok`);
console.log(`Log: ${path.relative(rootDir, logPath)}`);
if (okCount !== log.length) {
  process.exitCode = 1;
}

async function readPowerAutomateUrl() {
  const appJs = await fs.readFile(appJsPath, "utf8");
  const match = appJs.match(/const\s+POWER_AUTOMATE_URL\s*=\s*"([^"]+)"/);
  return match ? match[1] : "";
}

async function resolveInputFiles(inputPath) {
  const resolved = path.resolve(process.cwd(), inputPath);
  const stat = await fs.stat(resolved).catch(() => null);
  if (!stat) return [];
  if (stat.isFile()) return [resolved];
  const names = await fs.readdir(resolved);
  return names
    .filter((name) => name.endsWith("-submissions.jsonl"))
    .sort()
    .map((name) => path.join(resolved, name));
}
