import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import { Col } from 'react-bootstrap';
import SoftBadge from 'components/common/SoftBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const Stat = ({ statInfo: { title, grow, amount }, isLast }) => {
  return (
    <Col xs={12} sm="auto">
      <div
        className={classNames('mb-3', {
          'pe-4 border-sm-end border-200': !isLast,
          'pe-0': isLast
        })}
      >
        <h6 className="fs--2 text-600 mb-1">{title}</h6>
        <Flex alignItems="center">
          <h5 className="fs-0 text-900 mb-0 me-2">{amount}</h5>
          <SoftBadge bg={grow.color} pill rounded>
            <FontAwesomeIcon
              icon={classNames({
                'caret-up': grow.isGrow,
                'caret-down': !grow.isGrow
              })}
            />{' '}
            {grow.growAmount}%
          </SoftBadge>
        </Flex>
      </div>
    </Col>
  );
};

Stat.propTypes = {
  statInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    grow: PropTypes.shape({
      isGrow: PropTypes.bool,
      growAmount: PropTypes.number,
      color: PropTypes.string
    }),
    amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }).isRequired,
  isLast: PropTypes.bool.isRequired
};

export default Stat;
