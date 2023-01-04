import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardDropdown from 'components/common/CardDropdown';
import FalconLink from 'components/common/FalconLink';
import ActiveUsersChart from './ActiveUsersChart';
import classNames from 'classnames';
import { activeUsersChart } from 'data/dashboard/analytics';

const ActiveUsers = ({ ...rest }) => {
  const [stats] = useState([
    {
      label: 'Mobile',
      color: 'primary',
      value: 10325
    },
    {
      label: 'Desktop',
      color: 'success',
      value: 4325
    },
    {
      label: 'Tablet',
      color: 'info',
      value: 3575
    }
  ]);
  return (
    <Card {...rest}>
      <FalconCardHeader
        title="Active Users"
        titleTag="h6"
        className="py-2"
        light
        endEl={<CardDropdown />}
      />
      <Card.Body>
        <Row>
          <Col md="auto" className="mt-md-0">
            <Row className="flex-md-column justify-content-between h-md-100 ms-0">
              {stats.map((stat, index) => (
                <Col
                  key={stat.label}
                  className={classNames('pt-3', {
                    'border-end border-md-end-0 border-md-bottom': index !== 2,
                    'pt-md-4': index !== 0
                  })}
                >
                  <h6 className="fs--2 text-7">
                    <FontAwesomeIcon
                      icon="circle"
                      className={`text-${stat.color} me-2`}
                    />
                    {stat.label}
                  </h6>
                  <h5 className="text-700 fs-0">
                    {stat.value.toLocaleString()}
                  </h5>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md="auto" className="echart-active-users-report-container">
            <ActiveUsersChart data={activeUsersChart} />
          </Col>
        </Row>
      </Card.Body>

      <Card.Footer className="bg-light py-2">
        <Row className="g-0 flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm" className="me-2">
              <option>Last 7 days</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <FalconLink title="Active users report" className="px-0" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ActiveUsers;
