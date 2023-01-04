import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LinePayment from './line-payment/LinePayment';
import {
  payment,
  activeUser,
  transactionSummary,
  grossRevenue,
  candleChartData
} from 'data/dashboard/saas';
import SaasActiveUser from './SaasActiveUser';
import SaasRevenue from './SaasRevenue';
import SaasConversion from './SaasConversion';
import DepositeStatus from './DepositeStatus';
import StatisticsCards from './stats-cards/StatisticsCards';
import { users, files } from 'data/dashboard/default';
import ActiveUsers from '../default/ActiveUsers';
import SharedFiles from '../default/SharedFiles';
import BandwidthSaved from '../default/BandwidthSaved';
import DoMoreCard from './DoMoreCard';
import TransactionSummary from './TransactionSummary';
import GrossRevenue from './gross-revenue/GrossRevenue';
import CandleChart from './candle-chart/CandleChart';

const Saas = () => {
  return (
    <>
      <Row className="g-3">
        <Col xxl={9}>
          <LinePayment data={payment} />
        </Col>
        <Col>
          <Row className="g-3">
            <Col md={4} xxl={12}>
              <SaasActiveUser data={activeUser} />
            </Col>
            <Col md={4} xxl={12}>
              <SaasRevenue />
            </Col>
            <Col md={4} xxl={12}>
              <SaasConversion />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={9}>
          <DepositeStatus />
          <StatisticsCards />
          <Row className="g-3">
            <Col xs={12}>
              <CandleChart data={candleChartData} />
            </Col>
            <Col lg={4}>
              <ActiveUsers users={users} end={7} />
            </Col>
            <Col lg={8}>
              <GrossRevenue data={grossRevenue} />
            </Col>
          </Row>
        </Col>
        <Col xxl={3}>
          <Row className="g-3">
            <Col xxl={12}>
              <SharedFiles
                files={files}
                className="h-100 h-xxl-auto mt-xxl-3"
              />
            </Col>
            <Col md xxl={12}>
              <BandwidthSaved />
            </Col>
            <Col md xxl={12}>
              <DoMoreCard />
            </Col>
          </Row>
        </Col>
      </Row>
      <TransactionSummary data={transactionSummary} />
    </>
  );
};

export default Saas;
