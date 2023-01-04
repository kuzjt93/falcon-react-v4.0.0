import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calendar from 'components/common/Calendar';
import Flex from 'components/common/Flex';

const FeedEvent = ({ title, calender, author, regFee, eventImg }) => (
  <Card className="p-0 shadow-none">
    {!!eventImg && <img className="card-img-top" src={eventImg} alt="" />}
    <Card.Body className="overflow-hidden">
      <Row className="flex-center">
        <Col>
          <Flex>
            <Calendar {...calender} />
            <div className="fs--1 ms-2">
              <h5 className="fs-0 text-capitalize">
                <Link to="/events/event-detail">{title}</Link>
              </h5>
              <p className="mb-0 text-capitalize">
                by <a href="#!">{author}</a>
              </p>
              <span className="fs-0 text-warning fw-semi-bold">{regFee}</span>
            </div>
          </Flex>
        </Col>
        <Col md="auto" className="d-none d-md-block">
          <Button variant="falcon-default" size="sm" className="px-4">
            Register
          </Button>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

FeedEvent.propTypes = {
  title: PropTypes.string.isRequired,
  calender: PropTypes.object.isRequired,
  author: PropTypes.string.isRequired,
  regFee: PropTypes.string.isRequired,
  eventImg: PropTypes.string
};

export default FeedEvent;
