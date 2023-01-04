import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import experiences from 'data/experiences';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Experience from '../Experience';
import ExperienceForm from './ExperienceForm';

const ExperiencesSettings = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Card className="mt-3">
      <FalconCardHeader title="Experiences" />
      <Card.Body className="fs--1 bg-light">
        <ExperienceForm collapsed={collapsed} setCollapsed={setCollapsed} />
        {experiences.map((experience, index) => (
          <Experience
            key={experience.id}
            experience={experience}
            isLast={index === experiences.length - 1}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default ExperiencesSettings;
