import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Offcanvas, Button, ButtonGroup, Form } from 'react-bootstrap';
import defaultModeImg from 'assets/img/generic/falcon-mode-default.jpg';
import darkModeImg from 'assets/img/generic/falcon-mode-dark.jpg';
import invertedImg from 'assets/img/generic/inverted.png';
import cardImg from 'assets/img/generic/card.png';
import vibrantImg from 'assets/img/generic/vibrant.png';
import transparentImg from 'assets/img/generic/default.png';
import leftArrowFromLeft from 'assets/img/icons/left-arrow-from-left.svg';
import arrowsH from 'assets/img/icons/arrows-h.svg';
import paragraph from 'assets/img/icons/paragraph.svg';
import settings from 'assets/img/icons/spot-illustrations/settings.png';
import Flex from 'components/common/Flex';
import AppContext from 'context/Context';
import RadioItem from './RadioItem';
import SoftBadge from 'components/common/SoftBadge';

const SettingsPanel = () => {
  const {
    config: {
      isFluid,
      isRTL,
      isDark,
      navbarPosition,
      navbarStyle,
      showSettingPanel,
      disabledNavbarPosition
    },
    setConfig,
    configDispatch
  } = useContext(AppContext);

  const [navbars] = useState([
    {
      name: 'transparent',
      image: transparentImg
    },
    {
      name: 'inverted',
      image: invertedImg
    },
    {
      name: 'card',
      image: cardImg
    },
    {
      name: 'vibrant',
      image: vibrantImg
    }
  ]);

  return (
    <Offcanvas
      show={showSettingPanel}
      onHide={() => setConfig('showSettingPanel', false)}
      placement="end"
      style={{ maxWidth: '22rem' }}
      className="border-0"
    >
      <Offcanvas.Header
        closeButton
        closeVariant="white"
        className="bg-shape settings-panel-header"
      >
        <Offcanvas.Title as="div" className="py-1 z-index-1 light">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h5 className="text-white">
              <FontAwesomeIcon icon="palette" className="me-2 fs-0" />
              Settings
            </h5>
            <Button
              variant="primary"
              size="sm"
              className="rounded-pill mt-0 mb-0"
              style={{ fontSize: '12px' }}
              onClick={() => {
                configDispatch({ type: 'RESET' });
              }}
            >
              <FontAwesomeIcon
                icon="redo-alt"
                style={{ fontSize: '10px' }}
                className="me-1"
              />
              Reset
            </Button>
          </div>
          <p className="mb-0 fs--1 text-white opacity-75">
            Set your own customized style
          </p>
        </Offcanvas.Title>
      </Offcanvas.Header>
      {/* <ScrollBarCustom> */}
      <Offcanvas.Body className="scrollbar">
        <h5 className="fs-0">Color Scheme</h5>
        <p className="fs--1">Choose the perfect color mode for your app.</p>

        <ButtonGroup className="btn-group-navbar-style">
          <RadioItem
            name="theme-mode"
            label="light"
            active={!isDark}
            onChange={({ target }) => setConfig('isDark', !target.checked)}
            image={defaultModeImg}
          />
          <RadioItem
            name="theme-mode"
            label="dark"
            active={isDark}
            onChange={({ target }) => setConfig('isDark', target.checked)}
            image={darkModeImg}
          />
        </ButtonGroup>

        <hr />

        <Flex justifyContent="between">
          <img
            src={leftArrowFromLeft}
            alt=""
            width={20}
            className="me-2 h-100"
          />
          <div className="flex-1">
            <h5 className="fs-0">RTL Mode</h5>
            <p className="fs--1 mb-0">Switch your language direction </p>
          </div>
          <Form.Check
            type="switch"
            id="rtl-switch"
            checked={isRTL}
            onChange={({ target }) => setConfig('isRTL', target.checked)}
          />
        </Flex>
        <hr />

        <Flex justifyContent="between">
          <img src={arrowsH} alt="" width={20} className="me-2 h-100" />
          <div className="flex-1">
            <h5 className="fs-0">Fluid Layout</h5>
            <p className="fs--1 mb-0">Toggle container layout system</p>
          </div>
          <Form.Check
            type="switch"
            id="fluid-mode-switch"
            checked={isFluid}
            onChange={({ target }) => setConfig('isFluid', target.checked)}
          />
        </Flex>
        <hr />

        <Flex>
          <img src={paragraph} alt="" width={20} className="me-2 h-100" />
          <div>
            <Flex alignItems="center" tag="h5" className="fs-0">
              Navigation Position
              <SoftBadge bg="success" pill className="fs--2 ms-2">
                New
              </SoftBadge>
            </Flex>
            <p className="fs--1 mb-2">
              Select a suitable navigation system for your web application
            </p>
            <Form.Select
              className="mb-3"
              size="sm"
              defaultValue={navbarPosition}
              onChange={({ target }) =>
                setConfig('navbarPosition', target.value)
              }
            >
              {['vertical', 'top', 'combo', 'double-top'].map(option => (
                <option
                  key={option}
                  disabled={disabledNavbarPosition.includes(option)}
                  value={option}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </Form.Select>
          </div>
        </Flex>

        <hr />
        <h5 className="fs-0 d-flex align-items-center">
          Vertical Navbar Style{' '}
        </h5>
        <p className="fs--1">Switch between styles for your vertical navbar</p>
        <ButtonGroup className="btn-group-navbar-style">
          {navbars.slice(0, 2).map(item => (
            <RadioItem
              key={item.name}
              name="navbar-style"
              label={item.name}
              active={navbarStyle === item.name}
              onChange={() => setConfig('navbarStyle', item.name)}
              image={item.image}
            />
          ))}
        </ButtonGroup>
        <ButtonGroup className="btn-group-navbar-style">
          {navbars.slice(2, 4).map(item => (
            <RadioItem
              key={item.name}
              name="navbar-style"
              label={item.name}
              active={navbarStyle === item.name}
              onChange={() => setConfig('navbarStyle', item.name)}
              image={item.image}
            />
          ))}
        </ButtonGroup>
        <hr />
        <div className="text-center mt-5">
          <img src={settings} alt="settings" width={120} className="mb-4" />
          <h5>Like What You See?</h5>
          <p className="fs--1">
            Get Falcon now and create beautiful dashboards with hundreds of
            widgets.
          </p>
          <Button
            color="primary"
            href="https://themes.getbootstrap.com/product/falcon-admin-dashboard-webapp-template-react/"
          >
            Purchase
          </Button>
        </div>
      </Offcanvas.Body>
      {/* </ScrollBarCustom> */}
    </Offcanvas>
  );
};

export default SettingsPanel;
