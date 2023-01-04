import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialAuthButtons = () => (
  <Form.Group className="mb-0">
    <Row>
      <Col sm={6} className="pe-sm-1">
        <Button
          variant=""
          size="sm"
          className="btn-outline-google-plus mt-2 w-100"
        >
          <FontAwesomeIcon
            icon={['fab', 'google-plus-g']}
            transform="grow-8"
            className="me-2"
          />{' '}
          google
        </Button>
      </Col>
      <Col sm={6} className="ps-sm-1">
        <Button
          variant=""
          size="sm"
          className="btn-outline-facebook mt-2 w-100"
        >
          <FontAwesomeIcon
            icon={['fab', 'facebook-square']}
            transform="grow-8"
            className="me-2"
          />{' '}
          facebook
        </Button>
      </Col>
    </Row>
  </Form.Group>
);

export default SocialAuthButtons;
