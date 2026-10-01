/* Region 2 Real Estate — Historical price context layer.
   Sources (Sept 30, 2026; DEEP PASS: 370 posts harvested with YEAR filters 2021-2026):
   - BSP RPPI quarterly series (via BIS/theglobaleconomy.com): national index 2008→Q1 2026
   - BIR zonal values RDO 15 (Isabela): Cauayan corridor ₱/sqm, revisions ~2017 → Jul 2023
   - PDIC e-bidding floors (dated cycles, Cauayan residential)
   - Facebook Lot-For-Sale groups (Cauayan/Isabela, owner-direct asks):
     370 posts harvested; 31 dated ₱/sqm rows (land-only n=13, agri n=10) — asking, not transacted
*/
window.RE_HISTORY = {
  national: {
    source: "BSP Residential Property Price Index (RPPI) via BIS",
    series: [
      ["2008 Q1", 95.8], ["2015 Q1", 148.2], ["2018 Q4", 187.5], ["2020 Q3", 181.8],
      ["2020 Q4", 186.1], ["2021 Q4", 203.4], ["2022 Q4", 224.7], ["2023 Q4", 253.4],
      ["2024 Q1", 259.6], ["2024 Q2", 283.79], ["2024 Q3", 288.06], ["2024 Q4", 285.32],
      ["2025 Q1", 292.78], ["2025 Q2", 305.21], ["2025 Q3", 293.51], ["2025 Q4", 289.79],
      ["2026 Q1", 305.97]
    ],
    yoy_notes: [["Q4 2024", "+9.77%"], ["Q1 2025", "+7.56%"], ["Q2 2025", "+7.55%"], ["Q3 2025", "+1.9%"], ["Q4 2025", "+1.6% (six-year low; −0.2% real)"]]
  },
  zonal: {
    source: "BIR zonal values, RDO 15 (Isabela) — Cauayan City corridor",
    points: [
      ["~2017 schedule", "CR1 commercial corridor ≈ ₱10,000–12,500/sqm (DO 17-02 era)"],
      ["Jul 2023 schedule (eff.)", "Maharlika Hwy CR1 ₱26,250/sqm peak; Roxas/G. Villarta CR2 ₱7,500–10,500; barangay RR interior ₱220–300/sqm; city range ₱5–26,250/sqm"]
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
    harvest: "370 posts w/ year filter 2021-2026; 31 dated ₱/sqm rows",
    land_only_by_year: [
      ["2021", "n=1 · ₱1,143/sqm (Cauayan-ish farm-adjacent 1,400sqm ₱1.6M)"],
      ["2022", "n=4 · ₱1,000–4,000/sqm (Gamu/Marangal/Echague/Centro)"],
      ["2023", "n=1 · ₱3,507/sqm (Gamu commercial-adjacent 5,360sqm ₱18.8M)"],
      ["2024", "n=5 · ₱500–6,000/sqm (Gamu ₱1,500×2 · Malini/Santiago ₱3,500 · PTPA ₱6,000 · Cauayan rush ₱500)"],
      ["2025", "n=2 · ₱500 (Echague rush) → ₱37,488 (Sacramento prime 1,067sqm ₱40M)"]
    ],
    land_band: "2021-2025 land-only asks: p25 ₱1,143 · median ₱1,500 · p75 ₱6,000 · top ₱37,488 — wide by design (rush rural → prime suburban)",
    agri_band: "agri/farm asks 2022-2025: median ≈ ₱44/sqm (n=10; range ₱26-116) — 30-500x cheaper than residential",
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