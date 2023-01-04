import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AppContext from 'context/Context';
import Flex from 'components/common/Flex';
import dayjs from 'dayjs';

const getCircleStackIcon = (icon, transform) => (
  <span className="fa-stack ms-n1 me-3">
    <FontAwesomeIcon icon="circle" className="text-200 fa-stack-2x" />
    <FontAwesomeIcon
      icon={icon}
      transform={transform ?? ''}
      className="text-primary fa-stack-1x"
      inverse
    />
  </span>
);

const EventModalMediaContent = ({ icon, heading, content, children }) => (
  <Flex className="mt-3">
    {getCircleStackIcon(icon)}
    <div className="flex-1">
      <h6>{heading}</h6>
      {children || <p className="mb-0 text-justify">{content}</p>}
    </div>
  </Flex>
);

const CalendarEventModal = ({
  setIsOpenEventModal,
  isOpenEventModal,
  modalEventContent
}) => {
  const {
    config: { isDark }
  } = useContext(AppContext);

  const handleClose = () => {
    setIsOpenEventModal(!isOpenEventModal);
  };

  const { title, end, start } = isOpenEventModal && modalEventContent.event;
  const { description, location, organizer, schedules } =
    isOpenEventModal && modalEventContent.event.extendedProps;

  return (
    <Modal
      show={isOpenEventModal}
      onHide={handleClose}
      contentClassName="border"
      centered
    >
      <Modal.Header
        closeButton
        closeVariant={isDark ? 'white' : undefined}
        className="bg-light px-x1 border-bottom-0"
      >
        <Modal.Title>
          <h5 className="mb-0">{title}</h5>
          {organizer && (
            <p className="mb-0 fs--1 mt-1 fw-normal">
              by <a href="#!">{organizer}</a>
            </p>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-x1 pb-x1 pt-1 fs--1">
        {description && (
          <EventModalMediaContent
            icon="align-left"
            heading="Description"
            content={description}
          />
        )}
        {(end || start) && (
          <EventModalMediaContent icon="calendar-check" heading="Date and Time">
            <p className="mb-1">
              {dayjs(start).format('dddd, MMMM DD, YYYY, hh:mm A')}
              {end && (
                <>
                  -<br />
                  {dayjs(end).format('dddd, MMMM DD, YYYY, hh:mm A')}
                </>
              )}
            </p>
          </EventModalMediaContent>
        )}
        {location && (
          <EventModalMediaContent icon="map-marker-alt" heading="Location">
            <div
              className="mb-1"
              dangerouslySetInnerHTML={{ __html: location }}
            />
          </EventModalMediaContent>
        )}
        {schedules && (
          <EventModalMediaContent icon="clock" heading="Schedule">
            <ul className="list-unstyled timeline mb-0">
              {schedules.map((schedule, index) => (
                <li key={index}>{schedule.title}</li>
              ))}
            </ul>
          </EventModalMediaContent>
        )}
      </Modal.Body>
      <Modal.Footer className="bg-light px-x1 border-top-0">
        <Button
          as={Link}
          to="/events/create-an-event"
          variant="falcon-default"
          size="sm"
        >
          <FontAwesomeIcon icon="pencil-alt" className="fs--2 me-2" />
          <span>Edit</span>
        </Button>
        <Button
          as={Link}
          to="/events/event-detail"
          variant="falcon-primary"
          size="sm"
        >
          <span>See more details</span>
          <FontAwesomeIcon icon="angle-right" className="fs--2 ms-1" />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

EventModalMediaContent.propTypes = {
  icon: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string,
  children: PropTypes.node
};

CalendarEventModal.propTypes = {
  setIsOpenEventModal: PropTypes.func.isRequired,
  isOpenEventModal: PropTypes.bool.isRequired,
  modalEventContent: PropTypes.object.isRequired
};

export default CalendarEventModal;
