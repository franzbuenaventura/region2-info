# Project: Region 2 - Info

An interactive map website of Isabela province (Region 2, Cagayan Valley, Philippines).
Main page = animated, clickable map of Isabela divided by city/municipality.
Clicking a town opens a detail page (blank for now, to be filled later).

## Stack
- Plain HTML + CSS + vanilla JS (no build step, no framework) — served statically.
- SVG map rendered inline from GeoJSON (D3 only if needed for projection; prefer hand-rolled to keep it light).
- Animation/effects: CSS transitions + JS-driven hover/glow/zoom effects. No heavy libraries unless needed.

## Data
- `data/isabela-geo.json` — GeoJSON FeatureCollection of Isabela's 37 LGUs (34 municipalities + 3 cities: City of Cauayan, City of Ilagan, City of Santiago).
- Properties per feature: `adm3_en` (name), `adm3_psgc` (PSGC code), `geo_level` ("City" or "Mun"), `area_km2`, plus polygon geometry (EPSG:4326 lat/long, lowres = ~378 points total — light enough to inline).
- Source: faeldon/philippines-json-maps (PSGC 2023, NAMRIA boundaries), lowres.

## Routes
- `/` — map home page: interactive SVG map of Isabela. Every LGU polygon is clickable.
- `/city/{slug}` — detail page for each LGU (slug = kebab-case name, e.g. `/city/cauayan`, `/city/ilagan`, `/city/santiago`, `/city/san-mariano`). Currently renders a styled blank placeholder showing the LGU name. Data will be added later.

## Implementation Notes
- Single-page approach is fine (client-side routing via hash or History API) OR separate static pages — pick simplest that works with a static file server.
- Map must work from `file://` too (no fetch required — inline the GeoJSON into the page via a build step or a JS file `data/isabela-data.js` that assigns `window.ISABELA_GEO`).
- No server needed for the first version; any static server works (`npx serve`, `python3 -m http.server`).

## Visual Direction
- Dark, modern aesthetic (similar to dashboard-style apps): deep navy/charcoal background, vivid accent colors per city, smooth hover glow + slight scale-up on polygons, animated page transitions.
- Title/header: "Region 2 — Info" with subtitle (Isabela Province, Cagayan Valley).
- Show LGU name label on hover; highlight cities differently from municipalities.
- 37 clickable polygons: smooth pan/zoom on the map is a plus (pan/zoom on wheel + drag), but not required for v1.

## Key Commands
- Serve: `npx serve . --port 3470` or `python3 -m http.server 3470`
- No test suite needed for this scaffold phase.

## Code Standards
- Vanilla JS, no dependencies beyond optional D3 for projection (or implement a simple equirectangular/Mercator projection manually — Isabela spans ~16.4–17.4°N, 121.2–122.3°E, so a linear projection tuned to bounds works well and keeps it dependency-free).
- Semantic HTML, accessible (aria-labels on clickable polygons, keyboard focus styles).
- All styling in one CSS file; keep it clean and consistent.