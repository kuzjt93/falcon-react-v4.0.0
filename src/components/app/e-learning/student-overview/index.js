import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  assignmentScores,
  courseStatusData,
  payments,
  spendingsData,
  timeOnSiteData,
  recentActivities,
  enrolledCoursesData
} from 'data/elearning/studentOverview';
import PageHeader from './PageHeader';
import Spendings from './Spendings';
import StudentInfo from './StudentInfo';
import TimeOnSite from './TimeOnSite';
import AssignmentScores from './AssignmentScores';
import BrowsedCourses from './BrowsedCourses';
import PaymentMethods from './PaymentMethods';
import PaymentHistory from './PaymentHistory';
import CourseStatus from './CourseStatus';
import BillingAddress from './BillingAddress';
import RecentActivities from './RecentActivities';
import EnrolledCourses from './EnrolledCourses';

const StudentOverview = () => {
  return (
    <>
      <PageHeader />
      <Row className="g-3 mb-3">
        <Col xxl={6}>
          <Row className="g-3">
            <Col xs={12}>
              <StudentInfo />
            </Col>
            <Col md={6}>
              <Spendings data={spendingsData} />
            </Col>
            <Col md={6}>
              <TimeOnSite data={timeOnSiteData} />
            </Col>
          </Row>
        </Col>
        <Col xxl={6}>
          <AssignmentScores scoresData={assignmentScores} />
        </Col>
      </Row>

      <Row className="g-3 mb-3">
        <Col lg={5} xxl={3}>
          <PaymentMethods />
        </Col>
        <Col xxl={9} className="order-xxl-1 order-lg-2 order-1">
          <PaymentHistory tableData={payments} />
        </Col>
        <Col md={6} xxl={4} className="order-2 order-lg-3 order-xxl-2">
          <BillingAddress />
        </Col>
        <Col md={6} lg={7} xxl={4} className="order-3 order-lg-1 order-xxl-3">
          <RecentActivities data={recentActivities} />
        </Col>
        <Col lg={6} xxl={4} className="order-4">
          <CourseStatus data={courseStatusData} />
        </Col>
      </Row>

      <BrowsedCourses />

      <EnrolledCourses tableData={enrolledCoursesData} />
    </>
  );
};

export default StudentOverview;
