// generate-full-summary.js
const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), 'cypress.env.json');
const envData = JSON.parse(fs.readFileSync(envPath, 'utf8'));
const environment = envData.ApplicationURL;
const buildNumber = envData.BuildNumber;

let XLSX;
try { XLSX = require('xlsx'); } catch {
  console.warn('[summary] ⚠️ Excel export disabled. Install with: npm i xlsx');
}

const ROOT_REPORT_DIR = path.join(process.cwd(), 'cypress', 'reports', 'html');
const OUTPUT_JSON = path.join(ROOT_REPORT_DIR, 'JnJAutomation-Summary.json');
const OUTPUT_HTML = path.join(ROOT_REPORT_DIR, 'JnJAutomation-Summary.html');
const OUTPUT_XLSX = path.join(ROOT_REPORT_DIR, 'JnJAutomation-Summary.xlsx');

const SHOW_LIMIT_PER_SPEC = 2;
const SHOW_LIMIT_FAILURES = 1;
const SHOW_LIMIT_CATEGORIES = 2;

// ---------- User config (provided) ----------
const SCREENSHOT_BASE = 'cypress/screenshots'; // as provided
const COPY_PATH_FORMAT = 'relative'; // 'relative' per user choice
// spec extension example: 'login.cy.js' typical pattern is '.cy.js' but we will detect from file names
// --------------------------------------------

function log(msg) { console.log(`[summary] ${msg}`); }
function safeNumber(n, d = 0) { const v = Number(n); return Number.isFinite(v) ? v : d; }
function normalizeDuration(d) { return Math.max(0, safeNumber(d, 0)); }
function normalizeErrorMessage(err) {
  if (!err) return 'Unknown Error';
  const src = (err.message ?? err.stack ?? String(err) ?? '').split('\n')[0].trim();
  return src || 'Unknown Error';
}
function categorizeFailure(msg) {
  const s = String(msg).toLowerCase();
  if (s.includes('timeout') || s.includes('timed out')) return 'Timeout Issues';
  if (s.includes('intercept') || s.includes('click') || s.includes('element click')) return 'Element Click Interception';
  if (s.includes('not found') || s.includes('unable to locate') || s.includes('locator')) return 'Locator Not Found';
  if (s.includes('assert') || s.includes('expected')) return 'Assertion Failures';
  if (s.includes('network') || s.includes('api') || s.includes('xhr') || s.includes('fetch')) return 'Network/API Errors';
  return 'Other Errors';
}
function listJsonFilesRecursively(rootDir) {
  const files = [];
  (function walk(dir) {
    let entries; try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.isFile() && e.name.toLowerCase().endsWith('.json')) {
        if (path.resolve(full) === path.resolve(OUTPUT_JSON)) continue;
        files.push(full);
      }
    }
  })(rootDir);
  return files;
}
function extractTestsFromReport(report) {
  const all = [];
  function walkSuite(suite, parents = []) {
    if (!suite) return;
    const parentTitles = parents.filter(Boolean);
    const suiteTitle = suite.title ?? suite.fullTitle ?? null;

    if (Array.isArray(suite.tests)) {
      for (const t of suite.tests) {
        const title = t.fullTitle ?? [...parentTitles, suiteTitle, t.title].filter(Boolean).join(' > ');
        const duration = normalizeDuration((t.wallClockDuration ?? t.duration));
        const state = t.state ?? (t.pass ? 'passed' : t.fail ? 'failed' : (t.pending ? 'pending' : 'unknown'));
        const err = t.err ?? t.error ?? null;
        all.push({ title, state, duration, file: suite.file ?? t.file ?? report.file ?? 'Unknown Spec', err });
      }
    }
    if (Array.isArray(suite.suites)) {
      for (const child of suite.suites) {
        walkSuite(child, suiteTitle ? [...parentTitles, suiteTitle] : parentTitles);
      }
    }
  }
  if (Array.isArray(report.results)) { for (const r of report.results) walkSuite(r, []); }
  else walkSuite(report, []);
  return all;
}
function formatDuration(ms) {
  const totalMs = Math.max(0, safeNumber(ms));
  const totalSec = Math.floor(totalMs / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const ms3 = String(totalMs % 1000).padStart(3, '0');
  const pad = n => String(n).padStart(2, '0');
  return `${pad(h)}:${pad(m)}:${pad(s)}.${ms3}`;
}

// 🔥 Universal screenshot resolver (local + Azure + nested folders)
function getBase64Screenshot(specFile, testTitle) {
  try {
    // Attempt lookup paths
    const searchRoots = [
      path.join(process.cwd(), 'cypress', 'screenshots'),
      path.join(process.cwd(), 'test', 'e2e', 'cypress', 'screenshots'),
      process.cwd()
    ];

    const cleanedTitle = testTitle.replace(/\s+/g, ' ').trim();
    const specFolder = prettyFileName(specFile);
    const expectedFile = `${cleanedTitle} ${cleanedTitle}.png`;

    function scan(dir) {
      if (!fs.existsSync(dir)) return null;
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const full = path.join(dir, entry.name);

        if (entry.isDirectory()) {
          const sub = scan(full);
          if (sub) return sub;
        } else if (entry.isFile() && entry.name === expectedFile && full.includes(specFolder)) {
          return full;
        }
      }
      return null;
    }

    let resolved = null;
    for (const root of searchRoots) {
      resolved = scan(root);
      if (resolved) break;
    }

    if (!resolved) {
      console.log("⚠ Screenshot NOT FOUND for:", expectedFile);
      return null;
    }

    const buffer = fs.readFileSync(resolved);
    return `data:image/png;base64,${buffer.toString('base64')}`;

  } catch (err) {
    console.log("⚠ screenshot error:", err.message);
    return null;
  }
}



// Proper HTML escape
const escape = s =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function prettyFileName(filePath) {
  if (!filePath) return 'Unknown Spec';
  const normalized = String(filePath).replace(/\\/g, '/');
  const parts = normalized.split('/');
  return parts.length ? parts[parts.length - 1] : normalized;
}
function toBadge(n, type = 'neutral') {
  const map = { ok: 'badge-ok', bad: 'badge-bad', pending: 'badge-pending', neutral: 'badge' };
  const cls = map[type] || 'badge';
  return `<span class="${cls}">${n}</span>`;
}

