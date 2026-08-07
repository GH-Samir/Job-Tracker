import ApplicationCard from './ApplicationCard'
import ApplicationForm from './ApplicationForm'
import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Moved out of the effect so it can also be handed to the form.
  async function loadApplications() {
    try {
      const response = await fetch(`${API_URL}/api/applications`)
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

  async function handleDelete(id) {
    await fetch(`${API_URL}/api/applications/${id}`, {
      method: 'DELETE',
    })
    loadApplications()
  }

  async function handleStatusChange(id, status) {
    await fetch(`${API_URL}/api/applications/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })

    loadApplications()
  }

  useEffect(() => {
    loadApplications()
  }, [])

  return (
    <div className="app">
      <h1>Job Tracker</h1>
      <p className="tagline">
        A simple app to track job applications and their status.
      </p>

      <ApplicationForm onApplicationAdded={loadApplications} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error {error}</p>}
      {!loading && !error && applications.length === 0 && (
        <p>Application list is empty!</p>
      )}

      <div className="card-list">
        {applications.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  )
}

export default App
