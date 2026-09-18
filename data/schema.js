/* Schema config — single source of truth for LGU detail fields.
   Edit this array to add/remove fields; the /#/schema page and the per-LGU
   completion bars are rendered FROM this list (not hardcoded in app.js).

   key      — property name inside a window.LGU_DATA entry
   label    — friendly name
   tab      — which detail tab the field feeds
   desc     — one-line description
   required — true = core field, false = nice-to-have
   example  — short sample from the Cauayan data pack            */
window.SCHEMA = [
  { key: "nicknames", label: "Monikers", tab: "General", required: true,
    desc: "Short nicknames displayed under the LGU heading.",
    example: "“Rice Bowl of the North” · “Ideal City of the North”" },
  { key: "founded", label: "Founded / Cityhood", tab: "General", required: true,
    desc: "Founding date and cityhood (if applicable) with the enabling law.",
    example: "1740 · Cityhood Mar 30, 2001 (RA 9017)" },
  { key: "etymology", label: "Etymology", tab: "General", required: false,
    desc: "Origin of the LGU's name.",
    example: "Ilocano “cauayan” = bamboo" },
  { key: "smartCity", label: "Smart-city highlights", tab: "General", required: false,
    desc: "Distinguish tech/smart-city distinctions, shown as a callout.",
    example: "First DOST-designated smart city (2025)" },
  { key: "general", label: "Core facts", tab: "General", required: true,
    desc: "Key-value list: land area, barangays, population, elevation, income class…",
    example: "65 barangays · 143,539 pop (2024) · 336.40 km²" },
  { key: "market", label: "Market profile", tab: "Market", required: true,
    desc: "Key-value list: businesses, banks, hospitals, retail anchors, BPO…",
    example: "3,418 businesses · 16 banks · SM City Cauayan" },
  { key: "labor", label: "Labor market", tab: "Market", required: false,
    desc: "Key-value list: minimum wage, universities, workforce proxies.",
    example: "₱480/day min wage · Everise ~1,000 agents" },
  { key: "costs", label: "Cost of doing business", tab: "Market", required: false,
    desc: "Key-value list: rents, power, water, internet rates.",
    example: "₱120–180/sqm warehouse rent · ₱9.48/kWh power" },
  { key: "demand", label: "Demand indicators", tab: "Market", required: false,
    desc: "Key-value list: incomes, poverty incidence, remittance base.",
    example: "₱290,120 avg family income (R2, FIES 2023)" },
  { key: "catchment", label: "Catchment & access", tab: "Market", required: false,
    desc: "Key-value list: distances to neighbors, highways, catchment logic.",
    example: "Ilagan 34 km · Santiago ~55 km · Manila 367 km" },
  { key: "points", label: "Points pack", tab: "Points", required: true,
    desc: "Object: point cards, flood-risk barangays, geohazard, security, growth pipeline.",
    example: "8 point cards + flood-risk barangay list" },
  { key: "political", label: "Political pack", tab: "Political", required: true,
    desc: "Object: officials list, dynasty, climate, historical politics timeline, business climate, caution notes.",
    example: "Mayor · Vice Mayor · Rep · 10 councilors" },
  { key: "realEstate", label: "Real estate pack", tab: "Real Estate", required: false,
    desc: "Object: land/house/rent pricing bands with intro + caution. Cauayan only; optional until other LGUs researched.",
    example: "Agri ₱85–190/sqm · lots ₱6.7K–30K/sqm · Camella ₱1.7–8M · rooms ₱3.5–5.5K/mo" },
  { key: "references", label: "References", tab: "References", required: true,
    desc: "Array of { title, url } sources backing the LGU's data.",
    example: "62 sourced references" },
];