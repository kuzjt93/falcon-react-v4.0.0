import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import WizardForm from 'components/wizard/Wizard';

const FormTitle = ({ icon, title }) => {
  return (
    <Flex className="mb-4">
      <span className="fa-stack me-2 ms-n1">
        <FontAwesomeIcon icon="circle" className="fa-stack-2x text-300" />
        <FontAwesomeIcon
          icon={icon}
          className="fa-inverse fa-stack-1x text-primary"
        />
      </span>
      <div className="flex-1">
        <h5 className="mb-0 text-primary position-relative">
          <span className="bg-200 dark__bg-1100 pe-3">{title}</span>
          <span className="border position-absolute top-50 translate-middle-y w-100 start-0 z-index--1"></span>
        </h5>
        <p className="mb-0">
          You can easily show your stats content by using these cards.
        </p>
      </div>
    </Flex>
  );
};

const WizardForms = () => {
  return (
    <>
      <Row className="my-5 g-4">
        <Col lg={6} xl={12} xxl={6} className="mt-0 h-100">
          <FormTitle icon="spinner" title="Progress Tab" />
          <WizardForm />
        </Col>
        <Col lg={6} xl={12} xxl={6} className="mt-0 h-100">
          <FormTitle icon="check-double" title="With Validation" />
          <WizardForm validation={true} />
        </Col>
      </Row>
      <Row className="g-4">
        <Col lg={6} xl={12} xxl={6} className="h-100">
          <FormTitle icon="tasks" title="With Progressbar" />
          <WizardForm variant="pills" progressBar={true} />
        </Col>
        <Col lg={6} xl={12} xxl={6} className="h-100">
          <FormTitle icon="capsules" title="Pill Tab" />
          <WizardForm variant="pills" />
        </Col>
      </Row>
    </>
  );
};

FormTitle.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default WizardForms;
