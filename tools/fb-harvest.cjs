#!/usr/bin/env node
/**
 * fb-harvest.cjs — weekly Facebook harvest for the Region2-Info real-estate tracker.
 *
 * Uses the MAIN OpenClaw managed browser profile (persistent cookies — the FB
 * session Justin logged into on 2026-10-16 lives there), headless for runs.
 *
 * Safety rails:
 *  - ABORTS if any Chromium on that profile is already running (login window
 *    or another scrape) — one instance per profile.
 *  - ABORTS if FB session cookies are gone (asks for a one-time re-login).
 *  - DRY-RUN by default: new posts go to a dated staging file, existing data
 *    is never touched. --apply appends new posts to the raw corpus JSON
 *    (append-only; never deletes or rewrites existing entries).
 *
 * Usage:
 *   node fb-harvest.cjs [--groups 933477727453584,...] [--max-scroll 6]
 *                       [--mkt "lot for sale cauayan"] [--sites] [--apply]
 */
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

let PW
try { PW = require('/Users/mrkrabs/.npm/_npx/8718c3904bb5fece/node_modules/playwright') }
catch { PW = require('/Users/mrkrabs/.openclaw/workspace/marketplace-browser/node_modules/playwright') }

const PROFILE = `${process.env.HOME}/.openclaw/browser/openclaw/user-data`
const REPO = `${process.env.HOME}/.openclaw/workspace/region2-info`
const RAW = path.join(REPO, 'data/re-history/fb-lot-posts-raw.json')
const STAGE_DIR = path.join(REPO, 'research/re-harvest')
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'

const args = process.argv.slice(2)
const has = (s) => args.includes(s)
const opt = (s, d) => { const i = args.indexOf(s); return i >= 0 && args[i + 1] ? args[i + 1] : d }
const APPLY = has('--apply')
const GROUPS = (opt('--groups', '933477727453584') || '933477727453584').split(',').map(s => s.trim()).filter(Boolean)
const MAX_SCROLL = parseInt(opt('--max-scroll', '6'), 10)
const MKT_QUERY = opt('--mkt', null)
const SITES = has('--sites')

const norm = (s) => (s || '').replace(/\s+/g, ' ').trim()
const stamp = (d = new Date()) => d.toISOString().replace(/[:T]/g, '-').slice(0, 19)

function profileBusy() {
  try {
    const out = execSync('ps -axo command | grep "[u]ser-data-dir=' + PROFILE + '" | head -1', { shell: '/bin/bash' }).toString().trim()
    // any process (Chromium binary) holding this --user-data-dir = busy;
    // Playwright binary is Chromium.app, so do NOT string-match 'Chrome'
    return out.length > 0
  } catch { return false }
}

async function sessionOk(ctx) {
  try {
    const cookies = await ctx.cookies('https://www.facebook.com')
    const names = cookies.map(c => c.name)
    return names.includes('c_user') && names.includes('xs')
  } catch { return false }
}

async function dismissOverlay(page) {
  try { const x = page.locator('[aria-label="Close"], div[role="dialog"] [aria-label*="lose"], [aria-label="Accept all"]').first(); if (await x.isVisible({ timeout: 2500 })) { await x.click().catch(() => {}); await page.waitForTimeout(800); return true } } catch {}
  try { const k = page.getByRole('button', { name: /^Accept all$|^Allow|^Not now$/i }).first(); if (await k.isVisible({ timeout: 1500 })) { await k.click().catch(() => {}); await page.waitForTimeout(600) } } catch {}
  return false
}

