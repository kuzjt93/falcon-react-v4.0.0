import React from 'react';
import { Col, Row } from 'react-bootstrap';
import EcomStat from './EcomStat';
import GreetingCard from './greetings/GreetingCard';
import TotalSales from './totalsales/TotalSales';
import { totalSale } from 'data/dashboard/ecom';
import TopProducts from '../default/TopProducts';
import { topProducts } from 'data/dashboard/ecom';
import {
  notifications,
  products,
  saleItems,
  totalOrder
} from 'data/dashboard/ecom';
import { weeklySalesData } from 'data/dashboard/default';
import { marketShare } from 'data/dashboard/ecom';
import WeeklySales from 'components/dashboards/default/WeeklySales';
import MarketShare from 'components/dashboards/default/MarketShare';
import TotalOrder from 'components/dashboards/e-commerce/TotalOrder';
import ShoppingCart from './ShoppingCart';
import ReturningCustomer from './ReturningCustomer/ReturningCustomer';
import SalesPosLocation from './SalesPosLocation/SalesPosLocation';
import ProductShare from './ProductShare/ProductShare';
import BestSellingProducts from './BestSellingProducts';
import RecentPurchases from 'components/dashboards/e-commerce/recent-purchases/RecentPurchases';

const Ecommerce = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col xxl={6} xl={12}>
          <Row className="g-3">
            <Col xs={12}>
              <GreetingCard notifications={notifications} />
            </Col>
            <Col lg={12}>
              <Row className="g-3">
                <Col md={6}>
                  <WeeklySales
                    data={weeklySalesData}
                    width="6.5rem"
                    amountClassName="fs-2"
                  />
                </Col>
                <Col md={6}>
                  <ProductShare fontSize="fs-2" />
                </Col>
                <Col md={6}>
                  <MarketShare data={marketShare} radius={['100%', '80%']} />
                </Col>
                <Col md={6}>
                  <TotalOrder data={totalOrder} font="fs-2" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xxl={6} xl={12}>
          <EcomStat data={saleItems} />
          <TotalSales data={totalSale} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col md={6} lg={5} xxl={3}>
          <ShoppingCart />
        </Col>
        <Col md={6} lg={7} xxl={4} className="order-xxl-1">
          <TopProducts data={topProducts} />
        </Col>
        <Col md={12} xxl={9}>
          <RecentPurchases />
        </Col>
        <Col md={6} xxl={4}>
          <ReturningCustomer />
        </Col>
        <Col md={6} xxl={4}>
          <SalesPosLocation />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <BestSellingProducts products={products} />
        </Col>
      </Row>
    </>
  );
};

export default Ecommerce;
