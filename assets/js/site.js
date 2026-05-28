/* =========================================================
   Haruki Emori — site-wide JavaScript
   - Theme (dark/light) toggle with persistence
   - Mobile nav + reveal-on-scroll
   - Quantum visuals: interactive Bloch sphere,
     double-slit interference, wavefunction cloud
   - Rendering + search/filter for papers & presentations
   ========================================================= */

/* ---------------------------------------------------------
   THEME
   The initial theme is set by a tiny inline script in <head>
   (see each HTML file) to avoid a flash. Here we just wire
   the toggle button and keep the choice in localStorage.
   --------------------------------------------------------- */
(function theme() {
  const KEY = "he-theme";
  const root = document.documentElement;

  function current() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }
  function set(mode) {
    if (mode === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem(KEY, mode); } catch (e) {}
    // let visuals recolour themselves
    window.dispatchEvent(new CustomEvent("themechange", { detail: { mode } }));
  }

  // Expose for the inline head script / debugging
  window.__setTheme = set;

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => set(current() === "light" ? "dark" : "light"));
    }
  });
})();

/* ---------------------------------------------------------
   NAV + REVEAL
   --------------------------------------------------------- */
(function ui() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector("nav.primary");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
      });
    }

    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        });
      }, { threshold: 0.08 });
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("visible"));
    }
  });
})();

/* ---------------------------------------------------------
   COLOUR HELPERS (read from CSS variables, recolour on theme change)
   --------------------------------------------------------- */
function themeColors() {
  const cs = getComputedStyle(document.documentElement);
  const get = (n, fallback) => (cs.getPropertyValue(n) || fallback).trim();
  const light = document.documentElement.getAttribute("data-theme") === "light";
  return {
    light,
    ink: get("--ink", "#e8ecff"),
    inkSoft: get("--ink-soft", "#aab1d6"),
    inkMute: get("--ink-mute", "#6e759a"),
    cyan: get("--cyan", "#6df0ff"),
    violet: get("--violet", "#c79bff"),
    magenta: get("--magenta", "#ff7ad1"),
    blochA: get("--bloch-grad-a", "#1c2461"),
    blochB: get("--bloch-grad-b", "#0d1130"),
    blochC: get("--bloch-grad-c", "#07091a")
  };
}

/* ---------------------------------------------------------
   AUTHOR + PUBLICATION RENDERING
   --------------------------------------------------------- */
function renderAuthors(authors) {
  return authors.map((a) => {
    const note = a.note ? `<sup>${a.note}</sup>` : "";
    if (a.me) return `<span class="me">${a.name}</span>${note}`;
    return `${a.name}${note}`;
  }).join(", ");
}