function sanitizeForFilename(s) {
  // Replace characters that are typically invalid in file names or used by screenshots naming
  return String(s || '').replace(/\s+/g, ' ').trim()
    .replace(/[:\/\\?%*|"<>]/g, '')    // remove path/reserved chars
    .replace(/[^\w\-\. ]+/g, '')       // keep alnum, underscore, dash, dot and space
  // .replace(/\s+/g, ' - ');          // spaces -> ' - ' to mimic Cypress default sometimes
}

function buildScreenshotPathFromSpecAndTest(specFilePath, testTitle) {
  // behavior: use base + prettyFileName(specFilePath) + '/' + sanitized testTitle + '.png'
  const specFile = prettyFileName(specFilePath);
  // drop extensions only for display folder names if your screenshots folder uses the spec filename (with extension)
  const specFolderName = specFile; // keep extension; most Cypress setups create folder named after the spec file (with extension)
  const testName = sanitizeForFilename(testTitle) || 'screenshot';
  const imgName = `${testName}.png`;
  const rel = path.posix.join(SCREENSHOT_BASE.replace(/\\/g, '/'), specFolderName, imgName);
  return rel;
}

function generate() {
  log(`Scanning reports under: ${ROOT_REPORT_DIR}`);
  const jsonFiles = listJsonFilesRecursively(ROOT_REPORT_DIR);
  if (!jsonFiles.length) {
    console.error(`❌ No mochawesome JSON found under ${ROOT_REPORT_DIR}`);
    process.exit(1);
  }

  const allTests = [];
  for (const file of jsonFiles) {
    try {
      const raw = fs.readFileSync(file, 'utf8');
      const report = JSON.parse(raw);
      const tests = extractTestsFromReport(report);
      tests.forEach(t => { if (!t.file) t.file = file; });
      allTests.push(...tests);
    } catch (e) {
      console.warn(`[summary] ⚠️ Skipping unreadable JSON: ${file} (${e.message})`);
    }
  }

  const total = allTests.length;
  const passed = allTests.filter(t => t.state === 'passed').length;
  const failedTests = allTests.filter(t => t.state === 'failed');
  const failed = failedTests.length;
  const pending = allTests.filter(t => (t.state === 'pending' || t.state === 'skipped')).length;
  const durations = allTests.map(t => normalizeDuration(t.duration));
  const overallDurationMs = durations.reduce((a, b) => a + b, 0);

  const failureReasonsDetailed = {};
  failedTests.forEach(t => {
    const reason = normalizeErrorMessage(t.err);
    const key = `${t.file}\n${t.title}\n${reason}`;
    failureReasonsDetailed[key] = (failureReasonsDetailed[key] ?? 0) + 1;
  });

  const failureCategories = {};
  failedTests.forEach(t => {
    const reason = normalizeErrorMessage(t.err);
    const category = categorizeFailure(reason);
    failureCategories[category] = (failureCategories[category] ?? 0) + 1;
  });

  const perSpec = {};
  allTests.forEach(t => {
    const key = t.file ?? 'Unknown Spec';
    if (!perSpec[key]) perSpec[key] = { passed: 0, failed: 0, pending: 0, durations: [] };
    const spec = perSpec[key];
    if (t.state === 'passed') spec.passed++;
    if (t.state === 'failed') spec.failed++;
    if (t.state === 'pending' || t.state === 'skipped') spec.pending++;
    spec.durations.push(normalizeDuration(t.duration));
  });
  Object.keys(perSpec).forEach(k => {
    const d = perSpec[k].durations;
    perSpec[k].totalDurationMs = d.reduce((a, b) => a + b, 0);
  });

  const passPct = total ? Number(((passed / total) * 100).toFixed(0)) : 0;
  const failPct = total ? Number(((failed / total) * 100).toFixed(0)) : 0;
  const pendingPct = total ? Math.max(0, 100 - passPct - failPct) : 0;

  const summary = {
    reportTitle: 'JnJ Automation Summary Report',
    totals: { totalTests: total, passed, failed, pending, passPercentage: passPct, failPercentage: failPct, pendingPercentage: pendingPct },
    duration: { overallMs: overallDurationMs },
    failureReasonsDetailed,
    failureCategories,
    environment: environment ? environment.toUpperCase() : 'UNKNOWN',
    perSpec,
    generatedAt: new Date().toISOString()
  };


  // Write JSON & clean outputs
  try {
    fs.mkdirSync(ROOT_REPORT_DIR, { recursive: true });
    if (fs.existsSync(OUTPUT_JSON)) fs.unlinkSync(OUTPUT_JSON);
    if (fs.existsSync(OUTPUT_HTML)) fs.unlinkSync(OUTPUT_HTML);
    if (fs.existsSync(OUTPUT_XLSX)) fs.unlinkSync(OUTPUT_XLSX);
    fs.writeFileSync(OUTPUT_JSON, JSON.stringify(summary, null, 2));
    log(`✅ Full summary JSON: ${OUTPUT_JSON}`);
  } catch (e) { console.error(`❌ Failed to write JSON: ${e.message}`); }

  // Build HTML tables
  const perFileDurationSorted = Object.entries(summary.perSpec)
    .map(([spec, s]) => ({ spec, totalDurationMs: s.totalDurationMs, passed: s.passed, failed: s.failed, pending: s.pending }))
    .sort((a, b) => b.totalDurationMs - a.totalDurationMs);

  const headRowsDur = perFileDurationSorted.slice(0, SHOW_LIMIT_PER_SPEC).map(r => `
    <tr>
      <td title="${escape(r.spec)}">${escape(prettyFileName(r.spec))}</td>
      <td><strong>${formatDuration(r.totalDurationMs)}</strong></td>
      <td>${toBadge(r.passed, 'ok')}</td>
      <td>${toBadge(r.failed, 'bad')}</td>
      <td>${toBadge(r.pending, 'pending')}</td>
    </tr>`).join('');

  const moreRowsDur = perFileDurationSorted.slice(SHOW_LIMIT_PER_SPEC).map(r => `
    <tr>
      <td title="${escape(r.spec)}">${escape(prettyFileName(r.spec))}</td>
      <td><strong>${formatDuration(r.totalDurationMs)}</strong></td>
      <td>${toBadge(r.passed, 'ok')}</td>
      <td>${toBadge(r.failed, 'bad')}</td>
      <td>${toBadge(r.pending, 'pending')}</td>
    </tr>`).join('');

  const detailedEntries = Object.entries(summary.failureReasonsDetailed);
  const failureRows =
    detailedEntries.length === 0 ? `<tr><td colspan="2">No failures 🎉</td></tr>`
      : detailedEntries.slice(0, SHOW_LIMIT_FAILURES).map(([combined, count], idx) => {
        const [file, test, reason] = combined.split('\n');
        const category = categorizeFailure(reason);
        const screenshotBase64 = getBase64Screenshot(file, test);
        const safeId = 'fail-' + idx + '-' + Math.abs(hashCode(combined));
        const relCopyPath = COPY_PATH_FORMAT === 'relative' ? makeRelativePath(file) : file;
        return `
      <tr data-category="${escape(category)}">
        <td>
          <div class='file' title="${escape(file)}">${escape(prettyFileName(file))}</div>
          <div class='test' title="${escape(test)}">${escape(test)}</div>
          <div class='reason'>${escape(reason)}</div>
          <div class='category'>Category: <strong style="color:var(--brand)">${escape(category)}</strong></div>

          <div style="margin-top:8px; display:flex; gap:8px; align-items:center;">
            <button class="btn btn-copy" data-copy="${escape(relCopyPath)}" onclick="copyPath(this)">📋 Copy Path</button>
            <button class="btn btn-toggle" aria-expanded="false" data-target="${safeId}" onclick="toggleTestDetails(this)">🔍 Screenshot</button>
            <span class="muted" style="font-size:12px;">(screenshot loads when expanded)</span>
          </div>

          <div id="${safeId}" class="test-details" style="display:none; margin-top:12px;">
  <div class="screenshot-wrap">
    ${screenshotBase64
            ? `<img class="screenshot-img" src="${screenshotBase64}" />`
            : `<div class="no-screenshot">No screenshot found</div>`
          }
  </div>
</div>

        </td>
        <td>${toBadge(count, 'bad')}</td>
      </tr>`;
      }).join('');

  const failureRowsMore =
    detailedEntries.length <= SHOW_LIMIT_FAILURES ? ''
      : detailedEntries.slice(SHOW_LIMIT_FAILURES).map(([combined, count], idx2) => {
        const [file, test, reason] = combined.split('\n');
        const category = categorizeFailure(reason);
        const screenshotBase64 = getBase64Screenshot(file, test);
        const safeId = 'fail-more-' + idx2 + '-' + Math.abs(hashCode(combined));
        const relCopyPath = COPY_PATH_FORMAT === 'relative' ? makeRelativePath(file) : file;
        return `
      <tr data-category="${escape(category)}">
        <td>
          <div class='file' title="${escape(file)}">${escape(prettyFileName(file))}</div>
          <div class='test' title="${escape(test)}">${escape(test)}</div>
          <div class='reason'>${escape(reason)}</div>
          <div class='category'>Category: <strong style="color:var(--brand)">${escape(category)}</strong></div>

          <div style="margin-top:8px; display:flex; gap:8px; align-items:center;">
            <button class="btn btn-copy" data-copy="${escape(relCopyPath)}" onclick="copyPath(this)">📋 Copy Path</button>
            <button class="btn btn-toggle" aria-expanded="false" data-target="${safeId}" onclick="toggleTestDetails(this)">🔍 Screenshot</button>
            <span class="muted" style="font-size:12px;">(screenshot loads when expanded)</span>
          </div>

          <div id="${safeId}" class="test-details" style="display:none; margin-top:12px;">
  <div class="screenshot-wrap">
    ${screenshotBase64
            ? `<img class="screenshot-img" src="${screenshotBase64}" />`
            : `<div class="no-screenshot">No screenshot found</div>`
          }
  </div>
</div>


        </td>
        <td>${toBadge(count, 'bad')}</td>
      </tr>`;
      }).join('');

  const categoryEntries = Object.entries(summary.failureCategories);
  const categoryRowsHead =
    categoryEntries.length === 0 ? `<tr><td colspan="2">No categories 🎉</td></tr>`
      : categoryEntries.slice(0, SHOW_LIMIT_CATEGORIES).map(([cat, count]) => {
        let color = 'var(--brand)';
        if (cat === 'Element Click Interception') color = 'var(--accent)';
        if (cat === 'Locator Not Found') color = '#7c3aed';
        if (cat === 'Assertion Failures') color = '#a855f7';
        if (cat === 'Network/API Errors') color = 'var(--bad)';
        if (cat === 'Other Errors') color = 'var(--muted)';
        return `<tr><td style="font-weight:600;color:${color};">${escape(cat)}</td><td>${toBadge(count, 'bad')}</td></tr>`;
      }).join('');

  const categoryRowsMore =
    categoryEntries.length <= SHOW_LIMIT_CATEGORIES ? ''
      : categoryEntries.slice(SHOW_LIMIT_CATEGORIES).map(([cat, count]) => {
        let color = 'var(--brand)';
        if (cat === 'Element Click Interception') color = 'var(--accent)';
        if (cat === 'Locator Not Found') color = '#7c3aed';
        if (cat === 'Assertion Failures') color = '#a855f7';
        if (cat === 'Network/API Errors') color = 'var(--bad)';
        if (cat === 'Other Errors') color = 'var(--muted)';
        return `<tr><td style="font-weight:600;color:${color};">${escape(cat)}</td><td>${toBadge(count, 'bad')}</td></tr>`;
      }).join('');

  const categoryFilterOptions =
    categoryEntries.length === 0 ? `<option value="__all__" selected>All</option>`
      : [`<option value="__all__" selected>All</option>`, ...categoryEntries.map(([cat]) => `<option value="${escape(cat)}">${escape(cat)}</option>`)].join('');

  // helper functions used inside template (hashed to produce unique ids)
  function hashCode(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) - h) + str.charCodeAt(i);
      h |= 0;
    }
    return h;
  }
  function makeRelativePath(fullPath) {
    // Keep relative path by attempting to find 'cypress' segment and build from there
    try {
      const n = String(fullPath).replace(/\\/g, '/');
      const idx = n.indexOf('/cypress/');
      if (idx !== -1) return n.slice(idx + 1); // remove leading slash
      const idx2 = n.indexOf('cypress/');
      if (idx2 !== -1) return n.slice(idx2);
      // fallback: return the prettyFileName (filename only)
      return n;
    } catch (e) { return fullPath; }
  }

  // ----------------------- HTML -----------------------
  const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>JnJ Automation Summary Report</title>

  <!-- Poppins font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet">

  <!-- Resilient Chart.js loader -->
  <script>
    (function(){
      function load(src){
        return new Promise(function(resolve){
          var s = document.createElement('script');
          s.src = src; s.async = true;
          s.onload = function(){ resolve(true); };
          s.onerror = function(){ resolve(false); };
          document.head.appendChild(s);
        });
      }
      window.__chartReady = (async function(){
        if(window.Chart) return true;
        var okLocal = await load('assets/chart.umd.min.js'); // local preferred
        if(window.Chart) return true;
        var okCdn = await load('https://cdn.jsdelivr.net/npm/chart.js'); // fallback
        return !!window.Chart;
      })();
      window.__charts = [];
    })();
  </script>

  <style>
    :root{
      --bg:#f4f7fb; --card:#ffffff; --text:#0f172a; --muted:#5b6b7e;
      --ok:#199473; --bad:#d92d20; --brand:#1f5ac6; --border:#dbe5f2; --accent:#3b82f6; --pend:#f59e0b;
      --bg-grad-1:#eef3fb; --bg-grad-2:#f7fbff;
      --label-col: 75%; --count-col: 25%; --count-pad-right: 20px;
      --font: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }
    *{box-sizing:border-box}
    html,body{ height:100%; }
    body{
      margin:20px;
      color:var(--text);
      background: linear-gradient(135deg, var(--bg-grad-1), var(--bg-grad-2));
      font-family: var(--font);
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      line-height:1.35;
      font-size:14px;
    }
    h1{margin:0 0 4px; font-size:20px;} h2{margin:0 0 8px; display:flex; align-items:center; justify-content:space-between; font-size:16px;}
    .muted{color:var(--muted)}

    /* ===== Header card: compact chart left + KPIs right ===== */
    .header-card{
      display:grid;
      grid-template-columns: 360px 1fr;
      column-gap: 20px;
      border:1px solid var(--border); border-radius:14px; padding:16px;
      background:var(--card); box-shadow:0 3px 12px rgba(31,41,55,.06);
      margin-bottom:16px;
      align-items:center;
    }
    .header-left{display:flex; flex-direction:column; gap:8px;}
    .header-title{font-size:20px; font-weight:700;}
    .header-meta{font-size:12px; color:var(--muted)}

    .viz-inline { width: 100%; max-width: 360px; margin: 0; padding: 0; }
    .chart-wrap { display: grid; place-items: center; }
    canvas.chart-inline { display:block; width: 100%; height: 220px; max-width: 360px; margin: 0 auto; }
    .inline-legend { display:flex; gap:14px; align-items:center; justify-content:center; margin-top:8px; font-size:12px; color:var(--muted); flex-wrap:wrap; }
    .legend-item { display:flex; gap:6px; align-items:center; }
    .dot { width:10px; height:10px; border-radius:50%; display:inline-block; }
    .dot.pass { background:var(--ok); }
    .dot.fail { background:var(--bad); }
    .dot.pending { background:var(--pend); }

    .header-right{display:flex; flex-direction:column; gap:12px; align-items:flex-end;}
    .stats{
      display:grid;
      grid-template-columns: repeat(4, 220px);
      justify-content: end;
      gap:12px;
      width:100%;
    }
    @media (max-width: 1400px){
      .stats{ grid-template-columns: repeat(4, 200px); }
    }
    @media (max-width: 1200px){
      .header-card{ grid-template-columns: 340px 1fr; }
      .stats{ grid-template-columns: repeat(2, 220px); } /* 2x2 wrap */
    }
    @media (max-width: 768px){
      .header-card{ grid-template-columns: 1fr; row-gap: 16px; }
      .header-right{ align-items: stretch; }
      .stats{ grid-template-columns: repeat(2, minmax(140px, 1fr)); justify-content: stretch; }
      canvas.chart-inline { height: 180px; }
    }

    .stat{
      background:var(--card);
      border:1px solid var(--border);
      border-radius:12px;
      padding:10px 12px;
      text-align:center;
      box-shadow:0 3px 10px rgba(31,41,55,.04);
    }
    .stat .label{font-size:12px; color:var(--muted)}
    .stat .value{font-weight:700; font-size:16px}
    .stat.ok .value{color:var(--ok)} .stat.bad .value{color:var(--bad)} .stat.pending .value{color:var(--pend)}
    .header-actions{display:flex; gap:8px; align-items:center; flex-wrap:wrap;}
    .btn{padding:6px 10px; border:1px solid var(--border); border-radius:8px; background:var(--card); color:var(--text); cursor:pointer; font-weight:600;}
    .btn:hover{ background: color-mix(in oklab, var(--card) 88%, var(--accent) 12%); }
    .btn-copy{ display:inline-flex; gap:8px; align-items:center; padding:6px 10px; font-size:13px; }
    .btn-toggle{ display:inline-flex; gap:6px; align-items:center; padding:6px 10px; font-size:13px; }

    /* ===== Cards below header ===== */
    .grid{display:grid; grid-template-columns:1fr; gap:16px}
    .card{border:1px solid var(--border); border-radius:14px; padding:16px; background:var(--card); box-shadow:0 3px 12px rgba(31,41,55,.04); overflow:hidden;}
    .card h2 .arrow{cursor:pointer; font-weight:700; color:var(--accent); margin-left:8px;}
    .card > div { overflow-x:auto; }

    /* tables */
    table{width:100%; border-collapse:collapse; margin-top:8px; table-layout: fixed;}
    thead th{ position: sticky; top:0; z-index:2;
      background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,250,255,0.9));
      color:var(--text); white-space:nowrap; text-overflow:ellipsis; overflow:hidden; padding:10px;
    }
    th,td{border-bottom:1px solid var(--border); padding:10px; text-align:left; vertical-align:top;}
    th.sortable{cursor:pointer; user-select:none;}
    th.sortable .sort-indicator{margin-left:6px; font-weight:700; color:var(--accent);}

    .badge{display:inline-block; padding:4px 10px; border-radius:999px; font-size:12px; border:1px solid var(--border); background:var(--card);}
    .badge-ok{color:var(--ok); border-color:color-mix(in oklab, var(--ok) 30%, var(--border) 70%); background:color-mix(in oklab, var(--ok) 8%, var(--card) 92%);}
    .badge-bad{color:var(--bad); border-color:color-mix(in oklab, var(--bad) 30%, var(--border) 70%); background:color-mix(in oklab, var(--bad) 8%, var(--card) 92%);}
    .badge-pending{color:var(--pend); border-color:color-mix(in oklab, var(--pend) 30%, var(--border) 70%); background:color-mix(in oklab, var(--pend) 12%, var(--card) 88%);}

    .search-box{margin-bottom:8px; padding:8px 10px; width:100%; border:1px solid var(--border); border-radius:8px; background:var(--card); color:var(--text);}

    .file{font-weight:700; color:var(--text); margin-bottom:4px;} .test{margin-bottom:4px; color:var(--accent); font-weight:600;}
    .reason{font-style:italic; color:var(--muted);} .category{margin-top:4px; font-size:13px; color:var(--brand);}

    .exec-total{font-weight:600; font-size:13px; color:#1f2937; background:#eef2ff; border:1px solid #dbeafe; padding:4px 8px; border-radius:8px; display:inline-block; max-width:280px; text-align:center;}
    .inline-controls{display:flex; gap:8px; align-items:center; margin-top:8px; flex-wrap:wrap;}
    .select{padding:6px 8px; border:1px solid var(--border); border-radius:8px; background:var(--card); color:var(--text);}

    #exec-table col:nth-child(1){ width:38%; } #exec-table col:nth-child(2){ width:15%; }
    #exec-table col:nth-child(3){ width:15%; } #exec-table col:nth-child(4){ width:15%; } #exec-table col:nth-child(5){ width:17%; }
    #cat-table col:nth-child(1), #fail-table col:nth-child(1){ width:var(--label-col); }
    #cat-table col:nth-child(2), #fail-table col:nth-child(2){ width:var(--count-col); }
    #cat-table td:nth-child(2), #fail-table td:nth-child(2){ text-align:right; padding-right:var(--count-pad-right); white-space:nowrap; }
    #cat-table thead th:nth-child(2), #fail-table thead th:nth-child(2){ text-align:right; padding-right:var(--count-pad-right); }
    #exec-table td:first-child, #fail-table td:first-child { word-break:break-word; }
    #exec-table td:nth-child(n+2){ white-space:nowrap; }

    .chart-error{ padding:12px; text-align:center; color:var(--muted); border:1px dashed var(--border); border-radius:12px;
      background:color-mix(in oklab, var(--card) 92%, var(--brand) 8%); }

    .test-details{ border-top:1px dashed var(--border); padding-top:12px; }
    .screenshot-wrap{ display:flex; gap:12px; align-items:flex-start; flex-wrap:wrap; }
    .screenshot-img{ max-width:420px; width:100%; height:auto; border-radius:10px; border:1px solid var(--border); box-shadow:0 6px 18px rgba(31,41,55,.06); }
    .no-screenshot{ padding:12px; border-radius:8px; background:#fff7f5; color:var(--muted); border:1px solid #ffd7d0; font-size:13px; }

    @media print{
      body{background:#fff; color:#000;}
      .toggle-btn, .search-box, .arrow, #pdf-btn, #excel-btn, .btn { display:none !important; }
      .card{break-inside:avoid;}
      a{color:#000; text-decoration:none;}
    }
  </style>

  <script>
    // small helpers present in the generated HTML
    function toggleRows(id){
      var section=document.getElementById(id), btn=document.getElementById(id+'-btn');
      if(!section || !btn) return;
      var isHidden = section.style.display==='none' || section.style.display==='';
      section.style.display = isHidden ? 'table-row-group' : 'none';
      btn.textContent = isHidden ? 'Show Less' : 'Show More';
    }
    function filterTable(inputId,tableId){
      var filter=(document.getElementById(inputId)?.value ?? '').toLowerCase();
      document.querySelectorAll('#'+tableId+' tbody tr').forEach(function(row){
        var text=row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
      });
    }
    function toggleCard(cardId){
      var content=document.getElementById(cardId+'-content'), arrow=document.getElementById(cardId+'-arrow');
      if(!content || !arrow) return;
      var isHidden = content.style.display==='none';
      content.style.display = isHidden ? 'block' : 'none';
      arrow.textContent = isHidden ? '▲' : '▼';
    }
    function downloadPDF(){ window.print(); }
    function downloadExcel(){ window.location.href = 'JnJAutomation-Summary.xlsx'; }

    function persistValue(id){ var el=document.getElementById(id); if(!el) return;
      localStorage.setItem('jnj-'+id, el.type==='checkbox' ? (el.checked?'1':'0') : el.value);
    }
    function restoreValue(id, cb){
      var val=localStorage.getItem('jnj-'+id), el=document.getElementById(id);
      if(!el || val===null) return;
      if(el.type==='checkbox') el.checked = (val==='1'); else el.value = val;
      if(typeof cb==='function') cb();
    }

    function parseDurationToMs(s){
      var m=String(s).trim().match(/^(\\d{2}):(\\d{2}):(\\d{2})\\.(\\d{3})$/);
      if(!m) return 0;
      var h=+m[1], min=+m[2], sec=+m[3], ms=+m[4];
      return (((h*3600)+(min*60)+sec)*1000)+ms;
    }
    function cellValue(row, idx, type){
      var txt=(row.children[idx]?.innerText ?? '').trim();
      if(type==='number') return Number(txt.replace(/[^\\d.\\-]/g,'')) ?? 0;
      if(type==='duration') return parseDurationToMs(txt);
      return txt.toLowerCase();
    }
    function initTableHeadCount(tableId){
      var table=document.getElementById(tableId); if(!table || table.dataset.headCount) return;
      var bodies=table.querySelectorAll('tbody'); if(bodies.length>=1) table.dataset.headCount = String(bodies[0].rows.length);
    }
    function setSortIndicator(tableId, colIndex, dir){
      var table=document.getElementById(tableId); if(!table) return;
      table.querySelectorAll('th.sortable .sort-indicator').forEach(function(el){ el.textContent=''; });
      var th = table.querySelectorAll('th.sortable')[colIndex];
      if(th){
        var ind = th.querySelector('.sort-indicator'); if(!ind){ ind=document.createElement('span'); ind.className='sort-indicator'; th.appendChild(ind); }
        ind.textContent = dir==='asc' ? '▲' : '▼';
      }
    }
    function sortTable(tableId, colIndex, type){
      initTableHeadCount(tableId);
      var table=document.getElementById(tableId); if(!table) return;
      var bodies=table.querySelectorAll('tbody'), allRows=[]; bodies.forEach(function(tb){ allRows.push(...Array.from(tb.rows)); });
      var dirKey=tableId+'-dir-'+colIndex, current=table.dataset[dirKey] ?? 'asc', next=current==='asc'?'desc':'asc';
      allRows.sort(function(a,b){
        var va=cellValue(a, colIndex, type), vb=cellValue(b, colIndex, type);
        if(va<vb) return next==='asc'?-1:1; if(va>vb) return next==='asc'?1:-1; return 0;
      });
      var headCount=Number(table.dataset.headCount ?? 0);
      if(bodies.length===2 && headCount>0){
        var headRows=allRows.slice(0, headCount), moreRows=allRows.slice(headCount);
        bodies[0].innerHTML=''; bodies[1].innerHTML='';
        headRows.forEach(function(r){ bodies[0].appendChild(r); });
        moreRows.forEach(function(r){ bodies[1].appendChild(r); });
      } else if(bodies.length>=1){
        bodies[0].innerHTML=''; allRows.forEach(function(r){ bodies[0].appendChild(r); });
      }
      table.dataset[dirKey]=next; setSortIndicator(tableId, colIndex, next);
    }
    function filterOnlyFailed(tableId, onlyFailed){
      document.querySelectorAll('#'+tableId+' tbody tr').forEach(function(row){
        if(!onlyFailed){ row.style.display=''; return; }
        var failedCell=row.children[3]; var failedCount=Number((failedCell?.innerText ?? '0').replace(/[^0-9]/g,'')); // for exec-table
        row.style.display = failedCount>0 ? '' : 'none';
      });
    }
    function filterOnlyPending(tableId, onlyPending){
      document.querySelectorAll('#'+tableId+' tbody tr').forEach(function(row){
        if(!onlyPending){ row.style.display=''; return; }
        var pendingCell=row.children[4]; var pendingCount=Number((pendingCell?.innerText ?? '0').replace(/[^0-9]/g,'')); // for exec-table
        row.style.display = pendingCount>0 ? '' : 'none';
      });
    }
    function filterFailByCategory(selectId, tableId){
      var val=document.getElementById(selectId)?.value ?? '__all__';
      document.querySelectorAll('#'+tableId+' tbody tr').forEach(function(row){
        var cat=row.getAttribute('data-category') ?? '';
        row.style.display = (val==='__all__' || val===cat) ? '' : 'none';
      });
    }

    // ===== Screenshot accordion + copy logic =====
    function toggleTestDetails(buttonEl){
      try {
        var target = buttonEl.getAttribute('data-target');
        var panel = document.getElementById(target);
        if(!panel) return;
        var expanded = buttonEl.getAttribute('aria-expanded') === 'true';
        if(expanded){
          // hide
          panel.style.display = 'none';
          buttonEl.setAttribute('aria-expanded','false');
        } else {
          // show & lazy load screenshot
          panel.style.display = 'block';
          buttonEl.setAttribute('aria-expanded','true');
          var img = panel.querySelector('.screenshot-img');
          if(img && !img.getAttribute('src')){
            var src = img.getAttribute('data-src');
            // set src to load
            img.setAttribute('src', src);
          }
        }
      } catch(e){
        console.warn('toggleTestDetails error', e);
      }
    }

    function copyPath(buttonEl){
      var txt = buttonEl.getAttribute('data-copy') || '';
      if(!txt) return;
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(txt).then(function(){ flashCopy(buttonEl, 'Copied'); }, function(){ fallbackCopy(txt, buttonEl); });
      } else {
        fallbackCopy(txt, buttonEl);
      }
    }
    function fallbackCopy(text, buttonEl){
      try {
        var ta = document.createElement('textarea'); ta.value = text;
        ta.style.position='fixed'; ta.style.left='-9999px';
        document.body.appendChild(ta); ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        flashCopy(buttonEl, ok ? 'Copied' : 'Copy Failed');
      } catch(e){
        flashCopy(buttonEl, 'Copy Failed');
      }
    }
    function flashCopy(el, msg){
      var original = el.innerHTML;
      el.innerHTML = '✅ ' + msg;
      setTimeout(function(){ el.innerHTML = original; }, 1400);
    }

    // ===== Charts (Chart.js) =====
    function cssVar(name){ return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
    function showChartUnavailable(){
      var panel=document.getElementById('viz-inline');
      if(!panel) return;
      var msg=document.createElement('div'); msg.className='chart-error';
      msg.innerHTML="Charts unavailable.<br><small>Load Chart.js locally at <code>cypress/reports/assets/chart.umd.min.js</code> or enable CDN access.</small>";
      panel.appendChild(msg);
    }

    function makeSummaryChart(canvasId, totals) {
      var el = document.getElementById(canvasId);
      if (!el || !window.Chart) return null;

      var values = [totals.passed, totals.failed, totals.pending];
      var labels = ['Passed', 'Failed', 'Pending'];
      var colors = [cssVar('--ok'), cssVar('--bad'), cssVar('--pend')];

      const centerTextPlugin = {
        id: 'centerTextCombined',
        afterDatasetsDraw: function(chart) {
          var area = chart.chartArea;
          if (!area) return;

          var ctx = chart.ctx;
          var cx = (area.left + area.right) / 2;
          var cy = (area.top + area.bottom) / 2;

          var ds = chart.data.datasets[0] || { data: [0,0,0] };
          var vals = ds.data;
          var total = vals.reduce(function(a,b){ return a + b; }, 0);
          var text = 'Total: ' + total;

          var meta = chart.getDatasetMeta(0);
          var arc0 = meta && meta.data && meta.data[0] ? meta.data[0] : null;
          var innerRadius = arc0 && arc0.innerRadius ? arc0.innerRadius : Math.min(chart.width, chart.height) * 0.32;

          var maxWidth = Math.max(40, innerRadius * 1.8);
          var size = Math.floor(innerRadius * 0.36);
          var minSize = 11;

          ctx.save();
          ctx.textAlign = 'center';
          ctx.fillStyle = cssVar('--text');

          while (size > minSize) {
            ctx.font = '700 ' + size + 'px Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial';
            var w = ctx.measureText(text).width;
            if (w <= maxWidth) break;
            size -= 1;
          }

          ctx.fillText(text, cx, cy + Math.round(size * 0.06));
          ctx.restore();
        }
      };

      if (!window.__jnjCenterCombinedRegistered) {
        Chart.register(centerTextPlugin);
        window.__jnjCenterCombinedRegistered = true;
      }

      var chart = new Chart(el, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: values,
            backgroundColor: colors,
            borderColor: cssVar('--card'),
            borderWidth: 3,
            hoverOffset: 8,
            borderRadius: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '62%',
          layout: { padding: 4 },
          animation: { duration: 450, easing: 'easeOutQuart' },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function(ctx) {
                  var value = ctx.parsed;
                  var sum = ctx.dataset.data.reduce(function(a, b){return a+b;}, 0);
                  var pct = sum ? ((value/sum)*100).toFixed(1) : '0.0';
                  return ctx.label + ': ' + value + ' (' + pct + '%)';
                }
              }
            }
          }
        }
      });

      return chart;
    }

    document.addEventListener('DOMContentLoaded', async function(){
      // restore filters
      restoreValue('exec-search', function(){ filterTable('exec-search','exec-table'); });
      restoreValue('fail-search', function(){ filterTable('fail-search','fail-table'); });
      restoreValue('exec-only-failed', function(){ filterOnlyFailed('exec-table', document.getElementById('exec-only-failed')?.checked); });
      restoreValue('exec-only-pending', function(){ filterOnlyPending('exec-table', document.getElementById('exec-only-pending')?.checked); });
      ['exec-search','fail-search','exec-only-failed','exec-only-pending'].forEach(function(id){
        var el=document.getElementById(id); if(!el) return;
        el.addEventListener('keyup', function(){ persistValue(id); });
        el.addEventListener('change', function(){ persistValue(id); });
      });

      var catSelId='fail-category-filter', catSaved=localStorage.getItem('jnj-'+catSelId), catSel=document.getElementById(catSelId);
      if(catSel && catSaved){ catSel.value=catSaved; }
      if(catSel){
        filterFailByCategory(catSelId, 'fail-table');
        catSel.addEventListener('change', function(){ persistValue(catSelId); filterFailByCategory(catSelId, 'fail-table'); });
      }

      initTableHeadCount('exec-table'); initTableHeadCount('fail-table'); initTableHeadCount('cat-table');
      setTimeout(function(){ sortTable('exec-table',3,'number'); sortTable('cat-table',1,'number'); sortTable('fail-table',1,'number'); }, 0);

      try{
        var ok=await window.__chartReady;
        if(!ok || !window.Chart){ showChartUnavailable(); return; }
        var totals = ${JSON.stringify(summary.totals)};
        window.__charts = [ makeSummaryChart('summary-chart-inline', totals) ];
      }catch(e){
        console.warn('[summary] Chart init failed:', e?.message ?? e);
        showChartUnavailable();
      }
    });
  </script>
