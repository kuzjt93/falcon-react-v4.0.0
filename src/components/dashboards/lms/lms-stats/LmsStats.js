import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import LmsStatItem from './LmsStatItem';

const LmsStats = ({ data }) => {
  return (
    <Card className="mb-3">
      <Card.Body className="px-xxl-0 pt-4">
        <Row className="g-0">
          {data.map(stat => (
            <LmsStatItem key={stat.id} stat={stat} />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

LmsStats.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LmsStats;