function escapeHtml(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function renderPublications(targetId, items, opts = {}) {
  const target = document.getElementById(targetId);
  if (!target) return;
  if (!items || !items.length) { target.innerHTML = `<div class="empty-state">No entries.</div>`; return; }
  items = items.slice().sort((a, b) => b.year - a.year);
  target.innerHTML = items.map((it) => `
    <li class="entry" data-search="${(it.title + " " + (it.venue || "") + " " + renderAuthors(it.authors)).toLowerCase().replace(/<[^>]+>/g, '')}">
      <div class="entry-year">${it.year}</div>
      <div>
        <h3 class="entry-title">${escapeHtml(it.title)}</h3>
        <div class="entry-authors">${renderAuthors(it.authors)}</div>
        <div class="entry-venue"><em>${escapeHtml(it.venue || "")}</em>${it.detail ? " — " + escapeHtml(it.detail) : ""}</div>
        ${it.links && it.links.length ? `<div class="entry-links">${it.links.map(l => `<a href="${l.href}" target="_blank" rel="noopener">${escapeHtml(l.label)} ↗</a>`).join("")}</div>` : ""}
      </div>
    </li>`).join("");
}

function renderPresentations(targetId, items) {
  const target = document.getElementById(targetId);
  if (!target) return;
  if (!items || !items.length) { target.innerHTML = `<div class="empty-state">No entries match the current filter.</div>`; return; }
  items = items.slice().sort((a, b) => b.year - a.year);
  target.innerHTML = items.map((it) => {
    const tags = [];
    if (it.role === "invited") tags.push(`<span class="entry-tag tag-invited">Invited</span>`);
    if (it.kind === "talk")    tags.push(`<span class="entry-tag tag-talk">Talk</span>`);
    if (it.kind === "poster")  tags.push(`<span class="entry-tag tag-poster">Poster</span>`);
    if (it.kind === "flash")   tags.push(`<span class="entry-tag tag-flash">Flash</span>`);
    if (it.refereed)           tags.push(`<span class="entry-tag tag-refereed">Refereed</span>`);
    if (it.scope === "international") tags.push(`<span class="entry-tag tag-intl">International</span>`);
    if (it.scope === "domestic")     tags.push(`<span class="entry-tag tag-domestic">Domestic</span>`);

    const searchKey = [
      it.title, it.venue, it.place, it.date, renderAuthors(it.authors),
      it.kind, it.role, it.scope, it.venueType, it.refereed ? "refereed" : "non-refereed"
    ].join(" ").toLowerCase().replace(/<[^>]+>/g, '');

    const venueText = it.venueLink
      ? `<a href="${it.venueLink}" target="_blank" rel="noopener">${escapeHtml(it.venue)} ↗</a>`
      : escapeHtml(it.venue);

    return `
      <li class="entry"
          data-search="${searchKey}"
          data-year="${it.year}"
          data-kind="${it.kind}"
          data-role="${it.role}"
          data-scope="${it.scope}"
          data-refereed="${it.refereed}">
        <div class="entry-year">${it.year}</div>
        <div>
          <div class="entry-tags" style="margin-bottom:8px;">${tags.join("")}</div>
          <h3 class="entry-title">${escapeHtml(it.title)}</h3>
          <div class="entry-authors">${renderAuthors(it.authors)}</div>
          <div class="entry-venue">${venueText}${it.place ? " — <em>" + escapeHtml(it.place) + "</em>" : ""}${it.date ? " · " + escapeHtml(it.date) : ""}</div>
        </div>
      </li>`;
  }).join("");
}

/* ---------------------------------------------------------
   DOUBLE-SLIT INTERFERENCE (hero backdrop)
   Two coherent point sources -> moving interference fringes.
   --------------------------------------------------------- */
function startInterference(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, t = 0, colors = themeColors();

  function resize() {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.max(1, Math.floor(w));
    canvas.height = Math.max(1, Math.floor(h));
  }
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("themechange", () => { colors = themeColors(); });

  function hex2rgb(hex) {
    const m = hex.replace('#', '');
    const v = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
    return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
  }

  const sources = [
    { x: 0.30, y: 0.58, k: 0.075, phase: 0 },
    { x: 0.70, y: 0.42, k: 0.075, phase: Math.PI / 3 }
  ];

  function frame() {
    if (!reduce) t += 0.012;
    if (w < 2 || h < 2) { requestAnimationFrame(frame); return; }
    const img = ctx.createImageData(w, h);
    const data = img.data;
    const c1 = hex2rgb(colors.cyan), c2 = hex2rgb(colors.violet), c3 = hex2rgb(colors.magenta);
    const step = 3;
    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        let amp = 0;
        for (let s = 0; s < sources.length; s++) {
          const src = sources[s];
          const dx = x - src.x * w, dy = y - src.y * h;
          const r = Math.sqrt(dx * dx + dy * dy);
          amp += Math.cos(src.k * r - t * 1.4 + src.phase);
        }
        const v = (amp + 2) / 4; // 0..1
        let R, G, B;
        if (v < 0.5) { const k = v * 2; R = c1[0]*(1-k)+c2[0]*k; G = c1[1]*(1-k)+c2[1]*k; B = c1[2]*(1-k)+c2[2]*k; }
        else { const k = (v - 0.5) * 2; R = c2[0]*(1-k)+c3[0]*k; G = c2[1]*(1-k)+c3[1]*k; B = c2[2]*(1-k)+c3[2]*k; }
        const alpha = Math.pow(v, 2.4) * 90;
        for (let yy = 0; yy < step && y + yy < h; yy++) {
          for (let xx = 0; xx < step && x + xx < w; xx++) {
            const idx = ((y + yy) * w + (x + xx)) * 4;
            data[idx] = R; data[idx + 1] = G; data[idx + 2] = B; data[idx + 3] = alpha;
          }
        }
      }
    }
    ctx.putImageData(img, 0, 0);
    requestAnimationFrame(frame);
  }
  frame();
}

/* ---------------------------------------------------------
   INTERACTIVE BLOCH SPHERE
   A small 3D Bloch sphere drawn on canvas. Drag to rotate;
   it gently auto-rotates when idle. The state vector |ψ⟩
   points at (θ, φ) on the sphere.
   --------------------------------------------------------- */
