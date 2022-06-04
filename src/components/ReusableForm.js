import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Container>

        <Form onSubmit={props.formSubmissionHandler}>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Brew Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="EX: Thunder Head" 
                  required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  placeholder="EX: Ol' Dwarvish"
                  required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Price Per Pint</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="EX: 6"
                  required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Alcohol Content Percentage</Form.Label>          
                <Form.Control
                  type="number"
                  name="alcoholContent"
                  placeholder="EX: 5"
                  required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Number of Kegs</Form.Label>
                <Form.Control
                  type="number"
                  name="kegs"
                  placeholder="EX: 2"
                  required 
                  step="0.1"
                  min="0.1" />
                  <Form.Text className="text-muted">You can add open casks using a number like 0.1 or 0.5.</Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="success" className="my-3 w-100" type="submit">{props.buttonText}</Button>
        </Form>
      </Container>
      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;