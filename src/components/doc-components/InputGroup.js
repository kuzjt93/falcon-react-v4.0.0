import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
<>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
  </InputGroup>

  <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon3">
      https://example.com/users/
    </InputGroup.Text>
    <FormControl id="basic-url" aria-describedby="basic-addon3" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
  </InputGroup>

  <InputGroup>
    <InputGroup.Text>With textarea</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
</>
`;

const sizingCode = `
<>
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup size="lg">
    <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
</>
`;

const checkboxesCode = `
<>
  <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup>
  <InputGroup>
    <InputGroup.Radio aria-label="Radio button for following text input" />
    <FormControl aria-label="Text input with radio button" />
  </InputGroup>
</>
`;

const multipleInputCode = `
<InputGroup>
  <InputGroup.Text>First and last name</InputGroup.Text>
  <FormControl aria-label="First name" />
  <FormControl aria-label="Last name" />
</InputGroup>
`;
const multipleAddonsCode = `
<>
  <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
  </InputGroup>
  <InputGroup>
    <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
    <InputGroup.Text>$</InputGroup.Text>
    <InputGroup.Text>0.00</InputGroup.Text>
  </InputGroup>
</>
`;
const buttonAddOnsCode = `
<>
  <InputGroup className="mb-3">
    <Button variant="outline-secondary" id="button-addon1">
      Button
    </Button>
    <FormControl
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button>
  </InputGroup>

  <InputGroup className="mb-3">
    <Button variant="outline-secondary">Button</Button>
    <Button variant="outline-secondary">Button</Button>
    <FormControl aria-label="Example text with two button addons" />
  </InputGroup>

  <InputGroup>
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username with two button addons"
    />
    <Button variant="outline-secondary">Button</Button>
    <Button variant="outline-secondary">Button</Button>
  </InputGroup>
</>
`;

const buttonsWithDropdowsCode = `
<>
  <InputGroup className="mb-3">
    <DropdownButton
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-label="Text input with dropdown button" />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" />

    <DropdownButton
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
      align="end"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>

  <InputGroup>
    <DropdownButton
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-3"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-label="Text input with 2 dropdown buttons" />
    <DropdownButton
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-4"
      align="end"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
  </InputGroup>
</>
`;

const segmentedButtonsCode = `
<>
  <InputGroup className="mb-3">
    <SplitButton
      variant="outline-secondary"
      title="Action"
      id="segmented-button-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </SplitButton>
    <FormControl aria-label="Text input with dropdown button" />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" />
    <SplitButton
      variant="outline-secondary"
      title="Action"
      id="segmented-button-dropdown-2"
      alignRight
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </SplitButton>
  </InputGroup>
</>
`;

const InputGroup = () => (
  <>
    <PageHeader
      title="InputGroup"
      description="Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/forms/input-group`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        InputGroup on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Basic example" light={false}>
        <p className="mt-2 mb-0">
          Place one add-on or button on either side of an input. You may also
          place one on both sides of an input. Remember to place{' '}
          <code>&lt;label&gt;</code>s outside the input group.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Sizing" light={false}>
        <p className="mt-2 mb-0">
          Add the relative form sizing classes to the <code>InputGroup</code>{' '}
          and contents within will automatically resize—no need for repeating
          the form control size classes on each element.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={sizingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Checkboxes and radios" light={false}>
        <p className="mt-2 mb-0">
          Use the <code>InputGroup.Radio</code> or{' '}
          <code>InputGroup.Checkbox</code> to add options to an input group.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={checkboxesCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Multiple inputs" light={false}>
        <p className="mt-2 mb-0">
          While multiple inputs are supported visually, validation styles are
          only available for input groups with a single input.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={multipleInputCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Multiple addons" light={false}>
        <p className="mt-2 mb-0">
          Multiple add-ons are supported and can be mixed with checkbox and
          radio input versions.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={multipleAddonsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Button addons" light={false} />
      <FalconComponentCard.Body code={buttonAddOnsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Buttons with Dropdowns"
        light={false}
      />
      <FalconComponentCard.Body code={buttonsWithDropdowsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Segmented buttons" light={false} />
      <FalconComponentCard.Body code={segmentedButtonsCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default InputGroup;
