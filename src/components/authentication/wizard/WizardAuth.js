import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Section from 'components/common/Section';
import Logo from 'components/common/Logo';
import Wizard from 'components/wizard/Wizard';

const WizardAuth = () => {
  return (
    <Section className="py-0">
      <Row className="justify-content-center pt-6">
        <Col sm={10} lg={7} className="col-xxl-5">
          <Logo width={45} textClass="fs-4" />
          <Wizard validation={true} />
        </Col>
      </Row>
    </Section>
  );
};

export default WizardAuth;
