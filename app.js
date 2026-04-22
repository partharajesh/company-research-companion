import { lookupCompany } from './data/companies.js';

// ─── State ────────────────────────────────────────────────────
let currentData   = null;
let currentIntent = 'competitive';

const INTENT_CONFIG = {
  competitive: {
    label: 'Competitive Intelligence',
    descriptor: 'Maps the competitive landscape — moats, market structure, vulnerabilities, and where rivals can attack.',
    cardTitles: { strengths: 'Strengths & Sources of Advantage', weaknesses: 'Vulnerabilities & Attack Vectors' },
    lensKey: 'general',
  },
  partnership: {
    label: 'Partnership Evaluation',
    descriptor: 'Evaluates strategic fit — complementarity, ecosystem role, integration logic, and dependency risk.',
    cardTitles: { strengths: 'Strengths & Partnership Fit', weaknesses: 'Dependencies & Integration Risks' },
    lensKey: 'partnership',
  },
  ma: {
    label: 'M&A / Investment',
    descriptor: 'Frames the investment case — scalability, monetization quality, concentration risk, and diligence priorities.',
    cardTitles: { strengths: 'Value Drivers & Investment Case', weaknesses: 'Concentration & Diligence Risks' },
    lensKey: 'investment',
  },
};

// Each entry: { id, title (card heading), nav (jump-nav label) }
// title and nav live together — if you rename a title, update nav in the same line.
const SECTION_CONFIG = {
  competitive: {
    featured: 'sec-positioning',
    featuredFullWidth: false,
    focusLabel: 'Competitive Analysis',
    sections: [
      { id: 'sec-overview',    title: 'Company Overview',                  nav: 'Overview'     },
      { id: 'sec-positioning', title: 'Competitive Positioning',           nav: 'Positioning'  },
      { id: 'sec-market',      title: 'Market Landscape',                  nav: 'Market'       },
      { id: 'sec-strengths',   title: 'Strengths & Sources of Advantage',  nav: 'Strengths'    },
      { id: 'sec-weaknesses',  title: 'Vulnerabilities & Attack Vectors',  nav: 'Risks'        },
      { id: 'sec-ecosystem',   title: 'Ecosystem & Platform Role',         nav: 'Ecosystem'    },
      { id: 'sec-diligence',   title: 'Key Diligence Questions',           nav: 'Diligence'    },
      { id: 'sec-news',        title: 'Recent Developments',               nav: 'Developments' },
    ],
  },
  partnership: {
    featured: 'sec-ecosystem',
    featuredFullWidth: false,
    focusLabel: 'Partnership Analysis',
    sections: [
      { id: 'sec-overview',    title: 'Company Overview',                  nav: 'Overview'     },
      { id: 'sec-ecosystem',   title: 'Ecosystem & Partnership Fit',       nav: 'Fit'          },
      { id: 'sec-strengths',   title: 'Strengths & Partnership Fit',       nav: 'Synergies'    },
      { id: 'sec-positioning', title: 'Alternative Partners & Substitutes', nav: 'Alternatives' },
      { id: 'sec-market',      title: 'Demand Context & Channel Economics', nav: 'Economics'   },
      { id: 'sec-weaknesses',  title: 'Dependencies & Integration Risks',  nav: 'Integration'  },
      { id: 'sec-diligence',   title: 'Partnership Diligence',             nav: 'Diligence'    },
      { id: 'sec-news',        title: 'Recent Developments',               nav: 'Developments' },
    ],
  },
  ma: {
    featured: 'sec-strengths',
    featuredFullWidth: true,
    focusLabel: 'M&A Analysis',
    sections: [
      { id: 'sec-overview',    title: 'Company Overview',                  nav: 'Overview'      },
      { id: 'sec-strengths',   title: 'Value Drivers & Investment Case',   nav: 'Value Drivers' },
      { id: 'sec-weaknesses',  title: 'Risks & Concentration Factors',     nav: 'Risks'         },
      { id: 'sec-positioning', title: 'Competitive Moat',                  nav: 'Moat'          },
      { id: 'sec-market',      title: 'Market Opportunity',                nav: 'Market'        },
      { id: 'sec-ecosystem',   title: 'Platform & Ecosystem Defensibility',nav: 'Ecosystem'     },
      { id: 'sec-diligence',   title: 'M&A Diligence Priorities',          nav: 'Diligence'     },
      { id: 'sec-news',        title: 'Recent Developments',               nav: 'Developments'  },
    ],
  },
};

// ─── DOM refs ─────────────────────────────────────────────────
const companyInput  = document.getElementById('companyInput');
const generateBtn   = document.getElementById('generateBtn');
const inputError    = document.getElementById('inputError');
const emptyState    = document.getElementById('emptyState');
const loadingState  = document.getElementById('loadingState');
const briefOutput   = document.getElementById('briefOutput');
const loadingName   = document.getElementById('loadingCompanyName');
const loadingBar    = document.querySelector('.loading-bar');
const intentTabs    = document.querySelectorAll('.intent-tab');
const demoButtons   = document.querySelectorAll('.btn-demo');
const briefHeader   = document.getElementById('briefHeader');
const aiNotice      = document.getElementById('aiNotice');
const aiNoticeText  = document.getElementById('aiNoticeText');
const intentDescriptor = document.getElementById('intentDescriptor');
const frameworksRow    = document.getElementById('frameworksRow');
const frameworksChips  = document.getElementById('frameworksChips');
const briefTakeaway    = document.getElementById('briefTakeaway');


