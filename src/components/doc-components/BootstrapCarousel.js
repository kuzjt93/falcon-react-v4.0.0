import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import { reactBootstrapDocsUrl } from 'helpers/utils';
import generic6 from 'assets/img/generic/6.jpg';
import generic7 from 'assets/img/generic/7.jpg';
import generic8 from 'assets/img/generic/8.jpg';
import generic5 from 'assets/img/generic/5.jpg';
import generic9 from 'assets/img/generic/9.jpg';
import chat8 from 'assets/img/chat/8.jpg';

const exampleCode = `
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic6}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic7}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic8}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
`;
const customStyledCode = `
<Carousel
  className='theme-slider'
  nextIcon={
    <FontAwesomeIcon icon="angle-right" />
  }
  prevIcon={
    <FontAwesomeIcon icon="angle-left" />
  }
>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic6}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic7}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic8}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
`;

const controlledCode = `
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={generic6}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={generic7}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={generic8}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
`;

const withCaptionsCode = `
<Carousel className='light'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-white">First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={chat8}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-white">Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic9}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-white">Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
`;

const fadeCode = `
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic6}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic7}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic8}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
`;
const intervalCode = `
<Carousel className='light'>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={generic5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="text-white">First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={chat8}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="text-white">Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic9}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className="text-white">Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
`;

const darkCode = `
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic6}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic7}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={generic8}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
`;

const Carousel = () => (
  <>
    <PageHeader
      title="Carousels"
      description="A slideshow component for cycling through elements—images or slides of text—like a carousel."
      className="mb-3"
    >
      <Button
        href={`${reactBootstrapDocsUrl}/components/carousel`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Carousels on React Bootstrap
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Basic Example" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{ generic6, generic7, generic8, FontAwesomeIcon }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Styled Carousel" light={false} />
      <FalconComponentCard.Body
        code={customStyledCode}
        scope={{ generic6, generic7, generic8, FontAwesomeIcon }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="With Captions" light={false} />
      <FalconComponentCard.Body
        code={withCaptionsCode}
        scope={{ generic5, chat8, generic9 }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Controlled" light={false}>
        <p className="mt-2 mb-0">
          You can also <em> control </em> the Carousel state, via the
          <code> activeIndex </code> prop and <code> onSelect </code> handler.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={controlledCode}
        scope={{ generic6, generic7, generic8 }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Crossfade" light={false}>
        <p className="mt-2 mb-0">
          Add the <code>fade</code> prop to your carousel to animate slides with
          a fade transition instead of a slide.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={fadeCode}
        scope={{ generic6, generic7, generic8 }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Individual Item Intervals"
        light={false}
      >
        <p className="mt-2 mb-0">
          You can specify individual intervals for each carousel item via the{' '}
          <code>interval</code>
          prop.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={intervalCode}
        scope={{ generic5, chat8, generic9 }}
        language="jsx"
      />
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Dark varian" light={false}>
        <p className="mt-2 mb-0">
          Add <code>variant="dark"</code> to the <code>Carousel</code> for
          darker controls, indicators, and captions.
        </p>
      </FalconComponentCard.Header>
      <FalconComponentCard.Body
        code={darkCode}
        scope={{ generic6, generic7, generic8 }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default Carousel;
