import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button>Click me to see</Button>
  </OverlayTrigger>
);

render(<Example />);`;

const placementCode = `
<>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={'popover-positioned-' + placement}>
          <Popover.Body>
          {'Popover ' + placement}
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="secondary" className='me-1 mb-1'>Popover on {placement}</Button>
    </OverlayTrigger>
  ))}
</>
`;

const disableElCode = `
<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
  <span className="d-inline-block">
    <Button disabled style={{ pointerEvents: 'none' }}>
      Disabled button
    </Button>
  </span>
</OverlayTrigger>
`;

const changingContainersCode = `
function Example() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Holy guacamole!</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Popover bottom</Popover.Header>
          <Popover.Body>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
`;

const Popovers = () => (
  <>
    <PageHeader
      title="Popovers"
      description="Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/overlays/#popovers`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Popovers on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Overview" noPreview />
      <FalconComponentCard.Body>
        <p>
          The <code>&lt;Popover&gt;</code> component do not position themselves.
          Instead the <code>&lt;Overlay&gt;</code> (or{' '}
          <code>&lt;OverlayTrigger&gt;</code>) components, inject{' '}
          <code>ref</code> and <code>style</code> props.
        </p>
        <Button
          href={`${reactBootstrapDocsUrl}/components/overlays`}
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Learn more about Overlays
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Examples" light={false} />
      <FalconComponentCard.Body code={exampleCode} language="jsx" noInline />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Placement" light={false}>
        <p className="mt-2 mb-0">
          As with <code>&lt;Tooltip&gt;</code>s, you can control the placement
          of the Popover.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={placementCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Disabled elements" light={false}>
        <p className="mt-2 mb-0">
          Elements with the <code>disabled</code> attribute aren’t interactive,
          meaning users cannot hover or click them to trigger a popover (or
          tooltip). As a workaround, you’ll want to trigger the overlay from a
          wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and
          override the <code>pointer-events</code> on the disabled element.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={disableElCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Changing containers" light={false}>
        <p className="mt-2 mb-0">
          You can specify a <code>container</code> to control the DOM element
          the overlay is appended to. This is especially useful when styles
          conflict with your Overlay's.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={changingContainersCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Popovers;
