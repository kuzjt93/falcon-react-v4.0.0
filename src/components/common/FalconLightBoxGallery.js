import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const FalconLightBoxGallery = ({ images, children }) => {
  const [imgIndex, setImgIndex] = useState(null);
  return (
    <div>
      {children(setImgIndex)}
      {imgIndex !== null && (
        <Lightbox
          mainSrc={images[imgIndex]}
          nextSrc={
            imgIndex + 1 > images.length ? undefined : images[imgIndex + 1]
          }
          prevSrc={imgIndex - 1 < 0 ? undefined : images[imgIndex - 1]}
          onCloseRequest={() => setImgIndex(null)}
          onImageLoad={() => {
            window.dispatchEvent(new Event('resize'));
          }}
          onMovePrevRequest={() =>
            setImgIndex((imgIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
          reactModalStyle={{ overlay: { zIndex: 999999 } }}
        />
      )}
    </div>
  );
};

FalconLightBoxGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.func.isRequired
};

export default FalconLightBoxGallery;
