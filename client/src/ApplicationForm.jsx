import { useState } from 'react'

function ApplicationForm(props) {
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('PENDING')
  const [dateApplied, setDateApplied] = useState('')
  const [deadline, setDeadline] = useState('')
  const [errors, setErrors] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    const newApplication = {
      company: company,
      role: role,
      status: status,
      dateApplied: dateApplied,
      deadline: deadline,
    }

    const response = await fetch('http://localhost:3000/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newApplication),
    })

    if (!response.ok) {
      const body = await response.json()
      setErrors(body.errors)
      return
    }

    setErrors([])

    props.onApplicationAdded()

    setCompany('')
    setRole('')
    setDateApplied('')
    setStatus('PENDING')
    setDeadline('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add an Application </h2>

      {errors.length > 0 && (
        <ul className="error">
          {errors.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      )}

      <label htmlFor="company">Company</label>
      <input
        id="company"
        name="company"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <label htmlFor="role">Role</label>
      <input
        id="role"
        name="role"
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <label htmlFor="status">Status</label>
      <select
        id="status"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="PENDING">Pending</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>

      <label htmlFor="dateApplied">Date applied</label>
      <input
        id="dateApplied"
        name="dateApplied"
        type="date"
        value={dateApplied}
        onChange={(e) => setDateApplied(e.target.value)}
      />

      <label htmlFor="deadline">Deadline</label>
      <input
        id="deadline"
        name="deadline"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <button type="submit">Add Application</button>
    </form>
  )
}

export default ApplicationForm
