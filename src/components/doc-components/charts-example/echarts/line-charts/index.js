import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BasicLineChart from './BasicLineChart';
import BasicAreaLineChart from './BasicAreaLineChart';
import StackedLineChart from './StackedLineChart';
import StackedAreaChart from './StackedAreaChart';
import LineMarkerChart from './LineMarkerChart';
import AreaPiecesChart from './AreaPiecesChart';
import StepLineChart from './StepLineChart';
import LineGradientChart from './LineGradientChart';
import DynamicLineChart from './DynamicLIneChart';
import LineLogChart from './LineLogChart';
import LineShareDatasetChart from './LineShareDatasetChart';

const LineCharts = () => {
  return (
    <Row className="gx-3">
      <Col lg={6}>
        <BasicLineChart />
      </Col>
      <Col lg={6}>
        <BasicAreaLineChart />
      </Col>
      <Col lg={6}>
        <StackedLineChart />
      </Col>
      <Col lg={6}>
        <StackedAreaChart />
      </Col>
      <Col lg={6}>
        <LineMarkerChart />
      </Col>
      <Col lg={6}>
        <AreaPiecesChart />
      </Col>
      <Col lg={6}>
        <StepLineChart />
      </Col>
      <Col lg={6}>
        <LineGradientChart />
      </Col>
      <Col lg={6}>
        <DynamicLineChart />
      </Col>
      <Col lg={6}>
        <LineLogChart />
      </Col>
      <Col lg={12}>
        <LineShareDatasetChart />
      </Col>
    </Row>
  );
};

export default LineCharts;
