import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/FalconComponentCard';
import img1 from 'assets/img/generic/4.jpg';
import img2 from 'assets/img/generic/5.jpg';
import img11 from 'assets/img/generic/11.jpg';
import img3 from 'assets/img/gallery/4.jpg';
import img4 from 'assets/img/gallery/5.jpg';
import img5 from 'assets/img/gallery/3.jpg';
import FalconLightBoxGallery from 'components/common/FalconLightBoxGallery';
import FalconLightBox from 'components/common/FalconLightBox';

const galleryCode = `<FalconLightBoxGallery images={images}>
  {setImgIndex => (
    <Row className="g-2">
      <Col xs={6}>
        <Image
          src={images[0]}
          fluid
          rounded
          onClick={() => setImgIndex(0)}
        />
      </Col>
      <Col xs={6}>
        <Image
          src={images[1]}
          fluid
          rounded
          onClick={() => setImgIndex(1)}
        />
      </Col>
      <Col xs={4}>
        <Image
          src={images[2]}
          fluid
          rounded
          onClick={() => setImgIndex(2)}
        />
      </Col>
      <Col xs={4}>
        <Image
          src={images[3]}
          fluid
          rounded
          onClick={() => setImgIndex(3)}
        />
      </Col>
      <Col xs={4}>
        <Image
          src={images[4]}
          fluid
          rounded
          onClick={() => setImgIndex(4)}
        />
      </Col>
    </Row>
  )}
</FalconLightBoxGallery>`;

const simpleImageCode = ` <FalconLightBox image={image}>
  <Image src={image} fluid rounded width={300} />
</FalconLightBox>`;

const Lightbox = () => {
  const images = [img1, img2, img3, img4, img5];
  const image = img11;

  return (
    <>
      <PageHeader
        title="Lightbox"
        description="React-Falcon uses <strong>React Image Lightbox</strong> for lightbox. React Image Lightbox is a flexible lightbox component for displaying images in a React project."
        className="mb-3"
      >
        <Button
          href="https://github.com/frontend-collective/react-image-lightbox"
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          React Image Lightbox Documentation
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Gallery" />
        <FalconComponentCard.Body
          code={galleryCode}
          scope={{ FalconLightBoxGallery, images }}
          language="jsx"
        />
      </FalconComponentCard>

      <FalconComponentCard>
        <FalconComponentCard.Header title="Simple Image" />
        <FalconComponentCard.Body
          code={simpleImageCode}
          scope={{ FalconLightBox, image }}
          language="jsx"
        />
      </FalconComponentCard>
    </>
  );
};

export default Lightbox;
