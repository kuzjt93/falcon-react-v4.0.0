import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SoftBadge from 'components/common/SoftBadge';

const PricingDefaultCard = ({
  pricing: {
    title,
    subTitle,
    price,
    url,
    buttonText,
    isFeatured,
    featureTitle,
    features
  }
}) => {
  return (
    <Col
      lg={4}
      className={classNames('border-top border-bottom', {
        'dark__bg-1000 px-4 px-lg-0': isFeatured
      })}
      style={{ backgroundColor: isFeatured && 'rgba(115, 255, 236, 0.18)' }}
    >
      <div className="h100">
        <div className="text-center p-4">
          <h3 className="fw-normal my-0">{title}</h3>
          <p className="mt-3">{subTitle}</p>
          <h2 className="fw-medium my-4">
            <sup className="fw-normal fs-2 me-1">$</sup>
            {price}
            <small className="fs--1 text-700">/ year</small>
          </h2>
          <Button
            as={Link}
            variant={isFeatured ? 'primary' : 'outline-primary'}
            to={url}
          >
            {buttonText}
          </Button>
        </div>
        <hr className="border-bottom-0 m-0" />
        <div className="text-start px-sm-4 py-4">
          <h5 className="fw-medium fs-0">{featureTitle}</h5>
          <ul className="list-unstyled mt-3">
            {features.map(feature => (
              <li className="py-1" key={feature.id}>
                <FontAwesomeIcon icon="check" className="me-2 text-success" />{' '}
                {feature.title}{' '}
                {feature.tag && (
                  <SoftBadge pill bg={feature.tag.type}>
                    {feature.tag.label}
                  </SoftBadge>
                )}
              </li>
            ))}
          </ul>
          <Link to="#!" className="btn btn-link">
            More about {title}
          </Link>
        </div>
      </div>
    </Col>
  );
};

PricingDefaultCard.propTypes = {
  pricing: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    url: PropTypes.string,
    buttonText: PropTypes.string,
    isFeatured: PropTypes.bool,
    featureTitle: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        tag: PropTypes.shape({
          label: PropTypes.string,
          type: PropTypes.string
        })
      })
    )
  })
};

export default PricingDefaultCard;
