import React from 'react';
import corner4 from 'assets/img/illustrations/corner-4.png';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Background from 'components/common/Background';

const CreateCourseHeader = () => {
  return (
    <Card className="mb-3">
      <Background
        image={corner4}
        className="bg-card d-none d-md-block"
        style={{
          borderTopRightRadius: '0.375rem',
          borderBottomRightRadius: '0.375rem'
        }}
      />
      <Card.Body className="position-relative">
        <Row>
          <Col xl={10}>
            <h3>Create A New Course</h3>
            <p className="mb-0">
              Enlighten the world with your knowledge. Use our Course Creator to
              design a well-structured course; set whatever price you feel
              worthy of, and publish at our platform.
              <br />
              or,
              <br className="d-lg-none" />
              Want to edit your existing course? Jump to
              <Link to="/e-learning/course/course-grid"> Your courses</Link>
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CreateCourseHeader;
