import CustomDateInput from 'components/common/CustomDateInput';
import { timezones } from 'data/events/timezones';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const EventDetails = ({ register, setValue }) => {
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    regDate: null,
    startTime: null,
    endTime: null
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Card className="mb-3">
      <Card.Header as="h5">Event Details</Card.Header>
      <Card.Body className="bg-light">
        <Row className="gx-2 gy-3">
          <Col md="12">
            <Form.Group controlId="eventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                name="eventTitle"
                placeholder="Event Title"
                {...register('eventTitle')}
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <DatePicker
                selected={formData.startDate}
                onChange={newDate => {
                  handleChange('startDate', newDate);
                  setValue('startDate', newDate);
                }}
                customInput={
                  <CustomDateInput
                    formControlProps={{
                      placeholder: 'd/m/y',
                      ...register('startDate')
                    }}
                  />
                }
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="startTime">
              <Form.Label>Start Time</Form.Label>
              <DatePicker
                selected={formData.startTime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm"
                onChange={newDate => {
                  handleChange('startTime', newDate);
                  setValue('startTime', newDate);
                }}
                customInput={
                  <CustomDateInput
                    formControlProps={{
                      placeholder: 'H:i',
                      name: 'startTime',
                      ...register('startTime')
                    }}
                  />
                }
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="endDate">
              <Form.Label>End Date</Form.Label>

              <DatePicker
                selected={formData.endDate}
                onChange={newDate => {
                  handleChange('endDate', newDate);
                  setValue('endDate', newDate);
                }}
                customInput={
                  <CustomDateInput
                    formControlProps={{
                      placeholder: 'd/m/y',
                      name: 'endDate',
                      ...register('endDate')
                    }}
                  />
                }
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="endTime">
              <Form.Label>End Time</Form.Label>

              <DatePicker
                selected={formData.endTime}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm"
                onChange={newDate => {
                  handleChange('endTime', newDate);
                  setValue('endTime', newDate);
                }}
                customInput={
                  <CustomDateInput
                    formControlProps={{
                      placeholder: 'H:i',
                      name: 'endTime',
                      ...register('endTime')
                    }}
                  />
                }
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="registration">
              <Form.Label>Registration Deadline</Form.Label>
              <DatePicker
                selected={formData.regDate}
                onChange={newDate => {
                  handleChange('regDate', newDate);
                  setValue('regDate', newDate);
                }}
                customInput={
                  <CustomDateInput
                    formControlProps={{
                      placeholder: 'd/m/y',
                      name: 'regDate',
                      ...register('regDate')
                    }}
                  />
                }
              />
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="timezone">
              <Form.Label>Timezone</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="timeZone"
                {...register('timeZone')}
              >
                {timezones.map(item => (
                  <option
                    value={`${item.offset}/${item.name}`}
                    key={`${item.offset}/${item.name}`}
                  >
                    {`${item.offset}/${item.name}`}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md="12">
            <div className="border-dashed border-bottom"></div>
          </Col>
          <Col md="6">
            <Form.Group controlId="venue">
              <Form.Label>Venue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Venue"
                name="venue"
                {...register('venue')}
              />
              <Button size="sm" variant="link" className="p-0">
                Online Event
              </Button>
            </Form.Group>
          </Col>
          <Col md="6">
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                {...register('address')}
              />
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                {...register('city')}
              />
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                {...register('state')}
              />
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                name="country"
                {...register('country')}
              />
            </Form.Group>
          </Col>
          <Col md="12">
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="description"
                {...register('description')}
              />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

EventDetails.propTypes = {
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired
};
export default EventDetails;
