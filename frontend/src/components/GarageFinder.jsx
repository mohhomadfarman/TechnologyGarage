import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const GarageFinder = () => {
  return (
    <div className="my-4">
      <h3>Finding Nearest Garage</h3>
      <Form>
        <Form.Group as={Row}>
          <Col sm="8">
            <Form.Control type="text" placeholder="City, area name, zip code..." />
          </Col>
          <Col sm="4">
            <Button variant="primary">Use My Location</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default GarageFinder;
