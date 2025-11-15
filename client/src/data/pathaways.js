export const pathawayCatalog = [
  {
    id: 'software',
    title: 'Software Engineering Pathfinder',
    mood: 'Solve a high-stakes product bug in 48 hours.',
    steps: [
      {
        title: 'Debugging Spike',
        description: 'The onboarding flow crashes on mobile devices during OAuth.',
        choices: [
          { label: 'Instrument error logging + crash reports', skill: 'Systems Thinking', delta: 15 },
          { label: 'Roll back to prior release immediately', skill: 'Risk Management', delta: 5 },
          { label: 'Patch quickly with conditional try/catch', skill: 'Speed', delta: -5 },
        ],
      },
      {
        title: 'Feature Prioritization',
        description: 'PM wants to ship a new referral banner mid-incident.',
        choices: [
          { label: 'Host a triage standup to align', skill: 'Leadership', delta: 10 },
          { label: 'Reject scope changes entirely', skill: 'Focus', delta: 0 },
          { label: 'Accept request without validation', skill: 'Collaboration', delta: -10 },
        ],
      },
      {
        title: 'Integration Planning',
        description: 'Security requests SSO updates within the same sprint.',
        choices: [
          { label: 'Stage rollout with dark launch toggles', skill: 'Architecture', delta: 10 },
          { label: 'Migrate everything to prod immediately', skill: 'Velocity', delta: -10 },
          { label: 'Pair with security to scope MVP', skill: 'Cross-Functional', delta: 8 },
        ],
      },
    ],
    deliverable: 'Write a recovery brief summarizing impact, fix, and resilience plan.',
  },
  {
    id: 'marketing',
    title: 'Marketing Launch Director',
    mood: 'Mentora is debuting a teen career accelerator in LATAM.',
    steps: [
      {
        title: 'Audience Insight',
        description: 'Pick a priority persona for launch messaging.',
        choices: [
          { label: 'First-gen scholarship seekers', skill: 'Empathy', delta: 12 },
          { label: 'College transfer students', skill: 'Relevancy', delta: 4 },
          { label: 'Parents of middle schoolers', skill: 'Focus', delta: -4 },
        ],
      },
      {
        title: 'Creative Direction',
        description: 'Decide on the visual story for the hero video.',
        choices: [
          { label: 'Hand-drawn notebook transitions', skill: 'Originality', delta: 9 },
          { label: 'Generic stock campus footage', skill: 'Execution', delta: -6 },
          { label: 'Split-screen journeys', skill: 'Clarity', delta: 6 },
        ],
      },
      {
        title: 'Go-to-market Alignment',
        description: 'Sales wants assets for school district demos.',
        choices: [
          { label: 'Create a modular toolkit w/ localized stats', skill: 'Collaboration', delta: 11 },
          { label: 'Provide final video only', skill: 'Focus', delta: -5 },
          { label: 'Delay marketing launch', skill: 'Risk', delta: -8 },
        ],
      },
    ],
    deliverable: 'Ship a Notion board with copy, visuals, and KPIs.',
  },
  {
    id: 'business',
    title: 'Entrepreneurship Crisis Lab',
    mood: 'Your climate hardware startup is experiencing a supply crunch.',
    steps: [
      {
        title: 'Budget Shock',
        description: 'Costs are up 30%.',
        choices: [
          { label: 'Renegotiate vendor contracts', skill: 'Negotiation', delta: 10 },
          { label: 'Slash R&D entirely', skill: 'Short-Term', delta: -8 },
          { label: 'Seek bridge financing', skill: 'Capital Strategy', delta: 7 },
        ],
      },
      {
        title: 'Market Strategy',
        description: 'Enterprise pilots stall as a competitor undercuts price.',
        choices: [
          { label: 'Double down on premium insights', skill: 'Differentiation', delta: 9 },
          { label: 'Compete solely on price', skill: 'Positioning', delta: -6 },
          { label: 'Pause pilots to regroup', skill: 'Focus', delta: -2 },
        ],
      },
      {
        title: 'Crisis Response',
        description: 'A prototype failed mid-demo.',
        choices: [
          { label: 'Own the issue + publish RCA', skill: 'Transparency', delta: 11 },
          { label: 'Blame logistics partner', skill: 'Teamwork', delta: -7 },
          { label: 'Offer extended warranties', skill: 'Customer Success', delta: 6 },
        ],
      },
    ],
    deliverable: 'Draft an investor update with revenue + morale signals.',
  },
  {
    id: 'mechanical',
    title: 'Mechanical Systems Sprint',
    mood: 'Design a lightweight prosthetic wrist adaptor.',
    steps: [
      {
        title: 'CAD Decisions',
        description: 'Choose the initial geometry for load tests.',
        choices: [
          { label: 'Topology-optimized lattice', skill: 'Innovation', delta: 12 },
          { label: 'Simple block model', skill: 'Speed', delta: -3 },
          { label: 'Imported generic part', skill: 'Reuse', delta: -6 },
        ],
      },
      {
        title: 'Material Trade-offs',
        description: 'Pick between carbon fiber, titanium, or polymer.',
        choices: [
          { label: 'Hybrid carbon-titanium core', skill: 'Systems Thinking', delta: 10 },
          { label: 'Polymer only', skill: 'Cost', delta: -5 },
          { label: 'Titanium only', skill: 'Durability', delta: 6 },
        ],
      },
      {
        title: 'Iteration & Testing',
        description: 'A patient feedback session reveals discomfort.',
        choices: [
          { label: 'Adjust ergonomics + add silicone grip', skill: 'Human-Centered', delta: 11 },
          { label: 'Ship as-is to meet deadline', skill: 'Speed', delta: -9 },
          { label: 'Revert to old design', skill: 'Comfort Zone', delta: -4 },
        ],
      },
    ],
    deliverable: 'Upload annotated CAD renders + testing notes.',
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
