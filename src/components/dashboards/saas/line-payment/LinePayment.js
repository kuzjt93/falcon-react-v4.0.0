import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import LinePaymentChart from './LinePaymentChart';

const LinePayment = ({ data }) => {
  const chartRef = useRef(null);
  const [paymentStatus, setPaymentStatus] = useState('successful');

  return (
    <Card className="rounded-3 overflow-hidden h-100 shadow-none">
      <Card.Body
        className="bg-line-chart-gradient"
        as={Flex}
        justifyContent="between"
        direction="column"
      >
        <Row className="align-items-center g-0">
          <Col className="light">
            <h4 className="text-white mb-0">Today $764.39</h4>
            <p className="fs--1 fw-semi-bold text-white">
              Yesterday <span className="opacity-50">$684.87</span>
            </p>
          </Col>
          <Col xs="auto" className="d-none d-sm-block">
            <Form.Select
              size="sm"
              className="mb-3"
              value={paymentStatus}
              onChange={e => setPaymentStatus(e.target.value)}
            >
              <option value="all">All Payments</option>
              <option value="successful">Successful Payments</option>
              <option value="failed">Failed Payments</option>
            </Form.Select>
          </Col>
        </Row>
        <LinePaymentChart
          ref={chartRef}
          data={data}
          paymentStatus={paymentStatus}
          style={{ height: '200px' }}
        />
      </Card.Body>
    </Card>
  );
};

LinePayment.propTypes = {
  data: PropTypes.shape({
    all: PropTypes.array,
    successful: PropTypes.array,
    failed: PropTypes.array
  })
};

export default LinePayment;