</head>
<body>
  <!-- HEADER CARD -->
  <div class="header-card">
    <!-- left: title, generated, inline chart -->
    <div class="header-left">
      <div class="header-title">JnJ Automation Summary Report</div>
      <div class="header-meta">Generated: ${new Date(summary.generatedAt).toLocaleString()}</div>
      <div id="viz-inline" class="viz-inline">
        <div class="chart-wrap">
          <canvas id="summary-chart-inline" class="chart-inline"></canvas>
        </div>
        <div class="inline-legend" aria-label="Chart legend">
          <span class="legend-item"><span class="dot pass"></span> Passed</span>
          <span class="legend-item"><span class="dot fail"></span> Failed</span>
          <span class="legend-item"><span class="dot pending"></span> Pending</span>
        </div>
      </div>
    </div>

    <!-- right: KPIs + actions -->
    <div class="header-right">
      <div class="stats">
      <div class="stat ok"><div class="label">Environment</div><div class="value">${summary.environment}</div></div>
      <div class="stat ok"><div class="label">Build Number</div><div class="value">${buildNumber}</div></div>
        <div class="stat"><div class="label">Total Tests</div><div class="value">${summary.totals.totalTests}</div></div>
        <div class="stat ok"><div class="label">Total Pass Count</div><div class="value">${summary.totals.passed} (${summary.totals.passPercentage}%)</div></div>
        <div class="stat bad"><div class="label">Total Fail Count</div><div class="value">${summary.totals.failed} (${summary.totals.failPercentage}%)</div></div>
        <div class="stat pending"><div class="label">Total Pending Count</div><div class="value">${summary.totals.pending} (${summary.totals.pendingPercentage}%)</div></div>
      </div>
      <div class="header-actions">
        <button id="pdf-btn" class="btn" onclick="downloadPDF()">🧾 Print</button>
        <button id="excel-btn" class="btn" onclick="downloadExcel()">📥 Export Excel</button>
      </div>
    </div>
  </div>

  <!-- BELOW HEADER: regular cards -->
  <div class="grid">
    <!-- Execution Summary -->
    <div class="card">
      <h2>
        <span>Execution Summary
          <span class="exec-total">Total Duration: <strong>${formatDuration(summary.duration.overallMs)}</strong></span>
        </span>
        <span id="exec-arrow" class="arrow" onclick="toggleCard('exec')">▲</span>
      </h2>
      <div id="exec-content">
        <div class="inline-controls">
          <input type="text" id="exec-search" class="search-box" placeholder="Search file..." onkeyup="filterTable('exec-search','exec-table')" />
          <label class="muted" style="display:flex; align-items:center; gap:6px;">
            <input type="checkbox" id="exec-only-failed" onchange="filterOnlyFailed('exec-table', this.checked)"> Show only failed
          </label>
          <label class="muted" style="display:flex; align-items:center; gap:6px;">
            <input type="checkbox" id="exec-only-pending" onchange="filterOnlyPending('exec-table', this.checked)"> Show only pending
          </label>
        </div>
        <table id="exec-table">
          <colgroup><col><col><col><col><col></colgroup>
          <thead>
            <tr>
              <th class="sortable" onclick="sortTable('exec-table',0,'text')">Spec/File <span class="sort-indicator"></span></th>
              <th class="sortable" onclick="sortTable('exec-table',1,'duration')">Duration <span class="sort-indicator"></span></th>
              <th class="sortable" onclick="sortTable('exec-table',2,'number')">Passed <span class="sort-indicator"></span></th>
              <th class="sortable" onclick="sortTable('exec-table',3,'number')">Failed <span class="sort-indicator"></span></th>
              <th class="sortable" onclick="sortTable('exec-table',4,'number')">Pending <span class="sort-indicator"></span></th>
            </tr>
          </thead>
          <tbody>${headRowsDur || '<tr><td colspan="5">No specs</td></tr>'}</tbody>
          <tbody id="exec-more" style="display:none;">${moreRowsDur}</tbody>
        </table>
        ${moreRowsDur ? `<div class="toggle-btn" id="exec-more-btn" onclick="toggleRows('exec-more')">Show More</div>` : ``}
      </div>
    </div>

    <!-- Failure Categories -->
    <div class="card">
      <h2><span>Failure Categories</span><span id="cat-arrow" class="arrow" onclick="toggleCard('cat')">▲</span></h2>
      <div id="cat-content">
        <table id="cat-table">
          <colgroup><col><col></colgroup>
          <thead><tr>
            <th class="sortable" onclick="sortTable('cat-table',0,'text')">Category <span class="sort-indicator"></span></th>
            <th class="sortable" onclick="sortTable('cat-table',1,'number')">Count <span class="sort-indicator"></span></th>
          </tr></thead>
          <tbody>${categoryRowsHead}</tbody>
          <tbody id="cat-more" style="display:none;">${categoryRowsMore}</tbody>
        </table>
        ${categoryRowsMore ? `<div class="toggle-btn" id="cat-more-btn" onclick="toggleRows('cat-more')">Show More</div>` : ``}
      </div>
    </div>

    <!-- Failure Reasons -->
    <div class="card">
      <h2><span>Failure Reasons</span><span id="fail-arrow" class="arrow" onclick="toggleCard('fail')">▲</span></h2>
      <div id="fail-content">
        <div class="inline-controls">
          <input type="text" id="fail-search" class="search-box" placeholder="Search file/test/reason/category..." onkeyup="filterTable('fail-search','fail-table')" />
          <label class="muted" style="display:flex; align-items:center; gap:6px;">
            Filter by category:
            <select id="fail-category-filter" class="select" onchange="filterFailByCategory('fail-category-filter','fail-table')">
              ${categoryFilterOptions}
            </select>
          </label>
        </div>
        <table id="fail-table">
          <colgroup><col><col></colgroup>
          <thead><tr>
            <th class="sortable" onclick="sortTable('fail-table',0,'text')">File / Test / Reason / Category <span class="sort-indicator"></span></th>
            <th class="sortable" onclick="sortTable('fail-table',1,'number')">Count <span class="sort-indicator"></span></th>
          </tr></thead>
          <tbody>${failureRows}</tbody>
          <tbody id="fail-more" style="display:none;">${failureRowsMore}</tbody>
        </table>
        ${failureRowsMore ? `<div class="toggle-btn" id="fail-more-btn" onclick="toggleRows('fail-more')">Show More</div>` : ``}
      </div>
    </div>

  </div>
