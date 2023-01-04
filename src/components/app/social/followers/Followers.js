import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import people from 'data/people';
import Follower from './Follower';

const Followers = () => {
  const [options] = useState([
    'Concert Choir',
    'Clubchem',
    'Chamber Music Society',
    'Alpha Chi Omega',
    'Alpine Ski Club',
    'Career Club',
    'Musical Club',
    'Asymptones',
    'Clubcem',
    'Brain Trust',
    'Other'
  ]);
  const [followers] = useState(people.slice(0, 24));
  return (
    <Card>
      <Card.Header className="bg-light">
        <Row className="align-items-center">
          <Col>
            <h5 className="mb-0">Followers ({people.length}) </h5>
          </Col>
          <Col>
            <Row className="g-2">
              <Col>
                <Form.Control placeholder="Search..." size="sm" />
              </Col>
              <Col className="d-md-block d-none">
                <Form.Select size="sm">
                  <option value="">All followers</option>
                  {options.map(option => (
                    <option key={option}>{option}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="bg-light px-1 pb-1 pt-0 fs--1">
        <Row className="gx-0 gy-1 text-center">
          {followers.map(follower => (
            <Col key={follower.id} xs={6} md={4} lg={3} xxl={2}>
              <Follower follower={follower} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Followers;
