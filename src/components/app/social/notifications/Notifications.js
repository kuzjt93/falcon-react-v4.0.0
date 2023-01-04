import Notification from 'components/notification/Notification';
import { notifications } from 'data/notification/notification';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Notifications = () => {
  return (
    <Card>
      <Card.Header className="bg-light">
        <Row className="flex-between-center">
          <Col sm="auto">
            <h5 className="mb-1 mb-md-0">Your Notifications</h5>
          </Col>
          <Col sm="auto" className="fs--1">
            <Link to="#!" className="font-sans-serif ms-2 ms-sm-3">
              Mark all as read
            </Link>
            <div className="font-sans-serif ms-2 ms-sm-3"></div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="p-0">
        {notifications.map(notification => (
          <Notification {...notification} key={notification.id} />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Notifications;
