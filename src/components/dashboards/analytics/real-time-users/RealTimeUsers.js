import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import RealTimeUsersChart from './RealTimeUsersChart';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleItem = ({ page, count }) => {
  return (
    <div
      className="bg-transparent text-white px-3 py-1"
      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
    >
      <Flex justifyContent="between">
        <p className="mb-0">{page}</p>
        <p className="mb-0">{count}</p>
      </Flex>
    </div>
  );
};

SingleItem.propTypes = {
  page: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

const RealTimeUsers = ({ data }) => {
  const [userCount, setUserCount] = useState(0);
  return (
    <Card className="h-100 bg-line-chart-gradient">
      <Card.Header className="bg-transparent light">
        <h5 className="text-white">Users Online Right Now</h5>
        <div className="real-time-user display-1 fw-normal text-white">
          {userCount}
        </div>
      </Card.Header>

      <Card.Body className="text-white fs--1 light pb-0">
        <p
          className="pb-2"
          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}
        >
          Pages views / second
        </p>

        <RealTimeUsersChart setUserCount={setUserCount} />
        <div
          className="mt-4 rounded-2"
          style={{ border: '1px solid rgba(255, 255, 255, 0.15)' }}
        >
          <div
            className="bg-transparent text-white px-3 py-1"
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}
          >
            <Flex justifyContent="between">
              <p className="mb-0">Most Active Pages</p>
              <p className="mb-0">User Count</p>
            </Flex>
          </div>

          {data.map(item => (
            <SingleItem key={item.page} page={item.page} count={item.count} />
          ))}
        </div>
      </Card.Body>
      <Card.Footer className="bg-transparent text-end light">
        <Link to="#!" className="text-white">
          Real-time Data
        </Link>

        <FontAwesomeIcon
          icon="chevron-right"
          transform="shrink-4 down-1"
          className="me-1 text-white"
        />
      </Card.Footer>
    </Card>
  );
};

RealTimeUsers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(SingleItem.PropTypes)).isRequired
};

export default RealTimeUsers;
