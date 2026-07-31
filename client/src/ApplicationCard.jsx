function ApplicationCard(props) {
  return (
    <div>
      <h2>{props.application.company}</h2>
      <p>{props.application.role}</p>
      <p>{props.application.dateApplied}</p>
      <p>{props.application.status}</p>
      <p>{props.application.deadline}</p>
    </div>
  )
}

export default ApplicationCard
