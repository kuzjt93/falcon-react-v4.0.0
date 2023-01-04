import React from 'react';
import { Col, Row } from 'react-bootstrap';
import WidgetSectionTitle from './WidgetSectionTitle';
import StatisticsCards from 'components/dashboards/saas/stats-cards/StatisticsCards';
import WeeklySales from 'components/dashboards/default/WeeklySales';
import TotalOrder from 'components/dashboards/default/TotalOrder';
import MarketShare from 'components/dashboards/default/MarketShare';

import ProductShare from 'components/dashboards/e-commerce/ProductShare/ProductShare';
import {
  marketShare,
  totalOrder,
  totalSales,
  weeklySalesData,
  storageStatus,
  topProducts
} from 'data/dashboard/default';
import {
  payment,
  activeUser,
  grossRevenue,
  candleChartData
} from 'data/dashboard/saas';
import { saleItems, totalSale } from 'data/dashboard/ecom';

import {
  audienceChart,
  realTimeUsers,
  sessionByBrowser,
  sessionByCountry
} from 'data/dashboard/analytics';
import {
  progressBar,
  projectsTable,
  projectUsers
} from 'data/dashboard/projectManagement';
import { countryData } from 'data/countryData';
import StorageStatus from 'components/dashboards/default/StorageStatus';
import SaasActiveUser from 'components/dashboards/saas/SaasActiveUser';
import SaasRevenue from 'components/dashboards/saas/SaasRevenue';
import SaasConversion from 'components/dashboards/saas/SaasConversion';
import EcomStat from 'components/dashboards/e-commerce/EcomStat';
import LinePayment from 'components/dashboards/saas/line-payment/LinePayment';
import BandwidthSaved from 'components/dashboards/default/BandwidthSaved';
import RealTimeUsers from 'components/dashboards/analytics/real-time-users/RealTimeUsers';
import TopProducts from 'components/dashboards/default/TopProducts';
import TotalSales from 'components/dashboards/default/TotalSales';
import TotalSalesEcommerce from 'components/dashboards/e-commerce/totalsales/TotalSales';
import Audience from 'components/dashboards/analytics/audience/Audience';
import SessionByBrowser from 'components/dashboards/analytics/session-by-browser/SessionByBrowser';
import UsersByCountry from 'components/dashboards/analytics/users-by-country/UsersByCountry';
import ActiveUsers from 'components/dashboards/analytics/active-users/ActiveUsers';
import Stats from 'components/dashboards/analytics/stats/Stats';
import BounceRate from 'components/dashboards/analytics/bounce-rate/BounceRate';
import UsersAtTime from 'components/dashboards/analytics/users-at-a-time/UsersAtTime';
import TrafficSource from 'components/dashboards/analytics/traffic-source/TrafficSource';
import ReturningCustomer from 'components/dashboards/e-commerce/ReturningCustomer/ReturningCustomer';
import SalesPosLocation from 'components/dashboards/e-commerce/SalesPosLocation/SalesPosLocation';
import ShoppingCart from 'components/dashboards/e-commerce/ShoppingCart';
import GrossRevenue from 'components/dashboards/saas/gross-revenue/GrossRevenue';
import ProjectStatistics from 'components/dashboards/project-management/project-statistics/ProjectStatistics';
import CandleChart from 'components/dashboards/saas/candle-chart/CandleChart';

const NumberStatsAndChart = () => {
  return (
    <>
      <WidgetSectionTitle
        icon="percentage"
        title="Number Stats & Charts"
        subtitle="You can easily show your stats content by using these cards."
        transform="shrink-2"
        className="mb-4 mt-3"
      />
      <StatisticsCards />
      <Row className="g-3 mb-3">
        <Col md={6} lg={4} xl={6} xxl={4}>
          <WeeklySales data={weeklySalesData} />
        </Col>
        <Col md={6} lg={4} xl={6} xxl={4}>
          <TotalOrder data={totalOrder} />
        </Col>
        <Col md={6} lg={4} xl={6} xxl={4}>
          <MarketShare data={marketShare} radius={['100%', '87%']} />
        </Col>
        <Col md={6} lg={4} xl={6} xxl={4}>
          <ProductShare />
        </Col>
        <Col lg={8} xl={12} xxl={8}>
          <StorageStatus className="h-lg-100" data={storageStatus} />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col md={4}>
          <SaasActiveUser data={activeUser} />
        </Col>
        <Col md={4}>
          <SaasRevenue />
        </Col>
        <Col md={4}>
          <SaasConversion />
        </Col>
      </Row>
      <EcomStat data={saleItems} />
      <Row className="g-3 mb-3">
        <Col xxl={8}>
          <LinePayment data={payment} />
        </Col>
        <Col md={6} xxl={4}>
          <BandwidthSaved bodyClassName="mt-md-8 mt-xxl-0" />
        </Col>
        <Col md={6} xxl={4}>
          <RealTimeUsers data={realTimeUsers} />
        </Col>
        <Col xxl={8}>
          <div className="mb-3">
            <TopProducts data={topProducts} />
          </div>
          <div>
            <TotalSales data={totalSales} />
          </div>
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={8}>
          <Audience chartData={audienceChart} className="h-100" />
        </Col>
        <Col md={6} xxl={4}>
          <SessionByBrowser data={sessionByBrowser} />
        </Col>
        <Col md={6} xxl={4}>
          <UsersByCountry chartData={sessionByCountry} mapData={countryData} />
        </Col>
        <Col xxl={8}>
          <ActiveUsers />
          <Stats />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xs={12} md={6} xxl={4}>
          <BounceRate className="h-100" />
        </Col>
        <Col xs={12} md={6} xxl={{ span: 4, order: 1 }}>
          <UsersAtTime />
        </Col>
        <Col xs={12} xxl={8}>
          <TrafficSource />
        </Col>
        <Col md={6} xxl={{ span: 4, order: 1 }}>
          <ReturningCustomer />
        </Col>
        <Col md={6} xxl={{ span: 4, order: 1 }}>
          <SalesPosLocation className="h-100" />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={8}>
          <TotalSalesEcommerce data={totalSale} />
        </Col>
        <Col xxl={4} md={6}>
          <ShoppingCart />
        </Col>
        <Col xxl={4} md={6}>
          <GrossRevenue data={grossRevenue} />
        </Col>
        <Col xxl={8}>
          <ProjectStatistics
            progressBar={progressBar}
            projectsTable={projectsTable}
            projectUsers={projectUsers}
          />
        </Col>
        <Col>
          <CandleChart data={candleChartData} />
        </Col>
      </Row>
    </>
  );
};

export default NumberStatsAndChart;
