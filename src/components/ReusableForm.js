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
                <Form.Label>Keg Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Brew Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  type="text"
                  name="brand"
                  placeholder="Brand Name" />
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
                  placeholder="Price" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Alcohol Content</Form.Label>          
                <Form.Control
                  type="number"
                  name="alcoholContent"
                  placeholder="Alcohol Content Percentage" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Pints</Form.Label>
                <Form.Control
                  type="number"
                  name="pints"
                  placeholder="Pints" />
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