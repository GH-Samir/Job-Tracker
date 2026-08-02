import ApplicationCard from "./ApplicationCard"
import ApplicationForm from "./ApplicationForm"
import { useState, useEffect } from "react"

function App() {

  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadApplications() {
      try {
        const response = await fetch('http://localhost:3000/api/applications')
        if (!response.ok) {
          throw new Error(`Server responded ${response.status}`)
        } 
        const data = await response.json()
        setApplications(data)
      } catch (err) {
          setError(err.message)
      } finally {
          setLoading(false)
      }
    }
    loadApplications()
  }, [])

  
  return (
    <div className="app">
      <h1>Job Tracker</h1>
      <p className="tagline">A simple app to track job applications and their status.</p>
      <ApplicationForm />

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error {error}</p>}
      {!loading && !error && applications.length === 0 && <p>Application list is empty!</p>}

      <div className="card-list">
        {applications.map((application) => <ApplicationCard key={application.id} application={application}/>)}
      </div>
    </div>
  )
}

export default App
