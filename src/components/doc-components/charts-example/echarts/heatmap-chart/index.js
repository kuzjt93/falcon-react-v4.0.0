import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BasicHeatmapChart from './BasicHeatmapChart';
import HeatmapSingleSeriesChart from './HeatmapSingleSeriesChart';

const HeatmapCharts = () => {
  return (
    <Row className="g-3">
      <Col lg={6}>
        <BasicHeatmapChart />
      </Col>
      <Col lg={6}>
        <HeatmapSingleSeriesChart />
      </Col>
    </Row>
  );
};

export default HeatmapCharts;
