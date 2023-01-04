import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useContext } from 'react';
import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProductContext } from 'context/Context';
import { getDiscountPrice } from 'helpers/utils';

const OrderSummary = ({
  shippingCost,
  subTotal,
  total,
  payableTotal,
  ...rest
}) => {
  const {
    productsState: { cartItems, promo }
  } = useContext(ProductContext);

  return (
    <Card {...rest}>
      <Card.Header className="bg-light btn-reveal-trigger d-flex flex-between-center">
        <h5 className="mb-0">Order Summary</h5>
        <Link
          to="/e-commerce/shopping-cart"
          className="btn btn-link btn-sm btn-reveal text-600"
        >
          <FontAwesomeIcon icon="pencil-alt" />
        </Link>
      </Card.Header>
      <Card.Body>
        <Table borderless className="fs--1 mb-0">
          <tbody>
            {cartItems?.map((product, index) => (
              <tr key={product.id} className="border-bottom">
                <th
                  className={classNames('ps-0', {
                    'pt-0': index === 0
                  })}
                >
                  {product.name} x {product.quantity}
                  <div className="text-400 fw-normal fs--2">
                    {product.features.join(', ')}
                  </div>
                </th>
                <th
                  className={classNames('pe-0 text-end', {
                    'pt-0': index === 0
                  })}
                >
                  ${product.totalPrice}
                </th>
              </tr>
            ))}

            <tr className="border-bottom">
              <th className="ps-0">Subtotal</th>
              <th className="pe-0 text-end">${subTotal}</th>
            </tr>
            <tr className="border-bottom">
              <th className="ps-0">Shipping</th>
              <th className="pe-0 text-end">+${shippingCost}</th>
            </tr>
            <tr>
              <th className="ps-0 pb-0">Total</th>
              <th className="pe-0 text-end pb-0">${total}</th>
            </tr>
            {promo && (
              <tr className="border-bottom">
                <th className="ps-0 pb-0">
                  Coupon:
                  <span className="text-success"> {promo.code}</span> ( -
                  {promo.discount}%)
                </th>
                <th className="pe-0 text-end">
                  -${getDiscountPrice(total, promo.discount)}
                </th>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between bg-light">
        <div className="fw-semi-bold">Payable Total</div>
        <div className="fw-bold">${payableTotal}</div>
      </Card.Footer>
    </Card>
  );
};

OrderSummary.propTypes = {
  subTotal: PropTypes.number.isRequired,
  shippingCost: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  payableTotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default OrderSummary;
