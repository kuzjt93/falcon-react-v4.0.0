import { AuthWizardContext } from 'context/Context';
import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import celebration from './lottie/celebration.json';

const Success = ({ reset }) => {
  const { setStep, setUser } = useContext(AuthWizardContext);

  const emptyData = () => {
    setStep(1);
    setUser({});
    reset();
  };

  return (
    <>
      <Row>
        <Col className="text-center">
          <div className="wizard-lottie-wrapper">
            <div className="wizard-lottie mx-auto">
              <Lottie animationData={celebration} loop={true} />
            </div>
          </div>
          <h4 className="mb-1">Your account is all set!</h4>
          <p className="fs-0">Now you can access to your account</p>
          <Button color="primary" className="px-5 my-3" onClick={emptyData}>
            Start Over
          </Button>
        </Col>
      </Row>
    </>
  );
};

Success.propTypes = {
  reset: PropTypes.func.isRequired
};

export default Success;
