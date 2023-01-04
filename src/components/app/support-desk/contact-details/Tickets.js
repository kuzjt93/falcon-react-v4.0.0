import Flex from 'components/common/Flex';
import SoftBadge from 'components/common/SoftBadge';
import { tickets } from 'data/support-desk/contactDetailsData';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const PrioritySelect = ({ title, color, data }) => {
  return (
    <div
      style={{ width: '7.5rem' }}
      className="d-flex align-items-center gap-2 ms-md-4 ms-xl-0 ms-xxl-4"
    >
      <div style={{ '--falcon-circle-progress-bar': data }}>
        <svg
          className="circle-progress-svg"
          width="26"
          height="26"
          viewBox="0 0 120 120"
        >
          <circle
            className="progress-bar-rail"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeLinecap="round"
            strokeWidth="12"
          ></circle>
          <circle
            className="progress-bar-top"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeLinecap="round"
            stroke={color}
            strokeWidth="12"
          ></circle>
        </svg>
      </div>
      <h6 className="mb-0 text-700">{title}</h6>
    </div>
  );
};

PrioritySelect.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const AgentSelect = ({ agent, className, style }) => {
  return (
    <Form.Select
      style={style}
      className={className}
      size="sm"
      defaultValue={agent}
    >
      {['Select Agent', 'Anindya', 'Nowrin', 'Khalid', 'Shajeeb'].map(item => (
        <option key={item}>{item}</option>
      ))}
    </Form.Select>
  );
};

AgentSelect.propTypes = {
  agent: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

const Tickets = () => {
  return (
    <Flex direction="column" className="gap-3">
      {tickets.map((ticket, index) => {
        const { subject, status, priority, agent, date } = ticket;
        return (
          <div
            key={index}
            className="bg-white dark__bg-1100 p-x1 rounded-3 shadow-sm d-md-flex d-xl-inline-block d-xxl-flex align-items-center"
          >
            <div>
              <p className="fw-semi-bold">
                <Link to="/support-desk/tickets-preview">{subject}</Link>
              </p>
              <Flex alignContent="center">
                <h6 className="mb-0 me-3 text-800 lh-base">{date}</h6>
                <SoftBadge bg={status.type}>{status.content}</SoftBadge>
              </Flex>
            </div>
            <div className="border-bottom mt-4 mb-x1"></div>
            <Flex justifyContent="between" className="ms-auto">
              <PrioritySelect
                title={priority.title}
                color={priority.color}
                data={priority.data}
              />
              <AgentSelect agent={agent} style={{ width: '9.375rem' }} />
            </Flex>
          </div>
        );
      })}
    </Flex>
  );
};

export default Tickets;
