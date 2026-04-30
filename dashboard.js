const DATA_ENDPOINT_STORAGE_KEY = "kdtq-dashboard-data-url";
const DASHBOARD_DATA_ENDPOINT = "https://default1445a1df842f4a6595a29237bdf735.c9.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/34e219f4726f4c679b11cffb903c4420/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NLraKrvx7AAEDwRrM5nTTlVNKDabbFnSvPBMVJzZT6o";
const AUTO_REFRESH_MS = 30000;
let dashboardRefreshTimer = 0;

const COLORS = {
  option231: "#007070",
  option429: "#53666f",
  neutral: "#8d9894",
  paper: "#ffffff"
};

const QUALITY_PALETTE = [
  ["#c84f43", "rgba(200, 79, 67, 0.22)"],
  ["#d8763d", "rgba(216, 118, 61, 0.2)"],
  ["#c39b38", "rgba(195, 155, 56, 0.19)"],
  ["#789f55", "rgba(120, 159, 85, 0.2)"],
  ["#338c66", "rgba(51, 140, 102, 0.21)"],
  ["#007070", "rgba(0, 112, 112, 0.22)"]
];

const IDEAL_CENTER_PALETTE = [
  ["#c84f43", "rgba(200, 79, 67, 0.22)"],
  ["#d8763d", "rgba(216, 118, 61, 0.2)"],
  ["#b99a3a", "rgba(185, 154, 58, 0.19)"],
  ["#007070", "rgba(0, 112, 112, 0.22)"],
  ["#b99a3a", "rgba(185, 154, 58, 0.19)"],
  ["#d8763d", "rgba(216, 118, 61, 0.2)"],
  ["#c84f43", "rgba(200, 79, 67, 0.22)"]
];

const LIKING_PALETTE = [
  ["#d95a2f", "#fff0ea"],
  ["#dc9634", "#fff6e6"],
  ["#e0c638", "#fffbe5"],
  ["#bbcf48", "#f8fbe5"],
  ["#5ca540", "#eef8ea"]
];

const SCALES = {
  softFirm: ["Very Soft", "Moderately Soft", "Somewhat Soft", "Somewhat Firm", "Moderately Firm", "Very Firm"],
  liking: ["1", "2", "3", "4", "5"],
  energy: ["Very Dead", "Moderately Dead", "Somewhat Dead", "Somewhat Springy", "Moderately Springy", "Very Springy"],
  stability: ["Very Unstable", "Moderately Unstable", "Somewhat Unstable", "Somewhat Stable", "Moderately Stable", "Very Stable"],
  transition: ["Very Slappy", "Moderately Slappy", "Somewhat Slappy", "Somewhat Smooth", "Moderately Smooth", "Very Smooth"],
  traction: ["Very Slippery", "Moderately Slippery", "Somewhat Slippery", "Somewhat Grippy", "Moderately Grippy", "Very Grippy"],
  protection: ["Very Unprotective", "Moderately Unprotective", "Somewhat Unprotective", "Somewhat Protective", "Moderately Protective", "Very Protective"],
  easy: ["Very Difficult", "Moderately Difficult", "Somewhat Difficult", "Somewhat Easy", "Moderately Easy", "Very Easy"],
  secure: ["Very Insecure", "Moderately Insecure", "Somewhat Insecure", "Somewhat Secure", "Moderately Secure", "Very Secure"],
  length: ["Very Short", "Moderately Short", "Somewhat Short", "Just Right", "Somewhat Long", "Moderately Long", "Very Long"],
  comfort: ["Very Uncomfortable", "Moderately Uncomfortable", "Somewhat Uncomfortable", "Somewhat Comfortable", "Moderately Comfortable", "Very Comfortable"],
  breathability: ["Not Breathable", "Moderately Not Breathable", "Somewhat Not Breathable", "Somewhat Breathable", "Moderately Breathable", "Very Breathable"],
  weight: ["Very Heavy", "Moderately Heavy", "Somewhat Heavy", "Somewhat Light", "Moderately Light", "Very Light"],
  distance: ["5 km or less", "5-10 km", "10-15 km", "15-20 km", "20 km or more"]
};

const DISTANCE_LABELS_KO = {
  "5 km or less": "5km 이하",
  "5-10 km": "5-10km",
  "10-15 km": "10-15km",
  "15-20 km": "15-20km",
  "20 km or more": "20km 이상"
};

