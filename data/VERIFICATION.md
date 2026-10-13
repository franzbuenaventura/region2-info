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
- Salary/income figures re-sourced: PSA OWS 2024 (₱21,544 avg; agri ₱14,615; ICT ₱43,676), median ₱14,588 (PSA OWS 2022 — the earlier '₱13,000 (PSA LFS)' attribution was wrong, fixed Oct 13 audit), NWPC RTWPB-2 (RTWPB 2-24 eff Nov 5 2025: ₱500 non-agri +₱20 / agri +₱40 → both ₱500; DW ₱6,500), SSL 2025 (SG-1 ₱14,061, SG-11 ₱30,024, SG-15 ₱40,208, SG-30 ₱214,512; NOTE: Nurse I row had used the 2026 3rd-tranche ₱42,178 — fixed Oct 13), FIES (R2: 2021 ₱290,120 → 2023 ₱310,550 → 2025 ₱388,220, +25% — baselines relabeled Oct 13; the '+25%' 2023→2025 span was correct), PIDS class bands, BusinessWorld 2025 LFS (R2 unemployment 3.1%).

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

## 7. External audit pass — Oct 13, 2026 (agy deep research, 5 runs, ~1.1M tokens)

28 claims audited against primary sources (PSA, COMELEC, COA, BLGF/DOF, NWPC, DBM, BIR, BSP/BIS, CAAP, official gazette + Rappler/Philstar/Inquirer). Result: 18 CONFIRMED / 5 CONTRADICTED / 4 PARTIAL. Full verdict tables + sources: `docs/dispute-brief-2026-10-13.md`. Fixes applied to the data layer the same day:

1. Cauayan VM row: Leoncio Dalin Jr. → **Benjamin "Benjie" Dy III (Lakas-CMD), 55,716 votes (78.6% of votes cast)** vs Ramirez 15,146 (Rappler/COMELEC). officialNote rewritten to match; ABS-CBN ref title updated.
2. smartCity: "first DOST-designated smart city (2025)" → **Mar 25, 2015** (DOST Smarter PH). Ref title updated.
3. Salary rows ×37: median row re-attributed to PSA OWS 2022 ₱14,588 (LFS publishes no monthly medians); Nurse I ₱42.2K → **₱40.2K (SSL 2025 2nd tranche)** — ₱42,178 was the 2026 3rd-tranche rate; wage-order row got issue/publish/effect dates.
4. Income rows ×37: FIES baselines relabeled (2021 ₱24.2K → 2023 **₱25.9K** → 2025 ₱32.4K); poverty line rescoped (R2 ₱13.4K/mo 2023, ₱15.3K 2025; ₱14.4K is Isabela-province-only).
5. re-posts.js: 9 corrupted psp rows repaired or nulled with notes (rates-as-totals + price-field parse artifacts; usable dated rows now 25: land n=8, agri n=4).
6. re-history.js: RDO-15 zonal floor ₱5 → **₱45/sqm** (DOF/BIR DO 023-2023); FB-corpus stats reconciled (Sep 30: 370 harvested → 181 retained → 25 usable dated rows); land band recomputed on reconciled set (median ₱1,500 holds) and agri band recomputed (n=4, median ≈₱198 — geography-mixed incl. 2 Cagayan-province rows, treat as indicative).
7. re-builds.js: stale "351 posts" → Sep-30/Oct-13 harvest chain.
8. Refs: FIES titles relabeled ×37; Playroll median ref reframed as non-PSA aggregator ×37.
9. Withdrawn during remediation: the "Benjamin Bojie Dy" dispute — the site's officials row already read "Faustino Bojie Dy III"; the variant was an artifact of the audit brief's paraphrase, not a site error.
10. Verification updates: this file's §3 salary/income line corrected; all four data files pass `node --check`.
