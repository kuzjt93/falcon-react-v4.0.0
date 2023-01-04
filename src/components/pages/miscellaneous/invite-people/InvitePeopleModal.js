import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Form, Modal } from 'react-bootstrap';

const InvitePeopleModal = ({ show, setShow }) => {
  const [copyLinkText] = useState('https://falcon.com/invited');
  const copyRef = useRef(null);

  useEffect(() => {
    if (show) {
      copyRef.current.select();
    }
  }, [show]);
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      contentClassName="overflow-hidden"
    >
      <Modal.Header closeButton>
        <Modal.Title as="h5" id="copyLinkModalLabel">
          Your personal referral link
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light p-4">
        <Form>
          <Form.Control
            size="sm"
            type="text"
            className="invitation-link"
            defaultValue={copyLinkText}
            ref={copyRef}
          />
        </Form>
      </Modal.Body>
    </Modal>
  );
};

InvitePeopleModal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired
};

export default InvitePeopleModal;
