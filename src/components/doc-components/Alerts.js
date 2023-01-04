import React from 'react';
import { Button, Tab } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import IconAlert from 'components/common/IconAlert';

const alertCode = `[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={variant} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
));`;

const linkCode = `[
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={variant} variant={variant}>
    This is a {variant} alert with{' '}
    <Alert.Link href="#!">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
));`;

const iconAlertCode = `function IconAlertDemo({ variant }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <IconAlert variant={variant} dismissible onClose={() => setShow(false)}>
        <p className="mb-0">This is a {variant} alert—check it out!</p>
      </IconAlert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

function Example() {
  return (
    <>
      {['success', 'danger', 'warning', 'info'].map(variant => (
        <IconAlertDemo key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </IconAlertDemo>
      ))}
    </>
  );
}

render(<Example />)`;

const dismissCodeOne = `function AlertDismissibleExample() {
  const [show, setShow] = useState(true);
  
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }`;

const dismissCodeTwo = `
function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}
`;
const additionalContentCode = `
<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>`;

const Alerts = () => (
  <>
    <PageHeader
      title="Alerts"
      description="Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/alerts`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Alerts on React-Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Alerts with icon" />
      <FalconComponentCard.Body
        code={iconAlertCode}
        scope={{ IconAlert }}
        language="jsx"
        noInline
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Basic Examples">
        <p className="mb-0">
          Alerts are available for any length of text, as well as an optional
          dismiss button. For proper styling, use one of the eight{' '}
          <code>variants</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={alertCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Links">
        <p className="mb-0">
          For links, use the <code>{` <Alert.Link> `}</code> component to
          provide matching colored links within any alert.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={linkCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Additional content">
        <p className="mb-0">
          Add the <code>dismissible</code> prop to add a functioning dismiss
          button to the Alert.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={additionalContentCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard multiSections>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header title="Dismissing">
          <p className="mb-0">
            Alerts can contain whatever content you like. Headers, paragraphs,
            dividers, go crazy.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={dismissCodeOne} language="jsx" />
      </Tab.Container>
      <Tab.Container defaultActiveKey="preview">
        <FalconComponentCard.Header>
          <p className="mb-0">
            You can also control the visual state directly which is great if you
            want to build more complicated alerts.
          </p>
        </FalconComponentCard.Header>
        <FalconComponentCard.Body code={dismissCodeTwo} language="jsx" />
      </Tab.Container>
    </FalconComponentCard>
  </>
);

export default Alerts;
