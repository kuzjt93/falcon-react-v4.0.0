import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import HalfDoughnutChart from './HalfDoughnutChart';
import CountUp from 'react-countup';

const LmsRevenue = () => {
  const [stat] = useState({
    target: 1200000,
    reached: 823000
  });
  return (
    <Card className="h-md-100">
      <Card.Header className="pb-0">
        <h6 className="mb-0">Monthly Revenue Target</h6>
      </Card.Header>

      <Card.Body className="pt-0">
        <Row className="align-items-end h-100 mb-n1 mt-n3">
          <Col xs={5} className="pe-md-0 pe-lg-3">
            <Row className="g-0">
              <Col xs={7}>
                <h6 className="text-600">Target: </h6>
              </Col>
              <Col xs={5}>
                <h6 className="text-800">$1.2M </h6>
              </Col>
            </Row>
            <Row className="g-0">
              <Col xs={7}>
                <h6 className="mb-0 text-600">Reached: </h6>
              </Col>
              <Col xs={5}>
                <h6 className="mb-0 text-800">$823K </h6>
              </Col>
            </Row>
          </Col>
          <Col xs={7}>
            <div
              className="ms-auto text-center"
              style={{ maxWidth: '10.625rem' }}
            >
              <div className="mb-n6">
                <HalfDoughnutChart
                  color="primary"
                  target={stat.target}
                  reached={stat.reached}
                />
              </div>
              <CountUp
                start={0}
                end={((stat.reached / stat.target) * 100).toFixed(0)}
                duration={2.75}
                className="d-inline-block mb-0 mt-n6 fs-1 fw-medium font-sans-serif"
                suffix="%"
                separator=","
              />
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LmsRevenue;
