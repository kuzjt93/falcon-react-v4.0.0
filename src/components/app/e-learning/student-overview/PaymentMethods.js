import React from 'react';
import { Card, Col, Image, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import corner2 from 'assets/img/icons/spot-illustrations/corner-2.png';
import chip from 'assets/img/icons/chip.png';
import mastercard from 'assets/img/icons/master-card.png';
import FalconCardHeader from 'components/common/FalconCardHeader';
import CardDropdown from 'components/common/CardDropdown';
import Background from 'components/common/Background';
import SoftBadge from 'components/common/SoftBadge';

const PaymentMethods = () => {
  return (
    <Card className="h-100">
      <FalconCardHeader
        light
        title="Payment Methods"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body>
        <Row className="g-3 h-100">
          <Col sm={6} lg={12}>
            <Card className="position-relative rounded-4">
              <Background image={corner2} className="p-x1 bg-card rounded-4" />
              <Card.Body className="p-3 pt-5 pt-xxl-4">
                <Image
                  fluid
                  width={30}
                  src={chip}
                  alt="mastercard chip"
                  className="mb-3"
                />
                <h6 className="text-primary font-base lh-1 mb-1">
                  **** **** **** 9876
                </h6>
                <h6 className="fs--2 fw-semi-bold text-facebook mb-3">12/26</h6>
                <h6 className="mb-0 text-facebook">Michael Giacchino</h6>
                <Image
                  fluid
                  width={70}
                  src={mastercard}
                  alt="mastercard logo"
                  className="position-absolute end-0 bottom-0 mb-2 me-2"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={12}>
            <Table borderless className="fw-medium font-sans-serif fs--1 mb-2">
              <tbody>
                <tr>
                  <td className="p-1" style={{ width: '35%' }}>
                    Type:
                  </td>
                  <td className="p-1 text-600">Mastercard debit card</td>
                </tr>
                <tr>
                  <td className="p-1" style={{ width: '35%' }}>
                    Name:
                  </td>
                  <td className="p-1 text-600">Michael Giacchino</td>
                </tr>
                <tr>
                  <td className="p-1" style={{ width: '35%' }}>
                    Expires:
                  </td>
                  <td className="p-1 text-600">DEC 2026</td>
                </tr>
                <tr>
                  <td className="p-1" style={{ width: '35%' }}>
                    Issuer:
                  </td>
                  <td className="p-1 text-600">Falcon Finances</td>
                </tr>
                <tr>
                  <td className="p-1" style={{ width: '35%' }}>
                    ID:
                  </td>
                  <td className="p-1 text-600">card_3d1avx3zcafd62</td>
                </tr>
              </tbody>
            </Table>
            <SoftBadge bg="success" pill className="me-2">
              Verified
              <FontAwesomeIcon icon="check" className="ms-1" />
            </SoftBadge>
            <SoftBadge bg="warning" pill className="me-2">
              Non Billable
              <FontAwesomeIcon icon="exclamation-triangle" className="ms-1" />
            </SoftBadge>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PaymentMethods;
