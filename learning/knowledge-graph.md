# Knowledge graph

<!-- statuses: seed → introduced → practicing → understood -->
<!-- seed: not yet taught | introduced: explained once | practicing: used it with help | understood: explained in own words + passed a quiz -->

## why-javascript
- status: introduced
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Explained that one language for frontend+backend halves the syntax load; noted large support community and SE-job relevance.

## typescript
- status: introduced
- depends-on: why-javascript
- introduced: 2026-07-31
- last-reviewed: —
- evidence: Told what it is (JavaScript + type labels on data); parked as a later upgrade.

## why-react
- status: introduced
- depends-on: why-javascript
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Weighed HTML/CSS-first vs React; chose React given prior HTML/CSS experience and job-relevance.

## why-node-express
- status: introduced
- depends-on: why-javascript
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Explained Node runs JS outside the browser; Express adds conventions/helpers for smooth server interactions.

## why-relational-database
- status: introduced
- depends-on: database
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Explained consistent/structured data fits tables (one row per entry); NoSQL is for unpredictable data.

## why-deployment-complex
- status: introduced
- depends-on: deployment
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Identified the database as part of it; corrected toward three running, connected services (frontend, backend, database) needing to be wired together.

## git-commit
- status: practicing
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Ran git init/add/commit unaided. Correctly named the "untracked files" heading before seeing it. Predicted the staged heading as "tracked files" (actual: "Changes to be committed") — corrected toward staging being a queue of changes, not a file status. Correctly predicted `git log --oneline` would print one line beginning with the commit hash. Task 1.3: committed the scaffold unprompted between sessions (311ba79 "install react and its dependancies and vite"); ran `git diff` on a deliberate breakage and read it correctly ("changed the id"); used `git restore` to undo it. Shown the -/+ diff convention. Task 1.5: reviewed with `git diff --staged` before committing and wrote an imperative, diff-describing message unaided (81d1252). Five commits made, all by their own hand.

## gitignore
- status: practicing
- depends-on: git-commit
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Correctly said node_modules should not be committed, but reasoned "not all the packages are needed" — corrected toward the real rule: they're all needed, but rebuildable from package.json, and git tracks what you author, not what a machine generates. Then correctly described .gitignore's behaviour ("it will list all of them except the ones in gitignore") and ballparked the surviving file count at 9 (actual 16) by reasoning from what Vite generates.

## local-environment
- status: practicing
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Scaffolded into the wrong folder (terminal was in learning/); ran `pwd` and correctly read off the cause — "client is now under job tracker, not learning" after fixing with `mv client ..`. Correctly predicted moving the folder would NOT break it, reasoning "the packages aren't directory specific". Task 1.4: ran `rm -r` on three paths, correctly predicting the running app would keep working "since theyre not used". Vocabulary met: pwd, cd, mv, rm -r, `..`, Ctrl+C. Told that rm has no OS-level undo and git is the only net. Task 2.1: ran `npm run dev` from the repo root and hit ENOENT on package.json — **second working-directory mistake of the project**. Diagnosed it themselves once pointed at the error's path. Reinforced: the terminal's location is invisible state; run `pwd` whenever a command misbehaves.

## vite
- status: practicing
- depends-on: npm-packages
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Told what Vite is (translates React into what browsers understand + dev server). Ran `npm create vite@latest client -- --template react` themselves. Predicted the scaffold would yield an immediately-working app — correct, but for a reason they hadn't accounted for (Vite 8 auto-installs and starts; older versions require a separate `npm install`). Task 1.3: ran `npm run dev` and confirmed the app in the browser at localhost:5173. Toured vite.config.js (plugins: [react()]) and the public/ vs src/assets/ split — told, not yet checked back.

## git-staging
- status: practicing
- depends-on: git-commit
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 1.5: said unprompted that unrelated app and docs changes should NOT share a commit, "so we should be able to undo one and keep the other". Staged selectively with `git add client`. Correctly predicted that plain `git diff` would not show the staged App.jsx rewrite. **Recurring slip to watch:** twice now has said "tracked" where the word is "staged" (task 1.1 and again here) — tracked = git watches the file at all; staged = queued for the next commit. Re-check this one.

## npm-scripts
- status: introduced
- depends-on: npm-packages
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Asked how npm resolves the word `dev`; first answered "it looks in main.jsx and follows down the chain" — conflated the browser runtime chain with npm's command lookup. Redirected to package.json's `scripts` section and correctly read off `vite`. Shown the dev/build/preview/lint convention. Worth re-checking.

