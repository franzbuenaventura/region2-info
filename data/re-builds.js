// re-builds.js — PH + Region 2/Isabela construction build-cost bands (₱/sqm of FLOOR AREA)
// Data layer for the Region 2 - Info site. Loaded like data/re-posts.js (window.RE_BUILDS).
// Compiled 2026-10-04 from 20+ web searches over government, quantity-surveying-firm and PH
// design-build sources. See note + per-row evidence tags.
window.RE_BUILDS = {
  generated: "2026-10-04",
  note: "BUDGET-RATE bands for construction cost per sqm of floor area (labor+materials for the finished structure). Excluded everywhere: land, architect+engineer fees 8-12% [12], building permits (provincial cities ₱40-65K vs Manila ₱80-150K per 150sqm build [10]; other guides ₱20-80K [52] / ₱30-100K+ [12]), fence/gate/site works, utility connections, furniture. These are quotation-guide and tender-benchmark figures — like asking prices, they are NOT transacted contracts; a single quote is not a market. PSA permit averages are owner-DECLARED values on which permit fees are computed — under-declared by design (Feb 2026 single houses ₱7,059.35/sqm declared [5] vs ₱18K+ for a bare provincial build) — treat PSA as a floor indicator on raw declared structure, never a turnkey market price [5]. DHSUD socialized price ceilings (₱844,440-950,000 per house-and-lot, land included) [43][44] are SELLING-price caps, not construction rates. Scope note: Arcadis/Hearn&Hearn figures are Manila ₱/sqm of CFA (construction floor area); PH builder-guide figures are ₱/sqm floor area of a finished house. Tier weighting used: QS-firm + government data (Arcadis, H&H, PSA) > licensed design-build publications > price-list blogs > FB anecdotes. constructioncost.ph R2 city pages are a single vendor's model output secondary-citing PSA — moderate confidence, no independent R2 quote found in public sources. Confirm any real decision with 3 itemized quotes on sealed plans.",
  confidence: "national=solid (2 QS firms + 6 PH builder firms + PSA) | regional=moderate (single-vendor city model cross-checked vs PSA R2 + wage order) | labor=moderate | materials=moderate | city_level=thin",

  national: [
    { class:"psa-declared-floor", band:"PSA approved permits, single houses (Feb 2026 release)", psp_min:7059.35, psp_max:8092.85, note:"Owner-declared structure value: single houses ₱7,059.35/sqm; all residential ₱8,092.85/sqm. Floor indicator only — owners shade declared cost down [5].", src:[5], evidence:"solid" },
    { class:"psa-declared-all", band:"PSA approved permits, all construction (2025 releases)", psp_min:11082.62, psp_max:12208.10, note:"Jul 2025: residential ₱12,110.29/sqm avg, non-residential ₱11,082.62/sqm [4]; Jan 2025: all constructions ₱12,208.10/sqm [3]. All-permit mix (bare shells to luxury), NCR-weighted [3][4].", src:[3,4], evidence:"solid" },
    { class:"res-economical", band:"Basic/livable finish, national builder guides 2026", psp_min:20000, psp_max:26000, note:"AEDO economy ₱20-26K; CDO guide economy ₱20-26K (livable-basic ₱26-30K); BuildCostPH envelope floor ₱18K. Manila firms quote the basic tier higher at ₱28-35K [16][19].", src:[12,20,52], evidence:"solid" },
    { class:"res-standard", band:"Standard family-home finish, national builder guides 2026", psp_min:27000, psp_max:50000, note:"Sub-bands: ₱27-38K (AEDO/CDO) [12][20]; ₱30-45K (JEMM) [17]; ₱35-50K (CAD) [18]; ₱36-50K (ArchManila mid) [16]. Most family-home quotes land here [17].", src:[12,16,17,18,20], evidence:"solid" },
    { class:"res-premium", band:"Premium/high-end custom, national builder guides", psp_min:45000, psp_max:90000, note:"Luxury bands ₱45-65K+ (JEMM) [17]; ₱50-75K+ (ArchManila) [16]; ₱55-90K+ (CAD) [18]. Imported finishes, custom millwork push past ₱90K [18].", src:[16,17,18], evidence:"solid" },
    { class:"res-attached-standard", band:"Terrace/row houses, average standard — Manila benchmark", psp_min:43110, psp_max:59015, note:"₱/sqm CFA, Manila: Hearn&Hearn Q1-2026 ₱43,110-55,355 [6]; Arcadis Jan-2026 ₱48,301-59,015 incl M&E [1]. Premium-ish QS spec, not a budget build.", src:[6,1], evidence:"solid" },
    { class:"res-detached-highend", band:"Detached house, high-end — Manila benchmark", psp_min:81370, psp_max:159164, note:"H&H ₱81,370-158,695 [6]; Arcadis 2026 ₱93,488-159,164 incl M&E [1]. Prestige Manila spec — not a provincial expectation; provincial detached standard sits in res-standard above.", src:[6,1], evidence:"solid" },
    { class:"res-condo-build", band:"Apartments high-rise, average standard — Manila developer cost", psp_min:35640, psp_max:73056, note:"H&H: mid-rise avg ₱35,640-42,980, high-rise avg ₱43,640-55,625 (CFA) [6]; Arcadis 2026 total incl M&E ₱56,450-73,056 [1]. Excludes land and developer margins.", src:[6,1], evidence:"solid" },
    { class:"comm-warehouse-shell", band:"Warehouse / industrial unit, single-storey shell", psp_min:16490, psp_max:38000, note:"H&H single-storey warehouse shell ₱16,490-34,595/sqm CFA, excl prelims [6]; Arcadis industrial shell-only ₱27,987-36,007 incl M&E [1]; Cebu contractor card ₱28-38K [41]. Clear height, slab load and eaves drive spread.", src:[6,1,41], evidence:"solid" },
    { class:"comm-factory-light", band:"Light manufacturing / owner-operated factory", psp_min:37541, psp_max:50000, note:"Arcadis low-rise lightweight industry ₱37,541-47,680 [1]; Cebu list ₱38-50K [41].", src:[1,41], evidence:"moderate" },
    { class:"comm-office-build", band:"New-build office building (shell + M&E), Manila", psp_min:41145, psp_max:65324, note:"H&H high-rise avg standard ₱41,145-50,235 [6]; Arcadis med/high-rise avg total ₱49,769-65,324 [1]. Prestige offices ₱72-93K [1].", src:[6,1], evidence:"solid" },
    { class:"comm-office-fitout", band:"Office fit-out, standard scope", psp_min:10000, psp_max:57100, note:"Scope-dependent: PH fit-out guides ₱10-45K/sqm [38]; mid-end full quote ~₱42K [39]; Arcadis Manila standard office fit-out on shell-and-core ₱33,900-57,100 (warmshell ₱27,600-48,500) [1]. Bare-shell condition vs warmshell moves the band.", src:[38,39,1], evidence:"solid" },
    { class:"comm-exec-office-fitout", band:"Executive/premium office fit-out", psp_min:48300, psp_max:91000, note:"Arcadis shell-and-core ₱56,500-91,000; warmshell ₱48,300-87,000 [1]; Cebu card ₱57-92K [41].", src:[1,41], evidence:"moderate" },
    { class:"comm-retail-fitout", band:"Shopping-center / mall fit-out (public areas)", psp_min:27000, psp_max:38000, note:"Arcadis: mall/public areas only; tenant areas handed over bare [1]. Tenant-specific retail fit-out is additional.", src:[1], evidence:"solid" },
    { class:"comm-shopping-center-build", band:"Shopping center, new build incl M&E, Manila", psp_min:42170, psp_max:82355, note:"Out-of-town shopping center avg ₱42,170-52,185; high-end malls ₱58,056-82,355 [1]; Cebu card: std ₱42-55K, high-end ₱58-85K [41].", src:[1,41], evidence:"solid" },
    { class:"comm-small-retail-fitout", band:"Small retail / BPO fit-out, PH estimator bands", psp_min:2500, psp_max:33000, note:"Cebu cost-estimator: small retail fit-out ₱2,500-10K/sqm; office fit-out ₱15-22K; office/BPO ₱20-33K [40]. Gap vs Arcadis Manila office fit-out (₱34-57K) reads as simpler provincial specs + scope ambiguity — treat low end as provincial-grade floor [estimate].", src:[40], evidence:"thin" },
    { class:"res-national-envelope", band:"Whole-market envelope across tiers and cities, 2026", psp_min:18000, psp_max:75000, note:"BuildCostPH 2026 tier+city calculator envelope [52]; consistent with 2025 bands of ₱15-35K (now superseded upward) [21] and the 2026 firm guides above.", src:[52,21], evidence:"moderate" }
  ],

  regional_factor: {
    manila_to_province: "Labor: provinces 15-25% cheaper than MM/Cebu on wages [13][12]; old QS survey: provincial skilled hourly ₱35-100 vs Manila ₱64-102 [49]; province day-rates vs NCR anchors = -15% to -28% (wage floor R2 ₱500 vs NCR ₱695) [28][1][10]. Materials: 'Metro Manila and provincial prices can differ by 10-20%' per item [15]. National blog tier tables put Visayas/Mindanao provinces -20% to -35% under NCR city bands [21]. Net provincial build discount commonly lands ~15-30% depending on tier, site access and hauling — cheaper labor partially offset by materials logistics [estimate from 13,15,21,49].",
    cagayan_valley: "Isabela city model: standard-finish ₱29,050-40,163/sqm [7][8][9] vs Manila design-build standard bands ₱28-50K [16][17] → R2 ≈ -17% to -20% at standard tier [estimate]; economy tier Manila ₱28-35K vs Isabela ₱18.7-25.2K → ≈ -30% [estimate]. Wage floor: R2 ₱500/day (RTWPB 2-24, eff Nov 5 2025, non-agri & agri; prior ₱480/₱460) [28][29][30] vs NCR ₱695 in 2025 and ₱755 from Jul 2026 (builder summary; NWPC lists a later NCR order eff Sep 2026 — floor is fast-moving, verify at NWPC) [1][10][13][28] ≈ -28% legal floor. Materials sit mid-band, not discounted: R2 cement ₱196-213 vs PH market ₱180-300 [7][27][23][12]. PSA R2 residential permits avg ₱12,008/sqm (Jan 2025) [7 secondary-citing 3] ≈ national average — consistent with cheap labor offset by freight into Cagayan Valley [moderate]."
  },

  labor_rates: [
    { trade:"helper / laborer", scope:"provincial", daily_min:500, daily_max:700, note:"₱500-700/da [13][22]; anecdotes cluster ₱600 [35]; PH-wide ₱500-800 [34].", src:[13,22,35,34], evidence:"moderate" },
    { trade:"mason", scope:"provincial", daily_min:650, daily_max:1000, note:"Provincial skilled band ₱650-1,000 [13]; PH-wide mason ₱800-1,200 [22][34]; NCR ₱900-1,100 [10].", src:[13,22,34,10], evidence:"moderate" },
    { trade:"carpenter", scope:"provincial", daily_min:800, daily_max:1000, note:"₱800-1,000 provincial [13][22][34]; MM ₱900-1,200 [10]. Tuguegarao salary-survey avg ₱151.61/hr ≈ ₱1,213 8h-day-equivalent — salaried survey rate, not day-market [36]; JobStreet carpenter ₱19-20K/mo ≈ ₱730/day [37].", src:[13,22,10,36,37], evidence:"moderate" },
    { trade:"steelman", scope:"provincial", daily_min:800, daily_max:1300, note:"PH-wide ₱900-1,300 [22]; provincial skilled band floor ₱650-1,000 [13].", src:[22,13], evidence:"moderate" },
    { trade:"electrician", scope:"provincial", daily_min:850, daily_max:1200, note:"[estimate] — the trades tables' electrician row is cut in both publishes [13][22]; banded within the skilled spread (₱650-1,300).", src:[13,22], evidence:"thin" },
    { trade:"tile setter", scope:"provincial", daily_min:750, daily_max:1500, note:"₱900-1,500 PH-wide [22]; provincial band floor ~₱750 [13].", src:[22,13], evidence:"moderate" },
    { trade:"painter", scope:"provincial", daily_min:600, daily_max:1100, note:"₱700-1,100 [22]; ₱600-850 provincial [13].", src:[22,13], evidence:"moderate" },
    { trade:"foreman", scope:"provincial", daily_min:800, daily_max:1000, note:"Anecdote ₱800-1,000 provincial [35]; AEDO MM ₱900-1,300 [13]; NCR premium foreman ₱1,500-2,200 [10].", src:[35,13,10], evidence:"thin" },
    { trade:"wage-floor (R2)", scope:"legal anchor", daily_min:500, daily_max:500, note:"RTWPB 2-24 eff Nov 5 2025: ₱500/day non-agri AND agri (from ₱480/₱460) [28][29]; pre-2026 baseline ₱450-480 [30].", src:[28,29,30], evidence:"solid" },
    { trade:"wage-floor (NCR)", scope:"legal anchor", daily_min:695, daily_max:780, note:"NCR-26 ₱695 (Jul 2025) [1][10]; builder summary: ₱755 Jul 2026 → ₱780 Jan 2027 [13]; NWPC lists NCR-28 eff Sep 2026 [28]. R2-vs-NCR floor gap ≈ -28% [estimate].", src:[1,10,13,28], evidence:"moderate" }
  ],

  materials: [
    { item:"Portland cement, 40kg bag", unit:"bag", low:180, high:300, note:"PH retail market ₱180-230 (Q4-2024) [27]; ₱251-265 price lists [23]; ₱260-300 (2026) [12]; APO wholesale ₱260 [FB]. R2: ₱196 (Ilagan) - ₱213 (Cagayan) [7][9]. Reconciled band ₱180-300; R2 mid-band.", src:[27,23,12,7,9], evidence:"moderate" },
    { item:"Deformed bar 10mm × 6m (Gr33/40)", unit:"pc", low:137, high:175, note:"₱137.5-161.7/pc by grade [23]; Cebu Steel brand tiers ₱150-175 for 6m (₱40-45.4/kg) [33]; classic series ₱156/pc [25]. Spot risk 2026: wholesale rebar flat but quotable ₱37-45/kg after fuel spike [51].", src:[23,33,25,51], evidence:"moderate" },
    { item:"Deformed bar 12mm × 6m", unit:"pc", low:174, high:252, note:"R2 ₱174-179/pc [7][9]; ₱195.8-231 by grade [23]; classic ₱221 [25]; Cebu ₱216-252 [33]. AEDO's ₱380-430 for 12mm is an outlier vs every other source — treated as typo/outlier, not adopted [12].", src:[7,9,23,25,33,12], evidence:"moderate" },
    { item:"CHB 6-inch", unit:"pc", low:10, high:17, note:"R2 ₱17/pc [7][8][9]; PH market ₱10-20+ (Arcadis chart, 2024) [1]; 4-inch counterpart ₱18-24/pc (2026) [12].", src:[7,1,12], evidence:"moderate" },
    { item:"Plywood 1/2\" 4×8", unit:"pc", low:580, high:937, note:"Ordinary: ₱580-680 (2026) [12] / ₱674 archive [26]; marine: ₱790 archive [26] / ₱936.67 price list [23].", src:[12,26,23], evidence:"moderate" },
    { item:"Lumber, coco (formwork/temps)", unit:"bd ft", low:25, high:48, note:"₱25-45 (2026) [31]; ₱25-60 by type [32]; ₱36-38 [24]; ₱48 archive [26]; ₱34.73 list [23]. Termite-trap warning for permanent framing [31].", src:[31,32,24,26,23], evidence:"moderate" },
    { item:"Lumber, good (framing/finish)", unit:"bd ft", low:59, high:77, note:"₱59 archive [26]; ₱70 [23]; ₱72-77 [24]; premium hardwoods (yakal) diverge: ₱95-101 (2026 list avg) [24] vs ₱180-280 premium-yard [31].", src:[26,23,24,31], evidence:"moderate" },
    { item:"Washed sand / gravel 3/4\" (R2)", unit:"cu m", low:1121, high:1488, note:"R2: sand ₱1,121-1,148, gravel ₱1,453-1,488 [7][8][9]; MM series sand ₱1,435 / gravel ₱1,310 [25]; older provincial archive gravel ₱420-530 — big upward drift since [26].", src:[7,25,26], evidence:"moderate" },
    { item:"Pre-painted roofing (R2) / GI sheet", unit:"lin m", low:232, high:238, note:"R2 ₱232-238/lin.m [7][8]; GI-26 × 8' ₱550/pc archive [26]; GI wholesale index +41% 2018→2025 (fastest climber) [1].", src:[7,26,1], evidence:"moderate" },
    { item:"Latex paint 4L / floor tile 40×40 (R2)", unit:"gal / sqm", low:137, high:553, note:"R2: paint ₱540-553/gal; tiles ₱137-140/sqm [7][8]; PH ceramic tile material+labor ₱350-600/sqm (2026) [12].", src:[7,12], evidence:"moderate" }
  ],

  breakdowns: [
    { metric:"materials vs labor split", reading:"Materials ≈55-70% of contract price [14]; labor ≈30-45% of total [13], other guides 20-40% [21], ~25% in worked examples [19]; single-vendor R2 model: 60% materials / 30% labor / 10% overhead [7]. Reconciled: materials ~55-65%, labor ~25-40%, OH+margin ~10-15% [estimate from 7,13,14,21].", src:[7,13,14,21,19], evidence:"moderate" },
    { metric:"finishing tier multipliers", reading:"budget→standard ×1.2-1.5; budget→premium ×1.7-2.5; budget→high-end/custom ×2.2-3.0+; derived from tier ratios in [12][16][17][20][7] [estimate].", src:[12,16,17,20,7], evidence:"thin" },
    { metric:"two-storey premium", reading:"≈+15% vs bungalow on equal floor area [14].", src:[14], evidence:"thin" },
    { metric:"pakyaw unit labor rates (2026)", reading:"CHB laying ₱200-400/sqm; plastering ₱90-300/sqm per side; concrete works ₱1,500-2,500/cu m; tile install ₱350-600/sqm; painting ₱120-250/sqm — provincial jobs at low end [13]. Older unit sheets: CHB 4\" ₱133-200/sqm, plaster smooth ₱100-140/sqm, steel trusses ₱460-750/sqm, roofing install ₱80/sqm [49][50].", src:[13,49,50], evidence:"moderate" },
    { metric:"pakyaw vs contractor (planning case)", reading:"100-sqm standard bungalow: licensed contractor ₱2.85M-4.01M all-in vs labor-only pakyaw ₱2.58M-3.43M — saving ₱0.27-0.58M ≈ 10-14% AFTER waste, site costs, hired supervising engineer, owner's time [14].", src:[14], evidence:"moderate" },
    { metric:"CHB wall assembly sanity check", reading:"4\" wall unplastered ₱650-950/sqm total; plastered both sides ₱950-1,550/sqm; 6\" runs ~7-10% higher [15].", src:[15], evidence:"moderate" },
    { metric:"labor cost per sqm of floor (residential)", reading:"Low-end/simple ₱4,000-6,000/sqm; mid-range ₱6,000-9,000/sqm; high-end ₱9,000-12,000/sqm [22].", src:[22], evidence:"moderate" },
    { metric:"structural ratios (rules of thumb)", reading:"Concrete 0.40-0.55 cu m/sqm floor; formwork 2.0-3.0 sqm/sqm floor; rebar 180-280 kg/cu m concrete; cement factor 11.75-14.5 bags/cu m at 4,000-5,000 psi (3/4\" gravel) — Manila design assumptions [1].", src:[1], evidence:"moderate" }
  ],

  contract_modes: [
    { mode:"all-in contractor (materials+labor)", detail:"Licensed contractor carries materials, labor, equipment, supervision and price-rise risk inside one contract; ~15% markup default in planning models [14]. Required in law when work is done 'by contract' (RA 4566 PCAB licensing; PD 1096 IRR §308 supervision) [14].", src:[14] },
    { mode:"pakyaw, labor-only", detail:"Owner buys and delivers ALL materials; foreman takes a lump sum and pays the crew (Civil Code Art. 1713). Dominant model for small provincial residential jobs [13][14]. Owner absorbs delivery scheduling, idle-crew risk, waste (+10%), a hired site engineer, and price rises on every delivery [14].", src:[13,14] },
    { mode:"pakyaw, per-unit", detail:"Fixed labor rate per finished unit — per sqm of CHB wall, per cu m of concrete, per sqm of tiles — paid as work is measured; well-defined scopes only [13][49][50].", src:[13,49,50] },
    { mode:"subcontract caps", detail:"Labor-only subcontracts: down payment capped at ₱40,000 or 5% of subcontract price (PH contractor practice sheets) [50].", src:[50] }
  ],

  city_differentiation: {
    summary: "Comparable LGU-level construction-cost data is effectively ONE public vendor: constructioncost.ph publishes per-city pages that apply the same Cagayan-Valley pricing model with micro-differences — Cauayan and Santiago identical (standard mid ₱29,750/sqm), Ilagan ₱29,050 (-2.3%) [7][8][9]. No transacted LGU-level market data exists publicly; PSA publishes at region level (R2 residential permit average ₱12,008/sqm) [7][3]. The Isabela 2027 Schedule of Market Values (March 2026 public consultation) is an ASSESSOR schedule for real-property tax, not builder quotes: base unit construction cost ₱4,300/sqm (Type I wood) to ₱10,200/sqm (Type V-A fire-resistive), apartments/row/townhouses ₱8,300-11,700/sqm — a legal benchmark floor only [42].",
    note: "LGU-level pricing evidence = THIN. Province band for Isabela standard-finish: ₱29,050-40,163/sqm [7][8][9]. Within-province skew (estimated, not measured): Santiago and Cauayan skew high — Santiago is an independent-component city with the larger commercial pull, Cauayan has the regional-city airport/bypass corridor and a tighter builder market; Ilagan skews slightly low (bigger land supply, thinner construction demand) — the single-vendor model already reflects ±2-3% of that ordering [estimate built on 7,8,9]. Interior/river municipalities plausibly pay MORE in delivered-aggregate cost (hauling to San Mariano, Aurora, etc.) even with cheaper labor [estimate]. The site's own FB lot-sale corpus (351 posts, Sept-Oct 2026) contains ZERO construction-rate posts — land only. If LGU-level construction bands matter, the gap is a dedicated mining pass over Isabela contractor/building FB groups ('pa-construct', local hardware pages); contractor-recruitment threads already surface for Santiago City, Alfonso Lista, and Alunan/Quezon — evidence the market posts there, just not yet harvested [45][46][47].",
    confidence: "thin"
  },

  sources: [
    "https://media.arcadis.com/-/media/project/arcadiscom/com/perspectives/asia/publications/cch/2026/ph-cost-handbook-2026.pdf?rev=1a5e679f41e94837bbd5581b9729075d",
    "https://media.arcadis.com/-/media/project/arcadiscom/com/perspectives/asia/publications/cch/2025/arcadis-ph-cchb-2025.pdf?rev=14d66007630a4ed4ae27ab7084fd85ca",
    "https://psa.gov.ph/content/construction-statistics-approved-building-permits-january-2025",
    "https://psa.gov.ph/statistics/construction/pcs/node/1684080822",
    "https://balayhub.com/blog/house-construction-cost-per-square-meter-philippines-2026",
    "https://www.hhconsulting.com.ph/post/philippine-construction-cost-data-q1-2026",
    "https://constructioncost.ph/cost/cauayan",
    "https://constructioncost.ph/cost/santiago",
    "https://constructioncost.ph/cost/ilagan",
    "https://constructioncost.ph/cost/manila",
    "https://constructioncost.ph/cost",
    "https://aedoconstruction.com/blog/magkano-pagpapatayo-ng-bahay-pilipinas-2026/",
    "https://aedoconstruction.com/blog/construction-labor-rates-philippines-2026/",
    "https://aedoconstruction.com/blog/pakyaw-vs-contractor-philippines/",
    "https://aedoconstruction.com/blog/chb-plastering-cost-per-sqm-philippines/",
    "https://www.architectmanila.com/single-post/how-much-does-it-cost-to-build-a-house-in-the-philippines-in-2026",
    "https://www.jemmbuilders.com/blog/2026-house-construction-cost-per-sqm-in-the-philippines-the-ultimate-budget-guide",
    "https://cadconstruction.com.ph/blog/house-construction-cost-guide-philippines",
    "https://www.cdohomebuilder.com/post/basic-cost-of-building-a-house-in-the-philippines",
    "https://www.cdohomebuilder.com/post/2026-construction-cost-guide",
    "https://www.mainlinepowerph.com/blogs/articles/how-much-does-it-cost-to-build-a-house-in-the-philippines-in-2025-magkano-talaga",
    "https://projectcostingph.com/labor-cost-in-construction-in-the-philippines-2026-complete-guide/",
    "https://projectcostingph.com/material-price-list",
    "https://philconprices.com/construction-material-prices/",
    "https://www.scribd.com/document/464703200/List-of-Construction-Prices-for-Concreting-Works-Philippines-PHILCON-PRICES",
    "https://philconprices.com/category/list-of-construction-prices-in-the-philippines/",
    "https://pinoybuilders.ph/presyo-update-construction-material-price-watch-q4-2024",
    "https://batasko.com/data/minimum-wage",
    "https://nwpc.dole.gov.ph/region-ii",
    "https://www.pna.gov.ph/articles/1234562",
    "https://buildmatinsight.com/wood-lumber/mat-wood/philippines-house-build-wood-lumber-costs-2026",
    "https://metro-manila-leads.vercel.app/blog/construction-materials-price-list-philippines",
    "https://cebusteel.ph",
    "https://www.facebook.com/Ronald.perillo.162994/posts/construction-worker-rates-in-the-philippines-vary-depending-on-the-location-type/664136189884222",
    "https://www.reddit.com/r/Philippines/comments/1mqomn1/bakit_ang_baba_ng_sahod_ng_mga_construction/",
    "https://www.salaryexpert.com/salary/job/carpenter-construction/philippines/tuguegarao-city",
    "https://ph.jobstreet.com/career-advice/role/carpenter/salary",
    "https://alphabuild.ph/office-fit-out-costs-in-manila-what-to-budget-in-2026",
    "https://www.officepro.ph/post/how-much-capex-do-you-need-when-setting-up-your-office-in-the-philippines",
    "https://cebufsh.com/blog/commercial-fit-out-costs-philippines/",
    "https://green8scape.com/building-construction-cost",
    "https://provinceofisabela.gov.ph/property-values-in-isabela-set-to-rise-under-2027-market-value-schedule/",
    "https://www.sunstar.com.ph/cebu/updated-price-ceiling-to-boost-4ph-rollout",
    "https://philstarproperty.com/news/2025/12/05/43707/new-price-ceilings-for-socialized-housing-a-boost-to-bigger-and-better-quality-units/",
    "https://www.facebook.com/groups/460648074922886/posts/1516540729333610",
    "https://www.facebook.com/61578674252309/posts/122130000542955808",
    "https://www.facebook.com/groups/2573032556070199/posts/28471688769111223",
    "https://www.facebook.com/ArchitectJMdeJesus/posts/1334713635182396",
    "https://www.scribd.com/document/522430407/Labor-Rate-Reference",
    "https://www.scribd.com/document/733979745/Labor-Pakyawan-Calculator",
    "https://aedoconstruction.com/blog/construction-material-price-trends-philippines-2026/",
    "https://www.buildcostph.com"
  ]
};