async function harvestGroup(ctx, gid, knownIds) {
  const page = await ctx.newPage()
  const seen = new Map()
  try {
    const resp = await page.goto(`https://www.facebook.com/groups/${gid}/`, { waitUntil: 'domcontentloaded', timeout: 45000 })
    if (!resp || resp.status() >= 400) return { gid, error: `HTTP ${resp ? resp.status() : 'null'}`, posts: [] }
    await page.waitForTimeout(4500)
    await dismissOverlay(page)
    const loginwall = await page.evaluate(() => {
      const t = document.body ? document.body.innerText : ''
      return /you must log in|log in or sign up|'log into facebook'/i.test(t)
    })
    let stale = 0
    for (let i = 0; i < MAX_SCROLL; i++) {
      const before = seen.size
      const chunk = await page.evaluate(() => {
        const arts = Array.from(document.querySelectorAll('div[role="feed"] div[role="article"], div[role="article"]'))
        return arts.map(a => {
          const t = (a.innerText || '').trim()
          const lines = t.split('\n').map(s => s.trim())
          const content = lines.filter(s => !/^(reply|share|see translation|author|up|like|more|comment)$/i.test(s) && s !== '·').join(' ').replace(/\s+/g, ' ').trim()
          if (content.length < 40) return null
          const linkEl = a.querySelector('a[href*="/posts/"], a[href*="permalink"], a[href*="/videos/"], a[href*="comment_id"]')
          let u = linkEl ? linkEl.href : null
          // comment bubbles nest inside/next to feed posts, so a feed walk that accepts any
          // article ≥40 chars hoovers comment chatter (seen live 2026-10-20: 5/5 comments,
          // both real listing bodies never stored). Flag comments via their comment_id links.
          const isComment = !!(u && u.includes('comment_id'))
          if (u && u.includes('comment_id')) u = u.split('?')[0]
          return { t: content, u, comment: isComment }
        }).filter(Boolean)
      })
      for (const p of chunk) if (!seen.has(norm(p.t))) seen.set(norm(p.t), p)
      stale = seen.size === before ? stale + 1 : 0
      if (stale >= 2) break // no growth after two scroll rounds → end of feed
      await page.mouse.wheel(0, 2600)
      await page.waitForTimeout(2300)
    }
    // v3 enrichment: comment bubbles carry their PARENT post's /posts/<id> link, and real
    // post bodies hydrate late (often still empty after the walk — probed 2026-10-20), so
    // fetch each unseen parent permalink directly and read its story text authoritatively.
    const parentUrls = new Set()
    for (const p of seen.values()) if (p.u && !p.comment && p.u.includes('/posts/')) parentUrls.add(p.u.split('?')[0])
    for (const p of seen.values()) if (p.u && p.comment && p.u.includes('/posts/')) parentUrls.add(p.u) // comment's stripped parent URL
    let enrichedOk = 0
    for (const pu of parentUrls) {
      const m = pu.match(/\/posts\/(\d+)/)
      if (!m || (knownIds && knownIds.has(m[1]))) continue
      const ep = await ctx.newPage()
      try {
        await ep.goto(pu, { waitUntil: 'domcontentloaded', timeout: 35000 })
        await ep.waitForTimeout(3200)
        const body = await ep.evaluate(() => {
          const msg = document.querySelector('[data-ad-preview="message"]')
          if (msg && msg.innerText && msg.innerText.trim().length >= 15) return msg.innerText.trim()
          const arts = Array.from(document.querySelectorAll('div[role="article"]'))
          for (const a of arts) {
            const t = (a.innerText || '').trim()
            if (t.length < 40) continue
            const lines = t.split('\n').map(s => s.trim())
            const content = lines.filter(s => !/^(reply|share|see translation|author|up|like|more|comment)$/i.test(s) && s !== '·').join(' ').replace(/\s+/g, ' ').trim()
            if (content.length >= 60) return content.slice(0, 600)
          }
          return ''
        })
        if (body && body.length >= 40) {
          const key = norm(body)
          if (!seen.has(key)) { seen.set(key, { t: body.replace(/\s+/g, ' ').trim(), u: pu, comment: false, enriched: true }); enrichedOk++ }
        }
      } catch {}
      if (!ep.isClosed()) await ep.close().catch(() => {})
    }
    if (enrichedOk) console.error('[phase] enriched parent posts: ' + enrichedOk + ' fetched via permalink')
    return { gid, loginwall, posts: Array.from(seen.values()) }
  } catch (e) {
    return { gid, error: String(e).slice(0, 160), posts: Array.from(seen.values()) }
  } finally { await page.close().catch(() => {}) }
}

