#!/usr/bin/env node
import { createServer } from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "outputs", "plan-b-submissions");
const port = Number(process.env.PORT || 8844);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2"
};

await fs.mkdir(outputDir, { recursive: true });

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
    if (request.method === "OPTIONS") {
      sendCors(response, 204);
      return;
    }
    if (url.pathname === "/api/health") {
      sendJson(response, await buildHealth());
      return;
    }
    if (url.pathname === "/api/dashboard") {
      if (request.method !== "GET" && request.method !== "POST") {
        sendText(response, 405, "Method not allowed");
        return;
      }
      sendJson(response, await buildDashboardPayload());
      return;
    }
    if (url.pathname === "/api/backup-submit") {
      if (request.method !== "POST") {
        sendText(response, 405, "Method not allowed");
        return;
      }
      const payload = await readJsonBody(request);
      const saved = await saveSubmission(payload, request);
      sendJson(response, { ok: true, ...saved });
      return;
    }
    await serveStatic(url.pathname, response);
  } catch (error) {
    console.error(error);
    sendJson(response, { ok: false, error: error.message }, 500);
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log("");
  console.log("T2 Fit & Comfort Plan B server is running.");
  console.log(`Hub:              http://localhost:${port}/index.html`);
  console.log(`Option 231:       http://localhost:${port}/option-231.html`);
  console.log(`Option 429:       http://localhost:${port}/option-429.html`);
  console.log(`Upper & Final:    http://localhost:${port}/final-preference.html`);
  console.log(`Dashboard:        http://localhost:${port}/dashboard.html?data=/api/dashboard`);
  console.log(`Health:           http://localhost:${port}/api/health`);
  console.log("");
});

async function saveSubmission(payload, request) {
  await fs.mkdir(outputDir, { recursive: true });
  const savedAt = new Date();
  const day = savedAt.toISOString().slice(0, 10).replace(/-/g, "");
  const filePath = path.join(outputDir, `${day}-submissions.jsonl`);
  const record = {
    savedAtUtc: savedAt.toISOString(),
    remoteAddress: request.socket.remoteAddress || "",
    userAgent: request.headers["user-agent"] || "",
    payload
  };
  await fs.appendFile(filePath, `${JSON.stringify(record)}\n`, "utf8");
  await fs.writeFile(path.join(outputDir, "latest.json"), JSON.stringify(record, null, 2), "utf8");
  return {
    responseId: payload.responseId || "",
    pageKind: payload.pageKind || "",
    file: path.relative(rootDir, filePath)
  };
}

async function buildHealth() {
  const records = await readSubmissionRecords();
  const counts = countRecords(records);
  return {
    ok: true,
    source: "plan-b-local",
    outputDir,
    totalRecords: records.length,
    counts,
    updatedAtUtc: new Date().toISOString()
  };
}

async function buildDashboardPayload() {
  const records = await readSubmissionRecords();
  const sheets = {
    SurveyDB: [],
    Option231: [],
    Option429: [],
    FinalPreference: []
  };
  const seen = {
    SurveyDB: new Set(),
    Option231: new Set(),
    Option429: new Set(),
    FinalPreference: new Set()
  };

  records.forEach((record) => {
    const payload = record.payload || {};
    if (payload.surveyDbRow) {
      pushUnique(sheets.SurveyDB, seen.SurveyDB, payload.responseId, payload.surveyDbRow);
    }
    const workbookRows = payload.workbookRows || {};
    Object.keys(sheets).forEach((sheetName) => {
      if (sheetName === "SurveyDB") return;
      const row = workbookRows[sheetName];
      if (row) {
        pushUnique(sheets[sheetName], seen[sheetName], row.ResponseId || payload.responseId, row);
      }
    });
  });

  return {
    ok: true,
    source: "plan-b-local",
    generatedAtUtc: new Date().toISOString(),
    sheets
  };
}

function pushUnique(rows, seen, id, row) {
  const key = String(id || JSON.stringify(row));
  if (seen.has(key)) return;
  seen.add(key);
  rows.push(row);
}

function countRecords(records) {
  return records.reduce((counts, record) => {
    const kind = record.payload?.pageKind || "unknown";
    counts[kind] = (counts[kind] || 0) + 1;
    return counts;
  }, {});
}

async function readSubmissionRecords() {
  await fs.mkdir(outputDir, { recursive: true });
  const names = await fs.readdir(outputDir);
  const files = names
    .filter((name) => name.endsWith("-submissions.jsonl"))
    .sort();
  const records = [];
  for (const name of files) {
    const text = await fs.readFile(path.join(outputDir, name), "utf8");
    text.split(/\n+/).forEach((line) => {
      if (!line.trim()) return;
      try {
        const parsed = JSON.parse(line);
        if (parsed?.payload) records.push(parsed);
      } catch (error) {
        console.warn(`Skipped invalid JSONL line in ${name}: ${error.message}`);
      }
    });
  }
  return records;
}

async function readJsonBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }
  const text = Buffer.concat(chunks).toString("utf8");
  if (!text.trim()) throw new Error("Empty request body");
  return JSON.parse(text);
}

async function serveStatic(urlPath, response) {
  const normalizedPath = decodeURIComponent(urlPath === "/" ? "/index.html" : urlPath);
  const candidate = path.resolve(rootDir, `.${normalizedPath}`);
  if (!candidate.startsWith(rootDir)) {
    sendText(response, 403, "Forbidden");
    return;
  }
  const stat = await fs.stat(candidate).catch(() => null);
  if (!stat || !stat.isFile()) {
    sendText(response, 404, "Not found");
    return;
  }
  const extension = path.extname(candidate).toLowerCase();
  const body = await fs.readFile(candidate);
  response.writeHead(200, {
    "Content-Type": contentTypes[extension] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  response.end(body);
}

function sendJson(response, payload, status = 200) {
  sendCors(response, status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function sendText(response, status, text) {
  sendCors(response, status, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(text);
}

function sendCors(response, status, headers = {}) {
  response.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Accept",
    ...headers
  });
}
