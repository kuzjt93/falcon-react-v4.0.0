import React, { useContext, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import AppContext from 'context/Context';
import TrainerInfo from './TrainerInfo';
import TrainerIntro from './TrainerIntro';
import TrainerCourses from './TrainerCourses';

const TrainerProfile = () => {
  const {
    config: { navbarPosition },
    setConfig
  } = useContext(AppContext);
  const prevNavbarPosition = useRef(navbarPosition);

  useEffect(() => {
    if (navbarPosition !== 'double-top') setConfig('navbarPosition', 'top');

    setConfig('disabledNavbarPosition', ['vertical', 'combo']);
  }, []);

  useEffect(() => {
    return () => {
      setConfig('disabledNavbarPosition', []);
      setConfig('navbarPosition', prevNavbarPosition.current);
    };
  }, []);

  return (
    <Row className="g-3">
      <Col lg={4} xl={3}>
        <div className="sticky-sidebar top-navbar-height">
          <TrainerInfo />
        </div>
      </Col>
      <Col lg={8} xl={9}>
        <TrainerIntro />
        <TrainerCourses />
      </Col>
    </Row>
  );
};

export default TrainerProfile;
