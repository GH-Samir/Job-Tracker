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
- evidence: Correctly said node_modules should not be committed, but reasoned "not all the packages are needed" — corrected toward the real rule: they're all needed, but rebuildable from package.json, and git tracks what you author, not what a machine generates. Then correctly described .gitignore's behaviour ("it will list all of them except the ones in gitignore") and ballparked the surviving file count at 9 (actual 16) by reasoning from what Vite generates. Task 2.3, unaided synthesis after the first push came to 61 KiB: "most of it are the packages, which are in gitignore, i would get a working app back from github since i have package-lock.json which tells me which packages npm has to install." That's the whole rebuildability argument in their own words.

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

## public-key-auth
- status: practicing
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.3: explained the encryption direction unprompted — "public key is shared without any privacy, and it is used to encrypt. private key is kept private and used to decrypt". Shown the second direction (sign with private, verify with public) which is what SSH auth actually does, and that the private key is never transmitted. **Asked "should i give you the keys?"** — good instinct to check; told the rule that a private key never leaves the machine. Predicted `ssh-keygen` would create one file; it creates two (a pair = two halves), and the permission bits (600 vs 644) encode the secrecy model. Generated an ed25519 pair with a passphrase, added the public half to GitHub, verified with `ssh -T`. Correctly predicted GitHub would not give a shell.

## git-remotes
- status: practicing
- depends-on: git-commit, public-key-auth
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.3: asked unprompted "whats the point of pushing my commits and when should i do it?" — the reason this task was added to the plan at all. Correctly predicted `git push` sends all 11 commits, not just the latest ("push sends history, not a snapshot"). Ran remote add, `git push -u origin main`, and `git remote set-url` after a case-mismatch redirect (`job-tracker` vs `Job-Tracker`). Misread the "repository moved" notice as being about the local folder name — corrected toward it being capitalisation of the remote name. Renamed master → main and was told why the industry moved. Shown: `origin` is a convention, `-u` sets upstream tracking.

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
- evidence: Task 2.1: first pass used h2/h3/h4/h5/h6 for the five fields, treating heading level as font size. Shown that h1–h6 declare a document outline that screen readers and search engines navigate, and that sizing is CSS's job. Then chose company alone as the heading — "company heading since its most unique" — and made the other four `<p>`. Reason given was uniqueness rather than "it's the card's title", but the call was right. Task 2.5: shown that two unlabelled dates on a card is a *markup* problem no CSS can fix, and proposed the fix themselves ("i'd just add the date label in the same string before the date"); refined to a `<span className="label">` so the label is stylable. Also met `className` (not `class`, a reserved word) and `htmlFor` (not `for`).

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
- status: practicing
- depends-on: react-component, arrow-functions
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.4: wrote `{applications.map((application) => <ApplicationCard ... />)}` from a shown shape, replacing three hardcoded cards. First save had an unclosed outer brace — **fixed it themselves without being told**, which is a step up from the JSX-comment snag in 2.2. Correctly predicted that adding a fourth application changes zero lines of markup, and confirmed it. Shown: `{}` renders any JS expression, and React renders an array of elements in order.

## arrow-functions
- status: introduced
- depends-on: why-javascript
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.4: used `(application) => <ApplicationCard ... />` correctly, but from a template I supplied. Shown the `function (n) { return n * 2 }` equivalence and the implicit-return rule for single-expression bodies. Has not yet written one unprompted or used a braced multi-statement body.

## react-keys
- status: practicing
- depends-on: list-rendering
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.4: opened the console when prompted and found the "each child should have a unique key prop" warning — note the page looked fine, so this only surfaced by looking. Proposed `company` as the key with sound reasoning ("the other fields could repeat"); shown the same-company-twice failure and that no descriptive field is a safe identifier. **First attempt wrote the key as an element — `<key = application.id>` — rather than a prop**; corrected by pointing at their own `application={...}` from task 2.2. Told that React consumes `key` so it never reaches props. Connected `id` to the database primary key coming in section 5. → [[tables-schema]]

## immutability
- status: introduced
- depends-on: js-arrays
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 2.4: correctly answered that `numbers` is still `[1, 2, 3]` after `.map()` — map returns a new array rather than modifying the original. Told this is the same instinct as props being read-only, and that it becomes load-bearing at task 2.7 (state). Not yet tested where it matters.

## css-styling
- status: practicing
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-08-01
- evidence: Shown the convention — index.css is global because main.jsx imports it. Task 2.5: **self-calibrated as "i know how css works, just not the syntax very well"** — accurate, and the right thing to have said. Got stuck facing an empty stylesheet and asked for help; unblocked by worked examples and then wrote `.label` and the three `.status-*` rules with correct syntax unaided. Caught two design problems himself: that all three badges shared one background, and that mixed-case status data rendered inconsistently. Applied the DRY fix (lifting `text-transform` from three rules onto `.status`) once the duplication was named — same principle he met in task 2.2. Shown: shorthand value order (1/2/3/4 values), `rem` vs `px`, `margin: 0 auto` centering, `max-width` vs `width`, flexbox column + `gap`, `display: inline-block` for badges, the `border-radius: 999px` pill trick, and why browser default margins get zeroed. **Needs more reps starting from blank.**

## jsx-element-anatomy
- status: practicing
- depends-on: jsx
- introduced: 2026-07-31
- last-reviewed: 2026-08-01
- evidence: **Recurring failure — twice.** Task 2.4: wrote `key` as its own element (`<key = application.id>`) instead of a prop. Task 2.5: wrote `<p> className={...}</p>`, putting the attribute in the children slot because the `>` closed the tag too early. Needed the anatomy spelled out (`<tag attr={...}>children</tag>`) and a side-by-side against a working line in their own file before it landed. **Re-check this at the next opportunity** — it's the highest-value thing to make automatic, since every prop, event handler and style in React depends on it.

## template-literals
- status: introduced
- depends-on: why-javascript
- introduced: 2026-07-31
- last-reviewed: 2026-08-01
- evidence: Task 2.5: needed for the dynamic `className`. Struggled — first attempt had no backticks, wrong casing method, attribute in the wrong place, and dropped the visible content; the assembled line was ultimately handed over rather than derived. Did afterwards explain correctly why one copy of the status is lowercased and one isn't ("the one we're lowercasing may have capital letters"), sharpened to: one is read by CSS (case-sensitive), one by a person. Has not yet written a template literal unprompted.

## accessibility-contrast
- status: introduced
- depends-on: css-styling
- introduced: 2026-07-31
- last-reviewed: 2026-08-01
- evidence: Task 2.5: chose `#FF0000` for labels and bright amber for the pending badge; shown that red carries meaning (error/urgency) and shouldn't be spent decoratively — **reached the same conclusion independently**, proposing status colour-coding as the better use of red. Needed three passes to land a readable amber (#FFBF00 → #FFA500 → #8a5300). Shown the WCAG thresholds (4.5:1 normal text, 3:1 large) and the DevTools colour-picker contrast readout; confirmed the ratio jumped when the colour changed. Concept met, not yet self-applied.

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
