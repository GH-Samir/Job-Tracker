import ApplicationCard from "./ApplicationCard"
import ApplicationForm from "./ApplicationForm"

function App() {
  const applications = [
    {
      id: 0,
      company: 'Anthropic',
      role: 'Software Engineer Intern',
      dateApplied: '2026-07-12',
      status: 'PENDING',
      deadline: '2026-07-17'
    },
    {
      id: 1,
      company: 'Microsoft',
      role: 'Data Analyst',
      dateApplied: '2026-05-02',
      status: 'OFFER',
      deadline: '2026-05-17'
    },
    {
      id: 2,
      company: 'Acturis',
      role: 'Integrations Developer',
      dateApplied: '2026-05-19',
      status: 'REJECTED',
      deadline: '2026-07-01'
    },
    {
      id: 3,
      company: 'Google',
      role: 'Security consultant',
      dateApplied: '2026-08-11',
      status: 'PENDING',
      deadline: '2026-09-24'
    }
  ]

  return (
    <div className="app">
      <h1>Job Tracker</h1>
      <p className="tagline">A simple app to track job applications and their status.</p>
      <ApplicationForm />
      <div className="card-list">
        {applications.map((application) => <ApplicationCard key={application.id} application={application}/>)}
      </div>
    </div>
  )
}

export default App
