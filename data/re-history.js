/* Region 2 Real Estate — Historical price context layer.
   Sources (Sept 30, 2026; DEEP PASS: 370 posts harvested with YEAR filters 2021-2026):
   - BSP RPPI quarterly series (via BIS/theglobaleconomy.com): national index 2008→Q1 2026
   - BIR zonal values RDO 15 (Isabela): Cauayan corridor ₱/sqm, revisions ~2017 → Jul 2023
   - PDIC e-bidding floors (dated cycles, Cauayan residential)
   - Facebook Lot-For-Sale groups (Cauayan/Isabela, owner-direct asks):
     Sep 30 harvest: 370 posts, 31 dated rows; Oct 13 audit reconciliation: re-posts.js now holds 181 rows,
     25 usable dated ₱/sqm rows after psp-parse cleanup (land n=8, agri n=4, house+lot n=6, subdiv n=3, commercial n=4) — asking, not transacted
*/
window.RE_HISTORY = {
  audit_note: "Oct 13, 2026 primary-source audit (docs/dispute-brief-2026-10-13.md): zonal floor corrected ₱5→₱45 (DO 023-2023), FB-corpus stats reconciled (370 harvested / 181 retained / 25 usable dated rows after psp-parse fixes), bands recomputed from the reconciled set; RPPI series verified exact vs BSP/BIS.",
  national: { audit_note_q: "Oct 13 agy audit: 2024Q4/2025Q2/2025Q4/2026Q1 + YoY all verified exact vs BIS nominal RPPI (base 2010=100). Two early rows (2015Q1 148.2, 2020Q3 181.8) do NOT match the current BIS nominal series (151.48 / 208.51 resp.) — likely pre-2026 BIS revisions or base-year blend; treat pre-2024 rows as indicative, 2024+ rows as verified.",
    source: "BSP Residential Property Price Index (RPPI) via BIS",
    series: [
      ["2008 Q1", 95.8], ["2015 Q1", 148.2], ["2018 Q4", 187.5], ["2020 Q3", 181.8],
      ["2020 Q4", 186.1], ["2021 Q4", 203.4], ["2022 Q4", 224.7], ["2023 Q4", 259.93],
      ["2024 Q1", 259.6], ["2024 Q2", 283.79], ["2024 Q3", 288.06], ["2024 Q4", 285.32],
      ["2025 Q1", 292.78], ["2025 Q2", 305.21], ["2025 Q3", 293.51], ["2025 Q4", 289.79],
      ["2026 Q1", 305.97]
    ],
    yoy_notes: [["Q4 2023", "+3.2% (vs Q4 2022 224.7, BIS-corrected base)"], ["Q4 2024", "+9.77% (recheck vs corrected 259.93 base)"], ["Q1 2025", "+7.56%"], ["Q2 2025", "+7.55%"], ["Q3 2025", "+1.9%"], ["Q4 2025", "+1.6% (six-year low; −0.2% real)"]]
  },
  zonal: {
    source: "BIR zonal values, RDO 15 (Isabela) — Cauayan City corridor",
    points: [
      ["~2017 schedule", "CR1 commercial corridor ≈ ₱10,000–12,500/sqm (DO 17-02 era)"],
      ["Jul 2023 schedule (eff.)", "Maharlika Hwy CR1 ₱26,250/sqm peak; Roxas/G. Villarta CR2 ₱7,500–10,500; barangay RR interior ₱220–300/sqm; city range ₱45–26,250/sqm (floor ₱45/sqm agri class per DOF/BIR DO 023-2023 — pre-audit text said ₱5, a transcription error fixed Oct 13)"]
    ],
    note: "zonal = tax floor below market; 2017→2023 prime-corridor jump ≈ 2.2–2.6× is the best local appreciation anchor available"
  },
  foreclosed: {
    source: "PDIC e-bidding / bank-foreclosed (dated cycles)",
    points: [
      ["Oct 15, 2026 cycle", "San Pablo, Cauayan residential — floor ₱1,440,000"],
      ["Camella Cauayan foreclosed (c.2025 listing)", "2BR 2-storey 70sqm/40sqm ₱1.69M as-is"]
    ]
  },
  group_asks: {
    source: "Facebook Lot-For-Sale groups (Isabela) — owner-direct asking prices",
    harvest: "Sep 30: 370 posts / 31 dated rows; Oct 13 audit: 181 rows retained, 25 usable dated rows after psp-parse cleanup (land n=8, agri n=4)",
    land_only_by_year: [
      ["2021", "n=1 · ₱1,143/sqm (Cauayan-ish farm-adjacent 1,400sqm ₱1.6M)"],
      ["2022", "n=4 · ₱1,000–4,000/sqm (Gamu/Marangal/Echague/Centro)"],
      ["2023", "n=1 · ₱3,507/sqm (Gamu commercial-adjacent 5,360sqm ₱18.8M)"],
      ["2024", "n=5 · ₱500–6,000/sqm (Gamu ₱1,500×2 · Malini/Santiago ₱3,500 · PTPA ₱6,000 · Cauayan rush ₱500)"],
      ["2025", "n=2 · ₱500 (Echague rush) → ₱37,488 (Sacramento prime 1,067sqm ₱40M)"]
    ],
    land_band: "land-only asks (Oct 13 reconciled set, n=8): p25 ≈₱775 · median ₱1,500 · p75 ≈₱2,387 · top ₱11,792 — wide by design (rush rural → prime suburban); pre-audit band (p25 ₱1,143/p75 ₱6,000/top ₱37,488) was computed on the Sep-30 harvest and is not reproducible from the current file",
    agri_band: "agri/farm asks (Oct 13 reconciled set, n=4): median ≈ ₱198/sqm (range ₱62–400, incl. Cagayan rows) — roughly 8-24x cheaper than residential median; pre-audit figure (₱44, n=10) was Sep-30-harvest era",
    notable_rows: [
      "Isio (Cauayan, national highway) 125sqm ₱2,800/sqm",
      "Near OLPC Cauayan 404sqm ₱2M (₱4,950/sqm)",
      "926sqm ₱950K (₱1,025/sqm)",
      "Pinoma 450sqm prime ₱1M (₱2,222/sqm)",
      "Brgy. San Isidro 600sqm ₱1,500/sqm (video)",
      "Nungnungan/Pinoma line-conversion area 8h outages correlate with cheaper asks",
      "Ramon (Malini/Malvar) 500sqm near Robinson Mall — priced on inquiry",
      "Santiago corner 151sqm house+lot ₱3.2M (Feb 2026 era)"
    ]
  }
}