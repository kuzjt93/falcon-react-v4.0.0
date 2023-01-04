import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import editing from 'assets/img/illustrations/4.png';

const Starter = () => {
  return (
    <Card>
      <Card.Body className="overflow-hidden p-lg-6">
        <Row className="align-items-center justify-content-between">
          <Col lg={6}>
            <img src={editing} className="img-fluid" alt="" />
          </Col>
          <Col lg={6} className="ps-lg-4 my-5 text-center text-lg-left">
            <h3>Edit me!</h3>
            <p className="lead">Create Something Beautiful.</p>
            <Link className="btn btn-falcon-primary" to="/documentation">
              Getting started
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default Starter;
