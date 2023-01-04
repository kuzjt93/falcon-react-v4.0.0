import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';

const exampleCode = `
  <ProgressBar now={60} />
`;

const labelCode = `
  <ProgressBar now={60} label='60%' />;
`;
const heightCode = `
  <>
    <ProgressBar now={60} style={{ height:'1px' }} className='mb-3' />
    <ProgressBar now={60} style={{ height:'10px' }} className='mb-3' />
    <ProgressBar now={60} style={{ height:'20px' }} className='mb-3' />
  </>
`;
const bgCode = `
  <>
    <ProgressBar variant="success" now={30} className='mb-3' />
    <ProgressBar variant="info" now={40} className='mb-3' />
    <ProgressBar variant="warning" now={50} className='mb-3' />
    <ProgressBar variant="danger" now={60} className='mb-3' />
  </>
`;
const stripedCode = `
  <>
    <ProgressBar striped  variant="success" now={30} className='mb-3' />
    <ProgressBar striped  variant="info" now={40} className='mb-3' />
    <ProgressBar striped  variant="warning" now={50} className='mb-3' />
    <ProgressBar striped  variant="danger" now={60} className='mb-3' />
  </>
`;
const stackedCode = `
  <ProgressBar>
    <ProgressBar variant="primary" now={35} key={1} />
    <ProgressBar variant="success" now={20} key={2} />
    <ProgressBar variant="info" now={10} key={3} />
  </ProgressBar>
`;
const animatedCode = `
function AnimatedProgressBar() {
  const [animated, setAnimated] = useState(true);
  return (
    <>
      <ProgressBar animated={animated} now={45} />
      <Button variant="secondary" onClick={() => setAnimated(!animated)} className="mt-2">
        Toggle Animation
      </Button>
    </>
  );
}`;

const Progress = () => (
  <>
    <PageHeader
      title="React Bootstrap Progress Bars"
      description="Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/progress`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Breadcrumb on React Bootstrap
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
          <FalconComponentCard.Header title="Label" light={false} />
          <FalconComponentCard.Body code={labelCode} language="jsx" />
        </FalconComponentCard>
      </Col>
    </Row>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Height" light={false} />
      <FalconComponentCard.Body code={heightCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Background" light={false} />
      <FalconComponentCard.Body code={bgCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Striped" light={false} />
      <FalconComponentCard.Body code={stripedCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Stacked" light={false}>
        <p className="mt-2 mb-0">
          Nest <code>&lt;ProgressBar /&gt;</code>s to stack them.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={stackedCode} language="jsx" />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Animated" light={false}>
        <p className="mt-2 mb-0">
          Add <code>animated</code> prop to animate the stripes right to left.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body code={animatedCode} language="jsx" />
    </FalconComponentCard>
  </>
);

export default Progress;
