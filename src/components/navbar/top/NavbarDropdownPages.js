import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Row, Col } from 'react-bootstrap';
import { getFlatRoutes } from 'helpers/utils';
import NavbarNavLink from './NavbarNavLink';

const NavbarDropdownPages = ({ items }) => {
  const routes = getFlatRoutes(items);

  return (
    <>
      <Row>
        <Col xs={6} xxl={3}>
          <Nav className="flex-column">
            <NavbarNavLink title="Simple Auth" />
            {routes.authentication.slice(0, 7).map(route => (
              <NavbarNavLink key={route.name} route={route} />
            ))}
          </Nav>
        </Col>
        <Col xs={6} xxl={3}>
          <Nav className="flex-column">
            <NavbarNavLink title="Card Auth" />
            {routes.authentication.slice(7, 14).map(route => (
              <NavbarNavLink key={route.name} route={route} />
            ))}
          </Nav>
        </Col>
        <Col xs={6} xxl={3}>
          <Nav className="flex-column">
            <NavbarNavLink title="Split Auth" />
            {routes.authentication.slice(14, 21).map(route => (
              <NavbarNavLink key={route.name} route={route} />
            ))}
          </Nav>
        </Col>
        <Col xs={6} xxl={3}>
          <Nav className="flex-column">
            <NavbarNavLink title="Other Auth" />
            {routes.authentication.slice(21, 23).map(route => (
              <NavbarNavLink key={route.name} route={route} />
            ))}
            <NavbarNavLink title="Miscellaneous" />
            {routes.miscellaneous.map(route => (
              <NavbarNavLink key={route.name} route={route} />
            ))}
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col xs={6} xxl={3}>
          <Nav className="flex-column">
            <NavbarNavLink title="User" />
            {routes.user.map(route => (
              <NavbarNavLink key={route.name} route={route} />
            ))}
          </Nav>
        </Col>
        <Col xs={6} xxl={3}>
          <Nav className="flex-column">
            <NavbarNavLink title="Pricing" />
            {routes.pricing.map(route => (
              <NavbarNavLink key={route.name} route={route} />
            ))}
          </Nav>
        </Col>
        <Col xs={6} xxl={3}>
          <Nav className="flex-column">
            <NavbarNavLink title="Errors" />
            {routes.errors.map(route => (
              <NavbarNavLink key={route.name} route={route} />
            ))}
          </Nav>
        </Col>
        <Col xs={6} xxl={3}>
          <Nav className="flex-column">
            <NavbarNavLink title="Others" />
            {routes.unTitled.map(route => (
              <NavbarNavLink key={route.name} route={route} />
            ))}
          </Nav>
        </Col>
      </Row>
    </>
  );
};

NavbarDropdownPages.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      name: PropTypes.string.isRequired,
      to: PropTypes.string,
      children: PropTypes.array
    }).isRequired
  ).isRequired
};

export default NavbarDropdownPages;
