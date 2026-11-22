{
/* ================= EDIT HERE =================
   GITHUB.user  : your GitHub username; when hosted (GitHub Pages) your other public repos load automatically.
   GITHUB.repos : featured repositories, always shown first.
   LINKS        : profile links; empty ones are hidden.
   PHOTO        : put photo.jpg in the same folder as the pages.
   Content for every page lives in this file; the pages only hold the layout. */
const GITHUB = {
  user: "Carlosfhz",
  max: 6,
  repos: [
    { name: "ELoRa", note: "Contributions", description: "Contributions to the ELoRa framework (Orange Open Source).", url: "https://github.com/Orange-OpenSource/elora/tree/master" },
    { name: "Downlink-Traffic-Module-ELORA", description: "Patch and source files for the traffic analysis module.", url: "https://github.com/Carlosfhz/Downlink-Traffic-Module-ELORA" },
    { name: "Downlink-Traffic-Processing", description: "Traffic processing scripts, metric computation, and the datasets used.", url: "https://github.com/Carlosfhz/Downlink-Traffic-Processing" },
    { name: "LoRaWAN-Network-Server-Simulator", description: "LoRaWAN network server simulator for custom downlink scheduling.", url: "https://github.com/Carlosfhz/LoRaWAN-Network-Server-Simulator" }
  ]
};
const LINKS = [
  { label: "Email", url: "mailto:carlos.fernandez-hernandez@insa-lyon.fr" },
  { label: "GitHub", url: "https://github.com/" + GITHUB.user },
  { label: "Google Scholar", url: "" },
  { label: "ORCID", url: "" },
  { label: "HAL", url: "" },
  { label: "LinkedIn", url: "" }
];
const NEWS = [
  { y: "2026", t: "Started as a postdoc at INSA Lyon / Inria Agora in the DONUTS project." },
  { y: "Jul 2026", t: "Defended my PhD thesis on LoRaWAN downlink communication." },
  { y: "Jun 2026", t: "Presented our downlink paper at AlgoTel/CoRes 2026." },
  { y: "2026", t: "DORSAL paper published in the IEEE Internet of Things Journal." }
];
const RESEARCH = [
  { m: "Now · 2026 to present", t: "Network functions in satellite communications", d: "Network function placement in satellite communications, within DONUTS (PEPR Networks of the Future), with Dr. Oana Iova and Juan A. Fraire." },
  { m: "2025 to present", t: "Direct-to-satellite IoT", d: "Downlink optimisation for robust direct-to-satellite LoRaWAN in the DORSAL Inria Associate Team, with partners in Chile and Brazil." },
  { m: "PhD · 2023 to 2026", t: "LoRaWAN downlink", d: "Efficient downlink communication for LoRaWAN: comparing ChirpStack and The Things Stack schedulers and closing the gap to the optimal scheduler. Funded by ANR JCJC DOLL." },
  { m: "2018 to 2022", t: "Memristors and in-memory computing", d: "Memristor/ReRAM device modelling, logic synthesis for computational ReRAM and reservoir computing with memristor networks, including a collaboration with Synopsys Chile." }
];
const PUBS = [
  { g: "Special collaborations", k: "journal", au: "J. A. Fraire, O. Iova, C. F. Hernandez, F. Valois, H. Rivano, C. Azurdia, M. Diaz, M. Gutierrez Gaitan, D. Dujovne, S. Montejo Sanchez, R. Demo Souzas", ti: "DORSAL: Downlink Optimization for Robust Direct-to-Satellite LoRaWAN", ve: "IEEE Internet of Things Journal, 2026" },
  { g: "Special collaborations", k: "journal", au: "C. F. Hernandez, C. Caillouet, A. Guitton, O. Iova, F. Valois", ti: "Closing the Gap Between The Things Network and the Optimal Downlink Scheduler", ve: "Elsevier Computer Communications, 2026", tag: "Minor revision" },
  { g: "Special collaborations", k: "conf", au: "C. F. Hernandez, C. Caillouet, A. Guitton, O. Iova, F. Valois", ti: "Parler, c'est bien… répondre, c'est mieux : le trafic descendant dans LoRaWAN", ve: "CoRes, Mandelieu-la-Napoule, France, June 1–5, 2026", tag: "National" },
  { g: "PhD thesis", k: "conf", au: "C. F. Hernandez, O. Iova, F. Valois", ti: "Downlink Scheduling in LoRaWAN: ChirpStack vs The Things Stack", ve: "IEEE LATINCOM, Medellín, Colombia, 2024, pp. 1–6", tag: "Rank C" },
  { g: "PhD thesis", k: "conf", au: "C. F. Hernandez, G. H. Derevianckine, A. Guitton, O. Iova, F. Valois", ti: "On a testé pour vous : LoRa 2.4 GHz à l'intérieur", ve: "CoRes, Cargèse, France, May 2023", tag: "National · Best paper runner-up" },
  { g: "PhD thesis", k: "conf", au: "C. F. Hernandez, G. H. Derevianckine, A. Guitton, O. Iova, F. Valois", ti: "Indoor Performance Evaluation of LoRa® 2.4 GHz", ve: "IEEE WCNC, Glasgow, Scotland (UK), March 2023", tag: "Rank B" },
  { g: "Master thesis", k: "journal", au: "C. Fernandez, A. Cirera, I. Vourkas", ti: "Design Exploration of Threshold Logic in Memory and Experimental Implementation using Knowm Memristors", ve: "Int. J. Unconventional Computing, vol. 18, 2023" },
  { g: "Master thesis", k: "conf", au: "I. Vourkas, C. Fernandez, A. Rubio", ti: "Design and Simulation of Peripheral Driving Circuitry for Computational ReRAM", ve: "37th DCIS, Pamplona, Spain, November 2022" },
  { g: "Master thesis", k: "conf", au: "C. Fernandez, I. Vourkas", ti: "Reliability-aware Ratioed Logic Operations for Energy-efficient Computational ReRAM", ve: "30th IFIP/IEEE VLSI-SoC, Patras, Greece, October 2022", tag: "Rank B" },
  { g: "Master thesis", k: "conf", au: "C. Fernandez, I. Vourkas", ti: "Circuit Topology and Synthesis Flow Co-design for the Development of Computational ReRAM", ve: "22nd IEEE NANO, Palma de Mallorca, Spain, July 2022", tag: "Rank B" },
  { g: "Master thesis", k: "conf", au: "C. Fernandez, I. Vourkas", ti: "Performance Assessment of Memristor Networks as Shortest Path Problem Solvers", ve: "IEEE ISCAS, Seville, Spain, October 2020", tag: "Rank A" },
  { g: "Master thesis", k: "conf", au: "C. Fernandez, J. Ortiz, I. Vourkas", ti: "Voltage-Driven Window Function Concept for Behavioural Memristor Device Modeling", ve: "IEEE ISCAS, Seville, Spain, October 2020" },
  { g: "Master thesis", k: "conf", au: "C. Fernandez, I. Vourkas", ti: "ReRAM-based Ratioed Combinational Circuit Design: a Solution for in-Memory Computing", ve: "MOCAST, Bremen, Germany, September 2020" },
  { g: "Master thesis", k: "journal", au: "C. Fernandez, I. Vourkas, A. Rubio", ti: "Comprehensive Predictive Modeling of Resistive Switching Devices using a Bias-dependent Window Function Approach", ve: "Solid-State Electronics, vol. 170, 107833, August 2020", tag: "IF 1.916" },
  { g: "Master thesis", k: "journal", au: "C. Fernandez, I. Vourkas, A. Rubio", ti: "Shortest Path Computing in Directed Graphs with Weighted Edges Mapped on Random Networks of Memristors", ve: "Parallel Processing Letters, vol. 30, no. 1, 2050002, 2020", tag: "IF 0.524" }
].map((p, i) => ({ ...p, n: i + 1 }));
const LISTS = {
  projlist: [
    { y: "2026–", t: "DONUTS", s: "Design and Modeling of Multiscale Multitechnology Networks of the Future", d: ["PEPR Networks of the Future", "National collaboration with several partners in France"] },
    { y: "2025–", t: "DORSAL", s: "Downlink Optimization for Robust Direct-to-Satellite IoT", d: ["Inria Associate Teams (Équipes Associées)", "International collaboration with partners in Chile and Brazil"] },
    { y: "2023–", t: "DOLL", s: "Efficient DownLink Communication for Increased LoRaWAN Capacity", d: ["French government research grant (ANR JCJC). PI: Dr. Oana Iova"] },
    { y: "2020–22", t: "Research collaboration with Synopsys Chile", s: "Development of a synthesis tool for in-memory computing with ReRAM" },
    { y: "2018–19", t: "Reservoir Computing with Networks of Memristors", s: "CONICYT PCI 2017, International Network of Researchers at an Early Stage, No. REDI170604", d: ["Chilean government research grant. PI: Dr. Ioannis Vourkas"] }
  ],
  talklist: [
    { y: "2026", t: "AlgoTel/CoRes, Mandelieu-la-Napoule, France", s: "Paper: “Parler, c'est bien… répondre, c'est mieux : le trafic descendant dans LoRaWAN”" },
    { y: "2025", t: "Journées LPWAN, Rennes, France", s: "Talk: “Performance gap between the optimal and TTN downlink schedulers”" },
    { y: "2024", t: "IEEE LATINCOM, Medellín, Colombia", s: "Paper: “Downlink Scheduling in LoRaWAN: ChirpStack vs The Things Stack”" },
    { y: "2024", t: "Invited talk, Universidad de Chile, Santiago", s: "“Exploring New Opportunities with LoRaWAN for IoT Device Communication: Addressing the Limitations of Downlink Traffic”. Invited by Dr. Cesar Azurdia" },
    { y: "2024", t: "Invited talk, Pontificia Universidad Católica de Chile, Santiago", s: "Same talk. Invited by Dr. Miguel Gutierrez" },
    { y: "2024", t: "TMA PhD School, Dresden, Germany", s: "Poster: “Improving LoRaWAN Downlink Scheduling”" },
    { y: "2024", t: "GDR RSD Non-thematic Days, Strasbourg, France", s: "Poster: “Improving LoRaWAN Downlink Scheduling”" },
    { y: "2023", t: "AlgoTel/CoRes, Cargèse, France", s: "Paper: “On a testé pour vous : LoRa 2.4 GHz à l'intérieur”. Runner-up for the best paper award" },
    { y: "2023", t: "IEEE WCNC, Glasgow, UK", s: "Paper: “Indoor Performance Evaluation of LoRa 2.4 GHz”" },
    { y: "2022", t: "30th IFIP/IEEE VLSI-SoC, Patras, Greece", s: "Poster: “On the Design and Development of a ReRAM-Based Computation Memory Prototype”" }
  ],
  teachlist: [
    { y: "2025", t: "5TC-IoT", s: "INSA Lyon, Telecommunications dept. Fifth year, 6 h, 14 students" },
    { y: "2025", t: "Computer Science and Digital Society", s: "INSA Lyon. Second year, 28 h, 24 students" },
    { y: "2024", t: "Computer Science and Digital Society", s: "INSA Lyon. Second year, 28 h, 25 students" },
    { y: "2022", t: "Computer Architecture Laboratory", s: "Lecturer, UTFSM, Chile. Third-year electronic engineering" }
  ],
  servlist: [
    { y: "2024", t: "Shadow TPC, AlgoTel/CoRes 2024", s: "Saint-Briac-sur-Mer, France" },
    { y: "2023", t: "GDR RSD Non-thematic Days", s: "Organising committee, Lyon, France" }
  ]
};
/* ============================================= */

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $ = id => document.getElementById(id);
const set = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };
const ME = /(C\. F\. Hernandez|C\. Fernandez)/;

