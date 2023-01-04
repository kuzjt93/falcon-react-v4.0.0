import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WidgetSectionTitle from './WidgetSectionTitle';
import BillingHeader from 'components/app/e-commerce/billing/BillingHeader';
import DepositeStatus from 'components/dashboards/saas/DepositeStatus';
import EventFooter from 'components/app/events/create-an-event/EventFooter';
import BirthdayNotice from 'components/app/social/feed/BirthdatNotice';
import DangerZone from 'components/pages/user/settings/DangerZone';
import GreetingCard from 'components/dashboards/e-commerce/greetings/GreetingCard';
import { Card, Col, Row } from 'react-bootstrap';
import { notifications } from 'data/dashboard/ecom';
import {
  greetingItems,
  markers,
  managementEvents,
  discussionMembers
} from 'data/dashboard/projectManagement';
import { weather } from 'data/dashboard/default';
import Greetings from 'components/dashboards/project-management/Greetings';
import Weather from 'components/dashboards/default/Weather';
import SpaceWarning from 'components/dashboards/default/SpaceWarning';
import PageHeader from 'components/common/PageHeader';
import SoftBadge from 'components/common/SoftBadge';
import ProjectLocation from 'components/dashboards/project-management/project-location/ProjectLocation';
import CalendarManagement from 'components/dashboards/project-management/calendar/CalendarManagement';
import DoMoreCard from 'components/dashboards/saas/DoMoreCard';
import TeamProgress from 'components/dashboards/project-management/TeamProgress';
import Discussion from 'components/dashboards/project-management/Discussion';
import LogoutContent from 'components/authentication/LogoutContent';
import ConfirmMailContent from 'components/authentication/ConfirmMailContent';

const OthersWidgets = () => {
  return (
    <>
      <WidgetSectionTitle
        icon="folder-plus"
        title="Others"
        subtitle="Get more awesome cards for showing your different types of content.."
        transform="shrink-2"
        className="mb-4 mt-6"
      />
      <Row className="g-3 mb-3">
        <Col xxl={8} className="d-flex flex-column align-items-stretched ">
          <BillingHeader />
          <DepositeStatus />
          <EventFooter />
          <BirthdayNotice name="Emma Watson" profileLink="/user/profile" />
        </Col>
        <Col xxl={4}>
          <DangerZone />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col xl={7}>
          <GreetingCard notifications={notifications} />
        </Col>
        <Col xl={5}>
          <Greetings data={greetingItems} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col xl={5} xxl={4}>
          <Row className="g-3">
            <Col xl={12}>
              <Weather data={weather} />
            </Col>
            <Col xl={12}>
              <SpaceWarning />
            </Col>

            <Col xl={12}>
              <PageHeader title="Order Details: #2737" titleTag="h5">
                <p className="fs--1 mt-1">April 21, 2019, 5:33 PM</p>
                <div>
                  <strong className="me-2">Status: </strong>
                  <SoftBadge pill bg="success" className="fs--2">
                    {' '}
                    Completed
                    <FontAwesomeIcon
                      icon="check"
                      className="ms-1"
                      transform="shrink-2"
                    />
                  </SoftBadge>
                </div>
              </PageHeader>
            </Col>
          </Row>
        </Col>
        <Col xl={7} xxl={8}>
          <ProjectLocation data={markers} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={8}>
          <CalendarManagement data={managementEvents} />
        </Col>
        <Col lg={4}>
          <DoMoreCard className="h-100" />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={6}>
          <TeamProgress />
        </Col>
        <Col lg={6}>
          <Discussion data={discussionMembers} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={6}>
          <Card className="h-lg-100">
            <Card.Body className="p-4 p-sm-5 text-center">
              <LogoutContent />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="h-lg-100">
            <Card.Body className="p-4 p-sm-5 text-center">
              <ConfirmMailContent email="xyz@abc.com" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OthersWidgets;
