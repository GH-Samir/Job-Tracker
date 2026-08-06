function ApplicationCard(props) {
  return (
    <div className="card">
      <h2 className="company">{props.application.company}</h2>
      <p className="role">{props.application.role}</p>
      <select
        className={`status status-${props.application.status.toUpperCase()}`}
        value={props.application.status}
        onChange={(e) =>
          props.onStatusChange(props.application.id, e.target.value)
        }
      >
        <option value="PENDING">Pending</option>
        <option value="OFFER">Offer</option>
        <option value="REJECTED">Rejected</option>
      </select>
      <p>
        <span className="label">Applied</span> {props.application.dateApplied}
      </p>
      <p>
        <span className="label">Deadline</span> {props.application.deadline}
      </p>
      <button
        className="delete"
        onClick={() => props.onDelete(props.application.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default ApplicationCard
