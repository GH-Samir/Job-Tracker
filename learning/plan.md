# Learning plan: Job Application Tracker

## Locked decisions
- Language: **JavaScript** — one language for frontend and backend; biggest beginner community; directly employable. (TypeScript introduced later as an upgrade.)
- Frontend: **React (via Vite)** — the in-demand UI library; Vite is the build tool that turns React into what the browser understands. Learner has prior HTML/CSS reps.
- Backend: **Node.js + Express** — Node runs JavaScript on the server; Express adds conventions and helpers for handling requests.
- Database: **SQLite locally → PostgreSQL in production** — relational fits the consistent, structured shape of job-application records; both speak SQL so learning transfers.
- Hosting: **Render (backend + database) + Vercel (frontend)** — gentle on-ramps and free tiers; skip AWS/GCP for now.

## Sections

### 1. Project setup & a page on screen  [x] COMPLETE 2026-07-31
**Deliverable:** a React app running locally in the browser showing "Job Tracker", and a first git commit saved.
**Concepts:** git-commit, vite, npm-packages, project-structure, react-component, jsx

Tasks:
- [x] 1.1 Turn the project folder into a git repository and save the first commit (the planning docs) — done 2026-07-31, commit 1fbd265
- [x] 1.2 Scaffold the React app with Vite and install its packages — done 2026-07-31 (into client/; ESLint chosen over oxlint)
- [x] 1.3 Tour the generated files, then run the dev server and see it in the browser — done 2026-07-31 (plus a deliberate breakage: removed id="root", read the console error, restored with git)
- [x] 1.4 Strip the starter template and make the page say "Job Tracker" (your first component edit) — done 2026-07-31; App.jsx written from a TODO skeleton, demo CSS/assets deleted, tab title changed
- [x] 1.5 Commit the working app — section deliverable reached — done 2026-07-31, commit 81d1252; split into two commits (app / learning docs) deliberately

### 2. The UI shell (static)  [x] COMPLETE 2026-08-02
**Deliverable:** the full look of the app — a styled list of fake applications and an add-form — visible, no real data yet.
**Concepts:** props, list-rendering, css-styling, react-state, controlled-inputs

Tasks:
- [x] 2.1 Represent a job application as a JavaScript object, and several as an array — hardcoded in App.jsx, first one shown on screen — done 2026-07-31; three fake applications, semantic-HTML correction (headings ≠ sizes), ISO date format parked for section 5
- [x] 2.2 Move the card into its own ApplicationCard component and feed it data with props — done 2026-07-31; three cards on screen, one line each
- [x] 2.3 Put the project on GitHub and push — done 2026-07-31. ed25519 SSH key pair, public half on GitHub, branch renamed master → main, 11 commits pushed to github.com/GH-Samir/Job-Tracker (public).
- [x] 2.4 Render the whole array as a list with .map(), including keys — done 2026-07-31; four cards from one line of markup, `id` added to each object ahead of section 5's primary keys
- [x] 2.5 Style the page and the cards with CSS — done 2026-08-01; card layout, labelled date fields, and colour-coded status badges (OFFER / PENDING / REJECTED)

**Parked (your call, 2026-08-01):** statuses are three values for the MVP. Interview stages ("Applied → Interviewing") come later — extending costs one status value plus one CSS rule.
- [x] 2.6 Add the "new application" form markup — visible, not yet working — done 2026-08-02; ApplicationForm component, labelled fields, status dropdown, date inputs, styled. Submitting still does the browser's default reload.
      **Carry into 2.7:** the hardcoded applications use DD/MM/YYYY but `type="date"` produces YYYY-MM-DD — one field, two formats. Settle it.
- [x] 2.7 Make the form's inputs controlled with React state — done 2026-08-02; five controlled fields, onSubmit with preventDefault, submitted object logged to console. Hardcoded dates converted to ISO.
      **Parked:** displaying ISO dates in a human-friendly form (cards currently show `2026-07-12`).
      **Parked:** the submitted object doesn't reach the list yet — that's section 6 (CRUD), which needs state lifted into App.
