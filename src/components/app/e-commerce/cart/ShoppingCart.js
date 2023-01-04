import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import IconButton from 'components/common/IconButton';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import CartModal from './CartModal';
import { ProductContext } from 'context/Context';
import { getSubtotal } from 'helpers/utils';

const ShoppingCart = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [promoCode, setPromoCode] = useState('');

  const {
    productsState: { cartItems },
    productsDispatch
  } = useContext(ProductContext);

  useEffect(() => {
    setTotalCost(getSubtotal(cartItems));
  }, [cartItems]);

  const applyPromo = e => {
    e.preventDefault();
    productsDispatch({
      type: 'APPLY_PROMO',
      payload: {
        promoCode
      }
    });
    setPromoCode('');
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Row className="justify-content-between">
            <Col md="auto">
              <h5 className="mb-3 mb-md-0">
                Shopping Cart ({cartItems.length} Items)
              </h5>
            </Col>
            <Col md="auto">
              <IconButton
                className="border-300 me-2"
                iconClassName="me-1"
                variant="outline-secondary"
                size="sm"
                icon="chevron-left"
                transform="shrink-4"
                as={Link}
                to="/e-commerce/product/product-list"
              >
                Continue Shopping
              </IconButton>
              <Button
                as={Link}
                to="/e-commerce/checkout"
                variant="primary"
                size="sm"
              >
                Checkout
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="p-0">
          {cartItems.length > 0 ? (
            <>
              <Row className="gx-card mx-0 bg-200 text-900 fs--1 fw-semi-bold">
                <Col xs={9} md={8} className="py-2">
                  Name
                </Col>
                <Col xs={3} md={4}>
                  <Row>
                    <Col md={8} className="py-2 d-none d-md-block text-center">
                      Quantity
                    </Col>
                    <Col xs={12} md={4} className="text-end py-2">
                      Price
                    </Col>
                  </Row>
                </Col>
              </Row>
              {cartItems.map(product => (
                <CartItem key={product.id} product={product} />
              ))}
              <Row className="fw-bold gx-card mx-0">
                <Col xs={9} md={8} className="py-2 text-end text-900">
                  Total
                </Col>
                <Col className="px-0">
                  <Row className="gx-card mx-0">
                    <Col md={7} className="py-2 d-none d-md-block text-center">
                      {cartItems.length} (items)
                    </Col>
                    <Col
                      xs={12}
                      md={5}
                      className="text-end py-2 text-nowrap px-x1"
                    >
                      ${totalCost}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </>
          ) : (
            <p className="p-x1 mb-0 bg-light">
              You have no items in your shopping cart. Go ahead and start
              shopping!
            </p>
          )}
        </Card.Body>

        {cartItems.length > 0 && (
          <Card.Footer className="bg-light d-flex justify-content-end">
            <Form className="me-3" onSubmit={applyPromo}>
              <div className="input-group input-group-sm">
                <Form.Control
                  type="text"
                  placeholder="GET50"
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="border-300"
                  type="submit"
                >
                  Apply
                </Button>
              </div>
            </Form>
            <Button
              as={Link}
              to="/e-commerce/checkout"
              variant="primary"
              size="sm"
            >
              Checkout
            </Button>
          </Card.Footer>
        )}
      </Card>
      <CartModal />
    </>
  );
};

export default ShoppingCart;
