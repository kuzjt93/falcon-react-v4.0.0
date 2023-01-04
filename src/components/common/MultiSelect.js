import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const MultiSelect = forwardRef(({ options, placeholder, ...rest }, ref) => {
  return (
    <Select
      ref={ref}
      closeMenuOnSelect={false}
      isMulti
      options={options}
      placeholder={placeholder}
      classNamePrefix="react-select"
      {...rest}
    />
  );
});

MultiSelect.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string
};

export default MultiSelect;
