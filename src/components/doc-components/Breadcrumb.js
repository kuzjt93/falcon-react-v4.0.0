import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
<div>
  <Breadcrumb>
    <Breadcrumb.Item href="#" active>Home</Breadcrumb.Item>
  </Breadcrumb>
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#" active>
      Library
    </Breadcrumb.Item>
  </Breadcrumb>
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
  </Breadcrumb>
</div>
`;

const Breadcrumb = () => (
  <>
    <PageHeader
      title="Breadcrumbs"
      description="Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/breadcrumb`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Breadcrumb on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Breadcrumb;
