/* ============================================================
   The Padaca Years — vanilla JS
   1. Elections diverging bar chart (SVG, hover tooltips)
   2. Accessible table view of the same data
   3. Glossary tooltips (jueteng, bogador, barangay)
   4. Nav current-section highlight + scroll reveal
   No dependencies; works from file:// (no fetch).
   ============================================================ */
(function () {
  'use strict';

  var CSS = {
    blue: '#3987e5',   /* wins  */
    red: '#e66767',    /* losses */
    ink: '#eef1f7',
    ink2: '#b7bfd0',
    ink3: '#8792a8',
    baseline: 'rgba(255,255,255,0.28)'
  };

  /* ---------------- Election data ----------------
     margin: signed votes (for = positive, against = negative)
     raw/note feed the tooltip and the table view. */
  var RACES = [
    {
      year: 2001, race: 'Congress · 3rd district', opponent: 'Faustino "Bojie" Dy III',
      margin: -1285, won: false,
      raw: 'Dy 50.7% — Padaca 49.3%',
      note: 'Initial count. The House electoral tribunal (HRET) later ruled Dy won by 48 votes, after invalidating ballots marked "Grace". The protest was dismissed for lack of merit.',
      src: 'HRET · RMAF'
    },
    {
      year: 2004, race: 'Governor', opponent: 'Faustino Dy Jr.',
      margin: 44292, won: true,
      raw: '~55% of the vote',
      note: 'Ended roughly 35 years of Dy family rule. Margin is the best-attested figure; no raw 2004 tally has been located.',
      src: 'RMAF · Bulatlat · GMA'
    },
    {
      year: 2007, race: 'Governor', opponent: 'Benjamin Dy',
      margin: 17007, won: true, star: true,
      raw: 'Proclaimed winner by 17,007',
      note: 'Annulled by the Comelec Second Division in Dec 2009 after a partial recount (recount: Dy 199,435 — Padaca 198,384). Writ of execution denied; she served the full term. No final disposition of the appeal documented.',
      src: 'Philstar · GMA'
    },
    {
      year: 2010, race: 'Governor', opponent: 'Faustino "Bojie" Dy III',
      margin: -3438, won: false,
      raw: 'Dy 274,757 — Padaca 271,319 (Comelec tally)',
      note: 'Arithmetic-verified from the official Comelec tally reported by GMA News. The Dy restoration followed.',
      src: 'GMA · VERA Files'
    },
    {
      year: 2016, race: 'Governor', opponent: 'Faustino "Bojie" Dy III',
      margin: -300000, won: false, approx: true,
      raw: 'Reported at 97.26% of precincts transmitted',
      note: 'Reported margin "over 300,000" at 97.26% transmission; the final official canvass figure has not been located.',
      src: 'Rappler'
    },
    {
      year: 2019, race: 'Vice governor', opponent: 'Faustino "Bojie" Dy III',
      margin: -316420, won: false,
      raw: 'Dy 483,392 — Padaca 166,972',
      note: 'Her running mate withdrew when the Dy brothers reconciled, leaving her without an alliance.',
      src: 'Inquirer · Rappler'
    }
  ];

  var fmt = function (n) {
    var sign = n < 0 ? '−' : '+';
    return sign + Math.abs(n).toLocaleString('en-US');
  };

  /* Rect path with the data-end rounded 4px and the baseline end square. */
  function barPath(x, y, w, h, roundDataEnd /* 'right' | 'left' */) {
    var r = Math.min(4, w);
    if (roundDataEnd === 'right') {
      return 'M' + x + ',' + y +
             'H' + (x + w - r) +
             'A' + r + ',' + r + ' 0 0 1 ' + (x + w) + ',' + (y + r) +
             'V' + (y + h - r) +
             'A' + r + ',' + r + ' 0 0 1 ' + (x + w - r) + ',' + (y + h) +
             'H' + x + 'Z';
    }
    return 'M' + (x + r) + ',' + y +
           'H' + (x + w) +
           'V' + (y + h) +
           'H' + (x + r) +
           'A' + r + ',' + r + ' 0 0 1 ' + x + ',' + (y + h - r) +
           'V' + (y + r) +
           'A' + r + ',' + r + ' 0 0 1 ' + (x + r) + ',' + y + 'Z';
  }

  /* ---------------- Elections chart ---------------- */
  function buildElectionsChart() {
    var host = document.getElementById('elections-chart');
    if (!host) return;

    var W = 900;
    var labelW = 236;                 /* left rail: year + race */
    var rowH = 46, barH = 18;         /* bars <= 24px per spec */
    var padTop = 6, padBottom = 14;
    var rows = RACES.length;
    var H = padTop + rows * rowH + padBottom;

    /* Plot area: left losses | zero line | right wins.
       Place the zero line so each side fits its largest |margin|. */
    var maxLoss = 0, maxWin = 0;
    RACES.forEach(function (r) {
      if (r.margin < 0 && -r.margin > maxLoss) maxLoss = -r.margin;
      if (r.margin > 0 && r.margin > maxWin) maxWin = r.margin;
    });
    var plotW = W - labelW - 96;      /* right room for value labels */
    var zeroX = labelW + plotW * (maxLoss / (maxLoss + maxWin));
    var scale = plotW / (maxLoss + maxWin);
    var minBar = 3;                   /* keep 1,285 visible as a hairline */

    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('aria-hidden', 'true'); /* role=img label lives on the container */

    function el(name, attrs) {
      var e = document.createElementNS(svgNS, name);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      return e;
    }

    RACES.forEach(function (r, i) {
      var y = padTop + i * rowH;
      var midY = y + rowH / 2;
      var hit = el('g', { class: 'bar-hit', tabindex: '0', role: 'presentation' });

      /* left rail label: year + race */
      var label = el('text', {
        x: 0, y: midY - 2, class: 'row-label',
        fill: CSS.ink2, 'font-size': '13', 'font-weight': '600'
      });
      label.textContent = r.year + (r.star ? ' ✳' : '');
      var sub = el('text', {
        x: 0, y: midY + 13, fill: CSS.ink3, 'font-size': '11'
      });
      sub.textContent = r.race + (r.approx ? ' ≈' : '');
      hit.appendChild(label);
      hit.appendChild(sub);

      /* bar: grows from the zero baseline; rounded at the data end only */
      var len = Math.max(minBar, Math.abs(r.margin) * scale);
      var x = r.margin >= 0 ? zeroX : zeroX - len;
      var fill = r.won ? CSS.blue : CSS.red;
      hit.appendChild(el('path', {
        class: 'bar',
        d: barPath(x, midY - barH / 2, len, barH, r.margin >= 0 ? 'right' : 'left'),
        fill: fill
      }));

      /* value label at the tip */
      var lx = r.margin >= 0 ? zeroX + len + 8 : zeroX - len - 8;
      var anchor = r.margin >= 0 ? 'start' : 'end';
      var val = el('text', {
        x: lx, y: midY + 4, 'text-anchor': anchor,
        fill: CSS.ink, 'font-size': '12.5', 'font-weight': '600',
        'font-variant-numeric': 'tabular-nums'
      });
      val.textContent = fmt(r.margin) + (r.approx ? '+' : '');
      hit.appendChild(val);

      /* hover hit target spans the whole row */
      hit.appendChild(el('rect', {
        x: 0, y: y + 4, width: W, height: rowH - 8,
        fill: 'transparent'
      }));
      hit._data = r;
      svg.appendChild(hit);
    });

    /* zero baseline drawn on top */
    svg.appendChild(el('rect', {
      x: zeroX, y: 2, width: 1,
      height: H - 8, fill: CSS.baseline
    }));

    host.textContent = '';
    host.appendChild(svg);

    /* hover/focus tooltips */
    Array.prototype.forEach.call(
      svg.querySelectorAll('.bar-hit'),
      function (hit) {
        hit.addEventListener('mouseenter', function (e) {
          showTooltip(e.clientX, e.clientY, tooltipHTML(hit._data));
        });
        hit.addEventListener('mouseleave', hideTooltip);
        hit.addEventListener('focus', function () {
          var b = hit.getBoundingClientRect();
          showTooltip(b.left + 20, b.top, tooltipHTML(hit._data));
        });
        hit.addEventListener('blur', hideTooltip);
      }
    );
  }

  function tooltipHTML(r) {
    var h = '<div class="tt-title">' + r.year + ' · ' + r.race + '</div>';
    h += '<div class="tt-sub">vs ' + r.opponent + ' — ' + (r.won ? 'won' : 'lost') + ' by ' +
         Math.abs(r.margin).toLocaleString('en-US') + ' votes</div>';
    if (r.raw) h += '<div class="tt-sub">' + r.raw + '</div>';
    if (r.note) h += '<div class="tt-note">' + r.note + '</div>';
    if (r.src) h += '<div class="tt-note">Source: ' + r.src + '</div>';
    return h;
  }

  /* ---------------- Table view ---------------- */
  function buildElectionsTable() {
    var tbody = document.getElementById('elections-table');
    if (!tbody) return;
    RACES.forEach(function (r) {
      var tr = document.createElement('tr');
      var cells = [
        String(r.year),
        r.race + (r.approx ? ' (reported margin)' : ''),
        r.opponent,
        fmt(r.margin) + (r.approx ? '+' : ''),
        (r.raw ? r.raw + '. ' : '') + r.note + ' [' + r.src + ']'
      ];
      cells.forEach(function (c, i) {
        var td = document.createElement('td');
        if (i === 3) td.className = 'num';
        td.textContent = c;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }

  /* ---------------- Shared tooltip ---------------- */
  var tip = null;
  function showTooltip(x, y, html) {
    tip = tip || document.getElementById('tooltip');
    if (!tip) return;
    tip.innerHTML = html;
    tip.hidden = false;
    positionTip(x, y);
  }
  function positionTip(x, y) {
    if (!tip || tip.hidden) return;
    var pad = 14;
    var vw = window.innerWidth;
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var left = Math.min(x + pad, vw - tw - 8);
    var top = y - th - 10;
    if (top < 8) top = y + 18;
    tip.style.left = Math.max(8, left) + 'px';
    tip.style.top = top + 'px';
  }
  function hideTooltip() {
    if (tip) tip.hidden = true;
  }

  /* ---------------- Glossary ---------------- */
  function buildGlossary() {
    Array.prototype.forEach.call(document.querySelectorAll('.gloss'), function (g) {
      var def = g.getAttribute('data-def');
      if (!def) return;
      g.setAttribute('aria-label', g.textContent + ': ' + def);
      var html = '<div class="tt-title">' + g.textContent + '</div>' +
                 '<div class="tt-note">' + def + '</div>';
      g.addEventListener('mouseenter', function (e) {
        showTooltip(e.clientX, e.clientY, html);
      });
      g.addEventListener('mouseleave', hideTooltip);
      g.addEventListener('focus', function () {
        var b = g.getBoundingClientRect();
        showTooltip(b.left, b.top, html);
      });
      g.addEventListener('blur', hideTooltip);
    });
  }

  /* ---------------- Nav highlight ---------------- */
  function buildNavHighlight() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
    var sections = links.map(function (a) {
      return document.querySelector(a.getAttribute('href'));
    }).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;

    var current = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) current = en.target;
      });
      links.forEach(function (a, i) {
        if (sections[i] === current) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }, { rootMargin: '-30% 0px -55% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---------------- Scroll reveal ---------------- */
  function buildReveal() {
    var targets = document.querySelectorAll('.card, .tile, .chart-card');
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      Array.prototype.forEach.call(targets, function (t) {
        t.classList.add('reveal-in');
      });
      return;
    }
    Array.prototype.forEach.call(targets, function (t) {
      t.classList.add('reveal');
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('reveal-in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px' });
    Array.prototype.forEach.call(targets, function (t) { io.observe(t); });
  }

  /* ---------------- Init ---------------- */
  function init() {
    buildElectionsChart();
    buildElectionsTable();
    buildGlossary();
    buildNavHighlight();
    buildReveal();
    window.addEventListener('resize', hideTooltip);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();