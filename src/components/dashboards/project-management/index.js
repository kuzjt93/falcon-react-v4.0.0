import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Greetings from './Greetings';
import TeamProgress from './TeamProgress';
import Discussion from './Discussion';
import CalendarManagement from './calendar/CalendarManagement';
import ProjectStatistics from './project-statistics/ProjectStatistics';
import Statistics from './statistics/Statistics';
import ToDoList from './ToDoList';
import ReportForThisWeek from './report-for-this-week/ReportForThisWeek';
import MemberInfo from './MemberInfo';
import RunningProjects from './RunningProjects';
import ProjectLocation from './project-location/ProjectLocation';
import {
  recentActivities,
  membersActivities,
  markers,
  greetingItems,
  discussionMembers,
  weeklyReport,
  progressBar,
  projectsTable,
  projectUsers,
  membersInfo,
  runningProjects,
  managementEvents
} from 'data/dashboard/projectManagement';
import RecentActivity from './RecentActivity';
import MembersActivity from './MembersActivity';

const ProjectManagement = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col xxl={6} lg={12}>
          <Greetings data={greetingItems} />
        </Col>
        <Col xxl={3} md={6}>
          <TeamProgress />
        </Col>
        <Col xxl={3} md={6}>
          <Discussion data={discussionMembers} />
        </Col>
      </Row>
      <Row className="g-3 mb-3">
        <Col xxl={6} lg={12}>
          <Row>
            <Col lg={12}>
              <Statistics />
            </Col>
            <Col lg={12}>
              <ReportForThisWeek data={weeklyReport} />
            </Col>
          </Row>
        </Col>
        <Col xxl={{ span: 6, order: 1 }} lg={6}>
          <ProjectLocation data={markers} />
        </Col>
        <Col xxl={6} lg={6}>
          <ProjectStatistics
            progressBar={progressBar}
            projectsTable={projectsTable}
            projectUsers={projectUsers}
          />
        </Col>
        <Col xxl={{ span: 6, order: 1 }} lg={6}>
          <RecentActivity data={recentActivities} />
        </Col>
        <Col xxl={{ span: 4, order: 3 }} lg={6}>
          <MembersActivity data={membersActivities} />
        </Col>
        <Col xxl={{ span: 8, order: 2 }}>
          <MemberInfo data={membersInfo} />
        </Col>
        <Col xxl={{ span: 12, order: 3 }}>
          <RunningProjects data={runningProjects} />
        </Col>
      </Row>

      <Row className="g-3">
        <Col xxl={8}>
          <CalendarManagement data={managementEvents} />
        </Col>
        <Col xxl={4}>
          <ToDoList />
        </Col>
      </Row>
    </>
  );
};

export default ProjectManagement;
