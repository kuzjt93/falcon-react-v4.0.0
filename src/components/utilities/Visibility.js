import React from 'react';
import PageHeader from 'components/common/PageHeader';
import FalconComponentCard from 'components/common/FalconComponentCard';
import FalconEditor from 'components/common/FalconEditor';

const exampleCode = `
<>
  <div className="visible">...</div>
  <div className="invisible">...</div>
</>
`;

const Visibility = () => (
  <>
    <PageHeader
      title="Visibility"
      description="Control the visibility, without modifying the display, of elements with visibility utilities."
      className="mb-3"
    />

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" noPreview>
        <p className="mt-2">
          Set the <code>visibility </code>of elements with our visibility
          utilities. These utility classes do not modify the display value at
          all and do not affect layout – .invisible elements still take up space
          in the page. Content will be hidden both visually and for assistive
          technology/screen reader users.
        </p>
        <p className="mb-0">
          Apply <code>.visible </code>or <code>.invisible </code>as needed.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body>
        <FalconEditor code={exampleCode} language="jsx" hidePreview />
      </FalconComponentCard.Body>
    </FalconComponentCard>
  </>
);

export default Visibility;
