import express from 'express'
import pool from './db.js'
import cors from 'cors'
import { VALID_STATUSES, validateApplication } from './validation.js'

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))

app.use(express.json())

// The columns every read returns. date_applied is aliased back to the
// camelCase name the client expects — double quotes preserve the case.
const COLUMNS = `id, company, role, date_applied AS "dateApplied", status, deadline`

app.get('/', (req, res) => {
  res.send('Hello man yeah')
})

// WORKED EXAMPLE — read this one carefully, the other three follow it.
app.get('/api/applications', async (req, res) => {
  const result = await pool.query(
    `SELECT ${COLUMNS} FROM applications ORDER BY id`,
  )
  res.json(result.rows)
})

app.post('/api/applications', async (req, res) => {
  const errors = validateApplication(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  const result = await pool.query(
    `INSERT INTO applications (company, role, date_applied, status, deadline)
   VALUES ($1, $2, $3, $4, $5)
   RETURNING ${COLUMNS}`,
    [
      req.body.company,
      req.body.role,
      req.body.dateApplied,
      req.body.status,
      req.body.deadline,
    ],
  )

  res.status(201).json(result.rows[0])
})

app.delete('/api/applications/:id', async (req, res) => {
  const result = await pool.query('DELETE FROM applications WHERE id = $1', [
    req.params.id,
  ])
  if (result.rowCount === 0) {
    return res.status(404).json({ error: 'No application with that id' })
  }
  res.status(204).end()
})

app.patch('/api/applications/:id', async (req, res) => {
  if (!VALID_STATUSES.includes(req.body.status)) {
    return res.status(400).json({ errors: ['Invalid Status'] })
  }

  const result = await pool.query(
    `UPDATE applications SET status = $1 WHERE id = $2
    RETURNING ${COLUMNS}`,
    [req.body.status, req.params.id],
  )
  if (result.rowCount === 0) {
    return res.status(404).json({ error: 'No application with that id' })
  }
  res.status(200).json(result.rows[0])
})

export default app
