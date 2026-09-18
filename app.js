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

  // ---------- City detail view ----------
  function renderCity(slug) {
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
        ${data ? renderTabs(data) : `
        <div class="placeholder">Detail content coming soon — demographics, officials, attractions, and more.</div>`}
        <a class="back-link" href="#/">← Back to map</a>
      </div>`;
    if (data) wireTabs();
  }

  // esc() keeps compiled research strings (which contain quotes) safe inside HTML
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function renderTabs(d) {
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
      <div class="tab-panel" data-panel="estate" hidden>${d.realEstate ? renderEstate(d) : ""}</div>
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
    const cites = { 5: [12], 7: [13] }; // history index → ref numbers
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
  function renderEstate(d) {
    const re = d.realEstate;
    const sub = (title, rows, citeMap) => `
      <h3 class="sub-head">${title}</h3>
      <dl class="kv">${rows.map(([k, v], i) =>
        `<dt>${esc(k)}</dt><dd>${esc(v)}${(citeMap[i] || []).map((n) => cite(d, n)).join("")}</dd>`).join("")}</dl>`;
    return `
      ${re.intro ? `<p class="estate-intro">${esc(re.intro)}</p>` : ""}
      ${sub("Land — asking prices", re.land || [], [[54, 58], [], [], [53]])}
      ${sub("Houses — sale prices", re.houses || [], [[56], [55], [], [52], []])}
      ${sub("Rent — monthly rates", re.rent || [], [[61], [], [59], [53]])}
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

  function wireTabs() {
    const tablist = app.querySelector(".tabs");
    tablist.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab");
      if (btn) selectTab(btn.dataset.tab);
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
      selectTab("references");
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
                <span style="width:${r.pct}%"></span>
              </div>
              <span class="completion-num">${r.filled}/${SCHEMA.length}</span>
            </li>`).join("")}
        </ul>
        <a class="back-link" href="#/">← Back to map</a>
      </div>`;
  }

  // ---------- Router ----------
  function route() {
    const m = location.hash.match(/^#\/city\/([a-z0-9-]+)$/);
    if (m) renderCity(m[1]);
    else if (location.hash === "#/schema") renderSchema();
    else renderMap();
    const here = location.hash === "#/schema" ? "#/schema" : "#/";
    document.querySelectorAll(".site-nav a").forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === here));
  }
  window.addEventListener("hashchange", route);
  route();
})();