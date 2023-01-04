import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useVisibilityObserver from 'hooks/useVisibilityObserver';
import FalconCardHeader from 'components/common/FalconCardHeader';
import Flex from 'components/common/Flex';
import Bottombar from './Bottombar';

const courseContents = [
  {
    id: 0,
    text: 'Total 13 hours of video lectures',
    icon: 'check'
  },
  {
    id: 1,
    text: '12 premium article access',
    icon: 'check'
  },
  {
    id: 2,
    text: '11 downloadable resources',
    icon: 'check'
  },
  {
    id: 3,
    text: 'Mobile, Tab or TV friendly content',
    icon: 'check'
  },
  {
    id: 4,
    text: 'Certificate upon completion',
    icon: 'check'
  },
  {
    id: 5,
    text: 'Lifetime permission to access',
    icon: 'infinity'
  }
];

const socialShares = [
  {
    id: 0,
    icon: 'facebook-f',
    color: 'primary'
  },
  {
    id: 1,
    icon: 'twitter',
    color: 'twitter'
  },
  {
    id: 2,
    icon: 'google-plus-g',
    color: 'google-plus'
  },
  {
    id: 3,
    icon: 'linkedin-in',
    color: 'info'
  }
];

const CoursePricingPlan = ({ course }) => {
  const targetElRef = useRef();
  const { isVisible: inViewport, observer } = useVisibilityObserver(
    targetElRef,
    '-100px'
  );

  useEffect(() => {
    return () => {
      observer &&
        targetElRef.current &&
        observer.unobserve(targetElRef.current);
    };
  }, [observer]);

  return (
    <>
      <Card className="mb-3">
        <FalconCardHeader
          title="Plan Your Dream Career"
          titleTag="h5"
          className="bg-light d-none d-lg-block mb-0"
        />

        <Card.Body>
          <Row>
            <Col md={7} lg={12} className="order-md-1 order-lg-0">
              <h2 className="fw-medium d-flex align-items-center">
                ${course.price}{' '}
                {course.oldPrice && (
                  <del className="ms-2 fs--1 text-500">${course.oldPrice}</del>
                )}
              </h2>
              <p className="text-danger fs--1 fw-semi-bold">
                <FontAwesomeIcon icon={['far', 'clock']} className="me-2" />
                Sale ends in 13h : 25m : 54s
              </p>
              <Button
                ref={targetElRef}
                variant="primary"
                size="lg"
                className="w-100 fs-0 mt-1"
              >
                Purchase this course
              </Button>
              <p className="text-700 fw-medium fs--1 mt-3 mb-0">
                14 day Refund Policy
              </p>
            </Col>
            <Col md={5} lg={12}>
              <hr className="border-top border-dashed d-md-none d-lg-block" />
              <h6 className="fw-bold">Course Contents</h6>
              <ul className="list-unstyled fs--1 mb-0">
                {courseContents.map(({ id, text, icon }) => (
                  <li key={id} className="mb-1">
                    <FontAwesomeIcon icon={icon} className="fs--2 me-2" />
                    {text}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <hr className="border-top border-dashed" />
          <h6 className="fw-bold">Share with friends</h6>
          <Flex className="gap-2">
            {socialShares.map(({ id, icon, color }) => (
              <Button
                key={id}
                variant="falcon-default"
                type="button"
                size="sm"
                className="icon-item icon-item-lg fs-0"
              >
                <FontAwesomeIcon
                  icon={['fab', `${icon}`]}
                  className={`mr-1 text-${color}`}
                />
              </Button>
            ))}
          </Flex>
        </Card.Body>
      </Card>
      <Bottombar inViewport={inViewport} />
    </>
  );
};

CoursePricingPlan.propTypes = {
  course: PropTypes.shape({
    price: PropTypes.number,
    oldPrice: PropTypes.number
  })
};

export default CoursePricingPlan;