const OPTION_QUESTIONS = [
  { key: "heelFeel", ko: "힐(뒤꿈치) 쿠셔닝", en: "Heel cushioning", scale: SCALES.softFirm, tone: "neutral", match: ["heel cushioning", "feel about"] },
  { key: "heelLike", ko: "힐(뒤꿈치) 만족도", en: "Heel liking", scale: SCALES.liking, tone: "liking", match: ["like the heel cushioning"] },
  { key: "forefootFeel", ko: "포풋(전족부) 쿠셔닝", en: "Forefoot cushioning", scale: SCALES.softFirm, tone: "neutral", match: ["forefoot cushioning", "feel about"] },
  { key: "forefootLike", ko: "포풋(전족부) 만족도", en: "Forefoot liking", scale: SCALES.liking, tone: "liking", match: ["like the forefoot cushioning"] },
  { key: "energyFeel", ko: "에너지리턴(반발탄성)", en: "Energy return", scale: SCALES.energy, tone: "quality", match: ["energy return", "feel about"] },
  { key: "energyLike", ko: "에너지리턴(반발탄성) 만족도", en: "Energy liking", scale: SCALES.liking, tone: "liking", match: ["like the energy return"] },
  { key: "stabilityFeel", ko: "지면 안정성", en: "Ground contact stability", scale: SCALES.stability, tone: "quality", match: ["stability at ground contact"] },
  { key: "stabilityLike", ko: "안정감 만족도", en: "Stability liking", scale: SCALES.liking, tone: "liking", match: ["like the", "stability"] },
  { key: "transitionFeel", ko: "전환감", en: "Heel-to-toe transition", scale: SCALES.transition, tone: "quality", match: ["transition from heel to toe"] },
  { key: "tractionFeel", ko: "아웃솔 접지력", en: "Outsole traction", scale: SCALES.traction, tone: "quality", match: ["outsole", "traction"] },
  { key: "protectionFeel", ko: "언더풋 보호감", en: "Underfoot protection", scale: SCALES.protection, tone: "quality", match: ["underfoot protection", "feel about"] },
  { key: "protectionLike", ko: "보호감 만족도", en: "Protection liking", scale: SCALES.liking, tone: "liking", match: ["like the", "underfoot protection"] }
];

const RADAR_QUESTIONS = [
  "heelLike",
  "forefootLike",
  "energyFeel",
  "stabilityFeel",
  "transitionFeel",
  "tractionFeel",
  "protectionFeel"
];

const HEATMAP_QUESTIONS = [
  "heelFeel",
  "forefootFeel",
  "energyFeel",
  "stabilityFeel",
  "transitionFeel",
  "tractionFeel",
  "protectionFeel"
];

const FIRST_IMPRESSION = [
  { key: "footEntry", ko: "착화 용이성", en: "Foot entry", scale: SCALES.easy, tone: "quality", match: ["foot entry"] },
  { key: "laceSecurity", ko: "신끈 고정", en: "Lace security", scale: SCALES.secure, tone: "quality", match: ["lace", "stay tied"] },
  { key: "shoeLength", ko: "사이즈 적합", en: "Shoe length", scale: SCALES.length, tone: "ideal-center", match: ["shoe length"] },
  { key: "upperComfort", ko: "어퍼 편안함", en: "Upper comfort", scale: SCALES.comfort, tone: "quality", match: ["upper comfort"] },
  { key: "breathability", ko: "통기성", en: "Breathability", scale: SCALES.breathability, tone: "quality", match: ["breathability"] },
  { key: "upperSecurity", ko: "어퍼 안정성", en: "Upper security", scale: SCALES.secure, tone: "quality", match: ["upper security"] },
  { key: "shoeWeight", ko: "무게감", en: "Shoe weight", scale: SCALES.weight, tone: "quality", match: ["shoe weight"] }
];

const els = {
  sourceLabel: document.getElementById("sourceLabel"),
  sourceDetail: document.getElementById("sourceDetail"),
  kpiGrid: document.getElementById("kpiGrid"),
  optionLegend: document.getElementById("optionLegend"),
  radarChart: document.getElementById("radarChart"),
  optionSummary: document.getElementById("optionSummary"),
  preferencePanel: document.getElementById("preferencePanel"),
  heatmap: document.getElementById("heatmap"),
  testerContext: document.getElementById("testerContext"),
  reasonSignals: document.getElementById("reasonSignals")
};

initDashboard();

async function initDashboard() {
  const endpoint = resolveDataEndpoint();
  const { data, usingSample, detail } = await loadDashboardData(endpoint);
  const model = buildModel(data);
  renderDashboard(model, usingSample, detail);
  setupAutoRefresh(endpoint);
}

function resolveDataEndpoint() {
  const params = new URLSearchParams(location.search);
  return params.get("data") || localStorage.getItem(DATA_ENDPOINT_STORAGE_KEY) || DASHBOARD_DATA_ENDPOINT;
}

