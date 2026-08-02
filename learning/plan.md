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

### 2. The UI shell (static)  [ ] in progress
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
- [ ] 2.8 Commit — section deliverable reached

### 3. A backend that answers  [ ] not started
**Deliverable:** a local Express server you can hit in the browser and get a response (hello, or a hardcoded list of applications).
**Concepts:** nodejs, express, routes-endpoints, http-request-response, multiple-servers

### 4. Frontend talks to backend (the API)  [ ] not started
**Deliverable:** the React app fetches the (still hardcoded) applications from the server and displays them — real data flowing across the wire.
**Concepts:** api, fetch, json, async-await, get-request, cors

### 5. Remembering things (the database)  [ ] not started
**Deliverable:** applications you add persist — close everything, reopen, they're still there (stored in SQLite).
**Concepts:** sql, tables-schema, sqlite, sql-queries, backend-db-connection, environment-variables

### 6. The full core loop (CRUD)  [ ] not started
**Deliverable:** the complete MVP feature set working locally — add, list, edit, and delete applications, all persisting.
**Concepts:** post-put-delete, crud-pattern, wiring-ui-actions, error-handling

### 7. Tests & safety rails  [ ] not started
**Deliverable:** a small set of automated tests proving core features work, plus input validation so bad data can't break things.
**Concepts:** automated-testing, test-runner, validation, edge-cases

### 8. Going live (deployment)  [ ] not started
**Deliverable:** the app at a real public URL with a Postgres database — usable from a phone.
**Concepts:** deployment, hosting, postgresql, prod-env-variables, connecting-services, db-migration
