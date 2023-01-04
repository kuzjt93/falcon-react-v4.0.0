import React from 'react';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';

const exampleCode = `<>
  <Row>
    <Col xs={2} className="text-truncate">
      Praeterea iter est quasdam res quas ex communi.
    </Col>
  </Row>
  <span className="d-inline-block text-truncate" style={{ maxWidth: '150px' }}>
    Praeterea iter est quasdam res quas ex communi.
  </span>
</>`;

const TextTruncation = () => (
  <>
    <PageHeader
      title="Text Truncation"
      description="Truncate long strings of text with an ellipsis."
      className="mb-3"
    />

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example">
        <p className="mb-0 mt-2">
          For longer content, you can add a <code> .text-truncate </code> class
          to truncate the text with an ellipsis. <strong> Requires </strong>
          <code> display:inline-block </code> <strong>or</strong>{' '}
          <code>display:block</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default TextTruncation;
