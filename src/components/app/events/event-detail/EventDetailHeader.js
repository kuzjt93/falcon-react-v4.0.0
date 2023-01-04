import React from 'react';
import eventBanner from 'assets/img/generic/13.jpg';
import { Card, Row, Col, Button } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import Calendar from 'components/common/Calendar';
import { Link } from 'react-router-dom';
import IconButton from 'components/common/IconButton';

const EventDetailHeader = () => {
  const eventInfo = {
    title: `FREE New Year's Eve Midnight Harbor Fireworks`,
    eventDate: { day: '31', month: 'Dec' },
    author: 'Boston Harbor Now',
    regFee: `$49.99 – $89.99`
  };
  return (
    <Card className="p-0 mb-3">
      {!!eventBanner && (
        <img className="card-img-top" src={eventBanner} alt="" />
      )}
      <Card.Body className="overflow-hidden">
        <Row className="flex-center">
          <Col>
            <Flex>
              <Calendar {...eventInfo.eventDate} />
              <div className="fs--1 ms-2 flex-1">
                <h5 className="fs-0 text-capitalize">{eventInfo.title}</h5>
                <p className="mb-0 text-capitalize">
                  by
                  <Link className=" ms-1 " to="#!">
                    {eventInfo.author}
                  </Link>
                </p>
                <span className="fs-0 text-warning fw-semi-bold">
                  {eventInfo.regFee}
                </span>
              </div>
            </Flex>
          </Col>
          <Col md="auto" className="mt-4 mt-md-0">
            <Flex>
              <IconButton
                className="me-2"
                variant="falcon-default"
                size="sm"
                icon="heart"
                iconClassName="text-danger"
              >
                235
              </IconButton>
              <IconButton
                className="me-2"
                variant="falcon-default"
                size="sm"
                icon="share-alt"
              >
                Share
              </IconButton>
              <Button
                variant="falcon-primary"
                size="sm"
                className="px-4 px-sm-5"
              >
                Register
              </Button>
            </Flex>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventDetailHeader;
