import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import visa from '../../../../../assets/img/icons/visa.png';

const OrderInfo = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col md={6} lg={4} className="mb-4 mb-lg-0">
            <h5 className="mb-3 fs-0">Billing Address</h5>
            <h6 className="mb-2">Antony Hopkins</h6>
            <p className="mb-1 fs--1">
              2393 Main Avenue <br /> Penasauka, New Jersey 87896
            </p>
            <p className="mb-0 fs--1">
              <strong>
                Email: <a href="mailto:ricky@gmail.com">antony@example.com</a>
              </strong>
            </p>
            <p className="mb-0 fs--1">
              <strong>
                Phone: <a href="tel:7897987987">7897987987</a>
              </strong>
            </p>
          </Col>
          <Col md={6} lg={4} className="mb-4 mb-lg-0">
            <h5 className="mb-3 fs-0">Shipping Address</h5>
            <h6 className="mb-2">Antony Hopkins</h6>
            <p className="mb-0 fs--1">
              2393 Main Avenue <br /> Penasauka, New Jersey 87896
            </p>
            <div className="text-500 fs--1">(Free Shipping)</div>
          </Col>
          <Col md={6} lg={4}>
            <h5 className="mb-3 fs-0">Payment Method</h5>
            <div className="d-flex">
              <img
                src={visa}
                width="40"
                height="30"
                className="me-3"
                alt="visa"
              />
              <div className="flex-1">
                <h6 className="mb-0">Antony Hopkins</h6>
                <p className="mb-0 fs--1">**** **** **** 9809</p>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

OrderInfo.propTypes = {};

export default OrderInfo;