const fields = {
  sectorBadge:     document.getElementById('briefSectorBadge'),
  companyLogo:     document.getElementById('briefCompanyLogo'),
  companyName:     document.getElementById('briefCompanyName'),
  companyMeta:     document.getElementById('briefCompanyMeta'),
  updated:         document.getElementById('briefUpdated'),
  overview:        document.getElementById('cardOverview'),
  businessModel:   document.getElementById('cardBusinessModel'),
  targetCustomers: document.getElementById('cardTargetCustomers'),
  positioning:     document.getElementById('cardPositioning'),
  market:          document.getElementById('cardMarket'),
  ecosystem:       document.getElementById('cardEcosystem'),
  strengths:       document.getElementById('cardStrengths'),
  weaknesses:      document.getElementById('cardWeaknesses'),
  diligence:           document.getElementById('cardDiligence'),
  lensSummary:         document.getElementById('briefLensSummary'),
  dealThesisBlock:     document.getElementById('dealThesisBlock'),
  dealThesisConclusion:document.getElementById('dealThesisConclusion'),
  news:            document.getElementById('cardNews'),
  vizMap:          document.getElementById('vizCompetitiveMap'),
  vizWta:          document.getElementById('vizWtaSpectrum'),
  vizEco:          document.getElementById('vizEcosystem'),
  vizRev:          document.getElementById('vizRevenue'),
};



// ─── Loading animation ────────────────────────────────────────
const STEPS = [
  { id: 'step1', delay: 0 },
  { id: 'step2', delay: 800 },
  { id: 'step3', delay: 1600 },
  { id: 'step4', delay: 2400 },
];

function runLoadingSteps(fast = false) {
  const multiplier = fast ? 1 : 3.5;
  STEPS.forEach(({ id, delay }) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      STEPS.forEach(s => {
        if (s.delay < delay) {
          const prev = document.getElementById(s.id);
          if (prev) { prev.classList.remove('active'); prev.classList.add('done'); }
        }
      });
      el.classList.add('active');
    }, delay * multiplier);
  });
}

// ─── States ───────────────────────────────────────────────────
const jumpNav = document.getElementById('briefJumpNav');
function showEmpty()   { emptyState.hidden = false; loadingState.hidden = true; briefOutput.hidden = true;  if (jumpNav) jumpNav.hidden = true; }
function showLoading() { emptyState.hidden = true; loadingState.hidden = false; briefOutput.hidden = true;  if (jumpNav) jumpNav.hidden = true; }
function showBrief()   { emptyState.hidden = true; loadingState.hidden = true;  briefOutput.hidden = false; if (jumpNav) jumpNav.hidden = false; }

// ─── Main populate ────────────────────────────────────────────
function populateBrief(data) {
  const v = data.visuals || {};

  if (v.accentColor) briefHeader.style.setProperty('--company-accent', v.accentColor);

  fields.sectorBadge.textContent = data.sector;
  fields.companyName.textContent = data.company;
  fields.companyMeta.textContent = `${data.ticker}  ·  ${data.sector}`;
  if (briefTakeaway) briefTakeaway.textContent = data.strategicTakeaway || '';

  const dateLabel = data.isAiGenerated ? `AI-generated · ${data.lastUpdated}` : `Data as of: ${data.lastUpdated}`;
  fields.updated.textContent = dateLabel;

  aiNotice.hidden = true;

  renderLogo(v.logoUrl, data.company, v.accentColor);

  fields.overview.textContent        = data.overview;
  fields.businessModel.textContent   = data.businessModel;
  fields.targetCustomers.textContent = data.targetCustomers;
  renderNewsList(fields.news, data.recentDevelopments || []);

  renderCompetitiveMap(fields.vizMap, v.competitiveMap);
  renderWtaSpectrum(fields.vizWta,    v.wtaSpectrum);
  renderEcosystem(fields.vizEco,      v.ecosystemNodes, data.company, v.accentColor);
  renderRevenue(fields.vizRev,        v.revenueBreakdown);

  applyIntent(currentIntent, data);
  buildJumpNav(data, currentIntent);
}

// ─── Apply Intent ─────────────────────────────────────────────
// All section IDs across all modes — used to reset state before re-applying
const ALL_SECTION_IDS = ['sec-overview', 'sec-positioning', 'sec-market', 'sec-ecosystem', 'sec-strengths', 'sec-weaknesses', 'sec-diligence', 'sec-news'];

