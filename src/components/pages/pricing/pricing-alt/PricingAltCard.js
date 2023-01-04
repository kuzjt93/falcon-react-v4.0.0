import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PricingAltCard = ({
  pricing: { title, price, period, icon, buttonText, isFeatured, features }
}) => {
  return (
    <Col md>
      <div className="border rounded-3 overflow-hidden mb-3 mb-md-0">
        <Flex justifyContent="between" alignItems="center" className="p-4">
          <div>
            <h3 className="fw-light fs-5 mb-0 text-primary">{title}</h3>
            <h2 className="fw-light mt-0 text-primary">
              <sup className="fs-1">$</sup>
              <span className="fs-3">{price}</span>
              <span className="fs--2 mt-1">/ {period}</span>
            </h2>
          </div>
          <div className="pe-3">
            <img src={icon} width="70" alt={title} />
          </div>
        </Flex>
        <div className="p-4 bg-light">
          <ul className="list-unstyled">
            {features.map(feature => (
              <li
                key={feature.id}
                className={classNames('border-bottom py-2', {
                  'text-300': !feature.isActive
                })}
              >
                <FontAwesomeIcon
                  icon="check"
                  className={classNames('text-primary', {
                    'text-300': !feature.isActive
                  })}
                  transform="shrink-2"
                />{' '}
                {feature.title}
              </li>
            ))}
          </ul>
          <Button
            variant={isFeatured ? 'primary' : 'outline-primary'}
            className="d-block w-100"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Col>
  );
};

PricingAltCard.propTypes = {
  pricing: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    period: PropTypes.string.isRequired,
    icon: PropTypes.string,
    buttonText: PropTypes.string,
    isFeatured: PropTypes.bool,
    features: PropTypes.array
  })
};

export default PricingAltCard;