</body>
</html>`;

  // Write HTML
  try {
    fs.writeFileSync(OUTPUT_HTML, html, 'utf8');
    log(`📈 HTML dashboard: ${OUTPUT_HTML}`);
  } catch (e) { console.error(`❌ Failed to write HTML: ${e.message}`); }

  // Excel export (optional)
  if (XLSX) {
    try {
      const wb = XLSX.utils.book_new();
      const totalsRow = {
        totalTests: summary.totals.totalTests,
        passed: summary.totals.passed,
        failed: summary.totals.failed,
        pending: summary.totals.pending,
        passPercentage: summary.totals.passPercentage,
        failPercentage: summary.totals.failPercentage,
        pendingPercentage: summary.totals.pendingPercentage,
        overallDurationMs: summary.duration.overallMs,
        overallDurationHHMMSS: formatDuration(summary.duration.overallMs),
        generatedAt: summary.generatedAt
      };
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet([totalsRow]), 'Totals');

      const execRows = Object.entries(summary.perSpec).map(([file, data]) => ({
        filePath: file, fileName: prettyFileName(file),
        totalDurationMs: data.totalDurationMs, totalDurationHHMMSS: formatDuration(data.totalDurationMs),
        passed: data.passed, failed: data.failed, pending: data.pending,
        passPct: (data.passed + data.failed + data.pending) ? Number(((data.passed / (data.passed + data.failed + data.pending)) * 100).toFixed(2)) : 0
      }));
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(execRows), 'Execution Summary');

      const catRows = Object.entries(summary.failureCategories).map(([category, count]) => ({ category, count }));
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(catRows), 'Failure Categories');

      const failRows = Object.entries(summary.failureReasonsDetailed).map(([combined, count]) => {
        const [file, test, reason] = combined.split('\n'); const category = categorizeFailure(reason);
        return { filePath: file, fileName: prettyFileName(file), test, reason, category, count };
      });
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(failRows), 'Failure Reasons');

      XLSX.writeFile(wb, OUTPUT_XLSX);
      log(`📊 Excel report: ${OUTPUT_XLSX}`);
    } catch (e) {
      console.warn(`⚠️ Failed to write Excel: ${e.message}`);
    }
  }
}

// helper for unique ids in template scope
function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return h;
}

try { generate(); } catch (e) {
  console.error(`❌ Unexpected error in summary: ${e.stack ?? e.message}`);
  process.exit(1);
}
