# Audit Verdicts: Region 2 Real Estate Data Layers (Batch B Claims)

## 1. BSP RPPI Series (data/re-history.js national)

| Claim | Site Value | Researched Value | Verdict | Source Name + URL + Date |
|---|---|---|---|---|
| 2008 Q1 RPPI | 95.8 | 95.8 (BIS nominal residential property price index, base 2010=100; series historical minimum) | CONFIRM | BIS / TheGlobalEconomy (https://www.theglobaleconomy.com/Philippines/house_price_index/ / https://data.bis.org/topics/RPP), Mar 2026 |
| 2015 Q1 RPPI | 148.2 | 151.48 in BIS nominal index (Q4 2014 was 147.81; Q2 2015 was 155.20; 148.2 does not match BIS series) | CONTRADICT | BIS Residential Property Price Index / TheGlobalEconomy (https://www.theglobaleconomy.com/Philippines/house_price_index/), Mar 2026 |
| 2020 Q3 RPPI | 181.8 | 208.51 in BIS nominal index (BSP official RREPI base Q1 2014=100 was 131.2, down -0.4% YoY; 181.8 does not match either series) | CONTRADICT | BIS (https://www.theglobaleconomy.com/Philippines/house_price_index/) / BSP RREPI Q3 2020 Release (https://www.bsp.gov.ph), Dec 2020 |
| 2024 Q4 RPPI & YoY | 285.32 (+9.77% yy) | 285.32 (+9.77% YoY vs revised BIS Q4 2023 = 259.93: (285.32 - 259.93) / 259.93 = +9.768%) | CONFIRM | BIS Residential Property Price Index / TheGlobalEconomy (https://www.theglobaleconomy.com/Philippines/house_price_index/), Mar 2026 |
| 2025 Q2 RPPI | 305.21 | 305.21 (+7.55% YoY vs Q2 2024 = 283.79: (305.21 - 283.79) / 283.79 = +7.548%) | CONFIRM | BIS Residential Property Price Index / TheGlobalEconomy (https://www.theglobaleconomy.com/Philippines/house_price_index/), Mar 2026 |
| 2025 Q4 RPPI & YoY | 289.79 (+1.6% yy, six-year low) | 289.79 (+1.57% ≈ +1.6% YoY vs Q4 2024 = 285.32, six-year low; -0.2% real inflation-adjusted) | CONFIRM | BIS Residential Property Price Index / TheGlobalEconomy (https://www.theglobaleconomy.com/Philippines/house_price_index/), Mar 2026 |
| 2026 Q1 RPPI | 305.97 | 305.97 (+4.51% YoY vs Q1 2025 = 292.78: (305.97 - 292.78) / 292.78 = +4.505%) | CONFIRM | BIS Residential Property Price Index / TheGlobalEconomy (https://www.theglobaleconomy.com/Philippines/house_price_index/), Mar 2026 |
| Internal Series Reconciliation | Q4 2024 YoY +9.77% vs stored Q4 2023 baseline | Internal conflict: +9.77% YoY requires true BIS Q4 2023 base (259.93); re-history.js L16 mislabeled Q4 2023 as 253.4 (which was Q1 2023 = 253.41; 285.32 vs 253.4 yields +12.60%) | PARTIAL | re-history.js L16-21 (file:///Users/mrkrabs/.openclaw/workspace/region2-info/data/re-history.js) vs BIS Series (https://www.theglobaleconomy.com/Philippines/house_price_index/), Oct 2026 |

## 2. BIR Zonal Values RDO 15 (eff Jul 20 2023, DO 023-2023)

| Claim | Site Value | Researched Value | Verdict | Source Name + URL + Date |
|---|---|---|---|---|
| Schedule Effectivity | Eff Jul 20, 2023 (DO 023-2023), RDO 15 Naguilian/Isabela | Department Order No. 023-2023 signed Apr 24, 2023, published / effective Jul 20, 2023 for BIR RDO 15 | CONFIRM | DOF DO 023-2023 / UP Law Center ONAR (https://law.upd.edu.ph/onar/), Jul 2023 |
| Maharlika Hwy Peak | Maharlika Hwy CR1 Cauayan peak 26,250 php/sqm | ₱26,250/sqm Commercial 1 (CR1) peak along Maharlika Highway (District II / San Fermin corridor) | CONFIRM | BIR RDO 15 Schedule / ZonalValue.ph (https://zonalvalue.ph/isabela/cauayan-city), Jul 2023 |
| Barangay RR Interior | RR interior 220-300 php/sqm | ₱220–300/sqm Residential Regular (RR) interior lots across Cauayan City rural barangays | CONFIRM | BIR RDO 15 Schedule / ZonalValue.ph (https://zonalvalue.ph/isabela/cauayan-city), Jul 2023 |
| City Zonal Floor | City range floor 45 php/sqm (agri) | ₱45/sqm agricultural floor (class A50, unirrigated riceland/pastureland) | CONFIRM | DOF DO 023-2023 / BIR Zonal Values Portal (https://www.bir.gov.ph), Jul 2023 |
| Pre-Audit Transcription Fix | City floor cited as 45 php/sqm (corrected from dropped-digit 5 php/sqm) | Confirmed: initial draft text read "₱5–26,250/sqm"; remediated to ₱45/sqm per official schedule text | CONFIRM | dispute-brief-2026-10-13.md (file:///Users/mrkrabs/.openclaw/workspace/region2-info/docs/dispute-brief-2026-10-13.md#L37-L42), Oct 2026 |

## 3. Facebook Corpus (re-posts.js & re-history.js)

| Claim | Site Value | Researched Value | Verdict | Source Name + URL + Date |
|---|---|---|---|---|
| Raw Harvest Count | 370 posts harvested Sep-Oct 2026 | 370 raw social media posts harvested in deep scraping pass across Isabela Facebook property groups | CONFIRM | re-history.js header (file:///Users/mrkrabs/.openclaw/workspace/region2-info/data/re-history.js#L2-L8), Sep/Oct 2026 |
| Retained Dataset Rows | re-posts.js retains 181 rows | Exactly 181 JavaScript object records retained in window.RE_POSTS | CONFIRM | re-posts.js (file:///Users/mrkrabs/.openclaw/workspace/region2-info/data/re-posts.js), Oct 2026 |
| Usable Dated PHP/sqm Rows | 25 usable dated php/sqm rows | Exactly 25 rows have valid numerical price-per-sqm (psp) after removing 9 parse artifacts / corrupted totals | CONFIRM | re-posts.js (file:///Users/mrkrabs/.openclaw/workspace/region2-info/data/re-posts.js) / VERIFICATION.md §7, Oct 2026 |
| Category Breakdown | Land n=8, agri n=4, house+lot n=6, subdiv n=3, commercial n=4 | Exact count match in re-posts.js: land=8, farm/agri=4, house+lot=6, subdivision/pre-selling=3, commercial=4 (sum = 25) | CONFIRM | re-posts.js dataset inspection (file:///Users/mrkrabs/.openclaw/workspace/region2-info/data/re-posts.js), Oct 2026 |
| Dating, Scope & Valuation Standards | "Dated" rows; Isabela focus; asking prices | 23 of 25 rows have harvest-inferred "2026*" rather than confirmed post timestamps (only 2 rows dated 2022/2025); geography includes Cagayan (Tuguegarao, Piat) and Quirino (Diffun); owner asks ≠ transacted market values under Philippine Valuation Standards (PVS DO 37-09) | PARTIAL | DOF/BLGF Philippine Valuation Standards DO 37-09 (https://blgf.gov.ph) / IVSC (https://www.ivsc.org), Oct 2026 |

## 4. Construction Costs & Benchmarks (data/re-builds.js)

| Claim | Site Value | Researched Value | Verdict | Source Name + URL + Date |
|---|---|---|---|---|
| PSA Single Houses (Feb 2026) | Single houses 7,059.35 php/sqm (Feb 2026) | ₱7,059.35/sqm average declared value for single-type residential houses | CONFIRM | PSA Construction Statistics from Approved Building Permits: Feb 2026 (https://psa.gov.ph/content/construction-statistics-approved-building-permits-february-2026), Apr 16, 2026 |
| PSA All-Residential (Feb 2026) | All-residential 8,092.85 php/sqm (Feb 2026) | ₱8,092.85/sqm average declared value across all residential building permits | CONFIRM | PSA Construction Statistics from Approved Building Permits: Feb 2026 (https://psa.gov.ph/content/construction-statistics-approved-building-permits-february-2026), Apr 16, 2026 |
| PSA Residential (Jul 2025) | All-residential 12,110.29 php/sqm (Jul 2025) | ₱12,110.29/sqm average declared value for residential construction (non-residential was ₱11,082.62/sqm) | CONFIRM | PSA Construction Statistics from Approved Building Permits: Jul 2025 (https://psa.gov.ph/statistics/construction/pcs/node/1684080822), Sep 2025 |
| Cauayan=Santiago Benchmark | Cauayan=Santiago standard commercial 29,750 php/sqm (constructioncost.ph) | Value ₱29,750/sqm confirmed (₱35,000 baseline × 0.85 regional multiplier), but mislabeled as "commercial": constructioncost.ph is strictly a residential house-building calculator; ₱29,750 is for Standard RESIDENTIAL finish | CONTRADICT | ConstructionCostPH Cauayan & Santiago Models (https://constructioncost.ph/cost/cauayan / https://constructioncost.ph/cost/santiago), 2026 |
| R2 Regional Cost Factor | R2 regional factor -17-20% vs NCR at standard tier | -17.4% to -19.6% confirmed as derived planning estimate: Isabela standard finish (₱29,050–29,750/sqm) vs Manila design-build standard bands (₱35,000–37,000/sqm) | CONFIRM | re-builds.js L30-33 (file:///Users/mrkrabs/.openclaw/workspace/region2-info/data/re-builds.js#L30-L33) / ArchitectManila / JEMM Builders, 2026 |
| Wage Floor Gap Arithmetic | Wage floor 500/day vs NCR 695 = -28% | R2 floor ₱500.00/day (RTWPB 2-24, eff. Nov 5, 2025); NCR floor ₱695.00/day (NCR-26 anchor). Exact arithmetic: (500 - 695) / 695 = -195 / 695 = -28.05755% ≈ -28.06% (rounds to -28%) | CONFIRM | NWPC / RTWPB Region II Wage Order No. 2-24 (https://nwpc.dole.gov.ph/region-ii/) / NCR Wage Orders, Oct/Nov 2025 |
| H&H Q1-2026 Manila Terrace | H&H Q1-2026 Manila terrace 43,110-55,355 php/sqm CFA | ₱43,110–55,355/sqm Construction Floor Area (CFA) for terraced/row houses (average standard), Metro Manila baseline | CONFIRM | Hearn & Hearn Philippine Construction Cost Data Q1 2026 (https://www.hhconsulting.com.ph/post/philippine-construction-cost-data-q1-2026), Jan 2026 |
| Arcadis 2026 Manila Terrace | Arcadis 2026 terrace 48,301-59,015 incl M&E | ₱48,301–59,015/sqm CFA including M&E for terraced houses (average standard), Metro Manila baseline | CONFIRM | Arcadis Philippines Construction Cost Handbook 2026 (https://media.arcadis.com/-/media/project/arcadiscom/com/perspectives/asia/publications/cch/2026/ph-cost-handbook-2026.pdf), Jan 2026 |
