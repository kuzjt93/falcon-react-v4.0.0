import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';

const LmsStatItem = ({ stat }) => {
  return (
    <Col xxl={3} md={6} className={`${stat.className} px-3 text-center`}>
      <div className={`icon-circle icon-circle-${stat.color}`}>
        <FontAwesomeIcon
          icon={stat.icon}
          className={`fs-2 text-${stat.color}`}
        />
      </div>
      <h4 className="mb-1 font-sans-serif">
        <CountUp
          start={0}
          end={stat.amount}
          duration={2.75}
          className="text-700"
          separator=","
        />
        <span className="fw-normal text-600">{' ' + stat.title}</span>
      </h4>

      <p className="fs--1 fw-semi-bold mb-0">
        {stat.amountLastMonth}{' '}
        <span className="text-600 fw-normal">last month</span>
      </p>
    </Col>
  );
};

LmsStatItem.propTypes = {
  stat: PropTypes.shape({
    title: PropTypes.string,
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    amountLastMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    icon: PropTypes.string,
    className: PropTypes.string
  })
};

export default LmsStatItem;
