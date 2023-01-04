import FalconCardHeader from 'components/common/FalconCardHeader';
import FalconLink from 'components/common/FalconLink';
import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import UsersAtTimeChart from './UsersAtTimeChart';

const UsersAtTime = () => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Users at a Time"
        titleTag="h6"
        className="py-3"
        light
      />
      <Card.Body className="pb-0">
        <UsersAtTimeChart />
      </Card.Body>

      <Card.Footer className="bg-light py-2">
        <Row className="g-0 flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm" className="me-2">
              <option>Last 7 days</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <FalconLink title="Overview" className="px-0 fw-medium" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default UsersAtTime;
