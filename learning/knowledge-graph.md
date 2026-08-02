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
- status: understood
- depends-on: git-commit
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Correctly said node_modules should not be committed, but reasoned "not all the packages are needed" — corrected toward the real rule: they're all needed, but rebuildable from package.json, and git tracks what you author, not what a machine generates. Then correctly described .gitignore's behaviour ("it will list all of them except the ones in gitignore") and ballparked the surviving file count at 9 (actual 16) by reasoning from what Vite generates. Task 2.3, unaided synthesis after the first push came to 61 KiB: "most of it are the packages, which are in gitignore, i would get a working app back from github since i have package-lock.json which tells me which packages npm has to install." That's the whole rebuildability argument in their own words. **Task 3.1 — upgraded to understood.** Installing Express left 598 untracked files; asked why `.gitignore` wasn't protecting `server/`, answered unprompted: "lives in client so it doesn't affect server since it's in a different directory". Chose the root-level fix and got the count to 4. Two independent, unprompted, correct explanations on separate days — the rebuildability *why* and the directory-scoping *how*.

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
- status: practicing
- depends-on: npm-packages
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Task 1.3: asked how npm resolves the word `dev`; answered "it looks in main.jsx and follows down the chain" — conflated the browser runtime chain with npm's command lookup. Redirected to package.json's `scripts` and correctly read off `vite`. **Task 3.4 re-check: FAILED, same wrong answer** — asked where to add a `dev` script for the server, said "add server to the main.jsx, so it renders the server too". Re-taught, and the deeper misconception underneath it addressed (see [[multiple-servers]]). Then wrote `"dev": "node --watch index.js"` and `"start": "node index.js"` into server/package.json correctly. Also met: `start` and `test` are the two scripts npm lets you run without `run`. **Task 3.5 re-check: PASSED** — asked cold which file npm opens for `npm run dev`, answered "opens package.json scripts" with no prompting. Upgraded to practicing. Caveat: only one day after the re-teach, so this is short-gap recall. Ask again after a real break before considering understood.

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
- evidence: Read package.json unaided and explained the 2-vs-105 gap in own words: "i might only use 2 in the program (react and react-dom) but they are dependant on all 105". Task 1.5 tour check passed unaided: "package-lock is like the recipe, the exact versions of the packages needed, node modules are the packages themselves, which do not need to be shipped hence why theyre in the gitignore" — one nudge on wording (node_modules IS needed to run; it's just rebuildable, so not worth storing in git). **Task 3.1: predicted `npm install express` would create `public/` and `src/`** — conflating `npm create vite` (a scaffolder that generates project files) with `npm install` (which only downloads packages). Also predicted "a handful" of packages; actual 65, the same one-asks-for-many tree as React's 105.

## linting
- status: introduced
- depends-on: npm-packages
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Hit the scaffolder's oxlint/ESLint prompt and stopped to ask rather than guessing. Told what a linter is (reads code without running it, flags mistakes); chose ESLint on the "boring, widely-used choice" rationale. Has not yet run or configured it.

## project-structure
- status: practicing
- depends-on: none
- introduced: 2026-07-31
- last-reviewed: 2026-08-02
- evidence: Asked why a backend needs its own folder (task 2.2), answered "it'll be easier to differentiate between backend and frontend" — right instinct, partial reason; extended toward two separately-run, separately-deployed programs. **Task 3.1 retrieval, two days later and much sharper:** said unprompted that server/ "needs own package.json and package lock since the packages it will use will be different to the ones that frontend uses" — including the lock file without being asked. Shown the deployment consequence (Render installs from server/, Vercel from client/).

## semantic-versioning
- status: introduced
- depends-on: npm-packages
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 3.1: shown `"express": "^5.2.1"` — the caret meaning "any 5.x, never 6.x" — and major.minor.patch, where major signals a breaking change. Completes the package.json (accepted range) vs package-lock.json (exact installed version) picture. Told, not yet checked.

## esm-vs-commonjs
- status: introduced
- depends-on: imports-exports, nodejs
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 3.1: shown Node's two module systems — `require()`/`module.exports` (CommonJS, still Node's default) vs `import`/`export` (ESM), and that `"type": "module"` in package.json switches Node to ESM. Added the field themselves with correct comma placement. Rationale given: one syntax across client and server rather than switching per folder; cost named (most Node tutorials online are still CommonJS, so translation will be needed). Has not yet written server-side code in either style.

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
- evidence: Task 2.1: first pass used h2/h3/h4/h5/h6 for the five fields, treating heading level as font size. Shown that h1–h6 declare a document outline that screen readers and search engines navigate, and that sizing is CSS's job. Then chose company alone as the heading — "company heading since its most unique" — and made the other four `<p>`. Reason given was uniqueness rather than "it's the card's title", but the call was right. Task 2.5: shown that two unlabelled dates on a card is a *markup* problem no CSS can fix, and proposed the fix themselves ("i'd just add the date label in the same string before the date"); refined to a `<span className="label">` so the label is stylable. Also met `className` (not `class`, a reserved word) and `htmlFor` (not `for`). Task 2.6: omitted the `<label>` on the role field and, when asked to compare it against the working company block, added it. Shown why label/input pairing matters — bigger tap target, and a screen reader announcing "Company, edit text" rather than a bare "edit text".

