import pool from './db.js'

const applications = [
  {
    company: 'Anthropic',
    role: 'Software Engineer Intern',
    dateApplied: '2026-07-12',
    status: 'PENDING',
    deadline: '2026-07-17',
  },
  {
    company: 'Microsoft',
    role: 'Data Analyst',
    dateApplied: '2026-05-02',
    status: 'OFFER',
    deadline: '2026-05-17',
  },
  {
    company: 'Acturis',
    role: 'Integrations Developer',
    dateApplied: '2026-05-19',
    status: 'REJECTED',
    deadline: '2026-07-01',
  },
  {
    company: 'Google',
    role: 'Security consultant',
    dateApplied: '2026-08-11',
    status: 'PENDING',
    deadline: '2026-09-24',
  },
]

await pool.query('DELETE FROM applications')

for (const application of applications) {
  await pool.query(
    `INSERT INTO applications (company, role, date_applied, status, deadline)
     VALUES ($1, $2, $3, $4, $5)`,
    [
      application.company,
      application.role,
      application.dateApplied,
      application.status,
      application.deadline,
    ],
  )
}

console.log(`Seeded ${applications.length} applications`)

// A pool holds its connections open, so the process would never exit
// without this. A server wants that; a script doesn't.
await pool.end()
