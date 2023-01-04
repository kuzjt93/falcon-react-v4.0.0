import React from 'react';
import FalconComponentCard from 'components/common/FalconComponentCard';
import PageHeader from 'components/common/PageHeader';

const DesignFile = () => (
  <>
    <PageHeader title="Design File" className="mb-3">
      <p className="mt-2 mb-0">
        We have designed Falcon initially directly with code. After receiving
        multiple requests from our customers for design files, we recreated the
        design in Figma.
      </p>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Body>
        <p>
          This is an early demo of Figma files. All the design is not yet
          recreated with Figma. But hopefully, we will port all the layouts in
          the next couple of weeks.
        </p>
        <h5>To play with the design:</h5>
        <ul>
          <li>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              Download Figma
            </a>
          </li>
          <li>
            Open the Figma link from the <code>README.md</code>
          </li>
          <li>
            The file is "read-only", so you'll have to duplicate it! Go to your
            grid of documents in Figma, click the ellipsis icon on{' '}
            <b className="text-primary text-600">Falcon (Distributed)</b>, and
            then "Duplicate" to create an editable version.
          </li>
        </ul>
      </FalconComponentCard.Body>
    </FalconComponentCard>
  </>
);

export default DesignFile;
