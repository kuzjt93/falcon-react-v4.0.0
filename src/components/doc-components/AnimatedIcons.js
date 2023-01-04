import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import checkPrimaryLight from 'assets/img/animated-icons/check-primary-light.json';
import heart from 'assets/img/animated-icons/heart.json';
import infiniteLoop from 'assets/img/animated-icons/infinite-loop.json';
import loadingSquare from 'assets/img/animated-icons/loading-square.json';
import loading from 'assets/img/animated-icons/loading.json';
import shoppingList from 'assets/img/animated-icons/shopping-list.json';
import sleeping404 from 'assets/img/animated-icons/sleeping-404.json';
import starFeedback from 'assets/img/animated-icons/star-feedback.json';
import warningLight from 'assets/img/animated-icons/warning-light.json';
import FalconComponentCard from 'components/common/FalconComponentCard';
import PageHeader from 'components/common/PageHeader';
import Lottie from 'lottie-react';
import React from 'react';
import { Button } from 'react-bootstrap';

const exampleCode = `function Animated (){

  return (
    <Row className="align-items-center">
      <Col lg={4} className="d-flex justify-content-center">
        <Lottie animationData={checkPrimaryLight} loop={true} style={{height: '120px', width: '120px'}} />
      </Col>
      <Col lg={4} className="d-flex justify-content-center">
        <Lottie animationData={warningLight} style={{height: '130px', width: '130px'}} />
      </Col>
      <Col lg={4} className="d-flex justify-content-center">
        <Lottie animationData={heart} style={{height: '220px', width: '220px'}} />
      </Col>
    </Row>
  );
};`;

const loadingCode = `function Animated (){

  return (
    <Row className="align-items-center">
      <Col lg={4} className="d-flex justify-content-center">
        <Lottie animationData={infiniteLoop} loop={true}  style={{height: '120px', width: '120px'}} />
      </Col>
      <Col lg={4} className="d-flex justify-content-center">
        <Lottie animationData={loadingSquare} loop={true} style={{height: '130px', width: '130px'}} />
      </Col>
      <Col lg={4} className="d-flex justify-content-center">
        <Lottie animationData={loading} loop={true} style={{height: '220px', width: '220px'}} />
      </Col>
    </Row>
  );
};`;

const featuredAnimationCode = `function Animated (){
  
  return (
    <Row className="align-items-center">
      <Col lg={4} className="d-flex justify-content-center">
        <Lottie animationData={shoppingList} loop={true}  style={{height: '120px', width: '120px'}} />
      </Col>
      <Col lg={4} className="d-flex justify-content-center">
        <Lottie animationData={sleeping404} loop={true} style={{height: '130px', width: '130px'}} />
      </Col>
      <Col lg={4} className="d-flex justify-content-center">
        <Lottie animationData={starFeedback} loop={true} style={{height: '220px', width: '220px'}} />
      </Col>
    </Row>
  );
};`;

const AnimatedIcons = () => (
  <>
    <PageHeader
      title="Animated Icons"
      description="Falcon uses <strong>Lottie React</strong> for animated icons. <strong>Lottie React</strong> render After Effects animations natively in React.js"
      className="mb-3"
    >
      <Button
        href="https://github.com/Gamote/lottie-react"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Lottie React Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Example" light={false}>
        <p className="mb-0">
          You can update colors, animation duration, and other stuff from this
          excellent editor.
        </p>
        <Button
          href="https://lottiefiles.com/editor"
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Lottie Editor
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ Lottie, heart, checkPrimaryLight, warningLight }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Loading Animation Example"
        light={false}
      >
        <Button
          href="https://lottiefiles.com/loading"
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Get More Animation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={loadingCode}
        scope={{ Lottie, infiniteLoop, loading, loadingSquare }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Featured Animation Example"
        light={false}
      >
        <Button
          href="https://lottiefiles.com/featured"
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Get More Animation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={featuredAnimationCode}
        scope={{ Lottie, sleeping404, shoppingList, starFeedback }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default AnimatedIcons;
