import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartNotification from 'components/navbar/top/CartNotification';
import NotificationDropdown from 'components/navbar/top/NotificationDropdown';
import ProfileDropdown from 'components/navbar/top/ProfileDropdown';
import AppContext from 'context/Context';
import React, { useContext } from 'react';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NineDotMenu from './NineDotMenu';

const TopNavRightSideNavItem = () => {
  const {
    config: { isDark, isRTL },
    setConfig
  } = useContext(AppContext);
  return (
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      <Nav.Item as={'li'}>
        <Nav.Link
          className="px-2 theme-control-toggle"
          onClick={() => setConfig('isDark', !isDark)}
        >
          <OverlayTrigger
            key="left"
            placement={isRTL ? 'bottom' : 'left'}
            overlay={
              <Tooltip id="ThemeColor">
                {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              </Tooltip>
            }
          >
            <div className="theme-control-toggle-label">
              <FontAwesomeIcon
                icon={isDark ? 'sun' : 'moon'}
                className="fs-0"
              />
            </div>
          </OverlayTrigger>
        </Nav.Link>
      </Nav.Item>

      <CartNotification />
      <NotificationDropdown />
      <NineDotMenu />
      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
