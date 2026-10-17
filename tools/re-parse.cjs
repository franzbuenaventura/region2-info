#!/usr/bin/env node
/* re-parse.cjs — incremental parser for the RE Prices table.
   Source: data/re-history/fb-lot-posts-raw.json entries WITH a `harvested` stamp
   (Oct-16-2026 and newer logged-in harvests). Old-format entries (pre-stamp) were
   already parsed by earlier passes and are left untouched.
   Anchors each entry's relative age marker ("8h", "3d", "26w") to the harvest time
   -> absolute posted date (postedMs/postedLabel/postedPrec) so the table can sort
   by actual post date (Justin request 2026-10-17).
   Dry-run by default; --apply rewrites data/re-posts.js append-only (existing records untouched). */

const fs = require('fs')
const path = require('path')
const REPO = `${process.env.HOME}/.openclaw/workspace/region2-info`
const RAW = path.join(REPO, 'data/re-history/fb-lot-posts-raw.json')
const POSTS = path.join(REPO, 'data/re-posts.js')
const APPLY = process.argv.includes('--apply')

const AGE_RE = /^(\d+)([smhdwy])$/
const UNIT_MS = { s: 1e3, m: 6e4, h: 36e5, d: 864e5, w: 6048e5, y: 31536e6 }
const UI_NOISE = /^(reply|share|see translation|author|up|like|more|comment|react|follow)$/i
const LGUS = ['Cauayan', 'Santiago', 'Ilagan', 'Echague', 'Ramon', 'San Mateo', 'Alicia', 'Cordon', 'Diffun', 'Cabatuan', 'Luna', 'Reina Mercedes', 'Burgos', 'Gamu', 'Naguilian', 'Benito Soliven', 'San Mariano', 'Delfin Albano', 'Tumauini', 'Cabagan', 'San Pablo', 'Santa Maria', 'Santo Tomas', 'Mallig', 'Roxas', 'San Manuel', 'Aurora', 'Quirino', 'Isabela']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function parseEntry(e) {
  const lines = (e.t || '').split('\n').map(s => s.trim())
  const ageIdx = lines.findIndex(l => AGE_RE.test(l))
  if (ageIdx < 1) return null
  const [, num, unit] = lines[ageIdx].match(AGE_RE)
  const harvestMs = new Date(e.harvested).getTime()
  if (!isFinite(harvestMs)) return null
  const postedMs = harvestMs - parseInt(num, 10) * UNIT_MS[unit]
  const content = lines.slice(ageIdx + 1)
    .filter(l => l && !UI_NOISE.test(l) && l !== '·' && !/^\d+$/.test(l))
    .join(' ').replace(/\s+/g, ' ').trim()
  if (content.length < 15) return null
  const d = new Date(postedMs)
  const approx = `~${num}${unit} before harvest`
  const label = unit === 'y'
    ? `${d.getFullYear()}`
    : `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  return { content, postedMs, label, approx, unit, year: d.getFullYear() }
}

function extract(content) {
  const lower = content.toLowerCase()
  let area_sqm = null
  const hm = content.match(/([\d,]+(?:\.\d+)?)\s*(hectares?|hec\b|hctr|ha\b)/i)
  if (hm) area_sqm = parseFloat(hm[1].replace(/,/g, '')) * 1e4
  else {
    const sm = content.match(/([\d,]+(?:\.\d+)?)\s*(sq\.?\s?m(?:ters?)?|sqm)\b/i)
    if (sm) area_sqm = parseFloat(sm[1].replace(/,/g, ''))
  }
  let price_php = null
  const pm = content.match(/₱\s*([\d,]+(?:\.\d+)?)\s*(k|m(?:illion)?|million)?/i)
  if (pm) {
    price_php = parseFloat(pm[1].replace(/,/g, ''))
    if (!pm[2]) { /* bare */ }
    else if (/^k$/i.test(pm[2])) price_php *= 1e3
    else price_php *= 1e6
  }
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const loc = LGUS.find(l => new RegExp(`\\b${escRe(l)}\\b`, 'i').test(content)) || null
  const nm = content.match(/(clean[\s\w]{0,12}title|clean papers|titled|negotiable|installment|cash basis|\bcash\b)/i)
  const isListing = !!(area_sqm || price_php) || /for[-\s]?sale/i.test(lower) || /subdivision|memorial|cemetery/i.test(lower)
  const type = /subdivision|pre-sell/i.test(lower) ? 'subdivision/pre-selling'
    : /memorial|cemetery/i.test(lower) ? 'memorial/cemetery'
    : /house/i.test(lower) ? 'house+lot'
    : /farm|agri|rice|corn|fruit/i.test(lower) ? 'farm/agri'
    : /commercial|store|biz/i.test(lower) ? 'commercial'
    : area_sqm ? 'land' : 'other'
  return { area_sqm, price_php, psp: area_sqm && price_php ? Math.round(price_php / area_sqm) : null, loc, note: nm ? nm[1] : null, type, isListing }
}

;(async () => {
  const raw = JSON.parse(fs.readFileSync(RAW, 'utf8'))
  const window = {}
  new Function('window', fs.readFileSync(POSTS, 'utf8') + '; return window.RE_POSTS;')(window)
  const existing = window.RE_POSTS
  if (!existing || !existing.length) throw new Error('RE_POSTS empty/parse failed — refusing to rewrite')
  const keyOf = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '')
  const seen = new Set(existing.map(r => {
    const pid = r.link && /posts\/(\d+)/.test(r.link) ? 'p' + r.link.match(/posts\/(\d+)/)[1] : ''
    return pid + '|' + keyOf(r.snippet).slice(0, 96)
  }))
  const added = []
  const stat = { corpus: raw.length, oldFormat: 0, unparsable: 0, notListing: 0, dup: 0, parsed: 0 }
  for (const e of raw) {
    if (!e.harvested) { stat.oldFormat++; continue }
    const pe = parseEntry(e)
    if (!pe) { stat.unparsable++; continue }
    const x = extract(pe.content)
    if (!x.isListing) { stat.notListing++; continue }
    const pid = e.u && /posts\/(\d+)/.test(e.u) ? 'p' + e.u.match(/posts\/(\d+)/)[1] : ''
    const key = pid + '|' + keyOf(pe.content).slice(0, 96)
    if (seen.has(key)) { stat.dup++; continue }
    seen.add(key)
    added.push({
      year: pe.unit === 'y' ? pe.year + '*' : String(pe.year),
      type: x.type, loc: x.loc, area_sqm: x.area_sqm, price_php: x.price_php, psp: x.psp,
      note: x.note,
      snippet: pe.content.slice(0, 300),
      link: e.u || undefined,
      postedMs: pe.postedMs, postedLabel: pe.label, postedApprox: pe.approx, postedPrec: 'approx'
    })
    stat.parsed++
  }
  console.log(JSON.stringify(stat))
  for (const r of added.slice(0, 10)) console.log(`  + ${r.year} ${r.type} loc=${r.loc || '—'} area=${r.area_sqm || '—'} price=${r.price_php ? 'P' + r.price_php : '—'} | ${r.postedLabel} | ${r.snippet.slice(0, 70)}`)
  if (APPLY && added.length) {
    fs.writeFileSync(POSTS, 'window.RE_POSTS = ' + JSON.stringify(existing.concat(added), null, 1) + ';\n')
    console.log(`applied: re-posts.js now ${existing.length + added.length} records`)
  } else if (APPLY) console.log('apply: nothing to append')
})().catch(e => { console.error('FAIL', String(e).slice(0, 300)); process.exit(1) })
