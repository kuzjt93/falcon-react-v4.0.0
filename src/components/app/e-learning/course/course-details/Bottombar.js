import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Flex from 'components/common/Flex';
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
      <Card.Body className="py-2">
        <Flex className="gap-3 flex-between-center">
          <h2 className="fw-medium d-flex align-items-center">
            $47.49 <del className="ms-2 fs--1 text-500">$69.99</del>
          </h2>
          <Button variant="primary" size="lg" className="fs-0 flex-1">
            Purchase this course
          </Button>
        </Flex>
      </Card.Body>
    </Card>
  );
};

Bottombar.propTypes = {
  inViewport: PropTypes.bool
};

export default Bottombar;
