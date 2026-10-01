# Region 2 Real Estate: historical data feasibility study (Sept 30, 2026)

## Question
Can we add *historical* real-estate price data to Region 2 Info, with accuracy good enough to publish?

## Short answer
**Yes for a 5–10 year index-level history (regional + zonal anchors), partially for LGU-level, and only going forward for listing-level precision.** LGU-level *time series* of actual transaction prices do not exist publicly anywhere for Isabela; anything more precise than trend direction would be false precision. The recommended design: a **trend layer** (national + regional + zonal anchors + foreclosed benchmarks) beneath the live listing snapshot we already have, clearly labeled by data vintage.

## Data sources assessment

### 1. BSP Residential Property Price Index (RPPI) — the strongest anchor
- Quarterly series since 2008 (BIS/BSP), ~20 years of history at national + NCR + AONCR ("areas outside NCR") level.
- Latest shape (Q1 2026 index 305.97; Q4 2025 289.79; series available via theglobaleconomy.com/BIS/macroMicro CSVs — downloadable without login).
- 2025–2026 story: growth decelerated to a six-year low (+1.6% YoY Q4 2025 nominal, −0.2% real), after +9.77% Q4 2024 and +7.56% Q1 2025.
- **Limitation: floor is "Isabela-level"? No — floor is AONCR (all outside NCR).** BSP does not publish per-province indices.
- Use: national/regional *trend curve* multiplier, not a provincial price.

### 2. BIR zonal values — the provincial/local anchor WITH history
- RDO 15 (Naguilian, Isabela — covers Cauayan + all 35 other LGUs). Current schedule effective **July 2023** (DO 2023 series: Cauayan 1,985 entries, ₱5–₱26,250/sqm; Maharlika Hwy CR1 ₱26,250 peak).
- **Previous revision**: the 2023 schedule is the first comprehensive update since ~2017 (DO 17-02 first-revision era; zonalvaluesph.altervista.org indexes old DOs). Two snapshots ≈ 6 years apart give us a genuine **local appreciation rate** (Cauayan centro CR1/RG1 corridors), which can be combined with RPPI to interpolate intermediate years.
- Note: RDO15's own history is complicated by the Ilagan→Naguilian renaming; per-barangay historical schedules need the FOI/BIR PDF archive (bir-cdn.bir.gov.ph pattern works for some RDOs).

### 3. Foreclosed/banked assets — dated, real-world (transaction-grade) points
- **PDIC e-bidding**: dated cycles (e.g. Oct 15, 2026 bidding: San Pablo, Cauayan residential floor price ₱1,440,000). Historical bid results are published after each cycle (sold/unsold + price). Years of archives.
- **DBP foreclosed assets**: already in the pack (Brgy. San Antonio agri lots).
- Banks (Camella foreclosed via Lamudi ₱1.69M) — mostly undated, but bank-owned pricing changes rarely (re-pricing cycles ~6–12 mo).
- Use: benchmark floor prices; PDIC archives give the only dated *transaction attempts* series.

### 4. Listing aggregators — the present only (that's our current pack)
- Wayback Machine has **no archived snapshots** of DotProperty/Lamudi Cauayan pages (checked the API — zero snapshots).
- OnePropertee carries listing dates ("March 2023") — individually datable, but coverage is random and prices are asks.
- Conclusion: **listing-level history cannot be back-cast**; from today forward, if we snapshot the 37 LGUs quarterly, by mid-2027 we'll have the beginnings of a real series (our own Wayback-style archive).

### 5. Reports (Colliers, Santos Knight Frank, Lamudi reports)
- National/Metro-level analysis; regional mentions only in passing. Not usable for Isabela tables, but their YoY percentages validate the RPPI trend.

## Accuracy assessment (what "good" looks like)
| Layer | Time depth | Isabela/Cauayan precision | Verdict |
|---|---|---|---|
| BSP RPPI national/AONCR | 2008→ | trend only (±) | publish as *context curve* |
| BIR zonal 2017→2023 revision | 2 points | barangay-level, official | publish as appreciation anchor |
| PDIC/pdci foreclosed floors | ~5+ years of cycles | property-level, dated | publish as benchmark points |
| Aggregator asks | now only (Sept 2026) | listing-level | publish as *current snapshot* (already done) |
| Our own quarterly rescans | starts now | LGU-level | the future series |

**Composite accuracy**: For "what happened to prices in Cauayan since ~2018" we can offer a defensible trend narrative (zonal 2017→2023 jump + RPPI path + foreclosed floors), accurate to the band level (±20–30%), NOT to the median-price level. That's the honest ceiling for provincial PH data — even Lamudi doesn't publish Isabela-level medians.

## Recommended implementation (if Justin green-lights)
1. New `realEstate.history` array per pack (or a shared `data/re-history.js`): ~4 rows — zonal revision points (2017/2023 with ₱/sqm), RPPI milestones mapped, PDIC floor points, foreclosed comps. Sources appended as refs (append-only rule).
2. UI: a small "Historical context" block inside Real Estate tab — timeline-style (matches our existing `.timeline` component) instead of a new chart dependency.
3. Start the quarterly re-scrape cron for the 37 LGUs' listing pages (this becomes the only real historical series that will ever exist for these towns; store snapshots with timestamps in `data/utilities/`-style JSON).
4. FOI account to pull ERC-style official archives for the zonal PDF history.

## Not possible (do not promise)
- Per-LGU median-price time series (no data source exists)
- Transaction-level price archives (PH has no public land registry price log; deed transfers are private)
- Rental-yield history (no source), land-value registries per barangay over time (assessor data unpublished)