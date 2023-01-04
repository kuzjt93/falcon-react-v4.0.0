import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const CustomDateInput = forwardRef(
  (
    { value, onClick, isInvalid, isValid, formControlProps, errorMessage },
    ref
  ) => {
    return (
      <>
        <Form.Control
          ref={ref}
          isInvalid={isInvalid}
          isValid={isValid}
          value={value}
          onClick={onClick}
          {...formControlProps}
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </>
    );
  }
);

CustomDateInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  formControlProps: PropTypes.object,
  errorMessage: PropTypes.string
};

export default CustomDateInput;
