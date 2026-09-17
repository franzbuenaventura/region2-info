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
      <div class="map-wrap">
        <svg id="isabela-map" viewBox="0 0 ${W} ${H}" role="group" aria-label="Interactive map of Isabela province, 37 clickable municipalities and cities"></svg>
        <div class="map-legend">
          <span><i class="dot m"></i> Municipality</span>
          <span><i class="dot c"></i> City</span>
        </div>
      </div>`;
    const svg = document.getElementById("isabela-map");
    const NS = "http://www.w3.org/2000/svg";

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
      path.dataset.cx = px(centroid(f)[0]);
      path.dataset.cy = py(centroid(f)[1]);
      path.addEventListener("click", () => { location.hash = "#/city/" + slug; });
      path.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); location.hash = "#/city/" + slug; }
      });
      svg.appendChild(path);
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
    app.innerHTML = `
      <div class="city-page">
        <span class="city-badge ${isCity ? "city" : "mun"}">${isCity ? "City" : "Municipality"}</span>
        <h2>${p.adm3_en}</h2>
        <p class="meta">Isabela, Cagayan Valley · PSGC ${p.adm3_psgc} · Area ${p.area_km2} km²</p>
        <div class="placeholder">Detail content coming soon — demographics, officials, attractions, and more.</div>
        <a class="back-link" href="#/">← Back to map</a>
      </div>`;
  }

  // ---------- Router ----------
  function route() {
    const m = location.hash.match(/^#\/city\/([a-z0-9-]+)$/);
    if (m) renderCity(m[1]);
    else renderMap();
  }
  window.addEventListener("hashchange", route);
  route();
})();