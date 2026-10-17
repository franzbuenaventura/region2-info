#!/usr/bin/env node
/* fb-login-then-harvest.cjs — headful FB login on the main profile, then auto-run fb-harvest.cjs --apply on success. */
const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')
let PW
try { PW = require('/Users/mrkrabs/.npm/_npx/8718c3904bb5fece/node_modules/playwright') }
catch { PW = require('/Users/mrkrabs/.openclaw/workspace/marketplace-browser/node_modules/playwright') }
const PROFILE = process.env.HOME + '/.openclaw/browser/openclaw/user-data'
const REPO = process.env.HOME + '/.openclaw/workspace/region2-info'
const STATUS = '/tmp/fb-main-login-status.json'
const writeStatus = (obj) => { try { fs.writeFileSync(STATUS, JSON.stringify(obj, null, 2)) } catch {} }
const overall = setTimeout(() => { writeStatus({ checkedAt: new Date().toISOString(), loggedIn: false, timedOut: true }); console.log('TIMEOUT-3H-NO-LOGIN'); process.exit(124) }, 3 * 60 * 60 * 1000)
;(async () => {
  const ctx = await PW.chromium.launchPersistentContext(PROFILE, {
    headless: false, viewport: null, locale: 'en-PH',
    args: ['--no-first-run', '--no-default-browser-check', '--disable-blink-features=AutomationControlled', '--window-position=40,40', '--window-size=1360,940'],
  })
  console.log('LOGIN-WINDOW-OPEN')
  const page = ctx.pages()[0] || await ctx.newPage()
  await page.goto('https://www.facebook.com/', { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(() => {})
  let closedErrs = 0
  for (;;) {
    let loggedIn = false
    try {
      const cookies = await ctx.cookies('https://www.facebook.com')
      const names = cookies.map(c => c.name)
      loggedIn = names.includes('c_user') && names.includes('xs')
      closedErrs = 0
    } catch (e) {
      if (/closed/i.test(String(e))) { writeStatus({ checkedAt: new Date().toISOString(), note: 'window closed without login' }); console.log('WINDOW-CLOSED-NO-LOGIN'); process.exit(5) }
      closedErrs++
      if (closedErrs > 20) { console.log('POLL-FAIL'); process.exit(6) }
      await new Promise(r => setTimeout(r, 5000)); continue
    }
    writeStatus({ checkedAt: new Date().toISOString(), loggedIn })
    if (loggedIn) {
      console.log('LOGIN-DETECTED — saving session, closing window in 20s')
      await new Promise(r => setTimeout(r, 20000))
      await ctx.close().catch(() => {})
      break
    }
    await new Promise(r => setTimeout(r, 5000))
  }
  clearTimeout(overall)
  console.log('SESSION-SAVED — starting harvest --apply')
  const out = fs.openSync('/tmp/fb-harvest-out.txt', 'w')
  const child = spawn(process.execPath, [path.join(REPO, 'tools/fb-harvest.cjs'), '--apply', '--sites', '--mkt', 'lot for sale cauayan'], { cwd: REPO, stdio: ['ignore', out, out] })
  child.on('exit', (code) => { fs.closeSync(out); console.log('HARVEST-EXIT code=' + code); process.exit(code === 0 ? 0 : (code || 1)) })
  child.on('error', (e) => { console.log('HARVEST-SPAWN-FAIL ' + String(e).slice(0, 200)); process.exit(7) })
})().catch(e => { writeStatus({ checkedAt: new Date().toISOString(), error: String(e).slice(0, 200) }); console.error('LAUNCH-FAIL:', String(e).slice(0, 300)); process.exit(1) })