## iso-dates
- status: practicing
- depends-on: none
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: **Task 2.7: converted all eight hardcoded dates to ISO** — got the unit order right first time (year-month-day), but used slashes (`2026/07/12`) and needed the hyphen convention pointed out. Both formats now agree with what `type="date"` emits. Display formatting (ISO → human-readable) deliberately parked. Flagged in task 2.1 and parked: the hardcoded data used '12/07/2026', ambiguous across locales and unsortable. Task 2.6 resolved it for *new* input — `<input type="date">` localises the display but always yields `YYYY-MM-DD`, which they saw for themselves in the submitted query string. **Open inconsistency to settle in 2.7:** the four hardcoded applications still use DD/MM/YYYY while the form now produces ISO, so the same field carries two formats. → [[sql]] [[tables-schema]]

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
- evidence: Shown the convention — index.css is global because main.jsx imports it. Task 2.5: **self-calibrated as "i know how css works, just not the syntax very well"** — accurate, and the right thing to have said. Got stuck facing an empty stylesheet and asked for help; unblocked by worked examples and then wrote `.label` and the three `.status-*` rules with correct syntax unaided. Caught two design problems himself: that all three badges shared one background, and that mixed-case status data rendered inconsistently. Applied the DRY fix (lifting `text-transform` from three rules onto `.status`) once the duplication was named — same principle he met in task 2.2. Shown: shorthand value order (1/2/3/4 values), `rem` vs `px`, `margin: 0 auto` centering, `max-width` vs `width`, flexbox column + `gap`, `display: inline-block` for badges, the `border-radius: 999px` pill trick, and why browser default margins get zeroed. **Needs more reps starting from blank.** Task 2.6: met descendant selectors (`.form label`), selector lists (`.form input, .form select`), and the `font: inherit` gotcha — form controls don't inherit the page font. Wrote `.form button` but stopped short: `cursor: pointer`, `font: inherit` and padding all had to be pointed out after the fact. **Pattern to watch:** produces valid CSS but under-finishes a rule; doesn't yet self-check a new element against the ones beside it.

## jsx-element-anatomy
- status: practicing
- depends-on: jsx
- introduced: 2026-07-31
- last-reviewed: 2026-08-02
- evidence: **Failed twice.** Task 2.4: wrote `key` as its own element (`<key = application.id>`). Task 2.5: wrote `<p> className={...}</p>`, attribute in the children slot because the `>` closed the tag early. Needed the anatomy spelled out and a side-by-side against a working line in their own file. **Task 2.6 review: PASSED** — asked cold to write a `<p>` with class `note` and text `Hello`, produced `<p className="note">...` with the attribute correctly placed (two lesser slips: `("Hello")` for the text child, and `</p/`). **Task 2.7: FAILED AGAIN — third occurrence.** Wrote `onsubmit={handleSubmit}` as a line between `<button>` and `</form>`, i.e. in the children slot, plus lowercase instead of camelCase. Note the pattern: retrieval succeeds when the anatomy *is* the question, and fails when attention is on a new concept (keys, dynamic classNames, event handlers). Given the explicit rule to apply mechanically: *anything given to an element goes between the tag name and the `>`; everything after the `>` is content the user sees.* **Do not upgrade until it survives at least one lesson where it isn't the focus.**

## html-forms
- status: practicing
- depends-on: semantic-html
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 2.6: said unprompted that `id` should not be a form field and gave the right reason — "might be a conflict in IDs, two applications with the same ID which will cause errors". Reasoned from the status field's fixed vocabulary to a dropdown without being told ("they might enter an invalid status... would reach for a multiple choice dropdown menu"), including the failure mode (an unmatched `.status-*` class silently loses its styling). **Correctly predicted the default submit behaviour — "nothing happens except page reload"** — then read the query string out of the address bar. Shown: `name` is the submission key vs `id` for label pairing, `<option value>` (machine) vs its text (human), forms GET to `action` by default. Sets up `preventDefault` in 2.7.