async function loadDashboardData(endpoint = resolveDataEndpoint()) {
  if (!endpoint) {
    return {
      data: emptyDashboardData(),
      usingSample: false,
      detail: {
        labelKo: "라이브 응답 대기 중",
        labelEn: "Waiting for live responses",
        noteKo: "Excel Online 읽기 엔드포인트가 설정되면 실제 응답만 표시됩니다.",
        noteEn: "Only real Excel Online responses will appear once the endpoint is configured."
      }
    };
  }
  try {
    const response = await fetch(endpoint, dashboardRequestInit(endpoint));
    if (!response.ok) throw new Error(`${response.status}`);
    const raw = await response.json();
    return {
      data: normalizePayload(raw),
      usingSample: false,
      detail: {
        labelKo: "Excel Online 연결됨",
        labelEn: "Excel Online connected",
        noteKo: `30초마다 자동 새로고침 · 마지막 동기화 ${formatKstTime(new Date())}`,
        noteEn: `Auto-refresh every 30 seconds · Last synced ${formatKstTime(new Date())} KST`
      }
    };
  } catch (error) {
    console.error(error);
    return {
      data: emptyDashboardData(),
      usingSample: false,
      detail: {
        labelKo: "라이브 연결 확인 필요",
        labelEn: "Live connection needs attention",
        noteKo: `대체 데이터 없이 실제 응답만 표시합니다. 엔드포인트 응답 오류: ${error.message}`,
        noteEn: `No sample fallback. Showing live data only. Endpoint error: ${error.message}`
      }
    };
  }
}

function emptyDashboardData() {
  return {
    Option231: [],
    Option429: [],
    FinalPreference: []
  };
}

function dashboardRequestInit(endpoint) {
  if (/powerautomate|workflows/i.test(endpoint)) {
    return {
      method: "POST",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mode: "dashboard",
        requestedAtUtc: new Date().toISOString()
      })
    };
  }
  return { cache: "no-store", headers: { Accept: "application/json" } };
}

function setupAutoRefresh(endpoint) {
  if (dashboardRefreshTimer) window.clearInterval(dashboardRefreshTimer);
  if (!endpoint) return;
  dashboardRefreshTimer = window.setInterval(async () => {
    const { data, usingSample, detail } = await loadDashboardData(endpoint);
    renderDashboard(buildModel(data), usingSample, detail);
  }, AUTO_REFRESH_MS);
}

function normalizePayload(raw) {
  const sheets = raw.sheets || raw.workbookRows || raw;
  const surveyDbRows = toRows(sheets.SurveyDB || sheets.SurveyResponseDB || sheets.surveyDb || []);
  const splitSurveyDb = splitSurveyDbRows(surveyDbRows);
  return {
    Option231: [...toRows(sheets.Option231 || sheets.Option231Responses || sheets.option231 || []), ...splitSurveyDb.Option231],
    Option429: [...toRows(sheets.Option429 || sheets.Option429Responses || sheets.option429 || []), ...splitSurveyDb.Option429],
    FinalPreference: [...toRows(sheets.FinalPreference || sheets.FinalPreferenceResponses || sheets.finalPreference || []), ...splitSurveyDb.FinalPreference]
  };
}

function toRows(value) {
  if (!Array.isArray(value)) return [];
  return value.filter((row) => row && Object.entries(row).some(([key, cell]) => {
    if (/^@odata/i.test(key) || key === "ItemInternalId") return false;
    return String(cell || "").trim();
  }));
}

function splitSurveyDbRows(rows) {
  const result = { Option231: [], Option429: [], FinalPreference: [] };
  rows.forEach((row) => {
    const base = {
      ResponseId: row.ResponseId || "",
      SubmittedAt: row.SubmittedAt || "",
      TesterName: readField(row, "TesterName", ["enter your name", "tester name", "이름"]),
      NormalTrailShoe: readField(row, "NormalTrailShoe", ["trail shoe", "normal trail shoe", "평소 사용하는"]),
      TypicalDistance: readField(row, "TypicalDistance", ["typical distance", "주로 어느 정도"])
    };
    const option231 = { ...base, Option: "Option 231" };
    const option429 = { ...base, Option: "Option 429" };
    const finalPreference = { ...base };
    let has231 = false;
    let has429 = false;
    let hasFinal = false;

    Object.entries(row).forEach(([key, value]) => {
      const text = String(value || "").trim();
      if (!text) return;
      if (/OPTION A/i.test(key)) {
        option231[genericSurveyDbQuestionKey(key, "OPTION A")] = text;
        has231 = true;
      } else if (/OPTION B/i.test(key)) {
        option429[genericSurveyDbQuestionKey(key, "OPTION B")] = text;
        has429 = true;
      } else if (!/^(ResponseId|SubmittedAt)$/i.test(key)) {
        finalPreference[key] = text;
        hasFinal = true;
      }
    });

    if (has231) result.Option231.push(option231);
    if (has429) result.Option429.push(option429);
    if (hasFinal) result.FinalPreference.push(finalPreference);
  });
  return result;
}

