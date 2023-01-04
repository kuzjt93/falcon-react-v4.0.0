import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import user1 from 'assets/img/team/1.jpg';
import user2 from 'assets/img/team/2.jpg';
import user3 from 'assets/img/team/3.jpg';
import user24 from 'assets/img/team/24.jpg';
import user25 from 'assets/img/team/25.jpg';
import generic3 from 'assets/img/generic/9.jpg';
import Flex from 'components/common/Flex';

const shapeCode = `
<Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={user1} height='200px' width='200px' />
    </Col>
    <Col xs={6} md={4}>
      <Image src={user2} roundedCircle height='200px' width='200px'  />
    </Col>
    <Col xs={6} md={4}>
      <Image src={user3} thumbnail height='200px' width='200px'  />
    </Col>
  </Row>
</Container>
`;

const fluidCode = `
<Image src={generic3} fluid />
`;
const aligningCode = `
  <Flex justifyContent="between">
    <Image src={user24} rounded className="w-25" />
    <Image src={user25} rounded className="w-25" />
  </Flex>
`;

const Images = () => (
  <>
    <PageHeader
      title="Images"
      description="Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/images`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Images on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Shape" light={false}>
        <p className="mt-2 mb-0">
          Use the <code>rounded</code>, <code>roundedCircle</code> and{' '}
          <code>thumbnail</code> props to customise the image.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={shapeCode}
        scope={{ user1, user2, user3 }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Fluid" light={false}>
        <p className="mt-2 mb-0">
          Use the <code>fluid</code> to scale image nicely to the parent
          element.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={fluidCode}
        scope={{ generic3 }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Aligning images" light={false} />
      <FalconComponentCard.Body
        code={aligningCode}
        scope={{ user24, user25, Flex }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default Images;
