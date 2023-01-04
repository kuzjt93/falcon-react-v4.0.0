import ecomBg from 'assets/img/illustrations/ecommerce-bg.png';
import Background from 'components/common/Background';
import Flex from 'components/common/Flex';
import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import Notification from './Notification';

const GreetingCard = ({ notifications }) => {
  return (
    <Card className="bg-transparent-50 overflow-hidden">
      <Card.Header className="position-relative">
        <Background
          image={ecomBg}
          className="d-none d-md-block bg-card z-index-1"
          style={{
            backgroundSize: '230px',
            backgroundPosition: 'right bottom',
            zIndex: '-1'
          }}
        />
        <div className="position-relative z-index-2">
          <div>
            <h3 className="text-primary mb-1">Good Afternoon, Jonathan!</h3>
            <p className="text-700">
              Here’s what happening with your store today
            </p>
          </div>
          <Flex className="py-3">
            <div className="pe-3">
              <p className="text-600 fs--1 fw-medium">Today's visit</p>
              <h4 className="text-800 mb-0">14,209</h4>
            </div>
            <div className="ps-3">
              <p className="text-600 fs--1">Today’s total sales</p>
              <h4 className="text-800 mb-0">$21,349.29</h4>
            </div>
          </Flex>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <ul className="mb-0 list-unstyled">
          {notifications.map((notification, index) => (
            <Notification
              key={notification.id}
              notification={notification}
              isLast={notifications.length - 1 === index}
            />
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

GreetingCard.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object)
};

export default GreetingCard;
