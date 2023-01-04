import Background from 'components/common/Background';
import CardDropdown from 'components/common/CardDropdown';
import FalconCardHeader from 'components/common/FalconCardHeader';
import cornerBg from 'assets/img/illustrations/corner-2.png';
import profileImg from 'assets/img/team/5-thumb.png';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Flex from 'components/common/Flex';
import IconButton from 'components/common/IconButton';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const InfoItem = ({ title, content, className }) => {
  return (
    <div className={classNames('mb-4', className)}>
      <h6
        className={classNames({
          'mb-1': title === 'Email' || title === 'Phone Number'
        })}
      >
        {title}
      </h6>
      {title === 'Email' && (
        <a className="fs--1" href={`mailto: ${content}`}>
          {content}
        </a>
      )}
      {title === 'Phone Number' && (
        <a className="fs--1" href={`tel: ${content.replace(/\s+/g, '')}`}>
          {content}
        </a>
      )}
      {title !== 'Email' && title !== 'Phone Number' && (
        <p className="mb-0 text-700 fs--1">{content}</p>
      )}
    </div>
  );
};

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string
};

const ContactProfile = () => {
  return (
    <Card className="mb-xl-3">
      <FalconCardHeader
        title="Contact Information"
        titleTag="h6"
        className="py-2"
        endEl={<CardDropdown />}
      />
      <Card.Body className="bg-light">
        <Card className="border rounded-3 bg-white dark__bg-1000 shadow-none">
          <Background
            image={cornerBg}
            className="bg-card d-none d-sm-block d-xl-none"
          />
          <Card.Body className="row g-0 flex-column flex-sm-row flex-xl-column z-index-1 align-items-center">
            <Col xs="auto" className="text-center me-sm-x1 me-xl-0">
              <img className="ticket-preview-avatar" src={profileImg} alt="" />
            </Col>
            <Col sm={8} md={6} lg={4} xl={12} className="ps-sm-1 ps-xl-0">
              <p className="fw-semi-bold mb-0 text-800 text-center text-sm-start text-xl-center mb-3 mt-3 mt-sm-0 mt-xl-3">
                Matt Rogers
              </p>
              <Flex justifyContent="center" className="gap-2">
                <IconButton
                  variant="primary"
                  icon="plus"
                  transform="shrink-3 down-1"
                  size="sm"
                  className="w-50 px-2 text-nowrap"
                >
                  <span className="fs--2">New Ticket</span>
                </IconButton>
                <IconButton
                  variant="falcon-default"
                  icon="phone-alt"
                  transform="shrink-4"
                  size="sm"
                  className="w-50"
                >
                  <span className="fs--2">Call</span>
                </IconButton>
              </Flex>
            </Col>
          </Card.Body>
        </Card>
        <Row className="border rounded-3 p-x1 mt-3 bg-white dark__bg-1000 mx-0 g-0">
          <Col md={6} xl={12} className="pe-md-4 pe-xl-0">
            <InfoItem title="Email" content="mattrogers@gmail.com" />
            <InfoItem title="Phone Number" content="+6(855) 747 677" />
            <InfoItem
              title="Location"
              content="936 N. Fairground Rd.Farnham, QC J2N 5E9"
            />
            <InfoItem title="Language" content="English" />
            <InfoItem
              title="Account Verified by Twitter"
              content="No"
              className="mb-md-0 mb-xl-4"
            />
          </Col>
          <Col md={6} xl={12} className="ps-md-4 ps-xl-0">
            <InfoItem title="Subscription" content="Active" />
            <InfoItem title="OS" content="macOS Monterey" />
            <InfoItem title="Browser" content="Google Chrome 98.0.2563" />
            <InfoItem title="IP" content="52.119.132.297" />
            <h6>Tag</h6>
            <Link
              to="#!"
              className="badge border link-secondary text-decoration-none me-1 fs--2"
            >
              New
            </Link>
            <Link
              to="#!"
              className="badge border link-secondary text-decoration-none me-1 fs--2"
            >
              Payment
            </Link>
            <Link
              to="#!"
              className="badge border link-secondary text-decoration-none fs--2"
            >
              Subscribe
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ContactProfile;
