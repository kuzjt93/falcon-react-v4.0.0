import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import Logo from 'components/common/Logo';
import { Outlet } from 'react-router-dom';

import Section from 'components/common/Section';

const ErrorLayout = () => {
  return (
    <Section className="py-0">
      <Row className="flex-center min-vh-100 py-6">
        <Col sm={11} md={9} lg={7} xl={6} className="col-xxl-5">
          <Logo />
          <Outlet />
        </Col>
      </Row>
    </Section>
  );
};

ErrorLayout.propTypes = {
  match: PropTypes.object
};

export default ErrorLayout;
