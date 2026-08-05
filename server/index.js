import express from 'express'
import db from './db.js'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  next()
})

app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello man yeah")
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
  const info = insert.run(req.body)
  const created = selectOne.get(info.lastInsertRowid)
  res.status(201).json(created)
})

app.listen(3000, () => {console.log("Listening on http://localhost:3000")})
