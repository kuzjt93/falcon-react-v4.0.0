import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/common/Flex';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BillingCard = () => {
  return (
    <>
      <Form.Select className="mb-3" defaultValue="monthly">
        <option value="monthly">Monthly Plan</option>
        <option value="annually">Annual Plan</option>
      </Form.Select>
      <Flex className="fs--1 mb-1" justifyContent="between">
        <p className="mb-0">Due in 30 days</p>
        <span>$375.00</span>
      </Flex>
      <Flex className="fs--1 mb-1 text-success" justifyContent="between">
        <p className="mb-0">Annual saving</p>
        <span>$75.00/yr</span>
      </Flex>
      <hr />
      <h5 className="d-flex justify-content-between">
        <span>Due today</span>
        <span>$0.00</span>
      </h5>
      <p className="fs--1 text-600">
        Once you start your trial, you will have 30 days to use Falcon Premium
        for free. After 30 days you’ll be charged based on your selected plan.
      </p>
      <Button variant="primary" className="d-block w-100">
        <FontAwesomeIcon icon="lock" className="me-2" />
        Start free trial
      </Button>
      <div className="text-center mt-2">
        <small className="d-inline-block">
          By continuing, you are agreeing to our subscriber{' '}
          <Link to="#!">terms</Link> and will be charged at the end of the
          trial.
        </small>
      </div>
    </>
  );
};

export default BillingCard;
