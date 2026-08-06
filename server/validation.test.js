import { test } from 'node:test'
import assert from 'node:assert'
import { validateApplication } from './validation.js'

test('a valid application produces no errors', () => {
  const errors = validateApplication({
    company: 'Anthropic',
    role: 'Software Engineer',
    dateApplied: '2026-01-01',
    status: 'PENDING',
    deadline: '2026-02-01',
  })

  assert.deepStrictEqual(errors, [])
})

test('an empty company is rejected', () => {
  const errors = validateApplication({
    company: '',
    role: 'Software Engineer',
    dateApplied: '2026-01-01',
    status: 'PENDING',
    deadline: '2026-02-01',
  })

  assert.deepStrictEqual(errors, ['Invalid Company Name'])
})
