import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import IconButton from 'components/common/IconButton';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import ButtonGroup from './ButtonGroup';
import FalconCloseButton from 'components/common/FalconCloseButton';
import Flex from 'components/common/Flex';
import FalconEditor from 'components/common/FalconEditor';
import vsLight from 'prism-react-renderer/themes/vsLight';

const faconBtnsCode = `
<>
  <Button variant='falcon-primary' className='me-2 mb-1'>Primary</Button>
  <Button variant='falcon-success' className='me-2 mb-1'>Success</Button>
  <Button variant='falcon-info' className='me-2 mb-1'>Info</Button>
  <Button variant='falcon-warning' className='me-2 mb-1'>Warning</Button>
  <Button variant='falcon-danger' className='me-2 mb-1'>Danger</Button>
  <Button variant='falcon-default' className='me-2 mb-1'>Default</Button>
</>
`;
const solidBtnsCode = `
<>
  <Button variant='primary' className='me-2 mb-1'>Primary</Button>
  <Button variant='secondary ' className='me-2 mb-1'>Secondary</Button>
  <Button variant='success' className='me-2 mb-1'>Success</Button>
  <Button variant='info' className='me-2 mb-1'>Info</Button>
  <Button variant='warning' className='me-2 mb-1'>Warning</Button>
  <Button variant='danger' className='me-2 mb-1'>Danger</Button>
  <Button variant='light' className='me-2 mb-1'>Light</Button>
  <Button variant='dark' className='me-2 mb-1'>Dark</Button>
  <Button variant='link' className='me-2 mb-1'>Link</Button>
</>
`;
const outlineBtnsCode = `
<>
  <Button variant="outline-primary" className="mb-1">Primary</Button>{' '}
  <Button variant="outline-secondary" className="mb-1">Secondary</Button>{' '}
  <Button variant="outline-success" className="mb-1">Success</Button>{' '}
  <Button variant="outline-warning" className="mb-1">Warning</Button>{' '}
  <Button variant="outline-danger" className="mb-1">Danger</Button>{' '}
  <Button variant="outline-info" className="mb-1">Info</Button>{' '}
  <Button variant="outline-light" className="mb-1">Light</Button>{' '}
  <Button variant="outline-dark" className="mb-1">Dark</Button>
</>
`;
const btnSizesCode = `
<>
  <Button variant="secondary" size="sm">Small</Button>{' '}
  <Button variant="secondary">Regular</Button>{' '}
  <Button variant="secondary" size="lg">Large</Button>{' '}
</>
`;
const iconBtnCode = `
<>
  <IconButton
    className="me-2 mb-1"
    variant="falcon-default"
    size="sm"
    icon="plus"
    transform="shrink-3"
  >
    Small
  </IconButton>
  <IconButton className="me-2 mb-1" variant="falcon-default" icon="plus" transform="shrink-3">
    Regular
  </IconButton>
  <IconButton className="mb-1" variant="falcon-default" size="lg" icon="plus" transform="shrink-3">
    Large
  </IconButton>
  <hr />
  <IconButton variant="primary" className="me-2 mb-1" icon="plus" transform="shrink-3">
    Regular
  </IconButton>
  <IconButton variant="outline-primary" className="mb-1" icon="plus" transform="shrink-3">
    Outline
  </IconButton>
  <hr />
  <IconButton variant="primary" icon="trash" className="mb-1" iconAlign="right" transform="shrink-3">
    Delete
  </IconButton>
</>
`;

const roundedBtnCode = `
<>
  <Button className="me-2" variant="falcon-default" className="rounded-pill me-1 mb-1">
    Example
  </Button>
  <IconButton
    className="rounded-pill me-1 mb-1"
    variant="falcon-default"
    icon="align-left"
    transform="shrink-3"
  >
    Icon Left
  </IconButton>
  <IconButton
    className="rounded-pill me-1 mb-1"
    variant="falcon-default"
    icon="align-right"
    iconAlign="right"
    transform="shrink-3"
  >
    Icon Right
  </IconButton>
  <Button variant="outline-primary" className="rounded-pill me-1 mb-1">
    Outline
  </Button>
  <hr />
  <Button variant="falcon-default" className="rounded-pill me-2 mb-1" size="sm">
    Capsule Small
  </Button>
  <Button variant="falcon-default" className="rounded-pill me-2 mb-1">
    Capsule Regular
  </Button>
  <Button variant="falcon-default" className="rounded-pill me-2 mb-1" size="lg">
    Capsule large
  </Button>
</>
`;

const blockBtnCode = `
<div className="d-grid gap-2">
  <Button variant="primary">
    Block button
  </Button>
  <Button variant="secondary">
    Block button
  </Button>
</div>
`;

