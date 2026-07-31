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
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## local-environment
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## vite
- status: seed
- depends-on: npm-packages
- introduced: —
- last-reviewed: —
- evidence: —

## npm-packages
- status: seed
- depends-on: nodejs
- introduced: —
- last-reviewed: —
- evidence: —

## project-structure
- status: seed
- depends-on: none
- introduced: —
- last-reviewed: —
- evidence: —

## react-component
- status: seed
- depends-on: why-react, jsx
- introduced: —
- last-reviewed: —
- evidence: —

## jsx
- status: seed
- depends-on: why-react
- introduced: —
- last-reviewed: —
- evidence: —

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
- status: seed
- depends-on: why-node-express
- introduced: —
- last-reviewed: —
- evidence: —

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