function applyIntent(intent, data) {
  currentIntent = intent;
  const scfg    = SECTION_CONFIG[intent];
  const cfg     = INTENT_CONFIG[intent];
  const lensKey = cfg.lensKey;

  // Intent descriptor
  if (intentDescriptor) intentDescriptor.textContent = cfg.descriptor;

  // Show/hide partner input row
  // Reset all cards, then apply per-mode order + titles from sections array
  ALL_SECTION_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('card-featured', 'card-featured-inline'); el.style.order = 99; }
  });

  scfg.sections.forEach(({ id, title }, idx) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.order = idx;
    const titleEl = el.querySelector('.card-title');
    if (titleEl) titleEl.textContent = title;
  });

  const featuredEl = document.getElementById(scfg.featured);
  if (featuredEl) {
    featuredEl.classList.add(scfg.featuredFullWidth ? 'card-featured' : 'card-featured-inline');
  }

  // Lens focus badge — clear all stale badges first, then add to current featured card
  document.querySelectorAll('.lens-focus-badge').forEach(b => b.remove());
  if (featuredEl) {
    const hdr = featuredEl.querySelector('.card-header');
    if (hdr) {
      const badge = document.createElement('span');
      badge.className = 'lens-focus-badge';
      badge.textContent = scfg.focusLabel;
      hdr.appendChild(badge);
    }
  }

  // Lens summary in brief header
  if (fields.lensSummary) {
    const focusText = data?.lenses?.[lensKey]?.focus || '';
    fields.lensSummary.textContent = focusText;
    fields.lensSummary.hidden = !focusText;
  }

  // M&A deal thesis block
  const dealConclusion = data?.lenses?.investment?.dealConclusion || '';
  if (fields.dealThesisBlock) fields.dealThesisBlock.hidden = intent !== 'ma' || !dealConclusion;
  if (fields.dealThesisConclusion) fields.dealThesisConclusion.textContent = dealConclusion;

  // Frameworks row
  const frameworks = data?.lenses?.[lensKey]?.keyFrameworks || [];
  if (frameworksChips) {
    frameworksChips.innerHTML = frameworks.length > 0
      ? frameworks.map(f => `<span class="framework-chip">${escHtml(f)}</span>`).join('')
      : '<span class="frameworks-fallback">Analysis applied contextually — no frameworks explicitly tagged for this lens.</span>';
  }
  if (frameworksRow) frameworksRow.hidden = false;

  // Diligence questions
  if (fields.diligence) {
    const questions = data?.lenses?.[lensKey]?.diligenceQuestions || [];
    renderOrderedList(fields.diligence, questions);
  }

  // Lens-specific content (positioning, market, ecosystem, strengths, weaknesses)
  // Each falls back to the shared top-level field when no lens override exists
  if (data) {
    const lensData = data.lenses?.[lensKey] || {};
    if (fields.positioning) fields.positioning.textContent = lensData.positioning || data.positioning || '';
    if (fields.market)      fields.market.textContent      = lensData.market      || data.marketLandscape || '';
    if (fields.ecosystem)   fields.ecosystem.textContent   = lensData.ecosystem   || data.ecosystemRole || '';
    renderList(fields.strengths,  lensData.strengths  || data.strengths  || []);
    renderList(fields.weaknesses, lensData.weaknesses || data.weaknesses || []);
  }

  // Active intent tab
  intentTabs.forEach(tab => {
    const active = tab.dataset.intent === intent;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-checked', String(active));
  });

  updateCardNumbers();
}

// ─── Dynamic card numbering ───────────────────────────────────
function updateCardNumbers() {
  SECTION_CONFIG[currentIntent].sections.forEach(({ id }, idx) => {
    const card = document.getElementById(id);
    if (!card || card.hidden) return;
    const numEl = card.querySelector('.card-num');
    if (numEl) numEl.textContent = String(idx + 1).padStart(2, '0');
  });
}

// ─── Generate ─────────────────────────────────────────────────
async function generate(companyName) {
  const trimmed = companyName.trim();
  if (!trimmed) {
    inputError.textContent = 'Please enter a company name.';
    companyInput.classList.add('error');
    companyInput.focus();
    return;
  }
  inputError.textContent = '';
  companyInput.classList.remove('error');

  STEPS.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active', 'done');
  });

  loadingName.textContent = trimmed;
  showLoading();
  generateBtn.disabled = true;

  const { found, data: prebuilt } = lookupCompany(trimmed);

  if (found) {
    runLoadingSteps(true);
    loadingBar.classList.remove('indeterminate');
    await wait(2200);
    currentData = prebuilt;
    populateBrief(prebuilt);
    showBrief();
  } else {
    showEmpty();
    openProtoModal();
  }

  generateBtn.disabled = false;
  if (!briefOutput.hidden) briefOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── Prototype Modal ──────────────────────────────────────────
const protoModal        = document.getElementById('protoModal');
const protoModalExplore = document.getElementById('protoModalExplore');
const protoModalClose   = document.getElementById('protoModalClose');
const protoModalX       = document.getElementById('protoModalX');

function openProtoModal() {
  protoModal.hidden = false;
  document.body.style.overflow = 'hidden';
  protoModalExplore.focus();
}

function closeProtoModal() {
  protoModal.hidden = true;
  document.body.style.overflow = '';
  companyInput.focus();
}

protoModalClose.addEventListener('click', closeProtoModal);
protoModalX.addEventListener('click', closeProtoModal);

protoModalExplore.addEventListener('click', () => {
  closeProtoModal();
  // Scroll to the demo row and briefly highlight it
  const demoRow = document.querySelector('.demo-row');
  if (demoRow) {
    demoRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    demoRow.classList.add('demo-row-highlight');
    setTimeout(() => demoRow.classList.remove('demo-row-highlight'), 1200);
  }
});

