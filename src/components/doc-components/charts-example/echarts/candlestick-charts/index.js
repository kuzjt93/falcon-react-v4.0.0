import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BasicCandlestickChart from './BasicCandlestickChart';
import CandlestickMixedChart from './CandlestickMixedChart';

const CandlestickCharts = () => {
  return (
    <>
      <Row className="g-3">
        <Col lg={6}>
          <BasicCandlestickChart />
        </Col>
        <Col lg={6}>
          <CandlestickMixedChart />
        </Col>
      </Row>
    </>
  );
};

export default CandlestickCharts;
