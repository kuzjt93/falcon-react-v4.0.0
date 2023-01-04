import React from 'react';
import { Card } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import DealVSGoalChart from './DealVsGoalChart';
import { dealClosedVsGoalChart } from 'data/dashboard/crm';

const DealVsGoal = () => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Deal Closed vs Goal"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body>
        <DealVSGoalChart data={dealClosedVsGoalChart} />
      </Card.Body>
    </Card>
  );
};

export default DealVsGoal;