- [x] 2.8 Commit — section deliverable reached — done 2026-08-02 (committed and pushed unprompted, efb3cd1 + b9f3cf7)

### 3. A backend that answers  [x] COMPLETE 2026-08-02
**Deliverable:** a local Express server you can hit in the browser and get a response (hello, or a hardcoded list of applications).
**Concepts:** nodejs, express, routes-endpoints, http-request-response, multiple-servers

Tasks:
- [x] 3.1 Set up server/ as its own npm project and install Express — done 2026-08-02; npm init, "type": "module", express ^5.2.1 (65 packages), and a repo-root .gitignore that took untracked files from 598 to 4
- [x] 3.2 Write the smallest Express server that answers a request, and hit it in the browser — done 2026-08-02; GET / on port 3000, verified 200 and 404 in the Network tab, running alongside Vite
- [x] 3.3 Move the applications data to the server and serve it as JSON at /api/applications — done 2026-08-02; verified in the browser and with curl -i
      **Known debt (deliberate, ends in section 4):** the applications array now exists in BOTH server/index.js and client/src/App.jsx. Copied rather than moved because the client can't fetch yet and cutting it would crash the app. Delete the client's copy the moment fetch works.
- [x] 3.4 Auto-restart on save, and run both servers side by side — done 2026-08-02; `node --watch` via npm run dev, plus a start script for production. Vite on 5173 and Express on 3000, both live.
- [x] 3.5 Commit — section deliverable reached — done 2026-08-02 (committed and pushed unprompted, a70465b + f0e8806)

### 4. Frontend talks to backend (the API)  [x] COMPLETE 2026-08-02
**Deliverable:** the React app fetches the (still hardcoded) applications from the server and displays them — real data flowing across the wire.
**Concepts:** api, fetch, json, async-await, get-request, cors

Tasks:
- [x] 4.1 Meet fetch and async/await in the browser console — and hit the CORS wall — done 2026-08-02; no files changed, console work only
- [x] 4.2 Let the server say yes: enable CORS on the backend — done 2026-08-02; hand-written middleware setting Access-Control-Allow-Origin, verified with curl
      **Parked to section 6:** preflight OPTIONS is unhandled, so a JSON POST will fail. The `cors` npm package is the one-line fix — install it when it bites.
      **Parked to section 8:** the allowed origin is hardcoded to localhost:5173; production needs the Vercel URL via an environment variable.
- [x] 4.3 Fetch on page load with useEffect, hold the result in state, and delete the client's hardcoded array — done 2026-08-02. **Section-3 duplication debt PAID** — the applications array now exists only in server/index.js.
- [x] 4.4 Handle what the user sees while it loads, and when it fails — done 2026-08-02; try/catch/finally, response.ok guard, loading/error/empty states with conditional rendering, .error styling
      **Parked (polish):** the error text shown is the raw browser message ("Failed to fetch") rather than something written for a human.
- [x] 4.5 Commit — section deliverable reached — done 2026-08-02 (committed and pushed unprompted, 67d0fc1 + 148d3e0)

### 5. Remembering things (the database)  [x] COMPLETE 2026-08-04
**Deliverable:** applications you add persist — close everything, reopen, they're still there (stored in SQLite).
**Concepts:** sql, tables-schema, sqlite, sql-queries, backend-db-connection, environment-variables

Tasks:
- [x] 5.1 Pick a SQLite library, install it, and design the applications table — done 2026-08-02; better-sqlite3 chosen over experimental node:sqlite, server/db.js written, job-tracker.db created and gitignored
- [x] 5.2 Create the table, seed the four applications, and read them back with SQL outside the app — done 2026-08-04; seed.js with a prepared statement, sqlite3 CLI installed, SELECT/WHERE run by hand
- [x] 5.3 Make GET /api/applications read from the database instead of the hardcoded array — done 2026-08-04; prepared SELECT + .all(), hardcoded array deleted, verified by editing a row in the sqlite3 shell and reloading the browser with no server restart
- [x] 5.4 Move the database path into an environment variable — done 2026-08-04; .env + .env.example, node --env-file in dev/seed scripts, fail-fast guard if DB_PATH is unset. Same mechanism will carry DATABASE_URL and the CORS origin in section 8.
- [x] 5.5 Commit — section deliverable reached — done 2026-08-04 (committed and pushed unprompted). Persistence verified: a value edited by hand in the sqlite3 shell survived a full restart of both servers.
      **Caveat on the deliverable:** data *seeded or edited via SQL* persists. Adding applications through the UI is section 6 — the form still only logs to the console.

