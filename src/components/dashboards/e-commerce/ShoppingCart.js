import React from 'react';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { shoppingCartItems } from 'data/dashboard/ecom';
import createMarkup from 'helpers/createMarkup';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const ShoppingCartItem = ({ item, index }) => {
  const { id, title, amount, barWidth, items, variant, icon, iconColor } = item;
  return (
    <Row
      className={classNames('g-0 align-items-center pb-3', {
        'border-top pt-3': index !== 0
      })}
    >
      <Col className="pe-4">
        <h6 className="fs--2 text-600">{title}</h6>

        <ProgressBar className="mt-xxl-auto" style={{ height: 5 }}>
          <ProgressBar
            variant={variant}
            now={barWidth}
            key={id}
            className="rounded-3"
          />
        </ProgressBar>
      </Col>
      <Col xs="auto" className="text-end">
        <p className="mb-0 text-900 font-sans-serif">
          <FontAwesomeIcon icon={icon} className={`text-${iconColor} me-1`} />
          {amount}%
        </p>
        <p
          className="mb-0 fs--2 text-500 fw-semi-bold"
          dangerouslySetInnerHTML={createMarkup(items)}
        />
      </Col>
    </Row>
  );
};

const ShoppingCart = () => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Shopping Cart"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body className="py-0 d-flex align-items-center h-100">
        <div className="flex-1">
          {shoppingCartItems.map((item, index) => (
            <ShoppingCartItem item={item} key={item.id} index={index} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

ShoppingCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    barWidth: PropTypes.number.isRequired,
    items: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }),
  index: PropTypes.number.isRequired
};

export default ShoppingCart;
