import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BasicRadarChart from './BasicRadarChart';
import RadarCustomizedChart from './RadarCustomizedChart';
import RadarMultipleChart from './RadarMultipleChart';

const RadarCharts = () => {
  return (
    <Row className="gx-3">
      <Col lg={12}>
        <BasicRadarChart />
      </Col>
      <Col lg={12}>
        <RadarCustomizedChart />
      </Col>
      <Col lg={12}>
        <RadarMultipleChart />
      </Col>
    </Row>
  );
};

export default RadarCharts;
