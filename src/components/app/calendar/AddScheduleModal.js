import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AppContext from 'context/Context';
import DatePicker from 'react-datepicker';

const AddScheduleModal = ({
  setIsOpenScheduleModal,
  isOpenScheduleModal,
  setInitialEvents,
  initialEvents,
  scheduleStartDate,
  setScheduleStartDate,
  scheduleEndDate,
  setScheduleEndDate
}) => {
  const {
    config: { isDark }
  } = useContext(AppContext);

  const [formData, setFormData] = useState({});

  const handleClose = () => {
    setIsOpenScheduleModal(!isOpenScheduleModal);
  };

  const handleChange = ({ target }) => {
    let name = target.name;
    let value = name === 'allDay' ? target.checked : target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setInitialEvents([...initialEvents, { id: uuid(), ...formData }]);
    setIsOpenScheduleModal(false);
  };

  useEffect(() => {
    if (isOpenScheduleModal) {
      setFormData({
        ...formData,
        start: scheduleStartDate,
        end: scheduleEndDate
      });
    } else {
      setScheduleStartDate(null);
      setScheduleEndDate(null);
    }
  }, [isOpenScheduleModal, scheduleStartDate, scheduleEndDate]);

  return (
    <Modal
      show={isOpenScheduleModal}
      onHide={handleClose}
      contentClassName="border"
    >
      <Form onSubmit={handleSubmit}>
        <Modal.Header
          closeButton
          closeVariant={isDark ? 'white' : undefined}
          className="bg-light px-x1 border-bottom-0"
        >
          <Modal.Title as="h5"> Create Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-x1">
          <Form.Group className="mb-3" controlId="titleInput">
            <Form.Label className="fs-0">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="startDate">
            <Form.Label className="fs-0">Start Date</Form.Label>
            <DatePicker
              selected={scheduleStartDate}
              onChange={date => {
                setScheduleStartDate(date);
                setFormData({ ...formData, start: date });
              }}
              className="form-control"
              placeholderText="MM-DD-YYYY H:M"
              dateFormat="MM-dd-yyyy h:mm aa"
              showTimeSelect
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="endDate">
            <Form.Label className="fs-0">End Date</Form.Label>
            <DatePicker
              selected={scheduleEndDate}
              onChange={date => {
                setScheduleEndDate(date);
                setFormData({ ...formData, end: date });
              }}
              className="form-control"
              placeholderText="MM-DD-YYYY H:M"
              dateFormat="MM-dd-yyyy h:mm aa"
              showTimeSelect
            />
          </Form.Group>
          <Form.Group controlId="allDay">
            <Form.Check
              type="checkbox"
              id="allDay"
              label="All Day"
              name="allDay"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fs-0">Schedule Meeting</Form.Label>
            <div>
              <Button
                as={Link}
                variant="link"
                to="#!"
                // type="button"
                className="badge-soft-success fw-medium"
                size="sm"
              >
                <FontAwesomeIcon icon="video" className="me-2" />
                <span>Add video conference link</span>
              </Button>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label className="fs-0">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="label">
            <Form.Label className="fs-0">Label</Form.Label>
            <Form.Select name="className" onChange={handleChange}>
              <option>None</option>
              <option value="bg-soft-info">Business</option>
              <option value="bg-soft-danger">Important</option>
              <option value="bg-soft-warning">Personal</option>
              <option value="bg-soft-success">Must Attend</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="bg-light px-x1 border-top-0">
          <Link to="#!" className="me-3 text-600">
            More options
          </Link>
          <Button
            variant="primary"
            type="submit"
            onClick={handleClose}
            className="px-4 mx-0"
          >
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

AddScheduleModal.propTypes = {
  setIsOpenScheduleModal: PropTypes.func.isRequired,
  isOpenScheduleModal: PropTypes.bool.isRequired,
  setInitialEvents: PropTypes.func,
  initialEvents: PropTypes.array,
  scheduleStartDate: PropTypes.instanceOf(Date),
  setScheduleStartDate: PropTypes.func.isRequired,
  scheduleEndDate: PropTypes.instanceOf(Date),
  setScheduleEndDate: PropTypes.func.isRequired
};

export default AddScheduleModal;
