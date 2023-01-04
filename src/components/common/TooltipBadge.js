import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TooltipBadge = ({
  placement = 'top',
  tooltip,
  icon,
  color = 'primary'
}) => {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={<Tooltip>{tooltip}</Tooltip>}
    >
      <span>
        <FontAwesomeIcon
          icon={icon}
          transform="shrink-2"
          className={`text-${color} ms-1`}
        />
      </span>
    </OverlayTrigger>
  );
};

TooltipBadge.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  tooltip: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string
};

export default TooltipBadge;
