import Database from 'better-sqlite3'


const DB_PATH = (process.env.DB_PATH)

if (!DB_PATH) {
  throw new Error('Database path cannot be null. Set database path in .env')
}

// Opens the file, creating it if it doesn't exist yet.
const db = new Database(DB_PATH)

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
