import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';
import FalconCloseButton from 'components/common/FalconCloseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AskQuestionModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} contentClassName="border-0">
    <Modal.Header className="bg-card-gradient light border-bottom-0">
      <Modal.Title as="h5" className="text-white">
        Ask your question
      </Modal.Title>
      <FalconCloseButton noOutline variant="white" onClick={handleClose} />
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="fs--1" htmlFor="name">
            Name
          </Form.Label>
          <Form.Control type="text" id="name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fs--1" htmlFor="email">
            Email
          </Form.Label>
          <Form.Control type="email" id="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fs--1" htmlFor="question">
            Question
          </Form.Label>
          <Form.Control as="textarea" rows={4} id="question" />
        </Form.Group>
        <Button varient="primary" size="sm" className="px-4">
          <FontAwesomeIcon icon="paper-plane" className="me-2" />
          Send
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);

AskQuestionModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default AskQuestionModal;
