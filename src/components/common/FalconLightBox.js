import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const FalconLightBox = ({ image, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        {children}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={image}
          onCloseRequest={() => setIsOpen(false)}
          reactModalStyle={{ overlay: { zIndex: 999999 } }}
          onImageLoad={() => {
            window.dispatchEvent(new Event('resize'));
          }}
        />
      )}
    </>
  );
};
FalconLightBox.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
export default FalconLightBox;
