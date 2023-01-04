import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import createMarkup from 'helpers/createMarkup';
import { Link } from 'react-router-dom';

const Notification = ({ notification: { title, linkFor, type }, isLast }) => {
  return (
    <li
      className={classNames('alert mb-0 rounded-0 py-3 px-x1', {
        'alert-warning': type === 'warning',
        'border-top': !(type === 'warning'),
        'border-0': isLast,
        'border-x-0 border-top-0': !isLast
      })}
    >
      <Row className="flex-between-center">
        <Col>
          <Flex>
            <FontAwesomeIcon
              icon="circle"
              className={classNames('mt-1 fs--2', {
                'text-primary': !type
              })}
            />
            <p
              className="fs--1 ps-2 mb-0"
              dangerouslySetInnerHTML={createMarkup(title)}
            ></p>
          </Flex>
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          <Link to="#!" className="alert-link fs--1 fw-medium">
            {`View ${linkFor}`}
            <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
          </Link>
        </Col>
      </Row>
    </li>
  );
};

Notification.propTypes = {
  notification: PropTypes.shape({
    title: PropTypes.string.isRequired,
    linkFor: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
  isLast: PropTypes.bool.isRequired
};

export default Notification;
