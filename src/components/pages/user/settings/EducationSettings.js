import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Flex from 'components/common/Flex';
import educationData from 'data/educations';
import experiences from 'data/experiences';
import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import EducationItem from '../EducationItem';
import EducationForm from './EducationForm';

const EducationSettings = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Card className="mt-3">
      <FalconCardHeader title="Education" />
      <Card.Body className="fs--1 bg-light">
        <div>
          <Flex
            alignItems="center"
            className="mb-4 text-primary cursor-pointer fs-0"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <span className="circle-dashed">
              <FontAwesomeIcon icon="plus" />
            </span>
            <span className="ms-3">Add new education</span>
          </Flex>
          <Collapse in={collapsed}>
            <div>
              <EducationForm />
              <div className="border-dashed border-bottom my-3" />
            </div>
          </Collapse>
        </div>
        {educationData.map((item, index) => (
          <EducationItem
            key={item.id}
            details={item}
            isLast={index === experiences.length - 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default EducationSettings;
