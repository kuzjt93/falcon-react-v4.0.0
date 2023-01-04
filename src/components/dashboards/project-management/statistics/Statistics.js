import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { statsData } from 'data/dashboard/saas';
import StatisticsCard from 'components/dashboards/saas/stats-cards/StatisticsCard';

const Statistics = () => {
  return (
    <Row className="g-3 mb-3">
      {statsData.slice(0, 2).map(stat => (
        <Col key={stat.title} sm={6}>
          <StatisticsCard stat={stat} style={{ minWidth: '12rem' }} />
        </Col>
      ))}
    </Row>
  );
};

Statistics.propTypes = {};

export default Statistics;
