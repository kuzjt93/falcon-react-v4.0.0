import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import FalconCloseButton from 'components/common/FalconCloseButton';
import { Link } from 'react-router-dom';

const exampleCode = `
function DemoModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch demo modal
      </Button>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

`;
const customCloseBtnCode = `
function CustomCloseButtonModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
          <CloseButton
            className="btn btn-circle btn-sm transition-base p-0"
            onClick={() => setModalShow(false)}
          />
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

`;
const staticBackdropCode = `
function StaticBackdropModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
          <FalconCloseButton onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`;

const popoverCode = `
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover Title</Popover.Header>
      <Popover.Body>Popover body content is set in this attribute.</Popover.Body>
    </Popover>
  );

  const tooltip = props => (
    <Tooltip id="basic-tooltip" {...props}>
      Tooltip
    </Tooltip>
  );

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header className="bg-light border-0">
          <Modal.Title>Tooltips and Pophover</Modal.Title>
          <CloseButton
            className="btn btn-circle btn-sm transition-base p-0"
            onClick={handleClose}
          />
        </Modal.Header>
        <Modal.Body className="p-4">
          <h5>Popover in a modal</h5>
          <p>
            This{' '}
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
              <Button variant="secondary">Button</Button>
            </OverlayTrigger>{' '}
            triggers a popover on click.
          </p>

          <h5>Tooltips in a modal</h5>
          <p>
            <OverlayTrigger placement="top" overlay={tooltip}>
              <Link variant="secondary" to='#!'>This link</Link>
            </OverlayTrigger>{' '}
            and{' '}
            <OverlayTrigger placement="top" overlay={tooltip}>
              <Link variant="secondary" to='#!'>that link</Link>
            </OverlayTrigger>{' '}
            have tooltips on hover.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}`;

const fullscreenCode = `
function Example() {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-1" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && 'below ' + v.split('-')[0] }
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Modal</Modal.Title>
          <CloseButton
          className="btn btn-circle btn-sm transition-base p-0"
          onClick={() => setShow(false)}
        />
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
}`;

const sizeCode = `
function Example() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
          <FalconCloseButton onClick={() => setSmShow(false)}/>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
          <FalconCloseButton onClick={() => setLgShow(false)}/>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}`;

const Modals = () => (
  <>
    <PageHeader
      title="Modals"
      description="Add dialogs to your site for lightboxes, user notifications, or completely custom content."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/modal`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Modals on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Example" light={false} />
          <FalconComponentCard.Body code={exampleCode} language="jsx" />
        </FalconComponentCard>
      </Col>
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header
            title="Custom Close Button"
            light={false}
          />
          <FalconComponentCard.Body code={customCloseBtnCode} language="jsx" />
        </FalconComponentCard>
      </Col>
    </Row>
    <FalconComponentCard>
      <FalconComponentCard.Header title="Static backdrop" light={false}>
        <p className="mb-0 mt-2">
          When backdrop is set to static, the modal will not close when clicking
          outside it. Click the button below to try it.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={staticBackdropCode}
        language="jsx"
        scope={{ FalconCloseButton }}
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Tooltips and Popovers" light={false}>
        <p className="mb-0 mt-2">
          <Link to="/components/tooltips">Tooltips</Link> and{' '}
          <Link to="/components/popovers">popovers</Link> can be placed within
          modals as needed. When modals are closed, any tooltips and popovers
          within are also automatically dismissed.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={popoverCode}
        language="jsx"
        scope={{ Link }}
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Optional Sizes" light={false}>
        <p className="mb-0 mt-2">
          You can specify a bootstrap large or small modal by using the{' '}
          <code>size</code> prop.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={sizeCode}
        language="jsx"
        scope={{ FalconCloseButton }}
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Fullscreen Modal" light={false}>
        <p className="mb-0 mt-2">
          You can use the <code>fullscreen</code> prop to make the modal
          fullscreen. Specifying a breakpoint will only set the modal as
          fullscreen <b>below</b> the breakpoint size.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={fullscreenCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Modals;
