import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar, { AvatarGroup } from 'components/common/Avatar';
import Flex from 'components/common/Flex';
import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Discussion = ({ data }) => {
  return (
    <Card className="h-100">
      <Card.Header className="pb-0">
        <Flex justifyContent="between">
          <div>
            <p className="mb-1 fs--2 text-500">Upcoming schedule</p>
            <h5 className="text-primary fs-0">Falcon discussion</h5>
          </div>
          <div
            className="bg-soft-primary px-3 py-3 rounded-circle text-center"
            style={{ width: '60px', height: '60px' }}
          >
            <h5 className="text-primary mb-0 d-flex flex-column mt-n1">
              <span>09</span>
              <small className="text-primary fs--2 lh-1">MAR</small>
            </h5>
          </div>
        </Flex>
      </Card.Header>

      <Card.Body as={Flex} alignItems="end">
        <Row className="g-3 justify-content-between">
          <Col xs={10} className="mt-0">
            <p className="fs--1 text-600 mb-0">
              The very first general meeting for planning Falcon’s design and
              development roadmap
            </p>
          </Col>

          <Col xs="auto">
            <Button variant="success" className="w-100 fs--1">
              <FontAwesomeIcon icon="video" className="me-2" />
              Join meeting
            </Button>
          </Col>

          <Col xs="auto">
            <AvatarGroup dense>
              {data.map(({ img, name, size, id }) => {
                return (
                  <Avatar
                    src={img && img}
                    key={id}
                    size={size}
                    name={name && name}
                    isExact
                    className="border border-3 rounded-circle border-light"
                  />
                );
              })}
            </AvatarGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

Discussion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      name: PropTypes.string,
      size: PropTypes.string
    })
  )
};

export default Discussion;
