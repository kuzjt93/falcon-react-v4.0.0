import React from 'react';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';
import FalconEditor from 'components/common/FalconEditor';

const commonCode = `.position-static
.position-relative
.position-absolute
.position-sticky
.fixed-top
.fixed-bottom`;

const arrangElementsCode = `<>
  <div className="position-relative bg-200 mb-4" style={{ height: '200px' }}>
    <div className="light p-3 bg-900 rounded-1 position-absolute top-0 start-0"></div>
    <div className="light p-3 bg-900 rounded-1 position-absolute top-0 end-0"></div>
    <div className="light p-3 bg-900 rounded-1 position-absolute top-50 start-50"></div>
    <div className="light p-3 bg-900 rounded-1 position-absolute bottom-50 end-50"></div>
    <div className="light p-3 bg-900 rounded-1 position-absolute bottom-0 start-0"></div>
    <div className="light p-3 bg-900 rounded-1 position-absolute bottom-0 end-0"></div>
  </div>
  <div className="position-relative light" style={{ height: '100px', width: '100px' }}>
    <div className="bg-900 rounded-1 text-white d-flex flex-center position-absolute all-0">
      .all-0
    </div>
  </div>
</>`;
const centerElementsCode = `<div className="position-relative bg-200" style={{height: '200px'}}>
  <div className="light p-3 bg-900 rounded-1 position-absolute top-0 start-50 translate-middle-x"></div>
  <div className="light p-3 bg-900 rounded-1 position-absolute top-50 start-0 translate-middle-y"></div>
  <div className="light p-3 bg-900 rounded-1 position-absolute top-50 start-50 translate-middle"></div>
  <div className="light p-3 bg-900 rounded-1 position-absolute top-50 end-0 translate-middle-y"></div>
  <div className="light p-3 bg-900 rounded-1 position-absolute bottom-0 start-50 translate-middle-x"></div>
</div>`;

const Position = () => (
  <>
    <PageHeader
      title="Position"
      description="Use these shorthand utilities for quickly configuring the position of an element."
      className="mb-3"
    />

    <FalconComponentCard>
      <FalconComponentCard.Header title="Common values" noPreview>
        <p className="mt-2">
          Quick positioning classes are available, though they responsive.
        </p>
        <p className="mb-0">
          The classes are named using the format{' '}
          <code>position-{'{option}'}</code> for
          <code>xs</code> and <code>position-{'{breakpoint}-{option}'}</code>{' '}
          for <code>sm</code>,<code>md</code>,<code>lg,</code>
          <code>xl</code>, and <code>xxl</code>.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body>
        <FalconEditor code={commonCode} hidePreview className="p-2" />
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Arrange Elements" light={false}>
        <p className="mb-0 mt-2">
          Arrange elements easily with the edge positioning utilities. The
          format is
          <code> {'{property}-{position}'} </code>
          has special utility class <code>.all-0 </code>to give full
          height/width to child element of parent element.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={arrangElementsCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Arrange Elements" light={false}>
        <p className="mb-0 mt-2">
          In addition, you can also center the elements with the transform
          utility classes
          <code>.translate-middle</code>, <code>.translate-middle-x </code>,
          <code>.translate-middle-y</code>. Responsive variations also exist for
          <code> transform-middle</code>, For example:
          <code>
            transform-{'{xxl|xl|lg|md|sm}'}-middle-{'{x|y}'}
          </code>
          .
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={centerElementsCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Position;
