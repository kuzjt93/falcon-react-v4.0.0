import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ChartBar from './ChartBar';
import ChartBubble from './ChartBubble';
import ChartCombo from './ChartCombo';
import ChartDoughnut from './ChartDoughnut';
import ChartLine from './ChartLine';
import ChartPie from './ChartPie';
import ChartPolar from './ChartPolar';
import ChartRadar from './ChartRadar';
import ChartScatter from './ChartScatter';

const Chartjs = () => {
  return (
    <>
      <PageHeader
        title="Getting Started"
        description="Falcon uses react-chartjs-2 - React wrapper for Chart.js. simple yet flexible JavaScript charting for designers & developers"
        className="mb-3"
      >
        <Button
          href={`http://reactchartjs.github.io/react-chartjs-2`}
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          React Chartjs 2 documentation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>
      <Row className="gx-3">
        <Col lg={6}>
          <ChartBar />
        </Col>
        <Col lg={6}>
          <ChartLine />
        </Col>
        <Col lg={6}>
          <ChartDoughnut />
        </Col>
        <Col lg={6}>
          <ChartPie />
        </Col>
        <Col lg={6}>
          <ChartPolar />
        </Col>
        <Col lg={6}>
          <ChartRadar />
        </Col>
        <Col lg={6}>
          <ChartBubble />
        </Col>
        <Col lg={6}>
          <ChartScatter />
        </Col>
        <Col lg={12}>
          <ChartCombo />
        </Col>
      </Row>
    </>
  );
};

export default Chartjs;
