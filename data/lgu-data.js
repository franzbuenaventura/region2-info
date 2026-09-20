/* LGU detail data — Region 2 — Info
   Compiled from data/lgu/*.md research packs (Sept 2026).
   Keyed by kebab-case slug; LGUs without an entry fall back to the placeholder. */
window.LGU_DATA = {
  cauayan: {
    nicknames: ["Ideal City of the North", "Rice Bowl of the North", "Agro-Industrial Capital of Cagayan Valley"],
    founded: "1740 (town of Cagayan province) · Cityhood Mar 30, 2001 (RA 9017)",
    etymology: 'Ilocano "cauayan" = bamboo; the town was originally sited at Calanusian on the Cagayan River and moved after repeated floods.',
    smartCity: "First DOST-designated smart city in the Philippines (2025)",
    general: [
      ["Land area", "336.40 km² (10th largest of Isabela's 38 LGUs)"],
      ["Barangays", "65"],
      ["Population (2024)", "143,539 (PSA POPCEN) · 36,399 households · ~427/km²"],
      ["Elevation", "32–148 m (city proper ~65 m)"],
      ["Land use", "59.33% agricultural (≈19,959.7 ha) · 4,013.3 ha built-up"],
      ["Languages", "Ilocano, Ibanag, Gaddang, Tagalog, English"],
      ["Distance from Manila", "367 km via Maharlika Hwy · CYZ airport with PAL + Cebu Pacific MNL flights"],
      ["Festivals", "Gawagaway-yan (Mar 30–Apr 13) · joins the province's Bambanti Festival"],
      ["River", "Cagayan River borders/watershed — town relocated historically due to floods"],
      ["Income class", "2nd city income class · revenue ₱1,512M (2024) · assets ₱3,634M · poverty incidence 11.71% (2023)"],
    ],
    market: [
      ["Businesses", "3,418 registered establishments (LGU)"],
      ["Banks", "16 — one of Region 2's financial centers"],
      ["Hospitals", "8, incl. CVMC regional referral hospital and Isabela United Doctors Medical Center; De Vera Medical Center expanding (MRI/cath-lab/molecular lab, 2026)"],
      ["Clinics", "37 medical · 15 dental · 4 derm · 4 EENT"],
      ["Education anchors", "ISU Cauayan campus, UPHS-Isabela, STI, NU Cauayan (opening); PRC's largest offsite center; regional SEC presence"],
      ["Retail anchors", "SM City Cauayan (first SM in Region 2), AllHome"],
      ["BPO", "Everise Cauayan (first BPO in Region 2, Mar 2024) — 366 → ~1,000 agents, hiring at ₱16K+/mo, healthcare-CX vertical"],
      ["Flights & hotels", "PAL + Cebu Pacific daily MNL–CYZ; business-hotel stock thin (₱1,000–3,000/night); Park Inn by Radisson opens Q2 2027"],
      ["Power", "ISELCO-I · residential ₱9.4848/kWh (Feb 2026)"],
      ["Coworking competition", 'Regus/Spaces markets "2 centers in Isabela" (Ilagan/Santiago) at ₱890/day — none confirmed open in Cauayan proper'],
      ["Services", "33 laundry shops; water-refilling active (LaundryAtlas)"],
    ],
    labor: [
      ["Minimum wage (R2)", "₱480/day non-agri · ₱460 agri (Wage Order 02 series; sweldoph/PNA)"],
      ["Universities", "ISU Cauayan campus ~7,700 students (crim, IT, business, educ); UPHS-Isabela; STI; NU Cauayan opening"],
      ["BPO labor market", "Everise ~1,000 agents & hiring — de facto provincial talent hub for CX work"],
      ["Electorate", "93,785 registered voters (2025) — proxy for working-age base"],
    ],
    costs: [
      ["Commercial rent", "Warehouse ₱120–180/sqm/mo (regional benchmark); office first-mover space implied ₱350–450/sqm"],
      ["Power", "ISELCO-I residential ₱9.4848/kWh (Feb 2026)"],
      ["Water", "₱25.00/cum flat (Cauayan City Water District, Jan–Apr 2026)"],
      ["Internet", "PLDT 'fully fiberized' Cauayan (2019 program); PLDT + Converge fiber plans available; BPO-grade leased lines via PLDT enterprise"],
    ],
    demand: [
      ["Avg family income (R2)", "₱290,120/yr (FIES 2023) · fastest-growing region nationally, +25.0% 2023→2025 (PSA)"],
      ["Poverty incidence", "Cauayan 11.71% (2023) vs national families 10.9% — city outperforms region"],
      ["Remittance base", "PH remittances record $39.62B (2025) — resilient provincial demand driver"],
    ],
    catchment: [
      ["Position", "Central Isabela on Maharlika Hwy (18.16 km national road) — transport pivot of Cagayan Valley"],
      ["Distances", "Ilagan 34 km · Santiago ~55 km · Tuguegarao ~70 km (bus ~2h20m) · Manila 367–405 km"],
      ["Catchment logic", "Central location between Ilagan & Santiago draws shoppers/workers from surrounding municipalities — catchment population exceeds resident 143K"],
    ],
    points: {
      cards: [
        "First DOST smart city of the Philippines (2025) — hosted the iSCENE international expo (2023, 2025); free WiFi across 65 barangays (GovNet)",
        "SM City Cauayan = first SM Supermall in Region 2 — proof of retail gravity",
        "RC Cola bottling + Ginebra San Miguel plant — agro-industrial anchors",
        "PRC's largest offsite center in the PH; SEC regional presence — government-services gravity",
        "Gawagaway-yan Festival (Gaddang roots, \"bountiful livelihood\"); Bambanti showcase at SM",
        "CharM EV fast-charging stations live (DOST); e-trikes deployed",
        "₱17M DTI Digital Creative Hub; NFA new warehouse groundbreaking",
        "Le Tour de Filipinas stop-over city",
      ],
      floodRisk: ["Cabaruan", "Alicaocao", "Turayong", "Baringin Sur", "Labinab"],
      floodNote: "100-yr floodplain barangays (Round 2 research). SM / Districts I–III core is LOW risk. Typhoon stress test: Signal No. 4 during Typhoon Paolo; 33 region towns went dark after Typhoon Uwan.",
      geohazard: {
        seismic: "Isabela crossed by 3 active faults (Phivolcs, Jun 2026): Divilacan Fault (M7.2 potential, 2023 M5.8 event), Santiago Segment (M7.2), unnamed Ilagan fault (500-tremor swarm Jun 2025). Cauayan sits west of the coastal Divilacan trace — verify site-level via Phivolcs FaultFinder.",
        typhoon: "Peak season Jul–Oct (PAGASA: ~20 TCs enter PAR/yr, 8–9 make landfall; ~70% develop Jul–Oct). Isabela is a frequent direct-landfall province (Uwan Nov 2025 super typhoon, Paolo Sig#4).",
        implication: "Flood + seismic + wind triple exposure → build to higher structural spec, budget backup power (Everise-model), insurance is a real cost line not an afterthought.",
      },
      security: "Cagayan Valley declared insurgency-free (RPOC, Jun 2026); PRO2 focus crimes down 26.09% (Aug 2026). Cauayan = stable urban core.",
      growthPipeline: [
        ["Park Inn by Radisson Cauayan", "Q2 2027 — 151-room upper-midscale atop SM City Cauayan; first international brand in the city"],
        ["TotalEnergies 440MWp solar (Ilagan)", "$300M, financial close Apr 2026, commercial ops late 2027 (65/35 TotalEnergies–Nextnorth)"],
        ["NU Cauayan campus", "opening — national private university chain (83K+ students network)"],
        ["CPF Ilagan agri-complex", "₱5.5B swine + ₱1.8B feed mill, doubling toward ₱10B — regional agri-services magnet"],
        ["PRC largest offsite center", "already live — government traffic continues"],
      ],
    },
    political: {
      officials: [
        ["Mayor", "Caesar \"Jaycee\" Dy Jr. (NPC)", "Won 2025 with 44,437 votes (47.4%) vs Dy Bill (WPP) 29,684 (31.7%) — third-generation Dy mayor"],
        ["Vice Mayor", "Leoncio Dalin Jr. (Lakas)", "55,716 votes — longest-serving No. 2 in city history (VM 1988–1998 and 2013–present)"],
        ["District Rep", "Faustino \"Bojie\" Dy III (6th district)", "Elected 2025; Speaker of the House since Sep 2025 — Cauayan mayor 1992–2001 and governor 2010–2019"],
        ["Council", "10 elected councilors (2025 batch)", "Uy-Balayan, A.K. Uy, Asirit IV, De Luna, Galutera, Mallillin, etc."],
      ],
      officialNote: "Some LGU pages still show \"Mayor Bernard Faustino / Patrick Caramat\" — conflicting/older data. Wikipedia lists Caesar Dy Jr. + Dalin as current (post-2025 election). Rappler's Cauayan vice-mayor row shows \"DY, BENJIE III (LAKAS)\" — treat the VM identity as unverified; the LGU directory names Dalin.",
      dynasty: "Dy political dynasty dominant in Cauayan for decades — Dy family mayors since 1983 (Benjamin Dy, Bernard Faustino Dy, Caesar Dy). Reach is province-wide: ten Dys held elective posts simultaneously in 2022 (PNA); Bojie Dy III is House Speaker (since 2025), his son Inno Dy V was Cauayan's congressman until 2025, and Kiko Dy is vice governor.",
      climate: "Stable dynasty-led NPC/Lakas coalition; business-friendly continuity; LEDIPO (investment promotions office) active; smart-city partnership culture (DOST / ISU / PLDT-Smart). Contests are almost always intra-family (Dy vs Dy), so policy direction changes little across elections.",
      historyIntro: "From Spanish-era gobernadorcillos to a dynasty in its third generation holding City Hall — nearly every mayoral race is a Dy vs. Dy contest.",
      history: [
        ["1866 · Spanish era", "Founded 1740 as a town of Cagayan province (later Nueva Vizcaya 1839, then Isabela from 1856). First semblance of local government: friar-curate Fr. Paulino appointed Fructuoso Gannaban gobernadorcillo. The Tabacalera tobacco hacienda drew Ilocano settlers, shaping the town's political base."],
        ["1900s–1935 · American rule & Commonwealth", "Under US civil government Don Domingo Damatan became the first presidente municipal. Commonwealth-era mayors: Guillermo Blas and Federico Acio. Jose Africano was the first elected mayor of the Republic era."],
        ["1964–1971 · The Dy era begins", "Faustino Dy Sr. — Chinese-mestizo trader's son, elected councilor 1959 — became mayor (VP Herminio Albano) and revived a slow-developing town. He moved up to governor in 1971, ruled Isabela for 18 years, switched from the Liberal Party to Marcos's KBL after martial law, and raised four sons who entered politics."],
        ["1972–1983 · Martial law", "Dr. Carlos A. Uy held the mayorship through the dictatorship (re-elected in the Jan 30, 1980 polls with VM Benjamin Dy). In 1983 Uy was appointed Assistant Provincial Health Officer, elevating Benjamin Dy to mayor."],
        ["1986–1992 · Restoration", "OIC Diosdado Ramirez ran the town after EDSA; Benjamin Dy won back the mayorship in 1988 and brother Faustino \"Bojie\" Dy III succeeded him in March 1992 — the family held both City Hall and the governorship again."],
        ["1992–2001 · The cityhood campaign", "Bojie Dy III won three consecutive terms with cityhood as the core promise, pushing House Bill 3163 through Congress. RA 9017 (\"Charter of the City of Cauayan\") was signed by President Arroyo on Feb 28, 2001 and ratified by plebiscite on Mar 30, 2001 — he was the last municipal and first city mayor (holdover)."],
        ["2001–2010 · Caesar Dy Sr.", "The brother rotation continued: Caesar de Guzman Dy won the new city's first three mayoral races (2001, 2004, 2007). Controversy: the 2004 shutdown of radio station Bombo Radyo dzNC, seen as retaliation for its ties to Padaca — the Supreme Court in 2010 ordered the city to pay ₱5M in damages."],
        ["2010–2025 · The third generation", "Benjamin Dy returned as mayor in 2010 but died in office (Feb 16, 2013). Son Bernard Faustino \"BF\" Dy replaced him on the 2013 ballot and won three terms (2013, 2016 — against his own uncle Victor Dy — and 2019). In 2022 cousin Caesar \"Jaycee\" Dy Jr. beat Bojie's half-brother Bill Dy 44,326–27,424; in 2025 Jaycee was re-elected 44,437–29,684."],
        ["2018–2025 · National stage", "RA 11080 (Sep 27, 2018) carved a new 6th district around Cauayan (with Echague, San Guillermo, San Isidro); first contested 2019, with Inno Dy V re-elected at 90.8% in 2022. In 2025 former mayor Bojie Dy III became both Cauayan's congressman and Speaker of the House — the dynasty's national peak."],
      ],
      caution: "Verify the current mayor via cityofcauayan.gov.ph/city-officials before relying on these names in any formal document. Historical narrative compiled from the LGU's commissioned city history (2014), PCIJ, and Wikipedia bios — pre-1992 details are secondary-source; spot-check before formal use.",
      businessClimate: {
        permitting: "Online BPLS (electronic Business Permit & Licensing System) — apply/renew online (v2.cityofcauayan.gov.ph/business); province-wide Business One-Stop Shop (BOSS) initiative (PIA 2026)",
        investmentPromo: "LEDIPO (Local Economic Development & Investment Promotions Office) active — year-end ops reporting, investor-ready environment push (PIA 2026)",
        incentives: "Provincial investment code incentives available; PEZA agro-industrial ecozones in the region (r2invest: Isabela Ecofuel, GFII sugarcane complex) — Cauayan itself is not a PEZA zone; national BOI registration open to qualified projects",
        taxes: "Standard LGU schedule: real property tax + local business tax on gross sales (rates per city revenue code; verify schedule at city hall — not published online)",
      },
    },
    realEstate: {
      intro: "Compiled from live broker/marketplace listings (Sep 2026) — all figures are ASKING prices, not appraised values. The Cauayan market is thin, so single listings swing any 'average'.",
      land: [
        ["Agricultural / farmland", "₱85–190/sqm (₱850K–1.9M per ha) — Cabugao farm lot asks ₱850K/ha; DBP foreclosed agri lots ~₱193/sqm; large prime parcels up to ~₱350/sqm (23.3-ha San Isidro ₱82M)"],
        ["Residential lots", "Broker parcels ₱6,750–8,000/sqm (1,700+ sqm lots) · small prime lots ₱29,500–29,800/sqm · pre-selling subdivision lots advertised from ~₱2,800/sqm (social listings)"],
        ["Prime central (w/ structure)", "Mabini St, District III — 1,194 sqm residential lot w/ improvement ₱15.1M (≈₱12,650/sqm), 20% DP / 80% loanable"],
        ["Commercial / mixed-use land", "From ₱15,000/sqm — 30,000 sqm parcel near city hall & Isabela College listed at ₱450M (developer-bait pricing, negotiable)"],
      ],
      houses: [
        ["Starter / foreclosed", "₱1.69M — Camella Cauayan 2BR 2-storey (70 sqm lot / 40 sqm floor), bank-foreclosed as-is"],
        ["Developer pricing", "Camella Cauayan (19-ha gated community, Brgy. Sillawit): official house & lot range ₱6–8M"],
        ["Broker listings", "₱5.51M house & lot (99 sqm lot) · ₱9.56M 5BR single-detached (121 sqm lot)"],
        ["Market average", "DotProperty's 81 live Cauayan listings average ≈ ₱3.2M (house listings)"],
        ["Rent-to-own", "192 RTO listings span ₱760K–24M (OnePropertee estimate)"],
      ],
      rent: [
        ["Room / boarding", "₱3,500–5,500/mo (Facebook rental market; aircon extra) — the working-class/student baseline"],
        ["Whole house (top-end)", "₱100,000/mo — 190 sqm 3BR w/ 2-car parking (premium/expat-grade listing)"],
        ["Retail / office (Centro)", "₱510/sqm/mo — M Building 82.5 sqm unit ≈ ₱42K/mo (2020 pre-pandemic benchmark)"],
        ["Warehouse / industrial", "₱120–180/sqm/mo + VAT — 7,200 sqm secure compound (Cauayan), 2-mo advance + 2-mo deposit, 5%/yr escalation"],
      ],
      caution: "Listing asks, not appraisals — verify with a broker and current BIR zonal values before underwriting. Commercial retail benchmark is 2020-dated; warehouse rates are current (2024–26 listings).",
    },
    references: [
      { title: "Cauayan, Isabela — Wikipedia (2024 census: population, land area, income class, revenue, officials)", url: "https://en.wikipedia.org/wiki/Cauayan,_Isabela" },
      { title: "PSA PSGC — City of Cauayan (PSGC 0203108000): 2nd income class, 143,539 (2024 POPCEN), 65 barangays", url: "https://psa.gov.ph/classification/psgc/barangays/0203108000" },
      { title: "PhilAtlas — Cauayan City, Isabela profile (barangay-level population, households, growth rates)", url: "https://www.philatlas.com/luzon/r02/isabela/cauayan.html" },
      { title: "City of Cauayan LGU — Know Cauayan City (land use 59.33% agri, 3,418 businesses, 16 banks, 8 hospitals, clinic counts)", url: "https://cityofcauayan.gov.ph/know-cauayan-city" },
      { title: "Cauayan history & profile — Isabela Info (founding, cityhood plebiscite, RC Cola/Ginebra, Le Tour, Gawagaway-yan, CYZ Cebu Pacific)", url: "https://isabelainfo.blogspot.com/2018/05/history-of-cauayan-cauayan-was-original.html" },
      { title: "DOST — 3rd iSCENE expo; Cauayan first DOST smart city, free WiFi in 65 barangays (2025)", url: "https://www.dost.gov.ph/knowledge-resources/news/86-2025-news/4000-dost-to-hold-3rd-international-smart-city-expo-in-isabela.html" },
      { title: "SM City Cauayan — Wikipedia (first SM Supermall in Region 2, District II location)", url: "https://en.wikipedia.org/wiki/SM_City_Cauayan" },
      { title: "ABS-CBN Halalan 2025 — City of Cauayan official results (Dy 44,437; Dalin 55,716)", url: "https://halalanresults.abs-cbn.com/local/isabela/city-of-cauayan" },
      { title: "Rappler Halalan 2025 — Cauayan City candidates & results", url: "https://ph.rappler.com/elections/2025/local-race/isabela/cauayan-city" },
      { title: "City of Cauayan LGU — City Officials directory (verification source for current officeholders)", url: "https://cityofcauayan.gov.ph/city-officials" },
      { title: "RDC2/PIA — Gawagaway-yan festival & 12th cityhood anniversary (RA 9017 cityhood history)", url: "https://rdc.rdc2.gov.ph?p=293" },
      { title: "City of Cauayan LGU — Historical Development of the City of Cauayan (Miano, 2014: term-by-term mayoral history, Damatan, Uy era, cityhood campaign)", url: "https://cityofcauayan.gov.ph/history/" },
      { title: "Philstar — Supreme Court orders former Cauayan mayor Caesar Dy & city to pay Bombo Radyo ₱5M over 2004 station shutdown", url: "https://www.philstar.com/nation/2010/08/06/599713/isabela-execs-pay-radio-station-p5-million" },
      { title: "ISELCO-I official — power rates update (residential ₱9.4848/kWh, Feb 2026)", url: "https://www.iselcouno.com" },
      { title: "Cagayan Valley Medical Center — premier government referral hospital (33 resident physicians; new facilities 2026)", url: "https://www.facebook.com/cvmcphuhepo/posts/1015388161152325" },
      { title: "Isabela United Doctors Medical Center — National Highway, Brgy. Cabaruan", url: "https://iudmc.com.ph" },
      { title: "Isabela (province) — Wikipedia (provincial context: 2024 population 1,733,048; Cauayan district share)", url: "https://en.wikipedia.org/wiki/Isabela_(province)" },
      { title: "Tripadvisor — 21 hotels near SM City Cauayan (hotel stock context)", url: "https://www.tripadvisor.com/HotelsNear-g1924634-d9761877" },
      { title: "Tribune — De Vera Medical Center expansion: MRI, cath-lab, molecular lab (Jul 2026)", url: "https://tribune.net.ph/2026/07/24/de-vera-medical-center-expands-advanced-diagnostics-specialty-care-in-region-ii" },
      { title: "PIA — CVMC new dialysis machines + 128-slice CT (Jun 2026)", url: "https://pia.gov.ph/news/luzon/cv/advancing-care-saving-lives-cvmcs-new-lifesaving-facilities-open-doors-to-better-healthcare/" },
      { title: "Traveloka — MNL-CYZ flights, PAL + Cebu Pacific (fares from ~$37)", url: "https://www.traveloka.com/en-en/flight/route/Manila-Cauayan.MNL.CYZ" },
      { title: "Inquirer Business — IWG/Regus 17-location PH expansion naming Ilagan & Santiago", url: "https://business.inquirer.net/495945/iwg-to-expand-ph-flexible-office-portfolio-by-50" },
      { title: "Regus — Isabela coworking rates page (₱890/day pass)", url: "https://www.regus.com/en/ph/isabela/coworking" },
      { title: "PRNewswire — Everise microsite opening in Cauayan City (Mar 2024, 366 agents)", url: "https://www.prnewswire.com/apac/news-releases/everise-expands-footprint-in-the-philippines-with-newest-microsite-in-isabela-cauayan-city-302084241.html" },
      { title: "JobStreet — Everise Philippines active job listings (Sep 2026, hiring status)", url: "https://ph.jobstreet.com/Everise-Philippines-jobs" },
      { title: "PIA — Renewable-powered cold storage groundbreaking in Isabela (Jan 2026)", url: "https://pia.gov.ph/news/luzon/cv/renewable-powered-cold-storage-seen-to-boost-farmers-incomes-in-isabela" },
      { title: "Shelter Cluster — Cauayan flood/landslide risk map (Region II)", url: "https://www.sheltercluster.org/philippines/documents/risk-map-region-ii-isabela-cauayan-2-landslide-flood" },
      { title: "Inquirer — Typhoon Paolo: Cauayan under Signal No. 4, barangay power outages", url: "https://www.facebook.com/inquirerdotnet/videos/1333807331629857" },
      { title: "Manila Standard — Cauayan City archive (iSCENE 2025, NFA warehouse, AllHome opening, Bambanti at SM)", url: "https://manilastandard.net/tag/cauayan-city" },
      { title: "DOST/astig.ph — CharM EV fast-charging + e-trike deployment in Cauayan (DOST network)", url: "https://astig.ph/dost-to-lgus-and-investors-back-filipino-made-evs-from-e-trikes-to-e-jeepneys-and-help-drivers-escape-fuel-prices/" },
      { title: "LaundryAtlas — 33 laundry shops in Cauayan City", url: "https://laundryatlas.com/ph/north-luzon/cauayan-city" },
      { title: "Turista sa Pilipinas — Cauayan 'Ideal City of the North' overview (tourism, etymology, Gawagaway-yan)", url: "https://turistasapilipinas.com/cauayan-isabela-the-ideal-city-of-the-north" },
      { title: "SweldoPH — Region II wage order 02 series (₱480 non-agri daily minimum, eff. Nov 5 2025)", url: "https://sweldoph.com/calculators/minimum-wage" },
      { title: "PSA FIES 2023 — Region 2 avg family income ₱290.12K; +25.0% growth 2023→2025 (fastest nationally)", url: "https://psa.gov.ph/statistics/income-expenditure/fies/node/1684064928" },
      { title: "Manila Times — Phivolcs: 3 active faults in Isabela (Divilacan M7.2, Santiago Segment M7.2, Ilagan fault) Jun 2026", url: "https://www.manilatimes.net/2026/06/11/regions/phivolcs-identifies-active-fault-lines-in-isabela-amid-rising-mindanao-quake-toll/2362958" },
      { title: "PAGASA — tropical cyclone climatology: ~20 TCs/yr enter PAR, 8–9 landfall, peak Jul–Oct", url: "https://www.pagasa.dost.gov.ph/climate/tropical-cyclone-information" },
      { title: "Cauayan City Water District — water rates ₱25.00/cum (2026) + official site", url: "https://cauayancitywaterdistrict.gov.ph/wrate.php" },
      { title: "GMA News — PLDT 'fully fiberize' Cauayan program", url: "https://www.gmanetwork.com/news/money/companies/711818/pldt-gearing-up-to-lsquo-fully-fiberize-rsquo-cauayan-isabela/story" },
      { title: "Manila Bulletin — Cagayan Valley declared insurgency-free (RPOC, Jun 2026)", url: "https://mb.com.ph/2026/06/06/cagayan-valley-declared-insurgency-free" },
      { title: "PRO2 (PNP) — focus crimes down 26.09% across Cagayan Valley, Aug 2026", url: "https://www.facebook.com/pro2rpio/posts/1420235443534317" },
      { title: "Radisson Hotel Group — Park Inn by Radisson Cauayan: 151 rooms atop SM City Cauayan, opening Q2 2027", url: "https://www.radissonhotels.com/en-us/corporate/media/press-releases/Radisson-Hotel-Group-adds-three-hotels-to-bolster-portfolio-in-the-Philippines" },
      { title: "BusinessWorld — Radisson expands PH: Park Inn Cauayan 151 rooms Q2 2027", url: "https://bworldonline.com/corporate/2024/07/25/610148/radisson-expands-phl-reach-with-3-new-park-inn-locations" },
      { title: "TotalEnergies — 440MWp Ilagan solar: financial close + construction start Apr 2026, ops late 2027", url: "https://totalenergies.com/philippines" },
      { title: "Enerdata — TotalEnergies Ilagan solar details ($300M, 65/35 JV, SMBC/ING/SCB financed, offtake AdventEnergy/PrimeRES)", url: "https://www.enerdata.net/publications/daily-energy-news/totalenergies-starts-building-440-mw-solar-project-philippines.html" },
      { title: "ISU Cauayan Campus — program offerings (official)", url: "https://isu.edu.ph/cauayan-campus" },
      { title: "unirank — ISU profile: branch campuses incl. Cauayan, est. 1926", url: "https://www.unirank.org/ph/uni/isabela-state-university" },
      { title: "City of Cauayan — online BPLS business permit portal (v2.cityofcauayan.gov.ph/business)", url: "https://v2.cityofcauayan.gov.ph/business" },
      { title: "PIA — Isabela Business One-Stop Shop (BOSS) investor-ready environment (2026)", url: "https://pia.gov.ph/news/luzon/cv/isabela-advances-investor-ready-environment-through-business-one-stop-shop" },
      { title: "R2 Investment (RDC2) — Economic Zones in Region 2 (Isabela Ecofuel, GFII sugarcane growership)", url: "https://r2invest.rdc2.gov.ph?page_id=4157" },
      { title: "Rome2Rio — Cauayan–Tuguegarao bus ~2h20m (connectivity)", url: "https://www.rome2rio.com/s/Cauayan/Cagayan-Valley" },
      { title: "Wikivoyage — Ilagan access: 20 km from CYZ airport, 67 km Tuguegarao (regional distances)", url: "https://en.wikivoyage.org/wiki/Ilagan" },
      { title: "DotProperty — Property for Sale in Cauayan, Isabela (81 live listings; ≈₱3.2M avg house listing; ₱15.1M Mabini St lot)", url: "https://www.dotproperty.com.ph/properties-for-sale/isabela/cauayan" },
      { title: "Lamudi — Cauayan City commercial/land listings (₱15,000/sqm 30,000-sqm parcel; SM-area warehouse ₱120/sqm + VAT)", url: "https://www.lamudi.com.ph/isabela/cauayan/rent" },
      { title: "OnePropertee — Cauayan lots & farm lots (₱29.5K/sqm small lots; ₱850K/ha Cabugao agricultural; RTO ₱760K–24M)", url: "https://onepropertee.com/lot-for-sale-cauayan-isabela" },
      { title: "Camella Cauayan — official community page (Sillawit 19-ha subdivision; house & lot ₱6–8M range)", url: "https://www.camella.com.ph/property/house-and-lot-for-sale-in-cauayan-isabela" },
      { title: "Lamudi — Camella Cauayan foreclosed 2BR (₱1.69M, 70/40 sqm, bank financing)", url: "https://www.lamudi.com.ph/buy/isabela" },
      { title: "real.ph — Cauayan house listings (₱5.51M house & lot 99 sqm; ₱9.56M 5BR 121 sqm)", url: "https://www.real.ph/listings/Isabela/Cauayan,%20Isabela" },
      { title: "DBP — foreclosed agricultural lots, Brgy. San Antonio Cauayan (₱1.5M / 7,786 sqm ≈ ₱193/sqm)", url: "https://www.dbp.ph/classification/agricultural" },
      { title: "Hoppler — M Building Centro commercial lease (₱510/sqm/mo, 82.5 sqm, 2020 benchmark)", url: "https://www.hoppler.com.ph/isabela-cauayan-city-m-building-cr0638172" },
      { title: "myproperty.ph — premium 3BR house rental, Cauayan (₱100K/mo, 190 sqm, 2 parking)", url: "https://www.myproperty.ph/rent/isabela/cauayan/3-bedroom" },
      { title: "Facebook — Cauayan apartment/boarding rental market (rooms ₱3.5–5.5K/mo)", url: "https://www.facebook.com/groups/2216772805180314" },
      { title: "FazWaz — Isabela land plots (Isabela-wide ₱2,210/sqm benchmark; 965 sqm w/ 160 sqm house ₱2.2M)", url: "https://www.fazwaz.ph/land-for-sale/philippines/cagayan-valley/isabela" },
    ],
  },
  ilagan: {
  "nicknames": [
    "Corn Capital of the Philippines",
    "Sports Tourism Hub of the North",
    "Provincial Capital of Isabela"
  ],
  "founded": "May 4, 1686 (Dominican mission town, first called \"Bolo\") · Cityhood Aug 11, 2012 (RA 10169)",
  "etymology": "Ibanag \"laga\" = smallpox — an outbreak marked the settlement's 1686 founding under Fr. Julian Malumbres; the Gaddang founders originally called it \"Bolo\".",
  "smartCity": "Largest city on Luzon by land area (1,166.26 km²) — and the provincial capital",
  "general": [
    [
      "Land area",
      "1,166.26 km² — largest city on Luzon, 4th largest in the Philippines"
    ],
    [
      "Barangays",
      "91 (most in Isabela; 13 urban)"
    ],
    [
      "Population (2024)",
      "164,020 (PSA POPCEN) · 39,663 households · ~140.6/km² — most populous city of Isabela"
    ],
    [
      "Elevation",
      "24–1,388 m (city proper ~139 m)"
    ],
    [
      "Languages",
      "Ibanag, Ilocano, Gaddang, Tagalog, English"
    ],
    [
      "Distance from Manila",
      "~400 km via Maharlika Hwy · CYZ (Cauayan) airport ~20 km · Tuguegarao ~67 km"
    ],
    [
      "Festivals",
      "Aggaw na Ilagan (founding) · Binallay Festival (rice-cake) · Mammangi Festival (corn harvest) · Bambanti (province-wide)"
    ],
    [
      "River",
      "Cagayan River eastern boundary — 28 of 91 barangays flooded in Super Typhoon Uwan (Nov 2025)"
    ],
    [
      "Income class",
      "1st city income class · revenue ₱2,810M (2024) · assets ₱8,891M · poverty incidence 12.02% (2023)"
    ]
  ],
  "market": [
    [
      "Businesses",
      "1,795 registered establishments (2006 LGU figure — newest published; current count via City BPLO)"
    ],
    [
      "Banks",
      "BDO, BPI, ChinaBank Savings strip along Maharlika Hwy — second banking cluster of the province"
    ],
    [
      "Hospitals",
      "Isabela Provincial Hospital (public tertiary, est. 1939-40, Calamagui 2nd) — the province's flagship public hospital; private care thinner than Cauayan's"
    ],
    [
      "Education anchors",
      "ISU Ilagan main campus (largest of ISU's 9 campuses) · Isabela National High School · private colleges"
    ],
    [
      "Retail anchors",
      "XentroMall Ilagan City Mall (2016) · Northstar Mall · Talavera Square — no SM/Robinsons (first SM in Region 2 is in Cauayan)"
    ],
    [
      "BPO",
      "No major BPO site yet — Cauayan's Everise (36 km) is the regional CX hub; Ilagan competes on government-services gravity"
    ],
    [
      "Flights & hotels",
      "CYZ airport 20 km (PAL + Cebu Pacific MNL) · hotel stock thin: Dreamwave Hotel (36 rooms) leads a budget-to-3-star set"
    ],
    [
      "Power",
      "ISELCO-I · residential ₱9.4739/kWh (Mar 2026)"
    ],
    [
      "Water",
      "City of Ilagan Water District (CIWD) — active pipeline replacement; minimum ~₱140/first 10 cum (LWUA schedule)"
    ],
    [
      "Coworking competition",
      "Regus/Spaces markets \"2 centers in Isabela\" (Ilagan/Santiago) at ₱890/day — none confirmed open in Ilagan proper"
    ]
  ],
  "labor": [
    [
      "Minimum wage (R2)",
      "₱480/day non-agri · ₱460 agri (Wage Order 02 series)"
    ],
    [
      "Universities",
      "ISU Ilagan main campus — biggest tertiary population in the province outside Santiago's cluster"
    ],
    [
      "Electorate",
      "105,526 registered voters (2025) — largest working-age proxy in Isabela"
    ]
  ],
  "costs": [
    [
      "Commercial rent",
      "Thin published market — Centro retail asks ~₱400–500/sqm/mo (broker postings); warehouse rates follow Cauayan benchmark ₱120–180/sqm/mo"
    ],
    [
      "Power",
      "ISELCO-I residential ₱9.4739/kWh (Mar 2026)"
    ],
    [
      "Water",
      "CIWD: first 10 cum ~₱140 minimum (LWUA June 2024 schedule)"
    ],
    [
      "Internet",
      "PLDT/Converge fiber available in the poblacion; provincial fiber backbone runs the Maharlika corridor"
    ]
  ],
  "demand": [
    [
      "Avg family income (R2)",
      "₱290,120/yr (FIES 2023) · fastest-growing region nationally, +25.0% 2023→2025 (PSA)"
    ],
    [
      "Poverty incidence",
      "Ilagan 12.02% (2023) vs national families 10.9% — slightly above national, typical for the region"
    ],
    [
      "Remittance base",
      "PH remittances record $39.62B (2025) — resilient provincial demand driver"
    ]
  ],
  "catchment": [
    [
      "Position",
      "Provincial capital, 34 km north of Cauayan on Maharlika Hwy — administrative pivot of Isabela"
    ],
    [
      "Distances",
      "Cauayan 34 km · Santiago ~89 km · Tuguegarao ~67 km · Manila ~400 km"
    ],
    [
      "Catchment logic",
      "Capital-city functions (capitol, national agencies, courts, ISU) pull daily traffic from all 34 municipalities — catchment exceeds resident 164K"
    ]
  ],
  "points": {
    "cards": [
      "Largest city on Luzon by land area — 1,166.26 km² of corn and rice country",
      "\"Corn Capital of the Philippines\" (designated 2015): ~200,000 MT corn/yr off 33,500 ha — biggest corn area of any PH city; ~80,000 MT rice/yr from 15,000 ha",
      "Provincial capital: capitol, Isabela Provincial Hospital, national-agency regional offices — government-services gravity",
      "World's Largest Wooden Lounge Chair (Butaka) · ILAGAN Sanctuary zoo & nature park · Ilagan Japanese Tunnel (WWII) · Queen Isabela Park",
      "Sports Tourism Hub of the North — City of Ilagan Sports Complex + City Sports and Convention Center",
      "Hosted the biggest Bagong Pilipinas Serbisyo Fair (Nov 2023): ₱500M services, 100K recipients, 26 agencies",
      "TotalEnergies 440MWp solar farm ($300M) under construction — commercial ops late 2027",
      "ILAGANDA development authority (2019) steering a \"liveable city by 2030\" program"
    ],
    "floodRisk": [
      "Baligatan",
      "Calamagui 2nd",
      "Baculud",
      "Centro Poblacion low-lying stretches",
      "San Antonio riverside barangays"
    ],
    "floodNote": "Super Typhoon Uwan (Nov 2025): 28 of 91 barangays submerged, 5,000+ families affected, ~400 families isolated (GMA/ANC) — flood exposure along the Cagayan River is the city's top physical risk. Seismic: unnamed Ilagan fault produced a 500-tremor swarm (Jun 2025) — verify site-level via Phivolcs FaultFinder.",
    "geohazard": {
      "seismic": "Unnamed Ilagan fault (Phivolcs Jun 2026) — 500-tremor swarm Jun 2025; Divilacan Fault (M7.2 potential) offshore east. Verify site-level via Phivolcs FaultFinder.",
      "typhoon": "Peak season Jul–Oct; Isabela is a frequent direct-landfall province (Uwan Nov 2025 super typhoon, Paolo Sig#4).",
      "implication": "Flood + wind + swarm-prone fault → build to higher structural spec, budget backup power, insurance is a real cost line."
    },
    "security": "Cagayan Valley declared insurgency-free (RPOC, Jun 2026); Ilagan = administrative center, stable.",
    "growthPipeline": [
      [
        "TotalEnergies 440MWp solar (Ilagan)",
        "$300M, financial close Apr 2026, commercial ops late 2027 (65/35 TotalEnergies–Nextnorth)"
      ],
      [
        "CPF Ilagan agri-complex",
        "₱5.5B swine + ₱1.8B feed mill, doubling toward ₱10B — regional agri-services magnet"
      ],
      [
        "ILAGANDA liveable-city program",
        "2030 horizon — drainage, sports complex, cityhood-anniversary infrastructure pushes"
      ]
    ]
  },
  "political": {
    "officials": [
      [
        "Mayor",
        "Josemarie \"Jay\" L. Diaz (PFP)",
        "Re-elected 2025: 74,188 votes (70.3%) — mayor since 2019 (also 2013–2016; first city mayor by holdover)"
      ],
      [
        "Vice Mayor",
        "Jay Eveson \"Jayve\" C. Diaz (PFP)",
        "60,723 votes (57.5%) — the mayor's son; father-and-son tandem proclaimed May 13, 2025"
      ],
      [
        "District Rep",
        "Antonio \"Tonypet\" Albano (Lakas)",
        "Lone district of Ilagan — re-elected 2025 unopposed with 172,333 votes; son of the late mayor Delfinito Albano"
      ],
      [
        "Council",
        "10 elected councilors (2025 batch)",
        "PFP sweep: Villanueva, Bello, Olalia, Borromeo, Bringas, Manaligod Jr., Tugade, Gaoiran, Malunay, Albano-Bic-Bic"
      ]
    ],
    "officialNote": "Names verified against Rappler/ABS-CBN 2025 halalan results and the LGU directory pattern. Verify via cityofilagan.gov.ph before formal use — the city site's officials page has been inconsistent across redesigns.",
    "dynasty": "Diaz machine (PFP) runs City Hall — Josemarie Diaz has won every election since 2007, with wife Evelyn Diaz holding the seat 2016–2019 as the couple alternated; son Jayve is now vice mayor. The Albano clan holds the congressional seat (Delfinito Albano, assassinated 2006, succeeded by son Tonypet). The older Uy lineage (Mercedes Pua Uy, 1992–2001) is retired from city politics.",
    "climate": "Dominant one-party machine with thin opposition (2025: Diaz 70.3% vs a nominal independent) — policy direction is continuity; government-services gravity (capitol + national agencies) makes Ilagan less business-competitive than Cauayan/Santiago but politically stable.",
    "historyIntro": "From a 1686 Gaddang mission town to provincial capital and (in 2012) the youngest city of Isabela — under two alternating dynasties.",
    "history": [
      [
        "1686 · Founding",
        "Gaddang settlers on the Cagayan River tobacco country founded \"Bolo\"; Fr. Julian Malumbres re-established it May 4, 1686 as a Dominican mission town renamed Ilagan (Ibanag \"laga\" = smallpox outbreak at founding)."
      ],
      [
        "1763 · Revolt",
        "Dabo and Juan Marayag led a Gaddang revolt against tribute and the tobacco monopoly — an early marker of the town's restive frontier politics."
      ],
      [
        "1856 · Provincial capital",
        "When Isabela de Luzon was carved from Cagayan (May 1, 1856), Ilagan was made the provincial capital — a role it has held continuously since."
      ],
      [
        "1901 · American reorganization",
        "Act 210 (Aug 4, 1901) re-established Isabela's civil government in Ilagan; first municipal president Rafael Maramag became the province's first governor."
      ],
      [
        "1945 · Liberation",
        "USAFIP-NL and the US 37th Division liberated Ilagan June 19, 1945; the Ilagan Japanese Tunnel (forced labor) survives as a tourist site."
      ],
      [
        "1999 · First cityhood attempt fails",
        "RA 8474 (Feb 2, 1998) would have made Ilagan a city, but voters rejected it in the March 14, 1999 plebiscite under Mayor Mercedes P. Uy."
      ],
      [
        "2001–2006 · The Albano interlude",
        "Delfinito Calimag Albano won the mayorship in 2001 and 2004 — then was assassinated in Quezon City on June 27, 2006. Vice Mayor Josemarie Diaz finished the term."
      ],
      [
        "2007–2012 · Diaz era & cityhood",
        "Diaz won 2007 and 2010, backing the \"C-U-DAD Ilagan\" cityhood campaign; HB 5917 was signed June 21, 2012 and the Aug 11, 2012 plebiscite ratified cityhood (RA 10169) — proclaimed by COMELEC Commissioner Velasco."
      ],
      [
        "2013–present · The Diaz machine",
        "Diaz held the first city mayorship (2013–2016), handed it to wife Evelyn Diaz (2016–2019), then returned in 2019. In 2025 he won 70.3% with son Jayve as running mate — while the Albano dynasty kept the congressional seat (Tonypet unopposed, 172,333 votes)."
      ]
    ],
    "caution": "Verify current officials via cityofilagan.gov.ph before formal use; pre-1992 history is secondary-sourced (Wikipedia/LGU commissioned history). The \"first city mayor\" question (Diaz 2012 holdover vs the 2013 election) varies by source.",
    "businessClimate": {
      "permitting": "City BPLO with province-wide Business One-Stop Shop (BOSS) initiative (PIA 2026); online systems less mature than Cauayan's BPLS portal",
      "investmentPromo": "ILAGANDA (Ilagan Development Authority, 2019) drives the \"liveable city by 2030\" program; city investor desk via the Mayor's Office",
      "incentives": "Provincial investment code incentives available; no PEZA zone in Ilagan — national BOI registration open to qualified projects",
      "taxes": "Standard LGU schedule: real property tax + local business tax on gross sales (per city revenue code; verify at city hall — not published online)"
    }
  },
  "realEstate": {
    "intro": "Compiled from live broker/marketplace listings and BIR zonal schedules (Sep 2026) — all figures are ASKING prices or BIR zonal floors, not appraised values. The Ilagan market is thinner than Cauayan's.",
    "land": [
      [
        "BIR zonal (2023 schedule)",
        "Residential ₱80–6,250/sqm (median ₱1,000) · commercial ₱1,000–12,500/sqm — peaks in Alibagu along the national highway"
      ],
      [
        "Farmland",
        "₱850K–1.9M per ha typical for the region's corn/rice land (regional benchmark)"
      ],
      [
        "Pre-selling subdivision",
        "Avida (Ayala) Greenlane Settings — first Ayala residential dev in Isabela, 10.4-ha, Brgy. Alibagu near the Capitol; lots advertised ~₱43K/sqm with house packages"
      ]
    ],
    "houses": [
      [
        "Broker listings",
        "₱4.74M house (190 sqm, Osmena) · ₱6.7M house & lot (251 sqm, Alibagu — yellow-tag title, cash only)"
      ],
      [
        "Developer pricing",
        "Avida Greenlane Settings house packages from ~₱4.1M (₱9.8K/mo financing advertised)"
      ],
      [
        "Commercial compound",
        "473-sqm lot w/ 3-storey building, Calamagui 2nd — ₱45M ask (≈₱95K/sqm, prime commercial)"
      ]
    ],
    "rent": [
      [
        "Room / boarding",
        "₱3,000–5,000/mo (student/working-class baseline near ISU)"
      ],
      [
        "Avida financing angle",
        "Greenlane marketed at ~₱9.8K/month amortization — a proxy for entry-level ownership cost"
      ],
      [
        "Retail / office (Centro)",
        "~₱400–500/sqm/mo asking (broker postings; thinner market than Cauayan)"
      ]
    ],
    "caution": "Listing asks, not appraisals — verify with a broker and current BIR zonal values (RDO 015, eff. 7/20/2023) before underwriting. Retail rent benchmark is thin-market broker pricing."
  },
  "references": [
    {
      "title": "Ilagan — Wikipedia (2024 census, land area, barangays, history, cityhood RA 10169)",
      "url": "https://en.wikipedia.org/wiki/Ilagan"
    },
    {
      "title": "PSA PSGC — City of Ilagan (PSGC 0203114000): 1st city income class, 164,020 (2024 POPCEN), 91 barangays",
      "url": "https://psa.gov.ph/classification/psgc/barangays/0203114000"
    },
    {
      "title": "PhilAtlas — Ilagan City profile (barangay-level population, households)",
      "url": "https://www.philatlas.com/luzon/r02/isabela/ilagan.html"
    },
    {
      "title": "City of Ilagan LGU — official site (services, festivals, programs)",
      "url": "https://cityofilagan.gov.ph"
    },
    {
      "title": "Ilagan agriculture — Corn Capital figures (33,500 ha corn, 15,000 ha rice)",
      "url": "https://agriculture.cityofilagan.com"
    },
    {
      "title": "Rappler Halalan 2025 — Ilagan City results (Diaz 74,188; Jayve Diaz 60,723; electorate 105,526)",
      "url": "https://ph.rappler.com/elections/2025/local-race/isabela/ilagan-city"
    },
    {
      "title": "ABS-CBN Halalan 2025 — City of Ilagan official results",
      "url": "https://halalanresults.abs-cbn.com/local/isabela/ilagan-city"
    },
    {
      "title": "Rappler — Tonypet Albano re-elected unopposed, Isabela 1st district (172,333 votes)",
      "url": "https://ph.rappler.com/elections/2025/house-race/isabela-1st-district"
    },
    {
      "title": "Wikipedia — Mayor of Ilagan (term-by-term: Maramag, Uy, Albano, Diaz, Evelyn Diaz)",
      "url": "https://en.wikipedia.org/wiki/Mayor_of_Ilagan"
    },
    {
      "title": "PNA — Bagong Pilipinas Serbisyo Fair Ilagan (Nov 2023, ₱500M, 100K recipients)",
      "url": "https://www.pna.gov.ph/articles/1213456"
    },
    {
      "title": "City of Ilagan — cityhood history (RA 10169 plebiscite Aug 11, 2012; failed 1999 RA 8474 bid)",
      "url": "https://cityofilagan.gov.ph/history"
    },
    {
      "title": "Wikipedia — Isabela's 1st legislative district (Ilagan; Albano dynasty history, Delfinito Albano assassination 2006)",
      "url": "https://en.wikipedia.org/wiki/Isabela%27s_1st_legislative_district"
    },
    {
      "title": "Philstar — Delfinito Albano assassinated in QC (Jun 27, 2006)",
      "url": "https://www.philstar.com/nation/2006/06/28/34422/isabela-mayor-gunmen"
    },
    {
      "title": "GMA News — Super Typhoon Uwan: 28 Ilagan barangays flooded, 5,000+ families affected (Nov 2025)",
      "url": "https://www.gmanetwork.com/news/regions/"
    },
    {
      "title": "TotalEnergies — 440MWp Ilagan solar ($300M, ops late 2027)",
      "url": "https://totalenergies.com/philippines"
    },
    {
      "title": "Manila Times — Phivolcs: 3 active faults in Isabela incl. unnamed Ilagan fault (Jun 2026)",
      "url": "https://www.manilatimes.net/2026/06/11/regions/phivolcs-identifies-active-fault-lines-in-isabela-amid-rising-mindanao-quake-toll/2362958"
    },
    {
      "title": "ISELCO-I — power rates (residential ₱9.4739/kWh, Mar 2026)",
      "url": "https://www.iselcouno.com"
    },
    {
      "title": "City of Ilagan Water District — rates (first 10 cum ~₱140, LWUA schedule)",
      "url": "https://cityofilaganwaterdistrict.gov.ph"
    },
    {
      "title": "SweldoPH — Region II wage order (₱480 non-agri daily minimum)",
      "url": "https://sweldoph.com/calculators/minimum-wage"
    },
    {
      "title": "PSA FIES 2023 — Region 2 avg family income ₱290.12K; +25.0% growth 2023→2025",
      "url": "https://psa.gov.ph/statistics/income-expenditure/fies/node/1684064928"
    },
    {
      "title": "BIR zonal values — City of Ilagan (RDO 015, eff. 7/20/2023: res ₱80–6,250/sqm, com ₱1,000–12,500/sqm)",
      "url": "https://ren.ph/tools/zonal-value/isabela/ilagan"
    },
    {
      "title": "Avida Greenlane Settings Ilagan — first Ayala residential dev in Isabela (10.4 ha, Alibagu)",
      "url": "https://primeinvestments-ph.com/2023/12/23/greenlane-settings-ilagan-isabela"
    },
    {
      "title": "DotProperty — Ilagan house listings (₱4.74M Osmena; ₱6.7M Alibagu)",
      "url": "https://www.dotproperty.com.ph/properties-for-sale/isabela/ilagan"
    },
    {
      "title": "real.ph — 473-sqm commercial lot w/ 3-storey bldg, Calamagui 2nd ₱45M",
      "url": "https://www.real.ph/listing/473-sqm-commercial-lot-with-3-storey-building"
    },
    {
      "title": "FazWaz — Ilagan median land ₱1,510/sqm",
      "url": "https://www.fazwaz.ph/land-for-sale/philippines/cagayan-valley/isabela"
    },
    {
      "title": "XentroMalls — Ilagan City Mall (opened May 27, 2016)",
      "url": "https://www.xentromalls.com/mall-locator/ilagan-city-mall-isabela/"
    },
    {
      "title": "Inquirer Business — IWG/Regus 17-location PH expansion naming Ilagan & Santiago",
      "url": "https://business.inquirer.net/495945/iwg-to-expand-ph-flexible-office-portfolio-by-50"
    },
    {
      "title": "Manila Bulletin — Cagayan Valley declared insurgency-free (RPOC, Jun 2026)",
      "url": "https://mb.com.ph/2026/06/06/cagayan-valley-declared-insurgency-free"
    }
  ]
},
  santiago: {
  "nicknames": [
    "Queen City of the North",
    "Premier Investment Hub of the North",
    "First City of Region 2"
  ],
  "founded": "May 4, 1743 (pueblo of \"Carig\") · Cityhood Jul 6, 1994 (RA 7720) — first city of Region 2",
  "etymology": "Renamed for St. James the Great (Santiago), the patron saint; the original Gaddang/Ibanag settlement was \"Carig\" on the old Carig (now Diadi) River.",
  "smartCity": "Only independent component city in Region 2 — administratively free of the provincial government since 1994",
  "general": [
    [
      "Land area",
      "255.50 km²"
    ],
    [
      "Barangays",
      "37"
    ],
    [
      "Population (2024)",
      "150,313 (PSA POPCEN) · 36,334 households · ~588/km² — densest LGU in Isabela"
    ],
    [
      "Elevation",
      "56–919 m (city proper ~156 m)"
    ],
    [
      "Languages",
      "Ilocano, Gaddang, Ibanag, Tagalog, English"
    ],
    [
      "Distance from Manila",
      "~330–360 km via Maharlika Hwy — southern gateway of Isabela; crossroads of Isabela, Quirino & Nueva Vizcaya"
    ],
    [
      "Festivals",
      "Pattaradday Festival (unity, May) · St. James the Apostle town fiesta (Jul 25) · Bambanti (province-wide)"
    ],
    [
      "River",
      "Diadi/Carig river system — southern valleys flood in extreme events"
    ],
    [
      "Income class",
      "1st city income class · assets ₱9,095M (2024) · poverty incidence 12.81% (2021)"
    ]
  ],
  "market": [
    [
      "Businesses",
      "Regional trade & commerce center (DTI/RDC2) — official count via City BPLO, not published online"
    ],
    [
      "Banks",
      "Densest banking cluster in southern Isabela — BDO, BPI, RCBC, LandBank, PSBank, AUB, EastWest, PNB along Maharlika Hwy"
    ],
    [
      "Hospitals",
      "8 (1 government + 7 private) — incl. Southern Isabela Medical Center (DOH regional referral for Isabela/NV/Quirino/N. Aurora) and Adventist Hospital"
    ],
    [
      "Education anchors",
      "151 institutions — University of La Salette (main campus), Isabela Colleges, STI; student hub for southern Isabela/Quirino/NV (PLT College is Bayombong, not Santiago)"
    ],
    [
      "Retail anchors",
      "Robinsons Santiago (first full Robinsons dept store in Region 2) · Walter Mart · XentroMall Santiago · SM Savemore (no SM Supermall)"
    ],
    [
      "BPO",
      "Smaller CX presence than Cauayan's Everise hub — trade/logistics/education dominate"
    ],
    [
      "Flights & hotels",
      "CYZ airport ~55–60 km · budget-to-3-star hotel strip on Maharlika Hwy; no international brand yet"
    ],
    [
      "Power",
      "ISELCO-I · residential ₱9.4739/kWh (Mar 2026)"
    ],
    [
      "Water",
      "Santiago City Water District"
    ],
    [
      "Coworking competition",
      "Regus/Spaces markets \"2 centers in Isabela\" (Ilagan/Santiago) at ₱890/day — none confirmed open in Santiago proper"
    ]
  ],
  "labor": [
    [
      "Minimum wage (R2)",
      "₱480/day non-agri · ₱460 agri (Wage Order 02 series)"
    ],
    [
      "Universities",
      "University of La Salette + Isabela Colleges + STI — the biggest student concentration in southern Cagayan Valley"
    ],
    [
      "Electorate",
      "115,767 registered voters (2025)"
    ]
  ],
  "costs": [
    [
      "Commercial rent",
      "Follows Cauayan regional benchmarks: warehouse ₱120–180/sqm/mo; Centro retail ~₱400–500/sqm/mo (thin published market)"
    ],
    [
      "Power",
      "ISELCO-I residential ₱9.4739/kWh (Mar 2026)"
    ],
    [
      "Water",
      "Santiago City Water District (rate schedule via LWUA)"
    ],
    [
      "Internet",
      "PLDT/Converge fiber on the Maharlika corridor; BPO-grade leased lines available"
    ]
  ],
  "demand": [
    [
      "Avg family income (R2)",
      "₱290,120/yr (FIES 2023) · fastest-growing region nationally, +25.0% 2023→2025 (PSA)"
    ],
    [
      "Poverty incidence",
      "Santiago 12.81% (2021) — close to the regional norm"
    ],
    [
      "Remittance base",
      "PH remittances record $39.62B (2025) — resilient provincial demand driver"
    ]
  ],
  "catchment": [
    [
      "Position",
      "Southern gateway of Isabela on Maharlika Hwy — the crossroads where Isabela, Quirino and Nueva Vizcaya meet"
    ],
    [
      "Distances",
      "Cauayan ~55 km · Ilagan ~89 km · Bayombong ~45 km · Manila ~330–360 km"
    ],
    [
      "Catchment logic",
      "Trade capital of southern Cagayan Valley — shoppers, patients (SIMC referrals) and students come in from three provinces; catchment far exceeds resident 150K"
    ]
  ],
  "points": {
    "cards": [
      "Only independent component city in Region 2 — administratively independent of Isabela since 1994 (RA 7720)",
      "First city of Region 2 (1994 — predates Tuguegarao 1999, Cauayan 2001, Ilagan 2012)",
      "Robinsons Santiago — first full Robinsons department store in Region 2 (proof of retail gravity)",
      "SIMC = DOH regional referral hospital for Isabela, Nueva Vizcaya, Quirino, N. Aurora — healthcare gravity",
      "Pattaradday Festival — \"unity\" festival marking the city's tri-people heritage (Ilocano-Ibanag-Gaddang)",
      "Calao steel-arch bridge (Pan-American Hwy heritage) · Balay na Santiago heritage house · St. James the Apostle Parish",
      "Briefly downgraded to a component city in 1998; independent status restored by a historic Supreme Court ruling"
    ],
    "floodRisk": [
      "Batal",
      "San Andres",
      "Victory Sur low-lying stretches",
      "Nabbuan riverside"
    ],
    "floodNote": "Southern valley barangays along the Diadi/Carig rivers flood in extreme events; Super Typhoon Uwan (Nov 2025) hit Isabela province-wide (33 towns dark). Seismic: the Santiago Segment fault (Phivolcs, M7.2 potential) runs in the province — verify site-level via Phivolcs FaultFinder.",
    "geohazard": {
      "seismic": "Santiago Segment fault (Phivolcs Jun 2026, M7.2 potential) — verify site-level via Phivolcs FaultFinder.",
      "typhoon": "Peak season Jul–Oct; Isabela is a frequent direct-landfall province (Uwan Nov 2025).",
      "implication": "Flood + seismic + wind exposure → build to higher structural spec, budget backup power, insurance is a real cost line."
    },
    "security": "Cagayan Valley declared insurgency-free (RPOC, Jun 2026); Santiago = commercial core, stable.",
    "growthPipeline": [
      [
        "Tan-Dy investment push",
        "\"Premier Investment Hub of the North\" branding via RDC2/r2invest — retail + healthcare expansion along Maharlika"
      ],
      [
        "Camella Alta Santiago",
        "new Camella subdivision (Brgy. Malvar) — preselling from ₱4.09M"
      ],
      [
        "Robinsons retail deepening",
        "first full Robinsons dept store in Region 2 already operating on Maharlika Hwy"
      ]
    ]
  },
  "political": {
    "officials": [
      [
        "Mayor",
        "Alyssa Sheena T. Dy (Lakas-CMD)",
        "Re-elected 2025: 68,743 (71.9%) vs Otep Miranda (Aksyon) 19,208 — first elected 2022 at 48.97%"
      ],
      [
        "Vice Mayor",
        "Jamayne C. Tan (Lakas)",
        "48,292 (53.6%) vs Jigs Miranda (Aksyon) 26,618 — succeeded term-limited Alvin Abaya"
      ],
      [
        "District Rep",
        "Joseph S. Tan (Lakas)",
        "4th district — the mayor's father; held the mayorship 2013–2022 before moving to Congress"
      ],
      [
        "Council",
        "10 elected councilors (2025 batch)",
        "Reyes, de Jesus, Ponce, Sable, Bautista, Tan, Miranda, Chan, Cabucana Jr., Miguel — Lakas 9 of 10"
      ]
    ],
    "officialNote": "Names verified against Rappler/ABS-CBN/GMA 2025 results. The city's independence from Isabela province is administrative — it still votes with the 4th district for Congress.",
    "dynasty": "Tan-Dy machine (Lakas): father Joseph Tan (congressman, ex-mayor 2013–2022), daughter Alyssa Sheena Tan (mayor), Jamayne Tan (vice mayor). Older forces: the Miranda clan (former mayors Jose, Joel, Jigs, and 2025 challenger Otep under Aksyon) and the Navarro legacy (Amelita Navarro, NPC, mayor 1999–2010).",
    "climate": "Business-friendly continuity city — investment-promotion active (RDC2 \"Premier Investment Hub\" profile); opposition fragmented across Aksyon/NPC so policy direction changes little.",
    "historyIntro": "From a 1743 Gaddang pueblo to the first city of Region 2 — ruled successively by the Miranda clan, a dominant Navarro decade, and now the Tan-Dy machine.",
    "history": [
      [
        "1743 · Founding",
        "Founded May 4, 1743 as pueblo \"Carig\" (Gaddang/Ibanag settlement on the old Carig River); renamed for St. James the Great, the patron saint."
      ],
      [
        "1910 · Municipality restored",
        "Re-established as a full municipality (had been reverted to a barangay of Echague)."
      ],
      [
        "1994 · First city of Region 2",
        "RA 7720 (May 5, 1994) converted Santiago into an independent component city — ahead of Tuguegarao, Cauayan and Ilagan. Jose C. Miranda was the first city mayor."
      ],
      [
        "1998–1999 · Status crisis",
        "Legally transformed into a component city in 1998; Mayor Joel G. Miranda died in office (Oct 10, 1999); a historic Supreme Court decision later restored independent-component status."
      ],
      [
        "1999–2013 · The Navarro era",
        "Amelita S. Navarro (NPC) finished Miranda's term, then won 2001, 2004 (an upset over the city's \"political Goliath\" per Philstar), 2007 and 2010 — a 14-year run."
      ],
      [
        "2013–2022 · The Tan ascent",
        "Joseph \"Jojo\" Tan won three consecutive terms (2013, 2016, 2019 — the 2019 race vs returning ex-mayor Navarro, who lost 40,747–31,571 after withdrawing her congressional bid)."
      ],
      [
        "2022–present · Tan-Dy consolidation",
        "Daughter Alyssa Sheena Tan succeeded (2022, 48.97%; 2025 landslide 71.88%) with Jamayne Tan as vice mayor and Joseph Tan holding the congressional seat — the family holds mayor + VM + Congress simultaneously."
      ]
    ],
    "caution": "Verify current officials via cityofsantiago.gov.ph. The 1998 downgrading / SC restoration sequence is LGU-history-sourced; the ₱26,357M \"revenue\" figure on aggregator sites is an outlier pending COA confirmation — not used here.",
    "businessClimate": {
      "permitting": "City BPLO with province-wide Business One-Stop Shop (BOSS) initiative (PIA 2026)",
      "investmentPromo": "\"Premier Investment Hub of the North\" via RDC2/r2invest; city actively courts retail, healthcare, education investors",
      "incentives": "Provincial investment code incentives available; no PEZA zone in Santiago — national BOI registration open to qualified projects",
      "taxes": "Standard LGU schedule: real property tax + local business tax on gross sales (per city revenue code; verify at city hall — not published online)"
    }
  },
  "realEstate": {
    "intro": "Compiled from BIR zonal schedules, developer pricing and live listings (Sep 2026) — ASKING prices, not appraisals. Santiago is the deepest real-estate market in the province after Cauayan.",
    "land": [
      [
        "BIR zonal (2023 schedule)",
        "Residential ₱800–10,750/sqm (median ₱4,000 — the highest citywide median in Isabela) · commercial ₱850–32,500/sqm — peaks in Victory Norte along the highway"
      ],
      [
        "Developer land",
        "Camella Alta Santiago (Brgy. Malvar) preselling — house & lot from ₱2.7M (Camella Isabela) to ₱4.09M+ tiers"
      ],
      [
        "Commercial land",
        "10-ha national-road parcel advertised at ₱172M (₱172/sqm... verify — aggregator listing); OnePropertee shows 1,494 Santiago-area properties incl. farm lots at ₱8,875/sqm premium tiers"
      ]
    ],
    "houses": [
      [
        "Developer pricing",
        "Camella Isabela (Brgy. Malvar, Santiago): house & lot from ₱2.7M up; premium tiers from ₱4.09M"
      ],
      [
        "Rent-to-own / resale",
        "OnePropertee hosts 1,275 Santiago rent/rent-to-own listings — the deepest secondary market in the province"
      ],
      [
        "Top-end",
        "₱150M mega-listing (7BR, 550 sqm, broker-listed) — outliers dominate; median transactions far lower"
      ]
    ],
    "rent": [
      [
        "Whole house (top-end)",
        "₱150,000/mo — 7BR/7BA 550-sqm broker listing (luxury tier)"
      ],
      [
        "Land lease",
        "10,000-sqm Nabbuan lot ₱20,000/mo (DotProperty) — industrial/agri lease proxy"
      ],
      [
        "Retail / office",
        "~₱400–500/sqm/mo asking near Centro (thin published benchmark)"
      ]
    ],
    "caution": "Listing asks, not appraisals — verify with a broker and current BIR zonal values (RDO 015, eff. 7/20/2023) before underwriting. Santiago's zonal median (₱4,000/sqm residential) is 4× Ilagan's — expect that gap in pricing too."
  },
  "references": [
    {
      "title": "Santiago, Isabela — Wikipedia (2024 census, RA 7720 cityhood, history)",
      "url": "https://en.wikipedia.org/wiki/Santiago,_Isabela"
    },
    {
      "title": "PSA PSGC — City of Santiago (PSGC 023135000): ICC, 150,313 (2024 POPCEN), 37 barangays",
      "url": "https://psa.gov.ph/classification/psgc/barangays/023135000"
    },
    {
      "title": "City of Santiago LGU — history & social profile (8 hospitals, 151 institutions, Navarro/Tan eras)",
      "url": "https://cityofsantiago.gov.ph"
    },
    {
      "title": "Rappler Halalan 2025 — Santiago City results (Tan 68,743; Jamayne Tan 48,292; electorate 115,767)",
      "url": "https://ph.rappler.com/elections/2025/local-race/isabela/santiago-city"
    },
    {
      "title": "ABS-CBN Halalan 2019 — Santiago results (Tan 40,747 vs Navarro 31,571)",
      "url": "https://halalanresults-aws.abs-cbn.com/local/city-of-santiago"
    },
    {
      "title": "Inquirer — Ex-Santiago mayor Navarro seeks comeback, loses to Tan (2019)",
      "url": "https://newsinfo.inquirer.net/1497182/ex-santiago-city-mayor-seeks-political-comeback"
    },
    {
      "title": "Wikipedia — 2025 Santiago local elections (mayor/VM/council vote counts)",
      "url": "https://en.wikipedia.org/wiki/2025_Santiago,_Isabela,_local_elections"
    },
    {
      "title": "Wikipedia — Joseph Tan (politician): mayor 2013–2022, then 4th-district congressman",
      "url": "https://en.wikipedia.org/wiki/Joseph_Tan_(politician)"
    },
    {
      "title": "Wikipedia — Southern Isabela Medical Center (regional referral hospital)",
      "url": "https://en.wikipedia.org/wiki/Southern_Isabela_Medical_Center"
    },
    {
      "title": "SIMC Citizens' Charter — referral catchment: Isabela, Nueva Vizcaya, Quirino (DOH)",
      "url": "https://simc.doh.gov.ph"
    },
    {
      "title": "Robinsons Land — Robinsons Santiago (first full Robinsons dept store in Region 2)",
      "url": "https://www.robinsonsland.com"
    },
    {
      "title": "City of Santiago LGU — historical background (CPDO: Carig founding, gobernadorcillos, SC status restoration)",
      "url": "https://cityofsantiago.gov.ph/history"
    },
    {
      "title": "lawphil — RA 7720: An Act Converting the Municipality of Santiago into an Independent Component City (1994)",
      "url": "https://lawphil.net/statutes/repacts/ra1994/ra_7720_1994.html"
    },
    {
      "title": "GMA News — Super Typhoon Uwan: 33 Isabela towns dark (Nov 2025)",
      "url": "https://www.gmanetwork.com/news/regions/"
    },
    {
      "title": "Manila Times — Phivolcs: Santiago Segment fault M7.2 potential (Jun 2026)",
      "url": "https://www.manilatimes.net/2026/06/11/regions/phivolcs-identifies-active-fault-lines-in-isabela-amid-rising-mindanao-quake-toll/2362958"
    },
    {
      "title": "ISELCO-I — power rates (residential ₱9.4739/kWh, Mar 2026)",
      "url": "https://www.iselcouno.com"
    },
    {
      "title": "SweldoPH — Region II wage order (₱480 non-agri daily minimum)",
      "url": "https://sweldoph.com/calculators/minimum-wage"
    },
    {
      "title": "PSA FIES 2023 — Region 2 avg family income ₱290.12K; +25.0% growth 2023→2025",
      "url": "https://psa.gov.ph/statistics/income-expenditure/fies/node/1684064928"
    },
    {
      "title": "BIR zonal values — City of Santiago (RDO 015, eff. 7/20/2023: res ₱800–10,750/sqm, com ₱850–32,500/sqm)",
      "url": "https://ren.ph/tools/zonal-value/isabela/santiago"
    },
    {
      "title": "Camella Isabela — Santiago house & lot from ₱2.7M (Brgy. Malvar)",
      "url": "https://www.camella.com.ph/property/camella-isabela/"
    },
    {
      "title": "OnePropertee — 1,275 Santiago rent/RTO listings (₱150K/mo top-end)",
      "url": "https://onepropertee.com/house-for-rent-santiago-city-isabela"
    },
    {
      "title": "DotProperty — Santiago land lease (Nabbuan 10,000 sqm ₱20K/mo)",
      "url": "https://www.dotproperty.com.ph/properties-for-rent/isabela/santiago"
    },
    {
      "title": "Inquirer Business — IWG/Regus 17-location PH expansion naming Ilagan & Santiago",
      "url": "https://business.inquirer.net/495945/iwg-to-expand-ph-flexible-office-portfolio-by-50"
    },
    {
      "title": "Manila Bulletin — Cagayan Valley declared insurgency-free (RPOC, Jun 2026)",
      "url": "https://mb.com.ph/2026/06/06/cagayan-valley-declared-insurgency-free"
    }
  ]
},
  tumauini: {
  "nicknames": [
    "Home of the Unique San Matias Bell Tower",
    "Bambanti Country"
  ],
  "founded": "1704 (Spanish mission) · Town May 10, 1751",
  "etymology": "From the \"mauini\" trees of the old poblacion — a native, asked by Spaniards what the big trees were called, answered with the last word he heard: \"Tumauini\".",
  "general": [
    [
      "Land area",
      "467.30 km² (5.62% of Isabela)"
    ],
    [
      "Barangays",
      "46"
    ],
    [
      "Population (2024)",
      "77,153 (PSA POPCEN) · 16,825 households · ~165/km²"
    ],
    [
      "Elevation",
      "22–126 m (seat ~42 m)"
    ],
    [
      "Languages",
      "Ibanag, Ilocano, Gaddang, Tagalog"
    ],
    [
      "Distance from Manila",
      "~415 km via Maharlika Hwy · between Cabagan (N) and Ilagan (S)"
    ],
    [
      "Festivals",
      "Mangi Festival · Bambanti Festival (province-wide scarecrow festival)"
    ],
    [
      "Income class",
      "1st municipal income class · revenue ₱436.7M (2024) · assets ₱2,117M · poverty incidence 14.82% (2023)"
    ]
  ],
  "market": [
    [
      "Businesses",
      "Retail strip along the National Highway — SM Savemore (2015, first in town) + Puregold anchor the grocery trade; BPLO for current count"
    ],
    [
      "Banks",
      "Rural/commercial bank branches; nearest full banking cluster is Ilagan (20 km S)"
    ],
    [
      "Hospitals",
      "Tumauini Medicare Community Hospital + birthing clinics; tertiary care refers to Isabela Provincial Hospital (Ilagan)"
    ],
    [
      "Education anchors",
      "ISU Tumauini campus (agri/education programs) · public & private high schools"
    ],
    [
      "Retail anchors",
      "SM Savemore · Puregold"
    ],
    [
      "Power",
      "ISELCO-I service area"
    ],
    [
      "Water",
      "Tumauini Water District (LWUA-assisted)"
    ]
  ],
  "labor": [
    [
      "Minimum wage (R2)",
      "₱480/day non-agri · ₱460 agri (Wage Order 02 series)"
    ],
    [
      "Electorate",
      "47,634 registered voters (2025)"
    ]
  ],
  "costs": [
    [
      "Land (BIR zonal)",
      "Residential ₱80–3,750/sqm (median ₱1,250) · commercial up to ₱8,750/sqm along the National Highway (District 1)"
    ],
    [
      "Internet",
      "PLDT/Converge fiber available in the poblacion"
    ]
  ],
  "demand": [
    [
      "Avg family income (R2)",
      "₱290,120/yr (FIES 2023)"
    ],
    [
      "Poverty incidence",
      "14.82% (2023) — above the national family rate (10.9%)"
    ]
  ],
  "catchment": [
    [
      "Position",
      "Northern Isabela farm town on the Maharlika Hwy, 20 km north of Ilagan"
    ],
    [
      "Catchment logic",
      "Serves its 46 barangays plus Mallig Plains traffic; shoppers go to Ilagan for malls/tertiary care"
    ]
  ],
  "points": {
    "cards": [
      "San Matias Parish Church — a National Cultural Treasure with the country's only cylindrical brick bell tower (1785-97, Dominican-built)",
      "Bambanti Festival heartland — the province-wide scarecrow festival celebrates the corn/rice farm economy",
      "Mangi Festival celebrates the town's founding and patronage",
      "Camp Samal — pre-war scouting/heritage site of the Boy Scouts of the Philippines",
      "Magoli River eco-tourism (swimming/rapids)",
      "SM Savemore (2015) made Tumauini an early SM Savemore site in rural Cagayan Valley"
    ],
    "floodRisk": [
      "Poblacion barangays along the Panti River",
      "low-lying rice barangays near the Cagayan River"
    ],
    "floodNote": "Northern Isabela floodplain — Typhoon Uwan (Nov 2025) hit the province-wide grid; verify barangay-level maps with the MDRRMO.",
    "geohazard": {
      "seismic": "No mapped active fault trace through the poblacion (Phivolcs Jun 2026 list covers Divilacan/Santiago/Ilagan faults) — verify site-level via FaultFinder.",
      "typhoon": "Frequent direct landfall zone (Uwan Nov 2025).",
      "implication": "Wind + flood exposure → structural spec + drainage capacity matter for any build."
    },
    "security": "Cagayan Valley declared insurgency-free (RPOC, Jun 2026)."
  },
  "political": {
    "officials": [
      [
        "Mayor",
        "Venus T. Bautista (PFP)",
        "27,699 votes (58.15%) vs Mark Anthony De Alban (IND) 8,904 — re-elected 2025"
      ],
      [
        "Vice Mayor",
        "Christopher \"Cris\" B. Uy (PFP)",
        "27,539 votes (57.81%)"
      ],
      [
        "District Rep",
        "Antonio \"Tonypet\" Albano (Lakas)",
        "Isabela 1st district (with Ilagan, Cabagan, etc.) — unopposed 2025"
      ],
      [
        "Council",
        "Sangguniang Bayan (8 elected)",
        "PFP-dominated 2025 batch"
      ]
    ],
    "officialNote": "2025 winners verified via Rappler/ABS-CBN halalan results; confirm officeholders at tumauini-isabela.gov.ph before formal use.",
    "dynasty": "Bautista-Uy coalition (PFP) runs the town; the De Alban clan is the perennial challenger. Part of the 1st-district Albano orbit.",
    "climate": "Stable agricultural-town politics; farm services and flood control dominate the agenda.",
    "historyIntro": "A 1704 Dominican mission that became a town in 1751 — its church tower is its legacy landmark.",
    "history": [
      [
        "1704 · Mission founded",
        "Established as a Spanish (Dominican) mission; civil administration shuttled between Cabagan and Ilagan."
      ],
      [
        "May 10, 1751 · Townhood",
        "Became a town in its own right under the patronage of St. Matthias."
      ],
      [
        "1785–1797 · The bell tower",
        "Dominicans built the San Matias Parish Church with the Philippines' only cylindrical brick bell tower — now a National Cultural Treasure."
      ],
      [
        "1952–1957 · Territorial cuts",
        "Barrios Barucbuc, Siempre Viva, Bimmonton, Pasurgong, Manga and Settlement No. 1 went to the new town of Mallig (1952); more barrios followed in 1957 — the Mallig Plains frontier was carved out of Tumauini."
      ],
      [
        "2015 · Modern retail",
        "SM opened its first Savemore Market branch here along the National Highway, followed by Puregold."
      ],
      [
        "2025 · Present",
        "Mayor Venus Bautista (PFP) re-elected at 58.15%; the town remains a 1st-class farm municipality in the Albano-led 1st district."
      ]
    ],
    "caution": "Verify officials via the LGU site; historical detail is Wikipedia-sourced (Dominican records via secondary histories).",
    "businessClimate": {
      "permitting": "Municipal BPLO + province-wide Business One-Stop Shop (BOSS) initiative (PIA 2026)",
      "taxes": "Standard LGU schedule: real property tax + business tax on gross sales (per municipal revenue code)"
    }
  },
  "realEstate": {
    "intro": "BIR zonal values (RDO 015, eff. 7/20/2023) as the pricing floor — private listings are thin and mostly Facebook/broker postings.",
    "land": [
      [
        "BIR zonal",
        "Residential ₱80–3,750/sqm (median ₱1,250) · commercial ₱1,500–8,750/sqm — peaks along the National Highway, Barangay District 1"
      ],
      [
        "Most affordable",
        "₱80/sqm interior lots (Sinippil) — farm-adjacent pricing"
      ]
    ],
    "caution": "Zonal values are tax floors, not market prices; verify with brokers and RDO 015 before underwriting."
  },
  "references": [
    {
      "title": "Tumauini — Wikipedia (2024 census, history 1704/1751, San Matias tower, Savemore)",
      "url": "https://en.wikipedia.org/wiki/Tumauini"
    },
    {
      "title": "PSA PSGC — Tumauini (PSGC 0203137000): 1st income class, 77,153 (2024), 46 barangays",
      "url": "https://psa.gov.ph/classification/psgc/barangays/0203137000"
    },
    {
      "title": "PhilAtlas — Tumauini profile (barangay-level data)",
      "url": "https://www.philatlas.com/luzon/r02/isabela/tumauini.html"
    },
    {
      "title": "Tumauini LGU — official site (services, programs)",
      "url": "https://tumauini-isabela.gov.ph"
    },
    {
      "title": "Rappler Halalan 2025 — Tumauini results (Bautista 27,699; Uy 27,539)",
      "url": "https://ph.rappler.com/elections/2025/local-race/isabela/tumauini"
    },
    {
      "title": "ABS-CBN Halalan 2025 — Tumauini official results",
      "url": "https://halalanresults.abs-cbn.com/local/isabela/tumauini"
    },
    {
      "title": "PeoPlaid/ivoteph — Tumauini 2025 electorate (47,634 voters)",
      "url": "https://peoplaid.com"
    },
    {
      "title": "GMA News — 2025 election returns, Isabela towns",
      "url": "https://www.gmanetwork.com/news/eleksyon/2025/results/local/REGION+II/ISABELA"
    },
    {
      "title": "REN.PH — BIR zonal values, Tumauini (res ₱80–3,750/sqm, median ₱1,250)",
      "url": "https://ren.ph/tools/zonal-value/isabela/tumauini"
    },
    {
      "title": "PSA FIES 2023 — Region 2 avg family income ₱290.12K",
      "url": "https://psa.gov.ph/statistics/income-expenditure/fies/node/1684064928"
    },
    {
      "title": "SweldoPH — Region II wage order (₱480 non-agri)",
      "url": "https://sweldoph.com/calculators/minimum-wage"
    },
    {
      "title": "Wikipedia — Tumauini History (1704 mission, 1751 townhood, 1952/1957 Mallig carve-outs)",
      "url": "https://en.wikipedia.org/wiki/Tumauini#History"
    },
    {
      "title": "National Museum / Wikipedia — San Matias Parish Church, National Cultural Treasure (cylindrical bell tower)",
      "url": "https://en.wikipedia.org/wiki/Tumauini#San_Matias_Parish_Church"
    },
    {
      "title": "Wikipedia — Mallig, Isabela (1952 creation out of Tumauini barrios)",
      "url": "https://en.wikipedia.org/wiki/Mallig,_Isabela"
    }
  ]
},
  echague: {
  "nicknames": [
    "First Capital of Nueva Vizcaya (pre-1865)",
    "Home of the Yogad"
  ],
  "founded": "1752 · ecclesiastically under St. Joseph May 12, 1753",
  "etymology": "Formerly \"Camarag\" (a big tree common in the place); renamed for Spanish Governor-General Rafael de Echagüe y Bermingham.",
  "general": [
    [
      "Land area",
      "680.80 km²"
    ],
    [
      "Barangays",
      "64"
    ],
    [
      "Population (2024)",
      "91,320 (PSA POPCEN) · 23,536 households · ~134/km²"
    ],
    [
      "Elevation",
      "47–101 m (seat ~70 m)"
    ],
    [
      "Languages",
      "Yogad (ancestral, conserved locally), Ilocano, Ibanag, Gaddang, Tagalog"
    ],
    [
      "Distance from Manila",
      "~360 km · adjacent to Cauayan City (W) and Ilagan (N)"
    ],
    [
      "Festivals",
      "Panagdadapun Festival · Bambanti (province-wide)"
    ],
    [
      "Income class",
      "1st municipal income class · revenue ₱656M (2024) · assets ₱1,527M · poverty incidence 11.4% (2023)"
    ]
  ],
  "market": [
    [
      "Businesses",
      "Agri-trade + highway commercial strip; farm machinery dealers and rice mills serve the Cauayan-Echague corridor; BPLO for count"
    ],
    [
      "Banks",
      "Branch banks along the Maharlika Hwy; full cluster next door in Cauayan"
    ],
    [
      "Hospitals",
      "RHU + private clinics; tertiary care in Cauayan (CVMC, IUDMC) 15-20 min away"
    ],
    [
      "Education anchors",
      "ISU Echague campus (flagship agri campus of ISU) · public high schools"
    ],
    [
      "Retail anchors",
      "Puregold; corridor Savemore presence; public market hub"
    ],
    [
      "Power",
      "ISELCO-I service area"
    ],
    [
      "Water",
      "Echague Water District"
    ]
  ],
  "labor": [
    [
      "Minimum wage (R2)",
      "₱480/day non-agri · ₱460 agri (Wage Order 02 series)"
    ],
    [
      "Electorate",
      "58,845 registered voters (2025)"
    ]
  ],
  "costs": [
    [
      "Land (BIR zonal)",
      "Residential ₱500–2,500/sqm (median ₱1,125) · commercial up to ₱4,375/sqm (Cabugao, along the National Highway)"
    ],
    [
      "Internet",
      "PLDT/Converge fiber along the Maharlika corridor"
    ]
  ],
  "demand": [
    [
      "Avg family income (R2)",
      "₱290,120/yr (FIES 2023)"
    ],
    [
      "Poverty incidence",
      "11.4% (2023) — roughly at the national family rate"
    ]
  ],
  "catchment": [
    [
      "Position",
      "Immediately southeast of Cauayan City on the Maharlika Hwy — inside the Cauayan commute belt"
    ],
    [
      "Catchment logic",
      "Cheaper land than Cauayan for warehousing/expansion; shares the city's airport (CYZ ~20 min)"
    ]
  ],
  "points": {
    "cards": [
      "First capital of Nueva Vizcaya (as Camarag) before the seat moved to Bayombong in 1865",
      "Ancestral home of the Yogad language — one of the smallest ethnolinguistic groups in the valley",
      "ISU Echague is the flagship agricultural campus of the Isabela State University system",
      "Direct neighbor of Cauayan City — effectively the city's southeastern expansion zone",
      "Rice/corn powerhouse with farm-machinery trade along the highway"
    ],
    "floodRisk": [
      "Riverside barangays of the Cagayan River",
      "Gabriela Silang-area lowlands"
    ],
    "floodNote": "Cagayan River western bank exposure; Uwan (Nov 2025) flooded province-wide. Verify with MDRRMO maps.",
    "geohazard": {
      "seismic": "No mapped active fault trace (Phivolcs Jun 2026 list covers Divilacan/Santiago/Ilagan faults) — verify site-level.",
      "typhoon": "Frequent landfall province (Uwan Nov 2025, Paolo Sig#4).",
      "implication": "Standard Cagayan Valley build spec: flood-resilient siting + wind rating."
    },
    "security": "Cagayan Valley declared insurgency-free (RPOC, Jun 2026)."
  },
  "political": {
    "officials": [
      [
        "Mayor",
        "Faustino \"Inno\" A. Dy V (Lakas)",
        "40,279 votes (68.45%) vs Don Primo Gaffud (IND) 11,552 — elected 2025 after three terms as 6th-district congressman"
      ],
      [
        "Vice Mayor",
        "Allan P. Tupong (Lakas)",
        "38,048 votes"
      ],
      [
        "District Rep",
        "Faustino \"Kiko\" Dy (Lakas)",
        "6th district (with Cauayan, San Guillermo, San Isidro) — won 2025; the Dy rotation continues"
      ],
      [
        "Council",
        "Sangguniang Bayan (8 elected)",
        "Lakas sweep 2025 (Alili, Agustin, Alzate, Domingo…)"
      ]
    ],
    "officialNote": "2025 winners verified via Rappler/ABS-CBN/GMA returns. The Dy family now holds Echague's mayorship + the 6th-district seat + the House speakership (Bojie Dy III).",
    "dynasty": "The Dy dynasty's newest stronghold: Inno Dy V moved from Congress to the mayor's office in 2025, cousin Kiko Dy took the congressional seat, and family patriarch Speaker Bojie Dy III anchors the 6th district.",
    "climate": "One-party (Lakas) dominance with token independent opposition; continuity politics, business-friendly.",
    "historyIntro": "From Nueva Vizcaya's first capital to a Dy-family bastion beside Cauayan City.",
    "history": [
      [
        "1752 · Founding as Camarag",
        "Founded 1752; ecclesiastically placed under St. Joseph on May 12, 1753. Camarag = a big tree common in the place."
      ],
      [
        "Pre-1865 · NV's first capital",
        "Before separating from Nueva Vizcaya, Camarag was the province's first capital — the seat moved to Bayombong in 1865."
      ],
      [
        "1856 · To Isabela",
        "When Isabela de Luzon was created (1856), Echague became part of the new province."
      ],
      [
        "Renamed",
        "The town took the name of Governor-General Rafael de Echagüe y Bermingham during the Spanish reorganization."
      ],
      [
        "2018 · 6th district created",
        "RA 11080 (Sep 27, 2018) carved the new 6th district around Cauayan with Echague, San Guillermo and San Isidro; Inno Dy V won it 2019 and 2022 (90.8%)."
      ],
      [
        "2025 · Dy consolidation",
        "Inno Dy V termed out of Congress and won the mayorship at 68.45%; Kiko Dy won the congressional seat — the third generation now holds town, district and the speakership."
      ]
    ],
    "caution": "Verify officials via the LGU site. The 2025 6th-district result is read from Echague returns (Kiko Dy 70.18%) — confirm the province-wide certificate of canvass.",
    "businessClimate": {
      "permitting": "Municipal BPLO + province-wide BOSS initiative (PIA 2026)",
      "investmentPromo": "Positions itself as Cauayan's expansion ground — cheaper land, same corridor",
      "taxes": "Standard LGU schedule (municipal revenue code)"
    }
  },
  "realEstate": {
    "intro": "BIR zonal values (RDO 015, eff. 7/20/2023) as the floor — the corridor's land trades privately at Cauayan-adjacent premiums.",
    "land": [
      [
        "BIR zonal",
        "Residential ₱500–2,500/sqm (median ₱1,125) · commercial ₱1,125–4,375/sqm — peaks in Cabugao along the National Highway"
      ],
      [
        "Most affordable",
        "₱500/sqm interior lots (Angoluan)"
      ]
    ],
    "caution": "Zonal values are tax floors, not market prices; Cauayan-spillover pricing can exceed zonals materially."
  },
  "references": [
    {
      "title": "Echague — Wikipedia (2024 census, Camarag etymology, NV first-capital history)",
      "url": "https://en.wikipedia.org/wiki/Echague"
    },
    {
      "title": "PSA PSGC — Echague (PSGC 0203112000): 1st income class, 91,320 (2024), 64 barangays",
      "url": "https://psa.gov.ph/classification/psgc/barangays/0203112000"
    },
    {
      "title": "PhilAtlas — Echague profile (barangay-level data)",
      "url": "https://www.philatlas.com/luzon/r02/isabela/echague.html"
    },
    {
      "title": "Echague LGU — official site (services, programs)",
      "url": "https://echague.gov.ph"
    },
    {
      "title": "Rappler Halalan 2025 — Echague results (Inno Dy 40,279 / 68.45%)",
      "url": "https://ph.rappler.com/elections/2025/local-race/isabela/echague"
    },
    {
      "title": "ABS-CBN Halalan 2025 — Echague official results (Dy 40,279; Tupong 38,048)",
      "url": "https://halalanresults.abs-cbn.com/local/isabela/echague"
    },
    {
      "title": "GMA Eleksyon 2025 — Echague returns",
      "url": "https://www.gmanetwork.com/news/eleksyon/2025/results/local/REGION+II/ISABELA/ECHAGUE"
    },
    {
      "title": "Wikipedia — Isabela's 6th congressional district (RA 11080; Dy rotation)",
      "url": "https://en.wikipedia.org/wiki/Isabela%27s_6th_congressional_district"
    },
    {
      "title": "REN.PH — BIR zonal values, Echague (res ₱500–2,500/sqm, median ₱1,125)",
      "url": "https://ren.ph/tools/zonal-value/isabela/echague"
    },
    {
      "title": "PSA FIES 2023 — Region 2 avg family income ₱290.12K",
      "url": "https://psa.gov.ph/statistics/income-expenditure/fies/node/1684064928"
    },
    {
      "title": "SweldoPH — Region II wage order (₱480 non-agri)",
      "url": "https://sweldoph.com/calculators/minimum-wage"
    },
    {
      "title": "Wikipedia — Echague History (1752 founding, St. Joseph 1753, NV capital to Bayombong 1865)",
      "url": "https://en.wikipedia.org/wiki/Echague#History"
    },
    {
      "title": "Fr. Pedro Salgado OP — Cagayan Valley and Eastern Cordillera (Camarag etymology, via Wikipedia)",
      "url": "https://en.wikipedia.org/wiki/Echague#Etymology"
    },
    {
      "title": "PhilAtlas — Yogad people/language context",
      "url": "https://www.philatlas.com/luzon/r02/isabela/echague.html"
    }
  ]
},
  roxas: {
  "nicknames": [
    "Crossroads of northern Isabela",
    "Home town of the Albano clan"
  ],
  "founded": "July 1, 1948 (EO 136 by President Elpidio Quirino) — out of Barrio Vira",
  "etymology": "Named for President Manuel Roxas; formerly Bindang (Bayani) and Barrio Vira of the old Cagayan province.",
  "general": [
    [
      "Land area",
      "184.80 km²"
    ],
    [
      "Barangays",
      "26"
    ],
    [
      "Population (2024)",
      "66,593 (PSA POPCEN) · 16,094 households · ~360/km²"
    ],
    [
      "Elevation",
      "45–97 m (seat ~61 m)"
    ],
    [
      "Languages",
      "Ilocano, Tagalog, English"
    ],
    [
      "Distance from Manila",
      "~390 km · on the Cauayan-Ilagan-Mallig corridor"
    ],
    [
      "Festivals",
      "Town fiesta (Jan) · Bambanti (province-wide)"
    ],
    [
      "Income class",
      "1st municipal income class · revenue ₱649.2M (2024) · assets ₱1,318M · poverty incidence 13.24% (2021)"
    ]
  ],
  "market": [
    [
      "Businesses",
      "Commercial hub of the 5th district's farm belt — rice/corn mills, trading posts along the Maharlika Hwy; BPLO for count"
    ],
    [
      "Banks",
      "Rural bank branches; full cluster in Ilagan/Cauayan"
    ],
    [
      "Hospitals",
      "Roxas District Hospital (provincial) + private clinics; tertiary referral to Ilagan"
    ],
    [
      "Education anchors",
      "ISU Roxas campus (Roxas State College lineage) · public high schools"
    ],
    [
      "Retail anchors",
      "Savemore/Puregold-class groceries + public market"
    ],
    [
      "Power",
      "ISELCO-I service area"
    ],
    [
      "Water",
      "Roxas Water District"
    ]
  ],
  "labor": [
    [
      "Minimum wage (R2)",
      "₱480/day non-agri · ₱460 agri (Wage Order 02 series)"
    ],
    [
      "Electorate",
      "41,442 registered voters (2025)"
    ]
  ],
  "costs": [
    [
      "Land (BIR zonal)",
      "Residential ₱563–10,000/sqm (median ₱1,000) · commercial up to ₱18,750/sqm (Bantug, National Highway)"
    ],
    [
      "Internet",
      "PLDT/Converge fiber on the highway corridor"
    ]
  ],
  "demand": [
    [
      "Avg family income (R2)",
      "₱290,120/yr (FIES 2023)"
    ],
    [
      "Poverty incidence",
      "13.24% (2021)"
    ]
  ],
  "catchment": [
    [
      "Position",
      "Crossroads where the Maharlika Hwy meets the Mallig Plains roads — trading hub between Ilagan and the northern plains"
    ],
    [
      "Catchment logic",
      "Draws farm trade from Mallig, Quezon, San Manuel edges; bigger retail pulls north to Tuguegarao, south to Ilagan"
    ]
  ],
  "points": {
    "cards": [
      "Created by presidential fiat: Executive Order 136 (Jul 1, 1948) by President Elpidio Quirino, honoring Manuel Roxas",
      "Trading hub of the Mallig Plains farm belt — rice/corn mills and equipment dealers",
      "Albano family country — the dynasty's municipal base in the 5th district",
      "ISU Roxas campus anchors agri education"
    ],
    "floodRisk": [
      "Lowland rice barangays",
      "Siffu/marsh-adjacent areas"
    ],
    "floodNote": "Plains-town flood exposure; Uwan (Nov 2025) hit province-wide. Verify with MDRRMO maps.",
    "geohazard": {
      "seismic": "No mapped active fault trace through the town proper — verify via Phivolcs FaultFinder.",
      "typhoon": "Frequent landfall province (Uwan Nov 2025).",
      "implication": "Standard Cagayan Valley build spec: flood-resilient siting + wind rating."
    },
    "security": "Cagayan Valley declared insurgency-free (RPOC, Jun 2026)."
  },
  "political": {
    "officials": [
      [
        "Mayor",
        "Benedict C. Calderon (PFP)",
        "24,389 votes (58.85%) vs Gretelmar Paguyo (IND) 9,271 — re-elected 2025"
      ],
      [
        "Vice Mayor",
        "Kristin Uy (IND)",
        "23,308 votes (56.24%) — an independent beating PFP's Jonathan Navalta (19,791)"
      ],
      [
        "District Rep",
        "Rodolfo \"Rodito\" Albano III (PFP)",
        "5th district — won 2025 (56.63% in Roxas returns); the Albano dynasty's seat"
      ],
      [
        "Council",
        "Sangguniang Bayan (8 elected)",
        "PFP-led batch mixed with independents"
      ]
    ],
    "officialNote": "2025 winners verified via Rappler returns. Note the split executive: PFP mayor + INDEPENDENT vice mayor — unusual for Isabela towns.",
    "dynasty": "Albano dynasty country (5th district); Calderon machine runs the mayor's office; the Uy family holds the vice mayoralty.",
    "climate": "Machine politics with real contestation — 2025 saw genuine independents in both races.",
    "historyIntro": "A Quirino-era creation (1948) out of Barrio Vira, grown into the Mallig Plains' trading hub.",
    "history": [
      [
        "Pre-1948 · Bindang/Vira",
        "The place was called Bindang (Bayani), part of the old Provincia del Valle de Cagayan; later Barrio Vira."
      ],
      [
        "Jul 1, 1948 · EO 136",
        "President Elpidio Quirino created the municipality of Roxas from Barrio Vira, honoring his predecessor Manuel Roxas."
      ],
      [
        "1950s–70s · Plains boom",
        "Grew as the crossroads market of the Mallig Plains corn belt."
      ],
      [
        "Albano era",
        "The Albano clan made Roxas its political base across the late 20th century (congressional + local posts)."
      ],
      [
        "2025 · Split ticket",
        "Calderon (PFP) re-elected mayor 58.85% — but independent Kristin Uy took the vice mayoralty, a genuine opposition win."
      ]
    ],
    "caution": "Verify officials via the LGU site; EO 136 date (Jul 1, 1948) vs infobox founded (Jul 4, 1948) — the EO date is the legal creation.",
    "businessClimate": {
      "permitting": "Municipal BPLO + province-wide BOSS initiative (PIA 2026)",
      "taxes": "Standard LGU schedule (municipal revenue code)"
    }
  },
  "realEstate": {
    "intro": "BIR zonal values (RDO 015, eff. 7/20/2023) as the pricing floor; private listings thin.",
    "land": [
      [
        "BIR zonal",
        "Residential ₱563–10,000/sqm (median ₱1,000) · commercial ₱750–18,750/sqm — peaks in Bantug along the National Highway; highest residential in Vira (₱10,000)"
      ]
    ],
    "caution": "Zonal values are tax floors, not market prices."
  },
  "references": [
    {
      "title": "Roxas, Isabela — Wikipedia (2024 census, EO 136 founding, Bindang etymology)",
      "url": "https://en.wikipedia.org/wiki/Roxas,_Isabela"
    },
    {
      "title": "PSA PSGC — Roxas (PSGC 0203126000): 1st income class, 66,593 (2024), 26 barangays",
      "url": "https://psa.gov.ph/classification/psgc/barangays/0203126000"
    },
    {
      "title": "PhilAtlas — Roxas profile (barangay-level data)",
      "url": "https://www.philatlas.com/luzon/r02/isabela/roxas.html"
    },
    {
      "title": "Roxas LGU — official site (services, programs)",
      "url": "https://roxas-isabela.gov.ph"
    },
    {
      "title": "Rappler Halalan 2025 — Roxas results (Calderon 24,389; Uy 23,308)",
      "url": "https://ph.rappler.com/elections/2025/local-race/isabela/roxas"
    },
    {
      "title": "PeoPlaid — Roxas 2025 results & electorate (41,442 voters)",
      "url": "https://peoplaid.com/2025/05/09/roxas-isabela-election-2025-results-winners"
    },
    {
      "title": "Wikipedia — Isabela's 5th congressional district (Albano dynasty)",
      "url": "https://en.wikipedia.org/wiki/Isabela%27s_5th_congressional_district"
    },
    {
      "title": "REN.PH — BIR zonal values, Roxas (res ₱563–10,000/sqm, com to ₱18,750)",
      "url": "https://ren.ph/tools/zonal-value/isabela/roxas"
    },
    {
      "title": "PSA FIES 2023 — Region 2 avg family income ₱290.12K",
      "url": "https://psa.gov.ph/statistics/income-expenditure/fies/node/1684064928"
    },
    {
      "title": "SweldoPH — Region II wage order (₱480 non-agri)",
      "url": "https://sweldoph.com/calculators/minimum-wage"
    },
    {
      "title": "Wikipedia — Roxas Etymology & History (EO 136, Quirino, Manuel Roxas namesake)",
      "url": "https://en.wikipedia.org/wiki/Roxas,_Isabela#Etymology"
    },
    {
      "title": "Isabela (province) — Wikipedia (5th district composition)",
      "url": "https://en.wikipedia.org/wiki/Isabela_(province)"
    }
  ]
},
  cordon: {
  "nicknames": [
    "Gateway to the South (Quirino/NV)",
    "Crossroads of Region 2"
  ],
  "founded": "1878 (settlement under Carig) · Town 1896 (Spanish Royal Decree)",
  "etymology": "Unclear — first recorded 1837 as a Spanish military warehouse called \"Cordon\"; other accounts say a quarantine stop for travelers.",
  "general": [
    [
      "Land area",
      "144.00 km²"
    ],
    [
      "Barangays",
      "26 (incl. Magat Reservoir territories Taliktik & Dallao)"
    ],
    [
      "Population (2024)",
      "46,688 (PSA POPCEN) · 11,578 households · ~324/km²"
    ],
    [
      "Elevation",
      "86–530 m (seat ~138 m)"
    ],
    [
      "Languages",
      "Ilocano, Gaddang, Ibanag, Tagalog"
    ],
    [
      "Distance from Manila",
      "~310 km — first Isabela town from Nueva Vizcaya on the Maharlika Hwy"
    ],
    [
      "Festivals",
      "Town fiesta · Bambanti (province-wide)"
    ],
    [
      "Income class",
      "1st municipal income class · revenue ₱244.6M (2024) · assets ₱515.1M · poverty incidence 12.96% (2023)"
    ]
  ],
  "market": [
    [
      "Businesses",
      "Highway service economy — gas stops, eateries, agritrade at the Isabela-Quirino-NV junction; BPLO for count"
    ],
    [
      "Banks",
      "LandBank/rural bank presence; full banking in Santiago (10 min)"
    ],
    [
      "Hospitals",
      "RHU + clinics; tertiary care in Santiago (SIMC) — 10-15 min"
    ],
    [
      "Education anchors",
      "Public high schools; higher ed in Santiago"
    ],
    [
      "Power",
      "ISELCO-I service area"
    ],
    [
      "Water",
      "Cordon Water District"
    ]
  ],
  "labor": [
    [
      "Minimum wage (R2)",
      "₱480/day non-agri · ₱460 agri (Wage Order 02 series)"
    ],
    [
      "Electorate",
      "29,546 registered voters (2025)"
    ]
  ],
  "costs": [
    [
      "Land (BIR zonal)",
      "Residential ₱500–7,000/sqm (median ₱1,000) · commercial up to ₱10,000/sqm (Malapat, National Highway)"
    ],
    [
      "Internet",
      "Fiber along the Maharlika corridor"
    ]
  ],
  "demand": [
    [
      "Avg family income (R2)",
      "₱290,120/yr (FIES 2023)"
    ],
    [
      "Poverty incidence",
      "12.96% (2023)"
    ]
  ],
  "catchment": [
    [
      "Position",
      "Southern gateway of Isabela — the mountain-pass junction of Isabela, Quirino and Nueva Vizcaya"
    ],
    [
      "Catchment logic",
      "Highway traffic + Quirino-bound commuters; Santiago's orbit keeps retail competitive pressure high"
    ]
  ],
  "points": {
    "cards": [
      "The southern gateway of Isabela — every road from Nueva Vizcaya/Quirino enters through Cordon",
      "Founded 1878 as a rest stop and military outpost at the mountain pass (under old Carig/Santiago); townhood by Spanish Royal Decree 1896",
      "Magat Reservoir territories (Taliktik, Dallao) — hydropower country",
      "The 1972 Taringsing Documents raid (NPA hideout, Barrio Taringsing) fed the justifications for Marcos's martial-law declaration",
      "Modern crossroads economy: gas, food, agritrade serving three provinces"
    ],
    "floodRisk": [
      "Riverside barangays near the Magat/Diadi rivers"
    ],
    "floodNote": "Magat dam-release and riverine exposure; Uwan (Nov 2025) province-wide. Verify with MDRRMO maps.",
    "geohazard": {
      "seismic": "Santiago Segment fault (M7.2 potential) runs near the corridor — verify site-level via Phivolcs FaultFinder.",
      "typhoon": "Landfall province (Uwan Nov 2025).",
      "implication": "Seismic + flood exposure at the pass junction → site due diligence is mandatory."
    },
    "security": "Cagayan Valley declared insurgency-free (RPOC, Jun 2026) — a historical NPA heartland (Taringsing 1972) now cleared."
  },
  "political": {
    "officials": [
      [
        "Mayor",
        "Florenz M. Zuniega (Aksyon)",
        "14,305 votes (48.42%) vs Victor Dy (Lakas) 9,384 (31.76%) — won 2025, defeating a Dy"
      ],
      [
        "Vice Mayor",
        "Lynn M. Zuniega-Dy (PFP)",
        "15,197 votes (51.44%) — the mayor's relative; an Aksyon mayor with a PFP (Zuniega-Dy) vice mayor"
      ],
      [
        "District Rep",
        "Joseph S. Tan (Lakas)",
        "4th district (with Santiago, Ramon, San Isidro)"
      ],
      [
        "Council",
        "Sangguniang Bayan (8 elected)",
        "Mixed Aksyon/PFP/Lakas 2025 batch"
      ]
    ],
    "officialNote": "2025 winners verified via Rappler returns. Cordon is one of the few Isabela towns where an opposition slate (Aksyon) beats a Dy — though the VM is a Zuniega-Dy, so the family web persists.",
    "dynasty": "Zuniega family (mayor) + Dy connection via the vice mayoralty (Lynn Zuniega-Dy); Victor Dy (Lakas) ran and lost — the Dy clan reaches even here, but does not yet own it.",
    "climate": "Contested politics — Aksyon beat Lakas in 2025; local issues (highway services, Magat releases) dominate.",
    "historyIntro": "A Spanish-era rest stop at the mountain pass, an NPA flashpoint under martial law, today a three-province crossroads.",
    "history": [
      [
        "1878 · Rest stop",
        "Founded as a settlement under Carig (now Santiago) — a rest stop for travelers and a military outpost at the Isabela-NV mountain pass."
      ],
      [
        "1896 · Townhood",
        "Converted into a town by Spanish Royal Decree; the name first appears in an 1837 expedition record (a warehouse called \"Cordon\")."
      ],
      [
        "1972 · Taringsing Documents",
        "A Jul 18, 1972 military raid on an NPA hideout in Barrio Taringsing uncovered CPP-NPA plans to overthrow the government by 1973 — cited among the justifications for Marcos's martial law."
      ],
      [
        "2025 · Opposition wins",
        "Aksyon's Florenz Zuniega beat Lakas's Victor Dy for mayor — opposition politics stay alive at the province's gateway."
      ]
    ],
    "caution": "Verify officials via the LGU site; the Taringsing/martial-law link is Wikipedia-sourced (cite the primary documents if used formally).",
    "businessClimate": {
      "permitting": "Municipal BPLO + province-wide BOSS initiative (PIA 2026)",
      "taxes": "Standard LGU schedule (municipal revenue code)"
    }
  },
  "realEstate": {
    "intro": "BIR zonal values (RDO 015, eff. 7/20/2023) as the pricing floor; highway-frontage lots are the premium product.",
    "land": [
      [
        "BIR zonal",
        "Residential ₱500–7,000/sqm (median ₱1,000) · commercial ₱813–10,000/sqm — peaks in Malapat along the National Highway"
      ]
    ],
    "caution": "Zonal values are tax floors, not market prices."
  },
  "references": [
    {
      "title": "Cordon, Isabela — Wikipedia (2024 census, 1878 founding, Taringsing Documents)",
      "url": "https://en.wikipedia.org/wiki/Cordon,_Isabela"
    },
    {
      "title": "PSA PSGC — Cordon (PSGC 0203109000): 1st income class, 46,688 (2024), 26 barangays",
      "url": "https://psa.gov.ph/classification/psgc/barangays/0203109000"
    },
    {
      "title": "PhilAtlas — Cordon profile (barangay-level data)",
      "url": "https://www.philatlas.com/luzon/r02/isabela/cordon.html"
    },
    {
      "title": "Cordon LGU — official site (services, programs)",
      "url": "https://cordon-isabela.gov.ph"
    },
    {
      "title": "Rappler Halalan 2025 — Cordon results (Zuniega 14,305; Zuniega-Dy 15,197)",
      "url": "https://ph.rappler.com/elections/2025/local-race/isabela/cordon"
    },
    {
      "title": "PeoPlaid — Cordon 2025 results & electorate (29,546 voters)",
      "url": "https://peoplaid.com/2025/05/09/cordon-election-2025-results-winners"
    },
    {
      "title": "Wikipedia — Isabela's 4th congressional district",
      "url": "https://en.wikipedia.org/wiki/Isabela%27s_4th_congressional_district"
    },
    {
      "title": "Wikipedia — Southern Isabela Medical Center (Santiago referral)",
      "url": "https://en.wikipedia.org/wiki/Southern_Isabela_Medical_Center"
    },
    {
      "title": "REN.PH — BIR zonal values, Cordon (res ₱500–7,000/sqm, com to ₱10,000)",
      "url": "https://ren.ph/tools/zonal-value/isabela/cordon"
    },
    {
      "title": "PSA FIES 2023 — Region 2 avg family income ₱290.12K",
      "url": "https://psa.gov.ph/statistics/income-expenditure/fies/node/1684064928"
    },
    {
      "title": "SweldoPH — Region II wage order (₱480 non-agri)",
      "url": "https://sweldoph.com/calculators/minimum-wage"
    },
    {
      "title": "Wikipedia — Cordon History (1878 Carig settlement, 1896 Royal Decree, 1837 warehouse)",
      "url": "https://en.wikipedia.org/wiki/Cordon,_Isabela#History"
    },
    {
      "title": "Wikipedia — Martial law under Marcos (Taringsing Documents context)",
      "url": "https://en.wikipedia.org/wiki/Martial_law_under_Ferdinand_Marcos"
    },
    {
      "title": "Wikipedia — Magat Dam (reservoir context)",
      "url": "https://en.wikipedia.org/wiki/Magat_Dam"
    }
  ]
},
};
