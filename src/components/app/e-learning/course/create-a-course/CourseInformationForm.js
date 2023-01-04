import React from 'react';
import MultiSelect from 'components/common/MultiSelect';
import TinymceEditor from 'components/common/TinymceEditor';
import PropTypes from 'prop-types';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

const CourseInformationForm = ({ register, setValue, control }) => {
  const tagOptions = [
    { value: '1', label: 'Writing' },
    { value: '2', label: 'Misc' },
    { value: '3', label: 'Design' },
    { value: '4', label: 'Painting' }
  ];

  return (
    <Card className="mb-3">
      <Card.Header as="h5">Course Information</Card.Header>
      <Card.Body className="bg-light">
        <Row className="gx-2 gy-3">
          <Col md="12">
            <Form.Group controlId="courseTitle">
              <Form.Label>
                Course Title<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="courseTitle"
                required
                placeholder="Course Title"
                {...register('courseTitle')}
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group>
              <Form.Label>
                Category<span className="text-danger">*</span>
              </Form.Label>
              <Form.Select {...register(`selectCategory`)} required>
                <option value="">Select a category...</option>
                <option value="1">Academia</option>
                <option value="2">Arts & Crafts</option>
                <option value="3">Design</option>
                <option value="4">Development</option>
                <option value="5">Finance</option>
                <option value="6">Marketing</option>
                <option value="7">Music</option>
                <option value="8">Lifestyle</option>
                <option value="9">Photography</option>
                <option value="10">Miscellaneous</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group>
              <Form.Label>
                Sub-category<span className="text-danger">*</span>
              </Form.Label>
              <Form.Select {...register(`selectSubCategory`)} required>
                <option value="">Select a sub-category...</option>
                <option value="1">3D & Animation</option>
                <option value="2">Architectural Design</option>
                <option value="3">Graphics Design</option>
                <option value="4">Game Design</option>
                <option value="5">Fashion Design</option>
                <option value="6">Illustration</option>
                <option value="7">User Interface Design</option>
                <option value="8">UX Design</option>
                <option value="9">Web Design</option>
                <option value="10">Others…</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs="12">
            <Form.Group>
              <Form.Label>
                Tags<span className="text-danger">*</span>
              </Form.Label>
              <Controller
                name="tags"
                render={({ field, ref }) => (
                  <MultiSelect
                    {...field}
                    ref={ref}
                    closeMenuOnSelect={false}
                    isMulti
                    options={tagOptions}
                    placeholder="Select tags..."
                  />
                )}
                control={control}
              />
            </Form.Group>
          </Col>
          <Col xs="12">
            <Form.Group>
              <Form.Label>
                Course Description<span className="text-danger">*</span>
              </Form.Label>
              <div className="create-course-description-textarea">
                <TinymceEditor
                  height="13.438rem"
                  handleChange={newValue =>
                    setValue('courseDescription', newValue)
                  }
                />
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

CourseInformationForm.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired
};

export default CourseInformationForm;
