import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SoftBadge from 'components/common/SoftBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';

const SaasRevenue = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Row className="flex-between-center">
          <Col className="d-md-flex d-lg-block flex-between-center">
            <h6 className="mb-md-0 mb-lg-2">Revenue</h6>
            <SoftBadge bg="success" pill>
              <FontAwesomeIcon icon="caret-up" /> 61.8%
            </SoftBadge>
          </Col>
          <Col xs="auto">
            <h4 className="fs-3 fw-normal text-700">
              <CountUp
                start={0}
                end={82.18}
                duration={2.75}
                suffix={'M'}
                prefix={'$'}
                decimals={2}
                decimal="."
              />
            </h4>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SaasRevenue;
