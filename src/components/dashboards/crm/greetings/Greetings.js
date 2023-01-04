import React from 'react';
import Flex from 'components/common/Flex';
import { Card, Col, Row } from 'react-bootstrap';
import barChart from 'assets/img/illustrations/crm-bar-chart.png';
import lineChart from 'assets/img/illustrations/crm-line-chart.png';
import GreetingsDate from './GreetingsDate';

const Greetings = () => {
  return (
    <Card className="bg-100 shadow-none border mb-3">
      <Card.Body className="py-0">
        <Row className="g-0 justify-content-between">
          <Col sm="auto">
            <Flex alignItems="center">
              <img src={barChart} width={90} alt="..." className="ms-n4" />
              <div>
                <h6 className="text-primary fs--1 mb-0">Welcome to </h6>
                <h4 className="text-primary fw-bold mb-0">
                  Falcon
                  <span className="text-info fw-medium"> CRM</span>
                </h4>
              </div>
              <img
                src={lineChart}
                width={140}
                alt="..."
                className="ms-n4 d-md-none d-lg-block"
              />
            </Flex>
          </Col>
          <Col md="auto" className="mb-3 mb-md-0">
            <Row className="g-3 gy-md-0 h-100 align-items-center">
              <Col xs="auto">
                <h6 className="text-700 mb-0 text-nowrap">Showing Data For:</h6>
              </Col>
              <Col md="auto">
                <GreetingsDate />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Greetings;
