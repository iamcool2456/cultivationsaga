const { spawn } = require('child_process')
const path = require('path')

function run(cmd, args, opts = {}) {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, {
      stdio: 'inherit',
      shell: true,
      ...opts
    })
    child.on('exit', (code) => resolve(code ?? 1))
  })
}

async function main() {
  const cwd = path.resolve(__dirname, '..')

  // Run tests (always writes playwright-report/results.json via config)
  const testCode = await run('npx', ['playwright', 'test'], { cwd })

  // Summarize in a friendly "this doesn't make sense" format.
  await run('node', ['tools/qa_summarize.js'], { cwd })

  process.exitCode = testCode
}

main().catch((err) => {
  try { console.error(err) } catch (_) {}
  process.exitCode = 1
})
