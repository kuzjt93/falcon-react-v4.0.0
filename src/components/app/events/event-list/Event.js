import Calendar from 'components/common/Calendar';
import Flex from 'components/common/Flex';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({ details, isLast }) => {
  const {
    calendar,
    title,
    organizer,
    badge = {},
    time,
    place,
    location,
    duration,
    interested
  } = details;
  return (
    <Flex>
      <Calendar {...calendar} />
      <div className="flex-1 position-relative ps-3">
        <h6 className="fs-0 mb-0">
          <Link to="/events/event-detail">
            <span className="me-1">{title}</span>
            {badge.title && (
              <span className={`badge badge-${badge.type} rounded-pill `}>
                {badge.title}
              </span>
            )}
          </Link>
        </h6>
        <p className="mb-1">
          Organized by
          <Link to="#!" className="text-700 ps-1">
            {organizer}
          </Link>
        </p>
        <p className="text-1000 mb-0">Time: {time}</p>

        {duration && <p className="text-1000 mb-0">Duration: {duration}</p>}
        {interested && <p className="text-1000 mb-0">{interested}</p>}
        {location && <p className="text-1000 mb-0">Location: {location}</p>}

        <p className="mb-0">Place: {place}</p>
        {!isLast && <div className="border-dashed border-bottom my-3"></div>}
      </div>
    </Flex>
  );
};

Event.propTypes = {
  details: PropTypes.shape({
    calendar: PropTypes.shape(Calendar.propTypes),
    title: PropTypes.string.isRequired,
    organizer: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    location: PropTypes.string,
    duration: PropTypes.string,
    interested: PropTypes.string,
    badge: PropTypes.object
  }),
  isLast: PropTypes.bool
};

export default Event;
