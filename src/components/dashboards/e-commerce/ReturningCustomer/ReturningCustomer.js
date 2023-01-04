import React, { useState, useRef } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import FalconLink from 'components/common/FalconLink';
import { monthsShort } from 'data/common';
import Flex from 'components/common/Flex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReturningCustomerChart from './ReturningCustomerChart';
import { returningCustomerData } from 'data/dashboard/ecom';
import classNames from 'classnames';

const ReturningCustomer = () => {
  const [month, setMonth] = useState(0);
  const [isNew, setIsNew] = useState(true);
  const [isReturning, setIsReturning] = useState(true);
  const chartRef = useRef(null);

  const handleLegend = seriesName => {
    seriesName === 'New' && setIsNew(!isNew);
    seriesName === 'Returning' && setIsReturning(!isReturning);
    chartRef.current.getEchartsInstance().dispatchAction({
      type: 'legendToggleSelect',
      name: seriesName
    });
  };

  return (
    <Card className="h-100">
      <Card.Header className="bg-light">
        <Row className="justify-content-between">
          <Col xs="auto">
            <h6>Returning Customer Rate</h6>
            <Flex alignItems="center">
              <h4 className="text-primary mb-0">59.09%</h4>
              <span className="badge rounded-pill ms-3 badge-soft-primary">
                <FontAwesomeIcon icon="caret-up" /> 3.5%
              </span>
            </Flex>
          </Col>
          <Col xs="auto">
            <Form.Select
              size="sm"
              value={month}
              onChange={e => setMonth(parseInt(e.target.value))}
              className="pe-4"
            >
              {monthsShort.map((month, index) => (
                <option value={index} key={index}>
                  {month}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pb-0">
        <ReturningCustomerChart
          ref={chartRef}
          newData={returningCustomerData.newData[month]}
          returningData={returningCustomerData.returningData[month]}
          month={month}
        />
      </Card.Body>

      <Card.Footer className="border-top py-2">
        <Row className="g-0 align-items-center">
          <Col xs="auto me-2">
            <Button
              size="sm"
              id="newMonth"
              className={classNames('align-items-center p-0 shadow-none', {
                'opacity-50': !isNew
              })}
              variant="default"
              onClick={() => handleLegend('New')}
            >
              <FontAwesomeIcon
                icon="circle"
                className="text-primary fs--2 me-1"
              />
              New
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              size="sm"
              id="returningMonth"
              className={classNames('align-items-center p-0 shadow-none', {
                'opacity-50': !isReturning
              })}
              variant="default"
              onClick={() => handleLegend('Returning')}
            >
              <FontAwesomeIcon
                icon="circle"
                className="text-warning fs--2 me-1"
              />
              Returning
            </Button>
          </Col>
          <Col className="text-end">
            <FalconLink title="View report" className="px-0" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ReturningCustomer;
