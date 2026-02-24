/**
 * Automation Test Coverage Report — ULTRA PREMIUM EDITION (Static + GitHub Actions Runner)
 * -----------------------------------------------------------------------------
 * What this script does:
 *  - Scans your Cypress repo for .cy.js spec files (only in allowed roots).
 *  - Loads Mochawesome/Cypress JSON results (if found) to show real pass/fail/duration.
 *  - Generates a STATIC HTML dashboard that your client can open directly.
 *  - The HTML has "Run" buttons that TRIGGER GITHUB ACTIONS to run tests remotely.
 *
 * Your client only needs the HTML + internet. No localhost server required.
 */

const fs = require('fs')
const path = require('path')

// ---------- Windows/Absolute Paths (update if needed) ----------
const BASE_DIR = path.normalize('C:\\Users\\USER\\Downloads\\HugenticAutomation_Playwright\\optiqs-gen4\\test\\e2e\\Cypress_Automation_Ca')


// The main regression folder
const E2E_REGRESSION_DIR = path.join(BASE_DIR, 'cypress', 'e2e-regression')

// Scan ONLY these roots
const SCAN_ROOTS = [
  E2E_REGRESSION_DIR,
  path.join(E2E_REGRESSION_DIR, 'jj', 'jj-scripts'),
  path.join(E2E_REGRESSION_DIR, 'jj', 'jnj-scripts'),
  path.join(E2E_REGRESSION_DIR, 'sn', 'sn-scripts'),
]

// Execution reports (Mochawesome/Cypress JSON)
const REPORT_DIR = path.join(BASE_DIR, 'cypress', 'reports', 'html')

// Find Project Root (where package.json exists, or cypress.config.js as fallback)
function findProjectRoot(dir) {
  if (fs.existsSync(path.join(dir, 'package.json'))) return dir
  const parent = path.dirname(dir)
  if (parent === dir) {
    if (fs.existsSync(path.join(dir, 'cypress.config.js')) || fs.existsSync(path.join(dir, 'cypress.json'))) {
      return dir
    }
    return dir
  }
  return findProjectRoot(parent)
}

const PROJECT_ROOT = findProjectRoot(BASE_DIR)
console.log(`📂 Project Root: ${PROJECT_ROOT}`)

// ---------- Config ----------
const OUTPUT_HTML = 'automation-coverage-report.html'

// INFO logging: which directories will be scanned
console.log('📂 Scan Roots:')
for (const r of SCAN_ROOTS) console.log('   •', r)

// IGNORE common folders while scanning
const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', 'build', '.cache', 'coverage', 'reports',
  'downloads', 'fixtures', 'support', 'plugins'
])

// Only consider .cy.js
const SPEC_PATTERNS = ['.cy.js']

/** ---------- Results Processor (reads JSON reports) ---------- */
class ResultProcessor {
  constructor() {
    this.results = new Map()
    this.scanForReports()
  }

  scanForReports() {
    if (!fs.existsSync(REPORT_DIR)) {
      console.log('⚠️ No reports directory found at:', REPORT_DIR)
      return
    }
    try {
      const files = fs.readdirSync(REPORT_DIR).filter(f => f.endsWith('.json') && !f.includes('history'))
      console.log(`📊 Found ${files.length} report files in: ${REPORT_DIR}`)
      for (const file of files) {
        const full = path.join(REPORT_DIR, file)
        try {
          const content = JSON.parse(fs.readFileSync(full, 'utf8'))
          if (content.results) content.results.forEach(suite => this.processSuite(suite, file))
          else if (content.tests) this.processSuite(content, file)
        } catch (e) {
          console.error('❌ Error parsing report JSON:', full, e.message)
        }
      }
    } catch (e) {
      console.error('Error reading reports:', e.message)
    }
  }

  processSuite(suite, filename) {
    if (suite.tests) {
      suite.tests.forEach(test => {
        const file = (suite.fullFile || suite.file || filename).replace(/\\/g, '/')
        let relPath = file
        if (file.includes('cypress/')) {
          const parts = file.split('cypress/')
          relPath = parts[parts.length - 1]
        }
        const baseName = path.basename(file)
        this.addResult(relPath, test)
        this.addResult(baseName, test)
      })
    }
    if (suite.suites) suite.suites.forEach(s => this.processSuite(s, filename))
  }

  addResult(key, test) {
    const existing = this.results.get(key) || { passes: 0, failures: 0, duration: 0, tests: [] }
    existing.tests.push({
      title: test.title,
      fullTitle: test.fullTitle || test.title,
      state: test.state,
      duration: test.duration || 0
    })
    if (test.state === 'passed') existing.passes++
    if (test.state === 'failed') existing.failures++
    existing.duration += (test.duration || 0)
    this.results.set(key, existing)
  }

  getSpecMetrics(filePath) {
    const relPath = path.relative(PROJECT_ROOT, filePath).replace(/\\/g, '/')
    const baseName = path.basename(filePath)
    if (this.results.has(relPath)) return this.results.get(relPath)
    if (this.results.has(baseName)) return this.results.get(baseName)
    for (const [key, val] of this.results.entries()) {
      if (relPath.endsWith(key) || key.endsWith(relPath)) return val
    }
    return null
  }
}

