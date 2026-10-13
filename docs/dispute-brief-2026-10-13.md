# Dispute Brief — Region 2 Info Claims Audit
**Date:** 2026-10-13 · **Method:** independent deep-research audit (Antigravity CLI `agy`, 5 web-research runs, ~1.1M tokens; primary sources: PSA, COMELEC, COA, BLGF/DOF, NWPC/DOLE, DBM, BIR, BSP/BIS, CAAP, official gazette, Rappler/Philstar/Inquirer/ABS-CBN) + local file cross-checks.
**Scope:** 28 claims extracted from `data/lgu-data.js` (Cauayan pack), `data/re-history.js`, `data/re-builds.js`, `data/utilities-cauayan.js` → `research/audit/claims-brief.md`.

## Scoreboard
**CONFIRMED:** 18 · **CONTRADICTED:** 5 · **PARTIAL:** 4 · **flagged for internal inconsistency:** 1 (overlaps R2I-28)
The site's data layer is broadly accurate — the disputes below are real, but they are corrections, not a takedown.

---

## DISPUTED CLAIMS (evidence-backed)

### D-1 · Vice Mayor of Cauayan (2025) — R2I-09 — CONTRADICTED
- **Site (lgu-data.js political block):** Vice Mayor Leoncio Dalin Jr. (page's own officialNote flags a conflict with Rappler).
- **Researched:** **Benjamin "Benjie" Dy III (Lakas-CMD) won the 2025 vice-mayoralty with 55,716 votes** (59.4% of registered voters / 78.6% of votes cast) vs Diosdado Ramirez (WPP) 15,146. Dalin Jr. did not win in 2025 (a relative, Dalin III, won a councilor seat).
- **Sources:** Rappler 2025 Cauayan returns (May 15, 2025); COMELEC; ABS-CBN.
- **Correction:** replace VM row with Benjie Dy III; the site's own note admits Rappler says exactly this.

### D-2 · "First DOST-designated smart city (2025)" — R2I-04 — CONTRADICTED
- **Site:** First DOST-designated smart city in the Philippines (2025) — lgu-data.js L9.
- **Researched:** designation was **March 25, 2015** (DOST "Smarter Philippines" program).
- **Sources:** DOST Region 2 (2015-03-25); cityofcauayan.gov.ph.
- **Correction:** change 2025 → 2015. Ten-year factual error.

### D-3 · "Nurse I ₱42.2K (SG 15)" attributed to 2024-26 ladder — R2I-17 — CONTRADICTED
- **Site (lgu-data.js L105):** Nurse I ₱42.2K (SG 15). **Internal conflict:** VERIFICATION.md §3 says SSL 2025 SG-15 = ₱40,208.
- **Researched:** SSL 2025 (EO 64 s. 2024, second tranche, 2025) SG-15 Step 1 = **₱40,208/mo**; ₱42,178 (~₱42.2K) is the **2026 third-tranche** rate.
- **Sources:** DBM NBC No. 597 (Jan 20, 2025); EO 64, s. 2024 (official gazette).
- **Correction:** VERIFICATION.md was right; lgu-data.js used the 2026 rate without a year label. Fix value or add "(2026 tranche)".

### D-4 · "₱13,000/mo median wage (PSA LFS)" — R2I-16 — CONTRADICTED
- **Site (lgu-data.js L101):** "₱13,000/mo — the true 'typical' wage" attributed to PSA.
- **Researched:** PSA LFS does not publish monthly median wages; the official statistic is PSA OWS **median monthly basic pay ₱14,588 (2022 OWS)** (₱13,646 in 2020). ₱13,000 appears to be an aggregator estimate with wrong attribution.
- **Sources:** PSA OpenSTAT; PSA OWS series.
- **Correction:** cite OWS median with year, or drop the PSA attribution. (Note: the editorial point — average ₱21,544 overstates the typical wage — survives; the number itself doesn't.)

### D-5 · Cauayan BIR zonal floor "₱5/sqm" — R2I-25 — CONTRADICTED (one char)
- **Site (re-history.js zonal):** "city range ₱5–26,250/sqm".
- **Researched:** DOF/BIR DO 023-2023 (Apr 24, 2023, eff. Jul 20, 2023): Cauayan floor = **₱45/sqm** (agricultural class); peak ₱26,250/sqm Maharlika CR1 confirmed.
- **Sources:** DOF DO 023-2023 / UP Law Center ONAR; BIR; zonalvalue.ph.
- **Correction:** ₱5 → ₱45 (dropped-digit transcription).

## PARTIAL / MISLABELED

### P-1 · House Speaker's legal name — R2I-10 — PARTIAL
Site: "Benjamin 'Bojie' Dy III, Speaker since Sep 2025." Speakership (Sep 17, 2025, succeeding Romualdez) confirmed; legal name is **Faustino "Bojie" Dy III** — "Benjamin Dy" was his late brother (d. 2013). Fix the name.

### P-2 · FIES Region 2 baseline — R2I-18 — PARTIAL
Site: R2 avg family income ₱290,120 (2023) → ₱388,220 (2025), +25% "fastest-growing region." The **2025 FIES release exists** (PSA Ref 2026-275, Aug 26, 2026) and ₱388,220 + fastest-region both hold — but ₱290,120 is the **2021** figure; the 2023 actual is **₱310,550**. relabel baseline year.

### P-3 · Poverty line scope — R2I-19 — PARTIAL
Site: "poverty line ₱14.3–14.6K/mo" presented as R2-regional. Researched: ₱14,375/mo is **Isabela province's 2023** threshold; Region 2 overall was **₱13,400 (2023)** and **₱15,273 (2025)**. Scope mislabel.

### P-4 · FB asking-price methodology + internal count mismatch — R2I-28 — PARTIAL
- Methodological (conceded by site): 370 harvested FB posts / 31 priced rows are **seller asks, not transacted values** under Philippine Valuation Standards — the site already labels them "asking, not appraisals." Any dispute of the market tab leans on this; the labels must travel with every reuse of the numbers.
- **New internal inconsistency found by this audit:** `re-history.js` (2 places) says **"370 posts harvested"**, `re-builds.js` L81 says "**351 posts, Sept-Oct 2026**" for the same FB corpus. One of the two counts is stale or wrong. Local check of `re-posts.js`: 181 entries currently in-file (87 land-type + 21 farm/agri typed among them), separate from the harvest-size claim — headers across the three files do not reconcile. Reconcile corpus counts or cite the discrepancy date.

## VERIFIED CORRECT (summary — the 18 confirmed)
- **Demographics/governance:** 2024 POPCEN 143,539 pop / 36,399 HH / ~427/km² (R2I-01); 65 brgys (02); RA 9017 cityhood, plebiscite Mar 30 2001 (03); 2nd city income class (RA 11964 reclass eff. 2025), revenue ₱1,512M / assets ₱3,634M 2024 per COA (05); poverty 11.71% 2023 (PSA CMPE, rel. Feb 6, 2026) (06); 93,785 voters 2025 (07).
- **Elections/dynasty:** Caesar Dy Jr. 44,437 (59.95% of votes cast) vs Bill Dy 29,684 — two-candidate race (08); Inno Dy V 6th-district rep 2019→2025, now Echague mayor (11); Dy Sr.'s 18-year governorship = 1972–86 + 1988–92, LP→KBL (12); ten Dys in office 2022 (PNA/Philstar) (13).
- **Wages:** RTWPB 2-24 ₱500/day both sectors eff. Nov 5, 2025 (issued Oct 8, published Oct 20) (14); OWS 2024 average ₱21,544 (₱20,309 basic + ₱1,235 allowances) (15).
- **Utilities:** ISELCO-I residential **₱12.9704/kWh (Sep 2026)** — exact match to cooperative's published schedule (20).
- **Real estate/builds:** BSP RPPI quarters incl. Q1-2026 305.97 (24); PSA construction-statistics declared rates to the centavo — single houses ₱7,059.35, all-residential ₱8,092.85 (Feb 2026), ₱12,110.29 (Jul 2025) (26); H&H Q1-2026 + Arcadis 2026 Manila terrace bands exact (27).
- **Aviation/BPO/edu:** PAL+CebPac daily MNL–CYZ, ₱160M night-rating, Park Inn 151 rooms Q2-2027 (21); Everise first R2 BPO Mar 8, 2024, 366→1,000, ₱16K+ (22); NU 20-campus-by-2028 incl. Isabela (23).

## Method & limitations
- Snapshots (utilities scrape 2026-10-04; listings Sep 2026) are time-indexed; they verify as-of their dates, not today.
- RDO-15 aggregator sources (ren.ph, zonalvalue.ph) were cross-checked against DOF/BIR DO 023-2023 text — keep BIR-issued documents as the citation of record.
- Full per-claim verdict tables with URLs: generated from audit runs A/B/C/D on 2026-10-13 (raw JSON in /tmp/agy_audit_*.json, 24h retention).
