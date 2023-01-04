import React from 'react';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BubbleChart from './BubbleChart';
import { trendingKeywords } from 'data/dashboard/lms';

const TrendingKeywords = ({ ...rest }) => {
  return (
    <Card {...rest} className="h-100">
      <FalconCardHeader
        light
        title="Trending Keywords"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body className="py-2 d-flex flex-center position-relative">
        <BubbleChart data={trendingKeywords} />
      </Card.Body>
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

TrendingKeywords.propTypes = {};

export default TrendingKeywords;
