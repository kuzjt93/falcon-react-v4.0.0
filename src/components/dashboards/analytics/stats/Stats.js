import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import StatsChart from './StatsChart';
import classNames from 'classnames';
import { stats } from 'data/dashboard/analytics';

const Stats = () => {
  return (
    <Card>
      <Card.Body className="py-5 py-sm-3">
        <Row className="g-5 g-sm-0">
          {stats.map((stat, index) => (
            <Col sm={4} key={stat.title}>
              <div
                className={classNames({
                  'border-sm-end border-300': index !== 2
                })}
              >
                <div className="text-center">
                  <h6 className="text-700">{stat.title}</h6>
                  <h3 className="fw-normal text-700">{stat.value}</h3>
                </div>
                <StatsChart data={stat.chartData} grid={stat.grid} />
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Stats;
