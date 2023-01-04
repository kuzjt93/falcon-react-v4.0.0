import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
<Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
`;
const sizingCode = `
<>
  <Form.Select size="lg" className='mb-3'>
    <option>Large select</option>
  </Form.Select>
  <Form.Select className='mb-3'>
    <option>Default select</option>
  </Form.Select>
  <Form.Select size="sm">
    <option>Small select</option>
  </Form.Select>
</>
`;

const Select = () => (
  <>
    <PageHeader
      title="Select"
      description="Customize the native selects with custom CSS that changes the element’s initial appearance."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/forms/select`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Select on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body code={exampleCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Sizing" light={false}>
        <p className="mt-2 mb-0">
          You may also choose from small and large custom selects to match our
          similarly sized text inputs.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={sizingCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Select;