set("links", LINKS.filter(l => l.url).map(l => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join(""));
set("news", NEWS.map(n => `<li><span class="yr">${esc(n.y)}</span><div>${esc(n.t)}</div></li>`).join(""));
set("research", RESEARCH.map(r => `<div class="card"><p class="meta">${esc(r.m)}</p><h3>${esc(r.t)}</h3><p>${esc(r.d)}</p></div>`).join(""));

const renderPubs = f => {
  const list = PUBS.filter(p => f === "all" || p.k === f);
  const groups = [...new Set(list.map(p => p.g))];
  set("publist", groups.map(g => `<p class="grp">${esc(g)}</p><ol class="pubs">` +
    list.filter(p => p.g === g).map(p => `<li data-n="${p.n}"><div>
      <span class="ti">${esc(p.ti)}</span>
      <span class="au">${esc(p.au).replace(ME, "<b>$1</b>")}</span>
      <span class="ve"><i>${esc(p.ve)}</i>${p.tag ? ` <span class="tag">${esc(p.tag)}</span>` : ""}</span>
    </div></li>`).join("") + `</ol>`).join(""));
};
renderPubs("all");
document.querySelectorAll(".chips button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".chips button").forEach(x => x.setAttribute("aria-pressed", x === b));
  renderPubs(b.dataset.f);
}));

