import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import PageHeader from 'components/common/PageHeader';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import React from 'react';
import { Button, Tab } from 'react-bootstrap';

const exampleCode = `
function Example() {
  const [show, setShow] = useState(true);
  return (
    <Toast show={show} onClose={() => setShow(!show)}>
      <Toast.Header>
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  );
}`;
const transcluentCode = `
function Example() {
  const [show, setShow] = useState(true);
  return (
    <div className='bg-dark p-3'>
      <Toast show={show} onClose={() => setShow(!show)}>
        <Toast.Header className="text-bg-light">
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body className="text-bg-light">Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </div>
  );
}`;

const stackingCode = `
function Example() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  return (
    <ToastContainer className="position-static">
      <Toast show={showA} className="mb-2" onClose={() => setShowA(!showA)}>
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <Toast show={showB} onClose={() => setShowB(!showB)}>
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}`;

const placementCode = `
function Example() {
  const [position, setPosition] = useState('top-start');

  return (
    <>
      <div className="mb-3">
        <Form.Select
          id="selectToastPlacement"
          className="mt-2"
          onChange={(e) => setPosition(e.currentTarget.value)}
        >
          {[
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
          ].map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Form.Select>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="position-relative"
        style={{ minHeight: '240px' }}
      >
        <ToastContainer className="p-3" position={position}>
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}`;
const placementStackedCode = `
<div
  aria-live="polite"
  aria-atomic="true"
  className="position-relative"
  style={{ minHeight: '240px' }}
>
  <ToastContainer position="top-end" className="p-3">
    <Toast className="mb-2">
      <Toast.Header closeButton={false}>
        <strong className="me-auto">Bootstrap</strong>
        <small className="text-muted">just now</small>
      </Toast.Header>
      <Toast.Body>See? Just like this.</Toast.Body>
    </Toast>
    <Toast>
      <Toast.Header closeButton={false}>
        <strong className="me-auto">Bootstrap</strong>
        <small className="text-muted">2 seconds ago</small>
      </Toast.Header>
      <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
    </Toast>
  </ToastContainer>
</div>
`;

const autoHideCode = `
function AutoHideExample() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show Toast</Button>
      <div className="position-fixed bottom-0 end-0 p-3">
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header className='bg-primary text-white'>
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </div>
    </>
  );
}
`;

const Toasts = () => (
  <>
    <PageHeader
      title="Toasts"
      description="Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/toasts`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Toasts on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Stacking" light={false}>
        <p className="mb-0 mt-2">
          When you have multiple toasts, we default to vertically stacking them
          in a readable manner.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={stackingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard multiSections>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header title="Placement" light={false}>
          <p className="mb-0 mt-2">
            Place toasts by setting a <code>position</code> in a{' '}
            <code>ToastContainer</code>. The top right is often used for
            notifications, as is the top middle.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={placementCode} language="jsx" />
      </Tab.Container>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header light={false}>
          <p className="mb-0">
            For systems that generate more notifications, consider using a
            wrapping element so they can easily stack.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={placementStackedCode} language="jsx" />
      </Tab.Container>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Translucent" light={false}>
        <p className="mb-0 mt-2">
          Toasts are slightly translucent, too, so they blend over whatever they
          might appear over.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={transcluentCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Autohide" light={false}>
        <p className="mb-0 mt-2">
          A Toast can also automatically hide after X milliseconds. For that,
          use the <code>autohide</code> prop in combination with{' '}
          <code>delay</code> the prop to sepecify the delay. But be aware, that
          it will only trigger the <code>onClose</code> function, you have to
          set manually the show property.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={autoHideCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Toasts;
