import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SimpleBarReact from 'simplebar-react';
import CardDropdown from 'components/common/CardDropdown';
import { Link } from 'react-router-dom';

const Activity = ({ activity: { title, description, icon, time }, isLast }) => {
  return (
    <div className="timeline-item position-relative">
      <Row className="g-0 align-items-center">
        <Col xs="auto" className="d-flex align-items-center">
          <h6 className="timeline-item-date fs--2 text-500 text-truncate mb-0 me-1">
            {time}
          </h6>
          <div className="position-relative">
            <div className="icon-item icon-item-md rounded-7 shadow-none bg-200">
              <FontAwesomeIcon icon={icon} className="text-primary" />
            </div>
          </div>
        </Col>
        <Col className="ps-3 fs--1 text-500">
          <div className="py-x1">
            <h5 className="fs--1">{title}</h5>
            <p className="mb-0">{description}</p>
          </div>
          {!isLast && <hr className="my-0 text-200" />}
        </Col>
      </Row>
    </div>
  );
};

const RecentActivities = ({ data }) => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        light
        title="Recent Activities"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <SimpleBarReact style={{ height: '25rem' }} className="flex-1">
        <Card.Body className="py-0">
          <div className="timeline-simple">
            {data.map((activity, index) => (
              <Activity
                key={activity.id}
                activity={activity}
                isLast={index === data.length - 1}
              />
            ))}
          </div>
        </Card.Body>
      </SimpleBarReact>
      <Card.Footer className="bg-light py-2">
        <Row className="flex-between-center">
          <Col xs="auto">
            <Form.Select size="sm" className="me-2">
              <option>Last 7 days</option>
              <option>Last Month</option>
              <option>Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <Button variant="falcon-default" size="sm" as={Link} to="#!">
              View All
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

Activity.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
      .isRequired
  }),
  isLast: PropTypes.bool
};

RecentActivities.propTypes = {
  data: PropTypes.arrayOf(Activity.propTypes.activity)
};

export default RecentActivities;
