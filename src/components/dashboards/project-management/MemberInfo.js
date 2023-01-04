import classNames from 'classnames';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';
import React from 'react';
import { Card, Col, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SoftBadge from 'components/common/SoftBadge';
import PropTypes from 'prop-types';
import BasicECharts from 'components/common/BasicEChart';

import * as echarts from 'echarts/core';
import { getColor } from 'helpers/utils';
import FalconLink from 'components/common/FalconLink';
import SimpleBarReact from 'simplebar-react';

const MembersRow = ({
  name,
  img,
  role,
  isLast,
  status,
  attendance,
  today,
  thisWeek,
  data
}) => {
  return (
    <tr className={classNames({ 'border-bottom border-200': !isLast })}>
      <td>
        <Flex alignItems="center" className="position-relative">
          <Avatar
            className={`status-${status}`}
            size="2xl"
            src={img}
            width="60"
            alt={name}
          />
          <div className="flex-1 ms-3">
            <h6 className="mb-0 fw-semi-bold">
              <Link className="text-dark stretched-link" to="#!">
                {name}
              </Link>
            </h6>
            <p className="fs--2 mb-0 text-500">{role}</p>
          </div>
        </Flex>
      </td>
      <td className="align-middle text-center fw-semi-bold">
        <SoftBadge pill bg={attendance.color}>
          {attendance.text}
        </SoftBadge>
      </td>
      <td className="align-middle text-center fw-semi-bold">
        <SoftBadge pill bg={today.color}>
          {today.amount}%
        </SoftBadge>
        <p className="fs--2 mb-0">{today.time}</p>
      </td>
      <td className="align-middle">
        <Row className="g-2 justify-content-end">
          <Col xs="auto">
            <SoftBadge pill bg={thisWeek.color}>
              {thisWeek.amount}%
            </SoftBadge>
            <p className="fs--2 mb-0">{thisWeek.time}</p>
          </Col>
          <Col xs="auto" className="mt-auto">
            <BasicECharts
              echarts={echarts}
              options={{
                color: getColor('primary'),
                tooltip: { show: false },
                series: [
                  {
                    data
                  }
                ]
              }}
              className="mb-1"
              style={{ width: '3.625rem', height: '1rem' }}
            />
          </Col>
        </Row>
      </td>
    </tr>
  );
};

const MemberInfo = ({ data }) => {
  return (
    <Card className="h-100">
      <Card.Body className="p-0">
        <SimpleBarReact>
          <Table
            borderless
            className="mb-0 fs--1 border-200 rounded-3 table-dashboard table-member-info"
          >
            <thead className="bg-light">
              <tr className="text-900">
                <th>Member info</th>
                <th className="text-center">Attendance</th>
                <th className="text-center">Today</th>
                <th className="text-end">This Week</th>
              </tr>
            </thead>
            <tbody>
              {data.map((info, index) => (
                <MembersRow
                  {...info}
                  isLast={index === data.length - 1}
                  key={info.id}
                />
              ))}
            </tbody>
          </Table>
        </SimpleBarReact>
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
            <FalconLink title="View All" className="px-0" />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

MembersRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  img: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  attendance: PropTypes.shape({
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }),
  today: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }),
  thisWeek: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }),
  data: PropTypes.array.isRequired
};

MemberInfo.propTypes = {
  data: PropTypes.array.isRequired
};

export default MemberInfo;
