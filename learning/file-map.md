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
- .gitignore — known (2026-08-02) — repo-root ignore list, currently just `node_modules`. A .gitignore covers its own directory and everything below, so this one entry protects client/, server/, and anything added later. client/.gitignore still exists for Vite-specific entries (dist, logs, editor folders). → [[gitignore]]
- client/ — known (2026-07-31) — the React frontend: one of the two separate programs this project runs. Its own packages, own start command, own future deployment. → [[project-structure]]
- server/ — known (2026-08-02) — the Express backend: the second program. Its own package.json and node_modules because it's deployed separately (Render) from the client (Vercel). → [[project-structure]] [[nodejs]]

## /server — the Express backend
- index.js — known (2026-08-02) — the whole backend, for now: the Express app, a CORS middleware granting `http://localhost:5173`, a hardcoded `applications` array, `GET /` and `GET /api/applications`, listening on port 3000. Started with `node index.js`; runs until Ctrl+C. The array is a **temporary duplicate** of the one in client/src/App.jsx — the client's copy goes away in section 4. → [[express]] [[routes-endpoints]] [[http-request-response]] [[json]]
- package.json — known (2026-08-02) — the server's own recipe. Lists express, and carries `"type": "module"` so Node accepts `import`/`export` instead of `require()`. The `"main": "index.js"` field is why that filename is conventional. Carries the `dev` (node --watch) and `start` (plain node) scripts — dev for building, start for what a production host runs. → [[npm-packages]] [[esm-vs-commonjs]] [[npm-scripts]]
- package-lock.json — known (2026-08-02) — exact versions of all 65 installed packages. → [[npm-packages]] [[semantic-versioning]]
- node_modules/ — generated (2026-08-02) — 65 downloaded packages (Express and its dependency tree). Machine-made, never edit, rebuildable with `npm install`. Ignored via the root .gitignore. → [[npm-packages]] [[gitignore]]

## /client — the React app (scaffolded by Vite, task 1.2)
- package.json — known (2026-07-31) — the recipe: which packages this app needs. `dependencies` ship to the browser (react, react-dom); `devDependencies` are build-time tools only. You edit this. → [[npm-packages]]
- package-lock.json — known (2026-07-31) — the exact versions of all 105 installed packages, so the recipe reproduces precisely instead of approximately. npm maintains it; you commit it, you don't edit it. → [[npm-packages]]
- node_modules/ — generated (2026-07-31) — 98 MB of downloaded packages. Machine-made, never edit, rebuildable any time with `npm install`. Kept out of git entirely. → [[npm-packages]] [[gitignore]]
- .gitignore — known (2026-07-31) — the list of paths git must never track. Kept 4,350 files down to 17. → [[gitignore]]
- eslint.config.js — parked — settings for ESLint, the linter that reads your code and flags mistakes. Untouched so far; comes due when it first complains at you. → [[linting]]
- index.html — known (2026-07-31) — the one and only web page in the app. Its `<body>` holds an empty `<div id="root">` for React to fill, and a script tag pointing at main.jsx. Everything visible is put there by JavaScript — except the `<title>`, which is set before React runs. → [[react-component]]
- vite.config.js — known (2026-07-31) — Vite's settings; the only meaningful line is `plugins: [react()]`. Gets edited in section 4 to talk to the backend. → [[vite]]
- README.md — known (2026-07-31) — Vite's generic blurb; to be replaced with a description of this project.
- public/ — known (2026-07-31) — files served exactly as-is at a plain URL. Now holds only favicon.svg (the tab icon); the demo's icons.svg was deleted in task 1.4. Contrast with imported files under src/, which Vite processes. → [[vite]]

## /client/src — the React source you actually write
- main.jsx — known (2026-07-31) — the entry point: grabs `#root` from index.html and mounts `<App />` into it. Middle link of the chain. Also imports index.css, which is what makes those styles global. → [[imports-exports]] [[react-component]]
- App.jsx — known (2026-07-31) — the root component, and the first file you wrote. Holds no data of its own since task 4.3 — it keeps `applications`, `loading` and `error` in state, fetches from the server once on load via useEffect, and renders whichever of the four situations applies (loading / failed / empty / list). The hardcoded array is gone; the server is the single source. → [[react-component]] [[jsx]] [[list-rendering]] [[react-keys]] [[react-state]] [[useeffect]] [[fetch]] [[api]]
- ApplicationCard.jsx — known (2026-08-01) — draws one job application, given one via props. Knows nothing about arrays, indexes, or where the data came from — which is why it survives unchanged when the data moves to a server (section 4) and then a database (section 5). Its status badge builds its own class name from the data. → [[props]] [[react-component]] [[template-literals]]
- ApplicationForm.jsx — known (2026-08-02) — the "add an application" form. Holds its own state: five `useState` values, five controlled fields, and a submit handler that cancels the browser default and builds an application object. As of task 2.7 that object only reaches the console — handing it to App's list is section 6. → [[html-forms]] [[react-state]] [[controlled-inputs]] [[event-handlers]]
- index.css — known (2026-08-01) — global styles for the whole app, reaching the page via main.jsx's import. Holds the page frame, the card, and the status badge rules. Global because main.jsx imports it — there is no per-component stylesheet in this project. → [[css-styling]] [[accessibility-contrast]]

Deleted in task 1.4 (recoverable from git history): src/App.css, src/assets/, public/icons.svg — all Vite demo content nothing referenced once App.jsx was rewritten.
