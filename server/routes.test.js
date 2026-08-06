import { test, beforeEach } from 'node:test'
import assert from 'node:assert'
import request from 'supertest'
import app from './app.js'
import db from './db.js'

// Runs before EVERY test in this file, so each one starts from a known,
// empty table and cannot be affected by the tests around it.
beforeEach(() => {
  db.exec('DELETE FROM applications')
})

const validApplication = {
  company: 'Anthropic',
  role: 'Software Engineer',
  dateApplied: '2026-01-01',
  status: 'PENDING',
  deadline: '2026-02-01',
}

test('POST creates an application and returns it with an id', async () => {
  const response = await request(app)
    .post('/api/applications')
    .send(validApplication)

  assert.strictEqual(response.status, 201)
  assert.strictEqual(response.body.company, 'Anthropic')
  assert.ok(response.body.id)
})

test('POST rejects an application with no company', async () => {
  const response = await request(app)
    .post('/api/applications')
    .send({ ...validApplication, company: '' })

  assert.strictEqual(response.status, 400)
})

test('GET returns the applications that exist', async () => {
  const response = await request(app)
    .post('/api/applications')
    .send(validApplication)

  const info = await request(app).get('/api/applications')

  assert.strictEqual(info.body.length, 1)
})
