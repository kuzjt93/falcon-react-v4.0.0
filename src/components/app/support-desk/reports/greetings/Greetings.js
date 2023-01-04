import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import greetingsImg from 'assets/img/illustrations/reports-greeting.png';
import GreetingsDate from './GreetingDate';

const Greetings = () => {
  return (
    <Card className="shadow-none border">
      <Card.Header className="z-index-1">
        <Row className="flex-between-center gx-0">
          <Col lg="auto" className="d-flex align-items-center">
            <img className="img-fluid" src={greetingsImg} alt="" />
            <div className="ms-x1">
              <h6 className="mb-1 text-primary">Welcome to</h6>
              <h4 className="mb-0 text-primary fw-bold">
                Falcon
                <span className="text-info fw-medium"> Support - Reports</span>
              </h4>
            </div>
          </Col>
          <Col lg="auto" className="pt-3 pt-lg-0">
            <Row className="flex-lg-column flex-xxl-row gx-3 gy-2 align-items-center align-items-lg-start align-items-xxl-center">
              <Col xs="auto">
                <h6 className="text-700 mb-0">Showing Data For: </h6>
              </Col>
              <Col md="auto">
                <GreetingsDate />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Header>
    </Card>
  );
};

export default Greetings;
