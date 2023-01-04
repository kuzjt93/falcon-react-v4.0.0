import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
<ButtonGroup aria-label="Basic example">
<Button variant="secondary">Left</Button>
<Button variant="secondary">Middle</Button>
<Button variant="secondary">Right</Button>
</ButtonGroup>
`;
const btnToolbarCode = `
<ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="me-2 mb-1" aria-label="First group">
    <Button variant="secondary">1</Button>
    <Button variant="secondary">2</Button>
    <Button variant="secondary">3</Button>
    <Button variant="secondary">4</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2 mb-1" aria-label="Second group">
    <Button variant="secondary">5</Button>
    <Button variant="secondary">6</Button>
    <Button variant="secondary">7</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2 mb-1" aria-label="Third group">
    <Button variant="secondary">8</Button>
  </ButtonGroup>
</ButtonToolbar>
`;

const inputGroupExampleCode = `
<>
  <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    <ButtonGroup className="me-2 mb-1" aria-label="First group">
      <Button variant="secondary">1</Button>{' '}
      <Button variant="secondary">2</Button>{' '}
      <Button variant="secondary">3</Button>{' '}
      <Button variant="secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
  </ButtonToolbar>

  <ButtonToolbar
    className="justify-content-between"
    aria-label="Toolbar with Button groups"
  >
    <ButtonGroup aria-label="First group" className='mb-1'>
      <Button variant="secondary">1</Button>{' '}
      <Button variant="secondary">2</Button>{' '}
      <Button variant="secondary">3</Button>{' '}
      <Button variant="secondary">4</Button>
    </ButtonGroup>
    <InputGroup>
      <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
      <FormControl
        type="text"
        placeholder="Input group example"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon2"
      />
    </InputGroup>
  </ButtonToolbar>
</>
`;

const sizingCode = `
<>
  <ButtonGroup size="lg" className="me-2 mb-1">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
  </ButtonGroup>
  <ButtonGroup className="me-2 mb-1">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
  </ButtonGroup>
  <ButtonGroup size="sm"  className="me-2 mb-1">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
  </ButtonGroup>
</>
`;

const nestingCode = `
<ButtonGroup>
  <Button variant="secondary">1</Button>
  <Button variant="secondary">2</Button>

  <DropdownButton variant="secondary" as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
`;
const verticalVariationCode = `
<ButtonGroup vertical>
  <Button variant="secondary">Button</Button>
  <Button variant="secondary">Button</Button>

  <DropdownButton  variant="secondary" as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <Button variant="secondary">Button</Button>
  <Button variant="secondary">Button</Button>

  <DropdownButton  variant="secondary" as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>

  <DropdownButton  variant="secondary" as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
`;

const toggleBtnCode = `
function ToggleButtonExample() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  return (
    <>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={radio.value}
            id={\`radio-\${idx}\`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br />
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
      <br />
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={radio.value}
            id={\`radio-\${idx}\`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}
`;

const unControlledCode = `
<>
  <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
    <ToggleButton id="tbg-check-1" value={1}>
      Checkbox 1 (pre-checked)
    </ToggleButton>
    <ToggleButton id="tbg-check-2" value={2}>
      Checkbox 2
    </ToggleButton>
    <ToggleButton id="tbg-check-3" value={3}>
      Checkbox 3 (pre-checked)
    </ToggleButton>
  </ToggleButtonGroup>
  <br />
  <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
    <ToggleButton id="tbg-radio-1" value={1}>
      Radio 1 (pre-checked)
    </ToggleButton>
    <ToggleButton id="tbg-radio-2" value={2}>
      Radio 2
    </ToggleButton>
    <ToggleButton id="tbg-radio-3" value={3}>
      Radio 3
    </ToggleButton>
  </ToggleButtonGroup>
</>
`;
const controlledCode = `
function ToggleButtonGroupControlled() {
  const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * 'handleChange' from 'ToggleButtonGroup'
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton value={1} id='one'>Option 1</ToggleButton>
      <ToggleButton value={2} id='two'>Option 2</ToggleButton>
      <ToggleButton value={3} id='three'>Option 3</ToggleButton>
    </ToggleButtonGroup>
  );
}
`;

const ButtonGroup = () => (
  <>
    <PageHeader
      title="Button Group"
      description="Group a series of buttons together on a single line or stack them in a vertical column."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/button-group`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Button groups on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Basic example" light={false}>
        <p className="mb-0">
          Wrap a series of <code>&lt;Button&gt;</code>s in a{' '}
          <code>&lt;ButtonGroup&gt;</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Button toolbar" light={false}>
        <p className="mb-0">
          Combine sets of <code>&lt;ButtonGroup&gt;</code>s into a{' '}
          <code>&lt;ButtonToolbar&gt;</code> for more complex components.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={btnToolbarCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Button toolbar with input group"
        light={false}
      >
        <p className="mb-0">
          Feel free to mix input groups with button groups in your toolbars.
          Similar to the example above, you’ll likely need some utilities though
          to space things properly.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={inputGroupExampleCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Sizing" light={false}>
        <p className="mb-0">
          Instead of applying button sizing props to every button in a group,
          just add <code>size </code> prop to the{' '}
          <code>&lt;ButtonGroup&gt;</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={sizingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Nesting" light={false}>
        <p className="mb-0">
          You can place other button types within the
          <code>&lt;ButtonGroup&gt;</code> like{' '}
          <code>&lt;DropdownButton&gt;</code>s.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={nestingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Vertical variation" light={false}>
        <p className="mb-0">
          Make a set of buttons appear vertically stacked rather than
          horizontally, by adding
          <code>vertical</code> to the <code>&lt;ButtonGroup&gt;</code>.
          <strong>Split button dropdowns are not supported here.</strong>
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={verticalVariationCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Checkbox / Radio" light={false}>
        <p className="mb-0">
          Buttons can also be used to style <code>checkbox</code> and
          <code>radio</code> form elements. This is helpful when you want a
          toggle button that works neatly inside an HTML form.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={toggleBtnCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Uncontrolled" light={false}>
        <p className="mb-0">
          For a nicer experience with checked state management use the
          <code>&lt;ToggleButtonGroup&gt;</code> instead of a{' '}
          <code>&lt;ButtonGroup&gt;</code> component. The group behaves as a
          form component, where the <code>value</code> is an array of the
          selected
          <code>value</code>s for a named checkbox group or the single toggled
          <code>value</code> in a similarly named radio group.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={unControlledCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Controlled" light={false} />
      <FalconComponentCard.Body code={controlledCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default ButtonGroup;
