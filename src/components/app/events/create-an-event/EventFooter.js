import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';

const EventFooter = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="flex-between-center">
          <Col md>
            <h5 className="mb-2 mb-md-0"> Nice Job! You're almost done</h5>
          </Col>
          <Col xs="auto">
            <Button
              size="sm"
              variant="falcon-default"
              className="me-2"
              type="submit"
            >
              Save
            </Button>
            <Button size="sm" variant="falcon-primary">
              Make your event live
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventFooter;
