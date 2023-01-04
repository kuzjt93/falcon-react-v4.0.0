import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { timezones } from 'data/events/timezones';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from 'context/Context';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import CustomDateInput from 'components/common/CustomDateInput';

const ScheduleDiscountModal = ({
  setIsOpenScheduleModal,
  isOpenScheduleModal
}) => {
  const {
    config: { isDark }
  } = useContext(AppContext);

  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null,
    timeZone: null,
    startTime: null,
    endTime: null
  });

  const defaultValues = {
    timeZone: 'GMT-12:00/Etc/GMT-12'
  };
  const submittedValues = {};
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const onSubmit = data => {
    console.log(data);
    const keys = Object.keys(data);
    for (const key of keys) {
      submittedValues[key] = '';
    }
    const allValues = { ...submittedValues, ...defaultValues };
    reset({ ...allValues });
  };
  const handleClose = () => {
    setIsOpenScheduleModal(!isOpenScheduleModal);
  };

  return (
    <Modal
      size="lg"
      centered
      show={isOpenScheduleModal}
      onHide={handleClose}
      contentClassName="border"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header
          closeButton
          closeVariant={isDark ? 'white' : undefined}
          className="px-x1"
        >
          <Modal.Title as="h5">Schedule for Discount</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-x1 bg-light">
          <Row className="gx-2 gy-3">
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
            <Col md="6" />
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
          </Row>
        </Modal.Body>
        <Modal.Footer className="px-x1 py-2">
          <Button
            variant="falcon-default"
            type="button"
            onClick={handleClose}
            className="me-3"
          >
            <FontAwesomeIcon icon="times" className="me-2 fs--1" />
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleClose}
            className="mx-0"
          >
            <FontAwesomeIcon icon="check" className="me-2 fs--1" />
            Confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

ScheduleDiscountModal.propTypes = {
  setIsOpenScheduleModal: PropTypes.func.isRequired,
  isOpenScheduleModal: PropTypes.bool.isRequired
};

export default ScheduleDiscountModal;
