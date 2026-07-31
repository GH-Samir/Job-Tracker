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
- evidence: Ran git init/add/commit unaided. Correctly named the "untracked files" heading before seeing it. Predicted the staged heading as "tracked files" (actual: "Changes to be committed") — corrected toward staging being a queue of changes, not a file status. Correctly predicted `git log --oneline` would print one line beginning with the commit hash. Task 1.3: committed the scaffold unprompted between sessions (311ba79 "install react and its dependancies and vite"); ran `git diff` on a deliberate breakage and read it correctly ("changed the id"); used `git restore` to undo it. Shown the -/+ diff convention.

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
- evidence: Scaffolded into the wrong folder (terminal was in learning/); ran `pwd` and correctly read off the cause — "client is now under job tracker, not learning" after fixing with `mv client ..`. Correctly predicted moving the folder would NOT break it, reasoning "the packages aren't directory specific". Vocabulary met: pwd, cd, mv, `..`, Ctrl+C.

## vite
- status: practicing
- depends-on: npm-packages
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Told what Vite is (translates React into what browsers understand + dev server). Ran `npm create vite@latest client -- --template react` themselves. Predicted the scaffold would yield an immediately-working app — correct, but for a reason they hadn't accounted for (Vite 8 auto-installs and starts; older versions require a separate `npm install`). Task 1.3: ran `npm run dev` and confirmed the app in the browser at localhost:5173. Toured vite.config.js (plugins: [react()]) and the public/ vs src/assets/ split — told, not yet checked back.

## npm-scripts
- status: introduced
- depends-on: npm-packages
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Asked how npm resolves the word `dev`; first answered "it looks in main.jsx and follows down the chain" — conflated the browser runtime chain with npm's command lookup. Redirected to package.json's `scripts` section and correctly read off `vite`. Shown the dev/build/preview/lint convention. Worth re-checking.

## imports-exports
- status: introduced
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Walked through main.jsx's four imports; shown the package-name (`'react'`) vs relative-path (`'./App.jsx'`) distinction, and `export default App` as the other half of `import App`. Told, not yet checked or written.

## reading-errors
- status: practicing
- depends-on: local-environment
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Predicted correctly and with the right mechanism that removing `id="root"` would break the page — "wouldn't load since it wouldn't know where to find the html with id root". Made the edit, saw the blank page, opened DevTools console when prompted and reported the real error ("Target container is not a DOM element. at main.jsx:6:1"). Shown: getElementById returns null when it finds nothing, and the error's file/line is where code *crashed*, not where the bug *is*. Needed a nudge to open the console at all — check that next time something breaks.

## npm-packages
- status: practicing
- depends-on: nodejs
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Read package.json unaided and explained the 2-vs-105 gap in own words: "i might only use 2 in the program (react and react-dom) but they are dependant on all 105". Shown dependencies vs devDependencies and package-lock.json as the exact-version recipe; not yet checked back.

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
- status: introduced
- depends-on: why-react, jsx
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Toured the three-file chain (index.html's empty #root div → main.jsx mounts App into it → App.jsx returns the markup) and correctly answered where the visible page content comes from ("from the main.jsx script"). Shown the component skeleton — a function that returns markup, exported by default. Said "makes sense" but has not yet written or edited one; first authorship due in task 1.4.

## jsx
- status: introduced
- depends-on: why-react
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Shown JSX as HTML-looking syntax inside JavaScript that browsers can't read and Vite translates — hence the .jsx extension. Also shown the `<>...</>` fragment and why a component returns exactly one thing. Told, not yet checked.

## props
- status: seed
- depends-on: react-component
- introduced: —
- last-reviewed: —
- evidence: —

## list-rendering
- status: seed
- depends-on: react-component
- introduced: —
- last-reviewed: —
- evidence: —

## css-styling
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

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
