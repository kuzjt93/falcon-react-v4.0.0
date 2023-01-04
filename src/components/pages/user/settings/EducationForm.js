import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import InputField from '../InputField';

const EducationForm = () => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    field: '',
    from: '',
    to: ''
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
    <Form onSubmit={handleSubmit}>
      <InputField
        value={formData.school}
        label="School"
        name="school"
        handleChange={handleChange}
      />
      <InputField
        value={formData.degree}
        label="Degree"
        name="degree"
        handleChange={handleChange}
      />
      <InputField
        value={formData.field}
        label="Field"
        name="field"
        handleChange={handleChange}
      />

      <InputField
        type="date"
        value={formData.from}
        label="From"
        name="from"
        onChange={value => {
          setFormData({ ...formData, from: value });
        }}
      />

      <InputField
        type="date"
        value={formData.to}
        label="To"
        name="to"
        onChange={value => {
          setFormData({ ...formData, to: value });
        }}
      />

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 3 }}>
          <Button type="submit">Save</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default EducationForm;
