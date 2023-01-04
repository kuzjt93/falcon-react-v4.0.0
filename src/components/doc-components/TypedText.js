import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import PageHeader from 'components/common/PageHeader';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';

const exampleCode = ` <h3 className="text-success fw-light">
  A smarter way to tell{' '}
  <span className="fw-bold">
    <Typewriter
      words={['new features', 'a new idea', 'an announcment']}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
  </h3>`;

const TypedText = () => (
  <>
    <PageHeader
      title="Typed Text"
      description="Falcon-React uses <strong>react-simple-typewriter</strong> for text typing animation."
      className="mb-3"
    >
      <Button
        href="https://github.com/awran5/react-simple-typewriter"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        React-simple-typewriter Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ Typewriter }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default TypedText;
