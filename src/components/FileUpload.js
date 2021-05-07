import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, InputGroup, FormControl} from "react-bootstrap"
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
        {/* <Button color="#70ff5c" variant="outline-success">Start</Button> */}
        <Dictaphone1 />
        </Card.Body>
        </Card>
<div>
      <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text />
    </InputGroup.Prepend>
    <FormControl   />
  </InputGroup>

</div>

<h2>{}</h2>

{/* <div className="App">
      <header className="Dictaphone-Tester">
        <Dictaphone1 />
      </header>
    </div> */}
      </>
    );
}
export default FileUpload