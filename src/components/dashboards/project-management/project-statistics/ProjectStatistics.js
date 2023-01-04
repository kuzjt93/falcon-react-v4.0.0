import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Avatar, { AvatarGroup } from 'components/common/Avatar';
import Statistics from './Statistics';
import ProjectTable from './ProjectTable';

const ProjectStatistics = ({ progressBar, projectsTable, projectUsers }) => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Project Statistics"
        titleTag="h6"
        endEl={<CardDropdown />}
      />
      <Card.Body className="pt-0">
        <Statistics data={progressBar} />

        <p className="fs--1 mb-2 mt-3">Assignees in Sprint</p>
        <AvatarGroup dense>
          {projectUsers.map(({ img, name, id }) => {
            return (
              <Avatar
                src={img && img}
                key={id}
                name={name && name}
                isExact
                size="2xl"
                className="border border-3 rounded-circle border-light"
              />
            );
          })}
        </AvatarGroup>

        <ProjectTable data={projectsTable} />
      </Card.Body>
    </Card>
  );
};

ProjectStatistics.propTypes = {
  progressBar: PropTypes.array.isRequired,
  projectsTable: PropTypes.array.isRequired,
  projectUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      name: PropTypes.string
    })
  )
};

export default ProjectStatistics;
