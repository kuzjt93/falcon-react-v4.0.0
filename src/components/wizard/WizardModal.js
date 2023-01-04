import FalconCloseButton from 'components/common/FalconCloseButton';
import Flex from 'components/common/Flex';
import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Modal } from 'react-bootstrap';
import animationData from './lottie/warning-light.json';

const WizardModal = ({ modal, setModal }) => {
  return (
    <Modal show={modal} centered dialogClassName="wizard-modal">
      <Modal.Body className="p-4">
        <FalconCloseButton
          size="sm"
          className="position-absolute top-0 end-0 me-2 mt-2"
          onClick={() => setModal(!modal)}
        />
        <Flex justifyContent="center" alignItems="center">
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: '100px' }}
          />
          <p className="mb-0 flex-1">
            You don't have access to <br />
            the link. Please try again.
          </p>
        </Flex>
      </Modal.Body>
    </Modal>
  );
};

WizardModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired
};

export default WizardModal;
