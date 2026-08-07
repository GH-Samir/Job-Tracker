# File map

<!-- Every file/folder is either explained or parked — no mystery boxes. -->
<!-- known: explained in the learner's own words | parked: honest one-liner for now, deep dive scheduled | generated: machine-made, never edit, always rebuildable -->

Project root: `/home/samir/job-tracker` — everything below is relative to it.

## /
- learning/ — known (2026-07-31) — the planning + learning docs, kept out of the app code's way
  - project.md — known (2026-07-31) — your project, MVP, and trunk
  - plan.md — known (2026-07-31) — the build plan and locked decisions
  - knowledge-graph.md — known (2026-07-31) — the living map of what you actually know
  - file-map.md — known (2026-07-31) — this file: why every file in the repo exists
- .git/ — known (2026-07-31) — the repository itself: every commit ever made lives here. Hidden (leading dot). Never edit by hand; you change it only through git commands. Since task 2.3 it also stores the `origin` remote pointing at github.com/GH-Samir/Job-Tracker. → [[git-commit]] [[git-remotes]]

Not in the repo, but the project depends on it: `~/.ssh/id_ed25519` (private, never leaves this machine) and `~/.ssh/id_ed25519.pub` (public half, on GitHub). → [[public-key-auth]]
- .prettierrc — known (2026-08-05) — the project's formatting rules (single quotes, no semicolons), committed so every machine formats identically. → [[code-formatting]]
- .vscode/ — known (2026-08-05) — editor settings shared with the repo: format-on-save, with Prettier as the formatter. Committed deliberately so the behaviour travels with the project. → [[code-formatting]]
- .gitignore — known (2026-08-02) — repo-root ignore list, currently just `node_modules`. A .gitignore covers its own directory and everything below, so this one entry protects client/, server/, and anything added later. client/.gitignore still exists for Vite-specific entries (dist, logs, editor folders). → [[gitignore]]
- client/ — known (2026-07-31) — the React frontend: one of the two separate programs this project runs. Its own packages, own start command, own future deployment. → [[project-structure]]
- server/ — known (2026-08-02) — the Express backend: the second program. Its own package.json and node_modules because it's deployed separately (Render) from the client (Vercel). → [[project-structure]] [[nodejs]]

## /server — the Express backend
- app.js — known (2026-08-07) — builds and configures the Express app: middleware, all four CRUD routes (now async, using the Postgres pool), validation guards. Holds the `COLUMNS` constant that aliases `date_applied` back to `dateApplied`, so the API contract survived the database change unchanged. Exports the app without starting it, which is what lets tests import it. → [[separation-of-concerns]] [[express]]
- routes.test.js — known (2026-08-07) — tests the routes over real HTTP using supertest, against a throwaway database. Clears the table before each test so no test depends on another. → [[automated-testing]] [[test-runner]]
- test.db — data (2026-08-07) — throwaway database used only by `npm test`, via DB_PATH. Gitignored; deleting it costs nothing. → [[environment-variables]]
- index.js — known (2026-08-07) — the entry point, three lines: import the app and put it on port 3000. Everything else moved to app.js in task 7.5 so tests could import the app without starting a server. Its one job is the one that differs in production. → [[separation-of-concerns]] [[multiple-servers]]
- .env — config (2026-08-04) — local values for this machine only: currently just DB_PATH. **Gitignored.** Loaded by `--env-file` in the dev and seed scripts; in production the host injects these directly instead. Will hold real secrets from section 8. → [[environment-variables]] [[gitignore]]
- .env.example — known (2026-08-04) — committed companion to .env: the same keys, no real values. Documents which variables the app needs so a fresh clone isn't guessing. → [[environment-variables]]
- db.js — known (2026-08-07) — owns the Postgres connection pool and the schema. Reads DATABASE_URL from the environment and throws immediately if it's missing. Creates the table with top-level await, so it's ready before anything imports this file. → [[postgresql]] [[connection-pooling]] [[prod-env-variables]]
- .env.test — config (2026-08-07) — DATABASE_URL for the throwaway `jobtracker_test` database. Gitignored: unlike task 7.5's `DB_PATH=test.db`, a connection string carries a password and can't live in package.json. → [[prod-env-variables]] Opens (or creates) job-tracker.db and runs CREATE TABLE IF NOT EXISTS on every start. Exports one shared connection, so every importer gets the same one. This is the *recipe*; the data lives elsewhere. → [[sqlite]] [[sql]] [[tables-schema]]
- validation.js — known (2026-08-06) — the rules about what a valid application is, as pure functions with no database, network or Express in sight. Lives apart from index.js so it can be tested without starting a server. → [[validation]] [[pure-functions]] [[separation-of-concerns]]
- validation.test.js — known (2026-08-06) — automated checks on validation.js. Found and run by `npm test` via the `*.test.js` naming convention; needs no server, no database and no env file. → [[automated-testing]] [[test-runner]]
- seed.js — known (2026-08-04) — puts the database into a known starting state: clears the applications table, then inserts the four sample records via a prepared statement. Run by hand with `node seed.js`, never by the server. Safe to re-run because it deletes first. → [[sql-queries]] [[sql-injection]]
- job-tracker.db — **obsolete** (2026-08-07) — the old SQLite database, replaced by Postgres in section 8. Nothing reads it. Safe to delete; kept for now only in case an old row is wanted. Still gitignored.
- ~~job-tracker.db — data (2026-08-02)~~ — the actual SQLite database: a single binary file holding your rows. **Gitignored, and therefore not backed up by anything** — unlike node_modules it cannot be regenerated. Replaced by Postgres in section 8. → [[sqlite]] [[gitignore]]
- package.json — known (2026-08-02) — the server's own recipe. Lists express, and carries `"type": "module"` so Node accepts `import`/`export` instead of `require()`. The `"main": "index.js"` field is why that filename is conventional. Carries the `dev` (node --watch) and `start` (plain node) scripts — dev for building, start for what a production host runs. → [[npm-packages]] [[esm-vs-commonjs]] [[npm-scripts]]
- package-lock.json — known (2026-08-02) — exact versions of all 65 installed packages. → [[npm-packages]] [[semantic-versioning]]
- node_modules/ — generated (2026-08-02) — 65 downloaded packages (Express and its dependency tree). Machine-made, never edit, rebuildable with `npm install`. Ignored via the root .gitignore. → [[npm-packages]] [[gitignore]]

