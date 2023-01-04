import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VerifiedBadge = ({ placement = 'top' }) => {
  return (
    <OverlayTrigger placement={placement} overlay={<Tooltip>Verified</Tooltip>}>
      <span>
        <FontAwesomeIcon
          icon="check-circle"
          transform="shrink-4 down-2"
          className="text-primary me-1"
        />
      </span>
    </OverlayTrigger>
  );
};

VerifiedBadge.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left'])
};

export default VerifiedBadge;
