import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BasicScatterChart from './BasicScatterCharr';
import BubbleChart from './BubbleChart';
import QuartetScatterChart from './QuartetScatterChart';
import SingleAxisScatterChart from './SingleAxisScatterChart';

const ScatterCharts = () => {
  return (
    <Row className="g-3">
      <Col lg={6}>
        <BasicScatterChart />
      </Col>
      <Col lg={6}>
        <BubbleChart />
      </Col>
      <Col lg={12}>
        <QuartetScatterChart />
      </Col>
      <Col lg={12}>
        <SingleAxisScatterChart />
      </Col>
    </Row>
  );
};

export default ScatterCharts;
