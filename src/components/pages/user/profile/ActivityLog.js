import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Notification from 'components/notification/Notification';
import classNames from 'classnames';
import Flex from 'components/common/Flex';
import { Link } from 'react-router-dom';

const ActivityLog = ({ activities, ...rest }) => {
  return (
    <Card {...rest}>
      <Card.Header className="bg-light">
        <Flex justifyContent="between">
          <h5 className="mb-1 mb-md-0">Activity log</h5>
          <Link to="/social/activity-log" className="font-sans-serif">
            All logs
          </Link>
        </Flex>
      </Card.Header>
      <Card.Body className="p-0">
        {activities.map((activity, index) => (
          <Notification
            {...activity}
            key={activity.id}
            className={classNames(
              'border-x-0 border-bottom-0 border-300',
              index + 1 === activities.length ? 'rounded-top-0' : 'rounded-0'
            )}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

ActivityLog.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.shape(Notification.propTypes))
    .isRequired
};

export default ActivityLog;
