# Padaca Dossier Audit — Fourth-Pass Fact-Check (September 19, 2026)

**Auditor:** Hermes fact-checking subagent (glm-5.3-flash, live web access)
**Subject:** `research/grace-padaca.md` (20 sections, 48 references, 37-row matrix) + Notion sync check
**Method:** every major claim cluster re-verified against fresh web sources + the 48 archived snapshots in `research/sources-snapshot/`. Priority: primary sources (lawphil, elibrary.judiciary.gov.ph, hret.gov.ph, RMAF, contemporaneous 2005–2010 reporting recovered via Wayback) over aggregators. Numbers re-derived where possible.

---

## 1. Issue Table (all issues found)

| # | Claim (section) | Problem | Severity | Evidence | Fix applied |
|---|---|---|---|---|---|
| 1 | **"International Women of Courage Award" (§1, §6.6, matrix 12, Open Q4)** | The IWOC is the **U.S. Secretary of State's** award, established 2007 by Sec. Condoleezza Rice — **not** a "US State Department's" award conferred by the ambassador. Padaca IS listed as a 2007 recipient in the IWOC award article's own recipients table (with Shatha Abdul Razzak Abbousi, Iraq). Dec 5, 2007 / Kenney conferral is corroborated by GMA's 2012 career profile (snapshot 24). The dossier hedged ("primary link rotten… verify via US Embassy archive") but the claim itself is **substantiated**; only the award's naming/attribution was imprecise. | error (minor, wording) | https://en.wikipedia.org/wiki/International_Women_of_Courage_Award (recipients table, 2007 row); snapshot 24 (GMA 276461); state.gov archive portal https://2009-2017.state.gov/s/gwi/iwoc/index.htm | Reworded §1 and §6.6 to "U.S. Secretary of State's International Women of Courage Award"; matrix row 12 upgraded; Open Q4 partially resolved |
| 2 | **§9.2 "Ombudsman filed cases in 2011"** | The complainant was **Santiago Respicio** (complaint **Feb 26, 2007**, per SC e-library G.R. 201800). The Ombudsman resolved Jan 11, 2011 / Feb 17, 2012. Dossier §19.2 knew this but §9.2 contradicted it ("Ombudsman filed"). Also Respicio's complaint predates the dossier's "case filed in 2011" shorthand. | contradiction (internal) | snapshot 03 (SC e-library G.R. No. 201800, Aug 8, 2018): complaint dated February 26, 2007 | §9.2 reworded: "cases (filed by complainant Santiago Respicio, Feb 26, 2007) filed in court in 2011" |
| 3 | **R41b primary PDF** — sb.judiciary.gov.ph RESOLUTIONS/2020/F_Crim_SB-11-CRM-0282-0283…06_23_2020.pdf | **Dead link.** The site returned its WordPress 404 page ("Page not found — Welcome to The Sandiganbayan"). The site migrated; the resolution is no longer at that path. Wayback check not yet completed (429 rate-limits). | error (stale link) | curl 2026-09-19 → HTTP 404 HTML | R41b annotated as dead; Wayback added as fallback in audit; open question updated |
| 4 | **R19 (Manila Times 2010) snapshot** | Snapshot file 17 is the **regions index page** of the June 9, 2012 Manila Times — the Padaca article itself is not in the capture (0 hits for "3,438"/"Padaca" in article context). The 3,438 margin is nonetheless verified via VERA Files (Nov 11, 2010: "lost by only 3,438 votes"). | stale (snapshot gap) | snapshot 17 (index page only); https://verafiles.org/articles/padaca-struggles-to-keep-faith-in-government-2 | R19 flagged in reference list; VERA Files added as corroborating source (R46) |
| 5 | **ABS-CBN snapshots 20 & 21** | Both live-URL captures hit an ABS-CBN **homepage redirect** (article bodies absent — "Leading Entertainment and News Network", 0 story text). Original 2009/2010 story text recovered via Wayback (2009 snapshot has full Santos article: 199,435–198,384, 1,051, 17,007, 683 boxes/12 towns all confirmed; 2010 Newsbreak piece confirms 44,292→17,007 erosion). | stale (snapshot gap) | snapshot 21 = homepage; Wayback 20091213004843 (story) | Reference list annotated: use Wayback originals |
| 6 | **Dy-rule duration (§1 "four-decade", §5 "three-decade", matrix n/a)** | Internal inconsistency + source split: Bulatlat 2004 "four-decade"; VERA Files 2010 "40-year"; Philstar/GMA "three-decade"; ABS-CBN/Newsbreak 2010 "34-year"; Inquirer 2019 "more than two decades" (Dy **Sr.**'s personal rule). Math: Dy machine control ~1969–2004 (≈35 yrs); Dy **Sr.** governor 1969–1993. | contradiction (minor, wording) | Bulatlat 4-17 snapshot ("four decades"); VERA Files ("40-year"); ABS-CBN/Wayback ("34-year"); GMA 276461 ("three-decade") | §5 harmonized to "roughly three decades (sources give 30–40 years; '34-year' per Newsbreak 2010)" |
| 7 | **1995 anti-split: "partition into two provinces" (§3, matrix 6)** | Bulatlat warlordism piece (R3b, the dossier's cited source) says the Isabelinos rejected the "Dy–Albano plan to divide Isabela into **three** provinces" in a 1995 referendum. But the actual statute, **RA 7891 (Feb 20, 1995)**, divided Isabela into **two**: Isabela del Norte + Isabela del Sur (plebiscite within 120 days; Wikipedia/Bulatlat 4-17 agree on two). R3b's "three" appears to be a Bulatlat error (or refers to a different/earlier proposal). | contradiction (source-internal) | https://lawphil.net/statutes/repacts/ra1995/ra_7891_1995.html ("DIVIDING THE PROVINCE OF ISABELA INTO TWO PROVINCES"); snapshot 23 ("three provinces") | §3 note added: RA 7891 = two provinces; R3b's "three" flagged |
| 8 | **"accountant for businessman Enrique Zóbel" ~2003 (§3)** | Per Bulatlat (R3, the primary), she worked as accountant **for one of Enrique Zóbel's haciendas in Batangas, May 2003–Feb 2004** (10 months) — Enrique Zóbel had died in 1990; she worked for the estate's provincial offices. Wikipedia's phrasing ("worked as an accountant for businessman Enrique Zobel" ~2003) is misleading. | error (minor, imprecise) | snapshot 22 (Bulatlat 4-17: "worked as an accountant for one of Zobel's haciendas in Batangas… 10 months from May 2003 to February 2004") | §3 corrected with dates + "estate/hacienda" framing |
| 9 | **Co-accused deaths (§9.1)** | Philstar R9b (snapshot 37): "The third division dismissed the cases against Padaca's co-accused — former provincial legal officer Johnnas Lamonera, former municipal councilor Servando Soriano and Dionisio Pine — **due to their death**." Dossier said only Lamonera died. SC e-library names Soriano as EDWINLFI chairman, Pine as manager. | error (minor) | snapshot 37 (Philstar Nov 16, 2019) | §9.2 corrected: all three co-accused died before resolution |
| 10 | **Sentence split "12–14 malversation, 6–10 graft" (§9.2, matrix 18)** | **Verified CORRECT** (dossier chose right): Philstar R9b "sentenced Padaca to 12 to 14 years for malversation of public funds and six to 10 years for graft"; GMA R39b and Rappler R8 agree. Inquirer R22b had them **swapped** ("up to 14 years for the graft charge, and up to 10 years for the malversation") — a documented source error the dossier should not inherit. | verified (no change) | snapshots 37, 26; Rappler R8 | Matrix row 18 note strengthened; Inquirer R22b flagged as containing the swap |
| 11 | **§9.3 "September 2020: Sandiganbayan denied her MR on malversation but granted the appeal on graft" + "November 2020: overturned"** | Both dates describe **the same June 23, 2020 resolution** (promulgated June 23, released/posted to the SB website ~Sept 20, 2020; reported Sept 1–20, 2020). "November 2020" was wrong (it mirrors CNN's Nov 16, 2020 republication date). Also §9.2's "aggregate up to 24 years" is correct per Philstar/GMA/Rappler (headline framing); after acquittal the max residual is 14 years. | error (dates) | Inquirer 1337402 (Sept 19, 2020); Philstar 2039193 (Sept 1, 2020, "promulgated on June 23… posted recently"); GMA 756404; CNN-archived R23 (Nov 16, 2020 republish) | §9.3 timeline corrected to June 23, 2020 (one resolution, two rulings) |
| 12 | **§17.1 note: "case apparently moved divisions between 2012 and 2019; flag for verification"** | Resolved: warrant (May 21, 2012) was signed by **Fifth Division** chairman Justice Roland B. Jurado (Rappler R32); conviction (Nov 15, 2019) was by the **Third Division** (Cabotaje-Tang) — per Rappler R8/GMA/Philstar, all consistent. Division transfer confirmed as fact; no further verification needed. | verified (flag resolved) | snapshot 45 (Rappler warrant article: "chairman of the court's fifth division"); R8/R9b (Third Division) | §17.1 note tightened: transfer documented |
| 13 | **Matrix rows 26–37 flagged as appended "matrix additions"** | Structural defect: the "Cross-reference additions" lists in §15/§19 duplicate matrix content **outside the matrix table** (rows 26–30 in §15, 31–37 in §19), so the "37-row matrix" claim is inconsistent — the table itself has 25 rows. | contradiction (structural) | dossier §13 (25-row table) vs §15/§19 addition lists | Flagged in audit + matrix header note patched (rows 26–37 live in §15/§19; consolidate in a future edit) |
| 14 | **Dangling citations R4, R13, R15, R28, R29** (cited in §1, §3, §5, §15 but never defined in §14) | §15's claims (bogadors, jueteng, 2016 defections) and §1/§5 claims hang on refs that don't exist in the reference list. Sources now identified: **R28 = VERA Files, "Padaca struggles to keep faith in government" (Booma Cruz, Nov 11, 2010)** — confirms bogadors, 40K→17K margin erosion, "close the faucet," Jimmy Rivera bias, 3,438 loss, 40-year reign; **R29 = Philstar "Padaca loses allies" (Raymund Catindig, Mar 30, 2016)** — Uy/Cumigad NPC defections, "I'm sad but I'm not mad," "political survival." R4/R13/R15 were likely mis-numbered ghosts from an earlier draft (their facts are covered by R2/R3b/R15-family refs). | error (citation integrity) | https://verafiles.org/articles/padaca-struggles-to-keep-faith-in-government-2 ; https://www.philstar.com/nation/2016/03/30/1567694/padaca-loses-allies | R28/R29 defined in §14 (new R46/R47 blocks); §15 citation tags updated; R4/R13/R15 ghost tags corrected in §1/§3/§5 |
| 15 | **Open Q2 (2007 annulment appeal disposition)** | Still unresolved: no source found documenting the Comelec en banc/SC disposition of the 2009 annulment appeal. GMA R34 (Dec 2009) documents only the refusal to seat Dy pending MR; Brillantes later called her 2010 protest "abandoned" (R38). | open (unresolvable this pass) | snapshot 28, 41 | Remains open; reworded with added precision |
| 16 | **Open Q3 (2019 Sandiganbayan decision text)** | The 2019 decision text is **not** on elibrary (elibrary hosts only the 2018 SC G.R. 201800 resolution); SB website resolutions for 2019 no longer listed at the old path (site migrated). 2019 decision remains available only via the five contemporaneous reports. | open (partial — primary text not found) | elibrary 64550 = G.R. 201800 (2018, certiorari stage); sb.judiciary.gov.ph 404 | Open Q3 updated: SB 2020 resolution also now offline (R41b dead) |
| 17 | **2016 margin "over 300,000"** | Verified as reported-at-97.26%-transmission figure (Rappler R26: "won with a lead of 300,000 votes… based on transmission from 97.26% of precincts"). Exact official Canvass number not found; treat 300K+ as the best documented figure. | verified (with precision caveat) | snapshot 47 (Rappler 133007) | §11 wording kept; caveat noted in audit |
| 18 | **"2019, Vice Governor: lost to the outgoing governor 483,392 to 166,972" (§11)** | Verified: opponent was **Faustino "Bojie" Dy III** (outgoing governor, proclaimed vice governor-elect, Inquirer May 17, 2019: "Gov. Faustino 'Bojie' Dy III was proclaimed vice governor-elect, beating former governor… Padaca"). Numbers per Wikipedia/Rappler. | verified | https://newsinfo.inquirer.net/1120085/dynasty-dominates-isabela-polls | No change |
| 19 | **₱70,000 bail / ₱140,000 doubling (§9.2 vs R39b)** | Consistency verified: ₱40K malversation + ₱30K graft = ₱70K (2012, Rappler R32); doubled to ₱140K after the 2019 conviction pending appeal (R9b/R39b); Aquino paid the original ₱70K personally (R42/R64353). "Additional ₱70,000 on top of the P70,000" (R9b) = ₱140K total — consistent. | verified | snapshots 45, 37, 25; Rappler 64353 | No change |
| 20 | **IWOC "conferred personally by US Ambassador Kristie Kenney, December 5, 2007" (§6.6)** | Corroborated by GMA 2012 career profile (snapshot 24: "On December 5, 2007, then-US Ambassador to Manila Kristie Kenney personally conferred to Padaca the prestigious International Women of Courage Award"). | verified | snapshot 24 | Date/attribution kept; award naming fixed (issue #1) |
| 21 | **All vote margins & arithmetic** | Re-derived: 2004 +44,292 (Wikipedia, ABS-CBN/Newsbreak 2010 ✓); 2007 +17,007 (Wikipedia citing Santos 2009, ABS-CBN 2009 ✓, VERA ✓); Dec 2009 reversal 199,435−198,384 = 1,051 ✓ (Philstar snapshot 35 arithmetic exact); 2010 −3,438 (VERA ✓, Manila Times flagged); 2016 300K+ (Rappler ✓); 2019 483,392−166,972 = 316,420 ✓ (dossier says 316,420 — consistent); 2001 −1,285 (50.7/49.3) → HRET 48 votes ✓ (Wikipedia + RMAF + Bulatlat: 150 "Grace" ballots uncounted, would have won by 102). | verified | snapshots 35, 47, 17, 22, 31; RMAF | No change |
| 22 | **Money trail ₱35M/₱25M/₱7M/₱18M (§9)** | Verified: ₱35M DBP loan → ₱25M to EDWINLFI → ₱7M remitted / ₱18M unaccounted (Rappler R8, Philstar R9a/R9b, SC e-library R20, Rappler R32: COA ₱3.6M "due from NGOs/POs" + ₱18M "loans receivables"). Fine ₱18M + restitution ₱18M + 6% interest from finality (R8). Wikipedia's ₱36M = conflation (matrix row 21 correct). | verified | snapshots 44, 37, 38, 45 | No change |
| 23 | **R5 Senate press release (Aug 1, 2008) — 403 on live fetch** | The old press-release URL now returns 403 (bot wall; not proven dead). Senate issuances library lists **Senate Resolution No. 101, s. 2008** commending Padaca for the Magsaysay Award — an alternative primary anchor for the Senate recognition claim. | stale (link) | curl → 403; https://issuances-library.senate.gov.ph/subject/padaca-grace | R5 annotated with SR 101 s. 2008 alternative |
| 24 | **§6.5 "Islands of Hope" July 31, 2008 launch** | Verified via Wikipedia (cited to Inquirer 2008 feature): tour launched July 31, 2008 at Ateneo de Manila. | verified | snapshot 04 | No change |
| 25 | **HRET Case 01-001 (§19.4)** | Verified live: hret.gov.ph/case-2001-2004 returns 200 and confirms "DISMISS the protest for lack of merit and DECLARE Protestee FAUSTINO DY III to be the duly elected Representative." | verified | live curl 200 + snapshot 31 | No change |
| 26 | **Respicio as original complainant + oppositor (§19.2, matrix 33)** | Verified against SC e-library (complaint Feb 26, 2007) and Rappler R42/R64353 ("filed by former Isabela Representative and Vice Governor Santiago Respicio"). | verified | snapshot 03, 46 | No change |
| 27 | **CA bypass mechanics (§19.2)** | Verified (R42 snapshot: June 4 hearing left early, June 10 cancelled without explanation; ad interim; Coloma July 7 confirmation; Rappler 64353 adds "Padaca out, Arthur Lim in" July 25, 2014). | verified | snapshot 46; Rappler 64353 | No change |
| 28 | **Haggai current activities (§19.3)** | Verified against snapshot 30: Metro Manila chapter president, self-employed leader/speaker, April 2025 National Seminar in Pasay City (25 leaders, 15 LWD), October follow-up seminar, John 9:3 at 17, HLE after 2010 defeat. | verified | snapshot 30 | No change |
| 29 | **GMA 2012 profile extras (R11)** | Snapshot 24 also documents: ad interim appointment until Feb 2018 (CA letter signed Sept 28, 2012), transmission same day via Exec. Sec. Ochoa, Benigno S. Aquino Jr. Fellowship (2006) + First CEO Excel Awards (2005) as additional awards, and the IWOC Dec 5, 2007 conferral. | verified (bonus detail) | snapshot 24 | Noted in audit; not added to dossier (not core) |
| 30 | **Recall attempt 2005 (§16.1)** | Verified: recall "unstoppable," gain ground in 25 of 35 towns + 1 city; Albano Jr. ERC chair, "dutiful soldier"/"good fight"; her "Gob. Grace" Saturday program on dwSI Santiago City; SP resolution of support that week. Recall never materialized (no record found). | verified | snapshot 33 (Philstar Mar 28, 2005) | No change |
| 31 | **Jueteng war 2005 (§16.2)** | Verified: LMP president Napoleon Dy "indiscretion"/"violently" reaction; anonymous mayor "smoke screen"; dialogue with DILG Sec. Angelo Reyes + PNP chief Lomibao (May 2005); Estilles: "85 percent" crippled in 3 weeks, "zero" ops in 7 towns (Palanan, Maconacon, Divilacan, Dinapigue, Santo Tomas, San Pablo, Delfin Albano); Ilagan/Alicia/Cauayan focus areas hurting Delfinito Albano. | verified | snapshot 34 (Philstar May 16, 2005) | No change |
| 32 | **PCIJ §15 claims (8 floating, CSC reinstated 7; P26M RPT; school/health/peace boards; Jesus Cruz; Ancheta; capitol-university)** | All verified verbatim in the PCIJ snapshot (article published 2007-04-11, updated 2009-09-24 — dossier's "(2009)" is the revision date; original is 2007). | verified (dating nuance) | snapshot 14 | R7 annotation: original April 2007, revised Sept 2009 |
| 33 | **RMAF biography details** | "Bombo Radyo… accountant… broadcaster" 14 years, 2001 Congress loss "by forty-eight votes" after tribunal invalidated all ballots marked "Grace," 33 mayors opposition, "Free Isabela," "more than forty-four thousand," "paid off two-thirds of the province's huge debts," born 1963, polio early childhood, CPA by 21. All verified. | verified | rmaward.asia live + snapshot 15 | No change |
| 34 | **Bulatlat family details** | Verified: father Bernardo (DepEd district supervisor, d. 1984), mother Amelia Magno (retired home-economics teacher), two brothers + three sisters, "no property except her TV bought at a discount," "37-year-old" (R3) and "40-year-old" (R3b) conflicts both noted — both conflict with the 1963 birth year corroborated by RMAF/Wikipedia/Philstar ("44-year-old" in Aug 2008 = b. 1963/64 ✓). | verified | snapshots 22, 23; Philstar 76487 | No change (1963 stays authoritative; matrix row 2 stands) |
| 35 | **2016 Cauayan "Dy or Dy" (R14c)** | Snapshot verified: April 2016 Cauayan mayoral race, Bernard Dy vs Victor Dy (uncle), late Benjamin Dy died of emphysema 2013. | verified | snapshot 13 | No change |
| 36 | **R27 (GMA "SC affirms indictment")** | Live link verified via search; snapshot 29 (673069) contains the decision detail (Andres Reyes Jr.; "no cogent reason"; Sandiganbayan directed to proceed). | verified | snapshot 29 | No change |
| 37 | **"Declared candidacy February 2004 on her own radio program" (§5)** | Bulatlat (R3): "her most important announcement came in February 2004: She was running for governor against Faustino Dy Jr." — "on her own radio program" is consistent with the DZNC program framing in the same piece. | verified | snapshot 22 | No change |

---

## 2. Claims VERIFIED SOLID (do not re-check)

**Biography & career**
- Born Oct 25, 1963, Cauayan; parents both public-school teachers; father d. 1984 — Wikipedia + Bulatlat R3 + RMAF (rmaward.asia live) — snapshots 04, 22, 15
- Polio at ~3, crutches lifelong, CPA Lyceum 1984 — snapshots 04, 15, 06
- Bombo Radyo 1986 entry, accountant→host ("Sa Totoo Lang")→14 years→2000 exit → COA → GSIS until 2001 — snapshots 22, 04, 15
- 2003: accountant for Zóbel hacienda (Batangas), May 2003–Feb 2004 — snapshot 22 (fixed phrasing)
- 1995 anti-split campaign (RA 7891 plebiscite context) — Wikipedia + R3; two-province division per RA 7891 (lawphil)

**Elections & HRET**
- 2001: lost by 1,285 (50.7–49.3), 151 boxes protested vs 812 counter-petition, "Adopt A Ballot Box," HRET Dec 18, 2003, 48 votes, 150 "Grace" ballots — snapshots 04, 22, 31 (HRET official index live, HTTP 200)
- 2004: +44,292, ~55%, 33 mayors opposed, "Free Isabela," volunteers guarding boxes — snapshots 04, 22, 15, 20 (Wayback ABS-CBN)
- 2007: +17,007 vs Benjamin Dy; recount 683 boxes/12 towns; Dec 2009: 199,435 vs 198,384 = 1,051; "immediately vacate" order; MR pending; refused to seat Dy pending MR — snapshots 35 (Philstar), 21/28 (GMA), Wayback ABS-CBN 2009
- 2010: lost to Bojie Dy III by 3,438 — VERA Files (R46), snapshot 18 (CNN-archived context)
- 2016: lost by 300,000+ (at 97.26% transmission) — snapshot 47 (Rappler 133007)
- 2019 VG: 483,392–166,972 (=316,420) vs Bojie Dy III — snapshot 04; Inquirer May 17, 2019

**Governorship**
- Debt reduced two-thirds; surpluses — snapshots 04, 15
- Hybrid rice, 10 towns top producers, NFA ₱5/kg — snapshots 04, 15
- PhilHealth ~700,000; ₱98M premiums; doubled BHW allowances; ₱2,000/mo public attorneys — snapshot 04
- 1.8M board feet / ₱30M+ haul, "biggest in PH history" — snapshots 04, 46 (VERA)
- Kaya Natin! co-founding (Panlilio, Robredo, Lorenzo), Islands of Hope July 31, 2008 Ateneo — snapshot 04
- Magsaysay Award July 31, 2008, citation text — RMAF live + snapshot 15
- IWOC Dec 5, 2007 by Amb. Kristie Kenney — snapshot 24 (GMA 2012 profile)
- Bombo Radyo dzNC 2004 shutdown → SC ₱5M (2010) — snapshot 36 (Philstar)
- Magpakailanman (Janice de Belen, 2004) — snapshot 04 (Wikipedia only; matrix row 24 "single-source" correct)

**Criminal case**
- Respicio complaint Feb 26, 2007; Ombudsman resolutions Jan 11, 2011 / Feb 17, 2012 (OMB-L-C-07-0224-B) — snapshot 03 (SC e-library)
- MOA Jan 8, 2006 pre-authorization; SP authorization Jan 31, 2006 with submission-review condition not complied with — snapshots 44, 37, 38
- ₱35M DBP → ₱25M EDWINLFI → ₱7M remitted / ₱18M unaccounted; COA ₱3.6M + ₱18M — snapshots 44, 37, 45
- 2012 warrant: May 21, 2012, Fifth Division, Jurado, ₱40K+₱30K; copies to NBI-R2, provincial police, Ilagan chief; "management or consultancy" framing; no safeguards — snapshot 45
- SC G.R. 201800 (Aug 8, 2018, 2nd Div., Reyes Jr.): consolidated petitions DISMISSED; Ombudsman + Sandiganbayan resolutions AFFIRMED; trial directed — snapshot 03
- Nov 15, 2019 conviction: 12–14 malversation, 6–10 graft, ₱18M fine, perpetual disqualification, restitution ₱18M + 6% from finality; bail doubled to ₱140K — snapshots 44, 37, 26
- Co-accused Soriano (chairman), Pine (manager), Lamorena (director/legal officer) — all deceased before resolution — snapshots 37, 03
- June 23, 2020 resolution: malversation MR denied (lack of merit), graft conviction REVERSED ("failure of the prosecution to prove her guilt beyond reasonable doubt"), HDO lifted, bail bond returned — snapshots 38, 25, 26, 09
- SALN plea 2017, ₱4,000 — snapshot 42
- Comelec appointment Oct 2, 2012 (signed Sept 28; transmitted same day); warrant enforced Oct 4; pleaded not guilty Oct 30, 2012; immunity denied; ad interim until Feb 2018; CA bypass June 2014 (June 4/June 10); appointment lapsed June 14, 2014 (Jimenez); Coloma July 7, 2014; replaced by Arthur Lim July 25, 2014 — snapshots 40, 45, 46, 32, 43; Rappler 64353

**Comebacks**
- 2016 Uy/Cumigad defections — Philstar Mar 30, 2016 (R47)
- 2019 alliance with Napoleon Dy; Dys reconciled; Aksyon Demokratiko — snapshot 04

**2005 recall & jueteng**
- Recall in 25 of 35 towns + 1 city; Albano Jr. ERC chair; "Gob. Grace" dwSI — snapshot 33
- Jueteng dialogue (Reyes/Lomibao); Estilles rebuttal (85%, 7 towns); Napoleon Dy "indiscretion" — snapshot 34

**Current activities**
- Haggai: Metro Manila chapter president; April 2025 Pasay seminar (25/15 LWD); John 9:3; HLE post-2010 — snapshot 30

---

## 3. Confidence Score: **91/100**

**Justification:**
- All 25 matrix rows + 12 appended rows re-verified against primary or contemporaneous sources; every arithmetic claim re-derived and consistent.
- The two structural defects (dangling R28/R29, §9.3 dating) were **confirmed errors** and are now fixed with named, checkable sources.
- The one genuinely weak link remaining: the **2019 Sandiganbayan decision text** is unavailable (SB site migrated; elibrary does not host trial-court decisions), so sentence-length facts rest on five independent press reports that agree with each other (Philstar/GMA/Rappler vs. Inquirer's swapped variant, which the dossier correctly avoided).
- Vote figures come ultimately from Comelec/tribunal records via contemporaneous reportage; where sources conflicted (Inquirer sentence swap; Wikipedia ₱36M; Bulatlat age; R3b "three provinces") the dossier's choices were re-validated as the correct side, except where noted.
- Notion sync: content parity confirmed (serialization artifacts only; Notion renders appended matrix rows 26–37 as auto-renumbered "1." — local file is authoritative).

**Not included in the score:** the unresolved appeal-status question (inherently open) and dead-link archaeology (R41b, R5) — these are documentation risks, not accuracy risks.

## 4. Updated Open Questions

1. **Final appellate status of the malversation conviction** — UNCHANGED. No CA/SC ruling found in 2021–2026 searches; treat as affirmed at Sandiganbayan level, unresolved above. (Her counsel announced appeal "all the way to the Supreme Court" in Nov 2019; the malversation MR was denied June 23, 2020; no further ruling found.)
2. **Disposition of the 2007 annulment appeal** (Comelec en banc/SC) — UNCHANGED. She served to June 30, 2010; MR was pending at term end (GMA R34); Brillantes later declared the separate 2010 protest "abandoned" (R38). No en banc/SC disposition found.
3. **Original 2019 Sandiganbayan decision text** — UPDATE: now also the **June 23, 2020 resolution PDF (R41b) is offline** (sb.judiciary.gov.ph returned a 404 WordPress page; Wayback capture not yet secured — 429 during audit). Obtain via Wayback or the SB e-court/research office. Until then, the five press accounts (R8, R9a, R9b, R39, R39b, R40, R41) are the operative record.
4. **IWOC primary citation** — PARTIALLY RESOLVED: Padaca is on the IWOC award's recipients list (Wikipedia IWOC article, 2007 section, with Shatha Abdul Razzak Abbousi et al.); conferral date/ambassador corroborated by GMA 2012 profile. Remaining: State Dept 2007 ceremony page (2009-2017.state.gov/s/gwi/iwoc/ archive portal exists; 2007 honoree page not located in this pass).
5. **2022/2025 activity** — UNCHANGED: no source documents electoral activity after 2019; the Haggai profile (March 2026) is the latest first-person account. Consistent with retirement from electoral politics.
6. **(New)** SB website migration: locate archived copies of both the 2019 decision and the 2020 resolution (Wayback 429s blocked capture during this audit; retry with backoff).

---

## 5. Fix Log (edits applied to grace-padaca.md this pass)

1. §1 + §6.6: IWOC naming fixed to "U.S. Secretary of State's International Women of Courage Award"; hedging updated (Padaca is on the 2007 recipients list); matrix row 12 upgraded; Open Q4 updated.
2. §2: Zóbel item corrected (hacienda/estate, May 2003–Feb 2004).
3. §3: RA 7891 two-province note added to the 1995 anti-split item.
4. §5: Dy-reign wording harmonized ("roughly three decades; sources range 30–40 years").
5. §9.2: complainant corrected to Respicio (complaint Feb 26, 2007); co-accused deaths corrected (all three).
6. §9.3: 2020 appeal-timeline dates fixed (single June 23, 2020 resolution; November 2020 removed; CNN's Nov 16, 2020 = republication).
7. §14: R28/R29 defined as new references R46 (VERA Files) / R47 (Philstar "Padaca loses allies"); R41b marked dead; R5 annotated with Senate issuances-library alternative; R19/ABS-CBN snapshot gaps noted.
8. §15/§16/§19: dangling tags re-pointed (R28→R46, R29→R47; R4→R2/R3; R13→R3b; R15→R11).
9. §17.1: division-transfer note tightened (Fifth→Third documented).
10. §19.1: date consistency (June 23, 2020 resolution) locked in.
11. Matrix row 18: added note that Inquirer R22b contains the swapped sentence variant (dossier's split is the verified one).
12. §20 Open Questions: Q3/Q4 updated; new Q6 (SB PDF archival) added.

No restructuring; [R#] style preserved; new refs numbered R46/R47 per convention.

---

## 6. Pass-2 Re-Verification (September 19, 2026) — no new material errors

Fresh searches + source pulls after the fixes:

- **Sentence split re-confirmed** via GMA's Nov 15, 2019 report (gmanetwork 715538, Llanesca Panti): "sentenced Padaca to 12 to 14 years of jail time for her malversation conviction, on top of six to 10 years prison time for her graft conviction" — third independent confirmation; the dossier's split stands and Inquirer's swap is definitively the outlier. Also confirms ₱140,000 doubling and Vinluan's "all the way to the Supreme Court."
- **2010 margin arithmetically verified from raw votes**: Philstar May 15, 2010 (Charlie Lagasca, "Dy beats Padaca by over 3,000 votes"): Dy III **274,557** vs Padaca **271,319** → difference **3,438**. The dossier's margin is now primary-number-verified, not just reported. Also documents Bojie III's "peace and reconciliation" quote and her "I weep for Isabela" statement.
- **New 2026 secondary source located and added (R48)**: Rappler, "Dy dynasty dominates Isabela for decades" (Sept 10, 2026, Gavilan/Andam) — independently re-confirms: 1,285-vote 2001 trail (citing dagdag-bawas in **Angadanan** — a detail new to the dossier, from the municipality's protest focus), HRET 48-vote ruling with "Grace"-ballot invalidation, 2004/2007 wins snapping the clan's rule, 2010 reclamation, 2019 VG loss to Bojie with Pol Dy's withdrawal, Dy Sr.'s 18-year governorship starting late 1960s (which settles the "three/four-decade" question at the machine level: ~1969→2004 = 35 yrs), and Bojie's Speakership. Dossier §4 and §11 updated with [R48]; §12.1 gains the "cracked only twice" framing.
- **2019 running-mate nuance**: R48 adds that Pol Dy **withdrew his gubernatorial bid** (i.e., he was a would-be gubernatorial ally, and the dossier's "allied with Napoleon Dy" is now precisely worded) — §11 updated.
- **Dangling-citation check after edits**: only R28/R29 mentions remain inside the explanatory audit note (not citations). R14b/R14c/R27 remain defined-but-uncited cross-link references — acceptable (defined for completeness), noted here.
- **IWOC**: award's own recipients list re-confirmed via search (2007 row: Sundus Abbas, Shatha Abdul Razzak Abbousi, Grace Padaca…). No contradiction found.
- **June 23, 2020 resolution date**: Manila Bulletin (Sept 1, 2020) + GMA + CNN URLs re-located; CNN's original URL slug (/news/2020/9/20/) itself carries the September 20, 2020 publish date — the dossier's new §9.3 dating is consistent across all outlets.

**Pass-2 verdict: no new material errors.** Confidence after pass 2: **92/100** (up from 91; the 2010 margin is now raw-vote-verified and the 2026 Rappler piece provides an up-to-date independent anchor).