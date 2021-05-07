import React, {  useState } from "react"
import { Form, Button, Card, Alert} from "react-bootstrap"
import { Link} from "react-router-dom"

export default function AddStudent() {

  const [error] = useState("")
  const [loading] = useState(false)
  // const history = useHistory()

  function handleSubmit(e) {
    // update to database
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-2">Add Student</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Student name"
              />
            </Form.Group>
            <Form.Group id="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
              />
            </Form.Group>
            <Button  disabled={loading} className="btn-success w-100" type="submit">
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </>
  )
}