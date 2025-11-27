**Repository Overview**

- **Big picture:** Mentora is a two-tier full‑stack prototype: a Vite + React frontend (`client/`) and an Express + Mongoose backend (`server/`). The app favors small, local fallbacks so UX remains functional when the API or DB is missing.

- **Why this structure:** the frontend contains feature UI and local generators (e.g. `client/src/utils/roadmapEngine.js`) for offline fallbacks; the backend exposes REST endpoints and server-side generators (e.g. `server/utils/roadmapGenerator.js`) for persisted or authenticated flows.

**Quick dev & debug commands**

- **Start server (dev):**
  - `cd server && npm install && npm run dev` (uses `nodemon app.js`)
- **Start client (dev):**
  - `cd client && npm install && npm run dev` (starts Vite HMR)
- **Build client:** `cd client && npm run build`
- **Lint frontend:** `cd client && npm run lint`

**Important environment variables**

- `MONGO_URI` — MongoDB connection string used by `server/utils/db.js`. If missing, the server logs a warning and continues (some controllers use fallback storage).
- `JWT_SECRET` — used by `server/middleware/authMiddleware.js`. If missing, code falls back to `'dev_secret'` for local development.
- `VITE_API_BASE` — frontend override for the API base URL used by `client/src/services/api.js`.

**Key files & where to look first**

- `server/app.js` — Express entry, mounts route modules (`routes/*.js`) and global error handler.
- `server/routes/*.js` + `server/controllers/*.js` — follow the route → controller pattern. Example: `routes/roadmapRoutes.js` calls `controllers/roadmapController.js` which uses `utils/roadmapGenerator.js`.
- `server/utils/*` — contains core backend generators and AI helpers (`aiEngine.js`, `roadmapGenerator.js`, `personalityAnalysis.js`).
- `client/src/services/api.js` — centralized client ↔ API calls with graceful fallbacks.
- `client/src/utils/roadmapEngine.js` — client-side roadmap builder used when the API is unreachable.
- `client/src/components/` — feature organization (chatbot, pods, roadmap, etc.). Use these to find UI wiring and state flows.

**Patterns & conventions (project-specific)**

- **Route → controller → model → util**: Routes are minimal and delegate heavy work to controllers which call utils (e.g. `generateRoadmap` in `controllers/roadmapController.js` uses `utils/roadmapGenerator.js`).
- **Graceful fallback logic:** Client `safeFetch` returns `null` on network errors and components call local builders (see `client/src/services/api.js`). When changing API responses, update local builders to keep parity.
- **Mixed module systems:** Frontend uses ESM (`package.json` has `type: "module"`); backend uses CommonJS (`require/module.exports`). Keep those boundaries when editing files — don't accidentally convert one side without updating tooling.
- **Auth behavior:** `authMiddleware` expects `Authorization: Bearer <token>` and verifies JWT using `JWT_SECRET` (default `dev_secret`). Many routes are protected — update client auth flows and headers in `client/src/services/api.js` if changing auth.

**Integration points to be cautious about**

- Persistence is optional: `server/utils/db.js` will skip/connect depending on `MONGO_URI`. Controllers try to persist but tolerate failures — modifying persistence logic requires checking both DB connection flow and controller fallbacks.
- AI/business logic appears in both client and server utilities. When evolving heuristic logic (scoring, suggestions, archetype inference), update both `server/utils/*` and `client/src/utils/*` to keep developer experience consistent when offline.

**When you change an API shape**

- Update `server/routes` and `controllers` first (server contract), then:
  - update `client/src/services/api.js` to call the new endpoints
  - update `client/src/utils/*` fallbacks to produce the same shape as the API
  - update any components that consume the response (search `client/src` for the property names)

**Tests & CI**

- There are no tests/CI configured in the repo. Use the dev servers and manual testing (hot reload) to verify work.

**Examples (quick references)**

- Dev server entry: `server/app.js` — mounts `app.use('/api/roadmap', require('./routes/roadmapRoutes'))`.
- Client API fallback: `client/src/services/api.js` uses `buildRoadmap(profile)` if `/roadmap` POST fails.

**Developer tips for AI agents**

- Prefer minimal, local edits: change controllers or utils with focused diffs; run the dev server and Vite client concurrently to manually verify behavior.
- If introducing new environment variables, add clear defaults in code (as existing `JWT_SECRET || 'dev_secret'`) and update the root README with usage examples.
- Preserve the fallback parity: any API response shape change must be mirrored in client-side builders to avoid silent UI breakage when the API is unavailable.

If any section is unclear or you want concrete examples (e.g., a suggested refactor for `roadmapGenerator` or a sample new endpoint), tell me which area and I'll iterate the file with a focused patch.
