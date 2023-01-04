import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const IconItem = ({
  tag: Tag = 'a',
  icon,
  bg,
  size,
  color,
  className,
  transform,
  iconClass,
  onClick,
  ...rest
}) => (
  <Tag
    className={classNames(className, 'icon-item', {
      [`icon-item-${size}`]: size,
      [`bg-${bg}`]: bg,
      [`text-${color}`]: color
    })}
    {...rest}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} transform={transform} className={iconClass} />
  </Tag>
);

IconItem.propTypes = {
  tag: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  href: PropTypes.string,
  bg: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  iconClass: PropTypes.string,
  transform: PropTypes.string,
  onClick: PropTypes.func
};

export default IconItem;