async function harvestMarketplace(ctx, query) {
  const page = await ctx.newPage()
  const items = []
  try {
    await page.goto(`https://www.facebook.com/marketplace/cauayancity/search?query=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded', timeout: 45000 })
    await page.waitForTimeout(5000)
    await dismissOverlay(page)
    for (let i = 0; i < 3; i++) { await page.mouse.wheel(0, 1800); await page.waitForTimeout(2000) }
    const got = await page.evaluate(() => {
      const norm = (s) => (s || '').replace(/\s+/g, ' ').trim()
      return Array.from(document.querySelectorAll('a[href*="/marketplace/item/"]')).map(a => {
        const card = a.closest('div') || a
        const img = card.querySelector('img')
        return { href: a.href, text: norm(card.innerText), img: img ? img.src : null }
      }).filter(x => x.text)
    })
    const uniq = new Map()
    for (const it of got) {
      const m = it.href.match(/item\/(\d+)/)
      const key = m ? m[1] : it.href
      if (!uniq.has(key)) uniq.set(key, it)
    }
    items.push(...uniq.values())
    return { query, items }
  } catch (e) { return { query, error: String(e).slice(0, 160), items } }
  finally { await page.close().catch(() => {}) }
}

async function harvestSites(ctx) {
  const out = []
  const targets = [
    ['myproperty', 'https://www.myproperty.ph/for-sale/lots/cauayan-city/'],
    ['onepropertee', 'https://www.onepropertee.com/property-for-sale/isabela/cauayan-city'],
  ]
  for (const [name, url] of targets) {
    const page = await ctx.newPage()
    try {
      const resp = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 40000 })
      await page.waitForTimeout(3500)
      const text = await page.evaluate(() => (document.body ? document.body.innerText : ''))
      out.push({ site: name, url, status: resp ? resp.status() : null, chars: text.length, peek: norm(text).slice(0, 600) })
    } catch (e) { out.push({ site: name, url, error: String(e).slice(0, 160) }) }
    finally { await page.close().catch(() => {}) }
  }
  return out
}

;(async () => {
  if (profileBusy()) {
    console.log(JSON.stringify({ abort: 'profile busy — another Chromium (login window or scrape) is using the main profile' }))
    process.exit(3)
  }
  const ctx = await PW.chromium.launchPersistentContext(PROFILE, {
    headless: true,
    locale: 'en-PH',
    userAgent: UA,
    viewport: { width: 1366, height: 950 },
    args: ['--disable-blink-features=AutomationControlled', '--no-first-run', '--no-default-browser-check'],
  })
  try {
    if (!(await sessionOk(ctx))) {
      console.log(JSON.stringify({ abort: 'FB session invalid — headful re-login needed', note: 'relaunch login window on main profile' }))
      process.exit(2)
    }
    const result = { runAt: new Date().toISOString(), apply: APPLY, groups: [], marketplace: [], sites: [] }
    let existing = []
    try { existing = JSON.parse(fs.readFileSync(RAW, 'utf8')) } catch {}
    // Known parent-post ids (from corpus URLs) skip re-fetching already-harvested permalinks.
    const knownIds = new Set(existing.map(e => { const m = String(e.u || '').match(/\/posts\/(\d+)/); return m ? m[1] : null }).filter(Boolean))
    for (const gid of GROUPS) { console.error('[phase] group', gid, new Date().toISOString()); result.groups.push(await harvestGroup(ctx, gid, knownIds)); console.error('[phase] group done', gid, 'posts=', result.groups[result.groups.length - 1].posts.length, 'err=', result.groups[result.groups.length - 1].error || null) }
    if (MKT_QUERY) { console.error('[phase] marketplace', new Date().toISOString()); result.marketplace = [await harvestMarketplace(ctx, MKT_QUERY)]; console.error('[phase] marketplace done items=', result.marketplace[0].items.length) }
    if (SITES) { console.error('[phase] sites', new Date().toISOString()); result.sites = await harvestSites(ctx); console.error('[phase] sites done') }

    // Dedupe must compare CLEANED content: corpus stores older raw-format text, current extractor pushes cleaned.
    // Apply the identical line-filter to stored entries so same comments can never re-enter.<!-- project: github.com/franzbuenaventura/mrkrabs-workspace -->
    const cleanOld = (s) => (s || '').split('\n').map(x => x.trim()).filter(x => !/^(reply|share|see translation|author|up|like|more|comment)$/i.test(x) && x !== '·').join(' ').replace(/\s+/g, ' ').trim()
    const existingSet = new Set(existing.map(e => norm(cleanOld(e.t))))
    let newPosts = 0
    for (const g of result.groups) g.newPosts = (g.posts || []).filter(p => !existingSet.has(norm(p.t))).length
    newPosts = result.groups.reduce((s, g) => s + (g.newPosts || 0), 0)
    result.newPostsTotal = newPosts

    console.error('[phase] staging+merge', new Date().toISOString())
    fs.mkdirSync(STAGE_DIR, { recursive: true })
    const stageFile = path.join(STAGE_DIR, `harvest-${stamp()}.json`)
    fs.writeFileSync(stageFile, JSON.stringify(result, null, 2))

    if (APPLY && newPosts > 0) {
      const merged = []
      for (const g of result.groups) {
        for (const p of g.posts || []) {
          if (!existingSet.has(norm(p.t))) { merged.push({ t: p.t, u: p.u || null, harvested: result.runAt }); existingSet.add(norm(p.t)) }
        }
      }
      // append-only: keep every existing entry untouched
      fs.writeFileSync(RAW, JSON.stringify(existing.concat(merged), null, 1))
      result.applied = merged.length
    }
    result.stageFile = stageFile
    console.log(JSON.stringify(result, (k, v) => (k === 'posts' ? (v || []).length : k === 'items' ? (v || []).length : k === 'peek' ? undefined : v), 2))
  } finally { await ctx.close().catch(() => {}) }
})().catch(e => { console.error('FATAL', String(e).slice(0, 300)); process.exit(1) })