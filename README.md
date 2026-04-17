# Tech Strategy Brief
**Columbia Business School — Technology Strategy Final Project**

A consulting-oriented technology strategy briefing tool that translates course frameworks into a practical, fast-moving workflow for strategists orienting on a new company.

---

## What it does

Enter any company name and receive a structured strategic brief covering:
- Company overview, business model, and target customers
- Competitive positioning and market landscape
- Platform/ecosystem role and network effects
- Strengths, weaknesses, and strategic defensibility
- Partnership and M&A implications
- Consultant-style diligence questions

Three **analysis lenses** (General Strategy, Partnership, Investment/M&A) shift the brief's emphasis based on the consulting context.

Pre-built sample briefs for **DigitalOcean**, **Uber**, and **LinkedIn** reflect frameworks from the Technology Strategy curriculum.

---

## File structure

```
tech-strategy-brief/
├── index.html          # Single-page app shell
├── styles.css          # All styling (no framework)
├── app.js              # UI logic, lens switching, state machine
├── data/
│   └── companies.js    # Mock company data + generic fallback generator
└── README.md
```

---

## How to run locally

**Option 1 — Python (simplest):**
```bash
cd tech-strategy-brief
python3 -m http.server 5175
# Open http://localhost:5175
```

**Option 2 — Node `serve`:**
```bash
npx serve tech-strategy-brief -p 5175
# Open http://localhost:5175
```

No build step required — it's plain HTML/CSS/JS with ES modules.

---

## How to deploy to Vercel

1. Push the `tech-strategy-brief/` folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import that repo
3. Framework preset: **Other** (static site, no build command)
4. Output directory: leave blank (root)
5. Deploy — done. Vercel serves static files automatically.

Or via CLI:
```bash
npx vercel tech-strategy-brief --prod
```

---

## Where to plug in a real API

In `app.js`, the `generate()` function calls `lookupCompany()` from `data/companies.js` after a simulated 2.5-second delay. Replace that section with a real API call:

```js
// app.js — inside generate()
await wait(2500);                          // ← remove this
const { data } = lookupCompany(trimmed);  // ← replace with:

const response = await fetch('/api/brief', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ company: trimmed, lens: currentLens })
});
const data = await response.json();
```

The data object shape expected by the UI is documented in `data/companies.js`.

For a Claude-powered backend, prompt the API with the company name and ask it to return a structured JSON matching the schema, then pass the result directly to `populateBrief()`.

---

## Technology strategy concepts embedded

| Concept | Where it appears |
|---|---|
| Winner-Take-All / Winner-Take-Most dynamics | Market Landscape, lens banners |
| Multi-sided platform monetization (charge the needier side) | LinkedIn brief |
| Network Cover as value proposition | LinkedIn brief |
| Growing Deep vs. Growing Wide | DigitalOcean brief |
| Supply-side productivity and unit economics | Uber brief |
| Platform scope expansion framework | LinkedIn/Uber lens content |
| Envelopment and niche strategy | Competitive Positioning cards |
| B2B vs. B2C platform dynamics | DigitalOcean brief |
| Value curve analysis | DigitalOcean competitive card |
| Learners / Builders / Scalers segmentation | DigitalOcean target customers |
