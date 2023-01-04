import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Row,
  Tooltip
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from 'components/common/IconButton';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AppContext from 'context/Context';
import AddScheduleModal from 'components/app/calendar/AddScheduleModal';
import CalendarEventModal from 'components/app/calendar/CalendarEventModal';
import Flex from 'components/common/Flex';

const CalendarManagement = ({ data }) => {
  const {
    config: { isRTL }
  } = useContext(AppContext);
  const calendarRef = useRef();
  const [title, setTitle] = useState('');
  const [day, setDay] = useState('');
  const [calendarApi, setCalendarApi] = useState({});
  const [isOpenScheduleModal, setIsOpenScheduleModal] = useState(false);
  const [isOpenEventModal, setIsOpenEventModal] = useState(false);
  const [modalEventContent, setModalEventContent] = useState({});
  const [scheduleStartDate, setScheduleStartDate] = useState();
  const [scheduleEndDate, setScheduleEndDate] = useState();

  const handleEventClick = eventsInfo => {
    setModalEventContent({ event: calendarApi.getEventById(eventsInfo.id) });
    setIsOpenEventModal(true);
  };

  useEffect(() => {
    setCalendarApi(calendarRef.current.getApi());
  }, []);

  const getDate = () => {
    return calendarApi.getCurrentData().currentDate.toLocaleString('en-us', {
      weekday: 'long'
    });
  };

  return (
    <>
      <Card className="overflow-hidden h-100">
        <Card.Body className="p-0 management-calendar">
          <Row className="g-3">
            <Col md={7}>
              <div className="p-x1">
                <Flex justifyContent="between">
                  <div className="order-md-1">
                    <OverlayTrigger
                      overlay={<Tooltip id="nextTooltip">Previous</Tooltip>}
                    >
                      <Button
                        variant="falcon-default"
                        size="sm"
                        className="me-1"
                        onClick={() => {
                          calendarApi.prev();
                          setTitle(calendarApi.getCurrentData().viewTitle);
                          setDay(getDate);
                        }}
                      >
                        <FontAwesomeIcon icon="chevron-left" />
                      </Button>
                    </OverlayTrigger>
                    <Button
                      size="sm"
                      variant="falcon-default"
                      onClick={() => {
                        calendarApi.today();
                        setTitle(calendarApi.getCurrentData().viewTitle);
                        setDay(getDate);
                      }}
                      className="px-sm-4"
                    >
                      Today
                    </Button>
                    <OverlayTrigger
                      overlay={<Tooltip id="nextTooltip">Next</Tooltip>}
                    >
                      <Button
                        variant="falcon-default"
                        size="sm"
                        className="ms-1"
                        onClick={() => {
                          calendarApi.next();
                          setTitle(calendarApi.getCurrentData().viewTitle);
                          setDay(getDate);
                        }}
                      >
                        <FontAwesomeIcon icon="chevron-right" />
                      </Button>
                    </OverlayTrigger>
                  </div>

                  <IconButton
                    variant="falcon-primary"
                    iconClassName="me-2"
                    icon="plus"
                    size="sm"
                    onClick={() => {
                      setIsOpenScheduleModal(!isOpenScheduleModal);
                    }}
                  >
                    New Schedule
                  </IconButton>
                </Flex>
              </div>
              <div className="calendar-outline px-3">
                <FullCalendar
                  ref={calendarRef}
                  headerToolbar={false}
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  themeSystem="bootstrap"
                  direction={isRTL ? 'rtl' : 'ltr'}
                  height={360}
                  dateClick={info => {
                    setIsOpenScheduleModal(true);
                    setScheduleStartDate(info.date);
                  }}
                  events={data}
                />
              </div>
            </Col>
            <Col md={5} className="bg-light pt-3">
              <div className="px-3">
                <h4 className="mb-0 fs-0 fs-sm-1 fs-lg-2">
                  {title ||
                    `${calendarApi.currentDataManager?.data?.viewTitle}`}
                </h4>
                <p className="text-500 mb-0">
                  {day ||
                    `${new Date().toLocaleString('en-us', {
                      weekday: 'long'
                    })}`}
                </p>
                <ul
                  className="list-unstyled mt-3 scrollbar management-calendar-events"
                  id="management-calendar-events"
                >
                  {data.map(events => (
                    <li
                      className="border-top pt-3 mb-3 pb-1 cursor-pointer"
                      onClick={() => handleEventClick(events)}
                      key={events.id}
                    >
                      <div
                        className={`border-start border-3 ps-3 mt-1 border-${events.color}`}
                      >
                        <h6 className="mb-1 fw-semi-bold text-700">
                          {events.title}
                        </h6>
                        <p className="fs--2 text-600 mb-0">
                          {events.startTime || ''} {events.endTime ? '- ' : ''}
                          {events.endTime || ''}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <AddScheduleModal
        isOpenScheduleModal={isOpenScheduleModal}
        setIsOpenScheduleModal={setIsOpenScheduleModal}
        scheduleStartDate={scheduleStartDate}
        scheduleEndDate={scheduleEndDate}
        setScheduleStartDate={setScheduleStartDate}
        setScheduleEndDate={setScheduleEndDate}
      />

      <CalendarEventModal
        isOpenEventModal={isOpenEventModal}
        setIsOpenEventModal={setIsOpenEventModal}
        modalEventContent={modalEventContent}
      />
    </>
  );
};
CalendarManagement.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      startTime: PropTypes.string,
      endTime: PropTypes.string,
      color: PropTypes.string,
      classNames: PropTypes.string
    })
  )
};

export default CalendarManagement;
