import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
<Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
`;

const growingCode = `
<Spinner animation="grow" />
`;

const variantsCode = `
<>
  <Spinner animation="border" variant="primary" />
  <Spinner animation="border" variant="secondary" />
  <Spinner animation="border" variant="success" />
  <Spinner animation="border" variant="danger" />
  <Spinner animation="border" variant="warning" />
  <Spinner animation="border" variant="info" />
  <Spinner animation="border" variant="light" />
  <Spinner animation="border" variant="dark" />
  <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" />
</>
`;
const SizingCode = `
<>
  <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
</>
`;

const buttonsCode = `
<>
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="visually-hidden">Loading...</span>
  </Button>{' '}
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
</>
`;

const Spinners = () => (
  <>
    <PageHeader
      title="Spinners"
      description="Spinners can be used to show the loading state in your projects."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/spinners`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Spinners on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <Row className="mb-3 g-3">
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Basic Example" light={false} />
          <FalconComponentCard.Body code={exampleCode} language="jsx" />
        </FalconComponentCard>
      </Col>
      <Col lg={6}>
        <FalconComponentCard noGuttersBottom>
          <FalconComponentCard.Header title="Growing spinner" light={false} />
          <FalconComponentCard.Body code={growingCode} language="jsx" />
        </FalconComponentCard>
      </Col>
    </Row>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Variants" light={false}>
        <p className="mb-0 mt-2">
          All standard visual variants are available for both animation styles
          by setting the <code>variant</code> property. Alternatively spinners
          can be custom sized with the <code>style</code> property, or custom
          CSS classes.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={variantsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Sizing" light={false}>
        <p className="mb-0 mt-2">
          In addition to the standard size, a smaller additional preconfigured
          size is available by configuring the <code>size</code> property to{' '}
          <code>sm</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={SizingCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Buttons" light={false}>
        <p className="mb-0 mt-2">
          Like the original Bootstrap spinners, these can also be used with
          buttons. To use this component out-of-the-box it is recommended you
          change the element type to <code>span</code> by configuring the{' '}
          <code>as</code> property when using spinners inside buttons.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={buttonsCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Spinners;