// Close on overlay click (outside the modal card)
protoModal.addEventListener('click', e => {
  if (e.target === protoModal) closeProtoModal();
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !protoModal.hidden) closeProtoModal();
});

// ─── Logo ─────────────────────────────────────────────────────
function renderLogo(url, company, accent) {
  const el = fields.companyLogo;
  el.innerHTML = '';

  // Apply brand-tinted background regardless of logo load outcome
  if (accent && /^#[0-9a-fA-F]{6}$/.test(accent)) {
    el.style.background   = hexToRgba(accent, 0.08);
    el.style.borderColor  = hexToRgba(accent, 0.22);
  } else {
    el.style.background  = '';
    el.style.borderColor = '';
  }

  if (!url) { el.classList.add('logo-hidden'); return; }
  el.classList.remove('logo-hidden');
  const img = document.createElement('img');
  img.src = url;
  img.alt = company + ' logo';
  img.onerror = () => {
    el.innerHTML = '';
    const span = document.createElement('span');
    span.className = 'logo-initials';
    span.textContent = company.slice(0, 2).toUpperCase();
    if (accent) span.style.color = accent;
    el.appendChild(span);
  };
  el.appendChild(img);
}

// ─── Competitive Positioning Map ─────────────────────────────
function renderCompetitiveMap(container, mapData) {
  container.innerHTML = '';
  if (!mapData) return;

  const W = 460, H = 320;
  const PAD = { top: 24, right: 24, bottom: 44, left: 52 };
  const cw = W - PAD.left - PAD.right;
  const ch = H - PAD.top - PAD.bottom;

  const COLORS = {
    focal:  { fill: '#0f1117', text: '#fff', stroke: '#0f1117' },
    rival:  { fill: '#edeef5', text: '#3a3d48', stroke: '#c4c6d6' },
  };

  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'Competitive positioning matrix' });

  const qW = cw / 2, qH = ch / 2;
  const quads = [
    { x: PAD.left,       y: PAD.top,       label: '' },
    { x: PAD.left + qW,  y: PAD.top,       label: mapData.highlightLabel || '', highlight: true },
    { x: PAD.left,       y: PAD.top + qH,  label: '' },
    { x: PAD.left + qW,  y: PAD.top + qH,  label: '' },
  ];

  quads.forEach(q => {
    const rect = svgEl('rect', {
      x: q.x, y: q.y, width: qW, height: qH,
      fill: q.highlight ? '#e9edff' : '#f4f6fb',
      stroke: '#d2d6e8', 'stroke-width': 0.75,
    });
    svg.appendChild(rect);
    if (q.highlight && q.label) {
      const t = svgEl('text', {
        x: q.x + qW - 8, y: q.y + 14,
        fill: '#1438c8', 'font-size': 9, 'font-weight': 600,
        'text-anchor': 'end', 'font-family': 'Inter, sans-serif', opacity: 0.7,
      });
      t.textContent = q.label;
      svg.appendChild(t);
    }
  });

  const hLine = svgEl('line', { x1: PAD.left, y1: PAD.top + qH, x2: PAD.left + cw, y2: PAD.top + qH, stroke: '#b4b9ce', 'stroke-width': 1, 'stroke-dasharray': '4 3' });
  const vLine = svgEl('line', { x1: PAD.left + qW, y1: PAD.top, x2: PAD.left + qW, y2: PAD.top + ch, stroke: '#b4b9ce', 'stroke-width': 1, 'stroke-dasharray': '4 3' });
  svg.appendChild(hLine);
  svg.appendChild(vLine);

  const makeAxisLabel = (txt, x, y, rotate) => {
    const t = svgEl('text', {
      x, y, fill: '#565970', 'font-size': 11, 'font-weight': 600,
      'text-anchor': 'middle', 'font-family': 'Inter, sans-serif',
      transform: rotate ? `rotate(-90, ${x}, ${y})` : '',
    });
    t.textContent = txt;
    svg.appendChild(t);
  };

  makeAxisLabel(mapData.xAxisLabel, PAD.left + cw / 2, H - 6, false);
  makeAxisLabel(mapData.yAxisLabel, 14, PAD.top + ch / 2, true);

  const tickStyle = { fill: '#7e84a0', 'font-size': 10, 'font-family': 'Inter, sans-serif' };
  const xMinTxt = svgEl('text', { x: PAD.left, y: H - 30, 'text-anchor': 'start', ...tickStyle });
  xMinTxt.textContent = mapData.xMin;
  svg.appendChild(xMinTxt);
  const xMaxTxt = svgEl('text', { x: PAD.left + cw, y: H - 30, 'text-anchor': 'end', ...tickStyle });
  xMaxTxt.textContent = mapData.xMax;
  svg.appendChild(xMaxTxt);
  const yMinTxt = svgEl('text', { x: PAD.left + 4, y: PAD.top + ch - 3, 'text-anchor': 'start', ...tickStyle });
  yMinTxt.textContent = mapData.yMin;
  svg.appendChild(yMinTxt);
  const yMaxTxt = svgEl('text', { x: PAD.left + 4, y: PAD.top + 11, 'text-anchor': 'start', ...tickStyle });
  yMaxTxt.textContent = mapData.yMax;
  svg.appendChild(yMaxTxt);

  const sorted = [...mapData.players].sort((a, b) => (a.category === 'focal') - (b.category === 'focal'));
  sorted.forEach(p => {
    const cx = PAD.left + (p.x / 100) * cw;
    const cy = PAD.top + ((100 - p.y) / 100) * ch;
    const isFocal = p.category === 'focal';
    const r = isFocal ? 18 : 14;
    const col = COLORS[p.category] || COLORS.rival;

    if (isFocal) svg.appendChild(svgEl('circle', { cx, cy, r: r + 3, fill: 'rgba(15,17,23,0.12)' }));

    svg.appendChild(svgEl('circle', {
      cx, cy, r, fill: col.fill, stroke: col.stroke, 'stroke-width': isFocal ? 0 : 1,
    }));

    const label = svgEl('text', {
      x: cx, y: cy + (isFocal ? 4.5 : 4),
      fill: col.text, 'font-size': isFocal ? 9 : 8, 'font-weight': 700,
      'text-anchor': 'middle', 'font-family': 'Inter, sans-serif',
      style: 'pointer-events:none',
    });
    label.textContent = p.abbr;
    svg.appendChild(label);

    if (isFocal) {
      const nameLabel = svgEl('text', {
        x: cx, y: cy + r + 11,
        fill: '#0f1117', 'font-size': 9.5, 'font-weight': 600,
        'text-anchor': 'middle', 'font-family': 'Inter, sans-serif',
        style: 'pointer-events:none',
      });
      nameLabel.textContent = p.name;
      svg.appendChild(nameLabel);
    }

    // Invisible hit area for tooltip
    const hit = svgEl('circle', { cx, cy, r: r + 5, fill: 'transparent', style: 'cursor:default' });
    hit.addEventListener('mouseenter', e => showTooltip(e, p.name));
    hit.addEventListener('mousemove',  moveTooltip);
    hit.addEventListener('mouseleave', hideTooltip);
    svg.appendChild(hit);
  });

  const wrap = document.createElement('div');
  wrap.className = 'competitive-map-wrap';
  wrap.appendChild(svg);

  const legend = document.createElement('div');
  legend.className = 'comp-map-legend';
  mapData.players.forEach(p => {
    const item = document.createElement('div');
    item.className = 'comp-map-legend-item';
    const dot = document.createElement('span');
    dot.className = 'comp-map-legend-dot' + (p.category === 'focal' ? ' focal' : '');
    const abbr = document.createElement('span');
    abbr.className = 'comp-map-legend-abbr';
    abbr.textContent = p.abbr;
    const name = document.createElement('span');
    name.textContent = p.name;
    item.appendChild(dot);
    item.appendChild(abbr);
    item.appendChild(name);
    legend.appendChild(item);
  });
  wrap.appendChild(legend);

  container.appendChild(wrap);
}