## imports-exports
- status: practicing
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Walked through main.jsx's four imports; shown the package-name (`'react'`) vs relative-path (`'./App.jsx'`) distinction, and `export default App`. Task 1.4: correctly predicted that deleting assets/CSS before rewriting App.jsx would error because the imports would point at missing files, which set the work order. Traced leftover styling to `import './index.css'` in main.jsx after a nudge (first guess also included index.html, which contains no styles). Task 2.2: wrote `import ApplicationCard from "./ApplicationCard"` unaided (extension omitted — works via Vite resolution; noted that main.jsx uses the explicit `.jsx` form and consistency is the point).

## reading-errors
- status: practicing
- depends-on: local-environment
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Predicted correctly and with the right mechanism that removing `id="root"` would break the page — "wouldn't load since it wouldn't know where to find the html with id root". Made the edit, saw the blank page, opened DevTools console when prompted and reported the real error ("Target container is not a DOM element. at main.jsx:6:1"). Shown: getElementById returns null when it finds nothing, and the error's file/line is where code *crashed*, not where the bug *is*. Task 2.1: asked to predict a breakage and answered "i dont know" — honest, and the right trigger to go look rather than guess. Still needed a nudge to open the console (second time). Then read an ENOENT stack trace and diagnosed it unaided from the path ("needs to look in client folder"), and fixed "application is not defined" by spotting the singular/plural mismatch themselves. Trajectory is good; the remaining gap is reaching for the console unprompted.

