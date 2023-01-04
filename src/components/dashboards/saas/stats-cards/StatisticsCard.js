import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import Background from 'components/common/Background';
import SoftBadge from 'components/common/SoftBadge';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';

const StatisticsCard = ({ stat, ...rest }) => {
  const {
    title,
    value,
    decimal,
    suffix,
    prefix,
    valueClassName,
    linkText,
    link,
    badgeText,
    badgeBg,
    image,
    className
  } = stat;
  return (
    <Card className={classNames(className, 'overflow-hidden')} {...rest}>
      <Background image={image} className="bg-card" />
      <Card.Body className="position-relative">
        <h6>
          {title}
          {badgeText && (
            <SoftBadge bg={badgeBg} pill className="ms-2">
              {badgeText}
            </SoftBadge>
          )}
        </h6>
        <div
          className={classNames(
            valueClassName,
            'display-4 fs-4 mb-2 fw-normal font-sans-serif'
          )}
        >
          <CountUp
            start={0}
            end={value}
            duration={2.75}
            suffix={suffix}
            prefix={prefix}
            separator=","
            decimals={decimal ? 2 : 0}
            decimal="."
          />
        </div>
        <Link to={link} className="fw-semi-bold fs--1 text-nowrap">
          {linkText}
          <FontAwesomeIcon
            icon="angle-right"
            className="ms-1"
            transform="down-1"
          />
        </Link>
      </Card.Body>
    </Card>
  );
};

StatisticsCard.propTypes = {
  stat: PropTypes.shape({
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    decimal: PropTypes.bool,
    suffix: PropTypes.string.isRequired,
    prefix: PropTypes.string.isRequired,
    valueClassName: PropTypes.string,
    linkText: PropTypes.string,
    link: PropTypes.string,
    badgeText: PropTypes.string,
    badgeBg: PropTypes.string,
    image: PropTypes.string,
    className: PropTypes.string
  })
};

export default StatisticsCard;