## validation
- status: introduced
- depends-on: error-handling
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 2.6: met the idea early via the status dropdown — shown the principle "make invalid states impossible to express" as better than validating after the fact. Also shown in 2.5 that `'offer'`/`'Offer'`/`'OFFER'` being three distinct values is the problem validation exists to remove. Not yet written any validation code — section 7.

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
- status: practicing
- depends-on: react-component
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 2.7: wrote all five `useState` declarations unaided, including `useState('PENDING')` for the status field so the dropdown's default matched its state. **Asked to be told rather than attempting** the "why not just `let company = ''`" question — the two reasons (a component function re-runs and resets plain variables; assigning to one doesn't trigger a re-render) were supplied, not retrieved. Tied back to their own task-2.2 class question: a class instance would keep `this.company` naturally; function components have no instance, so state has to live outside the call. **Re-check the why.**

## controlled-inputs
- status: practicing
- depends-on: react-state
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 2.7: wired all five fields with `value` + `onChange` after one worked example. **Correctly predicted** that removing `onChange` while keeping `value` would freeze the box — "it will not update according to the user keystrokes, and will remain as its default value" — which is the round trip understood. Needed help with `<select>`: was thrown by it having children rather than being self-closing. Shown: React as single source of truth, DOM merely displaying.

## event-handlers
- status: practicing
- depends-on: react-state
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 2.7: used `onChange={(e) => setX(e.target.value)}` across five fields and wired `onSubmit={handleSubmit}`. Shown `e.preventDefault()` cancelling the browser default, and the `handleSubmit` vs `handleSubmit()` trap (pass the function, don't call it) — warned in advance, so not tested. Confirmed the result themselves: no reload, no URL change, object logged.

## object-shorthand
- status: introduced
- depends-on: js-objects
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 2.7: shown that `{ company, role }` equals `{ company: company, role: role }`. Wrote the long form and left it that way after the shorthand was explained — **shown, not adopted**. Worth revisiting; it's ubiquitous in real code.

## destructuring
- status: introduced
- depends-on: js-arrays
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 2.7: met array destructuring via `const [company, setCompany] = useState('')`, with the equivalence to `pair[0]`/`pair[1]` spelled out. Used it five times but always from the same template; hasn't destructured anything else, and hasn't met object destructuring (which is how props are usually written — deliberately still deferred).

## nodejs
- status: introduced
- depends-on: why-node-express
- introduced: 2026-07-31
- last-reviewed: 2026-07-31
- evidence: Told what Node is (runs JavaScript outside the browser) and that npm ships with it. **Task 3.2: ran `node index.js` directly** — first time invoking Node on their own file rather than through a tool. Grasped that a server process holds the terminal until Ctrl+C, and that this is why two terminals are needed. Also met exit codes (`$?`, 0 = success) though the demo was inconclusive. **Task 3.4:** met `node --watch` (built in since Node 18 — nodemon named as the package this replaces, and why it's no longer needed). Read the restart output themselves ("says restarting 'index.js' then listening on http") and was shown that this is a **kill-and-restart, not a hot swap** — so anything held in memory dies with the process. That's the concrete reason section 5 needs a database, and the contrast with Vite's hot module replacement, which preserves React state.

## express
- status: practicing
- depends-on: nodejs
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 3.2: wrote the route handler body (`res.send`) and the `app.listen(3000, callback)` from a described shape, both correct first time. Shown the three pieces — `express()` builds the app, `app.get` registers a route, `app.listen` takes a port and waits. Noted that the route callback is the same shape as their `onChange` handlers: a function handed over to be called later. Task 3.3: met `res.json()` vs `res.send()` — json stringifies *and* sets the Content-Type header. Also met the restart problem: Node reads index.js once at startup, so every edit needs Ctrl+C and a re-run (fixed in 3.4).

## routes-endpoints
- status: practicing
- depends-on: express
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 3.2: **correctly predicted** that visiting an undefined path would give "cannot get /applications" before trying it. Confirmed 404 vs 200 in the DevTools Network tab unprompted once pointed at the Status column. Shown routing as a (method, path) → handler table, and the 2xx/4xx/5xx families with the 4xx-is-your-fault / 5xx-is-the-server's split. Task 3.3: added a second route, `GET /api/applications`, unaided. Shown the `/api/` prefix convention — data for programs vs pages for humans — which becomes the proxy rule in section 4.

## http-request-response
- status: practicing
- depends-on: none
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 3.2: described the exchange in own words before any vocabulary was supplied — "browser makes a request to vite, vite provides and sends to browser". Given the terms client/request/server/response, and the asymmetry that a server never speaks first. Read real status codes out of the Network tab (200 and 404). Task 3.3: met **response headers** — shown that `Content-Type: application/json` is what makes the browser pretty-print, and that the header is a label on the bytes rather than part of them. Ran `curl -i` themselves and saw the same response unformatted, making the display-vs-data distinction concrete.

## multiple-servers
- status: practicing
- depends-on: express, vite
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 3.2: **predicted the port clash correctly** ("port is already in use, wont start") before trying to run a second copy. Worked out on their own why the terminal stopped responding — "the terminal is busy running the server, similar to vite on the frontend" — connecting it to Vite unprompted. Shown: a port is a numbered door, one program per door, and a server is a program that never finishes. Ran Vite on 5173 and Express on 3000 simultaneously. **Loose end:** the deliberate port-clash didn't produce the expected `EADDRINUSE` error — it exited silently and the cause is unknown; we chose not to chase it. **Task 3.4 revealed a real gap in the two-programs model:** suggested the server could be added to main.jsx "so it renders the server too", and when asked what would happen if server code were imported into the client, answered "it would lack dependencies". Corrected to the strong form — **a browser cannot be a server**: Express asks the OS for a listening port, and a browser tab has no such power by design, so it can only ever be a client that asks. Both servers then run side by side on 5173 and 3000. **Task 3.5 re-check: PASSED with one redirect.** Asked why App.jsx can't import the server's array, first answered "the frontend and backend are separate, and need a special connection" — restating the rule, not the reason. Redirected with "where does each one actually execute?" and got it cleanly: **"app.jsx executes in browser, server executes on server with node."** That's the load-bearing idea. Completed for them: two processes, two memories; `import` only works between files that run in the same place; HTTP is the only channel — and that's what makes the two independently deployable. Held at practicing (same day it was introduced); re-check after a real gap.

## api
- status: seed
- depends-on: http-request-response, routes-endpoints
- introduced: —
- last-reviewed: —
- evidence: —

## fetch
- status: practicing
- depends-on: api, async-await
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 4.1: ran `fetch` from the browser console for the first time. Shown the two-await pattern and why it exists — the first await resolves when *headers* arrive, the second (`response.json()`) reads and parses the *body*, so `response` is the envelope and `.json()` opens it. Predicted the call would succeed; it was blocked by CORS instead (see [[cors]]). Has not yet written fetch inside application code — that's 4.3.

## json
- status: practicing
- depends-on: none
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 3.3: asked whether a server could send a JavaScript array over a network, answered "i don't think so, it'd have to be a package of some sort" — right instinct, no vocabulary. Given serialization, JSON's three rules (double-quoted keys, no trailing commas, data only), and `JSON.stringify` / `JSON.parse`. **Wrote `res.json(JSON.stringify(applications))` — serialized twice**, and identified the symptom themselves from the browser ("long piece of text") before the cause was explained. Then saw the raw wire format via curl and confirmed the JSON rules in real output. Has not yet written `JSON.parse` or handled JSON on the receiving side — section 4.

## async-await
- status: practicing
- depends-on: none
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 4.1: **articulated the motivation before being told** — asked what the browser should do during a 300ms request on a single thread, answered "it should be doing other things while waiting, keep responsive to user interactions". That's the whole reason async exists. Then shown Promises (a claim on a future value, coffee-shop-buzzer analogy), `await` as suspending the *function* rather than the thread, and `async` as the permission slip. **Only ran supplied lines using top-level await in the console — has not yet written an `async function` or handled a rejected promise.**

## get-request
- status: seed
- depends-on: http-request-response
- introduced: —
- last-reviewed: —
- evidence: —

## cors
- status: practicing
- depends-on: api, multiple-servers
- introduced: 2026-08-02
- last-reviewed: 2026-08-02
- evidence: Task 4.1: hit the wall deliberately by fetching localhost:3000 from a page on localhost:5173. Read the error and located the policy **on the port/server** ("theres some cors policy on the port") — corrected to the key fact: **the rule lives in the browser**; the server answered normally and the browser discarded the response before JavaScript could see it. That's why curl and the address bar both worked. Shown: origin = scheme + host + port (so ports count), the bank.com/evil.com cookie scenario, and that the browser enforces while the server grants the exception via `Access-Control-Allow-Origin`. **Passed the check that matters:** answered unprompted that CORS protects *users*, not the server — and was told plainly that CORS is not access control, since any non-browser client ignores it.

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
