import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import AppContext from 'context/Context';

const Bottombar = ({ inViewport }) => {
  const {
    config: { navbarCollapsed }
  } = useContext(AppContext);
  return (
    <Card
      className={`bottom-bar rounded-0 d-lg-none ${
        inViewport || navbarCollapsed ? 'hide' : 'show'
      }`}
    >
      <Card.Body className="py-2 px-0">
        <Container>
          <Row className="flex-between-center g-0">
            <Col xs="auto">
              <Button
                variant="link"
                size="sm"
                className="fw-medium text-secondary p-0"
              >
                Save as Draft
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                size="md"
                variant="primary"
                className="px-xxl-5 px-4"
                type="submit"
              >
                Publish
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

Bottombar.propTypes = {
  inViewport: PropTypes.bool
};

export default Bottombar;
