import React, { useContext, useEffect, useRef, useState } from 'react';
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
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import events from 'data/calendar/events';
import AddScheduleModal from './AddScheduleModal';
import CalendarEventModal from './CalendarEventModal';
import DropdownFilter from 'components/common/DropdownFilter';
import AppContext from 'context/Context';

const Calendar = () => {
  const {
    config: { isRTL }
  } = useContext(AppContext);
  const calendarRef = useRef();
  const [title, setTitle] = useState('');
  const [calendarApi, setCalendarApi] = useState({});
  const [currentFilter, setCurrentFilter] = useState('Month View');
  const [isOpenScheduleModal, setIsOpenScheduleModal] = useState(false);
  const [isOpenEventModal, setIsOpenEventModal] = useState(false);
  const [modalEventContent, setModalEventContent] = useState({});
  const [scheduleStartDate, setScheduleStartDate] = useState();
  const [scheduleEndDate, setScheduleEndDate] = useState();

  const eventList = events.reduce(
    (acc, event) =>
      event.schedules
        ? acc.concat(event.schedules.concat(event))
        : acc.concat(event),
    []
  );

  const eventTimeFormat = {
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: true
  };

  const handleEventClick = info => {
    if (info.event.url) {
      window.open(info.event.url);
      info.jsEvent.preventDefault();
    } else {
      setModalEventContent(info);
      setIsOpenEventModal(true);
    }
  };

  const [initialEvents, setInitialEvents] = useState(eventList);
  const viewName = [
    'Month View',
    'Week View',
    'Day View',
    'List View',
    'Year View'
  ];

  const handleFilter = filter => {
    setCurrentFilter(filter);
    switch (filter) {
      case 'Month View':
        calendarApi.changeView('dayGridMonth');
        setTitle(calendarApi.getCurrentData().viewTitle);
        break;
      case 'Week View':
        calendarApi.changeView('timeGridWeek');
        setTitle(calendarApi.getCurrentData().viewTitle);
        break;
      case 'Day View':
        calendarApi.changeView('timeGridDay');
        setTitle(calendarApi.getCurrentData().viewTitle);
        break;
      case 'List View':
        calendarApi.changeView('listWeek');
        setTitle(calendarApi.getCurrentData().viewTitle);
        break;
      default:
        calendarApi.changeView('listYear');
        setTitle(calendarApi.getCurrentData().viewTitle);
    }
  };

  useEffect(() => {
    setCalendarApi(calendarRef.current.getApi());
  }, []);

  return (
    <>
      <Card>
        <Card.Header>
          <Row className="align-items-center gx-0">
            <Col xs="auto" className="d-flex justify-content-end order-md-1">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="nextTooltip">Previous</Tooltip>}
              >
                <Button
                  variant="link"
                  className="icon-item icon-item-sm icon-item-hover shadow-none p-0 me-1 ms-md-2"
                  onClick={() => {
                    calendarApi.prev();
                    setTitle(calendarApi.getCurrentData().viewTitle);
                  }}
                >
                  <FontAwesomeIcon icon="arrow-left" />
                </Button>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="previousTooltip">Next</Tooltip>}
              >
                <Button
                  variant="link"
                  className="icon-item icon-item-sm icon-item-hover shadow-none p-0 me-lg-2"
                  onClick={() => {
                    calendarApi.next();
                    setTitle(calendarApi.getCurrentData().viewTitle);
                  }}
                >
                  <FontAwesomeIcon icon="arrow-right" />
                </Button>
              </OverlayTrigger>
            </Col>
            <Col xs="auto" className="d-flex justify-content-end order-md-2">
              <h4 className="mb-0 fs-0 fs-sm-1 fs-lg-2">
                {title || `${calendarApi.currentDataManager?.data?.viewTitle}`}
              </h4>
            </Col>
            <Col xs md="auto" className="d-flex justify-content-end order-md-3">
              <Button
                size="sm"
                variant="falcon-primary"
                onClick={() => {
                  calendarApi.today();
                  setTitle(calendarApi.getCurrentData().viewTitle);
                }}
              >
                Today
              </Button>
            </Col>
            <Col md="auto" className="d-md-none">
              <hr />
            </Col>
            <Col xs="auto" className="d-flex order-md-0">
              <IconButton
                variant="primary"
                iconClassName="me-2"
                icon="plus"
                // transform="shrink-3"
                size="sm"
                onClick={() => {
                  setIsOpenScheduleModal(!isOpenScheduleModal);
                }}
              >
                Add Schedule
              </IconButton>
            </Col>
            <Col className="d-flex justify-content-end order-md-2">
              <DropdownFilter
                className="me-2"
                filters={viewName}
                currentFilter={currentFilter}
                handleFilter={handleFilter}
                icon="sort"
                right
              />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="p-0">
          <FullCalendar
            ref={calendarRef}
            headerToolbar={false}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            initialView="dayGridMonth"
            themeSystem="bootstrap"
            dayMaxEvents={2}
            direction={isRTL ? 'rtl' : 'ltr'}
            height={800}
            stickyHeaderDates={false}
            editable
            selectable
            selectMirror
            select={info => {
              setIsOpenScheduleModal(true);
              setScheduleStartDate(info.start);
              setScheduleEndDate(info.end);
            }}
            eventTimeFormat={eventTimeFormat}
            eventClick={handleEventClick}
            events={initialEvents}
          />
        </Card.Body>
      </Card>

      <AddScheduleModal
        isOpenScheduleModal={isOpenScheduleModal}
        setIsOpenScheduleModal={setIsOpenScheduleModal}
        initialEvents={initialEvents}
        setInitialEvents={setInitialEvents}
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

export default Calendar;
