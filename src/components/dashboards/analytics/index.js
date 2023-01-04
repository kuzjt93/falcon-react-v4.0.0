import React from 'react';
import { Col, Row } from 'react-bootstrap';
import RealTimeUsers from './real-time-users/RealTimeUsers';
import Audience from './audience/Audience';
import ConnectCard from './ConnectCard';
import SessionByBrowser from './session-by-browser/SessionByBrowser';
import {
  audienceChart,
  intelligence,
  realTimeUsers,
  sessionByBrowser,
  sessionByCountry,
  topPagesTableData
} from 'data/dashboard/analytics';
import { countryData } from 'data/countryData';
import UsersByCountry from './users-by-country/UsersByCountry';
import Intelligence from './Intelligence';
import ActiveUsers from './active-users/ActiveUsers';
import CampaignPerfomance from './campaign-perfomance/CampaignPerfomance';
import UsersAtTime from './users-at-a-time/UsersAtTime';
import BounceRate from './bounce-rate/BounceRate';
import TrafficSource from './traffic-source/TrafficSource';
import Stats from './stats/Stats';
import TopPages from './top-pages/TopPages';

const Analytics = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col xxl={8}>
          <Audience chartData={audienceChart} className="mb-3" />
          <ConnectCard />
        </Col>
        <Col md={6} xxl={4}>
          <RealTimeUsers data={realTimeUsers} />
        </Col>
        <Col md={6} xxl={4}>
          <SessionByBrowser data={sessionByBrowser} />
        </Col>
        <Col md={6} xxl={4}>
          <UsersByCountry chartData={sessionByCountry} mapData={countryData} />
        </Col>
        <Col md={6} xxl={4}>
          <Intelligence data={intelligence} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={7}>
          <Row className="align-items-stretch h-100">
            <Col xs={12} className="mb-3">
              <ActiveUsers className="mb-3 h-100" />
            </Col>
            <Col xs={12}>
              <Stats />
            </Col>
          </Row>
        </Col>
        <Col lg={5}>
          <CampaignPerfomance />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={5} xxl={4}>
          <UsersAtTime />
        </Col>
        <Col lg={7} xxl={8}>
          <TopPages tableData={topPagesTableData} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={5} xxl={6}>
          <BounceRate />
        </Col>
        <Col lg={7} xxl={6}>
          <TrafficSource />
        </Col>
      </Row>
    </>
  );
};

Analytics.propTypes = {};

export default Analytics;
