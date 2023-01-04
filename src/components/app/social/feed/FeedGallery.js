import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import FalconLightBoxGallery from 'components/common/FalconLightBoxGallery';

const FeedGallery = ({ images }) => {
  return (
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
  );
};

FeedGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

export default FeedGallery;
