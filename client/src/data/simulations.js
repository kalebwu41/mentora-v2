const simulations = [
  {
    slug: 'black-friday-debug-crash',
    title: 'Software Engineering — Black Friday Production Crash',
    short: 'Debug a high-severity production outage during peak traffic.',
    duration: '60–120 minutes',
    difficulty: 'Intermediate',
    skills: ['Debugging', 'Incident Triage', 'Logging', 'Monitoring'],
    scenario: `It’s Black Friday. Your ecommerce service starts returning 500s under high load. Customers report checkout failures and social media is picking up the outage. Your team has access to logs, metrics, and a limited staging environment. You must triage, identify the root cause, create a mitigation, and write a short postmortem and follow-ups.`,
    tasks: [
      'Read provided logs and error traces to form a hypothesis.',
      'Reproduce the issue in staging or with a focused traffic replay.',
      'Apply a quick mitigation to reduce user impact.',
      'Propose a permanent fix and a rollback plan.',
    ],
    deliverables: [
      'Short incident timeline (what happened, when).',
      'Root cause hypothesis and evidence.',
      'Mitigation applied and steps to revert.',
      'Two follow-up actions for permanent resolution.',
    ],
    rubric: [
      'Clear timeline and ownership (10 pts).',
      'Evidence-backed root cause (30 pts).',
      'Safe mitigation and rollback plan (30 pts).',
      'Practical follow-ups and testing strategy (30 pts).',
    ],
    hints: [
      'Look for recent deploys, config changes, or third-party failures.',
      'Search for error spikes correlated with increased latency or queue sizes.',
    ],
  },

  {
    slug: 'design-media-platform',
    title: 'Full‑Stack System Design — Media Sharing Platform',
    short: 'Design a scalable media sharing app for images & short videos.',
    duration: '90–150 minutes',
    difficulty: 'Advanced',
    skills: ['API design', 'Data modeling', 'Scaling', 'Caching'],
    scenario: `Design a minimal version of a media-sharing service that supports user uploads, feeds, likes, and comments. Consider storage, CDN integration, thumbnailing, and feed generation for millions of users. Produce an API surface, core data models, and a scaling plan.`,
    tasks: [
      'Sketch UML/data models for users, posts, and media objects.',
      'Define key APIs and sample request/response shapes.',
      'Propose storage + CDN + caching strategy for media.',
      'Describe feed generation (pull vs push) and tradeoffs.',
    ],
    deliverables: [
      'High-level architecture diagram.',
      'Entity models and sample API definitions.',
      'Scaling plan for 1M DAU and a cost estimate outline.',
    ],
    rubric: [
      'Clear data model and consistency considerations (25 pts).',
      'Thoughtful storage/CDN/caching plan (25 pts).',
      'Feed design and tradeoffs explained (25 pts).',
      'API clarity and edge-case handling (25 pts).',
    ],
    hints: [
      'Consider object storage for blobs and a relational DB for metadata.',
      'Use short-lived presigned URLs for uploads to avoid backend bottlenecks.',
    ],
  },

  {
    slug: 'calendar-interview-case',
    title: 'Interview Case Study — Calendar Scheduling System',
    short: 'Design a calendar app focused on conflict‑free scheduling.',
    duration: '45–90 minutes',
    difficulty: 'Intermediate',
    skills: ['System design', 'APIs', 'Concurrency'],
    scenario: `Design the backend for a calendar app that supports creating events, finding free/busy slots across multiple users, and handling recurring events and timezones. Your interviewer will evaluate clarity, tradeoffs, and correctness.`,
    tasks: [
      'Define core APIs for events and availability lookups.',
      'Handle recurring events and timezone normalization.',
      'Explain data storage and conflict resolution.',
    ],
    deliverables: [
      'API contract for create/update/delete events.',
      'Algorithm for free/busy calculation across attendees.',
      'Notes on performance and scaling choices.',
    ],
    rubric: [
      'Correctness for edge cases (timezones, recurrence) (35 pts).',
      'Simplicity and testability of APIs (25 pts).',
      'Scalability reasoning (20 pts).',
      'Clear tradeoffs and alternatives (20 pts).',
    ],
    hints: [
      'Normalize times to UTC for storage; convert for display.',
      'Represent recurrence with a rule and expand for the query window only.',
    ],
  },

  {
    slug: 'offer-negotiation',
    title: 'Offer Negotiation — Evaluate and Negotiate Multiple Offers',
    short: 'Practice negotiating between multiple job offers and priorities.',
    duration: '30–60 minutes',
    difficulty: 'Beginner–Intermediate',
    skills: ['Communication', 'Compensation analysis', 'Prioritization'],
    scenario: `You receive two competing internship/full‑time offers with different mixes of base, equity, benefits, and growth opportunities. You must analyze total compensation, create a negotiation script, and prioritize what to ask for based on career goals.`,
    tasks: [
      'Calculate total compensation over 2–4 years for each offer.',
      'List priorities (learning, role, compensation) and rank them.',
      'Draft a polite negotiation email or script for a call.',
    ],
    deliverables: [
      'Compensation comparison spreadsheet or summary.',
      'Negotiation script and two alternative asks (salary, title, remote).',
      'Recommendation with justification.',
    ],
    rubric: [
      'Clear, data-driven comparison (40 pts).',
      'Strategic negotiation asks (30 pts).',
      'Professional tone and contingency planning (30 pts).',
    ],
    hints: [
      'Convert equity to expected value assuming reasonable growth scenarios.',
      'Consider role fit and learning opportunities as multipliers for long-term value.',
    ],
  },

  {
    slug: 'product-prioritization-case',
    title: 'Product Management — Prioritization Case Study',
    short: 'Prioritize product features under resource constraints.',
    duration: '45–90 minutes',
    difficulty: 'Intermediate',
    skills: ['Prioritization', 'User research', 'Roadmapping'],
    scenario: `You are PM for a consumer education app with limited engineering resources. Stakeholders request five potential features. Using impact, effort, and strategic fit, choose the next quarter roadmap and defend your prioritization.`,
    tasks: [
      'Define success metrics for the product and each feature.',
      'Score features by impact and effort and produce a ranked list.',
      'Draft a one-paragraph roadmap and stakeholder communication.',
    ],
    deliverables: [
      'Prioritization matrix and scores.',
      'Quarter roadmap with two deliverables and one experimental spike.',
      'Stakeholder memo explaining tradeoffs.',
    ],
    rubric: [
      'Thoughtful metrics and measurable outcomes (30 pts).',
      'Reasoned scoring and tradeoff discussion (40 pts).',
      'Clear communication and next steps (30 pts).',
    ],
    hints: [
      'Use RICE (Reach, Impact, Confidence, Effort) or similar scoring.',
      'Call out assumptions and how to validate them quickly.',
    ],
  },

  {
    slug: 'qa-reproduce-failing-test',
    title: 'Quality Assurance — Reproduce & Fix a Failing Test',
    short: 'Investigate a flaky/failing test and produce a reproducible fix.',
    duration: '45–90 minutes',
    difficulty: 'Intermediate',
    skills: ['Testing', 'Repro debugging', 'Isolation'],
    scenario: `A CI pipeline occasionally fails with a specific end-to-end test. Reproduce the failure locally, isolate the root cause (timing, environment, test data), and propose a fix or a more reliable test approach.`,
    tasks: [
      'Run the test with increased logging and deterministic seeds.',
      'Isolate whether the issue is test, infra, or code.',
      'Propose a fix: change the code, adjust test timing, or mock dependencies.',
    ],
    deliverables: [
      'Failure reproduction steps and minimal failing example.',
      'Proposed fix with pros/cons and a test to prove it.',
      'Notes for CI reliability improvements.',
    ],
    rubric: [
      'Repro steps are concise and reliable (30 pts).',
      'Fix is minimal and confident (40 pts).',
      'CI hardening suggestions (30 pts).',
    ],
    hints: [
      'Try running tests with controlled random seeds and in a clean environment.',
      'Use mocks to isolate flaky external dependencies like time or network.',
    ],
  },
];

export default simulations;
