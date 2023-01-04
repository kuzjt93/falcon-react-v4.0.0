import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const ModalMediaContent = ({
  children,
  icon,
  transform,
  title,
  headingClass,
  headingContent,
  isHr = true
}) => {
  return (
    <Flex>
      <span className="fa-stack ms-n1 me-3">
        <FontAwesomeIcon icon="circle" className="text-200 fa-stack-2x" />
        <FontAwesomeIcon
          icon={icon}
          transform={`shrink-2 ${transform}`}
          className="text-primary fa-stack-1x"
          inverse
        />
      </span>
      <div className="flex-1">
        <Flex className={classNames('mb-2', headingClass)}>
          <h5 className="mb-0 fs-0">{title}</h5>
          {headingContent && headingContent}
        </Flex>
        {children}
        {isHr && <hr className="my-4" />}
      </div>
    </Flex>
  );
};

ModalMediaContent.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  children: PropTypes.node.isRequired,
  headingClass: PropTypes.string,
  headingContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  transform: PropTypes.string,
  isHr: PropTypes.bool
};

export default ModalMediaContent;
