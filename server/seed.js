import db from './db.js'


const applications = [
    {
      company: 'Anthropic',
      role: 'Software Engineer Intern',
      dateApplied: '2026-07-12',
      status: 'PENDING',
      deadline: '2026-07-17'
    },
    {
      company: 'Microsoft',
      role: 'Data Analyst',
      dateApplied: '2026-05-02',
      status: 'OFFER',
      deadline: '2026-05-17'
    },
    {
      company: 'Acturis',
      role: 'Integrations Developer',
      dateApplied: '2026-05-19',
      status: 'REJECTED',
      deadline: '2026-07-01'
    },
    {
      company: 'Google',
      role: 'Security consultant',
      dateApplied: '2026-08-11',
      status: 'PENDING',
      deadline: '2026-09-24'
    }
  ]
  
db.exec('DELETE FROM applications')

const insert = db.prepare(`
  INSERT INTO applications (company, role, dateApplied, status, deadline)
  VALUES(@company,@role,@dateApplied,@status,@deadline)
`)

for (const application of applications) {
  insert.run(application)
}

console.log(`Seeded ${applications.length} applications`)
