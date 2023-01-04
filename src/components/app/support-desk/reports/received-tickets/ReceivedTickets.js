import FalconLink from 'components/common/FalconLink';
import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import SimpleBarReact from 'simplebar-react';
import ReceivedTicketsChart from './ReceivedTicketsChart';

const ReceivedTickets = () => {
  return (
    <Card className="mt-3">
      <Card.Header className="border-bottom">
        <Row className="flex-between-center gy-2">
          <Col xs="auto">
            <h6 className="mb-0 me-x1">Load Analysis by Received Tickets</h6>
          </Col>
          <Col xs="auto">
            <Form.Select size="sm" defaultValue="Monthly">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Header>
      <SimpleBarReact>
        <Card.Body>
          <ReceivedTicketsChart />
        </Card.Body>
      </SimpleBarReact>
      <Card.Footer className="text-center bg-light py-2">
        <FalconLink title="View all report" className="px-0 fw-medium" />
      </Card.Footer>
    </Card>
  );
};

export default ReceivedTickets;
