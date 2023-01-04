import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image, Row } from 'react-bootstrap';

const CourseFeatures = ({ data }) => {
  return (
    <Card className="mb-3 bg-transparent border shadow-none">
      <Card.Body>
        <Row className="gy-4 text-center text-md-start">
          {data.map(({ id, title, icon, description }) => (
            <Col md={4} key={id}>
              <Image src={icon} alt="" width={36} className="mb-3" />
              <h6 className="fs-0 text-primary">{title}</h6>
              <p className="fs--1 mb-0">{description}</p>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

CourseFeatures.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default CourseFeatures;
