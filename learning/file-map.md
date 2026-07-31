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
- .git/ — known (2026-07-31) — the repository itself: every commit ever made lives here. Hidden (leading dot). Never edit by hand; you change it only through git commands. → [[git-commit]]
- client/ — known (2026-07-31) — the React frontend: one of the two separate programs this project runs. Its own packages, own start command, own future deployment. The backend will live beside it in server/. → [[project-structure]]

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
- App.jsx — known (2026-07-31) — the root component, and the first file you wrote: a function returning the Job Tracker heading and tagline as JSX. Imports nothing. Everything you build in section 2 grows from here. → [[react-component]] [[jsx]]
- index.css — known (2026-07-31) — global styles for the whole app, reaching the page via main.jsx's import. Emptied in task 1.4; you fill it in section 2. → [[css-styling]]

Deleted in task 1.4 (recoverable from git history): src/App.css, src/assets/, public/icons.svg — all Vite demo content nothing referenced once App.jsx was rewritten.
