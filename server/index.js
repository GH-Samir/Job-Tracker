import express from 'express'
import db from './db.js'
import cors from 'cors'
import { VALID_STATUSES, validateApplication } from './validation.js'

const app = express()

app.use(cors({ origin: 'http://localhost:5173' }))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello man yeah')
})

const selectAll = db.prepare('SELECT * FROM applications')

app.get('/api/applications', (req, res) => {
  res.json(selectAll.all())
})

const insert = db.prepare(`
  INSERT INTO applications (company, role, dateApplied, status, deadline)
  VALUES(@company,@role,@dateApplied,@status,@deadline)
`)

// Fetches a single row by id. `?` is a positional placeholder —
// the value is passed as an argument instead of by name.
const selectOne = db.prepare('SELECT * FROM applications WHERE id = ?')

app.post('/api/applications', (req, res) => {
  const errors = validateApplication(req.body)
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  const info = insert.run(req.body)
  const created = selectOne.get(info.lastInsertRowid)
  res.status(201).json(created)
})

const del = db.prepare('DELETE FROM applications WHERE id = ?')

app.delete('/api/applications/:id', (req, res) => {
  const info = del.run(req.params.id)
  if (info.changes === 0) {
    res.status(404).json({ error: 'No application with that id' })
  } else {
    res.status(204).end()
  }
})

const upd = db.prepare('UPDATE applications SET status =? where id = ?')

app.patch('/api/applications/:id', (req, res) => {
  if (!VALID_STATUSES.includes(req.body.status)) {
    return res.status(400).json({ errors: ['Invalid Status'] })
  }

  const info = upd.run(req.body.status, Number(req.params.id))

  if (info.changes === 0) {
    res.status(404).json({ error: 'No application with that id' })
  } else {
    const updated = selectOne.get(Number(req.params.id))
    res.json(updated)
  }
})

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000')
})
