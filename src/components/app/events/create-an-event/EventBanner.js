import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import eventBanner from 'assets/img/generic/13.jpg';
import React from 'react';
import { Card, Form, Image } from 'react-bootstrap';

const EventBanner = () => {
  return (
    <Card className="cover-image">
      <Image src={eventBanner} alt="..." className="card-img-top" />
      <Form.Group controlId="formFile">
        <Form.Label className="cover-image-file-input">
          <FontAwesomeIcon icon="camera" className="me-2" />
          <span>Upload cover photo</span>
        </Form.Label>
        <Form.Control type="file" className="d-none" />
      </Form.Group>
    </Card>
  );
};

export default EventBanner;
