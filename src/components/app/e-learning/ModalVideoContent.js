import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton, Modal } from 'react-bootstrap';

const ModalVideoContent = ({ show, setShow, attachment }) => {
  return (
    <Modal
      show={show}
      size="xl"
      onHide={() => setShow(false)}
      className="video-popup"
      contentClassName="bg-transparent border-0"
      backdropClassName="video-popup-backdrop"
      centered
    >
      <CloseButton
        variant="white"
        onClick={() => setShow(false)}
        className="video-popup-close-btn"
      />
      <Modal.Body className="p-0 rounded overflow-hidden">
        <video
          poster={attachment.image}
          className="d-block"
          width="100%"
          height="100%"
          controls
          autoPlay
        >
          <source src={attachment.src} type="video/mp4" />
        </video>
      </Modal.Body>
    </Modal>
  );
};

ModalVideoContent.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  attachment: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    image: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.string
  })
};

export default ModalVideoContent;
