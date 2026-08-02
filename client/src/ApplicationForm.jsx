import { useState } from 'react'

function ApplicationForm() {
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('PENDING')
  const [dateApplied, setDateApplied] = useState('')
  const [deadline, setDeadline] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newApplication = { company: company, role: role, status: status, dateApplied: dateApplied, deadline: deadline}
    console.log(newApplication)
  }

  return (
    <form className="form"   onSubmit={handleSubmit}>
      <h2>Add an Application </h2>

      <label htmlFor="company">Company</label>
      <input
        id="company" name="company" type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <label htmlFor="role">Role</label>
      <input 
        id="role" name="role" type="text"
        value={role}
        onChange={(e)=> setRole(e.target.value)}
      />

      <label htmlFor="status">Status</label>
      <select id="status" name="status"
        value={status}
        onChange={(e)=> setStatus(e.target.value)}
      >
        <option value="PENDING">Pending</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>
      

      <label htmlFor="dateApplied">Date applied</label>
      <input id="dateApplied" name="dateApplied" type="date"
        value={dateApplied}
        onChange={(e)=> setDateApplied(e.target.value)}
      />

      <label htmlFor="deadline">Deadline</label>
      <input id="deadline" name="deadline" type="date"
        value={deadline}
        onChange={(e)=> setDeadline(e.target.value)}
      />

      <button type="submit">Add Application</button>
    </form>
  )

}

export default ApplicationForm
