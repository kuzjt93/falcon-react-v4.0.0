import React from 'react';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeadConversationChart from './LeadConversationChart';
import FalconCardFooterLink from 'components/common/FalconCardFooterLink';

const LeadConversation = () => {
  return (
    <Card>
      <FalconCardHeader
        title="Lead Conversion"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body className="pt-0">
        <Row className="bg-100 border border-200 border-x-0 fs--1 mb-3 mx-ncard py-2">
          <Col className="border-end border-200">
            <p className="text-600 mb-0 d-flex align-items-center justify-content-center">
              Current Rate:
              <span className="fs-sm-1 font-sans-serif ms-2 text-700">
                4.5%
              </span>
              <FontAwesomeIcon
                icon="caret-up"
                className="ms-2 ms-xxl-3 fs--1 text-success"
              />
            </p>
          </Col>
          <Col>
            <p className="text-600 mb-0 d-flex align-items-center justify-content-center">
              Target Rate:
              <span className="fs-sm-1 font-sans-serif ms-2 text-700">6%</span>
            </p>
          </Col>
        </Row>
        <LeadConversationChart />
      </Card.Body>

      <FalconCardFooterLink title="View Details" size="sm" />
    </Card>
  );
};

export default LeadConversation;
