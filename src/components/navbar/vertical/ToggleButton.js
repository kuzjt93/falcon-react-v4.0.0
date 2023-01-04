import React, { useContext } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import AppContext from 'context/Context';

const renderTooltip = props => (
  <Tooltip id="button-tooltip" {...props}>
    Toggle Navigation
  </Tooltip>
);

const ToggleButton = () => {
  const {
    config: { isNavbarVerticalCollapsed, isFluid, isRTL },
    setConfig
  } = useContext(AppContext);

  const handleClick = () => {
    document
      .getElementsByTagName('html')[0]
      .classList.toggle('navbar-vertical-collapsed');
    setConfig('isNavbarVerticalCollapsed', !isNavbarVerticalCollapsed);
  };

  return (
    <OverlayTrigger
      placement={
        isFluid ? (isRTL ? 'bottom' : 'right') : isRTL ? 'bottom' : 'left'
      }
      overlay={renderTooltip}
    >
      <div className="toggle-icon-wrapper">
        <Button
          variant="link"
          className="navbar-toggler-humburger-icon navbar-vertical-toggle"
          id="toggleNavigationTooltip"
          onClick={handleClick}
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </Button>
      </div>
    </OverlayTrigger>
  );
};

export default ToggleButton;
