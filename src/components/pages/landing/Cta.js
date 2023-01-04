import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import bg2 from 'assets/img/generic/bg-2.jpg';
import Section from 'components/common/Section';

const Cta = () => (
  <Section overlay image={bg2} position="center top" className="light bg-dark">
    <Row className="justify-content-center text-center">
      <Col lg={8}>
        <p className="fs-3 fs-sm-4 text-white">
          Join our community of 20,000+ developers and content creators on their
          mission to build better sites and apps.
        </p>
        <Button
          variant="outline-light"
          size="lg"
          className="border-2 rounded-pill mt-4 fs-0 py-2"
        >
          Start your webapp
        </Button>
      </Col>
    </Row>
  </Section>
);

export default Cta;
