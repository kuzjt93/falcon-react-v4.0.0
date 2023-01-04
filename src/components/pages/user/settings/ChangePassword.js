import FalconCardHeader from 'components/common/FalconCardHeader';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Card className="mb-3">
      <FalconCardHeader title="Change Password" />
      <Card.Body className="bg-light">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="oldPassword">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="text"
              value={formData.oldPassword}
              name="oldPassword"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="text"
              value={formData.newPassword}
              name="newPassword"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="text"
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="w-100" type="submit">
            Update Password
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ChangePassword;