// ─── WTA Spectrum ─────────────────────────────────────────────
function renderWtaSpectrum(container, wtaData) {
  container.innerHTML = '';
  if (!wtaData) return;

  const WTA_DESCRIPTIONS = {
    'Fragmented':        'Low switching costs — multiple players can coexist profitably.',
    'Winner-Take-Some':  'Markets segment by geography or niche, allowing 2–4 strong players.',
    'Winner-Take-Most':  'Strong network effects, but multi-homing or regulation prevents monopoly.',
    'Winner-Take-All':   'One dominant platform captures nearly all value — switching costs and network effects compound.',
  };

  const wrap = document.createElement('div');
  wrap.className = 'wta-wrap';

  const title = document.createElement('div');
  title.className = 'wta-title';
  title.textContent = 'Market Structure · Winner-Take-All Dynamics';
  wrap.appendChild(title);

  // Pole anchor labels flanking the track
  const poleRow = document.createElement('div');
  poleRow.className = 'wta-pole-row';
  poleRow.innerHTML =
    '<span class="wta-pole wta-pole-left">← Fragmented</span>' +
    '<span class="wta-pole wta-pole-right">Winner-Take-All →</span>';
  wrap.appendChild(poleRow);

  // Track area: callout floats above, track + marker below
  const trackWrap = document.createElement('div');
  trackWrap.className = 'wta-track-wrap';
  trackWrap.style.cursor = 'help';

  // Callout: label + vertical stem above the marker
  const callout = document.createElement('div');
  callout.className = 'wta-callout';
  callout.style.left = '0%';
  const calloutLabel = document.createElement('span');
  calloutLabel.className = 'wta-callout-label';
  calloutLabel.textContent = wtaData.marketLabel;
  const calloutStem = document.createElement('span');
  calloutStem.className = 'wta-callout-stem';
  callout.appendChild(calloutLabel);
  callout.appendChild(calloutStem);
  trackWrap.appendChild(callout);

  const track = document.createElement('div');
  track.className = 'wta-track';
  trackWrap.appendChild(track);

  const marker = document.createElement('div');
  marker.className = 'wta-marker';
  marker.style.left = '0%';
  trackWrap.appendChild(marker);

  wrap.appendChild(trackWrap);

  // Segment reference labels with tick marks above each
  const labelsRow = document.createElement('div');
  labelsRow.className = 'wta-labels';
  wtaData.segments.forEach(seg => {
    const item = document.createElement('div');
    item.className = 'wta-label-item' + (seg.label === wtaData.marketLabel ? ' active' : '');
    item.textContent = seg.label;
    const desc = WTA_DESCRIPTIONS[seg.label] || seg.label;
    item.addEventListener('mouseenter', e => showTooltip(e, desc));
    item.addEventListener('mousemove',  moveTooltip);
    item.addEventListener('mouseleave', hideTooltip);
    labelsRow.appendChild(item);
  });
  wrap.appendChild(labelsRow);

  const note = document.createElement('div');
  note.className = 'wta-note';
  note.textContent = wtaData.note;
  wrap.appendChild(note);

  const markerNote = `${wtaData.marketLabel}: ${wtaData.note}`;
  trackWrap.addEventListener('mouseenter', e => showTooltip(e, markerNote));
  trackWrap.addEventListener('mousemove',  moveTooltip);
  trackWrap.addEventListener('mouseleave', hideTooltip);

  container.appendChild(wrap);

  // Animate both marker and callout together
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      marker.style.left  = `${wtaData.marketPosition}%`;
      callout.style.left = `${wtaData.marketPosition}%`;
    });
  });
}

