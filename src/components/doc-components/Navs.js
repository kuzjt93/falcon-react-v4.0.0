import React from 'react';
import { Button, Tab } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const horizontalCode = `
<Nav
  onSelect={(selectedKey) => alert('selected ' + selectedKey)}
>
  <Nav.Item>
    <Nav.Link>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const alignmentCode = `
<>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link>Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
  <p className="text-center mt-4 mb-4">Or right-aligned</p>
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link>Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
</>
`;

const verticalCode = `
<Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Active</Nav.Link>
  <Nav.Link eventKey="link-1">Link</Nav.Link>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>
`;

const pillsCode = `
<Nav variant="pills" defaultActiveKey="link-1">
  <Nav.Item>
    <Nav.Link  eventKey="link-1">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const fillsCode = `
<Nav fill variant="pills" defaultActiveKey="link-1">
  <Nav.Item>
    <Nav.Link eventKey="link-1">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const justifyCode = `
<Nav justify variant="pills" defaultActiveKey="link-1">
  <Nav.Item>
    <Nav.Link eventKey="link-1">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
`;

const dropdownsCode = `
function NavDropdownExample() {
  const handleSelect = (eventKey) => alert('selected' + eventKey);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}
`;

const Navs = () => (
  <>
    <PageHeader
      title="Navs"
      description="Documentation and examples for how to use React-Bootstrap’s included navigation components."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/navs`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Navs on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Horizontal" light={false} />
      <FalconComponentCard.Body code={horizontalCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Alignment and orientation"
        light={false}
      >
        <p className="mt-2 mb-0">
          You can control the the direction and orientation of the
          <code>Nav</code> by making use of the{' '}
          <a href="https://getbootstrap.com/docs/5.0/layout/grid/#horizontal-alignment">
            flexbox layout
          </a>{' '}
          utility classes. By default, navs are left-aligned, but that is easily
          changed to center or right-aligned.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={alignmentCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Vertical" light={false}>
        <p className="mt-2 mb-0">
          Create stacked navs by changing the flex item direction with the
          <code>.flex-column</code> class, or your own css. You can even use the
          responsive versions to stack in some viewports but not others (e.g.
          <code>.flex-sm-column</code>).
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={verticalCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Pills" light={false}>
        <p className="mt-2 mb-0">An alternative visual variant.</p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={pillsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard multiSections>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header title="Fill and justify" light={false}>
          <p className="mt-2 mb-0">
            Force the contents of your nav to extend the full available width.
            To proportionately fill the space use <code>fill</code>. Notice that
            the nav is the entire width but each nav item is a different size.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={fillsCode} language="jsx" />
      </Tab.Container>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header>
          <p className="mt-2 mb-0">
            If you want each NavItem to be the same size use{' '}
            <code>justify</code>.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={justifyCode} language="jsx" />
      </Tab.Container>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Dropdowns" light={false} />
      <FalconComponentCard.Body code={dropdownsCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Navs;
