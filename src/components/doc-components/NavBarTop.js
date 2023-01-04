import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeader from 'components/common/PageHeader';
import FalconCardHeader from 'components/common/FalconCardHeader';
import AppContext from 'context/Context';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const NavBarTop = () => {
  const {
    config: { navbarPosition },
    setConfig
  } = useContext(AppContext);

  return (
    <>
      <PageHeader
        title="Navbar Top"
        description="Navbar Top is a different user friendly layout system in Falcon. You can start developing with Navbar Top layout with the starter page."
        className="mb-3"
      >
        <Button
          onClick={() =>
            setConfig(
              'navbarPosition',
              navbarPosition === 'vertical' ? 'top' : 'vertical'
            )
          }
          variant="link"
          size="sm"
          className="ps-0"
        >
          Toggle Navbar Top
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>
      <Card className="mb-3">
        <FalconCardHeader title="Supported Content" light={false} />
        <Card.Body className="bg-light">
          <p>
            Falcon Navbar Top support all of
            <a href={`${reactBootstrapDocsUrl}/components/navbar/`}>
              {' '}
              React-Bootstrap Navbar{' '}
            </a>
            components. <code>Navbar</code>, <code>Navbar.Toggle</code>,{' '}
            <code>Navbar.Brand</code>,<code>Navbar.Collapse</code>,
            <code>Nav</code> all of those sub-components are used in Navbar Top.
          </p>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <FalconCardHeader title="Behaviors" light={false} />
        <Card.Body className="bg-light">
          <p>
            Falcon Navbar Top uses
            <a href={`${reactBootstrapDocsUrl}/components/navbar/`}>
              {' '}
              React-Bootstrap Navbar{' '}
            </a>
            responsive behaviors and all other behavior they support. The
            dropdown menu display onClick by default on react-bootstrap. Falcon
            navbar top dropdown menu display on hover. To achieve this behavior,
            we use react <code>onMouseOver</code> Event and{' '}
            <code>onMouseLeave</code> event at{' '}
            <code>src/components/navbar/NavbarDropdown.js</code> jsx tag.
          </p>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <FalconCardHeader title="Color Schemes" light={false} />
        <Card.Body className="bg-light">
          <p>
            Changing the color of Falcon Navbar Top is very easy. Falcon uses
            React-Bootstrap's default <code> variant='light' </code> for navabr
            component. You can use other background-color utilitie with{' '}
            <code>bg</code> prop to update the Navbar. Learn more about
            React-Bootstrap Navbar{' '}
            <a
              href={`${reactBootstrapDocsUrl}/components/navbar/#navbars-colors`}
              target="_blank"
              rel="noreferrer"
            >
              Color Schemes.
            </a>
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default NavBarTop;
