import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
<>
  <Form.Label>Example Range</Form.Label>
  <Form.Range />
</>
`;
const minmaxCode = `
<>
  <Form.Label>Example Range</Form.Label>
  <Form.Range 
    min='0'
    max='5'
  />
</>
`;
const stepsCode = `
<>
  <Form.Label>Example Range</Form.Label>
  <Form.Range 
    min='0'
    max='5'
    step="0.5"
  />
</>
`;

const Range = () => (
  <>
    <PageHeader
      title="Range"
      description="Use custom range inputs for consistent cross-browser styling and built-in customization."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/forms/range`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Range on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Overview" light={false}>
        <p className="mt-2 mb-0">
          Create custom <code> &lt;input type="range"&gt;</code> controls with{' '}
          <code>&lt;FormRange&gt;</code>. The track (the background) and thumb
          (the value) are both styled to appear the same across browsers. As
          only Firefox supports “filling” their track from the left or right of
          the thumb as a means to visually indicate progress, we do not
          currently support it.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Min and max" light={false}>
        <p className="mt-2 mb-0">
          Range inputs have implicit values for <code>min</code> and{' '}
          <code>max</code>—<code>0</code> and <code>100</code>, respectively.
          You may specify new values for those using the <code>min</code> and{' '}
          <code>max</code> attributes.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={minmaxCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Steps" light={false}>
        <p className="mt-2 mb-0">
          By default, range inputs “snap” to integer values. To change this, you
          can specify a <code>step</code> value. In the example below, we double
          the number of steps by using <code>step="0.5"</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={stepsCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Range;
