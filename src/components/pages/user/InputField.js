import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const DateInputField = () => {
  const [date, setDate] = useState(null);

  return (
    <DatePicker
      selected={date}
      onChange={date => setDate(date)}
      className="form-control form-control-sm"
      placeholderText="Select Date"
    />
  );
};

const InputField = ({ label, type = 'text', name, handleChange, ...rest }) => (
  <Form.Group as={Row} className="mb-3" controlId={name}>
    <Form.Label column xs={3} className="text-lg-end">
      {label}
    </Form.Label>
    <Col xs={9} sm={7}>
      {type === 'date' ? (
        <DateInputField />
      ) : (
        <Form.Control
          type={type}
          placeholder={label}
          size="sm"
          name={name}
          onChange={handleChange}
          {...rest}
        />
      )}
    </Col>
  </Form.Group>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func
};

export default InputField;
