/* Region 2 — Info: hash router + inline SVG map */
(function () {
  "use strict";

  const app = document.getElementById("app");
  const GEO = window.ISABELA_GEO;

  // slug helpers
  const slugify = (name) =>
    name.toLowerCase().replace(/^city of /, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const bySlug = {};
  GEO.features.forEach((f) => { bySlug[slugify(f.properties.adm3_en)] = f; });

  // Linear projection tuned to province bounds (equirectangular with lat correction)
  const lons = [], lats = [];
  GEO.features.forEach((f) => f.geometry.coordinates[0].forEach(([x, y]) => { lons.push(x); lats.push(y); }));
  const minLon = Math.min(...lons), maxLon = Math.max(...lons);
  const minLat = Math.min(...lats), maxLat = Math.max(...lats);
  const W = 640;
  const H = Math.round(W * ((maxLat - minLat) / ((maxLon - minLon) * Math.cos((minLat + maxLat) / 2 * Math.PI / 180))));
  const px = (lon) => ((lon - minLon) / (maxLon - minLon)) * W;
  const py = (lat) => ((maxLat - lat) / (maxLat - minLat)) * H;

  // ---------- Map view ----------
  function renderMap() {
    document.title = "Region 2 — Info";
    app.innerHTML = `
      <div class="map-layout">
        <div class="map-wrap">
          <svg id="isabela-map" viewBox="0 0 ${W} ${H}" role="group" aria-label="Interactive map of Isabela province, 37 clickable municipalities and cities"></svg>
          <div class="map-legend">
            <span><i class="dot m"></i> Municipality</span>
            <span><i class="dot c"></i> City</span>
          </div>
        </div>
        <aside class="lgu-sidebar" aria-label="List of Isabela LGUs">
          <h2 class="sidebar-title">LGUs <span class="sidebar-count">${GEO.features.length}</span></h2>
          <div class="overlay-controls">
            <label for="overlay-select">Color map by</label>
            <select id="overlay-select" aria-label="Choropleth overlay metric">
              <option value="none">None (city/municipality)</option>
              <option value="completion">Data completion</option>
              <option value="area">Land area</option>
            </select>
            <div class="overlay-legend" id="overlay-legend" hidden></div>
          </div>
          <ul class="lgu-list" id="lgu-list"></ul>
        </aside>
      </div>`;
    const svg = document.getElementById("isabela-map");
    const NS = "http://www.w3.org/2000/svg";
    const listEl = document.getElementById("lgu-list");
    const pathBySlug = {}, rowBySlug = {};

    GEO.features.forEach((f) => {
      const p = f.properties;
      const slug = slugify(p.adm3_en);
      const isCity = p.geo_level === "City";
      const path = document.createElementNS(NS, "path");
      const d = f.geometry.coordinates[0]
        .map(([lon, lat], i) => (i ? "L" : "M") + px(lon).toFixed(1) + " " + py(lat).toFixed(1))
        .join("") + "Z";
      path.setAttribute("d", d);
      path.setAttribute("class", "lgu" + (isCity ? " city" : ""));
      path.setAttribute("tabindex", "0");
      path.setAttribute("role", "link");
      path.setAttribute("aria-label", p.adm3_en + (isCity ? " (city)" : " (municipality)") + " — view details");
      path.dataset.name = p.adm3_en;
      path.dataset.slug = slug;
      path.dataset.cx = px(centroid(f)[0]);
      path.dataset.cy = py(centroid(f)[1]);
      path.addEventListener("click", () => { location.hash = "#/city/" + slug; });
      path.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); location.hash = "#/city/" + slug; }
      });
      svg.appendChild(path);
      pathBySlug[slug] = path;
    });

    // sidebar rows (alphabetical)
    const sorted = GEO.features.slice().sort((a, b) =>
      a.properties.adm3_en.localeCompare(b.properties.adm3_en));
    sorted.forEach((f) => {
      const p = f.properties;
      const slug = slugify(p.adm3_en);
      const isCity = p.geo_level === "City";
      const li = document.createElement("li");
      li.className = "lgu-row" + (isCity ? " city" : "");
      li.setAttribute("tabindex", "0");
      li.setAttribute("role", "button");
      li.setAttribute("aria-label", p.adm3_en + (isCity ? " (city)" : " (municipality)") + " — highlight on map");
      li.dataset.slug = slug;
      li.innerHTML = `<span class="lgu-row-name">${p.adm3_en}</span>` +
        (isCity ? `<span class="row-badge">City</span>` : "");
      rowBySlug[slug] = li;
      listEl.appendChild(li);
    });

    // row hover → soft polygon highlight; row click → select/pulse polygon
    listEl.addEventListener("mouseover", (e) => {
      const row = e.target.closest(".lgu-row");
      if (row) pathBySlug[row.dataset.slug].classList.add("soft");
    });
    listEl.addEventListener("mouseout", (e) => {
      const row = e.target.closest(".lgu-row");
      if (row) pathBySlug[row.dataset.slug].classList.remove("soft");
    });
    listEl.addEventListener("click", (e) => {
      const row = e.target.closest(".lgu-row");
      if (!row) return;
      const path = pathBySlug[row.dataset.slug];
      const wasSelected = path.classList.contains("selected");
      listEl.querySelector(".lgu-row.selected")?.classList.remove("selected");
      svg.querySelector(".lgu.selected")?.classList.remove("selected");
      if (!wasSelected) {
        row.classList.add("selected");
        path.classList.add("selected");
      }
    });
    listEl.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("lgu-row")) {
        e.preventDefault();
        e.target.click();
      }
    });

    // polygon hover → highlight + scroll to matching row
    svg.addEventListener("mouseover", (e) => {
      if (!e.target.classList || !e.target.classList.contains("lgu")) return;
      const row = rowBySlug[e.target.dataset.slug];
      if (row) {
        row.classList.add("active");
        row.scrollIntoView({ block: "nearest" });
      }
    });
    svg.addEventListener("mouseout", (e) => {
      if (!e.target.classList || !e.target.classList.contains("lgu")) return;
      rowBySlug[e.target.dataset.slug]?.classList.remove("active");
    });

    // hover label
    const label = document.createElementNS(NS, "text");
    label.setAttribute("class", "map-label");
    label.setAttribute("text-anchor", "middle");
    svg.appendChild(label);
    svg.addEventListener("mouseover", (e) => {
      const t = e.target;
      if (!t.classList || !t.classList.contains("lgu")) return;
      label.textContent = t.dataset.name;
      label.setAttribute("x", Math.min(Math.max(+t.dataset.cx, 50), W - 50));
      label.setAttribute("y", +t.dataset.cy - 8);
      label.classList.add("visible");
    });
    svg.addEventListener("mouseout", (e) => {
      if (e.target.classList && e.target.classList.contains("lgu")) label.classList.remove("visible");
    });

    // choropleth overlay control
    document.getElementById("overlay-select").addEventListener("change", (e) =>
      applyOverlay(e.target.value));
  }

  // polygon centroid (area-weighted)
  function centroid(f) {
    const ring = f.geometry.coordinates[0];
    let a = 0, cx = 0, cy = 0;
    for (let i = 0; i < ring.length - 1; i++) {
      const [x0, y0] = ring[i], [x1, y1] = ring[i + 1];
      const cross = x0 * y1 - x1 * y0;
      a += cross; cx += (x0 + x1) * cross; cy += (y0 + y1) * cross;
    }
    a /= 2;
    return [cx / (6 * a), cy / (6 * a)];
  }

  // ---------- Choropleth overlays ----------
  // 5-step sequential palette: panel navy -> teal -> amber (matches site accents)
  const OV_STEPS = ["#1a2440", "#1d3a52", "#1f6e6b", "#2dd4bf", "#f59e0b"];
  function quantileBuckets(values, n) {
    // value -> bucket index via rank, so each bucket holds ~equal count
    const sortedVals = [...values].sort((a, b) => a - b);
    return values.map((v) => {
      const rank = sortedVals.filter((x) => x < v).length;
      return Math.min(n - 1, Math.floor((rank / values.length) * n));
    });
  }
  function fieldFilled(v) {
    return !!v && (!Array.isArray(v) || v.length > 0) &&
      (typeof v !== "object" || Array.isArray(v) || Object.keys(v).length > 0);
  }
  function overlayMetrics() {
    const DATA = window.LGU_DATA || {};
    const SCHEMA = window.SCHEMA || [];
    const slugs = GEO.features.map((f) => slugify(f.properties.adm3_en));
    return {
      completion: slugs.map((s) => {
        const d = DATA[s];
        return SCHEMA.length ? SCHEMA.filter((sc) => fieldFilled(d ? d[sc.key] : undefined)).length / SCHEMA.length : 0;
      }),
      area: GEO.features.map((f) => +f.properties.area_km2 || 0),
    };
  }
  function applyOverlay(mode) {
    const svg = document.getElementById("isabela-map");
    const legend = document.getElementById("overlay-legend");
    if (!svg) return;
    if (mode === "none") {
      svg.querySelectorAll(".lgu").forEach((p) => { p.style.fill = ""; });
      if (legend) { legend.hidden = true; legend.innerHTML = ""; }
      return;
    }
    const metrics = overlayMetrics()[mode];
    const names = GEO.features.map((f) => f.properties.adm3_en);
    const buckets = quantileBuckets(metrics, OV_STEPS.length);
    svg.querySelectorAll(".lgu").forEach((p) => {
      const i = names.indexOf(p.dataset.name);
      if (i >= 0) p.style.fill = OV_STEPS[buckets[i]];
    });
    const vals = metrics;
    if (legend) {
      const unit = mode === "area" ? " km²" : mode === "completion" ? "%" : "";
      const fmt = (v) => mode === "completion" ? Math.round(v * 100) : Math.round(v * 10) / 10;
      legend.innerHTML = `<span class="ov-title">${mode === "area" ? "Land area" : "Data completion"} (5 buckets)</span>` +
        `<div class="ov-scale">${OV_STEPS.map((c, i) => `<i style="background:${c}"></i>`).join("")}</div>` +
        `<span class="ov-range">${fmt(Math.min(...vals))}${unit} → ${fmt(Math.max(...vals))}${unit}</span>`;
      legend.hidden = false;
    }
  }

  // ---------- City detail view ----------
  function renderCity(slug, tab) {
    const f = bySlug[slug];
    if (!f) {
      document.title = "Not found — Region 2 — Info";
      app.innerHTML = `
        <div class="city-page">
          <h2>Not found</h2>
          <p class="meta">No LGU matches “${slug}”.</p>
          <a class="back-link" href="#/">← Back to map</a>
        </div>`;
      return;
    }
    const p = f.properties;
    const isCity = p.geo_level === "City";
    document.title = p.adm3_en + " — Region 2 — Info";
    const data = (window.LGU_DATA || {})[slug];
    app.innerHTML = `
      <div class="city-page">
        <span class="city-badge ${isCity ? "city" : "mun"}">${isCity ? "City" : "Municipality"}</span>
        <h2>${p.adm3_en}</h2>
        <p class="meta">Isabela, Cagayan Valley · PSGC ${p.adm3_psgc} · Area ${p.area_km2} km²</p>
        ${data ? renderTabs(data, slug) : `
        <div class="placeholder">Detail content coming soon — demographics, officials, attractions, and more.</div>`}
        <a class="back-link" href="#/">← Back to map</a>
      </div>`;
    if (data) {
      wireTabs(slug);
      if (tab && app.querySelector(`.tab[data-tab="${tab}"]`)) selectTab(tab);
    }
  }

  // esc() keeps compiled research strings (which contain quotes) safe inside HTML
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function renderTabs(d, slug) {
    const tabs = [
      ["general", "General"],
      ["market", "Market"],
      ["points", "Points"],
      ["political", "Political"],
      ["estate", "Real Estate"],
      ["references", "References"],
    ];
    return `
      ${d.nicknames ? `<p class="nicknames">${d.nicknames.map(esc).join(" · ")}</p>` : ""}
      <div class="tabs" role="tablist">
        ${tabs.map(([id, label], i) => `
          <button class="tab${i === 0 ? " active" : ""}" role="tab" aria-selected="${i === 0}"
            data-tab="${id}" tabindex="${i === 0 ? 0 : -1}">${label}</button>`).join("")}
      </div>
      <div class="tab-panel" data-panel="general">${renderGeneral(d)}</div>
      <div class="tab-panel" data-panel="market" hidden>${renderMarket(d)}</div>
      <div class="tab-panel" data-panel="points" hidden>${renderPoints(d)}</div>
      <div class="tab-panel" data-panel="political" hidden>${renderPolitical(d)}</div>
      <div class="tab-panel" data-panel="estate" hidden>${d.realEstate ? renderEstate(d, slug) : ""}</div>
      <div class="tab-panel" data-panel="references" hidden>${renderReferences(d)}</div>`;
  }

  // superscript citation marker → jumps to references tab row n (1-indexed)
  const cite = (d, n) => d.references && d.references[n - 1]
    ? `<button type="button" class="cite" data-cite="${n}" aria-label="Citation ${n} — see reference ${n} in the References tab">[${n}]</button>`
    : "";

  function renderGeneral(d) {
    return `
      ${d.founded ? `<p class="kv-founded">${esc(d.founded)}</p>` : ""}
      ${d.etymology ? `<p class="kv-etym">${esc(d.etymology)}</p>` : ""}
      ${d.smartCity ? `<div class="callout">★ ${esc(d.smartCity)}</div>` : ""}
      <dl class="kv">${d.general.map(([k, v]) =>
        `<dt>${esc(k)}</dt><dd>${esc(v)}${/^Population/.test(k) ? cite(d, 1) : ""}</dd>`).join("")}</dl>`;
  }

  function renderMarket(d) {
    const sub = (title, rows) => rows && rows.length
      ? `<h3 class="sub-head">${title}</h3><dl class="kv">${rows.map(([k, v]) =>
          `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl>`
      : "";
    return `<dl class="kv">${d.market.map(([k, v]) =>
      `<dt>${esc(k)}</dt><dd>${esc(v)}${/^Businesses/.test(k) ? cite(d, 4) : ""}</dd>`).join("")}</dl>
      ${sub("Labor", d.labor)}
      ${sub("Cost of Doing Business", d.costs)}
      ${sub("Consumer Demand", d.demand)}
      ${sub("Catchment & Connectivity", d.catchment)}`;
  }

  function renderPoints(d) {
    return `
      <ul class="point-cards">${d.points.cards.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
      <div class="warning-card">
        <h3>⚠ Flood-risk barangays</h3>
        <ul class="risk-list">${d.points.floodRisk.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        <p>${esc(d.points.floodNote)}</p>
      </div>`;
  }

  function renderPolitical(d) {
    return `
      <ul class="officials">${d.political.officials.map(([role, name, note]) => `
        <li><span class="role">${esc(role)}</span><span class="name">${esc(name)}${role === "Mayor" ? cite(d, 8) : ""}</span>
        <span class="note">${esc(note)}</span></li>`).join("")}</ul>
      ${d.officialNote ? `<div class="warning-card slim"><p>${esc(d.officialNote)}</p></div>` : ""}
      <div class="dynasty-block">
        <h3>Political context</h3>
        ${d.dynasty ? `<p><strong>Dynasty:</strong> ${esc(d.dynasty)}</p>` : ""}
        ${d.climate ? `<p><strong>Climate:</strong> ${esc(d.climate)}</p>` : ""}
      </div>
      ${d.political.businessClimate ? renderBusinessClimate(d.political.businessClimate) : ""}
      ${d.political.history ? renderPoliticalHistory(d) : ""}
      ${d.caution ? `<div class="warning-card slim"><p><strong>Caution:</strong> ${esc(d.caution)}</p></div>` : ""}`;
  }

  // Historical politics timeline — [era, text] pairs; keyed cites jump to the References tab
  function renderPoliticalHistory(d) {
    // Cites: prefer a per-LGU map (d.political.historyCites, e.g. {5: [12]}); for packs that
    // predate it, fall back to the legacy Cauayan layout {5:[12], 7:[13]}. Timeline items whose
    // era/text already name their source need no cite.
    const maxRef = d.references ? d.references.length : 0;
    const rawCites = d.political.historyCites || { 5: [12], 7: [13] };
    const cites = {};
    for (const [idx, arr] of Object.entries(rawCites)) {
      const valid = arr.filter(n => n >= 1 && n <= maxRef);
      if (valid.length) cites[idx] = valid;
    }
    return `<h3 class="sub-head">Historical politics</h3>
      ${d.political.historyIntro ? `<p class="history-intro">${esc(d.political.historyIntro)}</p>` : ""}
      <ol class="timeline">${d.political.history.map(([era, text], i) => `
        <li class="timeline-item">
          <span class="timeline-era">${esc(era)}</span>
          <p>${esc(text)}${(cites[i] || []).map((n) => cite(d, n)).join("")}</p>
        </li>`).join("")}</ol>`;
  }

  function renderBusinessClimate(bc) {
    const cards = [
      ["Permitting", bc.permitting],
      ["Investment Promotion", bc.investmentPromo],
      ["Incentives", bc.incentives],
      ["Taxes", bc.taxes],
    ].filter(([, v]) => v);
    if (!cards.length) return "";
    return `<h3 class="sub-head">Business Climate</h3>
      <div class="bc-cards">
        ${cards.map(([t, v]) => `<div class="bc-card"><h4>${esc(t)}</h4><p>${esc(v)}</p></div>`).join("")}
      </div>`;
  }

  // Real Estate tab — land / house / rent pricing bands from live listings
  function renderEstate(d, slug) {
    const re = d.realEstate;
    const sub = (title, rows, citeMap) => `
      <h3 class="sub-head">${title}</h3>
      <dl class="kv">${rows.map(([k, v], i) =>
        `<dt>${esc(k)}</dt><dd>${esc(v)}${(citeMap[i] || []).map((n) => cite(d, n)).join("")}</dd>`).join("")}</dl>`;
    const H = window.RE_HISTORY;
    const isCauayan = slug === "cauayan";
    const GA = H && H.group_asks;
    const histBlock = H ? `
      <h3 class="sub-head">Historical context</h3>
      <p class="estate-intro">Trend anchors behind the live asks above — bands, not transaction medians (PH has no public deed-price registry). ${isCauayan ? "" : "Provincial/national level only for non-Cauayan LGUs."}</p>
      <ol class="timeline">
        ${H.zonal.points.map(([era, text]) => `
          <li class="timeline-item"><span class="timeline-era">${esc(era)}</span><p>${esc(text)}</p></li>`).join("")}
        ${GA && isCauayan ? GA.land_only_by_year.map(([y, text]) => `
          <li class="timeline-item"><span class="timeline-era">${esc(y)} FB asks</span><p>${esc(text)}</p></li>`).join("") : ""}
        ${GA && isCauayan ? `<li class="timeline-item"><span class="timeline-era">Bands</span><p>${esc(GA.land_band)}. ${esc(GA.agri_band)}.</p></li>` : ""}
        ${H.national.yoy_notes.slice(-4).map(([q, y]) => `
          <li class="timeline-item"><span class="timeline-era">${esc(q)}</span><p>National RPPI ${esc(y)} — bank-valuation trend backdrop.</p></li>`).join("")}
      </ol>` : "";
    return `
      ${re.intro ? `<p class="estate-intro">${esc(re.intro)}</p>` : ""}
      ${sub("Land — asking prices", re.land || [], [[54, 58], [], [], [53]])}
      ${sub("Houses — sale prices", re.houses || [], [[56], [55], [], [52], []])}
      ${sub("Rent — monthly rates", re.rent || [], [[61], [], [59], [53]])}
      ${histBlock}
      ${re.caution ? `<div class="warning-card slim"><p><strong>Caution:</strong> ${esc(re.caution)}</p></div>` : ""}`;
  }

  function renderReferences(d) {
    if (!d.references || !d.references.length) {
      return `<div class="placeholder">Reference list coming soon — sources for this LGU's data will appear here.</div>`;
    }
    const domain = (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; } };
    const ext = `<svg class="ext" viewBox="0 0 24 24" width="11" height="11" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>`;
    return `<ol class="ref-list">${d.references.map((r, i) => `
      <li id="ref-${i + 1}">
        <a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.title)}${ext}</a>
        <span class="ref-domain">${esc(domain(r.url))}</span>
      </li>`).join("")}</ol>`;
  }

  function selectTab(id) {
    app.querySelectorAll(".tab").forEach((t) => {
      const active = t.dataset.tab === id;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active);
      t.tabIndex = active ? 0 : -1;
    });
    app.querySelectorAll(".tab-panel").forEach((p) => {
      p.hidden = p.dataset.panel !== id;
    });
  }

  function wireTabs(slug) {
    // setTab keeps the active tab in the URL (no re-render) so tabs are deep-linkable
    const setTab = (id) => {
      selectTab(id);
      if (slug) history.replaceState(null, "", `#/city/${slug}/${id}`);
    };
    const tablist = app.querySelector(".tabs");
    tablist.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab");
      if (btn) setTab(btn.dataset.tab);
    });
    tablist.addEventListener("keydown", (e) => {
      const tabs = [...app.querySelectorAll(".tab")];
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      const next = e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length]
        : e.key === "ArrowLeft" ? tabs[(i - 1) % tabs.length] : null;
      if (next) { e.preventDefault(); next.focus(); next.click(); }
    });
    app.querySelectorAll(".cite").forEach((c) => c.addEventListener("click", () => {
      setTab("references");
      const ref = document.getElementById("ref-" + c.dataset.cite);
      if (ref) ref.scrollIntoView({ block: "center", behavior: "smooth" });
    }));
  }

  // ---------- Schema config view ----------
  // Renders from window.SCHEMA (data/schema.js) — the field list lives there, not here.
  function renderSchema() {
    const SCHEMA = window.SCHEMA || [];
    const DATA = window.LGU_DATA || {};
    document.title = "Schema — Region 2 — Info";
    const filledCount = (d, k) => {
      const v = d ? d[k] : undefined;
      return !!v && (!Array.isArray(v) || v.length > 0) &&
        (typeof v !== "object" || Array.isArray(v) || Object.keys(v).length > 0);
    };
    const example = DATA.cauayan;
    const lguRows = GEO.features.slice()
      .sort((a, b) => a.properties.adm3_en.localeCompare(b.properties.adm3_en))
      .map((f) => {
        const slug = slugify(f.properties.adm3_en);
        const filled = SCHEMA.filter((s) => filledCount(DATA[slug], s.key)).length;
        const pct = SCHEMA.length ? Math.round((filled / SCHEMA.length) * 100) : 0;
        return { name: f.properties.adm3_en, slug, filled, pct };
      });
    const withData = lguRows.filter((r) => r.filled > 0).length;
    app.innerHTML = `
      <div class="schema-page">
        <h2>LGU data schema</h2>
        <p class="meta">Fields each LGU detail entry can carry. Edit <code>data/schema.js</code> to add or remove fields — this page and the completion bars below render from it.</p>
        <div class="table-wrap">
          <table class="schema-table">
            <thead><tr>
              <th>Field key</th><th>Friendly name</th><th>Tab</th>
              <th>Description</th><th>Example — Cauayan</th><th>Requirement</th>
            </tr></thead>
            <tbody>
              ${SCHEMA.map((s) => {
                const has = filledCount(example, s.key);
                return `<tr>
                  <td><code>${esc(s.key)}</code></td>
                  <td>${esc(s.label)}</td>
                  <td>${esc(s.tab)}</td>
                  <td class="col-desc">${esc(s.desc)}</td>
                  <td class="col-example${has ? "" : " missing"}">${has ? esc(s.example) : "—"}</td>
                  <td><span class="req-badge ${s.required ? "req" : "opt"}">${s.required ? "Required" : "Optional"}</span></td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
        <h3>Completion by LGU <span class="sidebar-count">${withData}/${lguRows.length} started</span></h3>
        <p class="meta">Share of schema fields with data, computed from <code>LGU_DATA</code>.</p>
        <ul class="completion-list">
          ${lguRows.map((r) => `
            <li class="completion-row${r.pct === 100 ? " done" : r.pct === 0 ? " empty" : ""}">
              <a href="#/city/${r.slug}" class="completion-name">${esc(r.name)}</a>
              <div class="meter" role="img" aria-label="${esc(r.name)}: ${r.filled} of ${SCHEMA.length} fields filled (${r.pct}%)">
                <span style="width:0%" data-target="${r.pct}"></span>
              </div>
              <span class="completion-num" data-count="${r.pct}">0%</span>
            </li>`).join("")}
        </ul>
        <a class="back-link" href="#/">← Back to map</a>
      </div>`;
    // DesignSpells: meters + numbers count up on first paint
    requestAnimationFrame(() => requestAnimationFrame(() => {
      app.querySelectorAll(".completion-row").forEach((row) => {
        const span = row.querySelector(".meter span[data-target]");
        const num = row.querySelector(".completion-num[data-count]");
        if (span) span.style.width = span.dataset.target + "%";
        if (num) {
          const target = +num.dataset.count;
          if (target === 0) { num.textContent = "0%"; return; }
          const t0 = performance.now();
          const D = 600;
          const tick = (t) => {
            const k = Math.min(1, (t - t0) / D);
            const eased = 1 - Math.pow(1 - k, 3);
            num.textContent = Math.round(target * eased) + "%";
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }));
  }

  // ---------- Compare view ----------
  // Side-by-side LGU comparison. Rows = metrics, columns = LGUs.
  // Cell extractors read from each LGU's data pack; — marks missing data.
  function cellText(v) {
    if (v == null || v === "" || (Array.isArray(v) && !v.length)) return "—";
    if (Array.isArray(v)) return v.map(([k, x]) => `${k}: ${x}`).join(" · ");
    if (typeof v === "object") return Object.entries(v).map(([k, x]) => `${k}: ${x}`).join(" · ");
    return String(v);
  }
  function rowCell(pack, path) {
    // path like "general" or "realEstate.land" — arrays of [label, value] pairs
    const parts = path.split(".");
    let v = pack;
    for (const p of parts) { v = v == null ? undefined : v[p]; }
    return cellText(v);
  }
  const COMPARE_ROWS = [
    ["General", null],
    ["Population (2024)", "pop"],
    ["Land area", "area"],
    ["Income class / revenue", "income"],
    ["Market", null],
    ["Registered businesses", "biz"],
    ["Banks / hospitals", "infra"],
    ["Labor & costs", "laborCosts"],
    ["Real estate", null],
    ["Land pricing", "reLand"],
    ["House pricing", "reHouses"],
    ["Rent", "reRent"],
    ["Political", null],
    ["Mayor", "mayor"],
    ["District rep", "rep"],
    ["Political climate", "climate"],
  ];

  function renderCompare(slugs) {
    const DATA = window.LGU_DATA || {};
    const lgu = (s) => {
      const f = bySlug[s];
      if (!f) return null;
      const d = DATA[s] || {};
      return {
        name: f.properties.adm3_en, slug: s, d,
        pop: d.general?.find?.(([k]) => /^Population/.test(k))?.[1] || "—",
        area: d.general?.find?.(([k]) => /^Land area/.test(k))?.[1] || "—",
        income: d.general?.find?.(([k]) => /Income|revenue|income class/i.test(k))?.[1] || "—",
        biz: d.market?.find?.(([k]) => /^Businesses/.test(k))?.[1] || "—",
        infra: [
          d.market?.find?.(([k]) => /^Banks/.test(k))?.[1],
          d.market?.find?.(([k]) => /^Hospitals/.test(k))?.[1],
        ].filter((x) => x && x !== "—").join(" · ") || "—",
        laborCosts: [
          d.labor?.find?.(([k]) => /wage/i.test(k))?.[1],
          d.costs?.find?.(([k]) => /power/i.test(k))?.[1],
        ].filter((x) => x && x !== "—").join(" · ") || "—",
        reLand: rowCell(d, "realEstate.land"),
        reHouses: rowCell(d, "realEstate.houses"),
        reRent: rowCell(d, "realEstate.rent"),
        mayor: d.political?.officials?.find?.(([r]) => r === "Mayor")?.slice(1).join(" — ") || "—",
        rep: d.political?.officials?.find?.(([r]) => /^District Rep/.test(r))?.slice(1).join(" — ") || "—",
        climate: d.political?.climate || "—",
      };
    };
    const cols = slugs.map(lgu).filter(Boolean);
    if (!cols.length) {
      app.innerHTML = `<div class="compare-page"><h2>Compare LGUs</h2><div class="placeholder">No valid LGUs to compare.</div><a class="back-link" href="#/">← Back to map</a></div>`;
      return;
    }
    document.title = "Compare — Region 2 — Info";
    app.innerHTML = `
      <div class="compare-page">
        <h2>Compare LGUs</h2>
        <p class="meta">Side-by-side view of every data pack field. “—” = not researched yet. Open <a href="#/schema">Schema</a> for per-LGU completion.</p>
        <div class="table-wrap">
          <table class="compare-table">
            <thead><tr><th class="row-label">Field</th>${cols.map((c) => `<th><a href="#/city/${c.slug}">${esc(c.name)}</a></th>`).join("")}</tr></thead>
            <tbody>
              ${COMPARE_ROWS.map(([label, key]) => key === null
                ? `<tr class="section-row"><td colspan="${cols.length + 1}">${esc(label)}</td></tr>`
                : `<tr><th class="row-label">${esc(label)}</th>${cols.map((c) => `<td class="${key.startsWith("re") ? "wide" : ""}">${esc(c[key])}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
        <a class="back-link" href="#/">← Back to map</a>
      </div>`;
  }

  // ---------- Utilities view — barangay-level 90-day outage history ----------
  // Renders from window.CAUAYAN_UTILITIES (data/utilities-cauayan.js) — scrape
  // of brownoutba.com's rolling 90-day per-barangay outage history (ISELCO-I).
  function renderUtilities() {
    const U = window.CAUAYAN_UTILITIES;
    document.title = "Utilities — Region 2 — Info";
    if (!U || !U.barangays) {
      app.innerHTML = `<div class="city-page"><h2>Utilities</h2><div class="placeholder">Utility data not loaded.</div><a class="back-link" href="#/">← Back to map</a></div>`;
      return;
    }
    const rows = Object.entries(U.barangays)
      .map(([name, r]) => ({ name, ...r }))
      .sort((a, b) => a.name.localeCompare(b.name));
    const withHist = rows.filter((r) => r.has_history_block);
    const totalOut = withHist.reduce((s, r) => s + (r.outages || 0), 0);
    const totalHrs = withHist.reduce((s, r) => s + (r.hours_without_power || 0), 0);
    const schedNow = rows.filter((r) => /SCHEDULED/.test(r.status || ""));
    const statusPill = (r) => {
      if (/SCHEDULED/.test(r.status || "")) return `<span class="upill warn">⚡ Scheduled${r.next_event ? " · " + esc(r.next_event) : ""}</span>`;
      if (/HINDI|NO BROWNOUT/i.test(r.status || "")) return `<span class="upill ok">No brownout</span>`;
      return `<span class="upill unk">No status</span>`;
    };
    const histCell = (r) => r.has_history_block
      ? `<b>${r.outages}</b> · ${r.hours_without_power} h`
      : `<span class="clean">— clean</span>`;
    const causeCell = (r) => r.has_history_block
      ? (esc((r.cause || "").slice(0, 60)) + (r.last_ended ? ` <span class="dim">(last ${esc(r.last_ended)})</span>` : ""))
      : `<span class="dim">None recorded in window</span>`;
    app.innerHTML = `
      <div class="compare-page utilities-page">
        <h2>Utilities — Cauayan City</h2>
        <p class="meta">Power interruption history per barangay (rolling 90-day window) — provider ISELCO-I, from brownoutba.com · scraped ${esc(U.scraped_at || "—")}. ${withHist.length} of 65 barangays have recorded outages: ${totalOut} events, ${totalHrs} h downtime. Internet: no SLA published for consumer fiber (PLDT/Converge/Globe active in city); enterprise leased lines carry ~99.6% SLA. See <a href="https://github.com/franzbuenaventura/region2-info/blob/main/research/cauayan-uptime.md" target="_blank" rel="noopener">uptime research note</a>.</p>
        ${schedNow.length ? `<div class="callout">⚡ Scheduled interruptions upcoming: ${schedNow.map((r) => esc(r.name) + (r.next_event ? " (" + esc(r.next_event) + ")" : "")).join(" · ")}</div>` : ""}
        <div class="table-wrap">
          <table class="compare-table utilities-table">
            <thead><tr>
              <th class="row-label">Barangay</th><th>Current status</th>
              <th>90-day outages · hrs</th><th>Cause / last event</th>
            </tr></thead>
            <tbody>
              ${rows.map((r) => `
                <tr>
                  <td class="row-label">${esc(r.name)}</td>
                  <td>${statusPill(r)}</td>
                  <td>${histCell(r)}</td>
                  <td class="wide">${causeCell(r)}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <p class="dim note">90-day window ends at scrape time; barangay history resets as brownoutba ages its records. District I–III = Poblacion.</p>
        <a class="back-link" href="#/">← Back to map</a>
      </div>`;
  }

  // ---------- Real Estate Prices view — the full dated FB-asks table ----------
  // Renders from window.RE_POSTS (data/re-posts.js) — 264 structured records
  // parsed from the 370-post Facebook lot-groups harvest (year-tagged 2021–2026*).
  function renderREPrices() {
    const P = window.RE_POSTS;
    document.title = "Real Estate Prices — Region 2 — Info";
    if (!P || !P.length) {
      app.innerHTML = `<div class="city-page"><h2>Real Estate Prices</h2><div class="placeholder">Post data not loaded.</div><a class="back-link" href="#/">← Back to map</a></div>`;
      return;
    }
    // sort: dated rows first (newest years top), then undated, then by ₱/sqm desc
    const yearVal = (y) => /^\d{4}/.test(y) ? +y.slice(0, 4) : 2027; // 2026* → 2027 = newest bucket for unfiltered recents
    const normLoc = (s) => {
      if (!s) return "";
      let t = s.trim();
      t = t.replace(/^r[ag]?y\b/, (m) => "Ba" + m.slice(1)); // 'rangay'/'rgy' artifact -> Barangay…
      t = t.replace(/^arangay\b/, "Barangay");
      t = t.replace(/^\s*[Bb](?:rgy|arangay)\.?\s*/, "Brgy. ");
      return t;
    };
    const rows = P.slice().sort((a, b) =>
      (yearVal(b.year) - yearVal(a.year)) || ((b.psp || 0) - (a.psp || 0)));
    const dated = P.filter((r) => /^\d{4}$/.test(r.year));
    const computable = P.filter((r) => r.psp);
    const yearCounts = {};
    dated.forEach((r) => { yearCounts[r.year] = (yearCounts[r.year] || 0) + 1; });
    const yrSummary = Object.keys(yearCounts).sort().map((y) => `${y}: ${yearCounts[y]}`).join(" · ");
    // median of land-type computable rows
    const landOnly = computable.filter((r) => r.type === "land" && r.area_sqm >= 50 && r.psp >= 100);
    const med = landOnly.length >= 3
      ? landOnly.map((r) => r.psp).sort((a, b) => a - b)[Math.floor(landOnly.length / 2)]
      : null;
    const fmtP = (n) => n == null ? "—" : "₱" + n.toLocaleString("en-PH");
    const fmtSqm = (n) => n == null ? "—" : (n >= 10000 ? (n / 10000).toLocaleString("en-PH", {maximumFractionDigits: 1}) + " ha" : n.toLocaleString("en-PH") + " sqm");
    const typePill = (t) => {
      const cls = /house/.test(t) ? "lp-hl" : /farm|agri/.test(t) ? "lp-agri" : /commercial/.test(t) ? "lp-comm" : /subdivision/.test(t) ? "lp-subs" : t === "land" ? "lp-land" : "lp-other";
      return `<span class="lpill ${cls}">${esc(t)}</span>`;
    };
    // distinct LGU location options (from all records, incl. barangay-level)
    const locSet = [...new Set(P.filter((r) => r.loc).map((r) => normLoc(r.loc)))].sort();
    const app2 = app;
    app.innerHTML = `
      <div class="compare-page reprices-page">
        <h2>Real Estate Prices — Isabela lot &amp; house posts</h2>
        <p class="meta">${P.length} posts parsed from Facebook lot-sale groups (owner-direct asks; Isabela-wide, harvest Sept 30 2026). ${dated.length} year-tagged (${esc(yrSummary)}) · ${computable.length} with ₱/sqm · ${med ? `land-type median <b>${fmtP(med)}/sqm</b>` : "—"}. Asking prices — not transacted deals. ${P.filter(r=>r.psp && r.psp>50000).length} rows include house+unit value (see type column).</p>
        <div class="rfilters">
          <label>Filter by location
            <select id="rf-loc" aria-label="Filter posts by location">
              <option value="">All locations (${locSet.length})</option>
              ${locSet.map((l) => `<option value="${esc(l)}">${esc(l)}</option>`).join("")}
            </select>
          </label>
          <label>Type
            <select id="rf-type" aria-label="Filter posts by type">
              <option value="">All types</option>
              <option value="land">Land</option>
              <option value="house+lot">House + lot</option>
              <option value="farm/agri">Farm / agri</option>
              <option value="commercial">Commercial</option>
              <option value="subdivision/pre-selling">Subdivision / pre-selling</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>Year
            <select id="rf-year" aria-label="Filter posts by year">
              <option value="">All years</option>
              <option value="2026*">2026 (recent)</option>
              ${Object.keys(yearCounts).sort().reverse().map((y) => `<option value="${y}">${y}</option>`).join("")}
            </select>
          </label>
          <button id="rf-clear">Reset</button>
          <span id="rf-count" class="dim">${P.length} shown</span>
        </div>
        <div class="table-wrap">
          <table class="compare-table reprices-table" id="reprices-table">
            <thead><tr>
              <th>Year</th><th>Type</th><th>Location</th><th>Lot size</th>
              <th>Price</th><th>₱/sqm</th><th>Notes</th><th>Snippet</th><th>Link</th>
            </tr></thead>
            <tbody>
              ${rows.map((r, i) => `
                <tr data-i="${i}" data-loc="${esc(normLoc(r.loc))}" data-type="${esc(r.type)}" data-year="${esc(r.year)}">
                  <td class="cy ${r.year.includes("*") ? "approx" : ""}">${esc(r.year)}</td>
                  <td>${typePill(r.type)}</td>
                  <td class="loc-cell">${r.loc ? esc(normLoc(r.loc)) : '<span class="dim">—</span>'}</td>
                  <td class="num">${fmtSqm(r.area_sqm)}</td>
                  <td class="num">${fmtP(r.price_php)}</td>
                  <td class="num strong">${r.psp ? fmtP(r.psp) : '<span class="dim">—</span>'}</td>
                  <td class="notes-cell">${r.note ? esc(r.note) : '<span class="dim">—</span>'}</td>
                  <td class="snippet-cell">${esc(r.snippet.slice(0, 130))}</td>
                  <td class="link-cell">${r.link ? `<a href="${esc(r.link)}" target="_blank" rel="noopener" class="pblink">open post ↗</a>` : '<span class="dim">—</span>'}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
        <p class="dim note">*2026* = harvested from "most recent" unfiltered feed (Sept 30, 2026) — exact post date not yet confirmed; re-dating pass pending. Price parse: ₱K/₱M suffixes expanded; snippet kept verbatim for verification. Link: <code>open post ↔</code> goes to the original Facebook post — available on ~14 rows so far (FB lazy-loads per-story anchors; more get harvested as the account ages). Raw corpus: <code>data/re-history/fb-lot-posts-raw.json</code>.</p>
        <a class="back-link" href="#/">← Back to map</a>
      </div>`;
    // wire filters (client-side row filter, no re-render)
    const tbl = document.getElementById("reprices-table");
    const fLoc = document.getElementById("rf-loc");
    const fType = document.getElementById("rf-type");
    const fYear = document.getElementById("rf-year");
    const cnt = document.getElementById("rf-count");
    const apply = () => {
      const vl = fLoc.value, vt = fType.value, vy = fYear.value;
      let shown = 0;
      tbl.querySelectorAll("tbody tr").forEach((tr) => {
        const ok = (!vl || tr.dataset.loc === vl) && (!vt || tr.dataset.type === vt) && (!vy || tr.dataset.year === vy);
        tr.hidden = !ok;
        if (ok) shown++;
      });
      cnt.textContent = shown + " shown";
    };
    fLoc.addEventListener("change", apply);
    fType.addEventListener("change", apply);
    fYear.addEventListener("change", apply);
    document.getElementById("rf-clear").addEventListener("click", () => {
      fLoc.value = ""; fType.value = ""; fYear.value = ""; apply();
    });
  }

  // ---------- Build Costs page ----------
  function renderBuildPrices() {
    const B = window.RE_BUILDS;
    document.title = "Construction Build Costs — Region 2 — Info";
    if (!B || !B.national || !B.national.length) {
      app.innerHTML = `<div class="compare-page"><h2>Construction Build Costs</h2><div class="placeholder">Build-cost data not loaded.</div><a class="back-link" href="#/">← Back to map</a></div>`;
      return;
    }
    const fmtP = (n) => "₱" + n.toLocaleString("en-PH");
    const confPill = (c) => `<span class="lpill ${c === "solid" ? "lp-land" : c === "moderate" ? "lp-subs" : "lp-comm"}">${esc(c)}</span>`;
    const classes = [...new Set(B.national.map((r) => r.class))];
    const classSet = [...new Set(B.national.map((r) => r.class))];
    const cityNotes = B.city_differentiation || {};
    app.innerHTML = `
      <div class="compare-page buildcosts-page">
        <h2>Construction Build Costs — residential &amp; commercial</h2>
        <p class="meta">${B.note || ""} Generated ${esc(B.generated || "")}.</p>
        <div class="table-wrap">
          <table class="compare-table" id="builds-table">
            <thead><tr>
              <th>Build class</th><th>Band / tier</th><th>₱/sqm floor area</th><th>Confidence</th><th>Notes</th>
            </tr></thead>
            <tbody>
              ${B.national.map((r, i) => `
                <tr data-class="${esc(r.class)}">
                  <td>${esc(r.class)}</td>
                  <td>${esc(r.band || "—")}</td>
                  <td class="num strong">${r.psp_min != null ? fmtP(r.psp_min) + " – " + fmtP(r.psp_max) : "—"}</td>
                  <td>${confPill(r.confidence || "moderate")}</td>
                  <td class="notes-cell">${r.note ? esc(r.note) : ""}</td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
        ${B.regional_factor ? `<div class="card"><h3>Regional factor — NCR vs province</h3>
          <p>${esc(B.regional_factor.manila_to_province || "")}</p>
          <p>${esc(B.regional_factor.cagayan_valley || "")}</p></div>` : ""}
        ${cityNotes.summary ? `<div class="card"><h3>Per-city vs province-wide</h3>
          <p>${esc(cityNotes.summary)}</p>
          ${cityNotes.note ? `<p class="dim">${esc(cityNotes.note)}</p>` : ""}</div>` : ""}
        <p class="dim note">₱/sqm = cost per square meter of FLOOR AREA (the PH quoting standard), not lot size. Bands are contractor asking ranges — actual contracts vary with finishes, site access, typhoon-wind ratings, and materials logistics. Cross-checked sources: ${B.sources ? B.sources.length : 0}.</p>
        <a class="back-link" href="#/">← Back to map</a>
      </div>`;
    // class filter
    const tbl = document.getElementById("builds-table");
    const selId = "bf-class";
    const classesList = classSet;
    const bar = document.createElement("div");
    bar.className = "rfilters";
    bar.innerHTML = `<label>Class <select id="${selId}" aria-label="Filter builds by class"></select></label>
      <button id="bf-clear">Reset</button><span id="bf-count" class="dim"></span>`;
    tbl.parentElement.insertBefore(bar, tbl);
    const sel = document.getElementById(selId);
    sel.innerHTML = `<option value="">All classes (${classesList.length})</option>` +
      classesList.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join("");
    const cntEl = document.getElementById("bf-count");
    const apply = () => {
      const vc = sel.value; let shown = 0;
      tbl.querySelectorAll("tbody tr").forEach((tr) => {
        const ok = !vc || tr.dataset.class === vc;
        tr.hidden = !ok; if (ok) shown++;
      });
      cntEl.textContent = shown + " shown";
    };
    sel.addEventListener("change", apply);
    document.getElementById("bf-clear").addEventListener("click", () => { sel.value = ""; apply(); });
    apply();
  }

  // ---------- Router ----------
  function route() {
    let m = location.hash.match(/^#\/city\/([a-z0-9-]+)$/);
    if (m) { renderCity(m[1]); }
    else if ((m = location.hash.match(/^#\/city\/([a-z0-9-]+)\/([a-z]+)$/))) {
      renderCity(m[1], m[2]);
    }
    else if ((m = location.hash.match(/^#\/compare\/([a-z0-9-]+(?:,[a-z0-9-]+)*)$/))) {
      renderCompare(m[1].split(","));
    }
    else if (location.hash === "#/schema") renderSchema();
    else if (location.hash === "#/utilities") renderUtilities();
    else if (location.hash === "#/re-prices") renderREPrices();
    else if (location.hash === "#/build-prices") renderBuildPrices();
    else renderMap();
    const here = location.hash === "#/schema" ? "#/schema"
      : location.hash === "#/utilities" ? "#/utilities"
      : location.hash === "#/re-prices" ? "#/re-prices"
      : location.hash === "#/build-prices" ? "#/build-prices"
      : /^#\/compare\//.test(location.hash) ? location.hash
      : "#/";
    document.querySelectorAll(".site-nav a").forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === here));
  }
  window.addEventListener("hashchange", route);
  route();
})();