import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({
  icon,
  iconAlign = 'left',
  iconClassName,
  transform,
  children,
  ...rest
}) => (
  <Button {...rest}>
    {iconAlign === 'right' && children}
    <FontAwesomeIcon
      icon={icon}
      className={classNames(iconClassName, {
        'me-1': children && iconAlign === 'left',
        'ms-1': children && iconAlign === 'right'
      })}
      transform={transform}
    />
    {iconAlign === 'left' || iconAlign === 'middle' ? children : false}
  </Button>
);

IconButton.propTypes = {
  ...Button.propTypes,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  children: PropTypes.any,
  iconAlign: PropTypes.oneOf(['left', 'right', 'middle']),
  iconClassName: PropTypes.string,
  transform: PropTypes.string
};

export default IconButton;
