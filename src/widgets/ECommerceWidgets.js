import React from 'react';
import BillingCard from 'components/app/e-commerce/billing/BillingCard';
import ShoppingCart from 'components/app/e-commerce/cart/ShoppingCart';
import OrderSummary from 'components/app/e-commerce/checkout/OrderSummary';
import BestSellingProducts from 'components/dashboards/e-commerce/BestSellingProducts';
import { Card, Col, Row } from 'react-bootstrap';
import WidgetSectionTitle from './WidgetSectionTitle';
import { products } from 'data/dashboard/ecom';

const ECommerceWidgets = () => {
  return (
    <>
      <WidgetSectionTitle
        icon="cart-plus"
        title="E-commerce"
        subtitle="Find more cards which are dedicatedly made for E-commerce."
        transform="shrink-4"
        className="mb-4 mt-6"
      />

      <Row className="g-3 mb-3">
        <Col xs={12}>
          <ShoppingCart />
        </Col>
        <Col lg={6}>
          <Card className="h-100">
            <Card.Header>
              <h5 className="mb-0">Billing</h5>
            </Card.Header>
            <Card.Body className="bg-light">
              <BillingCard />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <OrderSummary
            shippingCost={162}
            subTotal={31044}
            total={31206}
            payableTotal={31206}
          />
        </Col>
        <Col>
          <BestSellingProducts products={products} />
        </Col>
      </Row>
    </>
  );
};

export default ECommerceWidgets;
