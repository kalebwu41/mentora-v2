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
        // Complex debugging challenge data
        debuggingChallenge: {
          title: 'Mentora Shop — Black Friday Debugging Challenge',
          scenario: 'E-commerce platform experiencing critical failures during Black Friday. Users report duplicate orders, wrong cart items, and severe performance degradation. Your mission: identify and fix all interconnected bugs within 48 hours.',
          timeEstimate: '12-18 hours',
          complexity: 'Production-Grade',
          bugLayers: '4-5 layers',
          missionBrief: 'Mentora Shop is a microservices-based e-commerce platform. A recent deployment introduced multiple regressions affecting cart management, order processing, and system performance. You must systematically debug the issues using logs, metrics, and code analysis, then implement comprehensive fixes with tests.',
          techStack: [
            'Backend: Node.js + TypeScript (Express API)',
            'Database: PostgreSQL with complex queries',
            'Cache: Redis for session/cart management',
            'Worker: Bull queue for background jobs',
            'Frontend: React + TypeScript',
            'Infrastructure: Docker + docker-compose'
          ],
          learningObjectives: [
            'Reproduce complex intermittent bugs',
            'Debug race conditions and concurrency issues',
            'Identify N+1 query performance problems',
            'Fix memory leaks in production code',
            'Handle stale cache and data consistency',
            'Write comprehensive integration tests',
            'Apply systematic debugging methodology'
          ],
          userReports: [
            'My cart shows wrong items after I refresh.',
            'I got charged twice for one order.',
            'Order confirmation sometimes missing items.',
            'Checkout page extremely slow and sometimes times out.',
            'I uploaded a profile CSV and some records are malformed.'
          ],
          systemSymptoms: [
            'Intermittent incorrect API responses for /cart and /order/:id',
            'Duplicate order entries in DB for same transaction ID',
            'Page load latency spikes (p95 > 8s) under moderate load',
            'Background job logs show records processed twice',
            'Cache contains stale cart contents for minutes',
            'Frontend infinite re-render loop for product list',
            'Misleading "Payment gateway timeout" error messages'
          ],
          initialHypothesis: 'Recent deployment introduced changes to caching & background worker concurrency. The combination creates race conditions and stale caches leading to inconsistent cart/order data plus performance issues.',
          architectureDiagram: `mentora-shop/
├─ docker-compose.yml
├─ services/
│  ├─ api/           # Node.js + TypeScript Express
│  ├─ worker/        # Bull queue processor
│  ├─ frontend/      # React + TypeScript SPA
├─ infra/
│  ├─ db/schema.sql
│  └─ monitoring/perf-snapshot.json`,
          services: [
            {
              name: 'API Service',
              description: 'Express.js REST API handling cart and order operations with Redis caching',
              technologies: ['Node.js', 'TypeScript', 'Express', 'pg']
            },
            {
              name: 'Worker Service',
              description: 'Background job processor for order fulfillment and email notifications',
              technologies: ['Bull', 'Redis', 'Node.js']
            },
            {
              name: 'Frontend',
              description: 'React single-page application with cart and checkout flows',
              technologies: ['React', 'TypeScript', 'Vite']
            },
            {
              name: 'PostgreSQL',
              description: 'Primary database with users, carts, orders, and products tables',
              technologies: ['PostgreSQL 13']
            },
            {
              name: 'Redis',
              description: 'Cache layer and job queue management',
              technologies: ['Redis 6']
            }
          ],
          applicationLogs: `[2025-12-03T20:01:05.124Z] WARN api: Cache parse failed, fallback to DB - Unexpected token o in JSON at position 1
[2025-12-03T20:01:05.129Z] INFO api: Load cart from DB user=3f8a...
[2025-12-03T20:01:06.200Z] INFO worker: Processing job id=ab12 user=3f8a order=0f2b...
[2025-12-03T20:01:06.210Z] INFO api: Inserted order id=0f2b external_txn_id=txn_1234
[2025-12-03T20:01:06.213Z] ERROR db: duplicate key value violates unique constraint "orders_external_txn_id_idx"
[2025-12-03T20:01:07.367Z] INFO worker: Processing job id=ab13 user=3f8a order=0f2c...
[2025-12-03T20:01:07.368Z] INFO worker: cache.set cart:3f8a -> [object Object]
[2025-12-03T20:01:07.369Z] INFO api: Cache parse failed, fallback to DB - Unexpected token o
[2025-12-03T20:02:55.000Z] METRICS: p95_response_time=8130ms
[2025-12-03T20:03:05.000Z] METRICS: heap_usage_mb=680MB`,
          performanceMetrics: {
            'requests_per_min': '1200',
            'error_rate': '4.0%',
            'p95_latency_ms': '8200ms',
            'heap_usage_mb': '680 MB',
            'redis_hits_pct': '62.3%',
            'db_conn_pool_busy': '85%'
          },
          keyObservations: [
            'Cache has [object Object] logged — object stored instead of JSON string',
            'Duplicate transaction constraint error occurs (race/double process)',
            'Payment gateway timeouts appear occasionally',
            'Heap growing to 680MB — memory leak suspected',
            'N+1 query pattern visible in order listing endpoint'
          ],
          evaluationCriteria: [
            {
              category: 'Reproduction',
              points: 10,
              description: 'Successfully reproduce all reported issues using provided assets and load tests'
            },
            {
              category: 'Root Cause Analysis',
              points: 20,
              description: 'Correctly identify root causes across all layers: cache, database, worker, frontend'
            },
            {
              category: 'Fix Correctness',
              points: 25,
              description: 'Fixes are correct, atomic, prevent regressions, and follow best practices'
            },
            {
              category: 'Tests',
              points: 15,
              description: 'Add automated tests that prove the issue and verify the fix'
            },
            {
              category: 'Performance',
              points: 10,
              description: 'Demonstrate measurable improvement in metrics and add monitoring/alerts'
            },
            {
              category: 'Code Quality',
              points: 10,
              description: 'Clean PR, clear commit messages, documentation, and risk analysis'
            },
            {
              category: 'Security (Bonus)',
              points: 10,
              description: 'Handle PII correctly, implement idempotency keys, prevent injection attacks'
            }
          ],
          deliverables: [
            'Short report (1-2 pages) summarizing root causes and fix summary',
            'Pull request with code changes, tests, and configuration updates',
            'Before/after performance metrics showing improvement',
            'System architecture diagram showing call flow before & after fixes',
            'Video walkthrough (optional, 5-10 min) demonstrating reproduction and fixes'
          ],
          repositoryUrl: 'https://github.com/mentora/debugging-challenge-shop.git'
        }
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
