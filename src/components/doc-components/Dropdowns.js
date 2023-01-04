import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
<Dropdown>
  <Dropdown.Toggle variant="falcon-default">
    Dropdown
  </Dropdown.Toggle>
  <Dropdown.Menu className='py-2'>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
`;
const dropdownBtnCode = `
<DropdownButton id="dropdown-basic-button" title="Dropdown button" variant='falcon-default'>
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
</DropdownButton>
`;

const btnVariantCode = `
<>
  {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger', 'Light', 'Dark'].map(
    (variant) => (
      <DropdownButton
        as={ButtonGroup}
        key={variant}
        id={'dropdown-variants-' + variant}
        variant={variant.toLowerCase()}
        title={variant}
        className='me-2 mb-2'
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ),
  )}
</>
`;

const splitBtnCode = `
<>
  {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger', 'Light', 'Dark'].map(
    (variant) => (
      <SplitButton
        as={ButtonGroup}
        key={variant}
        id={'dropdown-variants-' + variant}
        variant={variant.toLowerCase()}
        title={variant}
        className='me-2 mb-2'
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    ),
  )}
</>
`;

const sizingCode = `
<>
  <div className="mb-2">
    <DropdownButton
      as={ButtonGroup}
      size='lg'
      title="Large Button"
      className='me-2 mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>

    <DropdownButton
      as={ButtonGroup}
      title="Regular Button"
      className='me-2 mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>

    <DropdownButton
      as={ButtonGroup}
      size='sm'
      title="Small Button"
      className='mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
  </div>
  <hr/>
  <div className="mb-2">
    <SplitButton
      as={ButtonGroup}
      size='lg'
      title="Large Split Button"
      className='me-2 mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>

    <SplitButton
      as={ButtonGroup}
      title="Regular Split Button"
      className='me-2 mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>

    <SplitButton
      as={ButtonGroup}
      size='sm'
      title="Small Split Button"
      className='mb-1'
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </SplitButton>
  </div>
</>
`;

const directionCode = `
<>
  <div className="mb-2">
    {['up', 'down', 'start', 'end'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        drop={direction}
        variant="secondary"
        title={'Drop' + direction }
        className='me-2 mb-1'
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ))}
  </div>
  <hr />
  <div>
    {['up', 'down', 'start', 'end'].map((direction) => (
      <SplitButton
        key={direction}
        drop={direction}
        variant="secondary"
        title={'Drop' + direction }
        className='me-2 mb-1'
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    ))}
  </div>
</>
`;

const dropdownItemsCode = `
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
`;

const menuAlignMentCode = `
<DropdownButton
  align="end"
  title="Right-aligned menu"
  id="dropdown-menu-align-right"
>
  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
</DropdownButton>
`;

const headerCode = `
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.Header>Dropdown Header</Dropdown.Header>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
`;
const dividerCode = `
<DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>
`;

const responsiveAlignmentCode = `
<>
  <div>
    <DropdownButton
      as={ButtonGroup}
      align={{ lg: 'end' }}
      title="Left-aligned but right aligned when large screen"
      id="dropdown-menu-align-responsive-1"
    >
      <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
      <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
    </DropdownButton>
  </div>
  <div className="mt-2">
    <SplitButton
      align={{ lg: 'start' }}
      title="Right-aligned but left aligned when large screen"
      id="dropdown-menu-align-responsive-2"
    >
      <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
      <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
    </SplitButton>
  </div>
</>
`;

const Dropdowns = () => (
  <>
    <PageHeader
      title="Dropdowns"
      description="Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/dropdowns`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Dropdowns on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <Row className="g-3">
      <Col>
        <FalconComponentCard>
          <FalconComponentCard.Header title="Example" light={false} />
          <FalconComponentCard.Body code={exampleCode} language="jsx" />
        </FalconComponentCard>
      </Col>
      <Col>
        <FalconComponentCard>
          <FalconComponentCard.Header title="Dropwdown Button" light={false} />
          <FalconComponentCard.Body code={dropdownBtnCode} language="jsx" />
        </FalconComponentCard>
      </Col>
    </Row>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Button Variant" light={false} />
      <FalconComponentCard.Body code={btnVariantCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Split Button Code" light={false} />
      <FalconComponentCard.Body code={splitBtnCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Sizing" light={false} />
      <FalconComponentCard.Body code={sizingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Directions" light={false} />
      <FalconComponentCard.Body code={directionCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Dropdown items" light={false}>
        <p className="mt-2 mb-2">
          Historically dropdown menu contents had to be links, but that’s no
          longer the case with v4. Now you can optionally use
          <code>&lt;button&gt;</code> elements in your dropdowns instead of just{' '}
          <code>&lt;a&gt;</code>s.
        </p>
        <p className="mb-0">
          You can also create non-interactive dropdown items with{' '}
          <code>&lt;Dropdown.ItemText&gt;</code>. Feel free to style further
          with custom CSS or text utilities.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={dropdownItemsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Menu alignment" light={false}>
        <p className="mt-2 mb-0">
          By default, a dropdown menu is aligned to the left, but you can switch
          it by passing <code>align="end"</code> to a{' '}
          <code>&lt;Dropdown&gt;</code>, <code>&lt;DropdownButton&gt;</code>, or{' '}
          <code>&lt;SplitButton&gt;</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={menuAlignMentCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Responsive alignment" light={false}>
        <p className="mt-2 mb-0">
          If you want to use responsive menu alignment, pass an object
          containing a breakpoint to the
          <code>align</code> prop on the <code>&lt;DropdownMenu&gt;</code>,{' '}
          <code>&lt;DropdownButton&gt;</code>, or{' '}
          <code>&lt;SplitButton&gt;</code>. You can specify <code>start</code>{' '}
          or <code>end</code> for the various breakpoints.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={responsiveAlignmentCode} language="jsx" />
    </FalconComponentCard>

    <Row className="g-3 mb-3">
      <Col>
        <FalconComponentCard>
          <FalconComponentCard.Header title="Dropwdown Headers" light={false} />
          <FalconComponentCard.Body code={headerCode} language="jsx" />
        </FalconComponentCard>
      </Col>
      <Col>
        <FalconComponentCard>
          <FalconComponentCard.Header title="Dropwdown Divider" light={false} />
          <FalconComponentCard.Body code={dividerCode} language="jsx" />
        </FalconComponentCard>
      </Col>
    </Row>
  </>
);

export default Dropdowns;
