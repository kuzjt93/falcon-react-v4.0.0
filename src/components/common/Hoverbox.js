import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const Hoverbox = ({ children, className }) => {
  return (
    <div className={classNames('hoverbox', { [className]: className })}>
      {children}
    </div>
  );
};

export const HoverboxContent = ({ children, className }) => {
  return (
    <div className={classNames('hoverbox-content', { [className]: className })}>
      {children}
    </div>
  );
};

Hoverbox.Content = HoverboxContent;

HoverboxContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Hoverbox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Hoverbox;
