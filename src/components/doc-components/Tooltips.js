import React from 'react';
import { Button, Tab } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const overlayExampleCode = `
function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}
`;
const overlayTriggerCode = `
<OverlayTrigger
  overlay={
    <Tooltip id="overlay-trigger-example">
      My Tooltip
    </Tooltip>
  }
>
  <Button>Click me!</Button>
</OverlayTrigger>
`;

const placementCode = `
<>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip id={'tooltip-'+ placement}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button variant="secondary" className='mb-1 me-2'>Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</>
`;

const Tooltips = () => (
  <>
    <PageHeader
      title="Tooltips"
      description="A tooltip component for a more stylish alternative to that anchor tag title attribute."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/overlays/#tooltips`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Tooltips on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Overview" noPreview />
      <FalconComponentCard.Body>
        <p>
          The <code>&lt;Tooltip&gt;</code> component do not position themselves.
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

    <FalconComponentCard multiSections>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header title="Example" light={false}>
          <p className="mb-0 mt-2">
            You can pass the <code>Overlay</code> injected props directly to the
            Tooltip component.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={overlayExampleCode} language="jsx" />
      </Tab.Container>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header light={false}>
          <p className="mb-0 mt-2">
            Or pass a Tooltip element to <code>OverlayTrigger</code> instead.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={overlayTriggerCode} language="jsx" />
      </Tab.Container>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Placement" light={false}>
        <p className="mb-0 mt-2">
          Use <code>placement</code> prop to set your <code>Tooltip</code>'s
          position.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={placementCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Tooltips;
