import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const UploadFile = ({ toggleChange }) => {
  const [jsonObj, setJsonObj] = useState([]);

  function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  function onReaderLoad(event) {
    console.log(event.target.result);
    setJsonObj(event.target.result);
    console.log(jsonObj, "JSON obj");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3010/api/file", { value: jsonObj })
      .then(() => toggleChange());
  };

  return (
    <div className="d-flex align-items-center">
      <Form.Group controlId="formFile" className="align-items-center mb-3">
        <Form.Control
          type="file"
          class="admin__input"
          onChange={(e) => onChange(e)}
          id="file"
          name="myFile"
        />
      </Form.Group>

      <Button onClick={(e) => onSubmit(e)}>Submit</Button>
    </div>
  );
};

export default UploadFile;