// ─── Ecosystem Radial Diagram ─────────────────────────────────
function renderEcosystem(container, nodes, companyName, accent) {
  container.innerHTML = '';
  if (!nodes || !nodes.length) return;

  const W = 460, H = 360;
  const CX = W / 2, CY = 184;
  const INNER_R = 90, OUTER_R = 140;
  const RING_SEP_R = 115; // dashed separator between ring 1 and ring 2

  const NODE_COLORS = {
    focal:    { fill: '#0f1117',  text: '#fff',    stroke: '#0f1117' },
    customer: { fill: '#e8ecff',  text: '#1a3cff', stroke: '#c5cefc' },
    product:  { fill: '#e6f5f1',  text: '#0d7a5f', stroke: '#b8e6d9' },
    partner:  { fill: '#fdf3dc',  text: '#8a5e00', stroke: '#f5d98b' },
    rival:    { fill: '#fbeaea',  text: '#b03030', stroke: '#f0b8b8' },
  };

  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'Ecosystem diagram' });
  svg.appendChild(svgEl('rect', { width: W, height: H, fill: '#f4f6fb' }));

  // Dashed ring separator to visually distinguish inner from outer tier
  svg.appendChild(svgEl('circle', {
    cx: CX, cy: CY, r: RING_SEP_R,
    fill: 'none', stroke: '#ccd0e2', 'stroke-width': 1,
    'stroke-dasharray': '3 5',
  }));

  const innerNodes = nodes.filter(n => n.ring === 1);
  const outerNodes = nodes.filter(n => n.ring === 2);

  function ringPositions(ringNodes, radius) {
    const count = ringNodes.length;
    return ringNodes.map((n, i) => {
      const angle = (2 * Math.PI * i / count) - Math.PI / 2;
      return { ...n, x: CX + radius * Math.cos(angle), y: CY + radius * Math.sin(angle) };
    });
  }

  const innerPos = ringPositions(innerNodes, INNER_R);
  const outerPos = ringPositions(outerNodes, OUTER_R);
  const allPos   = [...innerPos, ...outerPos];

  // Connector lines — outer ring slightly muted
  allPos.forEach(n => {
    const col       = NODE_COLORS[n.type] || NODE_COLORS.partner;
    const isOuter   = n.ring === 2;
    svg.appendChild(svgEl('line', {
      x1: CX, y1: CY, x2: n.x, y2: n.y,
      stroke: col.stroke, 'stroke-width': isOuter ? 1.25 : 1.75,
      'stroke-linecap': 'round', opacity: isOuter ? 0.7 : 1,
    }));
  });

  allPos.forEach(n => drawEcoNode(svg, n, NODE_COLORS));

  const focalNode = nodes.find(n => n.type === 'focal');
  if (focalNode) drawEcoNode(svg, { ...focalNode, x: CX, y: CY }, NODE_COLORS, true, companyName);

  const wrap = document.createElement('div');
  wrap.className = 'ecosystem-wrap';
  wrap.appendChild(svg);

  // DOM legend strip below SVG (same pattern as competitive map)
  const legendData = [
    { type: 'customer', label: 'Customer / User' },
    { type: 'product',  label: 'Product / Platform' },
    { type: 'partner',  label: 'Partner' },
    { type: 'rival',    label: 'Rival / Threat' },
  ];
  const legend = document.createElement('div');
  legend.className = 'eco-legend';
  legendData.forEach(item => {
    const el  = document.createElement('div');
    el.className = 'eco-legend-item';
    const dot = document.createElement('span');
    dot.className = 'eco-legend-dot';
    dot.style.cssText = `background:${NODE_COLORS[item.type].fill};border-color:${NODE_COLORS[item.type].stroke};`;
    const txt = document.createElement('span');
    txt.textContent = item.label;
    el.appendChild(dot);
    el.appendChild(txt);
    legend.appendChild(el);
  });
  wrap.appendChild(legend);

  container.appendChild(wrap);
}

