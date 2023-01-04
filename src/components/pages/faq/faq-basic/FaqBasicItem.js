import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const FaqBasicItem = ({ faq, isLast }) => {
  return (
    <>
      <h6>
        <Link to="#!">
          {faq.title}
          <FontAwesomeIcon icon="caret-right" className="ms-2" />
        </Link>
      </h6>
      <p className="fs--1 mb-0">{faq.description}</p>
      {!isLast && <hr className="my-3" />}
    </>
  );
};

FaqBasicItem.propTypes = {
  isLast: PropTypes.bool,
  faq: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default FaqBasicItem;
