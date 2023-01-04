import React from 'react';
import { Col, Row } from 'react-bootstrap';
import events from 'data/events/events';
import BirthdayNotice from './BirthdatNotice';
import AddToFeed from './AddToFeed';
import Events from 'components/pages/user/profile/Events';
import FeedProvider from './FeedProvider';
import FeedContent from './FeedContent';

const Feed = () => {
  return (
    <FeedProvider>
      <Row className="g-0 g-lg-3">
        <Col lg={8}>
          <FeedContent />
        </Col>
        <Col lg={4}>
          <BirthdayNotice
            name="Emma Watson"
            profileLink="/user/profile"
            className="mb-3"
          />
          <AddToFeed />
          <Events cardTitle="You may interested" events={events.slice(2, 5)} />
        </Col>
      </Row>
    </FeedProvider>
  );
};

export default Feed;