const ECO_TYPE_LABELS = {
  focal: 'Company (focal)',
  customer: 'Customer',
  product:  'Product / Platform',
  partner:  'Partner',
  rival:    'Rival / Threat',
};

function drawEcoNode(svg, n, colors, isFocal = false, overrideLabel = null) {
  const col   = colors[n.type] || colors.partner;
  const r     = isFocal ? 34 : 24;
  const label = overrideLabel || n.label;

  if (isFocal) svg.appendChild(svgEl('circle', { cx: n.x, cy: n.y, r: r + 6, fill: 'rgba(15,17,23,0.07)' }));

  svg.appendChild(svgEl('circle', {
    cx: n.x, cy: n.y, r,
    fill: col.fill, stroke: col.stroke, 'stroke-width': isFocal ? 0 : 1.5,
  }));

  const words = label.split(' ');
  if (words.length <= 2 || isFocal) {
    const line1 = isFocal ? label.split(' ').slice(0, 2).join(' ') : label;
    const line2 = isFocal && label.split(' ').length > 2 ? label.split(' ').slice(2).join(' ') : '';
    const t1 = svgEl('text', {
      x: n.x, y: n.y + (line2 ? -3.5 : 4.5),
      fill: col.text, 'font-size': isFocal ? 11 : 9.5,
      'font-weight': 700, 'text-anchor': 'middle', 'font-family': 'Inter, sans-serif',
      style: 'pointer-events:none',
    });
    t1.textContent = line1;
    svg.appendChild(t1);
    if (line2) {
      const t2 = svgEl('text', {
        x: n.x, y: n.y + 10,
        fill: col.text, 'font-size': isFocal ? 11 : 9.5,
        'font-weight': 700, 'text-anchor': 'middle', 'font-family': 'Inter, sans-serif',
        style: 'pointer-events:none',
      });
      t2.textContent = line2;
      svg.appendChild(t2);
    }
  } else {
    const mid = Math.ceil(words.length / 2);
    [words.slice(0, mid).join(' '), words.slice(mid).join(' ')].forEach((line, li) => {
      const t = svgEl('text', {
        x: n.x, y: n.y + (li === 0 ? -4 : 8),
        fill: col.text, 'font-size': 8.5,
        'font-weight': 600, 'text-anchor': 'middle', 'font-family': 'Inter, sans-serif',
        style: 'pointer-events:none',
      });
      t.textContent = line;
      svg.appendChild(t);
    });
  }

  // Invisible hit circle for tooltip
  const typeLabel = ECO_TYPE_LABELS[n.type] || n.type;
  const tipText   = isFocal ? label : `${label} — ${typeLabel}`;
  const hit = svgEl('circle', { cx: n.x, cy: n.y, r: r + 4, fill: 'transparent', style: 'cursor:default' });
  hit.addEventListener('mouseenter', e => showTooltip(e, tipText));
  hit.addEventListener('mousemove',  moveTooltip);
  hit.addEventListener('mouseleave', hideTooltip);
  svg.appendChild(hit);
}

// ─── Revenue Donut ────────────────────────────────────────────
function renderRevenue(container, breakdown) {
  container.innerHTML = '';
  if (!breakdown || !breakdown.length) return;

  const SIZE = 100, R = 42, CX = SIZE / 2, CY = SIZE / 2;
  let startAngle = -Math.PI / 2;

  const svg = svgEl('svg', { viewBox: `0 0 ${SIZE} ${SIZE}`, width: 100, height: 100 });

  breakdown.forEach(seg => {
    const fraction = seg.pct / 100;
    const endAngle = startAngle + fraction * 2 * Math.PI;
    const x1 = CX + R * Math.cos(startAngle);
    const y1 = CY + R * Math.sin(startAngle);
    const x2 = CX + R * Math.cos(endAngle);
    const y2 = CY + R * Math.sin(endAngle);
    const large = fraction > 0.5 ? 1 : 0;
    const path = svgEl('path', {
      d: `M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} Z`,
      fill: seg.color,
      style: 'cursor:default; transition: opacity .15s',
    });
    const tipText = `${seg.label}: ${seg.pct}%`;
    path.addEventListener('mouseenter', e => { path.style.opacity = '0.72'; showTooltip(e, tipText); });
    path.addEventListener('mousemove',  moveTooltip);
    path.addEventListener('mouseleave', () => { path.style.opacity = '1'; hideTooltip(); });
    svg.appendChild(path);
    startAngle = endAngle;
  });

  svg.appendChild(svgEl('circle', { cx: CX, cy: CY, r: R * 0.55, fill: '#f4f6fb' }));

  const wrap = document.createElement('div');
  wrap.className = 'revenue-wrap';

  const title = document.createElement('div');
  title.className = 'revenue-title';
  title.textContent = 'Revenue Breakdown';
  wrap.appendChild(title);

  const inner = document.createElement('div');
  inner.style.cssText = 'display:flex;gap:20px;align-items:center';

  const chartArea = document.createElement('div');
  chartArea.className = 'revenue-chart-area';
  chartArea.appendChild(svg);

  const legend = document.createElement('div');
  legend.className = 'revenue-legend';
  breakdown.forEach(seg => {
    const item = document.createElement('div');
    item.className = 'revenue-legend-item';
    item.innerHTML = `<span class="revenue-legend-dot" style="background:${seg.color}"></span>
      <span>${escHtml(seg.label)}</span>
      <span class="revenue-legend-pct">${seg.pct}%</span>`;
    legend.appendChild(item);
  });

  inner.appendChild(chartArea);
  inner.appendChild(legend);
  wrap.appendChild(inner);
  container.appendChild(wrap);
}

