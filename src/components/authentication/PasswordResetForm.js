import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form } from 'react-bootstrap';
import classNames from 'classnames';

const PasswordResetForm = ({ hasLabel }) => {
  // State
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    toast.success('Login with your new password', {
      theme: 'colored'
    });
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form
      className={classNames('mt-3', { 'text-left': hasLabel })}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>New Password</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'New Password' : ''}
          value={formData.password}
          name="password"
          onChange={handleFieldChange}
          type="password"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Confirm Password</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Confirm Password' : ''}
          value={formData.confirmPassword}
          name="confirmPassword"
          onChange={handleFieldChange}
          type="password"
        />
      </Form.Group>

      <Button
        type="submit"
        className="w-100"
        disabled={!formData.password || !formData.confirmPassword}
      >
        Set password
      </Button>
    </Form>
  );
};

PasswordResetForm.propTypes = {
  hasLabel: PropTypes.bool
};

export default PasswordResetForm;
