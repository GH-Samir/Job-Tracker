import express from 'express'
import db from './db.js'

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  next()
})

app.get('/', (req, res) => {
  res.send("Hello man yeah")
})

const selectAll = db.prepare('SELECT * FROM applications')

app.get('/api/applications', (req, res) => {
  res.json(selectAll.all())
})

app.listen(3000, () => {console.log("Listening on http://localhost:3000")})
