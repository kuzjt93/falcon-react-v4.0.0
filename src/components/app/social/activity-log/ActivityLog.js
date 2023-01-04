import React from 'react';
import { Card } from 'react-bootstrap';
import activities from 'data/activities';
import Notification from 'components/notification/Notification';
import classNames from 'classnames';

const ActivityLog = () => {
  return (
    <Card>
      <Card.Header className="bg-light">
        <h5 className="mb-1 mb-md-0">Activity log</h5>
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

export default ActivityLog;
