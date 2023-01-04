import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DoughnutChart from './DoughnutChart';
import DoughnutRoundedChart from './DoughnutRoundedChart';
import PieBasicChart from './PieBasicChart';
import PieEdgeAlignChart from './PieEdgeAlignChart';
import PieLabelAlignChart from './PieLabelAlignChart';
import PieMultipleChart from './PieMultipleChart';

const PieCharts = () => {
  return (
    <Row className="g-3">
      <Col lg={6}>
        <PieBasicChart />
      </Col>
      <Col lg={6}>
        <DoughnutChart />
      </Col>
      <Col lg={6}>
        <DoughnutRoundedChart />
      </Col>
      <Col lg={6}>
        <PieMultipleChart />
      </Col>
      <Col lg={6}>
        <PieLabelAlignChart />
      </Col>
      <Col lg={6}>
        <PieEdgeAlignChart />
      </Col>
    </Row>
  );
};

export default PieCharts;
