import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import { Col } from 'react-bootstrap';

const WidgetSectionTitle = ({
  title,
  subtitle,
  icon,
  transform,
  className
}) => {
  return (
    <Flex className={className}>
      <span className="fa-stack ms-n1 me-2">
        <FontAwesomeIcon icon="circle" className="text-300 fa-stack-2x" />
        <FontAwesomeIcon
          icon={icon}
          transform={transform}
          className="text-primary fa-stack-1x"
          inverse
        />
      </span>
      <Col>
        <h5 className="mb-0 text-primary position-relative">
          <span className="bg-200 dark__bg-1100 pe-3">{title}</span>
          <span className="border position-absolute top-50 translate-middle-y w-100 start-0 z-index--1"></span>
        </h5>
        <p className="mb-0">{subtitle}</p>
      </Col>
    </Flex>
  );
};

WidgetSectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  transform: PropTypes.string,
  className: PropTypes.string
};

export default WidgetSectionTitle;
