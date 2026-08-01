function ApplicationCard(props) {
  return (
    <div className="card">
      <h2 className="company">{props.application.company}</h2>
      <p className="role">{props.application.role}</p>
      <p className={`status status-${props.application.status.toUpperCase()}`}>{props.application.status}</p>
      <p><span className="label">Applied</span> {props.application.dateApplied}</p>
      <p><span className="label">Deadline</span> {props.application.deadline}</p>
    </div>
  )
}

export default ApplicationCard