/** ---------- Build Dashboard Data (scan + compute) ---------- */
function buildDashboardData() {
  const nodes = [], links = [], nodeSet = new Set()
  const resultProcessor = new ResultProcessor()

  // Track unique spec files & total it() across all specs
  const uniqueSpecFiles = new Set()
  let totalItsCount = 0

  function addNode(id, group, extra = {}) {
    const key = `${group}::${id}`
    if (!nodeSet.has(key)) {
      nodeSet.add(key)
      nodes.push({ id, group, ...extra })
    }
  }
  function addLink(sourceId, targetId) {
    links.push({ source: sourceId, target: targetId })
  }
  function isSpecFile(name) {
    return SPEC_PATTERNS.some(suffix => name.endsWith(suffix))
  }
  function scanDir(dir) {
    let entries
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch (e) {
      console.warn('⚠️ Cannot read dir:', dir, e.message)
      return
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (!IGNORE_DIRS.has(entry.name)) scanDir(full)
        continue
      }
      if (entry.isFile() && isSpecFile(entry.name)) {
        parseTestFile(full)
      }
    }
  }

  // regex helpers
  const STR = "(['\"`])([\\s\\S]*?)\\1"
  const RE_IT = new RegExp("it\\s*\\(\\s*" + STR, "g")
  const RE_DESCRIBE = new RegExp("(?:describe|context)\\s*\\(\\s*" + STR, "g")
  const RE_IMPORT_TOP = /^\s*(?:import\b.+?from\s*['"].+['"];?|import\s*['"].+['"];?|const\s+\w[\w\d_]*\s*=\s*require\(.+?\)\s*;?)/

  function extractTopImports(text) {
    const lines = text.split('\n')
    const out = []
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()
      if (trimmed === '' || trimmed.startsWith('//')) {
        out.push(line)
        continue
      }
      if (RE_IMPORT_TOP.test(trimmed)) {
        out.push(line)
        continue
      }
      break
    }
    return out.join('\n').trim()
  }

  function findLastDescribeStart(text, beforeIdx) {
    let lastIndex = -1
    let m
    RE_DESCRIBE.lastIndex = 0
    while ((m = RE_DESCRIBE.exec(text)) !== null) {
      if (m.index < beforeIdx) lastIndex = m.index
      else break
    }
    return lastIndex
  }

  function findDescribeBlockEnd(text, describeStartIdx) {
    let i = describeStartIdx
    const n = text.length
    let inS = null, inBlockComment = false, inLineComment = false
    let braceStart = -1
    for (; i < n; i++) {
      const ch = text[i], next = i + 1 < n ? text[i + 1] : ''
      if (inLineComment) { if (ch === '\n') inLineComment = false; continue }
      if (inBlockComment) { if (ch === '*' && next === '/') { inBlockComment = false; i++ } continue }
      if (inS) { if (ch === '\\') { i++ } else if (ch === inS) inS = null; continue }
      if (ch === '/' && next === '/') { inLineComment = true; i++; continue }
      if (ch === '/' && next === '*') { inBlockComment = true; i++; continue }
      if (ch === '\'' || ch === '"' || ch === '`') { inS = ch; continue }
      if (ch === '{') { braceStart = i; break }
    }
    if (braceStart === -1) return -1

    let depth = 0; inS = null; inBlockComment = false; inLineComment = false
    for (i = braceStart; i < n; i++) {
      const ch = text[i], next = i + 1 < n ? text[i + 1] : ''
      if (inLineComment) { if (ch === '\n') inLineComment = false; continue }
      if (inBlockComment) { if (ch === '*' && next === '/') { inBlockComment = false; i++ } continue }
      if (inS) { if (ch === '\\') { i++ } else if (ch === inS) inS = null; continue }
      if (ch === '/' && next === '/') { inLineComment = true; i++; continue }
      if (ch === '/' && next === '*') { inBlockComment = true; i++; continue }
      if (ch === '\'' || ch === '"' || ch === '`') { inS = ch; continue }
      if (ch === '{') depth++
      else if (ch === '}') { depth--; if (depth === 0) return i }
    }
    return -1
  }

  function buildTestViewCode(fullContent, itIndex) {
    const imports = extractTopImports(fullContent)
    const descStart = findLastDescribeStart(fullContent, itIndex)
    if (descStart >= 0) {
      const descEnd = findDescribeBlockEnd(fullContent, descStart)
      if (descEnd > descStart) {
        const body = fullContent.substring(descStart, descEnd + 1)
        const final = (imports ? (imports + '\n\n') : '') + body
        return final
      }
    }
    return fullContent
  }

  function inferFeatureFromPath(relPath) {
    if (!relPath) return null
    const lower = relPath.toLowerCase()
    const markers = [
      '/jj/jj-scripts/',
      '/jj/jnj-scripts/',
      '/sn/sn-scripts/',
    ]
    for (const mk of markers) {
      const idx = lower.indexOf(mk)
      if (idx !== -1) {
        const after = relPath.slice(idx + mk.length)
        const seg = after.split('/')[0].trim()
        if (seg) return seg
      }
    }
    return null
  }

  function parseTestFile(filePath) {
    let content, stats
    try {
      content = fs.readFileSync(filePath, 'utf8')
      stats = fs.statSync(filePath)
    } catch {
      return
    }

    const relPath = path.relative(PROJECT_ROOT, filePath).replace(/\\/g, '/')
    uniqueSpecFiles.add(relPath)

    let feature = inferFeatureFromPath(relPath)
    if (!feature) {
      RE_DESCRIBE.lastIndex = 0
      const firstDescribe = RE_DESCRIBE.exec(content)
      if (firstDescribe && firstDescribe[2]) {
        feature = firstDescribe[2].trim()
      } else {
        feature = path.basename(filePath)
      }
    }

    const relDir = path.relative(PROJECT_ROOT, path.dirname(filePath)).replace(/\\/g, '/')
    const isRecent = (Date.now() - stats.mtimeMs) < (7 * 24 * 60 * 60 * 1000)

    const specMetrics = resultProcessor.getSpecMetrics(filePath)
    const hasRealData = !!specMetrics

    addNode(feature, 'feature', {
      relPath, relDir, isRecent,
      runnerCmd: `npx cypress run --spec "${relPath}"`,
      code: content.split('\n').slice(0, 1000).join('\n'),
      executionTime: 0,
      passRate: hasRealData
        ? (specMetrics.tests.length > 0
            ? Math.round((specMetrics.passes / specMetrics.tests.length) * 100)
            : 0)
        : 0,
      flaky: false,
      hasRealData
    })

    RE_IT.lastIndex = 0
    const matches = [...content.matchAll(RE_IT)]
    totalItsCount += matches.length

    const lines = content.split('\n')

    for (let i = 0; i < matches.length; i++) {
      const m = matches[i]
      const name = (m[2] || '').trim()
      if (!name) continue

      const startLine = content.substring(0, m.index).split('\n').length - 1
      let endLine = (i < matches.length - 1)
        ? content.substring(0, matches[i + 1].index).split('\n').length - 2
        : lines.length - 1
      if (endLine - startLine > 300) endLine = startLine + 300
      const testCodeSnippet = lines.slice(startLine, endLine + 1).join('\n')

      let testStatus = 'unknown'
      let testDuration = 0
      let testPassRate = 0

      if (hasRealData && specMetrics) {
        let testResult = specMetrics.tests.find(t => t.title === name)
        if (!testResult) testResult = specMetrics.tests.find(t => (t.fullTitle || '').includes(name))
        if (testResult) {
          testStatus = testResult.state || 'unknown'
          testDuration = testResult.duration || 0
          testPassRate = testStatus === 'passed' ? 100 : (testStatus === 'failed' ? 0 : 0)
        }
      }

      const fullViewCode = buildTestViewCode(content, m.index) || testCodeSnippet

      addNode(name, 'test', {
        relPath,
        code: fullViewCode,
        runnerCmd: `npx cypress run --spec "${relPath}" --env grep="${name.replace(/"/g, '\\"')}"`,
        passRate: testPassRate,
        executionTime: testDuration,
        status: testStatus
      })
      addLink(feature, name)
    }
  }

  // Scan only allowed roots
  for (const root of SCAN_ROOTS) {
    if (fs.existsSync(root)) {
      console.log('🔎 Scanning:', root)
      scanDir(root)
    } else {
      console.warn('⚠️ Missing scan root (skipped):', root)
    }
  }

  const nodesById = new Map(nodes.map(n => [n.id + '::' + n.group, n]))
  const testsByFeature = new Map()
  for (const n of nodes) if (n.group === 'feature') testsByFeature.set(n.id, [])
  for (const l of links) {
    const arr = testsByFeature.get(l.source)
    if (arr) arr.push(l.target)
  }

  const tableData = Array.from(testsByFeature.keys()).sort().map(fid => {
    const node = nodesById.get(fid + '::feature')
    const tNames = testsByFeature.get(fid) || []

    const tests = tNames.map(tn => {
      const t = nodesById.get(tn + '::test')
      return {
        name: tn,
        passRate: t?.passRate || 0,
        runnerCmd: t?.runnerCmd || '',
        status: t?.status || 'unknown',
        executionTime: t?.executionTime || 0,
        relPath: t?.relPath || '',
        code: t?.code || ''
      }
    })

    const totalExecutionTime = tests.reduce((sum, test) => sum + (test.executionTime || 0), 0)

    return {
      feature: fid,
      relPath: node?.relPath || '',
      relDir: node?.relDir || '',
      runnerCmd: node?.runnerCmd || '',
      isRecent: node?.isRecent || false,
      code: node?.code || '',
      executionTime: totalExecutionTime,
      passRate: node?.passRate || 0,
      flaky: node?.flaky || false,
      hasRealData: node?.hasRealData,
      hasCoverage: tNames.length > 0,
      tests: tests
    }
  })

  const totalFeatures = tableData.length
  const totalTests = nodes.filter(n => n.group === 'test').length
  const totalExecutionTime = tableData.reduce((sum, f) => sum + f.executionTime, 0)
  const passedTests = nodes.filter(n => n.group === 'test' && n.status === 'passed').length
  const failedTests = nodes.filter(n => n.group === 'test' && n.status === 'failed').length
  const avgPassRate = totalTests > 0 ? Math.floor((passedTests / totalTests) * 100) : 0
  const testedFeatures = tableData.filter(f => f.tests.length > 0).length
  const missingTests = totalFeatures - testedFeatures

  const slowestFeatures = [...tableData]
    .sort((a, b) => b.executionTime - a.executionTime)
    .slice(0, 5)
    .map(f => ({ label: f.feature, value: f.executionTime }))

  const stats = {
    total: totalFeatures,
    covered: testedFeatures,
    missing: missingTests,
    scenarios: uniqueSpecFiles.size,
    passedTests: passedTests,
    failedTests: failedTests,
    avgExecutionTime: Math.floor(totalExecutionTime / (totalFeatures || 1)),
    avgPassRate: avgPassRate,
    totalExecutionTime: totalExecutionTime,
    coveragePercent: totalFeatures > 0 ? Math.floor((testedFeatures / totalFeatures) * 100) : 0,
    flowsCovered: totalItsCount
  }

  return { tableData, stats, slowestFeatures }
}

