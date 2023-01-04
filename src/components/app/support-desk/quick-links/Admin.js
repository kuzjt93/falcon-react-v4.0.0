import { account, team } from 'data/support-desk/quickLinksData';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AdminItem = ({ item }) => {
  return (
    <Col md={6} xxl={4}>
      <div className="hover-bg-100 py-x1 text-center rounded-3 position-relative">
        <div
          className={`icon-item icon-item-xl shadow-none mx-auto mt-x1 bg-soft-${item.color}`}
        >
          {item.icon}
        </div>
        <h5 className="mt-3 mb-2">
          <a href="#!" className="text-900 hover-primary stretched-link">
            {item.title}
          </a>
        </h5>
        <h6 className="w-75 mx-auto text-600 mb-x1">{item.description}</h6>
      </div>
    </Col>
  );
};

AdminItem.propTypes = {
  item: PropTypes.shape({
    color: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export const Team = () => {
  return (
    <Card className="mt-3">
      <Card.Header className="border-bottom border-200">
        <h6 className="mb-0">Team</h6>
      </Card.Header>
      <Card.Body>
        <Row className="gx-3">
          {team.map((item, index) => (
            <AdminItem key={index} item={item} />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export const Account = () => {
  return (
    <Card className="mt-3">
      <Card.Header className="border-bottom border-200">
        <h6 className="mb-0">Account</h6>
      </Card.Header>
      <Card.Body>
        <Row className="gx-3">
          {account.map((item, index) => (
            <AdminItem key={index} item={item} />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};
