const fs = require('fs')
const path = require('path')

function safeReadJson(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(raw)
  } catch (_) {
    return null
  }
}

function collectFailuresFromSuites(suites, out = []) {
  if (!Array.isArray(suites)) return out
  for (const s of suites) {
    if (!s) continue
    if (Array.isArray(s.specs)) {
      for (const spec of s.specs) {
        const tests = Array.isArray(spec?.tests) ? spec.tests : []
        for (const t of tests) {
          const results = Array.isArray(t?.results) ? t.results : []
          for (const r of results) {
            if (r?.status === 'failed') {
              out.push({
                title: t?.title || spec?.title || 'Unknown test',
                file: spec?.file || null,
                error: r?.error?.message || null,
                stack: r?.error?.stack || null
              })
            }
          }
        }
      }
    }
    collectFailuresFromSuites(s.suites, out)
  }
  return out
}

function main() {
  const reportDir = path.resolve(__dirname, '..', 'playwright-report')
  const jsonPath = path.join(reportDir, 'results.json')
  const outPath = path.join(reportDir, 'qa-summary.md')

  const json = safeReadJson(jsonPath)
  if (!json) {
    const msg = `# QA Summary\n\nNo JSON report found at ${jsonPath}.\nRun \`npm run qa\` first.`
    fs.mkdirSync(reportDir, { recursive: true })
    fs.writeFileSync(outPath, msg, 'utf8')
    console.log(msg)
    return
  }

  const failures = collectFailuresFromSuites(json.suites)
  const passed = Number(json?.stats?.expected) || 0
  const failed = Number(json?.stats?.unexpected) || 0
  const skipped = Number(json?.stats?.skipped) || 0
  const flaky = Number(json?.stats?.flaky) || 0
  const total = passed + failed + skipped + flaky

  const lines = []
  lines.push('# QA Summary')
  lines.push('')
  lines.push(`- Total: ${total}`)
  lines.push(`- Passed: ${passed}`)
  lines.push(`- Failed: ${failed}`)
  lines.push(`- Skipped: ${skipped}`)
  if (flaky) lines.push(`- Flaky: ${flaky}`)
  lines.push('')
  lines.push('## What failed ("doesn\'t make sense")')
  lines.push('')

  if (failures.length === 0) {
    lines.push('- No failing checks detected.')
  } else {
    for (const f of failures) {
      lines.push(`- **${f.title}**${f.file ? ` (${f.file})` : ''}`)
      if (f.error) {
        const firstLine = String(f.error).split(/\r?\n/)[0]
        lines.push(`  - Expected behavior not observed: ${firstLine}`)
      } else {
        lines.push('  - Expected behavior not observed (no error text).')
      }
      lines.push('  - See Playwright artifacts in `playwright-report/` (trace/video/screenshot).')
    }
  }

  lines.push('')
  lines.push('## Artifacts')
  lines.push('')
  lines.push('- HTML report: `playwright-report/index.html`')
  lines.push('- JSON report: `playwright-report/results.json`')

  fs.mkdirSync(reportDir, { recursive: true })
  fs.writeFileSync(outPath, lines.join('\n'), 'utf8')
  console.log(lines.join('\n'))
}

main()
