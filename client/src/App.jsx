import ApplicationCard from "./ApplicationCard"


function App() {
  const applications = [
    {
      id: 0,
      company: 'Anthropic',
      role: 'Software Engineer Intern',
      dateApplied: '12/07/2026',
      status: 'Pending',
      deadline: '17/07/2026'
    },
    {
      id: 1,
      company: 'Microsoft',
      role: 'Data Analyst',
      dateApplied: '02/05/2026',
      status: 'Pending',
      deadline: '17/05/2026'
    },
    {
      id: 2,
      company: 'Acturis',
      role: 'Integrations Developer',
      dateApplied: '19/05/2026',
      status: 'Pending',
      deadline: '01/07/2026'
    },
    {
      id: 3,
      company: 'Google',
      role: 'Security consultant',
      dateApplied: '11/08/2026',
      status: 'Pending',
      deadline: '24/09/2026'
    }
  ]

  return (
    <>
      <h1>Job Tracker</h1>
      <p>A simple app to track job applications and their status.</p>
      {applications.map((application) => <ApplicationCard key={application.id} application={application}/>)}
    </>
  )
}

export default App
