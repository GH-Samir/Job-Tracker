import Database from 'better-sqlite3'

// Opens the file, creating it if it doesn't exist yet.
const db = new Database('job-tracker.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id          INTEGER PRIMARY KEY,
    company     TEXT NOT NULL,
    role        TEXT NOT NULL,
    dateApplied TEXT NOT NULL,
    status      TEXT NOT NULL DEFAULT 'PENDING',
    deadline    TEXT
  )
`)

export default db
