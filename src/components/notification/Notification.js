import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import createMarkup from 'helpers/createMarkup';
import Avatar from 'components/common/Avatar';

const Notification = ({
  avatar,
  time,
  className,
  unread,
  flush,
  emoji,
  children
}) => (
  <Link
    className={classNames(
      'notification',
      { 'notification-unread': unread, 'notification-flush': flush },
      className
    )}
    to="#!"
  >
    {avatar && (
      <div className="notification-avatar">
        <Avatar {...avatar} className="me-3" />
      </div>
    )}
    <div className="notification-body">
      <p className="mb-1" dangerouslySetInnerHTML={createMarkup(children)} />
      <span className="notification-time">
        {emoji && (
          <span className="me-2" role="img" aria-label="Emoji">
            {emoji}
          </span>
        )}
        {time}
      </span>
    </div>
  </Link>
);

Notification.propTypes = {
  avatar: PropTypes.shape(Avatar.propTypes),
  time: PropTypes.string.isRequired,
  className: PropTypes.string,
  unread: PropTypes.bool,
  flush: PropTypes.bool,
  emoji: PropTypes.string,
  children: PropTypes.node
};

Notification.defaultProps = { unread: false, flush: false };

export default Notification;
