import React, { useContext } from 'react';
import { Col, Modal, Row, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';
import IconButton from 'components/common/IconButton';
import AppContext, { ProductContext } from 'context/Context';

const CartModal = () => {
  const {
    productsState: {
      cartModal: { show, product, type, quantity }
    },
    productsDispatch
  } = useContext(ProductContext);

  const {
    config: { isDark }
  } = useContext(AppContext);

  const handleClose = () => {
    productsDispatch({
      type: 'TOGGLE_CART_MODAL'
    });
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header
        closeButton
        closeVariant={isDark ? 'white' : null}
        className="border-200"
      >
        <Modal.Title as="h5">
          <Flex alignItems="center">
            <div className="icon-item bg-soft-success shadow-none">
              <FontAwesomeIcon icon="cart-plus" className="text-success" />
            </div>
            <div className="ms-2">
              You just {type === 'remove' ? 'removed' : 'added'} {quantity} item
              {quantity === 1 ? '' : 's'}
            </div>
          </Flex>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="g-0 align-items-center">
          <Col>
            <Flex alignItems="center">
              <Link to={`/e-commerce/product/product-details/${product.id}`}>
                <Image
                  src={product.files && product.files[0].src}
                  rounded
                  className="me-3 d-none d-md-block"
                  width="80"
                  alt="product image"
                />
              </Link>
              <div className="flex-1">
                <h5 className="fs-0">
                  <Link
                    to={`/e-commerce/product/product-details/${product.id}`}
                    className="text-900"
                  >
                    {product.name}
                  </Link>
                </h5>
              </div>
            </Flex>
          </Col>
          <Col sm="auto" className="ps-sm-3 d-none d-sm-block">
            ${product.totalPrice}
          </Col>
        </Row>
      </Modal.Body>
      {type !== 'remove' && (
        <Modal.Footer className="border-200">
          <Button
            to="/e-commerce/checkout"
            as={Link}
            size="sm"
            onClick={handleClose}
            variant="secondary"
          >
            Checkout
          </Button>
          <IconButton
            as={Link}
            to="/e-commerce/shopping-cart"
            size="sm"
            className="ms-2"
            icon="chevron-right"
            variant="primary"
            iconAlign="right"
            onClick={handleClose}
          >
            Go to Cart
          </IconButton>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CartModal;
