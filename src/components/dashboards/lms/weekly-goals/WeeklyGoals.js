import React, { useState } from 'react';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import CountUp from 'react-countup';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import WeeklyGoalsChart from './WeeklyGoalsChart';

const WeeklyGoals = () => {
  const [stats] = useState([
    {
      title: 'Site Visit',
      value: 79,
      color: 'info',
      badge: {
        text: 'On par',
        icon: 'check',
        color: 'success'
      }
    },
    {
      title: 'Support',
      value: 85,
      color: 'primary',
      badge: {
        text: 'Ahead',
        icon: 'caret-up',
        color: 'primary'
      }
    },
    {
      title: 'Revenue',
      value: 70,
      color: 'success',
      badge: {
        text: 'Behind',
        icon: 'caret-down',
        color: 'danger'
      }
    }
  ]);

  return (
    <Card className="h-100">
      <FalconCardHeader
        light
        title="Weekly Goals"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body>
        <Row className="align-items-center h-100">
          <Col sm={4} className="order-1 order-sm-0">
            {stats.map((stat, index) => (
              <div
                key={stat.title.toLowerCase().split(' ').join('-')}
                className={`${
                  index !== 2 && 'pb-3 mb-3 border-bottom border-200'
                }`}
              >
                <div className="position-relative ps-3">
                  <div
                    className={`position-absolute h-100 start-0 rounded bg-${stat.color}`}
                    style={{ width: '4px' }}
                  />
                  <h6 className="fs--2 text-600 mb-1">{stat.title}</h6>
                  <Flex alignItems="center">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.75}
                      className="text-700 fs-2 me-2"
                      suffix="%"
                      separator=","
                    />
                    <SoftBadge
                      className="fs--2 fw-medium"
                      bg={stat.badge.color}
                      pill
                    >
                      <FontAwesomeIcon icon={stat.badge.icon} />{' '}
                      {stat.badge.text}
                    </SoftBadge>
                  </Flex>
                </div>
              </div>
            ))}
          </Col>
          <Col sm={8}>
            <WeeklyGoalsChart />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WeeklyGoals;
