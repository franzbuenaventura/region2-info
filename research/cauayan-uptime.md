# Cauayan City: electricity & internet uptime — research note (Sept 30, 2026)

## Short answer

**Official uptime metrics exist but are behind login/FOI gates; live town-level uptime numbers are not published anywhere.** However, a workable estimate (and an ongoing monitoring plan) is possible from three public signals: ERC-mandated reliability indices, ISELCO-I's own outage-post cadence, and ISP advisories. For business underwriting (HubHub/golf sim), the practical move is measured self-monitoring + contract SLAs, not published history.

## Electricity (ISELCO-I, Cauayan City office)

**What exists:**
- ERC Resolution No. 12 requires every distribution utility to file **quarterly Interruption Reports with annual SAIFI/SAIDI/MAIFI**. ERC publishes an aggregated "Reliability Indices of Distribution Utilities" dataset (2015–2025, incl. all 121 ECs) on foi.gov.ph — but the ERC + FOI sites sit behind Cloudflare/403 + login, so the dataset needs an FOI account (free) to download.
- NEA runs its own **EC Overall Performance Assessment** (annual, incl. reliability + an on-site performance assessment — NEA engineers assessed ISELCO-I Feb 23–Mar 5, 2026). NEA's ratings are Category A/B/AAA; ISELCO-I historically Category A ("Mega Large"). The 2024 evaluation gave 39 ECs a perfect-100 score.
- ISELCO-I's own **AGMA annual reports** publish system loss (single-digit, 8.69% Sept 2025) and operational stats; historic 2017 report is online.
- **Scheduled interruption cadence (measured Sept 30, 2026 from brownoutba.com's ISELCO-I tracker):** 20 scheduled events listed for Oct 1–6 (mostly NGCP transmission works 8 AM–4/5 PM), 3 hitting Cauayan city directly (2× line-upgrades Sep 29 ~8h, 1× Oct 1 30-min maintenance). Typical pattern ≈ 1–2 scheduled interruptions/week region-wide; a given Cauayan barangay sees a full-day planned outage roughly monthly, with emergency outages (faults, trees) additional.
- **Historical disaster case (best/worst bound):** Typhoon Uwan (Nov 2025) knocked out the grid province-wide; ISELCO-I restored ~99.9% of lines in "less than 24 hours" (their own post) in most of the coverage; Philstar reported 60% restored by Nov 12, full restoration ~month-end for worst-hit areas.

**How to get the official numbers:** create a free foi.gov.ph account → request/download "Reliability Indices of Distribution Utilities" (ERC) and "EC Overall Performance Assessment" (NEA). Direct FOI download pages 403 without a session; ERC.gov.ph File/Render links 403 to bots.

**Practical business numbers:** single-digit system loss (8.69% Sept 2025) + Category A co-op + 99.9% storm-restoration in <24h indicate a mid-tier provincial grid — better than remote-palawan-grade, worse than metro MNL. Plan for ~2–6 h/wk of scheduled + emergency downtime outside storms; monthly-scale outages per barangay; catastrophic-mode (typhoon) = days, not weeks, based on Uwan. UPS + generator for HubHub/golf sim remains mandatory.

## Internet (PLDT · Converge · Globe · Sky)

**What exists:**
- **No per-town published uptime metric exists** from any ISP or DICT/NTC. DICT polls speed (Converge topped at 193.61 Mbps avg, end-2025) and monitors disasters, but not uptime.
- **Consumer fiber has no contractual SLA** — PLDT/Converge/Globe residential plans carry no uptime guarantee; typical PH consumer reality is fiber-cut-driven outages (Globe: 54 cuts in one CDO city in 2024) + rolling typhoon damage.
- **Enterprise/BPO-grade leased lines carry real SLAs** (PLDT Enterprise references ~99.6% uptime ≈ ≤3 h/mo downtime, rebates beyond) — this is the only contractually backed "internet uptime" obtainable in Cauayan. Everise's BPO obviously runs on this class of service.
- **Proxies available:** Downdetector.ph / Outage.report (crowdsourced, coarse), IODA Georgia Tech (country/region-level outages), Converge corporate advisories (region-level), DICT disaster connectivity reports.
- Infrastructure context: PLDT "fully fiberized" Cauayan (2019 program); Converge FiberX free-install campaign live in Isabela 2025; DICT Free WiFi sites in the city; DITO expanding.

**Practical plan for measuring true uptime in Cauayan (HubHub decision-grade):**
1. **Local monitoring box** (existing Mac mini or a Pi on-site): ping + HTTP-check every 30 s against two targets (1.1.1.1 + a PH anycast like speedtest.ph), log power via a smart plug's own connectivity; 90 days of data = a defensible per-district availability figure (~30 USD in hardware, uses existing infra).
2. **Dual-WAN**: fiber (Converge/PLDT) + LTE/5G failover (Smart/Globe) survives fiber cuts AND co-op outages for the router itself — standard BPO resilience.
3. **FOI request** (free account) for ERC SAIFI/SAIDI tables + NEA's ISELCO-I assessment if official paper numbers are needed for an investor deck.

## Bottom line
- Official per-town uptime history: **not directly obtainable online today**; obtainable via FOI/ERC+NEA datasets with a free account.
- Estimable now: power ≈ mid-quality provincial grid (1–2 scheduled hits/week region-wide, <24 h storm restore, 8.69% system loss); internet = no published metric, no consumer SLA, enterprise SLA the only contractual option.
- The credible path for business math: measure locally for 90 days + quote dual-WAN + genset; use FOI data as supporting paper.