// `pg` is a CommonJS package, so we take the default export and reach
// into it rather than using named imports.
import pg from 'pg'

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  throw new Error('Database URL is empty in environment')
}

// A pool of reusable connections, rather than one connection per request.
const pool = new pg.Pool({ connectionString: DATABASE_URL })

// Top-level await: this finishes before anything imports us.
await pool.query(`
  CREATE TABLE IF NOT EXISTS applications (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  company     TEXT NOT NULL,
  role        TEXT NOT NULL,
  date_applied TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'PENDING',
  deadline    TEXT
)
;
`)

export default pool
