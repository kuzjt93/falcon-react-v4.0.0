import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import user24 from 'assets/img/team/24.jpg';
import user25 from 'assets/img/team/25.jpg';

const exampleCode = `
<Figure>
  <Figure.Image
    alt="figure"
    src={user24}
  />
  <Figure.Caption className='text-end'>
   A caption for the above image.
  </Figure.Caption>
</Figure>
`;

const captionAlignCode = `
<Figure>
  <Figure.Image
    alt="figure"
    src={user25}
    className='rounded'
  />
  <Figure.Caption className='text-end'>
   A caption for the above image.
  </Figure.Caption>
</Figure>
`;

const Figures = () => (
  <>
    <PageHeader
      title="Figures"
      description="Anytime you need to display a piece of content, like an image with an optional caption, consider using a <code>Figure</code>."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/figures`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Figures on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ user24 }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Caption Alignment" light={false}>
        <p className="mt-2 mb-0">
          Aligning the figure’s caption is easy with bootstrap{' '}
          <code> text utilities</code>
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={captionAlignCode}
        scope={{ user25 }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default Figures;
