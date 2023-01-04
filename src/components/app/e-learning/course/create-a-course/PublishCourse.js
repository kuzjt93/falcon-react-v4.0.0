import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Bottombar from './Bottombar';
import useVisibilityObserver from 'hooks/useVisibilityObserver';

const publishStatsSettings = [
  {
    name: 'Condition',
    value: 'Draft',
    icon: 'file'
  },
  {
    name: 'Privacy',
    value: 'Public',
    icon: 'unlock-alt'
  },
  {
    name: 'Visibility',
    value: 'Global Search',
    icon: 'globe'
  },
  {
    name: 'Publish',
    value: 'Now',
    icon: 'clock'
  }
];

const PublishCourse = () => {
  const targetElRef = useRef();
  const { isVisible: inViewport, observer } = useVisibilityObserver(
    targetElRef,
    '0px'
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
      <Card className="mb-lg-3 order-lg-0 order-1">
        <Card.Header className="py-2 d-flex flex-between-center">
          <h5 className="mb-0">Publish your Course</h5>
          <Button
            variant="link"
            size="sm"
            className="px-0 fw-medium text-secondary "
          >
            <span className="d-lg-none d-xxl-inline-block">Preview</span>
            <FontAwesomeIcon icon="external-link-alt" className="ms-2 fs--2" />
          </Button>
        </Card.Header>
        <Card.Body className="bg-light">
          <ul className="list-unstyled fs--1 mb-0">
            {publishStatsSettings.map((setting, index) => (
              <li
                key={setting.name}
                className={`hover-actions-trigger ${
                  publishStatsSettings.length - 1 !== index && 'mb-2'
                }`}
              >
                <FontAwesomeIcon icon={setting.icon} className="me-2" />
                <span className="ms-1">{setting.name}:</span>
                <span className="text-800 fw-medium me-2">
                  {' '}
                  {setting.value}
                </span>
                <Button
                  variant="link"
                  size="sm"
                  className="hover-actions p-0 lh-sm"
                >
                  Edit
                </Button>
              </li>
            ))}
          </ul>
        </Card.Body>
        <Card.Footer ref={targetElRef} className="py-2">
          <Row className="flex-between-center g-0">
            <Col xs="auto">
              <Button
                variant="link"
                size="sm"
                className="fw-medium text-secondary p-0"
              >
                Save as Draft
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                size="md"
                variant="primary"
                className="px-xxl-5 px-4"
                type="submit"
              >
                Publish
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Bottombar inViewport={inViewport} />
    </>
  );
};

export default PublishCourse;
