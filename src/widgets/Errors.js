import React from 'react';
import WidgetSectionTitle from './WidgetSectionTitle';
import { Col, Row } from 'react-bootstrap';
import Error404 from 'components/errors/Error404';
import Error500 from 'components/errors/Error500';

const ErrorsWidgets = () => {
  return (
    <>
      <WidgetSectionTitle
        icon="exclamation-circle"
        title="Errors"
        subtitle="Display your error pages with awesome cards."
        transform="shrink-4"
        className="mb-4 mt-6"
      />

      <Row className="g-3 mb-3">
        <Col lg={6}>
          <Error404 />
        </Col>
        <Col lg={6}>
          <Error500 />
        </Col>
      </Row>
    </>
  );
};

export default ErrorsWidgets;
