import React from 'react';
import { Col, Form, FormCheck } from 'react-bootstrap';
import Flex from 'components/common/Flex';

const PricingAltHeader = () => {
  return (
    <Col xs={12} className="text-center mb-4">
      <div className="fs-1">Falcon Pricing</div>
      <h3 className="fs-2 fs-md-3">
        Free plan with all the basic features.{' '}
        <br className="d-none d-md-block" /> Pro plan for advanced users.
      </h3>
      <Flex justifyContent="center">
        <FormCheck.Label htmlFor="custom-switch" className="me-2">
          Monthly
        </FormCheck.Label>
        <Form.Check type="switch" id="yearly">
          <Form.Check.Input type="checkbox" defaultChecked />
          <Form.Check.Label className="ms-2 align-top">Yearly</Form.Check.Label>
        </Form.Check>
      </Flex>
    </Col>
  );
};

export default PricingAltHeader;
