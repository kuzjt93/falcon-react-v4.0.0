import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StatisticsCard from './StatisticsCard';
import { statsData } from 'data/dashboard/saas';

const StatisticsCards = () => {
  return (
    <Row className="g-3 mb-3">
      {statsData.map((stat, index) => (
        <Col key={stat.title} sm={index === 2 ? 12 : 6} md={4}>
          <StatisticsCard stat={stat} style={{ minWidth: '12rem' }} />
        </Col>
      ))}
    </Row>
  );
};

export default StatisticsCards;
