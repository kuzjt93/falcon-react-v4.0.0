import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import corner6 from 'assets/img/icons/spot-illustrations/corner-6.png';
import FalconCardHeader from 'components/common/FalconCardHeader';
import IconButton from 'components/common/IconButton';
import Background from 'components/common/Background';

const CourseContents = ({ data }) => {
  return (
    <Card className="mb-3">
      <FalconCardHeader
        title="This Course Will Teach You"
        titleTag="h5"
        className="bg-light"
        endEl={
          <IconButton
            variant="falcon-primary"
            size="sm"
            iconAlign="right"
            icon="caret-right"
            iconClassName="ms-1"
          >
            Preview
          </IconButton>
        }
      />
      <Card.Body className="position-relative">
        <Background image={corner6} className="bg-card d-none d-md-block" />
        <Row className="g-2 fs--1">
          {data.map(({ id, content }) => (
            <Col md={6} key={id} className="d-flex gap-2">
              <FontAwesomeIcon
                icon="circle"
                transform="shrink-8"
                className="fs--2 mt-1"
              />
              <span>{content}</span>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

CourseContents.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default CourseContents;
