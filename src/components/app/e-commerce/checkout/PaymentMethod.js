import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cards from 'assets/img/icons/icon-payment-methods-grid.png';
import paypal from 'assets/img/icons/icon-paypal-full.png';
import shield from 'assets/img/icons/shield.png';
import { ProductContext } from 'context/Context';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  OverlayTrigger,
  Row,
  Tooltip
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const PaymentMethod = ({ payableTotal }) => {
  const [method, setMethod] = useState('credit-card');
  const { productsDispatch } = useContext(ProductContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    productsDispatch({
      type: 'CHECKOUT'
    });
    toast(
      <div className="text-700">
        <h5 className="text-success fs-0 mb-0">Payment success!</h5>
        <hr className="my-2" />
        Total: <strong>${payableTotal}</strong>
        <br />
        Payment method:{' '}
        <strong className="text-capitalize">
          {method.split('-').join(' ')}
        </strong>
      </div>
    );
    method === 'credit-card'
      ? console.log(data)
      : console.log('Calling paypal api');
  };

  return (
    <Card>
      <Card.Header className="bg-light">
        <h5 className="mb-0">Payment Method</h5>
      </Card.Header>
      <Card.Body>
        <Form.Check type="radio" id="credit-card" className="mb-0 form-check">
          <Form.Check.Input
            type="radio"
            onChange={e => setMethod(e.target.id)}
            name="payment-method"
            defaultChecked
          />
          <Form.Check.Label className="mb-2 fs-1">Credit Card</Form.Check.Label>
        </Form.Check>
        <Form>
          <Row className="gx-0 ps-2 mb-4">
            <Col sm={8} className="px-3">
              <Form.Group className="mb-3">
                <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                  Card Number
                </Form.Label>
                <Form.Control
                  type="text"
                  id="cardNumber"
                  {...register('cardNumber')}
                  placeholder="•••• •••• •••• ••••"
                />
              </Form.Group>
              <Row className="align-items-center">
                <Col xs={6}>
                  <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                    Exp Date
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="expDate"
                    {...register('expDate')}
                    placeholder="mm/yyyy"
                  />
                </Col>
                <Col xs={6}>
                  <Form.Label className="ls text-uppercase text-600 fw-semi-bold mb-0">
                    CVV{''}
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="cvvinfo">Card verification value</Tooltip>
                      }
                    >
                      <Link to="#!">
                        <FontAwesomeIcon
                          icon="question-circle"
                          className="ms-2"
                        />
                      </Link>
                    </OverlayTrigger>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="cvv"
                    placeholder="123"
                    {...register('cvv', {
                      maxLength: 3,
                      pattern: /[0-9]{3}/
                    })}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={4} className="ps-3 text-center pt-2 d-none d-sm-block">
              <div className="rounded-1 p-2 mt-3 bg-100">
                <div className="text-uppercase fs--2 fw-bold">We Accept</div>
                <img src={cards} width={120} alt="card payment options" />
              </div>
            </Col>
          </Row>
        </Form>
        <Form.Check
          type="radio"
          id="paypal"
          onChange={e => setMethod(e.target.id)}
          className="d-flex align-items-center"
        >
          <Form.Check.Input
            type="radio"
            onChange={e => setMethod(e.target.id)}
            name="payment-method"
          />
          <Form.Check.Label className="mb-0 ms-2">
            <img src={paypal} height={20} alt="card payment options" />
          </Form.Check.Label>
        </Form.Check>
        <div className="border-dashed border-bottom my-5"></div>
        <Row>
          <Col
            md={7}
            xl={12}
            xxl={7}
            className="px-md-3 mb-xxl-0 position-relative"
          >
            <div className="d-flex">
              <img
                src={shield}
                alt="protection"
                width="60"
                height="60"
                className="me-3"
              />
              <div className="flex-1">
                <h5 className="mb-2">Buyer Protection</h5>
                <Form.Check id="full-refund" className="mb-0 form-check">
                  <Form.Check.Input
                    className="mb-0"
                    type="checkbox"
                    defaultChecked
                  />
                  <Form.Check.Label className="mb-0">
                    <strong>Full Refund</strong> If you don't{' '}
                    <br className="d-none d-md-block d-lg-none" /> receive your
                    order
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check id="partial-refund" className="form-check">
                  <Form.Check.Input
                    className="mb-0"
                    type="checkbox"
                    defaultChecked
                  />
                  <Form.Check.Label className="mb-0">
                    <strong>Full or Partial Refund,</strong> If the product is
                    not as described in details
                  </Form.Check.Label>
                </Form.Check>
                <Link to="#!" className="fs--1 ms-3 ps-2">
                  Learn More
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="ms-1"
                    transform="down-2"
                  />
                </Link>
              </div>
            </div>
            <div className="vertical-line d-none d-md-block d-xl-none d-xxl-block"></div>
          </Col>
          <Col
            md={5}
            xl={12}
            xxl={5}
            className="ps-xxl-5 text-center text-md-start text-xl-center text-xxl-start"
          >
            <div className="border-dashed border-bottom d-block d-md-none d-xl-block d-xxl-none my-4"></div>
            <div className="fs-2 fw-semi-bold">
              All Total: <span className="text-primary">${payableTotal}</span>
            </div>
            <Button
              variant="success"
              className="mt-3 px-5"
              type="submit"
              disabled={payableTotal === '0.00'}
              onClick={handleSubmit(onSubmit)}
            >
              Confirm &amp; Pay
            </Button>
            <p className="fs--1 mt-3 mb-0">
              By clicking <strong>Confirm &amp; Pay </strong> button you agree
              to the <Link to="#!">Terms &amp; Conditions</Link>
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

PaymentMethod.propTypes = {
  payableTotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default PaymentMethod;
