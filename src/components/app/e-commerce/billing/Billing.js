import FaqAlt from 'components/pages/faq/faq-alt/FaqAlt';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BillingCard from './BillingCard';
import BillingDetails from './BillingDetails';
import BillingHeader from './BillingHeader';

const Billing = () => {
  return (
    <>
      <BillingHeader className="mb-3" />
      <Row className="g-3">
        <Col lg={8} className="pe-lg-2 mb-3">
          <Card className="h-100">
            <Card.Header>
              <h5 className="mb-0">Billing Details</h5>
            </Card.Header>
            <Card.Body className="bg-light">
              <BillingDetails />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="pe-lg-2 mb-3">
          <Card className="h-100">
            <Card.Header>
              <h5 className="mb-0">Billing</h5>
            </Card.Header>
            <Card.Body className="bg-light">
              <BillingCard />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <FaqAlt />
    </>
  );
};

Billing.propTypes = {};

export default Billing;
