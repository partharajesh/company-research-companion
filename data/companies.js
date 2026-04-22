// Structured mock data for pre-built companies.
// To add a new company: duplicate a block, update all fields, add aliases below.
// To connect a live API: replace `lookupCompany()` with a fetch() call.

export const mockData = {

  // ── DigitalOcean ─────────────────────────────────────────
  digitalocean: {
    company: "DigitalOcean", ticker: "DOCN",
    sector: "Cloud Infrastructure / B2B SaaS", lastUpdated: "Q4 2025",
    strategicTakeaway: "The most credible challenger to the hyperscalers for developer and SMB workloads — winning on simplicity where AWS wins on breadth, but structurally constrained by a scale gap that makes feature parity impossible.",
    visuals: {
      accentColor: "#0069ff",
      logoUrl: "https://logo.clearbit.com/digitalocean.com",
      competitiveMap: {
        xAxisLabel: "Customer Segment", xMin: "Enterprise", xMax: "SMB / Developer",
        yAxisLabel: "Platform Approach", yMin: "Complex", yMax: "Simple",
        highlightQuadrant: "top-right", highlightLabel: "Developer-Friendly Niche",
        players: [
          { name: "AWS",          abbr: "AWS", x: 16, y: 18, category: "rival" },
          { name: "Azure",        abbr: "AZ",  x: 22, y: 26, category: "rival" },
          { name: "GCP",          abbr: "GCP", x: 30, y: 33, category: "rival" },
          { name: "IBM Cloud",    abbr: "IBM", x: 20, y: 22, category: "rival" },
          { name: "Linode",       abbr: "LN",  x: 68, y: 70, category: "rival" },
          { name: "Vultr",        abbr: "VU",  x: 72, y: 64, category: "rival" },
          { name: "Hetzner",      abbr: "HZ",  x: 65, y: 78, category: "rival" },
          { name: "DigitalOcean", abbr: "DO",  x: 87, y: 88, category: "focal" },
        ]
      },
      wtaSpectrum: {
        segments: [
          { label: "Fragmented", position: 10 }, { label: "Winner-Take-Some", position: 38 },
          { label: "Winner-Take-Most", position: 65 }, { label: "Winner-Take-All", position: 90 },
        ],
        marketPosition: 65, marketLabel: "Winner-Take-Most",
        note: "Hyperscalers dominate enterprise; differentiated niches remain viable for focused players"
      },
      ecosystemNodes: [
        { id: "fo",  label: "DigitalOcean",     type: "focal",    ring: 0 },
        { id: "c1",  label: "Developers",        type: "customer", ring: 1 },
        { id: "c2",  label: "Startups & SMBs",   type: "customer", ring: 1 },
        { id: "pr1", label: "App Marketplace",   type: "product",  ring: 1 },
        { id: "pa1", label: "Hugging Face",      type: "partner",  ring: 2 },
        { id: "pa2", label: "ISV Partners",      type: "partner",  ring: 2 },
        { id: "r1",  label: "AWS / Azure / GCP", type: "rival",    ring: 2 },
      ]
    },
    overview: "DigitalOcean is a cloud infrastructure provider that deliberately targets developers, startups, and small-to-midsize businesses (SMBs) — the segments underserved by hyperscalers like AWS, Azure, and GCP. Founded in 2011 and headquartered in New York, the company built its brand on radical simplicity: predictable pricing, clear documentation, and a developer-first experience that larger competitors sacrificed in pursuit of enterprise complexity.",
    businessModel: "Usage-based cloud infrastructure (IaaS/PaaS): compute (Droplets), managed databases, Kubernetes clusters, object storage, and AI/ML deployment products. Revenue is predominantly consumption-based with on-demand and reserved-instance pricing.",
    targetCustomers: "Developers, early-stage startups, and SMBs — DigitalOcean's own segmentation framework (Learners, Builders, Scalers) maps the customer journey from individual developers experimenting with cloud to growing companies scaling production workloads. Enterprises are largely out of scope by design.",
    positioning: "DigitalOcean competes on simplicity and developer experience, not raw feature breadth or price. While AWS offers 200+ services, DigitalOcean offers a curated set with predictable pricing — a deliberate value-curve inversion. Rivals include AWS, Azure, GCP (hyperscalers), Linode/Akamai, Vultr, and Hetzner.",
    marketLandscape: "The cloud services market is a Winner-Take-Most (not Winner-Take-All) structure: hyperscalers dominate enterprise, but differentiated niches are viable and defensible. Cloud lowers barriers to entry for the very customers DigitalOcean serves. The AI/ML infrastructure wave creates both opportunity (AI-as-a-Service demand from SMBs) and threat (hyperscalers pushing AI tooling downstream). DigitalOcean's Hugging Face partnership and 1-Click Model deployment target this directly.",
    ecosystemRole: "Infrastructure provider and developer platform — DigitalOcean sits at the base of the stack for thousands of SMB applications. It plays a complementor role to application-layer SaaS companies whose products run on its infrastructure. The Marketplace and App Platform create weak indirect network effects between developers and end-users.",
    strengths: [
      "Radical simplicity as a strategic choice — a deliberate value-curve inversion that attracts cost-sensitive, time-constrained developers",
      "Strong brand loyalty among indie developers and SMBs who feel abandoned by hyperscalers",
      "Predictable, transparent pricing reduces customer anxiety and sales friction",
      "Developer community flywheel: tutorials are among the most-visited technical documentation on the web",
      "AI/ML tailwinds: Hugging Face partnership, 1-Click Models, and GPU Droplets position DO for SMB AI demand"
    ],
    weaknesses: [
      "Scale gap is structural: AWS, Azure, GCP have 10–20x the R&D investment, making feature parity impossible",
      "Low multi-homing costs in cloud mean enterprise customers face little friction switching providers",
      "Thin margin profile relative to hyperscalers limits ability to invest in growth marketing or price wars",
      "Customer churn risk when 'Scalers' grow large enough to require hyperscaler capabilities",
      "Dependent on AWS/Azure for underlying infrastructure in some edge regions — competing with direct rivals"
    ],
    lenses: {
      general: {
        focus: "DigitalOcean's core strategic bet is that simplicity and customer segment focus are durable competitive advantages. The Growing Deep vs. Growing Wide tension is the defining challenge: serve SMBs more deeply (AI, databases, managed services) or broaden upmarket. The first path leverages its brand; the second risks identity dilution.",
        keyFrameworks: ["Value Curve Analysis", "Winner-Take-Most Dynamics", "B2B Platform: Growing Deep vs. Growing Wide", "Disruptive Innovation"],
        diligenceQuestions: [
          "Can DigitalOcean's developer-first brand survive as hyperscalers push AI tooling into the SMB tier with aggressive pricing?",
          "What is the unit economics of a 'Scaler'-tier customer, and at what GMV threshold does churn to AWS become inevitable?",
          "How durable is tutorial-driven organic acquisition as developer tooling commoditizes and AI-generated documentation reduces community differentiation?",
          "Does the Hugging Face partnership create a defensible AI moat, or is it easily replicated by a better-resourced rival?",
          "What is DigitalOcean's realistic ceiling on ARPU expansion without adding complexity that erodes its simplicity positioning?"
        ]
      },
      partnership: {
        focus: "DigitalOcean is a natural integration partner for developer tools, SaaS platforms, and AI model providers targeting SMBs. The Hugging Face partnership is a template: DigitalOcean provides infrastructure simplicity; the partner provides specialized capability. Key risk: dependency on a platform that itself depends on larger infrastructure providers.",
        strengths: [
          "API-first architecture with clean, well-documented endpoints reduces integration timelines to days — low engineering overhead for partners building on DO's infrastructure layer",
          "Developer Marketplace provides a ready-made distribution channel to 700,000+ active builders and SMB teams that would be expensive to reach through direct sales",
          "Hugging Face partnership demonstrates willingness to structure joint GTM with AI/ML partners — DO's 'simplicity for SMBs' narrative extends naturally to partners offering specialized capability",
          "Predictable, transparent pricing lets partners model and package integrations without opaque cost variables disrupting their own margin math",
          "Global SMB developer base concentrated in underserved markets (SE Asia, LatAm, Eastern Europe) that hyperscalers and larger infrastructure partners don't prioritize"
        ],
        weaknesses: [
          "Pricing and partnership leverage sits with DigitalOcean — revenue-share and Marketplace terms can shift unilaterally as its negotiating position vs. hyperscalers weakens over time",
          "Graduation churn is structural: the highest-value customers (Scalers) migrate to AWS/Azure as they grow, eroding the long-term value of any partner channel built on DO's customer base",
          "Limited enterprise reach caps partnership scope — DO's deliberate SMB focus is a ceiling for partners whose client targets include mid-market or enterprise segments",
          "Thin margin profile means DigitalOcean cannot subsidize joint GTM investment, co-marketing spend, or partner enablement at the level hyperscalers routinely offer",
          "When DigitalOcean builds native capabilities (GPU Droplets, managed databases, AI deployment), adjacent third-party integrations face displacement risk without advance notice"
        ],
        positioning: "For clients seeking SMB developer distribution, the alternatives to DigitalOcean are Vultr and Linode/Akamai — both have smaller communities and weaker Marketplace infrastructure. Hetzner is growing in Europe but lacks a structured partner ecosystem. The build-vs-partner question is clear: building a native SMB developer community from scratch is prohibitively expensive; DigitalOcean's Marketplace is the lowest-friction path to this audience. Best ecosystem node for partners: infrastructure distribution for AI/ML model providers, developer tools, and SaaS platforms serving early-stage companies — not an equal-leverage co-marketing partner.",
        market: "SMB developer demand for cloud infrastructure is growing, but Marketplace economics favor apps that enhance platform utility rather than compete with DO's own roadmap. Channel economics: listings are low-friction, but revenue-share and promotional positioning are negotiated individually. Partnership value is highest where DO's simplicity narrative extends to the partner's product — developer-facing tools that deploy faster on DO than AWS win on shared positioning. AI infrastructure tooling for SMBs is the sharpest near-term demand driver for DO partnerships.",
        ecosystem: "DigitalOcean occupies the infrastructure base of the SMB developer value chain — below application-layer SaaS, above the developer's code. This makes it a natural integration node for observability, security, DevOps tooling, and AI model serving. The Marketplace creates indirect network effects that benefit well-positioned partners: more developers discover integrated tools as the ecosystem grows. Interoperability is excellent for API-native products; limited for enterprise-grade integrations that assume VPCs, SSO, or compliance tooling DigitalOcean doesn't natively provide.",
        keyFrameworks: ["Indirect Network Effects via Marketplace", "Complement vs. Substitute positioning", "Ecosystem dependency mapping"],
        diligenceQuestions: [
          "Does DigitalOcean's API architecture support the integration depth our client needs, or does it require material custom engineering?",
          "What is the Marketplace revenue-share structure, and how have partner terms evolved as DigitalOcean's leverage vs. hyperscalers shifts?",
          "Is the SMB developer customer cohort at DigitalOcean stable enough to justify a multi-year partnership investment?",
          "What is the risk of DigitalOcean building a native version of our client's product category within the next 18 months?",
          "How does DigitalOcean's structural customer churn — Scalers graduating to AWS — affect long-term partnership channel economics?"
        ]
      },
      investment: {
        focus: "DigitalOcean is a pure-play SMB cloud infrastructure bet. Upside: underpenetrated global SMB cloud + AI demand from small developers. Downside: structural scale disadvantage vs. hyperscalers limits margin expansion; churn when companies scale up. Path to profitability depends on moving customers up the value curve and expanding ARPU via managed services and AI.",
        dealConclusion: "Attractive at the right price — the developer community is a genuine distribution asset — but the structural scale gap caps margin expansion, making this a strategic acquisition story rather than a standalone growth multiple.",
        strengths: [
          "ARR crossed $800M with 97%+ net dollar retention in the Scaler tier — the highest-value cohort is demonstrating revenue quality above headcount-light SaaS peers",
          "Managed databases, Kubernetes, and GPU Droplets expand ARPU without proportional CAC — each managed service captures more wallet share from the same developer relationship",
          "Tutorial-driven community generates tens of millions of monthly visits, compressing paid CAC to near zero for the Learner and Builder tiers — organic acquisition that accumulates across startup waves",
          "AI/ML product expansion (GenAI Solutions, 1-Click Models, GPU Droplets) addresses a high-willingness-to-pay use case for developers priced out of AWS and GCP GPU pricing",
          "Scaler-tier account management directly targets the highest-LTV cohort — a structural attempt to extend the revenue curve before graduation churn removes those customers permanently"
        ],
        weaknesses: [
          "Scale gap is a structural ceiling on margin: hyperscaler R&D-per-dollar-of-revenue will always favor AWS/Azure, compressing DO's ability to compete on compute pricing over time",
          "Graduation churn is simultaneous best and worst outcome: Scalers are the highest-ARPU cohort and also the customers most likely to migrate to AWS as their infrastructure requirements grow",
          "Revenue concentration risk: a disproportionate share of ARR comes from the Scaler tier — the same customers most at risk of platform migration",
          "Global AI capex requirements grow with demand, but DigitalOcean lacks the balance sheet to match hyperscaler GPU and AI hardware investment cycles",
          "AI tooling commoditization: if hyperscalers aggressively discount SMB-tier AI products, DO's GPU Droplet pricing advantage collapses before it can compound into a durable product category"
        ],
        positioning: "DigitalOcean's moat is real but narrow: developer brand loyalty and tutorial-driven community are durable in the short to medium term but do not generate pricing power at the Scaler tier where revenue is concentrated. The competitive durability argument rests on AWS/Azure/GCP opting for breadth rather than simplicity — they have not attempted to replicate DO's positioning. The credible erosion threat is not from hyperscalers above but from AI-native developer platforms (Railway, Fly.io, Render) building simplicity narratives in the Learner and Builder tiers — the very pipeline DigitalOcean depends on for future Scaler cohorts.",
        market: "The SMB cloud developer TAM is large but the monetizable share is constrained by willingness-to-pay: SMB customers are more price-sensitive than enterprise cloud buyers. Monetization headroom is concentrated in AI infrastructure (high-willingness-to-pay) and managed services (operational overhead reduction justifies premium pricing). The critical question: is the SMB cloud market growing fast enough to support ARR growth above the graduation churn line? Durable economics require managed services and AI ARPU expansion to outrun revenue loss as Scalers migrate upmarket.",
        ecosystem: "DigitalOcean's ecosystem defensibility is moderate: switching costs for compute are low; switching costs for managed databases, Kubernetes clusters, and API-integrated apps are meaningfully higher. The developer community (tutorials, forums, brand trust) represents a social switching cost that financial analysis consistently underestimates. For enterprise value purposes, the developer community is the most defensible and most acquisition-attractive asset — it would cost a hyperscaler or large SaaS company far more to build this audience organically than to acquire DigitalOcean outright.",
        investmentImplications: "Attractive niche infrastructure platform with loyal developer base and AI tailwinds. M&A angle: a hyperscaler or large SaaS company could acquire DO for its SMB customer base and developer community — a distribution asset that would cost more to build than to buy.",
        keyFrameworks: ["B2B Platform Economies of Scale", "ARPU expansion (Growing Deep)", "Strategic acquisition rationale: distribution, customer base, brand"],
        diligenceQuestions: [
          "What is the realistic ceiling of the SMB developer cloud TAM, and what share is structurally capturable without hyperscaler-grade capabilities?",
          "Can AI product ARPU expansion fully offset Scaler-tier churn, or does the revenue ceiling compress over time?",
          "Who are the credible strategic acquirers, and what is the acquisition rationale — SMB distribution, developer brand, or technology?",
          "What metrics over the next 4–6 quarters would confirm or falsify the 'Growing Deep' ARPU expansion thesis?",
          "At what valuation and margin profile does DigitalOcean become an attractive acquisition target vs. a standalone growth story?"
        ]
      }
    },
    partnershipImplications: "DigitalOcean is an accessible, low-friction infrastructure partner for clients targeting SMB developers. The Marketplace provides distribution; the community provides reach. Best fit for dev-tools, AI model providers, and SaaS platforms serving early-stage companies. Primary risk: DigitalOcean customers who scale will eventually migrate to hyperscalers, reducing long-term partnership value.",
    investmentImplications: "DigitalOcean trades at a discount to hyperscalers reflecting its scale limitation and churn exposure. Bull case: dominant SMB cloud brand + AI product expansion + global underpenetration. Bear case: commoditization of IaaS and hyperscaler feature creep into the SMB tier. Potential M&A target for a strategic buyer seeking SMB developer distribution.",
    recentDevelopments: [
      "2025: Launched GenAI Solutions, a managed AI deployment product for SMBs — positioning DigitalOcean as the accessible on-ramp for the SMB developer AI wave that hyperscalers are too complex to serve.",
      "Q3 2025: Hit $800M ARR; management reaffirmed 'Growing Deep' over new customer acquisition — a signal that the SMB ceiling is real and ARPU expansion from existing customers is the primary growth lever.",
      "2025: Expanded GPU Droplets capacity, becoming one of the most accessible H100 providers outside hyperscalers — a meaningful differentiator for developers priced out of AWS or GCP GPU instances.",
      "2025: Restructured go-to-market around Learners, Builders, and Scalers tiers, introducing dedicated account management for Scalers — a direct attempt to reduce churn among high-value customers most at risk of graduating to hyperscalers."
    ]
  },

  // ── Uber ─────────────────────────────────────────────────
  uber: {
    company: "Uber", ticker: "UBER",
    sector: "Marketplace / Mobility / Logistics", lastUpdated: "Q4 2025",
    strategicTakeaway: "Post-profitability and global, Uber has converted its growth-at-all-costs era into a scaled marketplace with durable ridesharing density, a subscription retention layer, and a high-margin advertising business that regional competitors cannot replicate.",
    visuals: {
      accentColor: "#000000",
      logoUrl: "https://logo.clearbit.com/uber.com",
      competitiveMap: {
        xAxisLabel: "Geographic Reach", xMin: "Local / Regional", xMax: "Global",
        yAxisLabel: "Platform Breadth", yMin: "Single Service", yMax: "Multi-Platform",
        highlightQuadrant: "top-right", highlightLabel: "Global Multi-Platform",
        players: [
          { name: "Lyft",      abbr: "LY", x: 28, y: 28, category: "rival" },
          { name: "Bolt",      abbr: "BO", x: 52, y: 30, category: "rival" },
          { name: "Grab",      abbr: "GR", x: 58, y: 68, category: "rival" },
          { name: "DoorDash",  abbr: "DD", x: 48, y: 45, category: "rival" },
          { name: "Instacart", abbr: "IC", x: 38, y: 38, category: "rival" },
          { name: "DiDi",      abbr: "DI", x: 55, y: 52, category: "rival" },
          { name: "Uber",      abbr: "UB", x: 90, y: 90, category: "focal" },
        ]
      },
      wtaSpectrum: {
        segments: [
          { label: "Fragmented", position: 10 }, { label: "Winner-Take-Some", position: 38 },
          { label: "Winner-Take-Most", position: 65 }, { label: "Winner-Take-All", position: 90 },
        ],
        marketPosition: 65, marketLabel: "Winner-Take-Most",
        note: "High supply-side multi-homing costs make ridesharing WTM; delivery is WTS due to low consumer switching friction"
      },
      ecosystemNodes: [
        { id: "fo",  label: "Uber",               type: "focal",    ring: 0 },
        { id: "c1",  label: "Riders",             type: "customer", ring: 1 },
        { id: "c2",  label: "Drivers",            type: "customer", ring: 1 },
        { id: "c3",  label: "Restaurants",        type: "customer", ring: 1 },
        { id: "pr1", label: "Uber One",           type: "product",  ring: 1 },
        { id: "pa1", label: "Enterprise Travel",  type: "partner",  ring: 2 },
        { id: "r1",  label: "Lyft / DoorDash",   type: "rival",    ring: 2 },
        { id: "pa2", label: "Waymo / Autonomy",  type: "partner",  ring: 2 },
      ]
    },
    overview: "Uber is the world's largest on-demand mobility and delivery marketplace, operating in 70+ countries. It operates two primary platform businesses — Uber (ridesharing) and Uber Eats (food and grocery delivery) — with a growing freight and logistics layer. After years of losses, Uber achieved GAAP operating profitability in 2023 and has sustained profitable growth since, driven by scale efficiencies and improved supply-side productivity.",
    businessModel: "Two-sided marketplace: Uber takes a commission (take rate) on each transaction between riders/eaters and drivers/couriers/restaurants. Revenue sources include service fees, Uber One subscription, advertising (Journey Ads), and freight. Profitability is driven by increasing trips-per-driver-hour (supply-side density) and growing high-margin revenue streams.",
    targetCustomers: "Demand side: urban consumers across income tiers (ridesharing); urban/suburban consumers with disposable income (Eats). Supply side: gig-economy workers seeking flexible income (drivers, couriers). Restaurant and grocery partners (Eats). Uber's competitive position depends on supply-demand density in each local market.",
    positioning: "Uber is the market leader in U.S. ridesharing (~70% share) and a strong #2 in U.S. food delivery behind DoorDash. Competitive advantage in ridesharing is local network density (shorter wait times, lower per-trip costs at scale). Key rivals: Lyft (ridesharing), DoorDash and Instacart (delivery), Grab and Bolt (international).",
    marketLandscape: "Ridesharing exhibits Winner-Take-Most dynamics: high multi-homing costs on the supply side, strong necessity for intermediation, moderate standardization preference. Food delivery is Winner-Take-Some: multi-homing by consumers is easy, restaurant selection differentiates platforms. Regulatory risk is structural — gig worker classification laws (AB5, EU Digital Markets Act) could materially increase Uber's cost base.",
    ecosystemRole: "Uber operates as a multi-sided marketplace and platform orchestrator. Platform synergies between ridesharing and Eats are meaningful but asymmetric: driver supply can serve both, and Uber One bundles both services to increase switching costs. Uber is also becoming an advertising platform — Journey Ads monetizes captive rider attention during trips.",
    strengths: [
      "Local density flywheel: more riders → more driver supply → shorter waits → more riders (compounding local network effect)",
      "Supply-side productivity improvement is the primary driver of profitability — more trips per driver-hour reduces per-trip unit costs",
      "Uber One subscription creates cross-platform lock-in between ridesharing and Eats, raising multi-homing costs",
      "Advertising business (Journey Ads, Eats Ads) is high-margin and growing — a monetization layer competitors cannot easily replicate",
      "Global footprint creates data advantages and operational know-how inaccessible to regional competitors"
    ],
    weaknesses: [
      "Food delivery (Eats) remains structurally less profitable — incentive misalignment between Uber and couriers is a persistent cost issue",
      "Multi-homing costs for riders are low — brand loyalty is thin and price elasticity is high",
      "Gig worker regulation (AB5-style laws) remains an existential cost risk in California, EU, and other markets",
      "Driver supply is price-sensitive and not captive — surge pricing and competitor bonuses can rapidly erode supply-side density",
      "Self-driving disruption risk: if autonomous vehicles scale (Waymo, Tesla), Uber's driver-dependent model faces structural cost disadvantage"
    ],
    lenses: {
      general: {
        focus: "Uber's strategic position is defined by local network density and growing supply-side productivity. Ridesharing is Winner-Take-Most (high necessity for intermediation, high supply-side multi-homing costs); food delivery is Winner-Take-Some (low consumer multi-homing costs). This asymmetry means Uber should invest more aggressively in ridesharing moats while managing Eats for profitability rather than share.",
        keyFrameworks: ["Winner-Take-Most vs. Winner-Take-Some", "Supply-Side Productivity (cost-per-trip)", "Platform Synergies (ridesharing + Eats)", "Local Network Effects"],
        diligenceQuestions: [
          "Is Uber's local density flywheel a durable moat, or does autonomous vehicle scale fundamentally break the supply-side economic model?",
          "At what Waymo/autonomous deployment scale does Uber's driver-dependent model face structural margin compression?",
          "How does food delivery reach profitability given persistent courier incentive misalignment and DoorDash's market leadership?",
          "How exposed is Uber to gig worker reclassification, and what is the per-trip cost impact in the most at-risk markets?",
          "Can advertising (Journey Ads) sustain high-margin growth if Lyft or DoorDash reach competitive local density?"
        ]
      },
      partnership: {
        focus: "Uber is an infrastructure partner of choice for any business that depends on last-mile logistics or rider access. Delivery API integrations, white-label ride services, and advertising partnerships are the primary modalities. The key question: does Uber's local density in your target markets make it a more effective partner than building proprietary logistics?",
        strengths: [
          "Last-mile delivery and ground transport infrastructure operational in 70+ countries — replicating this logistics density independently is prohibitively expensive and would take years to build",
          "Uber for Business and the Eats API enable white-label delivery and transport integrations without the capital expense of operating a proprietary fleet or courier network",
          "Uber One's 30M+ subscribers create a captive, cross-platform audience for partner promotions, loyalty integrations, and bundled offers unavailable through any other channel",
          "Journey Ads and Eats Ads offer captive advertising inventory with ride and meal context that brand partners cannot access at this scale anywhere else",
          "Waymo partnership demonstrates platform maturity: Uber has converted its largest long-term competitive threat into a distribution channel — a sign of strategic flexibility valuable to co-development partners"
        ],
        weaknesses: [
          "Uber holds dominant pricing leverage: take rates are set unilaterally, and partners — restaurants, corporate travel clients, delivery businesses — have limited contractual protection against rate increases",
          "Driver supply volatility creates service-level uncertainty: surge conditions and incentive changes can degrade reliability for partners dependent on guaranteed delivery or transport SLAs",
          "Multi-homing by consumers is structurally easy — partners building demand acquisition on Uber's platform must accept that the same consumers are simultaneously reachable via DoorDash, Lyft, and Bolt",
          "Regulatory exposure in core markets (gig worker classification, EU DMA) could cascade to partners via sudden cost increases or geographic service interruptions with limited advance notice",
          "Integration complexity for non-standard use cases (healthcare transport, white-label delivery, freight) requires custom API work that Uber supports inconsistently compared to its core consumer products"
        ],
        positioning: "The primary alternative for last-mile delivery is DoorDash Drive (white-label API) — competitive in the US but limited internationally. For corporate ground transport, Lyft for Business and regional platforms are viable alternatives in specific geographies. Build-vs-partner: for any company needing last-mile delivery at global scale, building a proprietary solution is economically irrational — Uber's density advantage is near-impossible to match. Uber is best positioned as an execution partner where partners bring customer relationships and demand generation; Uber brings geographic logistics execution. Best integration nodes: Eats API for food/grocery, Uber for Business for corporate, Journey Ads for brand campaigns.",
        market: "Uber's partnership economics are most favorable for partners with high-frequency transaction use cases — density value compounds with trip frequency. Eats marketplace take rate averages 25–30%; Uber for Business corporate rates are negotiable. Demand drivers most relevant to partners: return-to-office acceleration (corporate transport demand), QSR delivery growth, NEMT expansion. Partnership value is highest in markets where Uber's local density is dominant (major US metros, Western Europe); lowest where Bolt or Grab hold structural density advantages and partner pricing reflects Uber's weaker local position.",
        ecosystem: "Uber occupies the logistics execution layer between demand-side platforms (restaurants, HR teams, healthcare providers) and supply (drivers, couriers). This intermediary position makes it a natural integration node for any business generating demand for physical movement of people or goods. Complementarity is highest for QSRs needing delivery without own logistics, corporate travel managers needing ground transport management, healthcare systems needing NEMT, and CPG brands needing same-day delivery. Interoperability is reliable for API-based demand routing; less predictable for SLA-sensitive use cases requiring guaranteed supply availability.",
        keyFrameworks: ["Complement vs. Substitute", "Dependency Risk", "Channel partnership vs. build/buy decision"],
        diligenceQuestions: [
          "What take rate and contractual terms apply to the specific Uber integration being evaluated, and how stable have they been historically?",
          "Does Uber offer contractual protections against unilateral pricing changes that would affect our client's unit economics?",
          "Is our client's use case — delivery, corporate travel, or healthcare transport — a strategic priority for Uber over the next 3 years?",
          "Does Uber's supply-side density in target geographies make it a superior logistics partner compared to building a proprietary solution?",
          "How does driver supply volatility in target markets affect the service-level commitments Uber can realistically offer to partners?"
        ]
      },
      investment: {
        focus: "Uber is a post-profitability, scaled marketplace with growing high-margin revenue layers. The thesis rests on: (1) ridesharing density as a near-durable moat, (2) ad revenue as margin expansion lever, (3) Uber One as a retention mechanism. Key risks: autonomous vehicle disruption, regulatory exposure, and Eats structural profitability.",
        dealConclusion: "Compelling post-profitability, but autonomous vehicle disruption is the unpriced long-term risk — the near-term thesis holds only if ridesharing density holds and Eats reaches consistent operating leverage.",
        strengths: [
          "Ridesharing gross bookings crossed $40B+ annually with improving take rates — supply-side productivity gains (more trips per driver-hour) confirm margin expansion is structural, not cyclical",
          "Advertising (Journey Ads, Eats Ads) at $1B+ annualized run-rate is near-100% gross margin stacked on top of a marketplace that took a decade to build — the highest-quality new revenue layer in the business",
          "Uber One's 30M+ subscribers are the highest-LTV cohort: higher gross bookings, lower churn, and cross-platform Eats attachment that raises switching costs against both Lyft and DoorDash",
          "Supply-side productivity improvement compounds: each percentage point of density gains lowers per-trip unit cost, widening the margin gap vs. regional competitors who lack the scale to replicate it",
          "Waymo-on-Uber distribution deal converts the autonomous vehicle disruption scenario into a near-term revenue tailwind and a long-term option on autonomous supply margin"
        ],
        weaknesses: [
          "Eats structural profitability remains unresolved: incentive misalignment between Uber and couriers, and DoorDash's US market leadership, constrain margin expansion in the second-largest segment",
          "Gig worker reclassification laws (California AB5-style, EU DMA) represent a structural cost risk that could increase per-trip costs by 20–40% in affected markets — a risk that is growing, not shrinking, as labor regulation expands",
          "Autonomous vehicle scale is the terminal strategic risk: if Waymo or Tesla reaches AV economics below human driver cost, Uber's driver-dependent profitability model faces structural compression",
          "Rider multi-homing costs are low — brand loyalty is thin, price elasticity is high, and competitor promotions can shift demand share in local markets with limited friction",
          "Profitability concentration in US and a few Western European markets means international expansion is simultaneously the growth story and the dilution risk"
        ],
        positioning: "Uber's ridesharing moat is more durable than individual market analysis suggests: local network density compounds in a way that regional competitors structurally cannot match. The Waymo partnership is strategically smart — it converts Uber from a driver-dependent platform at risk of AV disruption into a distribution layer for AV supply, regardless of who builds the vehicles. The most credible long-term risk: Waymo or Tesla builds a consumer-facing ride-hailing app and bypasses Uber's distribution entirely, converting Uber's density moat from an asset into a liability.",
        market: "The global mobility TAM is enormous, but the monetizable portion is constrained by local market structure. Ridesharing exhibits genuine Winner-Take-Most dynamics — market share in each metro is a compounding asset that generates increasing returns on supply-side investment. Monetization headroom is clearest in advertising (high-margin, underpenetrated against captive rider attention) and Uber One (cross-platform bundling that raises switching costs). Durable economics in food delivery remain contested — structural profitability of third-party delivery platforms has not been proven across a full cycle.",
        ecosystem: "Uber's ecosystem is most defensible on the supply side: driver ratings, earnings history, and platform expertise on Uber create implicit switching costs for drivers who have built reputation capital. Consumer-side switching costs are low, making Uber One the primary mechanism for raising them. Enterprise value contribution: ridesharing density network is the highest-quality asset; advertising business is the highest-margin growth vector; Uber One is the retention infrastructure. The combination creates a more defensible enterprise value profile than any single element in isolation.",
        investmentImplications: "Core question: can Uber maintain ridesharing market share while growing Eats profitably and scaling the ad business? M&A likely focused on international market consolidation and logistics adjacencies. Autonomous vehicles are the long-term strategic wildcard — any scenario analysis must model Waymo-style scale on Uber's cost structure.",
        keyFrameworks: ["Unit economics (cost-per-trip, take rate)", "Platform synergy value", "Autonomous vehicle strategic risk", "Advertising as margin expansion"],
        diligenceQuestions: [
          "What is the sustainable take rate trajectory in ridesharing as Waymo-on-Uber scales and autonomous supply enters the marketplace?",
          "Can Uber One subscription penetration continue growing, and what is the ARPU differential between subscribers and non-subscribers?",
          "What are the regulatory scenarios — AB5 expansion, EU Digital Markets Act — that most materially affect Uber's unit economics?",
          "How much of Uber's advertising revenue is defensible if a competitor reaches comparable local density in top markets?",
          "What is the autonomous vehicle strategic scenario tree: does Uber own the distribution layer, or does Waymo/Tesla bypass it entirely?"
        ]
      }
    },
    partnershipImplications: "Uber is a high-leverage logistics and distribution partner for clients in food, grocery, healthcare transport, and corporate mobility. The Uber for Business product and Eats API enable white-label integrations. Primary partnership risks: take rate volatility, lack of exclusivity, and regulatory exposure in key markets.",
    investmentImplications: "Uber has transitioned from growth-at-all-costs to a profitable marketplace with structural moats in ridesharing. Key value drivers: ridesharing density, ad revenue ramp, and Uber One subscription penetration. Key risks: autonomous vehicle disruption, gig worker classification costs, and DoorDash competition in Eats.",
    recentDevelopments: [
      "2025: Waymo partnership expanded to Austin and Atlanta, with Waymo vehicles bookable via the Uber app — converting Uber's most feared long-term threat (autonomous vehicles) into a distribution channel, a significant strategic repositioning.",
      "Q3 2025: Advertising revenue crossed $1B annualised run-rate — confirming Journey Ads and Eats Ads as Uber's highest-margin growth segment, one that local competitors cannot replicate without Uber's scale and captive rider attention.",
      "2025: Uber One surpassed 30M subscribers globally — reducing rider churn and driving cross-platform Eats attachment, strengthening the bundled value proposition against Lyft and DoorDash.",
      "2025: Uber for Business grew 40% YoY as return-to-office normalised enterprise ground transport — a growing revenue stream with higher contract predictability and lower price sensitivity than consumer ride-sharing."
    ]
  },

  // ── LinkedIn ──────────────────────────────────────────────
  linkedin: {
    company: "LinkedIn", ticker: "MSFT (subsidiary)",
    sector: "Professional Network / B2B SaaS", lastUpdated: "Q4 2025",
    strategicTakeaway: "The closest thing to a monopoly in professional networking — LinkedIn's 1.2B-member career graph and recruiter switching costs have remained durable against a decade of challengers.",
    visuals: {
      accentColor: "#0a66c2",
      logoUrl: "https://logo.clearbit.com/linkedin.com",
      competitiveMap: {
        xAxisLabel: "Audience Profile", xMin: "Consumer / General", xMax: "Professional / B2B",
        yAxisLabel: "Revenue Approach", yMin: "Ad-Supported / Free", yMax: "Subscription / B2B Revenue",
        highlightQuadrant: "top-right", highlightLabel: "Professional Monetization",
        players: [
          { name: "Facebook/Meta",  abbr: "FB", x: 18, y: 22, category: "rival" },
          { name: "Twitter/X",      abbr: "X",  x: 30, y: 28, category: "rival" },
          { name: "Threads",        abbr: "TH", x: 22, y: 18, category: "rival" },
          { name: "Indeed",         abbr: "IN", x: 68, y: 50, category: "rival" },
          { name: "ZipRecruiter",   abbr: "ZR", x: 62, y: 48, category: "rival" },
          { name: "Doximity",       abbr: "DX", x: 88, y: 72, category: "rival" },
          { name: "Handshake",      abbr: "HS", x: 78, y: 52, category: "rival" },
          { name: "LinkedIn",       abbr: "LI", x: 93, y: 90, category: "focal" },
        ]
      },
      wtaSpectrum: {
        segments: [
          { label: "Fragmented", position: 10 }, { label: "Winner-Take-Some", position: 38 },
          { label: "Winner-Take-Most", position: 65 }, { label: "Winner-Take-All", position: 90 },
        ],
        marketPosition: 88, marketLabel: "Winner-Take-All",
        note: "Near-monopoly in professional networking — 1.2B member data moat and recruiter switching costs that rivals cannot easily displace"
      },
      revenueBreakdown: [
        { label: "Talent Solutions",      pct: 44, color: "#0a66c2" },
        { label: "Advertising",           pct: 31, color: "#378fe9" },
        { label: "Premium Subscriptions", pct: 13, color: "#70b5f9" },
        { label: "Learning Solutions",    pct:  6, color: "#b0d4fb" },
        { label: "Other",                 pct:  6, color: "#e0eefd" },
      ],
      ecosystemNodes: [
        { id: "fo",  label: "LinkedIn",           type: "focal",    ring: 0 },
        { id: "c1",  label: "Members (1.2B)",     type: "customer", ring: 1 },
        { id: "c2",  label: "Recruiters",         type: "customer", ring: 1 },
        { id: "c3",  label: "Advertisers",        type: "customer", ring: 1 },
        { id: "pr1", label: "LinkedIn Learning",  type: "product",  ring: 1 },
        { id: "pa1", label: "Microsoft 365",      type: "partner",  ring: 2 },
        { id: "r1",  label: "Indeed / ZipRec.",   type: "rival",    ring: 2 },
        { id: "pa2", label: "OpenAI Jobs (2026)", type: "rival",    ring: 2 },
      ]
    },
    overview: "LinkedIn is the world's dominant professional networking platform, with 1.2 billion members globally (2026). Originally a professional résumé-and-connection site, LinkedIn has evolved into a three-sided platform serving members, recruiters, and advertisers — and more recently a learning platform. Acquired by Microsoft in 2016 for $26.2 billion, LinkedIn operates as an independent entity within Microsoft's commercial cloud ecosystem.",
    businessModel: "Multi-sided platform with four revenue streams: Talent Solutions (recruiter subscriptions and job postings, ~44%), Advertising (~31%), Premium Subscriptions (~13%), and Learning Solutions (~6%). The platform monetizes the 'needier side' — recruiters and advertisers pay; most members access core services free.",
    targetCustomers: "Three primary sides: (1) Members — 1.2B professionals seeking career advancement; (2) Recruiters — corporate HR teams and independent recruiters using Talent Solutions to source passive candidates; (3) Advertisers — B2B marketers seeking professional audience targeting. LinkedIn Learning adds content creators as a fourth side.",
    positioning: "LinkedIn holds a near-monopoly in professional networking. Its moat is 'Network Cover': the platform's ambiguous purpose (professional networking ≠ actively job hunting) allows passive job seekers to maintain profiles without signaling intent, giving recruiters access to talent they cannot reach elsewhere. Niche rivals (Doximity for physicians, Handshake for students) target specific segments.",
    marketLandscape: "The global staffing market is ~$665B. The key threat is platform envelopment: Meta (Threads, Facebook Jobs) and TikTok have user scale far exceeding LinkedIn's, making envelopment theoretically possible. OpenAI's announced AI-powered jobs platform (expected 2026) is the most credible new threat, targeting LinkedIn's core Talent Solutions business.",
    ecosystemRole: "LinkedIn is the professional identity layer of the internet — an ecosystem orchestrator for the professional world. For Microsoft, LinkedIn is the 'professional network' complement to Microsoft 365's 'professional cloud', creating a combined identity-productivity-hiring graph. LinkedIn Learning adds content creators and L&D teams as new platform sides.",
    strengths: [
      "Network Cover is a durable structural advantage — recruiters pay a premium to access passive talent that will never post on Indeed",
      "1.2 billion member network creates a data moat that would take decades to replicate — career graphs, skills data, company graphs",
      "Microsoft integration creates synergies: LinkedIn data enriches Microsoft 365 productivity tools, Copilot, and Dynamics CRM",
      "Recruiter switching costs are very high — LinkedIn Talent Solutions is the 'Bloomberg terminal of recruiting'",
      "Multi-sided revenue diversification insulates LinkedIn from any single revenue stream disruption"
    ],
    weaknesses: [
      "Platform norms and role ambiguity: identity as both a professional network and a content feed creates governance challenges",
      "Content quality degradation: post growth of 41% (2021–2023) has diluted professional signal — the feed increasingly resembles Facebook",
      "LinkedIn Learning faces credible competition from Coursera, Udemy, and internal enterprise L&D platforms",
      "OpenAI's jobs platform could disintermediate Talent Solutions if AI-based matching outperforms keyword/connection-based search",
      "Over-reliance on Talent Solutions (~44% of revenue) creates concentration risk in a hiring downturn"
    ],
    lenses: {
      general: {
        focus: "LinkedIn's strategic position is best understood through multi-sided platform monetization: subsidize the side that supplies value (members, free access) and charge the side that demands it (recruiters, at premium). The platform expansion question — whether LinkedIn Learning strengthens or weakens the core recruiter-member network effect — is the defining strategic challenge.",
        keyFrameworks: ["Multi-sided Platform Monetization (charge the 'needier side')", "Network Cover as value proposition", "Platform Scope Expansion Framework", "Envelopment threat analysis"],
        diligenceQuestions: [
          "How durable is Network Cover if AI-native recruiting tools enable quality matching without requiring passive candidate access?",
          "What is the realistic timeline and revenue impact of OpenAI's announced jobs platform, and which Talent Solutions segment is most exposed?",
          "How does LinkedIn balance content volume growth — which drives engagement — with professional signal quality — which drives recruiter willingness to pay?",
          "Is LinkedIn Learning a flywheel-strengthening adjacency, or does it dilute the recruiter-member moat by shifting platform identity toward content?",
          "What is the revenue impact if EU DMA-style forced API access requirements apply to LinkedIn's recruiter data across other jurisdictions?"
        ]
      },
      partnership: {
        focus: "LinkedIn is the most valuable B2B distribution platform available for reaching professional decision-makers. For clients in HR tech, sales enablement, professional development, or B2B SaaS, LinkedIn offers both an advertising channel and a potential API/integration partnership. The Microsoft integration creates co-selling opportunities via Dynamics 365, Teams, and Microsoft 365.",
        strengths: [
          "Unmatched access to 1.2B verified professional profiles — the only platform where job title, company, seniority, skills, and career trajectory are self-curated, accurate, and usable for B2B targeting",
          "Talent Solutions API integrations make LinkedIn the de facto identity layer for ATS, HRIS, and recruitment marketing platforms — deep integration partners become stickier to mutual enterprise customers",
          "Microsoft commercial cloud co-selling creates joint GTM access via Teams, Dynamics 365, and Microsoft 365 — a distribution channel available only to Microsoft-ecosystem-aligned enterprise partners",
          "LinkedIn Learning content partnerships reach L&D buyers at enterprise accounts — a channel that complements professional certification, upskilling, and compliance training adjacent products",
          "B2B advertising audience is the most precisely targetable professional audience in digital media — job function, seniority, company size, and technology stack targeting outperforms any substitute for enterprise pipeline generation"
        ],
        weaknesses: [
          "LinkedIn controls the identity graph and can change API access terms, rate limits, and partnership tiers unilaterally — documented history of tightening data access restricts integration depth available to third parties",
          "Asymmetric leverage: for most ATS and HR tech partners, LinkedIn integration is non-negotiable; LinkedIn can renegotiate at renewal without competitive pressure because partners cannot walk away",
          "Microsoft alignment creates a dual-use risk — partners that compete with any Microsoft product (Dynamics, Teams, Viva, GitHub) may find co-selling support quietly withdrawn or API access deprioritized",
          "'Sherlocking' risk is documented: LinkedIn has built native versions of successful third-party tools (Career Pages, Skills Assessments, Learning) — partners in adjacent categories must assume eventual displacement risk",
          "Advertiser dependency on LinkedIn's first-party data creates measurement opacity — attribution is LinkedIn-owned, making independent ROI verification difficult for advertising-dependent partnership models"
        ],
        positioning: "For professional identity and passive candidate access, there is no credible substitute — LinkedIn's Network Cover moat means the passive talent pool exists only on LinkedIn. For advertising, Indeed and ZipRecruiter serve active job seekers but cannot replicate seniority/function targeting. Build-vs-partner: building a professional network from scratch is economically impossible; API or Talent Solutions access is the only path. Best ecosystem nodes: ATS/HRIS integration layer (deepest switching costs, highest co-retention), LinkedIn Ads for demand generation (highest B2B ROI per dollar), Learning content for L&D adjacencies.",
        market: "LinkedIn's advertising CPMs are 3–5x Facebook for equivalent B2B audiences — channel economics favor partners whose customer LTV is high enough to support premium pricing. Demand drivers: hiring market recovery accelerates Talent Solutions partner volume; B2B SaaS growth sustains advertising partner ROI; enterprise digital transformation expands Microsoft co-selling opportunity. Partnership value is highest where professional credential verification and passive candidate access meaningfully differentiate the partner's product from lower-cost alternatives built on general consumer data.",
        ecosystem: "LinkedIn is the professional identity and career infrastructure layer — it sits at the intersection of who you are professionally, your professional network, and the transactions that flow from both (talent acquisition, advertising, sales). Complementarity is highest for ATS/HRIS (identity + sourcing), B2B SaaS (advertising + data enrichment), enterprise L&D (Learning content + skills data), and CRM/sales enablement (company and contact graph enrichment via Sales Navigator). The Microsoft commercial ecosystem is the most consequential partnership dimension: alignment with Teams, Viva, and Copilot grants access to a co-selling motion that LinkedIn alone cannot provide.",
        keyFrameworks: ["Ecosystem dependency and API risk", "Microsoft commercial cloud co-selling", "Indirect network effects (content creators + members + recruiters)"],
        diligenceQuestions: [
          "What LinkedIn API access is available for our client's use case, and how have access terms and rate limits changed over the past 24 months?",
          "Is Microsoft's co-selling motion via Dynamics 365 and Teams a realistic channel for our client, or primarily accessible to Microsoft-aligned enterprise partners?",
          "What is the risk that LinkedIn builds a native version of our client's product category, given its history with Learning and Recruiter tools?",
          "How does LinkedIn's own data policy affect targeting precision and measurement for advertising-dependent partnership models?",
          "What are the certification requirements and lead times for an ATS/HRIS integration partnership with LinkedIn Talent Solutions?"
        ]
      },
      investment: {
        focus: "LinkedIn is a cash-generating, high-margin business within Microsoft's commercial segment. The thesis rests on: (1) Talent Solutions growth in a recovering hiring market, (2) LinkedIn Learning ARPU expansion in enterprise L&D, (3) AI-enhanced recruiter products justifying premium pricing. Key risk: AI-native recruiting tools disrupting Talent Solutions.",
        dealConclusion: "Near-monopoly professional network with durable margin dynamics — a high-conviction compounder, not a catalyst story; the key variable is whether AI-native recruiting tools erode Talent Solutions pricing power faster than LinkedIn's own AI roadmap can respond.",
        strengths: [
          "Talent Solutions contracts are enterprise SaaS with annual or multi-year terms — revenue quality is recurring, predictable, and tied to HR budget cycles that are resilient at the enterprise tier across most macro conditions",
          "Recruiter switching costs are exceptionally high: LinkedIn Recruiter is the operating system for corporate talent acquisition — HRIS integrations, ATS workflows, and recruiter expertise lock enterprise customers in across renewal cycles",
          "The 1.2B member career graph compounds with every job change, skill endorsement, and connection — the professional data moat appreciates over time, creating a data asset that becomes more valuable as it ages",
          "Microsoft integration creates ARPU expansion through Viva, Copilot, and Dynamics touchpoints — LinkedIn's professional data enriches Microsoft products in ways that justify enterprise seat expansion beyond core LinkedIn use cases",
          "Multi-sided revenue diversification provides structural resilience: advertising supplements Talent Solutions in hiring slowdowns; Learning grows with enterprise upskilling budgets that are often counter-cyclical to headcount freezes"
        ],
        weaknesses: [
          "Talent Solutions (~44% of revenue) is structurally cyclical: hiring freezes can compress LinkedIn's largest segment faster than network effects can offset — a sustained recession is the single most damaging near-term scenario",
          "OpenAI's announced AI-native jobs platform is the most credible Talent Solutions disruption risk in a decade — quality AI matching could reduce the premium recruiters pay for passive candidate access by disintermediating the identity moat",
          "Content quality degradation is a slow-burn risk: as post volume grows, professional signal quality that makes LinkedIn valuable to advertisers and recruiters decays — engagement growth and professional utility are structurally in tension",
          "EU Digital Markets Act API access requirements could force LinkedIn to provide professional profile data to competing platforms — a regulatory disintermediation risk that would structurally erode the member data moat over time",
          "Concentration inside MSFT reporting obscures unit economics: LinkedIn's true margin profile, capital allocation, and segment-level growth rates are not independently disclosed, limiting precision in standalone valuation models"
        ],
        positioning: "LinkedIn's Network Cover moat is the most durable competitive advantage in professional networking — passive candidate access requires the ambient professional network that only LinkedIn has built over 20 years. Credible competitive erosion scenarios: (1) AI-native matching (OpenAI jobs platform) reduces the value of passive access; (2) vertical networks capture high-value segments (Doximity for physicians, Handshake for students); (3) Microsoft's AI ambitions extend LinkedIn's recruiter tooling in ways that entrench dependence further. Long-term defensibility is strongest in Talent Solutions; weakest in advertising, where Meta and TikTok have structural attention-scale advantages.",
        market: "The global talent acquisition market is $665B+ — LinkedIn captures a small but high-margin share through the recruiter subscription model. Monetization headroom is concentrated in three areas: AI-enhanced recruiter products (premium tier above current Talent Solutions SKUs), international market penetration (LinkedIn's US revenue share far exceeds its non-English-speaking market penetration), and enterprise L&D expansion (upskilling budgets are growing faster than traditional HR budgets in the post-pandemic enterprise). Durable economics hinge on whether Talent Solutions pricing power holds against AI-native substitutes — the single most important variable in the 5-year thesis.",
        ecosystem: "LinkedIn's ecosystem is among the most defensible in B2B technology: recruiter workflows, ATS integrations, and company pages create multi-year switching costs at the enterprise level. Microsoft commercial cloud embeds LinkedIn data into daily workflows — Viva, Copilot, Teams — in a way that would require system-wide migration to exit. Standalone enterprise value: LinkedIn's professional identity graph is a unique asset that Microsoft cannot replicate organically. An independent LinkedIn would rank among the 20 most valuable public companies globally, reflecting the structural scarcity of a 20-year professional network with genuine Winner-Take-All dynamics.",
        investmentImplications: "LinkedIn is best evaluated as a segment of Microsoft. An independent spinout would command a premium as a near-monopoly professional networking platform. Most important investment question: how AI-native recruiting tools affect the long-term growth rate of Talent Solutions — the highest-margin revenue segment.",
        keyFrameworks: ["Multi-sided platform revenue diversification", "Switching cost analysis by revenue segment", "AI disruption risk to Talent Solutions", "Strategic value within Microsoft commercial cloud"],
        diligenceQuestions: [
          "What is the Talent Solutions revenue trajectory in a sustained hiring downturn, and what operating leverage does LinkedIn have to protect segment margin?",
          "How does potential loss of the Google Search default deal affect LinkedIn's Services revenue, and is there a credible Microsoft-internal offset?",
          "Can LinkedIn Learning sustain growth against Coursera, Udemy, and enterprise L&D platforms with lower switching costs and modular pricing?",
          "What is the incremental margin profile of AI-enhanced recruiter products, and do they justify a premium pricing layer vs. existing Talent Solutions SKUs?",
          "How would an independently valued LinkedIn trade relative to its contribution to Microsoft's commercial cloud segment?"
        ]
      }
    },
    partnershipImplications: "LinkedIn is one of the most powerful B2B distribution and data assets available. For clients in professional services, HR tech, or B2B SaaS, LinkedIn advertising and API partnerships offer unmatched professional audience targeting. Risk: dependency on LinkedIn's API terms and the platform's incentive to compete with adjacent products.",
    investmentImplications: "As part of Microsoft, LinkedIn contributes ~$17B annually to commercial cloud revenue. Standalone, it would be valued as a near-monopoly professional networking platform. The most important investment question is how AI-native recruiting tools affect the long-term growth rate of Talent Solutions.",
    recentDevelopments: [
      "2025: LinkedIn data embedded natively into Microsoft 365 Copilot, Outlook, and Teams — deepening the Microsoft commercial flywheel and raising switching costs for enterprise users who now access LinkedIn insights inside their daily workflows.",
      "2025: AI-assisted job matching and InMail drafting launched for Premium subscribers — lifting ARPU and conversion rates, signalling LinkedIn's strategy to justify premium pricing through AI productivity gains rather than pure network access.",
      "2025: OpenAI announced an AI-native jobs platform for 2026 — the most credible new competitive threat to Talent Solutions in a decade, targeting the highest-margin segment of LinkedIn's revenue base.",
      "Q3 2025: Content moderation challenges escalated as post volume hit record highs — advertiser concerns about feed quality emerged as a CPM risk, highlighting the tension between engagement growth and professional signal quality."
    ]
  },

  // ── Stripe ────────────────────────────────────────────────
  stripe: {
    company: "Stripe", ticker: "Private",
    sector: "Payments Infrastructure / FinTech", lastUpdated: "Q4 2025",
    strategicTakeaway: "Developer loyalty has compounded into deep ecosystem lock-in across 195 countries, making Stripe the default payments infrastructure for internet businesses — with a pending IPO that will test whether that loyalty translates to durable enterprise margins.",
    visuals: {
      accentColor: "#635bff",
      logoUrl: "https://logo.clearbit.com/stripe.com",
      competitiveMap: {
        xAxisLabel: "Customer Segment", xMin: "Enterprise / Bank-Led", xMax: "Developer / SMB",
        yAxisLabel: "Platform Openness", yMin: "Closed / Proprietary", yMax: "Open / API-First",
        highlightQuadrant: "top-right", highlightLabel: "Developer-First Payments",
        players: [
          { name: "PayPal",       abbr: "PP", x: 40, y: 35, category: "rival" },
          { name: "Adyen",        abbr: "AD", x: 25, y: 45, category: "rival" },
          { name: "Square/Block", abbr: "SQ", x: 58, y: 50, category: "rival" },
          { name: "Braintree",    abbr: "BT", x: 38, y: 42, category: "rival" },
          { name: "Worldpay",     abbr: "WP", x: 20, y: 25, category: "rival" },
          { name: "Checkout.com", abbr: "CK", x: 30, y: 52, category: "rival" },
          { name: "Stripe",       abbr: "ST", x: 85, y: 88, category: "focal" },
        ]
      },
      wtaSpectrum: {
        segments: [
          { label: "Fragmented", position: 10 }, { label: "Winner-Take-Some", position: 38 },
          { label: "Winner-Take-Most", position: 65 }, { label: "Winner-Take-All", position: 90 },
        ],
        marketPosition: 65, marketLabel: "Winner-Take-Most",
        note: "High developer switching costs and ecosystem lock-in; enterprise payments remain fragmented by geography and vertical"
      },
      ecosystemNodes: [
        { id: "fo",  label: "Stripe",            type: "focal",    ring: 0 },
        { id: "c1",  label: "Developers / SaaS", type: "customer", ring: 1 },
        { id: "c2",  label: "Merchants",         type: "customer", ring: 1 },
        { id: "pr1", label: "Stripe Connect",    type: "product",  ring: 1 },
        { id: "pr2", label: "Stripe Atlas",      type: "product",  ring: 1 },
        { id: "pa1", label: "Visa / Mastercard", type: "partner",  ring: 2 },
        { id: "r1",  label: "PayPal / Adyen",    type: "rival",    ring: 2 },
        { id: "pa2", label: "Banking Partners",  type: "partner",  ring: 2 },
      ]
    },
    overview: "Stripe is the world's leading developer-first payments infrastructure company, processing hundreds of billions in transactions annually for millions of businesses across 195 countries. Founded in 2010 by Patrick and John Collison, Stripe transformed online payments from a complex integration problem into a simple API call — and has since expanded into a full-stack financial services platform for internet businesses.",
    businessModel: "Transaction fee-based: Stripe earns a percentage of every payment processed (2.9% + $0.30 standard; negotiated rates for enterprise). Revenue also comes from premium products: Stripe Billing (subscriptions), Stripe Connect (marketplace payouts), Stripe Radar (fraud), and Stripe Capital (lending).",
    targetCustomers: "Primarily developers and technical founders at startups and internet businesses who need fast, reliable payment integration. Enterprise segment growing rapidly (Shopify, Amazon, Google pay via Stripe). Two-sided: merchants pay fees; end-customers use the checkout experience.",
    positioning: "Stripe competes on developer experience, API reliability, and ecosystem breadth. Its core moat is developer loyalty: engineers who learn Stripe carry the preference to every new company they join. Adyen is the most credible rival in large enterprise; Square targets smaller merchants and in-person retail.",
    marketLandscape: "The global payments market processes $10T+ annually but is highly fragmented by geography, vertical, and customer size. Online payments exhibit Winner-Take-Most dynamics: high developer multi-homing costs, strong standardization preference, and strong necessity for intermediation. Stripe's biggest structural risk is bank and card network disintermediation as real-time payment rails (FedNow, open banking) mature.",
    ecosystemRole: "Stripe is a payment infrastructure platform — a foundational layer that thousands of SaaS products and marketplaces depend on. Stripe Connect has created a massive ecosystem of marketplace platforms built on Stripe's payout infrastructure. The company increasingly acts as a financial services layer (Atlas for incorporation, Capital for lending, Treasury for banking) on top of its payment rails.",
    strengths: [
      "Developer loyalty flywheel: engineers who learn Stripe advocate for it at every new company — organic, recurring acquisition that compounds with every startup wave",
      "API quality and documentation are the industry gold standard — the benchmark that all competitors are measured against",
      "Ecosystem lock-in through Stripe Connect: marketplace businesses built on Stripe's payout infrastructure face very high switching costs",
      "Global infrastructure across 195 countries, local payment methods, and multi-currency support — near-impossible to replicate cheaply",
      "Expanding product surface (Billing, Radar, Capital, Atlas) increases ARPU and switching costs across the customer lifecycle"
    ],
    weaknesses: [
      "Pricing premium vs. regional processors — enterprise customers with scale can negotiate better rates with Adyen or in-house solutions",
      "Private company status limits visibility into unit economics and may constrain large enterprise trust and due diligence",
      "Geographic expansion is expensive and slow — local payment method integration requires regulatory and banking relationships in every market",
      "Increasing competitive pressure from banks and card networks building developer-friendly APIs to disintermediate processors",
      "Revenue concentration: a disproportionate share comes from a small number of very large internet businesses (Shopify, Amazon)"
    ],
    lenses: {
      general: {
        focus: "Stripe's strategic position is defined by developer ecosystem lock-in and API-first platform expansion. The core question is whether Stripe can maintain developer preference as it moves upmarket to enterprise (where Adyen is entrenched) and as banks/networks build their own developer-friendly rails. The 'Growing Deep' path (Capital, Treasury, Atlas) deepens financial services for existing customers vs. 'Growing Wide' through geographic expansion.",
        keyFrameworks: ["Developer Ecosystem Lock-in", "Platform Scope Expansion (financial services layer)", "Winner-Take-Most Dynamics", "Disruption from below (Stripe disrupted incumbent processors)"],
        diligenceQuestions: [
          "How durable is developer loyalty as a moat if large banks and card networks build credible, developer-friendly API layers?",
          "What is Stripe's realistic path to enterprise margin — can it maintain take rates while negotiating volume pricing with Shopify- and Amazon-scale customers?",
          "How does the maturation of real-time payment rails (FedNow, open banking) affect Stripe's long-term take rate on card-based transactions?",
          "Is Stripe's financial services expansion (Capital, Treasury, Atlas) a defensible moat extension or an overextension into heavily regulated territory?",
          "What is the strategic threat from Adyen in the enterprise segment Stripe is targeting — and what is Stripe's differentiated enterprise value proposition?"
        ]
      },
      partnership: {
        focus: "Stripe is the default payment integration for any SaaS, marketplace, or platform business. Stripe Connect makes it the natural infrastructure for businesses with complex payout flows. Key consideration: Stripe is increasingly a competitor in financial services verticals it also enables — evaluate dependency risk if your client operates adjacent to Stripe Capital, Treasury, or Atlas.",
        strengths: [
          "API quality is the industry benchmark — Stripe integration timelines are measured in days, reducing engineering opportunity cost for partners building payment-dependent products at any scale",
          "Stripe Connect's marketplace payout infrastructure is the fastest path to multi-sided payment flows — pre-built compliance and banking relationships remove years of regulatory overhead for marketplace-model partners",
          "195-country coverage with local payment method support means Stripe partnerships scale geographically without requiring per-market infrastructure investment or banking relationship management",
          "Developer community loyalty creates organic co-promotion: Stripe integrations are shared and recommended within developer communities, extending partner brand equity to Stripe's own network",
          "Radar fraud detection and compliance tooling (KYC, AML, tax) reduce financial compliance overhead for partners, removing a major barrier to launching in regulated payment-dependent categories"
        ],
        weaknesses: [
          "Stripe is increasingly a competitor in financial services categories it also enables — Capital, Treasury, and Atlas create conflict zones where Stripe's partnership and competition interests are difficult to disentangle",
          "Enterprise pricing is opaque: large-volume partners can negotiate custom rates, but the process is relationship-dependent and terms are non-disclosed, creating uncertainty for partnerships built on margin assumptions",
          "Revenue concentration cuts both ways: Stripe's dependency on a small number of very large customers (Shopify, Amazon) means the terms it offers smaller partners optimize for leverage rather than partner-friendly economics",
          "API versioning and backward compatibility have historically required partner engineering maintenance during major Stripe releases — integration upkeep is an ongoing cost that compounds over multi-year partnerships",
          "Regulatory liability clarity is imperfect under complex Connect structures: compliance responsibility allocation between Stripe and partners can be ambiguous, creating residual regulatory risk for fintech-adjacent products"
        ],
        positioning: "For developer-first payments, the alternatives are Adyen (stronger in large enterprise, less developer-friendly), Braintree/PayPal (solid but lower documentation quality), and Square (strong in in-person retail). For marketplaces and platforms, Stripe Connect has no direct substitute at comparable quality and global coverage. Build-vs-partner: building proprietary payment rails requires banking licenses, card network agreements, and compliance infrastructure that takes years — Stripe is unambiguously faster and cheaper below hyperscaler scale. Best ecosystem node: payment infrastructure for internet businesses; payout routing for marketplace platforms; global expansion infrastructure for SaaS going cross-border.",
        market: "Stripe's standard rate (2.9% + $0.30) creates a known cost structure; at meaningful scale, custom rates are negotiable. Connect charges per-transaction plus a platform fee that compounds against GMV growth. Demand drivers: e-commerce growth, SaaS billing complexity, global expansion pressure, and fintech infrastructure buildout are sustained tailwinds. Partnership value is highest where Stripe's compliance capabilities and global coverage solve problems that would otherwise require multi-year independent investment — typically cross-border expansion and marketplace payout complexity.",
        ecosystem: "Stripe is foundational infrastructure — it sits below every payment-dependent product in the internet business value chain. Complementarity is universal among software products that handle money: e-commerce, SaaS billing, marketplace payouts, lending origination, and subscription management all have native Stripe integration pathways. Interoperability is excellent; API versioning is stable enough that integrations survive multi-year product cycles. Value-chain role: Stripe is the payments clearing layer connecting internet businesses to card networks, banks, and local payment methods — a position with significant structural leverage over every business that depends on it.",
        keyFrameworks: ["Complement vs. Substitute Risk", "API Dependency Mapping", "Ecosystem lock-in via Connect"],
        diligenceQuestions: [
          "Which Stripe products — Connect, Billing, Radar — are core to our client's use case, and what is the switching cost profile for each?",
          "Is Stripe building capabilities adjacent to our client's category (Capital, Treasury, Atlas) that could convert the partnership into a competitive conflict?",
          "What is the process for negotiating custom pricing at our client's transaction volume, and how transparent is Stripe's enterprise rate card?",
          "How has Stripe's API versioning and backward compatibility track record affected partners during major platform migrations?",
          "Who holds regulatory and compliance liability for payment processing failures under our client's specific Stripe integration structure?"
        ]
      },
      investment: {
        focus: "Stripe is one of the highest-valued private technology companies. The thesis centers on continued capture of growing internet economy payment volume, expansion into financial services adjacencies, and enterprise market penetration. Key risk: margin compression as enterprise scale requires custom pricing, and disintermediation threat from real-time payment rails.",
        dealConclusion: "Strategically attractive ahead of IPO, but valuation discipline is essential — enterprise margin expansion and real-time rail displacement are the two gating issues that determine whether this is a platform compounder or a premium-priced payment processor.",
        strengths: [
          "Transaction volume grows with the internet economy: every new SaaS company, marketplace, or D2C brand that launches on Stripe adds incremental TPV with near-zero marginal CAC — organic acquisition that compounds across startup waves",
          "Expanding product suite (Billing, Connect, Radar, Capital, Treasury, Atlas) increases ARPU per customer systematically — each product layer adds revenue without requiring a new customer acquisition event",
          "Developer ecosystem lock-in is self-reinforcing: engineers who learn Stripe carry the preference to every new company they join, creating a durable organic acquisition channel that accumulates across cohorts and years",
          "Global infrastructure moat across 195 countries with local payment methods is capital-intensive and would take any competitor years and billions to replicate — a genuine barrier to entry at Stripe's scale and coverage depth",
          "EBITDA profitability confirmed at $10B+ ARR — the financial services expansion thesis is generating revenue without requiring a pre-revenue infrastructure buildout, validating the multi-product ARPU model"
        ],
        weaknesses: [
          "Enterprise take rate compression is structural: as transaction volumes grow, large customers negotiate rates that compress the effective take rate — the same customers driving TPV growth are simultaneously reducing per-dollar revenue",
          "Revenue concentration: disproportionate TPV share from a small number of very large customers (Shopify, Amazon, DoorDash) means a single re-platforming decision could materially reduce reported revenue",
          "Real-time payment rail maturation (FedNow, EU SEPA Instant, open banking) creates a long-term structural threat to card-based transaction volume — displacement to near-zero interchange rails would compress revenue per dollar processed",
          "IPO valuation discipline is required: last private round implied $95B; current implied IPO range of $65–70B reflects a reset, but a deteriorating macro could further compress multiples at public offering",
          "Financial services regulatory exposure grows with every product: Capital requires lending licenses, Treasury requires banking partnerships, Atlas requires cross-jurisdictional corporate law expertise — each adds compliance cost and jurisdictional risk"
        ],
        positioning: "Stripe's developer ecosystem moat is the most durable in payments — not because the technology is unmatched, but because switching costs are embedded in engineer preferences, codebase integrations, and product architectures expensive to re-platform. The competitive durability case is asymmetric: Adyen is the strongest enterprise rival but does not compete for developer mindshare. Braintree/PayPal lost the developer narrative in the early 2010s and has not recaptured it. Long-term defensibility depends on maintaining developer brand as Stripe moves upmarket into enterprise territory where Adyen's institutional relationships are stronger.",
        market: "The global payments TAM is enormous, but Stripe's monetizable portion is constrained by card network economics — Stripe operates within the interchange ecosystem, not outside it. Monetization headroom is in financial services (Capital lending, Treasury deposits, Atlas incorporation) targeting higher-margin revenue adjacent to payment volume. The IPO is the key valuation clarity event — post-IPO price discovery will reflect the market's estimate of sustainable take rate. Durable economics: developer loyalty drives GMV retention; financial services adjacency drives ARPU expansion — both must hold simultaneously for the long-term revenue model to compound.",
        ecosystem: "Stripe's ecosystem defensibility is among the strongest in fintech: Connect marketplace platforms built on Stripe's payout infrastructure face very high switching costs — rebuilding payout logic, re-onboarding sub-merchants, and re-establishing compliance workflows is a multi-month engineering project. Developer-side lock-in is behavioral: Stripe becomes the default choice for every team with prior Stripe experience. Enterprise value contribution: the global payment infrastructure and developer brand are the highest-quality assets; financial services expansion adds monetizable touchpoints per customer; the IPO will test whether the market will pay a platform multiple for what has historically been priced as a payments business.",
        investmentImplications: "A Stripe IPO would test whether developer ecosystem loyalty translates to durable margin. Key metrics: enterprise revenue growth, Connect marketplace GMV, and Capital loan book performance. Strategic acquirer rationale: any bank or large financial services company would pay a premium for Stripe's developer distribution and global payment infrastructure.",
        keyFrameworks: ["Transaction economics at scale", "Financial services ARPU expansion", "IPO/liquidity timing and valuation", "Real-time rail disruption risk"],
        diligenceQuestions: [
          "What does IPO pricing imply about Stripe's expected take rate trajectory, and is that assumption defensible against real-time rail competition?",
          "What is the revenue concentration risk from top customers (Shopify, Amazon), and what is the churn impact if one re-platforms to a proprietary processor?",
          "How does the Bridge acquisition change Stripe's revenue model and margin profile — and is stablecoin infrastructure a near-term or long-term revenue contributor?",
          "What is the strategic acquirer case — which banks, card networks, or enterprise software companies would pay a control premium, and at what multiple?",
          "At what IPO valuation multiple does Stripe become fairly valued vs. overvalued, benchmarked against Adyen's public market trading history?"
        ]
      }
    },
    partnershipImplications: "Stripe is the most natural payments infrastructure partner for any internet business. For clients building SaaS, marketplace, or fintech products, Stripe offers unmatched developer experience and global reach. Primary risk: Stripe's tendency to expand into adjacent financial services categories — clients should monitor whether Stripe becomes a competitor in their core market.",
    investmentImplications: "Stripe remains one of the most valuable private technology assets globally. Bull case: dominance of internet business payment volume + financial services superapp expansion. Bear case: margin compression at enterprise scale + disintermediation by real-time rails + valuation reset at IPO. High-value acquisition target for major banks, card networks, or enterprise software companies.",
    recentDevelopments: [
      "Late 2025: Acquired Bridge for ~$1.1B — its largest acquisition ever, signalling a strategic bet that stablecoin-based payment rails will become material and that Stripe intends to own the infrastructure layer before incumbents get there.",
      "2025: Filed confidentially for IPO; public offering expected in H1 2026 at ~$65–70B — a significant reset from the $95B peak, testing whether developer loyalty and ecosystem lock-in translate to durable public market margins.",
      "2025: Launched Stablecoin Financial Accounts globally — expanding Stripe's product surface outside traditional card rails where its take rate is not competed down by Visa and Mastercard.",
      "Q3 2025: Revenue crossed $10B annualised with confirmed EBITDA profitability — a critical milestone that validates the financial services expansion thesis and strengthens the IPO narrative."
    ]
  },

  // ── Shopify ───────────────────────────────────────────────
  shopify: {
    company: "Shopify", ticker: "SHOP",
    sector: "E-Commerce Platform / SMB SaaS", lastUpdated: "Q4 2025",
    strategicTakeaway: "The operating system for independent commerce — Shopify's App Store flywheel, Shop Pay network, and Capital lending product have built merchant lock-in that makes it the most defensible alternative to Amazon for the world's 2M+ small businesses.",
    visuals: {
      accentColor: "#96bf48",
      logoUrl: "https://logo.clearbit.com/shopify.com",
      competitiveMap: {
        xAxisLabel: "Merchant Size", xMin: "Enterprise / Custom", xMax: "SMB / Self-Serve",
        yAxisLabel: "Commerce Ecosystem", yMin: "Point Solution", yMax: "Full OS / Platform",
        highlightQuadrant: "top-right", highlightLabel: "SMB Commerce OS",
        players: [
          { name: "WooCommerce",  abbr: "WC", x: 68, y: 52, category: "rival" },
          { name: "BigCommerce",  abbr: "BC", x: 55, y: 62, category: "rival" },
          { name: "Wix",          abbr: "WX", x: 72, y: 42, category: "rival" },
          { name: "Squarespace",  abbr: "SS", x: 75, y: 38, category: "rival" },
          { name: "Salesforce CC",abbr: "SF", x: 22, y: 58, category: "rival" },
          { name: "Amazon",       abbr: "AZ", x: 40, y: 60, category: "rival" },
          { name: "Shopify",      abbr: "SH", x: 82, y: 88, category: "focal" },
        ]
      },
      wtaSpectrum: {
        segments: [
          { label: "Fragmented", position: 10 }, { label: "Winner-Take-Some", position: 38 },
          { label: "Winner-Take-Most", position: 65 }, { label: "Winner-Take-All", position: 90 },
        ],
        marketPosition: 62, marketLabel: "Winner-Take-Most",
        note: "Shopify dominates SMB e-commerce; enterprise segment is fragmented and enterprise-level switching costs are moderate"
      },
      ecosystemNodes: [
        { id: "fo",  label: "Shopify",          type: "focal",    ring: 0 },
        { id: "c1",  label: "Merchants",         type: "customer", ring: 1 },
        { id: "c2",  label: "App Developers",    type: "customer", ring: 1 },
        { id: "pr1", label: "Shop Pay",          type: "product",  ring: 1 },
        { id: "pr2", label: "Shopify Fulfillment",type:"product",  ring: 1 },
        { id: "pa1", label: "Meta / Google Ads", type: "partner",  ring: 2 },
        { id: "r1",  label: "Amazon / WooComm.", type: "rival",    ring: 2 },
        { id: "pa2", label: "Stripe / Payments", type: "partner",  ring: 2 },
      ]
    },
    overview: "Shopify is the leading e-commerce platform for small and medium-sized businesses globally, powering over 2 million merchants across 175 countries. Founded in 2006 in Ottawa, Shopify has evolved from a simple online store builder into a complete commerce operating system — spanning online storefronts, point-of-sale, payments, logistics, and financing. It is frequently cited as one of the clearest examples of a platform company lowering barriers to entry for entrepreneurs.",
    businessModel: "Dual revenue model: Subscription Solutions (monthly/annual SaaS fees from merchants) and Merchant Solutions (transaction fees via Shop Pay, payment processing, Shopify Capital loans, and shipping). Merchant Solutions is the faster-growing and higher-margin segment. The App Store ecosystem creates indirect network effects: more merchants attract more app developers, which improves the platform, which attracts more merchants.",
    targetCustomers: "Primarily SMB merchants — individual entrepreneurs, direct-to-consumer brands, and growing retail businesses. Shopify Plus targets larger enterprise merchants ($1M+ GMV) with higher-tier SaaS. Also serves app developers (4,000+ in App Store) and sales channel partners (Meta, Google, TikTok, Amazon).",
    positioning: "Shopify's competitive advantage is ecosystem breadth and merchant empowerment: it is the 'merchant OS' that lets businesses compete against Amazon without joining Amazon. Key rivals: WooCommerce (open-source, customizable), BigCommerce (mid-market), Wix/Squarespace (SMB website builders), and Amazon (direct competitor for consumer attention). Shopify has deliberately positioned itself as anti-Amazon infrastructure.",
    marketLandscape: "Global e-commerce is a massive and still-growing market. Shopify occupies a Winner-Take-Most position in SMB e-commerce but faces fragmentation at enterprise. The key platform dynamic: Shopify's App Store creates strong indirect network effects that make the platform more valuable as the merchant base grows. Amazon is both the primary threat (competing for consumer transactions) and a channel partner (Shopify merchants can list on Amazon via integration).",
    ecosystemRole: "Shopify is a classic platform orchestrator — it provides the infrastructure, and its ecosystem of merchants, app developers, payment processors, logistics providers, and sales channels create the value. The App Store is the ecosystem flywheel: more merchants → more app developers build integrations → platform becomes more capable → more merchants. Shopify's fulfillment network (Shopify Fulfillment Network) is an attempt to compete with Amazon's logistics advantage.",
    strengths: [
      "App Store ecosystem flywheel: 4,000+ apps create an expanding capability moat that small competitors cannot match",
      "Shop Pay's checkout conversion rates are industry-leading — a defensible merchant retention tool built on network effects across millions of checkouts",
      "Anti-Amazon narrative resonates strongly with merchants and investors who want independence from marketplace dependency",
      "Shopify Capital provides lending to merchants based on their GMV history — a financial services moat built on proprietary merchant data",
      "International and multi-channel expansion (TikTok Shop, YouTube Shopping integrations) extends Shopify's reach as commerce fragments across platforms"
    ],
    weaknesses: [
      "Shopify's fulfillment network has been expensive and inconsistent — competing with Amazon on logistics is structurally disadvantageous",
      "Merchant success is highly dependent on marketing spend (Meta, Google) — Shopify has limited control over customer acquisition costs for its own customers",
      "Enterprise segment remains underpenetrated and faces credible competition from Salesforce Commerce Cloud and headless commerce platforms",
      "High merchant churn at the SMB tier — many small merchants fail; Shopify's fortunes are tied to the health of entrepreneurship broadly",
      "Increasing competition from TikTok Shop, which is building native commerce into social — a potential platform envelopment threat"
    ],
    lenses: {
      general: {
        focus: "Shopify is a textbook platform business with strong indirect network effects between merchants and app developers. The strategic tension is between deepening services for existing merchants (Payments, Capital, Fulfillment — Growing Deep) and expanding the merchant base globally (Growing Wide). The fulfillment network investment tests whether Shopify can compete with Amazon on logistics — a high-stakes bet on vertical integration.",
        keyFrameworks: ["Indirect Network Effects (App Store)", "Platform Scope Expansion", "Growing Deep vs. Growing Wide", "Envelopment threat from TikTok/social commerce"],
        diligenceQuestions: [
          "Is TikTok Shop a complementary distribution channel or a platform envelopment threat — and at what merchant adoption rate does it become substitution risk?",
          "Can Shopify defend its SMB position against WooCommerce's zero-cost model and the growing accessibility of headless commerce platforms?",
          "What is the unit economics impact of exiting warehouse fulfillment, and does the partner-led model create a structural logistics gap vs. Amazon?",
          "How dependent is Shopify merchant success on Meta and Google ad performance, and what is Shopify's revenue exposure to a sustained advertising ROI decline?",
          "At what enterprise penetration rate does Shopify's 'indie merchant OS' brand create tension with the Shopify Plus upmarket push?"
        ]
      },
      partnership: {
        focus: "Shopify is the essential integration for any e-commerce enablement company — payments, logistics, marketing, customer service, and analytics tools all need Shopify connectivity. The App Store is the primary partnership channel. For consulting clients building commerce-adjacent SaaS, Shopify integration is typically a requirement, not a choice. Key risk: Shopify may build native versions of successful third-party apps.",
        strengths: [
          "2M+ active merchants across 175 countries represent an unmatched distribution channel for any commerce-adjacent SaaS — App Store listing provides immediate addressable market without an independent sales motion",
          "API-first architecture and the Shopify Partner Program provide documentation, sandbox environments, and co-marketing support that accelerate technical integration and reduce time-to-market for new partners",
          "Shop Pay's network-level checkout data creates a natural partnership surface for payments, fraud, and customer identity tools that benefit from high-frequency transaction signal",
          "Social commerce integrations (TikTok Shop, YouTube Shopping, Meta) make Shopify the de facto fulfillment backend for social platforms — partners integrating with Shopify gain distribution across every major social channel simultaneously",
          "Shopify Capital's merchant lending creates a financial data layer that complements fintech, accounting, and cash flow management tools with high-quality proprietary signal unavailable to external partners"
        ],
        weaknesses: [
          "'Shopify builds' risk is existential for app partners: documented history of natively building or acquiring successful third-party categories (shipping labels, email marketing, POS, inventory) — no app category is structurally safe from displacement",
          "App Store revenue share (currently 80/20 in developers' favor) is subject to change — Shopify retains full leverage to renegotiate distribution terms as platform dependency increases and partner options narrow",
          "SMB merchant churn is structurally high (25–35% annually at the smallest tier) — partners with recurring merchant relationship models inherit Shopify's underlying merchant attrition as a baseline cost",
          "Shopify Plus exclusivity requirements for some integrations create a two-tier ecosystem: SMB-focused partners receive materially less commercial and engineering support than Shopify Plus partners",
          "Shopify's own financial services expansion (Shop Pay, Capital, Balance) increasingly occupies categories previously available to fintech and payments partners — the platform and partner interests are converging into direct competition"
        ],
        positioning: "The primary App Store alternative is WooCommerce — larger install base but weaker Marketplace infrastructure and no commercial support structure. BigCommerce serves mid-market; Salesforce Commerce Cloud serves enterprise — both have smaller, less mature partner ecosystems. Build-vs-partner: the 2M+ merchant addressable market makes the App Store the most efficient distribution node available for commerce-adjacent products. Best ecosystem nodes: App Store for product distribution; Shopify Partner Program for co-marketing and certification; Shopify Plus for enterprise-tier integrations with higher ARPU, longer retention, and more predictable renewal cycles.",
        market: "App Store revenue share is 80% to developers after fees; flat pricing and usage-based models are both viable. Demand drivers: e-commerce growth, SMB digitization, and social commerce expansion are sustained tailwinds. The critical partnership value question: does your product make merchants more successful on Shopify? Products that increase merchant GMV (marketing tools, conversion optimization, fulfillment) have the strongest partnership dynamics. Products that occupy categories Shopify is actively building into (payments, capital, email) face displacement regardless of current performance.",
        ecosystem: "Shopify is the platform orchestrator at the center of the SMB commerce ecosystem — it provides the infrastructure; partners fill the capability gaps. Complementarity is highest for email/SMS marketing, customer service platforms, B2B commerce tools, international logistics, and attribution analytics — categories where Shopify's native capabilities remain basic. Interoperability is strongest for partners who adopt Shopify's checkout extensibility framework (Checkout Extensions), which reduces rebuild risk across platform updates and signals closer alignment with Shopify's long-term architecture.",
        keyFrameworks: ["App Store Indirect Network Effects", "Complement vs. Substitute Risk (Shopify builds in-house)", "Distribution via App Store vs. direct sales"],
        diligenceQuestions: [
          "What is the App Store listing process, revenue-share structure, and typical merchant conversion rate for a new app in our client's category?",
          "Has Shopify historically built native versions of products in our client's category, and what is the current roadmap signal for the next 18 months?",
          "Does our client's target merchant segment — SMB vs. Shopify Plus — map to Shopify's highest-priority customer cohort for platform investment?",
          "How does SMB merchant churn affect the long-term value of the App Store as a distribution channel, and what is the retention rate by merchant GMV tier?",
          "What are the technical certification requirements for the Shopify Partner Program, and what support does Shopify provide to App Store partners at scale?"
        ]
      },
      investment: {
        focus: "Shopify is a high-multiple growth story built on the thesis that global e-commerce GMV continues expanding and that Shopify captures an increasing share of merchant financial services (payments, lending, banking). The investment question is ARPU expansion: can Shopify grow revenue per merchant faster than it adds new (lower-GMV) merchants? Fulfillment remains the key open question on profitability.",
        dealConclusion: "Strong ecosystem flywheel and growing financial services ARPU, but fulfillment losses and social commerce disintermediation are unresolved — a conviction buy only if you believe both GMV growth and financial services capture materialize at scale.",
        strengths: [
          "Merchant Solutions (70%+ of revenue) is GMV-tied financial services revenue — payments, lending, shipping — that scales with merchant success rather than merchant count, creating convex upside as merchant cohorts grow",
          "Shop Pay's network-level checkout conversion advantage (published 1.72x vs. non-Shop Pay) is a retention mechanism that compounds: merchants with better economics become harder to dislodge regardless of subscription price comparison",
          "Shopify Capital's loan book is built on first-party GMV data — a proprietary underwriting advantage over bank lenders who lack real-time merchant revenue visibility, enabling lower default rates at competitive pricing",
          "App Store indirect network effects mean the platform's capability ceiling rises with every new developer cohort — the moat widens automatically as the merchant base grows, without incremental capital investment from Shopify",
          "International penetration is in early innings: North American dominance is not yet replicated globally, and each successful market expansion adds merchants at near-zero incremental infrastructure cost"
        ],
        weaknesses: [
          "SMB merchant churn is structurally high: many small merchants fail, and the Learner tier is a churning, low-ARPU cohort requiring constant CAC investment to replace — a treadmill that caps margin leverage",
          "Fulfillment concession to Amazon is a structural competitive gap: the partner-led model reduces capital intensity but leaves Shopify's logistics capability below what merchants need to match Amazon Prime delivery standards",
          "TikTok Shop integration dependency: Shopify has converted TikTok into a distribution channel, but as TikTok's native commerce capabilities mature, the risk of platform envelopment — TikTok owning the merchant relationship directly — compounds",
          "Valuation premium leaves limited margin of safety: at current multiples, both GMV growth and financial services capture must materialize simultaneously — if either falters, multiple compression is significant and rapid",
          "Meta and Google advertising dependency for merchant CAC means Shopify's merchant success (and therefore Merchant Solutions revenue) is partially held hostage to ad platform pricing dynamics outside Shopify's control"
        ],
        positioning: "Shopify's moat has three components of unequal durability: App Store flywheel (very durable — network effects compound with platform age); Shop Pay network (moderately durable — conversion advantage is real but could be challenged by Apple Pay or PayPal at scale); anti-Amazon narrative (strategically important but emotionally fragile — dependent on maintaining independence from Amazon dependency). Long-term defensibility is strongest for merchants who have adopted the full Shopify stack — these are near-captive customers. Weakest for single-product merchants who can migrate to WooCommerce with relatively low switching cost.",
        market: "Global e-commerce GMV is growing toward $10T+ by 2030, but Shopify's addressable share is constrained by merchant size and geographic penetration. Monetization headroom: ARPU expansion through financial services is the primary growth lever — if Shopify captures 2–3% of merchant GMV as financial services revenue, total addressable revenue per GMV dollar is 3–5x current levels. Durable economics require GMV growth to exceed SMB attrition and Shop Pay adoption to reach critical mass for network-level conversion advantages. International expansion is the optionality that underpins the long-term TAM expansion case.",
        ecosystem: "Shopify's ecosystem is most defensible for merchants embedded across multiple product lines: a merchant using Payments + Capital + Fulfillment + 10+ App Store apps faces migration costs equivalent to months of engineering work and potential GMV disruption. At that level, Shopify is an operating system — switching is not a price comparison but a platform migration. Enterprise value contribution: App Store ecosystem is the widest moat; Shop Pay network is the highest-margin asset (near-zero marginal cost on incremental checkout volume); Shopify Capital is the fastest-growing financial services product with a proprietary data advantage over external lenders.",
        investmentImplications: "Shopify trades at a premium reflecting its network effects and merchant ecosystem. Bull case: GMV growth + financial services ARPU expansion + international penetration. Bear case: fulfillment losses persist + TikTok/social commerce disintermediation + Amazon partnership tensions. M&A rationale for a large bank or payments company: Shopify's merchant GMV data and Shop Pay network are unique financial services assets.",
        keyFrameworks: ["Merchant ARPU trajectory", "GMV-based financial services flywheel", "Fulfillment unit economics", "Social commerce disruption risk"],
        diligenceQuestions: [
          "What is the sustainable ARPU trajectory as lower-GMV merchant cohorts grow — does merchant mix shift compress or expand Merchant Solutions take rate?",
          "How much of Shopify Capital's loan book performance depends on first-party GMV data, and what is the credit risk profile in a consumer spending downturn?",
          "Is the partner-led fulfillment model a capital-light strategic pivot that improves margin, or a permanent logistics capability gap vs. Amazon?",
          "At what point does TikTok Shop integration evolve from distribution channel to platform dependency — and what is Shopify's leverage to prevent lock-in?",
          "What is the M&A case — which major bank, retailer, or logistics company has the strategic rationale and balance sheet to acquire Shopify's merchant GMV network?"
        ]
      }
    },
    partnershipImplications: "Shopify is the most important integration in e-commerce SaaS. For clients building any commerce-adjacent product — payments, marketing, customer service, analytics, fulfillment — Shopify integration is typically mandatory. Primary risks: Shopify's tendency to build or acquire successful app categories natively, and the merchant base's sensitivity to Shopify pricing changes.",
    investmentImplications: "Shopify is a premium-priced platform asset with strong network effects and an expanding financial services layer. Key value drivers: Shop Pay network growth, Shopify Capital loan book, and international merchant expansion. Key risks: fulfillment profitability, TikTok Shop platform competition, and merchant churn at the SMB tier. High-value acquisition target for a major bank, retailer, or logistics company.",
    recentDevelopments: [
      "2025: Launched Sidekick AI assistant inside the merchant dashboard — deepening platform stickiness by giving 2M+ merchants AI-powered marketing, pricing, and inventory tools that raise the cost of switching to less capable alternatives.",
      "2025: Deepened TikTok Shop integration, making Shopify the fulfilment backend for TikTok's US and UK social commerce push — converting a potential platform envelopment threat into a distribution partnership.",
      "Q2 2025: Wound down own warehouse operations and shifted to a partner-led fulfilment model — reducing capital intensity significantly and implicitly conceding that competing with Amazon on logistics was structurally disadvantageous.",
      "Q3 2025: Revenue growth re-accelerated to 26% YoY; Merchant Solutions now represents over 70% of total revenue — confirming that financial services (payments, lending) are the primary value extraction engine, not subscription fees."
    ]
  },

  // ── Apple ─────────────────────────────────────────────────
  apple: {
    company: "Apple", ticker: "AAPL",
    sector: "Consumer Technology / Platform Ecosystem", lastUpdated: "Q4 2025",
    strategicTakeaway: "A hardware company that has successfully engineered a services flywheel — the App Store, iCloud, and Apple Pay create switching costs so deep that regulators across three continents now consider them a structural competition concern.",
    visuals: {
      accentColor: "#1d1d1f",
      logoUrl: "https://logo.clearbit.com/apple.com",
      competitiveMap: {
        xAxisLabel: "Business Model", xMin: "Hardware / Device-Led", xMax: "Software / Services-Led",
        yAxisLabel: "Ecosystem Control", yMin: "Open / Android-Style", yMax: "Closed / Proprietary",
        highlightQuadrant: "top-right", highlightLabel: "Proprietary Services Platform",
        players: [
          { name: "Samsung",   abbr: "SM", x: 30, y: 40, category: "rival" },
          { name: "Google",    abbr: "GO", x: 62, y: 45, category: "rival" },
          { name: "Microsoft", abbr: "MS", x: 65, y: 55, category: "rival" },
          { name: "Meta",      abbr: "ME", x: 72, y: 35, category: "rival" },
          { name: "Amazon",    abbr: "AZ", x: 58, y: 48, category: "rival" },
          { name: "Sony",      abbr: "SO", x: 32, y: 50, category: "rival" },
          { name: "Apple",     abbr: "AP", x: 78, y: 90, category: "focal" },
        ]
      },
      wtaSpectrum: {
        segments: [
          { label: "Fragmented", position: 10 }, { label: "Winner-Take-Some", position: 38 },
          { label: "Winner-Take-Most", position: 65 }, { label: "Winner-Take-All", position: 90 },
        ],
        marketPosition: 82, marketLabel: "Winner-Take-All",
        note: "iOS is a near-monopoly premium platform — App Store control, high switching costs, and iMessage lock-in make WTA dynamics very strong in the premium segment"
      },
      revenueBreakdown: [
        { label: "iPhone",          pct: 52, color: "#1d1d1f" },
        { label: "Services",        pct: 24, color: "#555" },
        { label: "Mac",             pct: 8,  color: "#888" },
        { label: "Wearables / Home",pct: 9,  color: "#aaa" },
        { label: "iPad",            pct: 7,  color: "#ccc" },
      ],
      ecosystemNodes: [
        { id: "fo",  label: "Apple",            type: "focal",    ring: 0 },
        { id: "c1",  label: "Consumers (iOS)",  type: "customer", ring: 1 },
        { id: "c2",  label: "App Developers",   type: "customer", ring: 1 },
        { id: "pr1", label: "App Store",        type: "product",  ring: 1 },
        { id: "pr2", label: "iCloud / Services",type: "product",  ring: 1 },
        { id: "pa1", label: "Google (Search $)",type: "partner",  ring: 2 },
        { id: "r1",  label: "Android / Google", type: "rival",    ring: 2 },
        { id: "pa2", label: "Enterprise IT",    type: "partner",  ring: 2 },
      ]
    },
    overview: "Apple is the world's most valuable company, with a market capitalization consistently exceeding $3 trillion. It designs and sells premium consumer hardware (iPhone, Mac, iPad, Apple Watch) deeply integrated with a proprietary software and services ecosystem (iOS, macOS, App Store, iCloud, Apple Pay, Apple TV+). Apple's strategic transformation from a hardware company to a services-led platform business is one of the most important strategic pivots in corporate history.",
    businessModel: "Dual engine: (1) premium hardware sales (iPhone = ~52% of revenue) built on a closed, integrated software/hardware stack; (2) rapidly growing Services segment (~24% of revenue) including App Store commissions, Apple Pay, iCloud, Apple TV+, and Apple Arcade. Services is higher-margin and more recurring than hardware, driving a structural shift in Apple's financial profile.",
    targetCustomers: "Premium consumer segment globally — Apple deliberately does not compete for market share at the low end. Two-sided platform: consumers (buy devices and subscribe to services) and app developers (pay 15–30% commission to App Store). Enterprise IT is a growing third segment as iPhone and Mac penetration in corporate environments has increased significantly.",
    positioning: "Apple holds an unmatched position in the premium consumer technology segment. The iPhone is the dominant premium smartphone globally; the Mac has nearly 25% of the U.S. laptop market. Apple's competitive advantage is the depth of its proprietary ecosystem: hardware, software, services, and developer relationships are all designed to keep users within the Apple stack. Primary rivals: Google/Android (smartphone), Microsoft (PC/cloud), and increasingly Meta (spatial computing/AI).",
    marketLandscape: "Apple competes across multiple large markets simultaneously: smartphones ($500B+), personal computing, digital services (streaming, music, productivity), and payments. Within the premium tier, Apple exhibits near-Winner-Take-All dynamics: iOS device switching rates are very low (<15% annually), App Store is the only distribution channel for iOS apps, and iMessage creates meaningful social network lock-in in key markets (US, UK, Japan). The App Store faces serious regulatory threats (EU Digital Markets Act, DOJ antitrust) that could force third-party app stores and lower Apple's 15–30% commission rate.",
    ecosystemRole: "Apple is the quintessential closed platform orchestrator — it controls the hardware, the OS, the app distribution (App Store), and increasingly the services layer. This vertical integration creates extraordinary switching costs for consumers and developers. Indirect network effects are strong: more iPhone users → more valuable for developers to build for iOS → higher-quality apps → more attractive platform for consumers. The Google Search deal (~$20B/year) represents a fascinating dependency: Apple's most profitable partner is also its most significant rival.",
    strengths: [
      "Unmatched brand premium and consumer loyalty — Apple commands the highest ASP in smartphones and generates the highest revenue per user of any consumer tech company",
      "Deep ecosystem lock-in: iMessage, iCloud, AirDrop, AirPods, Apple Watch, and continuity features make switching to Android a significant life disruption",
      "App Store control gives Apple a 15–30% tax on the entire iOS digital economy — a near-monopoly toll booth on $1T+ in annual transactions",
      "Services revenue is growing faster than hardware and is significantly higher-margin — transforming Apple's financial profile from cyclical to recurring",
      "Apple Silicon (M-series chips) has created a hardware performance and power-efficiency moat that no PC competitor has yet matched"
    ],
    weaknesses: [
      "App Store antitrust exposure is structural: EU DMA has forced Apple to allow third-party app stores in Europe, threatening commission revenue across all markets over time",
      "AI capabilities lag competitors: despite significant investment, Apple Intelligence is behind Google Gemini and OpenAI in benchmark performance, creating a strategic vulnerability",
      "Extreme hardware revenue concentration in iPhone: a single product miss or supply chain disruption can materially affect the business",
      "China dependency on both the supply side (manufacturing) and demand side (≈20% of iPhone sales) creates geopolitical and regulatory concentration risk",
      "Google Search deal creates a paradox: Apple's largest single Services revenue source ($20B+ annually) depends on its primary AI rival's dominance in search"
    ],
    lenses: {
      general: {
        focus: "Apple's strategy is defined by ecosystem lock-in and premium positioning — a textbook example of managing indirect network effects between consumers and developers through tight platform control. The central strategic question for 2026 is whether Apple's closed platform strategy remains sustainable under regulatory pressure (EU DMA, DOJ antitrust) and AI competitive pressure (Google, OpenAI), or whether it must open up in ways that structurally erode its commission-based Services revenue.",
        keyFrameworks: ["Closed Platform Strategy & Ecosystem Lock-in", "Indirect Network Effects (consumers ↔ developers)", "Services transformation (hardware to recurring revenue)", "Winner-Take-All dynamics in premium segment"],
        diligenceQuestions: [
          "What is the revenue impact if EU DMA third-party app store requirements expand to other jurisdictions, and at what commission haircut does Services growth materially decelerate?",
          "How far behind is Apple Intelligence vs. Google Gemini and OpenAI, and at what capability gap do premium consumers begin switching to Android in meaningful numbers?",
          "What is the regulatory scenario analysis for the Google Search default deal, and what alternative revenue source could credibly replace $20B+ in annual income?",
          "Is Apple's closed platform strategy sustainable in a world where AI assistants increasingly substitute for App Store discovery and distribution?",
          "What is China's realistic strategic importance over a 5-year horizon, and does Apple have a credible manufacturing and demand diversification plan?"
        ]
      },
      partnership: {
        focus: "Apple is simultaneously one of the best and most difficult partners in technology. The App Store provides unmatched distribution to 1B+ premium consumers, but the 15–30% commission and Apple's ability to clone successful apps ('Sherlocking') create existential risk for partners. The Google Search deal is a case study in how even the most capable technology companies sometimes need to partner with their primary rivals.",
        strengths: [
          "iOS App Store provides access to 1B+ premium consumers with the highest willingness-to-pay in consumer technology — no other single distribution channel reaches this quality of buyer at this scale",
          "Apple's privacy-first positioning (App Tracking Transparency, on-device processing) creates genuine product differentiation for privacy-aligned partners in categories that benefit from Apple's brand trust",
          "HealthKit, HomeKit, CarPlay, and enterprise device management frameworks create deep integration pathways for healthcare, smart home, automotive, and enterprise IT partners with Apple-exclusive hardware access",
          "Apple Silicon's Neural Engine provides on-device AI inference capabilities that partners can leverage for local processing products — a hardware performance surface unavailable at comparable quality on any competing platform",
          "Enterprise IT penetration of iPhone and Mac has reached the point where Apple's MDM and device management ecosystem makes Apple a co-selling partner for enterprise SaaS requiring managed device deployment"
        ],
        weaknesses: [
          "App Store commission (15–30%) is the highest distribution tax in consumer software — it structurally compresses partner margins with no price negotiation mechanism below the $1M annual revenue threshold",
          "'Sherlocking' risk is pervasive across virtually every category: Apple has absorbed flashlights, QR scanners, document scanning, password management, sleep tracking, and app limits — no partner category is structurally protected",
          "App Store review policy is applied inconsistently, with review timelines of 2–4 weeks and unpredictable rejections that can delay critical product updates — operational uncertainty for partners with time-sensitive shipping cycles",
          "App Tracking Transparency has materially degraded iOS user acquisition economics: CPMs increased 30–50% post-ATT, reducing the ROI of growth marketing on the same platform partners depend on for distribution",
          "Apple's financial services expansion (Apple Pay, Apple Card, Apple Pay Later) creates direct competition zones for fintech and payments partners who cannot exit the iOS distribution dependency regardless of the conflict"
        ],
        positioning: "For consumer-facing apps targeting premium audiences, iOS distribution is not optional — it is mandatory. Android (Google Play) is a complementary channel, not an alternative, and Apple's installed base skews to higher willingness-to-pay demographics. The build-vs-partner question: reaching iOS users without the App Store is impossible under Apple's current (non-EU) rules. Best ecosystem nodes: App Store for consumer distribution; HealthKit for health/wellness partners; CarPlay for automotive; Enterprise MDM for B2B SaaS on Apple devices. The EU DMA opens a narrow path to independent iOS distribution, but operational complexity of maintaining alternative app stores makes it niche rather than structural.",
        market: "App Store economics: Apple takes 15% from small developers (<$1M revenue) and 30% from larger ones — the highest platform fee in app distribution. Consumer demand for premium iOS apps is sustained by Apple's installed base and the willingness-to-pay premium. Partnership value is highest for apps that drive hardware purchase decisions (health monitoring that requires Apple Watch), apps that improve retention within the Apple ecosystem, and enterprise tools benefiting from Apple's managed device infrastructure. Post-ATT, App Store Search Ads (Apple-controlled) is the primary growth marketing channel — creating a structural conflict where Apple is simultaneously the distribution platform and the preferred advertiser.",
        ecosystem: "Apple is a closed platform orchestrator — it controls hardware, OS, app distribution, and payments. Complementarity is highest for partners building on Apple's proprietary frameworks (HealthKit, ARKit, Core ML, CarPlay) in ways that differentiate specifically on Apple hardware rather than across general mobile platforms. Interoperability is deliberately constrained: Apple's privacy frameworks, hardware permissions, and API restrictions function as competitive tools as much as privacy protections. Value-chain role: Apple controls the last mile between software developers and premium consumers — a structural chokepoint that gives it leverage over every partner that depends on iOS distribution to reach its customers.",
        keyFrameworks: ["App Store as distribution moat vs. dependency risk", "'Sherlocking' risk (Apple replicates successful features)", "Privacy policy impact on partner advertising economics"],
        diligenceQuestions: [
          "For our client's specific category, what is the 'Sherlocking' risk history — has Apple previously built native features that displaced similar App Store offerings?",
          "What is the practical process for negotiating reduced App Store commission rates at scale, and what revenue threshold typically unlocks enterprise terms?",
          "How has App Tracking Transparency affected our client's iOS user acquisition economics relative to Android, and what is the trend over the past 8 quarters?",
          "Is our client's product category exposed to Apple's growing financial services footprint — Apple Pay, Apple Card, Apple Pay Later — as a potential direct competitor?",
          "What are the Apple Developer Program certification requirements and review timelines for our client's category, and how has review policy changed recently?"
        ]
      },
      investment: {
        focus: "Apple's investment profile is exceptional: high margins, massive buybacks, and growing recurring Services revenue. The bull case centers on Services ARPU expansion, spatial computing (Vision Pro), and healthcare as a new platform. The bear case centers on App Store antitrust structural changes, China geopolitical risk, and AI competitive disadvantage threatening the Services growth rate.",
        dealConclusion: "One of the highest-quality capital allocators in public markets, but the next leg requires Services growth to hold through App Store regulatory headwinds and a widening AI gap — both are real risks, not tail scenarios.",
        strengths: [
          "Services segment (~24% of revenue, ~75%+ gross margin) is structurally higher-margin than hardware and grows as the installed base accumulates — each iPhone sold expands the Services revenue base for 5+ years at near-zero marginal cost",
          "Apple Silicon (M-series, A-series) creates a hardware performance lead that justifies premium ASP maintenance — the chip advantage reinforces the device premium that drives the Services flywheel",
          "App Store commission income is near-100% gross margin at the incremental level — as the iOS installed base grows and digital content spending increases, this compounds without proportional cost increase",
          "Buyback program is one of the largest in corporate history: share count reduced ~40% over a decade, driving EPS growth that decouples from revenue growth and generates shareholder value independent of top-line performance",
          "Multi-device ecosystem lock-in (iMessage, AirDrop, iCloud, Apple Watch, AirPods continuity) makes switching from Apple a complete lifestyle disruption — retention is structural, driven by switching cost, not behavioral preference"
        ],
        weaknesses: [
          "App Store antitrust regulatory risk is structural and compounding: EU DMA is operative, DOJ case is proceeding, and international regulators are aligning — each jurisdiction imposing third-party app stores reduces Services revenue concentration",
          "iPhone revenue concentration (~52% of total) means single product cycle execution risk is material — a missed launch in a key market has outsized P&L impact relative to a more diversified hardware company",
          "AI capability gap is widening in benchmarks: Apple Intelligence trails Google Gemini and OpenAI on reasoning, coding, and multi-modal tasks — a risk that premium consumers begin to value AI quality over ecosystem switching costs",
          "Google Search default deal regulatory exposure is a $20B+ annual Services revenue risk — loss through DOJ ruling or negotiated settlement would materially compress Services margin with no identified replacement at equivalent scale",
          "China concentration (~20% of iPhone revenue, primary manufacturing base) represents a dual-sided geopolitical risk that no realistic supply chain diversification can fully eliminate within a 5-year planning horizon"
        ],
        positioning: "Apple's moat is the deepest in consumer technology: hardware integration, proprietary silicon, closed OS, App Store control, and multi-device continuity create switching costs measured in lifestyle disruption rather than price comparison. Credible competitive scenarios that erode this moat: AI-native assistants (Google, OpenAI) provide compelling Android experiences that change iOS switching economics; App Store regulatory changes reduce developer subsidy and lower quality differential; Meta's spatial computing (Quest, AR) establishes a new device category where Apple is not yet dominant. None materialize quickly — 5-year durability is very high; 10-year durability depends on how the AI and spatial computing races resolve.",
        market: "Apple's Services addressable market compounds with the 2B+ active device installed base — digital services consumption per device grows annually. Monetization headroom: Services penetration in India, SE Asia, and LatAm is meaningfully below US/EU rates — international expansion of iCloud, Apple Music, and App Store purchasing represents decades of runway. Durable economics gate on hardware premium maintenance: if ASP declines, the Services per-device model requires more devices to hold revenue, creating a volume dependency that erodes the brand premium. Healthcare and financial services represent the highest-optionality long-term monetization categories.",
        ecosystem: "Apple's ecosystem defensibility is the strongest in consumer technology: hardware integration, app library migration cost, iMessage social switching costs, and iCloud data continuity make platform switching a multi-week project that most consumers decline. Enterprise value contribution: Services segment is the highest-value growth asset (high margin, recurring, compounding with installed base); Apple Silicon is the most durable hardware asset (power-efficiency lead no PC OEM matches); brand premium is the highest-value intangible — Apple commands the highest ASP and revenue-per-user of any consumer technology company. Regulatory risk to App Store commission is the single largest structural threat to enterprise value creation over the next decade.",
        investmentImplications: "Apple is a core holding for most institutional investors due to capital return and brand moat. Incremental thesis question: can Services revenue grow fast enough to offset hardware maturity and App Store commission headwinds? Adjacency plays: Apple's entry into financial services (Apple Card, Pay Later), healthcare (Apple Watch, Health Records), and spatial computing represent the next platform bets.",
        keyFrameworks: ["Services revenue multiple vs. hardware multiple", "App Store regulatory risk haircut", "Capital return program and buyback-driven EPS", "Platform extension into healthcare and financial services"],
        diligenceQuestions: [
          "What is the fair value of Apple without the Google Search default deal, and how does each DOJ outcome scenario affect EPS and the Services revenue multiple?",
          "At what App Store commission rate haircut does Services segment growth compress below the market's implied 20x+ multiple on Services revenue?",
          "What is the optionality value in Vision Pro and spatial computing, and at what device volume does it become a material contributor to the Services mix?",
          "How does Apple's AI capability gap manifest in financial outcomes first — premium ASP compression, Services churn, or developer ecosystem attrition?",
          "What is the capital return sensitivity — at what buyback pace does EPS growth decouple from revenue growth, and how does this affect long-range consensus estimates?"
        ]
      }
    },
    partnershipImplications: "Apple is an essential distribution partner for any consumer-facing digital product — 1B+ premium users with high willingness to pay make iOS a mandatory target. Strategic risk: App Store commission (15–30%), Apple's ability to replicate partner features ('Sherlocking'), and App Tracking Transparency's impact on partners dependent on mobile advertising. Financial services, healthcare, and enterprise IT clients should additionally assess Apple's own product roadmap for direct competitive entry.",
    investmentImplications: "Apple is the world's largest company by market cap and a core blue-chip holding. The Services segment transformation (toward recurring, high-margin revenue) is the primary value driver for the next decade. Key risks: App Store antitrust regulatory changes, China concentration, and AI capability gap. M&A rationale from a buyer's perspective: Apple's distribution, brand, and consumer data would be the most valuable single acquisition in technology history — and precisely why it is unlikely to be acquired.",
    recentDevelopments: [
      "2025: Apple Intelligence rolled out across iPhone 16 and M-series Mac, with EU launch delayed by DMA review — underscoring that Apple's closed platform strategy, which drives most of its Services margin, is under coordinated regulatory pressure across multiple jurisdictions.",
      "2025: EU Digital Markets Act enforcement required Apple to allow third-party app stores and alternative payments in Europe — a structural precedent that, if extended globally, would materially compress App Store commission revenue.",
      "Q3 2025: DOJ antitrust case against the Google Search default deal advanced — Apple faces risk of losing $20B+ in annual Services revenue, exposing the paradox of its most profitable partner being its primary AI rival.",
      "2025: Vision Pro sales came in below initial targets; production forecasts quietly reduced — pushing the spatial computing timeline further out and raising questions about Apple's next hardware category before the mass-market version arrives in 2027."
    ]
  },

};

// ── Company lookup ───────────────────────────────────────────
export function lookupCompany(input) {
  const normalized = input.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

  const aliases = {
    digitalocean: 'digitalocean', docn: 'digitalocean', do: 'digitalocean',
    uber: 'uber', ubereats: 'uber',
    linkedin: 'linkedin', lnkd: 'linkedin',
    stripe: 'stripe', stripecom: 'stripe',
    shopify: 'shopify', shop: 'shopify',
    apple: 'apple', aapl: 'apple', applecom: 'apple',
  };

  const key = aliases[normalized];
  if (key && mockData[key]) {
    return { found: true, data: mockData[key] };
  }
  return { found: false, data: null };
}
