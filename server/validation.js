// Pure logic: no database, no network, no Express. Just data in, answers out.
// That's what makes it easy to test.

export const VALID_STATUSES = ['PENDING', 'OFFER', 'REJECTED']

// True only for a string with at least one non-whitespace character.
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim() !== ''
}

export function validateApplication(body) {
  const errors = []
  if (!isNonEmptyString(body.company)) {
    errors.push('Invalid Company Name')
  }

  if (!isNonEmptyString(body.role)) {
    errors.push('Invalid Role Name')
  }

  if (!isNonEmptyString(body.dateApplied)) {
    errors.push('Invalid Date Applied')
  }

  if (!VALID_STATUSES.includes(body.status)) {
    errors.push('Invalid Status')
  }

  return errors
}
