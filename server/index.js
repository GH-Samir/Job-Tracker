import express from 'express'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  next()
})

const applications = [
    {
      id: 0,
      company: 'Anthropic',
      role: 'Software Engineer Intern',
      dateApplied: '2026-07-12',
      status: 'PENDING',
      deadline: '2026-07-17'
    },
    {
      id: 1,
      company: 'Microsoft',
      role: 'Data Analyst',
      dateApplied: '2026-05-02',
      status: 'OFFER',
      deadline: '2026-05-17'
    },
    {
      id: 2,
      company: 'Acturis',
      role: 'Integrations Developer',
      dateApplied: '2026-05-19',
      status: 'REJECTED',
      deadline: '2026-07-01'
    },
    {
      id: 3,
      company: 'Google',
      role: 'Security consultant',
      dateApplied: '2026-08-11',
      status: 'PENDING',
      deadline: '2026-09-24'
    }
  ]

app.get('/', (req, res) => {
  res.send("Hello man yeah")
})

app.get('/api/applications', (req, res) => {
  res.json(applications)
})

app.listen(3000, () => {console.log("Listening on http://localhost:3000")})
