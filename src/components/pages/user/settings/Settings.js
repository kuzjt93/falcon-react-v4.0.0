import React from 'react';
import ProfileBanner from '../ProfileBanner';
import coverSrc from 'assets/img/generic/4.jpg';
import avatar from 'assets/img/team/2.jpg';
import { Col, Row } from 'react-bootstrap';
import ProfileSettings from './ProfileSettings';
import ExperiencesSettings from './ExperiencesSettings';
import EducationSettings from './EducationSettings';
import AccountSettings from './AccountSettings';
import BillingSettings from './BillingSettings';
import ChangePassword from './ChangePassword';
import DangerZone from './DangerZone';

const Settings = () => {
  return (
    <>
      <ProfileBanner>
        <ProfileBanner.Header
          coverSrc={coverSrc}
          avatar={avatar}
          className="mb-8"
        />
      </ProfileBanner>
      <Row className="g-3">
        <Col lg={8}>
          <ProfileSettings />
          <ExperiencesSettings />
          <EducationSettings />
        </Col>
        <Col lg={4}>
          <div className="sticky-sidebar">
            <AccountSettings />
            <BillingSettings />
            <ChangePassword />
            <DangerZone />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Settings;
