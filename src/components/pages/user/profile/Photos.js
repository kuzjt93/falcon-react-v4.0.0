import React from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import FalconCardHeader from 'components/common/FalconCardHeader';
import images from 'data/gallery';
import FalconLightBoxGallery from 'components/common/FalconLightBoxGallery';

const Photos = () => {
  return (
    <Card className="mt-3">
      <FalconCardHeader title="Photos" light />
      <Card.Body>
        <FalconLightBoxGallery images={images}>
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
        </FalconLightBoxGallery>
      </Card.Body>
    </Card>
  );
};

export default Photos;