function startBloch(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let colors = themeColors();
  let size = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let yaw = -0.5, pitch = -0.35;          // view rotation
  let dragging = false, lastX = 0, lastY = 0, autoRot = reduce ? 0 : 0.0045;

  // state vector direction on the Bloch sphere (θ from +z, φ around z)
  const theta = Math.PI * 0.32, phi = Math.PI * 0.25;

  function resize() {
    const r = canvas.getBoundingClientRect();
    size = Math.max(1, r.width);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("themechange", () => { colors = themeColors(); });

  // rotate point by yaw (around y) then pitch (around x)
  function project(p) {
    let { x, y, z } = p;
    // yaw around Y
    let cx = Math.cos(yaw), sx = Math.sin(yaw);
    let x1 = x * cx + z * sx, z1 = -x * sx + z * cx, y1 = y;
    // pitch around X
    let cy = Math.cos(pitch), sy = Math.sin(pitch);
    let y2 = y1 * cy - z1 * sy, z2 = y1 * sy + z1 * cy, x2 = x1;
    const R = size * 0.32;
    const cxp = size / 2, cyp = size / 2;
    // simple perspective
    const persp = 1 / (1 + (z2 * 0.18));
    return { sx: cxp + x2 * R * persp, sy: cyp - y2 * R * persp, z: z2 };
  }

  function ring(axis, segments = 90) {
    const pts = [];
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      let p;
      if (axis === "z") p = { x: Math.cos(a), y: Math.sin(a), z: 0 };       // equator
      else if (axis === "x") p = { x: 0, y: Math.cos(a), z: Math.sin(a) };  // meridian
      else p = { x: Math.cos(a), y: 0, z: Math.sin(a) };                    // meridian
      pts.push(project(p));
    }
    return pts;
  }

  function drawRing(pts, front) {
    ctx.beginPath();
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (i === 0) ctx.moveTo(p.sx, p.sy); else ctx.lineTo(p.sx, p.sy);
    }
    ctx.strokeStyle = front
      ? colorWithAlpha(colors.inkSoft, colors.light ? 0.5 : 0.42)
      : colorWithAlpha(colors.inkMute, colors.light ? 0.22 : 0.16);
    ctx.lineWidth = front ? 1 : 0.8;
    ctx.stroke();
  }

  function colorWithAlpha(hex, a) {
    const m = hex.replace('#', '');
    const v = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
    const r = parseInt(v.slice(0, 2), 16), g = parseInt(v.slice(2, 4), 16), b = parseInt(v.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${a})`;
  }

  // split a ring into back/front halves by mean z so depth reads correctly
  function drawRingDepthSorted(pts) {
    // draw back segments first (z<0), then front (z>=0)
    for (const front of [false, true]) {
      ctx.beginPath();
      let started = false;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const isFront = p.z >= 0;
        if (isFront === front) {
          if (!started) { ctx.moveTo(p.sx, p.sy); started = true; }
          else ctx.lineTo(p.sx, p.sy);
        } else { started = false; }
      }
      ctx.strokeStyle = front
        ? colorWithAlpha(colors.inkSoft, colors.light ? 0.55 : 0.45)
        : colorWithAlpha(colors.inkMute, colors.light ? 0.20 : 0.15);
      ctx.lineWidth = front ? 1.1 : 0.8;
      ctx.stroke();
    }
  }

  function drawAxis(a, b, label, labelPos) {
    const pa = project(a), pb = project(b);
    ctx.beginPath();
    ctx.moveTo(pa.sx, pa.sy); ctx.lineTo(pb.sx, pb.sy);
    ctx.strokeStyle = colorWithAlpha(colors.inkMute, 0.55);
    ctx.lineWidth = 0.9;
    ctx.setLineDash([3, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
    if (label) {
      const lp = project(labelPos);
      ctx.fillStyle = colorWithAlpha(colors.inkSoft, 0.9);
      ctx.font = "11px IBM Plex Mono, monospace";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(label, lp.sx, lp.sy);
    }
  }

  function frame() {
    if (!dragging && autoRot) yaw += autoRot;
    ctx.clearRect(0, 0, size, size);

    // glowing sphere body
    const grad = ctx.createRadialGradient(size * 0.4, size * 0.36, size * 0.05, size * 0.5, size * 0.5, size * 0.5);
    grad.addColorStop(0, colors.blochA);
    grad.addColorStop(0.55, colors.blochB);
    grad.addColorStop(1, colors.blochC);
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size * 0.32, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.globalAlpha = colors.light ? 0.9 : 0.92;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.strokeStyle = colorWithAlpha(colors.cyan, 0.25);
    ctx.stroke();

    // rings (equator + two meridians)
    drawRingDepthSorted(ring("z"));
    drawRingDepthSorted(ring("x"));
    drawRingDepthSorted(ring("y"));

    // axes
    drawAxis({ x: 0, y: 1.18, z: 0 }, { x: 0, y: -1.18, z: 0 }, null, null);
    drawAxis({ x: 1.18, y: 0, z: 0 }, { x: -1.18, y: 0, z: 0 }, null, null);
    drawAxis({ x: 0, y: 0, z: 1.18 }, { x: 0, y: 0, z: -1.18 }, null, null);

    // axis labels (z = |0>/|1>)
    const top = project({ x: 0, y: 1.32, z: 0 });
    const bot = project({ x: 0, y: -1.32, z: 0 });
    const xr = project({ x: 1.34, y: 0, z: 0 });
    const yr = project({ x: 0, y: 0, z: 1.34 });
    ctx.font = "11px IBM Plex Mono, monospace";
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.fillStyle = colorWithAlpha(colors.inkSoft, 0.95);
    ctx.fillText("|0⟩", top.sx, top.sy);
    ctx.fillText("|1⟩", bot.sx, bot.sy);
    ctx.fillStyle = colorWithAlpha(colors.inkMute, 0.9);
    ctx.fillText("x", xr.sx, xr.sy);
    ctx.fillText("y", yr.sx, yr.sy);

    // state vector |ψ⟩ at (θ, φ): map to sphere coords (y is "up" = |0>)
    const sv = {
      x: Math.sin(theta) * Math.cos(phi),
      z: Math.sin(theta) * Math.sin(phi),
      y: Math.cos(theta)
    };
    const o = project({ x: 0, y: 0, z: 0 });
    const tip = project(sv);

    // vector line with gradient
    const lg = ctx.createLinearGradient(o.sx, o.sy, tip.sx, tip.sy);
    lg.addColorStop(0, colors.cyan); lg.addColorStop(0.6, colors.violet); lg.addColorStop(1, colors.magenta);
    ctx.beginPath();
    ctx.moveTo(o.sx, o.sy); ctx.lineTo(tip.sx, tip.sy);
    ctx.strokeStyle = lg; ctx.lineWidth = 2.6; ctx.lineCap = "round";
    ctx.stroke();

    // glowing tip
    ctx.beginPath();
    ctx.arc(tip.sx, tip.sy, 6.5, 0, Math.PI * 2);
    ctx.fillStyle = colors.cyan;
    ctx.shadowColor = colors.cyan; ctx.shadowBlur = 14;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.arc(tip.sx, tip.sy, 12, 0, Math.PI * 2);
    ctx.strokeStyle = colorWithAlpha(colors.cyan, 0.45);
    ctx.lineWidth = 1; ctx.stroke();

    // origin dot
    ctx.beginPath();
    ctx.arc(o.sx, o.sy, 2.4, 0, Math.PI * 2);
    ctx.fillStyle = colors.ink; ctx.fill();

    requestAnimationFrame(frame);
  }

  // interaction
  function down(x, y) { dragging = true; lastX = x; lastY = y; }
  function move(x, y) {
    if (!dragging) return;
    yaw += (x - lastX) * 0.01;
    pitch += (y - lastY) * 0.01;
    pitch = Math.max(-1.3, Math.min(1.3, pitch));
    lastX = x; lastY = y;
  }
  function up() { dragging = false; }

  canvas.addEventListener("mousedown", (e) => down(e.clientX, e.clientY));
  window.addEventListener("mousemove", (e) => move(e.clientX, e.clientY));
  window.addEventListener("mouseup", up);
  canvas.addEventListener("touchstart", (e) => { const t = e.touches[0]; down(t.clientX, t.clientY); }, { passive: true });
  canvas.addEventListener("touchmove", (e) => { const t = e.touches[0]; move(t.clientX, t.clientY); e.preventDefault(); }, { passive: false });
  canvas.addEventListener("touchend", up);

  frame();
}

/* ---------------------------------------------------------
   WAVEFUNCTION / PROBABILITY CLOUD
   A travelling Gaussian wave packet: we draw |ψ|² as a filled
   probability density, the oscillating real part of ψ, and a
   faint field of "probability" dots underneath.
   --------------------------------------------------------- */
function startWavefunction(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, t = 0, dpr = Math.min(window.devicePixelRatio || 1, 2), colors = themeColors();

  function resize() {
    const r = canvas.getBoundingClientRect();
    w = Math.max(1, r.width); h = Math.max(1, r.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("themechange", () => { colors = themeColors(); });

  function rgba(hex, a) {
    const m = hex.replace('#', '');
    const v = m.length === 3 ? m.split('').map(c => c + c).join('') : m;
    return `rgba(${parseInt(v.slice(0,2),16)},${parseInt(v.slice(2,4),16)},${parseInt(v.slice(4,6),16)},${a})`;
  }

  function frame() {
    if (!reduce) t += 0.02;
    ctx.clearRect(0, 0, w, h);
    const mid = h * 0.62;
    const center = w * (0.5 + 0.16 * Math.sin(t * 0.6)); // packet drifts
    const sigma = w * 0.13;
    const k = 0.06;          // wavenumber
    const amp = h * 0.30;

    // probability density |ψ|^2 (Gaussian envelope), filled
    ctx.beginPath();
    ctx.moveTo(0, mid);
    for (let x = 0; x <= w; x += 2) {
      const g = Math.exp(-((x - center) * (x - center)) / (2 * sigma * sigma));
      const y = mid - g * amp;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(w, mid); ctx.closePath();
    const fill = ctx.createLinearGradient(0, mid - amp, 0, mid);
    fill.addColorStop(0, rgba(colors.cyan, colors.light ? 0.28 : 0.34));
    fill.addColorStop(1, rgba(colors.violet, 0.02));
    ctx.fillStyle = fill; ctx.fill();

    // oscillating real part Re(ψ) = envelope * cos(kx - ωt)
    ctx.beginPath();
    for (let x = 0; x <= w; x += 1.5) {
      const g = Math.exp(-((x - center) * (x - center)) / (2 * sigma * sigma));
      const y = mid - g * amp * Math.cos(k * (x - center) - t * 2.2);
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    const line = ctx.createLinearGradient(0, 0, w, 0);
    line.addColorStop(0, colors.cyan); line.addColorStop(0.5, colors.violet); line.addColorStop(1, colors.magenta);
    ctx.strokeStyle = line; ctx.lineWidth = 2; ctx.stroke();

    // baseline
    ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(w, mid);
    ctx.strokeStyle = rgba(colors.inkMute, 0.35); ctx.lineWidth = 1; ctx.stroke();

    // sampled "measurement" dots under the curve (probability of finding particle)
    const dots = 46;
    for (let i = 0; i < dots; i++) {
      const x = (i + 0.5) / dots * w;
      const g = Math.exp(-((x - center) * (x - center)) / (2 * sigma * sigma));
      const r = 1 + g * 3.4;
      ctx.beginPath();
      ctx.arc(x, mid + 16 + (i % 2) * 6, r, 0, Math.PI * 2);
      ctx.fillStyle = rgba(colors.cyan, 0.12 + g * 0.5);
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }
  frame();
}

/* ---------------------------------------------------------
   PRESENTATIONS: search + multi-filter wiring
   Call wirePresentationFilters() after rendering.
   --------------------------------------------------------- */
function wirePresentationFilters(listId, searchId) {
  const list = document.getElementById(listId);
  const input = document.getElementById(searchId);
  if (!list) return;
  const state = { q: "", filters: {} };

  function apply() {
    const items = list.querySelectorAll(".entry");
    let visible = 0;
    items.forEach((el) => {
      const hay = (el.dataset.search || "").toLowerCase();
      const qOk = !state.q || hay.includes(state.q);
      let fOk = true;
      Object.entries(state.filters).forEach(([k, v]) => { if (!v) return; fOk = fOk && (el.dataset[k] === v); });
      el.style.display = (qOk && fOk) ? "" : "none";
      if (qOk && fOk) visible++;
    });
    const counter = document.querySelector("[data-counter]");
    if (counter) counter.textContent = `${visible} ${visible === 1 ? "entry" : "entries"}`;
  }

  document.querySelectorAll(".filter-row").forEach((row) => {
    row.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      const key = chip.dataset.filterKey, val = chip.dataset.filterValue;
      if (!key) return;
      row.querySelectorAll(`.chip[data-filter-key="${key}"]`).forEach((s) => s.classList.remove("active"));
      chip.classList.add("active");
      state.filters[key] = (val === "__all__") ? null : val;
      apply();
    });
  });

  if (input) input.addEventListener("input", (e) => { state.q = e.target.value.trim().toLowerCase(); apply(); });
  apply();
}

/* Simple unified search across several publication lists (Works page) */
function wireSimpleSearch(searchId) {
  const input = document.getElementById(searchId);
  if (!input) return;
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(".entry-list .entry").forEach((el) => {
      const hay = el.dataset.search || "";
      el.style.display = (!q || hay.includes(q)) ? "" : "none";
    });
  });
}
