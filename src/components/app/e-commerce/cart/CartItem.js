import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProductHook from '../product/useProductHook';
import { ProductContext } from 'context/Context';
import QuantityController from '../QuantityController';

const CartItem = ({ product }) => {
  const { id, files, name, quantity, totalPrice } = product;

  const { handleAddToCart } = useProductHook(product);

  const { productsDispatch } = useContext(ProductContext);

  const handleRemove = () => {
    productsDispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        product
      }
    });
  };

  const handleIncrease = () => {
    handleAddToCart(parseInt(quantity + 1));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      handleAddToCart(parseInt(quantity - 1));
    }
  };

  const handleChange = e => {
    handleAddToCart(parseInt(e.target.value < 1 ? 1 : e.target.value));
  };

  return (
    <Row className="gx-card mx-0 align-items-center border-bottom border-200">
      <Col xs={8} className="py-3">
        <div className="d-flex align-items-center">
          <Link to="/e-commerce/product/product-details">
            <img
              src={files[0].src}
              width="60"
              alt={name}
              className="img-fluid rounded-1 me-3 d-none d-md-block"
            />
          </Link>
          <div className="flex-1">
            <h5 className="fs-0">
              <Link
                to="/e-commerce/product/product-details"
                className="text-900"
              >
                {name}
              </Link>
            </h5>
            <div className="fs--2 fs-md--1">
              <Button
                variant="link"
                size="sm"
                className="text-danger fs--2 fs-md--1 fw-normal p-0"
                onClick={() => handleRemove(id)}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={4} className="py-3">
        <Row className="align-items-center">
          <Col
            md={{ span: 8, order: 0 }}
            xs={{ order: 1 }}
            className="d-flex justify-content-end justify-content-md-center"
          >
            <div>
              <QuantityController
                quantity={quantity}
                handleChange={handleChange}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                btnClassName="px-2"
              />
            </div>
          </Col>
          <Col
            md={{ span: 4, order: 1 }}
            xs={{ order: 0 }}
            className="text-end ps-0 mb-2 mb-md-0 text-600"
          >
            ${totalPrice}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    files: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
  })
};

export default CartItem;
