import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import product1 from 'assets/img/products/1.jpg';
import product12 from 'assets/img/products/1-2.jpg';
import product13 from 'assets/img/products/1-3.jpg';
import product14 from 'assets/img/products/1-4.jpg';
import product15 from 'assets/img/products/1-5.jpg';
import product16 from 'assets/img/products/1-6.jpg';
import Slider from 'react-slick';

const exampleCode = `function slickSlider  ()  {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    {
      id: 1,
      src: product1
    },
    {
      id: 2,
      src: product12
    },
    {
      id: 3,
      src: product13
    },
    {
      id: 4,
      src: product14
    },
    {
      id: 5,
      src: product15
    },
    {
      id: 6,
      src: product16
    }
  ];

  return (
    <div className="position-relative h-sm-auto overflow-hidden">
      <Slider {...sliderSettings} className="slick-slider-arrow-inner">
        {images.map((img, index) => (
          <Image
            fluid
            rounded
            src={img['src']}
            alt=""
            key={img.id}
          />
        ))}
      </Slider>
    </div>
  );
};`;

const SlickCarousel = () => (
  <>
    <PageHeader
      title="Slick Carousel"
      description="Falcon-React uses <strong>React Slick</strong> for advance carousel experience. <strong>React slick</strong> is a carousel component built with React. It is a react port of  slick carousel"
      className="mb-3"
    >
      <Button
        href="https://react-slick.neostack.com/"
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Slick Carousel Documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
      </Button>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Basic Example" light={false} />
      <FalconComponentCard.Body
        code={exampleCode}
        scope={{
          product1,
          product12,
          product13,
          product14,
          product15,
          product16,
          Slider
        }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default SlickCarousel;
