import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const lightCode = `
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="me-auto my-2 my-lg-0">
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
        <div className='py-2 bg-light rounded-3'>
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </div>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="light">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
`;

const darkCode = `
<Navbar bg="dark" variant="dark" expand="lg" className='light'>
  <Navbar.Brand href="#">Navbar</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav className="me-auto my-2 my-lg-0">
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
        <div className='py-2 bg-light dark__bg-1000 rounded-3'>
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </div>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="light">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
`;

const Navbars = () => (
  <>
    <PageHeader
      title="Navbar"
      description="A powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more"
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/navbar`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Navbar on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Navbar Light" light={false} />
      <FalconComponentCard.Body code={lightCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Navbar Dark" light={false} />
      <FalconComponentCard.Body code={darkCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Navbars;