// ─── Events ───────────────────────────────────────────────────
generateBtn.addEventListener('click', () => generate(companyInput.value));
companyInput.addEventListener('keydown', e => { if (e.key === 'Enter') generate(companyInput.value); });
companyInput.addEventListener('input', () => {
  if (companyInput.value.trim()) { inputError.textContent = ''; companyInput.classList.remove('error'); }
});

intentTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    currentIntent = tab.dataset.intent;
    if (intentDescriptor) intentDescriptor.textContent = INTENT_CONFIG[currentIntent].descriptor;
    intentTabs.forEach(t => {
      t.classList.toggle('active', t.dataset.intent === currentIntent);
      t.setAttribute('aria-checked', String(t.dataset.intent === currentIntent));
    });
    if (currentData) {
      applyIntent(currentIntent, currentData);
      buildJumpNav(currentData, currentIntent);
    }
  });
});

demoButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    companyInput.value = btn.dataset.company;
    generate(btn.dataset.company);
  });
});

// ─── Shared chart tooltip ─────────────────────────────────────
let _tooltip = null;
function getTooltip() {
  if (!_tooltip) {
    _tooltip = document.createElement('div');
    _tooltip.className = 'viz-tooltip';
    _tooltip.hidden = true;
    document.body.appendChild(_tooltip);
  }
  return _tooltip;
}
function showTooltip(e, text) {
  const t = getTooltip();
  t.textContent = text;
  t.hidden = false;
  moveTooltip(e);
}
function moveTooltip(e) {
  const t = getTooltip();
  t.style.left = (e.clientX + 14) + 'px';
  t.style.top  = (e.clientY - 36) + 'px';
}
function hideTooltip() { getTooltip().hidden = true; }

// ─── SVG helpers ──────────────────────────────────────────────
function svgEl(tag, attrs = {}) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function renderList(el, items) {
  el.innerHTML = (items || []).map(item => `<li>${escHtml(item)}</li>`).join('');
}

function renderNewsList(el, items) {
  el.innerHTML = (items || []).map(item => {
    const sep = item.indexOf(' — ');
    if (sep === -1) return `<li><span class="news-item-headline">${escHtml(item)}</span></li>`;
    const headline    = item.slice(0, sep);
    const implication = item.slice(sep + 3);
    return `<li class="news-item">
      <span class="news-item-headline">${escHtml(headline)}</span>
      <span class="news-item-implication">${escHtml(implication)}</span>
    </li>`;
  }).join('');
}
function renderOrderedList(el, items) {
  el.innerHTML = (items || []).map(item => `<li>${escHtml(item)}</li>`).join('');
}
let _jumpNavScrollHandler = null;

function buildJumpNav(data, intent) {
  const navInner = document.getElementById('briefJumpNavInner');
  if (!navInner) return;
  const activeIntent = intent || currentIntent;
  const scfg = SECTION_CONFIG[activeIntent];

  // Derive nav links directly from the sections array — title and nav label stay in sync
  const sections = scfg.sections.map(({ id, nav }) => ({ id, label: nav }));

  navInner.innerHTML = sections.map((s, i) =>
    (i > 0 ? '<span class="jump-nav-sep" aria-hidden="true">·</span>' : '') +
    `<a class="jump-nav-link" data-target="${s.id}" href="#${s.id}">${escHtml(s.label)}</a>`
  ).join('');

  navInner.querySelectorAll('.jump-nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (!target) return;
      const offset = 58 + 42;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Tear down previous scroll listener
  if (_jumpNavScrollHandler) {
    window.removeEventListener('scroll', _jumpNavScrollHandler);
    _jumpNavScrollHandler = null;
  }

  // Single-active logic: the active section is the last one whose top edge has
  // scrolled past the combined height of the header + jump nav (104px + buffer).
  // Iterating in document order means the final match is always the deepest
  // section the user has entered.
  const links = Array.from(navInner.querySelectorAll('.jump-nav-link'));
  const TRIGGER_OFFSET = 58 + 42 + 8; // header 58 + nav ~42 + small buffer

  function updateActive() {
    const scrollY = window.scrollY;
    let activeId = sections[0].id;
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      if (el.getBoundingClientRect().top + scrollY <= scrollY + TRIGGER_OFFSET) {
        activeId = s.id;
      }
    }
    links.forEach(link => link.classList.toggle('active', link.dataset.target === activeId));
  }

  let ticking = false;
  _jumpNavScrollHandler = () => {
    if (!ticking) {
      requestAnimationFrame(() => { updateActive(); ticking = false; });
      ticking = true;
    }
  };
  window.addEventListener('scroll', _jumpNavScrollHandler, { passive: true });
  updateActive(); // set correct state immediately on render
}

function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ─── Init ─────────────────────────────────────────────────────
if (intentDescriptor) intentDescriptor.textContent = INTENT_CONFIG[currentIntent].descriptor;
showEmpty();
