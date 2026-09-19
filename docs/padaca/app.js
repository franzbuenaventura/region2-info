/* Grace Padaca info site — zero-dependency vanilla JS */
(function () {
  "use strict";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const REF_INDEX = {}; // id -> index in refs array (for cite links)
  (window.PADACA_REFS || []).forEach((r, i) => { REF_INDEX[r.id] = i; });

  // [R7] -> clickable superscript jumping to the sources entry
  const cite = (...ids) => ids.map((id) =>
    `<button class="cite" data-ref="${id}" title="Source: ${id}">[${id}]</button>`).join("");

  /* ---------------- STORY CHAPTERS ---------------- */
  const story = `
  <article class="chapter">
    <div class="no">Chapter One</div>
    <h2>A girl who learned to be heard, not seen</h2>
    <p class="lede">Maria Gracia Cielo Magno Padaca was born on October 25, 1963 in Cauayan, Isabela, to two public school teachers. At three years old, polio took the use of her legs. She would spend her life on crutches — and spend her childhood being taunted for it.</p>
    <p>She retreated into books. Scholarships carried her through the Lyceum of the Philippines, where she qualified as a certified public accountant at 21.${cite("R2")} Radio, she said, suited her because "I could be heard but not seen."${cite("R2")}</p>
    <div class="pull">"I could be heard but not seen."<cite>— Grace Padaca, on why she chose radio — Ramon Magsaysay Award Foundation</cite></div>
    <div class="two">
      <div>
        <p>In 1986 she joined Bombo Radyo Cauayan as an accountant and almost by accident became a broadcaster. For the next fourteen years, "Bombo Grace" delivered hard-hitting daily commentary on the province's stagnating economy, entrenched corruption, illegal gambling (<em>jueteng</em>), and illegal logging — and on the dynasty she believed was behind it all: the Dy family, who had held Isabela's governorship and most town halls for four decades.${cite("R1", "R2", "R3")}</p>
        <p>By 2000 she had enough. "Even if I kept on talking and talking on air, the people of the dynasty (continued) to be elected."${cite("R7")} She quit journalism for the Commission on Audit — and began plotting the unlikely leap into politics.</p>
      </div>
      <figure class="imgfigure small"><img src="assets/cauayan-map.png" alt="Locator map of Cauayan City within Isabela"><figcaption>Her hometown: Cauayan City (red), Isabela</figcaption></figure>
    </div>
  </article>

  <article class="chapter">
    <div class="no">Chapter Two</div>
    <h2>The 48-vote loss that made her</h2>
    <p class="lead">In 2001, with no money and no political base, she ran for Congress against the dynasty's heir, Faustino "Bojie" Dy III — and lost by a margin so thin it took a tribunal two and a half years to certify.</p>
    <p>The initial count had her down by 1,285 votes. She protested 151 ballot boxes; Dy counter-protested all 812 precincts in the district. unable to afford the recount, she invented a crowd-funding campaign for Philippine politics: <strong>"Adopt A Ballot Box."</strong>${cite("R1")}</p>
    <p>In December 2003, the House of Representatives Electoral Tribunal dismissed her protest for lack of merit and declared Dy the winner — by <strong>48 votes</strong> out of more than 160,000 cast. The majority refused to count ballots bearing simply the word "Grace."${cite("R2", "R37")}</p>
    <div class="callout">She lost the seat but won the narrative. Isabelinos had watched a novice with a borrowed truck nearly defeat the machine — and remembered exactly how it had been done. That memory was her army in 2004.</div>
  </article>

  <article class="chapter">
    <div class="no">Chapter Three</div>
    <h2>2004: "Free Isabela"</h2>
    <p class="lead">Running for governor against the dynasty's incumbent, opposed by 33 of the province's 36 mayors, branded as being "in league with terrorists" — Padaca won by 44,292 votes.</p>
    <p>Her platform was one word long: <em>freedom</em> — from a family that had held the provincial capitol since the 1960s, from jueteng payoffs, from illegal logging. Volunteers guarded ballot boxes on election day.${cite("R2", "R3")}</p>
    <p>She was, by her own telling, unprepared for the scale of what she'd won. "I am a person who was physically handicapped since the age of three… Now, I have to take care of 1.4 million people. That was the hardest shift for me."${cite("R7")}</p>
  </article>

  <article class="chapter">
    <div class="no">Chapter Four</div>
    <h2>Governing alone against the machine</h2>
    <p class="lead">Her six years in the provincial capitol were a case study in reform under siege — real results, real backlash, and a governing style that made enemies even among potential allies.</p>
    <div class="verdicts">
      <div class="verdict v-gold"><h4>Fiscal turnaround</h4><p>Inherited ₱700M+ in debts; paid down two-thirds and left surpluses by term's end.</p></div>
      <div class="verdict v-teal"><h4>Hybrid rice program</h4><p>10 Isabela towns became among Region 2's top producers; ₱5/kg NFA price support for farmers.</p></div>
      <div class="verdict v-red"><h4>Record timber seizures</h4><p>1.8M board feet of illegal logs confiscated — the largest haul in Philippine history.</p></div>
      <div class="verdict v-purple"><h4>Health coverage</h4><p>PhilHealth expanded to ~700,000 Isabelinos; barangay health workers' pay doubled.</p></div>
    </div>
    <p>The costs were equally real. She put eight Dy-loyalist division chiefs on floating status — the Civil Service Commission ordered seven reinstated. Most mayors stopped remitting taxes in protest (₱26M+ withheld in 2005 alone). She bypassed the provincial board, which complained she implemented none of its resolutions. Jueteng survived her entire term; she blamed the police and Malacañang. "You just need the President to close the faucet," she said.${cite("R7", "R28", "R30")}</p>
    <p>Her anti-logging enforcement, the achievement the Magsaysay Award citation celebrated, also put thousands of timber haulers out of work — and, analysts argued, bled her margin from 44,000 in 2004 to 17,000 in 2007.${cite("R28", "R16")}</p>
  </article>
  `;

  const verdictSection = `
  <article class="chapter" id="verdict-art">
    <div class="no">Chapter Five</div>
    <h2>The comeback machine grinds back</h2>
    <p class="lead">She won re-election in 2007 by 17,007 votes — then a recount sliced 18,058 votes out of her column and handed the governorship, on paper, to her 2007 rival by 1,051.</p>
    <p>The Comelec Second Division's December 2009 ruling came from a recount of 683 ballot boxes across 12 towns. She appealed and kept working; the motion was still live when her term expired on June 30, 2010. Three months later she lost the governorship itself to Bojie Dy III by 3,438 votes — and the restoration was complete: the Dys again held the province, Cauayan, and Congress.${cite("R1", "R17", "R35", "R34")}</p>
    <p>President Aquino appointed her Commissioner of Elections in October 2012 — a tenure consumed by the arrest warrant waiting for her. She surrendered two days after the appointment; her bail was paid, it emerged later, out of the President's own pocket. The Commission on Appointments never confirmed her, and she left office in 2014 when the ad interim appointment expired.${cite("R42", "R43")}</p>
  </article>

  <article class="chapter">
    <div class="no">Chapter Six</div>
    <h2>The verdict — and the acquittal</h2>
    <figure class="imgfigure"><img src="assets/verdict-2019.jpg" alt="Grace Padaca after the Sandiganbayan verdict, November 2019"><figcaption>Outside the Sandiganbayan after the November 15, 2019 verdict (Rappler)</figcaption></figure>
    <p class="lead">In November 2019, the Sandiganbayan convicted her of graft and malversation over a ₱25-million rice-program contract signed in 2006. Eight months later, the same court acquitted her of the graft charge outright.</p>
    <p>The case: ₱25 million of a ₱35-million provincial loan was entrusted to an NGO, EDWINLFI, to run a credit facility for rice farmers. Only ₱7 million came back. The court found no repayment scheme in the memorandum, no audit trail — and convicted her of negligence-based malversation, fining her ₱18 million and ordering the same amount returned, while sentencing her to up to 14 more years.${cite("R8", "R40")}</p>
    <p>But on June 23, 2020, the Third Division granted her motion for reconsideration on the graft count: the transaction, it held, <strong>"did not involve procurement"</strong> — no public bidding was required, so there was no §3(e) violation at all. She was acquitted "for failure of the prosecution to prove her guilt beyond reasonable doubt"; the hold departure order was lifted and her bail bond returned.${cite("R39", "R39b", "R41", "R41b")}</p>
    <div class="verdicts">
      <div class="verdict v-red"><h4>Malversation: upheld</h4><p>12–14 years, ₱18M fine + ₱18M restitution, perpetual disqualification. No further appeal documented.</p></div>
      <div class="verdict v-teal"><h4>Graft: acquitted</h4><p>"Failure to prove guilt beyond reasonable doubt." Bidding not required; case collapsed.</p></div>
      <div class="verdict v-purple"><h4>No personal gain</h4><p>The court found no evidence she profited. "That all went to the farmers of Isabela."</p></div>
      <div class="verdict v-gold"><h4>Her allegation</h4><p>She said the Dys engineered the case; the Dys denied it. Both positions are on the record.</p></div>
    </div>
    <div class="callout callout-red">How to weigh it: this was a <strong>public-funds-controls case, not a personal-enrichment case</strong>. The negligence finding — releasing money with no repayment scheme — stands; the corruption theory did not survive appeal.</div>
  </article>
  `;

  const legacy = `
  <article class="chapter" id="legacy">
    <div class="no">Chapter Seven</div>
    <h2>What her story proves</h2>
    <p class="lead">Grace Padaca is the strongest documented evidence that Isabela's electorate will break with a political dynasty — and a case study in how hard a dynasty fights back.</p>
    <p>Her 2004 victory showed the crack. Everything after showed the machine's counter-playbook: a recall drive within a year, a jueteng counter-offensive with libel threats, a judicial recount that erased an 18,000-vote margin, family reconciliations that stranded her 2019 candidacy, and three consecutive defeats — by 3,438 votes, then 300,000, then 316,420 — as the coalition reconsolidated.${cite("R31", "R30", "R1", "R29")}</p>
    <p>Today she is out of elected politics — leading a disability-inclusion movement within a Christian leadership network, mentoring on governance, and speaking about "the burden of the brave": how to keep succeeding after raising a people's hopes.${cite("R44", "R2")}</p>
    <div class="pull">"Amazing victories are actually very fragile, and need to be protected."<cite>— Ramon Magsaysay Award acceptance speech, July 31, 2008</cite></div>
    <p>For anyone studying — or investing in — Isabela, her arc is the base rate: alternation is possible, but it has happened exactly once in the modern era, it lasted six years, and it ended the way most first challenges to entrenched machines do. The playbook that beat her is the playbook to model.</p>
  </article>
  `;

  /* ---------------- SOURCES PAGE ---------------- */
  function renderSources(filter) {
    const refs = window.PADACA_REFS || [];
    const list = filter && filter !== "all" ? refs.filter((r) => r.cat === filter) : refs;
    const cats = [...new Set(refs.map((r) => r.cat))];
    return `
    <article class="chapter" id="sources">
      <div class="no">Appendix</div>
      <h2>Sources & what each one contributed</h2>
      <div class="src-head"><span class="count">${list.length} of ${refs.length} references shown</span></div>
      <div class="chips">
        <button class="chip${!filter || filter === "all" ? " active" : ""}" data-cat="all">All (${refs.length})</button>
        ${Object.entries(window.PADACA_REFS.reduce((a, r) => { a[r.cat] = (a[r.cat] || 0) + 1; return a; }, {}))
          .map(([c, n]) => `<button class="chip${filter === c ? " active" : ""}" data-cat="${esc(c)}">${c} (${n})</button>`).join("")}
      </div>
      ${list.map((r) => `
        <div class="src" id="ref-${r.id}">
          <div class="top"><span class="rid">[${r.id}]</span><h4>${esc(r.title || r.url)}</h4></div>
          <div class="cat">${r.icon} ${esc(r.cat)}</div>
          <div class="links">
            <a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Open source ↗</a>
            ${r.snapshot ? `<a class="snap" href="/research/sources-snapshot/${esc(r.snapshot)}" target="_blank" rel="noopener noreferrer">Archived snapshot ⛶</a>` : ""}
          </div>
        </div>`).join("")}
      <p style="font-family:system-ui,sans-serif;font-size:13px;color:var(--faint);margin-top:20px">
        Snapshots are point-in-time archives (Sept 18, 2026) stored in this site's repository — if a source shuts down or changes, the original is preserved. Checksums: see the manifest in the repo.</p>
    </article>`;
  }

  /* ---------------- RENDER + WIRE ---------------- */
  document.querySelector("#story").innerHTML = story;
  document.querySelector("#verdict").innerHTML = verdictSection;
  document.querySelector("#legacy").innerHTML = legacy;

  let currentFilter = "all";
  function paintSources() {
    const el = document.querySelector("#sources");
    const open = el ? true : false;
    document.querySelector("#sources").outerHTML = renderSources(currentFilter);
    document.querySelectorAll(".chip").forEach((c) => c.addEventListener("click", () => {
      currentFilter = c.dataset.cat; paintSources();
    }));
  }
  paintSources();

  // cite buttons -> jump to sources
  document.addEventListener("click", (e) => {
    const c = e.target.closest(".cite");
    if (!c) return;
    const id = c.dataset.cite || c.getAttribute("data-cite");
    currentFilter = "all"; paintSources();
    location.hash = "#sources";
    setTimeout(() => {
      const target = document.getElementById("ref-" + (REF_INDEX[id] !== undefined ? id : ""));
      const all = [...document.querySelectorAll(".src")];
      const match = all.find ? all.find((s) => s.querySelector(".rid")?.textContent === `[${id}]`) : null;
      (match || document.getElementById("sources")).scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  });

  // nav active state
  const sections = ["story", "verdict", "legacy", "sources"];
  window.addEventListener("scroll", () => {
    let active = "story";
    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el && el.getBoundingClientRect().top < 120) active = s;
    });
    document.querySelectorAll("nav .navlink").forEach((a) => {
      const isSrc = a.dataset.nav === "sources";
      a.classList.toggle("active", isSrc ? active === "sources" : a.getAttribute("href") === "#" + active);
    });
  }, { passive: true });
})();