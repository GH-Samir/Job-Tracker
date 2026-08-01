function ApplicationForm() {
  return (
    <form className="form">
      <h2>Add an Application </h2>

      <label htmlFor="company">Company</label>
      <input id="company" name="company" type="text" />

      <label htmlFor="role">Role</label>
      <input id="role" name="role" type="text" />

      <label htmlFor="status">Status</label>
      <select id="status" name="status">
        <option value="PENDING">Pending</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>

      <label htmlFor="dateApplied">Date applied</label>
      <input id="dateApplied" name="dateApplied" type="date" />

      <label htmlFor="deadline">Deadline</label>
      <input id="deadline" name="deadline" type="date" />

      <button type="submit">Add Application</button>
    </form>
  )
}

export default ApplicationForm
