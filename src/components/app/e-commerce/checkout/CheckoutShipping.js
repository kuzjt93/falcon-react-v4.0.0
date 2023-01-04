import IconButton from 'components/common/IconButton';
import React from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { shippingAddress } from 'data/ecommerce/checkoutData';

const CheckoutShipping = () => {
  return (
    <Card className="mb-3">
      <Card.Header className="bg-light">
        <Row className="flex-between-center">
          <Col sm="auto">
            <h5 className="mb-0">Your Shipping Address</h5>
          </Col>
          <Col sm="auto">
            <IconButton
              iconClassName="me-2"
              variant="falcon-default"
              size="sm"
              icon="plus"
              transform="shrink-2"
            >
              Add New Address
            </IconButton>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          {shippingAddress.map((item, index) => (
            <Col key={item.id} md={6} className="mb-3 mb-md-0">
              <Form.Check
                type="radio"
                id={`address-${item.id}`}
                className="mb-0 form-check radio-select"
              >
                <Form.Check.Input
                  type="radio"
                  name="clientAddress"
                  defaultChecked={index === 0}
                />
                <Form.Check.Label className="mb-0 fw-bold d-block">
                  {item.name}
                  <span className="radio-select-content">
                    <span>
                      {item.street}, <br /> {item.city}, <br /> {item.state},{' '}
                      {item.zip}{' '}
                      <span className="d-block mb-0 pt-2">{item.phone}</span>
                    </span>
                  </span>
                </Form.Check.Label>
                <Link to="#!" className="fs--1">
                  Edit
                </Link>
              </Form.Check>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CheckoutShipping;
