import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import { Link } from 'react-router-dom';
import Follower from 'components/app/social/followers/Follower';

const Followers = ({
  totalFollowers,
  followers,
  colBreakpoints = { xs: 6, md: 4, lg: 3, xxl: 2 }
}) => {
  return (
    <Card className="p-0">
      <Card.Header className="bg-light">
        <Flex justifyContent="between">
          <h5 className="mb-0">Followers ({totalFollowers}) </h5>
          <Link to="/social/followers" className="font-sans-serif">
            All Members
          </Link>
        </Flex>
      </Card.Header>
      <Card.Body className="bg-light px-1 pb-1 pt-0 fs--1">
        <Row className="gx-0 gy-1 text-center">
          {followers.map(follower => (
            <Col key={follower.id} {...colBreakpoints}>
              <Follower follower={follower} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

Followers.propTypes = {
  totalFollowers: PropTypes.number,
  followers: PropTypes.arrayOf(Follower.propTypes.follower),
  colBreakpoints: PropTypes.object
};

export default Followers;
