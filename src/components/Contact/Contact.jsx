import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./contact.css";

export default function Contact() {
  return (
    <div className="py-6 bg-gray contact">
      <div className="container-box bg-white px-2 px-md-5 py-5">
        <h2 className="fw-bold text-center mb-3 mb-md-5 mt-5">
          Join Our News Letters
        </h2>
        <p className="w-50 text-center gray m-auto">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster{" "}
        </p>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Insert your mail here"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">
            <i class="fa-solid fa-circle-arrow-right"></i>{" "}
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
}
