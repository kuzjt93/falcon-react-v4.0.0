import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Card, Dropdown } from 'react-bootstrap';
import AuthCornerImage from 'assets/img/illustrations/authentication-corner.png';
import { breakpoints, capitalize } from 'helpers/utils';
import { topNavbarBreakpoint } from 'config';

const NavbarDropdown = ({ title, children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Dropdown
      show={dropdownOpen}
      onToggle={() => setDropdownOpen(!dropdownOpen)}
      onMouseOver={() => {
        let windowWidth = window.innerWidth;
        if (windowWidth >= breakpoints[topNavbarBreakpoint]) {
          setDropdownOpen(true);
        }
      }}
      onMouseLeave={() => {
        let windowWidth = window.innerWidth;
        if (windowWidth >= breakpoints[topNavbarBreakpoint]) {
          setDropdownOpen(false);
        }
      }}
    >
      <Dropdown.Toggle as={Link} to="#!" className="nav-link fw-semi-bold">
        {capitalize(title)}
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-card mt-0 dropdown-caret">
        {/* {children} */}
        <Card
          className={classNames('shadow-none dark__bg-1000', {
            'navbar-card-app': title === 'app',
            'navbar-card-pages': title === 'pages',
            'navbar-card-components': title === 'modules'
          })}
        >
          <Card.Body
            className={classNames('scrollbar max-h-dropdown', {
              'p-0 py-2': title === 'dashboard' || title === 'documentation'
            })}
          >
            {title !== 'dashboard' && title !== 'documentation' && (
              <img
                src={AuthCornerImage}
                alt=""
                className="img-dropdown"
                width={130}
              />
            )}
            {children}
          </Card.Body>
        </Card>
      </Dropdown.Menu>
    </Dropdown>
  );
};

NavbarDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default NavbarDropdown;
