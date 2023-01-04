import Flex from 'components/common/Flex';
import { notes } from 'data/support-desk/contactDetailsData';
import React from 'react';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const Notes = () => {
  return (
    <Flex direction="column" className="gap-3">
      {notes.map((note, index) => {
        const { title, description, date, time, agent } = note;
        return (
          <div
            key={index}
            className="bg-white dark__bg-1100 p-x1 rounded-3 shadow-sm"
          >
            <Row className="flex-between-center">
              <Col
                xs={12}
                md={7}
                xl={12}
                xxl={8}
                className="order-1 order-md-0 order-xl-1 order-xxl-0"
              >
                <h5 className="mb-0 border-top border-md-0 border-xl-top border-xxl-0 mt-x1 mt-md-0 mt-xl-x1 mt-xxl-0 pt-x1 pt-md-0 pt-xl-x1 pt-xxl-0 border-200 border-xl-200">
                  {title}
                </h5>
              </Col>
              <Col
                xs={12}
                md="auto"
                xl={12}
                xxl="auto"
                className="d-flex flex-between-center"
              >
                <AgentSelect agent={agent} className="me-2 w-auto" />
                <Dropdown
                  align="end"
                  className="btn-reveal-trigger d-inline-block"
                >
                  <Dropdown.Toggle split variant="falcon-default" size="sm">
                    <FontAwesomeIcon icon="ellipsis-h" className="fs--2" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="border py-0">
                    <div className="py-2">
                      <Dropdown.Item>View</Dropdown.Item>
                      <Dropdown.Item>Export</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item className="text-danger">
                        Remove
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <h6 className="mb-0 mt-2">
              <FontAwesomeIcon icon="clock" className="text-primary me-2" />
              <span className="text-600">{date}</span>
              <span className="text-500"> at </span>
              <span className="text-600">{time}</span>
            </h6>
            <p className="w-lg-75 w-xl-100 w-xxl-75 mb-0 border-top border-md-0 border-xl-top border-xxl-0 mt-x1 mt-md-4 mt-xl-x1 mt-xxl-4 pt-x1 pt-md-0 pt-xl-x1 pt-xxl-0 border-200 border-xl-200">
              {description}
            </p>
          </div>
        );
      })}
    </Flex>
  );
};

export default Notes;
