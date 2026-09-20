# Full Verification Pass (double-check) — September 20, 2026

Scope: all 37 LGU data packs in data/lgu-data.js, app.js renderer, live browser rendering.

## 1. Structural validation — PASS (after 2 fixes)
- All 37 LGUs: general/market/labor/costs/demand/catchment/points/political/realEstate/references present.
- No duplicate row labels in any section; all refs have title+url; officials/history shapes correct.
- Two packs (Quirino, San Agustin) have 2-item history timelines — legitimate, not errors.
- Refs: min 16, max 70 per pack. `node --check` clean.

## 2. Issues FOUND & FIXED during this pass
1. **Stray cite markers** — the renderer hardcoded {5:[12], 7:[13]} history cites; after adding 8 salary refs to every pack, cite markers on timeline items pointed at generic refs (OWS/NWPC) for 31 packs. FIXED: cites are now data-driven via `political.historyCites` (auto-generated per LGU from its actual history refs) with a range-guarded legacy fallback in app.js. Zero bad cite targets remain.
2. **Santa Maria mayor wrong** — page said "Hilario Pagauitan (per 2022-25 infobox)"; the 2025 result is **Michael A. Pagauitan (PFP) 9,984 votes (55.43%)** at 96.15% precincts (Rappler embed + ABS-CBN). FIXED with full note; VM row marked pending name confirmation (5,798 votes).
3. **Duplicated labor rows in Ilagan** — an earlier insertion landed twice; deduped.

## 3. Numeric cross-checks — PASS
- 2025 election results re-verified live vs Rappler/ABS-CBN/PeoPlaid for contested seats:
  - Cabatuan: Uy (NUP) 11,395 / Dy (Lakas) 8,839 / Arreola 1,799 — matches stored data exactly.
  - San Guillermo: Guyud (PFP) 10,080 (73.01%) — my dual-count note resolved: the ABS-CBN 7,916-vs-7,787 rows were aVM race; mayor is Pipot Guyud. Note updated? (page keeps dual-source caution note).
  - San Isidro: Bravo 8,419 (50.23%) vs Cruz 5,858 — matches.
  - Jones: Montano 22,924 (75.67%) — matches.
  - Santa Maria: fixed as above.
- Density arithmetic: Ilagan 164,020/1,166.26 km² = 140.6/km² ✓; San Mariano 61,876/1,469.5 = 42.1/km² ✓ (an automated flag was a regex artifact, manual math confirms).
- Salary/income figures re-sourced: PSA OWS 2024 (₱21,544 avg; agri ₱14,615; ICT ₱43,676), median ₱13,000 (PSA LFS), NWPC RTWPB-2 (₱480/₱460; +20/+40 coming; DW ₱6,500), SSL 2025 (SG-1 ₱14,061, SG-11 ₱30,024, SG-15 ₱40,208, SG-30 ₱214,512), FIES 2023/2025 (R2 ₱290,120 → ₱388,220, +25%), PIDS class bands, BusinessWorld 2025 LFS (R2 unemployment 3.1%).

## 4. Remaining open verifications (flagged on-page)
- VM identity cross-checks pending: Aurora, San Mateo, San Guillermo, San Isidro, Jones, Delfin Albano, Reina Mercedes, Naguilian (Chu Capuchino vs Acosta), Santa Maria VM name, Quirino/Dinapigue/San Agustin/Jones district-rep mappings.
- Land areas computed from density (Luna, Santo Tomas, Cabatuan, Gamu, Naguilian, Benito Soliven, Jones, San Isidro, San Agustin) need PSGC confirmation.
- San Mateo population (2020: 66,663 vs aggregator 67,433 citing PSA 2024).
- Dinapigue poverty 44.81% is 2018-dated.
- Quirino revenue ₱462M outlier flagged in-page.

## 5. Browser render — PASS
- All 37 slugs load with all 6 tabs, zero console errors.
- Spot-verified renders: Ilagan political (timeline + cites), Gamu market (disparity rows), Palanan market (disparity + coast costs), Santa Maria political (corrected), Ilagan references (36 refs incl. new 8).

## 6. Commits
- d5550bb class-disparity block + 8 refs (all 37)
- 0cf7f9f verification fixes (santa-maria correction, data-driven history cites)
- Working tree clean except pre-existing padaca research edits (untouched).