const activeStateCode = `
<>
  <Button variant="primary" className='me-2' active>
    Primary button
  </Button>
  <Button variant="secondary" active>
    Button
  </Button>
</>
`;
const disableStateCode = `
<>
  <Button variant="primary" className='me-2' disabled>
    Primary button
  </Button>
  <Button variant="secondary" disabled>
    Button
  </Button>
</>
`;
const loadingStateCode = `
function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button variant="primary" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
      {isLoading ? 'Loading…' : 'Click to load'}
    </Button>
  );
}`;

const closeBtnCode = `<>
  <CloseButton aria-label="Hide"/>
  <CloseButton disabled aria-label="Hide"/>
</>`;

const closeBtnWhiteCode = `<div className="bg-1000 light p-3">
  <CloseButton variant="white" aria-label="Hide"/>
  <CloseButton variant="white" disabled aria-label="Hide"/>
</div>`;

const falconCloseBtnCode = `
<>
  <FalconCloseButton
    size='lg'
    className='me-2'
  />
  <FalconCloseButton
    noOutline
    className='me-2'
  />
  <FalconCloseButton
    size='sm'
  />
</>
`;

const closeBtnPropTypesCode = `
  FalconCloseButton.propTypes = {
    size: PropTypes.oneOf(['sm', 'lg']),
    noOutline: PropTypes.bool,
    variant: PropTypes.string, // use 'white' for white variant
    onClick: PropTypes.func,
    className: PropTypes.string
  };
`;

const iconBtnPropTypesCode = `
  IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    iconAlign: PropTypes.oneOf(['left', 'right']), // default: 'left'
    iconClassName: PropTypes.string,
    transform: PropTypes.string
  };
`;

const Buttons = () => (
  <>
    <PageHeader
      title="Buttons"
      description="Use Falcon custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/buttons`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Buttons on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Falcon Buttons" light={false} />
      <FalconComponentCard.Body code={faconBtnsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Solid Buttons" light={false} />
      <FalconComponentCard.Body code={solidBtnsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Outline Buttons" light={false}>
        <p className="mb-0">
          For a lighter touch, Buttons also come in <code>outline-* </code>
          variants with no background color.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={outlineBtnsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Close Button" light={false}>
        <p className="mt-2 mb-0">
          To ensure the maximum accessibility for Close Button components, it is
          recommended that you provide relevant text for screen readers. The
          example below provides an example of accessible usage of this
          component by way of the
          <code> aria-label </code> property.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={closeBtnCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Close Buttons white variant"
        light={false}
      >
        <p className="mt-2 mb-0">
          Change the default dark color to white using{' '}
          <code>variant="white"</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={closeBtnWhiteCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Falcon Close Button" light={false}>
        <p className="mb-0">
          Falcon close button is properly optimized for both light and dark
          mode.To use falcon close button wrap{' '}
          <code> &lt;FlaconCloseButton&gt; </code> inside a{' '}
          <code> position-relative </code> element.
        </p>
      </FalconComponentCard.Header>
      <FalconEditor
        code={closeBtnPropTypesCode}
        language="jsx"
        hidePreview
        theme={vsLight}
        className="bg-light dark__bg-100"
      />
      <FalconComponentCard.Body
        code={falconCloseBtnCode}
        language="jsx"
        scope={{ FalconCloseButton, Flex }}
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Button Sizes" light={false}>
        <p>
          Fancy larger or smaller buttons? Add <code>size="lg"</code>,
          <code>size="sm"</code> for additional sizes.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={btnSizesCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Icon Buttons" light={false} />
      <FalconEditor
        code={iconBtnPropTypesCode}
        language="jsx"
        hidePreview
        theme={vsLight}
        className="bg-100 dark__bg-light"
      />
      <FalconComponentCard.Body
        code={iconBtnCode}
        language="jsx"
        scope={{ FontAwesomeIcon, IconButton }}
      ></FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Capsule Buttons" light={false} />
      <FalconComponentCard.Body
        code={roundedBtnCode}
        language="jsx"
        scope={{ FontAwesomeIcon, IconButton }}
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Block buttons" light={false}>
        <p className="mb-0">
          Create responsive stacks of full-width, “block buttons” like those in
          Bootstrap 4 with a mix of our display and gap utilities.{' '}
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={blockBtnCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Active state" light={false}>
        <p className="mb-0">
          To set a button's active state simply set the component's{' '}
          <code> active</code> prop.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={activeStateCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Disabled state" light={false}>
        <p className="mb-0">
          Make buttons look inactive by adding the <code>disabled</code> prop
          to.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={disableStateCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Button loading state" light={false}>
        <p className="mb-0">
          When activating an asynchronous action from a button it is a good UX
          pattern to give the user feedback as to the loading state, this can
          easily be done by updating your <code>&lt;Button/&gt;</code>s props
          from a state change like below.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={loadingStateCode} language="jsx" />
    </FalconComponentCard>
    <ButtonGroup />
  </>
);

export default Buttons;
