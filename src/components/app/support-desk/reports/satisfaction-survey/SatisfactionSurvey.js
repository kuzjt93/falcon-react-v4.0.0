import React from 'react';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import SimpleBarReact from 'simplebar-react';
import { Card } from 'react-bootstrap';
import SatisfactionSurveyChart from './SatisfactionSurveyChart';
import FalconLink from 'components/common/FalconLink';

const SatisfactionSurvey = () => {
  return (
    <Card className="mt-3">
      <FalconCardHeader
        title="Customer Satisfaction Survey"
        titleTag="h6"
        className="py-2 border-bottom"
        endEl={<CardDropdown />}
      />
      <SimpleBarReact>
        <Card.Body>
          <SatisfactionSurveyChart />
        </Card.Body>
      </SimpleBarReact>
      <Card.Footer className="text-center bg-light py-2">
        <FalconLink title="View all" className="px-0 fw-medium" />
      </Card.Footer>
    </Card>
  );
};

export default SatisfactionSurvey;