Object.entries(LISTS).forEach(([id, items]) => set(id, items.map(r => `<li><span class="yr">${esc(r.y)}</span><div>
  <div class="t">${esc(r.t)}</div>${r.s ? `<div class="s">${esc(r.s)}</div>` : ""}
  ${r.d && r.d.length ? `<ul>${r.d.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}</div></li>`).join("")));

const repoCard = r => `<a class="repo" href="${esc(r.url)}">
  ${r.note ? `<span class="note">${esc(r.note)}</span>` : ""}
  <span class="n">${esc(r.name)}</span>
  <span class="d">${esc(r.description || "No description")}</span>
  <span class="m">${r.language ? `<span>${esc(r.language)}</span>` : ""}${r.stars != null ? `<span>★ ${Number(r.stars) || 0}</span>` : ""}<span>GitHub →</span></span></a>`;
const showRepos = list => set("repos", list.map(repoCard).join(""));
showRepos(GITHUB.repos);
if (GITHUB.user) {
  const prof = $("ghprofile");
  if (prof) { prof.href = "https://github.com/" + encodeURIComponent(GITHUB.user); prof.hidden = false; }
  fetch(`https://api.github.com/users/${encodeURIComponent(GITHUB.user)}/repos?sort=updated&per_page=30`)
    .then(r => r.ok ? r.json() : Promise.reject(r.status))
    .then(data => {
      const seen = new Set(GITHUB.repos.map(r => r.url.toLowerCase()));
      const live = data.filter(r => !r.fork && !seen.has(r.html_url.toLowerCase()))
        .map(r => ({ name: r.name, description: r.description, url: r.html_url, language: r.language, stars: r.stargazers_count }));
      showRepos([...GITHUB.repos, ...live].slice(0, Math.max(GITHUB.max, GITHUB.repos.length)));
    })
    .catch(() => {});
}

const img = $("photo"), box = $("photobox");
if (img && box) {
  const ok = () => box.classList.add("has-img");
  const no = () => { img.remove(); box.classList.remove("has-img"); };
  if (img.complete) { img.naturalWidth ? ok() : no(); }
  else { img.addEventListener("load", ok); img.addEventListener("error", no); }
}

}
