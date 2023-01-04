import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  Card,
  Modal,
  Nav,
  OverlayTrigger,
  Tooltip,
  Dropdown
} from 'react-bootstrap';
import Login from 'components/authentication/simple/Login';
import Registration from 'components/authentication/simple/Registration';
import AppContext from 'context/Context';

const LandingRightSideNavItem = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const {
    config: { isDark, isRTL },
    setConfig
  } = useContext(AppContext);

  return (
    <Nav navbar className="ms-auto">
      <Nav.Item as={'li'}>
        <Nav.Link
          className="pe-2 theme-switch-toggle"
          onClick={() => setConfig('isDark', !isDark)}
        >
          <OverlayTrigger
            key="left"
            placement={isRTL ? 'bottom' : 'left'}
            overlay={
              <Tooltip id="ThemeColor" className="d-none d-lg-block">
                {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              </Tooltip>
            }
          >
            <span>
              <div className="theme-switch-toggle-label">
                <FontAwesomeIcon
                  icon={isDark ? 'sun' : 'moon'}
                  className="me-2"
                />
              </div>
              <p className="d-lg-none mb-0">
                {isDark ? 'Switch to light theme ' : 'Switch to dark theme'}
              </p>
            </span>
          </OverlayTrigger>
        </Nav.Link>
      </Nav.Item>

      <Dropdown>
        <Dropdown.Toggle as={Link} to="#!" className="nav-link fw-semi-bold">
          Login
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end dropdown-menu-card mt-0 dropdown-caret dropdown-caret-bg">
          <Card className="navbar-card-login shadow-none">
            <Card.Body className="fs--1 fw-normal p-4">
              <Login />
            </Card.Body>
          </Card>
        </Dropdown.Menu>
      </Dropdown>

      <Nav.Item>
        <Nav.Link
          as={Link}
          to="#!"
          onClick={() => setShowRegistrationModal(!showRegistrationModal)}
        >
          Register
        </Nav.Link>
        <Modal
          show={showRegistrationModal}
          centered
          onHide={() => setShowRegistrationModal(false)}
        >
          <Modal.Body className="p-0">
            <Card>
              <Card.Body className="fs--1 fw-normal p-4">
                <Registration />
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </Nav.Item>
    </Nav>
  );
};

export default LandingRightSideNavItem;