### 6. The full core loop (CRUD)  [x] COMPLETE 2026-08-05
**Deliverable:** the complete MVP feature set working locally — add, list, edit, and delete applications, all persisting.
**Concepts:** post-put-delete, crud-pattern, wiring-ui-actions, error-handling

Tasks:
- [x] 6.1 POST /api/applications on the server — done 2026-08-05; express.json(), prepared INSERT, 201 with the created row, verified with curl (id 5 assigned by the database)
      **Known gap, due in section 7:** a POST missing a required field returns 500 with library internals in the body. Should be 400 Bad Request with a clean message.
- [x] 6.2 Wire the form to POST — done 2026-08-05; preflight hit and fixed with the `cors` package (origin-restricted), loadApplications lifted out of the effect and passed down as a callback, form clears after submit. New cards now appear without a refresh.
      **Known gap, due in section 7:** the form never checks `response.ok`, so a failed POST still clears the form and refetches — silently losing what the user typed.
- [x] 6.3 DELETE /api/applications/:id, and a delete button on each card — done 2026-08-05; route params, 204 vs 404 on `changes`, callback-with-argument from card to App. Verified with curl and in the browser.
      **Polish parked:** the Delete button has className="delete" but no CSS rule, so it's unstyled.
- [x] 6.4 Change an application's status from the card — done 2026-08-05; PATCH route with UPDATE, status dropdown on each card controlled by props. **CRUD complete.**
      **Polish parked:** the status dropdown reuses the badge styling and may not sit well as a `<select>`; the Delete button still has no CSS.
      **Workflow problem, three occurrences (4.2, 6.3, 6.4):** `node --watch` repeatedly fails to restart on save, costing several minutes each time debugging already-correct code. Cause unknown. Worth a dedicated task.
- [x] 6.5 Commit — section deliverable reached — done 2026-08-05 (committed and pushed unprompted). **MVP feature set complete locally.**

### 7. Tests & safety rails  [ ] in progress
**Deliverable:** a small set of automated tests proving core features work, plus input validation so bad data can't break things.
**Concepts:** automated-testing, test-runner, validation, edge-cases

Tasks:
- [x] 7.1 Validate incoming applications on the server — done 2026-08-05. **6.1 debt paid.** validateApplication collects all errors and returns 400; PATCH guarded separately (routes don't chain). Verified with curl: empty body → 4 errors, whitespace-only company → rejected, invalid status → rejected on both POST and PATCH.
      **`node --watch` failed a FOURTH time** and this time produced a false test result — a 3h12m-old process made working validation look broken. This needs fixing before it wastes more time.
- [x] 7.2 Fix the tooling — done 2026-08-05. Diagnosed the watcher with a `touch` test (inotify fine; the editor's atomic save was replacing the watched file) and fixed it with `--watch-path=.`. Prettier + format-on-save installed, rules committed in .prettierrc, whole codebase reformatted in its own commit.
- [x] 7.3 Handle a failed submit in the client — done 2026-08-06. **6.2 debt paid.** response.ok checked, server's error list rendered above the form, fields preserved on failure and cleared only on success.
      **Remaining gap:** no try/catch around the form's fetch, so an unreachable server still fails silently. Validation failure and network failure are different cases.
- [ ] 7.4 Set up the test runner and write the first passing test
- [ ] 7.5 Test the write routes, including the validation from 7.1
- [ ] 7.6 Commit — section deliverable reached

### 8. Going live (deployment)  [ ] not started
**Deliverable:** the app at a real public URL with a Postgres database — usable from a phone.
**Concepts:** deployment, hosting, postgresql, prod-env-variables, connecting-services, db-migration
