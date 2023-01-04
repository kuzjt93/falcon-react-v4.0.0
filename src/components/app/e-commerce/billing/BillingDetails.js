import React from 'react';
import { Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import paypal from 'assets/img/icons/icon-paypal-full.png';
import creditCard from 'assets/img/icons/icon-payment-methods.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import countries from 'data/countries';

const BillingDetails = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Check type="radio" className="mb-0 form-check" id="paypal">
        <Form.Check.Input
          type="radio"
          id="paypal"
          name="billing"
          value="paypal"
          {...register('billingMethod', { required: true })}
        />
        <Form.Check.Label className="mb-0 d-block">
          <img src={paypal} height="20" alt="paypal" />
        </Form.Check.Label>
      </Form.Check>
      <p className="fs--1 mb-4">
        Pay with PayPal, Apple Pay, PayPal Credit and much more
      </p>

      <Form.Check type="radio" className="mb-0 form-check" id="credit-card">
        <Form.Check.Input
          type="radio"
          name="billing"
          defaultChecked
          id="credit-card"
          value="card"
          {...register('billingMethod', { required: true })}
        />
        <Form.Check.Label className="d-flex align-items-center mb-0">
          <span className="fs-1 text-nowrap">Credit Card</span>
          <img
            src={creditCard}
            height="20"
            className="d-none d-sm-inline-block ms-2 mt-lg-0"
            alt="paypal"
          />
        </Form.Check.Label>
      </Form.Check>
      <p className="fs--1 mb-4">
        Safe money transfer using your bank accounts. Visa, maestro, discover,
        american express.
      </p>

      <Row className="gx-3 mb-3">
        <Form.Group as={Col}>
          <Form.Label
            className="ls text-uppercase text-600 fw-semi-bold mb-0 fs--1"
            htmlFor="cardNumber"
          >
            Card Number
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            {...register('cardNumber', { required: true })}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label
            className="ls text-uppercase text-600 fw-semi-bold mb-0 fs--1"
            htmlFor="cardName"
          >
            Name of Card
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="John Doe"
            {...register('cardName', { required: true })}
          />
        </Form.Group>
      </Row>
      <Row className="gx-3">
        <Col xs={6} sm={3}>
          <Form.Group>
            <Form.Label
              className="ls text-uppercase text-600 fw-semi-bold mb-0 fs--1"
              htmlFor="inputCountry"
            >
              Country
            </Form.Label>
            <Form.Control
              list="country-list"
              {...register('country', { required: true })}
            />
            <datalist id="country-list">
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </datalist>
          </Form.Group>
        </Col>
        <Col xs={6} sm={3}>
          <Form.Group>
            <Form.Label
              className="ls text-uppercase text-600 fw-semi-bold mb-0 fs--1"
              htmlFor="zipCode"
            >
              Zip Code
            </Form.Label>
            <Form.Control
              placeholder="1234"
              type="text"
              {...register('zipCode', { required: true })}
            />
          </Form.Group>
        </Col>
        <Col xs={6} sm={3}>
          <Form.Group>
            <Form.Label
              className="ls text-uppercase text-600 fw-semi-bold mb-0 fs--1"
              htmlFor="expDate"
            >
              Exp Date
            </Form.Label>
            <Form.Control
              id="expDate"
              placeholder="15/2024"
              type="text"
              {...register('expDate', { required: true })}
            />
          </Form.Group>
        </Col>
        <Col xs={6} sm={3}>
          <Form.Group>
            <Form.Label
              className="ls text-uppercase text-600 fw-semi-bold mb-0 fs--1"
              htmlFor="cvv"
            >
              CVV{''}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Card verification value</Tooltip>}
              >
                <Link to="#!">
                  <FontAwesomeIcon
                    icon="question-circle"
                    className="ms-1 text-600"
                  />
                </Link>
              </OverlayTrigger>
            </Form.Label>
            <Form.Control
              id="cvv"
              placeholder="123"
              maxLength="3"
              pattern="[0-9]{3}"
              type="text"
              {...register('cvv', { required: true })}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default BillingDetails;
