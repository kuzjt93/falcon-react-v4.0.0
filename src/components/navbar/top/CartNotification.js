import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { ProductContext } from 'context/Context';
import { getProductsQuantity } from 'helpers/utils';
import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartNotification = () => {
  const {
    productsState: { cartItems }
  } = useContext(ProductContext);

  return (
    <Nav.Item as="li" className="d-none d-sm-block">
      <Nav.Link
        as={Link}
        to="/e-commerce/shopping-cart"
        className={classNames('px-0', {
          'notification-indicator notification-indicator-warning position-relative notification-indicator-fill':
            getProductsQuantity(cartItems)
        })}
      >
        {cartItems.length > 0 && (
          <span className="notification-indicator-number">
            {getProductsQuantity(cartItems)}
          </span>
        )}
        <FontAwesomeIcon
          icon="shopping-cart"
          transform="shrink-7"
          className="fs-4"
        />
      </Nav.Link>
    </Nav.Item>
  );
};

export default CartNotification;
