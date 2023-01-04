import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const FalconCardFooterLink = ({
  title,
  bg,
  borderTop,
  to,
  className,
  ...rest
}) => (
  <Card.Footer
    className={classNames(className, `bg-${bg} p-0`, {
      'border-top': borderTop
    })}
  >
    <Button
      as={Link}
      variant="link"
      size="lg"
      to={to}
      className="w-100 py-2"
      {...rest}
    >
      {title}
      <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
    </Button>
  </Card.Footer>
);

FalconCardFooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  bg: PropTypes.string,
  borderTop: PropTypes.bool,
  to: PropTypes.string,
  className: PropTypes.string
};

FalconCardFooterLink.defaultProps = { to: '#!', bg: 'light' };

export default FalconCardFooterLink;
