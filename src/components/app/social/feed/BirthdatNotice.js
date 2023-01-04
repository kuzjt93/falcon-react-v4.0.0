import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Flex from 'components/common/Flex';

const BirthdayNotice = ({ name, profileLink, className }) => {
  return (
    <Card className={className}>
      <Card.Body className="fs--1">
        <Flex>
          <FontAwesomeIcon icon="gift" className="fs-0 text-warning" />
          <div className="ms-2 flex-1">
            <Link className="fw-semi-bold" to={profileLink}>
              {name}
            </Link>
            's Birthday is today
          </div>
        </Flex>
      </Card.Body>
    </Card>
  );
};

BirthdayNotice.propTypes = {
  name: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default BirthdayNotice;
