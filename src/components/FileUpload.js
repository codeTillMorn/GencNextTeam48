import React from "react"
import { Form, Card} from "react-bootstrap"
import Dictaphone1 from './Dictaphone1.js'
// import default transcript from './Dictaphone1.js';



function FileUpload() {
  
return (
      <>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
      <Card>
        <Card.Body>
        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Upload audio file" />
          </Form.Group>
        </Form>
        <Dictaphone1 />
        </Card.Body>
        </Card>
      </>
    );
}
export default FileUpload