/** ---------- Build initial data & HTML ---------- */
const initialData = buildDashboardData()
const dataB64 = Buffer.from(JSON.stringify(initialData)).toString('base64')

// Use plain strings in client-side JS (no backticks) to avoid escaping issues.
const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Automation Dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js</script>
https://cdn.sheetjs.com/xlsx-0.20.1/package/dist/xlsx.full.min.js</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=JetBrains+Mono&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --bg-primary: #0a0e27;
    --bg-secondary: #151932;
    --bg-card: rgba(255, 255, 255, 0.05);
    --text-primary: #ffffff;
    --text-secondary: #a0aec0;
    --accent-primary: #6366f1;
    --accent-secondary: #8b5cf6;
    --accent-success: #10b981;
    --accent-danger: #ef4444;
    --accent-warning: #f59e0b;
    --border-color: rgba(255, 255, 255, 0.1);
  }
  body.light-theme {
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --bg-card: #ffffff;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --border-color: #e2e8f0;
  }
  html, body {
    margin: 0; padding: 0;
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    transition: background 0.3s ease, color 0.3s ease;
  }
  .bg-gradient { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); opacity: 0.05; animation: gradientShift 15s ease infinite; }
  @keyframes gradientShift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  .app-layout { display: flex; flex-direction: column; min-height: 100vh; }
  header { background: var(--bg-card); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border-color); padding: 24px 48px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; }
  header h1 { font-size: 28px; font-weight: 900; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .header-stats { display: flex; gap: 16px; align-items: center; }
  .stat-card { display: flex; flex-direction: column; align-items: center; padding: 12px 20px; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-color); min-width: 100px; }
  .stat-num { font-size: 32px; font-weight: 900; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .stat-label { font-size: 11px; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; }
  .dashboard { flex: 1; padding: 40px 48px; max-width: 1800px; margin: 0 auto; width: 100%; }
  .quick-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 32px; }
  .quick-stat-card { background: var(--bg-card); backdrop-filter: blur(20px); border: 1px solid var(--border-color); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 8px; }
  .quick-stat-value { font-size: 36px; font-weight: 900; color: var(--accent-primary); }
  .quick-stat-label { font-size: 13px; color: var(--text-secondary); font-weight: 600; }
  .chart-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 24px; margin-bottom: 32px; }
  .chart-card { background: var(--bg-card); backdrop-filter: blur(20px); border: 1px solid var(--border-color); border-radius: 20px; padding: 28px; }
  .chart-title { font-size: 16px; font-weight: 700; margin-bottom: 20px; }
  .chart-container { position: relative; height: 300px; }
  body.compact-mode td, body.compact-mode th { padding: 8px 16px; font-size: 13px; }
  body.compact-mode .feature-badge { width: 32px; height: 32px; font-size: 14px; min-width: 32px; border-radius: 8px; }
  body.compact-mode .feature-name { font-size: 14px; margin-bottom: 4px; }
  body.compact-mode .test-chip { padding: 6px 10px; font-size: 11px; }
  .table-card { background: var(--bg-card); backdrop-filter: blur(20px); border: 1px solid var(--border-color); border-radius: 20px; overflow: hidden; margin-bottom: 32px; }
  .table-header { padding: 24px 32px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
  .toolbar { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
  table { width: 100%; border-collapse: collapse; }
  th { text-align: left; padding: 18px 32px; color: var(--text-secondary); text-transform: uppercase; font-size: 12px; border-bottom: 1px solid var(--border-color); }
  td { padding: 24px 32px; border-bottom: 1px solid var(--border-color); vertical-align: top; }
  .feature-cell { display: flex; gap: 16px; align-items: flex-start; }
  .feature-badge { min-width: 56px; height: 56px; border-radius: 16px; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 20px; color: white; }
  .test-chips { display: flex; flex-wrap: wrap; gap: 12px; }
  .test-chip { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 10px 14px; font-size: 13px; font-weight: 600; color: var(--text-primary); display: flex; align-items: center; gap: 10px; position: relative; transition: all 0.2s; }
  .test-chip:hover { border-color: var(--accent-primary); transform: translateY(-2px); }
  .chip-actions { display: flex; gap: 6px; margin-left: auto; }
  .chip-btn { padding: 4px 8px; border-radius: 6px; font-size: 10px; cursor: pointer; background: var(--accent-primary); color: white; border: none; }
  .chip-btn:hover { background: var(--accent-secondary); }
  .tooltip { position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 12px; border-radius: 8px; font-size: 11px; white-space: nowrap; pointer-events: none; opacity: 0; transition: opacity 0.2s; margin-bottom: 8px; z-index: 1000; }
  .test-chip:hover .tooltip { opacity: 1; }
  .pagination { display: flex; justify-content: space-between; padding: 24px 32px; border-top: 1px solid var(--border-color); align-items: center; }
  .btn { padding: 12px 24px; border-radius: 12px; font-weight: 700; font-size: 13px; cursor: pointer; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); }
  .btn-primary { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: white; border: none; }
  .btn-sm { padding: 8px 16px; font-size: 12px; }
  select, input[type="text"] { padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary); font-size: 13px; }
  .modal-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 100; align-items: center; justify-content: center; }
  .modal { background: var(--bg-secondary); width: 80%; height: 80vh; padding: 20px; border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
  .modal-header { display: flex; justify-content: space-between; margin-bottom: 10px; align-items: center; }
  .code-content { flex: 1; overflow: auto; color: var(--text-secondary); font-family: 'JetBrains Mono', monospace; white-space: pre-wrap; }
  #runLogs { background: #0b122b; color: #d1e7ff; padding: 12px; border-radius: 8px; line-height: 1.4; }
  .inline-controls { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
  .toggle { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); }
  .feature-actions { margin-top: 6px; display: flex; gap: 8px; }
  .banner { position: sticky; top: 64px; z-index: 99; margin: 8px 48px; padding: 10px 14px; border-radius: 10px; font-weight: 700; }

  /* --- AI Suggestions styles --- */
  .ai-suggestions { display: grid; grid-template-columns: 1fr; gap: 10px; }
  .ai-sugg { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 12px 14px; font-size: 13px; line-height: 1.5; }
  .ai-sugg b { color: var(--accent-primary); }
  .ai-sugg small { display: block; color: var(--text-secondary); margin-top: 4px; }
</style>
</head>
<body>
<div class="bg-gradient"></div>
<div class="app-layout">
  <header>
    <h1>🚀 Automation Dashboard</h1>
    <div class="header-stats">
      <div class="stat-card">
        <div class="stat-num" id="totalFeatures">0</div>
        <div class="stat-label">Features</div>
      </div>
      <div class="stat-card">
        <div class="stat-num" id="totalScenarios">0</div>
        <div class="stat-label">Scenarios</div>
      </div>
      <div class="stat-card">
        <div class="stat-num" id="coveragePercent">0%</div>
        <div class="stat-label">Coverage</div>
      </div>
      <div class="stat-card">
        <div class="stat-num" id="flowsCovered">0</div>
        <div class="stat-label">Flows Covered</div>
      </div>
      <button class="btn btn-sm" onclick="toggleTheme()" style="margin-left: 16px;">🌙 Theme</button>
    </div>
  </header>

  <div id="runnerBanner" class="banner">🔧 Configure GitHub runner in toolbar (⚙️ GitHub Runner)</div>

  <div class="dashboard">
    <div class="quick-stats">
      <div class="quick-stat-card">
        <div class="quick-stat-value" id="passedCount" style="color: var(--accent-success);">0</div>
        <div class="quick-stat-label">✅ Passed Tests</div>
      </div>
      <div class="quick-stat-card">
        <div class="quick-stat-value" id="failedCount" style="color: var(--accent-danger);">0</div>
        <div class="quick-stat-label">❌ Failed Tests</div>
      </div>
      <div class="quick-stat-card">
        <div class="quick-stat-value" id="totalTime">0</div>
        <div class="quick-stat-label">🕐 Total Execution Time</div>
      </div>
    </div>

    <div class="chart-grid">
      <div class="chart-card">
        <div class="chart-title">🤖 AI Suggestions</div>
        <div id="aiSuggestions" class="ai-suggestions"></div>
      </div>

      <div class="chart-card">
        <div class="chart-title">📊 Test Coverage</div>
        <div class="chart-container"><canvas id="coverageChart"></canvas></div>
      </div>
    </div>

    <div class="table-card">
      <div class="table-header">
        <h2 class="chart-title">Test Coverage</h2>
        <div class="toolbar">
           <select id="statusFilter" onchange="applyFilters()">
             <option value="all">All Status</option>
             <option value="passed">✅ Passed</option>
             <option value="failed">❌ Failed</option>
           </select>
           <select id="coverageFilter" onchange="applyFilters()">
             <option value="all">All Features</option>
             <option value="with-tests">With Tests</option>
             <option value="missing-tests">Missing Tests</option>
           </select>

           <!-- NEW: Scripts Group filter -->
           <select id="groupFilter" onchange="applyFilters()">
             <option value="all">All Scripts</option>
             <option value="jj">JJ Scripts</option>
             <option value="jnj">JNJ Scripts</option>
             <option value="sn">SN Scripts</option>
           </select>

           <button class="btn btn-sm" onclick="toggleCompact()">Standard / Compact</button>
           <input type="text" id="searchInput" placeholder="Search..." />

           <!-- GitHub Runner config -->

           <button class="btn btn-primary" onclick="exportToCSV()">📥 Export CSV</button>
           <button class="btn" onclick="staticRefresh()">🔄 Refresh Data</button>
        </div>
      </div>
      <table>
        <thead><tr><th style="width: 45%">Feature</th><th>Scenarios</th></tr></thead>
        <tbody id="tableBody"></tbody>
      </table>
      <div class="pagination">
        <div id="pageInfo" class="page-info">Showing 1-10</div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <select id="pageSizeSelect" onchange="changePageSize()">
            <option value="10">10 per page</option>
            <option value="25">25 per page</option>
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
          </select>
          <button class="btn btn-sm" onclick="changePage(-1)">← Prev</button>
          <button class="btn btn-sm" onclick="changePage(1)">Next →</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Code Modal -->
<div class="modal-overlay" id="codeModal">
  <div class="modal">
    <div class="modal-header">
       <h3 id="modalTitle">Code Preview</h3>
       <div>
         <button class="btn btn-sm" onclick="copyCode()" style="margin-right: 10px;">📋 Copy Code</button>
         <button class="btn btn-sm" onclick="closeModal()">Close</button>
       </div>
    </div>
    <pre class="code-content" id="codeContent"></pre>
  </div>
</div>

<!-- Run Modal (displays status + links) -->
<div class="modal-overlay" id="runModal">
  <div class="modal">
    <div class="modal-header">
      <h3 id="runTitle">Triggering GitHub Actions…</h3>
      <div>
        <button class="btn btn-sm" onclick="closeRunModal()">Close</button>
      </div>
    </div>
    <pre class="code-content" id="runLogs">⏳ Waiting…</pre>
  </div>
</div>

<script type="text/javascript">
  var DATA = JSON.parse(atob('${dataB64}'))
  var state = { 
    rows: DATA.tableData.slice(),
    filteredRows: DATA.tableData.slice(),
    page: 1, 
    pageSize: 10, 
    compact: false,
    filters: { status: 'all', coverage: 'all', search: '', group: 'all' }
  }

  // GitHub settings (stored in localStorage)
 function getGh() {
  var gh = {
    api: 'https://api.github.com',

    // Hardcoded values (your repo)
    org: 'sathiksha',
    repo: 'Cypress_Automation_Ca',
    ref: 'main',
    workflow: 'run-tests.yml',

    // Token: first try localStorage, else fallback
    token: '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'
  }
  return gh
}

  function saveGh(k, v) { try { localStorage.setItem(k, v) } catch(_){} }

  function setupGh() {
    var gh = getGh()
    var org = prompt('GitHub org/owner:', gh.org); if (org === null) return; saveGh('ghOrg', org || '')
    var repo = prompt('GitHub repo:', gh.repo); if (repo === null) return; saveGh('ghRepo', repo || '')
    var ref = prompt('Git branch/ref (e.g., main):', gh.ref); if (ref === null) return; saveGh('ghRef', ref || 'main')
    var wf  = prompt('Workflow file (in .github/workflows):', gh.workflow); if (wf === null) return; saveGh('ghWorkflow', wf || 'run-tests.yml')
    var api = prompt('GitHub API base:', gh.api); if (api === null) return; saveGh('ghApi', (api || 'https://api.github.com').replace(/\\/$/, ''))
    var tok = prompt('PAT token with workflow scope (stored locally):', gh.token); if (tok === null) return; saveGh('ghToken', tok || '')
    updateRunnerBanner()
    alert('✅ GitHub runner configured.')
  }

  function updateRunnerBanner() {
    var gh = getGh()
    var el = document.getElementById('runnerBanner')
    if (!el) return
    if (gh.token && gh.org && gh.repo && gh.workflow) {
      el.style.background = 'rgba(16,185,129,0.15)'
      el.style.color = '#10b981'
      el.innerHTML = '🟢 GitHub runner configured for <code>' + esc(gh.org) + '/' + esc(gh.repo) + '</code>, workflow: <code>' + esc(gh.workflow) + '</code>'
    } else {
      el.style.background = 'rgba(239,68,68,0.15)'
      el.style.color = '#ef4444'
      el.innerHTML = '🔴 Configure GitHub runner: org/repo/ref/workflow/token (toolbar ➜ ⚙️ GitHub Runner)'
    }
  }

  // Theme
  function toggleTheme() { document.body.classList.toggle('light-theme') }

  function toggleCompact() { document.body.classList.toggle('compact-mode') }

  function formatTime(ms) {
    if (ms >= 60000) return (ms / 60000).toFixed(1) + ' min'
    if (ms >= 1000) return (ms / 1000).toFixed(1) + ' sec'
    return ms + ' ms'
  }

  function updateStats() {
    document.getElementById('totalFeatures').textContent = DATA.stats.total
    document.getElementById('totalScenarios').textContent = DATA.stats.scenarios
    document.getElementById('coveragePercent').textContent = DATA.stats.coveragePercent + '%'
    document.getElementById('passedCount').textContent = DATA.stats.passedTests
    document.getElementById('failedCount').textContent = DATA.stats.failedTests
    document.getElementById('totalTime').textContent = formatTime(DATA.stats.totalExecutionTime)
    var fcEl = document.getElementById('flowsCovered')
    if (fcEl) fcEl.textContent = DATA.stats.flowsCovered || 0
  }

  function applyFilters() {
    var statusFilter = document.getElementById('statusFilter').value
    var coverageFilter = document.getElementById('coverageFilter').value
    var searchTerm = state.filters.search
    var groupFilter = document.getElementById('groupFilter').value || 'all'
    state.filters.group = groupFilter

    state.filteredRows = DATA.tableData.filter(function(row) {
      if (groupFilter !== 'all') {
        var p = (row.relPath || '').toLowerCase()
        var matchGroup =
          (groupFilter === 'jj'  && p.includes('/jj/jj-scripts/')) ||
          (groupFilter === 'jnj' && p.includes('/jj/jnj-scripts/')) ||
          (groupFilter === 'sn'  && p.includes('/sn/sn-scripts/'))
        if (!matchGroup) return false
      }

      if (coverageFilter === 'with-tests' && row.tests.length === 0) return false
      if (coverageFilter === 'missing-tests' && row.tests.length > 0) return false
      if (statusFilter !== 'all') {
        var hasStatus = row.tests.some(function(t) { return t.status === statusFilter })
        if (!hasStatus) return false
      }
      if (searchTerm) {
        var matchFeature = row.feature.toLowerCase().includes(searchTerm)
        var matchTest = row.tests.some(function(t) { return t.name.toLowerCase().includes(searchTerm) })
        if (!matchFeature && !matchTest) return false
      }
      return true
    })

    state.page = 1
    renderTable()
  }

  function changePageSize() {
    state.pageSize = parseInt(document.getElementById('pageSizeSelect').value, 10)
    state.page = 1
    renderTable()
  }

  function changePage(d) {
    var max = Math.ceil(state.filteredRows.length / state.pageSize)
    state.page = Math.max(1, Math.min(max, state.page + d))
    renderTable()
  }

  function renderTable() {
    var start = (state.page - 1) * state.pageSize
    var pageRows = state.filteredRows.slice(start, start + state.pageSize)
    
    if (pageRows.length === 0) {
      document.getElementById('tableBody').innerHTML = '<tr><td colspan="2" style="text-align:center; padding:40px; color:var(--text-secondary);">No features match your filters</td></tr>'
      document.getElementById('pageInfo').textContent = 'No results'
      return
    }

    var rowsHtml = pageRows.map(function(row, rowIdx) {
      var testsHtml = ''
      if (row.tests.length > 0) {
        testsHtml = row.tests.map(function(t, testIdx) {
          var dotColor = (t.status === 'passed') ? '#10b981' : ((t.status === 'failed') ? '#ef4444' : '#a0aec0')
          return ''
            + '<div class="test-chip">'
            +   '<span style="width:8px;height:8px;border-radius:50%;background:' + dotColor + '"></span>'
            +   '<span>' + esc(t.name) + '</span>'
            +   '<span style="margin-left:auto; font-size:10px; opacity:0.6">' + formatTime(t.executionTime) + '</span>'
            +   '<div class="chip-actions">'
            +     '<button class="chip-btn" onclick="runTestGh(' + (start + rowIdx) + ', ' + testIdx + ')" title="Run via GitHub">🚀</button>'
            +     '<button class="chip-btn" onclick="viewTestCode(' + (start + rowIdx) + ', ' + testIdx + ')">👁️</button>'
            +     '<button class="chip-btn" onclick="copyTestPath(' + (start + rowIdx) + ', ' + testIdx + ')">📂</button>'
            +   '</div>'
            +   '<div class="tooltip">📁 ' + esc(t.relPath || '') + '</div>'
            + '</div>'
        }).join('')
      } else {
        testsHtml = '<span style="color:var(--accent-danger); font-size:13px;">⚠️ No tests found</span>'
      }

      var featureActions = ''
        + '<div class="feature-actions">'
        +   '<button class="btn btn-sm" onclick="runFeatureGh(' + (start + rowIdx) + ')">▶ Run Feature</button>'
        +   '<button class="btn btn-sm" onclick="openGhRuns()">🎞 Artifacts (in GitHub)</button>'
        + '</div>'

      var flowsCoveredText = '<span style="font-size:11px; margin-left:10px; font-weight:700; color:var(--accent-primary);">🧭 <u>Flows Covered:</u> ' + (row.tests.length || 0) + '</span>'

      return ''
        + '<tr>'
        +   '<td>'
        +     '<div class="feature-cell">'
        +       '<div class="feature-badge">' + row.tests.length + '</div>'
        +       '<div>'
        +         '<div class="feature-name" style="font-size:15px; font-weight:700; margin-bottom:6px;">' + esc(row.feature) + '</div>'
        +         '<span style="font-size:11px; opacity:0.7">⏱️ ' + formatTime(row.executionTime) + '</span>'
        +         '<span style="font-size:11px; margin-left:10px; opacity:0.7">📁 ' + (row.relDir || '') + '</span>'
        +         flowsCoveredText
        +         featureActions
        +       '</div>'
        +     '</div>'
        +   '</td>'
        +   '<td><div class="test-chips">' + testsHtml + '</div></td>'
        + '</tr>'
    }).join('')

    document.getElementById('tableBody').innerHTML = rowsHtml
    var totalPages = Math.ceil(state.filteredRows.length / state.pageSize)
    document.getElementById('pageInfo').textContent =
      'Page ' + state.page + ' of ' + totalPages + ' (' + state.filteredRows.length + ' features)'
  }

  function initCharts() {
    var coverageChart = new Chart(document.getElementById('coverageChart'), {
      type: 'doughnut',
      data: {
        labels: ['Tested (' + DATA.stats.covered + ')', 'Missing (' + DATA.stats.missing + ')'],
        datasets: [{ data: [DATA.stats.covered, DATA.stats.missing], backgroundColor: ['#10b981', '#ef4444'], borderWidth: 0 }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#a0aec0', font: { size: 13 } } } } }
    })
  }

  // --- AI Suggestions
  function renderAISuggestions() {
    var el = document.getElementById('aiSuggestions')
    if (!el) return
    var suggestions = []
    var stats = DATA.stats || {}
    var rows = DATA.tableData || []

    if ((stats.failedTests || 0) > 0) {
      var failedByFeature = rows.map(function(r){
        var count = r.tests.filter(function(t){ return t.status === 'failed' }).length
        return { feature: r.feature, failed: count }
      }).filter(function(x){ return x.failed > 0 })
        .sort(function(a,b){ return b.failed - a.failed })
        .slice(0,5)
      var topFailFeatures = failedByFeature.map(function(x){ return x.feature + ' (' + x.failed + ')' }).join(', ')
      suggestions.push({
        text: 'There are <b>' + stats.failedTests + '</b> failed test(s). Prioritize fixes in: <b>' + (topFailFeatures || '—') + '</b>.',
        detail: 'Fixing failures first improves stability and raises the pass rate.'
      })
    } else {
      suggestions.push({
        text: 'No failing tests detected. Great job! ✅',
        detail: 'Maintain green builds and expand coverage where missing.'
      })
    }

    if ((stats.missing || 0) > 0) {
      var missingFeatures = rows.filter(function(r){ return (r.tests || []).length === 0 })
                                .map(function(r){ return r.feature })
                                .slice(0,5)
      suggestions.push({
        text: 'There are <b>' + stats.missing + '</b> feature(s) with no tests. Start with: <b>' + (missingFeatures.join(', ') || '—') + '</b>.',
        detail: 'Add at least one scenario per feature to improve coverage.'
      })
    }

    suggestions.push({
      text: 'Current coverage is <b>' + (stats.coveragePercent || 0) + '%</b>. Set a target (e.g., <b>80%</b>) and track progress weekly.',
      detail: 'Steady improvements in coverage reduce regression risk.'
    })

    var slow = (DATA.slowestFeatures || []).slice(0,3)
    if (slow.length > 0) {
      var slowText = slow.map(function(s){ return s.label + ' (' + formatTime(s.value) + ')' }).join(', ')
      suggestions.push({
        text: 'Optimize slow flows: <b>' + slowText + '</b>.',
        detail: 'Consider test data seeding, stubbing heavy network calls, or reducing redundant steps.'
      })
    }

    el.innerHTML = suggestions.map(function(s){
      return '<div class="ai-sugg">• ' + s.text + '<small>' + s.detail + '</small></div>'
    }).join('')
  }

  function staticRefresh() {
    alert('This is a static report. To refresh data, re-run the generator to create a new HTML.')
  }

  // --- Modal helpers for code ---
  function viewTestCode(rowIdx, testIdx) {
    var test = (state.filteredRows[rowIdx] || {}).tests?.[testIdx]
    if (!test) return
    document.getElementById('modalTitle').textContent = (test.name || '') + ' — ' + (test.relPath || '')
    document.getElementById('codeContent').textContent = test.code || 'No code available'
    document.getElementById('codeModal').style.display = 'flex'
  }
  function closeModal() { document.getElementById('codeModal').style.display = 'none' }
  function copyCode() { var code = document.getElementById('codeContent').textContent; copyText(code) }

  // --- GitHub Actions runner ---
  function openRunModal(title) {
    document.getElementById('runTitle').textContent = title || 'Triggering GitHub Actions…'
    document.getElementById('runLogs').textContent = '⏳ Waiting…'
    document.getElementById('runModal').style.display = 'flex'
  }
  function closeRunModal() { document.getElementById('runModal').style.display = 'none' }
  function appendRunLog(text) {
    var el = document.getElementById('runLogs')
    if (!el) return
    if (el.textContent === '⏳ Waiting…') el.textContent = ''
    el.textContent += text
    el.scrollTop = el.scrollHeight
  }

  function ghDispatch(specPath, grep) {
    var gh = getGh()
    if (!gh.token || !gh.org || !gh.repo || !gh.workflow || !gh.ref) {
      alert('Configure GitHub runner first (toolbar ➜ ⚙️ GitHub Runner).')
      return Promise.reject(new Error('GH not configured'))
    }
    var url = gh.api.replace(/\\/$/, '') + '/repos/' + encodeURIComponent(gh.org) + '/' + encodeURIComponent(gh.repo)
            + '/actions/workflows/' + encodeURIComponent(gh.workflow) + '/dispatches'
    var body = { ref: gh.ref, inputs: { spec: specPath } }
    if (grep) body.inputs.grep = grep

    // show quick links
    var runsPage = 'https://github.com/' + encodeURIComponent(gh.org) + '/' + encodeURIComponent(gh.repo) + '/actions/workflows/' + encodeURIComponent(gh.workflow)
    var artifactsPage = 'https://github.com/' + encodeURIComponent(gh.org) + '/' + encodeURIComponent(gh.repo) + '/actions'
    appendRunLog('📤 POST ' + url + '\\n')
    appendRunLog('▶ Inputs: ' + JSON.stringify(body.inputs) + '\\n\\n')
    appendRunLog('🔗 Open runs: ' + runsPage + '\\n')
    appendRunLog('🔗 All Actions: ' + artifactsPage + '\\n\\n')

    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(function(r){
      if (r.ok) {
        appendRunLog('✅ Workflow dispatch accepted. GitHub will start the run shortly.\\n')
      } else {
        appendRunLog('❌ Dispatch failed: ' + r.status + ' ' + r.statusText + '\\n')
      }
      return r
    }).catch(function(err){
      appendRunLog('❌ Error: ' + (err && err.message ? err.message : String(err)) + '\\n')
      throw err
    })
  }

  function runTestGh(rowIdx, testIdx) {
    var test = (state.filteredRows[rowIdx] || {}).tests?.[testIdx]
    if (!test) return alert('No test available')
    var specPath = test.relPath || ''
    var grep = (test.runnerCmd && test.runnerCmd.includes('--env grep=')) ? (test.runnerCmd.split('--env grep=')[1] || '').trim() : ''
    grep = grep.replace(/^"|"$/g, '').replace(/^'|'$/g, '')
    openRunModal('Triggering GitHub Actions…')
    ghDispatch(specPath, grep)
  }

  function runFeatureGh(rowIdx) {
    var row = state.filteredRows[rowIdx]
    if (!row || !row.relPath) return alert('No feature path available')
    openRunModal('Triggering Feature Run…')
    ghDispatch(row.relPath, '')
  }

  function openGhRuns() {
    var gh = getGh()
    var url = 'https://github.com/' + encodeURIComponent(gh.org) + '/' + encodeURIComponent(gh.repo) + '/actions'
    window.open(url, '_blank', 'noopener')
  }

  // --- Copy helpers ---
  function copyRunnerCmd(rowIdx, testIdx) {
    var test = (state.filteredRows[rowIdx] || {}).tests?.[testIdx]
    if (!test) return alert('No runner command available')
    copyText(test.runnerCmd || '')
  }
  function copyTestCode(rowIdx, testIdx) {
    var test = (state.filteredRows[rowIdx] || {}).tests?.[testIdx]
    if (!test) return alert('No test code available')
    copyText(test.code || '')
  }
  function copyTestPath(rowIdx, testIdx) {
    var test = (state.filteredRows[rowIdx] || {}).tests?.[testIdx]
    if (!test) return alert('No test path available')
    copyText(test.relPath || '')
  }

  function copyText(text) {
     navigator.clipboard.writeText(text).then(function() {
        alert('✅ Copied to clipboard!')
     })
  }

  function exportToCSV() {
    var headers = ['Feature', 'Path', 'Tests Count', 'Pass Rate', 'Execution Time (ms)', 'Scenarios']
    var rows = state.filteredRows.map(function(row){
      return [
        row.feature,
        row.relPath,
        row.tests.length,
        row.passRate + '%',
        row.executionTime,
        row.tests.map(function(t){ return t.name }).join('; ')
      ]
    })
    var csv = [headers].concat(rows).map(function(r){
      return r.map(function(c){ return '"' + String(c).replace(/"/g, '""') + '"' }).join(',')
    }).join('\\n')
    var blob = new Blob([csv], { type: 'text/csv' })
    var url = URL.createObjectURL(blob)
    var a = document.createElement('a')
    a.href = url; a.download = 'test-coverage-report.csv'; a.click()
  }

  function esc(s) { return String(s).replace(/[&<>\"']/g, function(c){ return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]) }) }

  // Init
  function init() {
    updateStats()
    initCharts()
    renderAISuggestions()
    renderTable()
    document.getElementById('searchInput').oninput = function(e) {
      state.filters.search = e.target.value.toLowerCase()
      applyFilters()
    }
    updateRunnerBanner()
  }

  init()
</script>
</body>
</html>
`

fs.writeFileSync(OUTPUT_HTML, html, 'utf8')
console.log('✅ Report Generated Locally:', OUTPUT_HTML)
console.log('📎 Share this HTML with your client. They click ⚙️ GitHub Runner once, then Run buttons will trigger GitHub Actions.')
