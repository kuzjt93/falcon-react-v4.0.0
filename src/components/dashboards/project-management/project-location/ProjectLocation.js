import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Form, Row } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import IconButton from 'components/common/IconButton';
import LeafletMap from './LeafletMap';

const ProjectLocation = ({ data }) => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        title="Project Locations"
        titleTag="h5"
        endEl={<CardDropdown />}
        light={true}
      />
      <Card.Body className="h-100 p-0" dir="ltr">
        <LeafletMap
          data={data}
          className="h-100 bg-white"
          style={{ minHeight: '300px' }}
        />
      </Card.Body>
      <Card.Footer className="bg-light">
        <Row className="justify-content-between">
          <Col xs="auto">
            <Form.Select size="sm" defaultValue="week">
              <option value="week">Last 7 days</option>
              <option value="month">Last month</option>
              <option value="year">Last Year</option>
            </Form.Select>
          </Col>
          <Col xs="auto">
            <IconButton
              variant="falcon-default"
              size="sm"
              icon="chevron-right"
              iconClassName="ms-1 fs--1"
              iconAlign="right"
            >
              <span className="d-none d-sm-inline-block">
                Location overview
              </span>
            </IconButton>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

ProjectLocation.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default ProjectLocation;
