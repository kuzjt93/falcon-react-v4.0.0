import Avatar from 'components/common/Avatar';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import profileImg from 'assets/img/team/1.jpg';
import { Link } from 'react-router-dom';
import SoftBadge from 'components/common/SoftBadge';

const ContactInfo = () => {
  return (
    <Card>
      <FalconCardHeader
        title="Contact Information"
        titleTag="h6"
        className="py-2 bg-light"
        endEl={<CardDropdown />}
      />
      <Card.Body>
        <Row className="g-0 border-bottom pb-x1 mb-x1 align-items-sm-center align-items-xl-start">
          <Col xs={12} sm="auto" xl={12} className="me-sm-3 me-xl-0">
            <Avatar src={profileImg} size="3xl" />
          </Col>
          <Col xs={12} sm="auto" xl={12}>
            <p className="fw-semi-bold text-800 mb-0">Emma Watson</p>
            <Link
              to="/support-desk/contact-details"
              className="btn btn-link btn-sm p-0 fe-medium fs--1"
            >
              View more details
            </Link>
          </Col>
        </Row>
        <Row className="g-0 justify-content-lg-between">
          <Col xs="auto" md={6} lg="auto">
            <Row>
              <Col md="auto" className="mb-4 mb-md-0 mb-xl-4">
                <h6 className="mb-1">Email</h6>
                <a href={`mailto:mattrogers@gmail.com`} className="fs--1">
                  mattrogers@gmail.com
                </a>
              </Col>
              <Col md="auto" className="mb-4 mb-md-0 mb-xl-4">
                <h6 className="mb-1">Phone Number</h6>
                <a href={`tel:+6(855)747677`} className="fs--1">
                  +6(855) 747 677
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs="auto" md={6} lg="auto" className="ps-md-5 ps-xl-0">
            <div
              className="border-start position-absolute start-50 d-none d-md-block d-xl-none"
              style={{ height: '4.5rem' }}
            ></div>
            <h6 className="d-flex align-items-center mb-1">
              <span className="me-2">Previous Tickets</span>
              <SoftBadge bg="info">Responded</SoftBadge>
            </h6>
            <Link
              to="/support-desk/tickets-preview"
              className="text-truncate fs--1 font-sans-serif mb-1 d-block text-700"
            >
              When I unboxed my TV, I found a broken TV
            </Link>
            <p className="fs--1 mb-0 text-600 fw-semi-bold">
              01 March, 2020
              <span className="mx-1 ">|</span>
              <span className="fst-italic">8:40 AM</span>
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContactInfo;
