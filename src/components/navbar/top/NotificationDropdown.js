import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Card, Dropdown, ListGroup } from 'react-bootstrap';
import {
  rawEarlierNotifications,
  rawNewNotifications
} from 'data/notification/notification';
import { isIterableArray } from 'helpers/utils';
import useFakeFetch from 'hooks/useFakeFetch';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Notification from 'components/notification/Notification';

const NotificationDropdown = () => {
  // State
  const { data: newNotifications, setData: setNewNotifications } =
    useFakeFetch(rawNewNotifications);
  const { data: earlierNotifications, setData: setEarlierNotifications } =
    useFakeFetch(rawEarlierNotifications);
  const [isOpen, setIsOpen] = useState(false);
  const [isAllRead, setIsAllRead] = useState(false);

  // Handler
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.innerWidth < 1200 && setIsOpen(false);
    });
  }, []);

  const markAsRead = e => {
    e.preventDefault();

    const updatedNewNotifications = newNotifications.map(notification =>
      Object.prototype.hasOwnProperty.call(notification, 'unread')
        ? { ...notification, unread: false }
        : notification
    );
    const updatedEarlierNotifications = earlierNotifications.map(notification =>
      Object.prototype.hasOwnProperty.call(notification, 'unread')
        ? { ...notification, unread: false }
        : notification
    );

    setIsAllRead(true);
    setNewNotifications(updatedNewNotifications);
    setEarlierNotifications(updatedEarlierNotifications);
  };

  return (
    <Dropdown navbar={true} as="li" show={isOpen} onToggle={handleToggle}>
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={Link}
        to="#!"
        className={classNames('px-0 nav-link', {
          'notification-indicator notification-indicator-primary': !isAllRead
        })}
      >
        <FontAwesomeIcon icon="bell" transform="shrink-6" className="fs-4" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-card dropdown-menu-end dropdown-caret dropdown-caret-bg">
        <Card
          className="dropdown-menu-notification dropdown-menu-end shadow-none"
          style={{ maxWidth: '20rem' }}
        >
          <FalconCardHeader
            className="card-header"
            title="Notifications"
            titleTag="h6"
            light={false}
            endEl={
              <Link
                className="card-link fw-normal"
                to="#!"
                onClick={markAsRead}
              >
                Mark all as read
              </Link>
            }
          />
          <ListGroup
            variant="flush"
            className="fw-normal fs--1 scrollbar"
            style={{ maxHeight: '19rem' }}
          >
            <div className="list-group-title">NEW</div>{' '}
            {isIterableArray(newNotifications) &&
              newNotifications.map(notification => (
                <ListGroup.Item key={notification.id} onClick={handleToggle}>
                  <Notification {...notification} flush />
                </ListGroup.Item>
              ))}
            <div className="list-group-title">EARLIER</div>
            {isIterableArray(earlierNotifications) &&
              earlierNotifications.map(notification => (
                <ListGroup.Item key={notification.id} onClick={handleToggle}>
                  <Notification {...notification} flush />
                </ListGroup.Item>
              ))}
          </ListGroup>
          <div
            className="card-footer text-center border-top"
            onClick={handleToggle}
          >
            <Link className="card-link d-block" to="#!">
              View all
            </Link>
          </div>
        </Card>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