function genericSurveyDbQuestionKey(key, optionLabel) {
  return key
    .replace(new RegExp(`\\b${optionLabel}\\s*-\\s*`, "i"), "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildModel(data) {
  const option231 = data.Option231 || [];
  const option429 = data.Option429 || [];
  const finalPreference = data.FinalPreference || [];
  return {
    option231,
    option429,
    finalPreference,
    metrics: buildKpis(option231, option429, finalPreference),
    optionStats: {
      "Option 231": summarizeOption(option231),
      "Option 429": summarizeOption(option429)
    },
    firstStats: summarizeFirstImpression(finalPreference),
    preferences: summarizePreference(finalPreference),
    distances: summarizeDistribution(finalPreference, "typicalDistance", SCALES.distance, ["typical distance"]),
    shoeChips: topTextValues(finalPreference, "NormalTrailShoe", ["normaltrailshoe", "normal trail shoe"], 8),
    reasons: summarizeReasons(finalPreference)
  };
}

function buildKpis(option231, option429, finalPreference) {
  const preference = summarizePreference(finalPreference);
  const option231Votes = preference.counts["Option 231"];
  const option429Votes = preference.counts["Option 429"];
  const pct231 = preference.total ? Math.round((option231Votes / preference.total) * 100) : 0;
  const pct429 = preference.total ? 100 - pct231 : 0;
  return [
    { ko: "옵션 231 응답", en: "Option 231 responses", value: option231.length, noteKo: "제출 건수", noteEn: "Submitted entries" },
    { ko: "옵션 429 응답", en: "Option 429 responses", value: option429.length, noteKo: "제출 건수", noteEn: "Submitted entries" },
    { ko: "첫 인상 및 최종 선호도", en: "1st impression & final preference", value: finalPreference.length, noteKo: "제출 건수", noteEn: "Submitted entries" },
    { ko: "최종 선호 비중", en: "Final preference split", value: `${pct231}% : ${pct429}%`, noteKo: "옵션 231 : 옵션 429", noteEn: "Option 231 : Option 429" }
  ];
}

function summarizeOption(rows) {
  const byQuestion = {};
  OPTION_QUESTIONS.forEach((question) => {
    byQuestion[question.key] = summarizeScale(rows, question);
  });
  const qualityKeys = ["energyFeel", "stabilityFeel", "transitionFeel", "tractionFeel", "protectionFeel", "heelLike", "forefootLike", "energyLike", "stabilityLike", "protectionLike"];
  const values = qualityKeys.map((key) => byQuestion[key]?.normalized).filter(Number.isFinite);
  const overall = values.length ? average(values) : 0;
  return { byQuestion, overall };
}

function summarizeFirstImpression(rows) {
  const byQuestion = {};
  FIRST_IMPRESSION.forEach((question) => {
    byQuestion[question.key] = summarizeScale(rows, question);
  });
  return byQuestion;
}

function summarizeScale(rows, question) {
  const counts = Array(question.scale.length).fill(0);
  rows.forEach((row) => {
    const answer = readAnswer(row, question);
    const index = findChoiceIndex(question.scale, answer);
    if (index >= 0) counts[index] += 1;
  });
  const total = counts.reduce((sum, count) => sum + count, 0);
  const weighted = counts.reduce((sum, count, index) => sum + count * (index + 1), 0);
  const averageScore = total ? weighted / total : 0;
  const normalized = total ? (averageScore - 1) / (question.scale.length - 1) : 0;
  const selectedIndex = total ? Math.round(averageScore - 1) : -1;
  return { ...question, counts, total, averageScore, normalized, selectedIndex };
}

function summarizePreference(rows) {
  const counts = { "Option 231": 0, "Option 429": 0 };
  rows.forEach((row) => {
    const value = normalizeOption(readField(row, "preferredOption", ["prefer overall", "final preference", "최종적으로 더 선호"]));
    if (counts[value] !== undefined) counts[value] += 1;
  });
  const total = counts["Option 231"] + counts["Option 429"];
  return { counts, total };
}

function summarizeDistribution(rows, key, choices, headerTerms) {
  const counts = Object.fromEntries(choices.map((choice) => [choice, 0]));
  rows.forEach((row) => {
    const value = readField(row, key, headerTerms);
    const choice = choices.find((item) => normalizeText(item) === normalizeText(value));
    if (choice) counts[choice] += 1;
  });
  return counts;
}

function topTextValues(rows, directKey, terms, limit) {
  const counts = new Map();
  rows.forEach((row) => {
    const value = readField(row, directKey, terms).trim();
    if (!value) return;
    counts.set(value, (counts.get(value) || 0) + 1);
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

function summarizeReasons(rows) {
  const entries = rows.map((row) => ({
    tester: readTesterName(row),
    option: normalizeOption(readField(row, "preferredOption", ["prefer overall", "final preference", "최종적으로 더 선호"])),
    text: readField(row, "reason", ["why you prefer", "선호하는 이유"])
  })).filter((entry) => entry.text);
  const reasons = entries.map((entry) => entry.text);
  const dictionary = reasonDictionary();
  const dictionaryChips = dictionary
    .map(([ko, en, regex]) => ({ ko, en, count: reasons.filter((reason) => regex.test(reason)).length }))
    .filter((item) => item.count > 0);
  const extractedChips = extractReasonKeywords(reasons);
  const chips = mergeReasonChips(dictionaryChips, extractedChips).slice(0, 10);
  const samples = entries
    .slice()
    .sort((a, b) => b.text.length - a.text.length)
    .slice(0, 4);
  return {
    total: reasons.length,
    chips,
    samples,
    summaryKo: reasons.length
      ? `총 ${reasons.length}개의 선호도 사유에서 반복되는 표현을 자동으로 묶었습니다.`
      : "선호도 사유 응답이 들어오면 키워드와 대표 문장이 표시됩니다.",
    summaryEn: reasons.length
      ? `Auto-grouped recurring terms from ${reasons.length} preference reasons.`
      : "Keyword signals and representative comments will appear when preference reasons arrive."
  };
}

function reasonDictionary() {
  return [
    ["접지력", "traction", /접지|그립|grip|traction|grippy/i],
    ["반발탄성", "energy return", /반발|탄성|energy|spring|springy|responsive/i],
    ["안정성", "stability", /안정|stable|stability|secure/i],
    ["쿠셔닝", "cushioning", /쿠션|쿠셔닝|cushion|cushioning/i],
    ["소프트함", "softness", /소프트|부드|soft/i],
    ["단단함", "firmness", /단단|firm/i],
    ["가벼움", "lightweight", /가볍|무게|light|weight/i],
    ["보호감", "protection", /보호|protect|protection/i],
    ["전환감", "transition", /전환|연결|transition|smooth|slappy/i],
    ["착화감", "step-in feel", /착화|신기|entry|step-in/i],
    ["편안함", "comfort", /편안|불편|comfort|comfortable/i],
    ["통기성", "breathability", /통기|breath/i]
  ];
}

function extractReasonKeywords(reasons) {
  const stop = new Set([
    "option", "because", "about", "with", "from", "that", "this", "feel", "felt", "shoe", "shoes", "more", "very", "really", "overall",
    "옵션", "느낌", "생각", "부분", "정도", "보다", "더", "잘", "좋", "좋고", "좋았", "있는", "없는", "같습니다", "같아요", "합니다"
  ]);
  const counts = new Map();
  reasons.forEach((reason) => {
    const compact = String(reason || "").replace(/\u00a0/g, " ");
    const korean = compact.match(/[가-힣]{2,}/g) || [];
    const english = compact.toLowerCase().match(/[a-z][a-z-]{3,}/g) || [];
    [...korean, ...english].forEach((raw) => {
      const token = raw.replace(/^[\s.,!?;:()[\]{}"']+|[\s.,!?;:()[\]{}"']+$/g, "");
      if (!token || stop.has(token) || token.length < 2) return;
      counts.set(token, (counts.get(token) || 0) + 1);
    });
  });
  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 8)
    .map(([keyword, count]) => ({ ko: keyword, en: "extracted keyword", count, extracted: true }));
}

function mergeReasonChips(dictionaryChips, extractedChips) {
  const merged = new Map();
  [...dictionaryChips, ...extractedChips].forEach((chip) => {
    const key = normalizeCompact(chip.ko);
    const current = merged.get(key);
    if (!current || chip.count > current.count) merged.set(key, chip);
  });
  return [...merged.values()].sort((a, b) => b.count - a.count || Number(!!a.extracted) - Number(!!b.extracted));
}

function renderDashboard(model, usingSample, detail) {
  els.sourceLabel.innerHTML = dualLine(detail.labelKo, detail.labelEn);
  els.sourceDetail.innerHTML = dualLine(detail.noteKo, detail.noteEn);
  renderKpis(model.metrics);
  renderLegend();
  renderRadar(model.optionStats);
  renderOptionSummary(model.optionStats);
  renderPreference(model.preferences);
  renderHeatmap(model.optionStats, model.firstStats);
  renderTesterContext(model.distances, model.shoeChips);
  renderReasons(model.reasons);
}

function renderKpis(metrics) {
  els.kpiGrid.innerHTML = metrics.map((metric, index) => `
    <article class="kpi">
      <div>
        <span class="kpi-label">${dualLine(metric.ko, metric.en)}</span>
        <strong>${escapeHtml(String(metric.value))}</strong>
        <p class="kpi-note">${dualLine(metric.noteKo, metric.noteEn)}</p>
      </div>
      <i class="kpi-icon" aria-hidden="true">${kpiIcon(index)}</i>
    </article>
  `).join("");
}

function kpiIcon(index) {
  const icons = [
    `<svg viewBox="0 0 24 24"><path d="M7.5 11.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm9-1.4a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2ZM2.8 19.4c.6-3.2 2.4-5.1 4.7-5.1s4.1 1.9 4.7 5.1M13.4 18.4c.5-2.4 1.7-3.7 3.2-3.7s2.8 1.3 3.2 3.7"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M7 4.5h10A2.5 2.5 0 0 1 19.5 7v10A2.5 2.5 0 0 1 17 19.5H7A2.5 2.5 0 0 1 4.5 17V7A2.5 2.5 0 0 1 7 4.5Zm2 4h6M9 12h6M9 15.5h4"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M7 4.5h10A2.5 2.5 0 0 1 19.5 7v10A2.5 2.5 0 0 1 17 19.5H7A2.5 2.5 0 0 1 4.5 17V7A2.5 2.5 0 0 1 7 4.5Zm2.2 4.2h5.6M9.2 12h5.6M9.2 15.3h3.2"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="m12 4.4 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 4.4Z"/></svg>`,
    `<svg viewBox="0 0 24 24"><path d="M12 5.1a6.9 6.9 0 1 0 0 13.8 6.9 6.9 0 0 0 0-13.8Zm0 3.1V12l2.5 1.7"/></svg>`
  ];
  return icons[index] || icons[0];
}

function renderLegend() {
  els.optionLegend.innerHTML = [
    ["Option 231", COLORS.option231],
    ["Option 429", COLORS.option429]
  ].map(([label, color]) => `
    <span class="legend-item"><i class="legend-swatch" style="--swatch:${color}"></i>${label}</span>
  `).join("");
}

function renderRadar(optionStats) {
  const axes = RADAR_QUESTIONS.map((key) => OPTION_QUESTIONS.find((question) => question.key === key));
  const values231 = axes.map((question) => optionStats["Option 231"].byQuestion[question.key]?.normalized || 0);
  const values429 = axes.map((question) => optionStats["Option 429"].byQuestion[question.key]?.normalized || 0);
  const size = 520;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 185;
  const grid = [0.25, 0.5, 0.75, 1].map((level) => polygonPoints(axes.length, radius * level, cx, cy));
  const points231 = radarPoints(values231, radius, cx, cy);
  const points429 = radarPoints(values429, radius, cx, cy);
  const labels = axes.map((axis, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / axes.length;
    const x = cx + Math.cos(angle) * (radius + 52);
    const y = cy + Math.sin(angle) * (radius + 52);
    return `
      <text class="radar-label" x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle">
        <tspan x="${x}" dy="-4">${escapeHtml(axis.ko)}</tspan>
        <tspan class="radar-label-en" x="${x}" dy="13">${escapeHtml(axis.en)}</tspan>
      </text>
    `;
  }).join("");

  els.radarChart.innerHTML = `
    <svg class="radar-svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="Option comparison radar chart">
      ${grid.map((points) => `<polygon class="radar-grid-line" points="${points}"></polygon>`).join("")}
      ${axes.map((_, index) => {
        const angle = -Math.PI / 2 + (Math.PI * 2 * index) / axes.length;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        return `<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"></line>`;
      }).join("")}
      <polygon points="${points429}" fill="rgba(83, 102, 111, 0.18)" stroke="${COLORS.option429}" stroke-width="3"></polygon>
      <polygon points="${points231}" fill="rgba(0, 112, 112, 0.2)" stroke="${COLORS.option231}" stroke-width="3"></polygon>
      ${labels}
    </svg>
  `;
}

function renderOptionSummary(optionStats) {
  els.optionSummary.innerHTML = ["Option 231", "Option 429"].map((option) => {
    const stat = optionStats[option];
    const score = clamp(stat.overall, 0, 1);
    const scoreText = (1 + score * 5).toFixed(2);
    const optionClass = option.includes("231") ? "option-231" : "option-429";
    return `
      <section class="option-average ${optionClass}">
        <span>${option} 평균<br><small>${option} Avg.</small></span>
        <strong>${scoreText}</strong>
        <em>/ 6</em>
      </section>
    `;
  }).join("");
}

function renderPreference(preferences) {
  if (!preferences.total) {
    els.preferencePanel.innerHTML = emptyState("최종 선호도 응답이 들어오면 옵션별 비율이 표시됩니다. / Final preference split will appear when responses arrive.");
    return;
  }
  const option231 = preferences.counts["Option 231"];
  const option429 = preferences.counts["Option 429"];
  const pct231 = Math.round((option231 / preferences.total) * 100);
  const pct429 = 100 - pct231;
  els.preferencePanel.innerHTML = `
    <div class="preference-donut-wrap" aria-label="Final preference distribution">
      <div class="preference-side option-231">
        <strong>Option 231</strong>
        <span>${pct231}%</span>
        <small>${option231}명<br>responses</small>
      </div>
      <div class="preference-donut" style="--pct:${pct231}">
        <div class="donut-center">
          <span>총 응답</span>
          <strong>${preferences.total}</strong>
          <small>Total</small>
        </div>
      </div>
      <div class="preference-side option-429">
        <strong>Option 429</strong>
        <span>${pct429}%</span>
        <small>${option429}명<br>responses</small>
      </div>
    </div>
  `;
}

function renderHeatmap(optionStats, firstStats) {
  const upperRows = FIRST_IMPRESSION.map((question) => firstHeatmapGroup(firstStats[question.key])).join("");
  const underfootRows = HEATMAP_QUESTIONS.map((key) => OPTION_QUESTIONS.find((question) => question.key === key)).map((question) => ({
    question,
    stat231: optionStats["Option 231"].byQuestion[question.key],
    stat429: optionStats["Option 429"].byQuestion[question.key]
  })).map(heatmapGroup).join("");
  els.heatmap.innerHTML = `
    <div class="merged-heatmap">
      <section class="heatmap-section">
        <div class="heatmap-section-heading">
          <strong>어퍼 & 첫 인상</strong>
          <span>Upper & First Impression</span>
        </div>
        <div class="heatmap first-heatmap">${upperRows}</div>
      </section>
      <section class="heatmap-section">
        <div class="heatmap-section-heading">
          <strong>언더풋</strong>
          <span>Underfoot</span>
        </div>
        <div class="heatmap">${underfootRows}</div>
      </section>
    </div>
  `;
}

function renderTesterContext(distanceCounts, shoeChips) {
  const max = Math.max(...Object.values(distanceCounts), 1);
  const bars = Object.entries(distanceCounts).map(([label, count]) => `
    <div class="bar-row">
      <span>${dualLine(DISTANCE_LABELS_KO[label] || label, label)}</span>
      <div class="bar-track"><div class="bar-fill" style="--value:${Math.round((count / max) * 100)}%"></div></div>
      <strong>${count}</strong>
    </div>
  `).join("");
  const chips = shoeChips.length
    ? shoeChips.map(([label, count]) => `<span class="chip">${escapeHtml(label)} · ${count}</span>`).join("")
    : `<span class="chip">신발 데이터 없음 / No shoe data yet</span>`;
  els.testerContext.innerHTML = `
    <div class="context-block">
      <section class="context-section">
        <h3>${dualLine("주행 거리", "Typical distance per trail run")}</h3>
        <div>${bars}</div>
      </section>
      <section class="context-section">
        <h3>${dualLine("주로 착용하는 트레일 러닝화", "Normal trail shoes")}</h3>
        <div class="chips">${chips}</div>
      </section>
    </div>
  `;
}

function renderReasons(reasons) {
  if (!reasons.total) {
    els.reasonSignals.innerHTML = emptyState(dualLineText(reasons.summaryKo, reasons.summaryEn));
    return;
  }
  const chips = reasons.chips.length
    ? reasons.chips.map((chip) => `
      <span class="chip reason-chip">
        <span>${escapeHtml(chip.ko)}<small>${escapeHtml(chip.en)}</small></span>
        <strong>${chip.count}</strong>
      </span>
    `).join("")
    : `<span class="chip">${dualLine("키워드 분석 대기", "Waiting for stronger keyword signals")}</span>`;
  const samples = reasons.samples.map((sample) => `
    <li class="reason-item">
      <p>${escapeHtml(sample.text)}</p>
      <span>${escapeHtml(sample.tester || "Anonymous")} · ${escapeHtml(sample.option || "Final preference")}</span>
    </li>
  `).join("");
  els.reasonSignals.innerHTML = `
    <div class="reason-summary">${dualLine(reasons.summaryKo, reasons.summaryEn)}</div>
    <div class="chips">${chips}</div>
    <ul class="reason-list">${samples}</ul>
  `;
}

function heatmapGroup({ question, stat231, stat429 }) {
  return `
    <div class="heatmap-group">
      <div class="heatmap-label">
        <strong>${escapeHtml(question.ko)}</strong>
        <span>${escapeHtml(question.en)}</span>
      </div>
      <div class="heatmap-pair">
        ${heatmapTrack("231", stat231)}
        ${heatmapTrack("429", stat429)}
      </div>
    </div>
  `;
}

function firstHeatmapGroup(stat) {
  return `
    <div class="heatmap-group first-heatmap-group">
      <div class="heatmap-label">
        <strong>${escapeHtml(stat.ko)}</strong>
        <span>${escapeHtml(stat.en)}</span>
      </div>
      <div class="heatmap-pair">
        ${heatmapTrack("ALL", stat)}
      </div>
    </div>
  `;
}

function heatmapTrack(optionLabel, stat) {
  const max = Math.max(...stat.counts, 1);
  const cells = stat.counts.map((count, index) => {
    const tone = colorForTone(stat.tone, index, stat.scale.length);
    const opacity = count ? 0.34 + (count / max) * 0.62 : 0.12;
    return `<span class="heat-cell" title="${escapeHtml(stat.scale[index])}: ${count}" style="--heat-color:${tone.color};--heat-opacity:${opacity}">${count || ""}</span>`;
  }).join("");
  const badge = optionLabel === "ALL"
    ? `<span class="heat-option heat-ALL"><span>전체</span><small>All</small></span>`
    : `<span class="heat-option heat-${optionLabel}">${optionLabel}</span>`;
  return `
    <div class="heat-track">
      ${badge}
      <div class="heat-cells" style="--cells:${stat.scale.length}">${cells}</div>
      <strong>${stat.total}</strong>
    </div>
  `;
}

function colorForTone(tone, index, count) {
  if (tone === "quality") return qualityColor(index, count);
  if (tone === "ideal-center") return idealCenterColor(index, count);
  if (tone === "liking") return likingColor(index, count);
  return { color: COLORS.neutral, shadow: "rgba(141, 152, 148, 0.18)" };
}

function qualityColor(index, count) {
  return paletteColor(QUALITY_PALETTE, index, count);
}

function idealCenterColor(index, count) {
  return paletteColor(IDEAL_CENTER_PALETTE, index, count);
}

function likingColor(index, count) {
  return paletteColor(LIKING_PALETTE, index, count);
}

function paletteColor(palette, index, count) {
  if (index < 0) return { color: COLORS.neutral, shadow: "rgba(141, 152, 148, 0.18)" };
  const paletteIndex = count <= 1 ? palette.length - 1 : Math.round((index / (count - 1)) * (palette.length - 1));
  const [color, shadow] = palette[Math.max(0, Math.min(paletteIndex, palette.length - 1))];
  return { color, shadow };
}

function radarPoints(values, radius, cx, cy) {
  return values.map((value, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / values.length;
    const r = radius * clamp(value, 0, 1);
    return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
  }).join(" ");
}

function polygonPoints(count, radius, cx, cy) {
  return Array.from({ length: count }, (_, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / count;
    return `${cx + Math.cos(angle) * radius},${cy + Math.sin(angle) * radius}`;
  }).join(" ");
}

function readAnswer(row, question) {
  return readField(row, question.key, question.match);
}

function readField(row, directKey, terms) {
  if (row[directKey] !== undefined && row[directKey] !== null) return String(row[directKey]).trim();
  const normalizedTerms = terms.map((term) => ({
    spaced: normalizeText(term),
    compact: normalizeCompact(term)
  }));
  const key = Object.keys(row).find((candidate) => {
    const normalized = normalizeText(candidate);
    const compact = normalizeCompact(candidate);
    return normalizedTerms.every((term) => normalized.includes(term.spaced) || compact.includes(term.compact));
  });
  return key ? String(row[key] || "").trim() : "";
}

function readTesterName(row) {
  return readField(row, "TesterName", ["testername", "enter your name", "이름"]);
}

function findChoiceIndex(choices, answer) {
  const normalized = normalizeText(answer);
  return choices.findIndex((choice) => normalizeText(choice) === normalized);
}

function normalizeOption(value) {
  const text = normalizeText(value);
  if (text.includes("231")) return "Option 231";
  if (text.includes("429")) return "Option 429";
  return "";
}

function normalizeText(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function normalizeCompact(value) {
  return normalizeText(value).replace(/\s+/g, "");
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function dualLine(ko, en) {
  return `<span>${escapeHtml(ko)}</span><small>${escapeHtml(en)}</small>`;
}

function dualLineText(ko, en) {
  return `${ko}\n${en}`;
}

function formatKstTime(date) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(date);
}

function emptyState(message) {
  return `<div class="empty-state">${escapeHtml(message)}</div>`;
}
