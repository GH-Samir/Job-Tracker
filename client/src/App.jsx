function App() {
  const applications = [
    {
      company: 'Anthropic',
      role: 'Software Engineer Intern',
      dateApplied: '12/07/2026',
      status: 'Pending',
      deadline: '17/07/2026'
    },
    {
      company: 'Microsoft',
      role: 'Data Analyst',
      dateApplied: '02/05/2026',
      status: 'Pending',
      deadline: '17/05/2026'
    },
    {
      company: 'Acturis',
      role: 'Integrations Developer',
      dateApplied: '19/05/2026',
      status: 'Pending',
      deadline: '01/07/2026'
    }
  ]

  return (
    <>
      <h1>Job Tracker</h1>
      <p>A simple app to track job applications and their status.</p>

      <div>
        <h2>{applications[0].company}</h2>
        <p>{applications[0].role}</p>
        <p>{applications[0].dateApplied}</p>
        <p>{applications[0].status}</p>
        <p>{applications[0].deadline}</p>
      </div>
    </>
  )
}

export default App
