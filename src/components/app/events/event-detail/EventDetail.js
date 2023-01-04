import React from 'react';
import { Col, Row } from 'react-bootstrap';
import EventDetailAside from './EventDetailAside';
import EventDetailContent from './EventDetailContent';
import EventDetailHeader from './EventDetailHeader';

const EventDetail = () => {
  return (
    <>
      <EventDetailHeader />
      <Row className="g-3">
        <Col lg={8}>
          <EventDetailContent />
        </Col>
        <Col lg={4}>
          <EventDetailAside />
        </Col>
      </Row>
    </>
  );
};

export default EventDetail;
