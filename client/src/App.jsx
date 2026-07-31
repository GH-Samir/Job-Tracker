import ApplicationCard from "./ApplicationCard"


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
          
      <ApplicationCard application={applications[0]} />
      <ApplicationCard application={applications[1]} />
      <ApplicationCard application={applications[2]} />
    </>
  )
}

export default App
