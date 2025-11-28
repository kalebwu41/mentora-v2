export const pathawayCatalog = [
  {
    id: 'software',
    title: 'Software Engineering Pathfinder',
    mood: 'Solve a high-stakes product bug in 48 hours.',
    steps: [
      {
        title: 'Debugging Project — Reproduce & Patch',
        description: 'Reproduce a flaky production bug from the sample repo, add structured logging, and implement a tested hotfix.',
        deliverable: 'Pull request with failing→passing repro, unit + e2e tests, and README reproduction steps',
      },
      {
        title: 'Feature Prototype — End-to-End',
        description: 'Design an API contract and implement a lightweight backend + frontend prototype with integration tests.',
        deliverable: 'Prototype branch, API spec (OpenAPI/Markdown), and 2–3 minute demo recording',
      },
      {
        title: 'Reliability Project — Monitoring & Rollout',
        description: 'Add observability, implement caching or rate-limits, and prepare a canary rollout with metrics.',
        deliverable: 'Design doc, benchmark numbers, and canary deployment plan with rollback steps',
      },
    ],
    deliverable: 'Portfolio-ready PRs, specs, and demo artifacts demonstrating real engineering work.',
  },
  {
    id: 'marketing',
    title: 'Marketing Launch Director',
    mood: 'Mentora is debuting a teen career accelerator in LATAM.',
    steps: [
      {
        title: 'Audience & Landing Project — Persona to Lead Gen',
        description: 'Define two priority personas, map a conversion funnel, and build a tracked landing page for lead capture.',
        deliverable: 'Persona one-pager, live landing preview URL, and initial analytics snapshot',
      },
      {
        title: 'Creative Campaign — Video & Test',
        description: 'Produce hero creative and a 30s social video; run a micro paid test with measurable KPIs.',
        deliverable: 'Storyboard + 30s video + campaign report (CTR, CPA, learnings)',
      },
      {
        title: 'GTM & Partnerships — Pilot Outreach',
        description: 'Create a partner outreach kit, localized assets, and run a pilot outreach with measured conversions.',
        deliverable: 'Partner playbook, localized landing, and KPI model for scaling',
      },
    ],
    deliverable: 'Campaign assets, data-backed learnings, and partnership materials suitable for portfolio.',
  },
  {
    id: 'business',
    title: 'Entrepreneurship Crisis Lab',
    mood: 'Your climate hardware startup is experiencing a supply crunch.',
    steps: [
      {
        title: 'Cash Triage Project — 3-Scenario Forecast',
        description: 'Build a three-scenario cash flow model and recommend two immediate levers (cost or revenue) to stabilize operations.',
        deliverable: '1‑page recovery plan, updated forecast, and vendor negotiation or bridge financing script',
      },
      {
        title: 'Customer Validation Project — Offer Test',
        description: 'Run 10 customer interviews, build a low-cost landing, and test a pricing/offer hypothesis with real signups.',
        deliverable: 'Interview synthesis, validated metrics, and prototype offer page with conversion data',
      },
      {
        title: 'Stabilize vs Scale Plan — Revenue Channel Test',
        description: 'Prepare investor-facing update and run a controlled experiment on one revenue channel to show traction.',
        deliverable: 'Investor update deck, 6‑month plan, and KPI experiment results',
      },
    ],
    deliverable: 'Tangible recovery artifacts (models, test data, investor-ready docs).',
  },
  {
    id: 'mechanical',
    title: 'Mechanical Systems Sprint',
    mood: 'Design a lightweight prosthetic wrist adaptor.',
    steps: [
      {
        title: 'Concept & FEA — Load Case Validation',
        description: 'Create annotated CAD sketches and run a simple FEA for the primary load case; define pass/fail thresholds.',
        deliverable: 'Annotated CAD + FEA report + test acceptance criteria',
      },
      {
        title: 'Prototype & Test — Build and Measure',
        description: 'Produce a small physical prototype, run load and cycle tests, and record sensor data.',
        deliverable: 'Prototype photos, BOM, test logs, and data visualizations',
      },
      {
        title: 'Ergonomics & Manufacturing Prep',
        description: 'Run user feedback, refine ergonomics, and prepare manufacturing-ready drawings and QC checklist.',
        deliverable: 'Final CAD package, QC checklist, and pilot test notes',
      },
    ],
    deliverable: 'Engineering artifacts ready for portfolio (CAD, test data, BOM).',
  },
  {
    id: 'healthcare',
    title: 'Nursing Impact Studio',
    mood: 'Lead a virtual triage center during a regional heat wave.',
    steps: [
      {
        title: 'Patient Intake',
        description: 'Simultaneous cases with overlapping symptoms arrive.',
        choices: [
          { label: 'Use SBAR briefing & route critical care first', skill: 'Prioritization', delta: 12 },
          { label: 'Process by order received', skill: 'Fairness', delta: -4 },
          { label: 'Delegate without handoff notes', skill: 'Communication', delta: -9 },
        ],
      },
      {
        title: 'Treatment Plan',
        description: 'One patient refuses transport without family approval.',
        choices: [
          { label: 'Offer telepresence consult w/ physician', skill: 'Innovation', delta: 8 },
          { label: 'Force transport', skill: 'Compliance', delta: -6 },
          { label: 'Close case and move on', skill: 'Speed', delta: -10 },
        ],
      },
      {
        title: 'Ethical Moment',
        description: 'A journalist requests private vitals for reporting.',
        choices: [
          { label: 'Decline + share anonymized trends', skill: 'Ethics', delta: 11 },
          { label: 'Share data for awareness', skill: 'Awareness', delta: -8 },
          { label: 'Ignore request completely', skill: 'Communication', delta: -2 },
        ],
      },
    ],
    deliverable: 'Publish a post-incident reflective log.',
  },
  {
    id: 'design',
    title: 'UX/UI Vision Lab',
    mood: 'Reimagine a mobile banking onboarding for Gen-Z.',
    steps: [
      {
        title: 'Wireframe Sprint',
        description: 'Choose a layout paradigm for onboarding.',
        choices: [
          { label: 'Narrative stepper with friendly avatar', skill: 'Delight', delta: 10 },
          { label: 'Dense multi-form screen', skill: 'Efficiency', delta: -7 },
          { label: 'Carousel with long copy', skill: 'Education', delta: -2 },
        ],
      },
      {
        title: 'Visual Direction',
        description: 'Align on color + motion language.',
        choices: [
          { label: 'Soft gradients + micro-animations', skill: 'Polish', delta: 9 },
          { label: 'High-contrast neon palette', skill: 'Boldness', delta: 2 },
          { label: 'Muted grayscale', skill: 'Accessibility', delta: -4 },
        ],
      },
      {
        title: 'Portfolio Delivery',
        description: 'Decide how to present the case study.',
        choices: [
          { label: 'Interactive prototype with narration', skill: 'Storytelling', delta: 12 },
          { label: 'Static PDF export', skill: 'Speed', delta: -5 },
          { label: 'Slides with limited context', skill: 'Clarity', delta: -3 },
        ],
      },
    ],
    deliverable: 'Share a Loom walkthrough + Notion brief.',
  },
];
