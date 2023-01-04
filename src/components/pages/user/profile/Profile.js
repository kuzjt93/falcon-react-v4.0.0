import React from 'react';
import ProfileBanner from './Banner';
import ProfileIntro from './ProfileIntro';
import { Col, Row } from 'react-bootstrap';
import associations from 'data/associations';
import Associations from 'components/pages/asscociations/Associations';
import people from 'data/people';
import activities from 'data/activities';
import Followers from './Followers';
import ActivityLog from './ActivityLog';
import Experiences from './Experiences';
import Education from './Education';
import Events from './Events';
import events from 'data/events/events';
import Photos from './Photos';

const Profile = () => {
  return (
    <>
      <ProfileBanner />
      <Row className="g-3 mb-3">
        <Col lg={8}>
          <ProfileIntro />
          <Associations
            associations={associations.slice(0, 4)}
            colBreakpoints={{ sm: 6 }}
          />
          <ActivityLog className="mt-3" activities={activities.slice(5, 9)} />
          <Photos />
        </Col>
        <Col lg={4}>
          <div className="sticky-sidebar">
            <Experiences />
            <Education />
            <Events
              className="mb-3"
              cardTitle="Events"
              events={events.slice(2, 5)}
            />
          </div>
        </Col>
      </Row>
      <Followers
        totalFollowers={people.length}
        followers={people.slice(0, 12)}
      />
    </>
  );
};

export default Profile;
