# Personal Website — Haruki Emori (江守陽規)

The personal academic website of Haruki Emori, a Ph.D. student at Hokkaido University working on
quantum measurement theory, foundations of quantum theory, and quantum information.

The site is fully static — pure HTML, CSS and JavaScript — so it can be hosted on GitHub Pages with
**no build step**. It ships with a dark/light theme toggle and three original quantum visualizations
(an interactive Bloch sphere, a double-slit interference field, and a travelling wavefunction packet).

> 日本語の詳しい運用手順は [`開発マニュアル.md`](開発マニュアル.md) を参照してください。

---

## Pages

| File | Page | Contents |
| :--- | :--- | :--- |
| `index.html` | Home | Last-updated date, self-introduction, Google Scholar & ORCiD, quantum visuals |
| `cv.html` | Curriculum Vitae | Education, degrees, and employment |
| `works.html` | Works | Published papers, preprints, and patents (searchable) |
| `presentations.html` | Presentations | All talks & posters (search + filters) |
| `activities.html` | Activities | Awards, visiting positions, fellowships, societies, organizing |
| `resources.html` | Resources | Conferences I follow |
| `contact.html` | Contact | Hokkaido University & RIKEN addresses and emails |

## Repository structure

```
.
├── index.html
├── cv.html
├── works.html
├── presentations.html
├── activities.html
├── resources.html
├── contact.html
├── README.md
├── 開発マニュアル.md          ← Japanese GitHub + VS Code guide
└── assets/
    ├── css/
    │   └── style.css         ← All styling (dark + light themes)
    ├── js/
    │   ├── data.js           ← Publications, presentations, visiting positions
    │   └── site.js           ← Theme toggle, quantum visuals, rendering, filters
    └── img/
        └── HE_RIKEN.jpg      ← Profile photo (add your own; falls back to "HE" monogram)
```

---

## Deploying on GitHub Pages

1. Create a new repository named **`<your-username>.github.io`** (Public).
2. Push the contents of this folder (including `assets/`) to the `main` branch.
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / `(root)`**, then Save.
4. After a minute the site is live at `https://<your-username>.github.io/`.

(Step-by-step screenshots and commands are in `開発マニュアル.md`.)

---

## Updating content

**Last-updated banner** — edit the date in `index.html`:
```html
<div class="update-banner"><span class="pulse-dot"></span> Last updated · May 27, 2026</div>
```

**Add a paper / preprint / patent** — push an object into `PUBLISHED`, `PREPRINTS`, or `PATENTS`
in `assets/js/data.js`:
```js
window.PREPRINTS.push({
  year: 2027,
  authors: [{ name: "H. Emori", me: true }, { name: "Co Author" }],
  title: "My new paper",
  venue: "Preprint",
  links: [{ label: "arXiv:2701.00000", href: "https://arxiv.org/abs/2701.00000" }]
});
```
`me: true` styles your name with the accent underline. Entries auto-sort newest-first.

**Add a presentation** — push to `PRESENTATIONS` in `assets/js/data.js`:
```js
window.PRESENTATIONS.push({
  year: 2026, kind: "talk", role: "invited", refereed: false,
  scope: "international", venueType: "Workshop",
  authors: [{ name: "H. Emori", me: true }],
  title: "New talk title", venue: "Some Workshop", place: "Some University",
  date: "Month DD–DD, 2026", venueLink: "https://venue.example.com"
});
```
The search box, year chips, and all filters pick it up automatically.

**Edit static text** (Home, CV, Activities, etc.) — open the relevant `.html` file. There is no
templating, so navigation changes must be applied in all seven pages (a project-wide find/replace
does this in one step).

---

## Design notes

- **Typography:** Fraunces (serif display) + IBM Plex Sans (body) + IBM Plex Mono (metadata).
- **Themes:** A deep "observatory" dark mode and a bright daylight mode, switchable from the nav.
  The choice is remembered via `localStorage`, and an inline script applies it before paint to avoid flashes.
- **Quantum visuals (all hand-built, no template):**
  - *Interactive Bloch sphere* — drag to rotate; auto-rotates when idle.
  - *Double-slit interference* — two coherent sources rendered as moving fringes behind the hero.
  - *Wavefunction packet* — a travelling Gaussian whose |ψ|² is drawn as a probability density.
- Respects `prefers-reduced-motion`.

## License

Website content (text, CV info) © Haruki Emori. The design/scaffolding may be reused for your own
academic site.
