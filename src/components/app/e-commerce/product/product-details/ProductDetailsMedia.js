import React, { useEffect, useState } from 'react';
import { Badge, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const ProductDetailsMedia = ({ product: { files, isNew } }) => {
  let slider1;
  let slider2;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <div className="position-relative h-sm-100 overflow-hidden">
      {files.length === 1 && (
        <Image
          fluid
          className="fit-cover w-sm-100 h-sm-100 rounded"
          src={files[0].src}
          alt="product media"
        />
      )}
      {files.length > 1 && (
        <>
          <div className="product-slider">
            <Slider
              {...sliderSettings}
              asNavFor={nav2}
              ref={slider => (slider1 = slider)}
              className="slick-slider-arrow-inner h-100 full-height-slider"
            >
              {files.map(img => (
                <Image
                  fluid
                  rounded
                  className="fit-cover w-sm-100 h-sm-100"
                  src={img.src}
                  alt="product media"
                  key={img.id}
                />
              ))}
            </Slider>
          </div>
          <Slider
            slidesToShow={files.length > 5 ? 4 : files.length}
            asNavFor={nav1}
            ref={slider => (slider2 = slider)}
            swipeToSlide={true}
            focusOnSelect={true}
            centerMode={true}
            arrows={false}
            className="slick-slider-arrow-inner mt-1 mr-n1 mb-n1"
          >
            {files.map(img => (
              <div className="px-1 outline-none" key={img.id}>
                <Image
                  fluid
                  rounded
                  className="cursor-pointer fit-cover w-sm-100 h-sm-50"
                  src={img['src']}
                  alt="product media"
                />
              </div>
            ))}
          </Slider>
        </>
      )}
      {isNew && (
        <Badge
          pill
          bg="success"
          className="position-absolute top-0 end-0 me-2 mt-2 fs--2 z-index-2"
        >
          New
        </Badge>
      )}
    </div>
  );
};

ProductDetailsMedia.propTypes = {
  product: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.object),
    isNew: PropTypes.bool
  })
};

export default ProductDetailsMedia;