## /client — the React app (scaffolded by Vite, task 1.2)
- package.json — known (2026-07-31) — the recipe: which packages this app needs. `dependencies` ship to the browser (react, react-dom); `devDependencies` are build-time tools only. You edit this. → [[npm-packages]]
- package-lock.json — known (2026-07-31) — the exact versions of all 105 installed packages, so the recipe reproduces precisely instead of approximately. npm maintains it; you commit it, you don't edit it. → [[npm-packages]]
- node_modules/ — generated (2026-07-31) — 98 MB of downloaded packages. Machine-made, never edit, rebuildable any time with `npm install`. Kept out of git entirely. → [[npm-packages]] [[gitignore]]
- .gitignore — known (2026-07-31) — the list of paths git must never track. Kept 4,350 files down to 17. → [[gitignore]]
- eslint.config.js — known (2026-08-07) — ESLint's settings: which files to lint, which preset rule sets to extend (core JS, React Hooks, React Refresh), and which globals exist so browser APIs aren't flagged as undefined. Toured in task 8.4. **No custom `rules` block yet** — adding `no-template-curly-in-string` is parked. → [[linting]]
- .env — config (2026-08-07) — VITE_API_URL, the backend's base address. Gitignored for consistency, though **not secret**: Vite bakes it into the public bundle. → [[prod-env-variables]]
- .env.example — known (2026-08-07) — committed, and unlike the server's it carries the real value, because there's no secret to withhold. → [[prod-env-variables]]
- index.html — known (2026-07-31) — the one and only web page in the app. Its `<body>` holds an empty `<div id="root">` for React to fill, and a script tag pointing at main.jsx. Everything visible is put there by JavaScript — except the `<title>`, which is set before React runs. → [[react-component]]
- vite.config.js — known (2026-07-31) — Vite's settings; the only meaningful line is `plugins: [react()]`. Gets edited in section 4 to talk to the backend. → [[vite]]
- README.md — known (2026-07-31) — Vite's generic blurb; to be replaced with a description of this project.
- public/ — known (2026-07-31) — files served exactly as-is at a plain URL. Now holds only favicon.svg (the tab icon); the demo's icons.svg was deleted in task 1.4. Contrast with imported files under src/, which Vite processes. → [[vite]]

## /client/src — the React source you actually write
- main.jsx — known (2026-07-31) — the entry point: grabs `#root` from index.html and mounts `<App />` into it. Middle link of the chain. Also imports index.css, which is what makes those styles global. → [[imports-exports]] [[react-component]]
- App.jsx — known (2026-07-31) — the root component, and the first file you wrote. Holds no data of its own since task 4.3 — it keeps `applications`, `loading` and `error` in state, fetches from the server once on load via useEffect, and renders whichever of the four situations applies (loading / failed / empty / list). The hardcoded array is gone; the server is the single source. → [[react-component]] [[jsx]] [[list-rendering]] [[react-keys]] [[react-state]] [[useeffect]] [[fetch]] [[api]]
- ApplicationCard.jsx — known (2026-08-05) — draws one job application, given one via props, plus a status dropdown and a Delete button. Owns no state: both controls report upward via the `onStatusChange` and `onDelete` callbacks. Knows nothing about arrays, indexes, or where the data came from — which is why it survives unchanged when the data moves to a server (section 4) and then a database (section 5). Its status badge builds its own class name from the data. → [[props]] [[react-component]] [[template-literals]]
- ApplicationForm.jsx — known (2026-08-05) — the "add an application" form. Holds its own five `useState` values and controlled fields; on submit it POSTs the new application to the server. If the server rejects it, the form shows the returned errors and keeps what the user typed; if it succeeds, it tells its parent via the `onApplicationAdded` callback prop and clears itself. Knows nothing about the list. → [[html-forms]] [[react-state]] [[controlled-inputs]] [[event-handlers]] [[wiring-ui-actions]]
- index.css — known (2026-08-01) — global styles for the whole app, reaching the page via main.jsx's import. Holds the page frame, the card, and the status badge rules. Global because main.jsx imports it — there is no per-component stylesheet in this project. → [[css-styling]] [[accessibility-contrast]]

Deleted in task 1.4 (recoverable from git history): src/App.css, src/assets/, public/icons.svg — all Vite demo content nothing referenced once App.jsx was rewritten.
