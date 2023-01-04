import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import corner7 from 'assets/img/icons/spot-illustrations/corner-7.png';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Background from 'components/common/Background';
import Flex from 'components/common/Flex';

const CourseRequirements = ({ data }) => {
  return (
    <Card className="mb-3">
      <FalconCardHeader
        title="Requirements"
        titleTag="h5"
        className="bg-light"
      />
      <Card.Body className="position-relative">
        <Background image={corner7} className="bg-card d-none d-md-block" />
        <ul className="list-unstyled position-relative fs--1 p-0 m-0">
          {data.map(requirement => (
            <li key={requirement.id} className="mb-2">
              <Flex>
                <FontAwesomeIcon
                  icon="circle"
                  transform="shrink-8"
                  className="me-2 mt-1"
                />
                <span>{requirement.text}</span>
              </Flex>
              {requirement.obligations && (
                <ol className="bullet-inside mt-2">
                  {requirement.obligations.map(({ id, obligation }) => (
                    <li key={id} className="mb-2">
                      {obligation}
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

CourseRequirements.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default CourseRequirements;
