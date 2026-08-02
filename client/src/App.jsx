import ApplicationCard from "./ApplicationCard"
import ApplicationForm from "./ApplicationForm"
import { useState, useEffect } from "react"

function App() {
  
  const [applications, setApplications] = useState([])

  useEffect(() => {
    async function loadApplications() {
      const response = await fetch('http://localhost:3000/api/applications')
      const data = await response.json()
      setApplications(data)
    }
    loadApplications()
  }, [])

  
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
