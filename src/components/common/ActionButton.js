import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const ActionButton = ({ placement = 'top', title, icon, ...rest }) => {
  return (
    <OverlayTrigger placement={placement} overlay={<Tooltip>{title}</Tooltip>}>
      <Button {...rest}>
        <FontAwesomeIcon icon={icon} />
      </Button>
    </OverlayTrigger>
  );
};

ActionButton.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default ActionButton;
