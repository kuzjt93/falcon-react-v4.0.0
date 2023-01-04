import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DepositeStatus = () => {
  return (
    <Card className="bg-light my-3">
      <Card.Body className="p-3">
        <p className="fs--1 mb-0">
          <Link to="#!">
            <FontAwesomeIcon
              icon="exchange-alt"
              className="me-2"
              transform="rotate-90"
            />
            A payout for <strong>$921.42 </strong> was deposited 13 days ago.
          </Link>{' '}
          Your next deposit is expected on <strong>Tuesday, March 13.</strong>
        </p>
      </Card.Body>
    </Card>
  );
};

export default DepositeStatus;
