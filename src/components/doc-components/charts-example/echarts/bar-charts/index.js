import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BarLineMixedChart from './BarLineMixedChart';
import BarNegativeChart from './BarNegativeChart';
import BarTimelineChart from './BarTimelineChart';
import BasicBarChart from './BasicBarChart';
import GradientBarChart from './GradientBarChart';
import HorizontalBarChart from './HorizontalBarChart';
import RaceChart from './RaceChart';
import SeriesBarChart from './SeriesBarChart';
import StackedChart from './StackedChart';
import StackedHorizontalChart from './StackedHorizontalChart';
import WaterFallChart from './WaterFallChart';

const BarCharts = () => {
  return (
    <>
      <Row className="g-3">
        <Col lg={6}>
          <BasicBarChart title="Basic bar chart" />
        </Col>
        <Col lg={6}>
          <HorizontalBarChart />
        </Col>
        <Col lg={6}>
          <BarNegativeChart />
        </Col>
        <Col lg={6}>
          <SeriesBarChart />
        </Col>
        <Col lg={6}>
          <StackedChart />
        </Col>
        <Col lg={6}>
          <StackedHorizontalChart />
        </Col>
        <Col lg={6}>
          <RaceChart />
        </Col>
        <Col lg={6}>
          <GradientBarChart />
        </Col>
        <Col lg={6}>
          <BarLineMixedChart />
        </Col>
        <Col lg={6}>
          <WaterFallChart />
        </Col>
        <Col lg={12}>
          <BarTimelineChart />
        </Col>
      </Row>
    </>
  );
};

export default BarCharts;
