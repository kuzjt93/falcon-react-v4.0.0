import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Rating from 'react-rating';
import PropTypes from 'prop-types';
import AppContext from 'context/Context';

const StarRating = ({ fractions = 2, rating, handleChange, ...rest }) => {
  const {
    config: { isRTL }
  } = useContext(AppContext);

  return (
    <Rating
      fractions={fractions}
      initialRating={rating}
      fullSymbol={<FontAwesomeIcon icon="star" className="text-warning" />}
      emptySymbol={<FontAwesomeIcon icon="star" className="text-300" />}
      onChange={handleChange}
      direction={isRTL ? 'rtl' : 'ltr'}
      {...rest}
    />
  );
};

StarRating.propTypes = {
  fractions: PropTypes.number,
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func
};

export default StarRating;
