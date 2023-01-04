import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert, CloseButton } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const IconAlert = ({
  variant,
  dismissible,
  children,
  className,
  onClose,
  ...rest
}) => {
  const icon = {
    success: 'check-circle',
    info: 'info-circle',
    warning: 'exclamation-circle',
    danger: 'times-circle'
  };
  return (
    <Alert
      variant={variant}
      className={classNames(className, 'd-flex align-items-center')}
      {...rest}
    >
      <div className={`bg-${variant} me-3 icon-item`}>
        <FontAwesomeIcon icon={icon[variant]} className="text-white fs-3" />
      </div>
      <div className="flex-1">{children}</div>
      {dismissible && <CloseButton onClick={onClose} />}
    </Alert>
  );
};

IconAlert.propTypes = {
  variant: PropTypes.oneOf(['success', 'danger', 'warning', 'info']).isRequired,
  dismissible: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func
};

export default IconAlert;
