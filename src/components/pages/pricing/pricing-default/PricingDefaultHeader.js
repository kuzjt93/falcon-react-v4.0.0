import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import React from 'react';
import { Col, Form, FormCheck, Row } from 'react-bootstrap';

const PricingDefaultHeader = () => {
  return (
    <Col xs={12} className="mb-3">
      <Row className="justify-content-center justify-content-sm-between">
        <Col sm="auto" className="text-center">
          <h5 className="d-inline-block">Billed Annually</h5>
          <SoftBadge bg="success" className="ms-2" pill>
            Save 25%
          </SoftBadge>
        </Col>
        <Col
          sm="auto"
          as={Flex}
          justifyContent="center"
          alignItems="center"
          className="mt-1 mt-sm-0"
        >
          <FormCheck.Label htmlFor="custom-switch" className="me-2">
            Monthly
          </FormCheck.Label>
          <Form.Check type="switch" id="yearly">
            <Form.Check.Input type="checkbox" defaultChecked />
            <Form.Check.Label className="ms-2 align-top">
              Yearly
            </Form.Check.Label>
          </Form.Check>
        </Col>
      </Row>
    </Col>
  );
};

export default PricingDefaultHeader;
