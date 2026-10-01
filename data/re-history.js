/* Region 2 Real Estate — Historical price context layer.
   Sources (Sept 30, 2026):
   - BSP RPPI quarterly series (via BIS/theglobaleconomy.com): national index 2008→Q1 2026
   - BIR zonal values RDO 15 (Isabela): Cauayan CR1 corridor ₱/sqm, revisions ~2017 → Jul 2023
   - PDIC e-bidding floors (dated cycles, Cauayan residential)
   - Facebook Lot-For-Sale groups (Cauayan/Isabela, owner-direct asks; Sept 30 2026 harvest:
     159 posts, 20+ with computable ₱/sqm — asking prices, not transactions)
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
    yoy_notes: [
      ["Q4 2024", "+9.77%"], ["Q1 2025", "+7.56%"], ["Q2 2025", "+7.55%"],
      ["Q3 2025", "+1.9%"], ["Q4 2025", "+1.6% (six-year low; −0.2% real)"]
    ]
  },
  zonal: {
    source: "BIR zonal values, RDO 15 (Isabela) — Cauayan City corridor",
    points: [
      ["~2017 schedule", "CR1 commercial corridor ≈ ₱10,000–12,500/sqm (DO 17-02 era)"],
      ["Jul 2023 schedule (eff.)", "Maharlika Hwy CR1 peak ₱26,250/sqm; Roxas/G. Villarta CR2 ₱7,500–10,500; barangay interior RR ₱220–300/sqm; range citywide ₱5–26,250/sqm (1,985 BIR entries, 76 barangays)"]
    ],
    note: "zonal = tax floor, tracks below true market; the 2017→2023 revision jump (≈2.2–2.6× on prime corridors) is the best local appreciation anchor available"
  },
  foreclosed: {
    source: "PDIC e-bidding / bank-foreclosed (dated cycles)",
    points: [
      ["Oct 15, 2026 cycle", "San Pablo, Cauayan residential — floor ₱1,440,000"],
      ["Camella Cauayan foreclosed (c.2025 listing)", "2BR 2-storey 70sqm/40sqm ₱1.69M as-is"]
    ]
  },
  group_asks: {
    source: "Facebook lot-sale groups (Isabela) — owner-direct asking prices, Sept 30 2026 harvest of 159 posts",
    date_span: "undated asks (mostly 2025–2026 era posts); asking ≠ transacted",
    residential_median_ask: "≈ ₱2,000–5,000/sqm (41 postings; p25 ₱600 · p50 ₱2,000 · p75 ₱5,000 · p90 ₱15,441)",
    cauyan_tagged_residential: "≈ ₱5,000/sqm median (5 postings)",
    agri_farm_median_ask: "≈ ₱78/sqm (4 postings of 3–16 ha)",
    notable_rows: [
      "Isio (Cauayan, national highway) 125sqm ₱2,800/sqm",
      "Near OLPC Cauayan 404sqm ₱2M (≈₱4,950/sqm)",
      "Unnamed 926sqm ₱950K (₱1,025/sqm)",
      "Pinoma 450sqm prime ₱1M (₱2,222/sqm)",
      "Santiago City corner 151sqm house&lot ₱3.2M",
      "Ramon (Malini/Malvar) 500sqm prime near Robinson ₱ — priced on inquiry"
    ]
  }
}