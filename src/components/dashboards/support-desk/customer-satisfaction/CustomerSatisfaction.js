import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';
import CustomerSatisfactionChart from './CustomerSatisfactionChart';

const CustomerSatisfaction = () => {
  return (
    <Card className="card h-100">
      <FalconCardHeader
        title="Customer Satisfaction"
        titleTag="h6"
        className="border-200 border-bottom py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body className="p-3 d-flex aligm-items-center">
        <CustomerSatisfactionChart />
      </Card.Body>
      <Card.Footer className="border-top border-200 py-0">
        <Row>
          <Col className="border-end border-200 py-3 d-flex justify-content-center">
            <div>
              <h6 className="text-600 mb-1 fs--2">Positive</h6>
              <h6 className="fs-0 mb-0 d-flex align-items-center">
                150
                <Badge
                  pill
                  bg="transparent"
                  className="px-0 text-success d-flex align-items-start"
                >
                  <FontAwesomeIcon
                    icon="caret-up"
                    className="fs--2 ms-2 me-1"
                  />
                  23.3%
                </Badge>
              </h6>
            </div>
          </Col>
          <Col className="py-3 d-flex justify-content-center">
            <div>
              <h6 className="text-600 mb-1 fs--2">Negative</h6>
              <h6 className="fs-0 mb-0 d-flex align-items-center">
                20
                <Badge
                  pill
                  bg="transparent"
                  className="px-0 text-danger d-flex align-items-start"
                >
                  <FontAwesomeIcon
                    icon="caret-down"
                    className="fs--2 ms-2 me-1"
                  />
                  5.23%
                </Badge>
              </h6>
            </div>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CustomerSatisfaction;
