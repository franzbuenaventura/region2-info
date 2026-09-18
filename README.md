# Region 2 — Info

An interactive map and data dashboard for **Isabela Province** (Region 2, Cagayan Valley, Philippines) — 37 LGUs (34 municipalities + 3 cities), built for site-selection research: market sizing, real-estate pricing, and political context for doing business in each town.

**Live status:** Cauayan City is fully researched (62 sourced references). The other 36 LGUs are placeholders awaiting schema sign-off.

![stack](https://img.shields.io/badge/stack-vanilla%20JS%20%2B%20SVG-blue) ![deps](https://img.shields.io/badge/dependencies-zero-green)

## Features

### Interactive map (`#/`)
- All 37 LGUs as clickable SVG polygons (city vs municipality styling, hover labels, soft-highlight sync with the sidebar list)
- **Choropleth overlays** — "Color map by" selector with 5-bucket quantile scale:
  - *Data completion* — how much of the schema each LGU has filled (makes research progress visible at a glance)
  - *Land area* — NAMRIA km²
  - Gradient legend with min→max range; "None" resets to default city/municipality colors

### LGU detail pages (`#/city/{slug}`)
Six tabs per LGU:
| Tab | Contents |
|---|---|
| General | identity, founding/cityhood, etymology, core facts (population, area, income class, distances) |
| Market | registered businesses, banks, hospitals, BPO, malls, labor, costs, consumer demand, catchment |
| Points | unique characteristics, flood-risk barangays, geohazards, security, growth pipeline |
| Political | current officials, dynasty/climate context, **historical politics timeline** (for Cauayan: 1866 → 2025, nine eras from Spanish gobernadorcillos to the Speakership), business climate |
| Real Estate | land/house/rent pricing bands from live listings (Cauayan only; optional field) |
| References | numbered, linked source list; inline `[n]` citation markers throughout the tabs jump straight to the right reference |

Tabs are **deep-linkable** — `#/city/cauayan/estate` opens the Real Estate tab directly, and switching tabs updates the URL.

### Compare view (`#/compare/{slug1},{slug2},...`)
Side-by-side table across General / Market / Real Estate / Political sections. Empty fields render as `—`. The nav defaults to `cauayan,ilagan,santiago` (the three cities). Column headers link back to each LGU's page.

### Schema page (`#/schema`)
The field list lives in `data/schema.js` — this page renders from it, so adding a field requires no app code. Includes per-LGU completion bars.

## Data model

- `data/isabela-data.js` — inline GeoJSON (PSGC 2023 / NAMRIA lowres, ~378 points) → `window.ISABELA_GEO`
- `data/lgu-data.js` — per-slug research packs → `window.LGU_DATA`. Top-level keys map to schema fields; arrays of `[label, value]` pairs render as definition lists
- `data/schema.js` — field config (key, label, tab, required, example) → `window.SCHEMA`
- `data/lgu/*.md` — human-readable research packs (the source the JS is compiled from)

**Citation discipline:** citation markers use *positional* reference indices — when adding references, **append at the end** or every existing marker shifts.

## Running

```bash
# any static server works; repo includes a tiny one
python3 -m http.server 3470
# or: npx serve . --port 3470
# or: node server.mjs
```

Then open http://localhost:3470. Works from `file://` too (no fetches — all data is inlined JS).

## Adding an LGU's data

1. Research and write `data/lgu/{slug}.md` (identity → general → market → points → political → optional realEstate → references)
2. Add a keyed entry to `window.LGU_DATA` in `data/lgu-data.js` following `data/schema.js`
3. Append references at the **end** of the array (see citation discipline above)
4. Update the `references` example count in `data/schema.js`

## Verification

- `node --check app.js && node --check data/lgu-data.js` — syntax
- The site renders fully offline; no build step, no framework, no external requests

## Sources

Per-LGU sources are listed on each LGU's References tab with links. Map boundaries: [faeldon/philippines-json-maps](https://github.com/faeldon/philippines-json-maps) (PSGC 2023, NAMRIA). Historical narratives rely on LGU-commissioned histories and are flagged for verification before formal use.