import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './Mystyles.css' 

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center primary mb-4 ">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-light jatin primary w-100 mt-3">
           Update Profile
          </Link>
          <Link to="/add-student" className="btn btn-light w-100 mt-3">
            ADD STUDENT
          </Link>
          <Link to="/file-upload" className="btn btn-success w-100 mt-3">
            NEXT
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button color="#70ff5c" variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}