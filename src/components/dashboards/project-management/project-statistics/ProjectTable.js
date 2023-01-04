import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'components/common/Flex';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectTable = ({ data }) => {
  return (
    <>
      <Flex justifyContent="between" className="mt-3">
        <h6>Project</h6>
        <h6>Team</h6>
      </Flex>
      {data.map((project, index) => {
        return (
          <Flex
            key={project.id}
            alignItems="center"
            justifyContent="between"
            className={classNames('rounded-3 bg-light p-3 ', {
              'mb-2': index !== data.length - 1
            })}
          >
            <>
              <Link to="#!">
                <h6 className="mb-0">
                  <FontAwesomeIcon
                    icon="circle"
                    className={`fs--1 me-3 ${project.iconColor}`}
                  />
                  {project.project}
                </h6>
              </Link>
              <Link className="fs--2 text-600 mb-0" to="#!">
                {project.team}
              </Link>
            </>
          </Flex>
        );
      })}
    </>
  );
};

ProjectTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      project: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
      iconColor: PropTypes.string.isRequired
    })
  )
};

export default ProjectTable;
