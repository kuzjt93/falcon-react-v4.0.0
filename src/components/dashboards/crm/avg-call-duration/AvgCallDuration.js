import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import AvgCallDurationChart from './AvgCallDurationChart';

const AvgCallDuration = () => {
  return (
    <Card>
      <Card.Header as={Flex} alignItems="center" className="py-2">
        <h6 className="mb-0">Average Call Duration </h6>
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip> Average call duration based of last 50 calls</Tooltip>
          }
        >
          <div>
            <FontAwesomeIcon
              icon={['far', 'question-circle']}
              transform="shrink-1"
              className="ms-1 text-400"
              id="avgCallTooltip"
            />
          </div>
        </OverlayTrigger>
      </Card.Header>
      <Card.Body as={Flex} justifyContent="between">
        <div className="">
          <h4 className="text-primary fw-normal">10m:8s</h4>
          <p className="fs--2 fw-semi-bold text-500 mb-0">Based on 50 calls</p>
        </div>
        <AvgCallDurationChart />
      </Card.Body>
    </Card>
  );
};

export default AvgCallDuration;