## npm-packages
- status: practicing
- depends-on: nodejs
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Read package.json unaided and explained the 2-vs-105 gap in own words: "i might only use 2 in the program (react and react-dom) but they are dependant on all 105". Task 1.5 tour check passed unaided: "package-lock is like the recipe, the exact versions of the packages needed, node modules are the packages themselves, which do not need to be shipped hence why theyre in the gitignore" — one nudge on wording (node_modules IS needed to run; it's just rebuildable, so not worth storing in git).

## linting
- status: introduced
- depends-on: npm-packages
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Hit the scaffolder's oxlint/ESLint prompt and stopped to ask rather than guessing. Told what a linter is (reads code without running it, flags mistakes); chose ESLint on the "boring, widely-used choice" rationale. Has not yet run or configured it.

## project-structure
- status: introduced
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Asked why a backend needs its own folder, answered "it'll be easier to differentiate between backend and frontend" — right instinct, partial reason; extended toward the real one (two separately-run, separately-deployed programs with their own packages and start commands). Locked in client/ + server/ layout.

## react-component
- status: practicing
- depends-on: why-react, jsx
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Toured the three-file chain (index.html's empty #root div → main.jsx mounts App into it → App.jsx returns the markup) and correctly answered where the visible page content comes from ("from the main.jsx script"). Task 1.4: authored the body of App.jsx from a TODO skeleton — correct h1 and p, first code written in this project. Task 2.2: built a second component (ApplicationCard) and asked unprompted whether a component is like a class definition — good instinct on "define once, reuse many"; corrected toward a component being literally a function (no instances, no inheritance, closer to a pure function), with class components named as legacy they'll meet online. Also shown: component names must be capitalised in JSX or they're treated as HTML tags. State still ahead.

## jsx
- status: practicing
- depends-on: why-react
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Shown JSX as HTML-looking syntax inside JavaScript that browsers can't read and Vite translates — hence the .jsx extension, plus `<>...</>` fragments and `{/* */}` comments. Task 1.4: wrote correct JSX inside the fragment unaided. Task 2.1: used `{}` interpolation correctly across five elements to pull values out of an object — the data-to-markup bridge. Task 2.2: got stuck on `{/* ... */}` — wrote JSX *inside* an unterminated comment brace, leaving the file unparseable. Needed the fix pointed out: the curly braces belong to the comment and must wrap it entirely. Hasn't yet put an expression (rather than a plain lookup) inside braces.

## js-objects
- status: practicing
- depends-on: why-javascript
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.1: explained in own words why one object beats five loose variables — "we can have these fields grouped to a single application, instead of a bunch of variables". Wrote three complete application objects (company, role, dateApplied, status, deadline) unaided, commas correct. Shown const vs let and camelCase keys.

## js-arrays
- status: practicing
- depends-on: js-objects
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.1: converted a single object into an array of three and repointed the markup at `applications[0].company` — index-then-dot access, correct on first try from one worked example. Zero-indexing shown, not yet checked back.

## semantic-html
- status: practicing
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.1: first pass used h2/h3/h4/h5/h6 for the five fields, treating heading level as font size. Shown that h1–h6 declare a document outline that screen readers and search engines navigate, and that sizing is CSS's job. Then chose company alone as the heading — "company heading since its most unique" — and made the other four `<p>`. Reason given was uniqueness rather than "it's the card's title", but the call was right.

## iso-dates
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: Flagged in task 2.1 and deliberately parked: their fake data uses '12/07/2026', which is ambiguous across locales and doesn't sort. Comes due in section 5 when the database needs to order by date. → [[sql]] [[tables-schema]]

## props
- status: practicing
- depends-on: react-component
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.2: described the mechanism before seeing the syntax — "you would run the application card component function on an application, and it would generate the markup for it". Wrote `<ApplicationCard application={applications[0]} />` and `props.application.role` correctly across two files. Correctly predicted a second card would cost 1 line vs ~8 for copy-paste. Asked why the card not knowing its index is good, answered "lets me sort it however i like" — a real consequence, but the general principle (the card is decoupled from its data source) was supplied rather than retrieved. Shown but not yet checked: props are read-only and flow parent → child. Destructuring (`{ application }`) deliberately not taught yet — the props-is-one-object model comes first.

## list-rendering
- status: seed
- depends-on: react-component
- introduced: —
- last-reviewed: —
- evidence: —

## css-styling
- status: introduced
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Shown the convention — index.css is global because main.jsx (the entry point) imports it; App.css was per-component. Emptied index.css and observed the result, correctly reporting "no styling"; told that what remains is the browser's own default stylesheet, not an absence of style. Has prior HTML/CSS experience but has written no CSS in this project yet — section 2.

## react-state
- status: seed
- depends-on: react-component
- introduced: —
- last-reviewed: —
- evidence: —

## controlled-inputs
- status: seed
- depends-on: react-state
- introduced: —
- last-reviewed: —
- evidence: —

## nodejs
- status: introduced
- depends-on: why-node-express
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Told what Node is (runs JavaScript outside the browser) and that npm ships with it. Confirmed installed: Node v22.22.2, npm v10.9.7. Not yet used directly — full treatment due in section 3.

## express
- status: seed
- depends-on: nodejs
- introduced: —
- last-reviewed: —
- evidence: —

## routes-endpoints
- status: seed
- depends-on: express
- introduced: —
- last-reviewed: —
- evidence: —

## http-request-response
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## multiple-servers
- status: seed
- depends-on: express, vite
- introduced: —
- last-reviewed: —
- evidence: —

## api
- status: seed
- depends-on: http-request-response, routes-endpoints
- introduced: —
- last-reviewed: —
- evidence: —

## fetch
- status: seed
- depends-on: api, async-await
- introduced: —
- last-reviewed: —
- evidence: —

## json
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## async-await
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## get-request
- status: seed
- depends-on: http-request-response
- introduced: —
- last-reviewed: —
- evidence: —

## cors
- status: seed
- depends-on: api, multiple-servers
- introduced: —
- last-reviewed: —
- evidence: —

## sql
- status: seed
- depends-on: why-relational-database
- introduced: —
- last-reviewed: —
- evidence: —

## tables-schema
- status: seed
- depends-on: why-relational-database
- introduced: —
- last-reviewed: —
- evidence: —

## sqlite
- status: seed
- depends-on: sql
- introduced: —
- last-reviewed: —
- evidence: —

## sql-queries
- status: seed
- depends-on: sql, tables-schema
- introduced: —
- last-reviewed: —
- evidence: —

## backend-db-connection
- status: seed
- depends-on: express, sqlite
- introduced: —
- last-reviewed: —
- evidence: —

## environment-variables
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## post-put-delete
- status: seed
- depends-on: http-request-response, routes-endpoints
- introduced: —
- last-reviewed: —
- evidence: —

## crud-pattern
- status: seed
- depends-on: post-put-delete, sql-queries
- introduced: —
- last-reviewed: —
- evidence: —

## wiring-ui-actions
- status: seed
- depends-on: fetch, react-state
- introduced: —
- last-reviewed: —
- evidence: —

## error-handling
- status: seed
- depends-on: http-request-response
- introduced: —
- last-reviewed: —
- evidence: —

## automated-testing
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## test-runner
- status: seed
- depends-on: automated-testing
- introduced: —
- last-reviewed: —
- evidence: —

## validation
- status: seed
- depends-on: error-handling
- introduced: —
- last-reviewed: —
- evidence: —

## edge-cases
- status: seed
- depends-on: automated-testing
- introduced: —
- last-reviewed: —
- evidence: —

## deployment
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## hosting
- status: seed
- depends-on: deployment
- introduced: —
- last-reviewed: —
- evidence: —

## postgresql
- status: seed
- depends-on: sql, sqlite
- introduced: —
- last-reviewed: —
- evidence: —

## prod-env-variables
- status: seed
- depends-on: environment-variables, deployment
- introduced: —
- last-reviewed: —
- evidence: —

## connecting-services
- status: seed
- depends-on: deployment, why-deployment-complex
- introduced: —
- last-reviewed: —
- evidence: —

## db-migration
- status: seed
- depends-on: sqlite, postgresql
- introduced: —
- last-reviewed: —
- evidence: —
