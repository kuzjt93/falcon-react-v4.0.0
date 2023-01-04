import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}`;

const placementCode = `
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['start', 'end', 'bottom'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
render(<Example />)`;

const backdropCode = `
const options = [
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  },
  {
    name: 'Enable backdrop (default)',
    scroll: false,
    backdrop: true,
  },
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
];

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 mb-1">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} />
      ))}
    </>
  );
}

render(<Example />);
`;

const Offcanvas = () => (
  <>
    <PageHeader
      title="Offcanvas"
      description="Build hidden sidebars into your project for navigation, shopping carts, and more."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/offcanvas`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Offcanvas on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false}>
        <p className="mb-0 mt-2">
          Offcanvas includes support for a header with a close button and an
          optional body class for some initial padding. We suggest that you
          include offcanvas headers with dismiss actions whenever possible, or
          provide an explicit dismiss action.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Placement" light={false}>
        <p className="mb-0 mt-2">
          Offcanvas supports a few different placements:
        </p>
        <ul>
          <li>
            <code>start</code> places offcanvas on the left of the viewport
          </li>
          <li>
            <code>end</code> places offcanvas on the right of the viewport
          </li>
          <li>
            <code>bottom</code> places offcanvas on the bottom of the viewport
          </li>
        </ul>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={placementCode} language="jsx" noInline />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Backdrop" light={false}>
        <p className="mb-0 mt-2">
          Scrolling the <code>&lt;body&gt;</code> element is disabled when an
          offcanvas and its backdrop are visible. Use the <code>scroll</code>{' '}
          prop to toggle <code>&lt;body&gt;</code> scrolling and the{' '}
          <code>backdrop</code> prop to toggle the backdrop.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={backdropCode} language="jsx" noInline />
    </FalconComponentCard>
  </>
);

export default Offcanvas;
