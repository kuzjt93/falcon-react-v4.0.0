import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';

const Association = ({ image, title, description }) => (
  <Flex alignItems="center" className="position-relative mb-2">
    <img className="me-2 rounded-3" src={image} width={50} alt="" />
    <div>
      <h6 className="fs-0 mb-0">
        <a className="stretched-link" href="#!">
          {title}
        </a>
      </h6>
      <p className="mb-1">{description}</p>
    </div>
  </Flex>
);

Association.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Association;
